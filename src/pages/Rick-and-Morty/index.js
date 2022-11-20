import { useState, useEffect, useRef } from "react";
import ListItem from "../../Components/List/ListItem.jsx";
import Filters from "../../Components/Filters/Filters.js";
import { PagePagination } from "../../Components/Pagination/pagination.js";
import { Search } from "../../Components/Search/Search.js";
import "../../App.scss";
import "../pages.scss";
import "./rm.scss";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSnowboarding } from "@fortawesome/free-solid-svg-icons";

import { ReactSVG } from "react-svg";

import { useResizeScreenWidth } from "../../Hooks/Resize/useResizeScreenWidth";
// import "animate.compat.css";
import "animate.css";

import { gql, useQuery } from "@apollo/client";

// import uaParser from "ua-parser-js";

function Rm(props) {
	let [pageNumber, setPageNumber] = useState(1);
	let [name, setName] = useState("");
	let [characters, setCharacters] = useState();
	let [numberOfPages, setNumberOfPages] = useState();
	let [showTurn, setShowTurn] = useState("");
	let repeat = useRef(3);
	let repeatUpdate = useRef(0);
	const turnSvg = useRef();

	const COLLECTIONS = gql`
		query getCharacters($pageNumber: Int!, $name: String!) {
			characters(page: $pageNumber, filter: { name: $name }) {
				info {
					count
					pages
				}
				results {
					id
					name
					gender
					status
					species
					image
					location {
						name
					}
					origin {
						name
					}
					episode {
						name
						episode
					}
				}
			}
		}
	`;
	const { loading, error, data } = useQuery(COLLECTIONS, {
		variables: {
			pageNumber: pageNumber,
			name: name,
		},
	});

	const [hasMaxWidth, setHasMaxWidth] = useState(false);
	// delayTime:number, maxWidth:number, setHasMaxWidth: setState->fun
	useResizeScreenWidth({ delayTime: 300, maxWidth: 601, setHasMaxWidth });
	useEffect(() => {
		// setShowTurn
		hasMaxWidth ? setShowTurn("turn-screen") : setShowTurn("");
	}, [hasMaxWidth]);

	useEffect(() => {
		document.title = props.title;
		if (data) {
			setCharacters(data.characters);
			setNumberOfPages(data.characters.info.pages);
		}
	}, [data, pageNumber, name, props.title]);

	return (
		<div className={`rm-wrapper ${showTurn}`}>
			<header className="container d-flex justify-content-center flex-column mt-3">
				{/* {showTurn && <FontAwesomeIcon icon={faSnowboarding} />} */}
				{
					// <ReactSVG
					// 	ref={turnSvg}
					// 	src="./imgs/svgs/rotateScreen.svg"
					// 	loading={() => <span>Loading</span>}
					// 	afterInjection={(error, svg) => {
					// 		const animateClasses = ["animate__animated", "animate__tada"];
					// 		const svgWrapper = svg.parentElement.parentElement;
					// 		const svgWrapperClassName = "svg-wrapper";
					// 		if (error) {
					// 			console.error(error);
					// 			return;
					// 		}
					// 		console.log(svgWrapper);
					// 		if (svgWrapper) {
					// 			svgWrapper.classList.add(svgWrapperClassName);
					// 			//if (!svgWrapper.classList.contains(svgWrapperClassName)) {
					// 			animateClasses.forEach((thisClass) => {
					// 				svg.classList.add(thisClass);
					// 			});
					// 			svg.addEventListener("animationend", () => {
					// 				console.log("END");
					// 				// console.log(repeatUpdate.current);
					// 				// console.log(repeat.current);
					// 				if (repeatUpdate.current !== repeat.current) {
					// 					//console.log(repeatUpdate.current !== repeat.current);
					// 					setTimeout(() => {
					// 						animateClasses.forEach((thisClass) => {
					// 							// console.log(svg);
					// 							// console.log(thisClass);
					// 							svg.classList.remove(thisClass);
					// 						});
					// 						repeatUpdate.current++;
					// 						//svg.removeEventListener("animationend");
					// 					}, 300);
					// 					setTimeout(() => {
					// 						animateClasses.forEach((thisClass) => {
					// 							svg.classList.add(thisClass);
					// 						});
					// 					}, 400);
					// 					//console.log(svg.classList);
					// 					if (repeatUpdate.current === repeat.current) {
					// 						repeatUpdate.current = 0;
					// 					}
					// 					// console.log(repeatUpdate.current);
					// 				}
					// 			});
					// 		}
					// 	}}
					// />
				}

				<h1 className="text-center global-paddin-top">Best Rick and Morty</h1>
				<Search setPageNumber={setPageNumber} setName={setName}></Search>
			</header>
			<section className="main-wrapper">
				{error && (
					<section className="could-not-fetch-data">
						<h2 className="alert alert-warning " role="alert">
							could not fetch data
						</h2>
					</section>
				)}
				{loading && <div>Loading ...</div>}
				<Filters></Filters>
				{!error && characters && <ListItem results={characters.results} />}
				{!error && numberOfPages !== undefined && (
					<PagePagination pageCount={numberOfPages} setPageNumber={setPageNumber} pageNumber={pageNumber}></PagePagination>
				)}
			</section>
		</div>
	);
}

export default Rm;
