import React from 'react';
//Custom Site Sections
import About from "./Sections/About/About";
import Connecting from "./Sections/Connecting/Connecting";
import MyProjects from "./Sections/MyProjects/MyProjects";
import Experience from "./Sections/Experience/Experience";
import Knowledge from "./Sections/Knowledge/Knowledge";

const Body = () => {
	return (
		<main role="main">
			<About/>
			<Connecting/>
			<MyProjects/>
			<Experience/>
			<Knowledge/>
		</main>
	);
};

export default Body;