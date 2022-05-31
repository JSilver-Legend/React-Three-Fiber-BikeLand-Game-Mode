import { forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useBox } from '@react-three/cannon';

useGLTF.preload('bike_2.glb');

const Beetle = forwardRef(({ args = [1.7, 1, 4], mass = 500, handleRef, ...props }, ref) => {


  const { nodes, materials } = useGLTF('bike_2.glb');
  console.log('bike material-->', handleRef);
  const [, api] = useBox(() => ({ mass, args, allowSleep: false, onCollide: (e) => console.log('bonk', e.body.position), ...props }), ref)
  return (
    <mesh ref={ref} api={api}>
      <group position={[-0.05, 0.4, -0.5]}>
        <mesh geometry={nodes.body.geometry} material={materials.Material_001} castShadow />
      </group>
      <group position={[-0.05, 0.9, 0.9]}>
        <mesh geometry={nodes.handle.geometry} material={materials.Material_001} castShadow />
      </group>
    </mesh>
  )
})

export default Beetle;