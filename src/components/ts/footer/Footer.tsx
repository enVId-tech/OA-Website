import React from 'react';
import ClassHelmet from '../title';

interface PageTemplateProps {
    title: string;
}

const Footer = (pagetitle: PageTemplateProps) => {
    return (
        <div id='PageTemplate'>
            <ClassHelmet title={pagetitle.title} />
            <footer>
                <h1>boi</h1>
            </footer>
        </div>
    );
}

export default Footer;