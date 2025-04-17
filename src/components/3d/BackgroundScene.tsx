
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FloatingSpheres } from './FloatingSpheres';

export const BackgroundScene = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-50">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingSpheres count={8} />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
};
