"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, ThreeElements, extend, useFrame } from "@react-three/fiber";
import { Cloud, Clouds, ContactShadows, Environment, GizmoHelper, GizmoViewport, Lightformer, OrbitControls, Sparkles, useGLTF } from "@react-three/drei";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

function Box(props: ThreeElements["mesh"]) {
  const mesh: any = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    mesh.current.rotation.x += 0.025;
    mesh.current.rotation.y += 0.025;
    mesh.current.rotation.z += 0.025;
  });
  return (
    <mesh {...props} ref={mesh} scale={[1, 1, 1]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

const Models = [{ name: "spiderman", url: "/3d/spiderman/spiderman.gltf", position: [0, 0, 0] }];

function Model({ url, position }: any) {
  const { scene }: any = useGLTF(url);
  const model = useRef<THREE.Group>(null!);

  // 매 프레임마다 애니메이션 움지임 추가
  useFrame(() => {
    if (model.current) {
      // model.current.rotation.y += 0.005;
    }
  });
  return <primitive object={scene.clone()} ref={model} position={position} />;
}

// 로딩 이미지
function LoadingSpinner() {
  const { scene } = useGLTF("/3d/loading/loading.gltf");
  return <primitive object={scene} scale={[5, 5, 5]} />;
}

export default function Test() {
  return (
    <div className="App w-full h-screen">
      <Canvas camera={{ fov: 60, position: [15, 15, 50] }}>
        {/* 캔버스의 배경 */}
        <Environment preset="dawn" background />
        {/* 카메라(시점) 컨트롤 */}
        <OrbitControls maxPolarAngle={Math.PI / 2} />
        <ambientLight intensity={0.5} />
        <directionalLight castShadow position={[2.5, 12, 12]} intensity={1} />
        <pointLight position={[20, 20, 20]} />
        <pointLight position={[-20, -20, -20]} intensity={1} />

        <Suspense fallback={<LoadingSpinner />}>
          <Model url={Models[0].url} position={Models[0].position} />
        </Suspense>
        {/* 이펙트 */}
        <Stars radius={300} depth={6} count={20000} factor={7} saturation={11} speed={1} fade={true} />
      </Canvas>
    </div>
  );
}
