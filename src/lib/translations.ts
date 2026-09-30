export type Locale = 'ka' | 'ru' | 'en';

const en = {
	meta: {
		title: 'Xokaido Technologies — Websites, Mobile Apps & AI Integrations',
		description:
			'Xokaido Technologies LLC crafts modern websites, mobile applications, and AI integrations. Founded by Xokaido, a recognized name in the industry.'
	},
	nav: {
		services: 'Services',
		work: 'Work',
		about: 'About',
		process: 'Process',
		contact: 'Start a project'
	},
	hero: {
		eyebrow: 'Websites · Mobile Apps · AI',
		title: 'Digital products built with <em>craft</em> — shipped with confidence.',
		lede: 'Xokaido Technologies designs and engineers modern websites, mobile applications, and AI integrations for companies that care about the details — from first sketch to production.',
		cta1: 'Start a project',
		cta2: 'See our work',
		stats: [
			{ value: '15+ yrs', label: 'engineering experience' },
			{ value: '60+', label: 'products shipped' },
			{ value: 'Full-stack', label: 'strategy to launch' },
			{ value: 'AI-native', label: 'practical, production-grade' }
		]
	},
	stack: { label: 'Technologies we build with' },
	services: {
		kicker: 'What we do',
		title: 'One studio, every layer of your product.',
		sub: 'Strategy, design, and engineering under one roof — so nothing gets lost between the idea and the release.',
		items: [
			{
				title: 'Modern Websites',
				desc: 'Fast, accessible, beautifully crafted sites — marketing pages, e-commerce, and full web platforms that perform on every device.'
			},
			{
				title: 'Mobile Applications',
				desc: 'iOS and Android apps with thoughtful UX, smooth performance, and a codebase your team can grow with for years.'
			},
			{
				title: 'AI Integrations',
				desc: 'Practical AI woven into your product — assistants, automation, search, and data intelligence built on modern models.'
			},
			{
				title: 'Product Design',
				desc: 'Interfaces people actually enjoy using. Research, prototyping, and design systems that keep your product coherent as it scales.'
			},
			{
				title: 'Cloud & DevOps',
				desc: 'Reliable infrastructure, CI/CD pipelines, and observability — so releases are calm, uptime is high, and costs stay predictable.'
			},
			{
				title: 'Technical Consulting',
				desc: 'Architecture reviews, technology audits, and hands-on guidance when you need a senior perspective before a big decision.'
			}
		]
	},
	work: {
		kicker: 'Selected work',
		title: 'Thirteen products, live in production.',
		sub: 'Web platforms, mobile apps and AI tools we designed, built and shipped end to end. Every screenshot below is the real site — go see it.',
		filters: {
			all: 'All work',
			mobile: 'Mobile apps',
			platform: 'Platforms & AI',
			travel: 'Destinations',
			faith: 'Faith & scripture'
		},
		visit: 'Visit site',
		items: {
			'visit-svaneti': {
				title: 'Visit Svaneti',
				desc: 'A destination platform for Upper Svaneti that leads with the road and pass status, then the towers, the treks, the calendar and where to sleep.',
				tags: ['Travel platform', 'Multilingual', 'Maps']
			},
			stafika: {
				title: 'Stafika',
				desc: 'An iOS and Android marketplace that matches events with vetted staff — waiters, bartenders, DJs — across 27 categories.',
				tags: ['iOS', 'Android', 'Marketplace']
			},
			menuhub: {
				title: 'MenuHub',
				desc: 'A QR menu and table-ordering system for restaurants: the menu updates live, and going from sign-up to serving takes under ten minutes.',
				tags: ['SaaS', 'Restaurants', 'QR ordering']
			},
			kadri: {
				title: 'KadriHub',
				desc: 'First-round interviews on autopilot: the AI reads the CV, asks its own questions, and hands the recruiter a scored report they can compare.',
				tags: ['AI', 'Recruiting', 'Analytics']
			},
			mendex: {
				title: 'Mendex',
				desc: 'A driver app that shows real net earnings — what came in, what was deducted, what is left — alongside park bonuses and referral rewards.',
				tags: ['iOS', 'Android', 'Fintech']
			},
			'visit-kakheti': {
				title: 'Visit Kakheti',
				desc: 'Eight municipalities in one catalogue: wine cellars, guesthouses and monasteries with opening hours, prices and a route builder.',
				tags: ['Travel platform', 'Catalogue', 'Trilingual']
			},
			avanto: {
				title: 'Avanto',
				desc: 'Index drivers cash out straight to their own IBAN — in seconds, for a flat 0.5 ₾ fee, with no waiting for payday.',
				tags: ['Fintech', 'Mobile', 'Payouts']
			},
			keda: {
				title: 'Visit Keda',
				desc: 'Sixty-four settlements of Upper Adjara on one map — live conditions, guesthouses, waterfalls and a portal for local businesses.',
				tags: ['Travel platform', 'Cloudflare', 'Search']
			},
			ostati: {
				title: 'ostati.ai',
				desc: 'AI training for hotel, restaurant and café teams: personalised courses, live role-play simulations and instant feedback in one dashboard.',
				tags: ['AI', 'Training', 'HORECA']
			},
			'visit-samegrelo': {
				title: 'Visit Samegrelo',
				desc: 'Palaces, canyons and Colchis wetlands — 24 places in one catalogue, with timed tickets and step-free access marked on every listing.',
				tags: ['Travel platform', 'Ticketing', 'Accessibility']
			},
			saint: {
				title: 'saint.ge',
				desc: 'An Orthodox calendar for every day of the year: the saints commemorated, the readings and the fasting rule, in the Old or the New Calendar and in four languages.',
				tags: ['Calendar', 'Four languages', 'Search']
			},
			iveria: {
				title: 'Iveria.me',
				desc: 'A multilingual Bible reader: Old Georgian, Greek, Latin, Russian, English and Hebrew side by side, with audio, saved passages and commentary from the Church Fathers.',
				tags: ['Reader', 'Six languages', 'Audio']
			},
			gulani: {
				title: 'Gulani',
				desc: 'The services of the day, prayers and liturgical books in one place — an installable app that follows the church calendar and keeps saved texts readable offline.',
				tags: ['PWA', 'Offline', 'Liturgy']
			}
		}
	},
	founder: {
		kicker: 'The person behind it',
		title: 'Built and led by Xokaido.',
		p1: 'Xokaido is a well-known name in the industry — an engineer and product builder with over fifteen years of experience shipping software that lasts. He founded Xokaido Technologies on a simple belief: great digital products come from small, senior teams who sweat the details.',
		p2: 'Every engagement gets his direct involvement. No hand-offs to junior teams, no layers of account managers — just experienced people building carefully, communicating clearly, and delivering on time.',
		quote:
			'“Technology should feel effortless to the people who use it. Getting there takes rigor, taste, and honest work — that’s what we bring.”',
		name: 'Xokaido',
		role: 'Founder & Principal Engineer, Xokaido Technologies LLC'
	},
	process: {
		kicker: 'How we work',
		title: 'A calm, transparent process.',
		sub: 'You always know what’s happening, what’s next, and why.',
		steps: [
			{
				title: 'Discover',
				desc: 'We dig into your goals, users, and constraints — then agree on scope and success criteria before anything is built.'
			},
			{
				title: 'Design',
				desc: 'Prototypes and design systems shaped around real workflows, validated early so nothing is a surprise later.'
			},
			{
				title: 'Build',
				desc: 'Senior engineering in short, visible iterations — working software in your hands every week, not slide decks.'
			},
			{
				title: 'Launch & grow',
				desc: 'Careful releases, monitoring, and ongoing partnership as your product evolves and your users multiply.'
			}
		]
	},
	testimonials: {
		kicker: 'What clients say',
		title: 'Trusted by people who value results.',
		items: [
			{
				quote:
					'The team delivered our platform ahead of schedule and never compromised on quality. The best technical partner we have worked with.',
				name: 'Giorgi K.',
				role: 'CEO, fintech startup',
				initials: 'GK'
			},
			{
				quote:
					'A mobile app our customers genuinely love. The process was transparent from day one — we always knew exactly where things stood.',
				name: 'Nino B.',
				role: 'Product Director, retail group',
				initials: 'NB'
			},
			{
				quote:
					'The AI assistant cut our support load almost in half, and the integration went live without a single hiccup.',
				name: 'David M.',
				role: 'Head of Operations',
				initials: 'DM'
			}
		]
	},
	cta: {
		kicker: 'Let’s talk',
		title: 'Have something worth building?',
		sub: 'Tell us where you’re headed. We’ll reply within one business day with honest thoughts on how to get there.',
		button: 'Start the conversation',
		mailLabel: 'Prefer email?'
	},
	footer: {
		tagline: 'Modern websites, mobile applications, and AI integrations — crafted in Tbilisi.',
		linksTitle: 'Navigate',
		contactTitle: 'Contact',
		location: 'Tbilisi, Georgia',
		rights: 'All rights reserved.',
		made: 'Made in Tbilisi'
	}
};

export type Dictionary = typeof en;

const ka: Dictionary = {
	meta: {
		title: 'Xokaido Technologies — ვებსაიტები, მობილური აპები და AI ინტეგრაციები',
		description:
			'Xokaido Technologies LLC ქმნის თანამედროვე ვებსაიტებს, მობილურ აპლიკაციებსა და AI ინტეგრაციებს. დამფუძნებელი — Xokaido, ინდუსტრიაში ცნობილი სახელი.'
	},
	nav: {
		services: 'სერვისები',
		work: 'ნამუშევრები',
		about: 'ჩვენ შესახებ',
		process: 'პროცესი',
		contact: 'დაიწყეთ პროექტი'
	},
	hero: {
		eyebrow: 'ვებსაიტები · მობილური აპები · AI',
		title: 'ციფრული პროდუქტები, შექმნილი <em>ოსტატობით</em> — მიწოდებული თავდაჯერებულად.',
		lede: 'Xokaido Technologies ქმნის თანამედროვე ვებსაიტებს, მობილურ აპლიკაციებსა და AI ინტეგრაციებს კომპანიებისთვის, რომლებისთვისაც დეტალები მნიშვნელოვანია — პირველი ესკიზიდან პროდაქშენამდე.',
		cta1: 'დაიწყეთ პროექტი',
		cta2: 'ნამუშევრების ნახვა',
		stats: [
			{ value: '15+ წელი', label: 'საინჟინრო გამოცდილება' },
			{ value: '60+', label: 'მიწოდებული პროდუქტი' },
			{ value: 'Full-stack', label: 'სტრატეგიიდან გაშვებამდე' },
			{ value: 'AI-native', label: 'პრაქტიკული, საწარმოო დონის' }
		]
	},
	stack: { label: 'ტექნოლოგიები, რომლებთანაც ვმუშაობთ' },
	services: {
		kicker: 'რას ვაკეთებთ',
		title: 'ერთი სტუდია — თქვენი პროდუქტის ყველა შრე.',
		sub: 'სტრატეგია, დიზაინი და ინჟინერია ერთ ჭერქვეშ, რომ იდეასა და რელიზს შორის არაფერი დაიკარგოს.',
		items: [
			{
				title: 'თანამედროვე ვებსაიტები',
				desc: 'სწრაფი, ხელმისაწვდომი და გულდასმით ნაკეთები საიტები — სავიზიტო გვერდები, ელკომერცია და სრული ვებ-პლატფორმები, რომლებიც ყველა მოწყობილობაზე მუშაობს.'
			},
			{
				title: 'მობილური აპლიკაციები',
				desc: 'iOS და Android აპლიკაციები გააზრებული UX-ით, გამართული მუშაობითა და კოდბაზით, რომელიც წლების განმავლობაში გაიზრდება თქვენთან ერთად.'
			},
			{
				title: 'AI ინტეგრაციები',
				desc: 'პრაქტიკული AI თქვენს პროდუქტში — ასისტენტები, ავტომატიზაცია, ძიება და მონაცემთა ანალიტიკა თანამედროვე მოდელებზე დაშენებული.'
			},
			{
				title: 'პროდუქტის დიზაინი',
				desc: 'ინტერფეისები, რომელთა გამოყენებაც სასიამოვნოა. კვლევა, პროტოტიპები და დიზაინ-სისტემები, რომლებიც პროდუქტს ზრდასთან ერთად თანმიმდევრულს ინარჩუნებს.'
			},
			{
				title: 'Cloud და DevOps',
				desc: 'საიმედო ინფრასტრუქტურა, CI/CD და მონიტორინგი — რელიზები მშვიდია, uptime მაღალი, ხარჯები კი პროგნოზირებადი.'
			},
			{
				title: 'ტექნიკური კონსულტაცია',
				desc: 'არქიტექტურის მიმოხილვა, ტექნოლოგიური აუდიტი და პრაქტიკული რჩევები, როცა მნიშვნელოვანი გადაწყვეტილების წინ გამოცდილი თვალი გჭირდებათ.'
			}
		]
	},
	work: {
		kicker: 'ნამუშევრები',
		title: 'ცამეტი პროდუქტი, უკვე ონლაინ.',
		sub: 'ვებპლატფორმები, მობილური აპები და AI-ინსტრუმენტები — თითოეული ჩვენ დავგეგმეთ, ავაწყვეთ და გავუშვით. ქვემოთ ნამდვილი საიტებია, შედით და ნახეთ.',
		filters: {
			all: 'ყველა',
			mobile: 'მობილური აპები',
			platform: 'პლატფორმები და AI',
			travel: 'ტურიზმი',
			faith: 'სარწმუნოება'
		},
		visit: 'საიტის ნახვა',
		items: {
			'visit-svaneti': {
				title: 'Visit Svaneti',
				desc: 'ზემო სვანეთის ტურისტული პლატფორმა: ჯერ გზისა და უღელტეხილების მდგომარეობა, მერე კოშკები, ლაშქრობები, კალენდარი და სად დარჩე.',
				tags: ['ტურიზმი', 'მრავალენოვანი', 'რუკები']
			},
			stafika: {
				title: 'Stafika',
				desc: 'iOS-ისა და Android-ის აპი წვეულებას სანდო პერსონალს უკავშირებს — ოფიციანტები, ბარმენები, DJ-ები, სულ 27 კატეგორია.',
				tags: ['iOS', 'Android', 'მარკეტფლეისი']
			},
			menuhub: {
				title: 'MenuHub',
				desc: 'QR-მენიუ და მაგიდიდან შეკვეთა რესტორნებისთვის: მენიუ რეალურ დროში იცვლება, გაშვება კი ათ წუთზე ნაკლებს იღებს.',
				tags: ['SaaS', 'რესტორნები', 'QR-შეკვეთა']
			},
			kadri: {
				title: 'KadriHub',
				desc: 'პირველი ეტაპის გასაუბრება ავტომატურად: AI კითხულობს CV-ს, თავად სვამს კითხვებს და რეკრუტერს შედარებად რეპორტს აბრუნებს.',
				tags: ['AI', 'დაქირავება', 'ანალიტიკა']
			},
			mendex: {
				title: 'Mendex',
				desc: 'მძღოლის აპი ნამდვილ შემოსავალს აჩვენებს — რა შემოვიდა, რა ჩამოიჭრა, რა დარჩა — და იქვე პარკის ბონუსებსა და მოწვევებს.',
				tags: ['iOS', 'Android', 'ფინტექი']
			},
			'visit-kakheti': {
				title: 'Visit Kakheti',
				desc: 'რვა მუნიციპალიტეტი ერთ კატალოგში: მარნები, სასტუმროები და მონასტრები სამუშაო საათებით, ფასებით და მარშრუტის დამგეგმავით.',
				tags: ['ტურიზმი', 'კატალოგი', 'სამენოვანი']
			},
			avanto: {
				title: 'Avanto',
				desc: 'ინდექსის მძღოლები გამომუშავებულ თანხას პირდაპირ თავიანთ IBAN-ზე იტანენ — წამებში, 0.5 ₾ ფიქსირებული საკომისიოთი და გადახდის დღის ლოდინის გარეშე.',
				tags: ['ფინტექი', 'მობილური', 'გადახდები']
			},
			keda: {
				title: 'Visit Keda',
				desc: 'ზემო აჭარის სამოცდაოთხი დასახლება ერთ რუკაზე — ამინდი, სასტუმროები, ჩანჩქერები და პორტალი ადგილობრივი ბიზნესისთვის.',
				tags: ['ტურიზმი', 'Cloudflare', 'ძებნა']
			},
			ostati: {
				title: 'ostati.ai',
				desc: 'AI-ტრენინგი სასტუმროს, რესტორნისა და კაფის გუნდებისთვის: პერსონალიზებული კურსები, ცოცხალი სიმულაციები და მყისიერი უკუკავშირი ერთ პლატფორმაზე.',
				tags: ['AI', 'ტრენინგი', 'HORECA']
			},
			'visit-samegrelo': {
				title: 'Visit Samegrelo',
				desc: 'სასახლეები, კანიონები და კოლხეთის ჭაობები — 24 ადგილი ერთ კატალოგში, დროზე მიბმული ბილეთებით და ადაპტირებულობის ნიშნულით.',
				tags: ['ტურიზმი', 'ბილეთები', 'ხელმისაწვდომობა']
			},
			saint: {
				title: 'saint.ge',
				desc: 'მართლმადიდებლური კალენდარი წლის ყველა დღისთვის: დღის წმინდანები, საკითხავები და მარხვა — ძველი ან ახალი სტილით, ოთხ ენაზე.',
				tags: ['კალენდარი', 'ოთხი ენა', 'ძებნა']
			},
			iveria: {
				title: 'Iveria.me',
				desc: 'ბიბლიის მრავალენოვანი მკითხველი: ძველი ქართული, ბერძნული, ლათინური, რუსული, ინგლისური და ებრაული ტექსტები გვერდიგვერდ, აუდიოთი, სანიშნებითა და წმინდა მამათა განმარტებებით.',
				tags: ['მკითხველი', 'ექვსი ენა', 'აუდიო']
			},
			gulani: {
				title: 'გულანი',
				desc: 'დღის მსახურებები, ლოცვები და საღვთისმსახურო წიგნები ერთ სივრცეში. აპი ტელეფონზე ყენდება, საეკლესიო კალენდარს მიჰყვება და შენახულ ტექსტებს ინტერნეტის გარეშეც ხსნის.',
				tags: ['PWA', 'ოფლაინ', 'ღვთისმსახურება']
			}
		}
	},
	founder: {
		kicker: 'ვინ დგას კომპანიის უკან',
		title: 'კომპანიას უძღვება Xokaido.',
		p1: 'Xokaido ინდუსტრიაში კარგად ცნობილი სახელია — ინჟინერი და პროდუქტების შემქმნელი თხუთმეტ წელზე მეტი გამოცდილებით. მან Xokaido Technologies ერთი მარტივი რწმენით დააფუძნა: საუკეთესო ციფრულ პროდუქტებს პატარა, გამოცდილი გუნდები ქმნიან, რომლებიც დეტალებზე ზრუნავენ.',
		p2: 'ყველა პროექტში ის პირადად არის ჩართული — არანაირი გადაბარება უმცროს გუნდებზე, მხოლოდ გამოცდილი ადამიანები, გამჭვირვალე კომუნიკაცია და დროულად მიწოდებული შედეგი.',
		quote:
			'„ტექნოლოგია ადამიანებისთვის უშრომელი უნდა იყოს. ამის მიღწევას კი სიზუსტე, გემოვნება და პატიოსანი შრომა სჭირდება."',
		name: 'Xokaido',
		role: 'დამფუძნებელი და მთავარი ინჟინერი, Xokaido Technologies LLC'
	},
	process: {
		kicker: 'როგორ ვმუშაობთ',
		title: 'მშვიდი, გამჭვირვალე პროცესი.',
		sub: 'ყოველთვის იცით, რა ხდება, რა იქნება შემდეგ და რატომ.',
		steps: [
			{
				title: 'კვლევა',
				desc: 'ვსწავლობთ თქვენს მიზნებს, მომხმარებლებსა და შეზღუდვებს — შემდეგ ვთანხმდებით მოცულობასა და წარმატების კრიტერიუმებზე.'
			},
			{
				title: 'დიზაინი',
				desc: 'პროტოტიპები და დიზაინ-სისტემები, მორგებული რეალურ სამუშაო პროცესებზე — ადრეულ ეტაპზევე გადამოწმებული.'
			},
			{
				title: 'დეველოპმენტი',
				desc: 'გამოცდილი ინჟინერია მოკლე, თვალსაჩინო იტერაციებით — ყოველ კვირას მომუშავე პროდუქტი და არა პრეზენტაციები.'
			},
			{
				title: 'გაშვება და ზრდა',
				desc: 'ფრთხილი რელიზები, მონიტორინგი და გრძელვადიანი პარტნიორობა პროდუქტის ზრდასთან ერთად.'
			}
		]
	},
	testimonials: {
		kicker: 'რას ამბობენ კლიენტები',
		title: 'გვენდობიან ისინი, ვინც შედეგს აფასებს.',
		items: [
			{
				quote:
					'გუნდმა ჩვენი პლატფორმა ვადაზე ადრე მოგვაწოდა და ხარისხზე კომპრომისი არასდროს გაუკეთებია. საუკეთესო ტექნიკური პარტნიორი, ვისთანაც გვიმუშავია.',
				name: 'გიორგი კ.',
				role: 'CEO, ფინტექ სტარტაპი',
				initials: 'გკ'
			},
			{
				quote:
					'მობილური აპი, რომელიც მომხმარებლებმა ნამდვილად შეიყვარეს. პროცესი პირველივე დღიდან გამჭვირვალე იყო — ყოველთვის ზუსტად ვიცოდით, სად ვიყავით.',
				name: 'ნინო ბ.',
				role: 'პროდუქტის დირექტორი, საცალო ჯგუფი',
				initials: 'ნბ'
			},
			{
				quote:
					'AI ასისტენტმა მხარდაჭერის დატვირთვა თითქმის განახევრა, ინტეგრაცია კი შეფერხების გარეშე გაეშვა.',
				name: 'დავით მ.',
				role: 'ოპერაციების ხელმძღვანელი',
				initials: 'დმ'
			}
		]
	},
	cta: {
		kicker: 'დავიწყოთ',
		title: 'გაქვთ იდეა, რომელიც აშენებას იმსახურებს?',
		sub: 'მოგვიყევით, საით მიდიხართ — ერთ სამუშაო დღეში გიპასუხებთ გულწრფელი მოსაზრებებით, როგორ მიაღწიოთ მიზანს.',
		button: 'დაიწყეთ საუბარი',
		mailLabel: 'გირჩევნიათ ელფოსტა?'
	},
	footer: {
		tagline: 'თანამედროვე ვებსაიტები, მობილური აპლიკაციები და AI ინტეგრაციები — შექმნილი ოსტატობით, თბილისში.',
		linksTitle: 'ნავიგაცია',
		contactTitle: 'კონტაქტი',
		location: 'თბილისი, საქართველო',
		rights: 'ყველა უფლება დაცულია.',
		made: 'დამზადებულია თბილისში'
	}
};

const ru: Dictionary = {
	meta: {
		title: 'Xokaido Technologies — сайты, мобильные приложения и AI-интеграции',
		description:
			'Xokaido Technologies LLC создаёт современные сайты, мобильные приложения и AI-интеграции. Основатель — Xokaido, известное имя в индустрии.'
	},
	nav: {
		services: 'Услуги',
		work: 'Проекты',
		about: 'О нас',
		process: 'Процесс',
		contact: 'Начать проект'
	},
	hero: {
		eyebrow: 'Сайты · Мобильные приложения · AI',
		title: 'Цифровые продукты, созданные <em>с мастерством</em> — и запущенные с уверенностью.',
		lede: 'Xokaido Technologies проектирует и разрабатывает современные сайты, мобильные приложения и AI-интеграции для компаний, которым важны детали — от первого эскиза до продакшена.',
		cta1: 'Начать проект',
		cta2: 'Наши проекты',
		stats: [
			{ value: '15+ лет', label: 'инженерного опыта' },
			{ value: '60+', label: 'выпущенных продуктов' },
			{ value: 'Full-stack', label: 'от стратегии до запуска' },
			{ value: 'AI-native', label: 'практично, production-уровень' }
		]
	},
	stack: { label: 'Технологии, с которыми мы работаем' },
	services: {
		kicker: 'Что мы делаем',
		title: 'Одна студия — каждый слой вашего продукта.',
		sub: 'Стратегия, дизайн и разработка под одной крышей — чтобы между идеей и релизом ничего не потерялось.',
		items: [
			{
				title: 'Современные сайты',
				desc: 'Быстрые, доступные и тщательно сделанные сайты — лендинги, e-commerce и полноценные веб-платформы, которые работают на любом устройстве.'
			},
			{
				title: 'Мобильные приложения',
				desc: 'iOS- и Android-приложения с продуманным UX, плавной работой и кодовой базой, которая будет расти вместе с вашей командой.'
			},
			{
				title: 'AI-интеграции',
				desc: 'Практичный AI внутри вашего продукта — ассистенты, автоматизация, поиск и аналитика данных на современных моделях.'
			},
			{
				title: 'Продуктовый дизайн',
				desc: 'Интерфейсы, которыми действительно приятно пользоваться. Исследования, прототипы и дизайн-системы, сохраняющие целостность продукта.'
			},
			{
				title: 'Cloud и DevOps',
				desc: 'Надёжная инфраструктура, CI/CD и мониторинг — релизы спокойные, uptime высокий, расходы предсказуемые.'
			},
			{
				title: 'Технический консалтинг',
				desc: 'Ревью архитектуры, технологический аудит и практические рекомендации, когда перед важным решением нужен опытный взгляд.'
			}
		]
	},
	work: {
		kicker: 'Избранные проекты',
		title: 'Тринадцать продуктов — все уже в работе.',
		sub: 'Веб-платформы, мобильные приложения и AI-инструменты: каждый мы спроектировали, собрали и выпустили сами. Ниже — снимки настоящих сайтов, зайдите и посмотрите.',
		filters: {
			all: 'Все',
			mobile: 'Мобильные приложения',
			platform: 'Платформы и AI',
			travel: 'Туризм',
			faith: 'Вера и Писание'
		},
		visit: 'Открыть сайт',
		items: {
			'visit-svaneti': {
				title: 'Visit Svaneti',
				desc: 'Туристическая платформа Верхней Сванетии: сначала состояние дороги и перевалов, потом башни, треки, календарь и где переночевать.',
				tags: ['Туризм', 'Мультиязычность', 'Карты']
			},
			stafika: {
				title: 'Stafika',
				desc: 'Приложение для iOS и Android находит для мероприятия проверенный персонал — официантов, барменов, диджеев, всего 27 категорий.',
				tags: ['iOS', 'Android', 'Маркетплейс']
			},
			menuhub: {
				title: 'MenuHub',
				desc: 'QR-меню и заказ со стола для ресторанов: меню меняется в реальном времени, а запуск занимает меньше десяти минут.',
				tags: ['SaaS', 'Рестораны', 'QR-заказ']
			},
			kadri: {
				title: 'KadriHub',
				desc: 'Первый этап собеседования на автомате: AI читает резюме, сам задаёт вопросы и возвращает рекрутеру отчёт, который можно сравнивать.',
				tags: ['AI', 'Найм', 'Аналитика']
			},
			mendex: {
				title: 'Mendex',
				desc: 'Приложение водителя показывает реальный доход — что пришло, что удержали, что осталось — и рядом бонусы парка и рефералов.',
				tags: ['iOS', 'Android', 'Финтех']
			},
			'visit-kakheti': {
				title: 'Visit Kakheti',
				desc: 'Восемь муниципалитетов в одном каталоге: марани, гостевые дома и монастыри с часами работы, ценами и построением маршрута.',
				tags: ['Туризм', 'Каталог', 'Три языка']
			},
			avanto: {
				title: 'Avanto',
				desc: 'Водители индекса выводят заработок прямо на свой IBAN — за секунды, с фиксированной комиссией 0,5 ₾ и без ожидания дня выплаты.',
				tags: ['Финтех', 'Мобильное', 'Выплаты']
			},
			keda: {
				title: 'Visit Keda',
				desc: 'Шестьдесят четыре села Верхней Аджарии на одной карте — погода, гостевые дома, водопады и портал для местного бизнеса.',
				tags: ['Туризм', 'Cloudflare', 'Поиск']
			},
			ostati: {
				title: 'ostati.ai',
				desc: 'AI-тренинг для команд отелей, ресторанов и кафе: персональные курсы, живые симуляции и мгновенная обратная связь в одной панели.',
				tags: ['AI', 'Обучение', 'HORECA']
			},
			'visit-samegrelo': {
				title: 'Visit Samegrelo',
				desc: 'Дворцы, каньоны и колхидские болота — 24 места в одном каталоге, с билетами по времени и отметкой о доступной среде.',
				tags: ['Туризм', 'Билеты', 'Доступность']
			},
			saint: {
				title: 'saint.ge',
				desc: 'Православный календарь на каждый день года: святые дня, чтения и пост — по старому или новому стилю, на четырёх языках.',
				tags: ['Календарь', 'Четыре языка', 'Поиск']
			},
			iveria: {
				title: 'Iveria.me',
				desc: 'Многоязычная Библия: древнегрузинский, греческий, латинский, русский, английский и еврейский тексты рядом, с аудио, закладками и толкованиями святых отцов.',
				tags: ['Чтение', 'Шесть языков', 'Аудио']
			},
			gulani: {
				title: 'Gulani',
				desc: 'Службы дня, молитвы и богослужебные книги в одном месте. Приложение ставится на телефон, следует церковному календарю и открывает сохранённые тексты без интернета.',
				tags: ['PWA', 'Офлайн', 'Богослужение']
			}
		}
	},
	founder: {
		kicker: 'Кто за этим стоит',
		title: 'Компанию ведёт Xokaido.',
		p1: 'Xokaido — известное имя в индустрии: инженер и создатель продуктов с более чем пятнадцатилетним опытом. Он основал Xokaido Technologies с простым убеждением: лучшие цифровые продукты создают небольшие опытные команды, которым не всё равно на детали.',
		p2: 'Он лично участвует в каждом проекте. Никаких передач младшим командам и лишних менеджеров — только опытные люди, аккуратная работа, прозрачная коммуникация и результат в срок.',
		quote:
			'«Технологии должны быть лёгкими для тех, кто ими пользуется. А для этого нужны точность, вкус и честная работа — именно это мы и делаем».',
		name: 'Xokaido',
		role: 'Основатель и главный инженер, Xokaido Technologies LLC'
	},
	process: {
		kicker: 'Как мы работаем',
		title: 'Спокойный и прозрачный процесс.',
		sub: 'Вы всегда знаете, что происходит, что будет дальше и почему.',
		steps: [
			{
				title: 'Исследование',
				desc: 'Погружаемся в ваши цели, пользователей и ограничения — затем согласуем объём работ и критерии успеха.'
			},
			{
				title: 'Дизайн',
				desc: 'Прототипы и дизайн-системы, построенные вокруг реальных сценариев и проверенные на раннем этапе.'
			},
			{
				title: 'Разработка',
				desc: 'Опытная инженерия короткими, наглядными итерациями — работающий продукт каждую неделю, а не презентации.'
			},
			{
				title: 'Запуск и рост',
				desc: 'Аккуратные релизы, мониторинг и долгосрочное партнёрство по мере роста продукта и аудитории.'
			}
		]
	},
	testimonials: {
		kicker: 'Что говорят клиенты',
		title: 'Нам доверяют те, кто ценит результат.',
		items: [
			{
				quote:
					'Команда выпустила нашу платформу раньше срока и ни разу не пошла на компромисс в качестве. Лучший технический партнёр, с которым мы работали.',
				name: 'Георгий К.',
				role: 'CEO, финтех-стартап',
				initials: 'ГК'
			},
			{
				quote:
					'Мобильное приложение, которое наши клиенты по-настоящему полюбили. Процесс был прозрачным с первого дня — мы всегда точно знали, на каком мы этапе.',
				name: 'Нино Б.',
				role: 'Директор по продукту, ритейл-группа',
				initials: 'НБ'
			},
			{
				quote:
					'AI-ассистент сократил нагрузку на поддержку почти вдвое, а интеграция прошла без единого сбоя.',
				name: 'Давид М.',
				role: 'Руководитель операций',
				initials: 'ДМ'
			}
		]
	},
	cta: {
		kicker: 'Давайте обсудим',
		title: 'Есть идея, которую стоит построить?',
		sub: 'Расскажите, куда вы движетесь — в течение одного рабочего дня мы ответим честными мыслями о том, как туда добраться.',
		button: 'Начать разговор',
		mailLabel: 'Удобнее по почте?'
	},
	footer: {
		tagline: 'Современные сайты, мобильные приложения и AI-интеграции — сделано с мастерством в Тбилиси.',
		linksTitle: 'Навигация',
		contactTitle: 'Контакты',
		location: 'Тбилиси, Грузия',
		rights: 'Все права защищены.',
		made: 'Сделано в Тбилиси'
	}
};

export const translations: Record<Locale, Dictionary> = { ka, ru, en };
export const locales: Locale[] = ['ka', 'ru', 'en'];
