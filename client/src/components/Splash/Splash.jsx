import React from 'react';
import {Sidebar} from "./features/Navigation/Sidebar/Sidebar";
import {Slider} from "./features/Navigation/Slider/Slider";
import {Banner} from "./features/Banner/Banner";

import "./Splash.scss";
export const Splash = () => (
    <div id="pageContainer">
        <input type="checkbox" className="checkbox" id="click" hidden/>
        <Sidebar/>
        <Slider/>
        <header className="header">
            <Banner/>
        </header>
    </div>
);