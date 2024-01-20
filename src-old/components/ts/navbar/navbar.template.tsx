import React from "react";
import getNavBarElements from './navbarelements.template.ts';
import '../../scss/components/navbar.global.scss';

interface NavbarProps {
  heightChange?: number;
}

interface NavbarElementsData {
  name: string;
  link: string;
  hasWorkingLink: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ heightChange = -Infinity }: NavbarProps): React.JSX.Element => {
  const [backgroundTransparent, setBackgroundTransparent] = React.useState(true);
  const [activeTable, setActiveTable] = React.useState<string | null>(null);

  const navBar: NavbarElementsData[] = getNavBarElements("TopDiv")
    .map((element) => ({ name: element.name, link: element.link, hasWorkingLink: element.hasWorkingLink }));
  const sections: NavbarElementsData[] = ["Home", "School", "Student", "Parent", "Faculty", "Contact"]
    .map((section) => ({ name: section, link: navBar.find((el) => el.name === section)?.link || "", hasWorkingLink: true }));

  const handleMouseEnter = (tableId: string): void => setActiveTable(tableId);
  const handleMouseLeave = (): void => setActiveTable(null);

  React.useEffect(() => {
    const handleScroll = (): void => {
      const scrollY: number = window.scrollY;
      setBackgroundTransparent(scrollY <= heightChange);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [heightChange]);

  React.useEffect(() => {
    const handleLoad = (): void => setBackgroundTransparent(window.scrollY <= heightChange);
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, [heightChange]);

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

  return (
    <nav id="NavbarMain" className={`${backgroundTransparent ? "transparent" : "opaque"}`}>
      <div id="Topbar">
        <div id="MainButtons">
          <img id="MainImage" src="images/OxfordLogo.png" alt="Oxford Logo" onClick={handleLogoClick} style={{ cursor: "pointer" }} />
          {
            navBar.map((section, index) => (
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
  );
}

export default Navbar;