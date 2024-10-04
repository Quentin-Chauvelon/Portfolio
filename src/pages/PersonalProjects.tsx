import { useState } from "react"
import SectionTitle from "../components/SectionTitle"
import { motion } from "framer-motion"
import { Slide, SlideDirection } from "../components/Animation"


type ProjectTagProps = {
    name: string,
    color: string
}

const ProjectTag = ({ name, color }: ProjectTagProps) => {
    return (
        <h3 className={"w-max px-2 py-0.5 rounded-md text-xs md:text-sm xl:text-xs font-medium md:font-semibold text-[--white] " + color}>{name}</h3>
    )
}


enum Direction {
    Left,
    Right
}

type SwitchImageButtonProps = {
    onClick: () => void,
    direction: Direction
}

const SwitchImageButton = ({ onClick, direction }: SwitchImageButtonProps) => {
    return (
        <button onClick={onClick} className={"absolute flex justify-center aspect-square w-7 md:w-10 xl:w-8 rounded-full top-1/2 -translate-y-1/2 p-1.5 bg-[--gray-700] shadow-lg " + (direction === Direction.Left ? "left-2" : "right-2")}>
            <img src="/src/assets/images/arrow.svg" alt="Arrow" className={"h-full " + (direction === Direction.Left ? "rotate-0 -translate-x-[20%]" : "rotate-180 translate-x-[20%]")} />
        </button>
    )
}

type ImageNumberIndicatorProps = {
    expand: boolean
}

const ImageNumberIndicator = ({ expand }: ImageNumberIndicatorProps) => {
    return (
        <motion.div className={(expand ? "w-6 md:w-9 xl:w-6" : "w-2 md:w-3 xl:w-2") + " flex h-2 md:h-3 xl:h-2 bg-[--gray-700] rounded-[50px]"} layoutId={expand ? "dot_indicator" : ""} />
    )
}


type ProjectCardProps = {
    title: string,
    date: string,
    duration: string,
    description: string,
    tasks: string[],
    github?: string,
    tags: ProjectTagProps[],
    images: string[]
}

const ProjectCard = ({ title, date, duration, description, tasks, github, tags, images }: ProjectCardProps) => {
    const [currentImage, setCurrentImage] = useState(0)

    return (
        <Slide
            direction={SlideDirection.Top}
            styles="relative flex flex-col 2xl:flex-row 2xl:w-[70%] bg-[--white] card-shadow rounded-lg px-5 py-4"
        >
            <div className="flex flex-col gap-2 2xl:w-[55%]">
                <h2 className="text-base md:text-xl xl:text-lg font-bold">{title}</h2>

                <div className="flex flex-col">
                    <h3 className="text-sm md:text-base xl:text-sm font-medium">{date}</h3>
                    <h4 className="text-xs md:text-sm xl:text-xs font-extralight">{duration}</h4>
                </div>

                <p className="mt-2 text-xs md:text-sm xl:text-xs font-extralight leading-5">{description}</p>
                <ul className="ml-4 space-y-2 text-xs md:text-sm xl:text-xs leading-5 font-extralight list-disc">
                    {tasks.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}
                </ul>

                {github &&
                    <a href={github} target="_blank" className="text-2xl">
                        <i className={"fa fa-brands fa-github text-[--gray-700]"} />
                    </a>
                }

                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <ProjectTag
                            key={index}
                            name={tag.name}
                            color={tag.color}
                        />
                    ))}
                </div>
            </div>

            <div className="2xl:absolute 2xl:top-1/2 2xl:-translate-y-1/2 2xl:-right-[15%] 2xl:rotate-3 self-center w-[50%] aspect-video relative mt-4 overflow-hidden rounded-lg card-shadow">
                <img src={"src/assets/images/personal-projects/" + images[currentImage]} alt="" className="w-full h-full object-fill" />

                {images.length > 1 &&
                    <>
                        <SwitchImageButton
                            onClick={() => setCurrentImage((currentImage - 1 + images.length) % images.length)}
                            direction={Direction.Left}
                        />
                        <SwitchImageButton
                            onClick={() => setCurrentImage((currentImage + 1) % images.length)}
                            direction={Direction.Right}
                        />

                        <div className="absolute flex gap-1 md:gap-1.5 xl:gap-1 left-1/2 -translate-x-1/2 bottom-1 md:bottom-2">
                            {images.map((_, index) => (
                                <ImageNumberIndicator
                                    key={index}
                                    expand={index === currentImage}
                                />
                            ))}
                        </div>
                    </>
                }
            </div>
        </Slide>
    )
}


const PersonalProjects = () => {
    return (
        <div className="min-h-[100vh]">
            <SectionTitle
                title="PERSONAL PROJECTS"
                topMargin={"mt-24"}
            />

            <div className="flex flex-col items-center gap-8 px-6">
                <ProjectCard
                    title="Social Media Simulator"
                    date="February 2023 - December 2023"
                    duration="10 months"
                    description="Social Media Simulator is a Roblox RPG game with over 30k plays and a like ratio of 85%. This project has been developed in Lua using the Roblox Studio game engine. As a solo developer on the project, I had to work on all aspects of the game: planning, coding, UI designing, 3D modeling, testing, fixing bugs... which allowed me to learn and improve a lot. During the course of this project, I:"
                    tasks={[
                        "Implemented all mechanics including a data persistence, a quest system, daily rewards, customizations, pets, leaderboards...",
                        "Designed the UI of the game and implemented server/client communication to handle player actions, as well as updating back the UI based on the server's requests",
                        "Implemented cross-server leaderboards",
                        "Implemented in-app purchases (both consumables and non consumables)",
                        "Improved my project management and organization skills",
                    ]}
                    github="https://github.com/Quentin-Chauvelon/Social_Media_Simulator"
                    tags={[
                        { name: "Lua", color: "bg-[#000080]" },
                        { name: "Roblox Studio", color: "bg-[#3fa9f5]" },
                        { name: "Trello", color: "bg-[#ff9f1a]" },
                    ]}
                    images={[
                        "social-media-simulator/podium.gif",
                        "social-media-simulator/leaderboards.png",
                        "social-media-simulator/quests.gif",
                        "social-media-simulator/shop.png",
                        "social-media-simulator/start.gif",
                    ]}
                />
            </div>
        </div>
    )
}

export default PersonalProjects