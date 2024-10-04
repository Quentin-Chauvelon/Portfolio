import React, { Suspense, createContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { EffectComposer } from '@react-three/postprocessing'

import Hero from '../pages/Hero'
import { LoadingScreen } from '../pages/LoadingScreen'

import CameraManager, { CameraRefType } from '../components/CameraManager'
import Room from '../components/Room'
import { MultiOutline, SelectionTest } from '../components/Selection'
import Light from '../components/Light'
import Floor from '../components/Floor'

import RoomAnimation from '../components/RoomAnimation'
import { Item, ItemsRoutesMap } from '../Items'
import NavBar from '../components/NavBar'


const ItemClickedContext = createContext<(item: Item) => void>(() => { });

const Scene = () => {
    const [portfolioOpened, setPortfolioOpened] = useState(false);
    const [selectedItem, setSelectedItem] = useState(Item.None);
    const cameraManager = useRef<CameraRefType>();
    const navigate = useNavigate();

    if (location.pathname !== "/" && !portfolioOpened) {
        setPortfolioOpened(true);
    }

    const skipRoomAnimation = false;

    const onItemSelected = (item: Item) => {
        setSelectedItem(item);
        navigate(ItemsRoutesMap[item]);
    }


    return (
        <>
            {/* <Stats showPanel={0} className="stats" /> */}
            <LoadingScreen />

            <Canvas
                camera={{ position: [-1, -1, 10], fov: 40, aspect: 5 }}
                style={{ position: 'absolute', zIndex: selectedItem === Item.None ? 0 : -1 }}
                shadows={true}
                linear={true}
            >
                {!portfolioOpened && !skipRoomAnimation && <RoomAnimation />}

                <CameraManager {...{
                    portfolioOpened: portfolioOpened,
                    perspectiveCameraRef: useRef<THREE.PerspectiveCamera>() as React.MutableRefObject<THREE.PerspectiveCamera>,
                    orthographicCameraRef: useRef<THREE.OrthographicCamera>() as React.MutableRefObject<THREE.OrthographicCamera>,
                    cameraVisible: selectedItem === Item.None
                }}
                    ref={cameraManager}
                />

                <Suspense fallback={null}>
                    <Light />

                    <ItemClickedContext.Provider value={onItemSelected}>
                        <SelectionTest>
                            <EffectComposer enabled={portfolioOpened} autoClear={false} >
                                <MultiOutline
                                    group={"default"}
                                    blur
                                    edgeStrength={25}
                                    pulseSpeed={0.3}
                                    selectionLayer={9}
                                    visibleEdgeColor={"#ffff00" as unknown as number} // Converting string to number to fix remove type error
                                />
                                <MultiOutline
                                    group={"hovered"}
                                    selectionLayer={10}
                                    blur
                                    edgeStrength={50}
                                    pulseSpeed={0.3}
                                    visibleEdgeColor={"#6a00ff" as unknown as number} // Converting string to number to fix remove type error
                                />
                            </EffectComposer>
                        <Room
                            group={{
                                position: [0, 0, -15],
                                rotation: [0.7 * Math.PI / 4, -Math.PI / 4, 0]
                            }}
                                playAnimation={!portfolioOpened && !skipRoomAnimation}
                        />
                        </SelectionTest>
                    </ItemClickedContext.Provider>

                    <Floor />
                </Suspense>
            </Canvas >

            {!portfolioOpened &&
                <Hero
                    cameraManagerRef={cameraManager}
                    portfolioOpened={setPortfolioOpened}
                />
            }

            <ItemClickedContext.Provider value={onItemSelected}>
                <NavBar />
            </ItemClickedContext.Provider>
        </>
    )
}

export { ItemClickedContext };
export default Scene;