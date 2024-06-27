"use client"
import { Canvas } from "@react-three/fiber";
import Floor from "./3D/Floor";
import Box from "./3D/Box";
import LightBulb from "./3D/LightBulb";
import { OrbitControls } from "@react-three/drei";
import Draggable from "./Draggable";
import {Suspense} from "react";

const Main = () => {
  return (
    <div className="scene">
    <Canvas
      shadows
      className="canvas"
      camera={{
        position: [-6, 7, 7],
      }}
    >
         
        <ambientLight color={"white"} intensity={0.2} />
        <LightBulb position={[8, 6, 0]} />
        <LightBulb position={[-8, 6, 0]} />
        <Suspense fallback={null}>
            <Box  />
        </Suspense>
        <OrbitControls />
        <Floor position={[0, -1, 0]} />

    </Canvas>
  </div>
  )
}

export default Main