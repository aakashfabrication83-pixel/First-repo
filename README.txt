# ACF Crane Fabricators website

## Files
- `index.html` — page structure and inline technical SVG artwork
- `styles.css` — full responsive visual design, animations and effects
- `script.js` — mobile navigation and WhatsApp enquiry form
- `input.css` — Tailwind CLI entry point
- `tailwind.config.js` — Tailwind theme configuration

## Quick preview
Keep `index.html`, `styles.css` and `script.js` in the same folder, then open `index.html` in a browser. The preview uses Tailwind's CDN and Google Fonts, so internet access is needed for those external assets.

## Before publishing
1. Open `script.js` and set `WHATSAPP_NUMBER` to the company's official number in international format, digits only. Example: `919876543210`.
2. Verify the address, services, business hours and contact details with the company.
3. Upload `index.html`, `styles.css` and `script.js` to the hosting website's `public_html` folder.

## Optional Tailwind CLI build
Install Node.js, then run in this folder:
```bash
npm install -D tailwindcss@3
npx tailwindcss -i ./input.css -o ./tailwind.css --config ./tailwind.config.js --minify
```
If using the compiled Tailwind file, add `<link rel="stylesheet" href="tailwind.css">` to the page and remove the Tailwind CDN script. The bespoke look and motion effects remain in `styles.css`.
