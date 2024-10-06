import { DeviceOrientation, Timeline, TimelineItem, TimelineBodyParagraph } from "../components/Timeline"
import SectionTitle from "../components/SectionTitle"

import axa from "../assets/images/certifications/axa.svg"
import creditMutuel from "../assets/images/certifications/credit-mutuel.svg"
import ets from "../assets/images/certifications/ets.svg"

import "/src/assets/styles/certifications.css"


const Certifications = () => {
    const orientation = window.innerWidth > 1024 ? DeviceOrientation.Landscape : DeviceOrientation.Portrait;

    return (
        <div className="min-h-[100vh]">
            <SectionTitle
                title="CERTIFICATIONS"
                topMargin={"mt-24"}
            />

            <Timeline>
                <TimelineItem
                    image={axa}
                    title="Best French Computer Science Student 2024"
                    heading="Top Scorer"
                    subHeading="Issued by AXA Group"
                    date="October 2024"
                    backgroundColor="bg-[--axa-color]"
                    borderColor="border-[--axa-color]"
                    orientation={orientation}
                    even={true}
                >
                    <>
                        <TimelineBodyParagraph
                            text="This is a challenge where you have to answers a series of questions about various topics (Cybersecurity, Programming, Data, Cloud, etc.) in a limited time."
                            marginTop
                            marginBottom
                        />
                    </>
                </TimelineItem>

                <TimelineItem
                    image={ets}
                    title="TOEFL iBT"
                    heading="109/120 (C1 - Full professional proficiency)"
                    subHeading="Issued by ETS"
                    date="April 2024"
                    backgroundColor="bg-[--ets-color]"
                    borderColor="border-[--ets-color]"
                    orientation={orientation}
                    even={false}
                >
                    <></>
                </TimelineItem>

                <TimelineItem
                    image={axa}
                    title="Best French Computer Science Student 2023"
                    heading="Top Scorer"
                    subHeading="Issued by AXA Group"
                    date="November 2023"
                    backgroundColor="bg-[--axa-color]"
                    borderColor="border-[--axa-color]"
                    orientation={orientation}
                    even={true}
                >
                    <>
                        <TimelineBodyParagraph
                            text="This is a challenge where you have to answers a series of questions about various topics (Cybersecurity, Programming, Data, Cloud, etc.) in a limited time."
                            marginTop
                            marginBottom
                        />
                    </>
                </TimelineItem>

                <TimelineItem
                    image={creditMutuel}
                    title="Euro-Information Code Contest"
                    heading="Ranked 11th out of 295"
                    subHeading="Issued by Euro-Information (Crédit Mutuel Group)"
                    date="October 2024"
                    backgroundColor="bg-[--credit-mutuel-color]"
                    borderColor="border-[--credit-mutuel-color]"
                    orientation={orientation}
                    even={false}
                >
                    <>
                        <TimelineBodyParagraph
                            text="Competitive programming contest where you have to solve up to 5 algorithmic problems in 2 hours."
                            marginTop
                        />

                        <TimelineBodyParagraph
                            text="This contest has been organized by Euro-Information, the IT subsidiary of the Crédit Mutuel Group."
                            marginBottom
                        />
                    </>
                </TimelineItem>
            </Timeline>
        </div>
    )
}

export default Certifications