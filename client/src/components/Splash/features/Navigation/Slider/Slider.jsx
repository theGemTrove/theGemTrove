import React, {useState} from 'react';

import "./Slider.scss";
import {useTranslation} from "react-i18next";

export const Slider = () => {
    const
        [viewingLanguage, setViewingLanguage] = useState('en'),
        {t, i18n} = useTranslation();

    const changeLanguageHandler = (lang) => {
        setViewingLanguage(lang);
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
                { (viewingLanguage === 'en' || viewingLanguage === 'sp') && (
                    <i className="fa-duotone fa-earth-americas"></i>
                )}
                { viewingLanguage === 'cz' && (
                    <i className="fa-duotone fa-globe-europe"></i>
                )}
                { viewingLanguage === 'jp' && (
                    <i className="fa-duotone fa-globe-asia"></i>
                )}
                <p className={`langDesc-disabled ${viewingLanguage === "en" && 'active-lang'}`} lang={"en"}
                   onClick={() => changeLanguageHandler('en')}
                >
                    {t('nav.americanEnglish')}
                </p>
                <p className={`langDesc-disabled ${viewingLanguage === "cz" && 'active-lang'}`} data-toggle="tooltip" data-placement="top"
                   title="Czech Language Translation Services In Progress!" lang={"cz"}
                   onClick={() => changeLanguageHandler('cz')}
                >
                    {t('nav.czech')}
                </p>
                <p className={`langDesc-disabled ${viewingLanguage === "sp" && 'active-lang'}`} data-toggle="tooltip" data-placement="top"
                   title="Spanish Language Translation Services In Progress!" lang={"sp"}
                   onClick={() => changeLanguageHandler('sp')}
                >
                    {t('nav.spanish')}
                </p>
                <p className={`langDesc-disabled ${viewingLanguage === "jp" && 'active-lang'}`} data-toggle="tooltip" data-placement="top"
                   title="Japanese Language Translation Services In Progress!" lang={"jp"}
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