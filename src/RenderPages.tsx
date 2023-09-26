import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// TS

// SCSS
import './components/scss/pages/pages.scss';

// Pages 
import ErrorPage from "./pages/Error";
import HomePage from "./pages/homepage";
import Clubs from "./pages/subpages/clubs";
import PrincipalsMessage from "./pages/subpages/principalsmessage";
import Admissions from './pages/subpages/admissions';
import Athletics from './pages/subpages/athletics';
import BellSchedule from './pages/subpages/bellschedule';
import Administration from './pages/subpages/administration';
import Calendar from './pages/subpages/calendar';
import Counseling from './pages/subpages/counseling';
import CCDualEnrollment from './pages/subpages/ccdualenroll';
import DressCode from './pages/subpages/dresscode';
import GeneralInformation from './pages/subpages/generalinformation';
import OxfSitemap from './pages/subpages/oxfordsitemap';
import Policies from './pages/subpages/policies';
import ProgramsForPatriots from './pages/subpages/PforP';
import Staff from './pages/subpages/staff';
import Transcript from './pages/subpages/transcript';
import Transportation from './pages/subpages/transportation';
import VisionSLCS from './pages/subpages/visionslcs';


const RenderPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirects */}
        <Route path="/*" element={<Navigate to="/error" />} />
        <Route path="/administration/*" element={<Navigate to="/administration" />} />
        <Route path="/admissions/*" element={<Navigate to="/admissions" />} />
        <Route path="/athletics/*" element={<Navigate to="/athletics" />} />
        <Route path="/bellschedule/*" element={<Navigate to="/bellschedule" />} />
        <Route path="/calendar/*" element={<Navigate to="/calendar" />} />
        <Route path="/clubs/*" element={<Navigate to="/clubs" />} />
        <Route path="/counseling/*" element={<Navigate to="/counseling" />} />
        <Route path="/cypresscollege/*" element={<Navigate to="/cypresscollege" />} />
        <Route path="/dressregulations/*" element={<Navigate to="/dressregulations" />} />
        <Route path="/generalinformation/*" element={<Navigate to="/generalinformation" />} />
        <Route path="/oasitemap/*" element={<Navigate to="/oasitemap" />} />
        <Route path="/policies/*" element={<Navigate to="/policies" />} />
        <Route path="/principalsmessage/*" element={<Navigate to="/principalsmessage" />} />
        <Route path="/programs4patriots/*" element={<Navigate to="/programs4patriots" />} />
        <Route path="/staffdirectory/*" element={<Navigate to="/staffdirectory" />} />
        <Route path="/transcripts/*" element={<Navigate to="/transcripts" />} />
        <Route path="/transportation/*" element={<Navigate to="/transportation" />} />
        <Route path="/visionandslcs/*" element={<Navigate to="/visionandslcs" />} />
        <Route path="/error/*" element={<Navigate to="/error" />} />

        {/* Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/administration" element={<Administration />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/athletics" element={<Athletics />} />
        <Route path="/bellschedule" element={<BellSchedule />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/counseling" element={<Counseling />} />
        <Route path="/cypresscollege" element={<CCDualEnrollment />} />
        <Route path="/dressregulations" element={<DressCode />} />
        <Route path="/generalinformation" element={<GeneralInformation />} />
        <Route path="/oasitemap" element={<OxfSitemap />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/principalsmessage" element={<PrincipalsMessage />} />
        <Route path="/programs4patriots" element={<ProgramsForPatriots />} />
        <Route path="/staffdirectory" element={<Staff />} />
        <Route path="/transcripts" element={<Transcript />} />
        <Route path="/transportation" element={<Transportation />} />
        <Route path="/visionandslcs" element={<VisionSLCS />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RenderPages;