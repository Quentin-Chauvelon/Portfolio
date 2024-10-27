import { DeviceOrientation, Timeline, TimelineItem, TimelineBodyList, TimelineBodyParagraph } from "../components/Timeline"
import SectionTitle from "../components/SectionTitle"
import SkillsList from "../components/SkillsList"

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
                    title="Software Developer Intern"
                    heading="SEPAMAT"
                    subHeading="Orvault, France"
                    date="April 2023 - June 2023"
                    backgroundColor="bg-[--sepamat-color]"
                    borderColor="border-[--sepamat-color]"
                    orientation={orientation}
                    even={true}
                >
                    <>
                    <TimelineBodyList
                        listItems={[
                            "Designed and deployed a web application in PHP and SQL in order to make the insurance process easier, faster and more organized for 60 agencies",
                            "Designed and deployed an application in C# with the .NET framework to automatically mail invoices to more than 100 clients per month",
                                "Fully developed a dashboard in C# using the ASP.NET framework to monitor the automatic mailing of invoices",
                                "Implemented a new dashboard to provide statistics of the company's ticketing application in HTML, CSS and JavaScript using the Highcharts library",
                                "Prepared and conducted a phishing test for the company's employees"
                        ]}
                        marginTop
                        marginBottom
                    />

                        <SkillsList
                            skills={["SQL Server", "PHP", "HTML5", "CSS3", "JavaScript", "C#", ".NET Core", "Visual Studio Code", "Visual Studio", "Git", "Postman"]}
                            borderColor="border-[--sepamat-color]"
                        />
                    </>
                </TimelineItem>

                <TimelineItem
                    image={uExpress}
                    title="Summer Job: Stocker"
                    heading="U Express Les Marines"
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

                <TimelineItem
                    image={uExpress}
                    title="Stocker"
                    heading="Super U Les Banchais"
                    subHeading="Saint-Barthélemy-d'Anjou, France"
                    date="October 2020 - February 2021"
                    backgroundColor="bg-[--u-express-color]"
                    borderColor="border-[--u-express-color]"
                    orientation={orientation}
                    even={true}
                >
                    <>
                        <TimelineBodyParagraph
                            text={"I worked part-time as a stocker during the week-end and holidays"}
                            marginTop
                        />

                        <TimelineBodyList
                            listItems={[
                                "Restocked shelves",
                            ]}
                            marginTop
                            marginBottom
                        />
                    </>
                </TimelineItem>
            </Timeline>
        </div >
    )
}

export default Experience