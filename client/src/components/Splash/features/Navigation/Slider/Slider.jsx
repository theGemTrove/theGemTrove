import React from 'react';

import "./Slider.scss";
import {useTranslation} from "react-i18next";

export const Slider = () => {
    const {t, i18n} = useTranslation();

    const changeLanguageHandler = (lang) => {
        return i18n.changeLanguage(lang);
    }
    return (
        <nav className="navigation">
            <ul className="navigation-list">
                <li className="navigation-item">
                    <a href="#about" className="navigation-link">
						<span className="navigem desc_about">
                            {t('nav.about')}
						</span>
                    </a>
                </li>
                <li className="navigation-item">
                    <a href="#contact" className="navigation-link">
						<span className="navigem desc_contact">
							{t('nav.contact')}
						</span>
                    </a>
                </li>
                <li className="navigation-item">
                    <a href="#theArchives" className="navigation-link">
						<span className="navigem desc_projects">
							{t('nav.projects')}
						</span>
                    </a>
                </li>
                <li className="navigation-item">
                    <a href="#employment" className="navigation-link">
						<span className="navigem desc_employment">
							{t('nav.employment')}
						</span>
                    </a>
                </li>
                <li className="navigation-item">
                    <a href="#education" className="navigation-link">
						<span className="navigem desc_education">
							{t('nav.education')}
						</span>
                    </a>
                </li>
            </ul>
            <div className="langPanel">
                <i className="fa-duotone fa-globe-americas"></i>
                {/*<small>Translation Services</small>*/}
                <p className="langDesc-disabled" lang={"en"}
                   onClick={() => changeLanguageHandler('en')}
                >
                    {t('nav.americanEnglish')}
                </p>
                <p className="langDesc-disabled" data-toggle="tooltip" data-placement="top"
                   title="Czech Language Translation Services Coming Soon!" lang={"cz"}
                   onClick={() => changeLanguageHandler('cz')}
                >
                    {t('nav.czech')}
                </p>
                <p className="langDesc-disabled" data-toggle="tooltip" data-placement="top"
                   title="Spanish Language Translation Services Coming Soon!" lang={"sp"}
                   onClick={() => changeLanguageHandler('sp')}
                >
                    {t('nav.spanish')}
                </p>
                <p className="langDesc-disabled" data-toggle="tooltip" data-placement="top"
                   title="Japanese Language Translation Services Coming Soon!" lang={"jp"}
                   onClick={() => changeLanguageHandler('jp')}
                >
                    {t('nav.japanese')}
                </p>
            </div>
            <div className="copyright">
                <p>
                    {t('nav.trademark')}
                    <br/>
                    {t('nav.footerMsg')}
                </p>
            </div>
        </nav>
    );
}