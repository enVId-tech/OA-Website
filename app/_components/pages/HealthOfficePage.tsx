"use client";
import React from "react";
import healthoffice from "@/styles/pages/subpages/healthoffice.module.scss";

export default function HealthOfficePage() {
    return (
        <div className={healthoffice.healthOffice}>
            <div className={healthoffice.healthOfficeMain}>
                <h1 className={`${healthoffice.titleText} pageSectionTitle`}>Health Office</h1>

                <div className={healthoffice.top}>
                    <h1 className={healthoffice.topTitleText}>Healthy Students Learn Better at <strong>Oxford Academy</strong></h1>
                </div>

                <div className={healthoffice.infoDiv}>
                    <h1 className={healthoffice.infoTitle}>About Us</h1>
                    <h1 className={healthoffice.infoContent}>Oxford Academy is staffed with a Health Technician, trained in first aid and CPR, who on campus from 7:30 am – 4:00 pm daily. The primary role of the Health Technician is to provide basic first aid for unexpected injuries, to assist with medications when it is determined they must be given at school; and to maintain health records on all students enrolled.  The School Nurse oversees health services at several school sites in the AUHSD and is able to be reached by cell phone during school hours.</h1>
                </div>

                <div className={healthoffice.infoDiv}>
                    <h1 className={healthoffice.infoTitle}>Health Office Visits</h1>
                    <h1 className={healthoffice.infoContent}>Except in the case of an emergency, all students must have a pass from their teacher to visit the Health Office.  Walk-in&#39;s during passing period will be returned to class for a pass. Communication with the Attendance and Health Office is important.  No student will be allowed to leave with another person (even a relative) unless that person is listed as an emergency contact if the parent/guardian cannot be reached first.  It is the responsibility of the parent/guardian to keep their emergency contact information current.</h1>
                </div>

                <div className={healthoffice.infoDiv}>
                    <h1 className={healthoffice.infoTitle}>Medications</h1>
                    <h1 className={healthoffice.infoContent}>All medications and/or forms should be taken directly to the Health Office located in the Counseling Center.  If you have any questions or concerns, you can reach Rebecca Gibb the Health Technician.  By law, the school cannot administer any medication, including over the counter medication, or treatment without parent permission and a physician&#39;s order. We can assist you with this process, please ask.</h1>

                    <div className={healthoffice.subInfoDiv}>
                        <h1 className={healthoffice.subInfoTitle}>
                            In compliance with Ed. Code Section 49423, no medication will be accepted or administered at school without all of the following conditions being met
                        </h1>

                        <ul className={healthoffice.subInfoList}>
                            <li className={healthoffice.subInfoListItem}>A written statement signed by the licensed authorized health care provider/dentist specifying the reason for the medication, the name, dosage, time, route, side effect; and specific instructions for emergency treatment must be on file at school.</li>
                            <li className={healthoffice.subInfoListItem}>A signed request from the parent/guardian must be on file at school.</li>
                            <li className={healthoffice.subInfoListItem}>Medication must be delivered to the school by the parent/guardian or other responsible adult.</li>
                            <li className={healthoffice.subInfoListItem}>Medication must be in your child&#39;s original, labeled pharmacy container written in English.</li>
                            <li className={healthoffice.subInfoListItem}>All liquid medication must be accompanied by an appropriate measuring device.</li>
                            <li className={healthoffice.subInfoListItem}>If pill splitting is required to obtain the correct dose of medication to be administered, only pills that are scored may be split, scored pills may be split in half only, and a commercial pill splitting device should be used for correct splitting.</li>
                            <li className={healthoffice.subInfoListItem}>Over the counter medication that has been prescribed by an authorized health care provider must be in its original container.</li>
                            <li className={healthoffice.subInfoListItem}>A separate form is required for each medication.</li>
                        </ul>
                    </div>
                </div>

                <div className={healthoffice.infoDiv}>
                    <h1 className={healthoffice.infoTitle}>Forms</h1>
                    <h1 className={healthoffice.infoContent}>Please let the Health Office know if your child has a life threatening illness such as diabetes, seizure disorders, or severe allergies (bees/food/medication). We want to be prepared to provide safe care for your child. To enable us to provide safe care for your child at school, please submit the required, completed form(s)</h1>

                    <div className={healthoffice.subInfoDiv}>
                        <ul className={healthoffice.subInfoList}>
                            <li className={`${healthoffice.subInfoListItem} ${healthoffice.health}`} onClick={() => window.open("https://oxford.auhsd.us/files/public_files/FoodAllergy_ActionPlan.pdf", "_blank")}>Food Allergy</li>
                            <li className={`${healthoffice.subInfoListItem} ${healthoffice.health}`} onClick={() => window.open("https://oxford.auhsd.us/files/public_files/MedRequestForm_English10-3-2018.pdf", "_blank")}>Medication Request Form</li>
                            <li className={`${healthoffice.subInfoListItem} ${healthoffice.health}`} onClick={() => window.open("https://oxford.auhsd.us/files/public_files/PhysicianMedicalReport.pdf", "_blank")}>Physician Medical Report</li>
                            <li className={`${healthoffice.subInfoListItem} ${healthoffice.health}`} onClick={() => window.open("https://oxford.auhsd.us/files/public_files/SeizureHistory.pdf", "_blank")}>Seizure History</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}