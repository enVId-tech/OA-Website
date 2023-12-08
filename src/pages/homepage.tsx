/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import '../components/images/OxfordLogo.png';
import '../components/scss/pages/home.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "../components/ts/navbar/navbar";
import ClassHelmet from "../components/ts/pagetitle/title";
import PageTitle from "../components/ts/pagetitle/pagetitle";
import trackPageView from "../components/ts/analytics/analytics";
import Footer from "../components/ts/footer/Footer";
import applyPageAnims from "../components/ts/animations/animations";

const HomePage: React.FC = (): React.JSX.Element => {
    // Create refs for main div elements
    const aboutRef = React.useRef(null);
    const ratingsRef = React.useRef(null);
    const admissionsRef = React.useRef(null);
    const footerRef = React.useRef(null);

    React.useEffect((): void => {
        trackPageView();
    }, []);

    const refs: React.RefObject<HTMLDivElement>[] = [
        aboutRef,
        ratingsRef,
        admissionsRef,
        footerRef
    ];

    const anims: string[] = [
        "c_left",
        "c_up",
        "c_right",
        "c_up"
    ];

    const handleAnims = (): void => {
        applyPageAnims(refs, anims, 0.25);
    };

    window.addEventListener("scroll", handleAnims);

    const scrollToTop = (): void => {
        window.scrollTo({
            top: 0,
            behavior: "auto" as ScrollBehavior
        });
    };

    window.onload = (): void => {
        scrollToTop();
    }

    return (
        <div id="HomePage">
            <ClassHelmet title="Home" />
            <Navbar heightChange={790} />
            <div id="HomePageMain">
                {/* Title Tab */}
                <PageTitle height={100} mainText="Oxford Academy" subText="Conceiving the next wave of innovation." oxfLogo={true} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={1200} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />

                {/* About Tab */}
                <div id="About" ref={aboutRef} className="info-section">
                    <div id="AboutText" className="section-property">
                        <img id="AboutImage" className="section-title" src="images/OxfordAcademyFullLogo.webp" />
                        <h1 id="AboutLabel" className="section-text">Oxford Academy is a community of innovators dedicated to nurturing the holistic growth of life-long learners who will lead and serve an evolving local and global society.</h1>
                    </div>
                </div>

                {/* Ratings Tab */}
                <div id="Ratings" ref={ratingsRef} className="info-section">
                    <div id="USNewsRanking" className="section-property">
                        <div id="Ranks">
                            <h1 id="HSRankings">#1 in California High Schools</h1>
                            <h1 id="NatRankings">#9 in National Rankings</h1>
                        </div>
                        <h1 id="USNewsLabel">- US News Rankings (2023)</h1>
                    </div>
                </div>

                {/* Admissions */}
                <div id="Admissions" ref={admissionsRef} className="info-section">
                    <div id="AdmissionsMain" className="section-property">
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
