;'use strict';
import React, { useLayoutEffect } from 'react';
import makeItRain from './makeItRain';
import './makeItRain.scss';

import './Connecting.scss';
const Connecting = () => {
	useLayoutEffect(() => { makeItRain(); })
	return (
		<section id="contact" className="container-fluid">
			<article className="container getInTouch">
				<div className="rain front-row"> </div>
				<div className="rain back-row"> </div>
				<div className="contactSectionPanel">
					<div className="contact__sectionContent">
						<div className="contact__Blurb">
							<p className="contact__paragraph">Do have an idea you'd like to collaborate on?</p>
							<p className="contact__paragraph">Or alternatively,</p>
							<p className="contact__paragraph">Would you like to know more about me or perhaps have a chat?</p>
						</div>
						<div className="contact__Blurb">
							<p className="contact__paragraph">
								Below you'll find links to my recent projects, and more information about my
								past employment, & education.<br/>
							</p>
						</div>
						<div className="contact__Blurb">
							<p className="contact__paragraph">
								There's also my email or github to checkout!<br/>
								Just click the email icon on the side panel, send one the old-fashioned way,
								or send me a text message or phone call using the number listed below!!
							</p>
						</div>
						<div className="sectionFooter">
							<address className="contact__paragraph closingMessage">
								<p className="contactMethod">Email:<br/>dkgreco@thegemtrove.tech</p>
								<p className="contactMethod">Phone:<br/>+1 (928) 457-0764</p>
							</address>
						</div>
					</div>
				</div>
			</article>
		</section>
	);
};

export default Connecting;