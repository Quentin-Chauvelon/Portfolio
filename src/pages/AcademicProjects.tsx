import { ProjectCard, ProjectNavBar, ProjectNavBarItemLocalizationProps, ProjectCardLocalizationProps, ProjectCardDescription } from "../components/Project"
import { Link } from "react-router-dom"
import { useTranslation, Trans } from 'react-i18next';

import SectionTitle from "../components/SectionTitle"


const AcademicProjects = () => {
    const { t } = useTranslation(['academic_projects']);

    const projectNavBarItems: { [key: string]: { src: string, language: string } } = {
        ["ui-widget-library"]: { src: "ui-widget-library/2048.gif", language: "C" },
        ["hot-genre"]: { src: "hot-genre/add-to-cart.gif", language: "PHP" },
        ["schedule-track"]: { src: "schedule-track/schedule.gif", language: "React" },
        ["particles-system"]: { src: "particles/corals.gif", language: "Go" },
        ["network-game"]: { src: "network-race/race.gif", language: "Go" },
    }

    const projectsRepositories: { [key: string]: string } = {
        ["ui-widget-library"]: "https://github.com/Quentin-Chauvelon/Projet-Interface-Graphique",
        ["hot-genre"]: "https://github.com/Quentin-Chauvelon/BUT2_SAE3_Site_Vente",
        ["schedule-track"]: "https://github.com/Quentin-Chauvelon/BUT2_SAE4_API_Site_Application",
        ["particles-system"]: "https://github.com/Quentin-Chauvelon/BUT1_SAE1.1_Particules",
        ["network-game"]: "https://github.com/Quentin-Chauvelon/BUT2_Programmation_Systeme_TD",
    }

    const projectsTags: { [key: string]: string[] } = {
        ["ui-widget-library"]: ["C", "CMake"],
        ["hot-genre"]: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "CodeIgniter", "UML"],
        ["schedule-track"]: ["React", "SQLite", "Kotlin", "HTML", "CSS", "JavaScript", "Prisma", "Hapi", "Swagger", "Chai", "Vite"],
        ["particles-system"]: ["Go", "Ebiten"],
        ["network-game"]: ["Go", "Ebiten"],
        ["portfolio"]: ["React", "TypeScript", "HTML", "Tailwind CSS", "React Three Fiber", "Three.js", "Vite", "Framer Motion", "Figma", "Blender"],
        ["3d-ball-maze"]: ["C#", "Unity 3D", "Trello"],
        ["social-media-simulator"]: ["Lua", "Roblox Studio", "Trello"],
        ["zombie-invasion-survive"]: ["Lua", "Roblox Studio", "Trello"],
        ["reve-island"]: ["Lua", "Roblox Studio", "Trello"]
    }

    const projectsImages: { [key: string]: { id: string, src: string }[] } = {
        ["ui-widget-library"]: [
            { id: "minesweeper", src: "ui-widget-library/minesweeper.gif" },
            { id: "2048", src: "ui-widget-library/2048.gif" },
            { id: "puzzle", src: "ui-widget-library/puzzle.gif" },
            { id: "grid-geometry-manager", src: "ui-widget-library/grid.png" },
            { id: "text-field", src: "ui-widget-library/text-field.gif" },
        ],
        ["hot-genre"]: [
            { id: "account-creation", src: "hot-genre/account-creation.gif" },
            { id: "add-to-cart", src: "hot-genre/add-to-cart.gif" },
            { id: "admin-products-management", src: "hot-genre/admin-products-management.gif" },
            { id: "home-page", src: "hot-genre/home-page.gif" },
            { id: "order", src: "hot-genre/order.gif" },
            { id: "order-summary", src: "hot-genre/order-summary.png" },
            { id: "products", src: "hot-genre/products.png" },
        ],
        ["schedule-track"]: [
            { id: "schedule-view", src: "schedule-track/schedule.gif" },
            { id: "directions", src: "schedule-track/directions.gif" },
            { id: "rooms", src: "schedule-track/rooms.gif" },
            { id: "professors", src: "schedule-track/professors.gif" },
        ],
        ["particles-system"]: [
            { id: "fireworks", src: "particles/fireworks.gif" },
            { id: "corals", src: "particles/corals.gif" },
            { id: "selection-menu", src: "particles/selection-menu.png" },
            { id: "snake", src: "particles/snake.gif" },
            { id: "circle", src: "particles/circle.gif" },
        ],
        ["network-game"]: [
            { id: "players-connection", src: "network-race/players-connection.gif" },
            { id: "runner-selection", src: "network-race/runner-selection.gif" },
            { id: "race", src: "network-race/race.gif" },
        ],
    }

    return (
        <div className="min-h-[100vh]">
            <SectionTitle
                title={t("section-title")}
                topMargin={"mt-24"}
                bottomMargin={"mb-12"}
            />

            <p className="px-8 mb-12 md:px-16 xl:px-32 text-center text-xs md:text-sm xl:text-xs">
                <Trans
                    i18nKey="link-to-academic-projects"
                    ns="academic_projects"
                    components={[<Link to="/personal-projects" className="text-current underline font-normal" />]}
                />
            </p>

            <ProjectNavBar
                items={
                    t<'navbar', { returnObjects: true }, ProjectNavBarItemLocalizationProps[]>("navbar", { returnObjects: true }).map((item) => ({
                        name: item.name,
                        src: projectNavBarItems[item.id].src,
                        language: projectNavBarItems[item.id].language,
                    }
                    ))
                }
            />

            <div id="projects-container" className="flex flex-col items-center gap-8 px-6 mb-12">
                {
                    t<'data', { returnObjects: true }, ProjectCardLocalizationProps[]>("data", { returnObjects: true }).map((project, i) => (
                        <ProjectCard
                            key={i}
                            title={project.title}
                            date={project.date}
                            duration={project.duration}
                            github={projectsRepositories[project.id]}
                            tags={projectsTags[project.id]}
                            images={projectsImages[project.id].map((image) => ({
                                id: image.id,
                                src: image.src,
                                tooltip: project.imagesTooltip.find((tooltip) => tooltip.id === image.id)?.tooltip || ""
                            }))}
                        >
                            <ProjectCardDescription
                                description={project.description}
                            />
                        </ProjectCard>
                    ))
                }
            </div>
        </div>
    )
}

export default AcademicProjects