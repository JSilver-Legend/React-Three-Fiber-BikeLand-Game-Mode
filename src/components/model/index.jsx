import React from 'react';
import './style.css';
import { useGLTF } from '@react-three/drei';

const Model = () => {

  const { nodes, materials, animations } = useGLTF('assets/glb/city.glb');
  console.log('nodes-->', nodes);

  return (
    <group>
      <group position={[0, 0, 0]} scale={[3, 3, 3]} dispose={null} >
        <mesh
          name="city"
          geometry={nodes.city.geometry}
          material={materials.city}
        />
      </group>
      <group>
        <pointLight intensity={1} position={[0, 15, 0]} />
      </group>
    </group>
  );
}

export default Model;