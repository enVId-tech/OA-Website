"use client";

import React from "react";
import trackPageView from "@/app/_components/analytics/analytics.global.module.ts";
import applyPageAnims from "@/app/_components/animations/animations.global.module.ts";
import ClassHelmet from "@/app/_components/pagetitle/title.global.module.tsx";
import Navbar from "@/app/_components/navbar/navbar.template.tsx";
import PageTitle from "@/app/_components/pagetitle/pagetitle.global.module.tsx";
import Footer from "@/app/_components/footer/footer.global.module.tsx";

export default function Home(): React.ReactNode {
  // Create refs for main div elements
  const aboutRef = React.useRef<HTMLDivElement>(null);
  const ratingsRef = React.useRef<HTMLDivElement>(null);
  const admissionsRef = React.useRef<HTMLDivElement>(null);
  const footerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    trackPageView();

    const refs = [aboutRef, ratingsRef, admissionsRef, footerRef];
    const anims = ["c_left", "c_up", "c_right", "c_up"];

    const handleScroll = () => {
      applyPageAnims(refs, anims, 0.25);
    };

    window.addEventListener("scroll", handleScroll);
    window.scrollTo({
      top: 0,
      behavior: "auto" as ScrollBehavior
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <div id="HomePage">
        <ClassHelmet title="Home" />
        <Navbar heightChange={790} />
        <PageTitle
            height={100}
            mainText="Oxford Academy"
            subText="Conceiving the next wave of innovation."
            oxfLogo={true}
            backgroundLink="OxfFrontImage.jpg"
            backgroundVhPreDown={100}
            backgroundVhDownRate={32}
            titleVhDownRate={30}
            percentageDown={32}
            titleVhPreDown={0}
        />

        <div id="HomePageMain">
          {/* About Tab */}
          <div id="About" ref={aboutRef} className="info-section">
            <div id="AboutText" className="section-property">
              <img id="AboutImage" className="section-title" src="images/OxfordAcademyFullLogo.webp" alt="Oxford Academy Logo" />
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
        </div>

        <Footer />
      </div>
  );
}