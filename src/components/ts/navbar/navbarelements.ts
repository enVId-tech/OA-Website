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
                { name: "Administration", link: "/administration", "hasWorkingLink": true },
                { name: "Admissions", link: "/admissions", "hasWorkingLink": true },
                { name: "Alumni", link: "http://oxfordalumninetwork.com/", "hasWorkingLink": true },
                { name: "Athletics", link: "/athletics", "hasWorkingLink": true },
                { name: "Bell Schedule", link: "/bellschedule", "hasWorkingLink": true },
                { name: "Calendar", link: "/calendar", "hasWorkingLink": true },
                { name: "Clubs & Organizations", link: "/clubs", "hasWorkingLink": true },
                { name: "Counseling", link: "/counseling", "hasWorkingLink": true },
                { name: "Cypress College Dual Enrollment", link: "/cypresscollege", "hasWorkingLink": true },
                { name: "Dress Regulations", link: "/dressregulations", "hasWorkingLink": true },
                { name: "General Information", link: "/generalinformation", "hasWorkingLink": true },
                { name: "Health Office", link: "/healthoffice", "hasWorkingLink": true },
                { name: "News Section", link: "https://oxford.auhsd.us/Oxford/Department/14222-Oxford-Academy/News/", "hasWorkingLink": true },
                { name: "OA Profile", link: "https://oxford.auhsd.us/Oxford/Department/14222-Oxford-Academy/78240-OA-Profile.html", "hasWorkingLink": true },
                { name: "OA Site Map", link: "/oasitemap", "hasWorkingLink": true },
                { name: "Policies", link: "/policies", "hasWorkingLink": true },
                { name: "Principal's Message", link: "/principalsmessage", "hasWorkingLink": true },
                { name: "Programs 4 Patriots", link: "/programs4patriots", "hasWorkingLink": true },
                { name: "School Accountability Report Card", link: "https://oxford.auhsd.us/Oxford/Department/14222-Oxford-Academy/5914-School-Accountability-Report-Cards.html", "hasWorkingLink": true },
                { name: "Staff Directory/Email", link: "/staffdirectory", "hasWorkingLink": true },
                { name: "Transcripts", link: "/transcripts", "hasWorkingLink": true },
                { name: "Transportation", link: "/transportation", "hasWorkingLink": true },
                { name: "Vision & SLCs", link: "/visionandslcs", "hasWorkingLink": true },
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
                { name: "Booktracks", link: "https://auhsdbt.booksys.net/", "hasWorkingLink": true },
                { name: "Cafeteria Menu", link: "/cafeteriamenu", "hasWorkingLink": false },
                { name: "Calendar", link: "/calendar", "hasWorkingLink": true },
                { name: "Clubs & Organizations", link: "/clubs", "hasWorkingLink": true },
                { name: "College Access for All (Dream Act)", link: "https://www.auhsd.us/District/Department/14186-Curriculum-Instruction/80554-College-Access-for-All-Dream-Act.html", "hasWorkingLink": true },
                { name: "Counseling", link: "/counseling", "hasWorkingLink": true },
                { name: "Cypress College Dual Enrollment", link: "/cypresscollege", "hasWorkingLink": true },
                { name: "Dress Regulations", link: "/dressregulations", "hasWorkingLink": true },
                { name: "Digital Citizenship", link: "https://www.auhsd.us/District/Department/14186-Curriculum-Instruction/80431-AUHSD-Digital-Citizenship-Week.html", "hasWorkingLink": true },
                { name: "eKadence", link: "https://auhsd.ekadence.com", "hasWorkingLink": true },
                { name: "FITNESSGRAM Information", link: "https://www.auhsd.us/District/Department/14186-Curriculum-Instruction/80455-Fitnessgram-Information.html", "hasWorkingLink": true },
                { name: "Graduation Requirements", link: "/graduationrequirements", "hasWorkingLink": false },
                { name: "Health Office", link: "/healthoffice", "hasWorkingLink": true },
                { name: "Library", link: "/library", "hasWorkingLink": false },
                { name: "News Section", link: "https://oxford.auhsd.us/Oxford/Department/14222-Oxford-Academy/News/", "hasWorkingLink": true },
                { name: "Parent Student Handbooks", link: "https://www.auhsd.us/District/Department/14182-ASSESSMENT-AND-EVALUATION/Portal/parent-student-handbooks-english", "hasWorkingLink": true },
                { name: "Policies", link: "/policies", "hasWorkingLink": true },
                { name: "Programs 4 Patriots", link: "/programs4patriots", "hasWorkingLink": true },
                { name: "Service Learning Forms", link: "https://www.auhsd.us/District/Department/14182-Assessment-and-Evaluation/80477-Service-Learning-Forms.html", "hasWorkingLink": true },
                { name: "Staff Directory/Email", link: "/staffdirectory", "hasWorkingLink": true },
                { name: "Student Technology Resources", link: "https://www.auhsd.us/District/Department/14320-STUDENT-TECHNOLOGY-RESOURCES", "hasWorkingLink": true },
                { name: "Thrively", link: "https://www.thrively.com/login", "hasWorkingLink": true },
                { name: "Title IX", link: "/titleix", "hasWorkingLink": false },
                { name: "Transcripts", link: "/transcripts", "hasWorkingLink": true },
                { name: "Transportation", link: "/transportation", "hasWorkingLink": true },
                { name: "Work Permits", link: "/workpermits", "hasWorkingLink": false },
            ]
        case "Parent":
            return [
                // An array containing strings representing parent-related buttons
                { name: "Aeries Parent Portal", link: "https://aeriesconnect.auhsd.us/auconnect/LoginParent.aspx", "hasWorkingLink": true },
                { name: "Athletics", link: "/athletics", "hasWorkingLink": true },
                { name: "AUHSD Course Catalog", link: "https://coursecatalog.auhsd.us/", "hasWorkingLink": true },
                { name: "Bell Schedule", link: "/bellschedule", "hasWorkingLink": true },
                { name: "Booktracks", link: "https://auhsdbt.booksys.net/", "hasWorkingLink": true },
                { name: "Cafeteria Menu", link: "/cafeteriamenu", "hasWorkingLink": false },
                { name: "Calendar", link: "/calendar", "hasWorkingLink": true },
                { name: "Clubs & Organizations", link: "/clubs", "hasWorkingLink": true },
                { name: "College Access for All (Dream Act)", link: "https://www.auhsd.us/District/Department/14186-Curriculum-Instruction/80554-College-Access-for-All-Dream-Act.html", "hasWorkingLink": true },
                { name: "Counseling", link: "/counseling", "hasWorkingLink": true },
                { name: "Cypress College Dual Enrollment", link: "/cypresscollege", "hasWorkingLink": true },
                { name: "Dress Regulations", link: "/dressregulations", "hasWorkingLink": true },
                { name: "eKadence", link: "https://auhsd.ekadence.com", "hasWorkingLink": true },
                { name: "Family Engagement", link: "/familyengagement", "hasWorkingLink": false },
                { name: "FITNESSGRAM Information", link: "https://www.auhsd.us/District/Department/14186-Curriculum-Instruction/80455-Fitnessgram-Information.html", "hasWorkingLink": true },
                { name: "Graduation Requirements", link: "/graduationrequirements", "hasWorkingLink": false },
                { name: "Health Office", link: "/healthoffice", "hasWorkingLink": true },
                { name: "News Section", link: "https://oxford.auhsd.us/Oxford/Department/14222-Oxford-Academy/News/", "hasWorkingLink": true },
                { name: "Nutrition Information", link: "https://district.schoolnutritionandfitness.com/anaheimschools/", "hasWorkingLink": true },
                { name: "OA Foundation", link: "https://www.oafoundation.org/", "hasWorkingLink": true },
                { name: "OAIMBA", link: "https://oaimba.square.site/", "hasWorkingLink": true },
                { name: "Parent Student Handbooks", link: "https://www.auhsd.us/District/Department/14182-ASSESSMENT-AND-EVALUATION/Portal/parent-student-handbooks-english", "hasWorkingLink": true },
                { name: "Policies", link: "/policies", "hasWorkingLink": true },
                { name: "Programs 4 Patriots", link: "/programs4patriots", "hasWorkingLink": true },
                { name: "PTSA", link: "/ptsa", "hasWorkingLink": false },
                { name: "SchoolPay", link: "https://www.schoolpay.com/", "hasWorkingLink": true },
                { name: "School Site Council", link: "/schoolsitecouncil", "hasWorkingLink": false },
                { name: "Staff Directory/Email", link: "/staffdirectory", "hasWorkingLink": true },
                { name: "Transportation", link: "/transportation", "hasWorkingLink": true },
                { name: "Work Permits", link: "/workpermits", "hasWorkingLink": false },
            ]
        case "Faculty":
            return [
                // An array containing strings representing faculty-related buttons
                { name: "504 Plan", link: "/504plan", "hasWorkingLink": false },
                { name: "Aeries Teacher Connect", link: "https://aeries.auhsd.us/aeries.net", "hasWorkingLink": true },
                { name: "Booktracks", link: "https://auhsdbt.booksys.net/", "hasWorkingLink": true },
                { name: "Calendar", link: "/calendar", "hasWorkingLink": true },
                { name: "Clubs & Organizations", link: "/clubs", "hasWorkingLink": true },
                { name: "Counseling", link: "/counseling", "hasWorkingLink": true },
                { name: "Digital Citizenship", link: "https://www.auhsd.us/District/Department/14186-Curriculum-Instruction/80431-AUHSD-Digital-Citizenship-Week.html", "hasWorkingLink": true },
                { name: "District's IIPP Plan", link: "/districtsiippplan", "hasWorkingLink": false },
                { name: "eKadence", link: "https://auhsd.ekadence.com", "hasWorkingLink": true },
                { name: "News Section", link: "https://oxford.auhsd.us/Oxford/Department/14222-Oxford-Academy/News/", "hasWorkingLink": true },
                { name: "Online Learning Tools", link: "https://www.auhsd.us/District/Department/14319-ONLINE-LEARNING-TOOLS", "hasWorkingLink": true },
                { name: "Policies", link: "/policies", "hasWorkingLink": true },
                { name: "Pupil Support Services", link: "https://www.auhsd.us/District/Department/14394-MENTAL-HEALTH-AND-WELLBEING/85935-Pupil-Support-Services.html", "hasWorkingLink": true },
                { name: "SFE (Smart Find Express)", link: "https://anaheimuhsd.eschoolsolutions.com/logOnInitAction.do", "hasWorkingLink": true },
                { name: "Staff Directory/Email", link: "/staffdirectory", "hasWorkingLink": true },
                { name: "Surplus Request Form", link: "https://www.auhsd.us/District/Department/14199-Purchasing-Central-Services/83325-Warehouse-Tel-714-999-3573-3574.html", "hasWorkingLink": true },

            ]
        case "Contact":
            return [
                // An array containing strings representing contact-related buttons
                { name: "Email Us", link: "/emailus", "hasWorkingLink": false },
                { name: "Get Directions", link: "/getdirections", "hasWorkingLink": false },
            ]
        case "TopDiv": 
            return [
                // An array containing strings representing top div buttons
                { name: "Home", link: "/", "hasWorkingLink": true },
                { name: "Our School", link: "/school-table", "hasWorkingLink": false },
                { name: "Student", link: "/student-table", "hasWorkingLink": false },
                { name: "Parents", link: "/parent-table", "hasWorkingLink": false },
                { name: "Faculty", link: "/faculty-table", "hasWorkingLink": false },
                { name: "Contact Us", link: "/contact-table", "hasWorkingLink": false },
            ]
        default:
            return [
                // An array containing strings representing school-related buttons
                { name: "Administration", link: "/administration", "hasWorkingLink": true },
                { name: "Admissions", link: "/admissions", "hasWorkingLink": true },
                { name: "Alumni", link: "http://oxfordalumninetwork.com/", "hasWorkingLink": true },
                { name: "Athletics", link: "/athletics", "hasWorkingLink": true },
                { name: "Bell Schedule", link: "/bellschedule", "hasWorkingLink": true },
                { name: "Calendar", link: "/calendar", "hasWorkingLink": true },
                { name: "Clubs & Organizations", link: "/clubs", "hasWorkingLink": true },
                { name: "Counseling", link: "/counseling", "hasWorkingLink": true },
                { name: "Cypress College Dual Enrollment", link: "/cypresscollege", "hasWorkingLink": true },
                { name: "Dress Regulations", link: "/dressregulations", "hasWorkingLink": true },
                { name: "General Information", link: "/generalinformation", "hasWorkingLink": true },
                { name: "Health Office", link: "/healthoffice", "hasWorkingLink": true },
                { name: "News Section", link: "https://oxford.auhsd.us/Oxford/Department/14222-Oxford-Academy/News/", "hasWorkingLink": true },
                { name: "OA Profile", link: "https://oxford.auhsd.us/Oxford/Department/14222-Oxford-Academy/78240-OA-Profile.html", "hasWorkingLink": true },
                { name: "OA Site Map", link: "/oasitemap", "hasWorkingLink": true },
                { name: "Policies", link: "/policies", "hasWorkingLink": true },
                { name: "Principal's Message", link: "/principalsmessage", "hasWorkingLink": true },
                { name: "Programs 4 Patriots", link: "/programs4patriots", "hasWorkingLink": true },
                { name: "School Accountability Report Card", link: "https://oxford.auhsd.us/Oxford/Department/14222-Oxford-Academy/5914-School-Accountability-Report-Cards.html", "hasWorkingLink": true },
                { name: "Staff Directory/Email", link: "/staffdirectory", "hasWorkingLink": true },
                { name: "Transcripts", link: "/transcripts", "hasWorkingLink": true },
                { name: "Transportation", link: "/transportation", "hasWorkingLink": true },
                { name: "Vision & SLCs", link: "/visionandslcs", "hasWorkingLink": true },
            ]
    }
}

export default getNavBarElements;