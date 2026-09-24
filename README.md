# RP Games website

A responsive, static website for RP Games. It needs no build step or paid hosting service. All layout and image files are included; the only external resource is Google Fonts, with local font fallbacks.

## Publish with GitHub Pages

1. Create a GitHub repository for the site.
2. Upload **the contents of this folder** to the repository root, including `index.html`, `assets/`, `contact/`, `privacy-policy/`, and `.nojekyll`. Do not upload only the ZIP file.
3. Open the repository's **Settings → Pages**. Choose **Deploy from a branch**, select `main` and `/(root)`, then save.
4. GitHub will show the public URL in the Pages settings once publication finishes.

See [GitHub's publishing guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) for current settings and custom domain instructions.

The site uses relative links, so it works at either `username.github.io` or `username.github.io/repository-name/`.

## Before replacing the old site

- The Contact page displays `contact@rpgamesltd.com`. Its form opens a draft in the visitor's email app. There is no server-side form or inbox in GitHub Pages; visitors must press Send in their email app. You can use a form service later if you want submissions directly from the browser.
- The privacy page preserves the meaning of the policy on the original site and improves presentation. Check its statements against the current versions of your games, especially SDKs, ads, data collection, and the business contact details, before using it as the privacy URL in app stores.
- The three showcased titles and their artwork are fictional game concepts. They are clearly marked as concepts on the public page and are not presented as released games.

## Edit locally

Open `index.html` in a browser, or serve this folder with `python3 -m http.server 8000`. Styles are in `assets/styles.css`; the mobile menu and footer year are in `assets/site.js`.
