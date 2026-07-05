import { browser } from '$app/environment';
import { translations, locales, type Locale, type Dictionary } from '$lib/translations';

let current = $state<Locale>('ka');

function set(l: Locale) {
	current = l;
	if (browser) {
		localStorage.setItem('xokaido-lang', l);
		document.documentElement.lang = l;
	}
}

/** Sync with the lang the bootstrap script in app.html resolved before hydration. */
function init() {
	if (!browser) return;
	const l = document.documentElement.lang;
	if ((locales as string[]).includes(l)) current = l as Locale;
}

export const i18n = {
	get locale(): Locale {
		return current;
	},
	get t(): Dictionary {
		return translations[current];
	},
	set,
	init,
	locales
};
