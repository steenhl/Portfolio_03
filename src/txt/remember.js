// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";

/*
articlePanels.forEach((panel, index) => {
    ScrollTrigger.create({
        trigger: panel,
        snap: 1 / (articlePanels.length - 1),
    });
});

markers: {
    startColor: "purple",
    endColor: "fuchsia",
    fontSize: "24px",
    indent: 200,
},


// link animations
		// panels.forEach((panel, i) => {
		allPanels.forEach((panel, i) => {
			if (i === 0) {
				gsap.to(internalLinks[i], { scale: 1.3, color: "white" });
			}
			ScrollTrigger.create({
				start: 0,
				end: (i + 1) * panel.offsetHeight,
				// end: (i + 1) * window.innerHeight - window.innerHeight / 2,
				// end: (i + 1) * panel.offsetHeight - panel.offsetHeight / 2,
				//markers: true,
				// markers: {
				// 	startColor: "purple",
				// 	endColor: "fuchsia",
				// 	fontSize: "24px",
				// 	indent: 200,
				// },
				onLeave: () => {
					if (internalLinks[i + 1]) {
						gsap.to(internalLinks[i + 1], { scale: 1.3, color: "white" });
						gsap.to(internalLinks[i], { scale: 1, color: "blue" });
					}
				},
				onEnterBack: () => {
					gsap.to(internalLinks[i], { scale: 1.3, color: "white" });
					if (internalLinks[i + 1]) {
						gsap.to(internalLinks[i + 1], { scale: 1, color: "blue" });
					}
				},
			});
		});

onLeave: () => {})
onEnterBack: () => {})


panels.forEach((panel, i) => {
			if (i === 0) {
				//gsap.to(internalLinks[i], { scale: 1.3, color: "white" });
			}
			ScrollTrigger.create({
				start: 0.5,
				end: ((i + 1) * panel.offsetHeight) / 2,
				trigger: panel,
				// end: (i + 1) * window.innerHeight - window.innerHeight / 2,
				// end: (i + 1) * panel.offsetHeight - panel.offsetHeight / 2,
				//markers: true,
				markers: {
					startColor: "purple",
					endColor: "fuchsia",
					fontSize: "24px",
					indent: 200,
				},
				onEnter: () => {
					console.log("onEnter");
				},
				onLeave: () => {
					console.log("onLeave");
					// if (internalLinks[i + 1]) {
					// 	gsap.to(internalLinks[i + 1], { scale: 1.3, color: "white" });
					// 	gsap.to(internalLinks[i], { scale: 1, color: "blue" });
					// }
				},
				onEnterBack: () => {
					//console.log("onEnterBack");
					// gsap.to(internalLinks[i], { scale: 1.3, color: "white" });
					// if (internalLinks[i + 1]) {
					// 	gsap.to(internalLinks[i + 1], { scale: 1, color: "blue" });
					// }
				},
			});
		});


        articlePanels.forEach((panel, index) => {
			// first link active
			if (index === 0) {
				setActive(internalLinks[index], internalLinks);
			}
			ScrollTrigger.create({
				trigger: panel,
				//snap: 0.5,
				//snap: 1 / articlePanels.length,
				end: ((index + 1) * panel.offsetHeight) / 2,
				// markers: {
				// 	startColor: "purple",
				// 	endColor: "fuchsia",
				// 	fontSize: "24px",
				// 	indent: 200,
				// },
				// toggle active class on navigation, scroll vertical

				onEnter: () => {
					let numberOfPanels = panels.length;

					if (index === 0) {
						setActive(internalLinks[index], internalLinks);
					} else {
						setActive(internalLinks[index + numberOfPanels - 1], internalLinks);
						//console.log(index, internalLinks[index + numberOfPanels - 1], internalLinks);
					}
				},
			});
		});

        // markers: {
		// 		startColor: "purple",
		// 		endColor: "fuchsia",
		// 		fontSize: "24px",
		// 		indent: 200,
		// 	},

            tl.current = gsap.timeline({
			scrollTrigger: {
				trigger: panelWrapper,
				pin: true,
				scrub: 1,
				// required width react and css display flex on panelWrapper
				pinSpacing: true,
				snap: {
					directional: false,
					snapTo: 1 / (panels.length - 1),
					onStart: (e) => {
						console.log(e);
					},
					inertia: true,
					duration: { min: 0.1, max: 0.1 },
				},
				onEnter: (e) => {
					console.log(e);
					//setActive(internalLinks[i + 1], internalLinks);
				},
				//end: "+=" + panelWrapper.offsetWidth * 1.3,
				// start: "top top",
				// end: () => `+=${panelWrapper.offsetWidth * 1.3}`,
				end: () => `+=${panelWrapper.offsetHeight}`,
			},
		});

        let stored = panels.reduce((prev, current, index) => [...prev, ((1 / numberOfPanels) * index).toFixed(3)], []);
		console.log(stored);
		let panelIncrement = panels.reduce((prev, current, index) => {
			let b = Number(((1 / numberOfPanels) * index).toFixed(3));
			return index === panels.length - 1 ? [...prev, b, 1] : [...prev, b];
		}, []);
		console.log(panelIncrement);


        // panelIncrement.forEach((elm, index, array) => {
					// 	// console.log(panelIncrement.length - 1);
					// 	// the is one more in array
					// 	let nextItem = index + 1 < array.length;

					// 	// 1. første element
					// 	// 2 sidste element
					// 	// 3. dem i mellem
					// 	let firstElm = index === 0;
					// 	let lastELm = index === array.length;
					// 	let allInBetween = index < 0 && index < array.length;
					// 	console.log("allInBetween " + allInBetween);

					// 	if (nextItem) {
					// 		//console.log(index);
					// 		// console.log(thisProgress);
					// 		if (thisProgress < elm.interval && thisProgress < panelIncrement[index + 1].interval) {
					// 			//console.log(nextItem);
					// 			console.log(elm.interval);
					// 		}
					// 	} else {
					// 	}
					// });
					//let breackPoint = [0, 0.33, 0.66, 1];

					// if (thisProgress > 0 && thisProgress < breackPoint[1]) {
					// 	//console.log("first-inteval");
					// }

                    {/* <nav className="navbar navbar-expand-lg bg-light">
						<div className="container-fluid">
							<button
								className="navbar-toggler"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarToggler"
								aria-controls="navbarToggler"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse" id="navbarToggler">
								<ul className="navbar-nav me-auto mb-2 mb-lg-0">
									<li className="nav-item">
										<NavLink to="/">Home</NavLink>
									</li>
									<li className="nav-item">
										<NavLink to="/RM">Rick and Morty</NavLink>
									</li>
									<li className="nav-item">
										<NavLink to="/Vote">Vote</NavLink>
									</li>
									<li className="nav-item">
										<NavLink to="/Test02">Test02</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</nav> 
					 <nav className="main-nav">
						<ul>
							<li>
								<NavLink to="/">Home</NavLink>
							</li>
							<li>
								<NavLink to="/RM">Rick and Morty</NavLink>
							</li>
							<li>
								<NavLink to="/Vote">Vote</NavLink>
							</li>
							<li>
								<NavLink to="/Test02">Test02</NavLink>
							</li>
						</ul>
					</nav> 

*/

// horisontal scrolling/animation
// props.tl.current = gsap.timeline({
// 	scrollTrigger: {

// 		trigger: panelWrapper,

// 		scrub: 1,
// 		snap: 1 / (panels.length - 1),
// 		start: "top top",
// 		pin: true,
// 		ease: "none",
// 		// required width react and css display flex on panelWrapper
// 		pinSpacing: true,
// 		// anticipatePin: 1,
// 		// snap: {
// 		// 	directional: false,
// 		// 	snapTo: 1 / (panels.length - 1),
// 		// 	inertia: true,
// 		// 	duration: { min: 0.1, max: 0.1 },
// 		// },
// 		// end: "+=3500",
// 		end: () => `+=${panelWrapper.offsetWidth}`,
// 		//end: () => `+=${panelWrapper.offsetHeight}`,
// 	},
// });

//console.log(panels);
//gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

// gsap.to(".panel:not(:last-child)", {
// gsap.to(".panel", {
// 	yPercent: -100,
// 	ease: "none",
// 	stagger: 0.5,
// 	scrollTrigger: {
// 		// onEnter: () => {
// 		// 	console.log("onEnter index = ");
// 		// },
// 		trigger: panelWrapper,
// 		start: "top top",
// 		end: "+=400%",
// 		scrub: true,
// 		pin: true,
// 	},
// });

// const stars = () => {
// 	const tl = gsap.timeline();
// 	const starArray = [
// 		s01.current,
// 		s02.current,
// 		s03.current,
// 		s04.current,
// 		s05.current,
// 		s06.current,
// 		s07.current,
// 		s08.current,
// 		s09.current,
// 		s10.current,
// 		s11.current,
// 		s12.current,
// 		s13.current,
// 	];
// 	function randomNumber(min, max) {
// 		return Math.random() * (max - min) + min;
// 	}
// 	//timeline && timeline.progress(0).kill();
// 	starArray.forEach((star) => {
// 		tl.fromTo(
// 			star,
// 			{ opacity: 0.3 },
// 			{
// 				duration: 2,
// 				opacity: 1,
// 				delay: randomNumber(0.5, 1.5),
// 				ease: "boumce.out",
// 				yoyo: true,
// 				repeat: -1,
// 			}
// 		);
// 	});

// 	return tl;
// };
