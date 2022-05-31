import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useRaycastVehicle } from '@react-three/cannon';
import { useControls } from '../../utils/useControls';
import Beetle from '../beetle';
import Wheel from '../wheel';

const Bike = ({ radius = 0.83, width = 1.2, height = -0.04, front = 1.3, back = -1.7, steer = 0.75, force = 2000, maxBrake = 1e5, ...props }) => {

  const chassis = useRef();
  const wheel1 = useRef();
  const wheel2 = useRef();
  const wheel3 = useRef();
  const wheel4 = useRef();
  const controls = useControls();

  useThree(({ scene }) => {
    // camera.rotation.set(deg2rad(30), 0, 0);
    console.log('use Three-?', scene);
  });

  const wheelInfo = {
    radius,
    directionLocal: [0, -1, 0],
    suspensionStiffness: 30,
    suspensionRestLength: 0.3,
    maxSuspensionForce: 1e4,
    maxSuspensionTravel: 0.3,
    dampingRelaxation: 10,
    dampingCompression: 4.4,
    axleLocal: [-1, 0, 0],
    chassisConnectionPointLocal: [1, 0, 1],
    useCustomSlidingRotationalSpeed: true,
    customSlidingRotationalSpeed: -30,
    frictionSlip: 2
  };

  const wheelInfo1 = { ...wheelInfo, isFrontWheel: true, chassisConnectionPointLocal: [0, height, front] }
  const wheelInfo2 = { ...wheelInfo, isFrontWheel: true, chassisConnectionPointLocal: [-width / 2, height, 0] }
  const wheelInfo3 = { ...wheelInfo, isFrontWheel: false, chassisConnectionPointLocal: [0, height, back] }
  const wheelInfo4 = { ...wheelInfo, isFrontWheel: false, chassisConnectionPointLocal: [width / 2, height, 0] }

  const [vehicle, api] = useRaycastVehicle(() => ({
    chassisBody: chassis,
    wheels: [wheel1, wheel2, wheel3, wheel4],
    wheelInfos: [wheelInfo1, wheelInfo2, wheelInfo3, wheelInfo4],
    indexForwardAxis: 2,
    indexRightAxis: 0,
    indexUpAxis: 1
  }));

  useFrame((state) => {
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
    for (let e = 2; e < 4; e++) api.applyEngineForce(forward || backward ? force * (forward && !backward ? -1 : 1) : 0, 2)
    for (let s = 0; s < 2; s++) api.setSteeringValue(left || right ? steer * (left && !right ? 1 : -1) : 0, s)
    for (let b = 2; b < 4; b++) api.setBrake(brake ? maxBrake : 0, b)
    if (reset) {
      chassis.current.api.position.set(0, 2, 0)
      chassis.current.api.velocity.set(0, 0, 0)
      chassis.current.api.angularVelocity.set(0, 0.5, 0)
      chassis.current.api.rotation.set(0, -Math.PI / 4, 0)
    }
  });

  return (
    <group name='bike' ref={vehicle} position={[0, -0.4, 0]} scale={[0.09, 0.09, 0.09]}>
      <Beetle ref={chassis} handleRef={wheel1} rotation={props.rotation} position={props.position} angularVelocity={props.angularVelocity} />
      <Wheel ref={wheel1} radius={radius} leftSide />
      <Wheel ref={wheel2} radius={radius} scale={0.3} isVislble={false} />
      <Wheel ref={wheel3} radius={radius} leftSide />
      <Wheel ref={wheel4} radius={radius} scale={0.3} isVislble={false} />
    </group>
  )
}

export default Bike;