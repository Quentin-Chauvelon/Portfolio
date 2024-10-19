import { useTranslation } from "react-i18next"

import frFlag from "/src/assets/images/fr-flag.svg"
import enFlag from "/src/assets/images/en-flag.svg"

type LanguageSwitcherProps = {
    changeLanguage: (lng: string) => void
}

const LanguageSwitcher = ({ changeLanguage }: LanguageSwitcherProps) => {
    const { i18n } = useTranslation()

    return (
        <div className='fixed bottom-0 right-0 m-2'>
            <img src={enFlag} alt="EN" onClick={() => changeLanguage('en')} className={i18n.language.includes("en") ? "hidden" : "hidden"} />
            <img src={frFlag} alt="FR" onClick={() => changeLanguage('fr')} className={i18n.language.includes("fr") ? "hidden" : "hidden"} />
        </div>
    )
}

export default LanguageSwitcher