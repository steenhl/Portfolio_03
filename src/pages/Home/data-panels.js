const data = [
	{
		id: "panel-1",
		linkText: "Rick and Morty",
		linkHref: "#panel-1",
		class: "panel-1",
		header: "Portfolio",
		subheading: "En udforskning af frontend teknologi",
		p: "Udsigten fra mit køkken vindue",
		svg: "NightLandscape",
		list: {
			header: "Frontend teknologi",
			className: "fp-technology-list-wrapper",
			items: [
				{ id: "FR01", text: "GSAP", class: "fr-list-item" },
				{ id: "FR02", text: "React", class: "fr-list-item" },
				{ id: "FR03", text: "Bootstrap", class: "fr-list-item" },
				{ id: "FR04", text: "react-router-dom", class: "fr-list-item" },
				{ id: "FR05", text: "lodash", class: "fr-list-item" },
				{ id: "FR06", text: "Scroll triggers", class: "fr-list-item" },
				{ id: "FR07", text: "SCSS", class: "fr-list-item" },
				{ id: "FR08", text: "typescript", class: "fr-list-item" },
			],
		},
	},
	{
		id: "panel-4",
		linkText: "Billede galleri",
		linkHref: "#panel-4",
		pageLink: "/Gallery",
		class: "panel-4",
		header: "Responsivt billedgalleri",
		subheading: "Swiper og Masonry",
		p: "Responsivt billedgalleri, skifter mellem to forskellige former for gallerier. Slider galleri ved mobil størrelse og Masonry galleri ved desktop størrelse",
		// p: "Mobil tilpasning af et billedgalleri, bygges som oftest ud fra en teknik, hvor de enkelte billeder bliver opstillet i horisontal række, hvor synsfeltet er afgrænset af en ramme som kun viser et lille udsnit af hele rækken. Brugeren kan nu navigere mellem de enkelte billeder ved at skyder rækkens horisontale placering og derved afdække de eller de næste billeder. Swiper er et JavaScript billedgalleri som er bygget ud fra ovenstående tanker og med mobiltilpasning i fokus",
		svg: "Gallery",
		list: {
			header: "Frontend teknologi",
			className: "gallery-technology-list-wrapper",
			items: [
				{
					id: "V01",
					text: "Masonry gallery",
					toolTipHeader: "Masonry gallery",
					popup:
						"<p><strong>Masonry</strong> er et JavaScript billedgalleri.</p> <p>Det fungerer ved at placere de enkelte billeder optimalt i forhold til deres størrelse og den plads som der er til rådighed.</p> <p>Når brugeren ændrer på størrelsen af vinduet, flyttes der rundt på placeringen af de enkelte billeder, hvis der er behov for det</p>",
					class: "vote-technology-list-item",
				},
				{
					id: "V02",
					text: "Swiper gallery",
					toolTipHeader: "Swiper gallery",
					popup:
						"<p><strong>Mobil tilpasning</strong> af et billedgalleri, bygges som oftest ud fra en teknik, hvor de enkelte billeder bliver opstillet i horisontal række, hvor synsfeltet er afgrænset af en ramme som kun viser et lille udsnit af hele rækken.</p> <p>Brugeren kan nu navigere mellem de enkelte billeder ved at skyder rækkens horisontale placering og derved afdække de næste billeder.</p> <p><strong>Swiper</strong> er et JavaScript billedgalleri som er bygget ud fra ovenstående tanker og med mobiltilpasning i fokus</p>",
					class: "vote-technology-list-item",
				},
				{ id: "V03", text: "React", class: "vote-technology-list-item" },
			],
		},
	},
	{
		id: "panel-2",
		linkText: "Rick and Morty",
		linkHref: "#panel-2",
		class: "panel-2",
		pageLink: "/RM",
		header: "Rick and Morty",
		subheading: "En søgbar oversigt over den animeret tv serie Rick and Morty",
		p: "Rick and Morty er en animeret tegnefilme, som følger Rick Sanchez, en super videnskabsmand og hans letpåvirkelige barnebarn Morty Smiths eventyr ",
		list: {
			header: "Frontend teknologi",
			className: "rm-technology-list-wrapper",
			items: [
				{ id: "RM01", text: "GraphQL", class: "rm-list-item" },
				{ id: "RM02", text: "Apollo Server", class: "rm-list-item" },
				{ id: "RM03", text: "Bootstrap", class: "rm-list-item" },
				{ id: "RM04", text: "React", class: "rm-list-item" },
				{ id: "RM05", text: "React Paginate", class: "rm-list-item" },
				{ id: "RM06", text: "lodash", class: "rm-list-item" },
			],
		},
		svg: "RM",
		svgBackGround: "RM",
	},
	{
		id: "panel-3",
		linkText: "Vote",
		linkHref: "#panel-3",
		class: "panel-3",
		pageLink: "/Vote",
		header: "Vote",
		subheading: "Tilkendegiv din mening",
		p: "Responsit ",
		list: {
			header: "Frontend teknologi",
			className: "vote-technology-list-wrapper",
			items: [
				{ id: "V01", text: "React", class: "vote-technology-list-item" },
				{ id: "V02", text: "react-inlinesvg", class: "vote-technology-list-item" },
				{ id: "V03", text: "Bootstrap", class: "vote-technology-list-item" },
			],
		},
		svg: "Likes",
	},

	{
		id: "panel-5",
		linkHref: "#panel-5",
		class: "panel-5",
		header: "Kontakt information og baggrund",
		eMail: "mailto:sthl@youmail.dk",
		eMailAdress: "sthl@youmail.dk",
		tlf: "45:26802420",

		list: {
			header: "CV",
			className: "vote-technology-list-wrapper",
			items: [
				{
					id: "V01",
					text: "Portfolio",
					toolTipHeader: "Portfolio",
					popup:
						"<p>Udvikling af portfolio over forskellige projekter som jeg har kodet gennem tiden.</p> <p>På forsiden, er fokus lagt på animation og interaktion gennem teknologier som GSAP og React.</p><p><strong>GSAP</strong> (GreenSock Animation Platform) er et professional JavaScript animations fremwork, der stort set kan animere alt webindhold som du smider i hoved på det</p><p><strong>React</strong> er et open source, Javascript-bibliotek, udviklet og vedligeholdt af Facebook. </p>",
					class: "vote-technology-list-item",
				},
				{
					id: "V02",
					text: "Feriepartner",
					toolTipHeader: "Feriepartner",
					popup:
						"<p>Jeg har gennem en årrække arbejdet som frontend udvikler hos feriepartner, hvor jeg var ansvarlig for udviklingen og vedligeholdelsen af feriepartner.dk.</p> <p>Hos <a href='https://www.feriepartner.dk/'>feriepartner </a>arbejdede jeg ud fra et <strong>Agilt</strong> mindset og med <strong>Scrum</strong> som omdrejningspunkt.</p> <p>Jeg samarbejdede med backend udviklere, product owner og grafikere i forbindelse med opgaveløsninger og den agile udviklingsproces</p>",
					class: "vote-technology-list-item",
				},
				{
					id: "V03",
					text: "Aarhus TECH",
					toolTipHeader: "Aarhus TECH",
					popup:
						"<strong>Faglærer</strong> på mediegrafiker og webudvikler uddannelserne <p><strong>Fagområde:</strong> HTML, CSS, Wordpress, JavaScript, jQuery, GSAP, UX, UI, interaktionsdesign, animationsdesign, responsive web design, navigations design, samt diverse relevante grafiske programmer inden for web-udvikling.</p>",
					class: "vote-technology-list-item",
				},
				{
					id: "V04",
					text: "Specialfag.dk",
					toolTipHeader: "Tildmeldings portal",
					popup:
						"<strong>Mediegrafikkernes Specialefag</strong><p>Udvikling af tilmeldingsportal til Mediegrafikernes specialfag (2017), både frontend og backend.</p> <p><strong>Teknologier:</strong> JavaScript, html, css, PHP, SQL <a href='https://specialefag.dk'>Specialefag</a></p>",
					class: "vote-technology-list-item",
				},
				{
					id: "V05",
					text: "NNTV: Videotool",
					toolTipHeader: "NNTV",
					popup:
						"Udviklingen af brugergrænseflader og interaktions design for videoportalen <a href='http://www.nntv.dk/'> http://www.videotool.dk </a>",
					class: "vote-technology-list-item",
				},
				{
					id: "V06",
					text: "Københavns tekniske skole",
					toolTipHeader: "Københavns tekniske skole",
					popup:
						"<p><strong>Faglærer</strong> på mediegrafiker og web-integrator uddannelserne</p> <strong>Fagområde:</strong> HTML, CSS, AS3, JavaScript, jQuery, PHP, MYSQL, Usability, responsive web design, navigations design, samt diverse relevante grafiske programmer inden web-udvikling.",
					class: "vote-technology-list-item",
				},
			],
		},
	},
];
export default data;
