import React, { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import Model from '../model';
import './style.css';
import gsap from 'gsap';

const contents = [
  { //shop
    "content": "Troverai dei negozi virtuali da poter visitare: negozi di ciclismo, la parafarmacia, il negozio di Alimentari, dove poter acquistare tutto ciò di cui hai bisogno. Scegli comodamente dal divano di casa tua i prodotti che più ti interessano, senza stressarti nel traffico e con lunghe file alla cassa.",
  },
  { //gateway
    "content": "BIKELAND è un Villaggio Virtuale in cui ogni residente troverà quanto occorre per vivere da ciclista al meglio della condizione fisica, tecnica e sociale partecipando alla vita della COMMUNITY. Con il tuo AVATAR personalizzato potrai camminare nelle strade del Villaggio, soffermarti davanti una vetrina ed entrare nel negozio; potrai incontrare amici e conoscere nuove persone che condividono la tua stessa passione e con loro potrai scambiare esperienze e parerei in virtual reality",
  },
  { //bar
    "content": "Assisti ad eventi sportivi commentando insieme agli altri le Dirette con la live chat… come al BAR con gli amici. Potrai conoscere nuove persone con la tua stessa passione e con cui scambiare opinioni e concetti.",
  },
  { //hill
    "content": "Visita il punto più alto della città, dove poter osservare una panoramica di Bikeland e poter scattare una foto ricordo."
  }
]

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
      "z": 1.3
    },
    "angle": -3 * Math.PI / 8
  },
  { // gateway
    "target": {
      "x": -2.8,
      "y": 0.7,
      "z": 0
    },
    "modal": {
      "x": -3,
      "y": 1.2,
      "z": -0.5
    },
    "angle": -3 * Math.PI / 8
  },
  { // bar
    "target": {
      "x": 1,
      "y": 0.4,
      "z": -0.2
    },
    "modal": {
      "x": 1,
      "y": 0.9,
      "z": 0
    },
    "angle": -3 * Math.PI / 8
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
      "z": 2
    },
    "angle": Math.PI / 8
  }
];

const BikeLand = () => {

  const camera = useRef();
  const modal = useRef();
  const canvas = useRef();

  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [viewMode, setViewMode] = useState('zoomOut');
  const [content, setContent] = useState('');
  const [modalPosition, setModalPosition] = useState([0, 0, 0]);
  const [selectHotspots, setSelectHotspots] = useState('');

  const cameraMove = (value, str) => {

    gsap.to(camera.current, {
      duration: 2,
      onStart: () => {
        setSelectHotspots(str);
        camera.current.enableRotate = false;
        setShowButton(false);
        setContent(contents[value].content);
        setModalPosition([positions[value].modal.x, positions[value].modal.y, positions[value].modal.z]);
      },
      ease: "back.out(0)",
      maxDistance: 1.8,
      minDistance: 1.8,
      minAzimuthAngle: positions[value].angle,
      maxAzimuthAngle: positions[value].angle,
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
          setSelectHotspots('');
          setShowModal(false);
        },
        ease: "back.out(0)",
        maxDistance: 5,
        minDistance: 5,
        minPolarAngle: 2 * Math.PI / 8,
        maxPolarAngle: 2.3 * Math.PI / 8,
        minAzimuthAngle: -2 * Math.PI / 8,
        maxAzimuthAngle: 2 * Math.PI / 8,
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
        ref={canvas}
        className='canvas'
        camera={{ position: [-5, 3, 4], fov: 45 }}
        shadows
        onClick={(e) => {
          if (e.target.tagName === 'CANVAS') setDefaultCamera();
        }}
      >
        <fog attach="fog" args={[0xffffff, 6, 20]} intensity={1} />
        {
          showButton &&
          <>
            <Html
              position={[-0.8, 0.6, 1.5]}
            >
              <div className="button" onClick={() => cameraMove(0, 'shop')}>
                <img src="assets/img/shop.svg" alt="shop" width={60} height={60} />
              </div>
            </Html>
            <Html
              position={[-2.2, 0.7, 0.2]}
            >
              <div className="button" onClick={() => cameraMove(1, 'gateway')}>
                <img src="assets/img/gateway.svg" alt="gateway" width={60} height={60} />
              </div>
            </Html>
            <Html
              position={[1, 0.5, -0.2]}
            >
              <div className="button" onClick={() => cameraMove(2, 'bar')}>
                <img src="assets/img/bar.svg" alt="bar" width={60} height={60} />
              </div>
            </Html>
            <Html
              position={[2, 0.6, 2.5]}
            >
              <div className="button" onClick={() => cameraMove(3, 'hill')}>
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
                {content}
              </div>
              <div className='hotspots'>
                {
                  selectHotspots === 'gateway' ?
                    <img src="assets/img/gateway.svg" alt="hill" width={90} height={90} />
                    :
                    <div className="button" onClick={() => cameraMove(1, 'gateway')}>
                      <img src="assets/img/gateway.svg" alt="hill" width={70} height={70} />
                    </div>
                }
                {
                  selectHotspots === 'bar' ?
                    <img src="assets/img/bar.svg" alt="hill" width={90} height={90} />
                    :
                    <div className="button" onClick={() => cameraMove(2, 'bar')}>
                      <img src="assets/img/bar.svg" alt="hill" width={70} height={70} />
                    </div>
                }
                {
                  selectHotspots === 'shop' ?
                    <img src="assets/img/shop.svg" alt="hill" width={90} height={90} />
                    :
                    <div className="button" onClick={() => cameraMove(0, 'shop')}>
                      <img src="assets/img/shop.svg" alt="hill" width={70} height={70} />
                    </div>
                }
                {
                  selectHotspots === 'hill' ?
                    <img src="assets/img/hill.svg" alt="hill" width={90} height={90} />
                    :
                    <div className="button" onClick={() => cameraMove(3, 'hill')}>
                      <img src="assets/img/hill.svg" alt="hill" width={70} height={70} />
                    </div>
                }
              </div>
            </div>
          </Html>
        }
        <Model />
        <ambientLight intensity={0.8} />
        <OrbitControls ref={camera} rotateSpeed={0.4} minDistance={5} minAzimuthAngle={-2 * Math.PI / 8} maxAzimuthAngle={2 * Math.PI / 8} maxDistance={5} minPolarAngle={2 * Math.PI / 8} maxPolarAngle={2.3 * Math.PI / 8} />
      </Canvas>
    </Suspense>
  )
}

export default BikeLand;