import React from 'react';
import CoruscatingGem from "../CoruscatingGem/CoruscatingGem";
import Typewrite from "../Typewrite/Typewrite";

import './Banner.scss';
const Banner = () => {
	const info = Object.seal({
		author: 'Dustin:',
		welcomeMsg: 'Hi There! I\'m ',
		subMessage: 'And Welcome to the Compendium of my Interests, Work, & Accomplishments'
	});
	return (
		<div className="banner">
			<h2 className="welcomeFromAuthor">
				{`${info.welcomeMsg}${info.author}`}
			</h2>
			<CoruscatingGem />
			<Typewrite />
			<div className="landingContainer-bottom">
				<div className="foxMinesGems">
					<img
						src="https://www.dropbox.com/s/giildg422g6zf45/FoxMinesGemPower.gif?raw=1"
						className="img-fluid foxMinesGemPower" loading="eager"
						alt="Anthropomorphic Fox Mining Crystals"
					/>
				</div>
				<div className="landing-subheader">
					<h4 className="banner-heading">
						{info.subMessage}
					</h4>
				</div>
			</div>
		</div>
	);
}

export default Banner;