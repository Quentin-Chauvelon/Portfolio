import { DeviceOrientation, Timeline, TimelineItem, TimelineBodyList } from "../components/Timeline"
import SectionTitle from "../components/SectionTitle"

import "/src/assets/styles/experience.css"

import sepamat from "/src/assets/images/experience/sepamat.png"
import uExpress from "/src/assets/images/experience/u-express.png"


const Experience = () => {
    const orientation = window.innerWidth > 1024 ? DeviceOrientation.Landscape : DeviceOrientation.Portrait;

    return (
        <div className="min-h-[100vh]">
            <SectionTitle
                title="EXPERIENCE"
                topMargin={"mt-24"}
            />

            <Timeline>
                <TimelineItem
                    image={sepamat}
                    title="Software Developer"
                    heading="SEPAMAT"
                    subHeading="Orvault, France"
                    date="April 2023 - June 2023"
                    backgroundColor="bg-[--sepamat-color]"
                    borderColor="border-[--sepamat-color]"
                    orientation={orientation}
                    even={true}
                >
                    <TimelineBodyList
                        listItems={[
                            "Designed and deployed a web application in PHP and SQL in order to make the insurance process easier, faster and more organized for 60 agencies",
                            "Designed and deployed an application in C# with the .NET framework to automatically mail invoices to more than 100 clients per month",
                            "Fully developed a dashboard in C# using the ASP.NET framework to monitor the automatic mailing of invoices"
                        ]}
                        marginTop
                        marginBottom
                    />
                </TimelineItem>

                <TimelineItem
                    image={uExpress}
                    title="Summer Job: Stocker"
                    heading="U Express"
                    subHeading="Saint-Hilaire-de-Riez, France"
                    date="Every summer since 2020"
                    backgroundColor="bg-[--u-express-color]"
                    borderColor="border-[--u-express-color]"
                    orientation={orientation}
                    even={false}
                >
                    <TimelineBodyList
                        listItems={[
                            "Restocked shelves",
                            "Trained new seasonal workers",
                            "Managed my department for 3 weeks independently"
                        ]}
                        marginTop
                        marginBottom
                    />
                </TimelineItem>
            </Timeline>
        </div >
    )
}

export default Experience