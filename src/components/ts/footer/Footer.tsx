import React, { useRef } from 'react';
import ClassHelmet from '../title';
import '../../scss/components/footer.scss';

interface PageTemplateProps {
    title: string;
}

const Footer = (pagetitle: PageTemplateProps) => {
    const footerRef = useRef(null);

    return (
        <div id='Footers'>
            <ClassHelmet title={pagetitle.title} />
            <div id="FooterPagesDefault" ref={footerRef}>
                    <div id="FooterMain">
                        <div id="FooterLeft">
                            <h1 id="FooterLabel">Oxford Academy</h1>
                            <h1 id="FooterAddress">5172 Orange Ave, Cypress, CA 90630</h1>
                            <h1 id="FooterPhone">(714) 220-4101</h1>
                        </div>
                        <div id="Alpha">
                            <h1 id="alphaWarning">
                                This is an ALPHA build. Bugs beware!
                            </h1>
                            <br />
                            <h1 id="alphaLabel">
                                This website is not affiliated with Oxford Academy.
                                <br />
                                <br />
                                Erick Tran, 2023
                            </h1>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Footer;