import { Box } from "@react-three/drei";

/* eslint-disable react/no-unknown-property */
export const Meshes = () => {
  return (
    <>
      {/* <mesh position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={0xff0000} />
    </mesh> */}
      <Box args={[1, 1, 1]} material-color={0xff0000} />
    </>
  );
};
