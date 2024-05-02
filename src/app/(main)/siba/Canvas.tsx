"use client";

import { Sky } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { OrbitControls, Stats, Environment, Clone } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Models = [{ name: "kim", url: "/3d/scene.gltf" }];

const Model = ({ url }: any) => {
  const { scene }: any = useGLTF(url);
  const model = useRef<THREE.Group>(null!); // useRef 타입을 THREE.Group으로 변경

  useFrame(() => {
    if (model.current) {
      model.current.rotation.x += 0.1; // X축 회전
      model.current.rotation.y += 0.1; // Y축 회전
    }
  });

  return <primitive object={scene.clone()} ref={model} />;
};

const Box2 = (props: JSX.IntrinsicElements["mesh"]) => {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.05;
  });
  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshLambertMaterial attach="material" color="royalblue" />
    </mesh>
  );
};

export default function CanvasPage() {
  return (
    <div className="w-[360px] h-[314px]">
      <Canvas camera={{ position: [0, 0, 5], near: 0.025 }}>
        <Environment preset="city" />
        <Suspense>
          <Model url={Models[0].url} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
        </Suspense>
        <OrbitControls />
        <Sky sunPosition={[100, 110, 50]} />
      </Canvas>
    </div>
  );
}
