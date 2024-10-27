import { DeviceOrientation, Timeline, TimelineItem, TimelineIemLocalizationProps, TimelineDescription } from "../components/Timeline"
import SectionTitle from "../components/SectionTitle"
import SkillsList from "../components/SkillsList"
import { useTranslation } from "react-i18next"

import "/src/assets/styles/experience.css"

import sepamat from "/src/assets/images/experience/sepamat.png"
import uExpress from "/src/assets/images/experience/u-express.png"


const Experience = () => {
    const orientation = window.innerWidth > 1024 ? DeviceOrientation.Landscape : DeviceOrientation.Portrait;
    const { t } = useTranslation(['experience']);

    const experienceImages: { [key: string]: string } = {
        sepamat: sepamat,
        u_express: uExpress,
        super_u_banchais: uExpress,
    }

    const experienceSkills: { [key: string]: string[] } = {
        sepamat: ["SQL Server", "PHP", "HTML5", "CSS3", "JavaScript", "C#", ".NET Core", "VS Code", "Visual Studio", "Git", "Postman"],
        u_express: [],
        super_u_banchais: []
    }

    const experienceBackgroundColors: { [key: string]: string } = {
        sepamat: "bg-[--sepamat-color]",
        u_express: "bg-[--u-express-color]",
        super_u_banchais: "bg-[--u-express-color]"
    }

    const experienceBorderColors: { [key: string]: string } = {
        sepamat: "border-[--sepamat-color]",
        u_express: "border-[--u-express-color]",
        super_u_banchais: "border-[--u-express-color]"
    }

    return (
        <div className="min-h-[100vh]">
            <SectionTitle
                title={t("section-title")}
                topMargin={"mt-24"}
            />

            <Timeline>
                {
                    t<'data', { returnObjects: true }, TimelineIemLocalizationProps[]>("data", { returnObjects: true }).map((experience, i) => (
                        < TimelineItem
                            key={i}
                            image={experienceImages[experience.id]}
                            title={experience.title}
                            heading={experience.heading}
                            subHeading={experience.subheading}
                            date={experience.date}
                            backgroundColor={experienceBackgroundColors[experience.id]}
                            borderColor={experienceBorderColors[experience.id]}
                            orientation={orientation}
                            even={i % 2 === 0}
                        >
                            <>
                                <TimelineDescription
                                    description={experience.description}
                                />

                                <SkillsList
                                    skills={experienceSkills[experience.id]}
                                    borderColor={experienceBorderColors[experience.id]}
                                />
                            </>
                        </TimelineItem>
                    ))
                }
            </Timeline>
        </div >
    )
}

export default Experience