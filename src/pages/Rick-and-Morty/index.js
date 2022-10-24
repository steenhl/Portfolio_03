import React, { useState, useEffect } from "react";
import ListItem from "../../Components/List/ListItem.jsx";
import Filters from "../../Components/Filters/Filters.js";
import { PagePagination } from "../../Components/Pagination/pagination.js";
import { Search } from "../../Components/Search/Search.js";
import "../../App.scss";

import { gql, useQuery } from "@apollo/client";

function Rm(props) {
	let [pageNumber, setPageNumber] = useState(1);
	let [name, setName] = useState("");
	let [characters, setCharacters] = useState();
	let [numberOfPages, setNumberOfPages] = useState();

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

	useEffect(() => {
		document.title = props.title;
		if (data) {
			setCharacters(data.characters);
			setNumberOfPages(data.characters.info.pages);
		}
	}, [data, pageNumber, name, props.title]);

	return (
		<div>
			<header className="container d-flex justify-content-center flex-column mt-3">
				<h1 className="text-center">Best Rick and Morty</h1>
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
