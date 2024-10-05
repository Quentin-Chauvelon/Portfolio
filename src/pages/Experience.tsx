import SectionTitle from "../components/SectionTitle"
import { Slide, SlideDirection } from "../components/Animation"

import "/src/assets/styles/experience.css"

import sepamat from "/src/assets/images/experience/sepamat.png"
import uExpress from "/src/assets/images/experience/u-express.png"


enum DeviceOrientation {
    Portrait,
    Landscape
}


type ExperienceContentContainerProps = {
    title: string,
    company: string,
    location: string
    date: string,
    description: string[],
    borderColor: string,
    orientation: DeviceOrientation,
    even: boolean
}

const ExperienceContentContainer = ({ title, company, location, date, description, borderColor, orientation, even }: ExperienceContentContainerProps) => {
    return (
        <Slide
            direction={orientation === DeviceOrientation.Landscape && even ? SlideDirection.Left : SlideDirection.Right}
            styles={"relative flex flex-col gap-1 w-[calc(var(--mobile-experience-content-container-width)-var(--mobile-experience-arrow-size))] p-4 pb-2 bg-[--white] rounded-lg border-b-[0.5rem] " + borderColor + " card-shadow " + (orientation === DeviceOrientation.Landscape && even ? "mr-[--mobile-experience-arrow-size]" : "ml-[--mobile-experience-arrow-size]")}
        >
            <div className={"absolute w-[--mobile-experience-arrow-size] h-[--mobile-experience-arrow-size] bg-inherit top-[--mobile-experience-arrow-top] " + (orientation === DeviceOrientation.Landscape && even ? "right-[--mobile-experience-arrow-left]" : "left-[--mobile-experience-arrow-left]") + " rotate-45"}></div>

            <h2 className="md:text-2xl xl:text-base font-bold">{title}</h2>

            <div className="flex flex-col">
                <h3 className="text-sm md:text-lg xl:text-sm font-medium">{company}</h3>
                <h4 className="text-xs md:text-base xl:text-xs font-extralight">{location}</h4>
            </div>

            <ul className="my-3 ml-4 space-y-2 text-xs md:text-base xl:text-xs leading-5 font-extralight list-disc">
                {description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                ))}
            </ul>

            {window.innerWidth < 1248
                ? <p className="text-xs md:text-base font-medium text-center">{date}</p>
                : <></>
            }
        </Slide>
    )
}


type ExperienceItemProps = {
    image: string,
    backgroundColor: string
}

const ExperienceItem = ({ image, backgroundColor, ...props }: ExperienceItemProps & ExperienceContentContainerProps) => {
    return (
        <div className={"flex justify-center " + (props.orientation === DeviceOrientation.Landscape && props.even ? "flex-row-reverse" : "flex-row") + " gap-1 md:gap-3 p-3"}>
            {props.orientation === DeviceOrientation.Landscape &&
                <Slide
                    direction={props.orientation === DeviceOrientation.Landscape && props.even ? SlideDirection.Right : SlideDirection.Left}
                    styles={"w-[--mobile-experience-content-container-width]"}
                >
                    <p className={"mt-[calc(var(--mobile-experience-icon-size)/2-(0.875rem/2)-6px)] text-sm font-medium " + (props.even ? "text-left" : "text-right")}>{props.date}</p>
                </Slide >
            }

            <Slide
                direction={(SlideDirection.Left)}
                translationValue={props.orientation === DeviceOrientation.Portrait ? 50 : 1}
                styles={"flex justify-center items-center w-[--mobile-experience-icon-size] h-[--mobile-experience-icon-size] aspect-square " + backgroundColor + " p-3 rounded-full border-[--white] border-4 shadow-md"}
            >
                <img src={image} alt={props.company} />
            </Slide >

            <ExperienceContentContainer
                {...props}
            />
        </div >
    )
}


const Experience = () => {
    const orientation = window.innerWidth > 1024 ? DeviceOrientation.Landscape : DeviceOrientation.Portrait;

    /*
    Mobile and desktop and have 2 very different layouts (1 column vs 2 columns) and sizes
    Thus, in order to reuse the components defined above, we can't use the same CSS variables.
    I decided to simply override the CSS values based on the width of the device.
    A better idea would have been to have 2 sets of CSS variables (one for mobile and another for desktop),
    and then dynamically update the name of the variable we want (eg: "--" + orientation + "-icon-size").
    This unfortunately doesn't work since Tailwind can't resolve dynamic class names, unless they are added
    to the safelist in the config which would have made this a lot less maintanable
    */
    if (orientation === DeviceOrientation.Portrait) {
        if (window.innerWidth < 650) {
            document.documentElement.style.setProperty("--mobile-experience-icon-size", "14vw");
            document.documentElement.style.setProperty("--mobile-experience-content-container-width", "calc(85vw - var(--mobile-experience-icon-size))");
            document.documentElement.style.setProperty("--mobile-experience-arrow-size", "0.75rem");
            document.documentElement.style.setProperty("--mobile-timeline-width", "0.5rem");
        } else {
            document.documentElement.style.setProperty("--mobile-experience-icon-size", "8vw");
            document.documentElement.style.setProperty("--mobile-experience-content-container-width", "calc(85vw - var(--mobile-experience-icon-size))");
            document.documentElement.style.setProperty("--mobile-experience-arrow-size", "1.25rem");
            document.documentElement.style.setProperty("--mobile-timeline-width", "0.5rem");
        }
    } else {
        document.documentElement.style.setProperty("--mobile-experience-icon-size", "5vw");
        document.documentElement.style.setProperty("--mobile-experience-arrow-size", "1rem");
        document.documentElement.style.setProperty("--mobile-experience-content-container-width", "calc((60vw - var(--mobile-experience-icon-size)) / 2");
    }

    return (
        <div className="min-h-[100vh]">
            <SectionTitle
                title="EXPERIENCE"
                topMargin={"mt-24"}
            />

            <div className="relative">
                <div className={"absolute top-0 " + (window.innerWidth < 1248 ? "left-[--mobile-timeline-left]" : "left-1/2 translate-x-1/2") + " w-[--mobile-timeline-width] h-full -ml-1 md:-ml-2 bg-[--white]"}></div>

                <ExperienceItem
                    image={sepamat}
                    title="Software Developer"
                    company="SEPAMAT"
                    location="Orvault, France"
                    date="April 2023 - June 2023"
                    description={[
                        "Designed and deployed a web application in PHP and SQL in order to make the insurance process easier, faster and more organized for 60 agencies",
                        "Designed and deployed an application in C# with the .NET framework to automatically mail invoices to more than 100 clients per month",
                        "Fully developed a dashboard in C# using the ASP.NET framework to monitor the automatic mailing of invoices"
                    ]}
                    backgroundColor="bg-[--sepamat-color]"
                    borderColor="border-[--sepamat-color]"
                    orientation={orientation}
                    even={true}
                />

                <ExperienceItem
                    image={uExpress}
                    title="Summer Job: Stocker"
                    company="U Express"
                    location="Saint-Hilaire-de-Riez, France"
                    date="Every summer since 2020"
                    description={[
                        "Restocked shelves",
                        "Trained new seasonal workers",
                        "Managed my department for 3 weeks independently"
                    ]}
                    backgroundColor="bg-[--u-express-color]"
                    borderColor="border-[--u-express-color]"
                    orientation={orientation}
                    even={false}
                />
            </div>
        </div >
    )
}

export default Experience