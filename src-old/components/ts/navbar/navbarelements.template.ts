import Contact from "./data/contact.table.json";
import Faculty from "./data/faculty.table.json";
import Parents from "./data/parent.table.json";
import School from "./data/school.table.json";
import Student from "./data/student.table.json";
import TopDiv from "./data/topdiv.table.json";

export type NavbarElementsData = {
    name: string;
    link: string;
    hasWorkingLink: boolean;
}[]

const elementsData: Record<string, any> = {
    "School": School["School"],
    "Student": Student["Student"],
    "Parent": Parents["Parent"],
    "Faculty": Faculty["Faculty"],
    "Contact": Contact["Contact Us"],
    "TopDiv": TopDiv["TopDiv"],
};

function getNavBarElements(elements: string): NavbarElementsData {
    const data: string[] = elementsData[elements] || elementsData["School"];
    return data.map((element: any) => ({
        name: element.name,
        link: element.link,
        hasWorkingLink: element.hasWorkingLink
    }));
}

export default getNavBarElements;