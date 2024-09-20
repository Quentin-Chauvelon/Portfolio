import { Suspense, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

import Hero from '../pages/Hero'

import Room from '../components/Room'
import Light from '../components/Light'
import Floor from '../components/Floor'
import CameraManager, { CameraRefType } from '../components/CameraManager'
import { LoadingScreen } from '../pages/LoadingScreen'
import { log } from 'three/webgpu'

const Scene = () => {
    const [chairVisible, setChairVisible] = useState(true);

    const cameraManager = useRef<CameraRefType>();

    return (
        <>
            <Canvas
                // camera={{ position: [-1, -1, 10], fov: 40 }}
                style={{ width: 'var(--room-width)', height: '100vh', right: 'var(--room-right-offset)', top: 0, position: 'absolute' }}
                shadows={true}
            >
                <CameraManager {...{
                    perspectiveCameraRef: useRef<THREE.PerspectiveCamera>() as React.MutableRefObject<THREE.PerspectiveCamera>,
                    orthographicCameraRef: useRef<THREE.OrthographicCamera>() as React.MutableRefObject<THREE.OrthographicCamera>,
                }}
                    ref={cameraManager}
                />

                <Suspense fallback={null}>
                    <Light />

                    <Room
                        group={{
                            position: [0, 0, -15],
                            rotation: [0.7 * Math.PI / 4, -Math.PI / 4, 0]
                        }}
                        chairVisible={chairVisible}
                    />
                    <Floor />
                </Suspense>
            </Canvas >

            <Hero
                cameraManagerRef={cameraManager}
                chairVisible={setChairVisible}
            />

            <LoadingScreen />
        </>
    )
}

export default Scene;