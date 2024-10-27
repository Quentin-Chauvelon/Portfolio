import { DeviceOrientation, Timeline, TimelineItem, TimelineBodyParagraph, TimelineIemLocalizationProps, TimelineBodyList, TimelineDescription } from "../components/Timeline"
import SectionTitle from "../components/SectionTitle"
import SkillsList from "../components/SkillsList"
import { useTranslation } from 'react-i18next';

import cmu from "../assets/images/education/cmu.png"
import ensimag from "../assets/images/education/ensimag.png"
import polytech from "../assets/images/education/polytech.png"
import iut from "../assets/images/education/iut.png"
import { c, python, java, kotlin, go, php, html5, css3, javascript, sql, mongodb, react, linux, git, vscode, intellij } from "../assets/images/skills_icons"

import "/src/assets/styles/education.css"


const Education = () => {
    const orientation = window.innerWidth > 1024 ? DeviceOrientation.Landscape : DeviceOrientation.Portrait;
    const { t } = useTranslation(['education']);

    const educationImages: { [key: string]: string } = {
        cmu: cmu,
        ensimag: ensimag,
        polytech: polytech,
        iut: iut
    }

    const skills: { [key: string]: string } = {
        ["Python"]: python,
        ["Java"]: java,
        ["C"]: c,
        ["Kotlin"]: kotlin,
        ["Go"]: go,
        ["PHP"]: php,
        ["HTML5"]: html5,
        ["CSS3"]: css3,
        ["JavaScript"]: javascript,
        ["SQL"]: sql,
        ["MongoDB"]: mongodb,
        ["React"]: react,
        ["Linux"]: linux,
        ["Git"]: git,
        ["VS Code"]: vscode,
        ["IntelliJ IDEA"]: intellij
    }

    const educationSkills: { [key: string]: string[] } = {
        cmu: [],
        ensimag: ["Python", "Java", "C", "SQL", "Git", "Linux", "VS Code"],
        polytech: [],
        iut: ["Go", "Kotlin", "Python", "SQL", "MongoDB", "PHP", "HTML5", "CSS3", "JavaScript", "React", "Git", "IntelliJ IDEA"]
    }

    const educationBackgroundColors: { [key: string]: string } = {
        cmu: "bg-[--cmu-color]",
        ensimag: "bg-[--ensimag-color]",
        polytech: "bg-[--polytech-color]",
        iut: "bg-[--iut-color]"
    }

    const educationBorderColors: { [key: string]: string } = {
        cmu: "border-[--cmu-color]",
        ensimag: "border-[--ensimag-color]",
        polytech: "border-[--polytech-color]",
        iut: "border-[--iut-color]"
    }

    return (
        <div className="min-h-[100vh]">
            <SectionTitle
                title="EDUCATION"
                topMargin={"mt-24"}
            />

            <Timeline>
                {
                    t<'data', { returnObjects: true }, TimelineIemLocalizationProps[]>("data", { returnObjects: true }).map((education, i) => (
                        < TimelineItem
                            key={i}
                            image={educationImages[education.id]}
                            title={education.title}
                            heading={education.heading}
                            subHeading={education.subheading}
                            date={education.date}
                            backgroundColor={educationBackgroundColors[education.id]}
                            borderColor={educationBorderColors[education.id]}
                            orientation={orientation}
                            even={i % 2 === 0}
                        >
                            <>
                                <TimelineDescription
                                    description={education.description}
                                />

                                <SkillsList
                                    skills={educationSkills[education.id].reduce((acc, skill) => ({ ...acc, [skill]: skills[skill] }), {})}
                                    borderColor={educationBorderColors[education.id]}
                                />
                            </>
                        </TimelineItem>
                    ))
                }
            </Timeline>
        </div>
    )
}

export default Education