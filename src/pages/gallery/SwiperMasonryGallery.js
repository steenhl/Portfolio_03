import React, { useEffect, useRef } from "react";
import Swiper from "swiper"; // https://swiperjs.com/
import Masonry from "masonry-layout"; // https://masonry.desandro.com/
import imagesLoaded from "imagesloaded"; // https://imagesloaded.desandro.com/
import underscore from "underscore";
import { useState } from "react";
import "./main.scss";
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

	// state
	let [imagesIsLoaded, setImagesIsLoaded] = useState(false);
	let [thisSwiperDom, setThisSwiperDom] = useState(undefined);
	// toggle full screen Gallery
	let [thisFullScreenGallery, setThisFullScreenGallery] = useState();
	//thisFullScreenGallery
	const toggleFullScreenGallery = (c, e, index) =>
		setThisFullScreenGallery({
			galleriIsActive: c || false,
			clickEvent: e || undefined,
			index: index || 0,
		});

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

				if (thisFullScreenGallery.galleriIsActive) {
					// if (fullScreenGalleryRef.current) {
					swiperRef.current.style.maxWidth = fullScreenWrapperMaxWidthRef.current + "px";
				} else {
					swiperRef.current.style.maxWidth = "";
				}
			};

			const createFullScreen = () => {
				if (thisFullScreenGallery.galleriIsActive) {
					const body = document.querySelector("body");
					let fullScreenTarget = swiperRef.current;

					fullScreenGalleryRef.current = true;

					destroyMasonry();
					createSwiper();
					// swiper scroll to active slide
					swiperObj.current.slideTo(thisFullScreenGallery.index, 300);
					window.scrollTo(0, 0);
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
				}
			};
			const destroyFullScreen = () => {
				if (thisFullScreenGallery) {
					const body = document.querySelector("body");
					let fullScreenTarget = swiperRef.current;

					fullScreenGalleryRef.current = false;
					body.classList.remove("locked");
					// remove all 'overlays', only one is expected
					document.querySelectorAll("#overlay").forEach((o) => o.remove());
					fullScreenTarget.classList.remove("full-screen");
					fullScreenTarget.querySelectorAll(".swiper-pagination").forEach((sp) => sp.classList.remove("hide"));
				}
			};

			// shift between galleries
			const whichGallery = () => {
				// 1. this.changeGallery from props -> change value in parent
				// 2. this.galleryNames. ,,, from props -> value set in parent
				// thisFullScreenGallery.galleriIsActive
				if (changeGallery === galleryNames.swiperGallery) {
					if (thisFullScreenGallery.galleriIsActive === true) {
						createSwiper();
						destroyMasonry();
						createFullScreen();
					} else {
						destroyFullScreen();
						createSwiper();
						destroyMasonry();
					}
				} else if (changeGallery === galleryNames.masonryGallery) {
					if (thisFullScreenGallery.galleriIsActive === true) {
						createFullScreen();
						destroyMasonry();
					} else {
						destroyFullScreen();
						destroySwiper();
						createMasonry();
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
		thisFullScreenGallery,
	]);

	return (
		<section className={galleryClassName} id={galleryId} ref={el}>
			<header className="header-level-2">
				<h2>{galleryStreetArtText.header}</h2>
				<h3>{galleryStreetArtText.subHeader}</h3>
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
										toggleFullScreenGallery(isClicked.current, e, index);
										e.preventDefault();
									}}
								>
									<img src={data.src} alt={data.header} />
									<figcaption>
										<h2>{data.header}</h2>
										<p>{data.paragraf}</p>
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
