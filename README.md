# jchat 💬

suepr simple chat in firebase hosting

## Pasos para inicializar el repo ✅

    npm install
    npm install -g firebase-tools
    firebase login
    firebase init
    npm install firebase
    npm create vue@latest
    npm install bootstrap
    npm install


## Deploy 🚀

    firebase deploy

## Check endpoint 🌎

    https://jchat-a2c5b.web.app/

# jchat-app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```


---

# Please ignore the following: 👇

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKJUVX9qzBBXjdC8ZGVBMY0LprRgeg7dk",
  authDomain: "jchat-a2c5b.firebaseapp.com",
  projectId: "jchat-a2c5b",
  storageBucket: "jchat-a2c5b.appspot.com",
  messagingSenderId: "507020089072",
  appId: "1:507020089072:web:04074712cd832a2029d435",
  measurementId: "G-XNN88DZYGQ"
};

## Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
