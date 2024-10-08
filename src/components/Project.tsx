import { useState } from "react"
import { motion } from "framer-motion"

import { Slide, SlideDirection } from "../components/Animation"

import arrow from "../assets/images/arrow.svg"


type ProjectNavBarItem = {
    name: string,
    src: string,
    language: string,
    languageColor: string
}

type ProjectNavBarProps = {
    items: ProjectNavBarItem[],
}

export const ProjectNavBar = ({ items }: ProjectNavBarProps) => {
    return (
        <>
            <p className="hidden md:block mb-2 px-8 text-center text-xs md:text-sm xl:text-xs underline">Jump to project:</p>

            <div className="hidden md:flex justify-evenly items-center mb-12">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col gap-1 items-center w-[16%]">
                        <h3 className="text-xs md:text-sm xl:text-xs font-semibold">{item.name}</h3>
                        <img src={"/projects/" + item.src} alt={item.name} className="rounded-md cursor-pointer" onClick={() => {
                            document.getElementById("projects-container")?.children[index].scrollIntoView({
                                behavior: 'smooth',
                                block: 'center',
                                inline: 'center'
                            })
                        }} />
                        <ProjectTag name={item.language} color={item.languageColor} />
                    </div>
                ))}
            </div>
        </>
    )
}


type ProjectTagProps = {
    name: string,
    color: string
}

const ProjectTag = ({ name, color }: ProjectTagProps) => {
    return (
        <h3 className={"w-max px-2 py-0.5 rounded-md text-xs md:text-sm xl:text-xs font-medium md:font-semibold text-[--white] dark:text-[--gray-700] " + color}>{name}</h3>
    )
}


enum Direction {
    Left,
    Right
}

type ImageProps = {
    src: string,
    tooltip?: string
}

type SwitchImageButtonProps = {
    onClick: () => void,
    direction: Direction
}

const SwitchImageButton = ({ onClick, direction }: SwitchImageButtonProps) => {
    return (
        <button onClick={onClick} className={"absolute flex justify-center aspect-square w-5 md:w-10 xl:w-8 rounded-full top-1/2 -translate-y-1/2 p-1.5 bg-[--gray-700] shadow-lg " + (direction === Direction.Left ? "left-2" : "right-2")}>
            {/* <img src="/src/assets/images/arrow.svg" alt="Arrow" className={"h-full " + (direction === Direction.Left ? "rotate-0 -translate-x-[20%]" : "rotate-180 translate-x-[20%]")} /> */}
            <img src={arrow} alt="Arrow" className={"h-full " + (direction === Direction.Left ? "rotate-0 -translate-x-[20%]" : "rotate-180 translate-x-[20%]")} />
        </button>
    )
}


type ImageNumberIndicatorProps = {
    expand: boolean
}

const ImageNumberIndicator = ({ expand }: ImageNumberIndicatorProps) => {
    return (
        <motion.div className={(expand ? "w-3 md:w-9 xl:w-[1.125rem]" : "w-1 md:w-3 xl:w-1.5") + " flex h-1 md:h-3 xl:h-1.5 bg-[--gray-700] rounded-[50px]"} layoutId={expand ? "dot_indicator" : ""} />
    )
}


type ProjectCardProps = {
    title: string,
    date: string,
    duration?: string,
    github?: string,
    id?: string,
    tags: ProjectTagProps[],
    images: ImageProps[],
    children: JSX.Element
}

export const ProjectCard = ({ title, date, duration, github, tags, images, children }: ProjectCardProps) => {
    const [currentImage, setCurrentImage] = useState(0)

    return (
        <Slide
            direction={SlideDirection.Top}
            styles="relative flex flex-col 2xl:flex-row 2xl:w-[70%] bg-[--white] card-shadow rounded-lg px-5 py-4"
            id="project-card"
        >
            <div className="relative flex flex-col gap-2 2xl:w-[55%]">
                <h2 className="text-base md:text-xl xl:text-lg font-bold">{title}</h2>

                <div className="flex flex-col">
                    <h3 className="text-sm md:text-base xl:text-sm font-medium">{date}</h3>

                    {duration &&
                        <h4 className="text-xs md:text-sm xl:text-xs font-extralight">{duration}</h4>
                    }
                </div>

                {children}

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

            <div className="2xl:absolute 2xl:top-1/2 2xl:-translate-y-1/2 2xl:-right-[15%] 2xl:rotate-3 self-center w-4/5 md:w-3/5 2xl:w-[50%] aspect-video relative mt-4 mb-4 md:mb-6 xl:mb-4 2xl:mt-0 2xl:mb-0 rounded-lg card-shadow bg-[--gray-400]">
                <img src={"/projects/" + images[currentImage].src} alt="" className={"w-full h-full object-fill " + (images[currentImage].tooltip ? "rounded-t-lg" : "rounded-lg")} />

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

                    <div className={"absolute flex gap-1 md:gap-1.5 xl:gap-1 left-1/2 -translate-x-1/2 " + (images[currentImage].tooltip ? "bottom-1 md:bottom-2 2xl:bottom-7" : "bottom-1 md:bottom-2")}>
                            {images.map((_, index) => (
                                <ImageNumberIndicator
                                    key={index}
                                    expand={index === currentImage}
                                />
                            ))}
                        </div>
                    </>
                }

                {images[currentImage].tooltip &&
                    <div className="w-full bg-[--white] p-0.5 rounded-b-lg card-shadow">
                        <p className="text-center text-xs md:text-base xl:text-xs font-extralight text-nowrap text-ellipsis overflow-hidden"> {images[currentImage].tooltip}</p>
                    </div>
                }
            </div>

            {github
                ? <a href={github} target="_blank" className="absolute top-2 right-4 text-2xl md:text-4xl xl:text-3xl">
                    <i className={"fa fa-brands fa-github text-[--gray-700]"} />
                </a>
                : <></>
            }
        </Slide>
    )
}


type ProjectCardBodyProps = {
    marginTop?: boolean
    marginBottom?: boolean
}


type ProjectCardBodyParagraphProps = {
    text: string
}


export const ProjectCardBodyParagraph = ({ text, marginTop, marginBottom }: ProjectCardBodyParagraphProps & ProjectCardBodyProps) => {
    return (
        <p className={(marginTop ? "mt-3 " : "") + (marginBottom ? " mb-3 " : "") + " space-y-2 text-xs md:text-base xl:text-xs leading-5 font-extralight list-disc"}>{text}</p>
    )
}


type ProjectCardBodyListProps = {
    listItems: string[]
}

export const ProjectCardBodyList = ({ listItems, marginTop, marginBottom }: ProjectCardBodyListProps & ProjectCardBodyProps) => {
    return (
        <ul className={(marginTop ? "mt-3 " : "") + (marginBottom ? " mb-3 " : "") + " ml-4 space-y-2 text-xs md:text-base xl:text-xs leading-5 font-extralight list-disc"}>
            {listItems.map((desc, index) => (
                <li key={index}>{desc}</li>
            ))}
        </ul>
    )
}