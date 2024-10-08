import { useState } from "react";
import { motion } from "framer-motion";


const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};

type ToggleProps = {
    defaultEnabled: boolean
    callback?: (enabled: boolean) => void
    iconLeft?: string
    iconRight?: string
}

const Toggle = ({ defaultEnabled, callback, iconLeft, iconRight }: ToggleProps) => {
    const [enabled, setEnabled] = useState(defaultEnabled)

    const toggle = () => {
        if (callback) {
            callback(!enabled)
        }

        setEnabled(!enabled)
    }

    return (
        <div className="flex gap-1.5">
            {iconLeft &&
                <img src={iconLeft} className="h-6" />
            }

            <div onClick={toggle} className={"flex " + (enabled ? "justify-end" : "justify-start") + " items-center w-12 h-6 p-1 bg-[--gray-700] card-shadow rounded-full cursor-pointer"}>
                <motion.div className="w-4 h-4 bg-[--white] rounded-full" layout transition={spring} />
            </div>

            {iconRight &&
                <img src={iconRight} className="h-6" />
            }
        </div>
    )
}


export default Toggle