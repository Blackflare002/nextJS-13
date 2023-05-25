"use client";
import { useState, useEffect } from "react";
import LoadingPage from "./loading";
import Link from "next/link";
import Courses from "./components/courses";

const HomePage = () => {
	//client-side components are more interactive, require regular React stuff like useEffect and useState
	const [courses, setCourses] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchCourses = async () => {
			const res = await fetch("/api/courses"); //gets the courses data
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
			<Courses courses={courses} />
			{/* data is no longer fetched in Courses.jsx, it's fetched here and passed into Courses.jsx as a prop, both her and on the Courses.jsx page */}
		</>
	);
};

export default HomePage;
