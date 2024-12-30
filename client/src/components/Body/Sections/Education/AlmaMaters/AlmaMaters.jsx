import React from "react";

import "./AlmaMaters.scss";

import FRCC from "../../../../../assets/images/almaMaters/frcc_westminster.jpg";
import ESHS from "../../../../../assets/images/almaMaters/eshs.jpg";
import {useTranslation} from "react-i18next";

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
    const {t} = useTranslation();
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
                                {t('education.college.attended')}
                            </p>
                            <p className={"degree__obtained"}>
                                {t('education.college.degree')}
                            </p>
                            <p className={"school_highlights"}>
                                {t('education.highlightsLabel')}:
                            </p>
                            <ul className={"school_highligh_list"}>
                                <li>
                                    {t('education.college.highlightList.list.1')}
                                </li>
                                <li>
                                    {t('education.college.highlightList.list.2')}
                                </li>
                                <li>
                                    {t('education.college.highlightList.list.3')}
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
                                {t('education.highschool.attended')}
                            </p>
                            <p className={"degree__obtained"}>
                                {t('education.highschool.degree')}
                            </p>
                            <p className={"school_highlights"}>
                                {t('education.highlightsLabel')}:
                            </p>
                            <ul className={"school_highligh_list"}>
                                <li>
                                    {t('education.highschool.highlightList.list.1')}
                                </li>
                                <li>
                                    {t('education.highschool.highlightList.list.2')}
                                </li>
                                <li>
                                    {t('education.highschool.highlightList.list.3')}
                                </li>
                                <li>
                                    {t('education.highschool.highlightList.list.4')}
                                </li>
                            </ul>
                        </div>
                    }
            />
            </div>
        </div>
    );
}