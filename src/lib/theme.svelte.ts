import { browser } from '$app/environment';

export type Theme = 'light' | 'dark';

let current = $state<Theme>('light');

function set(t: Theme) {
	current = t;
	if (browser) {
		document.documentElement.dataset.theme = t;
		localStorage.setItem('xokaido-theme', t);
	}
}

function toggle() {
	set(current === 'light' ? 'dark' : 'light');
}

/** Sync with the theme the bootstrap script in app.html resolved before hydration. */
function init() {
	if (!browser) return;
	const t = document.documentElement.dataset.theme;
	if (t === 'light' || t === 'dark') current = t;
}

export const theme = {
	get value(): Theme {
		return current;
	},
	set,
	toggle,
	init
};
