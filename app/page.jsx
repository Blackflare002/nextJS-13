"use client";
import { useState, useEffect } from "react";
import LoadingPage from "./loading";
import Courses from "./components/Courses";
import CourseSearch from "./components/CourseSearch";

const HomePage = () => {
	const [courses, setCourses] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchCourses = async () => {
			const res = await fetch(
				"https://next-js-13-beta.vercel.app/api/courses"
				// "/api/courses"
			); //gets the courses data
			const data = await res.json();
			setCourses(data); //puts the data in a State variable
			setLoading(false);
		};
		fetchCourses();
	}, []);

	if (loading) {
		return <LoadingPage />;
	}
	return (
		<>
			<h1>Welcome to Hell</h1>
			<CourseSearch
				getSearchResults={(results) =>
					setCourses(results)
				}
				// the getSearchResults function is defined here, used in the CourseSearch component
			/>
			<Courses courses={courses} />
		</>
	);
};

export default HomePage;
