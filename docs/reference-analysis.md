# Wildanoel reference analysis

Inspected the rendered public homepage at https://wildanoel.dev/ on 2026-09-19, at desktop 1440 × 900, intermediate 1005 × 602, and mobile 375 × 812. No application bundles or original stylesheet source were read or copied.

## Page architecture and personality

Fixed capsule navigation; full-height portrait hero; editorial About; testimonial carousel; interactive stack; six accordion services; four selected projects; black contact and three-column footer. The visual language is playful and restrained: softly rendered colorful objects counterbalance black typography and extensive white space. The hero's central content is intentionally centered, while the decorative composition is asymmetric.

## Navigation

Approximately 1024px max-width, 16px from the top, 54px tall. Profile thumbnail and wordmark left, small links center, theme toggle and black CTA right. Capsule background and shadow become stronger on scroll. Active section uses a black pill. Mobile has brand, theme switch and circular menu button; an inset rounded dropdown contains the same destinations. Bug Bounty, Design and Router are separate original destinations and remain external links in this homepage recreation.

## Hero

Minimum viewport height, 112px top inset; vertically centered content. Introduction is 48px/48px Public Sans medium at desktop and 36px/40px on mobile. Creative Developer is 20px desktop and 18px mobile. Huge bold moving WILDANOEL type crosses the viewport behind the portrait. Portrait is about 240px desktop, 200px mobile, with white outline, shadow, rotating uppercase ring, and orange scroll button. Three colored overlapping circles accompany the client count. A pale lavender pill CTA sits below. Six transparent 3D image assets float near the corners and mid-sides; objects shrink substantially on mobile.

## Typography, tokens and layout

Public Sans for headings; Manrope for text. White #fff, ink #0a0a0a, muted #6b6b6b, orange approximately #ff6035, lavender CTA approximately #eeedff, electric blue CTA text. Main section titles 60px/60px, testimonial title 48px, footer heading 72px; mobile titles 36px. Heading tracking about -0.025em. Body 15–21px, line height 1.6. Containers: 896px testimonial/services; 1024px About/navbar; 1152px stack/projects/footer. 16px horizontal gutters. About padding 144px desktop/112px mobile; most sections 128px desktop/96px mobile. Borders subtle gray 1px; cards 32px radius; buttons fully rounded.

## Sections and interaction

- About: centered heading between small purple cube and blue pyramid; two equal prose columns; bottom row with CV contact CTA left and toolkit paragraph right. Stacks on mobile.
- Testimonial: 864px inner width, white bordered/shadowed 32px card, orange quote mark, 21px text, circular initial avatar and attribution; three dots and two circular arrows. Controls change quote and attribution.
- Stack: centered title and two-line description. Desktop split: four-column square tool grid left, description card right; mobile three-column grid above description. Selected tool is black with white label. Clicking updates the detail panel.
- Services: centered heading over six full-width numbered rows; orange numbers, 24px titles, hairline separators, circular plus controls. First row expanded initially; open control rotates to a cross and darkens. One expanded explanation at a time.
- Projects: heading left, introduction right; two-column grid of large rounded cards with 36px padding and 16:10 previews. Uppercase category/year row, circular arrow, 30px project title, 15px description and small outlined tags. Mobile becomes one column. Hover lifts the card and scales the preview.
- Contact/footer: near-black background. Orange uppercase label, 72px two-line CTA, white email pill. Divider, brand/description plus navigation and social columns, then copyright/credit row. Mobile stacks the brand and compresses the link columns.

## Motion and accessibility

Rebuild entrances and section reveals with Framer Motion; CSS handles slow continuous marquee, floating objects and rotating ring. Use shared 200–800ms cubic-bezier transitions, transform/opacity animation, keyboard-accessible native buttons and links, focus-visible outlines, accessible menu disclosure, and reduced-motion overrides. Improve the source's broken Illustrator image with a local text monogram. Keep all body content readable without JavaScript.

## Asset provenance

Publicly displayed portrait, 3D objects and project preview images were collected through the browser page-assets inventory. Tool marks are displayed Simple Icons SVG assets. Public Sans and Manrope are installed separately via Fontsource. Generic interface icons use Lucide. Original inline SVG interface code, original CSS and original JavaScript are not reused.
