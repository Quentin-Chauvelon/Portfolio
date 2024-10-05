import { Fade } from "./Animation"

type SkillsListProps = {
    skills: { [string: string]: string },
    borderColor: string,
    align?: "justify-center" | "justify-start" | "justify-end"
}

const SkillsList = ({ skills, borderColor, align }: SkillsListProps) => {
    return (
        <div className={"flex " + (align ? align : "justify-center") + " w-full"} >
            {
                Object.keys(skills).map((skill, i) => (
                    <Fade
                        fromValue={0}
                        toValue={1}
                        delay={i * 0.1}
                        key={i}
                        styles={"flex justify-center items-center -mx-1 p-[0.35rem] aspect-square rounded-full border-2 bg-[--white] w-[48px] h-[48px] " + borderColor + " tooltip"}
                        data={{ ["data-tooltip"]: skill }}
                    >
                        <img src={skills[skill] as string} alt={skill} className={"w-full h-full"} />
                    </Fade>
                ))
            }
        </div >
    )
}

export default SkillsList