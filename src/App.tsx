import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Moon from "./components/moon/Moon.tsx";
import "./App.css";

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <OrbitControls />
        <ambientLight intensity={0.025} />
        <pointLight position={[-5, -5, 2.5]} intensity={200} decay={2} color="#fff" />
        <Stars radius={300} saturation={10} fade={true} />
        <Suspense fallback={null}>
          <Moon />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
