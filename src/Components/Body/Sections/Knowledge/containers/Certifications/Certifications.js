import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFileCertificate, faIndustryAlt } from "@fortawesome/pro-light-svg-icons";
import React from "react";

import './Certifications.scss';
const Certifications = () => {
	const
		certData = require('./Certifications.seed.json').certifications,
		{ restaurant, technology } = certData;
	const printCertificatesToScreen = certList => {
		let certs = certList.map(cert => {
			const { certLookupLink, certificationName, certIssuer, issueDate, credentialId } = cert;
			return (<div className="cert" key={certLookupLink}>
				<a href={certLookupLink}>
					<FontAwesomeIcon icon={faFileCertificate} className="certificationIcon"/>
				</a>
				<div className="certDetailPanel">
					<h3 className="certTitle">{certificationName}</h3>
					<h4 className="certIssuer">{certIssuer} - {issueDate}</h4>
					<h6 className="credentialID">Credential ID:{' '}
						<span className="cId">
							{credentialId}
						</span>
					</h6>
				</div>
			</div>)
		});
		return (<div>
			{certs}
		</div>);
	};
	return (
		<div className="verifiedSkills">
			<h2 className="industryCertHeader">
				<FontAwesomeIcon icon={faIndustryAlt} className="eduIcon"/>
				Industry Certs
			</h2>
			<div className="certificates">
				<div className="techIndustry__certs">
					<h3 className="genIndustryHeading">Technology</h3>
					{printCertificatesToScreen(technology)}
				</div>
				<div className="foodIndustry__certs">
					<h3 className="genIndustryHeading">Restaurant</h3>
					{printCertificatesToScreen(restaurant)}
				</div>
			</div>
		</div>
	);
};

export default Certifications;