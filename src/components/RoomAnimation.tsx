import * as THREE from "three";
import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Easing, Group, Tween } from '@tweenjs/tween.js';

import { ObjectAnimationProperties } from "../pages/Scene";


enum ObjectsToTween {
    Floor = "Floor",
    BackWall = "BackWall",
    RightWall = "RightWall",
    Window = "Window",
    Mat = "Mat",
    Desk = "Desk",
    Plant = "Plant",
    Poster = "Poster",
    Clock = "Clock",
    Monitors = "Monitors",
    Keyboard = "Keyboard",
    Mouse = "Mouse",
    Papers = "Papers",
    PenHolder = "PenHolder",
    Experience = "Experience",
    PersonalProjects = "PersonalProjects",
    Trophy = "Trophy",
    Shelf = "Shelf",
    GraduationHat = "GraduationHat",
    About = "About",
    AcademicProjects = "AcademicProjects",
    Books = "Books",
    Resume = "Resume",
    Chair = "Chair",
};

type objectTweenProps = {
    object: THREE.Object3D, // the object itself in the scene
    position: THREE.Vector3, // the object's original position (which will be the target of the tween, as we might be translating the object)
    translation: THREE.Vector3, // the translation we want to apply to the object or a zero vector if no translation is needed
}

// Dictionary of objects and the translations we need to apply to them
// Objects that don't need to be translated are not included in this dictionary
const objectsPositionTranslations: { [key: string]: THREE.Vector3 } = {
    [ObjectsToTween.Floor]: new THREE.Vector3(-7, 0, -7),
    [ObjectsToTween.BackWall]: new THREE.Vector3(0, -7, -1),
    [ObjectsToTween.RightWall]: new THREE.Vector3(-1, -7, 0),
    [ObjectsToTween.Desk]: new THREE.Vector3(-3, -10, -1.5),
    [ObjectsToTween.Plant]: new THREE.Vector3(-4, -6, -2),
    [ObjectsToTween.Monitors]: new THREE.Vector3(-3.5, -6, -2),
    [ObjectsToTween.Shelf]: new THREE.Vector3(-2, 0, 0),
    [ObjectsToTween.Chair]: new THREE.Vector3(0, -3, 0),
};

// Dictionary to store the objects we need to tween with the following properties:
const objectsToTween: { [key: string]: objectTweenProps } = {};

const defaultDuration = 500;

const vector3Zero = new THREE.Vector3(0, 0, 0);


type RoomAnimationProps = {
    objectScales: ObjectAnimationProperties,
    setObjectScales: (objectScales: ObjectAnimationProperties) => void,
}


const RoomAnimation = ({ objectScales, setObjectScales }: RoomAnimationProps) => {
    const [isAnimationReady, setIsAnimationReady] = useState(false);
    const [hasRoomAnimationStarted, setHasRoomAnimationStarted] = useState(false);

    const { active } = useProgress();
    const { scene } = useThree();

    useEffect(() => {
        if (!active) {
            setTimeout(() => {
                setupObjectsToTween();
            }, 750)
        }

        if (isAnimationReady) {
            startAnimation();
        }
    }, [active, isAnimationReady]);


    const initScaleTween = (object: objectTweenProps, duration = defaultDuration, easing = Easing.Back.Out, targetScale = { x: 1, y: 1, z: 1 }) => {
        const scale = { x: 0, y: 0, z: 0 };

        return new Tween(scale)
            .to(targetScale, duration)
            .easing(easing)
            .onUpdate(() => {
                object.object.scale.set(scale.x, scale.y, scale.z);

                let objectScale = objectScales[object.object.name];
                objectScale.x = scale.x;
                objectScale.y = scale.y;
                objectScale.z = scale.z;

                setObjectScales({ ...objectScales });
            });
    }


    const initScaleFromPositionTween = (object: objectTweenProps, duration = defaultDuration, easing = Easing.Back.Out) => {
        object.object.position.setX(object.position.x + object.translation.x);
        object.object.position.setY(object.position.y + object.translation.y);
        object.object.position.setZ(object.position.z + object.translation.z);

        const values = { x: 0, y: 0, z: 0, pX: object.object.position.x, pY: object.object.position.y, pZ: object.object.position.z };

        return new Tween(values)
            .to({ x: 1, y: 1, z: 1, pX: object.position.x, pY: object.position.y, pZ: object.position.z }, duration)
            .easing(easing)
            .onUpdate(() => {
                object.object.scale.set(values.x, values.y, values.z);
                object.object.position.set(values.pX, values.pY, values.pZ);

                let objectScale = objectScales[object.object.name];
                objectScale.x = values.x;
                objectScale.y = values.y;
                objectScale.z = values.z;

                setObjectScales({ ...objectScales });
            });
    }


    // Init all the tweens and chains them together to create the animation
    // Returns the first tween on which the anmiation will be started
    const initTween = (): Group => {
        const floorTween = initScaleFromPositionTween(objectsToTween[ObjectsToTween.Floor], 1000, Easing.Back.Out);
        const backWallTween = initScaleFromPositionTween(objectsToTween[ObjectsToTween.BackWall], 1000, Easing.Back.Out);
        const rightWallTween = initScaleFromPositionTween(objectsToTween[ObjectsToTween.RightWall], 1000, Easing.Back.Out);
        const windowTween = initScaleTween(objectsToTween[ObjectsToTween.Window], defaultDuration, Easing.Back.Out);
        const deskTween = initScaleFromPositionTween(objectsToTween[ObjectsToTween.Desk], defaultDuration, Easing.Back.Out);
        const plantTween = initScaleFromPositionTween(objectsToTween[ObjectsToTween.Plant], defaultDuration, Easing.Back.Out);
        const posterTween = initScaleTween(objectsToTween[ObjectsToTween.Poster], defaultDuration, Easing.Back.Out, { x: 0.1, y: 4, z: 3 }).delay(200);
        const clockTween = initScaleTween(objectsToTween[ObjectsToTween.Clock], defaultDuration, Easing.Back.Out).delay(400);
        const matTween = initScaleTween(objectsToTween[ObjectsToTween.Mat], defaultDuration, Easing.Back.Out).delay(600);
        const monitorsTween = initScaleFromPositionTween(objectsToTween[ObjectsToTween.Monitors], defaultDuration, Easing.Back.Out);
        const keyboardTween = initScaleTween(objectsToTween[ObjectsToTween.Keyboard], defaultDuration, Easing.Back.Out);
        const mouseTween = initScaleTween(objectsToTween[ObjectsToTween.Mouse], defaultDuration, Easing.Back.Out).delay(200);
        const resumeTween = initScaleTween(objectsToTween[ObjectsToTween.Resume], defaultDuration, Easing.Back.Out, { x: 1.6, y: 0.1, z: 1.14 }).delay(400);
        const paperTween = initScaleTween(objectsToTween[ObjectsToTween.Papers], defaultDuration, Easing.Back.Out);
        const penHolderTween = initScaleTween(objectsToTween[ObjectsToTween.PenHolder], defaultDuration, Easing.Back.Out).delay(200);
        const experienceTween = initScaleTween(objectsToTween[ObjectsToTween.Experience], defaultDuration, Easing.Back.Out).delay(400);
        const graduationHatTween = initScaleTween(objectsToTween[ObjectsToTween.GraduationHat], defaultDuration, Easing.Back.Out).delay(600);
        const trophyTween = initScaleTween(objectsToTween[ObjectsToTween.Trophy], defaultDuration, Easing.Back.Out).delay(800);
        const shelfTween = initScaleFromPositionTween(objectsToTween[ObjectsToTween.Shelf], defaultDuration, Easing.Back.Out);
        const personalProjectsTween = initScaleTween(objectsToTween[ObjectsToTween.PersonalProjects], defaultDuration, Easing.Back.Out);
        const aboutTween = initScaleTween(objectsToTween[ObjectsToTween.About], defaultDuration, Easing.Back.Out).delay(200);
        const academicProjectsTween = initScaleTween(objectsToTween[ObjectsToTween.AcademicProjects], defaultDuration, Easing.Back.Out).delay(400);
        const booksTween = initScaleTween(objectsToTween[ObjectsToTween.Books], defaultDuration, Easing.Back.Out).delay(600);
        const chairTween = initScaleFromPositionTween(objectsToTween[ObjectsToTween.Chair], defaultDuration, Easing.Back.Out);

        const rotation = { z: 0 };
        const chairRotationTween = new Tween(rotation)
            .to({ z: 9 * Math.PI / 2 }, 1500)
            .easing(Easing.Exponential.Out)
            .onUpdate(() => {
                objectsToTween[ObjectsToTween.Chair].object.rotation.set(Math.PI / 2, 0, rotation.z);
            });

        floorTween.chain(windowTween)
        windowTween.chain(deskTween);
        deskTween.chain(plantTween, posterTween, clockTween, matTween);
        posterTween.chain(monitorsTween);
        monitorsTween.chain(keyboardTween, mouseTween, resumeTween);
        mouseTween.chain(paperTween, penHolderTween, experienceTween, graduationHatTween, trophyTween);
        trophyTween.chain(shelfTween);
        shelfTween.chain(personalProjectsTween, aboutTween, academicProjectsTween, booksTween);
        booksTween.chain(chairTween);
        chairTween.chain(chairRotationTween);

        // Put all the tweens in a group so we can call update on that group
        // which will update all the tweens
        const group = new Group(
            floorTween, backWallTween, rightWallTween, windowTween, matTween, deskTween, plantTween,
            posterTween, clockTween, monitorsTween, keyboardTween, mouseTween, paperTween, penHolderTween,
            experienceTween, personalProjectsTween, trophyTween, shelfTween, graduationHatTween, aboutTween,
            academicProjectsTween, booksTween, resumeTween, chairTween, chairRotationTween
        );

        return group;
    };


    const startAnimation = () => {
        if (hasRoomAnimationStarted) {
            return;
        }

        setHasRoomAnimationStarted(true);

        const group = initTween();

        // Start the first 3 tweens (other ones are chained together)
        let i = 0;
        for (const tween of group.getAll()) {
            if (i++ == 3) {
                break;
            }

            tween.start();
        }

        // Setup the animation loop.
        function animate(time: number | undefined) {
            if (group.allStopped()) {
                return;
            }

            group.update(time)
            requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
    }


    const setupObjectsToTween = () => {
        // As long as we haven't gathered all the objects we need to tween,
        // iterate over the scene to find them (as they may not be loaded yet)
        if (!isAnimationReady) {
            scene.traverse((object) => {
                if (object.name !== "") {
                    object.scale.set(0, 0, 0);

                    // If the name matches one of the objects we need to tween, add it to the objectsToTween object
                    if (object.name in ObjectsToTween) {
                        objectsToTween[object.name] = {
                            object: object,
                            position: new THREE.Vector3().copy(object.position),
                            translation: object.name in objectsPositionTranslations
                                ? objectsPositionTranslations[object.name]
                                : vector3Zero
                        };

                        object.scale.set(0, 0, 0);
                    }
                }
            });

            // If we have all the objects we need to tween, mark the animation is ready to start
            // so that we don't have to iterate over the scene again, which would be pointless
            // and would even cause an error (Too many re-renders)
            if (Object.keys(objectsToTween).length >= Object.keys(ObjectsToTween).length) {
                setIsAnimationReady(true);
            }
        }
    }


    return (
        <></>
    )
}

export default RoomAnimation