export enum Item {
    Resume,
    Education,
    Experience,
    PersonalProjects,
    AcademicProjects,
    Certifications,
    About,
    None
}


export const ItemsRoutesMap = {
    [Item.Resume]: "/resume",
    [Item.Education]: "/education",
    [Item.Experience]: "/experience",
    [Item.PersonalProjects]: "/personal-projects",
    [Item.AcademicProjects]: "/academic-projects",
    [Item.Certifications]: "/certifications",
    [Item.About]: "/about",
    [Item.None]: "/"
}


export const ObjectsList = [
    "Floor", "BackWall", "RightWall", "Window", "Desk", "Plant", "Poster", "Clock",
    "Mat", "Monitors", "Keyboard", "Mouse", "Resume", "Papers", "PenHolder", "Experience",
    "GraduationHat", "Trophy", "Shelf", "PersonalProjects", "About", "AcademicProjects", "Books", "Chair"
]