/**
 * Live products, with the screenshot captured from each one's production site.
 * Copy (title / description / tags) lives in `translations.ts`, keyed by `slug`.
 * Order here is the render order — deliberately mixed so the categories interleave.
 */
export type ProjectCategory = 'mobile' | 'platform' | 'travel' | 'faith';

export type Project = {
	slug: string;
	url: string;
	/** Shown under the title and inside the browser chrome of the screenshot. */
	domain: string;
	category: ProjectCategory;
};

export const projects: Project[] = [
	{
		slug: 'visit-svaneti',
		url: 'https://visit-svaneti.ge',
		domain: 'visit-svaneti.ge',
		category: 'travel'
	},
	{
		slug: 'stafika',
		url: 'https://stafika.com',
		domain: 'stafika.com',
		category: 'mobile'
	},
	{
		slug: 'menuhub',
		url: 'https://menuhub.ge',
		domain: 'menuhub.ge',
		category: 'platform'
	},
	{
		slug: 'kadri',
		url: 'https://kadri.ge',
		domain: 'kadri.ge',
		category: 'platform'
	},
	{
		slug: 'mendex',
		url: 'https://mendex.ge',
		domain: 'mendex.ge',
		category: 'mobile'
	},
	{
		slug: 'iveria',
		url: 'https://iveria.me',
		domain: 'iveria.me',
		category: 'faith'
	},
	{
		slug: 'visit-kakheti',
		url: 'https://visit-kakheti.ge',
		domain: 'visit-kakheti.ge',
		category: 'travel'
	},
	{
		slug: 'avanto',
		url: 'https://avanto.ge',
		domain: 'avanto.ge',
		category: 'mobile'
	},
	{
		slug: 'saint',
		url: 'https://saint.ge',
		domain: 'saint.ge',
		category: 'faith'
	},
	{
		slug: 'keda',
		url: 'https://keda-project.xok.workers.dev',
		domain: 'keda-project.xok.workers.dev',
		category: 'travel'
	},
	{
		slug: 'ostati',
		url: 'https://ostati.ai',
		domain: 'ostati.ai',
		category: 'platform'
	},
	{
		slug: 'visit-samegrelo',
		url: 'https://visit-samegrelo.ge',
		domain: 'visit-samegrelo.ge',
		category: 'travel'
	},
	{
		slug: 'gulani',
		url: 'https://gulani.ge',
		domain: 'gulani.ge',
		category: 'faith'
	}
];

export const categories: ProjectCategory[] = ['mobile', 'platform', 'travel', 'faith'];
