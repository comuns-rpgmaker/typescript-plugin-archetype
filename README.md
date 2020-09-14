# RPG Maker MZ - Typescript Plugin Archetype

This is a template repository for writing Typescript plugins for RPG Maker MZ.
The main purpose here is to set a basis from which other repositories can
derive from and more easily be ready to start actual development.


## Getting Started

First of all, make sure you run `npm install` to install all the dependencies
for the project, such as [rollup.js](https://rollupjs.org/) and typescript.

Make sure to set `package.json` up correctly, changing the package name to that
of your plugin (this will be used to generate the output file) and adjust the
values of the `version` and `description` fields (and, optionally, `keywords`).
Also make sure to add a property `testProjectDir` if you want to test your
plugin (can be relative).

To configure plugin parameters and the likes, change `header.js`. This file is
prepended to the generated output after the build process.

Once you are done, `npm run build` will create a JS file for your plugin as
`dist/js/plugins/{pkg.name}.js`.

By default, the plugin is wrapped into an IIFE and everything you export from
`./src/main.ts` is saved under a namespace to be configured in `package.json`.

**TL;DR**:

First:
- `npm install`
- Modify `package.json`

Then:
- Modify `plugin-metadata.yaml` and write Typescript code on `src`
- `npm run build`
- Your plugin shows up compiled in `dist/js/plugins` (plus a debug build in
  whatever test directory you set up!)
- Repeat


## Contributing

This repo's purpose is **exclusively** providing a basic structure for other
plugin repos.
It is **not** the place to create core functionality! (i.e. no application
code here!)

Changes to this repo **must not** demand that repos derived from it be changed,
but it **should** be possible to update them to a more recent version of the
archetype fairly easily.
