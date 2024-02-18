import React from "react";
import getNavBarElements from './navbarelements.template.ts';
import '../../scss/components/navbar.global.scss';
import globalType from "../device/device.template.ts";

interface NavbarProps {
  heightChange?: number;
}

interface NavbarElementsData {
  name: string;
  link: string;
  hasWorkingLink: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ heightChange = -Infinity }: NavbarProps): React.JSX.Element => {
  // States
  const [backgroundTransparent, setBackgroundTransparent]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = React.useState<boolean>(true);
  const [activeTable, setActiveTable]: [string | null, React.Dispatch<React.SetStateAction<string | null>>] = React.useState<string | null>(null);
  const [deviceType, setDeviceType]: [string, React.Dispatch<React.SetStateAction<string>>] = React.useState<string>("");
  const [tablesVisible, setTablesVisible]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = React.useState<boolean>(false);

  // Variables
  const navBar: NavbarElementsData[] = getNavBarElements("TopDiv")
    .map((element: NavbarElementsData) => ({ name: element.name, link: element.link, hasWorkingLink: element.hasWorkingLink }));

  const sections: NavbarElementsData[] = ["Home", "School", "Student", "Parent", "Faculty", "Contact"]
    .map((section) => ({ name: section, link: navBar.find((el) => el.name === section)?.link || "", hasWorkingLink: true }));

  const handleMouseEnter = (tableId: string): void => setActiveTable(tableId);
  const handleMouseLeave = (): void => setActiveTable(null);

  // Effects
  React.useEffect((): () => void => {
    const handleScroll = (): void => {
      const scrollY: number = window.scrollY;
      setBackgroundTransparent(scrollY <= heightChange);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [heightChange]);

  React.useEffect((): () => void => {
    const handleResize = (): void => {
      const type: string = globalType("device");
      setDeviceType(type);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect((): () => void => {
    const handleLoad = (): void => setBackgroundTransparent(window.scrollY <= heightChange);
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, [heightChange]);

  // Methods
  const handleLogoClick = (): string => window.location.href = "/";

  const renderButtonsTable = (buttons: NavbarElementsData[], tableId: string): React.ReactElement => (
    tableId === "Home" ? <div /> :
      <div
        id={`${tableId}Table`}
        className={`table ${backgroundTransparent ? "transparent" : "opaque"} ${activeTable === tableId ? "shown" : "hidden"}`}
        onMouseEnter={() => handleMouseEnter(tableId)}
        onMouseLeave={handleMouseLeave}
      >
        {buttons.map((element: NavbarElementsData, index: number) => (
          <button
            className={`navtable navsubbutton ${index === 0 ? "first" : index} ${index === buttons.length - 1 ? "last" : index} ${element.hasWorkingLink ? "green" : "red"}`}
            key={element.name}
            onClick={() => window.location.href = element.link}
          >
            {element.name}
          </button>
        ))}
      </div>
  );

  // const mobileNavbar = (buttons: NavbarElementsData[], tableId: string): React.ReactElement => (
  //   <div
  //     id={`${tableId}Table`}
  //     className={`table ${backgroundTransparent ? "transparent" : "opaque"} ${activeTable === tableId ? "shown" : "hidden"}`}
  //     onMouseEnter={() => handleMouseEnter(tableId)}
  //     onMouseLeave={handleMouseLeave}
  //   >
  //     {buttons.map((element: NavbarElementsData, index: number) => (
  //       <button
  //         className={`navtable navsubbutton ${index === 0 ? "first" : index} ${index === buttons.length - 1 ? "last" : index} ${element.hasWorkingLink ? "green" : "red"}`}
  //         key={element.name}
  //         onClick={() => window.location.href = element.link}
  //       >
  //         {element.name}
  //       </button>
  //     ))}
  //   </div>
  // );

  // Render
  return (
    deviceType === "desktop" ? (
      <nav id="NavbarMain" className={`${backgroundTransparent ? "transparent" : "opaque"}`}>
        <div id="Topbar">
          <div id="MainButtons">
            <img id="MainImage" src="images/OxfordLogo.png" alt="Oxford Logo" onClick={handleLogoClick} style={{ cursor: "pointer" }} />
            {
              navBar.map((section: NavbarElementsData, index: number) => (
                <button
                  key={section.name}
                  id={section.name}
                  className={`navbutton ${activeTable === section.name ? "active" : "hidden"}`}
                  onClick={() => window.location.href = section.hasWorkingLink ? section.link : "/"}
                  onMouseEnter={() => handleMouseEnter(sections[index].name)}
                  onMouseLeave={handleMouseLeave}
                >
                  {navBar[index].name}
                </button>
              ))
            }
          </div>

          <div id="Tables">
            {sections.map((section) => renderButtonsTable(getNavBarElements(section.name), section.name))}
          </div>
        </div>
      </nav>
    ) : (
      <nav id="NavbarMain" className={`${backgroundTransparent ? "transparent" : "opaque"}`}>
        <div id="Topbar">
          <div id="MainButtons">
            <img id="MainImage" src="images/OxfordLogo.png" alt="Oxford Logo" onClick={handleLogoClick} style={{ cursor: "pointer" }} />
            <button id="HamburgerButton" onClick={() => setTablesVisible(!tablesVisible)} />
          </div>

          <div id="TableSelector" className={tablesVisible ? "visible" : "hidden"}>
            {
              navBar.map((section: NavbarElementsData, index: number) => (
                <button
                  key={section.name}
                  id={section.name}
                  className={`navbutton ${activeTable === section.name ? "active" : "hidden"}`}
                  onClick={() => window.location.href = section.hasWorkingLink ? section.link : "/"}
                  onMouseEnter={() => handleMouseEnter(sections[index].name)}
                  onMouseLeave={handleMouseLeave}
                >
                  {navBar[index].name}
                </button>
              ))
            }
          </div>

          <div id="Tables">
          </div>
        </div>
      </nav>
    )
  );
}

export default Navbar;
