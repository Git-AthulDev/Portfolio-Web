import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, rotationDuration }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const [elapsedTime, setElapsedTime] = useState(0);

  useFrame(({ clock }) => {
    if (elapsedTime < rotationDuration) {
      computer.scene.rotation.y += 0.005; // Adjust the rotation speed as needed
      setElapsedTime(clock.elapsedTime);
    }
  });

  return (
    <mesh>
      {/* ... (lighting components) ... */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 1.2 : 2.3}
        position={isMobile ? [2, -1, -2.2] : [5, 0, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const isMobile = window.innerWidth <= 500;
  const [rotationDuration, setRotationDuration] = useState(10); // Initial rotation duration of 10 seconds

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          enablePan={false}
        />
        <Computers isMobile={isMobile} rotationDuration={rotationDuration} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
