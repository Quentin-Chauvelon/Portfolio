import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faCertificate, faCode, faComputer, faDatabase, faGlobe } from "@fortawesome/free-solid-svg-icons";

import { AnimateProperty, Slide, SlideDirection } from "../components/Animation";
import SectionTitle from "../components/SectionTitle";
import SkillsList from "../components/SkillsList";

import "/src/assets/styles/about.css"

import picture1 from "/src/assets/images/picture-1.png"
import picture2 from "/src/assets/images/picture-2.png"
import bryceHanna from "../assets/images/bryce_hanna.png"
import abigailBloom from "../assets/images/abigail_bloom.png"
import gameDevelopment from "../assets/images/hobbies/game-development.svg"
import book from "../assets/images/hobbies/book.svg"
import tableTennis from "../assets/images/hobbies/table-tennis.svg"
import bicycle from "../assets/images/hobbies/bicycle.svg"
import plane from "../assets/images/hobbies/plane.svg"


type LinkProps = {
    link: string,
    icon: IconDefinition | string,
}

const Link = ({ link, icon }: LinkProps) => {
    return (
        <a href={link} target="_blank" className="text-2xl">
            <i className={"fa " + icon + " text-[--gray-700]"} />
        </a>
    )
}


type SkillsCardProps = {
    title: string,
    backgroundColor: string,
    textColor: string,
    borderColor: string,
    icon: IconDefinition,
    skills: string[],
}

const SkillsCard = ({ title, backgroundColor, textColor, borderColor, icon, skills }: SkillsCardProps) => {
    return (
        <Slide
            direction={SlideDirection.Top}
            translationValue={150}
            styles="flex flex-col items-center p-4 w-4/5 md:w-[45%] xl:w-[30%] 2xl:w-1/4 bg-[--white] card-shadow rounded-lg"
        >
            <div className={"flex justify-center items-center aspect-square p-[0.35rem] " + backgroundColor + " rounded-full"}>
                <FontAwesomeIcon icon={icon} className={textColor + " w-[32px] h-[32px]"} />
            </div>

            <p className={"mt-4 mb-2 text-sm md:text-base xl:text-sm " + textColor + " font-semibold"}>{title}</p>

            <SkillsList
                skills={skills}
                borderColor={borderColor}
            />
        </Slide>
    )
}


type LanguageProps = {
    language: string,
    progress: number,
    level: string
}

const LanguageProgressBar = ({ language, progress }: LanguageProps) => {
    return (
        <div className="flex justify-center items-center">
            <p className="text-sm w-1/4 md:w-[12%]">{language}</p>

            <div className="w-[70%] h-4 bg-[--white] rounded-full card-shadow overflow-hidden">
                <AnimateProperty
                    property="width"
                    fromValue={0}
                    toValue={progress + "%"}
                    duration={1.2}
                    styles={"h-full bg-[--gray-500]"}
                />
            </div>
        </div>
    )
}


const LanguageRadialProgress = ({ language, progress, level }: LanguageProps) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 w-1/4 2xl:w-1/5 text-center">
            <p className="text-lg xl:text-base">{language}</p>

            <AnimateProperty
                property="backgroundImage"
                fromValue={"conic-gradient(var(--white) 0deg, var(--white) 0deg)"}
                toValue={"conic-gradient(var(--gray-500) " + progress * 3.6 + "deg, var(--white) " + progress * 3.6 + "deg)"}
                duration={1.5}
                styles="w-4/5 aspect-square bg-[conic-gradient(var(--gray-500)80deg,var(--white)80deg)] rounded-full p-6 shadow-lg"
            >
                <p className="flex justify-center items-center w-full h-full bg-[--gray-100] p-3 rounded-full text-base xl:text-sm font-extralight text-[--gray-700]">{level}</p>
            </AnimateProperty>
        </div>
    )
}


type HobbyProps = {
    title: string,
    icon: string,
    description: string[],
    backgroundColor: string
}

const HobbyCard = ({ title, icon, description, backgroundColor }: HobbyProps) => {
    return (
        <Slide
            direction={SlideDirection.Top}
            translationValue={150}
            styles="flex aspect-[1.8/1] md:aspect-[2/1] justify-between gap-6 w-4/5 md:w-2/5 2xl:w-1/4 px-4 py-4 bg-[--white] rounded-lg card-shadow text-sm md:text-lg font-semibold"
        >
            <div className="flex flex-col min-w-[55%] md:min-w-[60%] lg:min-w-[55%]">
                <h3 className="text-sm md:text-lg xl:text-base">{title}</h3>

                <ul className="my-auto list-disc font-extralight text-xs md:text-base xl:text-xs ml-8">
                    {description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                    ))}
                </ul>
            </div>

            <div className={"flex justify-center items-center m-6 md:mr-8 md:my-8 2xl:m-6 p-4 aspect-square bg-[" + backgroundColor + "] rounded-full"}>
                <img src={icon} alt={title} className="object-contain" />
            </div>
        </Slide>
    )
}


type CreditsInspirationImageProps = {
    name: string,
    image: string,
    link: string,
    slideDirection: SlideDirection
}

type CreditsModelLinkProps = {
    name: string,
    modelName: string
    link: string,
}

const CreditsInspirationImage = ({ name, image, link, slideDirection }: CreditsInspirationImageProps) => {
    return (
        <Slide
            direction={slideDirection}
            translationValue={150}
            styles="relative w-4/5 md:w-2/5 rounded-lg shadow-lg overflow-hidden"
        >
            <img src={image} alt={name} className="w-full h-full object-contain" />
            <a href={link} target="_blank" className="flex justify-center items-end absolute bottom-0 w-full h-full pb-4 opacity-0 hover:opacity-100 text-xl text-[--white] hover:text-[--white] text-center bg-gradient-to-t from-[--gray-600] to-transparent underline transition-opacity">{name}</a>
        </Slide >
    )
}


const CreditsModelLink = ({ name, modelName, link }: CreditsModelLinkProps) => {
    return (
        <li className="text-center">
            {name} (
            <a href={link} target="_blank" className="text-inherit font-normal underline">{modelName}</a>
            )
        </li>
    )
}


type HeroTitleProps = {
    hasScrolled: boolean
}

const HeroTitle = ({ hasScrolled }: HeroTitleProps) => {
    const { t } = useTranslation(['about']);

    return (
        <div className="relative flex gap-8 h-screen min-h-screen overflow-auto">
            <Slide
                direction={SlideDirection.Left}
                styles="hidden md:flex justify-end items-center w-1/2"
            >
                <div className="aspect-square rounded-full bg-gradient-to-r gradient-bp w-3/5 xl:w-[--picture-size] h-[calc(100vw/2*(var(--picture-size)/100)-var(--picture-border-size))] p-1">
                    <div className="relative w-full h-full flex justify-center items-center bg-[--white] rounded-full overflow">
                        <img src={picture1} alt="Photo" className='absolute aspect-[8.34/8.98] max-w-[200%] w-[110%] bottom-[-1px]' />
                        <img src={picture2} alt="Photo" className='absolute aspect-[8.34/8.98] max-w-[200%] w-[110%] bottom-0' style={{ clipPath: 'circle(48% at 50% 54%)' }} />
                    </div>
                </div>
            </Slide>

            <Slide
                direction={SlideDirection.Right}
                styles="flex flex-col justify-center items-center gap-5 md:gap-0 md:items-start md:w-1/2 py-3 text-center md:text-left"
            >
                <div className="">
                    <h1 className="font-extrabold text-2xl xl:text-4xl">{t("hero.hi")}</h1>
                    <h1 className="bg-gradient-to-r gradient-bp bg-clip-text text-transparent font-black text-3xl md:text-4xl xl:text-5xl tracking-tight whitespace-pre-line">{t("hero.name")}</h1>
                </div>

                <div className="md:hidden flex justify-center items-center aspect-square rounded-full bg-gradient-to-r gradient-bp w-3/5 mt-2 p-1">
                    <div className="relative flex justify-center w-full h-full bg-white rounded-full">
                        <img src={picture1} alt="Photo" className='absolute aspect-[8.34/8.98] max-w-[200%] w-[105%] bottom-[-1px]' />
                        <img src={picture2} alt="Photo" className='absolute aspect-[8.34/8.98] max-w-[200%] w-[105%] bottom-0' style={{ clipPath: 'circle(48% at 50% 54%)' }} />
                    </div>
                </div>

                <p className="mx-8 md:mx-0 md:w-4/6 md:mt-5 md:mb-2 font-light">{t("hero.personal-statement")}</p>
                <p className="mx-8 md:mx-0 md:w-4/6 md:mb-2 font-light">{t("hero.personal-statement-secondary")}</p>

                <div className="hidden md:flex gap-4">
                    <Link link="https://www.linkedin.com/in/quentin-chauvelon/" icon="fa-brands fa-linkedin" />
                    <Link link="https://www.github.com/Quentin-Chauvelon/" icon="fa-brands fa-github" />
                    <Link link="mailto:quentin.chauvelon@gmail.com" icon="fa-envelope" />
                </div>
            </Slide>

            <div className={(hasScrolled ? "hidden" : "block") + " absolute bottom-4 left-1/2 -translate-x-1/2"}>
                <div id="first-arrow" className="arrow-blinking -mt-1 p-1.5 border-[--gray-700] border-b-[6px] border-l-[6px] -rotate-45" />
                <div id="second-arrow" className="arrow-blinking -mt-1 p-1.5 border-[--gray-700] border-b-[6px] border-l-[6px] -rotate-45" />
                <div id="third-arrow" className=" arrow-blinking -mt-1 p-1.5 border-[--gray-700] border-b-[6px] border-l-[6px] -rotate-45" />
            </div>
        </div>
    )
}


const Skills = () => {
    const { t } = useTranslation(['about']);

    return (
        <>
            <SectionTitle title={t("skills.section-title")} topMargin={"mt-0"} />

            <div className="flex flex-wrap justify-center w-full gap-5">
                <SkillsCard
                    title={t("skills.general-purpose")}
                    backgroundColor="bg-[--skills-general-bg-color] dark:bg-[--skills-general-bg-color-dark]"
                    textColor="text-[--skills-general-color] dark:text-[--skills-general-color-dark]"
                    borderColor="border-[--skills-general-color] dark:border-[--skills-general-color-dark]"
                    icon={faCode}
                    skills={["Lua", "C", "C++", "C#", "Python", "Java", "Kotlin", "Go", "Rust"]}
                />
                <SkillsCard
                    title={t("skills.web-development")}
                    backgroundColor="bg-[--skills-web-bg-color] dark:bg-[--skills-web-bg-color-dark]"
                    textColor="text-[--skills-web-color] dark:text-[--skills-web-color-dark]"
                    borderColor="border-[--skills-web-color] dark:border-[--skills-web-color-dark]"
                    icon={faGlobe}
                    skills={["PHP", "HTML5", "CSS3", "JavaScript", "TypeScript"]}
                />
                <SkillsCard
                    title={t("skills.databases")}
                    backgroundColor="bg-[--skills-databases-bg-color] dark:bg-[--skills-databases-bg-color-dark]"
                    textColor="text-[--skills-databases-color] dark:text-[--skills-databases-color-dark]"
                    borderColor="border-[--skills-databases-color] dark:border-[--skills-databases-color-dark]"
                    icon={faDatabase}
                    skills={["MySQL", "SQL Server", "SQLite", "MongoDB", "Redis"]}
                />
                <SkillsCard
                    title={t("skills.frameworks")}
                    backgroundColor="bg-[--skills-frameworks-bg-color] dark:bg-[--skills-frameworks-bg-color-dark]"
                    textColor="text-[--skills-frameworks-color] dark:text-[--skills-frameworks-color-dark]"
                    borderColor="border-[--skills-frameworks-color] dark:border-[--skills-frameworks-color-dark]"
                    icon={faCertificate}
                    skills={[".NET Core", "React", "Tailwind CSS", "CodeIgniter"]}
                />
                <SkillsCard
                    title={t("skills.others")}
                    backgroundColor="bg-[--skills-others-bg-color] dark:bg-[--skills-others-bg-color-dark]"
                    textColor="text-[--skills-others-color] dark:text-[--skills-others-color-dark]"
                    borderColor="border-[--skills-others-color] dark:border-[--skills-others-color-dark]"
                    icon={faComputer}
                    skills={["Linux", "Git", "Agile", "AWS", "Azure", "GCP", "Docker", "Kubernetes", "Machine Learning", "Github Actions", "Postman"]}
                />
            </div>
        </>
    )
}


type LanguageLocalizationProps = {
    id: string,
    name: string,
    level: string
}

const Languages = () => {
    const { t } = useTranslation(['about']);

    const levels: { [string: string]: number } = {
        "french": 100,
        "english": 85,
        "spanish": 40,
    }

    return (
        <>
            <SectionTitle title={t("languages.section-title")} />

            <div className="flex flex-col md:flex-row md:justify-around gap-4 w-full px-8 md:px-8 2xl:px-24">
                {
                    t<'languages.data', { returnObjects: true }, LanguageLocalizationProps[]>("languages.data", { returnObjects: true }).map((language) => (
                        document.documentElement.clientWidth < 768
                            ? <LanguageProgressBar key={language.name} language={language.name} progress={levels[language.id]} level={language.level} />
                            : <LanguageRadialProgress key={language.name} language={language.name} progress={levels[language.id]} level={language.level} />
                    ))
                }
            </div>
        </>
    )
}


type HobbiesLocalizationProps = {
    id: string,
    title: string,
    description: string[]
}

const Hobbies = () => {
    const { t } = useTranslation(['about']);

    const icons: { [string: string]: string } = {
        "game-dev": gameDevelopment,
        "reading": book,
        "table-tennis": tableTennis,
        "cycling": bicycle,
        "traveling": plane,
    }

    const backgroundColors: { [string: string]: string } = {
        "game-dev": "--skills-general-bg-color",
        "reading": "--skills-web-bg-color",
        "table-tennis": "--skills-databases-bg-color",
        "cycling": "--skills-frameworks-bg-color",
        "traveling": "--skills-others-bg-color",
    }

    return (
        <>
            <SectionTitle title={t("hobbies.section-title")} />

            <div className="flex flex-wrap justify-center gap-8">
                {
                    t<'hobbies.data', { returnObjects: true }, HobbiesLocalizationProps[]>("hobbies.data", { returnObjects: true }).map((hobby) => (
                        <HobbyCard
                            key={hobby.title}
                            title={hobby.title}
                            icon={icons[hobby.id]}
                            description={hobby.description}
                            backgroundColor={backgroundColors[hobby.id]}
                        />
                    ))
                }
            </div>
        </>
    )
}


type CreditsLocalizationProps = {
    id: string,
    ["modeler-name"]: string,
    ["model-name"]: string
}

const Credits = () => {
    const { t } = useTranslation(['about']);

    const links: { [string: string]: string } = {
        "keyboard": "https://sketchfab.com/3d-models/mechanical-keyboard-1ba4055c33674567b51b783701ed05ce",
        "mouse": "https://sketchfab.com/3d-models/low-poly-computer-mouse-free-bd0176444b9043ccbcf82e9e27346c78",
        "trophy": "https://sketchfab.com/3d-models/trophy-cup-73ec7ba048b64de8b08b76965cd0c10c",
        "graduation-hat": "https://sketchfab.com/3d-models/graduation-hat-b0a7e821403b4c8cb8e1d32ea4075eac",
        "plant": "https://sketchfab.com/3d-models/potted-plant-mediterranean-med-leaf-low-poly-bc7f26baef2a45d18dbd9a5d6d2ec565",
        "chair": "https://sketchfab.com/3d-models/office-chair-af2f07d06f6349158c1d24d87f5ceb95",
        "shop": "https://sketchfab.com/3d-models/cartoon-building-435df25a299a4b78a5f031960b9a6c6a",
        "truck": "https://sketchfab.com/3d-models/light-commercial-truck-07-low-poly-model-3be03b6a43aa41898c9ca806b8787052"
    }

    return (
        <>
            <SectionTitle title={t("credits.section-title")} />

            <div className="text-xs mb-8 md:text-base xl:text-sm text-center px-4">
                <p>{t("credits.inspiration")}</p>

                <div className="flex flex-wrap justify-evenly gap-4 md:gap-0 mt-4 mb-8">
                    <CreditsInspirationImage
                        name="Bryce Hanna"
                        image={bryceHanna}
                        link="https://brycehanna.dev/"
                        slideDirection={SlideDirection.Left}
                    />
                    <CreditsInspirationImage
                        name="Abigail Bloom"
                        image={abigailBloom}
                        link="https://abigail-bloom-portolio-bokoko33.vercel.app/"
                        slideDirection={SlideDirection.Right}
                    />
                </div>

                <p>{t("credits.free-models.description")}</p>
                <ul>
                    {
                        t<'credits.free-models.data', { returnObjects: true }, CreditsLocalizationProps[]>("credits.free-models.data", { returnObjects: true }).map((model, i) => (
                            <CreditsModelLink
                                key={i}
                                name={model["modeler-name"]}
                                modelName={model["model-name"]}
                                link={links[model.id]}
                            />
                        ))
                    }
                </ul>
            </div>
        </>
    )
}


const About = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    const handleScroll = () => {
        if (!hasScrolled) {
            setHasScrolled(true);
        }
    }

    return (
        <>
            <section className="flex flex-col items-center w-full h-[100vh] overflow-y-auto overflow-x-hidden" onScroll={handleScroll}>
                <HeroTitle
                    hasScrolled={hasScrolled}
                />

                <Skills />

                <Languages />

                <Hobbies />

                <Credits />
            </section >
        </>
    )
}

export default About