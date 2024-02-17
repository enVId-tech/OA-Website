import React from 'react';
import { BrowserRouter as ReactRouter, Routes as Pathhub, Route as Path, Navigate as Redirect } from "react-router-dom";

// TS

// SCSS
import './components/scss/pages/pages.global.scss';

// Pages
import ErrorPage from "./pages/Error.page.site.tsx";
import HomePage from "./pages/homepage.page.site.tsx";
import Clubs from "./pages/subpages/clubs.subpage.tsx";
import PrincipalsMessage from "./pages/subpages/principalsmessage.subpage.tsx";
import Admissions from './pages/subpages/admissions.subpage.tsx';
import Athletics from './pages/subpages/athletics.subpage.tsx';
import BellSchedule from './pages/subpages/bellschedule.subpage.tsx';
import Administration from './pages/subpages/administration.subpage.tsx';
import Calendar from './pages/subpages/calendar.subpage.tsx';
import Counseling from './pages/subpages/counseling.subpage.tsx';
import CCDualEnrollment from './pages/subpages/ccdualenroll.subpage.tsx';
import GeneralInformation from './pages/subpages/generalinformation.subpage.tsx';
import OxfSitemap from './pages/subpages/oxfordsitemap.subpage.tsx';
import Policies from './pages/subpages/policies.subpage.tsx';
import ProgramsForPatriots from './pages/subpages/PforP.subpage.tsx';
import Staff from './pages/subpages/staff.subpage.tsx';
import Transcript from './pages/subpages/transcript.subpage.tsx';
import Transportation from './pages/subpages/transportation.subpage.tsx';
import VisionSLCS from './pages/subpages/visionslcs.subpage.tsx';
import HealthOffice from './pages/subpages/healthoffice.subpage.tsx';
import AdminLogin from './pages/admin/login.tsx';
import GetDirections from './pages/subpages/getdirections.subpage.tsx';
import TitleIX from './pages/subpages/titleix.subpage.tsx';
import Cafeteria from './pages/subpages/cafeteria.subpage.tsx';
import PTSA from './pages/subpages/ptsa.subpage.tsx';
import FamilyEngagement from './pages/subpages/familyengagement.subpage.tsx';
import Plan504 from './pages/subpages/504plan.subpage.tsx';
import DistrictIPPPlan from './pages/subpages/districtippplan.subpage.tsx';
import WorkPermit from './pages/subpages/workpermit.subpage.tsx';
import Library from './pages/subpages/library.subpage.tsx';
import SchoolSiteCouncil from './pages/subpages/schoolsitecouncil.subpage.tsx';

const AppRoutes: React.FC = (): React.JSX.Element => {
  return (
    <ReactRouter>
      <Pathhub>
        {/* Redirects */}
        <Path path="/*" element={<Redirect to="/error" />} />
        <Path path="/504plan/*" element={<Redirect to="/504plan" />} />
        <Path path="/administration/*" element={<Redirect to="/administration" />} />
        <Path path="/admissions/*" element={<Redirect to="/admissions" />} />
        <Path path="/athletics/*" element={<Redirect to="/athletics" />} />
        <Path path="/bellschedule/*" element={<Redirect to="/bellschedule" />} />
        <Path path="/cafeteria/*" element={<Redirect to="/cafeteria" />} />
        <Path path="/calendar/*" element={<Redirect to="/calendar" />} />
        <Path path="/clubs/*" element={<Redirect to="/clubs" />} />
        <Path path="/counseling/*" element={<Redirect to="/counseling" />} />
        <Path path="/cypresscollege/*" element={<Redirect to="/cypresscollege" />} />
        <Path path="/districtippplan/*" element={<Redirect to="/districtippplan" />} />
        <Path path="/familyengagement/*" element={<Redirect to="/familyengagement" />} />
        <Path path="/generalinformation/*" element={<Redirect to="/generalinformation" />} />
        <Path path="/getdirections/*" element={<Redirect to="/getdirections" />} />
        <Path path="/getdirections/*" element={<Redirect to="/getdirections" />} />
        <Path path="/healthoffice/*" element={<Redirect to="/healthoffice" />} />
        <Path path="/library/*" element={<Redirect to="/library" />} />
        <Path path="/oasitemap/*" element={<Redirect to="/oasitemap" />} />
        <Path path="/policies/*" element={<Redirect to="/policies" />} />
        <Path path="/principalsmessage/*" element={<Redirect to="/principalsmessage" />} />
        <Path path="/programs4patriots/*" element={<Redirect to="/programs4patriots" />} />
        <Path path="/ptsa/*" element={<Redirect to="/ptsa" />} />
        <Path path="/schoolsitecouncil/*" element={<Redirect to="/schoolsitecouncil" />} />
        <Path path="/staffdirectory/*" element={<Redirect to="/staffdirectory" />} />
        <Path path="/titleix/*" element={<Redirect to="/titleix" />} />
        <Path path="/transcripts/*" element={<Redirect to="/transcripts" />} />
        <Path path="/transportation/*" element={<Redirect to="/transportation" />} />
        <Path path="/visionandslcs/*" element={<Redirect to="/visionandslcs" />} />
        <Path path="/workpermits/*" element={<Redirect to="/workpermits" />} />
        <Path path="/admin/*" element={<Redirect to="/admin/login" />} />
        <Path path="/admin/login/*" element={<Redirect to="/admin/login" />} />
        <Path path="/error/*" element={<Redirect to="/error" />} />

        {/* Pages */}
        <Path path="/" element={<HomePage />} />
        <Path path="/504plan" element={<Plan504 />} />
        <Path path="/administration" element={<Administration />} />
        <Path path="/admin/login" element={<AdminLogin />} />
        <Path path="/admissions" element={<Admissions />} />
        <Path path="/athletics" element={<Athletics />} />
        <Path path="/bellschedule" element={<BellSchedule />} />
        <Path path="/cafeteria" element={<Cafeteria />} />
        <Path path="/calendar" element={<Calendar />} />
        <Path path="/clubs" element={<Clubs />} />
        <Path path="/counseling" element={<Counseling />} />
        <Path path="/cypresscollege" element={<CCDualEnrollment />} />
        <Path path="/districtippplan" element={<DistrictIPPPlan />} />
        <Path path="/familyengagement" element={<FamilyEngagement />} />
        <Path path="/generalinformation" element={<GeneralInformation />} />
        <Path path="/getdirections" element={<GetDirections />} />
        <Path path="/healthoffice" element={<HealthOffice />} />
        <Path path="/library" element={<Library />} />
        <Path path="/oasitemap" element={<OxfSitemap />} />
        <Path path="/policies" element={<Policies />} />
        <Path path="/principalsmessage" element={<PrincipalsMessage />} />
        <Path path="/ptsa" element={<PTSA />} />
        <Path path="/programs4patriots" element={<ProgramsForPatriots />} />
        <Path path="/staffdirectory" element={<Staff />} />
        <Path path="/schoolsitecouncil" element={<SchoolSiteCouncil />} />
        <Path path="/titleix" element={<TitleIX />} />
        <Path path="/transcripts" element={<Transcript />} />
        <Path path="/transportation" element={<Transportation />} />
        <Path path="/visionandslcs" element={<VisionSLCS />} />
        <Path path="/workpermits" element={<WorkPermit />} />
        <Path path="/error" element={<ErrorPage />} />

        {/* Page Table Redirects */}
        <Path path="/student-table/*" element={<Redirect to="/student-table" />} />
        <Path path="/school-table/*" element={<Redirect to="/school-table" />} />
        <Path path="/parent-table/*" element={<Redirect to="/parent-table" />} />
        <Path path="/faculty-table/*" element={<Redirect to="/faculty-table" />} />
        <Path path="/contact-table/*" element={<Redirect to="/contact-table" />} />
      </Pathhub>
    </ReactRouter>
  )
}

export default AppRoutes;