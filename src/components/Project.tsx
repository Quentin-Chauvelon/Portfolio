import { useState } from "react"
import { motion } from "framer-motion"
import { Trans, useTranslation } from 'react-i18next';

import { Slide, SlideDirection } from "../components/Animation"
import PlaceholderImage from "../components/PlaceholderImage"

import arrow from "../assets/images/arrow.svg"


export type ProjectNavBarItemLocalizationProps = {
    id: string,
    name: string
}


type ProjectNavBarItem = {
    name: string,
    src: string,
    language: string,
}

type ProjectNavBarProps = {
    items: ProjectNavBarItem[],
}

export const ProjectNavBar = ({ items }: ProjectNavBarProps) => {
    const { t } = useTranslation(['project_navbar']);

    return (
        <>
            <p className="hidden md:block mb-2 px-8 text-center text-xs md:text-sm xl:text-xs underline">{t("jump-to-project")}</p>

            <div className="hidden md:flex justify-evenly items-center mb-12">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col gap-1 items-center w-[16%]">
                        <h3 className="text-xs md:text-sm xl:text-xs font-semibold text-center">{item.name}</h3>
                        <PlaceholderImage
                            src={"/projects/" + item.src}
                            alt={item.name}
                            styles="rounded-md cursor-pointer"
                            onClickCallback={() => {
                                document.getElementById("projects-container")?.children[index].scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'center',
                                    inline: 'center'
                                })
                            }}
                        />
                        <ProjectTag name={item.language} color={tagsList[item.language]} />
                    </div>
                ))}
            </div>
        </>
    )
}


const tagsList: { [key: string]: string } = {
    "React": "bg-[#61dafb]",
    "TypeScript": "bg-[#0376c6]",
    "HTML": "bg-[#e96228]",
    "Tailwind CSS": "bg-[#36b7f0]",
    "React Three Fiber": "bg-[#367cff]",
    "Three.js": "bg-[#000000]",
    "Vite": "bg-[#8e68f7]",
    "Framer Motion": "bg-[#e800b5]",
    "Figma": "bg-[#09c97f]",
    "Blender": "bg-[#e37200]",
    "C#": "bg-[#9b4993]",
    "Unity 3D": "bg-[#110b09]",
    "Lua": "bg-[#000080]",
    "Trello": "bg-[#ff9f1a]",
    "Roblox Studio": "bg-[#3fa9f5]",
    "Go": "bg-[#00add8]",
    "Ebiten": "bg-[#d4531f]",
    "C": "bg-[#6195cb]",
    "CMake": "bg-[#3ca92a]",
    "PHP": "bg-[#7377ad]",
    "CSS": "bg-[#2862e9]",
    "JavaScript": "bg-[#efd81d]",
    "MySQL": "bg-[#dd8a00]",
    "CodeIgniter": "bg-[#dd8a00]",
    "UML": "bg-[#432d7b]",
    "SQLite": "bg-[#53a8da]",
    "Kotlin": "bg-[#d75d3a]",
    "Prisma": "bg-[#02344c]",
    "Hapi": "bg-[#74747c]",
    "Swagger": "bg-[#81e32c]",
    "Chai": "bg-[#f7eccb]",
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


export type ProjectCardImageTooltipLocalizationProps = {
    id: string,
    tooltip: string
}

export type ProjectCardLocalizationProps = {
    id: string,
    title: string,
    date: string,
    duration: string,
    imagesTooltip: ProjectCardImageTooltipLocalizationProps[],
    description: (string | string[])[]
}


type ProjectCardProps = {
    title: string,
    date: string,
    duration?: string,
    github?: string,
    id?: string,
    tags: string[],
    images: ImageProps[],
    children: JSX.Element
}

export const ProjectCard = ({ title, date, duration, github, tags, images, children }: ProjectCardProps) => {
    const [currentImage, setCurrentImage] = useState(0);

    const handleImageChange = (direction: Direction) => {
        if (direction === Direction.Left) {
            setCurrentImage((currentImage - 1 + images.length) % images.length);
        } else {
            setCurrentImage((currentImage + 1) % images.length);
        }
    }

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
                    {tags.map((tag, i) => (
                        <ProjectTag key={i} name={tag} color={tagsList[tag]} />
                    ))}
                </div>
            </div>

            <div className="2xl:absolute 2xl:top-1/2 2xl:-translate-y-1/2 2xl:-right-[15%] 2xl:rotate-3 self-center w-4/5 md:w-3/5 2xl:w-[50%] aspect-video relative mt-4 mb-4 md:mb-6 xl:mb-4 2xl:mt-0 2xl:mb-0 rounded-lg card-shadow bg-[--gray-400]">
                <PlaceholderImage
                    src={"/projects/" + images[currentImage].src}
                    alt={title}
                    styles={"w-full h-full object-fill " + (images[currentImage].tooltip ? "rounded-t-lg" : "rounded-lg")}
                />
                {/* <img src={"/projects/" + images[currentImage].src} alt="" className={"w-full h-full object-fill " + (images[currentImage].tooltip ? "rounded-t-lg" : "rounded-lg")} /> */}

                {images.length > 1 &&
                    <>
                        <SwitchImageButton
                        onClick={() => handleImageChange(Direction.Left)}
                            direction={Direction.Left}
                        />
                        <SwitchImageButton
                        onClick={() => handleImageChange(Direction.Right)}
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
    children?: string
}


export const ProjectCardBodyParagraph = ({ marginTop, marginBottom, children }: ProjectCardBodyParagraphProps & ProjectCardBodyProps) => {
    return (
        <p className={(marginTop ? "mt-3 " : "") + (marginBottom ? " mb-3 " : "") + " space-y-2 text-xs md:text-base xl:text-xs leading-5 font-extralight list-disc"}>
            {children}
        </p>
    )
}


type ProjectCardBodyListProps = {
    children?: string[]
}

export const ProjectCardBodyList = ({ marginTop, marginBottom, children }: ProjectCardBodyListProps & ProjectCardBodyProps) => {
    return (
        <ul className={(marginTop ? "mt-3 " : "") + (marginBottom ? " mb-3 " : "") + " ml-4 space-y-2 text-xs md:text-base xl:text-xs leading-5 font-extralight list-disc"}>
            {children && children.map((desc, index) => (
                <li key={index}>{desc}</li>
            ))}
        </ul>
    )
}


type ProjectCardDescriptionProps = {
    description: (string | string[])[]
}


export const ProjectCardDescription = ({ description }: ProjectCardDescriptionProps) => {
    return (
        <>
            {
                description.map((descriptionItem, i) => (
                    // If the item is a string, then it is a paragraph, otherwise it is a list
                    (typeof descriptionItem === "string")
                        ? (
                            // The translated paragraph is wrapped in one of the components below in the json file to add the proper margins easily
                            <Trans key={i} i18nKey={descriptionItem} components={{
                                paragraph: <ProjectCardBodyParagraph />,
                                paragraph_t: <ProjectCardBodyParagraph marginTop />,
                                paragraph_b: <ProjectCardBodyParagraph marginBottom />,
                                paragraph_t_b: <ProjectCardBodyParagraph marginTop marginBottom />,
                            }} />
                        )
                        : (
                            // The first element of the array describes the margin
                            <ProjectCardBodyList
                                key={i}
                                marginTop={descriptionItem[0].includes("_t") ? true : false}
                                marginBottom={descriptionItem[0].includes("_b") ? true : false}
                            >
                                {/* The other elements are the list items that can be passed as children to the ProjectCardBodyList component */}
                                {descriptionItem.slice(1)}
                            </ProjectCardBodyList>
                        )
                ))
            }
        </>
    )
}