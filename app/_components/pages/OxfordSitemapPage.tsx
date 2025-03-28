'use client'
import React from 'react';
import oxfordsitemap from "@/styles/pages/subpages/oxfordsitemap.module.scss";
import Image from "next/image";

export default function OxfordSitemapPage() {
  return (
    <div className={oxfordsitemap.oxfSiteMap}>
      <div className={oxfordsitemap.oxfSiteMapMain}>
        <h1 className={`${oxfordsitemap.titleText} pageSectionTitle`}>Oxford Academy Site Map</h1>
        <Image
          className={oxfordsitemap.oxfSite}
          src="images/Map.png"
          alt="Oxford Academy Site Map"
          onClick={() => {
            window.open("https://oxford.auhsd.us/files/user/1/file/OXFORD%20SITE%20MAP%202023%20Back%20cover%20inside.pdf", "_blank");
          }}
        />
      </div>
    </div>
  );
}