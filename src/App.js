// import ReactDOM from "react-dom/client";
import "../src/pages/Home/main.scss";
import "./App.scss";
import React, { useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Home from "./pages/Home/index";
import RM from "./pages/Rick-and-Morty/index";
import Vote from "./pages/Vote/vote";
import Gallery from "./pages/gallery/Gallery";
import gsap from "gsap";
import { MainNavigation } from "./Navigation/MainNavigation";

import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";

import { fab } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";

import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faComment, faSnowflake } from "@fortawesome/free-regular-svg-icons";

// library.add(faCheckSquare, faCoffee, faComment, faSnowflake);
library.add(fab, faApple, faCheckSquare, faCoffee, faComment, faSnowflake);

export default function App() {
	//which page is active
	const location = useLocation();
	const mainWrapper = React.useRef(null);
	const changePageDiv = React.useRef(null);
	// change page fade
	const [displayLocation, setDisplayLocation] = useState(location);
	const [transitionStage, setTransistionStage] = useState("fadeIn");

	// animation
	const [tl, setTl] = useState();

	useEffect(() => {
		const thisTl = gsap.timeline({});
		thisTl.set(changePageDiv.current, {
			backgroundColor: "aliceblue",
			position: "relative",
			width: 0,
			height: 0,
			top: 0,
			left: 0,
			zIndex: 100,
		});
		setTl(thisTl);
	}, []);

	useEffect(() => {
		if (changePageDiv.current !== undefined && tl !== undefined) {
			let animationDiv = changePageDiv.current;
			if (transitionStage === "fadeOut") {
				// console.log(location);
				tl.set(animationDiv, {
					position: "absolute",
					width: "100vw",
					height: "100vh",
					opacity: 1,
				});

				tl.to(animationDiv, {
					opacity: 1,
					duration: 0.3,
					onComplete: () => {
						setTransistionStage("fadeIn");
						setDisplayLocation(location);
						//console.log(location);
					},
				});
			}
			if (transitionStage === "fadeIn") {
				tl.set(animationDiv, {
					position: "absolute",
					width: "100vw",
					height: "100vh",
				});

				tl
					.to(animationDiv, {
						opacity: 0,
						duration: 0.3,
					})
					.set(animationDiv, {
						position: "relative",
						width: "0",
						height: "0",
					});
			}
		}
	}, [tl, transitionStage, location]);

	// the page changes
	useEffect(() => {
		if (location !== displayLocation) {
			setTransistionStage("fadeOut");
		}
	}, [location, displayLocation]);

	useEffect(() => {
		if (location.pathname === "/Gallery") {
			mainWrapper.current.className = "gallery-main-wrapper";
		} else {
			if (mainWrapper.current.classList.contains("gallery-main-wrapper")) {
				mainWrapper.current.classList.remove("gallery-main-wrapper");
			}
		}
	}, [location]);

	return (
		<>
			<div ref={changePageDiv} className={`${transitionStage} changePage`}></div>
			<div id="main-wrapper" ref={mainWrapper}>
				<header id="main-header">
					<MainNavigation />
				</header>

				<main id="main">
					<Routes location={displayLocation}>
						<Route
							exact
							path="/"
							element={<Home title="Steen H.Larsen: En udforskning af frontend teknologi" mainWrapper={mainWrapper} />}
						></Route>
						<Route exact path="/Gallery" element={<Gallery title="Gallery" />}></Route>
						<Route exact path="/RM" element={<RM title="Steen H.Larsen: Rick and Morty" />}></Route>
						<Route exact path="/Vote" element={<Vote title="Steen H.Larsen: Vote" />}></Route>
					</Routes>
				</main>
			</div>
		</>
	);
}
