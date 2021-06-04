import React from 'react';

import Brand from "./features/Brand/Brand";
import Banner from './features/Banner/Banner';
import Sidebar from "../Navigation/Sidebar/Sidebar";
import Slider from "../Navigation/Slider/Slider";

import './Splash.scss';
const Splash = () => {
	return (
		<div id="pageContainer">
			<input type="checkbox" className="checkbox" id="click" hidden/>
			<Sidebar />
			<Slider />
			<header className="header">
				<Brand />
				<Banner />
			</header>
		</div>
	);
};

export default Splash;