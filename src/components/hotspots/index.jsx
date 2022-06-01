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

const HotSpots = ({ state, cameraMove }) => {

  // console.log('hotspots camera->', cameraRef);

  const [content, setContent] = useState('');
  const [modalPosition, setModalPosition] = useState([0, 0, 0]);
  const [selectHotspots, setSelectHotspots] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(false);
  }, [state]);

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
                setModalPosition([0, -0.2, 6.9]);
                setSelectHotspots('shop');
                setShowModal(true);
                cameraMove(-3, -6, 6, 18);
              }} >
                <img src="assets/img/shop.svg" alt="shop" width={60} height={60} />
              </div>
            </Html>
            <Html
              position={[2.05, 0.4, 16]}
            >
              <div className="button" onClick={() => {
                setContent(contents[0].content);
                setModalPosition([-0.4, -1.2, 10]);
                setSelectHotspots('shop');
                setShowModal(true);
                cameraMove(-3, -6, 10, 18);
              }}>
                <img src="assets/img/shop.svg" alt="shop" width={60} height={60} />
              </div>
            </Html>
            <Html
              position={[2.05, 0.4, 19]}
            >
              <div className="button" onClick={() => {
                setContent(contents[0].content);
                setModalPosition([-0.8, -2.2, 13]);
                setSelectHotspots('shop');
                setShowModal(true);
                cameraMove(-3, -6, 14, 18);
              }}>
                <img src="assets/img/shop.svg" alt="shop" width={60} height={60} />
              </div>
            </Html>
            <Html
              position={[-3.4, 0.4, 14]}
            >
              <div className="button" onClick={() => {
                setContent(contents[0].content);
                setModalPosition([-2.5, 1.5, 13]);
                setSelectHotspots('shop');
                setShowModal(true);
                cameraMove(-3, 0, 14, 8);
              }}>
                <img src="assets/img/shop.svg" alt="shop" width={60} height={60} />
              </div>
            </Html>
            <Html
              position={[0, 1, 5]}
            >
              <div className="button" onClick={() => {
                setContent(contents[1].content);
                setModalPosition([-22, -9, -4]);
                setSelectHotspots('gateway');
                setShowModal(true);
                cameraMove(0, 0, 6, 8);
              }}>
                <img src="assets/img/gateway.svg" alt="gateway" width={60} height={60} />
              </div>
            </Html>
            <Html
              position={[-2.5, 0.4, 10.4]}
            >
              <div className="button" onClick={() => {
                setContent(contents[2].content);
                setSelectHotspots('bar');
                setModalPosition([-2.5, 1, 7]);
                setShowModal(true);
                cameraMove(0, 2, 10, 8);
              }}>
                <img src="assets/img/bar.svg" alt="bar" width={60} height={60} />
              </div>
            </Html>
            <Html
              position={[-9, 0.4, 19]}
            >
              <div className="button" onClick={() => {
                setContent(contents[3].content);
                setSelectHotspots('hill');
                setModalPosition([-10, 0.2, 15]);
                setShowModal(true);
                cameraMove(-9, 0.4, 19, 8);
              }}>
                <img src="assets/img/hill.svg" alt="bar" width={60} height={60} />
              </div>
            </Html>
          </> :
          <Html
            position={modalPosition}
          >
            <div className="content" >
              <div className='close-button' onClick={() => {
                setShowModal(false);
                cameraMove(0, 0, 14, 18);
              }}>
                <img src='assets/img/close.png' alt='close' width={40} height={40} />
              </div>
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
                    <div className="button" onClick={() => {
                      setContent(contents[1].content);
                      setModalPosition([-22, -9, -4]);
                      setSelectHotspots('gateway');
                      setShowModal(true);
                      cameraMove(0, 0, 6, 8);
                    }}>
                      <img src="assets/img/gateway.svg" alt="hill" width={70} height={70} />
                    </div>
                }
                {
                  selectHotspots === 'bar' ?
                    <img src="assets/img/bar.svg" alt="hill" width={90} height={90} />
                    :
                    <div className="button" onClick={() => {
                      setContent(contents[2].content);
                      setSelectHotspots('bar');
                      setModalPosition([-2.5, 1, 7]);
                      setShowModal(true);
                      cameraMove(0, 2, 10, 8);
                    }}>
                      <img src="assets/img/bar.svg" alt="hill" width={70} height={70} />
                    </div>
                }
                {
                  selectHotspots === 'shop' ?
                    <img src="assets/img/shop.svg" alt="hill" width={90} height={90} />
                    :
                    <div className="button" onClick={() => {
                      setContent(contents[0].content);
                      setModalPosition([0, -0.2, 6.9]);
                      setSelectHotspots('shop');
                      setShowModal(true);
                      cameraMove(-3, -6, 6, 18);
                    }}>
                      <img src="assets/img/shop.svg" alt="hill" width={70} height={70} />
                    </div>
                }
                {
                  selectHotspots === 'hill' ?
                    <img src="assets/img/hill.svg" alt="hill" width={90} height={90} />
                    :
                    <div className="button" onClick={() => {
                      setContent(contents[3].content);
                      setModalPosition([-10, 0.2, 15]);
                      setSelectHotspots('hill');
                      setShowModal(true);
                      cameraMove(-9, 0.4, 19, 11);
                    }}>
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