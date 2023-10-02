/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef } from "react";
import '../components/images/OxfordLogo.png';
import '../components/scss/pages/home.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "../components/ts/navbar/navbar";
import ClassHelmet from "../components/ts/title";
import PageTitle from "../components/ts/pagetitle/pagetitle";
import trackPageView from "../components/ts/analytics/analytics";
import Footer from "../components/ts/footer/Footer";

const HomePage = () => {
    // Create refs for main div elements
    const aboutRef = useRef(null);
    const ratingsRef = useRef(null);
    const admissionsRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        trackPageView();
    }, []);

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
        <div id="HomePageMAIN">
            <ClassHelmet title="Home" />
            <Navbar heightChange={790} />
            <div id="HomePage">
                {/* Title Tab */}
                <PageTitle height={100} mainText="Oxford Academy" subText="Conceiving the next wave of innovation." oxfLogo={true} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={1200} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />

                {/* About Tab */}
                <div id="About" ref={aboutRef}>
                    {/* Add class "visible-class" when this div is in the viewport */}
                    <img id="AboutImage" src="images/OxfordAcademyFullLogo.webp" />
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
                            <h1 id="AdmissionsMainLabel">Oxford Academy is an admissions-only campus, evaluated by an elite admissions commitee.</h1>
                            <h1 id="AdmissionsOpening">Admissions are open every year for incoming scholars!</h1>
                            <button id="Apply" onClick={() => window.location.href = '/admissions'}>More information available here!</button>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <Footer title="Home" />
            </div>
        </div>
    )
}

export default HomePage;
