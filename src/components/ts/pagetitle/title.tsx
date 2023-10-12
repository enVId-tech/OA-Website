import React from 'react';
import { Helmet as Head, HelmetProvider as HTML } from "react-helmet-async";

interface ClassHelmetProps {
    title?: string;
}

const ClassHelmet: React.FC<ClassHelmetProps> = (props: ClassHelmetProps): React.JSX.Element => {
    if (props.title === undefined) {
        return (
            <HTML>
                <Head>
                    <title>Oxford Academy</title>
                </Head>
            </HTML>
        );
    } else {
        return (
            <HTML>
                <Head>
                    <title>Oxford Academy - {props.title}</title>
                </Head>
            </HTML>
        );
    }
}

export default ClassHelmet;