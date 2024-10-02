import SectionTitle from "../components/SectionTitle"

import "/src/assets/styles/experience.css"
import { Slide, SlideDirection } from "../components/Animation"


type ExperienceContentProps = {
    image: string,
    title: string,
    company: string,
    location: string,
    date: string,
    description: string[],
    backgroundColor: string,
    borderColor: string
}

const ExperienceContent = ({ image, title, company, location, date, description, backgroundColor, borderColor }: ExperienceContentProps) => {
    return (
        <div className="flex justify-evenly p-3">
            <Slide
                direction={SlideDirection.Left}
                styles={"flex justify-center items-center w-[--mobile-experience-icon-size] h-[--mobile-experience-icon-size] aspect-square " + backgroundColor + " p-2 rounded-full border-[--white] border-4 shadow-md"}
            >
                <img src={image} alt={company} />
            </Slide >

            <Slide
                direction={SlideDirection.Right}
                styles={"relative flex flex-col gap-1 w-[--mobile-experience-content-container-width] ml-2 p-4 pb-2 bg-[--white] rounded-lg border-b-[0.5rem] " + borderColor + " card-shadow"}
            >
                <div className="absolute w-[--mobile-experience-arrow-size] h-[--mobile-experience-arrow-size] bg-inherit top-[--mobile-experience-arrow-top] left-[--mobile-experience-arrow-left] rotate-45"></div>

                <h2 className="font-bold">{title}</h2>

                <div className="flex flex-col">
                    <h3 className="text-sm font-medium">{company}</h3>
                    <h4 className="text-xs font-extralight">{location}</h4>
                </div>

                <ul className="my-3 ml-4 space-y-2 text-xs leading-5 font-light list-disc">
                    {description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}
                </ul>

                <p className="text-xs font-medium text-center">{date}</p>
            </Slide>
        </div >
    )
}


const Experience = () => {
    return (
        <div className="min-h-[100vh]">
            <SectionTitle
                title="EXPERIENCE"
                topMargin={"mt-24"}
            />

            <div className="relative">
                <div className="absolute top-0 left-[--mobile-timeline-left] w-[--mobile-timeline-width] h-full bg-[--white]"></div>

                <ExperienceContent
                    image="/src/assets/images/experience/sepamat.png"
                    title="Software Developer"
                    company="SEPAMAT"
                    location="Orvault"
                    date="April 2023 - June 2023"
                    description={[
                        "Designed and deployed a web application in PHP and SQL in order to make the insurance process easier, faster and more organized for 60 agencies",
                        "Designed and deployed an application in C# with the .NET framework to automatically mail invoices to more than 100 clients per month",
                        "Fully developed a dashboard in C# using the ASP.NET framework to monitor the automatic mailing of invoices"
                    ]}
                    backgroundColor="bg-[--sepamat-color]"
                    borderColor="border-[--sepamat-color]"
                />

                <ExperienceContent
                    image="/src/assets/images/experience/u-express.png"
                    title="Summer Job: Stocker"
                    company="U Express Les Marines"
                    location="Saint-Hilaire-de-Riez"
                    date="Every summer since 2020"
                    description={[
                        "Restocking",
                        "Training of new seasonal workers",
                        "Managed my department for 3 weeks independently"
                    ]}
                    backgroundColor="bg-[--u-express-color]"
                    borderColor="border-[--u-express-color]"
                />
            </div>
        </div >
    )
}

export default Experience