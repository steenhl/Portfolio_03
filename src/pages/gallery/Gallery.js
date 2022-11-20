import { useEffect, useState } from "react";
import data from "./data";
import SwiperMasonryGallery from "./SwiperMasonryGallery";
import { useResizeScreenWidth } from "../../Hooks/Resize/useResizeScreenWidth";
import "../pages.scss";

const Gallery = () => {
	// changeGallery:string -> the name of the gallery
	const [changeGallery, setChangeGallery] = useState();
	// hasMaxWidth: boolian
	const [hasMaxWidth, setHasMaxWidth] = useState(false);
	// delayTime:number, maxWidth:number, setHasMaxWidth: setState->fun
	useResizeScreenWidth({ delayTime: 300, maxWidth: 800, setHasMaxWidth });
	useEffect(() => {
		// change gallery
		hasMaxWidth ? setChangeGallery(data.galleryNames.swiperGallery) : setChangeGallery(data.galleryNames.masonryGallery);
	}, [hasMaxWidth]);

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
