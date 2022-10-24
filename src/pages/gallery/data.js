import { Navigation, Pagination, Keyboard } from "swiper";
const data = {
	masonryId: "masonry01",
	changeGallery: undefined,

	// street gallery data
	galleryStreetArtTheWallData: [
		{
			id: 1,
			src: require("../../img/street-art/street-art-the-wall/street-01/street_01.jpg"),
			header: "Den røde kjole",
			paragraf: "Denne smukke kvinde, kunne lige så godt være malet enten af Arne haugen sørensen eller Leif Sylvester",
		},
		{
			id: 2,
			src: require("../../img/street-art/street-art-the-wall/street-01/street_02.jpg"),
			header: "Venner",
			paragraf: "Venner, der hvor regnbuen ender",
		},
		{
			id: 3,
			src: require("../../img/street-art/street-art-the-wall/street-01/street_03.jpg"),
			header: "Ansigt på ansig",
			paragraf: "Hvor mange ansiger er der egentlig?",
		},
		{
			id: 4,
			src: require("../../img/street-art/street-art-the-wall/street-01/street_04.jpg"),
			header: "Hund i natten",
			paragraf: "Hund måne og nattelige gøremål",
		},
		{
			id: 5,
			src: require("../../img/street-art/street-art-the-wall/street-01/street_05.jpg"),
			header: "Ansigtet er sjælens spejl",
			paragraf: "Som om man kigger ind i et uroligt sind",
		},
		{
			id: 6,
			src: require("../../img/street-art/street-art-the-wall/street-01/street_06.jpg"),
			header: "Glæde er livets kild",
			paragraf: "Et orgie af farver, livsglæde og latter",
		},
		{
			id: 7,
			src: require("../../img/street-art/street-art-the-wall/street-01/street_07.jpg"),
			header: "Portræt i sort og hvid",
			paragraf: "Udtryktsfuldt sort hvidt ansig, men med et orgie af farver i baggrunden",
		},
		{
			id: 8,
			src: require("../../img/street-art/street-art-the-wall/street-01/street_08.jpg"),
			header: "Med næsen i sky",
			paragraf: "Kvinde, fugl og et næsten drømmende ansigt på vej gennem verden",
		},
		{
			id: 9,
			src: require("../../img/street-art/street-art-the-wall/street-01/street_09.jpg"),
			header: "En tegneserie drøm",
			paragraf: "Man kan næsten blive ved med at, finde nye figure og detaljer i dette tegneserie inspireret street art",
		},
	],
	galleryStreetArtText: {
		// header: "Berlin er et overflødighedshorn af street art ",
		header: "Berlin muren",
		subHeader:
			"Berlin er et overflødighedshorn af street art, men især en del af den gamle mur ved Mühlenstrasse, er et besøg værd",
	},
	// street gallery data
	galleryStreetArtTheWallData02: [
		{
			id: 1,
			src: require("../../img/street-art/street-art-the-wall/street-02/street_01.jpg"),
			header: "Overskrift",
			paragraf:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor,<br /> sit amet consectetur adipisicing elit consectetur adipisicing elit Lorem ipsum dolor",
		},
		{
			id: 2,
			src: "../../img/street-art/street-art-the-wall/street-02/street_02.jpg",
			header: "Overskrift",
			paragraf:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor,<br /> sit amet consectetur adipisicing elit consectetur adipisicing elit Lorem ipsum dolor,consectetur adipisicing elit Lorem ipsum dolor",
		},
		{
			id: 3,
			src: "../../img/street-art/street-art-the-wall/street-02/street_03.jpg",
			header: "Overskrift",
			paragraf: "Consectetur adipisicing elit Lorem ipsum dolor",
		},
		{
			id: 4,
			src: "../../img/street-art/street-art-the-wall/street-02/street_04.jpg",
			header: "Overskrift",
			paragraf:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor,<br /> sit amet consectetur adipisicing elit consectetur adipisicing elit Lorem ipsum dolor",
		},
		{
			id: 5,
			src: "../../img/street-art/street-art-the-wall/street-02/street_05.jpg",
			header: "Overskrift",
			paragraf:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor,<br /> sit amet consectetur adipisicing elit consectetur adipisicing elit Lorem ipsum dolor",
		},
		{
			id: 6,
			src: "../../img/street-art/street-art-the-wall/street-02/street_06.jpg",
			header: "Overskrift",
			paragraf: "consectetur adipisicing elit Lorem ipsum dolor",
		},
		{
			id: 7,
			src: "../../img/street-art/street-art-the-wall/street-02/street_07.jpg",
			header: "Overskrift",
			paragraf: "consectetur adipisicing elit Lorem ipsum dolor consectetur adipisicing elit Lorem ipsum dolor",
		},
		{
			id: 8,
			src: "../../img/street-art/street-art-the-wall/street-02/street_08.jpg",
			header: "Overskrift",
			paragraf: "consectetur adipisicing elit Lorem ipsum ",
		},
		{
			id: 9,
			src: "../../img/street-art/street-art-the-wall/street-02/street_09.jpg",
			header: "Overskrift",
			paragraf:
				"consectetur adipisicing elit Lorem ipsum dolor consectetur adipisicing elit Lorem ipsum dolor, consectetur adipisicing elit Lorem ipsum dolor, consectetur adipisicing elit Lorem ipsum dolor consectetur adipisicing elit Lorem ipsum dolor",
		},
		{
			id: 10,
			src: "../../img/street-art/street-art-the-wall/street-02/street_10.jpg",
			header: "Overskrift",
			paragraf:
				"consectetur adipisicing elit Lorem ipsum dolor consectetur adipisicing elit Lorem ipsum dolor, consectetur adipisicing elit Lorem ipsum dolor, consectetur adipisicing elit Lorem ipsum dolor consectetur adipisicing elit Lorem ipsum dolor",
		},
		{
			id: 11,
			src: "../../img/street-art/street-art-the-wall/street-02/street_11.jpg",
			header: "Overskrift",
			paragraf:
				"consectetur adipisicing elit Lorem ipsum dolor consectetur adipisicing elit Lorem ipsum dolor, consectetur adipisicing elit Lorem ipsum dolor, consectetur adipisicing elit Lorem ipsum dolor consectetur adipisicing elit Lorem ipsum dolor",
		},
		{
			id: 12,
			src: "../../img/street-art/street-art-the-wall/street-02/street_12.jpg",
			header: "Overskrift",
			paragraf:
				"consectetur adipisicing elit Lorem ipsum dolor consectetur adipisicing elit Lorem ipsum dolor, consectetur adipisicing elit Lorem ipsum dolor, consectetur adipisicing elit Lorem ipsum dolor consectetur adipisicing elit Lorem ipsum dolor",
		},
		{
			id: 13,
			src: "../../img/street-art/street-art-the-wall/street-02/street_13.jpg",
			header: "Overskrift",
			paragraf:
				"consectetur adipisicing elit Lorem ipsum dolor consectetur adipisicing elit Lorem ipsum dolor, consectetur adipisicing elit Lorem ipsum dolor, consectetur adipisicing elit Lorem ipsum dolor consectetur adipisicing elit Lorem ipsum dolor",
		},
	],
	galleryStreetArtText02: {
		header: "Berlin street art",
		// subHeader: "Berlin er et overflødighedshorn af street art, men især den del af den gamle mur som ligge ved Mühlenstrasse og som står som et mindesmærke om opdelingen af Tyskland i øst og vest, er et besøg værd"
	},

	swiperSetup: {
		speed: 400,
		spaceBetween: 10,
		slidesPerView: 1,
		// autoHeight: true,
		breakpoints: {},
		modules: [Navigation, Pagination, Keyboard],
		pagination: {
			el: ".swiper-pagination",
			dynamicBullets: true,
			clickable: true,
		},
		keyboard: {
			enabled: true,
			onlyInViewport: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	},
	galleryNames: {
		swiperGallery: "swiperGallery",
		masonryGallery: "masonryGallery",
	},

	masonrySetup: {
		itemSelector: ".grid-item",
		fitWidth: true,
		gutter: 10,
		stagger: 30,
	},
};

export default data;
