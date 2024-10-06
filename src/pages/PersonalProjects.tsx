import SectionTitle from "../components/SectionTitle"
import { ProjectCard, ProjectCardBodyList, ProjectCardBodyParagraph } from "../components/Project"




const PersonalProjects = () => {
    return (
        <div className="min-h-[100vh]">
            <SectionTitle
                title="PERSONAL PROJECTS"
                topMargin={"mt-24"}
            />

            <div className="flex flex-col items-center gap-8 px-6">
                <ProjectCard
                    title="3D Ball Maze"
                    date="December 2023 - Present"
                    github="https://github.com/Quentin-Chauvelon/Social_Media_Simulator"
                    tags={[
                        { name: "Lua", color: "bg-[#000080]" },
                        { name: "Roblox Studio", color: "bg-[#3fa9f5]" },
                        { name: "Trello", color: "bg-[#ff9f1a]" },
                    ]}
                    images={[
                        { src: "social-media-simulator/podium.gif", tooltip: "" },
                        { src: "social-media-simulator/leaderboards.png", tooltip: "" },
                        { src: "social-media-simulator/quests.gif", tooltip: "" },
                        { src: "social-media-simulator/shop.png", tooltip: "" },
                        { src: "social-media-simulator/start.gif", tooltip: "" },
                    ]}
                >
                    <>
                        <ProjectCardBodyParagraph
                            text="Social Media Simulator is a Roblox RPG game with over 30k plays and a like ratio of 85%. This project has been developed in Lua using the Roblox Studio game engine. As a solo developer on the project, I had to work on all aspects of the game: planning, coding, UI designing, 3D modeling, testing, fixing bugs... which allowed me to learn and improve a lot."
                            marginTop
                        />

                        <ProjectCardBodyList
                            listItems={[
                                "Implemented all mechanics including a data persistence, a quest system, daily rewards, customizations, pets, leaderboards...",
                                "Designed the UI of the game and implemented server/client communication to handle player actions, as well as updating back the UI based on the server's requests",
                                "Implemented cross-server leaderboards",
                                "Implemented in-app purchases (both consumables and non consumables)",
                                "Improved my project management and organization skills"
                            ]}
                            marginBottom
                        />
                    </>
                </ProjectCard>

                <ProjectCard
                    title="Social Media Simulator"
                    date="February 2023 - December 2023"
                    duration="10 months"
                    github="https://github.com/Quentin-Chauvelon/Social_Media_Simulator"
                    tags={[
                        { name: "Lua", color: "bg-[#000080]" },
                        { name: "Roblox Studio", color: "bg-[#3fa9f5]" },
                        { name: "Trello", color: "bg-[#ff9f1a]" },
                    ]}
                    images={[
                        { src: "social-media-simulator/shop.png", tooltip: "" },
                    ]}
                >
                    <>
                        <ProjectCardBodyParagraph
                            text="Social Media Simulator is a Roblox RPG game with over 30k plays and a like ratio of 85%. This project has been developed in Lua using the Roblox Studio game engine. As a solo developer on the project, I had to work on all aspects of the game: planning, coding, UI designing, 3D modeling, testing, fixing bugs... which allowed me to learn and improve a lot."
                            marginTop
                        />

                        <ProjectCardBodyList
                            listItems={[
                                "Implemented all mechanics including a data persistence, a quest system, daily rewards, customizations, pets, leaderboards...",
                                "Designed the UI of the game and implemented server/client communication to handle player actions, as well as updating back the UI based on the server's requests",
                                "Implemented cross-server leaderboards",
                                "Implemented in-app purchases (both consumables and non consumables)",
                                "Improved my project management and organization skills"
                            ]}
                            marginBottom
                        />
                    </>
                </ProjectCard>
            </div>
        </div>
    )
}

export default PersonalProjects