# Replication steps

For all apps, use Node v18.20.4 – though above this version should also work.

For Producer application:

- `cd producer-app`
- `npm install`
- `npm run build && npm run preview`

For Consumer app with bug:

- `cd consumer-app-webpack`
- `npm install`
- `npm run dev`
- See console for error regarding versions.

For Consumer app without bug:

- `cd consumer-app-vite`
- `npm install`
- `npm run dev`
- No console errors about version. Version is correctly compared.
