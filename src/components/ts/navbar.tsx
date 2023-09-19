/* eslint-disable jsx-a11y/alt-text */
// Disabling a specific eslint rule for this file

import React, { useState, useEffect, useRef } from "react";
import '../scss/navbar.scss';
import getNavBarElements from './navbarelements';


interface NavbarProps {
  props?: number;
}
// Defining the props interface for the Navbar component

const Navbar: React.FC<NavbarProps> = ({ props = -Infinity }: NavbarProps) => {
  // Defining the Navbar functional component with props as an argument

  const [backgroundTransparent, setBackgroundTransparent] = useState<boolean>(true);
  // Creating a state variable backgroundTransparent with initial value true

  // All the elements found here: https://oxford.auhsd.us/ada/sitemap.cfm?s=9
  const SchoolButtonsElements: string[] = getNavBarElements("School");

  const StudentButtonsElements: string[] = getNavBarElements("Student");

  const ParentButtonsElements: string[] = getNavBarElements("Parent");

  const FacultyButtonsTable: string[] = getNavBarElements("Faculty");

  const ContactButtonsElements: string[] = getNavBarElements("Contact");

  useEffect(() => {
    // Using the useEffect hook to handle scrolling behavior

    const scrollY: number = window.scrollY;

    if (scrollY > props) {
      // Checking if the current scroll position is greater than the value of props
      setBackgroundTransparent(false);
      // Setting backgroundTransparent to false if the condition is met
    } else {
      setBackgroundTransparent(true);
      // Setting backgroundTransparent to true if the condition is not met
    }
  }, [window.scrollY]);
  // Running this effect whenever the window.scrollY value changes

  const schoolTable = useRef<HTMLDivElement>(null);
  const schoolButton = useRef<HTMLButtonElement>(null);

  const [schoolTableDisplay, setSchoolTableDisplay] = useState<string>("none");

  const studentTable = useRef<HTMLDivElement>(null);
  const studentButton = useRef<HTMLButtonElement>(null);

  const [studentTableDisplay, setStudentTableDisplay] = useState<string>("none");

  const parentTable = useRef<HTMLDivElement>(null);
  const parentButton = useRef<HTMLButtonElement>(null);

  const [parentTableDisplay, setParentTableDisplay] = useState<string>("none");

  const facultyTable = useRef<HTMLDivElement>(null);
  const facultyButton = useRef<HTMLButtonElement>(null);

  const [facultyTableDisplay, setFacultyTableDisplay] = useState<string>("none");

  const contactTable = useRef<HTMLDivElement>(null);
  const contactButton = useRef<HTMLButtonElement>(null);

  const [contactTableDisplay, setContactTableDisplay] = useState<string>("none");

  return (
    <nav id="NavbarMain" className={backgroundTransparent ? "transparent" : "opaque"}>
      {/* Navbar container */}
      <div id="Topbar">
        {/* Topbar container */}
        <div id="MainButtons">
          {/* Main buttons container */}
          {/* Logo */}
          <img id="MainImage" src="OxfordLogo.png"></img>
          {/* Logo image */}
          {/* Buttons Navigator */}
          <button id="School" className="navbutton" ref={schoolButton}>Our School</button>
          {/* School button */}
          <button id="Student" className="navbutton">Student</button>
          {/* Student button */}
          <button id="Parent" className="navbutton">Parents</button>
          {/* Parents button */}
          <button id="Faculty" className="navbutton">Faculty</button>
          {/* Faculty button */}
          <button id="Contact" className="navbutton">Contact Us</button>
          {/* Contact button */}
        </div>

        {/* Tables */}
        <div id="Tables">
          {/* Tables container */}
          <div id="SchoolTable" className={`table ${backgroundTransparent ? "transparent" : "opaque"}`} ref={schoolTable}>
            {/* School table */}
            <label id="BETALabel">BETA: Labels will be optimized per section later on.</label>
            {/* Beta label */}
            <div id="SchoolButtonsTable" className={`table ${backgroundTransparent ? "transparent" : "opaque"}`}>
              {/* School buttons table */}
              {SchoolButtonsElements.map((element: string) => {
                return <button className="navtable navsubbutton">{element}</button>
                // Mapping school-related buttons to buttons in the table
              })}
            </div>
            <div id="StudentButtonsTable" className={`element ${backgroundTransparent ? "transparent" : "opaque"}`}>
              {/* Student buttons table */}
              {StudentButtonsElements.map((element: string) => {
                return <button className="navtable navsubbutton">{element}</button>
                // Mapping student-related buttons to buttons in the table
              })}
            </div>
            <div id="ParentButtonsTable" className={`element ${backgroundTransparent ? "transparent" : "opaque"}`}>
              {/* Parent buttons table */}
              {ParentButtonsElements.map((element: string) => {
                return <button className="navtable navsubbutton">{element}</button>
                // Mapping parent-related buttons to buttons in the table
              })}
            </div>
            <div id="FacultyButtonsTable" className={`element ${backgroundTransparent ? "transparent" : "opaque"}`}>
              {/* Faculty buttons table */}
              {FacultyButtonsTable.map((element: string) => {
                return <button className="navtable navsubbutton">{element}</button>
                // Mapping faculty-related buttons to buttons in the table
              })}
            </div>
            <div id="ContactButtonsTable" className={`element ${backgroundTransparent ? "transparent" : "opaque"}`}>
              {/* Contact buttons table */}
              {ContactButtonsElements.map((element: string) => {
                return <button className="navtable navsubbutton">{element}</button>
                // Mapping contact-related buttons to buttons in the table
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
// Exporting the Navbar component as the default export
