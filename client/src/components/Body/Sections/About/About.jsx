import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

import Brett from "../../../../assets/images/aboutSection/brett.png";
import Bailey from "../../../../assets/images/aboutSection/bailey.png";
import Mister from "../../../../assets/images/aboutSection/mister.png";
import Vandal from "../../../../assets/images/aboutSection/vandal.png";
import Louie from "../../../../assets/images/aboutSection/lou.png";
import Vicki from "../../../../assets/images/aboutSection/vicki.png";
import Regan from "../../../../assets/images/aboutSection/regan.png";
import HunterClinton from "../../../../assets/images/aboutSection/hunter_clinton.png";
import HunterJung from "../../../../assets/images/aboutSection/hunter_jung.png";

import "./About.scss";
export const About = () => (
    <section id="about">
        <article className="aboutAnchor">
            <h4 className="about__SectionTitle">Who Am I?</h4>
            <div className="aboutMe_panel">
                <div className="aboutMe_textContainer">
                    <div className="creatorIntroduction">
                        <p className={"blurb"}>
                            I'm a Full-Stack MERN Developer with nearly a decade of experience in building applications,
                            reports, and programs in various languages through a multitude of tools both open-source
                            and proprietary. This site and its affiliated sub-domains are meant to house the culmination
                            of my
                            knowledge and abilities.
                        </p>
                    </div>
                    <div className="accompanyingPhoto_Left setTextBuffer">
                        <div className="picContainer">
                            <div className="card shadow-sm">
                                <img
                                    src={`${Vandal}`}
                                    className="img-fluid" loading="lazy"
                                    alt="Responsive image"
                                    width={428.5}
                                />
                                <div className="card-body">
                                    <p className="card-text about__cardText">Vandal Puppy!!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="intro_1">
                        <p className="blurb">
                            I live in the beautiful and arid desert of Arizona, with my husband Brett, and
                            our four pets; Louie, Vandal, Mister, & Bailey. They and my family
                            are my inspiration to always keep learning and pushing myself in my journey through life.
                        </p>
                    </div>
                    <div className="intro_2">
                        <div className="accompanyingPhoto_Right setTextBuffer">
                            <div className="picContainer">
                                <div className="card shadow-sm">
                                    <img
                                        src={`${Bailey}`}
                                        className="img-fluid" loading="lazy"
                                        width={396}
                                        alt="Responsive image"
                                    />
                                    <div className="card-body">
                                        <p className="card-text about__cardText">Bailey & Mister napping together</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="pastEmployment">
                            My career in technology began in late 2011 with Emergency 9-1-1 telecommunications services
                            and has
                            spanned the last decade across FinTech and Technical Consulting. I initially began my
                            journey
                            by manually entering spreadsheets into computer systems as a data analyst. I wanted to
                            lessen my
                            workload to focus my time in areas that further interested me. After 6 months and intensive
                            googling,
                            I had found a way to utilize VBA to automate the excel spreadsheets and data transformation
                            tasks, as
                            well as importing the data to the system. While I didn't know it at the time, I would later
                            fall in
                            love with programming. Over the years I expanded my skills to include SQL, the Base SAS
                            Language, Java, Groovy, and JavaScript.
                        </p>
                    </div>
                    <div className="intro_2">
                        <div className="accompanyingPhoto_Left setTextBuffer">
                            <div className="picContainer">
                                <div className="card shadow-sm">
                                    <img
                                        src={`${Brett}`}
                                        className="img-fluid" loading="lazy"
                                        width={396}
                                        alt="Responsive image"
                                    />
                                    <div className="card-body">
                                        <p className="card-text about__cardText">Brett & Vandal</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="pastEmployment">
                            In 2017, I decided to take a break from my role as a technical consultant so that I could
                            push myself into a new technological direction: A Full-Stack Developer. During my break I
                            took the
                            time to explore my other interests such as glass-blowing, baking, and Czech/Spanish language
                            courses. Regan
                            Warner offered me a position as a baker with her restaurant. Throughout my time as a baker,
                            I became a
                            trainer, as well as a district baker at one point: in charge of (9) nine separate bakery
                            locations.
                            Upon my move from Colorado to Arizona, I took a position with Panera Bread as an assistant
                            to their
                            baker of 30 years, Ambrosio Martinez. I can now proudly say I can make various and awesome
                            loaves of
                            bread and other baked goods! It has been a fantastic journey.
                        </p>
                        <p className="pastEmployment thankyouFriends blurb">
                            Where I am at today wouldn't be possible without the guidance and mentoring of various
                            co-workers
                            and friends. The efforts of Bridget & John S., Liz P., Regan W., Hunter C.,
                            and Susan S. have been instrumental to my development: professionally and personally.
                            I am thrilled to be able to share this site and the format, method,
                            and delivery of the content as it stands. I hope you check in from
                            time to time as I'll be updating the site as often as I can.
                        </p>
                    </div>
                    <MDBCarousel showIndicators showControls fade className={"carouselBg"}>
                        <MDBCarouselItem itemId={1}>
                            <img src={`${Mister}`} className='d-block m-auto friendPhoto' alt='...' />
                            <MDBCarouselCaption>
                                <h5 className={"aboutPhotoLabel"}>Our Cat Mister</h5>
                                <p className={"aboutPhotoParagraph"}>In his summoning blanket.</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId={2}>
                            <img src={`${Vicki}`} className='d-block m-auto friendPhoto' alt='...' />
                            <MDBCarouselCaption>
                                <h5 className={"aboutPhotoLabel"}>My Friend Vicki</h5>
                                <p className={"aboutPhotoParagraph"}>We met during my employment at Avoka.</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId={3}>
                            <img src={`${Louie}`} className='d-block m-auto friendPhoto' alt='...' />
                            <MDBCarouselCaption>
                                <h5 className={"aboutPhotoLabel"}>My Heeler Lou</h5>
                                <p className={"aboutPhotoParagraph"}>Dreaming of Fetch.</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId={4}>
                            <img src={`${Regan}`} className='d-block m-auto friendPhoto' alt='...' />
                            <MDBCarouselCaption>
                                <h5 className={"aboutPhotoLabel"}>My Friend Regan</h5>
                                <p className={"aboutPhotoParagraph"}>We met during my baking journey.</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId={5}>
                            <img src={`${HunterClinton}`} className='d-block m-auto friendPhoto' alt='...' />
                            <MDBCarouselCaption>
                                <h5 className={"aboutPhotoLabel"}>My Friend Hunter C.</h5>
                                <p className={"aboutPhotoParagraph"}>Definitely an awesome guy.</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId={5}>
                            <img src={`${HunterJung}`} className='d-block m-auto friendPhoto' alt='...' />
                            <MDBCarouselCaption>
                                <h5 className={"aboutPhotoLabel"}>My Friend Hunter J.</h5>
                                <p className={"aboutPhotoParagraph"}>My best friend of over 13 years.</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                    </MDBCarousel>
                    <div className="intro_2 lastBioSection">
                        <div className="finalBioSection">
                            <div className="thankYou finalGratitudes">
                                <p className="finalMessage">Finally,</p>
                                <p className={"farewell"}>
                                    As it cannot be overstated: My thanks and gratitude to my family, friends, and you:
                                </p>
                                <p className={"farewell"}>
                                    the visitor!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </section>
)