import { Fade } from "./Animation"

import { lua, c, cSharp, python, java, kotlin, go, php, html5, css3, javascript, typescript, sql, mysql, sqlServer, sqlite, mongodb, dotnetCore, react, tailwindCss, codeigniter, linux, git, agile, vscode, visualStudio, intellij, postman, vite, bash, nodejs, cpp, aws, azure, gcp, docker, terraform, kubernetes, githubActions, ml } from "../assets/images/skills_icons"

const skillsList: { [key: string]: string } = {
    ["Lua"]: lua,
    ["C"]: c,
    ["C#"]: cSharp,
    ["Python"]: python,
    ["Java"]: java,
    ["Kotlin"]: kotlin,
    ["Go"]: go,
    ["PHP"]: php,
    ["HTML5"]: html5,
    ["CSS3"]: css3,
    ["JavaScript"]: javascript,
    ["TypeScript"]: typescript,
    ["SQL"]: sql,
    ["MySQL"]: mysql,
    ["SQL Server"]: sqlServer,
    ["SQLite"]: sqlite,
    ["MongoDB"]: mongodb,
    [".NET Core"]: dotnetCore,
    ["React"]: react,
    ["Tailwind CSS"]: tailwindCss,
    ["CodeIgniter"]: codeigniter,
    ["Linux"]: linux,
    ["Git"]: git,
    ["Agile"]: agile,
    ["VS Code"]: vscode,
    ["Visual Studio"]: visualStudio,
    ["IntelliJ IDEA"]: intellij,
    ["Postman"]: postman,
    ["Vite"]: vite,
    ["Bash"]: bash,
    ["Node.js"]: nodejs,
    ["C++"]: cpp,
    ["AWS"]: aws,
    ["Azure"]: azure,
    ["GCP"]: gcp,
    ["Docker"]: docker,
    ["Terraform"]: terraform,
    ["Kubernetes"]: kubernetes,
    ["Github Actions"]: githubActions,
    ["Machine Learning"]: ml
}

type SkillsListProps = {
    skills: string[],
    borderColor: string,
    align?: "justify-center" | "justify-start" | "justify-end"
}

const SkillsList = ({ skills, borderColor, align }: SkillsListProps) => {
    return (
        <div className={"flex " + (align ? align : "justify-center") + " w-full"} >
            {
                Object.keys(skills.reduce((acc, skill) => ({ ...acc, [skill]: skillsList[skill] }), {})).map((skill, i) => (
                    <Fade
                        fromValue={0}
                        toValue={1}
                        delay={i * 0.1}
                        key={i}
                        styles={"flex justify-center items-center -mx-1 p-[0.35rem] aspect-square rounded-full border-2 bg-[--white] w-[48px] " + borderColor + " tooltip"}
                        data={{ ["data-tooltip"]: skill }}
                    >
                        <img src={skillsList[skill] as string} alt={skill} className={"w-full h-full object-contain"} />
                    </Fade>
                ))
            }
        </div >
    )
}

export default SkillsList