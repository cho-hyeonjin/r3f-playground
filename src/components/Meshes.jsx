import {
  Box,
  Circle,
  Cone,
  Cylinder,
  Plane,
  Sphere,
  Torus,
} from "@react-three/drei";
import * as THREE from "three";

/* eslint-disable react/no-unknown-property */
export const Meshes = () => {
  return (
    <>
      {/* <mesh position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={0xff0000} />
    </mesh> */}
      <Plane args={[40, 40]} rotation-x={-Math.PI / 2} receiveShadow>
        <meshStandardMaterial />
      </Plane>
      <Box args={[1, 1, 1]} position-y={0.5} castShadow>
        <meshStandardMaterial color={0xff0000} />
      </Box>
      <Sphere args={[1]} position={[0, 1, 3]} material-color={0xffff00} />
      <Circle
        args={[1]}
        position={[0, 1, -3]}
        material-color={"violet"}
        material-side={THREE.DoubleSide}
      />
      <Cone args={[1, 2]} position={[3, 1, 3]} material-color={"turquoise"} />
      <Cylinder
        args={[2, 1, 2]}
        position={[3, 1, -3]}
        material-color={"skyblue"}
      />
      <Torus args={[1, 0.2]} position={[-3, 1.2, -3]} material-color={"pink"} />
    </>
  );
};
