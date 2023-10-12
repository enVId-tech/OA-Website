import Contact from "./data/contact.json";
import Faculty from "./data/faculty.json";
import Parents from "./data/parent.json";
import School from "./data/school.json";
import Student from "./data/student.json";
import TopDiv from "./data/topdiv.json";

export type NavbarElementsData = {
    name: string;
    link: string;
    hasWorkingLink: boolean;
}[]

function getNavBarElements(elements: string): NavbarElementsData {
    switch (elements) {
        case "School":
            return School.School.map((element: any) => ({
                name: element.name,
                link: element.link,
                hasWorkingLink: element.hasWorkingLink
            }));
        case "Student":
            return Faculty.Faculty.map((element: any) => ({
                name: element.name,
                link: element.link,
                hasWorkingLink: element.hasWorkingLink
            }));
        case "Parent":
            return Parents.Parent.map((element: any) => ({
                name: element.name,
                link: element.link,
                hasWorkingLink: element.hasWorkingLink
            }));
        case "Faculty":
            return Student.Student.map((element: any) => ({
                name: element.name,
                link: element.link,
                hasWorkingLink: element.hasWorkingLink
            }));
        case "Contact":
            return Contact.Contact.map((element: any) => ({
                name: element.name,
                link: element.link,
                hasWorkingLink: element.hasWorkingLink
            }));
        case "TopDiv": 
            return TopDiv.TopDiv.map((element: any) => ({
                name: element.name,
                link: element.link,
                hasWorkingLink: element.hasWorkingLink
            }));
        default:
            return School.School.map((element: any) => ({
                name: element.name,
                link: element.link,
                hasWorkingLink: element.hasWorkingLink
            }));
    }
}

export default getNavBarElements;