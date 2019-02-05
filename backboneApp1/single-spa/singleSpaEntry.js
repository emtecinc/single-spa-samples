
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