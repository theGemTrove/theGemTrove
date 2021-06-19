import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/pro-duotone-svg-icons';
import './MyProjects.scss';

const MyProjects = () => {
	const alertMessage = () => {
		return alert('Check Back Soon! This Project Will Be Available Once I\'ve Finished It!');
	};
	const generateGemstoneEntries = () => {
		return null;
	}
	return (
		<section id="recentProjects" className="recentProjectsSection">
			<article className="container sectionArticle">
				<div>
					<h2 className="sectionTitle">Recent Projects</h2>
					<h3 className="sectionSubInfo">
						Click on any of the buttons below to be taken to a project!{' '}
						<span className="projectBonus">If you want to know more about the crystal, click its picture!</span>
					</h3>
				</div>
				<div className="row crystal-row">
					<div className="col-sm-12 col-md-6 col-lg-3 smallDeviceResize">
						<h2 className="crystalHeader">MongoDB</h2>
						<div className="card">
							<a href="https://www.gia.edu/emerald">
								<img className="card-img-top img-fluid crystal" src="https://www.dropbox.com/s/8yp0nqvpoqb0rkl/emerald-resized.jpg?raw=1" alt="Card image cap" />
							</a>
								<div className="card-body crystal-card-body">
									<h5 className="card-title crystal-card-title">Emerald</h5>
									<p className="card-text crystal-card-text">MongoDB - Coming Soon</p>
									<a href="#" className="btn btn-primary crystal-card-button disabled">Show Me MongoDB</a>
								</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3 smallDeviceResize">
						<h2 className="crystalHeader">ExpressJS</h2>
						<div className="card">
							<a href="https://www.gia.edu/tourmaline">
								<img className="card-img-top img-fluid crystal" src="https://www.dropbox.com/s/1qpks4dnuno8tkp/watermelontourmaline.jpg?raw=1" alt="Card image cap" />
							</a>
							<div className="card-body crystal-card-body">
								<h5 className="card-title crystal-card-title">Watermelon Tourmaline</h5>
								<p className="card-text crystal-card-text">ExpressJS - Coming Soon</p>
								<a href="#" className="btn btn-primary crystal-card-button disabled">Show Me ExpressJS</a>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3 smallDeviceResize">
						<h2 className="crystalHeader">ReactJS/Redux</h2>
						<div className="card">
							<a href="https://www.gia.edu/sapphire">
								<img className="card-img-top img-fluid crystal" src="https://www.dropbox.com/s/esjw82iw928mo98/sapphire-blue.jpg?raw=1" alt="Card image cap" />
							</a>
							<div className="card-body crystal-card-body">
								<h5 className="card-title crystal-card-title">Sapphire</h5>
								<p className="card-text crystal-card-text">React/Redux - Coming Soon</p>
								<a href="#" className="btn btn-primary crystal-card-button crystal-card-button disabled">Show Me ReactJS/Redux</a>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3 smallDeviceResize">
						<h2 className="crystalHeader">NodeJS</h2>
						<div className="card">
							<a href="https://www.gia.edu/alexandrite">
								<img className="card-img-top img-fluid crystal" src="https://www.dropbox.com/s/l7ygkip2emf492m/alexandrite-resized.jpg?raw=1" alt="Card image cap" />
							</a>
							<div className="card-body crystal-card-body">
								<h5 className="card-title crystal-card-title">Alexandrite</h5>
								<p className="card-text crystal-card-text">NodeJS - Coming Soon</p>
								<a href="#" className="btn btn-primary crystal-card-button disabled">Show Me NodeJS</a>
							</div>
						</div>
					</div>
				</div>
				<div className="row crystal-row">
					<div className="col-sm-12 col-md-6 col-lg-3 smallDeviceResize">
						<h2 className="crystalHeader">GemTrove API Library</h2>
						<div className="card">
							<a href="https://www.gia.edu/aquamarine">
								<img className="card-img-top img-fluid crystal" src="https://www.dropbox.com/s/w4fql8xwvae65r4/aquamarine.jpg?raw=1" alt="Card image cap" />
							</a>
							<div className="card-body crystal-card-body">
								<h5 className="card-title crystal-card-title">Aquamarine</h5>
								<p className="card-text crystal-card-text">The GemTrove's API Library</p>
								<a href="http://api-library-thegemtrove.tech" className="btn btn-primary crystal-card-button crystal-card-button">Show Me The Library</a>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3 smallDeviceResize">
						<h2 className="crystalHeader">IGLeague</h2>
						<div className="card">
							<a href="https://www.gia.edu/ruby">
								<img className="card-img-top img-fluid crystal" src="https://www.dropbox.com/s/u3hyw67tiwts8f2/ruby.jpg?raw=1" alt="Card image cap" />
							</a>
							<div className="card-body crystal-card-body">
								<h5 className="card-title crystal-card-title">Ruby</h5>
								<p className="card-text crystal-card-text">A Contracted Project</p>
								<a href="https://www.igleague.com" className="btn btn-primary crystal-card-button">Show Me IGLeague</a>
							</div>
						</div>
					</div>
				</div>
			</article>
		</section>
	);
};

export default MyProjects;