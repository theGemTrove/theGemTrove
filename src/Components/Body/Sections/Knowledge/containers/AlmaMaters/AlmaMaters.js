import React, { Fragment } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiploma, faExternalLink, faSchool} from "@fortawesome/pro-light-svg-icons";
import './AlmaMaters.scss';
const AlmaMaters = () => {
	const printSchoolsToScreen = () => {
		const schoolList = require('./AlmaMaters.seed.json');
		const almaMaters = schoolList.map(school => {
			const {name, slink, gradYear, degreeType, focus} = school;
			return (<div className="schoolContainer">
				<h3 className="schoolName">
					{name}
				</h3>
				<div className="schoolDetail">
					<h3 className="degreeType">{degreeType} - {gradYear}</h3>
					<h4 className="degreeFocus">Focus: {focus}</h4>
				</div>
				<div className="schoolExternalDetails">
					<a href={slink}>
						<FontAwesomeIcon icon={faExternalLink} className="extIcon"/>
					</a>
					<FontAwesomeIcon icon={faDiploma} className="diplomaIcon"/>
				</div>
			</div>);
		});
		return (
			<Fragment>
				{almaMaters}
			</Fragment>
		);
	};
	return (
		<div className="almaMaters">
			<h2 className="almaMaterHeader">
				<FontAwesomeIcon icon={faSchool} className="eduIcon"/>
				Alma Maters
			</h2>
			{printSchoolsToScreen()}
		</div>
);
};

export default AlmaMaters;