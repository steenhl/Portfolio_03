import { useEffect, useRef } from "react";
import Swiper from "swiper"; // https://swiperjs.com/
import Masonry from "masonry-layout"; // https://masonry.desandro.com/
import imagesLoaded from "imagesloaded"; // https://imagesloaded.desandro.com/
import underscore from "underscore";
import { useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "./main.scss";
import parse from "html-react-parser";
// Import Swiper styles
import "swiper/css/bundle";

const SwiperMasonryGallery = ({
	galleryData,
	swiperSetup,
	masonrySetup,
	changeGallery,
	galleryNames,
	galleryStreetArtText,
	galleryClassName,
	galleryId,
}) => {
	gsap.registerPlugin(ScrollToPlugin);
	const el = useRef();
	const swiperRef = useRef();
	const swiperWrapperRef = useRef();
	const swiperPaginationRef = useRef();
	// buttons
	const swiperButtonPrevRef = useRef();
	const swiperButtonNextRef = useRef();
	// class names for swiper gallery
	let swiperClasses = useRef({
		type: String,
		swiper: "swiper",
		swiperWrapper: "swiper-wrapper",
		swiperSlide: "swiper-slide",
		swiperPagination: "swiper-pagination",
		swiperButtonPrev: "swiper-button-prev",
		swiperButtonNext: "swiper-button-next",
	});
	let swiperObj = useRef(undefined);
	let masonryObj = useRef();
	let isClicked = useRef(false);
	//
	let imgRationRef = useRef(undefined);
	let fullScreenWrapperMaxWidthRef = useRef(undefined);
	let fullScreenGalleryRef = useRef(false);
	let galleryWrapperRef = useRef(false);

	// state
	let [imagesIsLoaded, setImagesIsLoaded] = useState(false);
	let [thisSwiperDom, setThisSwiperDom] = useState(undefined);
	let [fontObserverDaysOne, setFontObserverDaysOne] = useState(false);
	let [fontObserverRobotoMedium, setFontObserverRobotoMedium] = useState(false);
	// toggle full screen Gallery
	let [thisFullScreenGalleryState, setThisFullScreenGalleryState] = useState();

	// click event object
	const toggleFullScreenGallery = (c, e, index, el) =>
		setThisFullScreenGalleryState({
			galleriIsActive: c || false,
			clickEvent: e || undefined,
			index: index || 0,
			galleryWrapper: el || undefined,
		});

	useEffect(() => {
		let FontFaceObserver = require("fontfaceobserver");
		let fontDaysOne = new FontFaceObserver("Days One");
		let fontRobotoMedium = new FontFaceObserver("Roboto-Medium");

		fontDaysOne
			.load()
			.then(function () {
				setFontObserverDaysOne(true);
			})
			.catch(function () {
				setFontObserverDaysOne(false);
			});

		fontRobotoMedium
			.load()
			.then(function () {
				setFontObserverRobotoMedium(true);
			})
			.catch(function () {
				setFontObserverRobotoMedium(false);
			});
	}, []);

	useEffect(() => {
		imagesLoaded(".swiper", function () {
			setImagesIsLoaded(true);
		});
		toggleFullScreenGallery(false);
		const { swiperSlide } = swiperClasses.current;
		let swiperDOM = swiperRef.current,
			swiperWrapperDOM = swiperWrapperRef.current,
			swiperSlideDOM = swiperWrapperDOM.querySelectorAll("." + swiperSlide),
			swiperPaginationDOM = swiperPaginationRef.current,
			swiperButtonPrevDOM = swiperButtonPrevRef.current,
			swiperButtonNextDOM = swiperButtonNextRef.current;

		setThisSwiperDom({
			swiperDOM,
			swiperWrapperDOM,
			swiperSlideDOM,
			swiperPaginationDOM,
			// buttons
			swiperButtonPrevDOM,
			swiperButtonNextDOM,
		});
	}, []);

	useEffect(() => {
		if (thisSwiperDom !== undefined && swiperClasses.current !== undefined) {
			const createMasonry = () => {
				if (fullScreenGalleryRef.current === false) {
					removeSwiperClasses();
					let id = el.current.getAttribute("id");
					let gridSelector = `#${id} .grid`;
					let masonry = new Masonry(gridSelector, masonrySetup);
					masonryObj.current = masonry;
					//setMasonryObj(masonryObj);
					if (masonryObj.current) {
						masonryObj.current.layout();
						masonryObj.current.on("layoutComplete", function (item) {});
					}
				}
			};
			const createSwiper = () => {
				if (swiperObj.current === undefined) {
					addSwiperClasses();
					let thisSwiperObj = new Swiper(el.current.querySelector(".grid"), swiperSetup);
					swiperObj.current = thisSwiperObj;
				}
			};
			const destroySwiper = () => {
				removeSwiperClasses();
				if (swiperObj.current !== undefined) {
					swiperObj.current.destroy(true, true);
					swiperObj.current = undefined;
				}
			};
			const addSwiperClasses = () => {
				const { swiper, swiperWrapper, swiperSlide, swiperButtonPrev, swiperButtonNext } = swiperClasses.current;
				const { swiperDOM, swiperWrapperDOM, swiperSlideDOM, swiperButtonPrevDOM, swiperButtonNextDOM } = thisSwiperDom;

				swiperDOM.classList.add(swiper);
				swiperWrapperDOM.classList.add(swiperWrapper);
				[...swiperSlideDOM].forEach((elm) => elm.classList.add(swiperSlide));
				// next and prev button
				swiperButtonPrevDOM.classList.add(swiperButtonPrev);
				swiperButtonNextDOM.classList.add(swiperButtonNext);
			};
			const removeSwiperClasses = () => {
				const { swiperButtonPrev, swiperButtonNext } = swiperClasses.current;

				const {
					swiperDOM,
					swiperWrapperDOM,
					swiperSlideDOM,
					swiperPaginationDOM,
					// buttons
					swiperButtonPrevDOM,
					swiperButtonNextDOM,
				} = thisSwiperDom;

				swiperDOM.classList.remove("swiper-backface-hidden");
				swiperDOM.classList.remove("swiper");
				swiperWrapperDOM.classList.remove("swiper-wrapper");
				[...swiperSlideDOM].forEach((elm) => elm.classList.remove("swiper-slide"));
				swiperPaginationDOM.querySelectorAll("span").forEach((span) => span.remove());
				swiperPaginationDOM.removeAttribute("style");
				swiperPaginationDOM.classList = ""; // remove all classes
				swiperPaginationDOM.classList.add("swiper-pagination"); // add class: swiper-pagination
				// // Swiper: remove next and prev classes
				swiperButtonPrevDOM.classList.remove(swiperButtonPrev);
				swiperButtonNextDOM.classList.remove(swiperButtonNext);
			};
			const destroyMasonry = () => {
				if (masonryObj.current) {
					masonryObj.current.destroy();
				}
			};
			const calculateRationWidth = () => {
				const calculateRation = (w, h) => w / h;
				let firstImg = el.current.querySelector(".gallery-wrapper figure:first-of-type img");
				imgRationRef.current = calculateRation(firstImg.width, firstImg.height);
				fullScreenWrapperMaxWidthRef.current = window.innerHeight * imgRationRef.current;
				// full screen gallery

				if (thisFullScreenGalleryState.galleriIsActive) {
					// if (fullScreenGalleryRef.current) {
					swiperRef.current.style.maxWidth = fullScreenWrapperMaxWidthRef.current + "px";
				} else {
					swiperRef.current.style.maxWidth = "";
				}
			};
			const createFullScreen = () => {
				if (thisFullScreenGalleryState.galleriIsActive) {
					// find closest galley wrapper
					galleryWrapperRef.current = thisFullScreenGalleryState.clickEvent.target.closest(".gallery-wrapper");
					const body = document.querySelector("body");
					let fullScreenTarget = swiperRef.current;

					fullScreenGalleryRef.current = true;

					destroyMasonry();
					createSwiper();
					// swiper scroll to active slide
					swiperObj.current.slideTo(thisFullScreenGalleryState.index, 300);

					body.classList.add("locked");
					fullScreenTarget.classList.add("full-screen");
					// create ovelay
					if (document.querySelectorAll("#overlay").length === 0) {
						const overlay = document.createElement("div");
						overlay.setAttribute("id", "overlay");
						body.appendChild(overlay);
						//delayResize();
						calculateRationWidth();
						let lazyLayout1 = underscore.debounce(calculateRationWidth, 300);
						window.addEventListener("resize", lazyLayout1);

						fullScreenTarget.querySelectorAll(".swiper-pagination").forEach((sp) => sp.classList.add("hide"));
					}
					setTimeout(() => {
						gsap.to(window, { duration: 0.3, scrollTo: 0 });
					}, 310);
				}
			};
			const destroyFullScreen = () => {
				// only react when user click and close fullScreen gallery
				if (
					thisFullScreenGalleryState.clickEvent !== undefined &&
					thisFullScreenGalleryState.galleryWrapper !== undefined
				) {
					const body = document.querySelector("body");
					let fullScreenTarget = swiperRef.current;

					fullScreenGalleryRef.current = false;
					body.classList.remove("locked");
					// remove all 'overlays', only one is expected
					document.querySelectorAll("#overlay").forEach((o) => o.remove());
					fullScreenTarget.classList.remove("full-screen");
					fullScreenTarget.querySelectorAll(".swiper-pagination").forEach((sp) => sp.classList.remove("hide"));
					let id = "#" + thisFullScreenGalleryState.galleryWrapper.current.id;

					if (galleryWrapperRef.current !== undefined) {
						gsap.to(window, { duration: 0.3, scrollTo: id });
						// reset state
						setThisFullScreenGalleryState({
							galleriIsActive: false,
							clickEvent: undefined,
							index: 0,
							galleryWrapper: undefined,
						});
					}
				}
			};
			// shift between galleries
			const whichGallery = () => {
				// 1. this.changeGallery from props -> change value in parent
				// 2. this.galleryNames. ,,, from props -> value set in parent
				// thisFullScreenGalleryState.galleriIsActive
				if (changeGallery === galleryNames.swiperGallery) {
					if (thisFullScreenGalleryState.galleriIsActive === true) {
						createSwiper();
						destroyMasonry();
						createFullScreen();
					} else {
						destroyFullScreen();
						createSwiper();
						destroyMasonry();
					}
				} else if (changeGallery === galleryNames.masonryGallery) {
					if (thisFullScreenGalleryState.galleriIsActive === true) {
						createFullScreen();
						destroyMasonry();
					} else {
						// console.log("createMasonry");
						destroyFullScreen();
						destroySwiper();
						// Wait for font to be loaded
						if (fontObserverDaysOne && fontObserverRobotoMedium) {
							createMasonry();
						}
					}
				}
			};
			// start
			if (swiperRef.current !== undefined && thisSwiperDom) {
				// imagesIsLoaded state
				if (imagesIsLoaded) {
					whichGallery();
				}
			}
		}
	}, [
		thisSwiperDom,
		changeGallery,
		imagesIsLoaded,
		galleryNames.masonryGallery,
		galleryNames.swiperGallery,
		masonryObj,
		masonrySetup,
		swiperSetup,
		thisFullScreenGalleryState,
		fontObserverDaysOne,
		fontObserverRobotoMedium,
	]);

	return (
		<section className={` ${galleryClassName} gallery-section`} id={galleryId} ref={el}>
			<header className="header-level-2 gallery-section__header">
				<h2>{parse(galleryStreetArtText.header)}</h2>
				<h3>{parse(galleryStreetArtText.subHeader)}</h3>
			</header>
			<div className="swiper grid full-screen-target" ref={swiperRef}>
				{/* .grid-sizer empty element, only used for element sizing
               	<div class="grid-sizer"></div>  */}
				<div className="swiper-wrapper gallery-wrapper" ref={swiperWrapperRef}>
					{/* Slides */}
					{galleryData &&
						galleryData.map((data, index) => {
							return (
								<figure
									key={data.id}
									className="swiper-slide grid-item"
									onClick={(e) => {
										isClicked.current = !isClicked.current;
										toggleFullScreenGallery(isClicked.current, e, index, el);
										e.preventDefault();
									}}
								>
									<img src={require("../../" + data.src + ".jpg")} alt={data.header} />
									<figcaption>
										<h2>{parse(data.header)}</h2>
										<p>{parse(data.paragraf)}</p>
									</figcaption>
								</figure>
							);
						})}
				</div>

				{/* If Swiper need navigation buttons  */}
				<div className="swiper-button-prev" ref={swiperButtonPrevRef}></div>
				<div className="swiper-button-next" ref={swiperButtonNextRef}></div>
				{/* If Swiper need pagination  */}
				<div className="swiper-pagination" ref={swiperPaginationRef}></div>
				{/* If Swiper need scrollbar
       			<div class="swiper-scrollbar"></div>  */}
				{/* full screen button  */}
			</div>
		</section>
	);
};

export default SwiperMasonryGallery;
