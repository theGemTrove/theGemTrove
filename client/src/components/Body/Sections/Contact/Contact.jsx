import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import "./Contact.scss";
export const Contact = () => (
    <section id="contact">
        <article className="contactAnchor">
            <Container className={"w-100"}>
                <h4 className="about__SectionTitle">How to contact me</h4>
                <Row className="contactPanel">
                    <Col lg={6} md={6} sm={12} className="contactBg1">
                        <div className={"contactWrapper"}>
                            <p className="contactParagraph">Do have an idea you'd like to collaborate on?</p>
                            <p className="contactParagraph">Or alternatively,</p>
                            <p className="contactParagraph">Would you like to know more about me or perhaps have a
                                chat?</p>
                            <p className="contactParagraph">
                                Below you'll find links to my recent projects, information about my education, previous
                                & current
                                employment, and more!
                            </p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="contactBg2">
                        <div className={"contactWrapper contactWrapperCenter"}>
                            <p className="contactParagraph">
                                Use the icons on the sidebar navigation to link to my GitHub Account or send me an
                                email!
                            </p>
                            <p className="contactParagraph contacts_1">
                                Please consider giving my GitHub Account a <a className={"give_a_follow"}
                                                                              href="https://github.com/theGemTrove">follow</a>.
                            </p>
                            <p className="contactParagraph">You can also send me an email at <a
                                className={"contact_email"}
                                href="mailto:dkgreco@thetroveofgems.tech">
                                dkgreco@thetroveofgems.tech
                            </a>!</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </article>
    </section>
)