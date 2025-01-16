import React from 'react';
import packageInfo from "../../../../../../package.json";

import './Sidebar.scss';

const info = Object.seal({
    link_GitHub: "https://github.com/troveofgems",
    link_Email: "mailto:dkgreco@thetroveofgems.tech",
    site_map: "https://www.thetroveofgems.tech/sitemap.xml",
    robots: "https://www.thetroveofgems.tech/robots.txt",
    currentYear: new Date(),
    packageVersion: packageInfo.version
});

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
                        <a href={info.link_GitHub} target={"_blank"}
                           referrerPolicy={"no-referrer"} rel={"noreferrer"}
                           className="social-link">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href={info.link_Email} className="social-link">
                            <i className="fa-light fa-envelope"></i>
                        </a>
                    </li>
                    <li>
                        <a href={info.site_map} target={"_blank"}
                           referrerPolicy={"no-referrer"} rel={"noreferrer"}
                           className="social-link">
                            <i className="fa-light fa-sitemap"></i>
                        </a>
                    </li>
                    <li>
                        <a href={info.robots} target={"_blank"}
                           referrerPolicy={"no-referrer"} rel={"noreferrer"}
                           className="social-link">
                            <i className="fa-duotone fa-robot"></i>
                        </a>
                    </li>
                </ul>
                <div className="year">
                    <p>2020-{info.currentYear.getFullYear()}</p>
                    <p>v::{info.packageVersion}</p>
                </div>
            </div>
        </div>
    );
}