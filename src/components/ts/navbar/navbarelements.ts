interface NavbarElementsData {
    name: string;
    link: string;
}

function getNavBarElements(elements: string): NavbarElementsData[] {
    switch (elements) {
        case "School":
            return [
                // An array containing strings representing school-related buttons
                { name: "Administration", link: "/administration" },
                { name: "Admissions", link: "/admissions" },
                { name: "Alumni", link: "http://oxfordalumninetwork.com/" },
                { name: "Athletics", link: "/athletics" },
                { name: "Bell Schedule", link: "/bellschedule" },
                { name: "Calendar", link: "/calendar" },
                { name: "Clubs & Organizations", link: "/clubs" },
                { name: "Counseling", link: "/counseling" },
                { name: "Cypress College Dual Enrollment", link: "/cypresscollege" },
                { name: "Dress Regulations", link: "/dressregulations" },
                { name: "General Information", link: "/generalinformation" },
                { name: "Health Office", link: "/healthoffice" },
                { name: "News Section", link: "/news" },
                { name: "OA Profile", link: "/oaprofile" },
                { name: "OA Site Map", link: "/oasitemap" },
                { name: "Policies", link: "/policies" },
                { name: "Principal's Message", link: "/principalsmessage" },
                { name: "Programs 4 Patriots", link: "/programs4patriots" },
                { name: "School Accountability Report Card", link: "/schoolaccountabilityreportcard" },
                { name: "Staff Directory/Email", link: "/staffdirectory" },
                { name: "Transcripts", link: "/transcripts" },
                { name: "Transportation", link: "/transportation" },
                { name: "Vision & SLCs", link: "/visionandslcs" },
            ]
        case "Student":
            return [
                // An array containing strings representing student-related buttons
                { name: "Aeries Student Portal", link: "https://aeriesconnect.auhsd.us/auconnect" },
                { name: "AP Exam", link: "https://www.auhsd.us/District/Department/14182-REGISTRATION-ASSESSMENT-AND-EVALUATION/80300-AP-Exam-2020.html" },
                { name: "ASB Webstore", link: "https://oxfordacademy.myschoolcentral.com/" },
                { name: "AUHSD Course Catalog", link: "https://coursecatalog.auhsd.us/" },
                { name: "Athletics", link: "/athletics" },
                { name: "Bell Schedule", link: "/bellschedule" },
                { name: "Booktracks", link: "/booktracks" },
                { name: "Cafeteria Menu", link: "/cafeteriamenu" },
                { name: "Calendar", link: "/calendar" },
                { name: "Clubs & Organizations", link: "/clubs" },
                { name: "College Access for All (Dream Act)", link: "/collegeaccessforall" },
                { name: "Counseling", link: "/counseling" },
                { name: "Cypress College Dual Enrollment", link: "/cypresscollege" },
                { name: "Dress Regulations", link: "/dressregulations" },
                { name: "Digital Citizenship", link: "/digitalcitizenship" },
                { name: "eKadence", link: "/ekadence" },
                { name: "FITNESSGRAM Information", link: "/fitnessgraminformation" },
                { name: "Graduation Requirements", link: "/graduationrequirements" },
                { name: "Health Office", link: "/healthoffice" },
                { name: "Library", link: "/library" },
                { name: "News Section", link: "/news" },
                { name: "Parent Student Handbooks", link: "/parentstudenthandbooks" },
                { name: "Policies", link: "/policies" },
                { name: "Programs 4 Patriots", link: "/programs4patriots" },
                { name: "Service Learning Forms", link: "/servicelearningforms" },
                { name: "Staff Directory/Email", link: "/staffdirectory" },
                { name: "Student Technology Resources", link: "/studenttechnologyresources" },
                { name: "Thrively", link: "/thrively" },
                { name: "Title IX", link: "/titleix" },
                { name: "Transcripts", link: "/transcripts" },
                { name: "Transportation", link: "/transportation" },
                { name: "Work Permits", link: "/workpermits" },
            ]
        case "Parent":
            return [
                // An array containing strings representing parent-related buttons
                { name: "Aeries Parent Portal", link: "/aeriesparentportal" },
                { name: "Athletics", link: "/athletics" },
                { name: "AUHSD Course Catalog", link: "https://coursecatalog.auhsd.us/" },
                { name: "Bell Schedule", link: "/bellschedule" },
                { name: "Booktracks", link: "/booktracks" },
                { name: "Cafeteria Menu", link: "/cafeteriamenu" },
                { name: "Calendar", link: "/calendar" },
                { name: "Clubs & Organizations", link: "/clubs" },
                { name: "College Access for All (Dream Act)", link: "/collegeaccessforall" },
                { name: "Counseling", link: "/counseling" },
                { name: "Cypress College Dual Enrollment", link: "/cypresscollege" },
                { name: "Dress Regulations", link: "/dressregulations" },
                { name: "eKadence", link: "/ekadence" },
                { name: "Family Engagement", link: "/familyengagement" },
                { name: "FITNESSGRAM Information", link: "/fitnessgraminformation" },
                { name: "Graduation Requirements", link: "/graduationrequirements" },
                { name: "Health Office", link: "/healthoffice" },
                { name: "News Section", link: "/news" },
                { name: "Nutrition Information", link: "/nutritioninformation" },
                { name: "OA Foundation", link: "/oafoundation" },
                { name: "OAIMBA", link: "/oaimba" },
                { name: "Parent Student Handbooks", link: "/parentstudenthandbooks" },
                { name: "Policies", link: "/policies" },
                { name: "Programs 4 Patriots", link: "/programs4patriots" },
                { name: "PTSA", link: "/ptsa" },
                { name: "SchoolPay", link: "/schoolpay" },
                { name: "School Site Council", link: "/schoolsitecouncil" },
                { name: "Staff Directory/Email", link: "/staffdirectory" },
                { name: "Transportation", link: "/transportation" },
                { name: "Work Permits", link: "/workpermits" },
            ]
        case "Faculty":
            return [
                // An array containing strings representing faculty-related buttons
                { name: "504 Plan", link: "/504plan" },
                { name: "Aeries Teacher Connect", link: "/aeriesteacherconnect" },
                { name: "Booktracks", link: "/booktracks" },
                { name: "Calendar", link: "/calendar" },
                { name: "Clubs & Organizations", link: "/clubs" },
                { name: "Counseling", link: "/counseling" },
                { name: "Digital Citizenship", link: "/digitalcitizenship" },
                { name: "District's IIPP Plan", link: "/districtsiippplan" },
                { name: "eKadence", link: "/ekadence" },
                { name: "News Section", link: "/news" },
                { name: "Online Learning Tools", link: "/onlinelearningtools" },
                { name: "Policies", link: "/policies" },
                { name: "Pupil Support Services", link: "/pupilsupportservices" },
                { name: "SFE (Smart Find Express)", link: "/sfe" },
                { name: "Staff Directory/Email", link: "/staffdirectory" },
                { name: "Surplus Request Form", link: "/surplusrequestform" },

            ]
        case "Contact":
            return [
                // An array containing strings representing contact-related buttons
                { name: "Email Us", link: "/emailus" },
                { name: "Get Directions", link: "/getdirections" },
            ]
        default:
            return [
                // An array containing strings representing school-related buttons
                { name: "Administration", link: "/administration" },
                { name: "Admissions", link: "/admissions" },
                { name: "Alumni", link: "http://oxfordalumninetwork.com/" },
                { name: "Athletics", link: "/athletics" },
                { name: "Bell Schedule", link: "/bellschedule" },
                { name: "Calendar", link: "/calendar" },
                { name: "Clubs & Organizations", link: "/clubs" },
                { name: "Counseling", link: "/counseling" },
                { name: "Cypress College Dual Enrollment", link: "/cypresscollege" },
                { name: "Dress Regulations", link: "/dressregulations" },
                { name: "General Information", link: "/generalinformation" },
                { name: "Health Office", link: "/healthoffice" },
                { name: "News Section", link: "/news" },
                { name: "OA Profile", link: "/oaprofile" },
                { name: "OA Site Map", link: "/oasitemap" },
                { name: "Policies", link: "/policies" },
                { name: "Principal's Message", link: "/principalsmessage" },
                { name: "Programs 4 Patriots", link: "/programs4patriots" },
                { name: "School Accountability Report Card", link: "/schoolaccountabilityreportcard" },
                { name: "Staff Directory/Email", link: "/staffdirectory" },
                { name: "Transcripts", link: "/transcripts" },
                { name: "Transportation", link: "/transportation" },
                { name: "Vision & SLCs", link: "/visionandslcs" },
            ]
    }
}

export default getNavBarElements;