import React from 'react';

import "./Education.scss";
import {AlmaMaters} from "./AlmaMaters/AlmaMaters";

export const Education = ({ cld }) => {
    return (
        <section id="education">
            <div className="educationPanel knowledgeStyles">
                <div className="hardEducation">
                    <h2 className="almaMaterHeader">
                        Alma Maters
                    </h2>
                </div>
            </div>
            <AlmaMaters cld={cld} />
        </section>
    );
}