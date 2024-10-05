import { Slide, SlideDirection } from "./Animation"

import "/src/assets/styles/timeline.css"


export enum DeviceOrientation {
    Portrait,
    Landscape
}


type TimelineItemContentContainerProps = {
    title: string,
    heading: string,
    subHeading: string
    date: string,
    borderColor: string,
    orientation: DeviceOrientation,
    even: boolean,
    children: JSX.Element
}


const TimelineItemContentContainer = ({ title, heading, subHeading, date, borderColor, orientation, even, children }: TimelineItemContentContainerProps) => {
    return (
        <Slide
            direction={orientation === DeviceOrientation.Landscape && even ? SlideDirection.Left : SlideDirection.Right}
            styles={"relative flex flex-col gap-1 w-[calc(var(--content-container-width)-var(--arrow-size))] p-4 pb-2 bg-[--white] rounded-lg border-b-[0.5rem] " + borderColor + " card-shadow " + (orientation === DeviceOrientation.Landscape && even ? "mr-[--arrow-size]" : "ml-[--arrow-size]")}
        >
            <div className={"absolute w-[--arrow-size] h-[--arrow-size] bg-inherit top-[--arrow-top] " + (orientation === DeviceOrientation.Landscape && even ? "right-[--arrow-left]" : "left-[--arrow-left]") + " rotate-45"}></div>

            <h2 className="md:text-2xl xl:text-base font-bold">{title}</h2>

            <div className="flex flex-col">
                <h3 className="text-sm md:text-lg xl:text-sm font-medium">{heading}</h3>
                <h4 className="text-xs md:text-base xl:text-xs font-extralight">{subHeading}</h4>
            </div>

            {children}

            {window.innerWidth < 1248
                ? <p className="text-xs md:text-base font-medium text-center">{date}</p>
                : <></>
            }
        </Slide>
    )
}


type TimelineItemProps = {
    image: string,
    backgroundColor: string
}

export const TimelineItem = ({ image, backgroundColor, ...props }: TimelineItemProps & TimelineItemContentContainerProps) => {
    return (
        <div className={"flex justify-center " + (props.orientation === DeviceOrientation.Landscape && props.even ? "flex-row-reverse" : "flex-row") + " gap-1 md:gap-3 p-3"}>
            {props.orientation === DeviceOrientation.Landscape &&
                <Slide
                    direction={props.orientation === DeviceOrientation.Landscape && props.even ? SlideDirection.Right : SlideDirection.Left}
                    styles={"w-[--content-container-width]"}
                >
                    <p className={"mt-[calc(var(--icon-size)/2-(0.875rem/2)-6px)] text-sm font-medium " + (props.even ? "text-left" : "text-right")}>{props.date}</p>
                </Slide >
            }

            <Slide
                direction={(SlideDirection.Left)}
                translationValue={props.orientation === DeviceOrientation.Portrait ? 50 : 1}
                styles={"flex justify-center items-center w-[--icon-size] h-[--icon-size] aspect-square " + backgroundColor + " p-3 rounded-full border-[--white] border-4 shadow-md"}
            >
                <img src={image} />
            </Slide >

            <TimelineItemContentContainer
                {...props}
            />
        </div >
    )
}


type TimelineProps = {
    children: JSX.Element[]
}

export const Timeline = ({ children }: TimelineProps) => {
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
            document.documentElement.style.setProperty("--icon-size", "14vw");
            document.documentElement.style.setProperty("--content-container-width", "calc(85vw - var(--icon-size))");
            document.documentElement.style.setProperty("--arrow-size", "0.75rem");
            document.documentElement.style.setProperty("--timeline-width", "0.5rem");
        } else {
            document.documentElement.style.setProperty("--icon-size", "8vw");
            document.documentElement.style.setProperty("--content-container-width", "calc(85vw - var(--icon-size))");
            document.documentElement.style.setProperty("--arrow-size", "1.25rem");
            document.documentElement.style.setProperty("--timeline-width", "0.5rem");
        }
    } else {
        document.documentElement.style.setProperty("--icon-size", "5vw");
        document.documentElement.style.setProperty("--arrow-size", "1rem");
        document.documentElement.style.setProperty("--content-container-width", "calc((60vw - var(--icon-size)) / 2");
    }

    return (
        <div className="relative">
            <div className={"absolute top-0 " + (window.innerWidth < 1248 ? "left-[--timeline-left]" : "left-1/2 translate-x-1/2") + " w-[--timeline-width] h-full -ml-1 md:-ml-2 bg-[--white]"} />

            {children}
        </div>
    )
}


type TimelineItemBodyProps = {
    marginTop?: boolean
    marginBottom?: boolean
}


type TimelineItemBodyParagraphProps = {
    text: string
}


export const TimelineBodyParagraph = ({ text, marginTop, marginBottom }: TimelineItemBodyParagraphProps & TimelineItemBodyProps) => {
    return (
        <p className={(marginTop ? "mt-3 " : "") + (marginBottom ? " mb-3 " : "") + " space-y-2 text-xs md:text-base xl:text-xs leading-5 font-extralight list-disc"}>{text}</p>
    )
}


type TimelineItemBodyListProps = {
    listItems: string[]
}

export const TimelineBodyList = ({ listItems, marginTop, marginBottom }: TimelineItemBodyListProps & TimelineItemBodyProps) => {
    return (
        <ul className={(marginTop ? "mt-3 " : "") + (marginBottom ? " mb-3 " : "") + " ml-4 space-y-2 text-xs md:text-base xl:text-xs leading-5 font-extralight list-disc"}>
            {listItems.map((desc, index) => (
                <li key={index}>{desc}</li>
            ))}
        </ul>
    )
}