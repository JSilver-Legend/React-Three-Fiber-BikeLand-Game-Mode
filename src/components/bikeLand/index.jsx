import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from '../model';
import './style.css';

const BikeLand = () => {
  return (
    <Suspense fallback={null}>
      <Canvas className='canvas' camera={{ position: [0, 1, 0], fov: 50, focus: [10, 0, 10], rotation: [1, 1, 1] }}>
        <fog attach="fog" args={[0xffffff, 6, 20]} intensity={1} />
        <Model />
        <ambientLight intensity={0.8} />
        <OrbitControls autoRotate={false} minDistance={5} maxDistance={5} minPolarAngle={2 * Math.PI / 8} maxPolarAngle={3.5 * Math.PI / 8} />
      </Canvas>
    </Suspense>
  )
}

export default BikeLand;