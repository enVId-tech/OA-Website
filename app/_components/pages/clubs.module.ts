export type Club = {
    club: string;
}

const clubsDirectory: Record<string, Club[]> = {
    "Academic": [
        { club: "Computational Modeling Club" },
        { club: "Cyber Security Club  " },
        { club: "Future Business Leaders of America (FBLA)" },
        { club: "OA Code" },
        { club: "OA Math Club" },
        { club: "OA Science Club" },
        { club: "OA Robotics Club" },
        { club: "Skills USA NOCROP" },
        { club: "Youth Investor Society Club" },
        { club: "HOSA" },
    ],
    "Interest": [
        { club: "Animal Care Team (ACT)" },
        { club: "Culinary Club" },
        { club: "Health Guardians and Nutrition Club" },
        { club: "Nami Club" },
        { club: "OA Esports" },
        { club: "OA Magic Club" },
        { club: "Run and Laugh, Play Hard (RALPH)" },
        { club: "Solar Cup Club" },
    ],
    "Culture": [
        { club: "AASHA" },
        { club: "Association of Latin American Scholars (ALAS)" },
        { club: "Chinese Language and Culture Club (CLC)" },
        { club: "Filipino Club" },
        { club: "Gender Equality Club" },
        { club: "International Club" },
        { club: "Japanese Club" },
        { club: "Korean Culture Awareness (KCA)" },
        { club: "Queer Student Association (QSA)" },
        { club: "Vietnamese Student Association (VSA)" },
    ],
    "Leadership": [
        { club: "Big Brothers Big Sisters OA (BBBSOA)" },
        { club: "Environmental Conservation Organization (ECO)" },
        { club: "Each One Teach One (EOTO)" },
        { club: "Friends 4 Hope*" },
        { club: "Key Club*" },
        { club: "National Honor Society (NHS)*" },
        { club: "Red Cross" },
        { club: "Raising Student Voice and Participation (RSVP)" },
    ],
    "Performing": [
        { club: "Art Club" },
        { club: "Cartooning Club" },
        { club: "Chess Club" },
        { club: "Creative Writing" },
        { club: "Fashion Club" },
        { club: "Graphic Design Crew" },
        { club: "Improv Club" },
        { club: "OA Spotlight" },
        { club: "OA Crescendo" },
        { club: "OA Dance Crew (OADC)" },
    ],
    "Spiritual": [
        { club: "Catholics In Action" },
        { club: "OASIS Jesus Club" },
    ],
    "Speaking": [
        { club: "Model United Nations" },
        { club: "Speech and Debate Club" },
    ],
};


function ClubsList(directory: string): Club[] {
    return clubsDirectory[directory] || clubsDirectory["Academic"];
}

export default ClubsList;