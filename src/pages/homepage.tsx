import React, { useState, useEffect, useRef } from "react";
import { HelmetProvider } from "react-helmet-async";
import '../components/images/OxfordLogo.png';
import '../components/scss/home.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "../components/ts/navbar/navbar";
import ClassHelmet from "../components/ts/title";

const HomePage = () => {
    const [backgroundPositionY, setBackgroundPositionY] = useState(-34);
    const [titlePositionY, setTitlePositionY] = useState(0);
    // Create refs for main div elements
    const aboutRef = useRef(null);
    const ratingsRef = useRef(null);
    const admissionsRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newBackgroundPositionY = -34 - scrollY / 128;
            setBackgroundPositionY(newBackgroundPositionY);

            const newTitlePositionY = scrollY / 32;
            setTitlePositionY(newTitlePositionY);
        };

        const applyVisibleClass: (ref: React.RefObject<HTMLDivElement>) => void = (ref) => {

            if (ref.current !== null) {
                const rect = ref.current.getBoundingClientRect();
                const topPosition = rect.top + window.scrollY;
                const bottomPosition = rect.bottom + window.scrollY;

                const buffer = 0.25 * window.innerHeight;

                if (topPosition < window.scrollY + window.innerHeight - buffer && bottomPosition > window.scrollY + buffer) {
                    ref.current.classList.add("visible-class");
                }
            }
        };

        const handleVisibleClass = () => {
            applyVisibleClass(aboutRef);
            applyVisibleClass(ratingsRef);
            applyVisibleClass(admissionsRef);
            applyVisibleClass(footerRef);
        };

        window.addEventListener("scroll", handleVisibleClass);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "auto" as ScrollBehavior
        });
    };

    window.onload = () => {
        scrollToTop();
    }

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
                <div id="About" ref={aboutRef}>
                    {/* Add class "visible-class" when this div is in the viewport */}
                    <img id="AboutImage" src="OxfordAcademyFullLogo.webp" />
                    <h1 id="AboutLabel">Oxford Academy is a community of innovators dedicated to nurturing the holistic growth of life-long learners who will lead and serve an evolving local and global society.</h1>
                </div>

                {/* Ratings Tab */}
                <div id="Ratings" ref={ratingsRef}>
                    {/* Add class "visible-class" when this div is in the viewport */}
                    <div id="USNewsRanking">
                        <div id="Ranks">
                            <h1 id="HSRankings">#1 in California High Schools</h1>
                            <h1 id="NatRankings">#9 in National Rankings</h1>
                        </div>
                        <h1 id="USNewsLabel">- US News Rankings</h1>
                    </div>
                </div>

                {/* Admissions */}
                <div id="Admissions" ref={admissionsRef}>
                    {/* Add class "visible-class" when this div is in the viewport */}
                    <div id="AdmissionsMain">
                        <h1 id="AdmissionsLabel">Admissions</h1>
                        <div id="AdmissionsText">
                            <h1 id="AdmissionsMainLabel">Oxford Academy is an admissions-only campus</h1>
                            <h1 id="AdmissionsOpening">Admissions are open in November for 7th, 8th, and 9th graders</h1>
                            <button id="Apply">More information available here!</button>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div id="Footer" ref={footerRef}>
                    <div id="FooterMain">
                        <div id="FooterLeft">
                            <h1 id="FooterLabel">Oxford Academy</h1>
                            <h1 id="FooterAddress">5172 Orange Ave, Cypress, CA 90630</h1>
                            <h1 id="FooterPhone">(714) 220-4101</h1>
                        </div>
                        <div id="Alpha">
                            <h1 id="alphaWarning">
                                This is an ALPHA build. Bugs beware!
                            </h1>
                            <br />
                            <h1 id="alphaLabel">
                                This website is not affiliated with Oxford Academy.
                                <br />
                                <br />
                                Erick Tran, 2023
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    )
}

export default HomePage;
