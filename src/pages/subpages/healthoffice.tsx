import React from "react";
import Navbar from "../../components/ts/navbar/navbar";
import PageTitle from "../../components/ts/pagetitle/pagetitle";
import Footer from "../../components/ts/footer/Footer";
import '../../components/scss/pages/subpages/healthoffice.scss';

const HealthOffice = () => {
    return (
        <div id="HealthOffice">
            <Navbar />
            <PageTitle height={80} mainText="Health Office" subText="Learn more about our school!" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <div id="HealthOfficeMain">
                <h1 id="TitleText">Health Office</h1>
                <div id="Top">
                    <h1 id="TopTitleText">Healthy Students Learn Better at <strong>Oxford Academy</strong></h1>
                </div>
                <div id="AboutUs" className="InfoDiv">
                    <h1 id="AboutTitle" className="InfoTitle">About Us</h1>
                    <h1 id="AboutContent" className="InfoContent">Oxford Academy is staffed with a Health Technician, trained in first aid and CPR, who on campus from 7:30 am – 4:00 pm daily. The primary role of the Health Technician is to provide basic first aid for unexpected injuries, to assist with medications when it is determined they must be given at school; and to maintain health records on all students enrolled.  The School Nurse oversees health services at several school sites in the AUHSD and is able to be reached by cell phone during school hours.</h1>
                </div>
                <div id="Visits" className="InfoDiv">
                    <h1 id="VisitsTitle" className="InfoTitle">Health Office Visits</h1>
                    <h1 id="VisitsContent" className="InfoContent">Except in the case of an emergency, all students must have a pass from their teacher to visit the Health Office.  Walk-in's during passing period will be returned to class for a pass. Communication with the Attendance and Health Office is important.  No student will be allowed to leave with another person (even a relative) unless that person is listed as an emergency contact if the parent/guardian cannot be reached first.  It is the responsibility of the parent/guardian to keep their emergency contact information current.</h1>
                </div>
                <div id="Medications" className="InfoDiv">
                    <h1 id="MedicationsTitle" className="InfoTitle">Medications</h1>
                    <h1 id="MedicationsContent" className="InfoContent">All medications and/or forms should be taken directly to the Health Office located in the Counseling Center.  If you have any questions or concerns, you can reach Rebecca Gibb the Health Technician.  By law, the school cannot administer any medication, including over the counter medication, or treatment without parent permission and a physician's order. We can assist you with this process, please ask.</h1>
                </div>
            </div>
            <Footer title="Health Office" />
        </div>
    );
}

export default HealthOffice;