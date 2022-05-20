import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import Model from '../model';
import './style.css';
import { Camera } from 'three';

const BikeLand = () => {

  const camera = useRef();

  const cameraMove = (value) => {
    console.log('camera info-->', camera);
  }

  return (
    <Suspense fallback={null}>
      <Canvas
        className='canvas'
        // ref={camera}
        camera={{ position: [-2.5, 3, 4], fov: 45 }}
        shadows
      >
        <fog attach="fog" args={[0xffffff, 6, 20]} intensity={1} />
        <Html
          position={[-0.8, 0.6, 1.5]}
        >
          <div className="button" onClick={() => cameraMove('shop')}>
            Shop
          </div>
        </Html>
        <Html
          position={[-2.2, 0.7, 0.2]}
        >
          <div className="button" >
            GateWay
          </div>
        </Html>
        <Html
          position={[1, 0.7, -0.2]}
        >
          <div className="button" >
            Bar
          </div>
        </Html>
        <Html
          position={[2, 0.8, 2.8]}
        >
          <div className="button" >
            Hill
          </div>
        </Html>
        <Model />
        <ambientLight intensity={0.8} />
        <OrbitControls ref={camera} rotateSpeed={0.4} minDistance={5} maxDistance={5} minPolarAngle={2 * Math.PI / 8} maxPolarAngle={2.3 * Math.PI / 8} />
      </Canvas>
    </Suspense>
  )
}

export default BikeLand;