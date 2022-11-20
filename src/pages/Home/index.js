import "./main.scss";
import "./infobuttons.scss";

import { useRef, useEffect, useState } from "react";
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
import { InforSLider } from "../../Components/InforSlider/InforSlider";
import { FireworksModel } from "../../Components/Firework/Fireworks";
import { FireworkStopAfter } from "../../Components/Firework/FireworkStopAfter";

// import uaParser from "ua-parser-js";

export default function Home(props) {
	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(ScrollToPlugin);
	//
	let [thisClick, setThisClick] = useState(null);

	// fireworks
	let fireworksRef = useRef(null);
	let fireworkHasStopped = useRef(true);
	const [thisFirework, setThisFirework] = useState();

	useEffect(() => {
		// let parser = new uaParser();
		//console.log(parser);
		// console.log(parser.getResult());
		// console.log(parser.getDevice());
		// console.log(parser.getDevice().vendor);
		// console.log(parser.getDevice().type);
		//console.log(parser.getBrowser());
	});

	// fireworks
	FireworksModel(fireworksRef, setThisFirework, thisFirework, 6000, fireworkHasStopped);

	// start fireworks on click
	useEffect(() => {
		if (thisClick) {
			thisFirework.start();
			FireworkStopAfter(thisFirework, 7000, fireworkHasStopped);
		}
	}, [thisClick, thisFirework]);

	document.querySelector("body").classList.add("black");

	// ref
	const refPanelWrapper = useRef();
	const navInt = useRef(null);
	let scrollTween = useRef(null);

	let panel01Header = useRef(null);
	// Set document title;
	useEffect(() => {
		document.title = props.title;
	}, [props.title]);
	// intenal navigation
	const [scrollTrigger, setScrollTrigger] = useState();

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
			trigger: panels,
			end: "max",
			snap: {
				snapTo: 1 / (panels.length - 1),
				// or "labels" or function or Array
				duration: 0.5,
				directional: true,
				// ease: "power3",
			},
			onUpdate: (e) => {
				panelIsActive(e);
			},
		});
		setScrollTrigger(s1);

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
	const [activePanel, setActivePanel] = useState();
	let activePanelTest = useRef();

	// Find the active panel
	const activeAnimationPanel = (activePanel) => {
		setActivePanel(activePanel);
		activePanelTest.current = activePanel;
		//console.log(activePanel);
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
										<span className="internal-nav__span-circle"></span>
										<span className="internal-nav__span-text">{link.linkText}</span>
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
										<InforSLider scrollTrigger={scrollTrigger} activePanel={activePanel} thisFirework={thisFirework}>
											<h2>Animation</h2>
											<p>
												<strong>Animation, video og bevægelse</strong> er nogen af de stærkeste virkemidler vi kan bruge i et
												kommunikationsflow og et vigtigt værktøj i enhver markedsføring.
											</p>
											<p>
												<strong>På forsiden</strong> har jeg udforsket Animations frameworket GSAP, som stort set kan animere alt.
											</p>
											<p>
												<strong>Siden er opdel i en række sectioner,</strong> som hver især formidler en stemning gennem grafik og
												animation.
											</p>
											<p>
												<strong>Nogen af sectionerne har link</strong> til projekter som jeg har skabt gennem tiden og der kommer
												løbende flere til
											</p>
											<TechnologyList Technology={sectionData.list} play={true} />
										</InforSLider>
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
