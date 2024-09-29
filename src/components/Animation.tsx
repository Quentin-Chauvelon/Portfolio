import { motion } from "framer-motion"

const playOnce = true;

type AnimationProps = {
    styles: string,
    children?: JSX.Element | JSX.Element[]
    duration?: number
    data?: { [key: string]: number | string }
}

export enum SlideDirection {
    Top,
    Right,
    Bottom,
    Left
}

type SlideProps = {
    direction: SlideDirection,
    translationValue?: number
}

type AnimatePropertyProps = {
    property: string,
    fromValue: number | string,
    toValue: number | string,
}

type AnimatePropertiesProps = {
    fromValues: { [key: string]: number | string },
    toValues: { [key: string]: number | string },
}

type FadeProps = {
    fromValue: number,
    toValue: number,
    delay?: number
}


export const Slide = ({ direction, translationValue, duration, styles, children }: SlideProps & AnimationProps) => {
    let translationX, translationY = 0;

    switch (direction) {
        case SlideDirection.Top:
            translationY = translationValue || 50;
            break;
        case SlideDirection.Right:
            translationX = translationValue || 50;
            break;
        case SlideDirection.Bottom:
            translationY = -(translationValue || 50);
            break;
        case SlideDirection.Left:
            translationX = -(translationValue || 50);
            break;
    }

    return (
        <motion.div
            className={styles}
            initial={{ opacity: 0.5, translateX: translationX, translateY: translationY }}
            whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{ duration: duration || .5 }}
            viewport={{ once: playOnce }}
        >
            {children}
        </motion.div>
    )
}

export const AnimateProperty = ({ property, fromValue, toValue, styles, duration, children }: AnimatePropertyProps & AnimationProps) => {
    return (
        <motion.div
            className={styles}
            initial={{ [property]: fromValue }}
            whileInView={{ [property]: toValue }}
            transition={{ duration: duration || .5 }}
            viewport={{ once: playOnce, amount: "all" }}
        >
            {children}
        </motion.div>
    )
}


export const AnimateProperties = ({ fromValues, toValues, styles, duration, children }: AnimatePropertiesProps & AnimationProps) => {
    return (
        <motion.div
            className={styles}
            initial={fromValues}
            whileInView={toValues}
            transition={{ duration: duration || .5 }}
            viewport={{ once: playOnce, amount: "all" }}
        >
            {children}
        </motion.div>
    )
}


export const Fade = ({ fromValue, toValue, delay, styles, children, data }: FadeProps & AnimationProps) => {
    return (
        <motion.div
            className={styles}
            initial={{ opacity: fromValue }}
            whileInView={{ opacity: toValue }}
            transition={{ delay: delay || 0, duration: .5 }}
            viewport={{ once: playOnce, amount: "all" }}
            {...data}
        >
            {children}
        </motion.div >
    )
}