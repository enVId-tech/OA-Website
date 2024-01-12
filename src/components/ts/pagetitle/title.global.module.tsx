import React from 'react';
import { Helmet as Head, HelmetProvider as HTML } from "react-helmet-async";

interface ClassHelmetProps {
    title?: string;
}

const templatedTitle: string = "Oxford Academy";

const ClassHelmet: React.FC<ClassHelmetProps> = (props: ClassHelmetProps): React.JSX.Element => {
    if (props.title === undefined) {
        return (
            <HTML>
                <Head>
                    <title>{templatedTitle}</title>
                </Head>
            </HTML>
        );
    } else {
        return (
            <HTML>
                <Head>
                    <title>{props.title} - {templatedTitle}</title>
                </Head>
            </HTML>
        );
    }
}

export default ClassHelmet;