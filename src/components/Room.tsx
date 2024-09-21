import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { a } from '@react-spring/three'

import roomScene from "../assets/models/Portfolio.glb";
import Selection from './Selection';
import { Outline } from '@react-three/postprocessing';

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
    Object_0002: THREE.Mesh
    Object_3002: THREE.Mesh
    Object_4003: THREE.Mesh
    Object_1003: THREE.Mesh
    Object_2002: THREE.Mesh
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
    CTCI: THREE.Mesh
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
    Plane: THREE.Mesh
    Plane001: THREE.Mesh
    Plane002: THREE.Mesh
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
    Object_1001: THREE.Mesh
    Clock_Frame: THREE.Mesh
    Marker_1: THREE.Mesh
    Marker_2: THREE.Mesh
    Minute_Hand: THREE.Mesh
    Second_Hand: THREE.Mesh
    Window: THREE.Mesh
    Mat: THREE.Mesh
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
    ['Material_001.001']: THREE.MeshStandardMaterial
    Material_003: THREE.MeshStandardMaterial
    ['material.004']: THREE.MeshStandardMaterial
    ['Material_002.001']: THREE.MeshStandardMaterial
    ['material_0.001']: THREE.MeshStandardMaterial
    Maze: THREE.MeshPhysicalMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    Floor: THREE.MeshPhysicalMaterial
    Monitor: THREE.MeshPhysicalMaterial
    MonitorScreen: THREE.MeshPhysicalMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    Keyboard_Mouse: THREE.MeshPhysicalMaterial
    Desk_Leg: THREE.MeshStandardMaterial
    Desk_Leg_Extension: THREE.MeshStandardMaterial
    Book_1: THREE.MeshPhysicalMaterial
    Book_Paper: THREE.MeshStandardMaterial
    Book_1_Text: THREE.MeshPhysicalMaterial
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
    Paper: THREE.MeshStandardMaterial
    Pen: THREE.MeshStandardMaterial
    Pen_Tip: THREE.MeshStandardMaterial
    Book_5: THREE.MeshStandardMaterial
    Chair: THREE.MeshStandardMaterial
    Chair_Seat: THREE.MeshStandardMaterial
    material_poster: THREE.MeshStandardMaterial
    Clock: THREE.MeshPhysicalMaterial
    Clock_Hand: THREE.MeshPhysicalMaterial
    Window: THREE.MeshPhysicalMaterial
    Mat: THREE.MeshPhysicalMaterial
  }
}


type RoomProps = {
  group: JSX.IntrinsicElements['group'],
  chairVisible: boolean,
  onItemClicked: (item: Item) => void
}


export enum Item {
  Resume,
  Education,
  Experience,
  Projects,
  About,
}


const Room = ({ group, chairVisible, onItemClicked }: RoomProps) => {
  const { nodes, materials } = useGLTF(roomScene) as GLTFResult

  return (
    <a.group {...group} dispose={null}>
      <group position={[-1.608, 7.471, -0.07]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
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
      <Selection
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
      </Selection>
      <group position={[-1.585, 5.069, -3.908]} rotation={[Math.PI / 2, 0, 0.5]}>
        <group rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[-0.025, 0.091, 0.003]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_0002.geometry}
                material={materials['Material_001.001']}
                position={[-0.188, -5.114, 6.865]}
              />
            </group>
            <group position={[-0.025, 0.091, 0.003]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_3002.geometry}
                material={materials.Material_003}
                position={[-0.188, -5.114, 6.865]}
              />
            </group>
            <group position={[-0.022, 0.618, 0.006]} rotation={[-0.342, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4003.geometry}
                material={materials['material.004']}
                position={[-0.188, -7.121, 4.751]}
              />
            </group>
            <group position={[-0.023, 0.562, -0.024]} rotation={[-0.049, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_1003.geometry}
                material={materials['Material_002.001']}
                position={[-0.188, -5.446, 6.605]}
              />
            </group>
            <group position={[-0.18, 0.541, -0.05]} rotation={[1.347, 0.209, -0.039]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_2002.geometry}
                material={materials['material.004']}
                position={[-1.751, 5.498, 6.326]}
              />
            </group>
          </group>
        </group>
      </group>
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
      <Selection
        item={Item.Resume}
      >
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
      </Selection>
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
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CTCI.geometry}
          material={materials.Book_1_Text}
          position={[-4.057, -6.812, -2.288]}
          rotation={[0, 0, -Math.PI / 2]}
        />
      </group>
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
      <group position={[1.03, 4.472, 2.837]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.Paper}
          position={[-4.577, -6.865, -2.288]}
          rotation={[-Math.PI, 1.455, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials.Paper}
          position={[-4.577, -6.849, -2.288]}
          rotation={[0, 1.519, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials.Paper}
          position={[-4.577, -6.837, -2.288]}
          rotation={[-Math.PI, 1.08, -Math.PI]}
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
      <group visible={chairVisible} position={[-0.179, 3.382, 1.701]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1001.geometry}
        material={materials.material_poster}
        position={[-6.856, 0.014, 4.594]}
        rotation={[0, Math.PI / 2, 0]}
      />
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