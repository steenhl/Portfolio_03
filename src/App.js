// import ReactDOM from "react-dom/client";
import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./App.scss";

import Home from "./pages/Home/index";
import RM from "./pages/Rick-and-Morty/index";
import Vote from "./pages/Vote/vote";
import Gallery from "./pages/gallery/Gallery";

export default function App() {
	const mainWrapper = React.useRef(null);

	//which page is active
	const location = useLocation();
	React.useEffect(() => {
		if (location.pathname === "/Gallery") {
			mainWrapper.current.className = "gallery-main-wrapper";
		} else {
			if (mainWrapper.current.classList.contains("gallery-main-wrapper")) {
				mainWrapper.current.classList.remove("gallery-main-wrapper");
			}
		}
	}, [location]);
	return (
		<div id="main-wrapper" ref={mainWrapper}>
			<header id="main-header">
				{/* <nav className="navbar bg-light fixed-top"> */}
				<nav className="main-nav navbar">
					<div className="container-fluid">
						<button
							className="btn btn-secondary btn-sm bg-transparent"
							type="button"
							data-bs-toggle="offcanvas"
							data-bs-target="#offcanvasNavbar"
							aria-controls="offcanvasNavbar"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="offcanvas offcanvas-end"
							tabIndex="-1"
							id="offcanvasNavbar"
							aria-labelledby="offcanvasNavbarLabel"
						>
							<div className="offcanvas-header">
								<h2 className="offcanvas-title" id="offcanvasNavbarLabel">
									Navigation
								</h2>
								<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
							</div>
							<div className="offcanvas-body">
								<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
									<li className="nav-item">
										<NavLink to="/" className="nav-link" aria-current="page">
											<span className="active" data-bs-target="#navbarNav" data-bs-dismiss="offcanvas" aria-label="Close">
												Home
											</span>
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink to="/RM" className="nav-link">
											<span data-bs-target="#navbarNav" data-bs-dismiss="offcanvas" aria-label="Close">
												Rick and Morty
											</span>
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink to="/Vote" className="nav-link">
											<span data-bs-dismiss="offcanvas" aria-label="Close">
												Vote
											</span>
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink to="/Gallery" className="nav-link">
											<span data-bs-dismiss="offcanvas" aria-label="Close">
												Gallery
											</span>
										</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</header>

			<main>
				<Routes>
					<Route
						exact
						path="/"
						element={<Home title="Steen H.Larsen: En udforskning af frontend teknologi" mainWrapper={mainWrapper} />}
					></Route>
					<Route exact path="/RM" element={<RM title="Steen H.Larsen: Rick and Morty" />}></Route>
					<Route exact path="/Vote" element={<Vote title="Steen H.Larsen: Vote" />}></Route>
					<Route exact path="/Gallery" element={<Gallery title="Gallery" />}></Route>
				</Routes>
			</main>
		</div>
	);
}
