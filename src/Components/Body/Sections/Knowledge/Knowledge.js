;'use strict';
import React from 'react';

import AlmaMaters 							from "./containers/AlmaMaters/AlmaMaters";
import Certifications 					from "./containers/Certifications/Certifications";
import ReadingList 							from "./containers/ReadingList/ReadingList";

import './Knowledge.scss';
const Knowledge = () => {
	return (
		<section id="education">
			<div className="educationPanel knowledgeStyles">
				<div className="hardEducation">
					<AlmaMaters />
					<Certifications />
				</div>
				<ReadingList />
			</div>
		</section>
	);
};

export default Knowledge;