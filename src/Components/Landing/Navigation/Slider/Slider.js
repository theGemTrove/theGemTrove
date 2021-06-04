import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGlobeAmericas} from '@fortawesome/pro-light-svg-icons';

import './Slider.scss';
const Slider = () => {
	const info = Object.freeze({
		links: {
			about: {
				name: 'About',
				appendClass: '_about'
			},
			contact: {
				name: 'Contact',
				appendClass: '_contact'
			},
			projects: {
				name: 'My Projects',
				appendClass: '_about'
			},
		}
	});
	return (
		<nav className="navigation">
			<ul className="navigation-list">
				<li className="navigation-item">
					<a href="#about" className="navigation-link">
						<span className="navigem desc_about">
            	About
						</span>
					</a>
				</li>
				<li className="navigation-item">
					<a href="#contact" className="navigation-link">
						<span className="navigem desc_contact">
							Contact
						</span>
					</a>
				</li>
				<li className="navigation-item">
					<a href="#recentProjects" className="navigation-link">
						<span className="navigem desc_projects">
							My Projects
						</span>
					</a>
				</li>
				<li className="navigation-item">
					<a href="#employment" className="navigation-link">
						<span className="navigem desc_employment">
							Employment
						</span>
					</a>
				</li>
				<li className="navigation-item">
					<a href="#education" className="navigation-link">
						<span className="navigem desc_education">
							Education
						</span>
					</a>
				</li>
			</ul>
			<div className="langPanel">
				<FontAwesomeIcon icon={faGlobeAmericas} className="langPanel"/>
				<p className="langDesc"
				>
					American English
				</p>
				<p className="langDesc-disabled" data-toggle="tooltip" data-placement="top"
					 title="Czech Language Translation Services Coming Soon!"
				>
					Češtinu
				</p>
			</div>
			<div className="copyright">
				<p>
					The Gem Trove
					<br/>
					A Project Of Imagination
				</p>
			</div>
		</nav>
	);
}

export default Slider;