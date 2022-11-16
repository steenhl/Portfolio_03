import React, { useEffect, useState } from "react";
import _ from "underscore";
import data from "./data";
import SwiperMasonryGallery from "./SwiperMasonryGallery";
import "../pages.scss";

const Gallery = () => {
	const [changeGallery, setChangeGallery] = useState();

	const windowResize = () => {
		let maxWidth = window.matchMedia("(max-width: 900px)").matches;
		// Enable swiper gallery, disabale masonry gallery
		if (maxWidth) {
			setChangeGallery(data.galleryNames.swiperGallery);
		}
		// Disabale swiper gallery, Enable masonry gallery
		else {
			setChangeGallery(data.galleryNames.masonryGallery);
		}
	};
	useEffect(() => {
		windowResize();
	}, []);
	useEffect(() => {
		const delayResize = () => {
			let lazyLayout = _.debounce(windowResize, 300);
			window.addEventListener("resize", lazyLayout);
		};
		delayResize();
	}, []);

	return (
		<div id="main-wrapper">
			<header className="header-level-1">
				<h1 className="global-paddin-top">Gadekunst i Berlin</h1>
			</header>
			<SwiperMasonryGallery
				galleryData={data.galleryStreetArtTheWallData}
				swiperSetup={data.swiperSetup}
				masonrySetup={data.masonrySetup}
				changeGallery={changeGallery}
				galleryNames={data.galleryNames}
				galleryStreetArtText={data.galleryStreetArtText}
				galleryClassName="gallery"
				galleryId="swiper-masonry-01"
			></SwiperMasonryGallery>

			<SwiperMasonryGallery
				galleryData={data.galleryStreetArtBerlin}
				swiperSetup={data.swiperSetup}
				masonrySetup={data.masonrySetup}
				changeGallery={changeGallery}
				galleryNames={data.galleryNames}
				galleryStreetArtText={data.galleryStreetArtBerlinText}
				galleryClassName="gallery"
				galleryId="swiper-masonry-02"
			></SwiperMasonryGallery>
		</div>
	);
};
export default Gallery;
