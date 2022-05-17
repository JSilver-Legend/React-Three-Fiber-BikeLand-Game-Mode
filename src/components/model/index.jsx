import React from 'react';
import './style.css';
import { useGLTF } from '@react-three/drei';

const Model = () => {

  const { nodes, materials, animations } = useGLTF('assets/glb/city.glb');
  console.log('nodes-->', nodes);

  return (
    <group>
      <group position={[0, -5, 0]} scale={[3, 3, 3]} dispose={null} >
        <mesh
          name="city"
          geometry={nodes.city.geometry}
        // material={materials.city}
        />
        <mesh
          name="mountain_1"
          geometry={nodes.mountain_1.geometry}
          material={materials.city}
        />
        <mesh
          name="mountain_2"
          geometry={nodes.mountain_2.geometry}
          material={materials.city}
        />
        <mesh
          name="mountain_3"
          geometry={nodes.mountain_3.geometry}
          material={materials.city}
        />
        <mesh
          name="mountain_4"
          geometry={nodes.mountain_4.geometry}
          material={materials.city}
        />
        <mesh
          name="mountain_5"
          geometry={nodes.mountain_5.geometry}
          material={materials.city}
        />
        <mesh
          name="mountain_6"
          geometry={nodes.mountain_6.geometry}
          material={materials.city}
        />
        <mesh
          name="mountain_7"
          geometry={nodes.mountain_7.geometry}
          material={materials.city}
        />
        <mesh
          name="mountain_8"
          geometry={nodes.mountain_8.geometry}
          material={materials.city}
        />
        <mesh
          name="mountain_9"
          geometry={nodes.mountain_9.geometry}
          material={materials.city}
        />
        <mesh
          name="mountain_10"
          geometry={nodes.mountain_10.geometry}
          material={materials.city}
        />
        <mesh
          name="mountain_11"
          geometry={nodes.mountain_11.geometry}
          material={materials.city}
        />
        <mesh
          name="mountain_12"
          geometry={nodes.mountain_12.geometry}
          material={materials.city}
        />
      </group>
      <group>
        <pointLight intensity={0.4} position={[100, 50, 100]} />
      </group>
    </group>
  );
}

export default Model;