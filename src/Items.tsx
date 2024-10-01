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