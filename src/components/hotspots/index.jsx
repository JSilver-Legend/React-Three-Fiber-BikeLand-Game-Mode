import React, { useState, useEffect } from 'react';
import { Html } from '@react-three/drei';
import './style.css';


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
      "x": 2,
      "y": 0.4,
      "z": 10.9
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

const HotSpots = ({ state }) => {

  const [content, setContent] = useState('');
  const [modalPosition, setModalPosition] = useState([0, 0, 0]);
  const [selectHotspots, setSelectHotspots] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(false);
  }, [state])

  return (
    <group>
      {
        !showModal ?
          <>
            <Html
              position={[2, 0.4, 10.9]}
            >
              <div className="button" onClick={() => {
                setContent(contents[0].content);
                setModalPosition([positions[0].modal.x, positions[0].modal.y, positions[0].modal.z]);
                setShowModal(true);
              }} >
                <img src="assets/img/shop.svg" alt="shop" width={60} height={60} />
              </div>
            </Html>
            <Html
              position={[2.05, 0.4, 16]}
            >
              <div className="button" onClick={() => {
                setContent(contents[0].content);
                setModalPosition([positions[0].modal.x, positions[0].modal.y, positions[0].modal.z]);
                setShowModal(true);
              }}>
                <img src="assets/img/shop.svg" alt="shop" width={60} height={60} />
              </div>
            </Html>
            <Html
              position={[2.05, 0.4, 19]}
            >
              <div className="button" onClick={() => {
                setContent(contents[0].content);
                setModalPosition([positions[0].modal.x, positions[0].modal.y, positions[0].modal.z]);
                setShowModal(true);
              }}>
                <img src="assets/img/shop.svg" alt="shop" width={60} height={60} />
              </div>
            </Html>
            <Html
              position={[-3.4, 0.4, 14]}
            >
              <div className="button" onClick={() => {
                setContent(contents[0].content);
                setModalPosition([positions[0].modal.x, positions[0].modal.y, positions[0].modal.z]);
                setShowModal(true);
              }}>
                <img src="assets/img/shop.svg" alt="shop" width={60} height={60} />
              </div>
            </Html>
            <Html
              position={[0, 1, 5]}
            >
              <div className="button" onClick={() => {
                setContent(contents[1].content);
                setModalPosition([positions[1].modal.x, positions[1].modal.y, positions[1].modal.z]);
                setShowModal(true);
              }}>
                <img src="assets/img/gateway.svg" alt="gateway" width={60} height={60} />
              </div>
            </Html>
            <Html
              position={[-2.5, 0.4, 10.4]}
            >
              <div className="button" onClick={() => {
                setContent(contents[2].content);
                setModalPosition([positions[2].modal.x, positions[2].modal.y, positions[2].modal.z]);
                setShowModal(true);
              }}>
                <img src="assets/img/bar.svg" alt="bar" width={60} height={60} />
              </div>
            </Html>
          </> :
          <Html
            position={modalPosition}
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
                    <div className="button">
                      <img src="assets/img/gateway.svg" alt="hill" width={70} height={70} />
                    </div>
                }
                {
                  selectHotspots === 'bar' ?
                    <img src="assets/img/bar.svg" alt="hill" width={90} height={90} />
                    :
                    <div className="button">
                      <img src="assets/img/bar.svg" alt="hill" width={70} height={70} />
                    </div>
                }
                {
                  selectHotspots === 'shop' ?
                    <img src="assets/img/shop.svg" alt="hill" width={90} height={90} />
                    :
                    <div className="button">
                      <img src="assets/img/shop.svg" alt="hill" width={70} height={70} />
                    </div>
                }
                {
                  selectHotspots === 'hill' ?
                    <img src="assets/img/hill.svg" alt="hill" width={90} height={90} />
                    :
                    <div className="button">
                      <img src="assets/img/hill.svg" alt="hill" width={70} height={70} />
                    </div>
                }
              </div>
            </div>
          </Html>
      }

    </group>
  );

}

export default HotSpots;