import React from 'react';
import {useTranslation} from 'react-i18next';
import packageInfo from "../../../../../../package.json";

import './Sidebar.scss';

const info = Object.freeze({
    link_GitHub: "https://github.com/theGemTrove",
    link_Email: "mailto:dkgreco@thetroveofgems.tech",
    currentYear: new Date(),
    packageVersion: packageInfo.version
});

console.log("info? ", info);

export const Sidebar = () => {
    return (
        <div className="navbar">
            <div className="sidebar">
                <label htmlFor="click" id="hLabel">
                    <div className="menu-icon">
                        <div className="line line-1"/>
                        <div className="line line-2"/>
                        <div className="line line-3"/>
                    </div>
                </label>
                <ul className="social-icon-list">
                    <li>
                        <a href={info.link_GitHub} className="social-link">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href={info.link_Email} className="social-link">
                            <i className="fa-light fa-envelope"></i>
                        </a>
                    </li>
                </ul>
                <div className="year">
                    <p>&#174; 2020-{info.currentYear.getFullYear()}</p>
                    <p>v::{info.packageVersion}</p>
                </div>
            </div>
        </div>
    );
}