import { OrthographicCamera, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import * as THREE from 'three';


export type CameraProps = {
    perspectiveCameraRef: React.RefObject<THREE.PerspectiveCamera>,
    orthographicCameraRef: React.RefObject<THREE.OrthographicCamera>
};

export type CameraRefType = {
    setActiveCamera: (cameraType: CameraType) => void;
    setCameraPosition: (x: number, y: number, z: number) => void;
    setCameraRotation: (x: number, y: number, z: number) => void;
    setViewportX: (x: number) => void;
    render: () => void;
};

export enum CameraType {
    Perspective = 'perspective',
    Orthographic = 'orthographic',
}


const CameraManager = forwardRef(({ perspectiveCameraRef, orthographicCameraRef }: CameraProps, ref) => {
    const [activeCameraRef, setActiveCameraRef] = useState<THREE.Camera | null>(orthographicCameraRef.current);
    const [activeCameraType, setActiveCameraType] = useState(CameraType.Orthographic);

    const three = useThree();

    // Update the viewport width based on the screen width, this is called everytime the screen is resized
    // Only do it for the orthographic camera, since the viewport must be fullscreen once the user is viewing
    // the desk (perspective camera)
    if (activeCameraType == CameraType.Orthographic) {
        if (window.innerWidth < 1280) {
            three.gl.setViewport(0, 0, window.innerWidth, window.innerHeight);
        } else {
            three.gl.setViewport(450 / 1920 * window.innerWidth, 0, window.innerWidth, window.innerHeight);
        }
    }

    // Once the cameras have loaded, set their properties
    useEffect(() => {
        if (perspectiveCameraRef.current) {
            perspectiveCameraRef.current.position.set(3.5, 1.3, -14.5);
            perspectiveCameraRef.current.rotation.set(0.2 * Math.PI / 4, 1 * Math.PI / 4, 0.33 * Math.PI / 4);
        }

        if (orthographicCameraRef.current) {
            orthographicCameraRef.current.position.set(0, 0, 0);
            orthographicCameraRef.current.zoom = 30;
        }
    }, [perspectiveCameraRef.current, orthographicCameraRef.current]);

    // Switch between camera types
    const setActiveCamera = (cameraType: CameraType) => {
        if (cameraType == CameraType.Perspective) {
            setActiveCameraRef(perspectiveCameraRef.current);
            setActiveCameraType(CameraType.Perspective);
        } else {
            setActiveCameraRef(orthographicCameraRef.current);
            setActiveCameraType(CameraType.Orthographic);
        }
    }

    const setCameraPosition = (x: number, y: number, z: number) => {
        activeCameraRef?.position.set(x, y, z);
    }

    const setCameraRotation = (x: number, y: number, z: number) => {
        activeCameraRef?.rotation.set(x, y, z);
    }

    // Set the x position of the viewport, essentially moving the content to the right
    const setViewportX = (x: number) => {
        three.gl.setViewport(x, 0, window.innerWidth, window.innerHeight);
    }

    // Re-render the scene
    const render = () => {
        three.gl.render(three.scene, activeCameraRef as THREE.Camera);
    }

    useImperativeHandle(ref, () => ({
        setActiveCamera,
        setCameraPosition,
        setCameraRotation,
        setViewportX,
        render
    }));

    return (
        <>
            <PerspectiveCamera ref={perspectiveCameraRef} makeDefault={activeCameraType == CameraType.Perspective} />
            <OrthographicCamera ref={orthographicCameraRef} makeDefault={activeCameraType == CameraType.Orthographic} />
        </>
    )
});

export default CameraManager;