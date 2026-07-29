# Agata Mac — Design System

**Agata Mac Corretora** is an insurance & health-plan brokerage (seguros, planos de saúde, benefícios corporativos) operating from Alphaville, Barueri–SP. Site: www.agatamacsaude.com.br. They position as a *consultive* broker — analysis and orientation first, sales second — across saúde empresarial, seguros corporativos, vida, automóvel, residencial, patrimonial and consórcio.

**Brand concept:** "Inteligência para proteger o que importa." Territory: technical knowledge + human service + data intelligence, positioned above traditional/generic brokers.

**Sources provided:**
- Brand brief (pasted, Portuguese) — full color/type/spacing/component/voice spec, used as the source of truth for all tokens below.
- `uploads/agatamaclogo - cópia.png` — the only real logo file (186×61px, low-res). Copied to `assets/logo.png`. **No vector master exists** — flag to the user: request an SVG/AI/EPS master before print or large-format use.
- `uploads/ChatGPT Image...png` — an AI-generated mockup of a hypothetical design system sheet. Used only as directional reference (it already reflects the brief), not copied as source-of-truth pixels.

No codebase or Figma file was attached, so components below are an original, from-scratch standard set sized to the brand's needs (not a copy of an existing product).

## Content fundamentals
- **Tone:** consultive, not salesy — explain before selling. Lead answers with the conclusion, then detail ("A quantidade mínima depende da operadora... A Agata Mac analisa o CNPJ...").
- **Address:** direct, plain language, no heavy jargon; short sentences, objective titles ("Solicitar análise", "Iniciar cotação").
- **Casing:** sentence case everywhere; uppercase reserved for short labels/overlines/categories only — never full paragraphs or long questions.
- **No emoji.** Icons carry meaning instead.
- **Numbers/claims:** only real, sourced data — otherwise labelled explicitly as "estimativa" / "cenário simulado". Never promise savings without analysis.
- **CTAs:** one primary action per piece — "Solicitar análise", "Iniciar cotação", "Falar com um especialista", "Comparar opções", "Falar no WhatsApp".

## Visual foundations
- **Color:** azul-marinho (`#082B3C`) is the institutional anchor — headers, footers, premium surfaces. Ciano (`#2AA8E5`) signals technology/agility (links, active states, icons). Dourado (`#E5B64C`) is a *small-area* commercial/premium accent (never a large fill) — CTA-on-dark, savings figures. Verde (`#35A66F`) is reserved for health/success semantics, never as brand primary. Laranja/Vermelho/Roxo are semantic (warning/danger/AI) only.
- **Type:** Sora (display/headings, 600–700) + Inter (body/UI, 400–600). Both on Google Fonts.
- **Backgrounds:** mostly white/`--surface-alt` with generous whitespace; azul-marinho for premium/institutional blocks; no photographic full-bleed backgrounds behind text; subtle textures (dot grids, thin connection lines, arcs) at 3–8% opacity only, never dominant.
- **Imagery:** natural corporate lifestyle photography — real people, soft natural light, moderate saturation, optional 10–30% navy overlay. Avoid stock clichés (fake handshakes, empty-screen pointing). No illustration style is defined generically — use flat/outline vector illustration sparingly for education content only (FAQ, onboarding), never as the primary brand device.
- **Motion:** implied to be subtle only — no bounce, no heavy easing described in brief; treat as fade/opacity + slight elevation on hover, fast (150ms-ish) transitions.
- **Hover/press:** buttons darken one step (e.g. brand-900→800) or shift to a slightly deeper tone; secondary buttons tint toward brand-50 background; focus ring is a 3px cyan-200 outline — never remove focus without replacing it.
- **Shadows:** soft, blue-tinted only (`rgba(8,43,60, .08/.10/.14)`) — never black, never heavy/3D.
- **Radius:** 12px is the default (buttons, cards); 16px for hero/primary cards; 24px for campaign blocks; full-pill for badges/tags/chips.
- **Cards:** white fill, 1px `--border-default` (or none + shadow), 24–32px padding, icon in a 40–48px rounded container, title + short description + CTA. Premium variant: navy fill, white text, gold/white CTA.
- **Borders:** 1px `--color-neutral-200` default; cyan on active/focus; red on error.
- **Transparency/blur:** minimal — occasional translucent white over the navy premium gradient for icon containers (~12% opacity); no heavy glassmorphism.
- **Gradients:** used sparingly as accent panels only (institutional navy→teal, tech navy→cyan, premium gold→light gold) — never on large text blocks, never multi-hue.

## Iconography
No icon font or SVG set was supplied with the source material. The brief specifies **Lucide Icons** (or Phosphor / Material Symbols Rounded as alternates) as the reference library: outline style, 1.75–2px uniform stroke, rounded joins, 24×24 base grid, sizes 16/20/24/32/48px. Components/cards in this system load Lucide from CDN (`unpkg.com/lucide`) rather than bundling copied SVGs, since none were provided as source assets. No emoji usage. WhatsApp uses its official mark unmodified, never redrawn.

## Intentional additions
No source component library was attached, so the full set below (Button, Input/Select, Alert/Badge/Tag, ProductCard/IndicatorCard/ComparisonCard, ComparisonTable, Timeline, FAQAccordion, Navbar, Avatar) is an original, brand-brief-driven set — not a copy of an existing inventory.

## Components
- **Button** (`components/buttons/`) — primary, action (gold), secondary, tertiary, whatsapp, disabled.
- **Input / Select** (`components/forms/`) — labeled fields with default/success/error/disabled states.
- **Alert / Badge / Tag** (`components/feedback/`) — info/success/warning/danger/ai semantic feedback.
- **ProductCard / IndicatorCard / ComparisonCard** (`components/cards/`) — insurance-line card, KPI card, recommended-plan card.
- **ComparisonTable** (`components/data/`) — plan comparison rows with a recommended highlight.
- **Timeline / FAQAccordion** (`components/navigation/`) — process-step tracker, single-open FAQ accordion.
- **Navbar / Avatar** (`components/navigation/`) — institutional top nav, consultant/client avatar.

## UI kits
- `ui_kits/website/` — institutional site: hero, product lines, comparativo, FAQ, footer.
- `ui_kits/client-portal/` — client-area dashboard: policy status, timeline, documents.

## Folder index
- `styles.css` — root stylesheet, imports everything in `tokens/`.
- `tokens/` — colors, typography, spacing, effects (radius/shadow/gradient).
- `assets/logo.png` — the only real brand asset provided (low-res, no vector master).
- `guidelines/` — foundation specimen cards (colors, type, spacing, radius/shadow, gradients, icons, logo).
- `components/` — reusable primitives, grouped by concern.
- `ui_kits/` — full-screen product recreations.
- `SKILL.md` — portable skill file for Claude Code / other agents.
