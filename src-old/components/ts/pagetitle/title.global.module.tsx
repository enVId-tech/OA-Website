import React from 'react';
import { Helmet as Head, HelmetProvider as HTML } from "react-helmet-async";

interface ClassHelmetProps {
    title?: string;
}

const templatedTitle: string = "Oxford Academy";

const ClassHelmet: React.FC<ClassHelmetProps> = ({ title }): React.JSX.Element => {
    return (
        <HTML>
            <Head>
                <title>{title ? `${title} - ${templatedTitle}` : templatedTitle}</title>
            </Head>
        </HTML>
    );
}

export default ClassHelmet;