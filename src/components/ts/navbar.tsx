import React, { useState, useEffect } from "react";
import '../scss/navbar.scss';

interface NavbarProps {
    props?: number;
}

const Navbar = ({props = -Infinity}: NavbarProps) => {
    const [backgroundTransparent, setBackgroundTransparent] = useState(true);

    useEffect(() => {
            const scrollY = window.scrollY;

            if (scrollY > props) {
                setBackgroundTransparent(false);
            } else {
                setBackgroundTransparent(true);
            }
    }, [window.scrollY]);

    return (
        <nav id="NavbarMain" className={backgroundTransparent ? "transparent" : "opaque"}>
            <span id="Topbar">
                <div id="MainImage"></div>
                <button id="School" className="navbutton">Our School</button>
                <button id="Student" className="navbutton">Student</button>
                <button id="Parent" className="navbutton">Parents</button>
                <button id="Staff" className="navbutton">Staff</button>
                <button id="Contact" className="navbutton">Contact Us</button>
            </span>
        </nav>
    )
}

export default Navbar;