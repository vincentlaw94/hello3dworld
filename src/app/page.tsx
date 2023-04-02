"use client";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import React from "react";
import { Box, Blob, Text } from "./components";

export default function Home() {
  return (
    <Main>
      <Canvas>
        <Blob />
      </Canvas>
    </Main>
  );
}

const Main = styled("main")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "6rem",
  minHeight: "100vh",
});
