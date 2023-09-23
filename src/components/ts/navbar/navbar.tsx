/* eslint-disable jsx-a11y/alt-text */
// Disabling a specific eslint rule for this file

import React, { useState, useEffect, useRef } from "react";
import '../../scss/navbar.scss';
import getNavBarElements from './navbarelements';

interface NavbarProps {
  props?: number;
}

interface NavbarElementsData {
  name: string;
  link: string;
}

const Navbar: React.FC<NavbarProps> = ({ props = -Infinity }: NavbarProps) => {
  const [backgroundTransparent, setBackgroundTransparent] = useState<boolean>(true);
  const [activeTable, setActiveTable] = useState<string | null>(null);

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
    const scrollY: number = window.scrollY;

    if (scrollY > props) {
      setBackgroundTransparent(false);
    } else {
      setBackgroundTransparent(true);
    }
  }, [window.scrollY]);

  const handleLogoClick = () => {
    window.location.href = "/";
  }

  return (
    <nav id="NavbarMain" className={backgroundTransparent ? "transparent" : "opaque"}>
      <div id="Topbar">
        <div id="MainButtons">
          <img id="MainImage" src="OxfordLogo.png" alt="Oxford Logo" onClick={handleLogoClick} style={{ cursor: "pointer" }} />
          <button
            id="Home"
            className={`navbutton ${activeTable === null ? "active" : "hidden"}`}
            onClick={() => window.location.href = "/"}
          >
            Home
          </button>
          <button
            id="School"
            className={`navbutton ${activeTable === "School" ? "active" : "hidden"}`}
            onClick={() => window.location.href = "/school-table"}
            onMouseEnter={() => handleButtonMouseEnter("School")}
            onMouseLeave={handleButtonMouseLeave}
          >
            Our School
          </button>
          <button
            id="Student"
            className={`navbutton ${activeTable === "Student" ? "active" : "hidden"}`}
            onClick={() => window.location.href = "/student-table"}
            onMouseEnter={() => handleButtonMouseEnter("Student")}
            onMouseLeave={handleButtonMouseLeave}
          >
            Student
          </button>
          <button
            id="Parent"
            className={`navbutton ${activeTable === "Parent" ? "active" : "hidden"}`}
            onClick={() => window.location.href = "/parent-table"}
            onMouseEnter={() => handleButtonMouseEnter("Parent")}
            onMouseLeave={handleButtonMouseLeave}
          >
            Parents
          </button>
          <button
            id="Faculty"
            className={`navbutton ${activeTable === "Faculty" ? "active" : "hidden"}`}
            onClick={() => window.location.href = "/faculty-table"}
            onMouseEnter={() => handleButtonMouseEnter("Faculty")}
            onMouseLeave={handleButtonMouseLeave}
          >
            Faculty
          </button>
          <button
            id="Contact"
            className={`navbutton ${activeTable === "Contact" ? "active" : "hidden"}`}
            onClick={() => window.location.href = "/contact-table"}
            onMouseEnter={() => handleButtonMouseEnter("Contact")}
            onMouseLeave={handleButtonMouseLeave}
          >
            Contact Us
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
              {SchoolButtonsElements.map((element: NavbarElementsData) => (
                <button
                  className="navtable navsubbutton"
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
              {StudentButtonsElements.map((element: NavbarElementsData) => (
                <button
                  className="navtable navsubbutton"
                  key={element.name}
                  onClick={() => window.location.href = element.link}>
                  {element.name}
                </button>
              ))}
            </div>
            <div
              id="ParentButtonsTable"
              className={`table ${backgroundTransparent ? "transparent" : "opaque"} ${activeTable === "Parent" ? "shown" : "hidden"}`}>
              {/* Parent buttons table */}
              {ParentButtonsElements.map((element: NavbarElementsData) => (
                <button
                  className="navtable navsubbutton"
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
              {FacultyButtonsTable.map((element: NavbarElementsData) => (
                <button
                  className="navtable navsubbutton"
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
              {ContactButtonsElements.map((element: NavbarElementsData) => (
                <button
                  className="navtable navsubbutton"
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
