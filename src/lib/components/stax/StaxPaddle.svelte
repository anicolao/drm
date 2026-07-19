<script lang="ts">
 import{T}from'@threlte/core';import{RoundedBoxGeometry}from'three/examples/jsm/geometries/RoundedBoxGeometry.js';
 export let position:[number,number,number]=[0,0,0];
 const geometry=new RoundedBoxGeometry(1.08,.28,.62,8,.09);
</script>
<T.Group {position}>
 <T.Mesh><T.BoxGeometry args={[.82,.16,.44]}/><T.MeshBasicMaterial color="#bff8ff"/></T.Mesh>
 <T.Mesh {geometry}><T.MeshPhysicalMaterial color="#eafcff" emissive="#43d9ef" emissiveIntensity={.18} metalness={.08} roughness={.1} clearcoat={1} clearcoatRoughness={.06} envMapIntensity={2}/></T.Mesh>
</T.Group>
