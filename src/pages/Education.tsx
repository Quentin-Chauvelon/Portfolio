import { DeviceOrientation, Timeline, TimelineItem, TimelineIemLocalizationProps, TimelineDescription } from "../components/Timeline"
import SectionTitle from "../components/SectionTitle"
import SkillsList from "../components/SkillsList"
import { useTranslation } from 'react-i18next';

import cmu from "../assets/images/education/cmu.jpg"
import ensimag from "../assets/images/education/ensimag.png"
import polytech from "../assets/images/education/polytech.png"
import iut from "../assets/images/education/iut.png"
import saintAubin from "../assets/images/education/saint-aubin.jpg"

import "/src/assets/styles/education.css"


const Education = () => {
    const orientation = window.innerWidth > 1024 ? DeviceOrientation.Landscape : DeviceOrientation.Portrait;
    const { t } = useTranslation(['education']);

    const educationImages: { [key: string]: string } = {
        cmu: cmu,
        ensimag: ensimag,
        polytech: polytech,
        iut: iut,
        saintAubin: saintAubin
    }

    const educationSkills: { [key: string]: string[] } = {
        cmu: ["C++", "AWS", "Azure", "GCP", "Docker", "Terraform", "Kubernetes", "Github Actions", "Machine Learning"],
        ensimag: ["Python", "Java", "C", "SQL", "Git", "Linux", "VS Code"],
        polytech: [],
        iut: ["Go", "Kotlin", "Python", "SQL", "MongoDB", "PHP", "HTML5", "CSS3", "JavaScript", "React", "Git", "IntelliJ IDEA"],
        saintAubin: []
    }

    const educationBackgroundColors: { [key: string]: string } = {
        cmu: "bg-[--cmu-color]",
        ensimag: "bg-[--ensimag-color]",
        polytech: "bg-[--polytech-color]",
        iut: "bg-[--iut-color]",
        saintAubin: "bg-[--saint-aubin-color]"
    }

    const educationBorderColors: { [key: string]: string } = {
        cmu: "border-[--cmu-color]",
        ensimag: "border-[--ensimag-color]",
        polytech: "border-[--polytech-color]",
        iut: "border-[--iut-color]",
        saintAubin: "border-[--saint-aubin-color]"
    }

    return (
        <div className="min-h-[100vh]">
            <SectionTitle
                title={t("section-title")}
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
                                    skills={educationSkills[education.id]}
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