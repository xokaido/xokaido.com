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
		title: 'Products we are proud of.',
		sub: 'A few of the projects we have shipped recently.',
		items: [
			{
				title: 'Fintech Analytics Platform',
				desc: 'Real-time analytics, reporting, and risk monitoring — brought together in one calm, organized workspace.',
				tags: ['Web', 'Dashboard']
			},
			{
				title: 'Retail Commerce App',
				desc: 'A mobile shopping experience with personalized recommendations and a checkout flow customers actually finish.',
				tags: ['iOS', 'Android']
			},
			{
				title: 'AI Support Assistant',
				desc: 'Answers 70% of customer questions on its own and hands the hard cases to a human — with full context attached.',
				tags: ['AI', 'Integration']
			}
		]
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
		title: 'პროექტები, რომლებითაც ვამაყობთ.',
		sub: 'რამდენიმე პროდუქტი, რომლებიც ბოლო პერიოდში მივაწოდეთ.',
		items: [
			{
				title: 'ფინტექ ანალიტიკის პლატფორმა',
				desc: 'ანალიტიკა, ანგარიშგება და რისკების მონიტორინგი რეალურ დროში — ერთ მოწესრიგებულ სამუშაო სივრცეში.',
				tags: ['Web', 'Dashboard']
			},
			{
				title: 'საცალო ვაჭრობის აპლიკაცია',
				desc: 'მობილური შოპინგი პერსონალიზებული რეკომენდაციებით და გადახდის პროცესით, რომელსაც მომხმარებლები ბოლომდე მიჰყვებიან.',
				tags: ['iOS', 'Android']
			},
			{
				title: 'AI ასისტენტი მხარდაჭერისთვის',
				desc: 'მომხმარებელთა კითხვების 70%-ს დამოუკიდებლად პასუხობს, რთულ შემთხვევებს კი სრული კონტექსტით გადასცემს ოპერატორს.',
				tags: ['AI', 'Integration']
			}
		]
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
		title: 'Продукты, которыми мы гордимся.',
		sub: 'Несколько проектов, которые мы выпустили за последнее время.',
		items: [
			{
				title: 'Финтех-платформа аналитики',
				desc: 'Аналитика, отчётность и мониторинг рисков в реальном времени — в одном спокойном, организованном рабочем пространстве.',
				tags: ['Web', 'Dashboard']
			},
			{
				title: 'Приложение для ритейла',
				desc: 'Мобильный шопинг с персональными рекомендациями и оформлением заказа, которое покупатели действительно доводят до конца.',
				tags: ['iOS', 'Android']
			},
			{
				title: 'AI-ассистент поддержки',
				desc: 'Самостоятельно отвечает на 70% вопросов клиентов, а сложные случаи передаёт оператору — с полным контекстом.',
				tags: ['AI', 'Integration']
			}
		]
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
