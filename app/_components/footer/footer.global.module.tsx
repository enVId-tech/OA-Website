"use client";
import React from 'react';
import styles from '@/styles/components/footer.module.scss';

const Footer: React.FC = (): React.JSX.Element => {
    const footerRef: React.RefObject<HTMLDivElement | null> = React.useRef<HTMLDivElement>(null);

    const applyVisibleClass: (ref: React.RefObject<HTMLDivElement | null>) => void = (ref) => {
        if (ref.current === null) {
            return;
        }

        const rect: DOMRect = ref.current.getBoundingClientRect();
        const topPosition: number = rect.top + window.scrollY;
        const bottomPosition: number = rect.bottom + window.scrollY;

        const buffer: number = 0.25 * window.innerHeight;

        if (topPosition < window.scrollY + window.innerHeight - buffer && bottomPosition > window.scrollY + buffer) {
            ref.current.classList.add(styles["visible-class"]);
        }
    };

    React.useEffect(() => {
        applyVisibleClass(footerRef);

        window.addEventListener("scroll", (): void => applyVisibleClass(footerRef));

        return () => window.removeEventListener("scroll", (): void => applyVisibleClass(footerRef));
    }, []);

    return (
        <div className={styles.footers} ref={footerRef}>
            <div className={styles.footerPagesDefault}>
                <div className={styles.footerMain}>
                    <div className={styles.footerLeft}>
                        <h1 className={styles.footerLabel}>Oxford Academy</h1>
                        <h1 className={styles.footerAddress}>5172 Orange Ave, Cypress, CA 90630</h1>
                        <h1 className={styles.footerPhone}>(714) 220-4101</h1>
                    </div>
                    <div className={styles.footerRight}>
                        <h1 className={styles.alphaWarning}>
                            This is an ALPHA build. Bugs beware!
                        </h1>
                        <br />
                        <br />
                        <a href="https://github.com/enVId-tech" className={styles.name}>Erick Tran, 2025</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;