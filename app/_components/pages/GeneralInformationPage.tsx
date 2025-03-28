"use client";
import React from "react";
import Image from "next/image";
import generalinformation from "@/styles/pages/subpages/generalinformation.module.scss";

export default function GeneralInformationPage() {
    return (
        <div className={generalinformation.generalInformation}>
            <div className={generalinformation.generalInformationMain}>
                <h1 className={`${generalinformation.genInfoHMain} pageSectionTitle`}>General Information</h1>

                <span className={generalinformation.topInfo}>
                    <Image className={generalinformation.generalInformationImage} src="images/OxfordAcademyFullLogo.webp" alt="GeneralInformation" />
                    <h1 className={generalinformation.mainText}>is a seventh through twelfth grade college preparatory public school that opened in September of 1998. Recognized as a California Distinguished School, OA draws students from the entire attendance area of the Anaheim Union High School District and its surrounding areas.</h1>
                </span>

                <hr />

                <div className={generalinformation.hs}>
                    <h1 className={generalinformation.bestHSLabel}>Oxford Academy leads with Excellence, Honor, Creativity, Caring & Fun</h1>
                    <Image className={generalinformation.bestHSImage} src="images/HS2023.jpeg" alt="BestHS" />
                </div>

                <div className={generalinformation.extraInfo}>
                    <button className={generalinformation.buttonMain} onClick={() => window.open("https://oxford.auhsd.us/files/public_files/OA-Profile_web_2020-2021.pdf", "_blank")}>
                        <span className={generalinformation.buttonMainText}>OA Profile</span>
                    </button>
                    <button className={generalinformation.buttonMain} onClick={() => window.open("https://oxford.auhsd.us/files/user/3598/file/OA_InfoCard.pdf", "_blank")}>
                        <span className={generalinformation.buttonMainText}>OA Info Card</span>
                    </button>
                    <button className={generalinformation.buttonMain} onClick={() => window.open("https://oxford.auhsd.us/files/user/3598/file/CareerPathways_OxfordAcademy.pdf", "_blank")}>
                        <span className={generalinformation.buttonMainText}>OA Pathways</span>
                    </button>
                </div>

                <span className={generalinformation.awards}>
                    <div className={generalinformation.awardTypes}>
                        <Image className={generalinformation.awardImage} src="images/USN-Gold.png" alt="BestHS" />
                        <p className={generalinformation.mainText}>#1 in CA, #9 in the US</p>
                        <p className={generalinformation.subText}>(2023)</p>
                    </div>

                    <div className={generalinformation.awardTypes}>
                        <Image className={generalinformation.awardImage} src="images/DistingSchool-logo.png" alt="BestHS" />
                        <p className={generalinformation.mainText}>CA Distinguished School</p>
                        <p className={generalinformation.subText}>(2011, 2019, 2021)</p>
                    </div>

                    <div className={generalinformation.awardTypes}>
                        <Image className={generalinformation.awardImage} src="images/NatlBlueRibbon_USDE.png" alt="BestHS" />
                        <p className={generalinformation.mainText}>National Blue Ribbon</p>
                        <p className={generalinformation.subText}>(2013, 2019)</p>
                    </div>

                    <div className={generalinformation.awardTypes}>
                        <Image className={generalinformation.awardImage} src="images/CalDemSchool.png" alt="BestHS" />
                        <p className={generalinformation.mainText}>CA Democracy School</p>
                        <p className={generalinformation.subText}>(2020)</p>
                    </div>
                </span>
            </div>
        </div>
    );
}