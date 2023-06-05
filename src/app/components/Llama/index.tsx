import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
export default function Llama() {
  return (
    <Canvas>
      <OrbitControls />
      <GLBModel />
    </Canvas>
  );
}

const GLBModel = () => {
  const gltf = useLoader(GLTFLoader, "/llama.glb");

  console.log(gltf);
  // Access the model and its components
  // Example: const mesh = gltf.scene.children[0];

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={gltf.nodes.Sphere?.geometry}
      material={gltf.materials.black}
    />
  );
};
