/* eslint-disable jsx-a11y/alt-text */
// Disabling a specific eslint rule for this file

import React, { useState, useEffect, useRef } from "react";
import '../../scss/navbar.scss';
import getNavBarElements from './navbarelements';

interface NavbarProps {
  props?: number;
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
  const SchoolButtonsElements: string[] = getNavBarElements("School");
  const StudentButtonsElements: string[] = getNavBarElements("Student");
  const ParentButtonsElements: string[] = getNavBarElements("Parent");
  const FacultyButtonsTable: string[] = getNavBarElements("Faculty");
  const ContactButtonsElements: string[] = getNavBarElements("Contact");

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

  const schoolTable = useRef<HTMLDivElement>(null);
  const schoolButton = useRef<HTMLButtonElement>(null);

  return (
    <nav id="NavbarMain" className={backgroundTransparent ? "transparent" : "opaque"}>
      <div id="Topbar">
        <div id="MainButtons">
          <img id="MainImage" src="OxfordLogo.png" alt="Oxford Logo" onClick={handleLogoClick} style={{ cursor: "pointer" }} />
          <button
            id="School"
            className={`navbutton ${activeTable === "School" ? "active" : "hidden"}`}
            ref={schoolButton}
            onMouseEnter={() => handleButtonMouseEnter("School")}
            onMouseLeave={handleButtonMouseLeave}
          >
            Our School
          </button>
          <button
            id="Student"
            className={`navbutton ${activeTable === "Student" ? "active" : "hidden"}`}
            onMouseEnter={() => handleButtonMouseEnter("Student")}
            onMouseLeave={handleButtonMouseLeave}
          >
            Student
          </button>
          <button
            id="Parent"
            className={`navbutton ${activeTable === "Parent" ? "active" : "hidden"}`}
            onMouseEnter={() => handleButtonMouseEnter("Parent")}
            onMouseLeave={handleButtonMouseLeave}
          >
            Parents
          </button>
          <button
            id="Faculty"
            className={`navbutton ${activeTable === "Faculty" ? "active" : "hidden"}`}
            onMouseEnter={() => handleButtonMouseEnter("Faculty")}
            onMouseLeave={handleButtonMouseLeave}
          >
            Faculty
          </button>
          <button
            id="Contact"
            className={`navbutton ${activeTable === "Contact" ? "active" : "hidden"}`}
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
            ref={schoolTable}
            onMouseEnter={() => handleTableMouseEnter(activeTable || "")}
            onMouseLeave={handleTableMouseLeave}
          >
            <label id="BETALabel"
              className={`label ${activeTable ? "transparent" : "opaque"} ${backgroundTransparent ? "top" : "ntop"}`}
            >BETA: Labels will be optimized per section later on.</label>
            <div id="SchoolButtonsTable" className={`table ${backgroundTransparent ? "transparent" : "opaque"} ${activeTable === "School" ? "shown" : "hidden"}`}>
              {/* School buttons table */}
              {SchoolButtonsElements.map((element: string) => (
                <button className="navtable navsubbutton" key={element}>
                  {element}

                </button>
              ))}
            </div>
            <div id="StudentButtonsTable" className={`table ${backgroundTransparent ? "transparent" : "opaque"} ${activeTable === "Student" ? "shown" : "hidden"}`}>
              {/* Student buttons table */}
              {StudentButtonsElements.map((element: string) => (
                <button className="navtable navsubbutton" key={element}>
                  {element}
                </button>
              ))}
            </div>
            <div id="ParentButtonsTable" className={`table ${backgroundTransparent ? "transparent" : "opaque"} ${activeTable === "Parent" ? "shown" : "hidden"}`}>
              {/* Parent buttons table */}
              {ParentButtonsElements.map((element: string) => (
                <button className="navtable navsubbutton" key={element}>
                  {element}
                </button>
              ))}
            </div>
            <div id="FacultyButtonsTable" className={`table ${backgroundTransparent ? "transparent" : "opaque"} ${activeTable === "Faculty" ? "shown" : "hidden"}`}>
              {/* Faculty buttons table */}
              {FacultyButtonsTable.map((element: string) => (
                <button className="navtable navsubbutton" key={element}>
                  {element}
                </button>
              ))}
            </div>
            <div id="ContactButtonsTable" className={`table ${backgroundTransparent ? "transparent" : "opaque"} ${activeTable === "Contact" ? "shown" : "hidden"}`}>
              {/* Contact buttons table */}
              {ContactButtonsElements.map((element: string) => (
                <button className="navtable navsubbutton" key={element}>
                  {element}
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
