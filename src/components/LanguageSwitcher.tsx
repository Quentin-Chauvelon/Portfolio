import frFlag from "/src/assets/images/fr-flag.svg"
import enFlag from "/src/assets/images/en-flag.svg"
import { Language, getCurrentLanguage } from "../i18next"

type LanguageSwitcherProps = {
    changeLanguage: (lng: string) => void
}

const LanguageSwitcher = ({ changeLanguage }: LanguageSwitcherProps) => {
    return (
        <div className='fixed bottom-0 right-0 m-2'>
            <img src={enFlag} alt="EN" onClick={() => changeLanguage('en')} className={getCurrentLanguage() === Language.English ? "hidden" : "inline"} />
            <img src={frFlag} alt="FR" onClick={() => changeLanguage('fr')} className={getCurrentLanguage() === Language.French ? "hidden" : "inline"} />
        </div>
    )
}

export default LanguageSwitcher