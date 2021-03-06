import React, { useEffect, useRef } from 'react';
import './style.css';
import { useGLTF, useAnimations } from '@react-three/drei';

const Model = () => {

  const { nodes, materials, animations } = useGLTF('assets/glb/city_ground.glb');

  const group = useRef();
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // actions['All Animations'].play();
  }, [actions]);

  useEffect(() => {
    console.log('nodes-->', nodes);
  }, [nodes]);


  return (
    <group>
      <group ref={group} position={[0, 0, 0]} scale={[1, 1, 1]} dispose={null} >
        <mesh
          name='arc_gate'
          geometry={nodes.arc_gate.geometry}
          material={materials.city_1}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name='building_1'
          geometry={nodes.building_1.geometry}
          material={materials.city_1}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name='building_2'
          geometry={nodes.building_2.geometry}
          material={materials.city_1}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name='building_3'
          geometry={nodes.building_3.geometry}
          material={materials.city_1}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name='building_4'
          geometry={nodes.building_4.geometry}
          material={materials.city_1}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name='building_5'
          geometry={nodes.building_5.geometry}
          material={materials.city_1}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name='building_6'
          geometry={nodes.building_6.geometry}
          material={materials.city_1}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name='object_1'
          geometry={nodes.object_1.geometry}
          material={materials.city_2}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name='object_2'
          geometry={nodes.object_2.geometry}
          material={materials.city_2}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name='object_3'
          geometry={nodes.object_3.geometry}
          material={materials.city_2}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name='object_4'
          geometry={nodes.object_4.geometry}
          material={materials.city_2}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name='object_5'
          geometry={nodes.object_5.geometry}
          material={materials.city_2}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name='object_6'
          geometry={nodes.object_6.geometry}
          material={materials.city_2}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name='object_7'
          geometry={nodes.object_7.geometry}
          material={materials.city_2}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name='object_8'
          geometry={nodes.object_8.geometry}
          material={materials.city_2}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name='object_9'
          geometry={nodes.object_9.geometry}
          material={materials.city_2}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name='object_10'
          geometry={nodes.object_10.geometry}
          material={materials.city_2}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name='object_11'
          geometry={nodes.object_11.geometry}
          material={materials.city_2}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name='object_12'
          geometry={nodes.object_12.geometry}
          material={materials.city_2}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name='mountain'
          geometry={nodes.mountain.geometry}
          material={materials.city_2}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name="road_1"
          geometry={nodes.road_1.geometry}
          material={materials.city_1}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name="road_2"
          geometry={nodes.road_2.geometry}
          material={materials.city_1}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name="road_3"
          geometry={nodes.road_3.geometry}
          material={materials.city_1}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name="road_4"
          geometry={nodes.road_4.geometry}
          material={materials.city_1}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name="road_5"
          geometry={nodes.road_5.geometry}
          material={materials.city_1}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name="road_6"
          geometry={nodes.road_6.geometry}
          material={materials.city_1}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name="road_7"
          geometry={nodes.road_7.geometry}
          material={materials.city_1}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name="road_8"
          geometry={nodes.road_8.geometry}
          material={materials.city_1}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name="road_9"
          geometry={nodes.road_9.geometry}
          material={materials.city_1}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name="road_10"
          geometry={nodes.road_10.geometry}
          material={materials.city_1}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name="road_11"
          geometry={nodes.road_11.geometry}
          material={materials.city_1}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name="road_12"
          geometry={nodes.road_12.geometry}
          material={materials.city_1}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name="road_13"
          geometry={nodes.road_13.geometry}
          material={materials.city_1}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name="road_13"
          geometry={nodes.road_14.geometry}
          material={materials.city_1}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name="road_13"
          geometry={nodes.road_15.geometry}
          material={materials.city_1}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name="road_13"
          geometry={nodes.road_16.geometry}
          material={materials.city_1}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name="road_13"
          geometry={nodes.road_17.geometry}
          material={materials.city_1}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name="road_13"
          geometry={nodes.road_18.geometry}
          material={materials.city_1}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name="road_13"
          geometry={nodes.road_19.geometry}
          material={materials.city_1}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name="road_13"
          geometry={nodes.road_20.geometry}
          material={materials.city_1}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          name="road_13"
          geometry={nodes.road_21.geometry}
          material={materials.city_1}
          castShadow={true}
          receiveShadow={true}
        />
      </group>
      <group>
        <pointLight intensity={0.6} position={[100, 50, 100]} castShadow={true} />
      </group>
    </group>
  );
}

export default Model;