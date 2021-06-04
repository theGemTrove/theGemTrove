import React from 'react';

import './Footer.scss';
const Footer = () => {
	return (
		<footer>
			<div id="accordion">
				<div className="card">
					<div className="card-header" id="headingOne">
						<h5 className="mb-0 expCenter">
							<button className="btn btn-link explanationLabel" data-toggle="collapse"
											data-target="#collapseOne" aria-expanded="true"
											aria-controls="collapseOne"
							>
								So, Why "The Gem Trove"?
							</button>
						</h5>
					</div>
					<div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
						<div className="card-body gemTroveExplanation">
							<p className="explanationBody expIntro">
								- All gemstones are beautiful and unique -
							</p>
							<p className="explanationBody expGemList">
								Diamonds, Emeralds, Rubies, and Sapphires; Alexandrite, Agate,
								Amethyst, Aquamarine, Garnet, Jade, Lapis-Lazuli, Moonstone, Opal, Black & White Pearl, Rose Quartz,
								Spinel, Tanzanite, Tourmaline, Turquoise, and Zircon.
							</p>
							<p className="explanationBody expChildhood">
								My fascination with gemstones stems primarily from my love of earth sciences as a child. I was the kid
								who could identify crystals, minerals, and rocks (generally the more colorful ones) and avidly watched
								the science channel specials on marine biology and volcanology.
							</p>
							<p className="explanationBody expTeenToToday">
								By my teens, my interests had expanded to the geological and biological branches of Chemistry and that
								has never left me.
							</p>
							<p className="explanationBody expTeenToToday">
								I also never made it into any august labs as a chemist.
							</p>
							<p className="explanationBody expTeenToToday">
								Rather...
							</p>
							<p className="explanationBody expTeenToToday">
								My lapidaries consist of previous co-workers, past and current friends, and family.
							</p>
							<p className="explanationBody expLapidaries">
								They've shaped and polished me to reflect my best qualities. The work of a gem-cutter is slow.
								It takes time and careful work to grind down some of the hardest material into the prisms that
								best reflect quality and worth...And without their efforts, I wouldn't be where I am today with the
								skills in my possession that allow me to push myself in the direction I want to proceed.
							</p>
							<p className="explanationBody expClosingStatement">
								My journey isn't over yet, and I look forward continuing my growth.
							</p>
							<p className="explanationBody expClosingStatement">
								I would encourage you to pursue your passions and continue to grow in the ways that make you happy.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<p className="siteCreatorStamp">
					Thank You For The Visit & All The Best,<br/>
					Dustin K Greco
				</p>
			</div>
		</footer>
	);
};

export default Footer;