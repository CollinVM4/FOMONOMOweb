Website / Github pages for FOMO NOMO's landing page and Privacy Policy

Shared theme assets live in `assets/theme.css` and `assets/theme.config.js` so new pages can reuse the same colors, spacing, type scale, and Tailwind tokens.

Accessibility guidance for future changes lives in `ACCESSIBILITY.md`.

Start python testing server 
python -m http.server 8000
http://localhost:8000/

Icon helper
- Shared icon API is in assets/fomo-icons.js and is loaded by every .html page.
- Example usage in any inline script block:

	const iconEl = AssetIcon(FomoNomoIcons.coffeeIcon, { size: mediumLarge });
	document.getElementById('some-container').appendChild(iconEl);

- Size tokens: xSmall, small, medium, mediumLarge, large, xLarge.
- You can also use a number for custom size, for example { size: 28 }.

git commit --allow-empty -m "Trigger rebuild"
git push