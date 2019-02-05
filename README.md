# single-spa-samples

This repository contains the sample code which shows how to load various application created using different technology stack ex. React, Angular, Vue, Backbone, inside a [single-spa](https://single-spa.js.org/) shell.

[single-spa](https://single-spa.js.org/) is an awesome project which makes it very easy to build Front-end Microservices.

This project consist of following folders

1. angularApp - A very minimilistic application written in [Angular](https://angular.io/).

```js
//singleSpaEntry

import 'core-js/es7/reflect';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { MainModule } from './main-module';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

if (environment.production) {
    enableProdMode();
}

const spaProps = {
    bootstrappedModule: null,
    Router: Router
};

// This lifecycle function will be called by singleSPA exactly once, right before the registered application is mounted for the first time.
export function bootstrap(props) {
    return Promise.resolve();
}


// This lifecycle function is called by singleSPA every time the route for this app is active and the app should be rendered.
export function mount(props) {
    createDomElement();

    return platformBrowserDynamic()
        .bootstrapModule(MainModule).then(module => {
            return spaProps.bootstrappedModule = module;
        });
}

// This lifecycle function will be called when the user navigates away from this apps route.
export function unmount(props) {
    return new Promise((resolve, reject) => {
        spaProps.bootstrappedModule.destroy();
        delete spaProps.bootstrappedModule;
        resolve();
    });
}

function createDomElement() {
    // Make sure there is a div for us to render into
    let el = window.document.getElementById('shell-container');
    if (el) {
        let cl = window.document.createElement('appMain');
        cl.id = 'app2';
        el.appendChild(cl);
    }

    return el;
}
```
2. reactApp - A very minimilistic application written in [React](https://reactjs.org/)

```js

//singleSpaEntry

import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Root from './root.component.js';

const reactLifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: Root,
	domElementGetter,
});

export function bootstrap(props) {
	return reactLifecycles.bootstrap(props);
}

export function mount(props) {
	return reactLifecycles.mount(props);
}

export function unmount(props) {
	return reactLifecycles.unmount(props);
}

function domElementGetter() {
	// Make sure there is a div for us to render into
	let el = document.getElementById('shell-container');
	if (!el) {
		el = document.createElement('div');
		el.id = 'app1';
		document.body.appendChild(el);
	}

	return el;
}

```

3. vueApp - A very minimilistic application written in [VueJs](https://vuejs.org/)

```js

//singleSpaEntry

import Vue from 'vue'
import singleSpaVue from 'single-spa-vue';
import App from './App.vue'

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        el: '#app3',
        render: h => h(App)
}
});

export const bootstrap = [
    vueLifecycles.bootstrap,
];

export function mount(props) {
    createDomElement();
    return vueLifecycles.mount(props);
}

export const unmount = [
    vueLifecycles.unmount,
];

function createDomElement() {
    // Make sure there is a div for us to render into
    let el = document.getElementById('shell-container');
    if (el) {
        el = document.createElement('div');
        el.id = 'app3';
        document.body.appendChild(el);
    }
    return el;
}

```
4. backboneApp1 - A very minimilistic application written in [Backbone](http://backbonejs.org/)

```js
//singleSpaEntry

import singleSpaBackbone from '@emtecinc/single-spa-backbone';

const backBoneLifecycles = singleSpaBackbone({
	BasePath: 'app4',
	AppWithRequire:
	{
		IsDataMain: true,
		AppPath: 'src/app',
		RequireJsPath: 'lib/require.js'
	},
	DomElementSetter: domElementSetter
});

export const bootstrap = [
	backBoneLifecycles.bootstrap,
];

export const mount = [
	backBoneLifecycles.mount,
];

export const unmount = [
	backBoneLifecycles.unmount,
];


function domElementSetter() {

	//use the same element to render into in the backbone app
	let el = document.getElementById('shell-container');
	if (!el) {
		el = document.createElement('div');
		el.id = 'shell-container';
		document.body.appendChild(el);
	}

}

```
5. backboneApp2 - Another sample application written in [Backbone](http://backbonejs.org/)

```js

//singleSpaEntry

import singleSpaBackbone from '@emtecinc/single-spa-backbone';

const backBoneLifecycles = singleSpaBackbone({
	BasePath: 'app5',
	AppWithRequire:
	{
		IsDataMain: false,
		AppPath: 'index.js',
		RequireJsPath: 'js/require.js'
	},
	DomElementSetter: domElementGetter
});

export const bootstrap = [
	backBoneLifecycles.bootstrap,
];

export const mount = [
	backBoneLifecycles.mount,
];

export const unmount = [
	backBoneLifecycles.unmount,
];


function domElementGetter() {

	//use the same element to render into in the backbone app
	let el = document.getElementById('shell-container');
	if (!el) {
		el = document.createElement('div');
		el.id = 'shell-container';
		document.body.appendChild(el);
	}
}

```

   Each of the above application has a `singleSpaEntry` file, which is called by the shell, and has several lifecycle methods like `bootstrap`, `mount` & `unmount`, which gets called at various stages of `single-spa` application.
   Each of the apps are hosted using `webpack-dev-server` and runs on different port over `localhost`.

   Please go through this [link](https://single-spa.js.org/docs/building-applications.html) for further details. 

6. shell - This is the main application, where the above applications gets loaded. It acts as an orchestrator, and can also provides common services to the apps getting loaded. 

	`webpack-dev-server` is used to host shell, as well.

    shell registers all the application to `single-spa` framework, by calling loadApp functions.


```js

// app1: The URL "/app1/..." is redirected to "http://localhost:9001/..." this is done by the webpack proxy (webpack.config.js)
loadApp('app1', '/app1', '/app1/singleSpaEntry.js', '/app1/store.js', globalEventDistributor);

// app2: The URL "/app2/..." is redirected to "http://localhost:9002/..." this is done by the webpack proxy (webpack.config.js)
loadApp('app2', '/app2', '/app2/singleSpaEntry.js', '/app2/store.js', globalEventDistributor);

// app3: The URL "/app3/..." is redirected to "http://localhost:9003/..." this is done by the webpack proxy (webpack.config.js)
loadApp('app3', '/app3', '/app3/singleSpaEntry.js', null, null); // does not have a store, so we pass null

// app4: The URL "/app4/..." is redirected to "http://localhost:9004/..." this is done by the webpack proxy (webpack.config.js)
loadApp('app4', '/app4', '/app4/singleSpaEntry.js', null, null);

// app5: The URL "/app5/..." is redirected to "http://localhost:9005/..." this is done by the webpack proxy (webpack.config.js)
loadApp('app5', '/app5', '/app5/singleSpaEntry.js', null, null);

```

 loadApp function calls singleSpa.registerApplication function as shown below.

```js
function loadApp(name, hash, appURL, storeURL, globalEventDistributor)
{
    ... //rest of the code

    singleSpa.registerApplication(name, () => SystemJS.import(appURL), hashPrefix(hash), customProps);
}

```

# How to run this project?

Go to root of each of the sub-folders i.e. angularApp, backboneApp1, backboneApp2, reactApp, shell & vueApp and run below command one by one.

```js
npm install
```
It will install all the npm packages specified in the package.json.

followed by

```js
npm run watch
```
This will start the `webpack-dev-server` and will run each of the applications.

Once, all the apps are running go to [http://localhost:9000](http://localhost:9000)  where the shell has been configured to run.






