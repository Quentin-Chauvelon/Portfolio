import { AnimateProperties } from "./Animation"

type SectionTitleProps = {
    title: string
    topMargin?: string
    bottomMargin?: string
}

const TitleBar = () => {
    return (
        <AnimateProperties
            fromValues={{
                ["width"]: 0,
                ["backgroundColor"]: "#242424"
            }}
            toValues={{
                ["width"]: "100%",
                ["backgroundColor"]: "#E6E6E2"
            }}
            duration={1}
            styles="h-[2px] xl:h-[3px] bg-[--gray-300]"
        />
    )
}

const SectionTitle = ({ title, topMargin, bottomMargin }: SectionTitleProps) => {
    return (
        <div className={"flex justify-center items-center " + (topMargin ? topMargin : "mt-44") + " " + (bottomMargin ? bottomMargin : "mb-16") + " px-4 lg:px-8 gap-4 w-full"}>
            <TitleBar />
            <h1 className="font-bold text-[--gray-600] text-2xl lg:text-3xl whitespace-nowrap">{title}</h1>
            <TitleBar />
        </div>
    )
}

export default SectionTitle