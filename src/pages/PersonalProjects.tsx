import SectionTitle from "../components/SectionTitle"
import { ProjectCard, ProjectNavBar, ProjectNavBarItemLocalizationProps, ProjectCardLocalizationProps, ProjectCardDescription } from "../components/Project"
import { Link } from "react-router-dom"
import { useTranslation, Trans } from 'react-i18next';


const PersonalProjects = () => {
    const { t } = useTranslation(['personal_projects']);

    const projectNavBarItems: { [key: string]: { src: string, language: string } } = {
        ["portfolio"]: { src: "portfolio/hero-section.png", language: "React" },
        ["3d-ball-maze"]: { src: "3d-ball-maze/game.png", language: "C#" },
        ["social-media-simulator"]: { src: "social-media-simulator/start.gif", language: "Lua" },
        ["zombie-invasion-survive"]: { src: "zombie-invasion-survive/thumbnail.png", language: "Lua" },
        ["reve-island"]: { src: "reve-island/thumbnail.jpg", language: "Lua" }
    }

    const projectsRepositories: { [key: string]: string } = {
        ["portfolio"]: "",
        ["3d-ball-maze"]: "https://github.com/Quentin-Chauvelon/3D-Ball-Maze",
        ["social-media-simulator"]: "https://github.com/Quentin-Chauvelon/Social_Media_Simulator",
        ["zombie-invasion-survive"]: "https://github.com/Quentin-Chauvelon/Zombie_Invasion_Survive",
        ["reve-island"]: "https://github.com/Quentin-Chauvelon/Reve_Island"
    }

    const projectsTags: { [key: string]: string[] } = {
        ["portfolio"]: ["React", "TypeScript", "HTML", "Tailwind CSS", "React Three Fiber", "Three.js", "Vite", "Framer Motion", "Figma", "Blender"],
        ["3d-ball-maze"]: ["C#", "Unity 3D", "Trello"],
        ["social-media-simulator"]: ["Lua", "Roblox Studio", "Trello"],
        ["zombie-invasion-survive"]: ["Lua", "Roblox Studio", "Trello"],
        ["reve-island"]: ["Lua", "Roblox Studio", "Trello"]
    }

    const projectsImages: { [key: string]: { id: string, src: string }[] } = {
        ["portfolio"]: [
            { id: "hero-section", src: "portfolio/hero-section.png" }
        ],
        ["3d-ball-maze"]: [
            { id: "prototype", src: "3d-ball-maze/game.png" }
        ],
        ["social-media-simulator"]: [
            { id: "podium", src: "social-media-simulator/podium.gif" },
            { id: "leaderboards", src: "social-media-simulator/leaderboards.png" },
            { id: "quests", src: "social-media-simulator/quests.gif" },
            { id: "shop", src: "social-media-simulator/shop.png" },
            { id: "start", src: "social-media-simulator/start.gif" },
        ],
        ["zombie-invasion-survive"]: [
            { id: "thumbnail", src: "zombie-invasion-survive/thumbnail.png" },
            { id: "zombie-pathfinding", src: "zombie-invasion-survive/zombie-pathfinding.gif" },
            { id: "party-system", src: "zombie-invasion-survive/party-system.gif" },
            { id: "gameplay", src: "zombie-invasion-survive/gameplay.gif" },
        ],
        ["reve-island"]: [
            { id: "thumbnail", src: "reve-island/thumbnail.jpg" },
            { id: "thumbnail-2", src: "reve-island/thumbnail-2.jpg" },
            { id: "thumbnail-3", src: "reve-island/thumbnail-3.jpg" },
            { id: "thumbnail-4", src: "reve-island/thumbnail-4.jpg" },
        ]
    }

    return (
        <div className="min-h-[100vh]">
            <SectionTitle
                title={t("section-title")}
                topMargin={"mt-24"}
                bottomMargin={"mb-12"}
            />

            <p className="px-8 md:px-16 xl:px-32 text-center text-xs md:text-sm xl:text-xs">
                {t("introduction")}
            </p>

            <p className="mt-1 mb-12 px-8 text-center text-xs md:text-sm xl:text-xs">
                <Trans
                    i18nKey="link-to-academic-projects"
                    ns="personal_projects"
                    components={[<Link to="/academic-projects" className="text-current underline font-normal" />]}
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

export default PersonalProjects