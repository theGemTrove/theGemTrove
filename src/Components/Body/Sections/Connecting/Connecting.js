;'use strict';
import React /*, { useLayoutEffect }*/ from 'react';
//import makeItRain from './makeItRain';
//import './makeItRain.scss';

import './Connecting.scss';
const Connecting = () => {
	//useLayoutEffect(() => { makeItRain(); })
	return (
		<section id="contact">
			<article>
				<h3 className="sectionTitle">Contact Me</h3>
				<div className="contactPanel">
					<div className="contactSection">
						<p className="contactParagraph">Do have an idea you'd like to collaborate on?</p>
						<p className="contactParagraph">Or alternatively,</p>
						<p className="contactParagraph">Would you like to know more about me or perhaps have a chat?</p>
						<p className="contactParagraph">
							Below you'll find links to my recent projects, and more information about my education.
						</p>
						<p className="contactParagraph">
							For information about my previous employment, please visit this site on desktop. I will implement
							a mobile version soon!
						</p>
					</div>
					<div className="contactSection">
						<p className="contactParagraph">
							Here are some ways to get in touch with me!
						</p>
						<p className="contactParagraph contacts_1">
							First, there's my <a href="https://github.com/theGemTrove" className="githubLink">GitHub</a>{' '}Account:
							please consider giving it a follow.
						</p>
						<p className="contactParagraph">Looking for something more direct?</p>
						<p className="contacts_2">Is It An <span className="halp">Emergency?</span></p>
						<p className="contacts_2">Call Me; Otherwise there's also:</p>
						<div className="contactSubContainer">
								<address className="contact__paragraph closingMessage">
									<p className="contactMethods">Email:{' '}
										<span className="hardContact">
									<a href="mailto:dkgreco@thegemtrove.tech">
										dkgreco@thegemtrove.tech
									</a>
								</span>
									</p>
									<p className="contactMethods">
										Phone:{' '}
										<span className="hardContact">
									<a href="tel:+1928-457-0764">
										+1 (928) 457-0764
									</a>
								</span>
										<span className="small">{' '}- Text Meh!</span>
									</p>
								</address>
							</div>
					</div>
				</div>
			</article>
		</section>
	);
};

export default Connecting;