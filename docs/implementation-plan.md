# Portfolio recreation implementation plan

Goal: independently implement the visible Wildanoel homepage in Next.js, React, TypeScript, Tailwind CSS and Framer Motion.

Architecture: server-rendered page composes focused section components; client islands own menu/theme, viewport reveals, tool selection, testimonials and accordion state. Portfolio content is typed in data/portfolio.ts. Local optimized images prevent reliance on the original server at runtime.

1. Inspect rendered reference at desktop and mobile and record tokens, page architecture, interactions and asset provenance.
2. Configure Next.js/TypeScript/Tailwind, install exact dependency versions, collect displayed image assets, establish shared CSS tokens and animation variants.
3. Implement global layout, static hero and shapes, responsive navbar with theme and scroll tracking, and editorial About.
4. Implement carousel, accessible tool selection and single-open service accordion. Verify state changes through browser interaction.
5. Implement project cards, email contact CTA and footer, preserving observed layout and real destination links.
6. Compare browser render at desktop and mobile against reference. Correct spacing, fonts, proportions and overflow.
7. Check all requested viewport widths, menu and keyboard behavior, theme persistence, image loading, links, browser console, reduced-motion styles, lint, TypeScript and production build.
8. Write README, source compendium with every authored file path/full code, asset provenance and final QA checklist; provide local preview.
