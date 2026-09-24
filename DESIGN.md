---
name: Bhawana Capital
description: Public website of an RBI-registered NBFC. Official, calm, fact-first.
colors:
  bhawana-blue: "#164c8a"
  midnight-ink: "#0e2954"
  paper: "#ffffff"
  mist: "#f5f7fa"
  hairline: "#e6ecf2"
  slate-text: "#4f5b6e"
  wash: "#eaf0f7"
  field-border: "#e2e8f0"
  field-stroke: "#7f8a9b"
  ink-black: "#020817"
  on-blue: "#f8fafc"
  footer-text: "#d1d5db"
  error: "#dc2626"
  success: "#15803d"
typography:
  display:
    fontFamily: "Poppins, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.25
  headline:
    fontFamily: "Poppins, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.2
  section:
    fontFamily: "Poppins, sans-serif"
    fontSize: "clamp(1.875rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "Poppins, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
  lead:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  article:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.25
  hindi:
    fontFamily: "Poppins (Devanagari subset), Poppins, sans-serif"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  2xl: "16px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  2xl: "64px"
  3xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.bhawana-blue}"
    textColor: "{colors.on-blue}"
    rounded: "{rounded.md}"
    height: "44px"
    padding: "0 16px"
    typography: "{typography.label}"
  button-primary-large:
    backgroundColor: "{colors.bhawana-blue}"
    textColor: "{colors.on-blue}"
    rounded: "{rounded.md}"
    height: "44px"
    padding: "0 32px"
  button-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.midnight-ink}"
    rounded: "{rounded.md}"
    height: "44px"
    padding: "0 16px"
  button-outline-hover:
    backgroundColor: "{colors.wash}"
    textColor: "{colors.midnight-ink}"
  button-on-blue:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    height: "44px"
    padding: "0 32px"
  button-on-blue-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.bhawana-blue}"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.md}"
    height: "44px"
    padding: "8px 12px"
  card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.lg}"
    padding: "24px"
  card-alternate:
    backgroundColor: "{colors.mist}"
    rounded: "{rounded.lg}"
    padding: "24px"
  badge-pill:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.midnight-ink}"
    rounded: "{rounded.full}"
    padding: "8px 20px"
    typography: "{typography.label}"
  nav-link:
    textColor: "{colors.midnight-ink}"
    typography: "{typography.label}"
    height: "36px"
  nav-link-hover:
    textColor: "{colors.bhawana-blue}"
---

# Design System: Bhawana Capital

## Overview

**Creative North Star: "The Public Register"**

This site is the public record of a regulated lender, and it should read like one. The register is calm, orderly and official. It earns trust by laying out facts a reader can check (registration numbers, named officers, board-approved documents, published rates) rather than by selling. Visual quiet is the point: two blues, white paper, a soft grey band, and type that does the work.

Density is moderate. Marketing pages (home, Personal Loan, Salary Advance, KarmaLife) breathe with generous section spacing and centred headings. Document pages (policies, terms, privacy) tighten up: a short tinted header, then a narrow reading column of cards the reader moves through in order. Decoration is limited to line icons in the brand blue and a faint blue-to-navy wash behind page headers. Nothing on a page should look louder than the facts on it.

Motion is small and optional. Sections fade up 16 px as they scroll into view, menus drop in over 150 ms, and the hero carousel crossfades. Every effect is skipped when the visitor asks for reduced motion, and no content ever starts hidden before JavaScript runs.

**Key Characteristics:**
- Two blues on white: Bhawana Blue for anything you can act on, Midnight Ink for anything you read.
- Poppins for headings and titles only; Inter for everything else; Poppins's own Devanagari cut for Hindi.
- White cards with a faint shadow that deepens on hover when the card is clickable.
- Gently rounded corners (6–8 px) on controls and cards; pills and circles only for badges, icon wells and carousel dots.
- A single centred container with 16 px side gutters; long-form reading columns capped at 640 px (policies) and 768 px (blog).

## Colors

A restrained institutional palette: one action blue, one reading navy, and cool greys that never compete with either.

### Primary
- **Bhawana Blue** (`bhawana-blue`): the action colour. Primary buttons, links, line icons, active carousel dots, focus rings, and the full-width CTA bands at the bottom of pages. Tinted versions (5–20% opacity) make the document-header wash, icon wells, notes and badge borders.

### Secondary
- **Midnight Ink** (`midnight-ink`): the reading colour. All headings and titles, navigation labels, article body text, and the footer background. On the footer it carries white and light-grey text.

### Neutral
- **Paper** (`paper`): the page and card surface.
- **Mist** (`mist`): the alternate section band and the alternating policy-card background. Also the hover fill for menu items.
- **Wash** (`wash`): the quiet hover and selection surface for outline and ghost controls. It is a surface, not a second brand blue.
- **Hairline** (`hairline`): dividers, table rules and card borders on document pages.
- **Field Border** (`field-border`): default card and outline-button borders.
- **Field Stroke** (`field-stroke`): the outline of text inputs and textareas, dark enough (3.5:1 on Paper) that the field edge is visible.
- **Slate Text** (`slate-text`): body copy, subtitles and captions on light surfaces. It passes AA on Paper and Mist.
- **Ink Black** (`ink-black`): text typed into form fields.
- **On Blue** (`on-blue`): text on Bhawana Blue buttons.
- **Footer Text** (`footer-text`): secondary text and links on the Midnight Ink footer.

### Status
- **Error** (`error`) and **Success** (`success`): contact-form validation and send states only, on pale red and green tints. An invalid field's outline also turns Error.

### Named Rules
**The Two Blues Rule.** Bhawana Blue marks what you can act on (links, buttons) and the line icons; Midnight Ink carries page and section headings and reading text. The one sanctioned overlap: icon-led card titles on document pages take Bhawana Blue along with their icon. A navy link or a blue section heading breaks the reader's model of the page.

**The Token-Only Rule.** Colours come from the tokens above, never from Tailwind's raw palette (`blue-600`, `indigo-700`, `gray-700`). The footer's light greys and the form's red and green are the only accepted exceptions.

### Token names in code
The code (`src/app/globals.css`, one `@theme static` block) uses role names; this is the mapping:

| DESIGN.md | Code token | Tailwind utility |
|---|---|---|
| Bhawana Blue | `--color-primary` | `primary` |
| Midnight Ink | `--color-secondary` | `secondary` |
| Mist | `--color-neutralBg` | `neutralBg` |
| Hairline | `--color-neutralDivider` | `neutralDivider` |
| Slate Text | `--color-neutralText` | `neutralText` |
| Wash | `--color-accent` | `accent` |
| Field Border | `--color-border` / `--color-input` | `border` / `input` |
| Field Stroke | `--color-field-stroke` | `field-stroke` |
| Error / Success | `--color-error` / `--color-success` | `error` / `success` |

## Typography

**Display Font:** Poppins (with sans-serif fallback)
**Body Font:** Inter (with sans-serif fallback)
**Hindi:** Poppins Devanagari, loaded only on Hindi pages

**Character:** Poppins's geometric bold gives headings an official, signage-like confidence; Inter keeps long policy text neutral and legible at small sizes. The pairing is sturdy rather than stylish.

### Hierarchy
- **Display** (700, 36 px → 60 px, line-height 1.25): the homepage hero headline only.
- **Headline** (700, 30 px → 48 px): the page H1 on every other page, centred in the page header.
- **Section** (700, 30 px → 36 px): section headings on marketing pages and the blog index, centred, usually with a Slate Text subtitle beneath.
- **Title** (600, 20 px): card and policy-section titles, often led by a 24 px blue line icon.
- **Lead** (400, 18–20 px, Slate Text): hero and page-header subtitles.
- **Body** (400, 16 px, line-height 1.625, Slate Text): policy text, card copy, lists. Left-aligned, never justified.
- **Article** (400, 17 px, line-height 1.75, Midnight Ink): blog posts, in a 768 px column.
- **Label** (500, 14 px): buttons, navigation, badges, table headers.

### Named Rules
**The Poppins Speaks, Inter Explains Rule.** Poppins is for headings and titles only. Body text, labels, buttons and form fields are always Inter.

**The Left-Edge Rule.** Running text is left-aligned. Only headings, subtitles and short CTA blocks are centred.

## Layout

One centred container (Tailwind's `container`) with 16 px side gutters at every width. Inside it, content is capped by role:
- **640 px:** board-policy reading column (PDF card, flowchart, section cards), which holds about 72–75 characters per line.
- **896 px:** page-header copy, CTA content, and the Terms, Privacy, Return, Shipping and Refund pages.
- **768 px:** blog articles.
- **1152 px:** feature grids and multi-column sections.

Vertical rhythm comes from full-width bands that alternate Paper and Mist:
- **Marketing sections:** 64 px top and bottom, rising to 96 px from 768 px up.
- **Document page headers:** 48 px, rising to 64 px.
- **Document content:** 48–64 px.

When two bands on the same background meet, only one of them supplies the gap, so padding never stacks.

Grids collapse to one column below 768 px. Common two- and three-column grids use 32 px gutters, and lists of cards use 24 px gaps. The header switches from the mobile drawer to the desktop menu at 1024 px. Nothing may scroll sideways at 320 px.

## Elevation & Depth

Soft lift, as built. Surfaces rest on a faint shadow and rise when they can be clicked. Overlays (menus, the mobile drawer) sit highest. Page sections themselves are flat and separated by background tone, not shadow.

### Shadow Vocabulary
- **Rest** (`box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`): default cards.
- **Raised** (`box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`): policy-section cards and the sticky header once the page scrolls.
- **Lifted** (`box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`): hover on clickable cards, the PDF card, dropdown menus.
- **Floating** (`box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`): the mobile drawer, and hover on cards inside blue CTA bands.

### Named Rules
**The Soft Lift Rule.** A card deepens its shadow on hover only if it is clickable. A static card that lifts is lying about what it does. A card with one destination (product, blog post) is made clickable by stretching its existing link over the whole card, and its action is pinned to the card bottom so neighbours line up.

## Shapes

Gently rounded throughout:
- **6 px:** buttons and inputs.
- **8 px:** cards, menus, tables and images inside content.
- **16 px:** the hero slide image.

Full circles and pills are reserved for small things: carousel dots and arrows, icon wells behind feature icons, numbered steps, director photos, and the page-header badge. Borders are 1 px, in Field Border or Hairline, or white at 20% on blue bands. There are no sharp corners and no heavy outlines.

## Components

### Buttons
Plain and dependable: solid for the main action, outline for the alternative.
- **Shape:** gently rounded (6 px); at least 44 px tall. Labels may wrap onto a second line when text is enlarged or the screen is very narrow, rather than overflowing the screen. Size comes from the `size` prop, not per-page padding overrides.
- **Primary:** Bhawana Blue fill, On Blue label, 16 px side padding (32 px for large). Hover dims the fill to 90%.
- **Outline:** Paper fill, Field Border stroke, Midnight Ink label. Hover fills with Wash.
- **On blue bands (`inverse` variant):** transparent with a white stroke and white label. Hover inverts to a white fill with a Bhawana Blue label. Use the variant; never repaint `outline` by hand, since its white background shows through.
- **Focus:** a 2 px Bhawana Blue ring with a 2 px offset on every button, link and field.
- **Hero CTAs** also scale to 105% on hover and focus.

### Cards / Containers
- **Corner Style:** 8 px.
- **Background:** Paper; policy-section cards alternate Paper and Mist.
- **Shadow Strategy:** Rest by default, Lifted on hover when clickable (see Elevation & Depth).
- **Border:** 1 px Field Border; policy cards use a 15% Bhawana Blue border on Paper, or Hairline on Mist.
- **Internal Padding:** 24 px; larger standalone panels (KarmaLife contact cards, Salary Advance help panel) use 32 px.

### Inputs / Fields
- **Style:** at least 44 px tall, 6 px corners, 1 px Field Stroke outline, Paper fill, Inter text at 16 px on phones (below that, iOS Safari zooms the page on focus) and 14 px from 768 px up.
- **Focus:** a 2 px Bhawana Blue ring with a 2 px offset.
- **Error:** the outline turns Error red and a red message appears beneath, linked to the field for screen readers; focus moves to the first invalid field on submit.
- **Disabled:** 50% opacity, not-allowed cursor.

### Navigation
- **Desktop (from 1024 px):** a sticky white bar 64 px tall with a bottom border, which gains the Raised shadow once scrolled. Labels are 14 px Inter medium in Midnight Ink and turn Bhawana Blue on hover, with a 36 px hit area.
- **Dropdowns:** open by click, hover or ArrowDown, and close on Escape, an outside press, or a page scroll of more than 48 px. The menu is a white panel with 8 px corners and the Lifted shadow. Items get a Mist hover. A menu of more than eight items splits into two columns.
- **Mobile:** a right-side drawer 320 px wide (at most 85% of the screen). It behaves as a modal: focus is trapped, the page behind doesn't scroll, and Escape closes it. Sections are accordions; links have 40 px or larger rows.

### Hero Carousel
- Slide dots are round (12 px, Slate Text at 70%) with the current slide shown as a 24 px Bhawana Blue pill, so it reads by shape as well as colour.
- The visible slide headline is always the page's single H1.
- Arrow and pause buttons are 44 px circles; autoplay pauses on hover, focus, and for reduced motion.

### Document Header (signature)
The opening band of every policy, terms and privacy page:
- a faint diagonal wash from Bhawana Blue at 10% to Midnight Ink at 10%
- a centred pair of 40–48 px line icons (the first in Bhawana Blue, the second in Midnight Ink)
- the Headline H1
- a Lead subtitle
- an optional white pill badge with a small icon

It stays short, so the document starts on the first screen.

### PDF Card (signature)
The first card in each board policy's reading column. It has a blue-tinted icon well, the document title, a one-line description and the file name. Download PDF (primary) and Open PDF (outline) sit beneath, aligned with the title and stacking full-width on phones. From 768 px an embedded viewer follows; phones get the buttons only, since mobile browsers generally can't render PDFs in a frame.

### Policy Contents (signature)
Every board policy has an outline of its sections.
- **From 1024 px:** a sticky 240 px rail to the left of the reading column, headed "Contents". Entries are 14 px Slate Text on a 1 px Hairline rule. The section being read turns Bhawana Blue with a Bhawana Blue rule segment.
- **Below 1024 px:** a collapsible bordered panel after the PDF card, closed by default, showing "Contents (n)". It closes once a section is chosen.
- Numbered subsections ("3.1") are indented in the outline and render as H3 cards with slightly smaller titles.
- On the grievance page, the escalation flowchart follows the PDF card, before the text.

### CTA Band (signature)
The full-width Bhawana Blue band that closes most pages:
- a centred white heading and 80% white body text
- glass contact cards (10% white fill, 20% white border, background blur)
- on-blue buttons

## Do's and Don'ts

### Do:
- **Do** put facts (rates, registration numbers, officer names, dates) in full-strength text colour; never mute a fact to Slate Text at 80%.
- **Do** use Bhawana Blue for links, buttons and icons and Midnight Ink for page and section headings (the Two Blues Rule).
- **Do** keep every interactive element at 24 px or more in both directions, and buttons and fields at 44 px.
- **Do** give every page exactly one H1 and never skip a heading level; card titles take the level the page outline needs.
- **Do** mark Hindi content with `lang="hi"` so it picks up the Devanagari face.
- **Do** let only one of two same-coloured adjacent sections supply the gap between them.

### Don't:
- **Don't** justify text; policy and article text is left-aligned.
- **Don't** use Tailwind's raw palette colours or the old blue-to-indigo gradients (`from-blue-600 to-indigo-700`); use the tokens.
- **Don't** use Poppins for body text, buttons or form fields.
- **Don't** start content hidden until JavaScript runs (`opacity: 0` on first paint); reveal effects apply only below the fold, after hydration.
- **Don't** add a hover lift to a card that isn't clickable.
- **Don't** introduce a third brand colour; accents come from tints of Bhawana Blue.
