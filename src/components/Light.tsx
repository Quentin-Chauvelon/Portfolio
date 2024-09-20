import { useRef, useState, useEffect } from 'react'
import { useHelper } from '@react-three/drei'
import { Color, DirectionalLight, DirectionalLightHelper } from 'three'
import { log } from 'three/webgpu';

const Light = () => {
    const dirLight = useRef(new DirectionalLight(0xffffff, 1));
    const helper = useHelper(dirLight, DirectionalLightHelper, 1, "#ffffff");

    // Hide the helper. For some reason, it can't simply be removed, otherwise the
    // lighting breaks completely.
    useEffect(() => {
        if (helper.current) {
            helper.current.visible = false;
        }
    });

    return (
        <>
            <directionalLight
                ref={dirLight}
                // position={[0, 2, -10]}
                position={[-4, 12, -1]}
                intensity={4}
                // target-position={[0, 0, -15]}
                target-position={[0, 0, -15]}
                castShadow={true}
                shadow-bias={-0.01}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-near={0}
                shadow-camera-far={30}
                shadow-camera-left={-12}
                shadow-camera-right={13}
                shadow-camera-top={15}
                shadow-camera-bottom={-12}
            // position={[9, 5, -17]}
            // intensity={4}
            // target-position={[14, 0, -30]}
            // castShadow={true}
            // shadow-bias={-0.01}
            // shadow-mapSize-width={1024}
            // shadow-mapSize-height={1024}
            // shadow-camera-near={0.5}
            // shadow-camera-far={20}
            // shadow-camera-left={-10}
            // shadow-camera-right={15}
            // shadow-camera-top={15}
            // shadow-camera-bottom={-12}
            />
            <ambientLight intensity={1.8} />
            {/* <cameraHelper args={[dirLight.current.shadow.camera]} /> */}
        </>
    )
}

export default Light