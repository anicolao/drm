<script lang="ts">
 import{Canvas,T}from'@threlte/core';import{Color}from'three';import type{StaxColor,StaxState}from'$lib/game/stax';
 export let state:StaxState;export let compact=false;export let label='Stax ramp';export let selectLane:((lane:number)=>void)|undefined=undefined;
 const palette:Record<StaxColor,string>={cyan:'#30e7ff',pink:'#ff4aa2',yellow:'#ffe15b',green:'#63f58b',purple:'#aa66ff',orange:'#ff8a35',blue:'#4d7cff',wild:'#ffffff'};
 const x=(lane:number)=>(lane-2)*1.15;
 $: travel=Math.max(72,180-5*Math.min(20,state.level));
 const rampZ=(progress:number,returning=false)=>returning?-3.7+Math.min(1,progress/360)*8.2:4.5-Math.min(1,progress/travel)*8.2;
</script>
<div class="scene" class:compact aria-label={label} data-tick={state.tick} data-phase={state.phase} data-paddle-lane={state.paddleLane} data-paddle-count={state.paddle.length} data-ramp-count={state.ramp.length} data-score={state.score}>
 <Canvas dpr={[1,2]}>
  <T.PerspectiveCamera makeDefault position={[0,7.4,8.8]} rotation={[-.7,0,0]} fov={42}/>
  <T.Color attach="background" args={['#060713']}/><T.AmbientLight intensity={0.45}/><T.DirectionalLight position={[-4,7,5]} intensity={2.5} color="#ffd6a0"/><T.DirectionalLight position={[5,3,-2]} intensity={1.5} color="#5fdcff"/>
  <T.Mesh rotation={[-Math.PI/2,0,0]} position={[0,-.34,.35]} receiveShadow><T.BoxGeometry args={[6.3,9.8,.28]}/><T.MeshStandardMaterial color="#12172b" metalness={.35} roughness={.42}/></T.Mesh>
  {#each Array(6) as _,i}<T.Mesh position={[(i-2.5)*1.15,-.12,.35]}><T.BoxGeometry args={[.025,.04,9.5]}/><T.MeshBasicMaterial color="#263457"/></T.Mesh>{/each}
  {#each state.ramp as tile(tile.id)}<T.Mesh position={[x(tile.lane),.18,rampZ(tile.progress,tile.returning)]} rotation={[0,tile.progress*.018,tile.returning?Math.PI:0]} castShadow><T.BoxGeometry args={[.94,.45,.94]}/><T.MeshPhysicalMaterial color={palette[tile.color]} emissive={new Color(palette[tile.color])} emissiveIntensity={.32} roughness={.12} metalness={.08} clearcoat={1} clearcoatRoughness={.08} transmission={.18}/></T.Mesh>{/each}
  {#each state.columns as column,c}{#each column as color,r}<T.Mesh position={[x(c),.35+r*.55,-4.55]}><T.BoxGeometry args={[1,.48,.72]}/><T.MeshPhysicalMaterial color={palette[color]} emissive={new Color(palette[color])} emissiveIntensity={state.lastClearCells.some(cell=>cell.column===c&&cell.row===r)?.8:.18} roughness={.14} clearcoat={1}/></T.Mesh>{/each}{/each}
  <T.Mesh position={[x(state.paddleLane),.15,-3.75]}><T.BoxGeometry args={[1.08,.3,.58]}/><T.MeshStandardMaterial color="#f1f5ff" emissive="#56dcff" emissiveIntensity={.55} metalness={.7} roughness={.18}/></T.Mesh>
  {#each state.paddle as held,i}<T.Mesh position={[x(state.paddleLane),.42+i*.32,-3.75]}><T.BoxGeometry args={[.72,.25,.42]}/><T.MeshPhysicalMaterial color={palette[held.color]} clearcoat={1}/></T.Mesh>{/each}
 </Canvas>
 {#if selectLane}<div class="lanes">{#each Array(5) as _,lane}<button aria-label={`Catch lane ${lane+1}`} on:pointerdown|preventDefault={()=>selectLane?.(lane)}></button>{/each}</div>{/if}{#if state.phase==='countdown'}<strong class="countdown">{Math.max(1,Math.ceil(state.countdown/60))}</strong>{/if}
</div>
<style>.scene{position:relative;width:min(92vw,72dvh);aspect-ratio:4/5;overflow:hidden;border:1px solid #253150;border-radius:1rem;box-shadow:0 0 40px #00c8ff18}.countdown{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);font:900 5rem/1 'Arial Black';color:#fff;text-shadow:0 0 25px #55ddff}.scene.compact{width:min(24vw,34dvh)}.lanes{position:absolute;inset:0;display:grid;grid-template-columns:repeat(5,1fr)}.lanes button{border:0;background:transparent;box-shadow:none;padding:0}.lanes button:hover{background:#55ddff12;transform:none}@media(max-width:700px){.scene{width:min(96vw,67dvh)}} </style>
