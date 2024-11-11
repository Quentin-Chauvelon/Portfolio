import { ProjectCard, ProjectNavBar, ProjectNavBarItemLocalizationProps, ProjectCardLocalizationProps, ProjectCardDescription } from "../components/Project"
import { Link } from "react-router-dom"
import { useTranslation, Trans } from 'react-i18next';

import SectionTitle from "../components/SectionTitle"


const AcademicProjects = () => {
    const { t } = useTranslation(['academic_projects']);

    const projectNavBarItems: { [key: string]: { src: string, language: string } } = {
        ["ui-widget-library"]: { src: "ui-widget-library/2048-thumbnail.jpg", language: "C" },
        ["hot-genre"]: { src: "hot-genre/add-to-cart-thumbnail.jpg", language: "PHP" },
        ["schedule-track"]: { src: "schedule-track/schedule-thumbnail.jpg", language: "React" },
        ["particles-system"]: { src: "particles/corals-thumbnail.jpg", language: "Go" },
        ["network-game"]: { src: "network-race/race-thumbnail.jpg", language: "Go" },
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

    const projectsImages: { [key: string]: { id: string, src: string, srcTmp?: string }[] } = {
        ["ui-widget-library"]: [
            { id: "minesweeper", src: "ui-widget-library/minesweeper.gif", srcTmp: "ui-widget-library/minesweeper-loader.jpg" },
            { id: "2048", src: "ui-widget-library/2048.gif", srcTmp: "ui-widget-library/2048-loader.jpg" },
            { id: "puzzle", src: "ui-widget-library/puzzle.gif", srcTmp: "ui-widget-library/puzzle-loader.jpg" },
            { id: "grid-geometry-manager", src: "ui-widget-library/grid.jpg" },
            { id: "text-field", src: "ui-widget-library/text-field.gif", srcTmp: "ui-widget-library/text-field-loader.jpg" },
        ],
        ["hot-genre"]: [
            { id: "account-creation", src: "hot-genre/account-creation.gif", srcTmp: "hot-genre/account-creation-loader.jpg" },
            { id: "add-to-cart", src: "hot-genre/add-to-cart.gif", srcTmp: "hot-genre/add-to-cart-loader.jpg" },
            { id: "admin-products-management", src: "hot-genre/admin-products-management.gif", srcTmp: "hot-genre/admin-products-management-loader.jpg" },
            { id: "home-page", src: "hot-genre/home-page.gif", srcTmp: "hot-genre/home-page-loader.jpg" },
            { id: "order", src: "hot-genre/order.gif", srcTmp: "hot-genre/order-loader.jpg" },
            { id: "order-summary", src: "hot-genre/order-summary.jpg" },
            { id: "products", src: "hot-genre/products.jpg" },
        ],
        ["schedule-track"]: [
            { id: "schedule-view", src: "schedule-track/schedule.gif", srcTmp: "schedule-track/schedule-loader.jpg" },
            { id: "directions", src: "schedule-track/directions.gif", srcTmp: "schedule-track/directions-loader.jpg" },
            { id: "rooms", src: "schedule-track/rooms.gif", srcTmp: "schedule-track/rooms-loader.jpg" },
            { id: "professors", src: "schedule-track/professors.gif", srcTmp: "schedule-track/professors-loader.jpg" },
        ],
        ["particles-system"]: [
            { id: "fireworks", src: "particles/fireworks.gif", srcTmp: "particles/fireworks-loader.jpg" },
            { id: "corals", src: "particles/corals.gif", srcTmp: "particles/corals-loader.jpg" },
            { id: "selection-menu", src: "particles/selection-menu.jpg" },
            { id: "snake", src: "particles/snake.gif", srcTmp: "particles/snake-loader.jpg" },
            { id: "circle", src: "particles/circle.gif", srcTmp: "particles/circle-loader.jpg" },
        ],
        ["network-game"]: [
            { id: "race", src: "network-race/race.gif", srcTmp: "network-race/race-loader.jpg" },
            { id: "players-connection", src: "network-race/players-connection.gif", srcTmp: "network-race/players-connection-loader.jpg" },
            { id: "runner-selection", src: "network-race/runner-selection.gif", srcTmp: "network-race/runner-selection-loader.jpg" },
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
                                srcTmp: image.srcTmp,
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