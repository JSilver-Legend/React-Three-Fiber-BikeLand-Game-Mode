import React, { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import Model from '../model';
import './style.css';
import { Camera } from 'three';

const BikeLand = () => {

  const camera = useRef();

  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const cameraMove = (value) => {
    setShowModal(true);
    setShowButton(false);
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
        {
          showButton &&
          <>
            <Html
              position={[-0.8, 0.6, 1.5]}
            >
              <div className="button" onClick={() => cameraMove('shop')}>
                <img src="assets/img/shop.svg" alt="shop" width={60} height={60} />
              </div>
            </Html>
            <Html
              position={[-2.2, 0.7, 0.2]}
            >
              <div className="button" onClick={() => cameraMove('shop')}>
                <img src="assets/img/gateway.svg" alt="gateway" width={60} height={60} />
              </div>
            </Html>
            <Html
              position={[1, 0.7, -0.2]}
            >
              <div className="button" onClick={() => cameraMove('shop')}>
                <img src="assets/img/bar.svg" alt="bar" width={60} height={60} />
              </div>
            </Html>
            <Html
              position={[2, 0.8, 2.8]}
            >
              <div className="button" onClick={() => cameraMove('shop')}>
                <img src="assets/img/hill.svg" alt="hill" width={60} height={60} />
              </div>
            </Html>
          </>
        }
        {
          showModal &&
          <Html
            position={[0, 1, 0]}
          >
            <div className="content" >
              <div className="sub-title">
                BikeLand Box
              </div>
              <div className="title">
                Benvenuto a BIKELAND
              </div>
              <div className="description">
                BIKELAND è un Villaggio Virtuale in cui ogni residente troverà quanto occorre per vivere da ciclista al meglio della condizione fisica, tecnica e sociale partecipando alla vita della COMMUNITY.
                Con il tuo AVATAR personalizzato potrai camminare nelle strade del Villaggio, soffermarti davanti una vetrina ed entrare nel negozio; potrai incontrare amici e conoscere nuove persone che condividono la tua stessa passione e con loro potrai scambiare esperienze e parerei in virtual reality;
              </div>
              <div className='hotspots'>
                <div className="button" onClick={() => cameraMove('shop')}>
                  <img src="assets/img/gateway.svg" alt="hill" width={60} height={60} />
                </div>
                <div className="button" onClick={() => cameraMove('shop')}>
                  <img src="assets/img/bar.svg" alt="hill" width={60} height={60} />
                </div>
                <div className="button" onClick={() => cameraMove('shop')}>
                  <img src="assets/img/shop.svg" alt="hill" width={60} height={60} />
                </div>
                <div className="button" onClick={() => cameraMove('shop')}>
                  <img src="assets/img/hill.svg" alt="hill" width={60} height={60} />
                </div>
              </div>
            </div>
          </Html>
        }
        <Model />
        <ambientLight intensity={0.8} />
        <OrbitControls ref={camera} rotateSpeed={0.4} minDistance={5} maxDistance={5} minPolarAngle={2 * Math.PI / 8} maxPolarAngle={2.3 * Math.PI / 8} />
      </Canvas>
    </Suspense>
  )
}

export default BikeLand;