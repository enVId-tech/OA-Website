'use client'
import React from 'react';
import policy from "@/styles/pages/subpages/policy.module.scss";

export default function PoliciesPage() {
  return (
      <div className={policy.policies}>
          <div className={policy.policiesMain}>
              <h1 className={`${policy.titleText} pageSectionTitle`}>Policies</h1>
              <h1 className={policy.policiesSecondary}>
                  The Oxford Academy administration team, School Site Council, and Leadership teams have put together the following policies for the 2023-2024 school year:
              </h1>

              <ul className={policy.policiesList}>
                  <li className={`${policy.health}`} onClick={() => window.open("https://oxford.auhsd.us/files/user/1/file/Academic%20Honesty%20%26%20Retention%20Policy%202022-23.pdf", "_blank")}>Academic Honesty & Retention 2022-23 (PDF)</li>
                  <li className={`${policy.health}`} onClick={() => window.open("https://oxford.auhsd.us/files/user/1/file/OA-AUHSD%202020-21%20Acceptable%20Use%20Agreement.pdf", "_blank")}>AUHSD 2020-21 Acceptable Use Agreement (PDF)</li>
                  <li className={`${policy.health}`} onClick={() => window.open("https://oxford.auhsd.us/files/user/1/file/Discipline%20Policy%20(Handbook)%202022.pdf", "_blank")}>Discipline Policy 2022-23 (PDF)</li>
                  <li className={`${policy.health}`} onClick={() => window.open("https://oxford.auhsd.us/files/user/1/file/Social%20Media%20Guidelines.pdf", "_blank")}>Social Media Guidelines (PDF)</li>
                  <li className={`${policy.health}`} onClick={() => window.open("https://oxford.auhsd.us/files/user/1/file/Student%20Handbook%202023-24-Final.pdf", "_blank")}>Student Handbook 2023-24 (PDF)</li>
              </ul>
          </div>
      </div>
  );
}