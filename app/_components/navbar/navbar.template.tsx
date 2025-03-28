import React from "react";
import getNavBarElements from './navbarelements.template.ts';
import styles from '@/styles/components/navbar.module.scss';
import globalType from "../device/device.template.ts";
import OxfLogo from "@/public/images/OxfordLogo.png";
import Image from "next/image";

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

  const sections: NavbarElementsData[] = ["Home", "Our School", "Students", "Parents", "Faculty", "Contact Us"]
      .map((section) => ({ name: section, link: navBar.find((el) => el.name === section)?.link || "", hasWorkingLink: true }));

  const handleMouseEnter = (tableId: string): void => setActiveTable(tableId);
  const handleMouseLeave = (): void => setActiveTable(null);

  // Effects
  React.useEffect((): () => void => {
    const handleScroll = (): void => {
      const scrollY: number = window.scrollY;
      setBackgroundTransparent(scrollY <= heightChange * (deviceType === "mobile" ? 5 / 8 : 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [heightChange, deviceType]);

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

  const handleMobileButtonClick = (activeTableString: string): void => {
    if (activeTable === activeTableString) {
      setActiveTable(null);
    } else {
      setActiveTable(activeTableString);
    }
  }

  const renderButtonsTable = (buttons: NavbarElementsData[], tableId: string): React.ReactElement => (
      tableId === "Home" ? <div key={"Home"} /> :
          <div
              className={`${styles.table} ${backgroundTransparent ? styles.transparent : styles.opaque} ${activeTable === tableId ? styles.shown : styles.hidden}`}
              onMouseEnter={() => handleMouseEnter(tableId)}
              onMouseLeave={handleMouseLeave}
              key={tableId}
          >
            {buttons.map((element: NavbarElementsData, index: number) => (
                <div
                    className={`${styles.navtable} ${styles.navsubbutton} ${index === 0 ? styles.first : ''} ${index === buttons.length - 1 ? styles.last : ''} ${element.hasWorkingLink ? styles.green : styles.red}`}
                    key={`${element.name}${index}`}
                    onClick={() => window.location.href = element.link}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') window.location.href = element.link
                    }}
                >
                  {element.name}
                </div>
            ))}
          </div>
  );

  const mobileNavbar = (buttons: NavbarElementsData[], tableId: string): React.ReactElement => (
      <div
          className={`${styles.table} ${backgroundTransparent ? styles.transparent : styles.opaque} ${activeTable === tableId ? styles.shown : styles.hidden}`}
          onMouseEnter={() => handleMouseEnter(tableId)}
          onMouseLeave={handleMouseLeave}
      >
        {buttons.map((element: NavbarElementsData, index: number) => (
            <div
                className={`${styles.navtable} ${styles.navsubbutton} ${index === 0 ? styles.first : ''} ${index === buttons.length - 1 ? styles.last : ''} ${element.hasWorkingLink ? styles.green : styles.red}`}
                key={element.name}
                onClick={() => window.location.href = element.link}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') window.location.href = element.link
                }}
            >
              {element.name}
            </div>
        ))}
      </div>
  );

  // Render
  return (
      deviceType === "desktop" ? (
          <nav className={`${styles.navbarMain} ${backgroundTransparent ? styles.transparent : styles.opaque}`}>
            <div className={styles.topbar}>
              <div className={styles.mainButtons}>
                <Image className={styles.mainImage} src={OxfLogo.src} alt="Oxford Logo" onClick={handleLogoClick} style={{ cursor: "pointer" }} />
                {
                  navBar.map((section: NavbarElementsData, index: number) => (
                      <div
                          key={section.name}
                          className={`${styles.navbutton} ${activeTable === section.name ? styles.active : styles.hidden}`}
                          onClick={() => window.location.href = section.hasWorkingLink ? section.link : "/"}
                          onMouseEnter={() => handleMouseEnter(sections[index].name)}
                          onMouseLeave={handleMouseLeave}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') window.location.href = section.hasWorkingLink ? section.link : "/"
                          }}
                      >
                        {navBar[index].name}
                      </div>
                  ))
                }
              </div>

              <div className={styles.tables}>
                {sections.map((section) => renderButtonsTable(getNavBarElements(section.name), section.name))}
              </div>
            </div>
          </nav>
      ) : (
          <nav className={`${styles.navbarMain} ${backgroundTransparent ? styles.transparent : styles.opaque}`}>
            <div className={styles.topbar}>
              <div className={styles.mainButtons}>
                <Image className={styles.mainImage} src={OxfLogo.src} alt="Oxford Logo" onClick={handleLogoClick} style={{ cursor: "pointer" }} />
                <div
                    className={styles.hamburgerButton}
                    onClick={() => setTablesVisible(!tablesVisible)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') setTablesVisible(!tablesVisible)
                    }}
                />
              </div>

              <div className={`${styles.tableSelector} ${tablesVisible ? styles.visible : styles.hidden}`}>
                {
                  navBar.map((section: NavbarElementsData, index: number) => (
                      <div
                          key={section.name}
                          className={`${styles.navbutton} ${activeTable === section.name ? styles.active : styles.hidden}`}
                          onClick={() => {
                            if (section.name == "Home") {
                              window.location.href = "/";
                            } else {
                              handleMobileButtonClick(section.name);
                            }
                          }}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              if (section.name == "Home") {
                                window.location.href = "/";
                              } else {
                                handleMobileButtonClick(section.name);
                              }
                            }
                          }}
                      >
                        <div className={styles.buttonMainDiv}>
                          <h1 className={styles.navbarTableTitle}>{navBar[index].name}</h1>
                          {
                            section.name !== "Home" ? (
                                <div className={`${styles.navbarArrow} ${activeTable === section.name ? styles.active : styles.hidden}`}>▼</div>
                            ) : <></>
                          }
                        </div>
                        {
                          !section.name.includes("Home") ? (
                              mobileNavbar(getNavBarElements(sections[index].name), sections[index].name)
                          ) : <></>
                        }
                      </div>
                  ))
                }
              </div>            </div>
          </nav>
      )
  );
}

export default Navbar;