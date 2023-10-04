/* eslint-disable jsx-a11y/alt-text */
// Disabling a specific eslint rule for this file

import React, { useState, useEffect } from "react";
import '../../scss/components/navbar.scss';
import getNavBarElements from './navbarelements';

interface NavbarProps {
  heightChange?: number;
}

interface NavbarElementsData {
  [x: string]: any;
  name: string;
  link: string;
  hasWorkingLink: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ heightChange = -Infinity }: NavbarProps) => {
  const [backgroundTransparent, setBackgroundTransparent] = useState<boolean>(true);
  const [activeTable, setActiveTable] = useState<string | null>(null);

  const navBar = getNavBarElements("TopDiv");

  const handleButtonMouseEnter = (tableId: string) => {
    setActiveTable(tableId);
  };

  const handleButtonMouseLeave = () => {
    setActiveTable(null);
  };

  const handleTableMouseEnter = (tableId: string) => {
    setActiveTable(tableId);
  };

  const handleTableMouseLeave = () => {
    setActiveTable(null);
  };

  // All the elements found here: https://oxford.auhsd.us/ada/sitemap.cfm?s=9
  const SchoolButtonsElements: NavbarElementsData[] = getNavBarElements("School");
  const StudentButtonsElements: NavbarElementsData[] = getNavBarElements("Student");
  const ParentButtonsElements: NavbarElementsData[] = getNavBarElements("Parent");
  const FacultyButtonsTable: NavbarElementsData[] = getNavBarElements("Faculty");
  const ContactButtonsElements: NavbarElementsData[] = getNavBarElements("Contact");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > heightChange) {
        setBackgroundTransparent(false);
      } else {
        setBackgroundTransparent(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [heightChange]); // Only re-run the effect if heightChange changes

  window.onload = () => {
    const scrollY = window.scrollY;
    if (scrollY > heightChange) {
      setBackgroundTransparent(false);
    } else {
      setBackgroundTransparent(true);
    }
  }

  const handleLogoClick = () => {
    window.location.href = "/";
  }

  return (
    <nav id="NavbarMain" className={`${backgroundTransparent ? "transparent" : "opaque"}`}>
      <div id="Topbar">
        <div id="MainButtons">
          <img id="MainImage" src="images/OxfordLogo.png" alt="Oxford Logo" onClick={handleLogoClick} style={{ cursor: "pointer" }} />
          <button
            id="Home"
            className={`navbutton ${activeTable === null ? "active" : "hidden"}`}
            onClick={() => window.location.href = navBar[0].hasWorkingLink ? navBar[0].link : "/"}
          >
            {navBar[0].name}
          </button>
          <button
            id="School"
            className={`navbutton ${activeTable === "School" ? "active" : "hidden"}`}
            onClick={() => window.location.href = navBar[1].hasWorkingLink ? navBar[1].link : "/"}
            onMouseEnter={() => handleButtonMouseEnter("School")}
            onMouseLeave={handleButtonMouseLeave}
          >
            {navBar[1].name}
          </button>
          <button
            id="Student"
            className={`navbutton ${activeTable === "Student" ? "active" : "hidden"}`}
            onClick={() => window.location.href = navBar[2].hasWorkingLink ? navBar[2].link : "/"}
            onMouseEnter={() => handleButtonMouseEnter("Student")}
            onMouseLeave={handleButtonMouseLeave}
          >
            {navBar[2].name}
          </button>
          <button
            id="Parent"
            className={`navbutton ${activeTable === "Parent" ? "active" : "hidden"}`}
            onClick={() => window.location.href = navBar[3].hasWorkingLink ? navBar[3].link : "/"}
            onMouseEnter={() => handleButtonMouseEnter("Parent")}
            onMouseLeave={handleButtonMouseLeave}
          >
            {navBar[3].name}
          </button>
          <button
            id="Faculty"
            className={`navbutton ${activeTable === "Faculty" ? "active" : "hidden"}`}
            onClick={() => window.location.href = navBar[4].hasWorkingLink ? navBar[4].link : "/"}
            onMouseEnter={() => handleButtonMouseEnter("Faculty")}
            onMouseLeave={handleButtonMouseLeave}
          >
            {navBar[4].name}
          </button>
          <button
            id="Contact"
            className={`navbutton ${activeTable === "Contact" ? "active" : "hidden"}`}
            onClick={() => window.location.href = navBar[5].link}
            onMouseEnter={() => handleButtonMouseEnter("Contact")}
            onMouseLeave={handleButtonMouseLeave}
          >
            {navBar[5].name}
          </button>
        </div>

        <div id="Tables">
          <div
            id="SchoolTable"
            className={`table ${backgroundTransparent ? "transparent" : "opaque"}`}
            onMouseEnter={() => handleTableMouseEnter(activeTable || "")}
            onMouseLeave={handleTableMouseLeave}
          >
            <label id="BETALabel"
              className={`label ${activeTable ? "transparent" : "opaque"} ${backgroundTransparent ? "top" : "ntop"}`}
            >BETA: Labels will be optimized per section later on.</label>
            <div
              id="SchoolButtonsTable"
              className={`table ${backgroundTransparent ? "transparent" : "opaque"} ${activeTable === "School" ? "shown" : "hidden"}`}>
              {/* School buttons table */}
              {SchoolButtonsElements.map((element: NavbarElementsData, index: number) => (
                <button
                  className={`navtable navsubbutton ${index === 0 ? "first" : index} ${index === SchoolButtonsElements.length - 1 ? "last" : index} ${element.hasWorkingLink ? "green" : "red"}`}
                  key={element.name}
                  onClick={() => window.location.href = element.link}>
                  {element.name}
                </button>
              ))}
            </div>
            <div
              id="StudentButtonsTable"
              className={`table ${backgroundTransparent ? "transparent" : "opaque"} ${activeTable === "Student" ? "shown" : "hidden"}`}>
              {/* Student buttons table */}
              {StudentButtonsElements.map((element: NavbarElementsData, index: number) => (
                <button
                  className={`navtable navsubbutton ${index === 0 ? "first" : index} ${index === StudentButtonsElements.length - 1 ? "last" : index} ${element.hasWorkingLink ? "green" : "red"}`}
                  key={element.name}
                  onClick={() => window.location.href = element.link}
                >
                  {element.name}
                </button>
              ))}
            </div>
            <div
              id="ParentButtonsTable"
              className={`table ${backgroundTransparent ? "transparent" : "opaque"} ${activeTable === "Parent" ? "shown" : "hidden"}`}>
              {/* Parent buttons table */}
              {ParentButtonsElements.map((element: NavbarElementsData, index: number) => (
                <button
                  className={`navtable navsubbutton ${index === 0 ? "first" : index} ${index === ParentButtonsElements.length - 1 ? "last" : index} ${element.hasWorkingLink ? "green" : "red"}`}
                  key={element.name}
                  onClick={() => window.location.href = element.link}>
                  {element.name}
                </button>
              ))}
            </div>
            <div
              id="FacultyButtonsTable"
              className={`table ${backgroundTransparent ? "transparent" : "opaque"} ${activeTable === "Faculty" ? "shown" : "hidden"}`}>
              {/* Faculty buttons table */}
              {FacultyButtonsTable.map((element: NavbarElementsData, index: number) => (
                <button
                  className={`navtable navsubbutton ${index === 0 ? "first" : index} ${index === FacultyButtonsTable.length - 1 ? "last" : index} ${element.hasWorkingLink ? "green" : "red"}`}
                  key={element.name}
                  onClick={() => window.location.href = element.link}>
                  {element.name}
                </button>
              ))}
            </div>
            <div
              id="ContactButtonsTable"
              className={`table ${backgroundTransparent ? "transparent" : "opaque"} ${activeTable === "Contact" ? "shown" : "hidden"}`}>
              {/* Contact buttons table */}
              {ContactButtonsElements.map((element: NavbarElementsData, index: number) => (
                <button
                  className={`navtable navsubbutton ${index === 0 ? "first" : index} ${index === ContactButtonsElements.length - 1 ? "last" : index} ${element.hasWorkingLink ? "green" : "red"}`}
                  key={element.name}
                  onClick={() => window.location.href = element.link}>
                  {element.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
// Exporting the Navbar component as the default export
