import React from 'react';
import MobileCarousel from "./MobileCarousel";
import './About.scss';
const About = () => {
	return (
		<section id="about">
			<article className="aboutAnchor">
				<h3 className="sectionTitle">About Me</h3>
				<p className="welcome">
					Please allow me to welcome you to my website!
				</p>
				<div className="fullScreenLayout">
					<div className="creatorPortrait__container">
						<img src="https://www.dropbox.com/s/ruigygov3fmc10v/dustin.jpg?raw=1"
								 alt="Image Of Dustin K Greco" className="creatorPortrait" loading="lazy"
						/>
					</div>
					<div className="creatorIntroduction">
						<p>
							My name is Dustin, and I'm an aspiring Full-Stack MERN Developer with nearly a decade of
							experience in building applications, reports, and programs in various languages through a multitude
							of tools both open-source and proprietary. This site is meant to house the culmination of my
							knowledge and abilities.
						</p>
						<p>
							Now, you may be wondering...
						</p>
						<p className="whyGemTrove">
							Why the "Trove Of Gems"?
						</p>
						<p>
							Well...read on! Perhaps you'll intuit why before I can tell you, but...
							if you're impatient, simply scroll down to the page footer for my personal answer.
						</p>
					</div>
				</div>
				<MobileCarousel />
				<div className="aboutMe_panel">
					<div className="aboutMe_textContainer">
						<div className="accompanyingPhoto_Left setTextBuffer">
							<div className="picContainer">
								<div className="card shadow-sm">
									<img
										src="https://www.dropbox.com/s/v0hzpq1zo8zpao2/vandal.png?raw=1"
										className="img-fluid" loading="lazy"
										alt="Responsive image"
									/>
									<div className="card-body">
										<p className="card-text img-responsive">Vandal Puppy!!</p>
									</div>
								</div>
							</div>
						</div>
						<div className="intro_1">
							<p className="blurb">
								I live in the beautiful, and arid San Tan Valley, Arizona, USA with my husband Brett, and
								our three pet children; Vandal, Mister, & Bailey. There are also the additional family members:
								Louie, Anastasia, Hunter, & Vicki. They are my inspiration to always keep learning and pushing myself
								in my journey through life.
							</p>
						</div>
						<div className="intro_2">
							<div className="accompanyingPhoto_Right setTextBuffer">
								<div className="picContainer">
									<div className="card shadow-sm">
										<img
											src="https://www.dropbox.com/s/h2yichvj508nqh0/bailey.png?raw=1"
											className="img-fluid" loading="lazy"
											alt="Responsive image"
										/>
										<div className="card-body">
											<p className="card-text">Bailey & Mister napping together</p>
										</div>
									</div>
								</div>
							</div>
							<p className="pastEmployment">
								My career in technology began in late 2011 with Emergency 9-1-1 Telecommunications services and has
								spanned the last decade across FinTech and Technical Consulting. I initially began my journey
								by manually entering spreadsheets into computer systems as a data analyst. I wanted to lessen my
								workload to focus my time in areas that further interested me. After 6 months and intensive googling,
								I had found a way to utilize VBA to automate the excel spreadsheets and data transformation tasks, as
								well as importing the data to the system. While I didn't know it at the time, I would later fall in
								love with programming. Over the years I expanded my skills to include SQL, the Base SAS Language, Java,
								Groovy, and finally JavaScript.
							</p>
						</div>
						<div className="intro_2">
							<div className="accompanyingPhoto_Left setTextBuffer">
								<div className="picContainer">
									<div className="card shadow-sm">
										<img
											src="https://www.dropbox.com/s/ewnquq1qk1omqi6/brett.png?raw=1"
											className="img-fluid" loading="lazy"
											alt="Responsive image"
										/>
										<div className="card-body">
											<p className="card-text">Brett & Vandal</p>
										</div>
									</div>
								</div>
							</div>
							<p className="pastEmployment">
								In 2017, I decided to take a break from my role as a technical consultant so that I could
								push myself into a new technological direction: A Full-Stack Developer. During my break I took the
								time to explore my other interests such as glass-blowing, baking, and Czech language courses. Regan
								Warner offered me a position as a baker with her restaurant. Throughout my time as a baker, I became a
								trainer, as well as a district baker at one point: in charge of (9) nine separate bakery locations.
								Upon my move from Colorado to Arizona, I took a position with Panera Bread as an assistant to their
								baker of 30 years, Ambrosio Martinez. I can now proudly say I can make various and awesome loaves of
								bread and other baked goods! It has been a fantastic journey and now I'm confident that I am ready to
								resume my journey in technology.
							</p>
						</div>
						<div className="photoSpread row">
							<div className="familyAlbum">
								<div className="picContainer familyRow">
									<div className="card shadow-sm">
										<img
											src="https://www.dropbox.com/s/uwgqxf4yiu2fp8g/mister.png?raw=1"
											className="img-fluid" loading="lazy"
											alt="Responsive image"
										/>
										<div className="mister familyPhotoDim img-fluid"/>
										<div className="card-body">
											<p className="card-text">Mister's Summoning Blanket.</p>
										</div>
									</div>
								</div>
								<div className="picContainer familyRow">
									<div className="card shadow-sm">
										<img
											src="https://www.dropbox.com/s/1zszy0hcjyecg1s/vicki_large.jpg?raw=1"
											className="img-fluid" loading="lazy"
											alt="Responsive image"
										/>
										<div className="card-body">
											<p className="card-text">There's Vicki & Her Foster!</p>
										</div>
									</div>
								</div>
								<div className="picContainer familyRow">
									<div className="card shadow-sm">
										<img
											src="https://www.dropbox.com/s/cypfgl8dyoiryxl/lou.jpg?raw=1"
											className="img-fluid" loading="lazy"
											alt="Responsive image"
										/>
										<div className="card-body">
											<p className="card-text">Louie...dreaming of fetch.</p>
										</div>
									</div>
								</div>
							</div>
							<div className="intro_2 sandwichedText">
								<p className="pastEmployment thankyouFriends">
									Where I am at today wouldn't be possible without the guidance and mentoring of various co-workers
									and friends. The efforts of Bridget & John S., Liz P., Regan W., Hunter C.,
									and Susan S. have been instrumental to my development: professionally and personally.
									I hope that you've enjoyed reading up to this point and I hope you've enjoyed getting to see a part
									of my family and friends. I am thrilled to be able to share this site and the format, method,
									and delivery of the content as it stands. I hope you check in from
									time to time as I'll be updating the site as often as I can.</p>
							</div>
							<div className="familyAlbum friendsAlbum">
								<div className="hunterAndReganRow mb-5">
									<div className="card shadow-sm">
										<img
											src="https://www.dropbox.com/s/dsle3in5mq2kwxq/regan.jpg?raw=1"
											className="img-fluid" loading="lazy"
											alt="Responsive image"
										/>
										<div className="card-body">
											<p className="card-text">Regan: The Closest Of Friends</p>
										</div>
									</div>
								</div>
								<div className="hunterAndReganRow mb-5">
									<div className="card shadow-sm">
										<img
											src="https://www.dropbox.com/s/51fllefwvm5baij/hunter.png?raw=1"
											className="img-fluid" loading="lazy"
											alt="Responsive image"
										/>
										<div className="card-body">
											<p className="card-text">Hunter C. Hanging Out</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="intro_2 lastBioSection">
							<div className="finalBioSection">
								<div className="accompanyingPhoto mb-5">
									<div className="picContainer">
										<div className="card shadow-sm">
											<img
												src="https://www.dropbox.com/s/r4oj3cgoorbaqka/Hunter_Jung.jpg?raw=1"
												className="img-fluid" loading="lazy"
												alt="Responsive image"
											/>
											<div className="card-body">
												<p className="card-text">Hunter J. & Mister In Captivity</p>
											</div>
										</div>
									</div>
								</div>
								<div className="thankYou finalGratitudes">
									<p className="finalMessage">Finally,</p>
									<p className="farewell">
										As it cannot be overstated:
									</p>
									<p className="farewell">
										My thanks and gratitude
									</p>
									<p className="farewell">
										to my family,
									</p>
									<p className="farewell">
										and you,
										<br/>
										the visitor!
									</p>
								</div>
								<div className="accompanyingPhoto mb-5">
									<div className="picContainer">
										<div className="card shadow-sm">
											<img
												src="https://www.dropbox.com/s/szxxw0yh0xkmwzz/Anastasia.jpg?raw=1"
												className="img-fluid" loading="lazy"
												alt="Responsive image"
											/>
											<div className="card-body">
												<p className="card-text">Anastasia's Cloud Cake!</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</article>
		</section>
	);
};

export default About;