This repository simulates what we have on front-apps. It's a mono-repository with one application (`apps/front-office/`), and one package (`packages/logger/`). The actual content of those application and package is not important. However, what's worth looking is how the two work together.

- The front-office application consumes the logger package as any other npm module out there.
- The logger package is built before being consumed by the front-office application.

I generated both using the nuxi CLI, and kept most of the default configuration. The only thing that I changed was:

- Disable auto-imports from the application.
- Register the logger module from the application.
- Expose a custom composable (`useLogger`) from the logger module.
- Register a Nitro plugin from the logger module.

All of that is working fine, with no issue we currently have on front-apps.

## Installation

```sh
npm install

cd packages/logger
npm run dev:prepare
npm run build

cd ../../apps/front-office
npx nuxt prepare
npm run dev
```

## Building & Previewing

```sh
npm run build # Build the logger package, and then the application.
npm run preview # Launch the application in production mode.
```
