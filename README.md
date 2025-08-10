
# jome.gg — Next.js + Netlify CMS

Built for OnlyJome. Brand colors: #c1e8fb (light), #082668 (dark), #fefefe (white).

## Quick Start

1. **Install**  
   ```bash
   npm i
   npm run dev
   ```

2. **Content Editing**  
   Deploy to Netlify, then visit `/admin` and enable Netlify Identity + Git Gateway.
   Add/modify items in:
   - `Warzone Loadouts`
   - `Battlefield 6 Loadouts`
   - `Deals & Codes`
   - `Blog`

3. **Build**  
   ```bash
   npm run build
   ```
   Exports static site to `out/` for Netlify hosting.

## GA4
- Replace `G-XXXXXXX` in `pages/_app.js` with your GA4 Measurement ID.

## ConvertKit
- Replace the placeholder action URL in the homepage form with your ConvertKit **Form ID** action URL.

## Contact Form
- Uses Netlify Forms. Submissions appear in your Netlify dashboard. Default contact: onlyjomebusiness@gmail.com

## Deploy to Netlify
- Create a new Netlify site from Git.
- Build command: `npm run build`
- Publish directory: `out`
- Enable Identity + Git Gateway for CMS login.
- Add domain `jome.gg` after you purchase it; Netlify will give DNS records.

## CMS Collections
Content files live in `/content/*` as Markdown with frontmatter. Collections are defined in `public/admin/config.yml`.

---

If you need help wiring Twitch/YouTube embeds or ConvertKit form IDs, ping me.
