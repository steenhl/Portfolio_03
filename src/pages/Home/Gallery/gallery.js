import React, { useRef, useEffect, useState } from "react";
import data from "./data";
import "./main.scss";
import gsap from "gsap";

// Import Swiper styles
import "swiper/css/bundle";

export const Gallery = ({ play }) => {
	const [timeline, setTimeline] = useState();

	useEffect(() => {
		let tl = gsap.timeline({
			onComplete: () => {
				tl.play(1);
			},
		});
		setTimeline(tl);
	}, []);

	useEffect(() => {
		if (play !== undefined && timeline !== undefined) {
			play ? timeline.play() : timeline.pause();
		}
	}, [play, timeline]);

	const imagesWrapper = useRef();
	useEffect(() => {
		if (imagesWrapper.current !== undefined && timeline) {
			let images = [...imagesWrapper.current.querySelectorAll("figure")];
			timeline.seek(0);

			const firstImage = images[0],
				totalImages = images.length - 1,
				delay = 3,
				duration = 3;

			//console.log(gsap.utils.toArray(images));
			gsap.utils.toArray(images).forEach((image, index) => {
				//console.log(image);
				var offset = index === 0 ? 0 : "-=" + duration;
				//insert first animation at a time of 0 or
				// all other animations at a time that will overlap with the previous animation fading out.
				timeline.to(
					image,
					{
						duration,
						autoAlpha: 1,
						repeat: 1,
						yoyo: true,
						repeatDelay: delay,
						onComplete: () => {
							// console.log(index);
						},
					},
					offset
				);
				//when the last image fades out we need to cross-fade the first image
				if (index === totalImages) {
					console.log(index);
					timeline.to(firstImage, { duration, autoAlpha: 1 }, offset);
				}
			});
		}
	}, [timeline]);

	return (
		<section ref={imagesWrapper} id="teaser-gallery">
			{data.map((thisData) => {
				return (
					<figure key={thisData.id}>
						<img src={require("../../../" + thisData.src + ".jpg")} alt={thisData.header} />
						<figcaption>{thisData.paragraf}</figcaption>
					</figure>
				);
			})}
		</section>
	);
};
