import SectionTitle from "../components/SectionTitle"
import { ProjectCard, ProjectNavBar, ProjectNavBarItemLocalizationProps, ProjectCardLocalizationProps, ProjectCardDescription } from "../components/Project"
import { Link } from "react-router-dom"
import { useTranslation, Trans } from 'react-i18next';


const PersonalProjects = () => {
    const { t } = useTranslation(['personal_projects']);

    const projectNavBarItems: { [key: string]: { src: string, language: string } } = {
        ["portfolio"]: { src: "portfolio/hero-section-thumbnail.jpg", language: "React" },
        ["3d-ball-maze"]: { src: "3d-ball-maze/main-menu-thumbnail.jpg", language: "C#" },
        ["social-media-simulator"]: { src: "social-media-simulator/start-thumbnail.jpg", language: "Lua" },
        ["zombie-invasion-survive"]: { src: "zombie-invasion-survive/thumbnail-thumbnail.jpg", language: "Lua" },
        ["reve-island"]: { src: "reve-island/thumbnail-thumbnail.jpg", language: "Lua" }
    }

    const projectsRepositories: { [key: string]: string } = {
        ["portfolio"]: "https://github.com/Quentin-Chauvelon/Portfolio",
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

    const projectsImages: { [key: string]: { id: string, src: string, srcTmp?: string }[] } = {
        ["portfolio"]: [
            { id: "hero-section", src: "portfolio/hero-section.jpg" }
        ],
        ["3d-ball-maze"]: [
            { id: "main-menu", src: "3d-ball-maze/main-menu.png", srcTmp: "3d-ball-maze/main-menu-loader.jpg" },
            { id: "gameplay", src: "3d-ball-maze/gameplay.gif", srcTmp: "3d-ball-maze/gameplay-loader.jpg" },
            { id: "maze-deserialization", src: "3d-ball-maze/maze-deserialization.gif", srcTmp: "3d-ball-maze/maze-deserialization-loader.gif" },
            { id: "level-completed", src: "3d-ball-maze/level-completed.gif", srcTmp: "3d-ball-maze/level-completed-loader.gif" },
            { id: "level-failed", src: "3d-ball-maze/level-failed.gif", srcTmp: "3d-ball-maze/level-failed-loader.gif" },
            { id: "skins", src: "3d-ball-maze/skins.gif", srcTmp: "3d-ball-maze/skins-loader.gif" },
        ],
        ["social-media-simulator"]: [
            { id: "start", src: "social-media-simulator/start.gif", srcTmp: "social-media-simulator/start-loader.jpg" },
            { id: "podium", src: "social-media-simulator/podium.gif", srcTmp: "social-media-simulator/podium-loader.jpg" },
            { id: "leaderboards", src: "social-media-simulator/leaderboards.jpg" },
            { id: "quests", src: "social-media-simulator/quests.gif", srcTmp: "social-media-simulator/quests-loader.jpg" },
            { id: "shop", src: "social-media-simulator/shop.jpg" },
        ],
        ["zombie-invasion-survive"]: [
            { id: "thumbnail", src: "zombie-invasion-survive/thumbnail.jpg" },
            { id: "gameplay", src: "zombie-invasion-survive/gameplay.gif", srcTmp: "zombie-invasion-survive/gameplay-loader.jpg" },
            { id: "zombie-pathfinding", src: "zombie-invasion-survive/zombie-pathfinding.gif", srcTmp: "zombie-invasion-survive/zombie-pathfinding-loader.jpg" },
            { id: "party-system", src: "zombie-invasion-survive/party-system.gif", srcTmp: "zombie-invasion-survive/party-system-loader.jpg" },
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

export default PersonalProjects