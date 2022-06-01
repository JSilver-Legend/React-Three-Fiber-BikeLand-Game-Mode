import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useRaycastVehicle } from '@react-three/cannon';
import { useControls } from '../../utils/useControls';
import Beetle from '../beetle';
import Wheel from '../wheel';

const Bike = ({ followMode, radius = 0.83, width = 1.2, height = -0.04, front = 1.3, back = -1.7, steer = 0.75, force = 2000, maxBrake = 1e5, ...props }) => {

  const chassis = useRef();
  const wheel1 = useRef();
  const wheel2 = useRef();
  const wheel3 = useRef();
  const wheel4 = useRef();
  const controls = useControls();

  const cameraProps = useRef({
    position: [0, 0, 0],
    quaternion: [0, 0, 0],
    rotation: [0, 0, 0]
  })

  const wheelInfo = {
    radius,
    directionLocal: [0, -1, 0],
    suspensionStiffness: 30,
    suspensionRestLength: 0.3,
    maxSuspensionForce: 1e4,
    maxSuspensionTravel: 0.3,
    dampingRelaxation: 4,
    dampingCompression: 4.4,
    axleLocal: [-1, 0, 0],
    chassisConnectionPointLocal: [1, 0, 1],
    useCustomSlidingRotationalSpeed: false,
    customSlidingRotationalSpeed: -30,
    frictionSlip: 2
  };

  const wheelInfo1 = { ...wheelInfo, isFrontWheel: true, chassisConnectionPointLocal: [0, height, front] }
  const wheelInfo2 = { ...wheelInfo, isFrontWheel: true, chassisConnectionPointLocal: [-width / 2, height, -0.1] }
  const wheelInfo3 = { ...wheelInfo, isFrontWheel: false, chassisConnectionPointLocal: [0, height, back] }
  const wheelInfo4 = { ...wheelInfo, isFrontWheel: false, chassisConnectionPointLocal: [width / 2, height, -0.1] }

  const [vehicle, api] = useRaycastVehicle(() => ({
    chassisBody: chassis,
    wheels: [wheel1, wheel2, wheel3, wheel4],
    wheelInfos: [wheelInfo1, wheelInfo2, wheelInfo3, wheelInfo4],
    indexForwardAxis: 2,
    indexRightAxis: 0,
    indexUpAxis: 1
  }));

  useEffect(() => {
    if (followMode) {
      chassis.current.api.position.subscribe((v) => (cameraProps.current.position = v))
      chassis.current.api.quaternion.subscribe((v) => (cameraProps.current.quaternion = v))
      chassis.current.api.rotation.subscribe((v) => (cameraProps.current.rotation = v))
    }
  }, [followMode]);

  useFrame(({ camera }) => {
    // console.log('api-->', api);
    // state.camera.position.set(15, 15, 30);
    // console.log('bike position-->', chassis.current.api.position);
    // console.log('position-->', vehicle.current.api.position.set(0, 0, 0));
    // state.camera.lookAt(1, 1, 1);
    const { forward, backward, left, right, brake, reset } = controls.current;
    // var currentPositionX = state.camera.position.x;
    // if (forward) state.camera.position.x = currentPositionX + 0.1;
    // if (forward) console.log('position-->', chassis.current.position);
    // if (forward) console.log(vehicle.children);

    if (left) console.log('left pressed');

    for (let e = 2; e < 4; e++) api.applyEngineForce(forward || backward ? force * (forward && !backward ? -1 : 1) : 0, 1)
    for (let s = 0; s < 2; s++) api.setSteeringValue(left || right ? steer * (left && !right ? 1 : -1) : 0, 0)
    for (let b = 2; b < 4; b++) api.setBrake(brake ? maxBrake : 0, b)
    if (reset) {
      chassis.current.api.position.set(0, 2, 0)
      chassis.current.api.velocity.set(0, 0, 0)
      chassis.current.api.angularVelocity.set(0, 0.5, 0)
      chassis.current.api.rotation.set(0, -Math.PI / 4, 0)
    }

    if (followMode) {
      const step = 0.1
      camera.position.lerp(
        camera.position.set(cameraProps.current.position[0] + Math.PI * 8, cameraProps.current.position[1] + 20, cameraProps.current.position[2] + 12),
        step
      );
      camera.quaternion.set(...cameraProps.current.quaternion);
      // camera.rotation.set(...cameraProps.current.rotation);

      // Apply offset
      // const rotateX = THREE.MathUtils.lerp(0, Math.PI / 6, step);
      // const rotateY = THREE.MathUtils.lerp(0, Math.PI, step);
      // camera.rotation.set(Math.PI / 12, Math.PI, 0);

      // camera.translateY(0);

      camera.lookAt(...cameraProps.current.position);

      camera.translateZ(-27);
      camera.rotateY(-0.15);
      // camera.zoom = Math.abs(Math.sin(clock.getElapsedTime())) * 0.03 + 1;
      camera.updateProjectionMatrix();
    }
  });

  return (
    <group name='bike' ref={vehicle} position={[0, 0, 0]}  >
      <Beetle ref={chassis} handleRef={wheel1} rotation={props.rotation} position={props.position} angularVelocity={props.angularVelocity} />
      <Wheel ref={wheel1} radius={0.1} />
      <Wheel ref={wheel2} radius={0.1} isVislble={true} />
      <Wheel ref={wheel3} radius={0.1} />
      <Wheel ref={wheel4} radius={0.1} isVislble={true} />
    </group>
  )
}

export default Bike;