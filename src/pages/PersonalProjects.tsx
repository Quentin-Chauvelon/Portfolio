import SectionTitle from "../components/SectionTitle"
import { ProjectCard, ProjectCardBodyList, ProjectCardBodyParagraph, ProjectNavBar } from "../components/Project"
import { Link } from "react-router-dom"


const PersonalProjects = () => {
    return (
        <div className="min-h-[100vh]">
            <SectionTitle
                title="PERSONAL PROJECTS"
                topMargin={"mt-24"}
                bottomMargin={"mb-12"}
            />

            <p className="px-8 md:px-16 xl:px-32 text-center text-xs md:text-sm xl:text-xs">
                Since I started programming, it has really become a passion of mine. That's why I spend a lot of my free time working on personal projects. So far, I have mostly worked on indie game development projects but I'm interested in all kinds of projects.
            </p>

            <p className="mt-1 mb-12 px-8 text-center text-xs md:text-sm xl:text-xs">If you want to see other projects I have worked on, you can check my <Link to="/academic-projects" className="text-current underline font-normal">academic projects</Link>.</p>

            <ProjectNavBar
                items={[
                    { name: "Portfolio", src: "portfolio/hero-section.png", language: "React", languageColor: "bg-[#61dafb]" },
                    { name: "Casual mobile and web game", src: "3d-ball-maze/game.png", language: "C#", languageColor: "bg-[#9b4993]" },
                    { name: "RPG game", src: "social-media-simulator/start.gif", language: "Lua", languageColor: "bg-[#000080]" },
                    { name: "Survival game", src: "zombie-invasion-survive/thumbnail.png", language: "Lua", languageColor: "bg-[#000080]" },
                    { name: "RPG game", src: "reve-island/thumbnail.jpg", language: "Lua", languageColor: "bg-[#000080]" }
                ]}
            />

            <div id="projects-container" className="flex flex-col items-center gap-8 px-6 mb-12">
                <ProjectCard
                    title="Portfolio"
                    date="September 2024 - Present"
                    tags={[
                        { name: "React", color: "bg-[#61dafb]" },
                        { name: "HTML", color: "bg-[#e96228]" },
                        { name: "Tailwind CSS", color: "bg-[#36b7f0]" },
                        { name: "TypeScript", color: "bg-[#0376c6]" },
                        { name: "React Three Fiber", color: "bg-[#367cff]" },
                        { name: "Three.js", color: "bg-[#000000]" },
                        { name: "Vite", color: "bg-[#8e68f7]" },
                        { name: "Framer Motion", color: "bg-[#e800b5]" },
                        { name: "Figma", color: "bg-[#09c97f]" },
                        { name: "Blender", color: "bg-[#e37200]" },
                    ]}
                    images={[
                        { src: "portfolio/hero-section.png" },
                    ]}
                >
                    <>
                        <ProjectCardBodyParagraph
                            text="This is the portfolio website I created to showcase my projects and skills."
                            marginTop
                        />

                        <ProjectCardBodyParagraph
                            text="Since I'm not a designer, I knew I wouldn't be able to stand out with a basic portfolio. After seeing some other 3D portfolios, which I think looked really good, I decided to create one myself."
                            marginTop
                        />

                        <ProjectCardBodyParagraph
                            text="This has been a very interesting project since it has allowed me to improve my web development skills as well as learn new technologies such as 3D rendering in the browser using React Three Fiber (a React renderer for Three.js) and frameworks/libraries like Tailwind CSS or Framer Motion."
                            marginTop
                            marginBottom
                        />
                    </>
                </ProjectCard>

                <ProjectCard
                    title="3D Ball Maze"
                    date="December 2023 - Present"
                    github="https://github.com/Quentin-Chauvelon/3D-Ball-Maze"
                    tags={[
                        { name: "C#", color: "bg-[#9b4993]" },
                        { name: "Unity 3D", color: "bg-[#110b09]" },
                        { name: "Trello", color: "bg-[#ff9f1a]" },
                    ]}
                    images={[
                        { src: "3d-ball-maze/game.png", tooltip: "Prototype of the game" },
                    ]}
                >
                    <>
                        <ProjectCardBodyParagraph
                            text="3D Ball Maze is an upcoming casual mobile and web game developed in C# using the Unity 3D game engine. As a solo developer on this project, I must work on all the aspects of the game: planning, coding, UI designing, 3D modeling, testing, fixing bugs... which allowed me to learn and improve a lot."
                            marginTop
                        />

                        <ProjectCardBodyList
                            listItems={[
                                "Implemented main gameplay mechanics (maze movement, multiple obstacles, level completion, level fail, unlocking levels...)",
                                "Implemented data persistence both locally and on the cloud to save the player's progress",
                                "Implemented serialization/deserialization to load/save levels from/to JSON files",
                                "Implemented player customization (ball skins)",
                                "Implemented automatic level fetching from the cloud",
                                "Implemented daily levels updating automatically every day",
                                "Implemented daily rewards synchronized with the cloud",
                                "Designed and implemented a responsive UI for the game",
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
                        { src: "social-media-simulator/podium.gif", tooltip: "Cross-server leaderboards podium" },
                        { src: "social-media-simulator/leaderboards.png", tooltip: "Cross-server leaderboards" },
                        { src: "social-media-simulator/quests.gif", tooltip: "Quest system" },
                        { src: "social-media-simulator/shop.png", tooltip: "In-app purchases (consumables and non-consumables" },
                        { src: "social-media-simulator/start.gif", tooltip: "Gameplay" },
                    ]}
                >
                    <>
                        <ProjectCardBodyParagraph
                            text="Social Media Simulator is a Roblox RPG game with over 30k plays and a like ratio of 85%. This project has been developed in Lua using the Roblox Studio game engine. As a solo developer on the project, I had to work on all aspects of the game: planning, coding, UI designing, 3D modeling, testing, fixing bugs... which allowed me to learn and improve a lot."
                            marginTop
                        />

                        <ProjectCardBodyList
                            listItems={[
                                "Implemented all mechanics including data persistence, a quest system, daily rewards, customizations, pets, leaderboards...",
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
                    title="Zombie Invasion: Survive"
                    date="May 2022 - September 2022"
                    duration="4 months"
                    github="https://github.com/Quentin-Chauvelon/Zombie_Invasion_Survive"
                    tags={[
                        { name: "Lua", color: "bg-[#000080]" },
                        { name: "Roblox Studio", color: "bg-[#3fa9f5]" },
                        { name: "Trello", color: "bg-[#ff9f1a]" },
                    ]}
                    images={[
                        { src: "zombie-invasion-survive/thumbnail.png", tooltip: "" },
                        { src: "zombie-invasion-survive/zombie-pathfinding.gif", tooltip: "Zombie pathfinding" },
                        { src: "zombie-invasion-survive/party-system.gif", tooltip: "Party system" },
                        { src: "zombie-invasion-survive/gameplay.gif", tooltip: "Gameplay" },
                    ]}
                >
                    <>
                        <ProjectCardBodyParagraph
                            text="Zombie Invasion: Survive is a Roblox survival game. This project has been developed in Lua using the Roblox Studio game engine. As a solo developer on the project, I had to work on all aspects of the game: planning, coding, UI designing, 3D modeling, testing, fixing bugs... which allowed me to learn and improve a lot."
                            marginTop
                        />

                        <ProjectCardBodyList
                            listItems={[
                                "Implemented all mechanics including data persistence, zombies AI, inventory system, a weapon system, a round system, various upgrades and abilities...",
                                "Designed the UI of the game and implemented server/client communication to handle player actions, as well as updating back the UI based on the server's requests",
                                "Implemented cross-server leaderboards",
                                "Implemented in-app purchases (both consumables and non consumables)",
                                "Implemented a cross-server party system to play with friends and other players",
                            ]}
                        />

                        <ProjectCardBodyParagraph
                            text="This project was really interesting since I faced a few challenges:"
                            marginTop
                        />

                        <ProjectCardBodyList
                            listItems={[
                                "Creating a pathfinding system for the zombies that would be able to handle up to a few hundred zombies at the same time in a complex scene. Though not perfect, a few optimizations allowed me to make it work smoothly",
                                "Implementing a cross-server party system (inviting players, waiting for their response, synchronizing the UI between servers, teleporting players to the same server...)",
                                "Balancing the game. Although not coding-related, balancing a game is key and I realized how hard it is to make the waves challenging but not impossible as there are many factors to tweak (zombies (spawn rate, health, speed, damage...), weapons (damage, fire rate, reload time...), player (health, speed, defense, damage, upgrades, abilities...) and more)",
                            ]}
                            marginBottom
                        />
                    </>
                </ProjectCard>

                <ProjectCard
                    title="Reve Island"
                    date="April 2019 - May 2022"
                    duration="3 years"
                    github="https://github.com/Quentin-Chauvelon/Reve_Island"
                    tags={[
                        { name: "Lua", color: "bg-[#000080]" },
                        { name: "Roblox Studio", color: "bg-[#3fa9f5]" },
                        { name: "Trello", color: "bg-[#ff9f1a]" },
                    ]}
                    images={[
                        { src: "reve-island/thumbnail.jpg" },
                        { src: "reve-island/thumbnail-2.jpg" },
                        { src: "reve-island/thumbnail-3.jpg" },
                        { src: "reve-island/thumbnail-4.jpg" },
                    ]}
                >
                    <>
                        <ProjectCardBodyParagraph
                            text="Reve Island is a Roblox RPG game. This project has been developed in Lua using the Roblox Studio game engine. As a solo developer on the project, I had to work on all aspects of the game: planning, coding, UI designing, 3D modeling, testing, fixing bugs... which allowed me to learn and improve a lot."
                            marginTop
                        />

                        <ProjectCardBodyList
                            listItems={[
                                "Implemented all mechanics including data persistence, jobs/tasks system, leveling system, daily rewards, customizations...",
                                "Designed the UI of the game and implemented server/client communication to handle player actions, as well as updating back the UI based on the server's requests",
                                "Implemented cross-server leaderboards",
                                "Implemented in-app purchases (both consumables and non consumables)",
                            ]}
                        />

                        <ProjectCardBodyParagraph
                            text="This was my first project of this scale and although it was really interesting, it was way too ambitious."
                            marginTop
                            marginBottom
                        />
                    </>
                </ProjectCard>
            </div>
        </div>
    )
}

export default PersonalProjects