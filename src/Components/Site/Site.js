import React from 'react';

// Custom Site Components

import Splash	from "../Landing/Splash/Splash";
import Body from "../Body/Body";
import Footer   from "../Footer/Footer";

import './Site.scss';
function Site() {
	return (
			<div className="appHook">
				<Splash />
				<Body />
				<Footer />
			</div>
	)
}

export default Site;