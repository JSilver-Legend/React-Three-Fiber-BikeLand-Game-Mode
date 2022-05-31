import React from 'react';
import { Html } from '@react-three/drei';

const HotSpots = () => {

  return (
    <group>
      <Html
        position={[2, 0.4, 10.9]}
      >
        <div className="button">
          <img src="assets/img/shop.svg" alt="shop" width={60} height={60} />
        </div>
      </Html>
      <Html
        position={[2.05, 0.4, 16]}
      >
        <div className="button">
          <img src="assets/img/shop.svg" alt="shop" width={60} height={60} />
        </div>
      </Html>
      <Html
        position={[2.05, 0.4, 19]}
      >
        <div className="button">
          <img src="assets/img/shop.svg" alt="shop" width={60} height={60} />
        </div>
      </Html>
      <Html
        position={[-3.4, 0.4, 14]}
      >
        <div className="button">
          <img src="assets/img/shop.svg" alt="shop" width={60} height={60} />
        </div>
      </Html>
      <Html
        position={[0, 1, 5]}
      >
        <div className="button">
          <img src="assets/img/gateway.svg" alt="gateway" width={60} height={60} />
        </div>
      </Html>
      <Html
        position={[-2.5, 0.4, 10.4]}
      >
        <div className="button">
          <img src="assets/img/bar.svg" alt="bar" width={60} height={60} />
        </div>
      </Html>
    </group>
  );

}

export default HotSpots;