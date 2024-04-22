import { Box, Plane } from "@react-three/drei";

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
    </>
  );
};
