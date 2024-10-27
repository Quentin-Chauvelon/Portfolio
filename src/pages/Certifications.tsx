import { DeviceOrientation, Timeline, TimelineItem, TimelineIemLocalizationProps, TimelineDescription } from "../components/Timeline"
import SectionTitle from "../components/SectionTitle"
import { useTranslation } from 'react-i18next';

import axa from "../assets/images/certifications/axa.svg"
import creditMutuel from "../assets/images/certifications/credit-mutuel.svg"
import ets from "../assets/images/certifications/ets.svg"

import "/src/assets/styles/certifications.css"


const Certifications = () => {
    const orientation = window.innerWidth > 1024 ? DeviceOrientation.Landscape : DeviceOrientation.Portrait;
    const { t } = useTranslation(['certifications']);

    const certificationsImages: { [key: string]: string } = {
        axa: axa,
        euroInformation: creditMutuel,
        ets: ets
    }

    const certificationsBackgroundColors: { [key: string]: string } = {
        axa: "bg-[--axa-color]",
        euroInformation: "bg-[--credit-mutuel-color]",
        ets: "bg-[--ets-color]"
    }

    const certificationsBorderColors: { [key: string]: string } = {
        axa: "border-[--axa-color]",
        euroInformation: "border-[--credit-mutuel-color]",
        ets: "border-[--ets-color]"
    }

    return (
        <div className="min-h-[100vh]">

            <SectionTitle
                title={t("section-title")}
                topMargin="mt-24"
            />

            <Timeline>
                {
                    t<'data', { returnObjects: true }, TimelineIemLocalizationProps[]>("data", { returnObjects: true }).map((certification, i) => (
                        < TimelineItem
                            key={i}
                            image={certificationsImages[certification.id]}
                            title={certification.title}
                            heading={certification.heading}
                            subHeading={certification.subheading}
                            date={certification.date}
                            backgroundColor={certificationsBackgroundColors[certification.id]}
                            borderColor={certificationsBorderColors[certification.id]}
                            orientation={orientation}
                            even={i % 2 === 0}
                        >
                            <TimelineDescription
                                description={certification.description}
                            />
                        </TimelineItem>
                    ))
                }
            </Timeline>
        </div>
    )
}

export default Certifications