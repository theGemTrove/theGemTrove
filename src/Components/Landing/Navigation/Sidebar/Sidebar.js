import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/pro-light-svg-icons';

import './Sidebar.scss';
const Sidebar = () => {
	const info = Object.freeze({
		link_GitHub: "https://github.com/theGemTrove",
		link_Email: "mailto:dkgreco@thegemtrove.tech",
		currentYear: new Date()
	})
	return (
		<div className="navbar">
			<div className="sidebar">
				<label htmlFor="click" id="hLabel">
					<div className="menu-icon">
						<div className="line line-1"/>
						<div className="line line-2"/>
						<div className="line line-3"/>
					</div>
				</label>
				<ul className="social-icon-list">
					<li>
						<a href={info.link_GitHub} className="social-link">
							<FontAwesomeIcon icon={faGithub}/>
						</a>
					</li>
					<li>
						<a href={info.link_Email} className="social-link">
							<FontAwesomeIcon icon={faEnvelope}/>
						</a>
					</li>
				</ul>
				<div className="year">
					<p>&#174; 2020-{info.currentYear.getFullYear()}</p>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;