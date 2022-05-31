import { forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useBox } from '@react-three/cannon';

useGLTF.preload('bike.glb');

const Beetle = forwardRef(({ args = [1.7, 1, 4], mass = 500, ...props }, ref) => {

  const { nodes, materials } = useGLTF('bike.glb');
  console.log('bike material-->', materials);
  const [, api] = useBox(() => ({ mass, args, allowSleep: false, onCollide: (e) => console.log('bonk', e.body.position), ...props }), ref)
  return (
    <mesh ref={ref} api={api}>
      <group position={[0, 1, 0.8]}>
        <mesh geometry={nodes.body.geometry} material={materials.Material_001} castShadow />
      </group>
    </mesh>
  )
})

export default Beetle;