import * as THREE from 'three'
import { Box, useGLTF, Text } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { a } from '@react-spring/three'
import { useTranslation } from 'react-i18next';
import { Language, getCurrentLanguage } from "../i18next"

import { ObjectAnimationProperties } from '../pages/Scene';
import ClickableItem from './ClickableItem';
import { Item } from '../Items';

import roomScene from "../assets/models/Portfolio.glb";
import resumeEn from "/src/assets/images/Resume.jpg";
import resumeFr from "/src/assets/images/Resume2.jpg";

import coding from "../assets/images/monitor/coding.png"
import big_o from "../assets/images/monitor/big_o.png"
// import leetcode from "../assets/images/monitor/leetcode.png"
import craking_the_coding_interview from "../assets/images/monitor/cracking_the_coding_interview.png"

type GLTFResult = GLTF & {
  nodes: {
    BackWall: THREE.Mesh
    RightWall: THREE.Mesh
    Back_Shelf: THREE.Mesh
    BackShelf_Stands: THREE.Mesh
    Cube019: THREE.Mesh
    Cube020: THREE.Mesh
    Cube021: THREE.Mesh
    Circle_006_Tropy_Cup_0: THREE.Mesh
    Circle_007_Tropy_Cup_0: THREE.Mesh
    Cube_005_Tropy_Cup_0: THREE.Mesh
    Star_star_0: THREE.Mesh
    Cube022: THREE.Mesh
    Cylinder014: THREE.Mesh
    Cylinder015: THREE.Mesh
    Cylinder016: THREE.Mesh
    Cylinder017: THREE.Mesh
    Object_11002: THREE.Mesh
    Object_0003: THREE.Mesh
    Object_2003: THREE.Mesh
    Object_3003: THREE.Mesh
    Object_4004: THREE.Mesh
    Object_5002: THREE.Mesh
    Object_6002: THREE.Mesh
    Object_7001: THREE.Mesh
    Object_8002: THREE.Mesh
    Object_9002: THREE.Mesh
    Object_10002: THREE.Mesh
    Object_1004: THREE.Mesh
    Floor: THREE.Mesh
    Monitor001: THREE.Mesh
    Monitor002: THREE.Mesh
    MonitorStand: THREE.Mesh
    MonitorStandFoot: THREE.Mesh
    Cube006: THREE.Mesh
    Cube110: THREE.Mesh
    Object_0: THREE.Mesh
    Object_2: THREE.Mesh
    Leg_Bottom: THREE.Mesh
    Leg_Top: THREE.Mesh
    Table: THREE.Mesh
    Cube009_1: THREE.Mesh
    Cube009_2: THREE.Mesh
    Cube160: THREE.Mesh
    Cube160_1: THREE.Mesh
    Cube161: THREE.Mesh
    Cube161_1: THREE.Mesh
    Cube162: THREE.Mesh
    Cube162_1: THREE.Mesh
    Cube163: THREE.Mesh
    Cube163_1: THREE.Mesh
    Cube164: THREE.Mesh
    Cube164_1: THREE.Mesh
    Ball: THREE.Mesh
    Cube002: THREE.Mesh
    Cube003: THREE.Mesh
    Flag: THREE.Mesh
    Flag001: THREE.Mesh
    Maze_Floor: THREE.Mesh
    Paper_1: THREE.Mesh
    Paper_2: THREE.Mesh
    Paper_3: THREE.Mesh
    Cylinder004_1: THREE.Mesh
    Cylinder004_2: THREE.Mesh
    Cylinder004_3: THREE.Mesh
    Cylinder005_1: THREE.Mesh
    Cylinder005_2: THREE.Mesh
    Cylinder005_3: THREE.Mesh
    Cylinder006_1: THREE.Mesh
    Cylinder006_2: THREE.Mesh
    Cylinder006_3: THREE.Mesh
    Cylinder007_1: THREE.Mesh
    Cylinder007_2: THREE.Mesh
    Cylinder007_3: THREE.Mesh
    Cylinder008_1: THREE.Mesh
    Cylinder008_2: THREE.Mesh
    Cylinder008_3: THREE.Mesh
    Pen_Holder_Base: THREE.Mesh
    Cube004: THREE.Mesh
    Cube005: THREE.Mesh
    Cylinder012: THREE.Mesh
    Cylinder013: THREE.Mesh
    defaultMaterial001: THREE.Mesh
    defaultMaterial002: THREE.Mesh
    defaultMaterial004: THREE.Mesh
    Cylinder004: THREE.Mesh
    Cylinder005: THREE.Mesh
    Cylinder006: THREE.Mesh
    Cylinder007: THREE.Mesh
    Cylinder008: THREE.Mesh
    Cylinder009: THREE.Mesh
    Cylinder010: THREE.Mesh
    Cylinder011: THREE.Mesh
    Plane001: THREE.Mesh
    Clock_Frame: THREE.Mesh
    Marker_1: THREE.Mesh
    Marker_2: THREE.Mesh
    Minute_Hand: THREE.Mesh
    Second_Hand: THREE.Mesh
    Window: THREE.Mesh
    Mat: THREE.Mesh
    Avatar: THREE.Mesh
    Avatar_Stand: THREE.Mesh
    ['@']: THREE.Mesh
    Cube: THREE.Mesh
    Cube001: THREE.Mesh
    Cube007: THREE.Mesh
    Cube008: THREE.Mesh
    Cube009: THREE.Mesh
    Cube010: THREE.Mesh
    Cube011: THREE.Mesh
    Cube012: THREE.Mesh
    Cylinder: THREE.Mesh
    Cylinder001: THREE.Mesh
    Cylinder002: THREE.Mesh
    Cylinder003: THREE.Mesh
    ['E-commerce']: THREE.Mesh
    hotdog_house_Do_do_0001: THREE.Mesh
    hotdog_house_Trang_0: THREE.Mesh
    hotdog_house_Trang_0001: THREE.Mesh
    hotdog_house_Xam_xanh_0: THREE.Mesh
    hotdog_house_Xanh_Kinh_0: THREE.Mesh
    hotdog_house_Xanh_la_0: THREE.Mesh
    pizzaria_Burger_Shop_Coffee_House_White_0001: THREE.Mesh
    pizzaria_Do_do_0002: THREE.Mesh
    Cube018: THREE.Mesh
    BODY_BODY_0: THREE.Mesh
    bottom_07___Default_0: THREE.Mesh
    bottom_BOTTOM_0: THREE.Mesh
    BOX_METAL_METALL_0: THREE.Mesh
    BUMPER_FRONT_PLASTIC_0: THREE.Mesh
    interior_VOID_0: THREE.Mesh
    LIGHTS_LIGHT_0: THREE.Mesh
    wheel_01_RIM_0: THREE.Mesh
    wheel_01_TIRE_0: THREE.Mesh
    wheel_02_RIM_0: THREE.Mesh
    wheel_02_TIRE_0: THREE.Mesh
    Plane: THREE.Mesh
    Sphere_bood_0: THREE.Mesh
    Sphere_roope_0: THREE.Mesh
  }
  materials: {
    Wall: THREE.MeshPhysicalMaterial
    Desk_Top: THREE.MeshPhysicalMaterial
    Tropy_cup_2: THREE.MeshStandardMaterial
    Tropy_Cup: THREE.MeshStandardMaterial
    star: THREE.MeshStandardMaterial
    ['material.003']: THREE.MeshStandardMaterial
    ['material_0.001']: THREE.MeshStandardMaterial
    Maze: THREE.MeshPhysicalMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    Floor: THREE.MeshPhysicalMaterial
    Monitor: THREE.MeshPhysicalMaterial
    MonitorScreen: THREE.MeshPhysicalMaterial
    Desk_Leg: THREE.MeshStandardMaterial
    Desk_Leg_Extension: THREE.MeshStandardMaterial
    Book_1: THREE.MeshPhysicalMaterial
    Book_Paper: THREE.MeshStandardMaterial
    Book_2: THREE.MeshStandardMaterial
    Book_3: THREE.MeshStandardMaterial
    Book_4: THREE.MeshStandardMaterial
    Book_5: THREE.MeshStandardMaterial
    Ball: THREE.MeshStandardMaterial
    Flag_Pole: THREE.MeshStandardMaterial
    Flag: THREE.MeshStandardMaterial
    Pen: THREE.MeshStandardMaterial
    Pen_Tip: THREE.MeshStandardMaterial
    _7___Default: THREE.MeshStandardMaterial
    Chair_Seat: THREE.MeshStandardMaterial
    Chair: THREE.MeshStandardMaterial
    Clock: THREE.MeshPhysicalMaterial
    Clock_Hand: THREE.MeshPhysicalMaterial
    Window: THREE.MeshPhysicalMaterial
    Mat: THREE.MeshPhysicalMaterial
    mat0: THREE.MeshPhysicalMaterial
    Paper: THREE.MeshStandardMaterial
    Do_do: THREE.MeshStandardMaterial
    Trang: THREE.MeshStandardMaterial
    Xanh_Kinh: THREE.MeshStandardMaterial
    METALL: THREE.MeshStandardMaterial
    PLASTIC: THREE.MeshStandardMaterial
    VOID: THREE.MeshStandardMaterial
    LIGHT: THREE.MeshStandardMaterial
    material: THREE.MeshStandardMaterial
    TIRE: THREE.MeshStandardMaterial
    SEPAMAT: THREE.MeshStandardMaterial
    ['bood.002']: THREE.MeshStandardMaterial
    ['roope.002']: THREE.MeshStandardMaterial
  }
}



const whiteMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
whiteMaterial.transparent = true;
whiteMaterial.opacity = 0;


const resumeTextureEn = new THREE.TextureLoader().load(resumeEn);
const resumeTextureFr = new THREE.TextureLoader().load(resumeFr);

const resumeMaterialsEn: THREE.Material[] = [
  whiteMaterial,
  whiteMaterial,
  new THREE.MeshBasicMaterial({ map: resumeTextureEn }),
  whiteMaterial,
  whiteMaterial,
  whiteMaterial
];

const resumeMaterialsFr: THREE.Material[] = [
  whiteMaterial,
  whiteMaterial,
  new THREE.MeshBasicMaterial({ map: resumeTextureFr }),
  whiteMaterial,
  whiteMaterial,
  whiteMaterial
];


const posterTexture = new THREE.TextureLoader().load("/posters/Poster_" + (Math.floor(Math.random() * 5) + 1) + ".jpg");

const posterMaterials: THREE.Material[] = [
  new THREE.MeshBasicMaterial({ map: posterTexture }),
  whiteMaterial,
  whiteMaterial,
  whiteMaterial,
  whiteMaterial,
  whiteMaterial
];

const monitorImages = [coding, big_o, craking_the_coding_interview];
let monitorTextures = monitorImages.map(image => new THREE.TextureLoader().load(image));

for (let i = 0; i < monitorTextures.length; i++) {
  monitorTextures[i].minFilter = THREE.LinearFilter;
}


type RoomProps = {
  group: JSX.IntrinsicElements['group'],
  portfolioOpened: boolean,
  firstItemSelected: boolean,
  objectScales: ObjectAnimationProperties,
  hasRoomAnimationStarted: boolean,
  hasRoomAnimationEnded: boolean,
}


const Room = ({ group, portfolioOpened, firstItemSelected, objectScales, hasRoomAnimationStarted, hasRoomAnimationEnded }: RoomProps) => {
  const { nodes, materials } = useGLTF(roomScene) as GLTFResult
  const { t } = useTranslation(['scene']);

  const vector3Zero = new THREE.Vector3(0, 0, 0);
  const vector3One = new THREE.Vector3(1, 1, 1);

  const monitorTexture = monitorTextures[Math.floor(Math.random() * monitorTextures.length)];

  const monitorMaterials: THREE.Material[] = [
    whiteMaterial,
    whiteMaterial,
    new THREE.MeshBasicMaterial({ map: monitorTexture }),
    whiteMaterial,
    whiteMaterial,
    whiteMaterial,
  ];

  return (
    <a.group {...group} dispose={null}>
      <ClickableItem
        item={Item.Certifications}
      >
        {/* If the room animation has not started yet, force the scale to 0,
            else if the room animation has ended, force the scale to 1
            else, use the objectScales
         */}
        <group name="Trophy" scale={!hasRoomAnimationStarted ? vector3Zero : (hasRoomAnimationEnded ? vector3One : objectScales["Trophy"])} position={[-5.937, -2.397, -6.067]} rotation={[Math.PI / 2, 0, -1.067]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube019.geometry}
            material={materials.Tropy_cup_2}
            position={[-0.008, 0.001, -0.144]}
            rotation={[Math.PI / 2, -1.561, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube020.geometry}
            material={materials.Tropy_Cup}
            position={[-0.008, 0.001, -0.302]}
            rotation={[Math.PI / 2, -1.561, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021.geometry}
            material={materials.Tropy_Cup}
            position={[-0.005, 0.232, -0.165]}
            rotation={[-Math.PI / 2, 1.561, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_006_Tropy_Cup_0.geometry}
            material={materials.Tropy_Cup}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_007_Tropy_Cup_0.geometry}
            material={materials.Tropy_Cup}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_005_Tropy_Cup_0.geometry}
            material={materials.Tropy_Cup}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Star_star_0.geometry}
            material={materials.star}
          />
        </group>
      </ClickableItem>
      <ClickableItem
        item={Item.Education}
      >
        <group name="GraduationHat" scale={!hasRoomAnimationStarted ? vector3Zero : (hasRoomAnimationEnded ? vector3One : objectScales["GraduationHat"])} position={[-3.437, -2.169, -5.624]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube022.geometry}
            material={materials['material.003']}
            position={[0.013, 0.236, 0.002]}
            rotation={[0, 0.593, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder014.geometry}
            material={materials['material.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder015.geometry}
            material={materials['material.003']}
            position={[0, -0.061, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder016.geometry}
            material={materials['material.003']}
            position={[0, -0.156, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder017.geometry}
            material={materials['material.003']}
            position={[0, 0.275, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_bood_0.geometry}
            material={materials['bood.002']}
            position={[0.304, -0.008, 0.446]}
            rotation={[-Math.PI, 0.989, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_roope_0.geometry}
            material={materials['roope.002']}
            position={[0.304, -0.008, 0.446]}
            rotation={[-Math.PI, 0.989, -Math.PI]}
          />
        </group>
      </ClickableItem>
      <group name="Plant" scale={!hasRoomAnimationStarted ? vector3Zero : (hasRoomAnimationEnded ? vector3One : objectScales["Plant"])} position={[-0.345, 0, 6.993]} rotation={[Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, -0.576, -Math.PI]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0, 0, -1.392]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_11002.geometry}
                material={materials['material_0.001']}
                position={[2.592, 4.412, 6.865]}
              />
            </group>
            <group position={[0.489, 1.09, -4.071]} rotation={[-0.514, 0.214, -1.931]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_2003.geometry}
                material={materials['Material.001']}
                position={[-0.72, 0.583, 8.512]}
              />
            </group>
            <group position={[0.135, -0.719, -4.808]} rotation={[0.685, 0.149, 1.751]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_3003.geometry}
                material={materials['Material.001']}
                position={[7.244, -3.541, 2.881]}
              />
            </group>
            <group position={[-0.478, 0.618, -2.719]} rotation={[-0.348, -0.266, -0.944]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4004.geometry}
                material={materials['Material.001']}
                position={[1.232, 4.779, 6.997]}
              />
            </group>
            <group position={[0.668, 0.305, -2.308]} rotation={[-0.236, 0.368, -2.553]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_5002.geometry}
                material={materials['Material.001']}
                position={[-1.194, -2.429, 8.123]}
              />
            </group>
            <group position={[-0.211, -0.618, -2.766]} rotation={[0.543, -0.145, 1.291]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6002.geometry}
                material={materials['Material.001']}
                position={[7.892, -0.941, 3.185]}
              />
            </group>
            <group position={[0.007, 0.545, -2.081]} rotation={[-0.434, 0.015, -1.603]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_7001.geometry}
                material={materials['Material.001']}
                position={[-1.191, 2.435, 8.122]}
              />
            </group>
            <group position={[-0.508, -0.191, -2.082]} rotation={[0.16, -0.406, 0.389]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_8002.geometry}
                material={materials['Material.001']}
                position={[6.488, 3.234, 4.557]}
              />
            </group>
            <group position={[0.389, -0.273, -2.09]} rotation={[0.254, 0.357, 2.504]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_9002.geometry}
                material={materials['Material.001']}
                position={[3.173, -5.108, 6.096]}
              />
            </group>
            <group position={[0.686, -0.577, -3.12]} rotation={[0.285, 0.333, 2.41]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_10002.geometry}
                material={materials['Material.001']}
                position={[3.595, -5.058, 5.9]}
              />
            </group>
            <group position={[-1.082, 0.016, -3.725]} rotation={[0, -0.553, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1004.geometry}
                material={materials['Material.001']}
                position={[5.812, 4.412, 4.48]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_0003.geometry}
              material={materials.Maze}
              position={[2.592, 4.412, 6.865]}
            />
          </group>
        </group>
      </group>
      <mesh
        name="Floor"
        scale={!hasRoomAnimationStarted ? vector3Zero : (hasRoomAnimationEnded ? vector3One : objectScales["Floor"])}
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials.Floor}
        position={[0.173, -7.065, 0.212]}
      />
      <group name="Monitors" scale={!hasRoomAnimationStarted ? vector3Zero : (hasRoomAnimationEnded ? vector3One : objectScales["Monitors"])} position={[-1.459, 4, 0.015]} rotation={[0, 0.262, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Monitor001.geometry}
          material={materials.Monitor}
          position={[-3.838, -5.066, -1.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Monitor002.geometry}
          material={materials.MonitorScreen}
          position={[-3.838, -5.066, -1.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MonitorStand.geometry}
          material={materials.Monitor}
          position={[-3.545, -4.431, -1.904]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MonitorStandFoot.geometry}
          material={materials.Monitor}
          position={[-3.58, -4.431, -1.901]}
          rotation={[0, 1.571, 0]}
        />
      </group>
      <group name="Keyboard" scale={!hasRoomAnimationStarted ? vector3Zero : (hasRoomAnimationEnded ? vector3One : objectScales["Keyboard"])} position={[-3.19, -2.296, -2.293]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials.Monitor}
          position={[-0.004, -0.007, 0.027]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube110.geometry}
          material={materials.Monitor}
          position={[-0.517, 0.298, -0.071]}
          rotation={[-1.443, -Math.PI / 2, 0]}
        />
      </group>
      <group name="Mouse" scale={!hasRoomAnimationStarted ? vector3Zero : (hasRoomAnimationEnded ? vector3One : objectScales["Mouse"])} position={[-3.165, -2.349, -4.127]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Monitor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Monitor}
        />
      </group>
      <group name="Desk" scale={!hasRoomAnimationStarted ? vector3Zero : (hasRoomAnimationEnded ? vector3One : objectScales["Desk"])} position={[0, 4, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Leg_Bottom.geometry}
          material={materials.Desk_Leg}
          position={[-4.577, -10.677, 1.7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Leg_Top.geometry}
          material={materials.Desk_Leg}
          position={[-4.577, -10.596, 1.7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Table.geometry}
          material={materials.Desk_Top}
          position={[-4.577, -6.515, -2.288]}
        />
        <group position={[-4.577, -10.596, 1.7]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009_1.geometry}
            material={materials.Desk_Leg}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009_2.geometry}
            material={materials.Desk_Leg_Extension}
          />
        </group>
      </group>
      <group name="Books" scale={!hasRoomAnimationStarted ? vector3Zero : (hasRoomAnimationEnded ? vector3One : objectScales["Books"])} position={[-6.308, 1.111, -6.305]}>
        <group position={[0.003, 0.095, -0.378]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube160.geometry}
            material={materials.Book_1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube160_1.geometry}
            material={materials.Book_Paper}
          />
        </group>
        <group position={[0.003, 0.029, -0.176]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube161.geometry}
            material={materials.Book_2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube161_1.geometry}
            material={materials.Book_Paper}
          />
        </group>
        <group position={[0.003, 0.064, 0.027]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube162.geometry}
            material={materials.Book_3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube162_1.geometry}
            material={materials.Book_Paper}
          />
        </group>
        <group position={[0.003, 0.111, 0.231]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube163.geometry}
            material={materials.Book_4}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube163_1.geometry}
            material={materials.Book_Paper}
          />
        </group>
        <group position={[0.003, 0.086, 0.69]} rotation={[-0.453, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube164.geometry}
            material={materials.Book_1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube164_1.geometry}
            material={materials.Book_1}
          />
        </group>
      </group>
      <ClickableItem
        item={Item.PersonalProjects}
      >
        <group name="PersonalProjects" scale={!hasRoomAnimationStarted ? vector3Zero : (hasRoomAnimationEnded ? vector3One : objectScales["PersonalProjects"])} position={[-6.412, 1.066, 0.847]} rotation={[-Math.PI, 0, -2.313]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ball.geometry}
            material={materials.Ball}
            position={[-0.108, 0.121, 0.162]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.Maze}
            position={[-0.562, 0.085, -0.435]}
            rotation={[1.571, -1.562, 1.571]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003.geometry}
            material={materials.Maze}
            position={[0.465, 0.094, -0.556]}
            rotation={[-Math.PI, 0, 3.133]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Flag.geometry}
            material={materials.Flag_Pole}
            position={[0.436, 0.034, -0.424]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Flag001.geometry}
            material={materials.Flag}
            position={[0.435, 0.235, -0.416]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Maze_Floor.geometry}
            material={materials.Maze}
            position={[0, 0, 0.017]}
          />
        </group>
      </ClickableItem>
      <group name="Papers" scale={!hasRoomAnimationStarted ? vector3Zero : (hasRoomAnimationEnded ? vector3One : objectScales["Papers"])} position={[-3.58, -2.336, 0.553]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Paper_1.geometry}
          material={materials.Paper}
          position={[0, -0.036, 0]}
          rotation={[0.024, 0.075, -0.003]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Paper_2.geometry}
          material={materials.Paper}
          rotation={[0.025, -0.202, 0.004]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Paper_3.geometry}
          material={materials.Paper}
          position={[0, 0.028, 0]}
          rotation={[0.028, 0.486, -0.014]}
        />
      </group>
      <group name="PenHolder" scale={!hasRoomAnimationStarted ? vector3Zero : (hasRoomAnimationEnded ? vector3One : objectScales["PenHolder"])} position={[-5.135, -2.107, 1.325]}>
        <group position={[-0.095, 0.235, -0.151]} rotation={[-0.109, -0.11, 0.099]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_1.geometry}
            material={materials.Book_1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_2.geometry}
            material={materials.Pen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_3.geometry}
            material={materials.Pen_Tip}
          />
        </group>
        <group position={[0.163, 0.196, -0.038]} rotation={[-0.529, -0.498, -0.285]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005_1.geometry}
            material={materials.Book_4}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005_2.geometry}
            material={materials.Pen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005_3.geometry}
            material={materials.Pen_Tip}
          />
        </group>
        <group position={[0.149, 0.244, 0.06]} rotation={[-0.256, -0.822, -0.527]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006_1.geometry}
            material={materials.Book_3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006_2.geometry}
            material={materials.Pen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006_3.geometry}
            material={materials.Pen_Tip}
          />
        </group>
        <group position={[-0.078, 0.257, 0.172]} rotation={[-2.913, -0.71, 2.954]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_1.geometry}
            material={materials.Book_5}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_2.geometry}
            material={materials.Pen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_3.geometry}
            material={materials.Pen_Tip}
          />
        </group>
        <group position={[-0.19, 0.303, -0.027]} rotation={[-3.071, -0.69, 2.667]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_1.geometry}
            material={materials.Book_2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_2.geometry}
            material={materials.Pen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_3.geometry}
            material={materials.Pen_Tip}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pen_Holder_Base.geometry}
          material={materials.Maze}
        />
      </group>
      <group name="Chair" scale={!hasRoomAnimationStarted ? vector3Zero : (hasRoomAnimationEnded ? vector3One : objectScales["Chair"])} position={[-0.929, -3.607, -2.356]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials._7___Default}
          position={[1.417, 0.766, 0.843]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials._7___Default}
          position={[1.161, -0.631, 0.741]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials._7___Default}
          position={[1.792, -0.349, 0.701]}
          rotation={[Math.PI / 2, 1.484, 3.092]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012.geometry}
          material={materials._7___Default}
          position={[0.028, -1.405, 0.501]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013.geometry}
          material={materials._7___Default}
          position={[1.698, -0.85, -0.484]}
          rotation={[0, 0, -1.657]}
        />
        <group rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial001.geometry}
            material={materials.Chair_Seat}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial002.geometry}
            material={materials.Chair_Seat}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial004.geometry}
            material={materials.Chair}
            position={[-0.023, 0, 0]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
        </group>
        <group position={[0.028, 0.171, 1.893]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004.geometry}
            material={materials._7___Default}
            rotation={[Math.PI, -0.333, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005.geometry}
            material={materials._7___Default}
            rotation={[Math.PI, -0.333, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006.geometry}
            material={materials._7___Default}
            rotation={[0, -1.557, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007.geometry}
            material={materials._7___Default}
            rotation={[0, -0.282, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008.geometry}
            material={materials._7___Default}
            position={[-1.725, -1.081, 0.088]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009.geometry}
            material={materials._7___Default}
            position={[-1.725, -1.081, 0.088]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010.geometry}
            material={materials._7___Default}
            position={[-0.473, -1.081, 1.725]}
            rotation={[Math.PI / 2, 0, -1.306]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder011.geometry}
            material={materials._7___Default}
            position={[-0.513, -1.081, -1.572]}
            rotation={[Math.PI / 2, 0, -1.892]}
          />
        </group>
      </group>
      <group name="Clock" scale={!hasRoomAnimationStarted ? vector3Zero : (hasRoomAnimationEnded ? vector3One : objectScales["Clock"])} position={[-6.716, 3.973, -2.322]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Clock_Frame.geometry}
          material={materials.Clock}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Marker_1.geometry}
          material={materials.Clock_Hand}
          position={[0.029, 0.838, 0.001]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Marker_2.geometry}
          material={materials.Clock_Hand}
          position={[0.029, 0.007, 0.846]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Minute_Hand.geometry}
          material={materials.Clock_Hand}
          position={[0.038, 0.007, 0.346]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Second_Hand.geometry}
          material={materials.Clock_Hand}
          position={[0.038, 0.438, 0]}
          rotation={[Math.PI, 0, 0]}
        />
      </group>
      <mesh
        name="Window"
        scale={!hasRoomAnimationStarted ? vector3Zero : (hasRoomAnimationEnded ? vector3One : objectScales["Window"])}
        castShadow
        receiveShadow
        geometry={nodes.Window.geometry}
        material={materials.Window}
        position={[1.629, 1.369, -6.979]}
      />
      <mesh
        name="Mat"
        scale={!hasRoomAnimationStarted ? vector3Zero : (hasRoomAnimationEnded ? vector3One : objectScales["Mat"])}
        castShadow
        receiveShadow
        geometry={nodes.Mat.geometry}
        material={materials.Mat}
        position={[4, -6.7, 2.86]}
      />
      <ClickableItem
        item={Item.About}
      >
        <group name="About" scale={!hasRoomAnimationStarted ? vector3Zero : (hasRoomAnimationEnded ? vector3One : objectScales["About"])} position={[-6.122, 0.742, -1.688]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Avatar.geometry}
            material={materials.mat0}
            position={[-0.01, 0.689, -0.004]}
            rotation={[Math.PI / 2, 0, -1.537]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Avatar_Stand.geometry}
            material={materials.Monitor}
          />
        </group>
      </ClickableItem>
      <ClickableItem
        item={Item.AcademicProjects}
      >
        <group name="AcademicProjects" scale={!hasRoomAnimationStarted ? vector3Zero : (hasRoomAnimationEnded ? vector3One : objectScales["AcademicProjects"])} position={[-6.288, 1.117, -4.172]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['@'].geometry}
            material={materials.Paper}
            position={[-0.116, 0.209, 0.136]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials.Do_do}
            position={[0.001, -0.407, -0.078]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={materials.Do_do}
            position={[0.001, 0.03, -0.078]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube007.geometry}
            material={materials.Do_do}
            position={[0.001, 0.126, -0.078]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008.geometry}
            material={materials.Do_do}
            position={[0.334, 0.189, -0.296]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009.geometry}
            material={materials.Do_do}
            position={[0.334, 0.247, -0.296]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube010.geometry}
            material={materials.Trang}
            position={[-0.004, 0.12, 0.136]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube011.geometry}
            material={materials.Trang}
            position={[-0.004, 0.143, 0.136]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube012.geometry}
            material={materials.Paper}
            position={[-0.001, -0.103, -0.076]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={materials.Paper}
            position={[-0.341, -0.189, 0.453]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001.geometry}
            material={materials.Do_do}
            position={[-0.292, -0.189, 0.453]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002.geometry}
            material={materials.Do_do}
            position={[-0.385, -0.189, 0.453]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003.geometry}
            material={materials.Do_do}
            position={[0.385, -0.189, 0.453]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['E-commerce'].geometry}
            material={materials.Paper}
            position={[-0.306, 0.052, 0.281]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <group position={[-1.427, -0.519, 0.158]} rotation={[Math.PI / 2, 0, 0]}>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <group rotation={[Math.PI, 0, 0]}>
                <group position={[1.427, 0.519, -0.158]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.hotdog_house_Do_do_0001.geometry}
                    material={materials.Do_do}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.hotdog_house_Trang_0.geometry}
                    material={materials.Paper}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.hotdog_house_Trang_0001.geometry}
                    material={materials.Paper}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.hotdog_house_Xam_xanh_0.geometry}
                    material={materials.Monitor}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.hotdog_house_Xanh_Kinh_0.geometry}
                    material={materials.Xanh_Kinh}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.hotdog_house_Xanh_la_0.geometry}
                    material={materials.Book_1}
                  />
                </group>
                <group position={[3.032, 0.788, -0.364]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pizzaria_Burger_Shop_Coffee_House_White_0001.geometry}
                    material={materials.Trang}
                    position={[-1.336, -0.748, 0.669]}
                    rotation={[0, 1.547, 0]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pizzaria_Do_do_0002.geometry}
                    material={materials.Do_do}
                    position={[-1.912, -0.071, 0.427]}
                    rotation={[Math.PI, 0, Math.PI]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </ClickableItem>
      <ClickableItem
        item={Item.Experience}
      >
        <group name="Experience" scale={!hasRoomAnimationStarted ? vector3Zero : (hasRoomAnimationEnded ? vector3One : objectScales["Experience"])} position={[-4.333, -1.979, -2.446]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube018.geometry}
            material={materials._7___Default}
            position={[-0.725, -0.274, 0.249]}
            rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          />
          <group position={[-0.23, -0.274, 0.424]}>
            <group position={[0.022, 0.001, -0.379]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.BODY_BODY_0.geometry}
                material={materials.Paper}
                position={[0.054, 0.718, 0.104]}
              />
            </group>
            <group position={[0.051, 0.003, -0.122]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
              <group position={[0.547, 0.12, 0.004]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.bottom_07___Default_0.geometry}
                  material={materials._7___Default}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.bottom_BOTTOM_0.geometry}
                  material={materials._7___Default}
                />
              </group>
            </group>
            <group position={[0.22, 0.001, -0.424]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.BOX_METAL_METALL_0.geometry}
                material={materials.METALL}
                position={[0.01, 0.273, 0]}
              />
            </group>
            <group position={[-0.652, 0.001, -0.098]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.BUMPER_FRONT_PLASTIC_0.geometry}
                material={materials.PLASTIC}
                position={[0.047, 0.258, 0.012]}
              />
            </group>
            <group position={[-0.505, 0.003, -0.335]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.interior_VOID_0.geometry}
                material={materials.VOID}
                position={[-0.006, 0.215, 0.143]}
              />
            </group>
            <group position={[-0.005, 0.001, -0.18]} rotation={[0, 0, Math.PI / 2]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.LIGHTS_LIGHT_0.geometry}
                material={materials.LIGHT}
                position={[0.054, 0.691, -0.095]}
              />
            </group>
            <group position={[-0.47, 0.223, -0.085]} rotation={[-Math.PI / 2, 0, 0]}>
              <group position={[0, 0, 0.006]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.wheel_01_RIM_0.geometry}
                  material={materials.material}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.wheel_01_TIRE_0.geometry}
                  material={materials.TIRE}
                />
              </group>
            </group>
            <group position={[0.381, 0.203, -0.085]} rotation={[-Math.PI / 2, 0, 0]}>
              <group position={[0, 0, 0.026]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.wheel_02_RIM_0.geometry}
                  material={materials.material}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.wheel_02_TIRE_0.geometry}
                  material={materials.TIRE}
                />
              </group>
            </group>
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={materials.SEPAMAT}
            position={[0, 0.007, -0.004]}
            rotation={[0, -Math.PI / 2, 0]}
          />
        </group>
      </ClickableItem>
      <ClickableItem
        item={Item.Resume}
      >
        <Box
          name="Resume"
          scale={!hasRoomAnimationStarted ? vector3Zero : (hasRoomAnimationEnded ? new THREE.Vector3(1.6, 0.1, 1.14) : objectScales["Resume"])}
          castShadow
          receiveShadow
          material={getCurrentLanguage() === Language.English ? resumeMaterialsEn : resumeMaterialsFr}
          position={[-5.597, -1.067, -3.785]}
          rotation={[0, -0.262, -Math.PI / 2]}
        />
      </ClickableItem>
      <Box
        name="Poster"
        scale={!hasRoomAnimationStarted ? vector3Zero : (hasRoomAnimationEnded ? new THREE.Vector3(0.1, 4, 3) : objectScales["Poster"])}
        castShadow
        receiveShadow
        material={posterMaterials}
        position={[-6.81, 2.585, 4.567]}
        // rotation={[0, -0.262, -Math.PI / 2]}
      />
      <Box
        visible={portfolioOpened && firstItemSelected}
        scale={new THREE.Vector3(2.8, 0.1, 1.65)}
        material={monitorMaterials}
        position={[-5.597, -1.05, -0.85]}
        rotation={[Math.PI / 2, 0, -1.8]}
      />
      <mesh
        name="BackWall"
        scale={!hasRoomAnimationStarted ? vector3Zero : (hasRoomAnimationEnded ? vector3One : objectScales["BackWall"])}
        castShadow
        receiveShadow
        geometry={nodes.BackWall.geometry}
        material={materials.Wall}
        position={[-7.027, -0.065, -6.188]}
      />
      <mesh
        name="RightWall"
        scale={!hasRoomAnimationStarted ? vector3Zero : (hasRoomAnimationEnded ? vector3One : objectScales["RightWall"])}
        castShadow
        receiveShadow
        geometry={nodes.RightWall.geometry}
        material={materials.Wall}
        position={[-5.827, -0.065, -6.988]}
      />
      <group name="Shelf" scale={!hasRoomAnimationStarted ? vector3Zero : (hasRoomAnimationEnded ? vector3One : objectScales["Shelf"])} position={[-6.227, 0.521, -2.288]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Back_Shelf.geometry}
          material={materials.Desk_Top}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BackShelf_Stands.geometry}
          material={materials.Desk_Top}
          position={[0, 0, 3.921]}
        />
      </group>
      <Text
        visible={portfolioOpened}
        color="black"
        fontSize={0.15}
        anchorX="left"
        textAlign="center"
        position={[-3.2, -2.2, 0.95]}
        rotation={[Math.PI / 2, 3.2, -1]}
        maxWidth={1}
      >
        {t("paper-text")}
      </Text>
    </a.group>
  )
}

useGLTF.preload(roomScene);

export default Room;