import { DeviceOrientation, Timeline, TimelineItem, TimelineBodyParagraph, TimelineBodyList } from "../components/Timeline"
import SectionTitle from "../components/SectionTitle"
import SkillsList from "../components/SkillsList"

import cmu from "../assets/images/education/cmu.png"
import ensimag from "../assets/images/education/ensimag.png"
import polytech from "../assets/images/education/polytech.png"
import iut from "../assets/images/education/iut.png"
import { c, python, java, kotlin, go, php, html5, css3, javascript, sql, mongodb, react, linux, git, vscode, intellij } from "../assets/images/skills_icons"

import "/src/assets/styles/education.css"


const Education = () => {
    const orientation = window.innerWidth > 1024 ? DeviceOrientation.Landscape : DeviceOrientation.Portrait;

    return (
        <div className="min-h-[100vh]">
            <SectionTitle
                title="EDUCATION"
                topMargin={"mt-24"}
            />

            <Timeline>
                <TimelineItem
                    image={cmu}
                    title="Carnegie Mellon University"
                    heading="Upcoming exchange semester - Computer Science"
                    subHeading="Pittsburgh, PA"
                    date="January 2025 - May 2025"
                    backgroundColor="bg-[--cmu-color]"
                    borderColor="border-[--cmu-color]"
                    orientation={orientation}
                    even={true}
                >
                    <>
                        <TimelineBodyParagraph
                            text="I will be attending Carnegie Mellon University for an exchange semester for the Spring 2025 semester."
                            marginTop
                        />

                        <TimelineBodyParagraph
                            text="Courses:"
                            marginTop
                        />

                        <TimelineBodyList
                            listItems={[
                                "Algorithms and Advanced Data Structures (15351)",
                                "Introduction to Machine Learning (10601)",
                                "Computer Graphics (15462)"
                            ]}
                            marginBottom
                        />
                    </>
                </TimelineItem>

                <TimelineItem
                    image={ensimag}
                    title="Grenoble INP - ENSIMAG"
                    heading="Master of Science - Computer Science and Mathematics"
                    subHeading="Grenoble, France"
                    date="September 2023 - Present"
                    backgroundColor="bg-[--ensimag-color]"
                    borderColor="border-[--ensimag-color]"
                    orientation={orientation}
                    even={false}
                >
                    <>
                        <TimelineBodyParagraph
                            text="Topics studied:"
                            marginTop
                        />

                        <TimelineBodyList
                            listItems={[
                                "Algorithms and Data Structures",
                                "Software Engineering (Java, C, Python...)",
                                "Databases",
                                "Computer Networks & Security",
                                "Operating Systems",
                                "Computer Architecture",
                                "Operations Research",
                                "Information Theory",
                                "Languages and Automata",
                                "Calculus, Linear Algebra, Analysis, Probability and Statistics"
                            ]}
                            marginBottom
                        />

                        <SkillsList
                            skills={{
                                ["Python"]: python,
                                ["Java"]: java,
                                ["C"]: c,
                                ["SQL"]: sql,
                                ["Git"]: git,
                                ["Linux"]: linux,
                                ["VS Code"]: vscode,
                            }}
                            borderColor="border-[--ensimag-color]"
                        />
                    </>
                </TimelineItem>

                <TimelineItem
                    image={polytech}
                    title="Polytech Nantes"
                    heading='"Classe préparatoire intégrée" - Computer Science and Mathematics'
                    subHeading="Nantes, France"
                    date="2021 - 2023"
                    backgroundColor="bg-[--polytech-color]"
                    borderColor="border-[--polytech-color]"
                    orientation={orientation}
                    even={true}
                >
                    <>
                        <TimelineBodyParagraph
                            text="Classe préparatoire intégrée is a two-year program that prepares students for engineering schools."
                            marginTop
                        />

                        <TimelineBodyParagraph
                            text="In my case, it has been done on top of my Bachelor's degree. This allowed me to get a general education like in a normal Classe préparatoire while also gaining experience in Computer Science thanks to the Bachelor's degree and internship."
                            marginBottom
                        />
                    </>
                </TimelineItem>

                <TimelineItem
                    image={iut}
                    title="IUT Nantes"
                    heading="Bachelor of Science - Computer Science"
                    subHeading="Nantes, France"
                    date="2021 - 2023"
                    backgroundColor="bg-[--iut-color]"
                    borderColor="border-[--iut-color]"
                    orientation={orientation}
                    even={false}
                >
                    <>
                        <TimelineBodyParagraph
                            text="Topics studied:"
                            marginTop
                        />

                        <TimelineBodyList
                            listItems={[
                                "Algorithms and Data Structures",
                                "Software Engineering (Go, Kotlin, Python...)",
                                "Databases (SQL, MongoDB)",
                                "Computer Networks & Security",
                                "Operating Systems",
                                "Computer Architecture",
                                "Languages and Automata",
                                "Discrete Mathematics, Calculus, Linear Algebra and Probability"
                            ]}
                            marginBottom
                        />

                        <SkillsList
                            skills={{
                                ["Go"]: go,
                                ["Kotlin"]: kotlin,
                                ["Python"]: python,
                                ["SQL"]: sql,
                                ["MongoDB"]: mongodb,
                                ["PHP"]: php,
                                ["HTML5"]: html5,
                                ["CSS3"]: css3,
                                ["JavaScript"]: javascript,
                                ["React"]: react,
                                ["Git"]: git,
                                ["IntelliJ IDEA"]: intellij,
                            }}
                            borderColor="border-[--iut-color]"
                        />
                    </>
                </TimelineItem>
            </Timeline>
        </div>
    )
}

export default Education