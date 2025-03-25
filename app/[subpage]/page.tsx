"use client";

import React from "react";
import SubpageLayout from "@/app/_components/layouts/SubpageLayout";
import { notFound } from "next/navigation";

// Define page configurations
const pageConfigs = {
    administration: {
        title: "Administration",
        mainText: "Administration",
        subText: "Meet the Oxford Administration!",
        content: () => (
            <div id="AdministrationContent">
                <div id="MainDiv">
                    <h1 id="AdminTitle" className="pageSectionTitle">High Level School Administration</h1>
                </div>
            </div>
        ),
    },
    athletics: {
        title: "Athletics",
        mainText: "Athletics",
        subText: "Compete with the best!",
        content: () => (
            <div id="AthleticsMain">
                <h1 id="AthleticsTitle" className="pageSectionTitle">Athletics</h1>
                <p id="AthleticsText">
                    Oxford Academy is a member of the 605 League...
                </p>
            </div>
        ),
    },
};

export default function SubpageDynamic({ params }: { params: { subpage: string } }) {
    const { subpage } = params;
    const config = pageConfigs[subpage as keyof typeof pageConfigs];

    if (!config) {
        return notFound();
    }

    const { title, mainText, subText, content: Content } = config;

    return (
        <SubpageLayout
            title={title}
            mainText={mainText}
            subText={subText}
        >
            <Content />
        </SubpageLayout>
    );
}

// Generate static paths
export function generateStaticParams() {
    return Object.keys(pageConfigs).map((subpage) => ({
        subpage,
    }));
}