"use client";

import React, { ReactNode, useEffect } from "react";
import ClassHelmet from "@/app/_components/pagetitle/title.global.module";
import Navbar from "@/app/_components/navbar/navbar.template";
import PageTitle from "@/app/_components/pagetitle/pagetitle.global.module";
import Footer from "@/app/_components/footer/footer.global.module";

interface SubpageLayoutProps {
  title: string;
  mainText: string;
  subText?: string;
  oxfLogo?: boolean;
  backgroundLink?: string;
  backgroundVhPreDown?: number;
  backgroundVhDownRate?: number;
  titleVhDownRate?: number;
  percentageDown?: number;
  titleVhPreDown?: number;
  height?: number;
  heightChange?: number;
  children: ReactNode;
}

export default function SubpageLayout({
  title,
  mainText,
  subText = "",
  oxfLogo = false,
  backgroundLink = "OxfFrontImage.jpg",
  backgroundVhPreDown = 700,
  backgroundVhDownRate = 32,
  titleVhDownRate = 30,
  percentageDown = 32,
  titleVhPreDown = 0,
  height = 80,
  heightChange = 790,
  children,
}: SubpageLayoutProps) {
  return (
    <div id={title.replace(/\s+/g, "")}>
      <ClassHelmet title={title} />
      <Navbar heightChange={heightChange} />
      <PageTitle
        height={height}
        mainText={mainText}
        subText={subText}
        oxfLogo={oxfLogo}
        backgroundLink={backgroundLink}
        backgroundVhPreDown={backgroundVhPreDown}
        backgroundVhDownRate={backgroundVhDownRate}
        titleVhDownRate={titleVhDownRate}
        percentageDown={percentageDown}
        titleVhPreDown={titleVhPreDown}
      />
      {children}
      <Footer />
    </div>
  );
}