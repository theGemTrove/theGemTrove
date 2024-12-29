import React, {useState} from 'react';
import "bootstrap";
import Collapse from 'react-bootstrap/Collapse';
import "./Careers.scss";
export const Careers = () => {
    const
        [showInitialMessage, toggleShowInitialMessage] = useState(true),
        [showingJob, setShowingJob] = useState(null);


    const [toggle, setToggle] = useState(false);
    const toggleFunc = React.useCallback(() => setToggle(!toggle));

    const toggleLoader = evt => {
        console.log('evt: ', evt.target.value, evt.target.id, showingJob);
        if(showingJob === null) {
            console.log("Showing Job: ", showingJob, evt.target.value);
            toggleShowInitialMessage(false);
            setShowingJob(evt.target.value);
        } else if (showingJob === evt.target.value) {
            toggleShowInitialMessage(true);
            setShowingJob(null);
        } else if (showingJob !== evt.target.value) {
            toggleShowInitialMessage(false);
            setShowingJob(evt.target.value);
        }
    };

    return (
        <section id="employment">
            <div className="gameScreen">
                <div className="left_sidePanel">
                    <h4 className="employmentHeading">Employment History</h4>
                    <div className="controlpad">
                        <div className="employmentSelections">
                            <h6 className="employmentHeading subEmploymentHeading">Tech Industry</h6>
                            <div className="techEmployment">
                                <p>
                                    <button className="btn btn-primary employmentButton button-63" type="button"
                                            onClick={toggleLoader} id="AtEase" value="AtEase"
                                            data-toggle="collapse" data-target="#atease_collapse"
                                            aria-expanded="false" aria-controls="atease_collapse">
                                        At-Ease
                                    </button>
                                </p>
                                <p>
                                    <button className="btn btn-primary employmentButton button-63" type="button"
                                            onClick={toggleLoader} id="theTroveofGems" value="theTroveofGems"
                                            data-toggle="collapse" data-target="#influx_collapse"
                                            aria-expanded="false" aria-controls="influx_collapse">
                                        The Trove of Gems
                                    </button>
                                </p>
                                <p>
                                    <button className="btn btn-primary employmentButton button-63" type="button"
                                            value="Avoka"
                                            data-toggle="collapse" data-target="#avoka_collapse" onClick={toggleLoader}
                                            id="Avoka"
                                            aria-expanded="false" aria-controls="avoka_collapse">
                                        Avoka
                                    </button>
                                </p>
                                <p>
                                    <button className="btn btn-primary employmentButton button-63" type="button"
                                            data-toggle="collapse" data-target="#intrado_collapse"
                                            onClick={toggleLoader} id="Intrado" value={"Intrado"}
                                            aria-expanded="false" aria-controls="intrado_collapse">
                                        Intrado
                                    </button>
                                </p>
                                {/*<button className={"button-63"} onClick={toggleFunc}>Toggle Collapse</button>
                                <Collapse in={toggle}>
                                    <div className="collapsed" id="influx_collapse">
                                        <section id="influx" className="current_employment">
                                            <hgroup>
                                                <h3 className="companyName">The Trove of Gems</h3>
                                                <h4 className="jobRole">
                                                    My Role:<br/><br/>
                                                    <span className="jtitle">
                                            FullStack MERN Developer
                                        </span>
                                                </h4>
                                                <h4 className="detailContent">
                                                    My own personal and freelancing work or services:
                                                </h4>
                                                <h4 className="detailContent  detailContent__Contributions">
                                                    <ul>
                                                        <li className={"mt-5"}>
                                                            <a href={"https://www.bdxceu.com"}>BDXCEU</a>
                                                            <div>
                                                                BDXCEU is a SaaS Education Product Platform of which the
                                                                focus
                                                                is
                                                                Chiropractic Education and facilitates the ability for
                                                                students
                                                                to sign-up, login, register for classes, take exams, and
                                                                receive certificates upon course completion. Created for
                                                                <a href={"https://www.sportsacademy.us"}> sportsacademy.us</a>
                                                            </div>
                                                        </li>
                                                        <li className={"mt-5"}>
                                                            <a href={"https://www.igleague.com"}>IGLeague</a>
                                                            <div>
                                                                IGLeague is a SaaS ESports Product Platform of which the
                                                                focus
                                                                is
                                                                to facilitate the ability for gamers to sign-up, login
                                                                and
                                                                maintain accounts,
                                                                register for tournaments, attend games, and
                                                                purchase coins to attend tournaments. Now managed
                                                                by Pixel Systems or another associated servicer.
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </h4>
                                                <hr className={"jSectionSeparator"}/>
                                                <h4 className={"myContributions"}>Programming Stack:</h4>
                                                <h4 className="detailContent  detailContent__Contributions">
                                                    <ul>
                                                        <li>MERN - MongoDB, ExpressJS, ReactJS, NodeJS</li>
                                                    </ul>
                                                </h4>
                                                <hr className={"jSectionSeparator"}/>
                                                <h4 className={"myContributions"}>Attained Certifications:</h4>
                                                <h4 className="detailContent detailContent__Contributions">
                                                    <ul>
                                                        <li>
                                                            <a href={"https://www.mile2.com/certificate-verification/"}>Certified
                                                                Secure Web Application Engineer</a>
                                                            <div>
                                                                Mile2, Id[14461-161-550-4375], March 2021
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </h4>
                                            </hgroup>
                                        </section>
                                    </div>
                                </Collapse>*/}
                            </div>
                        </div>
                        <h6 className="employmentHeading subEmploymentHeading">Food Industry</h6>
                        <div className="restaurantEmployment">
                            <p>
                                <button className="btn btn-primary employmentButton button-63" type="button"
                                        data-toggle="collapse" data-target="#panera_collapse" onClick={toggleLoader}
                                        id="Panera" value={"Panera"}
                                        aria-expanded="false" aria-controls="panera_collapse">
                                    Panera Bread
                                </button>
                            </p>
                            <p>
                                <button className="btn btn-primary employmentButton button-63" type="button"
                                        data-toggle="collapse" data-target="#coffeeBagels_collapse"
                                        onClick={toggleLoader} id="CaB" value={"CaB"}
                                        aria-expanded="false" aria-controls="coffeeBagels_collapse">
                                    Coffee & Bagels
                                </button>
                            </p>
                            <p>
                                <button className="btn btn-primary employmentButton button-63" type="button"
                                        data-toggle="collapse" data-target="#daveAndBusters_collapse"
                                        onClick={toggleLoader} id="DaB" value={"DaB"}
                                        aria-expanded="false" aria-controls="daveAndBusters_collapse">
                                    Dave & Busters
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="right_sidePanel">
                    {
                        showInitialMessage && (
                            <div className="loadingMessage msgShell">
                                <div className="loadingGameScreen">
                                    <p>Select A Button On The Left Panel!</p>
                                    <p className={"blink"}>View My Employment!</p>
                                </div>
                            </div>
                        )
                    }
                    {
                        (showingJob === "AtEase") && (
                            <div className="collapsed" id="atease_collapse">
                                <section id="atEase" className="current_employment">
                                    <hgroup>
                                        <h3 className="companyName">
                                            <a
                                                href="https://www.atease.io"
                                            >At-Ease
                                            </a>
                                        </h3>
                                        <h4 className="jobRole">
                                            My Role:<br/><br/>
                                            <span className="jtitle">
                                            Principal/Senior Software Developer
                                        </span>
                                        </h4>
                                        <h4 className={"whoAreThey"}>Who Are They?</h4>
                                        <h4 className="detailContent">
                                            At-Ease is a Vacation Rentals Company focused on facilitating
                                            Military and Government Travelers.
                                        </h4>
                                        <hr className={"jSectionSeparator"}/>
                                        <h4 className={"myContributions"}>My Contributions in this Position:</h4>
                                        <h4 className="detailContent detailContent__Contributions">
                                            I began with At-Ease as a Software Engineer. My responsibilities initially
                                            focused on transitioning and evaluating the products being delivered by an
                                            overseas team. The products had been built with Java, AWS Server Components,
                                            a handful of MySQL databases and plethora of database tables. The products
                                            were intended to facilitate a Traveling Platform for Government & Military
                                            Members.
                                            <br/><br/>
                                            Shortly after the transition it became my responsibility to work with the
                                            Front-end Engineer to build a viable product from what had been delivered by
                                            the overseas team. I modified the Java backend APIs to resolve issues
                                            between
                                            the backend and the frontend. I also created new APIs for the Front-end
                                            Engineer based on the feedback received from the Front-end Engineer's needs.
                                            I coordinated and made changes to the backend application, server systems,
                                            and third party integrations: coordinating with the CEO, CTO, Engineering
                                            Managers, and Product Managers to ensure implementations were correct
                                            and designed according to spec.
                                            <br/><br/>
                                            I was quickly promoted to Senior Software Engineer after demonstrating my
                                            skills of being able to work through the Java Application Packages. Within
                                            six months of receiving the application we had our first booking through the
                                            system.
                                            <br/><br/>
                                            There-after, it was decided by the C Team that we should move to a new
                                            system.
                                            In June of 2023 I began writing two new backends using NodeJS, ExpressJS,
                                            and PostGreSQL. I finished the two backends by October 2023. In January
                                            2024,
                                            I was promoted to Principal Software Developer and began to build two new
                                            frontends in Angular. I finished the two Angular front-ends with the team
                                            by May 2024, and set up servers on Digital Ocean with Ngnix to serve the
                                            four applications. I designed the database tables, the models, APIs,
                                            and workflows for the application, and implemented the designs with the
                                            help of the team.
                                        </h4>
                                        <hr className={"jSectionSeparator"}/>
                                        <h4 className={"myContributions"}>Programming Stack:</h4>
                                        <h4 className="detailContent  detailContent__Contributions">
                                            <ul>
                                                <li>Current: PEAN - PostGreSQL, ExpressJS, Angular, NodeJS, Digital Ocean, Nginx</li>
                                                <li>Legacy: MAJA - MySQL, Angular, Java, AWS</li>
                                            </ul>
                                        </h4>
                                        <hr className={"jSectionSeparator"}/>
                                        <h4 className={"myContributions"}>Career Highlights:</h4>
                                        <h4 className="detailContent detailContent__Contributions">
                                            <ul>
                                                <li>
                                                    Progression:
                                                    <ol>
                                                        <li className={"mt-3 mb-3"}>
                                                            Software Engineer,
                                                            <div>
                                                                Team R&D
                                                            </div>
                                                        </li>
                                                        <li className={"mt-3 mb-3"}>
                                                            Senior Software Engineer,
                                                            <div>
                                                                Team R&D
                                                            </div>
                                                        </li>
                                                        <li className={"mt-3 mb-3"}>
                                                            Principal Software Developer,
                                                            <div>
                                                                Team R&D
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </li>
                                            </ul>
                                        </h4>
                                        <h6 className="employmentLength">
                                            Employment Length: 2 years | Currently Furloughed
                                        </h6>
                                    </hgroup>
                                </section>
                            </div>
                        )
                    }
                    {
                        (showingJob === "theTroveofGems") && (
                            <div className="collapsed" id="influx_collapse">
                                <section id="influx" className="current_employment">
                                    <hgroup>
                                        <h3 className="companyName">The Trove of Gems</h3>
                                        <h4 className="jobRole">
                                            My Role:<br/><br/>
                                            <span className="jtitle">
                                            FullStack MERN Developer
                                        </span>
                                        </h4>
                                        <h4 className="detailContent">
                                            My own personal and freelancing work or services:
                                        </h4>
                                        <h4 className="detailContent  detailContent__Contributions">
                                            <ul>
                                                <li className={"mt-5"}>
                                                    <a href={"https://www.bdxceu.com"}>BDXCEU</a>
                                                    <div>
                                                        BDXCEU is a SaaS Education Product Platform of which the focus
                                                        is
                                                        Chiropractic Education and facilitates the ability for students
                                                        to sign-up, login, register for classes, take exams, and
                                                        receive certificates upon course completion. Created for
                                                        <a href={"https://www.sportsacademy.us"}> sportsacademy.us</a>
                                                    </div>
                                                </li>
                                                <li className={"mt-5"}>
                                                    <a href={"https://www.igleague.com"}>IGLeague</a>
                                                    <div>
                                                        IGLeague is a SaaS ESports Product Platform of which the focus
                                                        is
                                                        to facilitate the ability for gamers to sign-up, login and
                                                        maintain accounts,
                                                        register for tournaments, attend games, and
                                                        purchase coins to attend tournaments. Now managed
                                                        by Pixel Systems or another associated servicer.
                                                    </div>
                                                </li>
                                            </ul>
                                        </h4>
                                        <hr className={"jSectionSeparator"}/>
                                        <h4 className={"myContributions"}>Programming Stack:</h4>
                                        <h4 className="detailContent  detailContent__Contributions">
                                            <ul>
                                                <li>MERN - MongoDB, ExpressJS, ReactJS, NodeJS</li>
                                            </ul>
                                        </h4>
                                        <hr className={"jSectionSeparator"}/>
                                        <h4 className={"myContributions"}>Attained Certifications:</h4>
                                        <h4 className="detailContent detailContent__Contributions">
                                            <ul>
                                                <li>
                                                    <a href={"https://www.mile2.com/certificate-verification/"}>Certified
                                                        Secure Web Application Engineer</a>
                                                    <div>
                                                        Mile2, Id[14461-161-550-4375], March 2021
                                                    </div>
                                                </li>
                                            </ul>
                                        </h4>
                                    </hgroup>
                                </section>
                            </div>
                        )
                    }
                    {
                        (showingJob === "Avoka") && (
                            <div className="collapsed" id="avoka_collapse">
                                <section id="avoka" className="previous_employment">
                                    <hgroup>
                                        <h3 className="companyName">
                                            <a
                                                href="https://www.crunchbase.com/organization/avoka"
                                            >Avoka
                                            </a>
                                        </h3>
                                        <h4 className="jobRole">My Role:<br/><br/><span
                                            className="jtitle">Senior Software Engineer</span>
                                        </h4>
                                        <h4 className={"whoAreThey"}>Who Are They?</h4>
                                        <h4 className="detailContent">
                                            Avoka was a finTech start-up that specialized in
                                            customer acquisition services for financial institutions.
                                        </h4>
                                        <hr className={"jSectionSeparator"}/>
                                        <h4 className={"myContributions"}>My Contributions in this Company:</h4>
                                        <h4 className="detailContent  detailContent__Contributions">
                                            As a Junior Software Engineer, I began to learn the proprietary
                                            product Avoka Composer and later Maestro. My responsibilities included
                                            helping banking clients convert their PDF credit card applications to
                                            a digital online format so that their clients could apply online.
                                            After learning the system and helping with a few transitions I was
                                            promoted to Software Engineer.
                                            <br/><br/>
                                            As Software Engineer, I began to help onboard new banking customers,
                                            develop "proof of concepts" for potential banking clients and
                                            Marketing/Sales,
                                            I also began to write documentation for the company as well as a Knowledge
                                            Base for Company new hires.
                                            <br/><br/>
                                            I was finally promoted to Senior Software Engineer shortly before the
                                            Company's acquisition by Temenos.
                                        </h4>
                                        <hr className={"jSectionSeparator"}/>
                                        <h4 className={"myContributions"}>Programming Languages & Scripts:</h4>
                                        <h4 className="detailContent  detailContent__Contributions">
                                            <ul>
                                                <li>Java</li>
                                                <li>Groovy</li>
                                                <li>HTML/CSS/JavaScript</li>
                                                <li>JQuery</li>
                                            </ul>
                                        </h4>
                                        <hr className={"jSectionSeparator"}/>
                                        <h4 className={"myContributions"}>Career Highlights:</h4>
                                        <h4 className="detailContent  detailContent__Contributions">
                                            <ul>
                                                <li>
                                                    Progression:
                                                    <ol>
                                                        <li className={"mt-3 mb-3"}>
                                                            Junior Software Engineer,
                                                            <div>
                                                                Team Client Services
                                                            </div>
                                                        </li>
                                                        <li className={"mt-3 mb-3"}>
                                                            Software Engineer,
                                                            <div>
                                                                Team Client Services
                                                            </div>
                                                        </li>
                                                        <li className={"mt-3 mb-3"}>
                                                            Senior Software Engineer,
                                                            <div>
                                                                Team Client Services
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </li>
                                            </ul>
                                        </h4>
                                        <h5 className="acquisitionBy">Acquired by<span> </span>
                                            <a href="https://www.temenos.com/us/products/infinity/">
                                                Temenos
                                            </a> 12/2018
                                        </h5>
                                        <h6 className="employmentLength">Employment Length: 3 years | 9/2014 -
                                            7/2017</h6>
                                    </hgroup>
                                </section>
                            </div>
                        )
                    }
                    {
                        (showingJob === "Intrado") && (
                            <div className="collapsed" id="intrado_collapse">
                                <section id="intrado" className="previous_employment">
                                    <hgroup>
                                        <h3 className="companyName">
                                            <a
                                                href="https://www.crunchbase.com/organization/intrado"
                                            >Intrado
                                            </a>
                                        </h3>
                                        <h4 className="jobRole">My Role:<br/><br/><span
                                            className="jtitle">Associate Software Engineer</span>
                                        </h4>
                                        <h4 className={"whoAreThey"}>Who Are They?</h4>
                                        <h4 className="detailContent">
                                            Intrado is a subsidiary of West Corporation. Agencies
                                            and telecommunication services providers throughout the world depend on
                                            Intrado
                                            for emergency communication services and technology. The company focuses on
                                            pioneering network innovations that improve 9-1-1 emergency response.
                                        </h4>
                                        <hr className={"jSectionSeparator"}/>
                                        <h4 className={"myContributions"}>My Contributions in this Company:</h4>
                                        <h4 className="detailContent detailContent__Contributions">
                                            Initially hired onto the AT&T-SouthEast BellSouth Wire-line Team. My
                                            responsibilities included: entering manual data from excel spreadsheets
                                            into company systems, researching errant 9-1-1 calls where no record of
                                            telephone ownership was linked to a number that dialed 9-1-1, confirming
                                            address locations with the local police departments designated by a set
                                            Master Street Address Guide (or MSAG). My regions were 8 parishes in
                                            Louisiana.
                                            <br/><br/>
                                            I was then shifted onto a new Wire-line Team that was created for a new
                                            project for Verizon Wire-line Services. During this shift, the team was
                                            prepped on the new SLAs we would be required to meet per the contracts
                                            signed.
                                            Much of this was excel data that had to be manually managed and provided to
                                            Verizon by 9am each day. Initially, we began as a team of 8 people to meet
                                            these deadlines and I was one of the people assigned to preparing the
                                            reports.
                                            During my time doing these tasks manually, I spent my after-work hours
                                            reviewing the reports and learning how to write VBA so that I could
                                            programmatically build the reports. After six months I had a working
                                            prototype
                                            of an Excel VBA Macro that could build the reports needed in under a minute.
                                            <br/><br/>
                                            Once I had a working prototype, I requested a meeting with my managers and
                                            the
                                            Senior Data Analysts and presented my work. My managers and coworkers were
                                            stunned to say the least, and it took three more weeks or so, with meetings
                                            called between Engineering Managers and Software Engineering Managers in
                                            other departments of the company that were requested to review and vet my
                                            work.
                                            Ultimately my work was approved and put into use. I freed up the time of the
                                            Verizon Wire-line department so that we could focus on other tasks to
                                            build the department we wanted. Shortly there-after, I was approached by a
                                            Senior Engineer on the Intrado Metrics team who suggested that I apply for a
                                            position for their team the next time they opened a Data Solutions Analyst
                                            position.
                                            <br/><br/>
                                            When that position opened, I applied for it and ultimately got a spot on the
                                            team.
                                            As a Data Solutions Analyst I was responsible for building and meeting
                                            report deadlines on an Annual, Monthly, Weekly, Daily and Hourly basis
                                            depending on the report. I was also responsible for learning a new
                                            programming
                                            language called SAS (Statistical Analysis Software). I threw myself into my
                                            work
                                            and learning, and eventually became the only Data Solutions Analyst on the
                                            team at the time to get my SAS Base 9 Programmer certification after a year
                                            in
                                            the position. I took on more work once I became comfortable writing SAS code
                                            and began to shift my focus to learning and using Intrado's proprietary
                                            ClearView Platform to build HTML/CSS reports backed by SAS databases, and
                                            shifting customers away from manually delivered excel reports.
                                            <br/><br/>
                                            With a proven track-record of work, I was promoted to Associate Software
                                            Engineer.
                                        </h4>
                                        <hr className={"jSectionSeparator"}/>
                                        <h4 className={"myContributions"}>Programming Languages & Scripts:</h4>
                                        <h4 className="detailContent  detailContent__Contributions">
                                            <ul>
                                                <li>SAS Base 9</li>
                                                <li>HTML/CSS/JavaScript</li>
                                                <li>VBA</li>
                                            </ul>
                                        </h4>
                                        <hr className={"jSectionSeparator"}/>
                                        <h4 className={"myContributions"}>Attained Certifications:</h4>
                                        <h4 className="detailContent detailContent__Contributions">
                                            <ul>
                                                <li>
                                                    <a href={"https://www.credly.com/badges/70c0b3ea-e041-4e2f-b1ff-62846f525257"}>Certified
                                                        SAS Certified Base Programmer For SAS 9</a>
                                                    <div>
                                                        SAS Institute Inc., Id[BP041683v9], June 2014
                                                    </div>
                                                </li>
                                            </ul>
                                        </h4>
                                        <hr className={"jSectionSeparator"}/>
                                        <h4 className={"myContributions"}>Career Highlights:</h4>
                                        <h4 className="detailContent detailContent__Contributions">
                                            <ul>
                                                <li>
                                                    Progression:
                                                    <ol>
                                                        <li className={"mt-3 mb-3"}>
                                                            Associate Data Analyst,
                                                            <div>
                                                                Team AT&T-BellSouth Wire-line
                                                            </div>
                                                        </li>
                                                        <li className={"mt-3 mb-3"}>
                                                            Data Analyst,
                                                            <div>
                                                                Team Verizon Wire-line
                                                            </div>
                                                        </li>
                                                        <li className={"mt-3 mb-3"}>
                                                            Data Solutions Analyst,
                                                            <div>
                                                                Team Metrics
                                                            </div>
                                                        </li>
                                                        <li className={"mt-3 mb-3"}>
                                                            Associate Software Engineer,
                                                            <div>
                                                                Team Metrics
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </li>
                                                <li>
                                                    Recognized in Company-Wide meeting for my contributions.
                                                    Awarded Intrado's
                                                </li>
                                                <li>
                                                    Optimized a SQL Query that took 24 hours to run, down to 3 hours.
                                                </li>
                                            </ul>
                                        </h4>
                                        <h5 className="acquisitionBy">Acquired by <span> </span>
                                            <a href="https://www.west.com/"
                                            >West Corporation
                                            </a> 12/2015
                                        </h5>
                                        <h6 className="employmentLength">
                                            Employment Length: 3 years | 8/2011 - 9/2014
                                        </h6>
                                    </hgroup>
                                </section>
                            </div>
                        )
                    }
                    {
                        (showingJob === "Panera") && (
                            <div className="collapsed" id="panera_collapse">
                                <div>
                                    <section id="panera" className="previous_employment">
                                        <hgroup>
                                            <h3 className="companyName">
                                                <a
                                                    href="https://www.crunchbase.com/organization/panera-bread"
                                                >Panera Bread
                                                </a>
                                            </h3>
                                            <h4 className="jobRole">My Role:<br/><br/><span
                                                className="jtitle">Baker's Assistant</span></h4>
                                            <h4 className={"whoAreThey"}>Who Are They?</h4>
                                            <h4 className="detailContent">
                                                Panera Bread Company is an American chain store of bakery-cafe fast
                                                casual restaurants with over 2,000 locations, all of which are
                                                in the United States and Canada. Offerings include bakery items, pasta,
                                                salads, sandwiches, soups, and specialty drinks.
                                            </h4>
                                            <hr className={"jSectionSeparator"}/>
                                            <h4 className={"myContributions"}>My Contributions in this Company:</h4>
                                            <h4 className="detailContent detailContent__Contributions">
                                                As a Baker's Assistant, I ensured that the Baker was supported
                                                and I helped prep goods to be baked by the Baker. My shifts were
                                                graveyard: starting at 10pm extending to 3am. I would assist by
                                                prepping bread doughs into appropriate pans, prepping unbaked cookies
                                                and decorating baked cookies, setting up muffin tins and batters or
                                                toppings, mini-soufflés, frozen goods, and cleaning utensils for the
                                                Baker for repeated uses throughout the bake. I also made it a point to
                                                do a deep clean of the Baker's fridges once to twice a week.
                                                <br/><br/>
                                                A final note: I also felt that as a Baker's Assistant, one important
                                                aspect of the job was to closely observe and learn my Baker's routine.
                                                By doing so, I was able to anticipate what my Baker would need and when,
                                                and this allowed me to develop my own routine that complemented the
                                                Baker's so that we would be in sync as much as could be throughout most
                                                of our shift together. Examples include: what racks to set up first,
                                                in what order to clean what equipment and when to do so, etc.
                                            </h4>
                                            <h5 className="acquisitionBy">Visit The Company Site <a
                                                href="https://www.panerabread.com/en-us/home.html">Here</a></h5>
                                            <h6 className="employmentLength">
                                                Employment Length: 6 Months | 07/2020 - 12/2020
                                            </h6>
                                        </hgroup>
                                    </section>
                                </div>
                            </div>
                        )
                    }
                    {
                        (showingJob === "CaB") && (
                            <div className="collapsed" id="coffeeBagels_collapse">
                                <div>
                                    <section id="coffeeBagels" className="previous_employment">
                                        <hgroup>
                                            <h3 className="companyName">
                                                <a
                                                    href="https://www.crunchbase.com/organization/einstein-noah-restaurant-group"
                                                >Coffee & Bagels
                                                </a>
                                            </h3>
                                            <h4 className="jobRole">My Role:<br/><br/><span
                                                className="jtitle">District Baker</span></h4>
                                            <h4 className={"whoAreThey"}>Who Are They?</h4>
                                            <h4 className="detailContent">
                                                Bagel Brands is the parent company for the following breakfast brands:
                                                Einstein Bros., Bruegger's, Noah's NY and Manhattan Bagels.
                                            </h4>
                                            <hr className={"jSectionSeparator"}/>
                                            <h4 className={"myContributions"}>My Contributions in this Company:</h4>
                                            <h4 className="detailContent detailContent__Contributions">
                                                As a baker I ensured that the store's baked goods were ready
                                                prior to store opening. My shifts were graveyard: starting at 2am extending to 10am.
                                                I prepared and baked various types of bagels, cookies, muffins and
                                                breads. Once the bake for the day was complete I then set to "slacking"
                                                the next day's bake. I did hourly bagel counts to monitor stock and trending
                                                business for the day, set proper "date-dots" to effectively expire baked
                                                goods that surpassed the Company timelines for "freshness".
                                                <br/><br/>
                                                Within 8 months I was offered a position as Assistant Store Manager.
                                                As ASM, I was involved with inventory counting and ordering for the store,
                                                interviewing and hiring new team-members, team-member growth and training,
                                                more general Store maintenance such as calling technicians for broken
                                                equipment, maintenance scheduling, and the more less-savory aspects of
                                                management: guest complaints and employee disputes.
                                                <br/><br/>
                                                I accepted the role under the caveat that I could continue baking as
                                                that's where my passion lies, as well as to be trained as a Certified
                                                Baker Trainer so that I could begin to train newly hired bakers from other
                                                stores. I also promised to help the General Manager find a replacement ASM so
                                                that I occupied the ASM role in as short a time as possible.
                                                <br/><br/>
                                                I had attained the Certified Baker Trainer role by the time we found my
                                                replacement for the ASM role and I stepped down. As CBT, I began to train
                                                new bakers from other store locations at my home store. I was responsible
                                                for ensuring new bakers were taught the training & safety guidelines,
                                                where to find answers to questions they might have once they started
                                                baking on their own in their own store, how to work the oven(s) and
                                                proofer, proper cleaning procedure prior to, during, and after baking,
                                                and how to stay on task and within the proper timeframes to ensure a
                                                successful bake by the time their store opened.
                                                <br/><br/>
                                                In November 2019, I was offered the role of District Baker by the District
                                                Manager which I accepted and would be the final role I held with Coffee &
                                                Bagels during my employment. As District Baker, my responsibilities
                                                expanded to developing a schedule to travel to 6 store locations to
                                                check in on new and established bakers to grade the quality of their
                                                bakes, offer remedial training for bakers who were having problems
                                                with their bakes, monitoring the quality of their equipment such as the
                                                ovens and proofers, attending meetings with the GMs and District Manager,
                                                and filling in as the "emergency baker" for stores where their baker
                                                missed a shift.
                                            </h4>
                                            <hr className={"jSectionSeparator"}/>
                                            <h4 className={"myContributions"}>Attained Certifications:</h4>
                                            <h4 className="detailContent detailContent__Contributions">
                                                <ul>
                                                    <li>
                                                        <a href={"https://www.servsafe.com/access/SS/Certifications/CertSearch?IsSearch=&IssuedLastName=Greco&CertificateId=3580574"}>
                                                            ServSafe Food Handler
                                                        </a>
                                                        <div>
                                                            National Restaurant Association, Id[3580574], September 2018 - Expired
                                                        </div>
                                                    </li>
                                                </ul>
                                            </h4>
                                            <hr className={"jSectionSeparator"}/>
                                            <h4 className={"myContributions"}>Career Highlights:</h4>
                                            <h4 className="detailContent detailContent__Contributions">
                                                <ul>
                                                    <li>
                                                        Progression:
                                                        <ol>
                                                            <li className={"mt-3 mb-3"}>
                                                                Baker
                                                            </li>
                                                            <li className={"mt-3 mb-3"}>
                                                                Associate Store Manager
                                                            </li>
                                                            <li className={"mt-3 mb-3"}>
                                                                Certified Baker Trainer
                                                            </li>
                                                            <li className={"mt-3 mb-3"}>
                                                                District Baker
                                                            </li>
                                                        </ol>
                                                    </li>
                                                    <li>
                                                        Learned an obscure punch-code for the Toaster used by the company.
                                                        Rarely it would go on the fritz and take down line ops until
                                                        that one person could be contacted to walk someone through how to
                                                        reset the toaster. Once I learned the code I was then able to do
                                                        it myself.
                                                    </li>
                                                </ul>
                                            </h4>
                                            <h5 className="acquisitionBy">Visit The Company Site <a
                                                href="https://www.coffeeandbagels.com/">Here</a></h5>
                                            <h6 className="employmentLength">Employment Length: 2 years | 3/2018 -
                                                3/2020</h6>
                                        </hgroup>
                                    </section>
                                </div>
                            </div>
                        )
                    }
                    {
                        (showingJob === "DaB") && (
                            <div className="collapsed" id="daveAndBusters_collapse">
                                <div>
                                    <section id="daveAndBusters" className="previous_employment">
                                        <hgroup>
                                            <h3 className="companyName">
                                                <a
                                                    href="https://www.crunchbase.com/organization/dave-buster"
                                                >Dave & Busters
                                                </a>
                                            </h3>
                                            <h4 className="jobRole">My Role:<br/><br/><span
                                                className="jtitle">Winner's Circle Staff</span>
                                            </h4>
                                            <h4 className={"whoAreThey"}>Who Are They?</h4>
                                            <h4 className="detailContent">
                                                Dave & Buster's Entertainment, Inc. (stylized in all caps) is an
                                                American restaurant and entertainment business headquartered in Dallas.
                                                Each Dave & Buster's location has a full-service restaurant, full bar,
                                                and a video arcade; the latter of which is known as the
                                                "Million Dollar Midway".
                                            </h4>
                                            <hr className={"jSectionSeparator"}/>
                                            <h4 className={"myContributions"}>My Contributions in this Company:</h4>
                                            <h4 className="detailContent detailContent__Contributions">
                                                As a busboy I was responsible for cleaning and resetting tables,
                                                communicating with the waiters and waitresses on table turn-over,
                                                assisting with on-site catered events, and general cleanup of the
                                                "Million Dollar Midway".<br/><br/>
                                                I was also a member of the Winner's Circle Staff. I assisted guests
                                                with ticket collection, management, storage, and redemption,
                                                calling game techs for reported issues with any gaming systems,
                                                restocking the store, and involved with inventory counting - passing
                                                that information to the store manager for ordering more inventory.
                                                <br/><br/>
                                                It was a pair of guests (Tom & Michelle) that recognized my work ethic
                                                and encouraged me to apply to Intrado.
                                            </h4>
                                            <hr className={"jSectionSeparator"}/>
                                            <h4 className={"myContributions"}>Career Highlights:</h4>
                                            <h4 className="detailContent detailContent__Contributions">
                                                <ul>
                                                    <li>
                                                        Progression:
                                                        <ol>
                                                            <li className={"mt-3 mb-3"}>
                                                                Busboy
                                                            </li>
                                                            <li className={"mt-3 mb-3"}>
                                                                Winner's Circle Staff
                                                            </li>
                                                        </ol>
                                                    </li>
                                                </ul>
                                            </h4>
                                            <h5 className="acquisitionBy">Visit The Company Site <a
                                                href="http://www.daveandbusters.com/">Here</a></h5>
                                            <h6 className="employmentLength">Employment Length: 4 years | 11/2007 -
                                                8/2011</h6>
                                        </hgroup>
                                    </section>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
}