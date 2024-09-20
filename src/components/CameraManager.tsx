import { OrthographicCamera, PerspectiveCamera } from '@react-three/drei';
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import * as THREE from 'three';


export type CameraProps = {
    perspectiveCameraRef: React.RefObject<THREE.PerspectiveCamera>,
    orthographicCameraRef: React.RefObject<THREE.OrthographicCamera>
};

export type CameraRefType = {
    setActiveCameraType: (cameraType: CameraType) => void;
};

export enum CameraType {
    Perspective = 'perspective',
    Orthographic = 'orthographic',
}


const CameraManager = forwardRef(({ perspectiveCameraRef, orthographicCameraRef }: CameraProps, ref) => {
    const [activeCameraType, setActiveCamera] = useState(CameraType.Orthographic);

    useEffect(() => {
        if (perspectiveCameraRef.current) {
            // perspectiveCameraRef.current.position.set(3.5, -0.5, -15.5);
            // perspectiveCameraRef.current.rotation.set(0.8 * Math.PI / 4, 1.02 * Math.PI / 4, -0.08 * Math.PI / 4);
            perspectiveCameraRef.current.position.set(3.5, 1.3, -14.5);
            perspectiveCameraRef.current.rotation.set(0.2 * Math.PI / 4, 1 * Math.PI / 4, 0.33 * Math.PI / 4);
        }

        if (orthographicCameraRef.current) {
            orthographicCameraRef.current.position.set(0, 0, 0);
            orthographicCameraRef.current.zoom = 30;
        }
    }, [perspectiveCameraRef.current, orthographicCameraRef.current]);

    const setActiveCameraType = (cameraType: CameraType) => {
        setActiveCamera(cameraType);
    };

    useImperativeHandle(ref, () => ({
        setActiveCameraType,
    }));

    return (
        <>
            <PerspectiveCamera ref={perspectiveCameraRef} makeDefault={activeCameraType == CameraType.Perspective} />
            <OrthographicCamera ref={orthographicCameraRef} makeDefault={activeCameraType == CameraType.Orthographic} />
        </>
    )
});

export default CameraManager;