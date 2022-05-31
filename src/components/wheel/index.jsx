import { forwardRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useCylinder } from '@react-three/cannon';

// useGLTF.preload('assets/glb/wheel.glb');
useGLTF.preload('wheel.glb');

const Wheel = forwardRef(({ radius = 0.1, leftSide, isVislble, scale, ...props }, ref) => {

  console.log('wheel leftside-->', leftSide);
  const { nodes, materials } = useGLTF('wheel.glb');

  useCylinder(() => ({ mass: 1, type: 'Kinematic', material: 'wheel', collisionFilterGroup: 0, args: [radius, radius, 0.3, 16], ...props }), ref)

  return (
    <mesh ref={ref}>
      <mesh rotation={[0, 0, ((leftSide ? 1 : -1) * Math.PI) / 2]} visible={isVislble}>
        <mesh castShadow receiveShadow geometry={nodes.wheel.geometry} material={materials.Material_001} />
        {/* <mesh material={materials.Rubber} geometry={nodes.wheel_1.geometry} />
        <mesh material={materials.Steel} geometry={nodes.wheel_2.geometry} />
        <mesh material={materials.Chrom} geometry={nodes.wheel_3.geometry} /> */}
      </mesh>
    </mesh>
  );
});

export default Wheel;