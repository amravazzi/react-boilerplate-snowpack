# React boilerplate

This repo has a boilerplate example to start a react app without using create-react-app. The stack is:
- React 17 + React Dom
- i18next for localization
- esbuild for build
- Jest for testing
- ESLint

## Getting started

### Install [node](https://nodejs.org/) 15.x, which brings [npm](https://www.npmjs.com/) 7.x

```sh
nvm install node
```

### Install the basic dependencies

```sh
npm install
```

## Running the project

This boilerplate builds the app as an [ECMAScript Module](https://nodejs.org/api/esm.html), which is loaded in `index.html` as `type=module`:

```html
<script type="module" src="./dist/app.mjs"></script>
```

So to see the app working, you should run it in an HTTP server, which is already provided here. Just run

```sh
npm run serve
```

and go to `http://localhost:5000` and check it out!

### Building the app

To build the app in the development environment, run

```sh
npm run build:dev
```

and for production

```sh
npm run build:prod
```

Everytime you change the code, you have to rebuild the app to see the changes. To automate it during the development, you can install watchman [watchman](https://facebook.github.io/watchman/)

```sh
brew update
brew install watchman
```

and run

```sh
npm run watch
```

Watchman is a lib that watches for change in code and run a command. In our case, it builds the app in a development environment.

## Acknowledgement

I'd like to thank [@charbelrami](https://github.com/charbelrami) who helped me with the boilerplate structure.
