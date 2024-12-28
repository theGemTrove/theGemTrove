import React from 'react';

import "./Body.scss";
import {About} from "./Sections/About/About";
import {Contact} from "./Sections/Contact/Contact";
import {Archival} from "./Sections/Archival/Archival";
import {Careers} from "./Sections/Careers/Careers";
import {Education} from "./Sections/Education/Education";
import {Footer} from "../Footer/Footer";

export const Body = () => (
    <main role="main">
        <About/>
        <Contact/>
        <Archival/>
        <Careers/>
        <Education />
        <Footer />
    </main>
)