import React from "react";

import "./Archival.scss";
import {Col, Row} from "react-bootstrap";

import Tanzanite from "../../../../assets/images/archival/tanzanite.png";
import Tourmaline from "../../../../assets/images/archival/tourmaline.png";
import Amethyst from "../../../../assets/images/archival/amethyst.png";

export const Archival = () => (
    <section id="theArchives" className="theArchivesSection">
        <article className="sectionArticle recentProjectSectionOverlay pb-5">
            <h4 className="archival__SectionTitle">My Projects</h4>
            <Row className={"justify-center pb-5 crystalRows"}>
                <Col lg={4} md={6} sm={12} className={"mb-5"}>
                    <div className="card crystalCard">
                        <a href="https://www.gia.edu/tanzanite">
                            <img className="card-img-top cardCrystalImg"
                                 src={`${Tanzanite}`}
                                 alt="Card image cap"
                            />
                        </a>
                        <div className="card-body crystal-card-body">
                            <h5 className="card-title crystal-card-title">Tanzanite</h5>
                            <p className="card-text crystal-card-text">
                                The Archives
                            </p>
                            <p className="card-text crystal-card-text__Desc">
                                Test
                            </p>
                            <a href="https://www.archive.thetroveofgems.tech" className="btn btn-primary bg-light text-dark crystal-card-button">
                                Take me to the Archives!
                            </a>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12} className={"mb-5"}>
                    <div className="card crystalCard">
                        <a href="https://www.gia.edu/tourmaline">
                            <img className="card-img-top cardCrystalImg"
                                 src={`${Tourmaline}`}
                                 alt="Card image cap"/>
                        </a>
                        <div className="card-body crystal-card-body">
                            <h5 className="card-title crystal-card-title">Tourmaline</h5>
                            <p className="card-text crystal-card-text">D'ni Cavern Time</p>
                            <p className="card-text crystal-card-text__Desc">
                                Test
                            </p>
                            <a href="https://www.npmjs.com/package/dni-cavern-time" className="btn btn-primary bg-light text-dark crystal-card-button">
                                Show Me The NPM Package!
                            </a>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12} className={"mb-5"}>
                    <div className="card crystalCard">
                        <a href="https://www.gia.edu/tourmaline">
                            <img className="card-img-top cardCrystalImg"
                                 src={`${Amethyst}`}
                                 alt="Card image cap"/>
                        </a>
                        <div className="card-body crystal-card-body">
                            <h5 className="card-title crystal-card-title">Amethyst</h5>
                            <p className="card-text crystal-card-text">Mineral Cup Tourney</p>
                            <p className="card-text crystal-card-text__Desc">
                                Test
                            </p>
                            <a href="https://www.npmjs.com/package/dni-cavern-time"
                               className="btn btn-primary bg-light text-dark crystal-card-button">
                                Coming Soon!
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </article>
    </section>
)