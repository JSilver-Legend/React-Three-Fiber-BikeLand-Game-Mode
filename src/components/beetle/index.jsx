import { forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useBox } from '@react-three/cannon';

useGLTF.preload('bike_3.glb');

const Beetle = forwardRef(({ args = [1.7, 1, 4], mass = 500, handleRef, ...props }, ref) => {


  const { nodes, materials } = useGLTF('bike_3.glb');
  console.log('bike material-->', handleRef);
  const [, api] = useBox(() => ({ mass: 10, args, allowSleep: false, onCollide: (e) => console.log('bonk', e.body.position), ...props }), ref)
  return (
    <mesh ref={ref} api={api} position={[0, 0, 0]}>
      <mesh geometry={nodes.body.geometry} material={materials.Material_001} castShadow />
      {/* <group position={[0, 0, -0.2]}>
      </group>
      <group position={[0, 0.1, 0.1]}>
        <mesh geometry={nodes.handle.geometry} material={materials.Material_001} castShadow />
      </group> */}
    </mesh>
  )
})

export default Beetle;