
import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const GeometricShapes = () => {
  const groupRef = useRef();

  return (
    <group ref={groupRef}>
      {/* Floating Cubes */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[2, 0, 0]} rotation={[0.5, 0.5, 0]}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial color="#6E59A5" metalness={0.5} roughness={0.2} />
        </mesh>
      </Float>

      {/* Floating Spheres */}
      {[[-2, 1, -1], [1.5, -1, 1], [-1, -2, 0]].map((position, index) => (
        <Float key={index} speed={1} rotationIntensity={0.4} floatIntensity={1.5}>
          <mesh position={position}>
            <sphereGeometry args={[0.7, 32, 32]} />
            <meshStandardMaterial 
              color={index % 2 === 0 ? "#9b87f5" : "#D6BCFA"} 
              metalness={0.4} 
              roughness={0.3} 
            />
          </mesh>
        </Float>
      ))}

      {/* Ring */}
      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh position={[-1.5, 0.5, -2]} rotation={[Math.PI / 4, 0, Math.PI / 6]}>
          <torusGeometry args={[1, 0.3, 16, 32]} />
          <meshStandardMaterial color="#8B5CF6" metalness={0.5} roughness={0.2} />
        </mesh>
      </Float>
    </group>
  );
};

export const ThreeScene = () => {
  return (
    <Canvas className="!fixed inset-0" style={{ background: 'linear-gradient(to bottom right, #1A1F2C, #6E59A5)' }}>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <GeometricShapes />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
        rotateSpeed={0.5}
      />
    </Canvas>
  );
};
