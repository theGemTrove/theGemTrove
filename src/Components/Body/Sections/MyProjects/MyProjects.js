import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/pro-duotone-svg-icons';
import './MyProjects.scss';

const MyProjects = () => {
	const alertMessage = () => {
		return alert('Check Back Soon! This Project Will Be Available Once I\'ve Finished It!');
	};
	const generateGem = () => {
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
					<div className="col-sm-12 col-md-6 col-lg-3">
						<h2 className="projectHeader">MongoDB</h2>
						<div className="card">
							<a href="https://geology.com/gemstones/emerald/">
								<img className="card-img-top img-fluid crystal" src="https://www.dropbox.com/s/8yp0nqvpoqb0rkl/emerald-resized.jpg?raw=1" alt="Card image cap" />
							</a>
								<div className="card-body crystal-card-body">
									<h5 className="card-title crystal-card-title">Emerald</h5>
									<p className="card-text crystal-card-text">MongoDB - Coming Soon</p>
									<a href="#" className="btn btn-primary crystal-card-button">Show Me MongoDB</a>
								</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3">
						<h2 className="projectHeader">ExpressJS</h2>
						<div className="card">
							<a href="https://geology.com/minerals/tourmaline.shtml">
								<img className="card-img-top img-fluid crystal" src="https://www.dropbox.com/s/1qpks4dnuno8tkp/watermelontourmaline.jpg?raw=1" alt="Card image cap" />
							</a>
							<div className="card-body crystal-card-body">
								<h5 className="card-title crystal-card-title">Watermelon Tourmaline</h5>
								<p className="card-text crystal-card-text">ExpressJS - Coming Soon</p>
								<a href="#" className="btn btn-primary crystal-card-button">Show Me ExpressJS</a>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3">
						<h2 className="projectHeader">ReactJS/Redux</h2>
						<div className="card">
							<a href="https://geology.com/gemstones/ruby-and-sapphire/">
								<img className="card-img-top img-fluid crystal" src="https://www.dropbox.com/s/esjw82iw928mo98/sapphire-blue.jpg?raw=1" alt="Card image cap" />
							</a>
							<div className="card-body crystal-card-body">
								<h5 className="card-title crystal-card-title">Sapphire</h5>
								<p className="card-text crystal-card-text">React/Redux - Coming Soon</p>
								<a href="#" className="btn btn-primary crystal-card-button crystal-card-button">Show Me ReactJS/Redux</a>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3">
						<h2 className="projectHeader">NodeJS</h2>
						<div className="card">
							<img className="card-img-top img-fluid crystal" src="https://www.dropbox.com/s/l7ygkip2emf492m/alexandrite-resized.jpg?raw=1" alt="Card image cap" />
							<div className="card-body crystal-card-body">
								<h5 className="card-title crystal-card-title">Alexandrite</h5>
								<p className="card-text crystal-card-text">NodeJS - Coming Soon</p>
								<a href="#" className="btn btn-primary crystal-card-button">Show Me NodeJS</a>
							</div>
						</div>
					</div>
				</div>
				<div className="row crystal-row">
					<div className="col-sm-12 col-md-6 col-lg-3">
						<h2 className="projectHeader">tGT API Library</h2>
						<div className="card">
							<img className="card-img-top img-fluid crystal" src="https://www.dropbox.com/s/w4fql8xwvae65r4/aquamarine.jpg?raw=1" alt="Card image cap" />
							<div className="card-body crystal-card-body">
								<h5 className="card-title crystal-card-title">Aquamarine</h5>
								<p className="card-text crystal-card-text">The GemTrove's API Library</p>
								<a href="#" className="btn btn-primary crystal-card-button crystal-card-button">Show Me The Library</a>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3">
						<h2 className="projectHeader">IGLeague</h2>
						<div className="card">
							<a href="https://geology.com/gemstones/ruby-and-sapphire/">
								<img className="card-img-top img-fluid crystal" src="https://www.dropbox.com/s/u3hyw67tiwts8f2/ruby.jpg?raw=1" alt="Card image cap" />
							</a>
							<div className="card-body crystal-card-body">
								<h5 className="card-title crystal-card-title">Ruby</h5>
								<p className="card-text crystal-card-text">A Contracted Project</p>
								<a href="#" className="btn btn-primary crystal-card-button">Show Me IGLeague</a>
							</div>
						</div>
					</div>
				</div>
			</article>
		</section>
	);
};

export default MyProjects;

/*
<div className="container mt-3">
	<div className="row gemRow">
		<div className="col-xl-3 col-md-4 col-sm-6 col-xs-12">
			<div className="project">
				<a href="https://github.com/theGemTrove/linuxScripting" className="gemLink">
					Bash Scripts
					<FontAwesomeIcon icon={faGem} className="projectGem bashGem"/>
				</a>
			</div>
		</div>
		<div className="col-xl-3 col-md-4 col-sm-6 col-xs-12">
			<div className="project">
				<a href="https://www.igleague.com" className="gemLink">
					IGLeague
					<FontAwesomeIcon icon={faGem} className="projectGem igleagueGem"/>
				</a>
			</div>
		</div>
		<div className="col-xl-3 col-md-4 col-sm-6 col-xs-12">
			<div className="project">
				<a href="http://143.198.143.111" className="gemLink">
					API Trove
					<FontAwesomeIcon icon={faGem} className="projectGem apiGem"/>
				</a>
			</div>
		</div>
		<div className="col-xl-3 col-md-4 col-sm-6 col-xs-12">
			<div className="project">
				<a href="https://app.photobucket.com/u/theGemTrove/a/6133af89-7f49-4875-af9d-9770e483f4a9?mode=slideshow" className="gemLink">
					Home Lab
					<FontAwesomeIcon icon={faGem} className="projectGem homeLabGem"/>
				</a>
			</div>
		</div>
		<div className="col-xl-3 col-md-4 col-sm-6 col-xs-12">
			<div className="project">
				<p className="gemLink langDesc-disabled" data-toggle="tooltip" data-placement="top"
					 title="Check Back! This Project Will Be Available Just As Soon As I've Finished It!"
					 onClick={alertMessage}
				>
					Metrics
					<FontAwesomeIcon icon={faGem} className="projectGem metricsGem"/>
				</p>
			</div>
		</div>
	</div>
</div>*/
