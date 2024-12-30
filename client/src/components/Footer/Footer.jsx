import React, {useRef, useState} from 'react';

import "./Footer.scss";
import {useTranslation} from "react-i18next";
export const Footer = () => {
    const [showExplanation, setShowExplanation] = useState(false);
    const
        buttonRef = useRef(null),
        explanationRef = useRef(null);

    const toggleExplanationView = () => {
        setShowExplanation(!showExplanation);
        if(showExplanation) {
            buttonRef.current.scrollIntoView({ behavior: "smooth" });
        } else {
            explanationRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    };

    const { t  } = useTranslation();

    return (
        <footer className="siteFooter">
            <div id="accordion" className="theGemTrove__Explanation">
                <div className="card">
                    <div className="card-header gemTroveButton" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link gemTroveButton__label" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false"
                                    aria-controls="collapseOne" onClick={toggleExplanationView}
                                    ref={buttonRef}
                            >
                                {t('footer.buttonLabel')}
                            </button>
                        </h5>
                    </div>
                    <div id="collapseOne" aria-labelledby="headingOne" data-parent="#accordion"
                         ref={explanationRef}
                    >
                        {
                            showExplanation && (
                                <div className="card-body gemTroveExplanation">
                                    <p className="theGemTrove__Explanation">
                                        - {t('footer.intro')} -
                                    </p>
                                    <p className="theGemTrove__ExplanationParagraph">
                                        {t('footer.p.1')}
                                    </p>
                                    <p className="theGemTrove__ExplanationParagraph">
                                        {t('footer.p.2')}
                                    </p>
                                    <p className="theGemTrove__ExplanationParagraph">
                                        {t('footer.p.3')}
                                    </p>
                                    <p className="theGemTrove__ExplanationParagraph">
                                        {t('footer.p.4')}
                                    </p>
                                    <p className="theGemTrove__ExplanationParagraph">
                                        {t('footer.p.5')}
                                    </p>
                                    <p className="theGemTrove__ExplanationParagraph">
                                        {t('footer.p.6')}
                                    </p>
                                    <p className="theGemTrove__ExplanationParagraph">
                                        {t('footer.p.7')}
                                    </p>
                                    <p className="theGemTrove__ExplanationParagraph">
                                        {t('footer.p.8')}
                                    </p>
                                    <p className="theGemTrove__ExplanationParagraph">
                                        {t('footer.p.9')}
                                    </p>
                                    <div id="thankYou__footer" ref={explanationRef}>
                                        <p className="thanks">{t('footer.goodbye.thanks')}</p>
                                        <p className="bestWishes">{t('footer.goodbye.bestWishes')}</p>
                                        <p className="theCreator">{t('footer.goodbye.theCreator')}</p>
                                    </div>
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </footer>
    );
};