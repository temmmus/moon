import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Loader from "./Loader.tsx";
import Moon from "./Moon.tsx";

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <OrbitControls />
        <ambientLight intensity={0.025} />
        <pointLight position={[-5, -5, 2.5]} intensity={200} decay={2} color="#fff" />
        <Stars radius={300} saturation={10} fade={true} />
        <Suspense fallback={<Loader />}>
          <Moon />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
