import React from 'react';
import Typewrite from "typewriter-effect";

import "./Typewriter.scss";

const info = Object.seal({
    typewriterStrings: [
        'Technologist', 'MERN-Stack Developer', 'Javascript Virtuoso', 'Cyber-Sec Enthusiast',
        'Husband', 'Pet Parent',
        'Home Cook', 'Bread Baker',
        'Gamer', 'Avid Reader', 'Polyglot'
    ]
});

export const Typewriter = () => (
    <Typewrite
        onInit={(typewriter) => {
            typewriter
                .pauseFor(2500)
                .deleteAll()
                .start();
        }}
        options={{
            strings: info.typewriterStrings,
            autoStart: true,
            loop: true,
            wrapperClassName: 'typewriterStyle'
        }}
    />
);