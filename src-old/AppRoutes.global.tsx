import React from 'react';
import { BrowserRouter as ReactRouter, Routes as Pathhub, Route as Path, Navigate as Redirect } from "react-router-dom";

// TS

// SCSS
import './components/scss/pages/pages.global.scss';

// Website Tables
import StudentTable from '../src-old/pages/navtables/studenttable.subpage.table.tsx';
import SchoolTable from '../src-old/pages/navtables/schooltable.subpage.table.tsx';
import ParentTable from '../src-old/pages/navtables/parenttable.subpage.table.tsx';
import FacultyTable from '../src-old/pages/navtables/facultytable.subpage.table.tsx';
import ContactTable from '../src-old/pages/navtables/contacttable.subpage.tables.tsx';

// Pages
import ErrorPage from "../src-old/pages/Error.page.site.tsx";
import HomePage from "../src-old/pages/homepage.page.site.tsx";
import Clubs from "../src-old/pages/subpages/clubs.subpage.tsx";
import PrincipalsMessage from "../src-old/pages/subpages/principalsmessage.subpage.tsx";
import Admissions from '../src-old/pages/subpages/admissions.subpage.tsx';
import Athletics from '../src-old/pages/subpages/athletics.subpage.tsx';
import BellSchedule from '../src-old/pages/subpages/bellschedule.subpage.tsx';
import Administration from '../src-old/pages/subpages/administration.subpage.tsx';
import Calendar from '../src-old/pages/subpages/calendar.subpage.tsx';
import Counseling from '../src-old/pages/subpages/counseling.subpage.tsx';
import CCDualEnrollment from '../src-old/pages/subpages/ccdualenroll.subpage.tsx';
import GeneralInformation from '../src-old/pages/subpages/generalinformation.subpage.tsx';
import OxfSitemap from '../src-old/pages/subpages/oxfordsitemap.subpage.tsx';
import Policies from '../src-old/pages/subpages/policies.subpage.tsx';
import ProgramsForPatriots from '../src-old/pages/subpages/PforP.subpage.tsx';
import Staff from '../src-old/pages/subpages/staff.subpage.tsx';
import Transcript from '../src-old/pages/subpages/transcript.subpage.tsx';
import Transportation from '../src-old/pages/subpages/transportation.subpage.tsx';
import VisionSLCS from '../src-old/pages/subpages/visionslcs.subpage.tsx';
import HealthOffice from '../src-old/pages/subpages/healthoffice.subpage.tsx';
import AdminLogin from '../src-old/pages/admin/login.tsx';

const AppRoutes: React.FC = (): React.JSX.Element => {
  return (
    <ReactRouter>
      <Pathhub>
        {/* Redirects */}
        <Path path="/*" element={<Redirect to="/error" />} />
        <Path path="/administration/*" element={<Redirect to="/administration" />} />
        <Path path="/admissions/*" element={<Redirect to="/admissions" />} />
        <Path path="/athletics/*" element={<Redirect to="/athletics" />} />
        <Path path="/bellschedule/*" element={<Redirect to="/bellschedule" />} />
        <Path path="/calendar/*" element={<Redirect to="/calendar" />} />
        <Path path="/clubs/*" element={<Redirect to="/clubs" />} />
        <Path path="/counseling/*" element={<Redirect to="/counseling" />} />
        <Path path="/cypresscollege/*" element={<Redirect to="/cypresscollege" />} />
        <Path path="/generalinformation/*" element={<Redirect to="/generalinformation" />} />
        <Path path="/healthoffice/*" element={<Redirect to="/healthoffice" />} />
        <Path path="/oasitemap/*" element={<Redirect to="/oasitemap" />} />
        <Path path="/policies/*" element={<Redirect to="/policies" />} />
        <Path path="/principalsmessage/*" element={<Redirect to="/principalsmessage" />} />
        <Path path="/programs4patriots/*" element={<Redirect to="/programs4patriots" />} />
        <Path path="/staffdirectory/*" element={<Redirect to="/staffdirectory" />} />
        <Path path="/transcripts/*" element={<Redirect to="/transcripts" />} />
        <Path path="/transportation/*" element={<Redirect to="/transportation" />} />
        <Path path="/visionandslcs/*" element={<Redirect to="/visionandslcs" />} />
        <Path path="/admin/*" element={<Redirect to="/admin/login" />} />
        <Path path="/admin/login/*" element={<Redirect to="/admin/login" />} />
        <Path path="/error/*" element={<Redirect to="/error" />} />

        {/* Pages */}
        <Path path="/" element={<HomePage />} />
        <Path path="/administration" element={<Administration />} />
        <Path path="/admin/login" element={<AdminLogin />} />
        <Path path="/admissions" element={<Admissions />} />
        <Path path="/athletics" element={<Athletics />} />
        <Path path="/bellschedule" element={<BellSchedule />} />
        <Path path="/calendar" element={<Calendar />} />
        <Path path="/clubs" element={<Clubs />} />
        <Path path="/counseling" element={<Counseling />} />
        <Path path="/cypresscollege" element={<CCDualEnrollment />} />
        <Path path="/generalinformation" element={<GeneralInformation />} />
        <Path path="/healthoffice" element={<HealthOffice />} />
        <Path path="/oasitemap" element={<OxfSitemap />} />
        <Path path="/policies" element={<Policies />} />
        <Path path="/principalsmessage" element={<PrincipalsMessage />} />
        <Path path="/programs4patriots" element={<ProgramsForPatriots />} />
        <Path path="/staffdirectory" element={<Staff />} />
        <Path path="/transcripts" element={<Transcript />} />
        <Path path="/transportation" element={<Transportation />} />
        <Path path="/visionandslcs" element={<VisionSLCS />} />
        <Path path="/error" element={<ErrorPage />} />

        {/* Page Table Redirects */}
        <Path path="/student-table/*" element={<Redirect to="/student-table" />} />
        <Path path="/school-table/*" element={<Redirect to="/school-table" />} />
        <Path path="/parent-table/*" element={<Redirect to="/parent-table" />} />
        <Path path="/faculty-table/*" element={<Redirect to="/faculty-table" />} />
        <Path path="/contact-table/*" element={<Redirect to="/contact-table" />} />

        {/* Page Tables */}
        <Path path="/student-table" element={<StudentTable />} />
        <Path path="/school-table" element={<SchoolTable />} />
        <Path path="/parent-table" element={<ParentTable />} />
        <Path path="/faculty-table" element={<FacultyTable />} />
        <Path path="/contact-table" element={<ContactTable />} />
      </Pathhub>
    </ReactRouter>
  )
}

export default AppRoutes;