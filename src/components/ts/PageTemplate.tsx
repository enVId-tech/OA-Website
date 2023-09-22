import React from 'react';
import ClassHelmet from './title';

interface PageTemplateProps {
    title: string;
}

const PageTemplate = (pagetitle: PageTemplateProps) => {
    return (
        <div id='PageTemplate'>
            <ClassHelmet title={pagetitle.title} />
        </div>
    );
}

export default PageTemplate;