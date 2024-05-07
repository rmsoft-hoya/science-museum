"use client";
import React, { useRef, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import * as THREE from "three";
import Loading from "../main/components/Loading";
import { useRouter } from "next/navigation";
import { InteractionManager } from "three.interactive";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Model = () => {
  const { scene, animations } = useGLTF("3d/models/animation-model.glb");
  const modelRef = useRef<THREE.Group>();
  scene.scale.set(0.01, 0.01, 0.01);
  const mixer = useRef<THREE.AnimationMixer>();
  const clock = useRef<THREE.Clock>();

  useEffect(() => {
    // AnimationMixer 초기화
    mixer.current = new THREE.AnimationMixer(scene);

    // 컴포넌트가 언마운트될 때 AnimationMixer 정리
    return () => {
      mixer.current?.stopAllAction();
      mixer.current = undefined;
    };
  });

  // useEffect(() => {
  //   scene.traverse((n) => {
  //     if (n.name === "Cylinder") {
  //       n.scale.set(2, 2, 30);
  //       n.addEventListener("mousedown", () => {
  //         const action = mixer.current?.clipAction(animations[3]);
  //         if (action) {
  //           action.clampWhenFinished = true;
  //           action.loop = THREE.LoopOnce;
  //           action.play();
  //         }
  //       });
  //     } else if (n.name === "Cylinder001") {
  //       n.scale.set(2, 10, 30);
  //       n.addEventListener("mousedown", () => {
  //         const action = mixer.current?.clipAction(animations[0]);
  //         if (action) {
  //           action.clampWhenFinished = true;
  //           action.loop = THREE.LoopOnce;
  //           action.play();
  //         }
  //       });
  //     }
  //     console.log(n);
  //   });
  // }, [animations]);
  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]);
      action.play();
    }
  }, [animations]);

  useEffect(() => {
    if (mixer.current) {
      clock.current = new THREE.Clock();
      const animate = () => {
        const delta = clock.current?.getDelta();
        mixer.current?.update(delta);
        requestAnimationFrame(animate);
      };
      animate();
    }
  }, []);

  return <primitive object={scene} ref={modelRef} />;
};

// const Model = () => {
//   // gltf loader
//   const gltfLoader = new GLTFLoader();
//   let mixer;
//   const { scene, animations } = useGLTF("/3d/models/animation-model.glb");
//   gltfLoader.load("/3d/models/animation-model.glb", (gltf) => {
//     // console.log(gltf.scene.children[0]);
//     const characterMesh = gltf.scene.children[0];
//     scene.add(characterMesh);

//     mixer = new THREE.AnimationMixer(characterMesh);
//     const actions = [];
//     actions[0] = mixer.clipAction(gltf.animations[0]);
//     actions[1] = mixer.clipAction(gltf.animations[1]);
//     actions[0].repetitions = 2;
//     actions[0].clampWhenFinished = true;
//     actions[0].play();
//   });
// };

export default function Interraction3D() {
  const router = useRouter();

  return (
    <div className="min-w-[360px] w-full h-screen flex flex-col justify-center gap-[110px] items-center bg-[#0E1629]">
      <h2 className="text-[32px] font-bold text-white">3D 인터랙션</h2>
      <div className="w-full h-[380px]   flex justify-center items-center">
        <Canvas camera={{ position: [5, 10, 20], fov: 45, far: 1000, near: 1 }}>
          <ambientLight intensity={Math.PI / 2} />
          <Environment preset="city" />
          <Suspense fallback={<Loading />}>
            <Model />
          </Suspense>
          <OrbitControls maxPolarAngle={Math.PI / 2} minDistance={10} maxDistance={20} />
        </Canvas>
      </div>
      <Button
        className="w-[282px] h-[54px] p-0 rounded-full flex justify-center items-center py-[20px] text-base"
        onClick={() => {
          router.back();
        }}
      >
        닫기
      </Button>
    </div>
  );
}
