import React from "react";
import {AdvancedImage} from '@cloudinary/react';
import {fill, fit} from "@cloudinary/url-gen/actions/resize";

import "./AlmaMaters.scss";
import {useTranslation} from "react-i18next";

export const AlmaMaters = ({ cld }) => {
    console.log("Alma Maters: ", cld);

    const {t} = useTranslation();
    //https://res.cloudinary.com/ds5xwt3v1/image/upload/frcc_x7bhoc.jpg

    const
        EL_SEGUNDO = cld.image('el_segundo_qlc4oo'),
        FRCC = cld.image('frcc_x7bhoc');

    FRCC.resize(fill().width(887).height(500));
    EL_SEGUNDO.resize(fill().width(887).height(500));

    return (
        <div className={"schoolWrapper"}>
            <div id={"college_0"} className={"schoolEntry"}>
                <div className={"schoolDetails"}>
                    <h3 className={"school__name"}>Front Range Community College</h3>
                    <p className={"dates__attended"}>
                        {t('education.college.attended')}
                    </p>
                    <p className={"degree__obtained"}>
                        {t('education.college.campus')}
                    </p>
                    <p className={"degree__obtained"}>
                        {t('education.college.degree')}
                    </p>
                    <p className={"school_highlights"}>
                        {t('education.highlightsLabel')}:
                    </p>
                    <ul className={"school_highlight_list"}>
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
                <AdvancedImage cldImg={FRCC}/>
            </div>
            <hr className={"educationSeparator"}/>
            <div id={"high-school"} className={"schoolEntry"}>
                <div className={"schoolDetails"}>
                    <h3 className={"school__name"}>El Segundo High School</h3>
                    <p className={"dates__attended"}>
                        {t('education.highschool.attended')}
                    </p>
                    <p className={"degree__obtained"}>
                        {t('education.highschool.location')}
                    </p>
                    <p className={"degree__obtained"}>
                        {t('education.highschool.degree')}
                    </p>
                    <p className={"school_highlights"}>
                        {t('education.highlightsLabel')}:
                    </p>
                    <ul className={"school_highlight_list"}>
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
                <AdvancedImage cldImg={EL_SEGUNDO}/>
            </div>
        </div>
    );
}