import { useState } from 'react'
import Toggle from '../components/Toggle'

import resumeOneColumn from '../assets/Resume_Quentin_Chauvelon.pdf'
import resumeTwoColumns from '../assets/Resume_Quentin_Chauvelon_Two_Columns.pdf'

import oneColumn from "../assets/images/one-column.png"
import twoColumns from "../assets/images/two-columns.png"

enum ResumeType {
    OneColumn,
    TwoColumn
}


const Resume = () => {
    const [resumeType, setResumeType] = useState(ResumeType.OneColumn)

    const toggleResumeType = (enabled: boolean) => {
        setResumeType(enabled ? ResumeType.TwoColumn : ResumeType.OneColumn)
    }

    return (
        <div className="flex flex-col justify-center items-center gap-8 min-h-[100vh]">
            <div className="flex items-center gap-8 mt-20">
                <a href={resumeType == ResumeType.OneColumn ? resumeOneColumn : resumeTwoColumns} target="_blank" className="px-2 py-1 bg-[--gray-700] text-base font-semibold text-[--white] hover:text-[--white] rounded-md">DOWNLOAD RESUME</a>

                <Toggle
                    defaultEnabled={false}
                    callback={toggleResumeType}
                    iconLeft={oneColumn}
                    iconRight={twoColumns}
                />
            </div>

            <div className="w-full max-w-[85vw] md:max-w-[40vw] mb-12 shadow-lg aspect-[21/29]">
                <object data={resumeType == ResumeType.OneColumn ? resumeOneColumn : resumeTwoColumns} width="100%" height="100%" type="application/pdf" className="flex justify-center items-center">
                    <p className="text-center text-[--gray-700]" >{"Unable to load resume " + (window.innerWidth < 1024 ? "on mobile" : "") + ". Please click the button above to download it"}</p>
                </object>
            </div>
        </div>
    )
}

export default Resume