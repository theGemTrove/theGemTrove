import React from "react";

import "./AlmaMaters.scss";

import FRCC from "../../../../../assets/images/almaMaters/frcc_westminster.jpg";
import ESHS from "../../../../../assets/images/almaMaters/eshs.jpg";

const OptimizedImage = ({ imgSrc, children }) => {
    return (
        <div style={{display: 'flex', position: 'relative', width: '100%'}} className={"school"}>
            <img
                src={`${imgSrc}`}
                alt="Your image description"
                style={{
                    minWidth: '45%',
                    width: '45%',
                    objectFit: 'fill',
                    objectPosition: 'center'
                }}
                className={"schoolPhoto"}
            />
            {children}
        </div>
    );
};

export const AlmaMaters = () => {

    return (
        <div className={"schoolWrapper"}>
            <div id={"college_0"} className={"schoolEntry"}>
                <OptimizedImage
                    imgSrc={FRCC}
                    originalWidth={980}
                    originalHeight={653}
                    children={
                        <div className={"childWrapper"}>
                            <h3 className={"school__name"}>Front Range Community College</h3>
                            <p className={"dates__attended"}>
                                Attended From August 2007 To December 2009
                            </p>
                            <p className={"degree__obtained"}>
                                Associate Degree of Science Received
                            </p>
                            <p className={"school_highlights"}>
                                Highlights:
                            </p>
                            <ul className={"school_highligh_list"}>
                                <li>
                                    Made Dean's List Multiple Semesters
                                </li>
                                <li>
                                    Made President's List Multiple Semesters
                                </li>
                                <li>
                                    Instructed by one of the college's best Chemistry Instructors, Susan Northleaf
                                </li>
                            </ul>
                        </div>
                    }
                />
            </div>
            <div id={"high-school"} className={"schoolEntry"}>
            <OptimizedImage
                    imgSrc={ESHS}
                    originalWidth={554}
                    originalHeight={416}
                    children={
                        <div className={"childWrapper"}>
                            <h3 className={"school__name"}>El Segundo High School</h3>
                            <p className={"dates__attended"}>
                                Attended From August 2003 To June 2007
                            </p>
                            <p className={"degree__obtained"}>
                                High School Diploma Received
                            </p>
                            <p className={"school_highlights"}>
                                Highlights:
                            </p>
                            <ul className={"school_highligh_list"}>
                                <li>Received the Golden State Seal Merit Diploma (GSSMD) Upon Graduation</li>
                                <li>4 Years - Marching & Concert Band</li>
                                <li>Voted In As Band Treasurer For 1 Year By Peers</li>
                                <li>Voted In As Senior Classes' Yearbook's Most Unique</li>
                            </ul>
                        </div>
                    }
            />
            </div>
        </div>
    );
}