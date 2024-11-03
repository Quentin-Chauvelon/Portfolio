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
import NavBar from '../components/NavBar'
import InstructionsText from '../components/InstructionsText'

import { Item, ItemsRoutesMap, ObjectsList } from '../Items'


const ItemClickedContext = createContext<(item: Item) => void>(() => { });

export type ObjectAnimationProperties = {
    [key: string]: THREE.Vector3
};

const Scene = () => {
    const [portfolioOpened, setPortfolioOpened] = useState(false);
    const [firstItemSelected, setFirstItemSelected] = useState(false);
    const [selectedItem, setSelectedItem] = useState(Item.None);
    const [hasRoomAnimationStarted, setHasRoomAnimationStarted] = useState(false);
    const [hasRoomAnimationEnded, setHasRoomAnimationEnded] = useState(false);

    // Save the scale and position of each object in the scene when animating them
    // This prevents issues where re-rendering the scene would reset the scale and
    // position of the objects (eg: when changing the language)
    const [objectScales, setObjectScales] = useState<ObjectAnimationProperties>(
        ObjectsList.reduce((acc, object) => {
            acc[object as string] = new THREE.Vector3(0, 0, 0);
            return acc;
        }, {} as ObjectAnimationProperties)
    );

    const cameraManager = useRef<CameraRefType>();
    const navigate = useNavigate();

    if (location.pathname !== "/" && !portfolioOpened) {
        setPortfolioOpened(true);
    }

    if (location.pathname === "/" && selectedItem !== Item.None) {
        setSelectedItem(Item.None);
    }

    const skipRoomAnimation = false;

    if ((skipRoomAnimation || portfolioOpened) && !hasRoomAnimationEnded) {
        setHasRoomAnimationEnded(true);
    }

    const onItemSelected = (item: Item) => {
        if (!firstItemSelected && item !== Item.None) {
            setFirstItemSelected(true);
        }

        setSelectedItem(item);
        navigate(ItemsRoutesMap[item]);
    }

    const portfolioOpenedClicked = (visible: boolean) => {
        if (!hasRoomAnimationEnded) {
            setHasRoomAnimationEnded(visible);
        }

        setPortfolioOpened(visible);
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
                <RoomAnimation
                    objectScales={objectScales}
                    setObjectScales={setObjectScales}
                    hasRoomAnimationStarted={hasRoomAnimationStarted}
                    setHasRoomAnimationStarted={setHasRoomAnimationStarted}
                    hasRoomAnimationEnded={hasRoomAnimationEnded}
                    setHasRoomAnimationEnded={setHasRoomAnimationEnded}
                />

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
                            <EffectComposer enabled={portfolioOpened && selectedItem === Item.None} autoClear={false} >
                                <MultiOutline
                                    group={"default"}
                                    blur
                                    edgeStrength={25}
                                    pulseSpeed={0.3}
                                    selectionLayer={9}
                                    visibleEdgeColor={"#ffff00" as unknown as number} // Converting string to number to silence type error
                                />
                                <MultiOutline
                                    group={"hovered"}
                                    selectionLayer={10}
                                    blur
                                    edgeStrength={50}
                                    pulseSpeed={0.3}
                                    visibleEdgeColor={"#6a00ff" as unknown as number} // Converting string to number to silence type error
                                />
                            </EffectComposer>

                        <Room
                            group={{
                                position: [0, 0, -15],
                                rotation: [0.7 * Math.PI / 4, -Math.PI / 4, 0]
                                }}
                                portfolioOpened={portfolioOpened}
                                firstItemSelected={firstItemSelected}
                                objectScales={objectScales}
                                hasRoomAnimationStarted={hasRoomAnimationStarted}
                                hasRoomAnimationEnded={hasRoomAnimationEnded}
                        />

                        </SelectionTest>
                    </ItemClickedContext.Provider>

                    {/* While the user has not selected any items, display the text  */}
                    {
                        portfolioOpened && !firstItemSelected &&
                        <InstructionsText />
                    }

                    <Floor />
                </Suspense>
            </Canvas >

            {!portfolioOpened &&
                <Hero
                    cameraManagerRef={cameraManager}
                portfolioOpened={portfolioOpenedClicked}
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