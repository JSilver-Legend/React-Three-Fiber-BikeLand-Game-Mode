import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from '../model';
import './style.css';

const BikeLand = () => {
  return (
    <Suspense fallback={null}>
      <Canvas>
        <fog attach="fog" args={[0xffffff, -4, 30]} intensity={0.2} />
        <Model />
        <OrbitControls autoRotate={false} />
      </Canvas>
    </Suspense>
  )
}

export default BikeLand;