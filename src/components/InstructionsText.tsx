import { Text } from '@react-three/drei'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

const speed = 80;

const InstructionsText = () => {
    const [instructionText, setInstructionText] = useState("")
    const [caret, setCaret] = useState(false)
    const [lastCaretChange, setLastCaretChange] = useState(0)
    const { t } = useTranslation(['scene']);

    const text = t("instructions-text");

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setInstructionText(text.substring(0, i + 1));
                i++;
            } else {
                clearInterval(typingInterval);
                setInstructionText(text);
            }
        }, speed);

        return () => {
            clearInterval(typingInterval);
        };
    }, [text, speed]);

    if (instructionText.length % 6 === 0 && instructionText.length !== lastCaretChange) {
        setLastCaretChange(instructionText.length);
        setCaret(!caret);
    }

    return (
        <group
            position={[0, 0, -15]}
            rotation={[0.7 * Math.PI / 4, -Math.PI / 4, 0]}
        >
            <Text
                color="white"
                fontSize={0.25}
                anchorX="left"
                textAlign="center"
                position={[-5.2, -1.067, 0.3]}
                rotation={[0, Math.PI / 2 + 0.262, 0]}
                maxWidth={2.5}
            >
                {instructionText + (caret ? "|" : "")}
            </Text>
        </group>
    )
}

export default InstructionsText