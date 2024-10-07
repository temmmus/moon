import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div>{Math.round(progress)}% Loaded</div>
    </Html>
  );
}

export default Loader;
