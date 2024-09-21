import React, { Suspense, createContext, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

import Hero from '../pages/Hero'

import Room, { Item } from '../components/Room'
import Light from '../components/Light'
import Floor from '../components/Floor'
import CameraManager, { CameraRefType } from '../components/CameraManager'
import { LoadingScreen } from '../pages/LoadingScreen'
import { EffectComposer } from '@react-three/postprocessing'
import { MultiOutline, SelectionTest } from '../components/Selection'

const ItemClickedContext = createContext<(item: Item) => void>(() => { });

const Scene = () => {
    const [chairVisible, setChairVisible] = useState(true);

    const cameraManager = useRef<CameraRefType>();

    function onItemClicked(item: Item) {
        console.log("context item", item);
    }

    return (
        <>
            <Canvas
                camera={{ position: [-1, -1, 10], fov: 40, aspect: 5 }}
                style={{ position: 'absolute' }}
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

                    <ItemClickedContext.Provider value={onItemClicked}>
                        <SelectionTest>
                            <EffectComposer enabled={true} autoClear={false}>
                                <MultiOutline
                                    group={"default"}
                                    blur
                                    edgeStrength={10}
                                    pulseSpeed={0.3}
                                    selectionLayer={9}
                                />
                                <MultiOutline
                                    group={"hovered"}
                                    selectionLayer={10}
                                    blur
                                    edgeStrength={20}
                                    pulseSpeed={0.3}
                                    visibleEdgeColor={"#462cc7" as unknown as number} // Converting string to number to fix remove type error
                                />
                            </EffectComposer>
                        <Room
                            group={{
                                position: [0, 0, -15],
                                rotation: [0.7 * Math.PI / 4, -Math.PI / 4, 0]
                            }}
                                chairVisible={chairVisible}
                        />
                        </SelectionTest>
                    </ItemClickedContext.Provider>

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

export { ItemClickedContext };
export default Scene;