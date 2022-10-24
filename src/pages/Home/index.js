import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import sectionsData from "./data-panels";
import dataLink from "./data-link";
import galleryData from "./galleryData";
import { RM } from "./RM/RM";
import { RmBackground } from "./RM/RmBackground";

import { Likes } from "./Likes/Likes";
import { NightLandscape } from "./NightMoods/nightLandscape";
import { TechnologyList } from "./Technology/TechnologyList";
import { Panel } from "./Panels/Panel";
import { Contact } from "./Panels/Contact";
import { Gallery02 } from "./Gallery/Gallery02";
import { Fireworks } from "fireworks-js";
import "./main.scss";

export default function Home(props) {
	// registerPlugin
	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(ScrollToPlugin);
	//
	let [thisClick, setThisClick] = useState(null);

	// fireworks
	let fireworksRef = useRef(null);
	const [fireworksObj, setFireworksObj] = useState();
	const [fireworksTl, setFireworksTl] = useState();
	let startFireworks = useRef(false);
	useEffect(() => {
		setFireworksTl(gsap.timeline({}));
	}, []);

	useEffect(() => {
		const container = fireworksRef.current;
		if (fireworksObj === undefined) {
			let f = new Fireworks(container, {
				autoresize: true,
				opacity: 0.3,
				acceleration: 1,
				friction: 0.97,
				gravity: 1.5,
				particles: 50,
				trace: 3,
				traceSpeed: 10,
				explosion: 5,
				intensity: 8,
				flickering: 20,
				lineStyle: "round",
				hue: { min: 0, max: 220 },
				delay: { min: 15, max: 30 },
				rocketsPoint: { min: 50, max: 50 },
				lineWidth: {
					explosion: { min: 1, max: 3 },
					trace: { min: 1, max: 2 },
				},
				brightness: { min: 50, max: 80 },
				decay: { min: 0.015, max: 0.03 },
				mouse: { click: true, move: false, max: 2 },
			});
			setFireworksObj(f);
		}
	}, [fireworksObj]);
	useEffect(() => {
		if (fireworksObj !== undefined) {
			fireworksObj.canvas.id = "canvas-fireworks";
		}
	}, [fireworksObj]);
	// start fireworks on click
	useEffect(() => {
		if (startFireworks.current === false && fireworksTl) {
			fireworksObj.start();
			startFireworks.current = true;
			setTimeout(() => {
				startFireworks.current = false;
				// DOM Canvas
				let canvas = fireworksObj.canvas;
				fireworksTl.to(canvas, {
					opacity: 0,
					duration: 0.5,
					onComplete: () => {
						//
						fireworksObj.stop();
						fireworksTl.to(canvas, {
							opacity: 1,
							duration: 0.1,
						});
					},
				});
			}, 7000);
		}
	}, [thisClick, fireworksTl, fireworksObj]);

	document.querySelector("body").classList.add("black");

	// ref
	const refPanelWrapper = useRef(null);
	const navInt = useRef(null);
	let scrollTween = useRef(null);
	//

	let panel01Header = useRef(null);

	// Set document title;
	useEffect(() => {
		document.title = props.title;
	}, [props.title]);

	// intenal navigation
	useEffect(() => {
		const internalNav = navInt.current;
		const panelWrapper = refPanelWrapper.current;

		const internalLinks = [...internalNav.querySelectorAll("a")];
		const panels = [...panelWrapper.querySelectorAll(".panel")];

		// set the active navigations link first time
		setActiveLink(internalLinks[0], internalLinks);
		// set the active animations panel the first time
		activeAnimationPanel(panels[0]);

		let panelIncrement = panels.reduce((prev, current, index) => {
			// calculate the decimal number for each panel, in relation to the entire scroll animation's length
			let scrollTweenFagment = Number(((1 / (panels.length - 1)) * index).toFixed(3));
			return [...prev, { interval: scrollTweenFagment, panel: current, index: index, active: false }];
		}, []);

		const panelIsActive = (e) => {
			let n = parseFloat(e.progress.toFixed(2));
			panelIncrement.forEach((e) => {
				// find the active panel
				// only fire ones when active
				if (e.interval === n && !e.active) {
					e.active = true;
					setActiveLink(internalLinks[e.index], internalLinks);
					activeAnimationPanel(e.panel);
				} else if (e.interval !== n) {
					e.active = false;
				}
			});
		};

		let s1 = ScrollTrigger.create({
			start: 0,
			end: "max",
			snap: {
				snapTo: 1 / (panels.length - 1),
				// or "labels" or function or Array
				duration: 0.5,
				directional: true,
				ease: "power3",
			},
			onUpdate: (e) => {
				panelIsActive(e);
			},
		});

		// cleanup function will be called when component is removed
		return () => {
			s1.kill();
		};
	}, []);
	const setActiveLink = (link, links) => {
		const duration = 0.2;
		links.forEach((el) => {
			gsap.to(el, {
				duration: duration,
				color: "black",
			});
		});
		gsap.to(link, {
			duration: duration,
			color: "white",
		});
	};
	const goToSection = (index) => {
		let scrollTo = index * window.innerHeight;
		let thisS = gsap.to(window, {
			scrollTo: { y: scrollTo, autoKill: false },
			duration: 0.5,
			onComplete: () => (scrollTween.current = null),
			overwrite: true,
		});
		scrollTween.current = thisS;
	};
	const goToLink = (e, index) => {
		e.preventDefault();
		goToSection(index, navInt.current.querySelectorAll("a"));
	};

	// *** Start and stop timeline in child conponent ***/
	// Panel-1: nightLandscape
	let [panel1Play, setpanel1Play] = useState(false);
	// Panel-2: RM
	let [RmPlay, setRmPlay] = useState();
	// Panel-3: Likes
	let [likesPlay, setLikesPlay] = useState(false);
	// panel 4. Gallery
	let [galleryPlay, setGalleryPlay] = useState(false);
	// panel-5 : Contact ,,,
	let [contactPlay, setContactPlay] = useState(false);

	// insert SVG icon into the active panel
	function renderIcon(icon) {
		if (icon === "NightLandscape") {
			return <NightLandscape panel01Header={panel01Header} panel1Play={panel1Play} />;
		}
		if (icon === "RM") {
			return <RM RmPlay={RmPlay} />;
		}
		if (icon === "Likes") {
			return <Likes play={likesPlay} />;
		}
		if (icon === "Gallery") {
			return <Gallery02 play={galleryPlay} data={galleryData} delayTime="4" fadeTime="1" />;
		}
	}

	// Find the active panel
	const activeAnimationPanel = (activePanel) => {
		// Panel-1: nightLandscape
		if (activePanel.id === "panel-1") {
			setpanel1Play(true);
		} else {
			setpanel1Play(false);
		}
		// Panel-2: Rick and Morthy
		if (activePanel.id === "panel-2") {
			setRmPlay(true);
		} else {
			setRmPlay(false);
		}
		// Panel-3 : Likes
		if (activePanel.id === "panel-3") {
			setLikesPlay(true);
		} else {
			setLikesPlay(false);
		}
		// Panel-4 : Gallery
		if (activePanel.id === "panel-4") {
			setGalleryPlay(true);
		} else {
			setGalleryPlay(false);
		}
		// Panel-5 : Contact
		if (activePanel.id === "panel-5") {
			setContactPlay(true);
		} else {
			setContactPlay(false);
		}
	};

	function renderTechnologyList(section) {
		if (section.id === "panel-2") {
			return <TechnologyList Technology={section.list} play={RmPlay} />;
		}
		if (section.id === "panel-3") {
			return <TechnologyList Technology={section.list} play={likesPlay} />;
		}
		if (section.id === "panel-4") {
			return <TechnologyList Technology={section.list} play={galleryPlay} />;
		}
		if (section.id === "panel-5") {
			return <TechnologyList Technology={section.list} play={contactPlay} />;
		}
	}

	function renderSvgBackground(icon) {
		if (icon === "RM") {
			// background animation of stars
			return <RmBackground playStars={RmPlay} />;
		}
	}

	return (
		<div className="home-wrapper back-ground-black">
			<nav className="internal-nav front-page" ref={navInt}>
				<ul>
					{dataLink &&
						dataLink.map((link, index) => {
							return (
								<li key={link.id}>
									<a href={link.linkHref} onClick={(e) => goToLink(e, index)}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-circle-fill"
											viewBox="0 0 16 16"
										>
											<circle cx="8" cy="8" r="8" />
										</svg>
										<span>{link.linkText}</span>
									</a>
								</li>
							);
						})}
				</ul>
			</nav>
			<div className="home-article-panel-wrapper panel-wrapper-level1" ref={refPanelWrapper}>
				{/* panels */}
				{sectionsData &&
					sectionsData.map((sectionData, index) => {
						// first panel
						if (index === 0) {
							return (
								<section
									className={sectionData.class + " panel panel-link panel-wrapper-level2"}
									id={sectionData.id}
									key={sectionData.class}
									onClick={(e) => setThisClick(e)}
									ref={fireworksRef}
								>
									<article className="article-wrapper" ref={panel01Header}>
										<div className="article-inner-wrapper">
											<header>
												{sectionData.header && <h2 className="header-level1"> {sectionData.header}</h2>}
												{sectionData.subheading && <h3 className="header-level1">{sectionData.subheading}</h3>}
											</header>
											{sectionData.p && <p>{sectionData.p}</p>}
										</div>
									</article>
									<div className="panel-wrapper-level3">
										{sectionData.svg && <div className="svg-figure">{sectionData.svg && renderIcon(sectionData.svg)}</div>}
									</div>
								</section>
							);
						}
						// All panel between first and last
						else if (index > 0 && index < sectionsData.length - 1) {
							return (
								<Panel
									sectionData={sectionData}
									renderTechnologyList={renderTechnologyList}
									renderIcon={renderIcon}
									key={sectionData.id}
									renderSvgBackground={renderSvgBackground}
								></Panel>
							);
						} else {
							// Last panel
							return (
								// sectionData, renderTechnologyList, renderIcon
								<Contact
									sectionData={sectionData}
									renderTechnologyList={renderTechnologyList}
									renderIcon={renderIcon}
									key={sectionData.id}
								></Contact>
							);
						}
					})}
			</div>
		</div>
	);
}
