import React, { Suspense, useRef, useState } from 'react';
import * as THREE from 'three';
import { Physics, useCylinder, usePlane, useBox, Debug } from '@react-three/cannon';
import { OrbitControls, Environment, softShadows, Html } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import Bike from '../../components/bike';
import { useGLTF } from '@react-three/drei';
import { BoxBufferGeometry, Vector3 } from 'three';
import HotSpots from '../../components/hotspots';
import gsap from 'gsap';

useGLTF.preload('ground.glb');


softShadows();
// import BikeLand from '../../components/bikeLand';

// useFrame((state) => {
//   console.log('camera-->', state.camera);
// });
const HomePage = () => {

  const [showModal, setShowModal] = useState(true);
  const [isFollowMode, setIsFollowMode] = useState(false);

  // const cameraMove = () => {
  //   console.log('here');
  // useFrame((state) => {
  // console.log(state);
  // state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, zoom ? 10 : 42, 0.05)
  // state.camera.position.lerp(v.set(zoom ? 25 : 10, zoom ? 1 : 5, zoom ? 0 : 10), 0.05)
  // state.camera.lookAt(0, 0, 0)
  // state.camera.updateProjectionMatrix()
  // })
  // };

  const { nodes, materials } = useGLTF('ground.glb');

  const cameraRef = useRef();
  const bike = useRef();

  const cameraMove = (x, y, z, distance) => {
    gsap.to(cameraRef.current.target, {
      duration: 2,
      ease: "back.out(0.8)",
      x: x,
      y: y,
      z: z
    });
    gsap.to(cameraRef.current, {
      minDistance: distance,
      maxDistance: distance
    });
  }

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

  const ColliderBox = ({ pos, args, rot }) => {
    const [ref] = useBox(() => ({ type: 'Static', args: [args.x, args.y, args.z], position: [pos.x, pos.y, pos.z], rotation: [rot.x, rot.y, rot.z] }));
    return (
      <mesh visible={false} ref={ref} receiveShadow castShadow geometry={BoxBufferGeometry.geometry} />
    );
  };

  return (
    // <BikeLand />
    <Canvas
      onClick={(e) => {
        if (e.target.tagName === 'CANVAS') setShowModal(!showModal);
        // setIsFollowMode(true);
      }}
      dpr={[1, 1.5]}
      shadows
      camera={{ position: [15, 15, 10], fov: 30 }}
    >
      {/* <fog attach="fog" args={['#171720', 10, 50]} /> */}
      <color attach="background" args={['#171720']} />
      <ambientLight intensity={0.05} />
      <spotLight position={[10, 30, 50]} angle={0.5} intensity={1} castShadow penumbra={1} />
      <Physics broadphase="SAP" contactEquationRelaxation={4} friction={1e-3} allowSleep>
        <Debug scale={1.1} color="#ff0000">
          <Plane position={[0, -0.4, 0]} rotation={[-Math.PI / 2, 0, 0]} userData={{ id: 'floor' }} />
          {/* <Bike ref={bike} followMode={isFollowMode} position={[0, 1, 0]} rotation={[0, 0, 0]} angularVelocity={[0, 0.5, 0]} wheelRadius={0.1} /> */}
          <ColliderBox args={new THREE.Vector3(0.3, 1, 0.3)} pos={new THREE.Vector3(-1, 0, 5)} rot={new THREE.Vector3(0, 0, 0)} />
          <ColliderBox args={new THREE.Vector3(0.3, 1, 0.3)} pos={new THREE.Vector3(1, 0, 5)} rot={new THREE.Vector3(0, 0, 0)} />

          <ColliderBox args={new THREE.Vector3(1.1, 1, 1.6)} pos={new THREE.Vector3(4.8, 0, 8.7)} rot={new THREE.Vector3(0, 0, 0)} />
          <ColliderBox args={new THREE.Vector3(1.4, 1, 0.75)} pos={new THREE.Vector3(2.5, 0, 7.35)} rot={new THREE.Vector3(0, 0, 0)} />
          <ColliderBox args={new THREE.Vector3(1, 1, 0.8)} pos={new THREE.Vector3(1.9, 0, 9.8)} rot={new THREE.Vector3(0, 0, 0)} />
          <ColliderBox args={new THREE.Vector3(1.2, 1, 1.1)} pos={new THREE.Vector3(2, 0, 10.9)} rot={new THREE.Vector3(0, 0, 0)} />
          <ColliderBox args={new THREE.Vector3(1.2, 1, 0.9)} pos={new THREE.Vector3(2, 0, 14.2)} rot={new THREE.Vector3(0, 0, 0)} />
          <ColliderBox args={new THREE.Vector3(0.7, 1, 2.75)} pos={new THREE.Vector3(2.3, 0, 16.2)} rot={new THREE.Vector3(0, 0, 0)} />
          <ColliderBox args={new THREE.Vector3(1, 1, 1)} pos={new THREE.Vector3(4.8, 0, 16.8)} rot={new THREE.Vector3(0, 0, 0)} />
          <ColliderBox args={new THREE.Vector3(1.4, 1, 1.1)} pos={new THREE.Vector3(2.1, 0, 19.1)} rot={new THREE.Vector3(0, 0, 0)} />
          <ColliderBox args={new THREE.Vector3(1.9, 1, 1.2)} pos={new THREE.Vector3(4.35, 0, 11)} rot={new THREE.Vector3(0, 0, 0)} />
          <ColliderBox args={new THREE.Vector3(2.6, 1, 1.9)} pos={new THREE.Vector3(7, 0, 11)} rot={new THREE.Vector3(0, 0, 0)} />
          <ColliderBox args={new THREE.Vector3(2.6, 1, 1.9)} pos={new THREE.Vector3(7, 0, 14.3)} rot={new THREE.Vector3(0, 0, 0)} />

          <ColliderBox args={new THREE.Vector3(1.3, 1, 2.8)} pos={new THREE.Vector3(-2.5, 0, 9.8)} rot={new THREE.Vector3(0, 0, 0)} />
          <ColliderBox args={new THREE.Vector3(1.2, 1, 2.9)} pos={new THREE.Vector3(-3.35, 0, 13.4)} rot={new THREE.Vector3(0, 0, 0)} />
          <ColliderBox args={new THREE.Vector3(1, 1, 1.1)} pos={new THREE.Vector3(-3.5, 0, 17.9)} rot={new THREE.Vector3(0, 0, 0)} />
          <ColliderBox args={new THREE.Vector3(0.6, 1, 1.2)} pos={new THREE.Vector3(-2.7, 0, 18.3)} rot={new THREE.Vector3(0, 0, 0)} />
          <ColliderBox args={new THREE.Vector3(0.8, 1, 0.8)} pos={new THREE.Vector3(-2.4, 0, 17.2)} rot={new THREE.Vector3(0, 0, 0)} />
          <ColliderBox args={new THREE.Vector3(2, 1, 0.8)} pos={new THREE.Vector3(-3.1, 0, 20.5)} rot={new THREE.Vector3(0, 0, 0)} />

          <ColliderBox args={new THREE.Vector3(10, 1, 10)} pos={new THREE.Vector3(-12.5, 0, 22.5)} rot={new THREE.Vector3(0, 0, 0)} />
          <ColliderBox args={new THREE.Vector3(7, 1, 5)} pos={new THREE.Vector3(-12, 0, 0)} rot={new THREE.Vector3(0, Math.PI / 4, 0)} />
          <ColliderBox args={new THREE.Vector3(13, 1, 1)} pos={new THREE.Vector3(0, 0, 23)} rot={new THREE.Vector3(0, 0, 0)} />
          <ColliderBox args={new THREE.Vector3(1, 1, 22)} pos={new THREE.Vector3(7, 0, 11)} rot={new THREE.Vector3(0, 0, 0)} />
          <ColliderBox args={new THREE.Vector3(20, 1, 1)} pos={new THREE.Vector3(-2, 0, -1)} rot={new THREE.Vector3(0, 0, 0)} />
          <ColliderBox args={new THREE.Vector3(7, 1, 5.2)} pos={new THREE.Vector3(-12.5, 0, 12.6)} rot={new THREE.Vector3(0, 0, 0)} />
          <ColliderBox args={new THREE.Vector3(7, 1, 20)} pos={new THREE.Vector3(-16, 0, 9)} rot={new THREE.Vector3(0, 0, 0)} />
        </Debug>
      </Physics>
      <group scale={[5, 9, 13]} position={[-1.5, -0.4, 16]} >
        <mesh position={[-0.14, 0, 0.07]} receiveShadow geometry={nodes.ground.geometry} material={materials.city_1} />
      </group>
      <group>
        {/* <ColliderBox position={[0, 0, 5]} args={[1, 1, 1]} /> */}
      </group>
      <group scale={[1, 1.5, 1]}>
        {/* <Physics> */}
        <mesh castShadow geometry={nodes.road.geometry} material={materials.city_4} rotation={[0, 0, 0]} position={[-17, -0.33, 15.930]} scale={[10, 3, 5.1]} />
        <mesh castShadow geometry={nodes.mountain_1.geometry} material={materials.city_2} position={[-15, 0.3, 7]} scale={[3, 3, 3]} />
        <mesh castShadow geometry={nodes.mountain_1.geometry} material={materials.city_2} position={[-9, 0.12, 19]} scale={[2, 2, 2]} />
        <mesh castShadow geometry={nodes.mountain_2.geometry} material={materials.city_2} position={[-15, 0.9, 12]} scale={[3, 3, 3]} />
        <mesh castShadow geometry={nodes.mountain_2.geometry} material={materials.city_2} position={[-19, 0.9, 12]} scale={[3, 3, 3]} />
        <mesh castShadow geometry={nodes.mountain_3.geometry} material={materials.city_2} position={[-15, 0.9, 19.5]} scale={[3, 3, 3]} />
        <mesh castShadow geometry={nodes.mountain_3.geometry} material={materials.city_2} position={[-18, 0.9, 19.5]} scale={[3, 3, 3]} />
        <mesh castShadow geometry={nodes.logo.geometry} material={materials.city_3} position={[0, 0.25, 5]} scale={[0.2, 0.15, 0.2]} />
        <mesh castShadow geometry={nodes.gateway.geometry} material={materials.city_2} position={[0, 0.36, 5]} scale={[2, 1.4, 2]} />
        <mesh castShadow geometry={nodes.tree_1.geometry} material={materials.city_2} position={[-3.2, 0.1, 12.3]} scale={[3, 2, 3]} />
        <mesh castShadow geometry={nodes.tree_1.geometry} material={materials.city_2} position={[-2.4, 0.25, 17.2]} scale={[2.3, 3, 2]} />
        <mesh castShadow geometry={nodes.tree_1.geometry} material={materials.city_2} position={[3.6, 0.25, 11.2]} scale={[2, 3, 2]} />
        <mesh castShadow geometry={nodes.tree_1.geometry} material={materials.city_2} position={[4.7, 0.25, 16.8]} scale={[3, 3, 3]} />
        <mesh castShadow geometry={nodes.tree_2.geometry} material={materials.city_2} rotation={[0, Math.PI / 2, 0]} position={[2.4, 0.25, 17.6]} scale={[3, 3, 3]} />
        <mesh castShadow geometry={nodes.tree_3.geometry} material={materials.city_2} rotation={[0, Math.PI / 2, 0]} position={[7, 0.25, 14.5]} scale={[3, 3, 3]} />
        <mesh castShadow geometry={nodes.tree_3.geometry} material={materials.city_2} rotation={[0, -Math.PI / 2, 0]} position={[7, 0.25, 11.2]} scale={[3, 3, 3]} />
        <mesh castShadow geometry={nodes.tree_3.geometry} material={materials.city_2} rotation={[0, -Math.PI / 2, 0]} position={[-12.5, 0.25, 14.8]} scale={[3, 3, 3]} />
        <mesh castShadow geometry={nodes.tree_3.geometry} material={materials.city_2} rotation={[0, 0, 0]} position={[-10, 0.4, 12]} scale={[6, 4, 5]} />
        <mesh castShadow geometry={nodes.building_1.geometry} material={materials.city_2} position={[2.5, -0.33, 7.4]} scale={[1.2, 1.2, 1.2]} />
        <mesh castShadow geometry={nodes.building_2.geometry} material={materials.city_2} position={[4.7, -0.130, 11]} scale={[1.2, 1.2, 1.2]} />
        <mesh castShadow geometry={nodes.building_3.geometry} material={materials.city_2} position={[4.8, -0.130, 8.9]} scale={[1.2, 1.2, 1.2]} />
        <mesh castShadow geometry={nodes.building_4.geometry} material={materials.city_2} position={[2, -0.06, 10.9]} scale={[1.2, 1.2, 1.2]} />
        <mesh castShadow geometry={nodes.building_5.geometry} material={materials.city_2} position={[1.85, -0.12, 9.9]} scale={[1, 1, 1]} />
        <mesh castShadow geometry={nodes.building_6.geometry} material={materials.city_2} position={[2, -0.1, 14.3]} scale={[1.2, 1.2, 1.2]} />
        <mesh castShadow geometry={nodes.building_7.geometry} material={materials.city_2} position={[2.05, -0.1, 16]} scale={[1.2, 1.2, 1.2]} />
        <mesh castShadow geometry={nodes.building_8.geometry} material={materials.city_2} position={[2.05, -0.15, 19.1]} scale={[1.2, 1.2, 1.2]} />
        <mesh castShadow geometry={nodes.building_9.geometry} material={materials.city_2} position={[-2.5, 0.02, 9]} scale={[1.5, 1.6, 1.5]} />
        <mesh castShadow geometry={nodes.building_10.geometry} material={materials.city_2} position={[-2.5, -0.06, 10.8]} scale={[1.2, 1.2, 1.2]} />
        <mesh castShadow geometry={nodes.building_11.geometry} material={materials.city_2} position={[-3.4, -0.14, 13.4]} scale={[1.2, 1.2, 1.2]} />
        <mesh castShadow geometry={nodes.building_12.geometry} material={materials.city_2} position={[-3.4, -0.12, 14.4]} scale={[1.2, 1.2, 1.2]} />
        <mesh castShadow geometry={nodes.building_13.geometry} material={materials.city_2} position={[-2.1, -0.37, 19.2]} scale={[1.5, 1.5, 1.5]} />
        <mesh castShadow geometry={nodes.building_14.geometry} material={materials.city_2} position={[-3.1, -0.1, 20.3]} scale={[1.2, 1.2, 1.2]} />
        {/* <mesh geometry={nodes.building_1_1.geometry} material={materials.city_3} position={[2.4, -0.5, 7.4]} scale={[2.7, 5, 3]} /> */}
        {/* </Physics> */}
      </group>
      <HotSpots state={showModal} cameraMove={cameraMove} />

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
      <directionalLight castShadow intensity={0.8} rotation={[0.1, 0.1, 0.1]} />
      {/* <OrbitControls target={[0, 0, 0]} /> */}
      <OrbitControls enablePan={false} ref={cameraRef} target={[0, 0, 14]} minDistance={18} maxDistance={18} minAzimuthAngle={2 * Math.PI / 8} maxAzimuthAngle={2 * Math.PI / 8} minPolarAngle={2.3 * Math.PI / 8} maxPolarAngle={2.3 * Math.PI / 8} />
    </Canvas>
  )
}

export default HomePage;