import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faCertificate, faCode, faComputer, faDatabase, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { AnimateProperty, Fade, Slide, SlideDirection } from "../components/Animation";
import SectionTitle from "../components/SectionTitle";
import "/src/assets/styles/about.css"


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
    color: string,
    icon: IconDefinition,
    skills: { [string: string]: string },
}

const SkillsCard = ({ title, backgroundColor, color, icon, skills }: SkillsCardProps) => {
    return (
        <Slide
            direction={SlideDirection.Top}
            translationValue={150}
            styles="flex flex-col items-center p-4 w-4/5 md:w-[45%] xl:w-[30%] 2xl:w-1/4 bg-[--white] card-shadow rounded-lg"
        >
            <div className={"flex justify-center items-center aspect-square p-[0.35rem] bg-[" + backgroundColor + "] rounded-full"}>
                <FontAwesomeIcon icon={icon} className={"text-[" + color + "] w-[32px] h-[32px]"} />
            </div>

            <p className={"mt-4 mb-2 text-sm md:text-base xl:text-sm text-[" + color + "] font-semibold"}>{title}</p>

            <div className="flex justify-center w-full">
                {Object.keys(skills).map((skill, i) => (
                    <Fade
                        fromValue={0}
                        toValue={1}
                        delay={i * 0.1}
                        key={i}
                        styles={"flex justify-center items-center -mx-1 p-[0.35rem] aspect-square rounded-full border-2 bg-[--white] w-[48px] h-[48px] border-[" + color + "] tooltip"}
                        data={{ ["data-tooltip"]: skill }}
                    >
                        <img src={skills[skill] as string} alt={skill} className={"w-full h-full"} />
                    </Fade>
                ))}
            </div>
        </Slide>
    )
}


type LanguageProps = {
    language: string,
    progress: number,
    level: string
}

const LanguageProgressBar = ({ language, progress, level }: LanguageProps) => {
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
    description: string[]
    backgroundColor: string,
    color: string
}

const HobbyCard = ({ title, icon, description, backgroundColor, color }: HobbyProps) => {
    return (
        <Slide
            direction={SlideDirection.Top}
            translationValue={150}
            styles="flex aspect-[1.8/1] md:aspect-[2.11/1] justify-between gap-6 w-4/5 md:w-2/5 2xl:w-1/4 px-4 py-4 bg-[--white] rounded-lg card-shadow text-sm md:text-lg font-semibold"
        >
            <div className="flex flex-col min-w-[50%]">
                <h3 className="text-sm md:text-lg xl:text-base">{title}</h3>

                <ul className="my-auto list-disc font-extralight text-xs md:text-base xl:text-xs ml-8">
                    {description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                    ))}
                </ul>
            </div>

            <div className={"flex justify-center items-center m-6 md:m-5 2xl:m-6 p-4 aspect-square bg-[" + backgroundColor + "] rounded-full"}>
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
            <img src={image} alt={name} className="object-contain" />
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


const HeroTitle = () => {
    return (
        <div className="flex gap-8 h-screen min-h-screen">
            <Slide
                direction={SlideDirection.Left}
                styles="hidden md:flex justify-end items-center w-1/2"
            >
                <div className="aspect-square rounded-full bg-gradient-to-r gradient-bp w-3/5 xl:w-[--picture-size] h-[calc(100vw/2*(var(--picture-size)/100)-var(--picture-border-size))] p-1">
                    <div className="w-full h-full flex bg-white rounded-full overflow-hidden">
                        <img src="src/assets/images/Picture.png" alt="" />
                    </div>
                </div>
            </Slide>

            <Slide
                direction={SlideDirection.Right}
                styles="flex flex-col justify-center items-center gap-5 md:gap-0 md:items-start md:w-1/2 py-3 text-center md:text-left"
            >
                <div className="">
                    <h1 className="font-extrabold text-2xl xl:text-4xl">Hi there 👋, I'm</h1>
                    <h1 className="bg-gradient-to-r gradient-bp bg-clip-text text-transparent font-black text-3xl md:text-4xl xl:text-5xl tracking-tight">Quentin Chauvelon</h1>
                </div>

                <div className="md:hidden flex justify-center items-center aspect-square rounded-full bg-gradient-to-r gradient-bp w-3/5 p-1">
                    <div className="flex justify-center w-full h-full bg-white rounded-full overflow-hidden">
                        <img src="src/assets/images/Picture.png" alt="" />
                    </div>
                </div>

                <p className="mx-8 md:mx-0 md:w-4/6 md:mt-5 md:mb-2 font-light">Welcome to my portfolio website in which you can find all information about me, my projects, my experiences and more!</p>

                <div className="hidden md:flex gap-4">
                    <Link link="https://www.linkedin.com/in/quentin-chauvelon/" icon="fa-brands fa-linkedin" />
                    <Link link="https://www.github.com/Quentin-Chauvelon/" icon="fa-brands fa-github" />
                    <Link link="mailto:quentin.chauvelon@gmail.com" icon="fa-envelope" />
                </div>
            </Slide>
        </div>
    )
}


const Skills = () => {
    return (
        <>
            <SectionTitle title="SKILLS" topMargin={"mt-0"} />

            <div className="flex flex-wrap justify-center w-full gap-5">
                <SkillsCard
                    title="GENERAL PURPOSE"
                    backgroundColor="--skills-general-bg-color"
                    color="--skills-general-color"
                    icon={faCode}
                    skills={{
                        ["Lua"]: "/src/assets/images/skills_icons/lua.svg",
                        ["C"]: "/src/assets/images/skills_icons/c.svg",
                        ["C#"]: "/src/assets/images/skills_icons/c-sharp.svg",
                        ["Python"]: "/src/assets/images/skills_icons/python.svg",
                        ["Java"]: "/src/assets/images/skills_icons/java.svg",
                        ["Kotlin"]: "/src/assets/images/skills_icons/kotlin.svg",
                        ["Go"]: "/src/assets/images/skills_icons/golang.svg",
                    }}
                />
                <SkillsCard
                    title="WEB DEVELOPMENT"
                    backgroundColor="--skills-web-bg-color"
                    color="--skills-web-color"
                    icon={faGlobe}
                    skills={{
                        ["PHP"]: "/src/assets/images/skills_icons/php.svg",
                        ["HTML5"]: "/src/assets/images/skills_icons/html5.svg",
                        ["CSS3"]: "/src/assets/images/skills_icons/css3.svg",
                        ["JavaScript"]: "/src/assets/images/skills_icons/javascript.svg",
                        ["TypeScript"]: "/src/assets/images/skills_icons/typescript.svg",
                    }}
                />
                <SkillsCard
                    title="DATABASES"
                    backgroundColor="--skills-databases-bg-color"
                    color="--skills-databases-color"
                    icon={faDatabase}
                    skills={{
                        ["SQL"]: "/src/assets/images/skills_icons/sql.svg",
                        ["MongoDB"]: "/src/assets/images/skills_icons/mongodb.svg",
                    }}
                />
                <SkillsCard
                    title="FRAMEWORKS"
                    backgroundColor="--skills-frameworks-bg-color"
                    color="--skills-frameworks-color"
                    icon={faCertificate}
                    skills={{
                        [".NET Core"]: "/src/assets/images/skills_icons/dotnet-core.svg",
                        ["ReactJS"]: "/src/assets/images/skills_icons/react.svg",
                        ["TailwindCSS"]: "/src/assets/images/skills_icons/tailwind-css.svg",
                        ["CodeIgniter4"]: "/src/assets/images/skills_icons/codeigniter.svg",
                    }}
                />
                <SkillsCard
                    title="OTHERS"
                    backgroundColor="--skills-others-bg-color"
                    color="--skills-others-color"
                    icon={faComputer}
                    skills={{
                        ["Linux"]: "/src/assets/images/skills_icons/linux.svg",
                        ["Git"]: "/src/assets/images/skills_icons/git.svg",
                        ["VS Code"]: "/src/assets/images/skills_icons/vscode.svg",
                        ["IntelliJ"]: "/src/assets/images/skills_icons/intellij.svg",
                        ["Postman"]: "/src/assets/images/skills_icons/postman.svg",
                        ["Agile"]: "/src/assets/images/skills_icons/agile.svg",
                        ["Vite"]: "/src/assets/images/skills_icons/vite.svg",
                        ["Bash"]: "/src/assets/images/skills_icons/bash.svg",
                        ["NodeJS"]: "/src/assets/images/skills_icons/nodejs.svg",
                    }}
                />
            </div>
        </>
    )
}


const Languages = () => {
    return (
        <>
            <SectionTitle title="LANGUAGES" />

            <div className="flex flex-col md:flex-row md:justify-around gap-4 w-full px-8 md:px-8 2xl:px-24">
                {document.documentElement.clientWidth < 768
                    ? <>
                        <LanguageProgressBar language="French" progress={100} level="Native" />
                        <LanguageProgressBar language="English" progress={85} level="C1" />
                        <LanguageProgressBar language="Spanish" progress={40} level="" />
                    </>
                    : <>
                        <LanguageRadialProgress language="French" progress={100} level="Native" />
                        <LanguageRadialProgress language="English" progress={85} level="Full professional proficiency" />
                        <LanguageRadialProgress language="Spanish" progress={40} level="Limited working proficiency" />
                    </>
                }
            </div>
        </>
    )
}


const Hobbies = () => {
    return (
        <>
            <SectionTitle title="HOBBIES" />

            <div className="flex flex-wrap justify-center gap-8">
                <HobbyCard
                    title="INDIE GAME DEV"
                    icon="/src/assets/images/hobbies/game-development.svg"
                    description={[
                        "4 games developed",
                        "35k+ plays",
                    ]}
                    backgroundColor="--skills-general-bg-color"
                    color="--skills-general-color"
                />
                <HobbyCard
                    title="READING"
                    icon="/src/assets/images/hobbies/book.svg"
                    description={[
                        "200+ novels read",
                        "Adventure, YA, SF, Fantasy...",
                    ]}
                    backgroundColor="--skills-web-bg-color"
                    color="--skills-web-color"
                />
                <HobbyCard
                    title="TABLE TENNIS"
                    icon="/src/assets/images/hobbies/table-tennis.svg"
                    description={[
                        "8 years",
                        "Competitions in teams",
                        "Individual tournaments",
                    ]}
                    backgroundColor="--skills-databases-bg-color"
                    color="--skills-databases-color"
                />
                <HobbyCard
                    title="CYCLING"
                    icon="/src/assets/images/hobbies/bicycle.svg"
                    description={[
                        "4 years",
                        "~550 km/month",
                    ]}
                    backgroundColor="--skills-frameworks-bg-color"
                    color="--skills-frameworks-color"
                />
                <HobbyCard
                    title="TRAVELING"
                    icon="/src/assets/images/hobbies/plane.svg"
                    description={[
                        "6 countries",
                        "6 cultures",
                    ]}
                    backgroundColor="--skills-others-bg-color"
                    color="--skills-others-color"
                />
            </div>
        </>
    )
}


const Credits = () => {
    return (
        <>
            <SectionTitle title="CREDITS" />

            <div className="text-xs md:text-base xl:text-sm text-center px-4">
                <p>This portfolio website has been inspired by:</p>

                <div className="flex flex-wrap justify-evenly gap-4 md:gap-0 mt-4 mb-8">
                    <CreditsInspirationImage
                        name="Bryce Hanna"
                        image="/src/assets/images/bryce_hanna.png"
                        link="https://brycehanna.dev/"
                        slideDirection={SlideDirection.Left}
                    />
                    <CreditsInspirationImage
                        name="Abigail Bloom"
                        image="/src/assets/images/abigail_bloom.png"
                        link="https://abigail-bloom-portolio-bokoko33.vercel.app/"
                        slideDirection={SlideDirection.Right}
                    />
                </div>

                <p>Although I have made some models myself, I had to rely on free models for more complex objects. Thank you to these talented modelers:</p>
                <ul>
                    <CreditsModelLink
                        name="Felikin Ruslan"
                        modelName="Keyboard"
                        link="https://sketchfab.com/3d-models/mechanical-keyboard-1ba4055c33674567b51b783701ed05ce"
                    />
                    <CreditsModelLink
                        name="Dimitri"
                        modelName="Mouse"
                        link="https://sketchfab.com/3d-models/low-poly-computer-mouse-free-bd0176444b9043ccbcf82e9e27346c78"
                    />
                    <CreditsModelLink
                        name="Sedayuzlu"
                        modelName="Trophy"
                        link="https://sketchfab.com/3d-models/trophy-cup-73ec7ba048b64de8b08b76965cd0c10c"
                    />
                    <CreditsModelLink
                        name="Faisal Alhaddad"
                        modelName="Graduation Hat"
                        link="https://sketchfab.com/3d-models/graduation-hat-b0a7e821403b4c8cb8e1d32ea4075eac"
                    />
                    <CreditsModelLink
                        name="Paul Spooner"
                        modelName="Plant"
                        link="https://sketchfab.com/3d-models/potted-plant-mediterranean-med-leaf-low-poly-bc7f26baef2a45d18dbd9a5d6d2ec565"
                    />
                    <CreditsModelLink
                        name="AK Studio"
                        modelName="Chair"
                        link="https://sketchfab.com/3d-models/office-chair-af2f07d06f6349158c1d24d87f5ceb95"
                    />
                    <CreditsModelLink
                        name="Tunnie"
                        modelName="Shop"
                        link="https://sketchfab.com/3d-models/cartoon-building-435df25a299a4b78a5f031960b9a6c6a"
                    />
                    <CreditsModelLink
                        name="Daniel Zhabotinsky"
                        modelName="Truck"
                        link="https://sketchfab.com/3d-models/light-commercial-truck-07-low-poly-model-3be03b6a43aa41898c9ca806b8787052"
                    />
                </ul>
            </div>
        </>
    )
}


const About = () => {
    return (
        <>
            <section className="flex flex-col items-center w-full h-[100vh]">
                <HeroTitle />

                <Skills />

                <Languages />

                <Hobbies />

                <Credits />
            </section >
        </>
    )
}

export default About