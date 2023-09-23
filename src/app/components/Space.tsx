import React, { useMemo, useRef } from "react";

import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { BufferGeometry, Material, MathUtils, Mesh, PointLight } from "three";
import { OrbitControls, Sphere } from "@react-three/drei";

export default function Space() {
  return (
    <Canvas camera={{ position: [10, -7.5, -7.5] }}>
      <directionalLight />
      <OrbitControls maxDistance={20} minDistance={10} />
      <pointLight position={[-30, 0, -30]} power={10.0} />
      <SpaceMesh />
    </Canvas>
  );
}

function SpaceMesh() {
  const ref = useRef<any>();

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });
  return (
    <group ref={ref}>
      {innerPoints.map(({ index, position, color }) => (
        <SphereMesh key={index} position={position} color={color} />
      ))}
    </group>
  );
}

function SphereMesh({ position, color }: { position: any; color: any }) {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
      />
    </Sphere>
  );
}

const MIN_RADIUS = 7.5;
const MAX_RADIUS = 15;
const DEPTH = 2;
const LEFT_COLOR = "6366f1";
const RIGHT_COLOR = "8b5cf6";
const NUM_POINTS = 2500;

const getGradientStop = (ratio: number) => {
  // For outer ring numbers potentially past max radius,
  // just clamp to 0
  ratio = ratio > 1 ? 1 : ratio < 0 ? 0 : ratio;

  const c0 = LEFT_COLOR.match(/.{1,2}/g)!.map(
    (oct) => parseInt(oct, 16) * (1 - ratio)
  );
  const c1 = RIGHT_COLOR.match(/.{1,2}/g)!.map(
    (oct) => parseInt(oct, 16) * ratio
  );
  const ci = [0, 1, 2].map((i) => Math.min(Math.round(c0[i] + c1[i]), 255));
  const color = ci
    .reduce((a, v) => (a << 8) + v, 0)
    .toString(16)
    .padStart(6, "0");

  return `#${color}`;
};

const calculateColor = (x: number) => {
  const maxDiff = MAX_RADIUS * 2;
  const distance = x + MAX_RADIUS;

  const ratio = distance / maxDiff;

  const stop = getGradientStop(ratio);
  return stop;
};

const innerPoints = Array.from({ length: NUM_POINTS }, (v, k) => k + 1).map(
  (num) => {
    const randomRadius = Math.random() * (MAX_RADIUS - MIN_RADIUS) + MIN_RADIUS;
    const randomAngle = Math.random() * Math.PI * 2;

    const x = Math.cos(randomAngle) * randomRadius;
    const y = Math.sin(randomAngle) * randomRadius;
    const z = Math.random() * DEPTH - DEPTH / 2;

    const color = calculateColor(x);

    return { index: num, position: [x, y, z], color };
  }
);
