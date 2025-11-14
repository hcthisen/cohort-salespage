import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const startButton = document.querySelector('[data-read-start]');
const statusElement = document.querySelector('[data-read-status]');
const textElement = document.querySelector('[data-read-text]');
const errorElement = document.querySelector('[data-read-error]');

if (startButton) {
  const config = resolveConfig(startButton);

  if (!config.supabaseUrl || !config.supabaseAnonKey) {
    renderError('Missing Supabase configuration. Please set SUPABASE_URL and SUPABASE_ANON_KEY.');
    startButton.disabled = true;
  } else if (!config.startReadWebhook) {
    renderError('Missing START_READ_WEBHOOK configuration.');
    startButton.disabled = true;
  } else {
    const supabase = createClient(config.supabaseUrl, config.supabaseAnonKey, {
      auth: {
        persistSession: true,
      },
    });

    startButton.addEventListener('click', () => {
      startReadingFlow({ supabase, webhookUrl: config.startReadWebhook }).catch(err => {
        console.error('Unexpected error starting read flow', err);
        renderError('Something went wrong while preparing your reading session. Please try again.');
        resetButton();
      });
    });
  }
}

function resolveConfig(button) {
  const globalEnv = window.__ENV || window.ENV || {};

  return {
    supabaseUrl:
      button.dataset.supabaseUrl ||
      globalEnv.SUPABASE_URL ||
      window.SUPABASE_URL ||
      '',
    supabaseAnonKey:
      button.dataset.supabaseAnonKey ||
      globalEnv.SUPABASE_ANON_KEY ||
      window.SUPABASE_ANON_KEY ||
      '',
    startReadWebhook:
      button.dataset.startReadWebhook ||
      globalEnv.START_READ_WEBHOOK ||
      window.START_READ_WEBHOOK ||
      '',
  };
}

async function startReadingFlow({ supabase, webhookUrl }) {
  clearMessages();
  disableButton();
  renderStatus('Creating your reading session…');

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    console.error('Error fetching Supabase user', userError);
    renderError('Unable to confirm your account. Please refresh and try again.');
    resetButton();
    return;
  }

  if (!user) {
    renderError('You need to be signed in to start reading.');
    resetButton();
    return;
  }

  const { data: createdRead, error: insertError } = await supabase
    .from('reads')
    .insert({
      user_id: user.id,
    })
    .select()
    .single();

  if (insertError || !createdRead) {
    console.error('Failed to create read record', insertError);
    renderError('Could not start your reading session. Please try again.');
    resetButton();
    return;
  }

  const readId = createdRead.id;

  const webhookResponse = await triggerWebhook(webhookUrl, readId);

  if (!webhookResponse.ok) {
    console.error('Webhook call failed', webhookResponse.status, webhookResponse.statusText);
    await setReadStatus(supabase, readId, 'ERROR');
    renderError('Generation failed – please try again.');
    resetButton({ restoreText: true });
    return;
  }

  renderStatus('Generating your reading text…');

  const pollResult = await pollForReadText(supabase, readId, {
    intervalMs: 2000,
    timeoutMs: 20000,
  });

  if (pollResult.status === 'success') {
    renderStatus('All set! Start reading the text below.');
    renderText(pollResult.record.text || '');
    resetButton({ restoreText: true });
  } else {
    renderError('Generation failed – please try again.');
    resetButton({ restoreText: true });
  }
}

async function triggerWebhook(webhookUrl, readId) {
  try {
    return await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: readId }),
    });
  } catch (error) {
    console.error('Error calling webhook', error);
    return new Response(null, { status: 500, statusText: 'Network error' });
  }
}

async function pollForReadText(supabase, readId, { intervalMs, timeoutMs }) {
  const startedAt = Date.now();

  while (Date.now() - startedAt < timeoutMs) {
    const { data: record, error } = await supabase
      .from('reads')
      .select('id, text, status')
      .eq('id', readId)
      .maybeSingle();

    if (error) {
      console.error('Failed to fetch read record during polling', error);
      return { status: 'error' };
    }

    if (record) {
      const status = (record.status || '').trim().toUpperCase();

      if (status === 'OK' && record.text) {
        return { status: 'success', record };
      }

      if (status.startsWith('ERR') || status === 'FAILED' || status === 'FAIL') {
        return { status: 'error', record };
      }
    }

    await wait(intervalMs);
  }

  await setReadStatus(supabase, readId, 'ERROR');
  return { status: 'timeout' };
}

async function setReadStatus(supabase, readId, status) {
  try {
    const normalized = typeof status === 'string' ? status.toUpperCase() : status;
    await supabase
      .from('reads')
      .update({ status: normalized })
      .eq('id', readId);
  } catch (error) {
    console.error('Unable to update read status', error);
  }
}

function wait(duration) {
  return new Promise(resolve => setTimeout(resolve, duration));
}

function renderStatus(message) {
  if (statusElement) {
    statusElement.textContent = message;
    statusElement.classList.remove('hidden');
  }
  if (errorElement) {
    errorElement.textContent = '';
    errorElement.classList.add('hidden');
  }
}

function renderText(text) {
  if (textElement) {
    textElement.textContent = text;
    textElement.classList.remove('hidden');
  }
}

function renderError(message) {
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.classList.remove('hidden');
  }
  if (statusElement) {
    statusElement.textContent = '';
    statusElement.classList.add('hidden');
  }
}

function clearMessages() {
  if (statusElement) {
    statusElement.textContent = '';
    statusElement.classList.add('hidden');
  }
  if (errorElement) {
    errorElement.textContent = '';
    errorElement.classList.add('hidden');
  }
  if (textElement) {
    textElement.textContent = '';
    textElement.classList.add('hidden');
  }
}

function disableButton() {
  if (!startButton) return;
  startButton.dataset.originalText = startButton.dataset.originalText || startButton.textContent || '';
  startButton.disabled = true;
  startButton.classList.add('opacity-70', 'cursor-not-allowed');
  startButton.textContent = 'Preparing…';
}

function resetButton({ restoreText } = { restoreText: true }) {
  if (!startButton) return;
  startButton.disabled = false;
  startButton.classList.remove('opacity-70', 'cursor-not-allowed');
  if (restoreText && startButton.dataset.originalText) {
    startButton.textContent = startButton.dataset.originalText;
  } else if (restoreText) {
    startButton.textContent = 'Start reading';
  }
}
