
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export const FloatingSpheres = ({ count = 5, radius = 0.3, colors = ['#6E59A5', '#9b87f5', '#FEC6A1'] }) => {
  const group = useRef<THREE.Group>(null);
  const positions = Array.from({ length: count }, () => ({
    x: (Math.random() - 0.5) * 4,
    y: (Math.random() - 0.5) * 4,
    z: (Math.random() - 0.5) * 4,
  }));

  return (
    <group ref={group}>
      {positions.map((pos, index) => (
        <Float
          key={index}
          speed={1.5} 
          rotationIntensity={0.5} 
          floatIntensity={2}
          position={[pos.x, pos.y, pos.z]}
        >
          <mesh>
            <sphereGeometry args={[radius, 32, 32]} />
            <meshStandardMaterial
              color={colors[index % colors.length]}
              metalness={0.5}
              roughness={0.2}
              transparent
              opacity={0.8}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};
