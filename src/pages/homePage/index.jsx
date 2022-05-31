import React, { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { Physics, useCylinder, usePlane, useBox } from '@react-three/cannon';
import { OrbitControls, Environment, softShadows, Html } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import Bike from '../../components/bike';
import { useGLTF } from '@react-three/drei';
import { BoxBufferGeometry, Vector3 } from 'three';
import HotSpots from '../../components/hotspots';

useGLTF.preload('ground.glb');


softShadows();
// import BikeLand from '../../components/bikeLand';

// useFrame((state) => {
//   console.log('camera-->', state.camera);
// });
const HomePage = () => {

  const CameraMove = ({ v = new THREE.Vector3() }) => {
    console.log('here');
    useFrame((state) => {
      console.log(state);
      // state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, zoom ? 10 : 42, 0.05)
      // state.camera.position.lerp(v.set(zoom ? 25 : 10, zoom ? 1 : 5, zoom ? 0 : 10), 0.05)
      // state.camera.lookAt(0, 0, 0)
      // state.camera.updateProjectionMatrix()
    })
  };

  const { nodes, materials } = useGLTF('ground.glb');

  const bike = useRef();

  const Plane = (props) => {
    const [ref] = usePlane(() => ({ type: 'Static', material: 'ground', ...props }));
    return (
      <group ref={ref}>
        <mesh receiveShadow visible={false}>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#303030" />
        </mesh>
      </group>
    )
  };

  const gateway = useRef();

  const ColliderBox = ({ pos, args }) => {
    const [ref] = useBox(() => ({ type: 'Static', args: [args.x, args.y, args.z], position: [pos.x, pos.y, pos.z] }));
    return (
      <mesh visible={false} ref={ref} receiveShadow castShadow geometry={BoxBufferGeometry.geometry} />
    );
  };

  return (
    // <BikeLand />
    <Canvas dpr={[1, 1.5]} shadows camera={{ position: [15, 15, 10], fov: 30 }}>
      {/* <fog attach="fog" args={['#171720', 10, 50]} /> */}
      <color attach="background" args={['#171720']} />
      <ambientLight intensity={1} />
      {/* <spotLight position={[10, 10, 10]} angle={0.5} intensity={1} castShadow penumbra={1} /> */}
      <Physics broadphase="SAP" contactEquationRelaxation={4} friction={1e-3} allowSleep>
        <Plane rotation={[-Math.PI / 2, 0, 0]} userData={{ id: 'floor' }} />
        <Bike ref={bike} position={[0, 1, 0]} rotation={[0, 0, 0]} angularVelocity={[0, 0.5, 0]} wheelRadius={0.7} />

        <ColliderBox args={new THREE.Vector3(1, 1, 1)} pos={new THREE.Vector3(-5, 0.36, 27)} />
        <ColliderBox args={new THREE.Vector3(1, 1, 1)} pos={new THREE.Vector3(5, 0.36, 27)} />

        <ColliderBox args={new THREE.Vector3(4, 1, 10)} pos={new THREE.Vector3(28.5, 0.36, 47.5)} />
        <ColliderBox args={new THREE.Vector3(7, 1, 8)} pos={new THREE.Vector3(26.5, 0.36, 61.5)} />

        <ColliderBox args={new THREE.Vector3(7, 1, 4)} pos={new THREE.Vector3(13, 0.36, 41)} />
        <ColliderBox args={new THREE.Vector3(8, 1, 9)} pos={new THREE.Vector3(11, 0.36, 57)} />
        <ColliderBox args={new THREE.Vector3(7, 1, 20)} pos={new THREE.Vector3(12, 0.36, 85)} />
        <ColliderBox args={new THREE.Vector3(6, 1, 6)} pos={new THREE.Vector3(12, 0.36, 105)} />

        <ColliderBox args={new THREE.Vector3(6, 1, 17)} pos={new THREE.Vector3(-14, 0.36, 54)} />
        <ColliderBox args={new THREE.Vector3(5, 1, 11.5)} pos={new THREE.Vector3(-18, 0.36, 77)} />
        <ColliderBox args={new THREE.Vector3(10, 1, 9.5)} pos={new THREE.Vector3(-17.5, 0.36, 101)} />
        <ColliderBox args={new THREE.Vector3(11, 1, 4)} pos={new THREE.Vector3(-17, 0.36, 114)} />
        {/* <Market1 position={[10, 0.8, 10]} /> */}
        {/* <ColliderBox position={[0, 0, 5]} /> */}
        {/* <ColliderBox position={[0, 0, 10]} /> */}
        {/* <ColliderBox geometry={nodes.building_1.geometry} /> */}
      </Physics>
      <group scale={[5, 9, 13]} position={[-1.5, -0.4, 16]} >
        <mesh receiveShadow geometry={nodes.ground.geometry} material={materials.city_1} />
      </group>
      <group>
        {/* <ColliderBox position={[0, 0, 5]} args={[1, 1, 1]} /> */}
      </group>
      <group scale={[1, 1.5, 1]}>
        <Physics>
          {/* <Gateway position={[0, 0.36, 5]} scale={[2, 1.4, 2]} /> */}
          <mesh castShadow geometry={nodes.logo.geometry} material={materials.city_3} rotation={[Math.PI / 2, 0, 0]} position={[0, 0.25, 5]} scale={[4, 1, 2.5]} />
          <mesh castShadow geometry={nodes.gateway.geometry} material={materials.city_2} position={[0, 0.36, 5]} scale={[2, 1.4, 2]} />
          <mesh castShadow geometry={nodes.building_1.geometry} material={materials.city_2} position={[2.4, -0.32, 7.4]} />
          <mesh castShadow geometry={nodes.building_2.geometry} material={materials.city_2} position={[4.7, -0.130, 11]} />
          <mesh castShadow geometry={nodes.building_3.geometry} material={materials.city_2} position={[4.9, -0.130, 8.9]} />
          <mesh castShadow geometry={nodes.building_4.geometry} material={materials.city_2} position={[2, -0.06, 10.9]} />
          <mesh castShadow geometry={nodes.building_5.geometry} material={materials.city_2} position={[1.85, -0.12, 9.9]} scale={[0.7, 0.9, 0.8]} />
          <mesh castShadow geometry={nodes.building_6.geometry} material={materials.city_2} position={[2, -0.1, 14.3]} />
          <mesh castShadow geometry={nodes.building_7.geometry} material={materials.city_2} position={[2.05, -0.1, 16]} />
          <mesh castShadow geometry={nodes.building_8.geometry} material={materials.city_2} position={[2.05, -0.15, 19]} />
          <mesh castShadow geometry={nodes.building_9.geometry} material={materials.city_2} position={[-2.5, 0.05, 9]} scale={[1.5, 1.6, 1.5]} />
          <mesh castShadow geometry={nodes.building_10.geometry} material={materials.city_2} position={[-2.5, -0.06, 10.8]} />
          <mesh castShadow geometry={nodes.building_11.geometry} material={materials.city_2} position={[-3.4, -0.14, 13.4]} />
          <mesh castShadow geometry={nodes.building_12.geometry} material={materials.city_2} position={[-3.4, -0.1, 14.4]} />
          <mesh castShadow geometry={nodes.building_13.geometry} material={materials.city_2} position={[-2.1, -0.35, 19.2]} scale={[1.5, 1.5, 1.5]} />
          <mesh castShadow geometry={nodes.building_14.geometry} material={materials.city_2} position={[-3.1, -0.1, 20.3]} />
          {/* <mesh geometry={nodes.building_1_1.geometry} material={materials.city_3} position={[2.4, -0.5, 7.4]} scale={[2.7, 5, 3]} /> */}
        </Physics>
      </group>
      <HotSpots />

      {/* <Html
          position={[2, 0.6, 2.5]}
        >
          <div className="button">
            <img src="assets/img/hill.svg" alt="hill" width={60} height={60} />
          </div>
        </Html> */}
      {/* <Suspense> */}
      {/* <Physics>
          <mesh receiveShadow castShadow geometry={nodes.market_1.geometry} material={materials.city_1} scale={[5, 5, 5]} position={[10, 0.8, 10]} />
        </Physics> */}
      {/* </Suspense> */}
      {/* <Suspense fallback={null}>
        <Environment preset="night" />
      </Suspense> */}
      <directionalLight castShadow intensity={0.2} />
      {/* <OrbitControls target={[0, 0, 0]} /> */}
      <OrbitControls target={[0, 0, 5]} minDistance={15} maxDistance={15} minAzimuthAngle={-2 * Math.PI / 8} maxAzimuthAngle={2 * Math.PI / 8} minPolarAngle={2 * Math.PI / 8} maxPolarAngle={2.3 * Math.PI / 8} />
    </Canvas>
  )
}

export default HomePage;