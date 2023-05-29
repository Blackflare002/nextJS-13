"use client";
import { useState } from "react";

const CourseSearch = ({ getSearchResults }) => {
	const [query, setQuery] = useState("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await fetch(
			`https://next-js-13-e51vdxrem-blackflare002.vercel.app/api/courses/search?query=${query}`
			// `/api/courses/search?query=${query}`
		);
		const courses = await res.json();
		getSearchResults(courses); //this function is defined in app/page.jsx.
		//Call the function here with the result of the fetch as its argument.
		//This component is imported to and implemented in page.jsx, where it changes a state variable, courses, to the result of this fetch.
	};
	return (
		<form
			className="search-form"
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				placeholder="Search Courses"
				value={query}
				onChange={(e) => {
					setQuery(e.target.value);
				}}
				className="search-input"
			/>
			<button
				className="search-button"
				type="submit"
			>
				Search
			</button>
		</form>
	);
};

export default CourseSearch;
