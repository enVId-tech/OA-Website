/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import '../components/images/OxfordLogo.png';
import '../components/scss/index.scss';

const HomePage = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    window.onload = () => {
        scrollToTop();
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <HelmetProvider>
            <Helmet>
                <title>Oxford Academy - Home</title>
            </Helmet>
            <div id="HomePage">
                <div id="Title">
                    <img id="MainImage" src="OxfordLogo.png" />
                    <div id="MainText">
                        <h1 id="OxfAca">Oxford Academy</h1>
                        {/*<h5 id="OxfAcaSub">Conceiving the next wave of innovation.</h5>*/}
                    </div>
                </div>
                <div id="About">
                    <img id="AboutImage" src="OxfordAcademyFullLogo.webp" />
                    <h1 id="AboutLabel">Oxford Academy is a community of innovators dedicated to nurturing the holistic growth of life-long learners who will lead and serve an evolving local and global society.</h1>
                </div>
                <div id="Ratings">
                    <div id="USNewsRanking">
                        <h1 id="HSRankings">#1 in California High Schools</h1>
                        <h1 id="NatRankings">#9 in National Rankings</h1>
                    </div>
                    <h1 id="USNewsLabel">- US News Rankings</h1>
                </div>
                {showScrollButton && (
                    <button onClick={scrollToTop} id="Scroll">Scroll to top</button>
                )}
            </div>
        </HelmetProvider>
    )
}

export default HomePage;