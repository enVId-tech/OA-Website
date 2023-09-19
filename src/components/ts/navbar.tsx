/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useRef } from "react";
import '../scss/navbar.scss';

interface NavbarProps {
  props?: number;
}

const Navbar = ({ props = -Infinity }: NavbarProps) => {
  const [backgroundTransparent, setBackgroundTransparent] = useState(true);

  useEffect(() => {
    const scrollY = window.scrollY;

    if (scrollY > props) {
      setBackgroundTransparent(false);
    } else {
      setBackgroundTransparent(true);
    }
  }, [window.scrollY]);

  // Make school table appear when hovering over "Our School" button
  const schoolTable = useRef<HTMLDivElement>(null);

  const handleSchoolTable = (tableID: string) => {
    if (schoolTable.current) {
      schoolTable.current.style.display = "grid";
    }
  };

  const handleSchoolTableLeave = () => {
    if (schoolTable.current) {
      schoolTable.current.style.display = "none";
    }
  };

  return (
    <nav id="NavbarMain" className={backgroundTransparent ? "transparent" : "opaque"}>
      <div id="Topbar">
        <div id="MainButtons">
          {/* Logo */}
          <img id="MainImage" src="OxfordLogo.png"></img>

          {/* Buttons Navigator */}
          <button id="School" className="navbutton" onMouseEnter={() => handleSchoolTable("main")} onMouseLeave={handleSchoolTableLeave}>Our School</button>
          <button id="Student" className="navbutton">Student</button>
          <button id="Parent" className="navbutton">Parents</button>
          <button id="Staff" className="navbutton">Staff</button>
          <button id="Contact" className="navbutton">Contact Us</button>
        </div>

        {/* Tables */}
        <div id="Tables">
          <div id="SchoolTable" className={`table ${backgroundTransparent ? "transparent" : "opaque"}`} ref={schoolTable}>
            <label id="BETALabel">BETA: Labels will be optimized per section later on.</label>
            <div id="SchoolButtonsTable">
              <button className="navtable navsubbutton">Administration</button>
              <button className="navtable navsubbutton">Admissions</button>
              <button className="navtable navsubbutton">Alumni</button>
              <button className="navtable navsubbutton">Athletics</button>
              <button className="navtable navsubbutton">Bell Schedule</button>
              <button className="navtable navsubbutton">Calendar</button>
              <button className="navtable navsubbutton">Clubs & Organizations</button>
              <button className="navtable navsubbutton">Counseling</button>
              <button className="navtable navsubbutton">Cypress College Dual Enrollment</button>
              <button className="navtable navsubbutton">Dress Regulations</button>
              <button className="navtable navsubbutton">General Information</button>
              <button className="navtable navsubbutton">Health Office</button>
              <button className="navtable navsubbutton">News Section</button>
              <button className="navtable navsubbutton">OA Profile</button>
              <button className="navtable navsubbutton">OA Site Map</button>
              <button className="navtable navsubbutton">Policies</button>
              <button className="navtable navsubbutton">Principal's Message</button>
              <button className="navtable navsubbutton">Programs 4 Patriots</button>
              <button className="navtable navsubbutton">School Accountability Report Card</button>
              <button className="navtable navsubbutton">Staff Directory/Email</button>
              <button className="navtable navsubbutton">Transcripts</button>
              <button className="navtable navsubbutton">Transportation</button>
              <button className="navtable navsubbutton">Vision & SLCs</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
