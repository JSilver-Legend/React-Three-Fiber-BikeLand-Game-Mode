import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from '../model';
import './style.css';

const BikeLand = () => {
  return (
    <Suspense fallback={null}>
      <Canvas className='canvas'>
        <fog attach="fog" args={[0xffffff, -4, 70]} intensity={0.2} />
        {/* <color attach="background" args={"black"} /> */}
        <Model />
        <OrbitControls autoRotate={false} />
      </Canvas>
    </Suspense>
  )
}

export default BikeLand;