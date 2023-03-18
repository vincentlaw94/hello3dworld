"use client";
import styles from "./page.module.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Box } from "./components";
export default function Home() {
  return (
    <main className={styles.main}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <Box position={[1.2 * 3, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </main>
  );
}
