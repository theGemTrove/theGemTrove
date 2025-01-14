import React from "react";

import "./Archival.scss";
import {Col, Row} from "react-bootstrap";

import Tanzanite from "../../../../assets/images/archival/tanzanite.png";
import Tourmaline from "../../../../assets/images/archival/tourmaline.png";
import Amethyst from "../../../../assets/images/archival/amethyst.png";
import AmberGem from "../../../../assets/images/archival/polished-amber-gem.png";

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
                                Code Archives
                            </p>
                            <a href="https://www.archive.thetroveofgems.tech" className="btn btn-primary bg-light text-dark crystal-card-button">
                                Take Me There!
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
                                D'ni Cavern Date/Time Conversion NPM Package
                            </p>
                            <a href="https://www.npmjs.com/package/dni-cavern-time" className="btn btn-primary bg-light text-dark crystal-card-button">
                                Take Me There!
                            </a>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12} className={"mb-5"}>
                    <div className="card crystalCard">
                        <a href="https://www.gia.edu/amber">
                            <img className="card-img-top cardCrystalImg"
                                 src={`${AmberGem}`}
                                 alt="Card image cap"/>
                        </a>
                        <div className="card-body crystal-card-body">
                            <h5 className="card-title crystal-card-title">Amber</h5>
                            <p className="card-text crystal-card-text">Photo-Album</p>
                            <p className="card-text crystal-card-text__Desc">
                                The Family Photo Album
                            </p>
                            <a href="https://www.photo-album.thetroveofgems.tech"
                               className="btn btn-primary bg-light text-dark crystal-card-button">
                                Take Me There!
                            </a>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12} className={"mb-5"}>
                    <div className="card crystalCard">
                        <a href="https://www.gia.edu/amethyst">
                            <img className="card-img-top cardCrystalImg"
                                 src={`${Amethyst}`}
                                 alt="Card image cap"/>
                        </a>
                        <div className="card-body crystal-card-body">
                            <h5 className="card-title crystal-card-title">Amethyst</h5>
                            <p className="card-text crystal-card-text">Mineral Cup Tourney</p>
                            <p className="card-text crystal-card-text__Desc">
                                Bracket Tournament For Minerals & Gems.
                            </p>
                            <a href="https://www.npmjs.com/package/dni-cavern-time"
                               className="btn btn-primary bg-light text-dark crystal-card-button disabled">
                                Coming Soon!
                            </a>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12} className={"mb-5"}>
                </Col>
                <Col lg={4} md={6} sm={12} className={"mb-5"}>
                </Col>
            </Row>
        </article>
    </section>
)