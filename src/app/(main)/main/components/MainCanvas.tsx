import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { OrbitControls, Environment } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import Loading from "./Loading";

const model = [{ name: "draco", url: "3d/models/preview-model.glb", position: [0, -1, 0] }];

const Model = ({ url, position }: any) => {
  const { scene }: any = useGLTF(url);
  const model = useRef<THREE.Group>(null!);
  scene.scale.set(0.01, 0.01, 0.01);

  useFrame(() => {
    if (model.current) {
      model.current.rotation.y += 0.01;
    }
  });

  return <primitive object={scene} ref={model} position={position} />;
};

export default function MainCanvas() {
  return (
    <div className="w-full max-h-full h-[480px] flex justify-center items-center">
      <Canvas camera={{ position: [5, 10, 20], fov: 60, far: 1000, near: 1 }}>
        <ambientLight intensity={Math.PI / 2} />
        <Environment preset="city"></Environment>
        <Suspense fallback={<Loading />}>
          <Model url={model[0].url} position={model[0].position} />
        </Suspense>
        <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2} minDistance={15} maxDistance={30} />
      </Canvas>
    </div>
  );
}
