1. Strategic overview

Goal:
Get visitors to click the main CTA → land on Stripe checkout link → buy access to the cohort.

Core principles:

Clarity over cleverness: visitors must instantly know what this cohort is about, who it’s for, what they get, and what to do next.

Premium aesthetic: dark, cinematic, minimal, with tasteful motion (no cheap, noisy effects).

Authority & proof early: social proof and credibility close to the top (Frank Kern / Sabri Suby style).

One primary action: “Apply / Enroll / Join the Cohort”. Everything should funnel towards that CTA.

2. Visual styling system
2.1 Color palette (dark, rich, expensive)

Background base: near-black

#02030A (page background)

#050814 (section panels / cards)

Primary accent: pick one “electric” color

Example: electric blue #3B82F6 or neon purple #A855F7

Secondary accent: a desaturated complementary

Example: teal #14B8A6 or violet #6366F1

Text:

Main: #F9FAFB (almost white)

Muted: #9CA3AF (for secondary copy)

Borders / dividers:

Soft lines: #111827 with 1px lines and subtle gradients (feel like premium “card edges”)

Effects:

Gradient strokes, light glows behind headings, very subtle glassmorphism for cards (semi-transparent with blur).

Direction for the LLM later: “Use Tailwind custom config to set a dark palette and a primary accent, and use gradients like bg-gradient-to-tr from-[#3B82F6]/40 via-transparent to-[#A855F7]/40 behind hero content.”

2.2 Typography

Think “tech luxury / boutique agency”:

Heading font: Bold, geometric sans or modern display (e.g. similar to “Space Grotesk / Monument Grotesk style”).

Body font: Clean, humanist sans (similar to “Inter / SF Pro / Neue Haas”).

Styling:

H1: 48–64px on desktop, 32–40px on mobile, tight line-height (~1.05–1.1)

H2: 32–40px, clear hierarchy under H1

Body: 16–18px with 1.6–1.8 line-height

Use letter-spacing slightly tightened on headings, default for body.

2.3 Layout & composition

Max content width: ~1120–1200px, centered.

Big vertical rhythm: 80–120px between major sections on desktop, 60–80px on mobile.

Consistent grid:

12-column grid on desktop; single column on mobile.

Cards & columns align to this grid to keep everything “expensive-looking”.

2.4 Imagery style

Since this is a “frame,” use generic but premium styles:

Abstract dark 3D shapes (spheres, ribbons, glassy shards)

Network / particles / flowing lines

Soft glow gradients behind key content

Minimal photography unless you have strong personal/brand imagery

3. Page structure & order (conversion-focused)

This is the funnel flow (like what Kern/Suby would do):

Sticky nav + Floating CTA

Hero section with animated background

Authority & logos / “As seen in” & personal positioning

Big promise & outcomes (“Here’s what this cohort will do for you”)

Who this is for / not for

How the cohort works (format, timeline, expectations)

Curriculum / modules overview

Case studies & testimonials (social proof)

Offer stack & pricing

FAQs (objection handling)

Urgency & final CTA

Let’s define each section from a structure point of view.

3.1 Sticky Nav + Floating CTA

Purpose: Keep a “Join Cohort” button visible at all times.

Logo (simple text or mark)

Minimal nav links: “Curriculum”, “Proof”, “FAQ”

Primary button: “Join the Cohort” → Stripe link

On scroll: background becomes slightly more opaque with a soft shadow.

Tailwind-wise: fixed top, backdrop-blur, dark overlay, z-50.

3.2 Hero Section (with animated background)

Purpose: Immediately communicate the big promise, who it’s for, and give a way to join.

Content frame:

Small upper label: “Live 6-week cohort” / “Advanced [topic] cohort”

H1 headline: Outcome-focused, bold.

Subheading: 2–3 lines, clarifying who this is for & what’s unique.

3 short bullet benefits (with small icons)

Primary CTA button: “Join the Cohort” (Stripe link)

Secondary CTA: “See the Curriculum” → scrolls down.

Trust badge row (e.g., “Limited spots”, “Money-back guarantee”, “Starts [DATE]”)

Layout:

Two-column on desktop:

Left: copy + CTAs

Right: visual — abstract animation canvas, Lottie, 3D art or subtle motion graphic

Single column on mobile (visual under CTA).

Animated background direction (details in section 6).

3.3 Authority & Proof Strip

Purpose: Immediately build trust.

Elements:

Short line: “Trusted by founders, marketers and operators from…”

Logo strip (placeholders)

Optionally: 1–2 mini-stat blocks:

“X+ students trained”

“Average ROI after Y weeks”

3.4 Big Promise & Outcomes

Purpose: Expand on the hero promise with concrete, measurable outcomes.

Structure:

Section title: “What You’ll Walk Away With”

3–6 outcome cards (grid)

Each card:

Title (outcome)

2–3 lines explaining what that actually looks like in real life.

3.5 Who This Is For / Not For

Purpose: Qualify and repel. Feels premium and selective.

Structure:

Title: “Is This Cohort Right For You?”

Two columns:

For you if… (3–5 bullets)

Not for you if… (3–5 bullets)

Optional: a short “We’re not for everyone” statement to support premium positioning.

3.6 How the Cohort Works (Format, Timeline)

Purpose: Explain the mechanism and logistics.

Structure:

Title: “How the Cohort Works”

A 3–5 step horizontal timeline or vertical flow:

Apply / enroll

Pre-work & onboarding

Weekly live sessions

Implementation / assignments

Support + community

Supportive copy:

Duration, call frequency, community platform, access length.

Small side box: “Time commitment: X hours/week”.

3.7 Curriculum / Modules Overview

Purpose: Deliver detail and perceived value.

Structure:

Title: “Inside the Curriculum”

Option A: Step-by-step weekly timeline

Option B: Module cards.

Each module card:

Week/Module number

Title

2–3 bullet points: key skills / deliverables.

3.8 Case Studies & Testimonials

Purpose: Social proof that the mechanism works.

Structure:

Title: “What Past Cohort Members Achieved”

Mix of:

Featured case study cards (before/after, metrics)

Quote-style testimonials

Optional screenshot strip (Slack/Discord/Twitter messages) using blurred backgrounds.

3.9 Offer Stack & Pricing

Purpose: Show value clearly and justify price.

Structure:

Title: “Everything You Get When You Join”

Offer stack list:

Main elements (live calls, modules, resources, community, bonuses)

Visual “value stack”: each line shows item + value (optional if it fits your style).

Pricing block:

One main price (or payment options)

Guarantee statement.

Main CTA: “Join the Cohort” (Stripe link)

Secondary small note: “Secure checkout via Stripe. VAT added where applicable.”

3.10 FAQs (Objection Handling)

Purpose: Remove friction.

Structure:

Title: “Frequently Asked Questions”

FAQ accordions (5–10):

Time, experience level, refunds, support, recording access, etc.

3.11 Urgency & Final CTA

Purpose: Give a final nudge.

Structure:

Title: “Spots Are Limited for This Cohort”

Subheading: remind start date / scarcity (“We cap at X seats to keep it intimate”)

Final CTA button

Small trust line under button (refund, secure checkout, etc.)

4. Copy framework (what to ask the LLM to produce later)

You’ll fill all sections later, so here’s the framework to brief the LLM with.

4.1 Overall messaging sequence (classic direct-response structure)

Order:

BIG IDEA → PROBLEM → OLD WAY FAILS → NEW MECHANISM → PROOF → OFFER → URGENCY → RISK REVERSAL → CTA

Prompts you can use later (examples):

“Write an outcome-driven headline promising [primary result] for [target audience] in [time frame] without [major objection].”

“Write 3 benefit bullets that start with a verb and focus on tangible outcomes, not features.”

“Write a 2-paragraph story that describes the default painful reality of [target audience] and segues into why a cohort-based program is different.”

4.2 Hero copy elements

Headline formula:
[Achieve X] in [timeframe] without [painful tradeoff]

Subhead:
Clarifies who it’s for and the “mechanism” (live cohort, implementation, feedback).

Bullets:

Outcome 1 (improved metric)

Outcome 2 (skill/asset)

Outcome 3 (emotional benefit)

4.3 Outcomes section copy

Prompt:

“Write 4 outcome cards for a [type of cohort] targeting [audience]. Each card needs a punchy title, a one-sentence description, and a one-sentence tangible example (‘This means you can…’).”

4.4 Who it’s for / not for copy

Prompt:

“List 4 ‘This is for you if…’ bullets and 4 ‘This is not for you if…’ bullets, each framed around behavior, mindset or stage of business, not demographics.”

4.5 Cohort mechanism & curriculum copy

Prompt:

“Explain in 4–5 steps how this cohort works, from enrollment to graduation, with emphasis on implementation and accountability. Then outline a weekly curriculum for [duration], where each week has a theme and 3 bullet points.”

4.6 Offer & urgency copy

Prompt:

“Describe everything included in the cohort as an offer stack: live sessions, recordings, templates, community, bonuses. Then write a concise pricing explanation, urgency message (limited seats / deadline), and risk reversal (refund/guarantee).”

5. Tech stack & implementation

Everything should be doable with basic front-end tools:

5.1 Core stack

HTML5 for structure.

Tailwind CSS for styling (custom config with dark palette and font choices).

Vanilla JS for interactions + CTAs.

Optional animation libs:

GSAP for smooth animations & scroll triggers.

Lenis / similar for smooth scrolling (optional).

5.2 Components / partials

For maintainability, think in components (even if using plain HTML):

<Header /> with sticky nav

<Hero />

<SectionWrapper /> (common padding and max-width)

<OutcomeGrid />

<TestimonialGrid />

<FAQAccordion />

<Footer />

You can describe these semantically to another LLM (e.g. “Create a Hero component with 2-column layout and a background animation container, using Tailwind classes for padding and grid.”).

5.3 Stripe CTA integration

Front-end only:

All “Join” buttons are <a> tags with:

href="[STRIPE_CHECKOUT_URL]",

target="_blank",

rel="noopener noreferrer".

Optionally, attach click tracking if you add simple analytics later.

5.4 Performance & responsiveness

Lazy-load heavy animations (especially Lottie/Canvas).

Prefer CSS transforms and opacity (GPU-accelerated) over heavy layout changes.

Test at key breakpoints:

Mobile first (~375px)

Tablet (~768px)

Desktop (~1280px+)

6. Animation & motion direction (using public sources)

The key requirement: “LLM can get the animations (or create them) from public sources.”

So we’ll design it like this:

6.1 Hero background animation

Goal: A subtle, looping background that feels “alive” and premium, but doesn’t distract from headline text.

Implementation options (LLM can pick later):

Lottie animation (JSON)

Find public, commercially usable abstract dark gradient / particle / wave animations.

Position: absolutely positioned <div> behind hero content, full width/height.

Overlay with a dark gradient to keep text legible.

Canvas / WebGL particles (public snippet)

Use an open-source particle-field or flowing-lines demo.

Tweak:

Fewer particles

Low movement speed

Color = primary accent

Place it inside a <canvas> with reduced opacity.

Pure CSS animated gradient

Animated background-position on a gradient.

Combine with subtle blur and layer blending.

For the LLM later, you can say:

“Search for a public, commercially usable Lottie or canvas animation with a dark abstract particle or wave background. Integrate it as a looping background in the hero, keep animation subtle, and add a semi-transparent black overlay for readability.”

6.2 Microinteractions

Use small hover and scroll animations to make it feel polished:

Buttons:

Slight scale up +

Glow shadow matching accent color.

Cards:

Lift on hover (translateY(-2px), subtle shadow)

Border gradient on hover.

Nav:

Add shadow and slightly darker background after user scrolls past hero.

Implementable with Tailwind + small JS or CSS transitions.

6.3 Scroll-based reveals

Use IntersectionObserver or GSAP ScrollTrigger to:

Fade + slide cards upward as they come into view.

Stagger animations for lists (outcome cards, modules, testimonials).

Guideline: 200–300ms per element, 100ms stagger, easing like ease-out-cubic.

7. Section schema for future LLM implementation

You can give the next LLM a structured blueprint like this:

{
  "page_goal": "Sell cohort spots via Stripe checkout link",
  "primary_cta_label": "Join the Cohort",
  "primary_cta_url": "[STRIPE_LINK_PLACEHOLDER]",
  "theme": "dark_premium",
  "sections": [
    {
      "id": "hero",
      "type": "hero",
      "goal": "Communicate big promise and capture clicks to Stripe",
      "elements": [
        "eyebrow_label",
        "headline",
        "subheadline",
        "benefit_bullets",
        "primary_cta",
        "secondary_cta",
        "trust_badges",
        "background_animation"
      ]
    },
    {
      "id": "authority",
      "type": "logos_strip",
      "goal": "Build instant trust",
      "elements": ["headline", "logo_row", "mini_stats"]
    },
    {
      "id": "outcomes",
      "type": "cards_grid",
      "goal": "Show tangible outcomes",
      "elements": ["section_title", "outcome_cards"]
    },
    {
      "id": "fit",
      "type": "two_column_list",
      "goal": "Qualify and repel",
      "elements": ["title", "for_you_list", "not_for_you_list"]
    },
    {
      "id": "mechanism",
      "type": "timeline",
      "goal": "Explain how the cohort works",
      "elements": ["title", "steps_timeline", "time_commitment_box"]
    },
    {
      "id": "curriculum",
      "type": "modules_grid",
      "goal": "Show depth and structure of content",
      "elements": ["title", "module_cards"]
    },
    {
      "id": "proof",
      "type": "testimonials",
      "goal": "Provide evidence the cohort works",
      "elements": ["title", "case_study_cards", "quote_testimonials", "screenshot_strip"]
    },
    {
      "id": "offer",
      "type": "offer_stack",
      "goal": "Present price and offer clearly",
      "elements": ["title", "offer_items", "pricing_block", "guarantee_text", "primary_cta"]
    },
    {
      "id": "faq",
      "type": "accordion",
      "goal": "Handle objections",
      "elements": ["title", "faq_items"]
    },
    {
      "id": "final_cta",
      "type": "cta_banner",
      "goal": "Push final conversions",
      "elements": ["headline", "subheadline", "primary_cta", "trust_note"]
    }
  ]
}
