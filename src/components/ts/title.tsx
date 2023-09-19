import React from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";

interface ClassHelmetProps {
    title: string;
}

const ClassHelmet: React.FC<ClassHelmetProps> = (props: ClassHelmetProps) => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Oxford Academy - {props.title}</title>
            </Helmet>
        </HelmetProvider>
    );
}

export default ClassHelmet;
