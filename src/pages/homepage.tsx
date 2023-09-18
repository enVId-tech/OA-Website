/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../components/ts/navbar";
import '../components/images/OxfordLogo.png';
import '../components/scss/home.scss';

const HomePage = () => {
    const [backgroundPositionY, setBackgroundPositionY] = useState(-34);
    const [titlePositionY, setTitlePositionY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newBackgroundPositionY = -34 - scrollY / 64;
            setBackgroundPositionY(newBackgroundPositionY);

            const newTitlePositionY = -scrollY / 32;
            setTitlePositionY(newTitlePositionY);
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
            <Navbar props={100}/>
            <div id="HomePage">
                {/* Title Tab */}
                <div id="Title" style={{ backgroundPositionY: `${backgroundPositionY}vh` }}>
                    <img id="MainImage" src="OxfordLogo.png" style={{ transform: `translateY(${titlePositionY}vh)` }} />
                    <div id="MainText">
                        <h1 id="OxfAca" style={{ transform: `translateY(${titlePositionY}vh)` }}>Oxford Academy</h1>
                        {/*<h5 id="OxfAcaSub">Conceiving the next wave of innovation.</h5>*/}
                    </div>
                </div>

                {/* About Tab */}
                <div id="About">
                    <img id="AboutImage" src="OxfordAcademyFullLogo.webp" />
                    <h1 id="AboutLabel">Oxford Academy is a community of innovators dedicated to nurturing the holistic growth of life-long learners who will lead and serve an evolving local and global society.</h1>
                </div>

                {/* Ratings Tab */}
                <div id="Ratings">
                    <div id="USNewsRanking">
                        <h1 id="HSRankings">#1 in California High Schools</h1>
                        <h1 id="NatRankings">#9 in National Rankings</h1>
                    </div>
                    <h1 id="USNewsLabel">- US News Rankings</h1>
                </div>
            </div>
        </HelmetProvider>
    )
}

export default HomePage;