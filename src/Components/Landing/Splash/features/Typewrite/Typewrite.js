;'use strict';
import React from 'react';
import Typewriter from "typewriter-effect";

import './Typewrite.scss';
const Typewrite = () => { 'use strict';
	const info = Object.seal({
		typewriterStrings: [
			'Technologist', 'MERN-Stack Developer', 'Javascript Virtuoso', 'CyberSec Enthusiast',
			'Husband', 'Pet Parent',
			'Home Cook', 'Bread Baker',
			'Gamer', 'Avid Reader', 'Polyglot'
		]
	});
	return (
		<Typewriter
			onInit={(typewriter) => {
				typewriter
					.pauseFor(2500)
					.deleteAll()
					.start();
			}}
			options={{
				strings: info.typewriterStrings,
				autoStart: true,
				loop: true,
				wrapperClassName: 'typewriterStyle'
			}}
		/>
	);
}

export default Typewrite;