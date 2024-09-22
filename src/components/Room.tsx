import * as THREE from 'three'
import { Box, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { a } from '@react-spring/three'

import roomScene from "../assets/models/Portfolio.glb";
import ClickableItem from './ClickableItem';

type GLTFResult = GLTF & {
  nodes: {
    BackWall: THREE.Mesh
    RightWall: THREE.Mesh
    Back_Shelf: THREE.Mesh
    BackShelf_Stands: THREE.Mesh
    Circle_006_Tropy_Cup_0: THREE.Mesh
    Circle_007_Tropy_Cup_0: THREE.Mesh
    Cube_003_Tropy_cup_2_0: THREE.Mesh
    Cube_004_Tropy_Cup_0: THREE.Mesh
    Cube_005_Tropy_Cup_0: THREE.Mesh
    Cube_006_Tropy_Cup_0: THREE.Mesh
    Star_star_0: THREE.Mesh
    Sphere_bood_0: THREE.Mesh
    Sphere_roope_0: THREE.Mesh
    Torus_hat_0: THREE.Mesh
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
    Cube011: THREE.Mesh
    Cube011_1: THREE.Mesh
    MonitorStand: THREE.Mesh
    MonitorStandFoot: THREE.Mesh
    emissive_Key_0: THREE.Mesh
    keyboard_Key_0: THREE.Mesh
    keyboard_Keyboard_0: THREE.Mesh
    keys_Key_0: THREE.Mesh
    Object_0: THREE.Mesh
    Object_2: THREE.Mesh
    Object_3: THREE.Mesh
    Leg_Bottom: THREE.Mesh
    Leg_Top: THREE.Mesh
    Table: THREE.Mesh
    Cube009: THREE.Mesh
    Cube009_1: THREE.Mesh
    Cube002: THREE.Mesh
    Cube002_1: THREE.Mesh
    Cube012: THREE.Mesh
    Cube012_1: THREE.Mesh
    Cube013: THREE.Mesh
    Cube013_1: THREE.Mesh
    Cube014: THREE.Mesh
    Cube014_1: THREE.Mesh
    Cube015: THREE.Mesh
    Cube015_1: THREE.Mesh
    Ball: THREE.Mesh
    Flag: THREE.Mesh
    Flag001: THREE.Mesh
    Maze_Floor: THREE.Mesh
    Cube: THREE.Mesh
    Cube001: THREE.Mesh
    Paper_1: THREE.Mesh
    Paper_2: THREE.Mesh
    Paper_3: THREE.Mesh
    Cylinder004: THREE.Mesh
    Cylinder004_1: THREE.Mesh
    Cylinder004_2: THREE.Mesh
    Cylinder005: THREE.Mesh
    Cylinder005_1: THREE.Mesh
    Cylinder005_2: THREE.Mesh
    Cylinder006: THREE.Mesh
    Cylinder006_1: THREE.Mesh
    Cylinder006_2: THREE.Mesh
    Cylinder007: THREE.Mesh
    Cylinder007_1: THREE.Mesh
    Cylinder007_2: THREE.Mesh
    Cylinder008: THREE.Mesh
    Cylinder008_1: THREE.Mesh
    Cylinder008_2: THREE.Mesh
    Pen_Holder_Base: THREE.Mesh
    defaultMaterial: THREE.Mesh
    defaultMaterial001: THREE.Mesh
    defaultMaterial002: THREE.Mesh
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
    Cylinder: THREE.Mesh
    Cylinder001: THREE.Mesh
    Cylinder002: THREE.Mesh
    Cylinder003: THREE.Mesh
    ['E-commerce']: THREE.Mesh
    hotdog_house_Do_do_0: THREE.Mesh
    hotdog_house_Do_do_0001: THREE.Mesh
    hotdog_house_Kem_0: THREE.Mesh
    hotdog_house_Trang_0: THREE.Mesh
    hotdog_house_Trang_0001: THREE.Mesh
    hotdog_house_Xam_xanh_0: THREE.Mesh
    hotdog_house_Xanh_Kinh_0: THREE.Mesh
    hotdog_house_Xanh_la_0: THREE.Mesh
    icescream_house_Trang_0001: THREE.Mesh
    pizzaria_Burger_Shop_Coffee_House_Black_0001: THREE.Mesh
    pizzaria_Burger_Shop_Coffee_House_Brown_Dam_0001: THREE.Mesh
    pizzaria_Burger_Shop_Coffee_House_White_0001: THREE.Mesh
    pizzaria_Do_do_0001: THREE.Mesh
    pizzaria_Do_do_0002: THREE.Mesh
    BODY_BODY_0: THREE.Mesh
    bottom_07___Default_0: THREE.Mesh
    bottom_BOTTOM_0: THREE.Mesh
    BOX_METAL_METALL_0: THREE.Mesh
    BUMPER_FRONT_PLASTIC_0: THREE.Mesh
    BUMPER_FRONT_INNER_BOTTOM_0: THREE.Mesh
    CABIN_PLASTIC_METALL_0: THREE.Mesh
    CABIN_PLASTIC_PLASTIC_0: THREE.Mesh
    GLASS_GLASS_0: THREE.Mesh
    interior_VOID_0: THREE.Mesh
    LIGHTS_LIGHT_0: THREE.Mesh
    LIGHTS_LIGHTS_GLASS_0: THREE.Mesh
    wheel_003_RIM_0: THREE.Mesh
    wheel_003_TIRE_0: THREE.Mesh
    wheel_004_RIM_0: THREE.Mesh
    wheel_004_TIRE_0: THREE.Mesh
    wheel_01_RIM_0: THREE.Mesh
    wheel_01_TIRE_0: THREE.Mesh
    wheel_02_RIM_0: THREE.Mesh
    wheel_02_TIRE_0: THREE.Mesh
    Plane: THREE.Mesh
  }
  materials: {
    Wall: THREE.MeshPhysicalMaterial
    Desk_Top: THREE.MeshPhysicalMaterial
    Tropy_Cup: THREE.MeshStandardMaterial
    Tropy_cup_2: THREE.MeshStandardMaterial
    star: THREE.MeshStandardMaterial
    ['bood.001']: THREE.MeshStandardMaterial
    ['roope.001']: THREE.MeshStandardMaterial
    ['material.003']: THREE.MeshStandardMaterial
    ['material_0.001']: THREE.MeshStandardMaterial
    Maze: THREE.MeshPhysicalMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    Floor: THREE.MeshPhysicalMaterial
    MonitorScreen: THREE.MeshPhysicalMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    Keyboard_Mouse: THREE.MeshPhysicalMaterial
    Monitor: THREE.MeshPhysicalMaterial
    Desk_Leg: THREE.MeshStandardMaterial
    Desk_Leg_Extension: THREE.MeshStandardMaterial
    Book_1: THREE.MeshPhysicalMaterial
    Book_Paper: THREE.MeshStandardMaterial
    Book_2: THREE.MeshStandardMaterial
    ['Book_Paper.001']: THREE.MeshStandardMaterial
    Book_3: THREE.MeshStandardMaterial
    ['Book_Paper.002']: THREE.MeshStandardMaterial
    Book_4: THREE.MeshStandardMaterial
    ['Book_Paper.003']: THREE.MeshStandardMaterial
    ['Book_Paper.004']: THREE.MeshStandardMaterial
    Ball: THREE.MeshStandardMaterial
    Flag_Pole: THREE.MeshStandardMaterial
    Flag: THREE.MeshStandardMaterial
    Pen: THREE.MeshStandardMaterial
    Pen_Tip: THREE.MeshStandardMaterial
    Book_5: THREE.MeshStandardMaterial
    Chair: THREE.MeshStandardMaterial
    Chair_Seat: THREE.MeshStandardMaterial
    Clock_Hand: THREE.MeshPhysicalMaterial
    Window: THREE.MeshPhysicalMaterial
    Mat: THREE.MeshPhysicalMaterial
    mat0: THREE.MeshPhysicalMaterial
    Paper: THREE.MeshStandardMaterial
    Do_do: THREE.MeshStandardMaterial
    Trang: THREE.MeshStandardMaterial
    Clock: THREE.MeshPhysicalMaterial
    Xanh_Kinh: THREE.MeshStandardMaterial
    Burger_Shop_Coffee_HouseBlack: THREE.MeshStandardMaterial
    Burger_Shop_Coffee_HouseBrown_Dam: THREE.MeshStandardMaterial
    _7___Default: THREE.MeshStandardMaterial
    BOTTOM: THREE.MeshStandardMaterial
    METALL: THREE.MeshStandardMaterial
    PLASTIC: THREE.MeshStandardMaterial
    GLASS: THREE.MeshStandardMaterial
    VOID: THREE.MeshStandardMaterial
    LIGHT: THREE.MeshStandardMaterial
    LIGHTS_GLASS: THREE.MeshStandardMaterial
    material: THREE.MeshStandardMaterial
    TIRE: THREE.MeshStandardMaterial
    SEPAMAT: THREE.MeshStandardMaterial
  }
}


const whiteMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
whiteMaterial.transparent = true;
whiteMaterial.opacity = 0;

const resumeTexture = new THREE.TextureLoader().load("src/assets/images/Resume.jpg");
const posterTexture = new THREE.TextureLoader().load("src/assets/images/Poster_" + (Math.floor(Math.random() * 5) + 1) + ".jpg");

const resumeMaterials: THREE.Material[] = [
  whiteMaterial,
  whiteMaterial,
  new THREE.MeshBasicMaterial({ map: resumeTexture }),
  whiteMaterial,
  whiteMaterial,
  whiteMaterial
];

const posterMaterials: THREE.Material[] = [
  new THREE.MeshBasicMaterial({ map: posterTexture }),
  whiteMaterial,
  whiteMaterial,
  whiteMaterial,
  whiteMaterial,
  whiteMaterial
];


type RoomProps = {
  group: JSX.IntrinsicElements['group'],
  portfolioOpened: boolean,
}


export enum Item {
  Resume,
  Education,
  Experience,
  PersonalProjects,
  AcademicProjects,
  Certifications,
  About,
}


const Room = ({ group, portfolioOpened }: RoomProps) => {
  const { nodes, materials } = useGLTF(roomScene) as GLTFResult

  return (
    <a.group {...group} dispose={null}>
      <ClickableItem
        item={Item.Certifications}
      >
        <group position={[-3.032, 4.469, -1.855]} rotation={[Math.PI / 2, 0, -1.067]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_006_Tropy_Cup_0.geometry}
            material={materials.Tropy_Cup}
            position={[2.288, -4.577, 6.865]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_007_Tropy_Cup_0.geometry}
            material={materials.Tropy_Cup}
            position={[2.288, -4.577, 6.865]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_003_Tropy_cup_2_0.geometry}
            material={materials.Tropy_cup_2}
            position={[2.288, -4.577, 6.865]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_004_Tropy_Cup_0.geometry}
            material={materials.Tropy_Cup}
            position={[2.288, -4.577, 6.865]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_005_Tropy_Cup_0.geometry}
            material={materials.Tropy_Cup}
            position={[2.288, -4.577, 6.865]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_006_Tropy_Cup_0.geometry}
            material={materials.Tropy_Cup}
            position={[2.288, -4.577, 6.865]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Star_star_0.geometry}
            material={materials.star}
            position={[2.288, -4.577, 6.865]}
          />
        </group>
      </ClickableItem>
      <ClickableItem
        item={Item.Education}
      >
      <group position={[-1.992, 7.494, 3.341]} rotation={[Math.PI / 2, -0.592, 0]}>
        <group rotation={[Math.PI / 2, -0.497, -Math.PI]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[-0.718, 0, -0.639]} rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere_bood_0.geometry}
                material={materials['bood.001']}
                position={[-1.121, -8.251, 1.995]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere_roope_0.geometry}
                material={materials['roope.001']}
                position={[-1.121, -8.251, 1.995]}
              />
            </group>
            <group position={[0, 0, -0.401]} rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Torus_hat_0.geometry}
                material={materials['material.003']}
                position={[-1.121, -8.251, 1.995]}
              />
            </group>
          </group>
        </group>
        </group>
      </ClickableItem>
      <group position={[-0.345, 0, 6.993]} rotation={[Math.PI / 2, 0, 0]}>
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
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials.Floor}
        position={[0.173, -7.065, 0.212]}
      />
      <group position={[-1.459, 4, 0.015]} rotation={[0, 0.262, 0]}>
        <group position={[-3.838, -5.066, -1.905]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube011.geometry}
            material={materials.Monitor}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube011_1.geometry}
            material={materials.MonitorScreen}
          />
        </group>
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
      <group position={[1.65, 4.463, -0.005]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <group position={[-0.989, -0.076, -0.307]} rotation={[0.123, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.emissive_Key_0.geometry}
            material={materials['Material.002']}
            position={[2.288, -3.673, 7.602]}
          />
        </group>
        <group position={[0, -0.263, -0.106]} rotation={[0.123, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.keyboard_Key_0.geometry}
            material={materials.Keyboard_Mouse}
            position={[2.288, -3.701, 7.374]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.keyboard_Keyboard_0.geometry}
            material={materials.Keyboard_Mouse}
            position={[2.288, -3.701, 7.374]}
          />
        </group>
        <group position={[-0.989, -0.077, -0.098]} rotation={[0.123, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.keys_Key_0.geometry}
            material={materials.Keyboard_Mouse}
            position={[2.288, -3.701, 7.374]}
          />
        </group>
      </group>
      <group position={[1.412, 5.102, -1.838]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Keyboard_Mouse}
          position={[2.288, -7.451, -4.577]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Keyboard_Mouse}
          position={[2.288, -7.451, -4.577]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Monitor}
          position={[2.288, -7.451, -4.577]}
        />
      </group>
      <group position={[0, 4, 0]}>
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
            geometry={nodes.Cube009.geometry}
            material={materials.Desk_Leg}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009_1.geometry}
            material={materials.Desk_Leg_Extension}
          />
        </group>
      </group>
      <group position={[-1.731, 8.006, -4.396]}>
        <group position={[0, -0.053, 0.193]}>
          <group position={[-4.577, -6.865, -2.288]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube012.geometry}
              material={materials.Book_2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube012_1.geometry}
              material={materials['Book_Paper.001']}
            />
          </group>
        </group>
        <group position={[0, 0.025, 0.178]}>
          <group position={[0, -0.055, 0.202]}>
            <group position={[-4.577, -6.865, -2.288]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube013.geometry}
                material={materials.Book_3}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube013_1.geometry}
                material={materials['Book_Paper.002']}
              />
            </group>
          </group>
        </group>
        <group position={[0, 0.083, 0.359]}>
          <group position={[0, -0.061, 0.222]}>
            <group position={[-4.577, -6.865, -2.288]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube014.geometry}
                material={materials.Book_4}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube014_1.geometry}
                material={materials['Book_Paper.003']}
              />
            </group>
          </group>
        </group>
        <group position={[0, -0.048, 0.844]} rotation={[-0.449, 0, 0]}>
          <group position={[0, -0.059, 0.215]}>
            <group position={[-4.577, -5.19, -5.043]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube015.geometry}
                material={materials.Book_1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube015_1.geometry}
                material={materials['Book_Paper.004']}
              />
            </group>
          </group>
        </group>
        <group position={[-4.577, -6.865, -2.288]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.Book_1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials.Book_Paper}
          />
        </group>
      </group>
      <ClickableItem
        item={Item.PersonalProjects}
      >
      <group position={[0.736, 4.486, -3.247]} rotation={[0, -0.556, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ball.geometry}
          material={materials.Ball}
          position={[-4.951, -6.753, 0.604]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Flag.geometry}
          material={materials.Flag_Pole}
          position={[-4.729, -6.836, 0.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Flag001.geometry}
          material={materials.Flag}
          position={[-4.73, -6.668, 0.121]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Maze_Floor.geometry}
          material={materials.Maze}
          position={[-5.095, -6.865, 0.471]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.Maze}
          position={[-5.47, -6.773, 0.945]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.Maze}
          position={[-4.621, -6.773, 0.846]}
          rotation={[0, 1.571, 0]}
        />
        </group>
      </ClickableItem>
      <group position={[1.03, 4.472, 2.837]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Paper_1.geometry}
          material={materials.Paper}
          position={[-4.61, -6.844, -2.285]}
          rotation={[0.024, 0.075, -0.003]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Paper_2.geometry}
          material={materials.Paper}
          position={[-4.61, -6.808, -2.285]}
          rotation={[0.025, -0.202, 0.004]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Paper_3.geometry}
          material={materials.Paper}
          position={[-4.61, -6.781, -2.285]}
          rotation={[0.028, 0.486, -0.014]}
        />
      </group>
      <group position={[1.494, 4.472, 2.966]}>
        <group position={[-6.725, -6.344, -1.792]} rotation={[-0.109, -0.11, 0.099]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004.geometry}
            material={materials.Book_1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_1.geometry}
            material={materials.Pen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_2.geometry}
            material={materials.Pen_Tip}
          />
        </group>
        <group position={[-6.467, -6.383, -1.678]} rotation={[-0.529, -0.498, -0.285]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005.geometry}
            material={materials.Book_4}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005_1.geometry}
            material={materials.Pen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005_2.geometry}
            material={materials.Pen_Tip}
          />
        </group>
        <group position={[-6.481, -6.336, -1.58]} rotation={[-0.256, -0.822, -0.527]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006.geometry}
            material={materials.Book_3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006_1.geometry}
            material={materials.Pen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006_2.geometry}
            material={materials.Pen_Tip}
          />
        </group>
        <group position={[-6.708, -6.322, -1.469]} rotation={[-2.913, -0.71, 2.954]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007.geometry}
            material={materials.Book_5}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_1.geometry}
            material={materials.Pen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_2.geometry}
            material={materials.Pen_Tip}
          />
        </group>
        <group position={[-6.82, -6.276, -1.667]} rotation={[-3.071, -0.69, 2.667]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008.geometry}
            material={materials.Book_2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_1.geometry}
            material={materials.Pen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_2.geometry}
            material={materials.Pen_Tip}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pen_Holder_Base.geometry}
          material={materials.Maze}
          position={[-6.63, -6.579, -1.641]}
        />
      </group>
      <group visible={!portfolioOpened || true} position={[-0.179, 3.382, 1.701]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial.geometry}
          material={materials.Chair}
          position={[-4.057, 0.75, 6.989]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial001.geometry}
          material={materials.Chair_Seat}
          position={[-4.057, 0.75, 6.989]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial002.geometry}
          material={materials.Chair_Seat}
          position={[-4.057, 0.75, 6.989]}
        />
      </group>
      <group position={[-6.716, 3.973, -2.322]}>
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
        castShadow
        receiveShadow
        geometry={nodes.Window.geometry}
        material={materials.Window}
        position={[1.629, 1.369, -6.979]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mat.geometry}
        material={materials.Mat}
        position={[4, -6.7, 2.86]}
      />
      <ClickableItem
        item={Item.About}
      >
        <group position={[-6.122, 0.751, -2.354]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Avatar.geometry}
            material={materials.mat0}
            position={[-0.012, 0.784, -0.004]}
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
        <group position={[-6.616, 0.746, 4.029]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['@'].geometry}
            material={materials.Paper}
            position={[8.086, 0.58, 0.465]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={materials.Paper}
            position={[7.861, 0.183, 0.782]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001.geometry}
            material={materials.Do_do}
            position={[7.909, 0.183, 0.782]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002.geometry}
            material={materials.Do_do}
            position={[7.817, 0.183, 0.782]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003.geometry}
            material={materials.Do_do}
            position={[8.587, 0.183, 0.782]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['E-commerce'].geometry}
            material={materials.Paper}
            position={[7.895, 0.423, 0.61]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <group position={[6.775, -0.148, 0.487]} rotation={[Math.PI / 2, 0, 0]}>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <group rotation={[Math.PI, 0, 0]}>
                <group position={[1.427, 0.519, -0.158]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.hotdog_house_Do_do_0.geometry}
                    material={materials.Do_do}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.hotdog_house_Do_do_0001.geometry}
                    material={materials.Do_do}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.hotdog_house_Kem_0.geometry}
                    material={materials.Clock}
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
                <group position={[0.214, 0.521, -0.225]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.icescream_house_Trang_0001.geometry}
                    material={materials.Trang}
                    position={[1.208, 0, 0]}
                  />
                </group>
                <group position={[3.032, 0.788, -0.364]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pizzaria_Burger_Shop_Coffee_House_Black_0001.geometry}
                    material={materials.Burger_Shop_Coffee_HouseBlack}
                    position={[-1.336, -0.748, 0.669]}
                    rotation={[0, 1.571, 0]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pizzaria_Burger_Shop_Coffee_House_Brown_Dam_0001.geometry}
                    material={materials.Burger_Shop_Coffee_HouseBrown_Dam}
                    position={[-1.336, -0.748, 0.669]}
                    rotation={[0, 1.547, 0]}
                  />
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
                    geometry={nodes.pizzaria_Do_do_0001.geometry}
                    material={materials.Do_do}
                    position={[-0.863, -0.501, 0.22]}
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
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.SEPAMAT}
          position={[-4.328, -2.085, -2.446]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.8, 0.8, 0.8]}
        />
        <group position={[-4.526, -2.385, -2.284]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
          <group position={[0.016, 0.001, -0.267]} rotation={[0, 0, Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BODY_BODY_0.geometry}
              material={materials.Paper}
              position={[0.038, 0.505, 0.073]}
            />
          </group>
          <group position={[0.036, 0.002, -0.086]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
            <group position={[0.385, 0.084, 0.003]}>
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
                material={materials.BOTTOM}
              />
            </group>
          </group>
          <group position={[0.155, 0.001, -0.298]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BOX_METAL_METALL_0.geometry}
              material={materials.METALL}
              position={[0.007, 0.192, 0]}
            />
          </group>
          <group position={[-0.459, 0.001, -0.069]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BUMPER_FRONT_PLASTIC_0.geometry}
              material={materials.PLASTIC}
              position={[0.033, 0.182, 0.009]}
            />
          </group>
          <group position={[-0.459, 0.001, -0.069]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BUMPER_FRONT_INNER_BOTTOM_0.geometry}
              material={materials.BOTTOM}
              position={[0.033, 0.182, 0.009]}
            />
          </group>
          <group position={[-0.369, 0.001, -0.257]}>
            <group position={[0.095, 0.173, 0.057]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.CABIN_PLASTIC_METALL_0.geometry}
                material={materials.METALL}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.CABIN_PLASTIC_PLASTIC_0.geometry}
                material={materials.PLASTIC}
              />
            </group>
          </group>
          <group position={[-0.378, 0.001, -0.266]} rotation={[0, 0, Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GLASS_GLASS_0.geometry}
              material={materials.GLASS}
              position={[0.038, 0.104, 0.072]}
            />
          </group>
          <group position={[-0.356, 0.002, -0.236]} rotation={[0, 0, Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.interior_VOID_0.geometry}
              material={materials.VOID}
              position={[-0.005, 0.151, 0.101]}
            />
          </group>
          <group position={[-0.003, 0.001, -0.127]} rotation={[0, 0, Math.PI / 2]}>
            <group position={[0.038, 0.486, -0.067]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.LIGHTS_LIGHT_0.geometry}
                material={materials.LIGHT}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.LIGHTS_LIGHTS_GLASS_0.geometry}
                material={materials.LIGHTS_GLASS}
              />
            </group>
          </group>
          <group position={[0.268, -0.142, -0.06]} rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0, 0, 0.018]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.wheel_003_RIM_0.geometry}
                material={materials.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.wheel_003_TIRE_0.geometry}
                material={materials.TIRE}
              />
            </group>
          </group>
          <group position={[-0.331, -0.156, -0.06]} rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0, 0, 0.004]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.wheel_004_RIM_0.geometry}
                material={materials.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.wheel_004_TIRE_0.geometry}
                material={materials.TIRE}
              />
            </group>
          </group>
          <group position={[-0.331, 0.157, -0.06]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0, 0, 0.004]}>
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
          <group position={[0.268, 0.143, -0.06]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0, 0, 0.018]}>
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
      </ClickableItem>
      <ClickableItem
        item={Item.Resume}
      >
        <Box
          castShadow
          receiveShadow
          material={resumeMaterials}
          position={[-5.597, -1.067, -3.785]}
          rotation={[0, -0.262, -Math.PI / 2]}
          scale={[1.6, 0.1, 1.14]}
        />
      </ClickableItem>
      {/* <ClickableItem
        item={Item.Resume}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Resume.geometry}
          material={resumeMaterial}
          position={[-5.597, -1.067, -3.785]}
          rotation={[0, -0.262, -Math.PI / 2]}
        />
      </ClickableItem> */}
      <Box
        castShadow
        receiveShadow
        material={posterMaterials}
        position={[-6.81, 2.585, 4.567]}
        // rotation={[0, -0.262, -Math.PI / 2]}
        scale={[0.1, 4, 3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BackWall.geometry}
        material={materials.Wall}
        position={[-7.027, -0.065, -6.188]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RightWall.geometry}
        material={materials.Wall}
        position={[-5.827, -0.065, -6.988]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Shelf.geometry}
        material={materials.Desk_Top}
        position={[-6.227, 0.521, -2.288]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BackShelf_Stands.geometry}
        material={materials.Desk_Top}
        position={[-6.227, 0.521, 1.633]}
      />
    </a.group>
  )
}

useGLTF.preload(roomScene);

export default Room;