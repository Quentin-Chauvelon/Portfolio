function Floor() {
    return (
        <>
            <mesh dispose={null}
                scale={[1, 1, 1]}
                receiveShadow={true}
                rotation={[0.7 * Math.PI / 4 - Math.PI / 2, -Math.PI / 4 + Math.PI / 4, Math.PI / 4]}
                position={[0, -10, -15]}
            >
                <meshBasicMaterial color={getComputedStyle(document.documentElement).getPropertyValue("--bg-color")} />
                <planeGeometry args={[1000, 1000]} />
            </mesh >
        </>
    )
}

export default Floor