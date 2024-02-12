import React from 'react';

import '../../scss/components/footer.global.scss';

const Footer: React.FC = (): React.JSX.Element => {
    const footerRef: React.RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>(null);

    const applyVisibleClass: (ref: React.RefObject<HTMLDivElement>) => void = (ref) => {
        if (ref.current === null) {
            return;
        }

        const rect: DOMRect = ref.current.getBoundingClientRect();
        const topPosition: number = rect.top + window.scrollY;
        const bottomPosition: number = rect.bottom + window.scrollY;

        const buffer: number = 0.25 * window.innerHeight;

        if (topPosition < window.scrollY + window.innerHeight - buffer && bottomPosition > window.scrollY + buffer) {
            ref.current.classList.add("visible-class");
        }
    };

    window.addEventListener("scroll", (): void => applyVisibleClass(footerRef));

    return (
        <div id='Footers' ref={footerRef}>
            <div id="FooterPagesDefault">
                <div id="FooterMain">
                    <div id="FooterLeft">
                        <h1 id="FooterLabel">Oxford Academy</h1>
                        <h1 id="FooterAddress">5172 Orange Ave, Cypress, CA 90630</h1>
                        <h1 id="FooterPhone">(714) 220-4101</h1>
                    </div>
                    <div id="FooterRight">
                        <h1 id="alphaWarning">
                            This is an ALPHA build. Bugs beware!
                        </h1>
                        <br />
                        <h1 id="Affiliation">Update 65 Main - February 11, 2024</h1>
                        <br />
                        <br />
                        <a href="https://github.com/enVId-tech" id="Name">Erick Tran, 2024</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;