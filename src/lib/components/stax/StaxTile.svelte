<script lang="ts">
 import{T}from'@threlte/core';
 import{RoundedBoxGeometry}from'three/examples/jsm/geometries/RoundedBoxGeometry.js';
 import type{StaxColor}from'$lib/game/stax';
 export let color:StaxColor;export let position:[number,number,number]=[0,0,0];export let rotation:[number,number,number]=[0,0,0];export let scale:number|[number,number,number]=1;export let glow=.28;
 const palette:Record<StaxColor,string>={cyan:'#30e7ff',pink:'#ff4aa2',yellow:'#ffe15b',green:'#63f58b',purple:'#aa66ff',orange:'#ff8a35',blue:'#4d7cff',wild:'#ffffff'};
 const geometry=new RoundedBoxGeometry(.94,.42,.94,8,.1);
 $:paint=palette[color];
</script>

<T.Group {position} {rotation} {scale}>
 <T.Mesh><T.BoxGeometry args={[.72,.25,.72]}/><T.MeshBasicMaterial color={paint} transparent opacity={glow}/></T.Mesh>
 <T.Mesh {geometry} castShadow receiveShadow>
  <T.MeshPhysicalMaterial color={paint} transmission={.44} opacity={1} metalness={0} roughness={.08} ior={1.5} thickness={1.35} attenuationColor={paint} attenuationDistance={1.1} clearcoat={1} clearcoatRoughness={.07} envMapIntensity={2}/>
 </T.Mesh>
</T.Group>
