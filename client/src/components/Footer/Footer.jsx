import React, {useRef, useState} from 'react';

import "./Footer.scss";
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
    }

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
                                So, Why "The Trove Of Gems"?
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
                                        - Gems and Minerals are beautiful and unique -
                                    </p>
                                    <p className="theGemTrove__ExplanationParagraph">
                                        Diamonds, Emeralds, Rubies, and Sapphires; Alexandrite, Agate,
                                        Amethyst, Aquamarine, Garnet, Jade, Lapis-Lazuli, Moonstone, Opal, Black & White
                                        Pearl,
                                        Rose Quartz,
                                        Spinel, Sunstone, Tanzanite, Tourmaline, Turquoise, Zircon, and so many more
                                        gems and minerals exist.
                                    </p>
                                    <p className="theGemTrove__ExplanationParagraph">
                                        My fascination with precious and semi-precious gems and minerals stems primarily
                                        from my love of
                                        earth sciences
                                        as a child. I was the kid who could identify crystals, minerals, and rocks
                                        (generally the more colorful ones) and avidly watched the science channel specials
                                        on
                                        marine biology
                                        and volcanology.
                                    </p>
                                    <p className="theGemTrove__ExplanationParagraph">
                                        By my teens, my interests had expanded to the geological and biological branches of
                                        Chemistry and that
                                        has never left me.
                                    </p>
                                    <p className="theGemTrove__ExplanationParagraph">
                                        I also never made it into any august labs as a chemist.
                                    </p>
                                    <p className="theGemTrove__ExplanationParagraph">
                                        Rather...
                                    </p>
                                    <p className="theGemTrove__ExplanationParagraph">
                                        My lapidaries consist of previous co-workers, past and current friends, and family.
                                    </p>
                                    <p className="theGemTrove__ExplanationParagraph">
                                        They've shaped and polished me to reflect my best qualities. The work of a
                                        gem-cutter is
                                        slow.
                                        It takes time and careful work to grind down some of the hardest material into the
                                        prisms that
                                        best reflect quality and worth...And without their efforts, I wouldn't be where I am
                                        today with the
                                        skills in my possession that allow me to push myself in the direction I want to
                                        proceed.
                                    </p>
                                    <p className="theGemTrove__ExplanationParagraph">
                                        My journey isn't over yet, and I look forward continuing my growth.
                                    </p>
                                    <p className="theGemTrove__ExplanationParagraph">
                                        I would encourage you to pursue your passions and continue to grow in the ways that
                                        make
                                        you happy.
                                    </p>
                                    <div id="thankYou__footer" ref={explanationRef}>
                                        <p className="thanks">Thank You For The Visit</p>
                                        <p className="bestWishes">& All the Best,</p>
                                        <p className="theCreator">Dustin K. Greco</p>
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