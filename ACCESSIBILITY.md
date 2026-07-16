# Accessibility Guardrails (WCAG AA)

This project follows a practical WCAG Level AA baseline for all marketing pages.
Use this checklist before merging any HTML or CSS change.

## 1) Semantic Structure and Headings

Requirements:
- Use exactly one main content region with `<main>`.
- Keep global page structure with `<header>`, `<nav>`, `<main>`, and `<footer>`.
- Use sequential headings: `h1` then `h2`, then `h3` (do not skip levels).

Quick checks:
- Each page has one `h1`.
- No `h3` appears before an `h2` in reading order.
- Landmark tags are present and not replaced by generic `div` wrappers.

## 2) Image Alt Text

Requirements:
- Every `<img>` must include an `alt` attribute.
- Informational images: short, descriptive `alt` text.
- Decorative images: `alt=""` so screen readers ignore them.

Quick checks:
- No `<img>` without `alt`.
- Do not repeat nearby caption text word-for-word unless needed.

## 3) Color Contrast

AA thresholds:
- Normal text: minimum 4.5:1.
- Large text (18pt+ regular or 14pt+ bold): minimum 3:1.

Requirements:
- Verify text contrast against the actual background color/overlay.
- For text on images or gradients, add a solid overlay or stronger text color.

Quick checks:
- Test critical text pairs with a contrast tool before merge.
- Recheck hover and disabled states, not just default state.

## 4) Keyboard Navigation and Focus

Requirements:
- All links and buttons must have a clearly visible keyboard focus indicator.
- Do not remove outlines unless a stronger custom focus style is provided.
- Keep skip link support and menu keyboard behavior working.

Current expected behavior:
- Skip link appears on keyboard focus and jumps to `#main-content`.
- Mobile menu supports Escape to close.
- Focus stays inside the open menu when tabbing.

## Required Pattern for New Pages

When creating a new page:
1. Copy the shared focus-visible and skip-link styles from an existing page.
2. Include a skip link near the top of `<body>`.
3. Set `<main id="main-content" tabindex="-1">`.
4. Reuse the existing nav script pattern for keyboard-friendly menu behavior.

## Merge Checklist

- [ ] Landmarks present: header/nav/main/footer
- [ ] Heading levels are sequential
- [ ] All img tags have valid alt handling
- [ ] Contrast thresholds met (4.5:1 normal, 3:1 large)
- [ ] Focus visible on all interactive elements
- [ ] No `outline: none` without a replacement focus style
- [ ] Skip link and keyboard nav tested with Tab/Shift+Tab/Escape

## Suggested Manual Test (2 minutes)

1. Press `Tab` from the top of each page.
2. Confirm skip link is visible and works.
3. Continue tabbing through header links, menu toggle, and footer links.
4. Open menu with keyboard and verify focus trap + Escape close.
5. Verify focus indicator stays obvious at every step.
