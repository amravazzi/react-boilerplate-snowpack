# React boilerplate

This repo has a boilerplate example to start a react app without using create-react-app. The stack is:
- [React 17 + React Dom](https://reactjs.org/blog/2020/10/20/react-v17.html)
- [React Router 5](https://reactrouter.com/)
- [i18next](https://react.i18next.com/) for localization
- [snowpack](https://www.snowpack.dev/) as the building tool
- [Jest](https://jestjs.io/) for testing
- [ESLint](https://eslint.org/)

## Getting started

### Install the basic dependencies

```sh
npm install
```

## Running the project

Snowpack builds the app as an [ECMAScript Module](https://nodejs.org/api/esm.html), which is loaded in `index.html` as `type=module`:

```html
<script type="module" src="/dist/index.js"></script>
```

So to see the app working, you should run it in an HTTP server, which is already provided by Snowpack. Just run

```sh
snowpack dev
```

and go to `http://localhost:8080` and check it out! Everytime you change the code, the [HMR](https://github.com/snowpackjs/esm-hmr) will keep the browser up-to-date!

### Building the app

To build the app for production just run

```sh
snowpack build
```
