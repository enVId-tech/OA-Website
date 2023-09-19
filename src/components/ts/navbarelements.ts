function getNavBarElements(elements: string): string[] {
    switch (elements) {
        case "School":
            return [
                // An array containing strings representing school-related buttons
                "Administration",
                "Admissions",
                "Alumni",
                "Athletics",
                "Bell Schedule",
                "Calendar",
                "Clubs & Organizations",
                "Counseling",
                "Cypress College Dual Enrollment",
                "Dress Regulations",
                "General Information",
                "Health Office",
                "News Section",
                "OA Profile",
                "OA Site Map",
                "Policies",
                "Principal's Message",
                "Programs 4 Patriots",
                "School Accountability Report Card",
                "Staff Directory/Email",
                "Transcripts",
                "Transportation",
                "Vision & SLCs"
            ]
        case "Student":
            return [
                // An array containing strings representing student-related buttons
                "Aeries Student Portal",
                "AP Exam",
                "ASB Webstore",
                "AUHSD Course Catalog",
                "Athletics",
                "Bell Schedule",
                "Booktracks",
                "Cafeteria Menu",
                "Calendar",
                "Clubs & Organizations",
                "College Access for All (Dream Act)",
                "Counseling",
                "Cypress College Dual Enrollment",
                "Dress Regulations",
                "Digital Citizenship",
                "eKadence",
                "FITNESSGRAM Information",
                "Graduation Requirements",
                "Health Office",
                "Library",
                "News Section",
                "Parent Student Handbooks",
                "Policies",
                "Programs 4 Patriots",
                "Service Learning Forms",
                "Staff Directory/Email",
                "Student Technology Resources",
                "Thrively",
                "Title IX",
                "Transcripts",
                "Transportation",
                "Work Permits",
            ]
        case "Parent":
            return [
                // An array containing strings representing parent-related buttons
                "Aeries Parent Portal",
                "Athletics",
                "AUHSD Course Catalog",
                "Bell Schedule",
                "Booktracks",
                "Cafeteria Menu",
                "Calendar",
                "Clubs & Organizations",
                "College Access for All (Dream Act)",
                "Counseling",
                "Cypress College Dual Enrollment",
                "Dress Regulations",
                "eKadence",
                "Family Engagement",
                "FITNESSGRAM Information",
                "Graduation Requirements",
                "Health Office",
                "News Section",
                "Nutrition Information",
                "OA Foundation",
                "OAIMBA",
                "Parent Student Handbooks",
                "Policies",
                "Programs 4 Patriots",
                "PTSA",
                "SchoolPay",
                "School Site Council",
                "Staff Directory/Email",
                "Transportation",
                "Work Permits",
            ]
        case "Faculty":
            return [
                // An array containing strings representing faculty-related buttons
                "504 Plan",
                "Aeries Teacher Connect",
                "Booktracks",
                "Calendar",
                "Clubs & Organizations",
                "Counseling",
                "Digital Citizenship",
                "District's IIPP Plan",
                "eKadence",
                "News Section",
                "Online Learning Tools",
                "Policies",
                "Pupil Support Services",
                "SFE (Smart Find Express)",
                "Staff Directory/Email",
                "Surplus Request Form",
            ]
        case "Contact":
            return [
                // An array containing strings representing contact-related buttons
                "Email Us",
                "Get Directions",
            ]
        default:
            return [
                // An array containing strings representing school-related buttons
                "Administration",
                "Admissions",
                "Alumni",
                "Athletics",
                "Bell Schedule",
                "Calendar",
                "Clubs & Organizations",
                "Counseling",
                "Cypress College Dual Enrollment",
                "Dress Regulations",
                "General Information",
                "Health Office",
                "News Section",
                "OA Profile",
                "OA Site Map",
                "Policies",
                "Principal's Message",
                "Programs 4 Patriots",
                "School Accountability Report Card",
                "Staff Directory/Email",
                "Transcripts",
                "Transportation",
                "Vision & SLCs"
            ]
    }
}

export default getNavBarElements;