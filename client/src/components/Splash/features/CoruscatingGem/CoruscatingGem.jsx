import React from 'react';

import "./CoruscatingGem.scss";
export const CoruscatingGem = () => (
    <div className="gemContainer">
        <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="gem"
             className="svg-inline--fa fa-gem fa-w-16 fa-fw gem" role="img" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 576 512">
            <g className="fa-group">
                <path className="fa-secondary" fill="currentColor"
                      d="M100.7 192H0l218.7 255a3 3 0 0 0 5-3.3zm374.6 0l-123 251.7a3 3 0 0 0 5 3.2L576 192zm-327.1 0l137.1 318.2a3 3 0 0 0 5.5 0l137-318.2z"></path>
                <path className="fa-primary" fill="currentColor"
                      d="M90.5 0L0 160h101.1L170.3 0zm395 0h-79.8l69.2 160H576zm-267 0l-69.2 160h277.4L357.5 0z"></path>
            </g>
        </svg>
        <div className="coruscate"/>
    </div>
);