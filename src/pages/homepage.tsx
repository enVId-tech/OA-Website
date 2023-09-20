/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import '../components/images/OxfordLogo.png';
import '../components/scss/home.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "../components/ts/navbar/navbar";

import ClassHelmet from "../components/ts/title";


const HomePage = () => {
    const [backgroundPositionY, setBackgroundPositionY] = useState(-34);
    const [titlePositionY, setTitlePositionY] = useState(0);

    const carouselImages = [
        "https://www.oxfordprepschools.org/wp-content/uploads/2020/08/oxford-academy-1.jpg",
        "https://www.oxfordprepschools.org/wp-content/uploads/2020/08/oxford-academy-2.jpg",
    ];

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
            <ClassHelmet title="Home" />
            <Navbar props={790} />
            <div id="HomePage">
                {/* Title Tab */}
                <div id="Title" style={{ backgroundPositionY: `${backgroundPositionY}vh` }}>
                    <img id="MainImage" src="OxfordLogo.png" style={{ transform: `translateY(${titlePositionY}vh)` }} />
                    <div id="MainText">
                        <h1 id="OxfAca" style={{ transform: `translateY(${titlePositionY}vh)` }}>Oxford Academy</h1>
                        <h5 id="OxfAcaSub" style={{ transform: `translateY(${titlePositionY}vh)` }}>Conceiving the next wave of innovation.</h5>
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

                {/* Admissions */}
                <div id="Admissions">
                    <div id="AdmissionsMain">
                        <h1 id="AdmissionsLabel">Admissions</h1>
                        <div id="AdmissionsText">
                            <h1 id="AdmissionsMainLabel">Oxford Academy is an admissions-only campus</h1>
                            <h1 id="AdmissionsOpening">Admissions are open in November for 7th, 8th, and 9th graders</h1>
                            <button id="Apply">More information available here!</button>
                        </div>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    )
}

export default HomePage;