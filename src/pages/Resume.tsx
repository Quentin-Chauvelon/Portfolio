import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Language, getCurrentLanguage } from "../i18next"

import Toggle from '../components/Toggle'

import resumeOneColumn from '../assets/Resume_Quentin_Chauvelon.pdf'
import resumeTwoColumns from '../assets/Resume_Quentin_Chauvelon_Two_Columns.pdf'
import resumeFR from '../assets/CV_Quentin_Chauvelon.pdf'

import oneColumn from "../assets/images/one-column.png"
import twoColumns from "../assets/images/two-columns.png"

enum ResumeType {
    OneColumn,
    TwoColumn
}


const Resume = () => {
    const [resumeType, setResumeType] = useState(ResumeType.OneColumn)
    const { t } = useTranslation(['resume']);

    const resume = getCurrentLanguage() === Language.English
        ? resumeType == ResumeType.OneColumn ? resumeOneColumn : resumeTwoColumns
        : resumeFR

    const toggleResumeType = (enabled: boolean) => {
        setResumeType(enabled ? ResumeType.TwoColumn : ResumeType.OneColumn)
    }

    return (
        <div className="flex flex-col justify-center items-center gap-8 min-h-[100vh]">
            <div className="flex items-center gap-8 mt-20">
                <a href={resumeType == ResumeType.OneColumn ? resumeOneColumn : resumeTwoColumns} target="_blank" className="px-2 py-1 bg-[--gray-700] text-base font-semibold text-[--white] hover:text-[--white] rounded-md">{t("download-resume")}</a>

                {
                    getCurrentLanguage() === Language.English &&
                    <Toggle
                        defaultEnabled={false}
                        callback={toggleResumeType}
                        iconLeft={oneColumn}
                        iconRight={twoColumns}
                    />
                }
            </div>

            <div className="w-full max-w-[85vw] md:max-w-[40vw] mb-12 shadow-lg aspect-[21/29]">
                <object data={resume} width="100%" height="100%" type="application/pdf" className="flex justify-center items-center">
                    <p className="text-center text-[--gray-700]" >{(window.innerWidth < 1024 ? t("loading-error-mobile") : t("loading-error"))}</p>
                </object>
            </div>
        </div>
    )
}

export default Resume