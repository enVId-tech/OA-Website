interface NavbarElementsData {
    name: string;
    link: string;
    hasWorkingLink: boolean;
}

function getNavBarElements(elements: string): NavbarElementsData[] {
    switch (elements) {
        case "School":
            return [
                // An array containing strings representing school-related buttons
                { name: "Administration", link: "/administration", "hasWorkingLink": false },
                { name: "Admissions", link: "/admissions", "hasWorkingLink": true },
                { name: "Alumni", link: "http://oxfordalumninetwork.com/", "hasWorkingLink": true },
                { name: "Athletics", link: "/athletics", "hasWorkingLink": true },
                { name: "Bell Schedule", link: "/bellschedule", "hasWorkingLink": true },
                { name: "Calendar", link: "/calendar", "hasWorkingLink": false },
                { name: "Clubs & Organizations", link: "/clubs", "hasWorkingLink": true },
                { name: "Counseling", link: "/counseling", "hasWorkingLink": false },
                { name: "Cypress College Dual Enrollment", link: "/cypresscollege", "hasWorkingLink": false },
                { name: "Dress Regulations", link: "/dressregulations", "hasWorkingLink": false },
                { name: "General Information", link: "/generalinformation", "hasWorkingLink": false },
                { name: "Health Office", link: "/healthoffice", "hasWorkingLink": false },
                { name: "News Section", link: "/news", "hasWorkingLink": false },
                { name: "OA Profile", link: "/oaprofile", "hasWorkingLink": false },
                { name: "OA Site Map", link: "/oasitemap", "hasWorkingLink": false },
                { name: "Policies", link: "/policies", "hasWorkingLink": false },
                { name: "Principal's Message", link: "/principalsmessage", "hasWorkingLink": true },
                { name: "Programs 4 Patriots", link: "/programs4patriots", "hasWorkingLink": false },
                { name: "School Accountability Report Card", link: "/schoolaccountabilityreportcard", "hasWorkingLink": false },
                { name: "Staff Directory/Email", link: "/staffdirectory", "hasWorkingLink": false },
                { name: "Transcripts", link: "/transcripts", "hasWorkingLink": false },
                { name: "Transportation", link: "/transportation", "hasWorkingLink": false },
                { name: "Vision & SLCs", link: "/visionandslcs", "hasWorkingLink": false },
            ]
        case "Student":
            return [
                // An array containing strings representing student-related buttons
                { name: "Aeries Student Portal", link: "https://aeriesconnect.auhsd.us/auconnect", "hasWorkingLink": true },
                { name: "AP Exam", link: "https://www.auhsd.us/District/Department/14182-REGISTRATION-ASSESSMENT-AND-EVALUATION/80300-AP-Exam-2020.html", "hasWorkingLink": true },
                { name: "ASB Webstore", link: "https://oxfordacademy.myschoolcentral.com/", "hasWorkingLink": true },
                { name: "AUHSD Course Catalog", link: "https://coursecatalog.auhsd.us/", "hasWorkingLink": true },
                { name: "Athletics", link: "/athletics", "hasWorkingLink": true },
                { name: "Bell Schedule", link: "/bellschedule", "hasWorkingLink": true },
                { name: "Booktracks", link: "/booktracks", "hasWorkingLink": false },
                { name: "Cafeteria Menu", link: "/cafeteriamenu", "hasWorkingLink": false },
                { name: "Calendar", link: "/calendar", "hasWorkingLink": false },
                { name: "Clubs & Organizations", link: "/clubs", "hasWorkingLink": true },
                { name: "College Access for All (Dream Act)", link: "/collegeaccessforall", "hasWorkingLink": false },
                { name: "Counseling", link: "/counseling", "hasWorkingLink": false },
                { name: "Cypress College Dual Enrollment", link: "/cypresscollege", "hasWorkingLink": false },
                { name: "Dress Regulations", link: "/dressregulations", "hasWorkingLink": false },
                { name: "Digital Citizenship", link: "/digitalcitizenship", "hasWorkingLink": false },
                { name: "eKadence", link: "/ekadence", "hasWorkingLink": false },
                { name: "FITNESSGRAM Information", link: "/fitnessgraminformation", "hasWorkingLink": false },
                { name: "Graduation Requirements", link: "/graduationrequirements", "hasWorkingLink": false },
                { name: "Health Office", link: "/healthoffice", "hasWorkingLink": false },
                { name: "Library", link: "/library", "hasWorkingLink": false },
                { name: "News Section", link: "/news", "hasWorkingLink": false },
                { name: "Parent Student Handbooks", link: "/parentstudenthandbooks", "hasWorkingLink": false },
                { name: "Policies", link: "/policies", "hasWorkingLink": false },
                { name: "Programs 4 Patriots", link: "/programs4patriots", "hasWorkingLink": false },
                { name: "Service Learning Forms", link: "/servicelearningforms", "hasWorkingLink": false },
                { name: "Staff Directory/Email", link: "/staffdirectory", "hasWorkingLink": false },
                { name: "Student Technology Resources", link: "/studenttechnologyresources", "hasWorkingLink": false },
                { name: "Thrively", link: "/thrively", "hasWorkingLink": false },
                { name: "Title IX", link: "/titleix", "hasWorkingLink": false },
                { name: "Transcripts", link: "/transcripts", "hasWorkingLink": false },
                { name: "Transportation", link: "/transportation", "hasWorkingLink": false },
                { name: "Work Permits", link: "/workpermits", "hasWorkingLink": false },
            ]
        case "Parent":
            return [
                // An array containing strings representing parent-related buttons
                { name: "Aeries Parent Portal", link: "/aeriesparentportal", "hasWorkingLink": false },
                { name: "Athletics", link: "/athletics", "hasWorkingLink": true },
                { name: "AUHSD Course Catalog", link: "https://coursecatalog.auhsd.us/", "hasWorkingLink": true },
                { name: "Bell Schedule", link: "/bellschedule", "hasWorkingLink": true },
                { name: "Booktracks", link: "/booktracks", "hasWorkingLink": false },
                { name: "Cafeteria Menu", link: "/cafeteriamenu", "hasWorkingLink": false },
                { name: "Calendar", link: "/calendar", "hasWorkingLink": false },
                { name: "Clubs & Organizations", link: "/clubs", "hasWorkingLink": true },
                { name: "College Access for All (Dream Act)", link: "/collegeaccessforall", "hasWorkingLink": false },
                { name: "Counseling", link: "/counseling", "hasWorkingLink": false },
                { name: "Cypress College Dual Enrollment", link: "/cypresscollege", "hasWorkingLink": false },
                { name: "Dress Regulations", link: "/dressregulations", "hasWorkingLink": false },
                { name: "eKadence", link: "/ekadence", "hasWorkingLink": false },
                { name: "Family Engagement", link: "/familyengagement", "hasWorkingLink": false },
                { name: "FITNESSGRAM Information", link: "/fitnessgraminformation", "hasWorkingLink": false },
                { name: "Graduation Requirements", link: "/graduationrequirements", "hasWorkingLink": false },
                { name: "Health Office", link: "/healthoffice", "hasWorkingLink": false },
                { name: "News Section", link: "/news", "hasWorkingLink": false },
                { name: "Nutrition Information", link: "/nutritioninformation", "hasWorkingLink": false },
                { name: "OA Foundation", link: "/oafoundation", "hasWorkingLink": false },
                { name: "OAIMBA", link: "/oaimba", "hasWorkingLink": false },
                { name: "Parent Student Handbooks", link: "/parentstudenthandbooks", "hasWorkingLink": false },
                { name: "Policies", link: "/policies", "hasWorkingLink": false },
                { name: "Programs 4 Patriots", link: "/programs4patriots", "hasWorkingLink": false },
                { name: "PTSA", link: "/ptsa", "hasWorkingLink": false },
                { name: "SchoolPay", link: "/schoolpay", "hasWorkingLink": false },
                { name: "School Site Council", link: "/schoolsitecouncil", "hasWorkingLink": false },
                { name: "Staff Directory/Email", link: "/staffdirectory", "hasWorkingLink": false },
                { name: "Transportation", link: "/transportation", "hasWorkingLink": false },
                { name: "Work Permits", link: "/workpermits", "hasWorkingLink": false },
            ]
        case "Faculty":
            return [
                // An array containing strings representing faculty-related buttons
                { name: "504 Plan", link: "/504plan", "hasWorkingLink": false },
                { name: "Aeries Teacher Connect", link: "/aeriesteacherconnect", "hasWorkingLink": false },
                { name: "Booktracks", link: "/booktracks", "hasWorkingLink": false },
                { name: "Calendar", link: "/calendar", "hasWorkingLink": false },
                { name: "Clubs & Organizations", link: "/clubs", "hasWorkingLink": true },
                { name: "Counseling", link: "/counseling", "hasWorkingLink": false },
                { name: "Digital Citizenship", link: "/digitalcitizenship", "hasWorkingLink": false },
                { name: "District's IIPP Plan", link: "/districtsiippplan", "hasWorkingLink": false },
                { name: "eKadence", link: "/ekadence", "hasWorkingLink": false },
                { name: "News Section", link: "/news", "hasWorkingLink": false },
                { name: "Online Learning Tools", link: "/onlinelearningtools", "hasWorkingLink": false },
                { name: "Policies", link: "/policies", "hasWorkingLink": false },
                { name: "Pupil Support Services", link: "/pupilsupportservices", "hasWorkingLink": false },
                { name: "SFE (Smart Find Express)", link: "/sfe", "hasWorkingLink": false },
                { name: "Staff Directory/Email", link: "/staffdirectory", "hasWorkingLink": false },
                { name: "Surplus Request Form", link: "/surplusrequestform", "hasWorkingLink": false },

            ]
        case "Contact":
            return [
                // An array containing strings representing contact-related buttons
                { name: "Email Us", link: "/emailus", "hasWorkingLink": false },
                { name: "Get Directions", link: "/getdirections", "hasWorkingLink": false },
            ]
        default:
            return [
                // An array containing strings representing school-related buttons
                { name: "Administration", link: "/administration", "hasWorkingLink": false },
                { name: "Admissions", link: "/admissions", "hasWorkingLink": true },
                { name: "Alumni", link: "http://oxfordalumninetwork.com/", "hasWorkingLink": true },
                { name: "Athletics", link: "/athletics", "hasWorkingLink": true },
                { name: "Bell Schedule", link: "/bellschedule", "hasWorkingLink": true },
                { name: "Calendar", link: "/calendar", "hasWorkingLink": false },
                { name: "Clubs & Organizations", link: "/clubs", "hasWorkingLink": true },
                { name: "Counseling", link: "/counseling", "hasWorkingLink": false },
                { name: "Cypress College Dual Enrollment", link: "/cypresscollege", "hasWorkingLink": false },
                { name: "Dress Regulations", link: "/dressregulations", "hasWorkingLink": false },
                { name: "General Information", link: "/generalinformation", "hasWorkingLink": false },
                { name: "Health Office", link: "/healthoffice", "hasWorkingLink": false },
                { name: "News Section", link: "/news", "hasWorkingLink": false },
                { name: "OA Profile", link: "/oaprofile", "hasWorkingLink": false },
                { name: "OA Site Map", link: "/oasitemap", "hasWorkingLink": false },
                { name: "Policies", link: "/policies", "hasWorkingLink": false },
                { name: "Principal's Message", link: "/principalsmessage", "hasWorkingLink": true },
                { name: "Programs 4 Patriots", link: "/programs4patriots", "hasWorkingLink": false },
                { name: "School Accountability Report Card", link: "/schoolaccountabilityreportcard", "hasWorkingLink": false },
                { name: "Staff Directory/Email", link: "/staffdirectory", "hasWorkingLink": false },
                { name: "Transcripts", link: "/transcripts", "hasWorkingLink": false },
                { name: "Transportation", link: "/transportation", "hasWorkingLink": false },
                { name: "Vision & SLCs", link: "/visionandslcs", "hasWorkingLink": false },
            ]
    }
}

export default getNavBarElements;