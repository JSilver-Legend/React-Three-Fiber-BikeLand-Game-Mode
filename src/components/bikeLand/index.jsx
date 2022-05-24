import React, { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import Model from '../model';
import './style.css';
import gsap from 'gsap';

const positions = [
  { // shop
    "target": {
      "x": -0.6,
      "y": 0.2,
      "z": 1
    },
    "modal": {
      "x": -0.3,
      "y": 0.6,
      "z": 1
    }
  },
  { // gateway
    "target": {
      "x": -2.2,
      "y": 0.7,
      "z": 0.2
    },
    "modal": {
      "x": -2.2,
      "y": 0.7,
      "z": 0.2
    }
  },
  { // bar
    "target": {
      "x": 1,
      "y": 0.5,
      "z": -0.2
    },
    "modal": {
      "x": 1,
      "y": 0.9,
      "z": 0
    }
  },
  { // hill
    "target": {
      "x": 2,
      "y": 0.8,
      "z": 2.8
    },
    "modal": {
      "x": 2,
      "y": 0.8,
      "z": 2.8
    }
  }
];

const BikeLand = () => {

  const camera = useRef();
  const modal = useRef();

  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [viewMode, setViewMode] = useState('zoomOut');
  const [modalPosition, setModalPosition] = useState([0, 0, 0]);

  const cameraMove = (value) => {
    gsap.to(camera.current, {
      duration: 2,
      onStart: () => {
        camera.current.enableRotate = false;
        setShowButton(false);
        setModalPosition([positions[value].modal.x, positions[value].modal.y, positions[value].modal.z]);
      },
      ease: "back.out(0)",
      maxDistance: 1.8,
      minDistance: 1.8,
      minPolarAngle: 3 * Math.PI / 8,
      maxPolarAngle: 3 * Math.PI / 8,
      onComplete: () => {
        setShowModal(true);
        setViewMode(true);
        setViewMode('zoomIn');
      },
    });

    gsap.to(camera.current.target, {
      duration: 1.5,
      ease: "back.out(0.6)",
      x: positions[value].target.x,
      y: positions[value].target.y,
      z: positions[value].target.z
    });
  }

  const setDefaultCamera = () => {
    if (viewMode === 'zoomIn') {
      gsap.to(camera.current, {
        duration: 2,
        onStart: () => {
          setShowModal(false);
        },
        ease: "back.out(0)",
        maxDistance: 5,
        minDistance: 5,
        minPolarAngle: 2 * Math.PI / 8,
        maxPolarAngle: 2.3 * Math.PI / 8,
        onComplete: () => {
          setViewMode('zoomOut');
          camera.current.enableRotate = true;
          setShowButton(true);
        }
      });
      gsap.to(camera.current.target, {
        duration: 1.5,
        ease: "back.out(0.6)",
        x: 0,
        y: 0,
        z: 0
      });
    }
  }

  return (
    <Suspense fallback={null}>
      <Canvas
        className='canvas'
        camera={{ position: [-2.5, 3, 4], fov: 45 }}
        shadows
        onClick={() => setDefaultCamera()}
      >
        <fog attach="fog" args={[0xffffff, 6, 20]} intensity={1} />
        {
          showButton &&
          <>
            <Html
              position={[-0.8, 0.6, 1.5]}
            >
              <div className="button" onClick={() => cameraMove(0)}>
                <img src="assets/img/shop.svg" alt="shop" width={60} height={60} />
              </div>
            </Html>
            <Html
              position={[-2.2, 0.7, 0.2]}
            >
              <div className="button" onClick={() => cameraMove(1)}>
                <img src="assets/img/gateway.svg" alt="gateway" width={60} height={60} />
              </div>
            </Html>
            <Html
              position={[1, 0.5, -0.2]}
            >
              <div className="button" onClick={() => cameraMove(2)}>
                <img src="assets/img/bar.svg" alt="bar" width={60} height={60} />
              </div>
            </Html>
            <Html
              position={[2, 0.8, 2.8]}
            >
              <div className="button" onClick={() => cameraMove(3)}>
                <img src="assets/img/hill.svg" alt="hill" width={60} height={60} />
              </div>
            </Html>
          </>
        }
        {
          showModal &&
          <Html
            position={modalPosition}
            ref={modal}
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
                <img src="assets/img/gateway.svg" alt="hill" width={70} height={70} />
                <img src="assets/img/bar.svg" alt="hill" width={70} height={70} />
                <img src="assets/img/shop.svg" alt="hill" width={70} height={70} />
                <img src="assets/img/hill.svg" alt="hill" width={70} height={70} />
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