
import { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Float, PerspectiveCamera } from '@react-three/drei';
import { Mesh, Group } from 'three';
import { LoadingScreen } from '../ui/loading-spinner';

// A simple 3D cube that will rotate
const AnimatedCube = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} scale={1}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#9b87f5" />
    </mesh>
  );
};

// Simple 3D floating spheres
const FloatingSpheres = () => {
  const group = useRef<Group>(null);

  const positions = [
    [-2, 0, 0],
    [2, -1, -2],
    [0, 1, -1],
    [1, -1, 1],
    [-1, 1, 1],
  ];

  return (
    <group ref={group}>
      {positions.map((position, index) => (
        <Float key={index} speed={1.5} rotationIntensity={0.5} floatIntensity={2}>
          <mesh position={[position[0], position[1], position[2]]}>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshStandardMaterial color={index % 2 === 0 ? "#6E59A5" : "#D6BCFA"} />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

// A small rotating torus for decoration
const AnimatedTorus = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 1, 0]}>
      <torusGeometry args={[0.5, 0.2, 16, 32]} />
      <meshStandardMaterial color="#9b87f5" metalness={0.5} roughness={0.2} />
    </mesh>
  );
};

// Main scene component
export const ThreeScene = () => {
  const [isLoading, setIsLoading] = useState(true);

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
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          
          <AnimatedCube />
          <FloatingSpheres />
          <AnimatedTorus />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
            rotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </>
  );
};

// Background abstract shapes that respond to mouse movement
export const BackgroundShapes = () => {
  const shapeRef1 = useRef<HTMLDivElement>(null);
  const shapeRef2 = useRef<HTMLDivElement>(null);
  const shapeRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      
      if (shapeRef1.current && shapeRef2.current && shapeRef3.current) {
        shapeRef1.current.style.transform = `translate(${moveX * 0.01}px, ${moveY * 0.01}px)`;
        shapeRef2.current.style.transform = `translate(${moveX * -0.02}px, ${moveY * -0.02}px)`;
        shapeRef3.current.style.transform = `translate(${moveX * 0.03}px, ${moveY * 0.03}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div ref={shapeRef1} className="absolute top-1/4 -left-20 w-60 h-60 rounded-full bg-portfolio-primary/20 blur-3xl animate-spin-slow"></div>
      <div ref={shapeRef2} className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-portfolio-secondary/20 blur-3xl animate-pulse-slow"></div>
      <div ref={shapeRef3} className="absolute top-3/4 left-1/3 w-40 h-40 rounded-full bg-portfolio-accent/20 blur-3xl animate-float"></div>
    </div>
  );
};
