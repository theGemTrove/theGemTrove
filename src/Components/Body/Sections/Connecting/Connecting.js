;'use strict';
import React, { useLayoutEffect } from 'react';
import makeItRain from './makeItRain';
import './makeItRain.scss';

import './Connecting.scss';
const Connecting = () => {
	useLayoutEffect(() => { makeItRain(); })
	return (
		<section id="contact">
			<article>
				<div className="contactDiv">
					<h3 className="project__header getInTouch">Get In Touch</h3>
					<p className="whyGemTrove_lead getInTouchParagraph">Do have an idea you'd like to collaborate on?</p>
					<p className="whyGemTrove getInTouchParagraph">Or alternatively,</p>
					<p className="whyGemTrove getInTouchParagraph">Would you like to know more about me or perhaps have a chat?</p>
					<p className="whyGemTrove getInTouchParagraph">Below you'll find links to my recent projects,
						and more information about my education.</p>
					<p className="whyGemTrove getInTouchParagraph">For information about my previous employment,
						you'll just have to...dig..... (ha-ha [terrible joke, and the secret is to check out the site on desktop!])
					</p>
					<p className="whyGemTrove getInTouchParagraph">Here are some ways you can get in touch with me:</p>
					<ul className="contactMethodList">
						<li className="contactMethods">-Send Me An Email</li>
						<li className="contactMethods">-Send Me A Text Message</li>
						<li className="contactMethods">-Call Me</li>
					</ul>
					<p className="whyGemTrove getInTouchParagraph githubContact">
						There's also my <a href="https://github.com/theGemTrove" className="githubLink">GitHub</a>{' '}Account!!
					</p>
					<div className="sectionFooter contactContainer">
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
							</p>
						</address>
					</div>
					<p className="whyGemTrove getInTouchParagraph outreach">I look forward to your outreach!</p>
				</div>
			</article>
		</section>
	);
};

export default Connecting;

/*
				<div className="burmecia">
					<div className="rain front-row"> </div>
					<div className="rain back-row"> </div>
				</div>*/