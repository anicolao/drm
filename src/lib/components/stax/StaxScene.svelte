<script lang="ts">
 import{Canvas,T}from'@threlte/core';import{OrbitControls}from'@threlte/extras';import StaxPaddle from'./StaxPaddle.svelte';import StaxTile from'./StaxTile.svelte';import{staxLevelRules,type StaxState}from'$lib/game/stax';
 export let state:StaxState;export let compact=false;export let label='Stax ramp';export let selectLane:((lane:number)=>void)|undefined=undefined;
 let inspect=false;
 const x=(lane:number)=>(lane-2)*1.15;
 const rampAngle=.13,rampCenterY=.72,rampCenterZ=-.52,rampHalfThickness=.09;
 const farZ=-4.35,nearZ=3.55,catchY=.54,stackStep=.3;
 $: travel=staxLevelRules(state.level).travel;
 const rampSurface=(z:number)=>rampCenterY+rampHalfThickness/Math.cos(rampAngle)-(z-rampCenterZ)*Math.tan(rampAngle);
 const route=(progress:number,returning=false)=>{const t=Math.min(1,progress/(returning?360:travel)),towardPlayer=returning?1-t:t,z=farZ+towardPlayer*(nearZ-farZ),roll=(returning?-1:1)*progress*.06+rampAngle,clearance=.21*Math.abs(Math.cos(roll))+.47*Math.abs(Math.sin(roll));return{z,y:rampSurface(z)+clearance+.015,roll}};
</script>
<div class="scene" class:compact aria-label={label} data-tick={state.tick} data-phase={state.phase} data-paddle-lane={state.paddleLane} data-paddle-count={state.paddle.length} data-ramp-count={state.ramp.length} data-leading-progress={state.ramp[0]?.progress??''} data-leading-roll={state.ramp[0]?route(state.ramp[0].progress,state.ramp[0].returning).roll:''} data-column-counts={state.columns.map(column=>column.length).join(',')} data-score={state.score} data-ramp-direction="far-to-player" data-roll-direction="edge-over-edge-toward-player" data-paddle-position="player-edge" data-bin-position="below-paddle" data-bin-layout="vertical-stacks">
 <Canvas dpr={[1,2]}>
  {#key inspect}<T.PerspectiveCamera makeDefault position={[0,8.9,11.8]} rotation={[-.65,0,0]} fov={43}/>{/key}{#if selectLane&&inspect}<OrbitControls enableDamping target={[0,.25,.4]}/>{/if}
  <T.Color attach="background" args={['#05050a']}/><T.AmbientLight intensity={.72}/><T.DirectionalLight position={[5,10,7]} intensity={4} color="#fff0dd" castShadow/><T.DirectionalLight position={[-8,5,-5]} intensity={3} color="#cceeff"/><T.SpotLight position={[0,8,-5]} intensity={10} color="#00ffcc" angle={.5} penumbra={.5} decay={0} distance={20}/>
  <T.Mesh rotation={[.13,0,0]} position={[0,.72,-.52]} receiveShadow><T.BoxGeometry args={[6.3,.18,8.35]}/><T.MeshStandardMaterial color="#11182b" metalness={.28} roughness={.38}/></T.Mesh>
  {#each Array(6) as _,i}<T.Mesh rotation={[.13,0,0]} position={[(i-2.5)*1.15,.83,-.52]}><T.BoxGeometry args={[.035,.035,8.2]}/><T.MeshBasicMaterial color="#2c4777"/></T.Mesh>{/each}
  {#each state.ramp as tile(tile.id)}{@const p=route(tile.progress,tile.returning)}<StaxTile color={tile.color} position={[x(tile.lane),p.y,p.z]} rotation={[p.roll,0,0]}/>{/each}
  <T.Mesh position={[0,-.55,5.35]} receiveShadow><T.BoxGeometry args={[6.3,.18,1.45]}/><T.MeshStandardMaterial color="#0b1020" metalness={.22} roughness={.42}/></T.Mesh>
  {#each Array(6) as _,i}<T.Mesh position={[(i-2.5)*1.15,-.445,5.35]}><T.BoxGeometry args={[.025,.025,1.32]}/><T.MeshBasicMaterial color="#263d68"/></T.Mesh>{/each}
  <T.Mesh position={[0,-.445,4.68]}><T.BoxGeometry args={[5.75,.025,.035]}/><T.MeshBasicMaterial color="#263d68"/></T.Mesh><T.Mesh position={[0,-.445,6.02]}><T.BoxGeometry args={[5.75,.025,.035]}/><T.MeshBasicMaterial color="#263d68"/></T.Mesh>
  {#each state.columns as column,c}{#each column as color,r}<StaxTile {color} position={[x(c),-.3+r*stackStep,5.35]} scale={[.9,.72,.58]} glow={state.lastClearCells.some(cell=>cell.column===c&&cell.row===r)?.65:.28}/>{/each}{/each}
  <StaxPaddle position={[x(state.paddleLane),catchY-state.paddle.length*stackStep,4.08]}/>
  {#each state.paddle as held,i}<StaxTile color={held.color} position={[x(state.paddleLane),catchY-(state.paddle.length-1-i)*stackStep,4.08]} scale={[.9,.72,.58]}/>{/each}
 </Canvas>
 {#if selectLane&&!inspect}<div class="lanes">{#each Array(5) as _,lane}<button aria-label={`Catch lane ${lane+1}`} on:pointerdown|preventDefault={()=>selectLane?.(lane)}></button>{/each}</div>{/if}{#if selectLane}<button class="inspect" class:active={inspect} aria-label={inspect?'Exit orbit view':'Inspect scene in orbit view'} aria-pressed={inspect} on:click={()=>inspect=!inspect}>{inspect?'EXIT ORBIT':'ORBIT VIEW'}</button>{/if}{#if state.phase==='countdown'}<strong class="countdown">{Math.max(1,Math.ceil(state.countdown/60))}</strong>{/if}
</div>
<style>.scene{position:relative;width:min(92vw,72dvh);aspect-ratio:4/5;overflow:hidden;border:1px solid #253150;border-radius:1rem;box-shadow:0 0 40px #00c8ff18}.countdown{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);font:900 5rem/1 'Arial Black';color:#fff;text-shadow:0 0 25px #55ddff}.scene.compact{width:min(24vw,34dvh)}.lanes{position:absolute;inset:0;display:grid;grid-template-columns:repeat(5,1fr)}.lanes button{border:0;background:transparent;box-shadow:none;padding:0}.lanes button:hover{background:#55ddff12;transform:none}.inspect{position:absolute;z-index:4;right:.45rem;top:.45rem;padding:.35rem .45rem;font-size:.48rem;background:#080b12cc;color:#70eeff;border:1px solid #315979;box-shadow:none}.inspect:hover,.inspect.active{transform:none;background:#12344add}@media(max-width:700px){.scene{width:min(96vw,67dvh)}} </style>
