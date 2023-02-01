This repo hosts the "Theme Tools" website, which contains a bunch of... tools. Tools for making themes and using theme hooks in components.

## Develop locally

Clone the repo, `npm install`, then run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Hot module reloading is enabled, so pages you're editing will refresh automatically when you save changes to the source code.

## Deploy to Github Pages

After merging changes to the master branch run:

```bash
npm run deploy
```

Commit all the changes to the `out/` directory and push to Github master branch.

## Deploy to dokku

After merging changes to the master branch run:

```bash
npm run dokku-deploy
```

The command will take a little while. Once it is done you won't have anything to commit — the updated site will be available on http://theme.deoprototypes.com.
