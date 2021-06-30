import React from 'react';
import './MobileCarousel.scss';
const MobileCarousel = () => {
	return (
		<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
			<ol className="carousel-indicators">
				<li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
				<li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
				<li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
				<li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
				<li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
				<li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
				<li data-target="#carouselExampleCaptions" data-slide-to="6"></li>
				<li data-target="#carouselExampleCaptions" data-slide-to="7"></li>
				<li data-target="#carouselExampleCaptions" data-slide-to="8"></li>
				<li data-target="#carouselExampleCaptions" data-slide-to="9"></li>
			</ol>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img src="https://www.dropbox.com/s/vol3qlzz0dmzmgn/mobile_vandal.png?raw=1" className="d-block w-100" alt="Vandal As A Puppy" />
						<div className="carousel-caption d-none d-md-block">
							<h5>Vandal</h5>
							<p>Vandal Was The cutest puppy ever!</p>
						</div>
				</div>
				<div className="carousel-item">
					<img src="https://www.dropbox.com/s/h2yichvj508nqh0/bailey.png?raw=1" className="d-block w-100" alt="Bailey & Mister napping together" />
						<div className="carousel-caption d-none d-md-block carouselCaption">
							<h5>Bailey</h5>
							<p>Bailey & Mister napping together</p>
						</div>
				</div>
				<div className="carousel-item">
					<img src="https://www.dropbox.com/s/ewnquq1qk1omqi6/brett.png?raw=1" className="d-block w-100" alt="Brett & Vandal"
					/>
						<div className="carousel-caption d-none d-md-block carouselCaption">
							<h5>Brett & Vandal</h5>
							<p>Resting on the couch</p>
						</div>
				</div>
				<div className="carousel-item">
					<img src="https://www.dropbox.com/s/uwgqxf4yiu2fp8g/mister.png?raw=1" className="d-block w-100"
							 alt="Mister Keeping Warm In A Blanket"
					/>
						<div className="carousel-caption d-none d-md-block carouselCaption">
							<h5>Mister</h5>
							<p>Loves to be pampered</p>
						</div>
				</div>
				<div className="carousel-item">
					<img src="https://www.dropbox.com/s/1zszy0hcjyecg1s/vicki_large.jpg?raw=1" className="d-block w-100"
							 alt="Family Member - Vicki Horner"
					/>
						<div className="carousel-caption d-none d-md-block carouselCaption">
							<h5>Vicki</h5>
							<p>And her newest foster!</p>
						</div>
				</div>
				<div className="carousel-item">
					<img src="https://www.dropbox.com/s/cypfgl8dyoiryxl/lou.jpg?raw=1" className="d-block w-100"
							 alt="Lou looking sad on the couch"
					/>
						<div className="carousel-caption d-none d-md-block carouselCaption">
							<h5>Louie</h5>
							<p>Dreams of Fetch</p>
						</div>
				</div>
				<div className="carousel-item">
					<img src="https://www.dropbox.com/s/r4oj3cgoorbaqka/Hunter_Jung.jpg?raw=1" className="d-block w-100"
							 alt="Hunter holding Mister against his will"
					/>
						<div className="carousel-caption d-none d-md-block carouselCaption">
							<h5>Hunter</h5>
							<p>Mister Wants To Escape</p>
						</div>
				</div>
				<div className="carousel-item">
					<img src="https://www.dropbox.com/s/szxxw0yh0xkmwzz/Anastasia.jpg?raw=1" className="d-block w-100"
							 alt="Anastasia with something freshly baked from the oven"
					/>
						<div className="carousel-caption d-none d-md-block carouselCaption">
							<h5>Anastasia</h5>
							<p>Always up to something!</p>
						</div>
				</div>
				<div className="carousel-item">
					<img src="https://www.dropbox.com/s/dsle3in5mq2kwxq/regan.jpg?raw=1" className="d-block w-100" alt="Regan, one of my closest friends" />
					<div className="carousel-caption d-none d-md-block carouselCaption">
						<h5>Regan</h5>
						<p>Closest Of Friends</p>
					</div>
				</div>
				<div className="carousel-item">
					<img src="https://www.dropbox.com/s/51fllefwvm5baij/hunter.png?raw=1" className="d-block w-100" alt="Hunter C." />
					<div className="carousel-caption d-none d-md-block carouselCaption">
						<h5>Hunter C.</h5>
						<p>Hunter C. Hanging Out</p>
					</div>
				</div>
			</div>
		<a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev" hidden>
			<span className="carousel-control-prev-icon" aria-hidden="true">{' '}</span>...
			<span className="sr-only">Previous</span>
		</a>
		<a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next" hidden>
			<span className="carousel-control-next-icon" aria-hidden="true">{' '}</span>
			<span className="sr-only">Next</span>
		</a>
	</div>);
};

export default MobileCarousel;