PoliHack Frontend — Vite · React · JavaScript · SCSS · Ant Design

A fast, modern front-end starter for the PoliHack site. Built with Vite and React (JavaScript), styled with SCSS, and using Ant Design for production-ready UI components. Optimized for developer experience and quick deployments for the public site: https://polihack.osut.org

Key features

Vite-powered dev server and build pipeline (lightning-fast HMR)

React (JavaScript) codebase — no TypeScript required

Global and component SCSS for modular, maintainable styles

Ant Design for accessible, consistent UI components

Clean project layout ready for pages, components, and assets

Built with

- Vite

- React (JSX)

- SCSS / Sass

- Ant Design (antd)

Quick start
# clone
```
git clone [<repo-url>](https://github.com/osutcj/PoliHack)
cd PoliHack
```

# install
```
npm install
```

# dev server
```
npm run dev
```

# build for production
```
npm run build
```

# preview production build
```
npm run preview
```

Styling & Ant Design notes

Use SCSS files for global variables, mixins and component-level styles.

Ant Design components are used for UI building blocks — wrap or extend antd components with SCSS overrides where needed to match PoliHack branding.

Deployment

This project builds static assets ready to be served by any static host (right now, we are using Cloudflare), npm run build outputs optimized files to the dist/ folder.

Contributing

Fork the repo

Create a feature branch (git checkout -b feat/my-feature)

# Commit your changes 
```
git commit -m "[ MESSAGE ]"
```

Open a PR and describe your change

License

MIT in LICENSE.