
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

	//return el;
}