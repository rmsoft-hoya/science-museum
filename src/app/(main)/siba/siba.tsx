"use client";

import { Sky } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { OrbitControls, Environment } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Models = [{ name: "kim", url: "/3d/buddha/buddha.gltf" }];
const Model = ({ url, position }: any) => {
  const { scene }: any = useGLTF(url);
  const model = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (model.current) {
      // model.current.rotation.y += 1;
    }
  });

  return <primitive object={scene.clone()} ref={model} position={position} />;
};

export default function Siba() {
  return (
    <div className="w-full h-[280px] flex justify-center items-center">
      <Canvas camera={{ position: [0, 0, 1.5], near: 0.5 }}>
        <Suspense>
          <Model url={Models[0].url} position={[0.15, -1, 0]} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
