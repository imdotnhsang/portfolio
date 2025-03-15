# Portfolio (Updating...)

test git ssh

## Structure

```
├── __mocks__
├── .github
├── .storybook
├── .vscode
├── e2e
│   └── tests
├── public
│   ├── images
│   └── locales
├── scrips
├── src
│   ├── app
│   ├── assets
│   ├── components
│   │   ├── atoms
│   │   └── molecules
│   ├── configs
│   ├── constants
│   ├── contexts
│   ├── helpers
│   ├── hocs
│   ├── hooks
│   ├── layouts
│   ├── organisms
│   ├── services
│   ├── stores
│   ├── styles
│   ├── templates
│   ├── types
│   └── utils
└── types
```

**Note:** I follow the structure of [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) to organize the components.

- e2e
  - tests: contains all the end-to-end tests with [Playwright](https://playwright.dev/)
- public
  - images: contains all the images (e.g. .png, .webp, etc.)
  - locales: contains all the translations (e.g. en.json, vi.json, etc.)
- scripts: ...
- src
  - app: follow the structure of [App Router of Next.js](https://nextjs.org/docs)
  - assets: ...
  - components
    - atoms: contains the smallest components
    - molecules: contains the components that are made up of atoms
  - configs: ...
  - constants: ...
  - contexts: ...
  - helpers: provide support or aid to other parts of the program
  - hocs:...
  - hooks: contains all the custom hooks
  - layouts: ...
  - organisms: contains the components that are made up of molecules and atoms
  - services: ...
  - stores: contains the global state management
  - styles: ...
  - templates: contains the components that are made up of organisms to create a page
  - theme: ...
  - types: ...
  - utils: perform common or generic operations that are not tied to any specific part of the program
- types: contains all the typescript types from the third-party libraries

## Set up

```bash
npm setup
npm run start:dev
```

### Notice

- Always update all the dependencies to the latest version.

```bash
npm run up-to-date:pkg
```

- Always use the command to update exports in the index file.

```bash
npm run up-to-date:index
```
