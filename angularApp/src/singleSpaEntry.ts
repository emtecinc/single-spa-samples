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