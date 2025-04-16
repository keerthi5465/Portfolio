
import { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as THREE from 'three';
import { LoadingScreen } from '../ui/loading-spinner';

const SkillSphere = ({ skill, position, color, index }: {
  skill: string;
  position: [number, number, number];
  color: string;
  index: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5 + index) * 0.5;
      meshRef.current.rotation.z = Math.cos(clock.getElapsedTime() * 0.5 + index) * 0.5;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={2}
      position={position}
    >
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.5}
          roughness={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>
      <Text
        position={[0, 0, 0.6]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {skill}
      </Text>
    </Float>
  );
};

export const SkillOrb3D = () => {
  const [isLoading, setIsLoading] = useState(true);
  const skills = [
    { name: "Python", color: "#6E59A5", position: [1.5, 1, 0] as [number, number, number] },
    { name: "Java", color: "#9b87f5", position: [-1.5, -1, 0] as [number, number, number] },
    { name: "SQL", color: "#6E59A5", position: [0, 1.5, 1] as [number, number, number] },
    { name: "ML", color: "#9b87f5", position: [0, -1.5, -1] as [number, number, number] },
    { name: "Flask", color: "#6E59A5", position: [1, 0, 1.5] as [number, number, number] },
    { name: "Pandas", color: "#9b87f5", position: [-1, 0, -1.5] as [number, number, number] },
    { name: "Azure", color: "#6E59A5", position: [1, -1, 1] as [number, number, number] },
    { name: "NumPy", color: "#9b87f5", position: [-1, 1, -1] as [number, number, number] },
  ];

  useEffect(() => {
    // Simulate loading time for 3D elements
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <Canvas className="h-full w-full">
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          
          {skills.map((skill, index) => (
            <SkillSphere
              key={index}
              skill={skill.name}
              position={skill.position}
              color={skill.color}
              index={index}
            />
          ))}
          
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.5}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Suspense>
      </Canvas>
    </>
  );
};

export const InteractiveSkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="h-[500px] w-full max-w-3xl mx-auto mt-12 bg-gradient-to-br from-portfolio-dark to-portfolio-primary/80 rounded-xl overflow-hidden shadow-2xl"
    >
      <SkillOrb3D />
    </motion.div>
  );
};
