"use client";
import React, { Suspense, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useAnimations } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import * as THREE from "three";
import Loading from "../main/components/Loading";
import { useRouter } from "next/navigation";
import { IntersectionEvent } from "@react-three/fiber/dist/declarations/src/core/events";

const Model = () => {
  const { scene, animations } = useGLTF("/3d/models/animation-model.glb", true);
  const { actions } = useAnimations(animations, scene);

  scene.position.set(0, -1, 0);
  scene.scale.set(0.01, 0.01, 0.01);

  const cylinderAnim = useCallback(
    (e: IntersectionEvent<MouseEvent>) => {
      e.nativeEvent.preventDefault();
      if (!actions["Action"]?.isRunning() && actions["ArmatureAction.004"] && !actions["ArmatureAction.004"].isRunning()) {
        actions["ArmatureAction.004"].loop = THREE.LoopOnce;
        actions["ArmatureAction.004"].reset();
        actions["ArmatureAction.004"].play();
      }
    },
    [actions]
  );

  const cylinder001Anim = useCallback(
    (e: IntersectionEvent<MouseEvent>) => {
      e.nativeEvent.preventDefault();
      if (!actions["ArmatureAction.004"]?.isRunning() && actions["Action"] && !actions["Action"].isRunning()) {
        actions["Action"].loop = THREE.LoopOnce;
        actions["Action"].reset();
        actions["Action"].play();
      }
    },
    [actions]
  );

  return (
    <group>
      <primitive object={scene} />
      <mesh
        parent={scene}
        scale={[1, 2, 1]}
        position={[0.12, 4.3, -0.05]}
        onClick={(e) => {
          cylinder001Anim(e);
        }}
      >
        <cylinderGeometry args={[0.5, 0.5]} />
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>
      <mesh
        parent={scene}
        scale={[1, 1, 1]}
        position={[0.1, 0.8, -0.1]}
        onClick={(e) => {
          cylinderAnim(e);
        }}
      >
        <boxGeometry args={[4, 4, 4]} />
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>
    </group>
  );
};

export default function Interraction3D() {
  const router = useRouter();

  return (
    <div className="min-w-[360px] w-full h-screen flex flex-col justify-center items-center bg-[#0E1629]">
      <h2 className="text-[32px] font-bold text-white">3D 인터랙션</h2>
      <div className="w-full max-h-full h-[480px] flex justify-center items-center">
        <Canvas camera={{ position: [5, 10, 20], fov: 60, far: 1000, near: 1 }}>
          <ambientLight intensity={Math.PI / 2} />
          <Environment preset="city" />
          {/* <Suspense fallback={<Loading />}> */}
          <Model />
          {/* </Suspense> */}
          <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2} minDistance={15} maxDistance={30} />
        </Canvas>
      </div>
      <Button
        className="w-[282px] h-[54px] p-0 rounded-full flex justify-center items-center py-[20px] text-base bg-[rgba(255,255,255,0.1)]"
        onClick={() => {
          router.back();
        }}
      >
        닫기
      </Button>
    </div>
  );
}
