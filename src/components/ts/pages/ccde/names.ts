function pageCreateInformationCCDE(type?: string): string[] | string[][] {
    const pathwayImages: string[] = [
        "https://th.bing.com/th/id/R.69172b9d79490402e26f586b4694f930?rik=nLqxdNfhdGwhPg&riu=http%3a%2f%2fwww.riohondo.edu%2fpublic-safety%2fwp-content%2fuploads%2fsites%2f44%2f2014%2f03%2fJustice-Administration.jpg&ehk=m8rRwx%2fcwML8TE4SNUNs%2bX9vJyfyp0qupN1ksomJ598%3d&risl=&pid=ImgRaw&r=0",
        "https://oxford.auhsd.us/files/user/1/image/Automotive.jpg",
        "https://oxford.auhsd.us/files/user/1/image/Business.jpg",
        "https://th.bing.com/th/id/OIP.RIgsezVCjyplpD12BHGFKwHaC0?w=626&h=238&rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.JB-5Kh4qWFafnPrcsFFdsgHaEM?w=588&h=333&rs=1&pid=ImgDetMain",
        "https://oxford.auhsd.us/files/user/1/image/Counseling.jpg",
        "https://oxford.auhsd.us/files/user/1/image/Public-Health.jpg",
        "https://oxford.auhsd.us/files/user/1/image/UC_CSU-Transfer.jpg",
        "https://oxford.auhsd.us/files/user/1/image/Culinary%20arts.png"
    ];

    const pathwayNames: string[] = [
        "Administration of Justice",
        "Automotive",
        "Business",
        "Cyber Security (New Students)",
        "Cyber Security (Continuing Students)",
        "Counseling",
        "Public Health",
        "UC/CSU Transfer",
        "Culinary Arts"
    ];

    const applicationSteps: string[] = [
        "Apply to Cypress College",
        "Fill out the DE Special Admit Form",
        "Register for your classes"
    ];

    const videoEmbedLinks: string[] = [
        "https://www.youtube-nocookie.com/embed/kke-moJSIN4?rel=0",
        "https://www.youtube.com/embed/XZgc107AonI",
        "https://www.youtube.com/embed/jVhdo1JXcy4?rel=0",
    ];

    try {
        switch (type) {
            case 'pathwayImages': return pathwayImages;
            case 'pathwayNames': return pathwayNames;
            case 'applicationSteps': return applicationSteps;
            case 'videoEmbedLinks': return videoEmbedLinks;
            default: return [pathwayImages, pathwayNames, applicationSteps, videoEmbedLinks];
        }
    } catch (err: unknown) {
        console.log(err as Error | string);
        throw new Error('Error in names(), ' + err);
    }
}

export default pageCreateInformationCCDE;