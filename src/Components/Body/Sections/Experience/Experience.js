import React, { useState } from 'react';

import './Experience.scss';
const Experience = () => {
	const [loading, toggleLoading] = useState(true);
	const [sectionsLoaded, trackLoadedSection] = useState([]);

	const toggleLoader = evt => {
		let addingSectionToArray = false;
		if (sectionsLoaded.indexOf(`${evt.target.id}`) === -1) {
			sectionsLoaded.push(`${evt.target.id}`);
			addingSectionToArray = true;
		} else if ((sectionsLoaded.indexOf(`${evt.target.id}`) !== -1)) {
			sectionsLoaded.splice(sectionsLoaded.indexOf(evt.target.id), 1);
		}
		if (addingSectionToArray) {
			toggleLoading(false);
		} else if (sectionsLoaded.length === 0) {
			toggleLoading(true);
		}
	}
	return (
		<section id="employment">
			<div className="gameScreen">
				<div className="left_sidePanel">
					<h2 className="employmentHeading">Employment History</h2>
					<div className="controlpad">
						<div className="employmentSelections">
							<div className="techEmployment">
								<p>
									<button className="btn btn-primary employmentButton" type="button"
													onClick={toggleLoader} id="theGemTrove" value="theGemTrove"
													data-toggle="collapse" data-target="#influx_collapse"
													aria-expanded="false" aria-controls="influx_collapse">
										The GemTrove
									</button>
								</p>
								<p>
									<button className="btn btn-primary employmentButton" type="button" value="Avoka"
													data-toggle="collapse" data-target="#avoka_collapse" onClick={toggleLoader} id="Avoka"
													aria-expanded="false" aria-controls="avoka_collapse">
										Avoka
									</button>
								</p>
								<p>
									<button className="btn btn-primary employmentButton" type="button"
													data-toggle="collapse" data-target="#intrado_collapse" onClick={toggleLoader} id="Intrado"
													aria-expanded="false" aria-controls="intrado_collapse">
										Intrado
									</button>
								</p>
							</div>
							<div className="restaurantEmployment">
								<p>
									<button className="btn btn-primary employmentButton" type="button"
													data-toggle="collapse" data-target="#panera_collapse" onClick={toggleLoader} id="Panera"
													aria-expanded="false" aria-controls="panera_collapse">
										Panera Bread
									</button>
								</p>
								<p>
									<button className="btn btn-primary employmentButton" type="button"
													data-toggle="collapse" data-target="#coffeeBagels_collapse" onClick={toggleLoader} id="CAndB"
													aria-expanded="false" aria-controls="coffeeBagels_collapse">
										Coffee & Bagels
									</button>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="right_sidePanel container">
					<div className="loadingMessage msgShell">
						{loading && <div className="loadingGameScreen">
							<p>Select A Button On The Left To</p>
							<p>View My Employment Info For A Given Company!</p>
							<p className="blink">Start</p>
						</div>}
					</div>
					<div className="collapse" id="influx_collapse">
						<div>
							<section id="influx" className="current_employment">
								<hgroup>
									<h3 className="companyName">The GemTrove</h3>
									<h4 className="jobRole">Role:<br/><span className="blink jtitle">FullStack MERN Developer</span>
									</h4>
									<h4 className="detailContent">My own personal freelancing work and services.</h4>
								</hgroup>
							</section>
						</div>
					</div>
					<div className="collapse" id="avoka_collapse">
						<div>
							<section id="avoka" className="previous_employment">
								<hgroup>
									<h3 className="companyName">
										<a
											href="https://www.crunchbase.com/organization/avoka"
										>Avoka
										</a>
									</h3>
									<h4 className="jobRole">Role:<br/><span className="blink jtitle">Technical Consultant</span>
									</h4>
									<h4 className="detailContent">Avoka was a finTech start-up that specialized in
										customer acquisition services for financial institutions.</h4>
									<h5 className="acquisitionBy">Acquired by<span> </span>
										<a href="https://www.temenos.com/us/products/infinity/">
											Temenos
										</a> 12/2018
									</h5>
									<h6 className="employmentLength">Employment Length: 3 years | 9/2014 - 7/2017</h6>
								</hgroup>
							</section>
						</div>
					</div>
					<div className="collapse" id="intrado_collapse">
						<div>
							<section id="intrado" className="previous_employment">
								<hgroup>
									<h3 className="companyName">
										<a
											href="https://www.crunchbase.com/organization/intrado"
										>Intrado
										</a>
									</h3>
									<h4 className="jobRole">Role:<br/><span className="blink jtitle">Junior Software Engineer</span>
									</h4>
									<h4 className="detailContent">Intrado is a subsidiary of West Corporation. Agencies
										and telecommunication services providers throughout the world depend on Intrado
										for emergency communication services and technology. The company focuses on
										pioneering network innovations that improve emergency response.</h4>
									<h5 className="acquisitionBy">Acquired by <span> </span>
										<a href="https://www.west.com/"
										>West Corporation
										</a> 12/2015
									</h5>
									<h6 className="employmentLength">Employment Length: 3 years | 8/2011 - 9/2014</h6>
								</hgroup>
							</section>
						</div>
					</div>
					<div className="collapse" id="panera_collapse">
						<div>
							<section id="panera" className="previous_employment">
								<hgroup>
									<h3 className="companyName">
										<a
											href="https://www.crunchbase.com/organization/panera-bread"
										>Panera Bread
										</a>
									</h3>
									<h4 className="jobRole">Role:<br/><span
										className="blink jtitle">Baker's Assistant</span></h4>
									<h4 className="detailContent">Panera Bread Company is an American chain store of
										bakery-cafe fast casual restaurants with over 2,000 locations, all of which are
										in the United States and Canada. Offerings include bakery items, pasta, salads,
										sandwiches, soups, and specialty drinks.</h4>
									<h5 className="acquisitionBy">Visit The Company Site <a
										href="https://www.panerabread.com/en-us/home.html">Here</a></h5>
									<h6 className="employmentLength">
										Employment Length: 6 Months | 07/2020 - 12/2020
									</h6>
								</hgroup>
							</section>
						</div>
					</div>
					<div className="collapse" id="coffeeBagels_collapse">
						<div>
							<section id="coffeeBagels" className="previous_employment">
								<hgroup>
									<h3 className="companyName">
										<a
											href="https://www.crunchbase.com/organization/einstein-noah-restaurant-group"
										>Coffee & Bagels
										</a>
									</h3>
									<h4 className="jobRole">Role:<br/><span
										className="blink jtitle">District Baker</span></h4>
									<h4 className="detailContent">Bagel Brands is the parent company for the following
										breakfast brands: Einstein Bros., Bruegger's, Noah's NY and Manhattan
										Bagels.</h4>
									<h5 className="acquisitionBy">Visit The Company Site <a
										href="https://www.coffeeandbagels.com/">Here</a></h5>
									<h6 className="employmentLength">Employment Length: 2 years | 3/2018 - 3/2020</h6>
								</hgroup>
							</section>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;