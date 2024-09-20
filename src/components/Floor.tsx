import { useFrame } from "@react-three/fiber"
import { useRef } from "react";
import { MeshStandardMaterial } from "three";

function Floor() {
    const palettes = [["#9bc7ec", "#4d91ff"], ["#2f4a75", "#243756"]]
    const selectedPalette: number = 0;

    let visibility = true;
    let backgroundColor = "#ffffff";
    if (selectedPalette == -1) {
        visibility = false;
    }
    else {
        (document.querySelector(":root") as HTMLElement).style.setProperty("--bg-color", palettes[selectedPalette][0]);
        backgroundColor = palettes[selectedPalette][1];
    }

    return (
        <>
            <mesh dispose={null}
                scale={[1, 1, 1]}
                receiveShadow={true}
                rotation={[0.7 * Math.PI / 4 - Math.PI / 2, -Math.PI / 4 + Math.PI / 4, Math.PI / 4]}
                position={[0, -10, -15]}
            >
                <meshStandardMaterial color={backgroundColor} visible={visibility} />
                <planeGeometry args={[1000, 1000]} />
            </mesh >
        </>
    )
}

export default Floor