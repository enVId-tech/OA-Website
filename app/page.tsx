"use client";

import React from "react";
import applyPageAnims from "@/app/_components/animations/animations.global.module.ts";
import Navbar from "@/app/_components/navbar/navbar.template.tsx";
import PageTitle from "@/app/_components/pagetitle/pagetitle.global.module.tsx";
import styles from "@/styles/pages/home.module.scss";
import Image from "next/image";

export default function Home(): React.ReactNode {
  const aboutRef = React.useRef<HTMLDivElement>(null);
  const ratingsRef = React.useRef<HTMLDivElement>(null);
  const admissionsRef = React.useRef<HTMLDivElement>(null);
  const footerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const refs = [aboutRef, ratingsRef, admissionsRef, footerRef].filter(
        (ref): ref is React.RefObject<HTMLDivElement> => ref.current !== null
    );
    const anims: string[] = ["c_left", "c_up", "c_right", "c_up"];

    const handleScroll: () => void = (): void => {
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
      <div className={styles.homePage}>
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

        <div className={styles.homePageMain}>
          {/* About Tab */}
          <div className={styles.about} ref={aboutRef}>
            <div className={`${styles.aboutText} section-property`}>
              <Image className={`${styles.aboutImage} section-title`} src="images/OxfordAcademyFullLogo.webp" alt="Oxford Academy Logo" />
              <h1 className={`${styles.aboutLabel} section-text`}>Oxford Academy is a community of innovators dedicated to nurturing the holistic growth of life-long learners who will lead and serve an evolving local and global society.</h1>
            </div>
          </div>

          {/* Ratings Tab */}
          <div className={styles.ratings} ref={ratingsRef}>
            <div className={styles.usNewsRanking}>
              <div className={styles.ranks}>
                <h1 className={styles.hsRankings}>#1 in California High Schools</h1>
                <h1 className={styles.natRankings}>#9 in National Rankings</h1>
              </div>
              <h1 className={styles.usNewsLabel}>- US News Rankings (2023)</h1>
            </div>
          </div>

          {/* Admissions */}
          <div className={styles.admissions} ref={admissionsRef}>
            <div className={styles.admissionsMain}>
              <h1 className={styles.admissionsLabel}>Admissions</h1>
              <div className={styles.admissionsText}>
                <h1 className={styles.admissionsMainLabel}>Oxford Academy is an admissions-only campus, evaluated by an elite admissions commitee.</h1>
                <h1 className={styles.admissionsOpening}>Admissions are open every year for incoming scholars!</h1>
                <button className={styles.apply} onClick={() => window.location.href = '/admissions'}>More information available here!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}