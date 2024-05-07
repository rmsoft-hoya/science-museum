import { useGLTF } from "@react-three/drei";
import React from "react";

const Loading = () => {
  const { scene } = useGLTF("/3d/loading/loading.gltf");
  return <primitive object={scene} scale={[1, 1, 1]} />;
};

export default Loading;
