import{b as S_,s as Zi,a as ht,e as Al,f as It,c as Xr,o as M_}from"./BvecWQGK.js";import{i as Ts}from"./CCgSZpqL.js";import{g as w_,w as kr,o as Ec,r as T_,d as E_}from"./Dif_fZFQ.js";import{T as Om,U as A_,h as Mu,b as C_,be as R_,bf as Rf,aj as I_,as as If,aw as Pf,ar as Df,a as Lf,bg as P_,r as D_,p as An,s as me,aT as fn,z as zt,v as Ee,g as C,A as es,d as Cn,m as dt,f as en,j as kt,i as ut,t as rn,u as Ae,B as Wi,y as on,bh as Si,ah as yi,o as xs,bi as di,ai as Qt,bj as Cl,ak as nd,al as ps,k as mn,C as id,bk as L_}from"./DWjD4mox.js";import{B as Fm,p as Ze,i as Ln,r as co,s as sd,a as U_,b as Uf}from"./Cjd3aJcW.js";import{x as N_,A as ho,h as si,s as st,k as li,l as Nf,m as pe,y as Mt,p as Ue,z as Rl,n as wn,o as Tn,q as O_,v as F_,t as k_,B as ts,C as Of,D as ci,E as qr}from"./CM0gbOU0.js";import{s as B_}from"./CUFz9Wrf.js";import{L as z_,e as Pn,i as ai,b as rd,P as Rt,r as V_,a as ca,d as Ch,p as Rh,f as G_,h as Co,j as H_,T as km,k as wu,l as Bm,m as zm,n as Vm,o as W_,q as Ff,Q as Gm,t as X_,u as q_,v as $_,w as Y_,x as Z_,y as K_,z as j_,A as J_,B as Q_,D as ev,E as tv,S as Hm,F as Wm,G as nv,H as iv,I as sv,J as rv}from"./kpUgyBWe.js";import{b as Il}from"./Udk0kk5F.js";import{p as Xm}from"./D4Caz1gY.js";function Ac(i,e,...t){var n=new Fm(i);Om(()=>{const s=e()??null;n.ensure(s,s&&(r=>s(r,...t)))},A_)}const av=Symbol("NaN");function qm(i,e,t){Mu&&C_();var n=new Fm(i),s=!R_();Om(()=>{var r=e();r!==r&&(r=av),s&&r!==null&&typeof r=="object"&&(r={}),n.ensure(r,t)})}function Tu(i,e,t,n){var s=i[Rf];if(Mu||s!==e){var r=N_(e);(!Mu||r!==i.getAttribute("style"))&&(r==null?i.removeAttribute("style"):i.style.cssText=r),i[Rf]=e}return n}function ad(i,e){var t=Lf,n=Pf,s=i();const r=kr(s,a=>{var o=s!==i(),l,c=Pf,u=Lf;If(n),Df(t);try{l=P_(()=>{D_(()=>{const d=i();o&&a(d)})})}finally{If(c),Df(u)}return o=!0,l});return e?{set:e,update:a=>e(a(i())),subscribe:r.subscribe}:{subscribe:r.subscribe}}function Cc(i){let e;const t=S_(s=>{let r=!1;const a=i.subscribe(o=>{e=o,r&&s()});return r=!0,a});function n(){return I_()?(t(),e):w_(i)}return"set"in i?{get current(){return n()},set current(s){i.set(s)}}:{get current(){return n()}}}const ov=""+new URL("../assets/05. Chill.C8foJhTx.mp3",import.meta.url).href,lv=""+new URL("../assets/06. Chill Clear.-oz0izif.mp3",import.meta.url).href,cv=""+new URL("../assets/03. Fever.DOR2z6Jo.mp3",import.meta.url).href,hv=""+new URL("../assets/04. Fever Clear.DCfLhPTS.mp3",import.meta.url).href,kf=""+new URL("../assets/12. Combo Fanfare 1.CrabW0Of.mp3",import.meta.url).href;function ZR(i,e){An(e,!1);const t=dt(),n=dt();let s=Ze(e,"state",8),r=Ze(e,"enabled",8,!1),a=Ze(e,"rainSignal",8,0),o=dt(),l=dt(0),c=dt(0),u=dt();const d=h=>h%2?{music:cv,clear:hv}:{music:ov,clear:lv};Ec(()=>{const h=()=>{me(u,kf),fn(c)},f=p=>{me(u,d(p.detail).clear),fn(c)};return window.addEventListener("drm-rain",h),window.addEventListener("drm-clear",f),()=>{window.removeEventListener("drm-rain",h),window.removeEventListener("drm-clear",f)}}),zt(()=>Ee(s()),()=>{me(t,s()?.phase==="playing"?d(s().level).music:void 0)}),zt(()=>Ee(s()),()=>{me(n,s()?`pill:${s().level}`:"")}),zt(()=>(Ee(s()),Ee(a()),C(l),C(c),C(o)),()=>{s()&&(a()>C(l)?(me(u,kf),fn(c)):s().phase==="countdown"&&C(o)==="playing"&&(me(u,d(s().level).clear),fn(c)),me(l,a()),me(o,s().phase))}),es(),Ts(),ho(i,{get enabled(){return r()},get loopUrl(){return C(t)},get loopKey(){return C(n)},get cueUrl(){return C(u)},get cueSignal(){return C(c)}}),Cn()}var uv=It('<button class="svelte-e6s17f"> </button>'),dv=It('<small class="svelte-e6s17f"> </small>'),fv=It('<div class="match-result svelte-e6s17f" role="status" aria-live="polite"><h1 class="svelte-e6s17f"> </h1><!> <!> <!> <!></div>');function KR(i,e){An(e,!1);let t=Ze(e,"title",8,"GAME OVER"),n=Ze(e,"action",8,"PLAY AGAIN"),s=Ze(e,"ready",8,0),r=Ze(e,"total",8,0),a=Ze(e,"disabled",8,!1),o=Ze(e,"interactive",8,!0),l=Ze(e,"level",8,0),c=Ze(e,"changeLevel",8,()=>{}),u=Ze(e,"activate",8,()=>{});Ec(()=>{const w=M=>{!a()&&M.key.toLowerCase()==="a"&&!M.repeat&&(M.preventDefault(),u()())};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)}),Ts();var d=fv(),h=en(d),f=en(h,!0);kt(h);var p=ut(h);B_(p,e,"default",{});var _=ut(p,2);{var g=w=>{z_(w,{get level(){return l()},get disabled(){return a()},get change(){return c()},get activate(){return u()}})};Ln(_,w=>{o()&&w(g)})}var m=ut(_,2);{var v=w=>{var M=uv(),A=en(M,!0);kt(M),rn(()=>{M.disabled=a(),Zi(A,n())}),Al("click",M,function(...x){u()?.apply(this,x)}),ht(w,M)};Ln(m,w=>{o()&&w(v)})}var b=ut(m,2);{var y=w=>{var M=dv(),A=en(M);kt(M),rn(()=>Zi(A,`${s()??""}/${r()??""} ready`)),ht(w,M)};Ln(b,w=>{r()>0&&w(y)})}kt(d),rn(()=>Zi(f,t())),ht(i,d),Cn()}var pv=It('<li class="svelte-18574qx"><span class="rank svelte-18574qx"></span><strong class="svelte-18574qx"> </strong><b class="svelte-18574qx"> </b></li>'),mv=It('<section class="match-standings svelte-18574qx" aria-label="Final standings"><h2 class="svelte-18574qx">FINAL STANDINGS</h2> <ol class="svelte-18574qx"></ol></section>');function jR(i,e){let t=Ze(e,"entries",24,()=>[]);var n=mv(),s=ut(en(n),2);Pn(s,5,t,ai,(r,a,o)=>{var l=pv(),c=en(l);c.textContent=o+1;var u=ut(c),d=en(u,!0);kt(u);var h=ut(u),f=en(h,!0);kt(h),kt(l),rn(()=>{Zi(d,(C(a),Ae(()=>C(a).name))),Zi(f,(C(a),Ae(()=>C(a).score)))}),ht(r,l)}),kt(s),kt(n),ht(i,n)}function Eu(i){let e=i|0;return e^=e<<13,e^=e>>>17,e^=e<<5,e>>>0}function gv(i){return i>>>0||1}const Vt=8,Jn=16,dn=(i,e)=>i*Vt+e;function Ca(i){return i.rng=Eu(i.rng),i.rng/4294967296}function _v(i){const e=Eu(i.rng),t=Eu(e);return[e,t].map(n=>Rt.colors[Math.floor(n/4294967296*Rt.colors.length)])}function od(i){return{0:[[0,0],[0,1]],1:[[0,0],[-1,0]],2:[[0,1],[0,0]],3:[[-1,0],[0,0]]}[i.orientation].map(([t,n])=>[i.row+t,i.col+n])}function ld(i,e){return od(e).every(([t,n])=>t>=0&&t<Jn&&n>=0&&n<Vt&&!i.board[dn(t,n)])}function vv(i){for(let e=0;e<Jn;e++)for(let t=0;t<Vt;t++){const n=i[dn(e,t)];if(n&&(t<=Vt-4&&[1,2,3].every(s=>i[dn(e,t+s)]?.color===n.color)||e<=Jn-4&&[1,2,3].every(s=>i[dn(e+s,t)]?.color===n.color)))return!0}return!1}function $m(i){i.softDrop=!1;const e={id:i.nextId++,row:Rt.spawn.row,col:Rt.spawn.col,orientation:0,colors:[Rt.colors[Math.floor(Ca(i)*Rt.colors.length)],Rt.colors[Math.floor(Ca(i)*Rt.colors.length)]]};i.active=ld(i,e)?e:null,i.active||(i.phase="lost")}function yv(i){return Math.min(Rt.maxVirusCount,(i+1)*Rt.virusesPerLevel)}function xv(i){return Math.max(Rt.minimumGravityTicks,Rt.initialGravityTicks-i.level*Rt.gravityTicksPerLevel-Math.floor(i.pills/Rt.pillsPerSpeedIncrease))}function Ym(i){i.board.fill(null),i.active=null,i.pills=0,i.gravityCounter=0,i.viruses=yv(i.level),i.phase="playing",i.softDrop=!1,i.chain=0,i.resolving=!1,delete i.resolutionLineColors,delete i.pendingRain,delete i.fallingRain,delete i.rainGravityCounter,delete i.countdownEndsAt;let e=0,t=0;for(;e<i.viruses&&t++<1e5;){const n=Rt.virusRowStart+Math.floor(Ca(i)*(Rt.virusRowEnd-Rt.virusRowStart+1)),s=Math.floor(Ca(i)*Vt),r=dn(n,s);if(!i.board[r]){if(i.board[r]={kind:"virus",color:Rt.colors[Math.floor(Ca(i)*Rt.colors.length)],id:`l${i.level}v${e}`},vv(i.board)){i.board[r]=null;continue}e++}}i.viruses=e,$m(i)}function cd(i,e=0,t=0){const n={rulesVersion:rd,tick:0,level:t,pills:0,gravityCounter:0,board:Array(Vt*Jn).fill(null),active:null,rng:gv(i),nextId:1,viruses:0,phase:"playing",softDrop:!1,chain:0,resolving:!1};return Ym(n),n}function hd(i){const e=new Set,t=[];for(let s=0;s<Jn;s++)for(let r=0;r<Vt;r++){const a=i.board[dn(s,r)];if(a){if(r===0||i.board[dn(s,r-1)]?.color!==a.color){const o=[dn(s,r)];for(let l=r+1;l<Vt&&i.board[dn(s,l)]?.color===a.color;l++)o.push(dn(s,l));o.length>=4&&(o.forEach(l=>e.add(l)),t.push(a.color))}if(s===0||i.board[dn(s-1,r)]?.color!==a.color){const o=[dn(s,r)];for(let l=s+1;l<Jn&&i.board[dn(l,r)]?.color===a.color;l++)o.push(dn(l,r));o.length>=4&&(o.forEach(l=>e.add(l)),t.push(a.color))}}}const n=[];for(const s of[...e].sort((r,a)=>r-a))i.board[s]?.kind==="virus"&&(n.push(i.board[s].color),i.viruses--),i.board[s]=null;return e.size&&i.viruses===0&&(i.phase="countdown",i.countdownEndsAt=i.tick+Rt.levelCountdownTicks,i.active=null,i.softDrop=!1,i.resolving=!1),e.size>0?{lineColors:t}:void 0}function Au(i){const e=i.resolutionLineColors??[];return delete i.resolutionLineColors,e.length>0?[{type:"clear",tick:i.tick,chain:i.chain,lineColors:e}]:[]}function Rc(i){const e=i.pendingRain?.shift();if(i.pendingRain?.length===0&&delete i.pendingRain,!e){$m(i);return}const t=e.colors.map((n,s)=>({attackId:e.attackId,item:s,color:n,column:e.columns[s],row:0}));if(t.some(n=>i.board[dn(0,n.column)])){i.phase="lost",i.active=null,i.softDrop=!1;return}i.fallingRain=t,i.rainGravityCounter=0}function bv(i){const e=i.fallingRain;if(!e||(i.rainGravityCounter=(i.rainGravityCounter??0)+1,i.rainGravityCounter<Rt.rainGravityTicks))return;i.rainGravityCounter=0;const t=[];for(const s of e){const r=s.row+1;r>=Jn||i.board[dn(r,s.column)]?i.board[dn(s.row,s.column)]={kind:"pill",color:s.color,id:`g${s.attackId}-${s.item}x`}:t.push({...s,row:r})}if(t.length>0){i.fallingRain=t;return}delete i.fallingRain,delete i.rainGravityCounter,hd(i)?(i.chain=1,i.phase==="playing"&&(i.resolving=!0)):Rc(i)}function Sv(i){const e=new Map;i.board.forEach((c,u)=>{if(c?.kind!=="pill")return;const d=c.id.slice(0,-1),h=e.get(d)??[];h.push(u),e.set(d,h)});const t=[];for(const c of e.values())c.length===2&&Math.abs(Math.floor(c[0]/Vt)-Math.floor(c[1]/Vt))+Math.abs(c[0]%Vt-c[1]%Vt)===1?t.push(c):c.forEach(d=>t.push([d]));const n=new Map;t.forEach((c,u)=>c.forEach(d=>n.set(d,u)));const s=t.map((c,u)=>u).sort((c,u)=>Math.max(...t[u])-Math.max(...t[c])),r=new Set;let a=!0;for(;a;){a=!1;for(const c of s){if(r.has(c))continue;t[c].every(d=>{if(Math.floor(d/Vt)===Jn-1)return!1;const h=d+Vt,f=n.get(h);return f===c||!i.board[h]||f!==void 0&&r.has(f)})&&(r.add(c),a=!0)}}const o=[...r].flatMap(c=>t[c]),l=o.map(c=>({from:c,to:c+Vt,cell:i.board[c]}));return l.forEach(({from:c})=>{i.board[c]=null}),l.forEach(({to:c,cell:u})=>{i.board[c]=u}),o.length>0}function Zm(i){if(!i.active)return[];const e=i.active;od(e).forEach(([n,s],r)=>{i.board[dn(n,s)]={kind:"pill",color:e.colors[r],id:`p${e.id}${r}`}}),i.active=null,i.pills++,i.gravityCounter=0,i.chain=0;const t=hd(i);return t?(i.resolutionLineColors=[...t.lineColors],i.chain=1,i.phase==="playing"&&(i.resolving=!0)):Rc(i),t&&!i.resolving?Au(i):[]}function Cu(i,e,t){if(!i.active)return!1;const n={...i.active,row:i.active.row+e,col:i.active.col+t};return ld(i,n)?(i.active=n,delete i.active.groundedAt,!0):!1}function Mv(i,e){i.phase==="playing"&&(i.pendingRain=[...i.pendingRain??[],{attackId:e.payload.attackId,colors:[...e.payload.colors],columns:[...e.payload.columns]}],!i.active&&!i.resolving&&!i.fallingRain&&Rc(i))}function $r(i,e){if(e.type==="attack/rain")return Mv(i,e),[];if(i.phase!=="playing"||!i.active)return[];if(e.type==="input/move")Cu(i,0,e.payload.dx);else if(e.type==="input/rotate"){const t=i.active.orientation%2===1,n=e.payload.direction==="clockwise"?1:3,s=(i.active.orientation+n)%4,r=[{...i.active,orientation:s}];t?r.push({...i.active,col:i.active.col-1,orientation:s}):r.push({...i.active,col:i.active.col+1,orientation:s},{...i.active,col:i.active.col-1,orientation:s});const a=r.find(o=>ld(i,o));a&&(i.active=a,delete i.active.groundedAt)}else if(e.type==="input/soft-drop-start")i.softDrop=!0;else if(e.type==="input/soft-drop-end")i.softDrop=!1;else if(e.type==="input/hard-drop"&&Rt.hardDrop){for(;Cu(i,1,0););return Zm(i)}return[]}function ud(i){if(i.phase==="lost")return[];if(i.tick++,i.phase==="countdown")return i.countdownEndsAt!==void 0&&i.tick>=i.countdownEndsAt&&(i.level++,Ym(i)),[];if(i.resolving){if(i.tick%Rt.resolutionGravityTicks!==0)return[];if(Sv(i))return[];const t=hd(i);return t?(i.resolutionLineColors&&(i.resolutionLineColors=[...i.resolutionLineColors,...t.lineColors]),i.chain++,i.resolving?[]:Au(i)):(i.resolving=!1,Rc(i),Au(i))}if(i.fallingRain)return bv(i),[];if(!i.active)return[];const e=i.softDrop?Rt.softDropTicks:xv(i);return i.gravityCounter++,i.gravityCounter>=e&&(i.gravityCounter=0,Cu(i,1,0)||(i.active.groundedAt??=i.tick)),i.active?.groundedAt!==void 0&&i.tick-i.active.groundedAt>=Rt.lockDelayTicks?Zm(i):[]}function wv(i){return i.active?od(i.active).map(([e,t],n)=>({row:e,col:t,cell:{kind:"pill",color:i.active.colors[n],id:`a${i.active.id}${n}`}})):[]}function Tv(i){return(i.fallingRain??[]).map(e=>({row:e.row,col:e.column,cell:{kind:"pill",color:e.color,id:`g${e.attackId}-${e.item}x`}}))}const Ev=2,Av=4;function Cv(i){return i.lineColors.length>=Ev?i.lineColors.slice(0,Av):[]}function Rv(i){let e=2166136261;for(const t of i)e^=t.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0}function Iv(i,e){const t=Array.from({length:Vt},(s,r)=>r);let n=Rv(i);for(let s=t.length-1;s>0;s--){n=Math.imul(n,1664525)+1013904223>>>0;const r=n%(s+1);[t[s],t[r]]=[t[r],t[s]]}return t.slice(0,Math.min(e,Vt))}function Km(i,e,t,n,s){const r=e.filter(({playerId:p})=>i.includes(p)),a=Object.fromEntries(r.map(({playerId:p,result:_})=>[p,_])),o=Object.fromEntries(r.map(({playerId:p,tick:_})=>[p,_])),l=Object.keys(a),c=new Set(l),u=t.filter(p=>i.includes(p)),d=i.length===1?c.size===1:c.size>=i.length-1,h=i.filter(p=>!c.has(p)),f=d&&h.length===1?h[0]:void 0;return{playerIds:i,terminalPlayerIds:l,readyPlayerIds:u,finished:d,winnerId:f,draw:d&&i.length>1&&f===void 0,allReady:d&&i.every(p=>u.includes(p)),terminalResults:a,terminalTicks:o,round:n,matchComplete:d&&(i.length===1||n+1>=s),roundPoints:Object.fromEntries(i.map(p=>[p,0])),scores:Object.fromEntries(i.map(p=>[p,0]))}}function Pv(i,e,t){const n=Math.min(e,t??e);return i.reduce((s,r)=>r.tick<=n?Math.max(s,r.tick):s,0)}function jm(i,e,t,n=0){return Km(i,e,t,n,Rt.matchRounds)}function dd(i,e,t){if(!Number.isInteger(e)||e<i.tick)throw new Error("Target tick must not precede the current state.");const n=new Map;for(const a of t){const o=n.get(a.commandId);if(o&&JSON.stringify(o)!==JSON.stringify(a))throw new Error(`Conflicting replay command identity: ${a.commandId}`);n.set(a.commandId,a)}const s=[...n.values()].sort((a,o)=>a.tick-o.tick||a.clientSeq-o.clientSeq||a.commandId.localeCompare(o.commandId));let r=0;for(;r<s.length&&s[r].tick<i.tick;)r++;for(;i.tick<=e;){for(;r<s.length&&s[r].tick===i.tick;)$r(i,s[r].input),r++;if(i.tick===e)break;const a=i.tick;if(ud(i),i.tick===a)break}return i}function Ic(i){return{rulesVersion:i.rulesVersion,tick:i.tick,level:i.level,pills:i.pills,gravityCounter:i.gravityCounter,...i.countdownEndsAt===void 0?{}:{countdownEndsAt:i.countdownEndsAt},board:i.board.map(e=>e?{...e}:null),active:i.active?{...i.active,colors:[...i.active.colors]}:null,rng:i.rng,nextId:i.nextId,viruses:i.viruses,phase:i.phase,softDrop:i.softDrop,chain:i.chain,resolving:i.resolving,...i.resolutionLineColors?.length?{resolutionLineColors:[...i.resolutionLineColors]}:{},...i.pendingRain?.length?{pendingRain:i.pendingRain.map(e=>({attackId:e.attackId,colors:[...e.colors],columns:[...e.columns]}))}:{},...i.fallingRain?.length?{fallingRain:i.fallingRain.map(e=>({...e}))}:{},...i.rainGravityCounter===void 0?{}:{rainGravityCounter:i.rainGravityCounter}}}const uo=["cyan","pink","yellow"],un=(i,e=0)=>Number.isInteger(i)&&i>=e,fo=(i,e)=>Object.keys(i).every(t=>e.includes(t)),Dv=i=>{if(!i||typeof i!="object")return!1;const e=i;return fo(e,["kind","color","id"])&&(e.kind==="virus"||e.kind==="pill")&&uo.includes(e.color)&&typeof e.id=="string"&&e.id.length>0&&e.id.length<=160},Lv=i=>{if(!i||typeof i!="object")return!1;const e=i;return fo(e,["id","row","col","orientation","colors","groundedAt"])&&un(e.id,1)&&un(e.row)&&un(e.col)&&[0,1,2,3].includes(e.orientation)&&Array.isArray(e.colors)&&e.colors.length===2&&e.colors.every(t=>uo.includes(t))&&(e.groundedAt===void 0||un(e.groundedAt))},Uv=i=>{if(!i||typeof i!="object")return!1;const e=i;return fo(e,["attackId","colors","columns"])&&typeof e.attackId=="string"&&e.attackId.length<=128&&Array.isArray(e.colors)&&e.colors.length>=2&&e.colors.length<=4&&e.colors.every(t=>uo.includes(t))&&Array.isArray(e.columns)&&e.columns.length===e.colors.length&&e.columns.every(t=>un(t)&&t<Vt)&&new Set(e.columns).size===e.columns.length},Nv=i=>{if(!i||typeof i!="object")return!1;const e=i;return fo(e,["attackId","item","color","column","row"])&&typeof e.attackId=="string"&&e.attackId.length<=128&&un(e.item)&&e.item<4&&uo.includes(e.color)&&un(e.column)&&e.column<Vt&&un(e.row)&&e.row<Jn};function Ov(i){if(!i||typeof i!="object")throw new Error("Invalid serialized bottle state.");const e=i;if(!fo(e,["rulesVersion","tick","level","pills","gravityCounter","countdownEndsAt","board","active","rng","nextId","viruses","phase","softDrop","chain","resolving","resolutionLineColors","pendingRain","fallingRain","rainGravityCounter"])||e.rulesVersion!==rd||!un(e.tick)||!un(e.level)||!un(e.pills)||!un(e.gravityCounter)||e.countdownEndsAt!==void 0&&(!un(e.countdownEndsAt)||e.countdownEndsAt<e.tick)||!Array.isArray(e.board)||e.board.length!==Vt*Jn||!e.board.every(t=>t===null||Dv(t))||e.active!==null&&!Lv(e.active)||!un(e.rng)||e.rng>4294967295||!un(e.nextId,1)||!un(e.viruses)||e.viruses>80||!["playing","countdown","lost"].includes(e.phase)||e.phase==="countdown"!=(e.countdownEndsAt!==void 0)||typeof e.softDrop!="boolean"||!un(e.chain)||typeof e.resolving!="boolean"||e.resolutionLineColors!==void 0&&(!Array.isArray(e.resolutionLineColors)||!e.resolutionLineColors.every(t=>uo.includes(t)))||e.pendingRain!==void 0&&(!Array.isArray(e.pendingRain)||!e.pendingRain.every(Uv))||e.fallingRain!==void 0&&(!Array.isArray(e.fallingRain)||e.fallingRain.length<1||e.fallingRain.length>4||!e.fallingRain.every(Nv))||e.rainGravityCounter!==void 0&&(!un(e.rainGravityCounter)||e.rainGravityCounter>=Rt.rainGravityTicks)||e.fallingRain===void 0!=(e.rainGravityCounter===void 0))throw new Error("Invalid serialized bottle state.");return e}function fd(i){return Ic(Ov(i))}function Va(i){const e=JSON.stringify(Ic(i));let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return`pb3-${(t>>>0).toString(16).padStart(8,"0")}`}class Pc{adapter;displayTick;state;checkpoint;pending=new Map;identities=new Map;controllerTick;reportedStateHash;hashMatches=!0;constructor(e,t,n=0){this.adapter=e,this.displayTick=n,this.state=e.clone(t),this.checkpoint={clientSeq:0,tick:e.tick(t),state:e.clone(t)},e.advanceTo(this.state,n)}receive(e){const t=JSON.stringify(e),n=this.identities.get(e.commandId);if(n&&n!==t)throw new Error(`Conflicting controller record identity: ${e.commandId}`);if(n||(this.identities.set(e.commandId,t),e.clientSeq<=this.checkpoint.clientSeq))return;const s=this.pending.get(e.clientSeq);if(s&&JSON.stringify(s)!==t)throw new Error(`Conflicting controller sequence: ${e.clientSeq}`);this.pending.set(e.clientSeq,e),this.adapter.progress(e)&&(this.controllerTick===void 0||e.tick>=this.controllerTick)&&(this.controllerTick=e.tick),this.processAvailable()}advance(){this.displayTick++,this.adapter.advanceTo(this.state,this.displayTick),this.processAvailable()}snapshot(){return{displayTick:this.displayTick,controllerTick:this.controllerTick,lag:this.controllerTick===void 0?void 0:this.displayTick-this.controllerTick,state:this.adapter.clone(this.state),stateHash:this.adapter.hash(this.state),reportedStateHash:this.reportedStateHash,hashMatches:this.hashMatches}}processAvailable(){for(;;){const e=this.pending.get(this.checkpoint.clientSeq+1);if(!e||e.tick>this.displayTick)return;if(e.tick<this.checkpoint.tick)throw new Error("Controller record tick precedes its checkpoint.");const t=this.adapter.clone(this.checkpoint.state);if(this.adapter.advanceTo(t,e.tick),this.adapter.tick(t)!==e.tick){if(!this.adapter.terminal?.(t))throw new Error("Controller record could not reach its declared tick.");const s=this.adapter.progress(e);s&&(this.reportedStateHash=s.stateHash,this.hashMatches=!1),this.checkpoint={clientSeq:e.clientSeq,tick:this.adapter.tick(t),state:this.adapter.clone(t)},this.pending.delete(e.clientSeq),this.state=t;continue}const n=this.adapter.progress(e);n?(this.reportedStateHash=n.stateHash,this.hashMatches=this.adapter.hash(t)===n.stateHash&&this.adapter.phase(t)===n.phase):this.adapter.apply(t,e),this.checkpoint={clientSeq:e.clientSeq,tick:e.tick,state:this.adapter.clone(t)},this.pending.delete(e.clientSeq),this.adapter.advanceTo(t,this.displayTick),this.state=t}}}function Fv(i,e){for(;i.tick<e&&i.phase!=="lost";)ud(i)}class kv extends Pc{constructor(e,t=0){super({clone:n=>fd(Ic(n)),tick:n=>n.tick,advanceTo:Fv,apply:(n,s)=>{s.type!=="progress/tick"&&$r(n,s)},hash:Va,phase:n=>n.phase,terminal:n=>n.phase==="lost",progress:n=>n.type==="progress/tick"?n.payload:void 0},e,t)}}function Bv(i,e){dd(i,e.tick,[]),e.type!=="progress/tick"&&$r(i,e)}function Bf(i,e,t,n,s){const r=i.players[e];if(!r)return 0;const a=Pv(t,n,s),o=cd(i.seed,r.seat,r.level);for(const l of t){if(l.tick>a)break;Bv(o,l)}return o.tick<a&&o.phase!=="lost"&&dd(o,a,[]),o.viruses}function Jm(i,e,t){const n=Object.fromEntries(e.playerIds.map(r=>[r,0])),s=e.playerIds.filter(r=>e.terminalResults[r]==="cleared");for(const r of s){const a=e.terminalTicks[r];for(const o of e.playerIds)o!==r&&(n[r]+=Bf(i,o,t.get(o)??[],a,e.terminalTicks[o]))}if(s.length===0&&e.finished&&e.winnerId)for(const r of e.terminalPlayerIds){if(e.terminalResults[r]!=="lost")continue;const a=e.terminalTicks[r];n[e.winnerId]+=Bf(i,r,t.get(r)??[],a,a)}return n}var zv=It('<canvas class="preview-pill svelte-1jw6p41" width="40" height="20"></canvas>'),Vv=It('<div class="next-pill svelte-1jw6p41"><!></div>'),Gv=It('<div class="bottle-shell svelte-1jw6p41"><!> <canvas width="184" height="360"></canvas></div>');function JR(i,e){An(e,!1);const t=dt();let n=Ze(e,"state",8),s=Ze(e,"label",8,"Pill bottle"),r=Ze(e,"showPreview",8,!0),a=dt(),o=dt(),l="",c=dt(""),u="",d;const h=10,f=6,p=11,_=2,g={cyan:"#39d9e6",pink:"#ff4f91",yellow:"#ffd84a"};function m(L){return L.kind==="pill"?L.id.slice(0,-1):""}function v(L,F){const k=f+F.col*h,U=p+F.row*h;L.fillStyle="#08090d",L.beginPath(),L.roundRect(k+.25,U+1.25,9.5,7,3),L.fill(),L.fillRect(k+2,U+.25,2.25,2.5),L.fillRect(k+5.75,U+.25,2.25,2.5),L.fillRect(k+1.25,U+7,2.75,2.5),L.fillRect(k+6,U+7,2.75,2.5),L.fillStyle=g[F.color],L.beginPath(),L.roundRect(k+1.25,U+2,7.5,5.5,2),L.fill(),L.fillRect(k+2.75,U+1,1.25,2),L.fillRect(k+6,U+1,1.25,2),L.fillRect(k+2,U+7,1.5,1.5),L.fillRect(k+6.5,U+7,1.5,1.5),L.fillStyle="rgba(255,255,255,.34)",L.fillRect(k+2,U+2.25,5.75,.75),L.fillStyle="#08090d",L.fillRect(k+2.5,U+4,1.5,1.75),L.fillRect(k+6,U+4,1.5,1.75),L.fillRect(k+4.25,U+6.25,1.5,.75)}function b(L,F,k){return L===1?[k,0,0,k]:L===-1?[0,k,k,0]:F===1?[k,k,0,0]:F===-1?[0,0,k,k]:k}function y(L,F,k,U=f,O=p){const G=k.find(ue=>ue!==F&&m(ue)===m(F)),W=G?.col===F.col?0:(G?.col??F.col)-F.col,se=G?.row===F.row?0:(G?.row??F.row)-F.row,J=U+F.col*h,te=O+F.row*h,Ce=b(W,se,4);L.fillStyle="#08090d",L.beginPath(),L.roundRect(J,te,10,10,Ce),L.fill();const ct=J+(W===-1?0:1.25),at=te+(se===-1?0:1.25),ee=W===0?7.5:8.75,_e=se===0?7.5:8.75;L.fillStyle=g[F.color],L.beginPath(),L.roundRect(ct,at,ee,_e,b(W,se,3)),L.fill(),L.save(),L.beginPath(),L.roundRect(ct,at,ee,_e,b(W,se,3)),L.clip(),se!==-1&&(L.fillStyle="rgba(255,255,255,.38)",L.fillRect(J+(W===-1?0:1.75),te+1.75,W===0?6.5:8.25,1.25)),se!==1&&(L.fillStyle="rgba(0,0,0,.28)",L.fillRect(J+(W===-1?0:1.75),te+7.25,W===0?6.5:8.25,1.25)),L.restore(),L.fillStyle="#08090d",W===1&&L.fillRect(J+9.75,te+1.25,.5,7.5),se===1&&L.fillRect(J+1.25,te+9.75,7.5,.5)}function w(){if(!C(o)||n().phase!=="playing")return;const L=C(o).getContext("2d");if(!L)return;L.setTransform(1,0,0,1,0,0),L.clearRect(0,0,C(o).width,C(o).height),L.setTransform(_,0,0,_,0,0);const F=[{id:"previewa",kind:"pill",color:C(t)[0],row:0,col:0},{id:"previewb",kind:"pill",color:C(t)[1],row:0,col:1}];for(const k of F)y(L,k,F,0,0)}function M(){if(!C(a))return;const L=`${n().phase}|${n().board.map(U=>U?`${U.id}:${U.color}`:"").join(",")}|${n().active?`${n().active.id}:${n().active.row}:${n().active.col}:${n().active.orientation}:${n().active.colors.join(":")}`:""}|${n().fallingRain?.map(U=>`${U.attackId}:${U.item}:${U.row}`).join(",")??""}`;if(L===l)return;l=L;const F=C(a).getContext("2d");if(!F)return;F.setTransform(1,0,0,1,0,0),F.clearRect(0,0,C(a).width,C(a).height),F.setTransform(_,0,0,_,0,0),F.imageSmoothingEnabled=!0,F.fillStyle="#606477",F.fillRect(26,0,40,3),F.fillRect(26,0,3,11),F.fillRect(63,0,3,11),F.fillRect(3,8,86,169),F.fillStyle="#08090d",F.fillRect(6,11,80,163),F.fillStyle="#050609",F.fillRect(89,13,3,164),F.fillRect(8,177,84,3),F.fillStyle="#0d0f14";for(let U=1;U<Vt;U++)F.fillRect(f+U*h,p,.35,Jn*h);for(let U=1;U<Jn;U++)F.fillRect(f,p+U*h,Vt*h,.35);const k=[];n().board.forEach((U,O)=>{U&&k.push({...U,row:Math.floor(O/Vt),col:O%Vt})});for(const U of wv(n()))k.push({...U.cell,row:U.row,col:U.col});for(const U of Tv(n()))k.push({...U.cell,row:U.row,col:U.col});for(const U of k)U.kind==="virus"?v(F,U):y(F,U,k);w()}function A(){if(!C(a))return;const L=n().board.filter(W=>W?.id.startsWith("g")).length,F=`${n().viruses}:${n().pills}:${n().phase}:${L}`;if(!u){u=F;return}if(F===u)return;const[k,U,O,G]=u.split(":");u=F,me(c,L>Number(G)?"rain":n().viruses<Number(k)?"clear":n().phase!==O?"finish":n().pills>Number(U)?"lock":""),C(c)&&(d&&clearTimeout(d),d=setTimeout(()=>me(c,""),420))}Ec(()=>(M(),A(),()=>{d&&clearTimeout(d)})),zt(()=>Ee(n()),()=>{me(t,_v(n()))}),zt(()=>Ee(n()),()=>{n(),M(),A()}),es(),Ts();var x=Gv(),T=en(x);{var R=L=>{var F=Vv(),k=en(F);{var U=O=>{var G=zv();Il(G,W=>me(o,W),()=>C(o)),ht(O,G)};Ln(k,O=>{Ee(n()),Ae(()=>n().phase==="playing")&&O(U)})}kt(F),rn(()=>{st(F,"aria-label",(C(t),Ae(()=>`Next pill: ${C(t)[0]} and ${C(t)[1]}`))),st(F,"aria-hidden",(Ee(n()),Ae(()=>n().phase!=="playing")))}),ht(L,F)};Ln(T,L=>{r()&&L(R)})}var I=ut(T,2);let B;Il(I,L=>me(a,L),()=>C(a)),kt(x),rn((L,F,k)=>{B=si(I,1,"bottle svelte-1jw6p41",null,B,{clear:C(c)==="clear",lock:C(c)==="lock",finish:C(c)==="finish",rain:C(c)==="rain"}),st(I,"aria-label",s()),st(I,"data-cell-count",Vt*Jn),st(I,"data-virus-count",(Ee(n()),Ae(()=>n().viruses))),st(I,"data-next-colors",L),st(I,"data-active-pill",(Ee(n()),Ae(()=>n().active?"true":"false"))),st(I,"data-active-pill-id",(Ee(n()),Ae(()=>n().active?.id??""))),st(I,"data-pending-rain-count",(Ee(n()),Ae(()=>n().pendingRain?.length??0))),st(I,"data-rain-rows",F),st(I,"data-garbage-count",k)},[()=>(C(t),Ae(()=>C(t).join(","))),()=>(Ee(n()),Ae(()=>n().fallingRain?.map(L=>L.row).join(",")??"")),()=>(Ee(n()),Ae(()=>n().board.filter(L=>L?.id.startsWith("g")).length))]),ht(i,x),Cn()}class Es{lastTime;accumulator=0;tickRate;maximumCatchUpMs;constructor(e,t=250){if(!Number.isFinite(e)||e<=0)throw new Error("Tick rate must be positive.");this.tickRate=e,this.maximumCatchUpMs=t}consume(e){if(this.lastTime===void 0)return this.lastTime=e,0;this.accumulator+=Math.min(Math.max(0,e-this.lastTime),this.maximumCatchUpMs),this.lastTime=e;const t=1e3/this.tickRate,n=Math.floor(this.accumulator/t);return this.accumulator-=n*t,n}reset(){this.lastTime=void 0,this.accumulator=0}}async function Dc(i,e){if(!li?.currentUser||!pe)throw new Error("Firebase is unavailable.");const t=li.currentUser.uid,n=Ue(pe,`games/${i}/rematch/ready/${t}`);if(!Number.isInteger(e)||e<0||e>20)throw new Error("Level must be between 0 and 20.");(await Mt(n)).exists()||await wn(n,{playerId:t,level:e,serverTime:Tn()})}async function Lc(i,e,t){if(!li?.currentUser||!Nf||!pe)throw new Error("Firebase is unavailable.");const n=await Mt(Ue(pe,`games/${i}/start`));if(!n.exists())throw new Error("The previous game no longer exists.");const s=e(n.val());if(!s.players[li.currentUser.uid])return;const r=await Mt(Ue(pe,`games/${i}/rematch/ready`)),a=new Map;if(r.forEach(f=>{const p=f.val();p?.playerId===f.key&&Number.isInteger(p.level)&&a.set(p.playerId,p.level)}),!Object.keys(s.players).every(f=>a.has(f)))return;const o=crypto.randomUUID(),l=Ue(pe,`games/${i}/rematch/nextGameId`),c=await Rl(l,f=>f===null?o:void 0,{applyLocally:!1}),u=c.committed?c.snapshot.val():(await Mt(l)).val();if(typeof u!="string")throw new Error("Could not reserve the rematch.");const d=t(s),h=Ue(pe,`games/${u}/start`);try{await wn(h,{type:"game/started",roomId:s.roomId,ruleset:s.ruleset,rulesVersion:s.rulesVersion,seed:V_(),tickRate:s.tickRate,hostUid:s.hostUid,members:s.members,players:Object.fromEntries(Object.entries(s.players).map(([f,p])=>[f,{...p,level:s.ruleset==="quarry-match"?Math.max(...a.values()):a.get(f)}])),settings:d.settings??s.settings,audioOutput:s.audioOutput,...d.scores??s.scores?{scores:d.scores??s.scores}:{},matchId:d.advance?s.matchId:u,round:d.advance?s.round+1:0,previousGameId:i,serverTime:Tn()})}catch(f){const p=await Mt(h).catch(()=>{});if(!p?.exists()||e(p.val()).roomId!==s.roomId)throw f}return await O_(F_(Nf,"rooms",s.roomId),{status:"active",activeGameId:u,startedAt:k_()}),u}function Hv(i,e,t,n,s,r=!1){let a=!1,o=()=>{};return(async()=>{try{const l=Ue(i,`games/${e}/interactions`),c=await Mt(l),u=new Set;if(r||c.forEach(d=>{u.add(d.key)}),a)return;o=ts(l,d=>{try{const h=t(d.val());u.delete(d.key)||n(h,d.key)}catch(h){s(h instanceof Error?h:new Error(String(h)))}},s)}catch(l){s(l instanceof Error?l:new Error(String(l)))}})(),()=>{a=!0,o()}}function Wv(i=globalThis.localStorage){const e=crypto.randomUUID();try{const t=i?.getItem("drm-client-id");if(t)return t;i?.setItem("drm-client-id",e)}catch{}return e}class Uc{epochId=crypto.randomUUID();clientId=Wv();owned=!1;unsubscribe=()=>{};database;path;lost;constructor(e,t,n){this.database=e,this.path=t,this.lost=n}async claim(e=!1){const t=Ue(this.database,this.path),n=await Rl(t,s=>e||s===null||s?.epochId===this.epochId?{epochId:this.epochId,clientId:this.clientId}:void 0,{applyLocally:!1});return this.owned=n.committed&&n.snapshot.val()?.epochId===this.epochId,this.owned?(await Of(t).remove(),this.unsubscribe(),this.unsubscribe=ci(t,s=>{this.owned&&s.val()?.epochId!==this.epochId&&(this.owned=!1,this.lost())}),!0):!1}async takeOver(){return this.claim(!0)}async release(){this.unsubscribe();const e=Ue(this.database,this.path);await Of(e).cancel(),await Rl(e,t=>t?.epochId===this.epochId?null:t,{applyLocally:!1}),this.owned=!1}async suspend(){this.owned&&(await wn(Ue(this.database,this.path),null),this.owned=!1)}get ownsWriter(){return this.owned}}class Ga{options;items;flushing=!1;retry;destroyed=!1;constructor(e){this.options=e,this.items=[...e.initial].sort(e.order)}enqueue(e){this.items.some(t=>this.options.identify(t)===this.options.identify(e))||(this.items=[...this.items,e].sort(this.options.order),this.options.persist(this.items),this.flush())}async flush(){if(!(this.flushing||this.destroyed)){this.flushing=!0;try{for(;this.items.length&&!this.destroyed;){const e=this.items[0];await this.options.deliver(e);const t=this.options.identify(e);this.items=this.items.filter(n=>this.options.identify(n)!==t),this.options.persist(this.items)}}catch(e){this.options.failed?.(e),!this.retry&&!this.destroyed&&(this.retry=setTimeout(()=>{this.retry=void 0,this.flush()},this.options.retryMilliseconds??1e3))}finally{this.flushing=!1}}}values(){return[...this.items]}destroy(){this.destroyed=!0,this.retry&&clearTimeout(this.retry)}}const St=i=>!!i&&typeof i=="object"&&!Array.isArray(i),bt=(i,e)=>Object.keys(i).every(t=>e.includes(t)),Ct=(i,e=0,t=1e9)=>Number.isInteger(i)&&i>=e&&i<=t,yt=(i,e=128)=>typeof i=="string"&&i.length>0&&i.length<=e,Ni=i=>typeof i=="number"&&Number.isFinite(i)&&i>=0;function pd(i,e,t=!1){const n=t?["type","playerId","epochId","clientSeq","tick","payload"]:["type","playerId","epochId","clientSeq","tick","payload","serverTime"];if(!St(e)||!bt(e,n)||!yt(i)||!yt(e.playerId)||!yt(e.epochId)||!Ct(e.clientSeq,1)||!Ct(e.tick)||!t&&!Ni(e.serverTime))throw new Error("Invalid controller record envelope.");return e}function Xv(i,e){const t=St(e)?e:{};if(i==="input/move"&&bt(t,["dx"])&&(t.dx===-1||t.dx===1))return{type:i,payload:{dx:t.dx}};if(i==="input/rotate"&&bt(t,["direction"])&&(t.direction==="clockwise"||t.direction==="counterclockwise"))return{type:i,payload:{direction:t.direction}};if((i==="input/soft-drop-start"||i==="input/soft-drop-end"||i==="input/hard-drop")&&bt(t,[]))return{type:i,payload:{}};throw new Error("Invalid pill command input.")}function po(i){if(!St(i)||!bt(i,["type","roomId","ruleset","rulesVersion","seed","tickRate","hostUid","audioOutput","members","players","settings","matchId","round","previousGameId","serverTime"])||i.type!=="game/started"||i.ruleset!=="pill-bottle"||i.rulesVersion!==rd||i.tickRate!==Rt.tickRate||!yt(i.roomId)||!yt(i.hostUid)||i.audioOutput!==void 0&&i.audioOutput!=="cast"&&i.audioOutput!=="controllers"||i.matchId!==void 0&&!yt(i.matchId)||i.round!==void 0&&!Ct(i.round,0,Rt.matchRounds-1)||i.previousGameId!==void 0&&!yt(i.previousGameId)||!Ct(i.seed,0,4294967295)||!Ni(i.serverTime)||!St(i.members)||!St(i.players)||!St(i.settings))throw new Error("Invalid pill-bottle/3 start record.");const e=i.members,t=Object.entries(e),n=Object.entries(i.players),s=n.map(([,a])=>St(a)?a.seat:void 0),r=i.settings;if(t.length<1||t.length>4||!t.every(([a,o])=>yt(a)&&o===!0)||e[i.hostUid]!==!0||n.length<1||n.length>4||!n.every(([a,o])=>yt(a)&&St(o)&&bt(o,["seat","level"])&&Ct(o.seat,0,3)&&Ct(o.level,0,20)&&e[a]===!0)||new Set(s).size!==s.length||!bt(r,["initialVirusCount","initialGravityTicks","hardDrop","matchRounds"])||r.initialVirusCount!==ca.initialVirusCount||r.initialGravityTicks!==ca.initialGravityTicks||r.hardDrop!==ca.hardDrop||r.matchRounds!==void 0&&r.matchRounds!==ca.matchRounds)throw new Error("Invalid pill-bottle/3 start definition.");return{...i,audioOutput:i.audioOutput??"controllers",settings:{...r,matchRounds:ca.matchRounds},matchId:i.matchId??i.roomId,round:i.round??0}}function tr(i,e,t={}){const n=t.pending?["type","playerId","epochId","clientSeq","tick","payload"]:["type","playerId","epochId","clientSeq","tick","payload","serverTime"];if(!St(e)||!bt(e,n)||!yt(i)||!yt(e.playerId)||!yt(e.epochId)||!Ct(e.clientSeq,1)||!Ct(e.tick)||!t.pending&&!Ni(e.serverTime))throw new Error("Invalid pill controller record.");const s={commandId:i,playerId:e.playerId,epochId:e.epochId,clientSeq:e.clientSeq,tick:e.tick};if(e.type==="attack/rain"){if(!St(e.payload)||!bt(e.payload,["attackId","colors","columns"])||!yt(e.payload.attackId)||!Array.isArray(e.payload.colors)||!Array.isArray(e.payload.columns)||e.payload.colors.length<2||e.payload.colors.length>4||e.payload.colors.length!==e.payload.columns.length||!e.payload.colors.every(a=>["cyan","pink","yellow"].includes(a))||!e.payload.columns.every(a=>Ct(a,0,7))||new Set(e.payload.columns).size!==e.payload.columns.length)throw new Error("Invalid pill rain attack.");return{...s,type:e.type,payload:e.payload,...t.pending?{}:{serverTime:e.serverTime}}}if(e.type==="progress/tick"){if(!St(e.payload)||!bt(e.payload,["phase","stateHash"])||!["playing","countdown","lost"].includes(e.payload.phase)||typeof e.payload.stateHash!="string"||!/^pb3-[0-9a-f]{8}$/.test(e.payload.stateHash))throw new Error("Invalid pill progress command.");return{...s,type:e.type,payload:{phase:e.payload.phase,stateHash:e.payload.stateHash},...t.pending?{}:{serverTime:e.serverTime}}}const r=Xv(e.type,e.payload);return{...s,...r,...t.pending?{}:{serverTime:e.serverTime}}}function Qm(i){if(!St(i)||!bt(i,["type","playerId","tick","result","stateHash","serverTime"])||i.type!=="player/terminal"||!yt(i.playerId)||!Ct(i.tick)||!["cleared","lost"].includes(i.result)||typeof i.stateHash!="string"||!/^pb3-[0-9a-f]{8}$/.test(i.stateHash)||!Ni(i.serverTime))throw new Error("Invalid pill terminal declaration.");return i}function qv(i){if(!St(i)||!bt(i,["playerId","level","serverTime"])||!yt(i.playerId)||!Ct(i.level,0,20)||!Ni(i.serverTime))throw new Error("Invalid pill rematch readiness.");return i}function md(i){if(!St(i)||!bt(i,["type","attackId","sourcePlayerId","sourceTick","sourceChain","targetPlayerIds","colors","serverTime"])||i.type!=="attack/generated"||!yt(i.attackId)||!yt(i.sourcePlayerId)||!Ct(i.sourceTick)||!Ct(i.sourceChain,1,100)||!Array.isArray(i.targetPlayerIds)||i.targetPlayerIds.length<1||i.targetPlayerIds.length>3||!i.targetPlayerIds.every(e=>yt(e))||new Set(i.targetPlayerIds).size!==i.targetPlayerIds.length||!Array.isArray(i.colors)||i.colors.length<2||i.colors.length>4||!i.colors.every(e=>["cyan","pink","yellow"].includes(e))||!Ni(i.serverTime))throw new Error("Invalid pill attack interaction.");return i}function mo(i,e,t){try{const n=JSON.parse(i.getItem(e)??"[]");return Array.isArray(n)?n.map(t):[]}catch{return[]}}function go(i,e,t){i.setItem(e,JSON.stringify(t))}function $v(i,e,t){try{const n=JSON.parse(i.getItem(e)??"null");return n===null?void 0:t(n)}catch{return}}function Yv(i,e,t){i.setItem(e,JSON.stringify(t))}function gd(i,e,t,n){return`drm-game:${i}:${e}:${t}:${n}`}const ia=(i,e)=>`drm-pill-bottle:${i}:${e}`;function Zv(i,e){return mo(localStorage,`${ia(i,e)}:outbox`,t=>{if(!t||typeof t!="object"||typeof t.commandId!="string")throw new Error("Invalid local controller outbox.");const{commandId:n,...s}=t;return tr(n,s,{pending:!0})})}function Kv(i,e,t){go(localStorage,`${ia(i,e)}:outbox`,t)}function jv(i,e){return mo(localStorage,`${ia(i,e)}:attacks`,t=>{if(!t||typeof t!="object"||typeof t.interactionId!="string")throw new Error("Invalid local attack outbox.");const{interactionId:n,...s}=t,{serverTime:r,...a}=md({...s,serverTime:0});return{interactionId:n,...a}})}function Jv(i,e,t){go(localStorage,`${ia(i,e)}:attacks`,t)}function zf(i,e,t,n){const s={commandId:t.commandId,clientSeq:t.clientSeq,tick:t.tick,state:Ic(n),stateHash:Va(n)};Yv(localStorage,`${ia(i,e)}:checkpoint`,s)}function Qv(i,e){return $v(localStorage,`${ia(i,e)}:checkpoint`,t=>{const n=t;if(!n||typeof n.commandId!="string"||!Number.isInteger(n.clientSeq)||!Number.isInteger(n.tick)||typeof n.stateHash!="string")throw new Error("Invalid local checkpoint.");const s=fd(n.state);if(s.tick!==n.tick||Va(s)!==n.stateHash)throw new Error("Invalid local checkpoint state.");return n})}function eg(i,e,t){if(!pe)throw new Error("Firebase is unavailable.");let n=!1,s=[],r=[],a=[],o=0,l,c={};const u=new Map,d=[],h=()=>{if(s.length===0)return;const f=jm(s,r,a,o);if(!l)return e(f);const p=Jm(l,f,u),_=Object.fromEntries(s.map(g=>[g,(c[g]??0)+p[g]]));e({...f,roundPoints:p,scores:_})};return(async()=>{try{const f=await Mt(Ue(pe,`games/${i}/start`));if(n||!f.exists())return;const p=po(f.val());l=p,s=Object.keys(p.players),o=p.round,c=await iy(p.previousGameId,p.matchId),await Promise.all(s.map(async _=>{const g=await Mt(Ue(pe,`games/${i}/players/${_}/records`)),m=[];g.forEach(v=>{const b=Yr(tr(v.key,v.val()));b.playerId===_&&m.push(b)}),m.sort((v,b)=>v.clientSeq-b.clientSeq),u.set(_,m),d.push(ts(Ue(pe,`games/${i}/players/${_}/records`),v=>{try{const b=Yr(tr(v.key,v.val())),y=u.get(_)??[];b.playerId===_&&!y.some(w=>w.commandId===b.commandId)&&(y.push(b),y.sort((w,M)=>w.clientSeq-M.clientSeq),u.set(_,y),h())}catch(b){t(b instanceof Error?b:new Error(String(b)))}},t))})),d.push(ci(Ue(pe,`games/${i}/terminals`),_=>{try{r=[],_.forEach(g=>{const m=Qm(g.val());g.key===m.playerId&&s.includes(m.playerId)&&r.push(m)}),h()}catch(g){t(g instanceof Error?g:new Error(String(g)))}},t)),d.push(ci(Ue(pe,`games/${i}/rematch/ready`),_=>{try{a=[],_.forEach(g=>{const m=qv(g.val());g.key===m.playerId&&s.includes(m.playerId)&&a.push(m.playerId)}),h()}catch(g){t(g instanceof Error?g:new Error(String(g)))}},t)),h()}catch(f){t(f instanceof Error?f:new Error(String(f)))}})(),()=>{n=!0;for(const f of d)f()}}async function ey(i,e){return Dc(i,e)}async function tg(i){return Lc(i,po,e=>({advance:Object.keys(e.players).length>1&&e.round+1<Rt.matchRounds}))}function Yr(i){const{serverTime:e,...t}=i;return t}function ty(i,e,t,n,s,r=!0){if(!pe)throw new Error("Firebase is unavailable.");let a=!1,o=0;const l=new Es(Rt.tickRate);let c=!1,u=new Set,d=!1;const h=[],f=new Map,p=new Map,_=eg(i,v=>{c=v.finished,u=new Set(v.terminalPlayerIds),n?.(v),r&&v.allReady&&!d&&(d=!0,tg(i).catch(b=>{d=!1,t(b)}))},t),g=()=>{e([...f.entries()].map(([v,b])=>{const y=b.snapshot();return{playerId:v,tick:y.displayTick,...y}}))},m=v=>{if(!a){for(let b=l.consume(v);b>0;b--)if(!c)for(const[y,w]of f)u.has(y)||w.advance();g(),o=requestAnimationFrame(m)}};return(async()=>{try{const v=await Mt(Ue(pe,`games/${i}/start`));if(a||!v.exists())return;const b=po(v.val());s?.(b);let y=0;if(await Promise.all(Object.keys(b.players).map(async w=>{const M=await Mt(Ue(pe,`games/${i}/players/${w}/records`)),A=[];M.forEach(x=>{const T=Yr(tr(x.key,x.val()));T.playerId===w&&A.push(T)}),A.sort((x,T)=>x.clientSeq-T.clientSeq);for(const x of A)x.type==="progress/tick"&&(y=Math.max(y,x.tick));p.set(w,A)})),a)return;for(const[w,M]of Object.entries(b.players)){const A=new kv(cd(b.seed,M.seat,M.level),y);f.set(w,A);for(const x of p.get(w)??[])A.receive(x);h.push(ts(Ue(pe,`games/${i}/players/${w}/records`),x=>{try{const T=Yr(tr(x.key,x.val()));if(T.playerId===w){const R=p.get(w)??[];R.some(I=>I.commandId===T.commandId)||(R.push(T),R.sort((I,B)=>I.clientSeq-B.clientSeq),p.set(w,R)),A.receive(T)}g()}catch(T){t(T instanceof Error?T:new Error(String(T)))}},t))}g(),o=requestAnimationFrame(m)}catch(v){t(v instanceof Error?v:new Error(String(v)))}})(),()=>{a=!0,cancelAnimationFrame(o),_();for(const v of h)v()}}function QR(i,e,t){if(!pe)throw new Error("Firebase is unavailable.");return Hv(pe,i,md,()=>e(),t)}function ny(i,e){dd(i,e.tick,[]),e.type!=="progress/tick"&&$r(i,e)}async function iy(i,e){const t={};let n=i;for(;n&&pe;){const s=await Mt(Ue(pe,`games/${n}/start`));if(!s.exists())break;const r=po(s.val());if(r.matchId!==e)break;const a=await Mt(Ue(pe,`games/${n}/terminals`)),o=[];a.forEach(h=>{o.push(Qm(h.val()))});const l=Object.keys(r.players),c=jm(l,o,[],r.round),u=new Map;await Promise.all(l.map(async h=>{const f=await Mt(Ue(pe,`games/${n}/players/${h}/records`)),p=[];f.forEach(_=>{p.push(Yr(tr(_.key,_.val())))}),p.sort((_,g)=>_.clientSeq-g.clientSeq),u.set(h,p)}));const d=Jm(r,c,u);for(const h of l)t[h]=(t[h]??0)+d[h];n=r.previousGameId}return t}function eI(i,e){if(!li?.currentUser||!pe)throw new Error("Firebase is unavailable.");const t=li.currentUser.uid;let n=0,s=0,r=-1,a=0;const o=new Es(Rt.tickRate);let l=!1,c=!1,u=!1,d=!1,h=!1,f=!1,p=!1,_=!1,g,m,v,b,y=0,w=!1,M=[],A=[],x=()=>{},T=()=>{};const R=new Set,I=Zv(i,t),B=jv(i,t),L=he=>e({playerId:t,tick:n,ready:l,bottle:m?structuredClone(m):void 0,lastCommand:g,error:he,lifecycle:v,audioOutput:b,rainSignal:y,ownershipConflict:w,opponents:A.map(Re=>({...Re,state:structuredClone(Re.state)}))}),F=new Uc(pe,`games/${i}/players/${t}/writer`,()=>{w=!0,l=!1,d=!0,cancelAnimationFrame(a),L("Control moved to another tab or device.")}),k=F.epochId,U=new Ga({initial:I,order:(he,Re)=>he.clientSeq-Re.clientSeq,identify:he=>he.commandId,persist:he=>Kv(i,t,he),deliver:async he=>{const{commandId:Re,...ze}=he;await wn(Ue(pe,`games/${i}/players/${t}/records/${Re}`),{...ze,serverTime:Tn()})}}),O=new Ga({initial:B,order:()=>0,identify:he=>he.interactionId,persist:he=>Jv(i,t,he),deliver:async he=>{const{interactionId:Re,...ze}=he;await wn(Ue(pe,`games/${i}/interactions/${Re}`),{...ze,serverTime:Tn()})}}),G=eg(i,he=>{v=he,h=he.finished,f=he.terminalPlayerIds.includes(t),h&&(cancelAnimationFrame(a),o.reset()),he.allReady&&!_&&(_=!0,tg(i).catch(Re=>{_=!1,L(Re instanceof Error?Re.message:String(Re))})),L()},he=>L(he.message));function W(he){m&&(U.enqueue(he),s=he.clientSeq)}function se(he){if(m){try{zf(i,t,he,m)}catch{}U.flush()}}function J(he){if(n<r)throw new Error("A controller record cannot precede its latest progress tick.");const Re=qr(Ue(pe,`games/${i}/players/${t}/records`));if(!Re.key)throw new Error("Could not allocate a controller record identifier.");return{commandId:Re.key,playerId:t,epochId:k,clientSeq:s+1,tick:n,...he}}function te(he){for(const Re of he){const ze=Cv(Re);if(ze.length===0)continue;const re=M.filter(be=>be!==t&&!v?.terminalPlayerIds.includes(be));if(re.length===0){y++;continue}const ae=`${t}-${k}-${Re.tick}-${Re.chain}`,oe=qr(Ue(pe,`games/${i}/interactions`));if(!oe.key)throw new Error("Could not allocate an attack interaction identifier.");const Se={interactionId:oe.key,type:"attack/generated",attackId:ae,sourcePlayerId:t,sourceTick:Re.tick,sourceChain:Re.chain,targetPlayerIds:re,colors:ze};O.enqueue(Se)}}function Ce(he=!1){if(!m||!he&&n-r<15)return;const Re=J({type:"progress/tick",payload:{phase:m.phase,stateHash:Va(m)}});W(Re),r=n,se(Re)}async function ct(){if(!m||p)return;const he=(v?.playerIds.length??0)>1,Re=m.phase==="lost"?"lost":he&&m.phase==="countdown"?"cleared":void 0;if(Re){p=!0;try{const ze=Ue(pe,`games/${i}/terminals/${t}`);(await Mt(ze)).exists()||await wn(ze,{type:"player/terminal",playerId:t,tick:n,result:Re,stateHash:Va(m),serverTime:Tn()})}catch{p=!1}}}function at(he){if(u||!l||d||h||f)return;const Re=m?.phase;for(let ze=o.consume(he);ze>0;ze--){if(!m||m.phase==="lost"||m.phase==="countdown"&&(v?.playerIds.length??0)>1){o.reset();break}te(ud(m)),n=m.tick}m?.phase!==Re||m?.phase==="lost"&&r!==n?Ce(!0):Ce(),ct(),L(),a=requestAnimationFrame(at)}const ee=ci(Ue(pe,`games/${i}/start`),async he=>{if(!(!he.exists()||l||c)){c=!0;try{const Re=po(he.val());if(b=Re.audioOutput,M=Object.keys(Re.players),!Re.players[t])throw new Error("Player is not part of this pill-bottle/3 game.");if(T(),T=ty(i,ve=>{A=ve.filter(Pe=>Pe.playerId!==t),L()},ve=>L(ve.message),void 0,void 0,!1),!await F.claim())throw w=!0,new Error("This controller is already active in another tab.");const ze=await Mt(Ue(pe,`games/${i}/players/${t}/records`)),re=new Map;ze.forEach(ve=>{const Pe=Yr(tr(ve.key,ve.val()));Pe.playerId===t&&re.set(Pe.commandId,Pe)});for(const ve of U.values())re.set(ve.commandId,ve);const ae=[...re.values()].sort((ve,Pe)=>ve.clientSeq-Pe.clientSeq);for(const ve of ae)ve.type==="attack/rain"&&R.add(ve.payload.attackId);ae.forEach((ve,Pe)=>{if(ve.clientSeq!==Pe+1)throw new Error("Controller record history has a sequence gap.");if(Pe>0&&ve.tick<ae[Pe-1].tick)throw new Error("Controller record ticks moved backward.")});const oe=Qv(i,t),Se=oe&&ae.find(ve=>ve.commandId===oe.commandId&&ve.clientSeq===oe.clientSeq&&ve.tick===oe.tick);m=Se?fd(oe.state):cd(Re.seed,Re.players[t].seat,Re.players[t].level);for(const ve of ae)Se&&ve.clientSeq<=Se.clientSeq||ny(m,ve);if(s=ae.at(-1)?.clientSeq??0,n=m.tick,r=ae.reduce((ve,Pe)=>Pe.type==="progress/tick"?Math.max(ve,Pe.tick):ve,-1),ae.length>0)try{zf(i,t,ae.at(-1),m)}catch{}await wn(Ue(pe,`games/${i}/players/${t}/epochs/${k}`),{clientId:F.clientId,startedFromTick:n,startedFromCommandSeq:s,serverTime:Tn()});const be=Ue(pe,`games/${i}/interactions`),Qe=await Mt(be),ye=new Set;Qe.forEach(ve=>{ye.add(ve.key)}),l=!0,x=ts(be,ve=>{try{const Pe=md(ve.val());if(ye.delete(ve.key)||y++,!Pe.targetPlayerIds.includes(t)||R.has(Pe.attackId)||!m){L();return}const z={type:"attack/rain",payload:{attackId:Pe.attackId,colors:Pe.colors,columns:Iv(Pe.attackId,Pe.colors.length)}},Tt=J(z);W(Tt),$r(m,z),R.add(Pe.attackId),se(Tt),m.phase==="lost"&&(Ce(!0),ct()),L()}catch(Pe){L(Pe instanceof Error?Pe.message:String(Pe))}},ve=>L(ve.message)),Ce(!0),ct(),L(),U.flush(),O.flush(),a=requestAnimationFrame(at)}catch(Re){L(Re instanceof Error?Re.message:String(Re))}finally{c=!1}}},he=>L(he.message)),_e=()=>{U.flush(),O.flush()};window.addEventListener("online",_e);function ue(){!l||d||h||(Ce(!0),d=!0,cancelAnimationFrame(a),o.reset())}function We(){!l||!d||u||h||(d=!1,o.reset(),Ce(!0),a=requestAnimationFrame(at))}async function Je(he){if(!l||!m||m.phase!=="playing"||h)return;const Re=m.phase,ze=J(he);W(ze),te($r(m,he)),se(ze);const re=m.phase;re!==Re&&Ce(!0),re==="lost"&&ct(),g=`${he.type} · tick ${n}`,L()}return{command:Je,requestRematch:he=>ey(i,he),async takeOver(){await F.takeOver()&&(w=!1,l=!0,d=!1,o.reset(),a=requestAnimationFrame(at),L())},suspend:ue,resume:We,destroy(){l&&!d&&Ce(!0),u=!0,ee(),G(),x(),T(),cancelAnimationFrame(a),U.destroy(),O.destroy(),F.release(),window.removeEventListener("online",_e)}}}var Vf=It("<i></i>"),sy=It('<span class="next-piece svelte-63ux23"></span>'),ry=It('<div class="next svelte-63ux23"></div>'),ay=It('<div><!> <div class="matrix svelte-63ux23" role="img"></div></div>');function tI(i,e){An(e,!1);const t=dt();let n=Ze(e,"state",8),s=Ze(e,"label",8,"Block Stack board"),r=Ze(e,"compact",8,!1);const a={I:"#30d9d4",J:"#4d72ff",L:"#ff9f43",O:"#f5d547",S:"#5fe06d",T:"#b66cff",Z:"#ff4f64"};function o(p){const _=p.active?Rh(p.active):[],g=p.active?Rh({...p.active,row:Ch(p)}):[];return Array.from({length:G_*Co},(m,v)=>{const b=Math.floor(v/Co)+H_,y=v%Co;if(p.active&&_.some(M=>M.row===b&&M.col===y))return{kind:p.active.kind,ghost:!1,active:!0};const w=p.board[b*Co+y];return w?{kind:w,ghost:!1,active:!1}:p.active&&g.some(M=>M.row===b&&M.col===y)?{kind:p.active.kind,ghost:!0,active:!1}:void 0})}function l(p){const _=new Set(Rh({kind:p,row:0,col:0,orientation:0}).map(({row:g,col:m})=>`${g}:${m}`));return Array.from({length:16},(g,m)=>_.has(`${Math.floor(m/4)}:${m%4}`))}zt(()=>Ee(n()),()=>{me(t,o(n()))}),es(),Ts();var c=ay();let u;var d=en(c);{var h=p=>{var _=ry();Pn(_,5,()=>(Ee(n()),Ae(()=>n().next.slice(0,3))),ai,(g,m)=>{var v=sy();Pn(v,5,()=>(C(m),Ae(()=>l(C(m)))),ai,(b,y)=>{var w=Vf();let M;rn(()=>M=si(w,1,"svelte-63ux23",null,M,{occupied:C(y)})),ht(b,w)}),kt(v),rn(()=>{st(v,"aria-label",`${C(m)} piece`),Tu(v,(C(m),Ae(()=>`--piece:${a[C(m)]}`)))}),ht(g,v)}),kt(_),rn(g=>st(_,"aria-label",g),[()=>(Ee(n()),Ae(()=>`Next pieces: ${n().next.slice(0,3).join(", ")}`))]),ht(p,_)};Ln(d,p=>{r()||p(h)})}var f=ut(d,2);Pn(f,5,()=>C(t),ai,(p,_)=>{var g=Vf();let m;rn(v=>{Tu(g,(C(_),Ae(()=>C(_)?`--piece:${a[C(_).kind]}`:""))),m=si(g,1,"svelte-63ux23",null,m,v)},[()=>({filled:!!(C(_)&&!C(_).ghost),active:C(_)?.active,ghost:C(_)?.ghost})]),ht(p,g)}),kt(f),kt(c),rn(p=>{u=si(c,1,"tetris-shell svelte-63ux23",null,u,{compact:r()}),st(f,"aria-label",s()),st(f,"data-lines",(Ee(n()),Ae(()=>n().lines))),st(f,"data-score",(Ee(n()),Ae(()=>n().score))),st(f,"data-level",(Ee(n()),Ae(()=>n().level))),st(f,"data-phase",(Ee(n()),Ae(()=>n().phase))),st(f,"data-active-row",(Ee(n()),Ae(()=>n().active?.row))),st(f,"data-active-id",(Ee(n()),Ae(()=>n().active?.id))),st(f,"data-ghost-row",p)},[()=>(Ee(Ch),Ee(n()),Ae(()=>Ch(n())))]),ht(i,c),Cn()}const Gf=""+new URL("../assets/Granite Promenade.B9kdwy7x.mp3",import.meta.url).href,oy=""+new URL("../assets/Snowbound Sabre.U751p-Yz.mp3",import.meta.url).href;function nI(i,e){An(e,!1);const t=dt();let n=Ze(e,"enabled",8,!1),s=Ze(e,"level",8,0);zt(()=>(Ee(s()),Gf),()=>{me(t,s()%2?oy:Gf)}),es();{let r=Wi(()=>`tetris:${s()}`);ho(i,{get enabled(){return n()},get loopUrl(){return C(t)},get loopKey(){return C(r)}})}Cn()}function ly(i){if(!St(i)||!bt(i,["type","roomId","ruleset","rulesVersion","seed","tickRate","hostUid","audioOutput","members","players","settings","matchId","round","previousGameId","serverTime"])||i.type!=="game/started"||i.ruleset!=="tetris"||i.rulesVersion!=="tetris/1"||i.tickRate!==60||!Ct(i.seed,0,4294967295)||!Ct(i.round,0,99)||!yt(i.matchId)||!yt(i.hostUid)||!yt(i.roomId)||!Ni(i.serverTime)||!St(i.members)||!St(i.players)||!St(i.settings)||!bt(i.settings,["width","height","hiddenRows","matchRounds"])||i.settings.width!==10||i.settings.height!==20||i.settings.hiddenRows!==2||!Ct(i.settings.matchRounds,1,99)||i.previousGameId!==void 0&&!yt(i.previousGameId)||i.audioOutput!=="cast"&&i.audioOutput!=="controllers")throw new Error("Invalid tetris/1 start record.");const e=i.members,t=i.players;if(!Object.entries(e).every(([n,s])=>yt(n)&&s===!0)||!Object.entries(t).every(([n,s])=>yt(n)&&e[n]===!0&&St(s)&&bt(s,["seat","level"])&&Ct(s.seat,0,3)&&Ct(s.level,0,20)))throw new Error("Invalid Tetris roster.");return i}function cy(i,e,t=!1){const n=pd(i,e,t),s=St(n.payload)?n.payload:{};if(n.type==="input/move"&&bt(s,["dx"])&&(s.dx===-1||s.dx===1))return{commandId:i,...n,type:"input/move",payload:{dx:s.dx}};if(n.type==="input/rotate"&&bt(s,["direction"])&&(s.direction==="clockwise"||s.direction==="counterclockwise"))return{commandId:i,...n,type:"input/rotate",payload:{direction:s.direction}};if(["input/soft-drop-start","input/soft-drop-end","input/hard-drop"].includes(n.type)&&bt(s,[]))return{commandId:i,...n,type:n.type,payload:{}};if(n.type==="progress/tick"&&bt(s,["phase","stateHash"])&&(s.phase==="playing"||s.phase==="lost")&&typeof s.stateHash=="string"&&/^t1-[0-9a-f]{8}$/.test(s.stateHash))return{commandId:i,...n,type:"progress/tick",payload:{phase:s.phase,stateHash:s.stateHash}};throw new Error("Invalid Tetris controller payload.")}const Nc=ly,Pl=cy;function hy(i,e,t){if(!pe)throw new Error("Firebase unavailable.");let n=[],s=[],r=1,a=0,o=[];const l=()=>{n.length&&e(Km(n,o,s,a,r))},c=[];return Mt(Ue(pe,`games/${i}/start`)).then(u=>{const d=Nc(u.val());n=Object.keys(d.players),r=d.settings.matchRounds,a=d.round,c.push(ts(Ue(pe,`games/${i}/terminals`),h=>{const f=h.val();f?.result==="lost"&&(o=[...o.filter(p=>p.playerId!==f.playerId),{playerId:f.playerId,result:"lost",tick:f.tick}]),l()},t),ci(Ue(pe,`games/${i}/rematch/ready`),h=>{s=[],h.forEach(f=>{f.val()?.playerId===f.key&&n.includes(f.key)&&s.push(f.key)}),l()},t)),l()}).catch(u=>t(u instanceof Error?u:new Error(String(u)))),()=>c.forEach(u=>u())}const iI=(i,e)=>Dc(i,e),uy=i=>Lc(i,Nc,e=>({advance:e.round+1<e.settings.matchRounds}));function sI(i,e){if(!li?.currentUser||!pe)throw new Error("Firebase unavailable.");const t=li.currentUser.uid,n=new Es(km.tickRate),s=gd("tetris",i,t,"outbox");let r,a=0,o=0,l=!1,c=!1,u=!1,d=!1,h=0,f=-1,p,_,g,m=!1,v=[],b=()=>{};const y=mo(localStorage,s,U=>{if(!U||typeof U!="object"||typeof U.commandId!="string")throw new Error("Invalid Tetris outbox.");const{commandId:O,...G}=U;return Pl(O,G,!0)}),w=U=>e({playerId:t,tick:a,ready:l,state:r?structuredClone(r):void 0,lifecycle:g,audioOutput:_,error:U,lastCommand:p,ownershipConflict:m,opponents:v.map(O=>({...O,state:structuredClone(O.state)}))}),M=new Uc(pe,`games/${i}/players/${t}/writer`,()=>{m=!0,l=!1,cancelAnimationFrame(h),w("This controller was taken over by another tab.")}),A=hy(i,U=>{g=U,U.finished&&cancelAnimationFrame(h),U.allReady&&!d&&(d=!0,uy(i).catch(O=>{d=!1,w(O instanceof Error?O.message:String(O))})),w()},U=>w(U.message)),x=new Ga({initial:y,order:(U,O)=>U.clientSeq-O.clientSeq,identify:U=>U.commandId,persist:U=>go(localStorage,s,U),deliver:async U=>{if(!l)throw new Error("Controller is not ready.");const{commandId:O,...G}=U;await wn(Ue(pe,`games/${i}/players/${t}/records/${O}`),{...G,serverTime:Tn()})},failed:U=>w(U instanceof Error?U.message:String(U))}),T=U=>{const G={commandId:qr(Ue(pe,`games/${i}/players/${t}/records`)).key,playerId:t,epochId:M.epochId,clientSeq:++o,tick:a,...U};return x.enqueue(G),G},R=(U=!1)=>{!r||!U&&a-f<15||(T({type:"progress/tick",payload:{phase:r.phase,stateHash:wu(r)}}),f=a)},I=()=>r?.phase==="lost",B=()=>{I()&&r&&wn(Ue(pe,`games/${i}/terminals/${t}`),{type:"player/terminal",playerId:t,tick:a,result:"lost",stateHash:wu(r),serverTime:Tn()}).catch(U=>w(U.message))},L=U=>{if(!(c||u||!l||!r||I()||g?.finished)){for(let O=n.consume(U);O>0;O--)Vm(r),a=r.tick;R(),I()&&(R(!0),B()),w(),h=requestAnimationFrame(L)}},F=ci(Ue(pe,`games/${i}/start`),async U=>{if(!l)try{const O=Nc(U.val());if(!O.players[t])throw new Error("Player is not part of this Tetris game.");if(_=O.audioOutput,!await M.claim())throw m=!0,new Error("This controller is already active in another tab.");m=!1,b(),b=dy(i,J=>{v=J.filter(te=>te.playerId!==t),w()},J=>w(J.message));const G=await Mt(Ue(pe,`games/${i}/players/${t}/records`)),W=new Map;G.forEach(J=>{const te=Pl(J.key,J.val());W.set(te.commandId,te)});for(const J of x.values())W.set(J.commandId,J);const se=[...W.values()].sort((J,te)=>J.clientSeq-te.clientSeq);r=W_(Bm(O.seed,O.players[t].level),Math.max(0,...se.map(J=>J.tick)),se),a=r.tick,o=Math.max(0,...se.map(J=>J.clientSeq)),await wn(Ue(pe,`games/${i}/players/${t}/epochs/${M.epochId}`),{clientId:M.clientId,startedFromTick:a,startedFromCommandSeq:o,serverTime:Tn()}),l=!0,x.flush(),R(!0),w(),h=requestAnimationFrame(L);return}catch(O){w(O instanceof Error?O.message:String(O));return}},U=>w(U.message)),k=()=>{x.flush()};return window.addEventListener("online",k),{command(U){!l||!r||r.phase!=="playing"||(T(U),zm(r,U),a=r.tick,p=`${U.type} · tick ${a}`,I()&&(R(!0),B()),w())},suspend(){!l||u||(u=!0,cancelAnimationFrame(h),n.reset(),R(!0))},resume(){!l||!u||(u=!1,n.reset(),h=requestAnimationFrame(L))},async takeOver(){await M.takeOver()&&(m=!1,l=!0,u=!1,x.flush(),h=requestAnimationFrame(L),w())},destroy(){R(!0),c=!0,F(),A(),b(),cancelAnimationFrame(h),window.removeEventListener("online",k),x.destroy(),M.release()}}}function dy(i,e,t){if(!pe)throw new Error("Firebase unavailable.");let n=!1,s=0,r;const a=new Es(km.tickRate),o=new Map,l=new Map,c=[],u={clone:h=>structuredClone(h),tick:h=>h.tick,advanceTo:(h,f)=>{for(;h.tick<f&&h.phase==="playing";)Vm(h)},apply:(h,f)=>{f.type!=="progress/tick"&&zm(h,f)},hash:wu,phase:h=>h.phase,terminal:h=>h.phase==="lost",progress:h=>h.type==="progress/tick"?h.payload:void 0},d=()=>e([...l].map(([h,f])=>{const p=f.snapshot();return{playerId:h,tick:p.displayTick,controllerTick:p.controllerTick,lag:p.lag,state:p.state,hashMatches:p.hashMatches}}));return Mt(Ue(pe,`games/${i}/start`)).then(async h=>{r=Nc(h.val());let f=0;if(await Promise.all(Object.keys(r.players).map(async _=>{const g=await Mt(Ue(pe,`games/${i}/players/${_}/records`)),m=[];g.forEach(v=>{m.push(Pl(v.key,v.val()))}),m.sort((v,b)=>v.clientSeq-b.clientSeq),o.set(_,m);for(const v of m)v.type==="progress/tick"&&(f=Math.max(f,v.tick))})),n)return;for(const _ of Object.keys(r.players)){const g=new Pc(u,Bm(r.seed,r.players[_].level),f);l.set(_,g);for(const m of o.get(_)??[])g.receive(m);c.push(ts(Ue(pe,`games/${i}/players/${_}/records`),m=>{try{g.receive(Pl(m.key,m.val())),d()}catch(v){t(v instanceof Error?v:new Error(String(v)))}},t))}const p=_=>{if(!n){for(let g=a.consume(_);g>0;g--)for(const m of l.values())m.advance();d(),s=requestAnimationFrame(p)}};d(),s=requestAnimationFrame(p)}).catch(h=>t(h instanceof Error?h:new Error(String(h)))),()=>{n=!0,cancelAnimationFrame(s),c.forEach(h=>h())}}var fy=It("<span> </span>"),py=It("<div> </div>"),my=It('<button type="button">▲</button>'),gy=It("<div>▲</div>"),_y=It("<!><!>",1),vy=It("<i>✦</i>"),yy=It('<div><div class="progress svelte-40oo2k" aria-label="Current match group"></div> <div class="board svelte-40oo2k"><!><div class="effects svelte-40oo2k" aria-hidden="true"><!></div></div></div>');function rI(i,e){An(e,!1);let t=Ze(e,"state",8),n=Ze(e,"label",8,"Quarry Match board"),s=Ze(e,"compact",8,!1),r=Ze(e,"selectColumn",8,void 0);const a={cyan:"◆",pink:"●",yellow:"✦",green:"▲",purple:"■"};Ts();var o=yy();let l;var c=en(o);Pn(c,4,()=>[0,1,2],ai,(p,_)=>{var g=fy();let m;var v=en(g,!0);kt(g),rn(()=>{m=si(g,1,"svelte-40oo2k",null,m,{stone:_<t().groupCount,occupied:_<t().groupCount,cyan:t().groupColor==="cyan",pink:t().groupColor==="pink",yellow:t().groupColor==="yellow",green:t().groupColor==="green",purple:t().groupColor==="purple"}),Zi(v,(Ee(t()),Ae(()=>_<t().groupCount&&t().groupColor?a[t().groupColor]:"·")))}),ht(p,g)}),kt(c);var u=ut(c,2),d=en(u);Pn(d,1,()=>(Ee(t()),Ae(()=>t().columns)),ai,(p,_,g)=>{var m=_y(),v=on(m);Pn(v,0,()=>Array(12),ai,(M,A,x)=>{const T=Wi(()=>(Ee(t()),C(_),Ae(()=>t().rulesVersion==="crystal-canopy/1"?C(_)[x]:C(_)[11-x])));var R=py();let I;var B=en(R,!0);kt(R),rn(L=>{I=si(R,1,"cell svelte-40oo2k",null,I,L),Zi(B,(Ee(C(T)),Ae(()=>C(T)?a[C(T)]:"")))},[()=>({occupied:!!C(T),cyan:C(T)==="cyan",pink:C(T)==="pink",yellow:C(T)==="yellow",green:C(T)==="green",purple:C(T)==="purple"})]),ht(M,R)});var b=ut(v);{var y=M=>{var A=my();let x;st(A,"aria-label",`Shoot column ${g+1}`),rn(()=>x=si(A,1,"cursor svelte-40oo2k",null,x,{selected:t().cursor===g})),Al("pointerdown",A,Xm(()=>r()?.(g))),ht(M,A)},w=M=>{var A=gy();let x;rn(()=>x=si(A,1,"cursor svelte-40oo2k",null,x,{selected:t().cursor===g})),ht(M,A)};Ln(b,M=>{r()?M(y):M(w,-1)})}ht(p,m)});var h=ut(d),f=en(h);qm(f,()=>(Ee(t()),Ae(()=>t().cascades)),p=>{var _=Xr(),g=on(_);Pn(g,1,()=>(Ee(t()),Ae(()=>t().lastCascadeCells??[])),ai,(m,v)=>{var b=vy();let y;rn(()=>{y=si(b,1,"burst svelte-40oo2k",null,y,{cyan:C(v).color==="cyan",pink:C(v).color==="pink",yellow:C(v).color==="yellow",green:C(v).color==="green",purple:C(v).color==="purple"}),Tu(b,(C(v),Ae(()=>`grid-column:${C(v).column+1};grid-row:${12-C(v).row}`)))}),ht(m,b)}),ht(p,_)}),kt(h),kt(u),kt(o),rn(()=>{l=si(o,1,"quarry-shell svelte-40oo2k",null,l,{compact:s(),canopy:t().rulesVersion==="crystal-canopy/1"}),st(o,"aria-label",n()),st(o,"data-remaining",(Ee(t()),Ae(()=>t().total-t().removed))),st(o,"data-cursor",(Ee(t()),Ae(()=>t().cursor))),st(o,"data-cascades",(Ee(t()),Ae(()=>t().cascades)))}),ht(i,o),Cn()}const Hf=""+new URL("../assets/Prismatic Descent.ZNplIXQf.mp3",import.meta.url).href,Wf=""+new URL("../assets/Prismatic Descent Clear.BmLl8QF3.mp3",import.meta.url).href,xy=""+new URL("../assets/Prismatic Descent Combo.hOwJq7xI.mp3",import.meta.url).href,by=""+new URL("../assets/Prismatic Descent Reset.XTEzipFH.mp3",import.meta.url).href;function aI(i,e){An(e,!1);const t=dt();let n=Ze(e,"enabled",8,!1),s=Ze(e,"phase",8,"playing"),r=Ze(e,"cascadeSignal",8,0),a=Ze(e,"resetSignal",8,0),o=dt(s()),l=dt(r()),c=dt(a()),u=dt(0),d=dt(Wf);zt(()=>(Ee(s()),Hf),()=>{me(t,s()==="playing"?Hf:void 0)}),zt(()=>(Ee(r()),C(l),C(u)),()=>{r()>C(l)&&(me(d,xy),fn(u),me(l,r()))}),zt(()=>(Ee(a()),C(c),C(u)),()=>{a()>C(c)&&(me(d,by),fn(u),me(c,a()))}),zt(()=>(Ee(s()),C(o),C(u)),()=>{s()!==C(o)&&(s()==="cleared"&&(me(d,Wf),fn(u)),me(o,s()))}),es(),ho(i,{get enabled(){return n()},get loopUrl(){return C(t)},loopKey:"quarry-match",get cueUrl(){return C(d)},get cueSignal(){return C(u)}}),Cn()}const Xf=""+new URL("../assets/Glacial Vault.Dw_n7dj9.mp3",import.meta.url).href,Sy=""+new URL("../assets/Glacial Vault Clear.C5HrP9Bz.mp3",import.meta.url).href,qf=""+new URL("../assets/Glacial Vault Shot.Ckp_Mc68.mp3",import.meta.url).href,My=""+new URL("../assets/Glacial Vault Triple.Bb19vC-Z.mp3",import.meta.url).href,wy=""+new URL("../assets/Glacial Vault Reset.DYr4V8th.mp3",import.meta.url).href;function oI(i,e){An(e,!1);const t=dt();let n=Ze(e,"enabled",8,!1),s=Ze(e,"phase",8,"playing"),r=Ze(e,"shotSignal",8,0),a=Ze(e,"tripleSignal",8,0),o=Ze(e,"resetSignal",8,0),l=dt(s()),c=dt(r()),u=dt(a()),d=dt(o()),h=dt(0),f=dt(qf);zt(()=>(Ee(s()),Xf),()=>{me(t,s()==="playing"?Xf:void 0)}),zt(()=>(Ee(r()),C(c),C(h)),()=>{r()>C(c)&&(me(f,qf),fn(h),me(c,r()))}),zt(()=>(Ee(a()),C(u),C(h)),()=>{a()>C(u)&&(me(f,My),fn(h),me(u,a()))}),zt(()=>(Ee(o()),C(d),C(h),Ee(r()),Ee(a())),()=>{o()>C(d)&&(me(f,wy),fn(h),me(d,o()),me(c,r()),me(u,a()))}),zt(()=>(Ee(s()),C(l),C(h)),()=>{s()!==C(l)&&(s()==="cleared"&&(me(f,Sy),fn(h)),me(l,s()))}),es(),ho(i,{get enabled(){return n()},get loopUrl(){return C(t)},loopKey:"crystal-canopy",get cueUrl(){return C(f)},get cueSignal(){return C(h)}}),Cn()}function Ty(i){let e=2166136261;for(const t of i)e^=t.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0}function Ey(i,e){const t=Array.from({length:Ff},(s,r)=>r);let n=Ty(i);for(let s=t.length-1;s>0;s--){n=Math.imul(n,1664525)+1013904223>>>0;const r=n%(s+1);[t[s],t[r]]=[t[r],t[s]]}return t.slice(0,Math.min(e,Ff))}function Ay(i,e,t,n,s,r=3){const a=Object.fromEntries(i.map(c=>[c,e[c]??0]));t&&i.includes(t)?a[t]++:t=void 0;const o=!!t,l=n.filter(c=>i.includes(c));return{playerIds:i,readyPlayerIds:l,finished:o,winnerId:t,allReady:o&&i.every(c=>l.includes(c)),round:s,matchComplete:!!(t&&a[t]>=r),roundPoints:Object.fromEntries(i.map(c=>[c,c===t?1:0])),scores:a}}function Cy(i){if(!St(i)||!bt(i,["type","roomId","ruleset","rulesVersion","seed","tickRate","hostUid","audioOutput","members","players","settings","matchId","round","previousGameId","scores","serverTime"])||i.type!=="game/started"||!(i.ruleset==="quarry-match"&&i.rulesVersion==="quarry-match/1"||i.ruleset==="crystal-canopy"&&i.rulesVersion==="crystal-canopy/1")||i.tickRate!==60||!Ct(i.seed,0,4294967295)||!Ct(i.round,0,4)||!yt(i.matchId)||!yt(i.hostUid)||!yt(i.roomId)||!Ni(i.serverTime)||!St(i.members)||!St(i.players)||!St(i.settings)||!bt(i.settings,["width","height","targetWins","matchRounds"])||i.settings.width!==5||i.settings.height!==12||i.settings.targetWins!==3||i.settings.matchRounds!==5||i.previousGameId!==void 0&&!yt(i.previousGameId)||i.audioOutput!=="cast"&&i.audioOutput!=="controllers")throw new Error("Invalid match-puzzle start record.");const e=i.members,t=i.players,n=i.scores;if(!Object.entries(e).every(([s,r])=>yt(s)&&r===!0)||!Object.entries(t).every(([s,r])=>yt(s)&&e[s]===!0&&St(r)&&bt(r,["seat","level"])&&Ct(r.seat,0,3)&&Ct(r.level,0,20))||n!==void 0&&(!St(n)||!bt(n,Object.keys(t))||!Object.keys(t).every(s=>Ct(n[s],0,3))))throw new Error("Invalid Quarry Match roster or scores.");return i}function Ry(i,e,t=!1){const n=pd(i,e,t),s=St(n.payload)?n.payload:{};if(n.type==="input/move"&&bt(s,["dx"])&&(s.dx===-1||s.dx===1))return{commandId:i,...n,type:"input/move",payload:{dx:s.dx}};if((n.type==="input/fire"||n.type==="input/restart")&&bt(s,[]))return{commandId:i,...n,type:n.type,payload:{}};if(n.type==="attack/rain"&&bt(s,["attackId","colors","columns"])&&yt(s.attackId)&&Array.isArray(s.colors)&&s.colors.length>=1&&s.colors.length<=4&&s.colors.every(r=>r==="cyan"||r==="pink"||r==="yellow"||r==="green"||r==="purple")&&Array.isArray(s.columns)&&s.columns.length===s.colors.length&&s.columns.every(r=>Ct(r,0,4)))return{commandId:i,...n,type:"attack/rain",payload:{attackId:s.attackId,colors:s.colors,columns:s.columns}};if(n.type==="progress/tick"&&bt(s,["phase","stateHash"])&&(s.phase==="playing"||s.phase==="cleared")&&typeof s.stateHash=="string"&&/^(q1|c1)-[0-9a-f]{8}$/.test(s.stateHash))return{commandId:i,...n,type:"progress/tick",payload:{phase:s.phase,stateHash:s.stateHash}};throw new Error("Invalid Quarry Match controller payload.")}const Zr=Cy,Dl=Ry,Yi=i=>i.rulesVersion==="crystal-canopy/1",ng=(i,e)=>Yi(i)?$_(i.seed,e):Y_(i.seed,e),ig=i=>Yi(i)?j_(i):J_(i),Ru=(i,e,t)=>Yi(i)?Z_(i,e,t):K_(i,e,t),Iu=i=>Yi(i)?X_(i):q_(i),Iy=(i,e,t,n)=>Yi(i)?Q_(i,e,t,n):ev(i,e,t,n);async function lI(i){if(!pe)throw new Error("Firebase unavailable.");return Zr((await Mt(Ue(pe,`games/${i}/start`))).val())}function Py(i,e,t){if(!pe)throw new Error("Firebase unavailable.");let n,s,r=[];const a=[],o=()=>{n&&e(Ay(Object.keys(n.players),n.scores??{},s,r,n.round,n.settings.targetWins))};return Mt(Ue(pe,`games/${i}/start`)).then(l=>{n=Zr(l.val()),a.push(ci(Ue(pe,`games/${i}/winner`),c=>{const u=c.val();s=u&&Object.hasOwn(n.players,u.playerId)?u.playerId:void 0,o()},t),ci(Ue(pe,`games/${i}/rematch/ready`),c=>{r=[],c.forEach(u=>{u.val()?.playerId===u.key&&Object.hasOwn(n.players,u.key)&&r.push(u.key)}),o()},t)),o()}).catch(l=>t(l instanceof Error?l:new Error(String(l)))),()=>a.forEach(l=>l())}const cI=(i,e)=>Dc(i,e);async function Dy(i){if(!pe)throw new Error("Firebase unavailable.");const[e,t]=await Promise.all([Mt(Ue(pe,`games/${i}/start`)),Mt(Ue(pe,`games/${i}/winner`))]);Zr(e.val());const n=t.val()?.playerId;return Lc(i,Zr,s=>{const r=Object.fromEntries(Object.keys(s.players).map(o=>[o,(s.scores?.[o]??0)+(o===n?1:0)])),a=!!(n&&r[n]>=s.settings.targetWins);return{advance:!a,scores:a?Object.fromEntries(Object.keys(s.players).map(o=>[o,0])):r}})}function hI(i,e){if(!li?.currentUser||!pe)throw new Error("Firebase unavailable.");const t=li.currentUser.uid,n=new Es(Gm.tickRate),s=gd("quarry",i,t,"outbox");let r,a,o=0,l=0,c=!1,u=!1,d=!1,h=!1,f=0,p=-1,_,g,m,v=!1,b=[],y=()=>{},w=()=>{};const M=new Set,A=mo(localStorage,s,G=>{if(!G||typeof G!="object"||typeof G.commandId!="string")throw new Error("Invalid Quarry Match outbox.");const{commandId:W,...se}=G;return Dl(W,se,!0)}),x=G=>e({playerId:t,tick:o,ready:c,state:r?structuredClone(r):void 0,lifecycle:m,audioOutput:g,error:G,lastCommand:_,ownershipConflict:v,opponents:b.map(W=>({...W,state:structuredClone(W.state)}))}),T=new Uc(pe,`games/${i}/players/${t}/writer`,()=>{v=!0,c=!1,cancelAnimationFrame(f),x("This controller was taken over by another tab.")}),R=Py(i,G=>{m=G,G.finished&&cancelAnimationFrame(f),G.allReady&&!h&&(h=!0,Dy(i).catch(W=>{h=!1,x(W instanceof Error?W.message:String(W))})),x()},G=>x(G.message)),I=new Ga({initial:A,order:(G,W)=>G.clientSeq-W.clientSeq,identify:G=>G.commandId,persist:G=>go(localStorage,s,G),deliver:async G=>{if(!c)throw new Error("Controller is not ready.");const{commandId:W,...se}=G;await wn(Ue(pe,`games/${i}/players/${t}/records/${W}`),{...se,serverTime:Tn()})},failed:G=>x(G instanceof Error?G.message:String(G))}),B=G=>{const se={commandId:qr(Ue(pe,`games/${i}/players/${t}/records`)).key,playerId:t,epochId:T.epochId,clientSeq:++l,tick:o,...G};return I.enqueue(se),se},L=(G=!1)=>{!r||!G&&o-p<15||(B({type:"progress/tick",payload:{phase:r.phase,stateHash:Iu(r)}}),p=o)},F=()=>{!r||r.phase!=="cleared"||Rl(Ue(pe,`games/${i}/winner`),G=>G===null?{playerId:t,tick:r.tick,stateHash:Iu(r),serverTime:Tn()}:void 0,{applyLocally:!1}).catch(G=>x(G.message))},k=G=>{if(!(u||d||!c||!r||r.phase==="cleared"||m?.finished)){for(let W=n.consume(G);W>0;W--)ig(r),o=r.tick;L(),x(),f=requestAnimationFrame(k)}},U=ci(Ue(pe,`games/${i}/start`),async G=>{if(!c)try{if(a=Zr(G.val()),!a.players[t])throw new Error("Player is not part of this Quarry Match game.");if(g=a.audioOutput,!await T.claim())throw v=!0,new Error("This controller is already active in another tab.");v=!1,y(),y=Ly(i,te=>{b=te.filter(Ce=>Ce.playerId!==t),x()},te=>x(te.message));const W=await Mt(Ue(pe,`games/${i}/players/${t}/records`)),se=new Map;W.forEach(te=>{const Ce=Dl(te.key,te.val());se.set(Ce.commandId,Ce),Ce.type==="attack/rain"&&M.add(Ce.payload.attackId)});for(const te of I.values())se.set(te.commandId,te);const J=[...se.values()].sort((te,Ce)=>te.clientSeq-Ce.clientSeq);r=Iy(ng(a,a.players[t].level),Math.max(0,...J.map(te=>te.tick)),J,a.seed),o=r.tick,l=Math.max(0,...J.map(te=>te.clientSeq)),await wn(Ue(pe,`games/${i}/players/${t}/epochs/${T.epochId}`),{clientId:T.clientId,startedFromTick:o,startedFromCommandSeq:l,serverTime:Tn()}),c=!0,w(),w=ts(Ue(pe,`games/${i}/interactions`),te=>{const Ce=te.val();if(Yi(a)||Ce?.type!=="attack/generated"||!Ce.targetPlayerIds?.includes(t)||M.has(Ce.attackId))return;const ct={type:"attack/rain",payload:{attackId:Ce.attackId,colors:Ce.colors,columns:Ey(Ce.attackId,Ce.colors.length)}};M.add(Ce.attackId),B(ct),Ru(r,ct,a.seed),x()},te=>x(te.message)),I.flush(),L(!0),x(),r.phase==="cleared"?F():f=requestAnimationFrame(k)}catch(W){x(W instanceof Error?W.message:String(W))}},G=>x(G.message)),O=()=>{I.flush()};return window.addEventListener("online",O),{command(G){if(!c||!r||r.phase!=="playing"||!a||G.type==="input/fire"&&(!(Yi(r)?r.columns[r.cursor].at(-1):r.columns[r.cursor][0])||r.groupColor&&(Yi(r)?r.columns[r.cursor].at(-1):r.columns[r.cursor][0])!==r.groupColor))return;B(G);const W=Ru(r,G,a.seed);if(W&&a&&!Yi(a)){const se=Object.keys(a.players).filter(J=>J!==t);if(se.length){const J=`${t}-${T.epochId}-${l}-${W.tick}-${W.chain}`,te=qr(Ue(pe,`games/${i}/interactions`));wn(te,{type:"attack/generated",attackId:J,sourcePlayerId:t,sourceTick:W.tick,sourceChain:W.chain,targetPlayerIds:se,colors:W.colors,serverTime:Tn()}).catch(Ce=>x(Ce.message))}}o=r.tick,_=`${G.type} · tick ${o}`,r.phase==="cleared"&&(L(!0),F()),x()},suspend(){!c||d||(d=!0,cancelAnimationFrame(f),n.reset(),L(!0))},resume(){!c||!d||(d=!1,n.reset(),f=requestAnimationFrame(k))},async takeOver(){await T.takeOver()&&(v=!1,c=!0,d=!1,I.flush(),f=requestAnimationFrame(k),x())},destroy(){L(!0),u=!0,U(),R(),y(),w(),cancelAnimationFrame(f),window.removeEventListener("online",O),I.destroy(),T.release()}}}function Ly(i,e,t){if(!pe)throw new Error("Firebase unavailable.");let n=!1,s=0,r;const a=new Es(Gm.tickRate),o=new Map,l=new Map,c=[],u={clone:h=>structuredClone(h),tick:h=>h.tick,advanceTo:(h,f)=>{for(;h.tick<f&&h.phase==="playing";)ig(h)},apply:(h,f)=>{f.type!=="progress/tick"&&Ru(h,f,r.seed)},hash:Iu,phase:h=>h.phase,terminal:h=>h.phase==="cleared",progress:h=>h.type==="progress/tick"?h.payload:void 0},d=()=>e([...l].map(([h,f])=>{const p=f.snapshot();return{playerId:h,tick:p.displayTick,controllerTick:p.controllerTick,lag:p.lag,state:p.state,hashMatches:p.hashMatches}}));return Mt(Ue(pe,`games/${i}/start`)).then(async h=>{r=Zr(h.val());let f=0;if(await Promise.all(Object.keys(r.players).map(async _=>{const g=await Mt(Ue(pe,`games/${i}/players/${_}/records`)),m=[];g.forEach(v=>{m.push(Dl(v.key,v.val()))}),m.sort((v,b)=>v.clientSeq-b.clientSeq),o.set(_,m);for(const v of m)v.type==="progress/tick"&&(f=Math.max(f,v.tick))})),n)return;for(const _ of Object.keys(r.players)){const g=new Pc(u,ng(r,r.players[_].level),f);l.set(_,g);for(const m of o.get(_)??[])g.receive(m);c.push(ts(Ue(pe,`games/${i}/players/${_}/records`),m=>{try{g.receive(Dl(m.key,m.val())),d()}catch(v){t(v instanceof Error?v:new Error(String(v)))}},t))}const p=_=>{if(!n){for(let g=a.consume(_);g>0;g--)for(const m of l.values())m.advance();d(),s=requestAnimationFrame(p)}};d(),s=requestAnimationFrame(p)}).catch(h=>t(h instanceof Error?h:new Error(String(h)))),()=>{n=!0,cancelAnimationFrame(s),c.forEach(h=>h())}}const $f=""+new URL("../assets/Ivory Avalanche.jheecTlA.mp3",import.meta.url).href,Uy=""+new URL("../assets/Ivory Avalanche Clear.CHjDqg-F.mp3",import.meta.url).href,Ih=""+new URL("../assets/Ivory Avalanche Catch.Cin_KYx1.mp3",import.meta.url).href,Yf=""+new URL("../assets/Ivory Avalanche Place.BAM6pE8m.mp3",import.meta.url).href,Ny=""+new URL("../assets/Ivory Avalanche Throw.CcIWy32w.mp3",import.meta.url).href,Oy=""+new URL("../assets/Ivory Avalanche Chain.B0QUhIke.mp3",import.meta.url).href,Fy=""+new URL("../assets/Ivory Avalanche Miss.B0VhYMKi.mp3",import.meta.url).href,Zf=""+new URL("../assets/Ivory Avalanche Failure.BOUADSZZ.mp3",import.meta.url).href;function uI(i,e){An(e,!1);const t=dt();let n=Ze(e,"enabled",8,!1),s=Ze(e,"phase",8,"countdown"),r=Ze(e,"survived",8,0),a=Ze(e,"placements",8,0),o=Ze(e,"chains",8,0),l=Ze(e,"misses",8,0),c=Ze(e,"returns",8,0),u=dt(s()),d=dt(r()),h=dt(a()),f=dt(o()),p=dt(l()),_=dt(c()),g=dt(0),m=dt(Ih);zt(()=>(Ee(s()),$f),()=>{me(t,s()==="playing"?$f:void 0)}),zt(()=>(Ee(o()),C(f),C(g),Ee(a()),C(h),Yf),()=>{o()>C(f)?(me(m,Oy),fn(g),me(f,o())):a()>C(h)&&(me(m,Yf),fn(g),me(h,a()))}),zt(()=>(Ee(l()),C(p),C(g),Ee(r()),C(d),Ih),()=>{l()>C(p)?(me(m,Fy),fn(g),me(p,l())):r()>C(d)&&(me(m,Ih),fn(g),me(d,r()))}),zt(()=>(Ee(c()),C(_),C(g)),()=>{c()>C(_)&&(me(m,Ny),fn(g),me(_,c()))}),zt(()=>(Ee(s()),C(u),C(g),Zf),()=>{s()!==C(u)&&(s()==="cleared"?(me(m,Uy),fn(g)):s()==="lost"&&(me(m,Zf),fn(g)),me(u,s()))}),es(),ho(i,{get enabled(){return n()},get loopUrl(){return C(t)},loopKey:"stax",get cueUrl(){return C(m)},get cueSignal(){return C(g)}}),Cn()}const Ph=(i,e)=>{if(i===e)return!0;if(!i||!e)return!1;const t=i.length;if(e.length!==t)return!1;for(let n=0;n<t;n++)if(i[n]!==e[n])return!1;return!0},ky=()=>{const i=[],n={items:i,remember:(s,r)=>{for(let l=0;l<i.length;l++){const c=i[l];if(Ph(r,c.keys)&&c.promise)return c.promise}const a=s();a.catch(()=>{for(let l=0;l<i.length;l++){const c=i[l];if(Ph(r,c.keys)){i.splice(l,1);break}}});const o={promise:a,keys:r};return i.push(o),o.promise},clear:s=>{for(let r=0;r<i.length;r++){const a=i[r];if(Ph(s,a.keys)){i.splice(r,1);return}}}};return Si("threlte-cache",n),n};const Oc="185",Js={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},$s={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sg=0,Pu=1,rg=2,By=3,zy=0,Ra=1,Ll=2,Br=3,ji=0,Fn=1,Ci=2,Pi=0,Qs=1,Du=2,Lu=3,Uu=4,ag=5,Vy=6,ms=100,og=101,lg=102,cg=103,hg=104,ug=200,dg=201,fg=202,pg=203,Ul=204,Nl=205,mg=206,gg=207,_g=208,vg=209,yg=210,xg=211,bg=212,Sg=213,Mg=214,Ol=0,Fl=1,kl=2,nr=3,Bl=4,zl=5,Vl=6,Gl=7,_o=0,wg=1,Tg=2,xi=0,_d=1,vd=2,yd=3,xd=4,bd=5,Fc=6,Sd=7,Nu="attached",Eg="detached",kc=300,Di=301,bs=302,Ia=303,Pa=304,sa=306,Ha=1e3,Xn=1001,Wa=1002,tn=1003,Md=1004,Gy=1004,zr=1005,Hy=1005,Gt=1006,Da=1007,Wy=1007,Ri=1008,Xy=1008,Hn=1009,wd=1010,Td=1011,Kr=1012,Bc=1013,hi=1014,Nn=1015,Li=1016,zc=1017,Vc=1018,jr=1020,Ed=35902,Ad=35899,Cd=1021,Rd=1022,On=1023,Ui=1026,gs=1027,Gc=1028,vo=1029,Ss=1030,Hc=1031,qy=1032,Wc=1033,La=33776,Ua=33777,Na=33778,Oa=33779,Hl=35840,Wl=35841,Xl=35842,ql=35843,$l=36196,Yl=37492,Zl=37496,Kl=37488,jl=37489,Xa=37490,Jl=37491,Ql=37808,ec=37809,tc=37810,nc=37811,ic=37812,sc=37813,rc=37814,ac=37815,oc=37816,lc=37817,cc=37818,hc=37819,uc=37820,dc=37821,fc=36492,pc=36494,mc=36495,gc=36283,_c=36284,qa=36285,vc=36286,Ag=2200,Cg=2201,Rg=2202,$a=2300,yc=2301,wl=2302,Ou=2303,Ys=2400,Zs=2401,Ya=2402,Xc=2500,Id=2501,$y=0,Yy=1,Zy=2,Ig=3200,Ky=3201,jy=3202,Jy=3203,Ji=0,Pg=1,qi="",Dn="srgb",Za="srgb-linear",Ka="linear",Pt="srgb",Qy="",ex="rg",tx="ga",nx=0,Xs=7680,ix=7681,sx=7682,rx=7683,ax=34055,ox=34056,lx=5386,cx=512,hx=513,ux=514,dx=515,fx=516,px=517,mx=518,Fu=519,Dg=512,Lg=513,Ug=514,qc=515,Ng=516,Og=517,$c=518,Fg=519,ja=35044,gx=35048,_x=35040,vx=35045,yx=35049,xx=35041,bx=35046,Sx=35050,Mx=35042,wx="100",ku="300 es",jn=2e3,ir=2001,Tx={COMPUTE:"compute",RENDER:"render"},Ex={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},Ax={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},Cx={TEXTURE_COMPARE:"depthTextureCompare"};function Rx(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}const Ix={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Vr(i,e){return new Ix[i](e)}function kg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ja(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bg(){const i=Ja("canvas");return i.style.display="block",i}const Kf={};let Ms=null;function Px(i){Ms=i}function Dx(){return Ms}function Qa(...i){const e="THREE."+i.shift();Ms?Ms("log",e,...i):console.log(e,...i)}function zg(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Me(...i){i=zg(i);const e="THREE."+i.shift();if(Ms)Ms("warn",e,...i);else{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ye(...i){i=zg(i);const e="THREE."+i.shift();if(Ms)Ms("error",e,...i);else{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ys(...i){const e=i.join(" ");e in Kf||(Kf[e]=!0,Me(...i))}function Lx(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Ux={[Ol]:Fl,[kl]:Vl,[Bl]:Gl,[nr]:zl,[Fl]:Ol,[Vl]:kl,[Gl]:Bl,[zl]:nr};class Mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jf=1234567;const er=Math.PI/180,Jr=180/Math.PI;function Qn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function it(i,e,t){return Math.max(e,Math.min(t,i))}function Pd(i,e){return(i%e+e)%e}function Nx(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ox(i,e,t){return i!==e?(t-i)/(e-i):0}function Fa(i,e,t){return(1-t)*i+t*e}function Fx(i,e,t,n){return Fa(i,e,1-Math.exp(-t*n))}function kx(i,e=1){return e-Math.abs(Pd(i,e*2)-e)}function Bx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function zx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Vx(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Gx(i,e){return i+Math.random()*(e-i)}function Hx(i){return i*(.5-Math.random())}function Wx(i){i!==void 0&&(jf=i);let e=jf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xx(i){return i*er}function qx(i){return i*Jr}function $x(i){return(i&i-1)===0&&i!==0}function Yx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Kx(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),h=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*p,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*p,o*c);break;case"ZYZ":i.set(l*p,l*f,o*u,o*c);break;default:Me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Vg={DEG2RAD:er,RAD2DEG:Jr,generateUUID:Qn,clamp:it,euclideanModulo:Pd,mapLinear:Nx,inverseLerp:Ox,lerp:Fa,damp:Fx,pingpong:kx,smoothstep:Bx,smootherstep:zx,randInt:Vx,randFloat:Gx,randFloatSpread:Hx,seededRandom:Wx,degToRad:Xx,radToDeg:qx,isPowerOfTwo:$x,ceilPowerOfTwo:Yx,floorPowerOfTwo:Zx,setQuaternionFromProperEuler:Kx,normalize:mt,denormalize:Un},_f=class _f{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_f.prototype.isVector2=!0;let ie=_f;class _n{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],p=r[a+2],_=r[a+3];if(d!==_||l!==h||c!==f||u!==p){let g=l*h+c*f+u*p+d*_;g<0&&(h=-h,f=-f,p=-p,_=-_,g=-g);let m=1-o;if(g<.9995){const v=Math.acos(g),b=Math.sin(v);m=Math.sin(m*v)/b,o=Math.sin(o*v)/b,l=l*m+h*o,c=c*m+f*o,u=u*m+p*o,d=d*m+_*o}else{l=l*m+h*o,c=c*m+f*o,u=u*m+p*o,d=d*m+_*o;const v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+u*d+l*f-c*h,e[t+1]=l*p+u*h+c*d-o*f,e[t+2]=c*p+u*f+o*h-l*d,e[t+3]=u*p-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:Me("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const vf=class vf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Dh.copy(this).projectOnVector(e),this.sub(Dh)}reflect(e){return this.sub(Dh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vf.prototype.isVector3=!0;let P=vf;const Dh=new P,Jf=new _n,yf=class yf{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],_=s[0],g=s[3],m=s[6],v=s[1],b=s[4],y=s[7],w=s[2],M=s[5],A=s[8];return r[0]=a*_+o*v+l*w,r[3]=a*g+o*b+l*M,r[6]=a*m+o*y+l*A,r[1]=c*_+u*v+d*w,r[4]=c*g+u*b+d*M,r[7]=c*m+u*y+d*A,r[2]=h*_+f*v+p*w,r[5]=h*g+f*b+p*M,r[8]=h*m+f*y+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,p=t*d+n*h+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=d*_,e[1]=(s*c-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lh.makeScale(e,t)),this}rotate(e){return ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lh.makeRotation(-e)),this}translate(e,t){return ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};yf.prototype.isMatrix3=!0;let ot=yf;const Lh=new ot,Qf=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ep=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jx(){const i={enabled:!0,workingColorSpace:Za,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Pt&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Pt&&(s.r=Wr(s.r),s.g=Wr(s.g),s.b=Wr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qi?Ka:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Za]:{primaries:e,whitePoint:n,transfer:Ka,toXYZ:Qf,fromXYZ:ep,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:e,whitePoint:n,transfer:Pt,toXYZ:Qf,fromXYZ:ep,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),i}const vt=jx();function Ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let gr;class Gg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gr===void 0&&(gr=Ja("canvas")),gr.width=e.width,gr.height=e.height;const s=gr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=gr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ja("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ki(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ki(t[n]/255)*255):t[n]=Ki(t[n]);return{data:t,width:e.width,height:e.height}}else return Me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jx=0;class _s{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=Qn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Uh(s[a].image)):r.push(Uh(s[a]))}else r=Uh(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Uh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Me("Texture: Unable to serialize Texture."),{})}let Qx=0;const Nh=new P;class $t extends Mi{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,n=Xn,s=Xn,r=Gt,a=Ri,o=On,l=Hn,c=$t.DEFAULT_ANISOTROPY,u=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=Qn(),this.name="",this.source=new _s(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nh).x}get height(){return this.source.getSize(Nh).y}get depth(){return this.source.getSize(Nh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Me(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Me(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ha:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case Wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ha:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case Wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=kc;$t.DEFAULT_ANISOTROPY=1;const xf=class xf{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(f+1)/2,w=(m+1)/2,M=(u+h)/4,A=(d+_)/4,x=(p+g)/4;return b>y&&b>w?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=M/n,r=A/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=M/s,r=x/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=A/r,s=x/r),this.set(n,s,r,t),this}let v=Math.sqrt((g-p)*(g-p)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(d-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xf.prototype.isVector4=!0;let Dt=xf;class Dd extends Mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new $t(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new _s(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends Dd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yc extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eb extends ei{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Yc(null,e,t,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}}class Zc extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tb extends ei{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Zc(null,e,t,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}}const Tc=class Tc{constructor(e,t,n,s,r,a,o,l,c,u,d,h,f,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,d,h,f,p,_,g)}set(e,t,n,s,r,a,o,l,c,u,d,h,f,p,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tc().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/_r.setFromMatrixColumn(e,0).length(),r=1/_r.setFromMatrixColumn(e,1).length(),a=1/_r.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,f=a*d,p=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,p=c*u,_=c*d;t[0]=h+_*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-p,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,p=c*u,_=c*d;t[0]=h-_*o,t[4]=-a*d,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,p=o*u,_=o*d;t[0]=l*u,t[4]=p*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*u,t[4]=_-h*d,t[8]=p*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+p,t[10]=h-_*d}else if(e.order==="XZY"){const h=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=a*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nb,e,ib)}lookAt(e,t,n){const s=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),as.crossVectors(n,Zn),as.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),as.crossVectors(n,Zn)),as.normalize(),Ro.crossVectors(Zn,as),s[0]=as.x,s[4]=Ro.x,s[8]=Zn.x,s[1]=as.y,s[5]=Ro.y,s[9]=Zn.y,s[2]=as.z,s[6]=Ro.z,s[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],v=n[3],b=n[7],y=n[11],w=n[15],M=s[0],A=s[4],x=s[8],T=s[12],R=s[1],I=s[5],B=s[9],L=s[13],F=s[2],k=s[6],U=s[10],O=s[14],G=s[3],W=s[7],se=s[11],J=s[15];return r[0]=a*M+o*R+l*F+c*G,r[4]=a*A+o*I+l*k+c*W,r[8]=a*x+o*B+l*U+c*se,r[12]=a*T+o*L+l*O+c*J,r[1]=u*M+d*R+h*F+f*G,r[5]=u*A+d*I+h*k+f*W,r[9]=u*x+d*B+h*U+f*se,r[13]=u*T+d*L+h*O+f*J,r[2]=p*M+_*R+g*F+m*G,r[6]=p*A+_*I+g*k+m*W,r[10]=p*x+_*B+g*U+m*se,r[14]=p*T+_*L+g*O+m*J,r[3]=v*M+b*R+y*F+w*G,r[7]=v*A+b*I+y*k+w*W,r[11]=v*x+b*B+y*U+w*se,r[15]=v*T+b*L+y*O+w*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],_=e[7],g=e[11],m=e[15],v=l*f-c*h,b=o*f-c*d,y=o*h-l*d,w=a*f-c*u,M=a*h-l*u,A=a*d-o*u;return t*(_*v-g*b+m*y)-n*(p*v-g*w+m*M)+s*(p*b-_*w+m*A)-r*(p*y-_*M+g*A)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],_=e[13],g=e[14],m=e[15],v=t*o-n*a,b=t*l-s*a,y=t*c-r*a,w=n*l-s*o,M=n*c-r*o,A=s*c-r*l,x=u*_-d*p,T=u*g-h*p,R=u*m-f*p,I=d*g-h*_,B=d*m-f*_,L=h*m-f*g,F=v*L-b*B+y*I+w*R-M*T+A*x;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/F;return e[0]=(o*L-l*B+c*I)*k,e[1]=(s*B-n*L-r*I)*k,e[2]=(_*A-g*M+m*w)*k,e[3]=(h*M-d*A-f*w)*k,e[4]=(l*R-a*L-c*T)*k,e[5]=(t*L-s*R+r*T)*k,e[6]=(g*y-p*A-m*b)*k,e[7]=(u*A-h*y+f*b)*k,e[8]=(a*B-o*R+c*x)*k,e[9]=(n*R-t*B-r*x)*k,e[10]=(p*M-_*y+m*v)*k,e[11]=(d*y-u*M-f*v)*k,e[12]=(o*T-a*I-l*x)*k,e[13]=(t*I-n*T+s*x)*k,e[14]=(_*b-p*w-g*v)*k,e[15]=(u*w-d*b+h*v)*k,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,p=r*d,_=a*u,g=a*d,m=o*d,v=l*c,b=l*u,y=l*d,w=n.x,M=n.y,A=n.z;return s[0]=(1-(_+m))*w,s[1]=(f+y)*w,s[2]=(p-b)*w,s[3]=0,s[4]=(f-y)*M,s[5]=(1-(h+m))*M,s[6]=(g+v)*M,s[7]=0,s[8]=(p+b)*A,s[9]=(g-v)*A,s[10]=(1-(h+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=_r.set(s[0],s[1],s[2]).length();const o=_r.set(s[4],s[5],s[6]).length(),l=_r.set(s[8],s[9],s[10]).length();r<0&&(a=-a),pi.copy(this);const c=1/a,u=1/o,d=1/l;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=u,pi.elements[5]*=u,pi.elements[6]*=u,pi.elements[8]*=d,pi.elements[9]*=d,pi.elements[10]*=d,t.setFromRotationMatrix(pi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=jn,l=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let p,_;if(l)p=r/(a-r),_=a*r/(a-r);else if(o===jn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ir)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=jn,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s);let p,_;if(l)p=1/(a-r),_=a/(a-r);else if(o===jn)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===ir)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Tc.prototype.isMatrix4=!0;let et=Tc;const _r=new P,pi=new et,nb=new P(0,0,0),ib=new P(1,1,1),as=new P,Ro=new P,Zn=new P,tp=new et,np=new _n;class bi{constructor(e=0,t=0,n=0,s=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Me("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return np.setFromEuler(this),this.setFromQuaternion(np,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class Kc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sb=0;const ip=new P,vr=new _n,ki=new et,Io=new P,ha=new P,rb=new P,ab=new _n,sp=new P(1,0,0),rp=new P(0,1,0),ap=new P(0,0,1),op={type:"added"},ob={type:"removed"},yr={type:"childadded",child:null},Oh={type:"childremoved",child:null};class wt extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new P,t=new bi,n=new _n,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new ot}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.multiply(vr),this}rotateOnWorldAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.premultiply(vr),this}rotateX(e){return this.rotateOnAxis(sp,e)}rotateY(e){return this.rotateOnAxis(rp,e)}rotateZ(e){return this.rotateOnAxis(ap,e)}translateOnAxis(e,t){return ip.copy(e).applyQuaternion(this.quaternion),this.position.add(ip.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sp,e)}translateY(e){return this.translateOnAxis(rp,e)}translateZ(e){return this.translateOnAxis(ap,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Io.copy(e):Io.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(ha,Io,this.up):ki.lookAt(Io,ha,this.up),this.quaternion.setFromRotationMatrix(ki),s&&(ki.extractRotation(s.matrixWorld),vr.setFromRotationMatrix(ki),this.quaternion.premultiply(vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(op),yr.child=e,this.dispatchEvent(yr),yr.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ob),Oh.child=e,this.dispatchEvent(Oh),Oh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(op),yr.child=e,this.dispatchEvent(yr),yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,rb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,ab,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}wt.DEFAULT_UP=new P(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Gr extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lb={type:"move"};class Tl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lb)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Gr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Hg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Po={h:0,s:0,l:0};function Fh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=vt.workingColorSpace){if(e=Pd(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Fh(a,r,e+1/3),this.g=Fh(a,r,e),this.b=Fh(a,r,e-1/3)}return vt.colorSpaceToWorking(this,s),this}setStyle(e,t=Dn){function n(r){r!==void 0&&parseFloat(r)<1&&Me("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Me("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Me("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dn){const n=Hg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Me("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return vt.workingToColorSpace(Sn.copy(this),e),Math.round(it(Sn.r*255,0,255))*65536+Math.round(it(Sn.g*255,0,255))*256+Math.round(it(Sn.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(Sn.copy(this),t);const n=Sn.r,s=Sn.g,r=Sn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Dn){vt.workingToColorSpace(Sn.copy(this),e);const t=Sn.r,n=Sn.g,s=Sn.b;return e!==Dn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(os),this.setHSL(os.h+e,os.s+t,os.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(os),e.getHSL(Po);const n=Fa(os.h,Po.h,t),s=Fa(os.s,Po.s,t),r=Fa(os.l,Po.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new Fe;Fe.NAMES=Hg;class jc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Fe(e),this.density=t}clone(){return new jc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Jc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=t,this.far=n}clone(){return new Jc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ld extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const mi=new P,Bi=new P,kh=new P,zi=new P,xr=new P,br=new P,lp=new P,Bh=new P,zh=new P,Vh=new P,Gh=new Dt,Hh=new Dt,Wh=new Dt;class Wn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),mi.subVectors(e,t),s.cross(mi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){mi.subVectors(s,t),Bi.subVectors(n,t),kh.subVectors(e,t);const a=mi.dot(mi),o=mi.dot(Bi),l=mi.dot(kh),c=Bi.dot(Bi),u=Bi.dot(kh),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,p=(a*u-o*l)*h;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zi.x),l.addScaledVector(a,zi.y),l.addScaledVector(o,zi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Gh.setScalar(0),Hh.setScalar(0),Wh.setScalar(0),Gh.fromBufferAttribute(e,t),Hh.fromBufferAttribute(e,n),Wh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Gh,r.x),a.addScaledVector(Hh,r.y),a.addScaledVector(Wh,r.z),a}static isFrontFacing(e,t,n,s){return mi.subVectors(n,t),Bi.subVectors(e,t),mi.cross(Bi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),mi.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Wn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;xr.subVectors(s,n),br.subVectors(r,n),Bh.subVectors(e,n);const l=xr.dot(Bh),c=br.dot(Bh);if(l<=0&&c<=0)return t.copy(n);zh.subVectors(e,s);const u=xr.dot(zh),d=br.dot(zh);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(xr,a);Vh.subVectors(e,r);const f=xr.dot(Vh),p=br.dot(Vh);if(p>=0&&f<=p)return t.copy(r);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(br,o);const g=u*p-f*d;if(g<=0&&d-u>=0&&f-p>=0)return lp.subVectors(r,s),o=(d-u)/(d-u+(f-p)),t.copy(s).addScaledVector(lp,o);const m=1/(g+_+h);return a=_*m,o=h*m,t.copy(n).addScaledVector(xr,a).addScaledVector(br,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class En{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gi):gi.fromBufferAttribute(r,a),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Do.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Do.copy(n.boundingBox)),Do.applyMatrix4(e.matrixWorld),this.union(Do)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ua),Lo.subVectors(this.max,ua),Sr.subVectors(e.a,ua),Mr.subVectors(e.b,ua),wr.subVectors(e.c,ua),ls.subVectors(Mr,Sr),cs.subVectors(wr,Mr),Ds.subVectors(Sr,wr);let t=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-Ds.z,Ds.y,ls.z,0,-ls.x,cs.z,0,-cs.x,Ds.z,0,-Ds.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-Ds.y,Ds.x,0];return!Xh(t,Sr,Mr,wr,Lo)||(t=[1,0,0,0,1,0,0,0,1],!Xh(t,Sr,Mr,wr,Lo))?!1:(Uo.crossVectors(ls,cs),t=[Uo.x,Uo.y,Uo.z],Xh(t,Sr,Mr,wr,Lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vi=[new P,new P,new P,new P,new P,new P,new P,new P],gi=new P,Do=new En,Sr=new P,Mr=new P,wr=new P,ls=new P,cs=new P,Ds=new P,ua=new P,Lo=new P,Uo=new P,Ls=new P;function Xh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ls.fromArray(i,r);const o=s.x*Math.abs(Ls.x)+s.y*Math.abs(Ls.y)+s.z*Math.abs(Ls.z),l=e.dot(Ls),c=t.dot(Ls),u=n.dot(Ls);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const $i=cb();function cb(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Gn(i){Math.abs(i)>65504&&Me("DataUtils.toHalfFloat(): Value out of range."),i=it(i,-65504,65504),$i.floatView[0]=i;const e=$i.uint32View[0],t=e>>23&511;return $i.baseTable[t]+((e&8388607)>>$i.shiftTable[t])}function Ta(i){const e=i>>10;return $i.uint32View[0]=$i.mantissaTable[$i.offsetTable[e]+(i&1023)]+$i.exponentTable[e],$i.floatView[0]}class hb{static toHalfFloat(e){return Gn(e)}static fromHalfFloat(e){return Ta(e)}}const sn=new P,No=new ie;let ub=0;class Nt extends Mi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ub++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ja,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)No.fromBufferAttribute(this,t),No.applyMatrix3(e),this.setXY(t,No.x,No.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ja&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class db extends Nt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class fb extends Nt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class pb extends Nt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class mb extends Nt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Ud extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class gb extends Nt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Nd extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _b extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Ta(this.array[e*this.itemSize]);return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=Gn(t),this}getY(e){let t=Ta(this.array[e*this.itemSize+1]);return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=Gn(t),this}getZ(e){let t=Ta(this.array[e*this.itemSize+2]);return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=Gn(t),this}getW(e){let t=Ta(this.array[e*this.itemSize+3]);return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=Gn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=Gn(t),this.array[e+1]=Gn(n),this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.array[e+0]=Gn(t),this.array[e+1]=Gn(n),this.array[e+2]=Gn(s),this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=Gn(t),this.array[e+1]=Gn(n),this.array[e+2]=Gn(s),this.array[e+3]=Gn(r),this}}class ke extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const vb=new En,da=new P,qh=new P;class vn{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):vb.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;da.subVectors(e,this.center);const t=da.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(da,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(da.copy(e.center).add(qh)),this.expandByPoint(da.copy(e.center).sub(qh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let yb=0;const ni=new et,$h=new wt,Tr=new P,Kn=new En,fa=new En,hn=new P;class lt extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yb++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rx(e)?Nd:Ud)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ot().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,n){return ni.makeTranslation(e,t,n),this.applyMatrix4(ni),this}scale(e,t,n){return ni.makeScale(e,t,n),this.applyMatrix4(ni),this}lookAt(e){return $h.lookAt(e),$h.updateMatrix(),this.applyMatrix4($h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ke(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Kn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];fa.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(Kn.min,fa.min),Kn.expandByPoint(hn),hn.addVectors(Kn.max,fa.max),Kn.expandByPoint(hn)):(Kn.expandByPoint(fa.min),Kn.expandByPoint(fa.max))}Kn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)hn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(hn));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)hn.fromBufferAttribute(o,c),l&&(Tr.fromBufferAttribute(e,c),hn.add(Tr)),s=Math.max(s,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Nt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new P,l[x]=new P;const c=new P,u=new P,d=new P,h=new ie,f=new ie,p=new ie,_=new P,g=new P;function m(x,T,R){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,R),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,R),u.sub(c),d.sub(c),f.sub(h),p.sub(h);const I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(I),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(I),o[x].add(_),o[T].add(_),o[R].add(_),l[x].add(g),l[T].add(g),l[R].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,T=v.length;x<T;++x){const R=v[x],I=R.start,B=R.count;for(let L=I,F=I+B;L<F;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const b=new P,y=new P,w=new P,M=new P;function A(x){w.fromBufferAttribute(s,x),M.copy(w);const T=o[x];b.copy(T),b.sub(w.multiplyScalar(w.dot(T))).normalize(),y.crossVectors(M,T);const I=y.dot(l[x])<0?-1:1;a.setXYZW(x,b.x,b.y,b.z,I)}for(let x=0,T=v.length;x<T;++x){const R=v[x],I=R.start,B=R.count;for(let L=I,F=I+B;L<F;L+=3)A(e.getX(L+0)),A(e.getX(L+1)),A(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,d=new P;if(e)for(let h=0,f=e.count;h<f;h+=3){const p=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,p=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let m=0;m<u;m++)h[p++]=c[f++]}return new Nt(h,u,d)}if(this.index===null)return Me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new lt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qc{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ja,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rn=new P;class sr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Qa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new sr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Qa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let xb=0;class yn extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=Qs,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ul,this.blendDst=Nl,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Me(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Me(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(n.blending=this.blending),this.side!==ji&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ul&&(n.blendSrc=this.blendSrc),this.blendDst!==Nl&&(n.blendDst=this.blendDst),this.blendEquation!==ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==nr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ie().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ie().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Od extends yn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Er;const pa=new P,Ar=new P,Cr=new P,Rr=new ie,ma=new ie,Wg=new et,Oo=new P,ga=new P,Fo=new P,cp=new ie,Yh=new ie,hp=new ie;class Xg extends wt{constructor(e=new Od){if(super(),this.isSprite=!0,this.type="Sprite",Er===void 0){Er=new lt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Qc(t,5);Er.setIndex([0,1,2,0,2,3]),Er.setAttribute("position",new sr(n,3,0,!1)),Er.setAttribute("uv",new sr(n,2,3,!1))}this.geometry=Er,this.material=e,this.center=new ie(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ye('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ar.setFromMatrixScale(this.matrixWorld),Wg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Cr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ar.multiplyScalar(-Cr.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;ko(Oo.set(-.5,-.5,0),Cr,a,Ar,s,r),ko(ga.set(.5,-.5,0),Cr,a,Ar,s,r),ko(Fo.set(.5,.5,0),Cr,a,Ar,s,r),cp.set(0,0),Yh.set(1,0),hp.set(1,1);let o=e.ray.intersectTriangle(Oo,ga,Fo,!1,pa);if(o===null&&(ko(ga.set(-.5,.5,0),Cr,a,Ar,s,r),Yh.set(0,1),o=e.ray.intersectTriangle(Oo,Fo,ga,!1,pa),o===null))return;const l=e.ray.origin.distanceTo(pa);l<e.near||l>e.far||t.push({distance:l,point:pa.clone(),uv:Wn.getInterpolation(pa,Oo,ga,Fo,cp,Yh,hp,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ko(i,e,t,n,s,r){Rr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ma.x=r*Rr.x-s*Rr.y,ma.y=s*Rr.x+r*Rr.y):ma.copy(Rr),i.copy(e),i.x+=ma.x,i.y+=ma.y,i.applyMatrix4(Wg)}const Bo=new P,up=new P;class qg extends wt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,s=t.length;n<s;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const s=this.levels;let r;for(r=0;r<s.length&&!(t<s[r].distance);r++);return s.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const s=t.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,s;for(n=1,s=t.length;n<s;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Bo.setFromMatrixPosition(this.matrixWorld);const s=e.ray.origin.distanceTo(Bo);this.getObjectForDistance(s).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Bo.setFromMatrixPosition(e.matrixWorld),up.setFromMatrixPosition(this.matrixWorld);const n=Bo.distanceTo(up)/e.zoom;t[0].object.visible=!0;let s,r;for(s=1,r=t.length;s<r;s++){let a=t[s].distance;if(t[s].object.visible&&(a-=a*t[s].hysteresis),n>=a)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)t[s].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let s=0,r=n.length;s<r;s++){const a=n[s];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const Gi=new P,Zh=new P,zo=new P,hs=new P,Kh=new P,Vo=new P,jh=new P;class cr{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Zh.copy(e).add(t).multiplyScalar(.5),zo.copy(t).sub(e).normalize(),hs.copy(this.origin).sub(Zh);const r=e.distanceTo(t)*.5,a=-this.direction.dot(zo),o=hs.dot(this.direction),l=-hs.dot(zo),c=hs.lengthSq(),u=Math.abs(1-a*a);let d,h,f,p;if(u>0)if(d=a*l-o,h=a*o-l,p=r*u,d>=0)if(h>=-p)if(h<=p){const _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Zh).addScaledVector(zo,h),f}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);const n=Gi.dot(this.direction),s=Gi.dot(Gi)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,n,s,r){Kh.subVectors(t,e),Vo.subVectors(n,e),jh.crossVectors(Kh,Vo);let a=this.direction.dot(jh),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hs.subVectors(this.origin,e);const l=o*this.direction.dot(Vo.crossVectors(hs,Vo));if(l<0)return null;const c=o*this.direction.dot(Kh.cross(hs));if(c<0||l+c>a)return null;const u=-o*hs.dot(jh);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ns extends yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=_o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dp=new et,Us=new cr,Go=new vn,fp=new P,Ho=new P,Wo=new P,Xo=new P,Jh=new P,qo=new P,pp=new P,$o=new P;class nn extends wt{constructor(e=new lt,t=new ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){qo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Jh.fromBufferAttribute(d,e),a?qo.addScaledVector(Jh,u):qo.addScaledVector(Jh.sub(t),u))}t.add(qo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(r),Us.copy(e.ray).recast(e.near),!(Go.containsPoint(Us.origin)===!1&&(Us.intersectSphere(Go,fp)===null||Us.origin.distanceToSquared(fp)>(e.far-e.near)**2))&&(dp.copy(r).invert(),Us.copy(e.ray).applyMatrix4(dp),!(n.boundingBox!==null&&Us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Us)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=h.length;p<_;p++){const g=h[p],m=a[g.materialIndex],v=Math.max(g.start,f.start),b=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,w=b;y<w;y+=3){const M=o.getX(y),A=o.getX(y+1),x=o.getX(y+2);s=Yo(this,m,e,n,c,u,d,M,A,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const v=o.getX(g),b=o.getX(g+1),y=o.getX(g+2);s=Yo(this,a,e,n,c,u,d,v,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=h.length;p<_;p++){const g=h[p],m=a[g.materialIndex],v=Math.max(g.start,f.start),b=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,w=b;y<w;y+=3){const M=y,A=y+1,x=y+2;s=Yo(this,m,e,n,c,u,d,M,A,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const v=g,b=g+1,y=g+2;s=Yo(this,a,e,n,c,u,d,v,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function bb(i,e,t,n,s,r,a,o){let l;if(e.side===Fn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ji,o),l===null)return null;$o.copy(o),$o.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo($o);return c<t.near||c>t.far?null:{distance:c,point:$o.clone(),object:i}}function Yo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ho),i.getVertexPosition(l,Wo),i.getVertexPosition(c,Xo);const u=bb(i,e,t,n,Ho,Wo,Xo,pp);if(u){const d=new P;Wn.getBarycoord(pp,Ho,Wo,Xo,d),s&&(u.uv=Wn.getInterpolatedAttribute(s,o,l,c,d,new ie)),r&&(u.uv1=Wn.getInterpolatedAttribute(r,o,l,c,d,new ie)),a&&(u.normal=Wn.getInterpolatedAttribute(a,o,l,c,d,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new P,materialIndex:0};Wn.getNormal(Ho,Wo,Xo,h.normal),u.face=h,u.barycoord=d}return u}const _a=new Dt,mp=new Dt,gp=new Dt,Sb=new Dt,_p=new et,Zo=new P,Qh=new vn,vp=new et,eu=new cr;class $g extends nn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Nu,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new En),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Zo),this.boundingBox.expandByPoint(Zo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Zo),this.boundingSphere.expandByPoint(Zo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qh.copy(this.boundingSphere),Qh.applyMatrix4(s),e.ray.intersectsSphere(Qh)!==!1&&(vp.copy(s).invert(),eu.copy(e.ray).applyMatrix4(vp),!(this.boundingBox!==null&&eu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,eu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Dt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Nu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Eg?this.bindMatrixInverse.copy(this.bindMatrix).invert():Me("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;mp.fromBufferAttribute(s.attributes.skinIndex,e),gp.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(_a.copy(t),t.set(0,0,0,0)):(_a.set(...t,1),t.set(0,0,0)),_a.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=gp.getComponent(r);if(a!==0){const o=mp.getComponent(r);_p.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Sb.copy(_a).applyMatrix4(_p),a)}}return t.isVector4&&(t.w=_a.w),t.applyMatrix4(this.bindMatrixInverse)}}class Fd extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class oi extends $t{constructor(e=null,t=1,n=1,s,r,a,o,l,c=tn,u=tn,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yp=new et,Mb=new et;class eh{constructor(e=[],t=[]){this.uuid=Qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Me("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new et;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Mb;yp.multiplyMatrices(o,t[r]),yp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new eh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new oi(t,e,e,On,Nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Me("Skeleton: No bone found with UUID:",r),a=new Fd),this.bones.push(a),this.boneInverses.push(new et().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Qr extends Nt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ir=new et,xp=new et,Ko=[],bp=new En,wb=new et,va=new nn,ya=new vn;class Yg extends nn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,wb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new En),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ir),bp.copy(e.boundingBox).applyMatrix4(Ir),this.boundingBox.union(bp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ir),ya.copy(e.boundingSphere).applyMatrix4(Ir),this.boundingSphere.union(ya)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(va.geometry=this.geometry,va.material=this.material,va.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ya.copy(this.boundingSphere),ya.applyMatrix4(n),e.ray.intersectsSphere(ya)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ir),xp.multiplyMatrices(n,Ir),va.matrixWorld=xp,va.raycast(e,Ko);for(let a=0,o=Ko.length;a<o;a++){const l=Ko[a];l.instanceId=r,l.object=this,t.push(l)}Ko.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Qr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new oi(new Float32Array(s*this.count),s,this.count,Gc,Nn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const tu=new P,Tb=new P,Eb=new ot;class Xi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=tu.subVectors(n,t).cross(Tb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(tu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Eb.getNormalMatrix(e),s=this.coplanarPoint(tu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ns=new vn,Ab=new ie(.5,.5),jo=new P;class rr{constructor(e=new Xi,t=new Xi,n=new Xi,s=new Xi,r=new Xi,a=new Xi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],v=r[12],b=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-a,f-u,m-p,w-v).normalize(),s[1].setComponents(c+a,f+u,m+p,w+v).normalize(),s[2].setComponents(c+o,f+d,m+_,w+b).normalize(),s[3].setComponents(c-o,f-d,m-_,w-b).normalize(),n)s[4].setComponents(l,h,g,y).normalize(),s[5].setComponents(c-l,f-h,m-g,w-y).normalize();else if(s[4].setComponents(c-l,f-h,m-g,w-y).normalize(),t===jn)s[5].setComponents(c+l,f+h,m+g,w+y).normalize();else if(t===ir)s[5].setComponents(l,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){Ns.center.set(0,0,0);const t=Ab.distanceTo(e.center);return Ns.radius=.7071067811865476+t,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(jo.x=s.normal.x>0?e.max.x:e.min.x,jo.y=s.normal.y>0?e.max.y:e.min.y,jo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(jo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Sp=new et;class th{constructor(){this.coordinateSystem=jn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];Sp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new rr),n[s].setFromProjectionMatrix(Sp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new rr),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new th().copy(this)}}function nu(i,e){return i-e}function Cb(i,e){return i.z-e.z}function Rb(i,e){return e.z-i.z}class Ib{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,s){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=s}reset(){this.list.length=0,this.index=0}}const zn=new et,Pb=new Fe(1,1,1),Db=new rr,Lb=new th,Jo=new En,Os=new vn,xa=new P,Mp=new P,Ub=new P,iu=new Ib,Mn=new nn,Qo=[];function Nb(i,e,t=0){const n=e.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==e.array.constructor){const s=i.count;for(let r=0;r<s;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,i.getComponent(r,a))}else e.array.set(i.array,t*n);e.needsUpdate=!0}function Fs(i,e){if(i.constructor!==e.constructor){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++)e[n]=i[n]}else{const t=Math.min(i.length,e.length);e.set(new i.constructor(i.buffer,0,t))}}class Zg extends nn{constructor(e,t,n=t*2,s){super(new lt,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new oi(t,e,e,On,Nn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new oi(t,e,e,vo,hi);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new oi(t,e,e,On,Nn);n.colorSpace=vt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const a=e.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,u=new o.constructor(n*l),d=new Nt(u,l,c);t.setAttribute(r,d)}if(e.getIndex()!==null){const r=n>65535?new Uint32Array(s):new Uint16Array(s);t.setIndex(new Nt(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const s=e.getAttribute(n),r=t.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,zn),this.getBoundingBoxAt(r,Jo).applyMatrix4(zn),e.union(Jo)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,zn),this.getBoundingSphereAt(r,Os).applyMatrix4(zn),e.union(Os)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(nu),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=n):(s=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;zn.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(Pb.toArray(a.image.data,s*4),a.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=n===-1?a.count:n),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(nu),l=this._availableGeometryIds.shift(),r[l]=s):(l=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(l,e),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(s&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const u in n.attributes){const d=t.getAttribute(u),h=n.getAttribute(u);Nb(d,h,l);const f=d.itemSize;for(let p=d.count,_=c;p<_;p++){const g=l+p;for(let m=0;m<f;m++)h.setComponent(g,m,0)}h.needsUpdate=!0,h.addUpdateRange(l*f,c*f)}if(s){const u=o.indexStart,d=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let h=0;h<a.count;h++)r.setX(u+h,l+a.getX(h));for(let h=a.count,f=d;h<f;h++)r.setX(u+h,l);r.needsUpdate=!0,r.addUpdateRange(u,o.reservedIndexCount)}return o.start=s?o.indexStart:o.vertexStart,o.count=s?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let s=0,r=n.length;s<r;s++)n[s].active&&n[s].geometryIndex===e&&this.deleteInstance(s);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,s=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){const l=s[a],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){const{indexStart:u,vertexStart:d,reservedIndexCount:h}=c,f=r.index,p=f.array,_=e-d;for(let g=u;g<u+h;g++)p[g]=p[g]+_;f.array.copyWithin(t,u,u+h),f.addUpdateRange(t,h),f.needsUpdate=!0,c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:u,reservedVertexCount:d}=c,h=r.attributes;for(const f in h){const p=h[f],{array:_,itemSize:g}=p;_.copyWithin(e*g,u*g,(u+d)*g),p.addUpdateRange(e*g,d*g),p.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[e];if(s.boundingBox===null){const r=new En,a=n.index,o=n.attributes.position;for(let l=s.start,c=s.start+s.count;l<c;l++){let u=l;a&&(u=a.getX(u)),r.expandByPoint(xa.fromBufferAttribute(o,u))}s.boundingBox=r}return t.copy(s.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[e];if(s.boundingSphere===null){const r=new vn;this.getBoundingBoxAt(e,Jo),Jo.getCenter(r.center);const a=n.index,o=n.attributes.position;let l=0;for(let c=s.start,u=s.start+s.count;c<u;c++){let d=c;a&&(d=a.getX(d)),xa.fromBufferAttribute(o,d),l=Math.max(l,r.center.distanceToSquared(xa))}r.radius=Math.sqrt(l),s.boundingSphere=r}return t.copy(s.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,s=this._matricesTexture.image.data;return t.toArray(s,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(nu);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const s=new Int32Array(e),r=new Int32Array(e);Fs(this._multiDrawCounts,s),Fs(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=e;const a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),Fs(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),Fs(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Fs(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new lt,this._initializeGeometry(r));const a=this.geometry;r.index&&Fs(r.index.array,a.index.array);for(const o in r.attributes)Fs(r.attributes[o].array,a.attributes[o].array)}raycast(e,t){const n=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,a=this.geometry;Mn.material=this.material,Mn.geometry.index=a.index,Mn.geometry.attributes=a.attributes,Mn.geometry.boundingBox===null&&(Mn.geometry.boundingBox=new En),Mn.geometry.boundingSphere===null&&(Mn.geometry.boundingSphere=new vn);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;const c=n[o].geometryIndex,u=s[c];Mn.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(o,Mn.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,Mn.geometry.boundingBox),this.getBoundingSphereAt(c,Mn.geometry.boundingSphere),Mn.raycast(e,Qo);for(let d=0,h=Qo.length;d<h;d++){const f=Qo[d];f.object=this,f.batchId=o,t.push(f)}Qo.length=0}Mn.material=null,Mn.geometry.index=null,Mn.geometry.attributes={},Mn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=s.getIndex();let o=a===null?1:a.array.BYTES_PER_ELEMENT,l=1;r.wireframe&&(l=2,o=s.attributes.position.count>65535?4:2);const c=this._instanceInfo,u=this._multiDrawStarts,d=this._multiDrawCounts,h=this._geometryInfo,f=this.perObjectFrustumCulled,p=this._indirectTexture,_=p.image.data,g=n.isArrayCamera?Lb:Db;f&&(n.isArrayCamera?g.setFromArrayCamera(n):(zn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),g.setFromProjectionMatrix(zn,n.coordinateSystem,n.reversedDepth)));let m=0;if(this.sortObjects){zn.copy(this.matrixWorld).invert(),xa.setFromMatrixPosition(n.matrixWorld).applyMatrix4(zn),Mp.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(zn);for(let y=0,w=c.length;y<w;y++)if(c[y].visible&&c[y].active){const M=c[y].geometryIndex;this.getMatrixAt(y,zn),this.getBoundingSphereAt(M,Os).applyMatrix4(zn);let A=!1;if(f&&(A=!g.intersectsSphere(Os)),!A){const x=h[M],T=Ub.subVectors(Os.center,xa).dot(Mp);iu.push(x.start,x.count,T,y)}}const v=iu.list,b=this.customSort;b===null?v.sort(r.transparent?Rb:Cb):b.call(this,v,n);for(let y=0,w=v.length;y<w;y++){const M=v[y];u[m]=M.start*o*l,d[m]=M.count*l,_[m]=M.index,m++}iu.reset()}else for(let v=0,b=c.length;v<b;v++)if(c[v].visible&&c[v].active){const y=c[v].geometryIndex;let w=!1;if(f&&(this.getMatrixAt(v,zn),this.getBoundingSphereAt(y,Os).applyMatrix4(zn),w=!g.intersectsSphere(Os)),!w){const M=h[y];u[m]=M.start*o*l,d[m]=M.count*l,_[m]=v,m++}}p.needsUpdate=!0,this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(e,t,n,s,r,a){this.onBeforeRender(e,null,s,r,a)}}class kn extends yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xc=new P,bc=new P,wp=new et,ba=new cr,el=new vn,su=new P,Tp=new P;class ws extends wt{constructor(e=new lt,t=new kn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)xc.fromBufferAttribute(t,s-1),bc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=xc.distanceTo(bc);e.setAttribute("lineDistance",new ke(n,1))}else Me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),el.copy(n.boundingSphere),el.applyMatrix4(s),el.radius+=r,e.ray.intersectsSphere(el)===!1)return;wp.copy(s).invert(),ba.copy(e.ray).applyMatrix4(wp);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=c){const m=u.getX(_),v=u.getX(_+1),b=tl(this,e,ba,l,m,v,_);b&&t.push(b)}if(this.isLineLoop){const _=u.getX(p-1),g=u.getX(f),m=tl(this,e,ba,l,_,g,p-1);m&&t.push(m)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=c){const m=tl(this,e,ba,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=tl(this,e,ba,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function tl(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(xc.fromBufferAttribute(o,s),bc.fromBufferAttribute(o,r),t.distanceSqToSegment(xc,bc,su,Tp)>n)return;su.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(su);if(!(c<e.near||c>e.far))return{distance:c,point:Tp.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Ep=new P,Ap=new P;class Oi extends ws{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ep.fromBufferAttribute(t,s),Ap.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ep.distanceTo(Ap);e.setAttribute("lineDistance",new ke(n,1))}else Me("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Kg extends ws{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}let kd=class extends yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};const Cp=new et,Bu=new cr,nl=new vn,il=new P;class jg extends wt{constructor(e=new lt,t=new kd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nl.copy(n.boundingSphere),nl.applyMatrix4(s),nl.radius+=r,e.ray.intersectsSphere(nl)===!1)return;Cp.copy(s).invert(),Bu.copy(e.ray).applyMatrix4(Cp);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=h,_=f;p<_;p++){const g=c.getX(p);il.fromBufferAttribute(d,g),Rp(il,g,l,s,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=h,_=f;p<_;p++)il.fromBufferAttribute(d,p),Rp(il,p,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Rp(i,e,t,n,s,r,a){const o=Bu.distanceSqToPoint(i);if(o<t){const l=new P;Bu.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Jg extends $t{constructor(e,t,n,s,r=Gt,a=Gt,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function d(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Ob extends Jg{constructor(e,t,n,s,r,a,o,l){super({},e,t,n,s,r,a,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class Fb extends $t{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=tn,this.minFilter=tn,this.generateMipmaps=!1,this.needsUpdate=!0}}class nh extends $t{constructor(e,t,n,s,r,a,o,l,c,u,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class kb extends nh{constructor(e,t,n,s,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=Xn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bb extends nh{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Di),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class yo extends $t{constructor(e=[],t=Di,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zb extends $t{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vb extends $t{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;const u=e?e.parentNode:null;u!==null&&"requestPaint"in u&&(u.onpaint=()=>{this.needsUpdate=!0},u.requestPaint())}dispose(){const e=this.image?this.image.parentNode:null;e!==null&&"onpaint"in e&&(e.onpaint=null),super.dispose()}}class ar extends $t{constructor(e,t,n=hi,s,r,a,o=tn,l=tn,c,u=Ui,d=1){if(u!==Ui&&u!==gs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _s(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Qg extends ar{constructor(e,t=hi,n=Di,s,r,a=tn,o=tn,l,c=Ui){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Bd extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class As extends lt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(d,2));function p(_,g,m,v,b,y,w,M,A,x,T){const R=y/A,I=w/x,B=y/2,L=w/2,F=M/2,k=A+1,U=x+1;let O=0,G=0;const W=new P;for(let se=0;se<U;se++){const J=se*I-L;for(let te=0;te<k;te++){const Ce=te*R-B;W[_]=Ce*v,W[g]=J*b,W[m]=F,c.push(W.x,W.y,W.z),W[_]=0,W[g]=0,W[m]=M>0?1:-1,u.push(W.x,W.y,W.z),d.push(te/A),d.push(1-se/x),O+=1}}for(let se=0;se<x;se++)for(let J=0;J<A;J++){const te=h+J+k*se,Ce=h+J+k*(se+1),ct=h+(J+1)+k*(se+1),at=h+(J+1)+k*se;l.push(te,Ce,at),l.push(Ce,ct,at),G+=6}o.addGroup(f,G,T),f+=G,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ih extends lt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],u=t/2,d=Math.PI/2*e,h=t,f=2*d+h,p=n*2+r,_=s+1,g=new P,m=new P;for(let v=0;v<=p;v++){let b=0,y=0,w=0,M=0;if(v<=n){const T=v/n,R=T*Math.PI/2;y=-u-e*Math.cos(R),w=e*Math.sin(R),M=-e*Math.cos(R),b=T*d}else if(v<=n+r){const T=(v-n)/r;y=-u+T*t,w=e,M=0,b=d+T*h}else{const T=(v-n-r)/n,R=T*Math.PI/2;y=u+e*Math.sin(R),w=e*Math.cos(R),M=e*Math.sin(R),b=d+h+T*d}const A=Math.max(0,Math.min(1,b/f));let x=0;v===0?x=.5/s:v===p&&(x=-.5/s);for(let T=0;T<=s;T++){const R=T/s,I=R*Math.PI*2,B=Math.sin(I),L=Math.cos(I);m.x=-w*L,m.y=y,m.z=w*B,o.push(m.x,m.y,m.z),g.set(-w*L,M,w*B),g.normalize(),l.push(g.x,g.y,g.z),c.push(R+x,A)}if(v>0){const T=(v-1)*_;for(let R=0;R<s;R++){const I=T+R,B=T+R+1,L=v*_+R,F=v*_+R+1;a.push(I,B,L),a.push(B,F,L)}}}this.setIndex(a),this.setAttribute("position",new ke(o,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ih(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class sh extends lt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new P,u=new ie;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(o,3)),this.setAttribute("uv",new ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class xo extends lt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let p=0;const _=[],g=n/2;let m=0;v(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new ke(d,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(f,2));function v(){const y=new P,w=new P;let M=0;const A=(t-e)/n;for(let x=0;x<=r;x++){const T=[],R=x/r,I=R*(t-e)+e;for(let B=0;B<=s;B++){const L=B/s,F=L*l+o,k=Math.sin(F),U=Math.cos(F);w.x=I*k,w.y=-R*n+g,w.z=I*U,d.push(w.x,w.y,w.z),y.set(k,A,U).normalize(),h.push(y.x,y.y,y.z),f.push(L,1-R),T.push(p++)}_.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){const R=_[T][x],I=_[T+1][x],B=_[T+1][x+1],L=_[T][x+1];(e>0||T!==0)&&(u.push(R,I,L),M+=3),(t>0||T!==r-1)&&(u.push(I,B,L),M+=3)}c.addGroup(m,M,0),m+=M}function b(y){const w=p,M=new ie,A=new P;let x=0;const T=y===!0?e:t,R=y===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,g*R,0),h.push(0,R,0),f.push(.5,.5),p++;const I=p;for(let B=0;B<=s;B++){const F=B/s*l+o,k=Math.cos(F),U=Math.sin(F);A.x=T*U,A.y=g*R,A.z=T*k,d.push(A.x,A.y,A.z),h.push(0,R,0),M.x=k*.5+.5,M.y=U*.5*R+.5,f.push(M.x,M.y),p++}for(let B=0;B<s;B++){const L=w+B,F=I+B;y===!0?u.push(F,F+1,L):u.push(F+1,F,L),x+=3}c.addGroup(m,x,y===!0?1:2),m+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bo extends xo{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new bo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cs extends lt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new ke(r,3)),this.setAttribute("normal",new ke(r.slice(),3)),this.setAttribute("uv",new ke(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const b=new P,y=new P,w=new P;for(let M=0;M<t.length;M+=3)f(t[M+0],b),f(t[M+1],y),f(t[M+2],w),l(b,y,w,v)}function l(v,b,y,w){const M=w+1,A=[];for(let x=0;x<=M;x++){A[x]=[];const T=v.clone().lerp(y,x/M),R=b.clone().lerp(y,x/M),I=M-x;for(let B=0;B<=I;B++)B===0&&x===M?A[x][B]=T:A[x][B]=T.clone().lerp(R,B/I)}for(let x=0;x<M;x++)for(let T=0;T<2*(M-x)-1;T++){const R=Math.floor(T/2);T%2===0?(h(A[x][R+1]),h(A[x+1][R]),h(A[x][R])):(h(A[x][R+1]),h(A[x+1][R+1]),h(A[x+1][R]))}}function c(v){const b=new P;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(v),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function u(){const v=new P;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];const y=g(v)/2/Math.PI+.5,w=m(v)/Math.PI+.5;a.push(y,1-w)}p(),d()}function d(){for(let v=0;v<a.length;v+=6){const b=a[v+0],y=a[v+2],w=a[v+4],M=Math.max(b,y,w),A=Math.min(b,y,w);M>.9&&A<.1&&(b<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),w<.2&&(a[v+4]+=1))}}function h(v){r.push(v.x,v.y,v.z)}function f(v,b){const y=v*3;b.x=e[y+0],b.y=e[y+1],b.z=e[y+2]}function p(){const v=new P,b=new P,y=new P,w=new P,M=new ie,A=new ie,x=new ie;for(let T=0,R=0;T<r.length;T+=9,R+=6){v.set(r[T+0],r[T+1],r[T+2]),b.set(r[T+3],r[T+4],r[T+5]),y.set(r[T+6],r[T+7],r[T+8]),M.set(a[R+0],a[R+1]),A.set(a[R+2],a[R+3]),x.set(a[R+4],a[R+5]),w.copy(v).add(b).add(y).divideScalar(3);const I=g(w);_(M,R+0,v,I),_(A,R+2,b,I),_(x,R+4,y,I)}}function _(v,b,y,w){w<0&&v.x===1&&(a[b]=v.x-1),y.x===0&&y.z===0&&(a[b]=w/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.vertices,e.indices,e.radius,e.detail)}}class rh extends Cs{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new rh(e.radius,e.detail)}}const sl=new P,rl=new P,ru=new P,al=new Wn;class e0 extends lt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(er*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:_,b:g,c:m}=al;if(_.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),al.getNormal(ru),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){const b=(v+1)%3,y=d[v],w=d[b],M=al[u[v]],A=al[u[b]],x=`${y}_${w}`,T=`${w}_${y}`;T in h&&h[T]?(ru.dot(h[T].normal)<=r&&(f.push(M.x,M.y,M.z),f.push(A.x,A.y,A.z)),h[T]=null):x in h||(h[x]={index0:c[v],index1:c[b],normal:ru.clone()})}}for(const p in h)if(h[p]){const{index0:_,index1:g}=h[p];sl.fromBufferAttribute(o,_),rl.fromBufferAttribute(o,g),f.push(sl.x,sl.y,sl.z),f.push(rl.x,rl.y,rl.z)}this.setAttribute("position",new ke(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class wi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Me("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ie:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,s=[],r=[],a=[],o=new P,l=new et;for(let f=0;f<=e;f++){const p=f/e;s[f]=this.getTangentAt(p,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(it(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(it(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ah extends wi{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ie){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class t0 extends ah{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function zd(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Ip=new P,Pp=new P,au=new zd,ou=new zd,lu=new zd;class n0 extends wi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Pp.subVectors(s[0],s[1]).add(s[0]),c=Pp);const d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Ip.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ip),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),au.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,p,_,g),ou.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,p,_,g),lu.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,p,_,g)}else this.curveType==="catmullrom"&&(au.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),ou.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),lu.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(au.calc(l),ou.calc(l),lu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Dp(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Gb(i,e){const t=1-i;return t*t*e}function Hb(i,e){return 2*(1-i)*i*e}function Wb(i,e){return i*i*e}function ka(i,e,t,n){return Gb(i,e)+Hb(i,t)+Wb(i,n)}function Xb(i,e){const t=1-i;return t*t*t*e}function qb(i,e){const t=1-i;return 3*t*t*i*e}function $b(i,e){return 3*(1-i)*i*i*e}function Yb(i,e){return i*i*i*e}function Ba(i,e,t,n,s){return Xb(i,e)+qb(i,t)+$b(i,n)+Yb(i,s)}class Vd extends wi{constructor(e=new ie,t=new ie,n=new ie,s=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ie){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ba(e,s.x,r.x,a.x,o.x),Ba(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class i0 extends wi{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ba(e,s.x,r.x,a.x,o.x),Ba(e,s.y,r.y,a.y,o.y),Ba(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gd extends wi{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class s0 extends wi{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hd extends wi{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ka(e,s.x,r.x,a.x),ka(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wd extends wi{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ka(e,s.x,r.x,a.x),ka(e,s.y,r.y,a.y),ka(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xd extends wi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Dp(o,l.x,c.x,u.x,d.x),Dp(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ie().fromArray(s))}return this}}var Sc=Object.freeze({__proto__:null,ArcCurve:t0,CatmullRomCurve3:n0,CubicBezierCurve:Vd,CubicBezierCurve3:i0,EllipseCurve:ah,LineCurve:Gd,LineCurve3:s0,QuadraticBezierCurve:Hd,QuadraticBezierCurve3:Wd,SplineCurve:Xd});class r0 extends wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Sc[s.type]().fromJSON(s))}return this}}class eo extends r0{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Gd(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Hd(this.currentPoint.clone(),new ie(e,t),new ie(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new Vd(this.currentPoint.clone(),new ie(e,t),new ie(n,s),new ie(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Xd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){const c=new ah(e,t,n,s,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class So extends eo{constructor(e){super(e),this.uuid=Qn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new eo().fromJSON(s))}return this}}function Zb(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=a0(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=eS(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let u=o,d=l;for(let h=t;h<s;h+=t){const f=i[h],p=i[h+1];f<o&&(o=f),p<l&&(l=p),f>u&&(u=f),p>d&&(d=p)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return to(r,a,t,o,l,c,0),a}function a0(i,e,t,n,s){let r;if(s===uS(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Lp(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Lp(a/n|0,i[a],i[a+1],r);return r&&ea(r,r.next)&&(io(r),r=r.next),r}function or(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ea(t,t.next)||Xt(t.prev,t,t.next)===0)){if(io(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function to(i,e,t,n,s,r,a){if(!i)return;!a&&r&&rS(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?jb(i,n,s,r):Kb(i)){e.push(l.i,i.i,c.i),io(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Jb(or(i),e),to(i,e,t,n,s,r,2)):a===2&&Qb(i,e,t,n,s,r):to(or(i),e,t,n,s,r,1);break}}}function Kb(i){const e=i.prev,t=i,n=i.next;if(Xt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),f=Math.max(o,l,c);let p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&Ea(s,o,r,l,a,c,p.x,p.y)&&Xt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function jb(i,e,t,n){const s=i.prev,r=i,a=i.next;if(Xt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,l,c),p=Math.min(u,d,h),_=Math.max(o,l,c),g=Math.max(u,d,h),m=zu(f,p,e,t,n),v=zu(_,g,e,t,n);let b=i.prevZ,y=i.nextZ;for(;b&&b.z>=m&&y&&y.z<=v;){if(b.x>=f&&b.x<=_&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&Ea(o,u,l,d,c,h,b.x,b.y)&&Xt(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&Ea(o,u,l,d,c,h,y.x,y.y)&&Xt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=_&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&Ea(o,u,l,d,c,h,b.x,b.y)&&Xt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&Ea(o,u,l,d,c,h,y.x,y.y)&&Xt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Jb(i,e){let t=i;do{const n=t.prev,s=t.next.next;!ea(n,s)&&l0(n,t,t.next,s)&&no(n,s)&&no(s,n)&&(e.push(n.i,t.i,s.i),io(t),io(t.next),t=i=s),t=t.next}while(t!==i);return or(t)}function Qb(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&lS(a,o)){let l=c0(a,o);a=or(a,a.next),l=or(l,l.next),to(a,e,t,n,s,r,0),to(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function eS(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=a0(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(oS(c))}s.sort(tS);for(let r=0;r<s.length;r++)t=nS(s[r],t);return t}function tS(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function nS(i,e){const t=iS(i,e);if(!t)return e;const n=c0(t,i);return or(n,n.next),or(t,t.next)}function iS(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(ea(i,t))return t;do{if(ea(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&o0(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const d=Math.abs(s-t.y)/(n-t.x);no(t,i)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&sS(a,t)))&&(a=t,u=d)}t=t.next}while(t!==o);return a}function sS(i,e){return Xt(i.prev,i,e.prev)<0&&Xt(e.next,i,i.next)<0}function rS(i,e,t,n){let s=i;do s.z===0&&(s.z=zu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,aS(s)}function aS(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function zu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function oS(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function o0(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ea(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&o0(i,e,t,n,s,r,a,o)}function lS(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!cS(i,e)&&(no(i,e)&&no(e,i)&&hS(i,e)&&(Xt(i.prev,i,e.prev)||Xt(i,e.prev,e))||ea(i,e)&&Xt(i.prev,i,i.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ea(i,e){return i.x===e.x&&i.y===e.y}function l0(i,e,t,n){const s=ll(Xt(i,e,t)),r=ll(Xt(i,e,n)),a=ll(Xt(t,n,i)),o=ll(Xt(t,n,e));return!!(s!==r&&a!==o||s===0&&ol(i,t,e)||r===0&&ol(i,n,e)||a===0&&ol(t,i,n)||o===0&&ol(t,e,n))}function ol(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ll(i){return i>0?1:i<0?-1:0}function cS(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&l0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function no(i,e){return Xt(i.prev,i,i.next)<0?Xt(i,e,i.next)>=0&&Xt(i,i.prev,e)>=0:Xt(i,e,i.prev)<0||Xt(i,i.next,e)<0}function hS(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function c0(i,e){const t=Vu(i.i,i.x,i.y),n=Vu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Lp(i,e,t,n){const s=Vu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function io(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function uS(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class dS{static triangulate(e,t,n=2){return Zb(e,t,n)}}class vi{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return vi.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Up(e),Np(n,e);let a=e.length;t.forEach(Up);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Np(n,t[l]);const o=dS.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Up(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Np(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class oh extends lt{constructor(e=new So([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new ke(s,3)),this.setAttribute("uv",new ke(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:fS;let b,y=!1,w,M,A,x;if(m){b=m.getSpacedPoints(u),y=!0,h=!1;const re=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(u,re),M=new P,A=new P,x=new P}h||(g=0,f=0,p=0,_=0);const T=o.extractPoints(c);let R=T.shape;const I=T.holes;if(!vi.isClockWise(R)){R=R.reverse();for(let re=0,ae=I.length;re<ae;re++){const oe=I[re];vi.isClockWise(oe)&&(I[re]=oe.reverse())}}function L(re){const oe=10000000000000001e-36;let Se=re[0];for(let be=1;be<=re.length;be++){const Qe=be%re.length,ye=re[Qe],ve=ye.x-Se.x,Pe=ye.y-Se.y,z=ve*ve+Pe*Pe,Tt=Math.max(Math.abs(ye.x),Math.abs(ye.y),Math.abs(Se.x),Math.abs(Se.y)),gt=oe*Tt*Tt;if(z<=gt){re.splice(Qe,1),be--;continue}Se=ye}}L(R),I.forEach(L);const F=I.length,k=R;for(let re=0;re<F;re++){const ae=I[re];R=R.concat(ae)}function U(re,ae,oe){return ae||Ye("ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(ae,oe)}const O=R.length;function G(re,ae,oe){let Se,be,Qe;const ye=re.x-ae.x,ve=re.y-ae.y,Pe=oe.x-re.x,z=oe.y-re.y,Tt=ye*ye+ve*ve,gt=ye*z-ve*Pe;if(Math.abs(gt)>Number.EPSILON){const D=Math.sqrt(Tt),S=Math.sqrt(Pe*Pe+z*z),q=ae.x-ve/D,N=ae.y+ye/D,H=oe.x-z/S,ne=oe.y+Pe/S,ce=((H-q)*z-(ne-N)*Pe)/(ye*z-ve*Pe);Se=q+ye*ce-re.x,be=N+ve*ce-re.y;const $=Se*Se+be*be;if($<=2)return new ie(Se,be);Qe=Math.sqrt($/2)}else{let D=!1;ye>Number.EPSILON?Pe>Number.EPSILON&&(D=!0):ye<-Number.EPSILON?Pe<-Number.EPSILON&&(D=!0):Math.sign(ve)===Math.sign(z)&&(D=!0),D?(Se=-ve,be=ye,Qe=Math.sqrt(Tt)):(Se=ye,be=ve,Qe=Math.sqrt(Tt/2))}return new ie(Se/Qe,be/Qe)}const W=[];for(let re=0,ae=k.length,oe=ae-1,Se=re+1;re<ae;re++,oe++,Se++)oe===ae&&(oe=0),Se===ae&&(Se=0),W[re]=G(k[re],k[oe],k[Se]);const se=[];let J,te=W.concat();for(let re=0,ae=F;re<ae;re++){const oe=I[re];J=[];for(let Se=0,be=oe.length,Qe=be-1,ye=Se+1;Se<be;Se++,Qe++,ye++)Qe===be&&(Qe=0),ye===be&&(ye=0),J[Se]=G(oe[Se],oe[Qe],oe[ye]);se.push(J),te=te.concat(J)}let Ce;if(g===0)Ce=vi.triangulateShape(k,I);else{const re=[],ae=[];for(let oe=0;oe<g;oe++){const Se=oe/g,be=f*Math.cos(Se*Math.PI/2),Qe=p*Math.sin(Se*Math.PI/2)+_;for(let ye=0,ve=k.length;ye<ve;ye++){const Pe=U(k[ye],W[ye],Qe);We(Pe.x,Pe.y,-be),Se===0&&re.push(Pe)}for(let ye=0,ve=F;ye<ve;ye++){const Pe=I[ye];J=se[ye];const z=[];for(let Tt=0,gt=Pe.length;Tt<gt;Tt++){const D=U(Pe[Tt],J[Tt],Qe);We(D.x,D.y,-be),Se===0&&z.push(D)}Se===0&&ae.push(z)}}Ce=vi.triangulateShape(re,ae)}const ct=Ce.length,at=p+_;for(let re=0;re<O;re++){const ae=h?U(R[re],te[re],at):R[re];y?(A.copy(w.normals[0]).multiplyScalar(ae.x),M.copy(w.binormals[0]).multiplyScalar(ae.y),x.copy(b[0]).add(A).add(M),We(x.x,x.y,x.z)):We(ae.x,ae.y,0)}for(let re=1;re<=u;re++)for(let ae=0;ae<O;ae++){const oe=h?U(R[ae],te[ae],at):R[ae];y?(A.copy(w.normals[re]).multiplyScalar(oe.x),M.copy(w.binormals[re]).multiplyScalar(oe.y),x.copy(b[re]).add(A).add(M),We(x.x,x.y,x.z)):We(oe.x,oe.y,d/u*re)}for(let re=g-1;re>=0;re--){const ae=re/g,oe=f*Math.cos(ae*Math.PI/2),Se=p*Math.sin(ae*Math.PI/2)+_;for(let be=0,Qe=k.length;be<Qe;be++){const ye=U(k[be],W[be],Se);We(ye.x,ye.y,d+oe)}for(let be=0,Qe=I.length;be<Qe;be++){const ye=I[be];J=se[be];for(let ve=0,Pe=ye.length;ve<Pe;ve++){const z=U(ye[ve],J[ve],Se);y?We(z.x,z.y+b[u-1].y,b[u-1].x+oe):We(z.x,z.y,d+oe)}}}ee(),_e();function ee(){const re=s.length/3;if(h){let ae=0,oe=O*ae;for(let Se=0;Se<ct;Se++){const be=Ce[Se];Je(be[2]+oe,be[1]+oe,be[0]+oe)}ae=u+g*2,oe=O*ae;for(let Se=0;Se<ct;Se++){const be=Ce[Se];Je(be[0]+oe,be[1]+oe,be[2]+oe)}}else{for(let ae=0;ae<ct;ae++){const oe=Ce[ae];Je(oe[2],oe[1],oe[0])}for(let ae=0;ae<ct;ae++){const oe=Ce[ae];Je(oe[0]+O*u,oe[1]+O*u,oe[2]+O*u)}}n.addGroup(re,s.length/3-re,0)}function _e(){const re=s.length/3;let ae=0;ue(k,ae),ae+=k.length;for(let oe=0,Se=I.length;oe<Se;oe++){const be=I[oe];ue(be,ae),ae+=be.length}n.addGroup(re,s.length/3-re,1)}function ue(re,ae){let oe=re.length;for(;--oe>=0;){const Se=oe;let be=oe-1;be<0&&(be=re.length-1);for(let Qe=0,ye=u+g*2;Qe<ye;Qe++){const ve=O*Qe,Pe=O*(Qe+1),z=ae+Se+ve,Tt=ae+be+ve,gt=ae+be+Pe,D=ae+Se+Pe;he(z,Tt,gt,D)}}}function We(re,ae,oe){l.push(re),l.push(ae),l.push(oe)}function Je(re,ae,oe){Re(re),Re(ae),Re(oe);const Se=s.length/3,be=v.generateTopUV(n,s,Se-3,Se-2,Se-1);ze(be[0]),ze(be[1]),ze(be[2])}function he(re,ae,oe,Se){Re(re),Re(ae),Re(Se),Re(ae),Re(oe),Re(Se);const be=s.length/3,Qe=v.generateSideWallUV(n,s,be-6,be-3,be-2,be-1);ze(Qe[0]),ze(Qe[1]),ze(Qe[3]),ze(Qe[1]),ze(Qe[2]),ze(Qe[3])}function Re(re){s.push(l[re*3+0]),s.push(l[re*3+1]),s.push(l[re*3+2])}function ze(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return pS(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Sc[s.type]().fromJSON(s)),new oh(n,e.options)}}const fS={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new ie(r,a),new ie(o,l),new ie(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[s*3],f=e[s*3+1],p=e[s*3+2],_=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new ie(a,1-l),new ie(c,1-d),new ie(h,1-p),new ie(_,1-m)]:[new ie(o,1-l),new ie(u,1-d),new ie(f,1-p),new ie(g,1-m)]}};function pS(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class lh extends Cs{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new lh(e.radius,e.detail)}}class ch extends lt{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=it(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/t,d=new P,h=new ie,f=new P,p=new P,_=new P;let g=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-g,f.z=m*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(p)}for(let v=0;v<=t;v++){const b=n+v*u*s,y=Math.sin(b),w=Math.cos(b);for(let M=0;M<=e.length-1;M++){d.x=e[M].x*y,d.y=e[M].y,d.z=e[M].x*w,a.push(d.x,d.y,d.z),h.x=v/t,h.y=M/(e.length-1),o.push(h.x,h.y);const A=l[3*M+0]*y,x=l[3*M+1],T=l[3*M+0]*w;c.push(A,x,T)}}for(let v=0;v<t;v++)for(let b=0;b<e.length-1;b++){const y=b+v*e.length,w=y,M=y+e.length,A=y+e.length+1,x=y+1;r.push(w,M,x),r.push(A,x,M)}this.setIndex(r),this.setAttribute("position",new ke(a,3)),this.setAttribute("uv",new ke(o,2)),this.setAttribute("normal",new ke(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ch(e.points,e.segments,e.phiStart,e.phiLength)}}class Mo extends Cs{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Mo(e.radius,e.detail)}}class ra extends lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,f=[],p=[],_=[],g=[];for(let m=0;m<u;m++){const v=m*h-a;for(let b=0;b<c;b++){const y=b*d-r;p.push(y,-v,0),_.push(0,0,1),g.push(b/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){const b=v+c*m,y=v+c*(m+1),w=v+1+c*(m+1),M=v+1+c*m;f.push(b,y,M),f.push(y,w,M)}this.setIndex(f),this.setAttribute("position",new ke(p,3)),this.setAttribute("normal",new ke(_,3)),this.setAttribute("uv",new ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.widthSegments,e.heightSegments)}}class hh extends lt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let d=e;const h=(t-e)/s,f=new P,p=new ie;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){const m=r+g/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}d+=h}for(let _=0;_<s;_++){const g=_*(n+1);for(let m=0;m<n;m++){const v=m+g,b=v,y=v+n+1,w=v+n+2,M=v+1;o.push(b,y,M),o.push(y,w,M)}}this.setIndex(o),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class uh extends lt{constructor(e=new So([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ke(s,3)),this.setAttribute("normal",new ke(r,3)),this.setAttribute("uv",new ke(a,2));function c(u){const d=s.length/3,h=u.extractPoints(t);let f=h.shape;const p=h.holes;vi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const v=p[g];vi.isClockWise(v)===!0&&(p[g]=v.reverse())}const _=vi.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const v=p[g];f=f.concat(v)}for(let g=0,m=f.length;g<m;g++){const v=f[g];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let g=0,m=_.length;g<m;g++){const v=_[g],b=v[0]+d,y=v[1]+d,w=v[2]+d;n.push(b,y,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return mS(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];n.push(a)}return new uh(n,e.curveSegments)}}function mS(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class wo extends lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new P,h=new P,f=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const v=[],b=m/n,y=a+b*o,w=e*Math.cos(y),M=Math.sqrt(e*e-w*w);let A=0;m===0&&a===0?A=.5/t:m===n&&l===Math.PI&&(A=-.5/t);for(let x=0;x<=t;x++){const T=x/t,R=s+T*r;d.x=-M*Math.cos(R),d.y=w,d.z=M*Math.sin(R),p.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),g.push(T+A,1-b),v.push(c++)}u.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){const b=u[m][v+1],y=u[m][v],w=u[m+1][v],M=u[m+1][v+1];(m!==0||a>0)&&f.push(b,y,M),(m!==n-1||l<Math.PI)&&f.push(y,w,M)}this.setIndex(f),this.setAttribute("position",new ke(p,3)),this.setAttribute("normal",new ke(_,3)),this.setAttribute("uv",new ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class dh extends Cs{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new dh(e.radius,e.detail)}}class fh extends lt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],d=[],h=new P,f=new P,p=new P;for(let _=0;_<=n;_++){const g=a+_/n*o;for(let m=0;m<=s;m++){const v=m/s*r;f.x=(e+t*Math.cos(g))*Math.cos(v),f.y=(e+t*Math.cos(g))*Math.sin(v),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),p.subVectors(f,h).normalize(),u.push(p.x,p.y,p.z),d.push(m/s),d.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=s;g++){const m=(s+1)*_+g-1,v=(s+1)*(_-1)+g-1,b=(s+1)*(_-1)+g,y=(s+1)*_+g;l.push(m,v,y),l.push(v,b,y)}this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ph extends lt{constructor(e=1,t=.4,n=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:s,p:r,q:a},n=Math.floor(n),s=Math.floor(s);const o=[],l=[],c=[],u=[],d=new P,h=new P,f=new P,p=new P,_=new P,g=new P,m=new P;for(let b=0;b<=n;++b){const y=b/n*r*Math.PI*2;v(y,r,a,e,f),v(y+.01,r,a,e,p),g.subVectors(p,f),m.addVectors(p,f),_.crossVectors(g,m),m.crossVectors(_,g),_.normalize(),m.normalize();for(let w=0;w<=s;++w){const M=w/s*Math.PI*2,A=-t*Math.cos(M),x=t*Math.sin(M);d.x=f.x+(A*m.x+x*_.x),d.y=f.y+(A*m.y+x*_.y),d.z=f.z+(A*m.z+x*_.z),l.push(d.x,d.y,d.z),h.subVectors(d,f).normalize(),c.push(h.x,h.y,h.z),u.push(b/n),u.push(w/s)}}for(let b=1;b<=n;b++)for(let y=1;y<=s;y++){const w=(s+1)*(b-1)+(y-1),M=(s+1)*b+(y-1),A=(s+1)*b+y,x=(s+1)*(b-1)+y;o.push(w,M,x),o.push(M,A,x)}this.setIndex(o),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(u,2));function v(b,y,w,M,A){const x=Math.cos(b),T=Math.sin(b),R=w/y*b,I=Math.cos(R);A.x=M*(2+I)*.5*x,A.y=M*(2+I)*T*.5,A.z=M*Math.sin(R)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ph(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class mh extends lt{constructor(e=new Wd(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,l=new P,c=new ie;let u=new P;const d=[],h=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new ke(d,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(f,2));function _(){for(let b=0;b<t;b++)g(b);g(r===!1?t:0),v(),m()}function g(b){u=e.getPointAt(b/t,u);const y=a.normals[b],w=a.binormals[b];for(let M=0;M<=s;M++){const A=M/s*Math.PI*2,x=Math.sin(A),T=-Math.cos(A);l.x=T*y.x+x*w.x,l.y=T*y.y+x*w.y,l.z=T*y.z+x*w.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let b=1;b<=t;b++)for(let y=1;y<=s;y++){const w=(s+1)*(b-1)+(y-1),M=(s+1)*b+(y-1),A=(s+1)*b+y,x=(s+1)*(b-1)+y;p.push(w,M,x),p.push(M,A,x)}}function v(){for(let b=0;b<=t;b++)for(let y=0;y<=s;y++)c.x=b/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new mh(new Sc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class h0 extends lt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new P,r=new P;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const d=l[c],h=d.start,f=d.count;for(let p=h,_=h+f;p<_;p+=3)for(let g=0;g<3;g++){const m=o.getX(p+g),v=o.getX(p+(g+1)%3);s.fromBufferAttribute(a,m),r.fromBufferAttribute(a,v),Op(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const u=3*o+c,d=3*o+(c+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,d),Op(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new ke(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Op(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}var Fp=Object.freeze({__proto__:null,BoxGeometry:As,CapsuleGeometry:ih,CircleGeometry:sh,ConeGeometry:bo,CylinderGeometry:xo,DodecahedronGeometry:rh,EdgesGeometry:e0,ExtrudeGeometry:oh,IcosahedronGeometry:lh,LatheGeometry:ch,OctahedronGeometry:Mo,PlaneGeometry:ra,PolyhedronGeometry:Cs,RingGeometry:hh,ShapeGeometry:uh,SphereGeometry:wo,TetrahedronGeometry:dh,TorusGeometry:fh,TorusKnotGeometry:ph,TubeGeometry:mh,WireframeGeometry:h0});class u0 extends yn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Fe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function ta(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(kp(s))s.isRenderTargetTexture?(Me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(kp(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function In(i){const e={};for(let t=0;t<i.length;t++){const n=ta(i[t]);for(const s in n)e[s]=n[s]}return e}function kp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function gS(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function d0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const qd={clone:ta,merge:In};var _S=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_S,this.fragmentShader=vS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ta(e.uniforms),this.uniformsGroups=gS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Fe().setHex(s.value);break;case"v2":this.uniforms[n].value=new ie().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Dt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ot().fromArray(s.value);break;case"m4":this.uniforms[n].value=new et().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class $d extends ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yd extends yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ji,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class f0 extends Yd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class p0 extends yn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Fe(16777215),this.specular=new Fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ji,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=_o,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class m0 extends yn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Fe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ji,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class g0 extends yn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ji,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class _0 extends yn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ji,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=_o,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zd extends yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ig,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kd extends yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class v0 extends yn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Fe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ji,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}class y0 extends kn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Ks(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function x0(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Gu(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function b0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}function yS(i,e,t,n,s=30){const r=i.clone();r.name=e;const a=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],u=c.getValueSize(),d=[],h=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*s;if(!(p<t||p>=n)){d.push(c.times[f]);for(let _=0;_<u;++_)h.push(c.values[f*u+_])}}d.length!==0&&(c.times=Ks(d,c.times.constructor),c.values=Ks(h,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function xS(i,e=0,t=i,n=30){n<=0&&(n=30);const s=t.tracks.length,r=e/n;for(let a=0;a<s;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=i.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let u=0;const d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);let h=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=f/3);const p=o.times.length-1;let _;if(r<=o.times[0]){const m=u,v=d-u;_=o.values.slice(m,v)}else if(r>=o.times[p]){const m=p*d+u,v=m+d-u;_=o.values.slice(m,v)}else{const m=o.createInterpolant(),v=u,b=d-u;m.evaluate(r),_=m.resultBuffer.slice(v,b)}l==="quaternion"&&new _n().fromArray(_).normalize().conjugate().toArray(_);const g=c.times.length;for(let m=0;m<g;++m){const v=m*f+h;if(l==="quaternion")_n.multiplyQuaternionsFlat(c.values,v,_,0,c.values,v);else{const b=f-h*2;for(let y=0;y<b;++y)c.values[v+y]-=_[y]}}}return i.blendMode=Id,i}class bS{static convertArray(e,t){return Ks(e,t)}static isTypedArray(e){return kg(e)}static getKeyframeOrder(e){return x0(e)}static sortedArray(e,t,n){return Gu(e,t,n)}static flattenJSON(e,t,n,s){b0(e,t,n,s)}static subclip(e,t,n,s,r=30){return yS(e,t,n,s,r)}static makeClipAdditive(e,t=0,n=e,s=30){return xS(e,t,n,s)}}class aa{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class S0 extends aa{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ys,endingEnd:Ys}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Zs:r=e,o=2*t-n;break;case Ya:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zs:a=e,l=2*n-t;break;case Ya:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),_=p*p,g=_*p,m=-h*g+2*h*_-h*p,v=(1+h)*g+(-1.5-2*h)*_+(-.5+h)*p+1,b=(-1-f)*g+(1.5+f)*_+.5*p,y=f*g-f*_;for(let w=0;w!==o;++w)r[w]=m*a[u+w]+v*a[c+w]+b*a[l+w]+y*a[d+w];return r}}class jd extends aa{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}}class M0 extends aa{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class w0 extends aa{interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){const p=(n-t)/(s-t),_=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*_+a[l+g]*p;return r}const h=o*2,f=e-1;for(let p=0;p!==o;++p){const _=a[c+p],g=a[l+p],m=f*h+p*2,v=d[m],b=d[m+1],y=e*h+p*2,w=u[y],M=u[y+1];let A=(n-t)/(s-t),x,T,R,I,B;for(let L=0;L<8;L++){x=A*A,T=x*A,R=1-A,I=R*R,B=I*R;const k=B*t+3*I*A*v+3*R*x*w+T*s-n;if(Math.abs(k)<1e-10)break;const U=3*I*(v-t)+6*R*A*(w-v)+3*x*(s-w);if(Math.abs(U)<1e-10)break;A=A-k/U,A=Math.max(0,Math.min(1,A))}r[p]=B*_+3*I*A*b+3*R*x*M+T*g}return r}}class fi{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ks(t,this.TimeBufferType),this.values=Ks(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ks(e.times,Array),values:Ks(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new M0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new S0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new w0(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case $a:t=this.InterpolantFactoryMethodDiscrete;break;case yc:t=this.InterpolantFactoryMethodLinear;break;case wl:t=this.InterpolantFactoryMethodSmooth;break;case Ou:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Me("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $a;case this.InterpolantFactoryMethodLinear:return yc;case this.InterpolantFactoryMethodSmooth:return wl;case this.InterpolantFactoryMethodBezier:return Ou}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Ye("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ye("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&kg(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){Ye("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===wl,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{const d=o*n,h=d-n,f=d+n;for(let p=0;p!==n;++p){const _=t[d+p];if(_!==t[h+p]||_!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}fi.prototype.ValueTypeName="";fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=yc;class hr extends fi{constructor(e,t,n){super(e,t,n)}}hr.prototype.ValueTypeName="bool";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=$a;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;class Jd extends fi{constructor(e,t,n,s){super(e,t,n,s)}}Jd.prototype.ValueTypeName="color";class gh extends fi{constructor(e,t,n,s){super(e,t,n,s)}}gh.prototype.ValueTypeName="number";class T0 extends aa{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let c=e*o;for(let u=c+o;c!==u;c+=4)_n.slerpFlat(r,0,a,c-o,a,c,l);return r}}class _h extends fi{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new T0(this.times,this.values,this.getValueSize(),e)}}_h.prototype.ValueTypeName="quaternion";_h.prototype.InterpolantFactoryMethodSmooth=void 0;class ur extends fi{constructor(e,t,n){super(e,t,n)}}ur.prototype.ValueTypeName="string";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=$a;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;class Qd extends fi{constructor(e,t,n,s){super(e,t,n,s)}}Qd.prototype.ValueTypeName="vector";class so{constructor(e="",t=-1,n=[],s=Xc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Qn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(MS(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(fi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=x0(l);l=Gu(l,1,u),c=Gu(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new gh(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const d=u[1];let h=s[d];h||(s[d]=h=[]),h.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function SS(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return gh;case"vector":case"vector2":case"vector3":case"vector4":return Qd;case"color":return Jd;case"quaternion":return _h;case"bool":case"boolean":return hr;case"string":return ur}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function MS(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=SS(i.type);if(i.times===void 0){const t=[],n=[];b0(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Ii={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Bp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Bp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Bp(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class ef{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const dr=new ef;class qn{constructor(e){this.manager=e!==void 0?e:dr,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}qn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hi={};class wS extends Error{constructor(e,t){super(e),this.response=t}}class Qi extends qn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ii.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Hi[e]!==void 0){Hi[e].push({onLoad:t,onProgress:n,onError:s});return}Hi[e]=[],Hi[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Me("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Hi[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,p=f!==0;let _=0;const g=new ReadableStream({start(m){v();function v(){d.read().then(({done:b,value:y})=>{if(b)m.close();else{_+=y.byteLength;const w=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let M=0,A=u.length;M<A;M++){const x=u[M];x.onProgress&&x.onProgress(w)}m.enqueue(y),v()}},b=>{m.error(b)})}}});return new Response(g)}else throw new wS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Ii.add(`file:${e}`,c);const u=Hi[e];delete Hi[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Hi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Hi[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class TS extends qn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new Qi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):Ye(l),r.manager.itemError(e)}},n,s)}parse(e){const t=[];for(let n=0;n<e.length;n++){const s=so.parse(e[n]);t.push(s)}return t}}class ES extends qn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=[],o=new nh,l=new Qi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function u(d){l.load(e[d],function(h){const f=r.parse(h,!0);a[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=Gt),o.image=a,o.format=f.format,o.needsUpdate=!0,t&&t(o))},n,s)}if(Array.isArray(e))for(let d=0,h=e.length;d<h;++d)u(d);else l.load(e,function(d){const h=r.parse(d,!0);if(h.isCubemap){const f=h.mipmaps.length/h.mipmapCount;for(let p=0;p<f;p++){a[p]={mipmaps:[]};for(let _=0;_<h.mipmapCount;_++)a[p].mipmaps.push(h.mipmaps[p*h.mipmapCount+_]),a[p].format=h.format,a[p].width=h.width,a[p].height=h.height}o.image=a}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=Gt),o.format=h.format,o.needsUpdate=!0,t&&t(o)},n,s);return o}}const Pr=new WeakMap;class ro extends qn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ii.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Pr.get(a);d===void 0&&(d=[],Pr.set(a,d)),d.push({onLoad:t,onError:s})}return a}const o=Ja("img");function l(){u(),t&&t(this);const d=Pr.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}Pr.delete(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),Ii.remove(`image:${e}`);const h=Pr.get(this)||[];for(let f=0;f<h.length;f++){const p=h[f];p.onError&&p.onError(d)}Pr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ii.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class AS extends qn{constructor(e){super(e)}load(e,t,n,s){const r=new yo;r.colorSpace=Dn;const a=new ro(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){r.images[c]=u,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,s)}for(let c=0;c<e.length;++c)l(c);return r}}class CS extends qn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new oi,o=new Qi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(u){s!==void 0?s(u):Ye(u);return}r._applyTexData(a,c),t&&t(a,c)},n,s),a}createDataTexture(e){const t=new oi;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Xn,e.wrapT=t.wrapT!==void 0?t.wrapT:Xn,e.magFilter=t.magFilter!==void 0?t.magFilter:Gt,e.minFilter=t.minFilter!==void 0?t.minFilter:Gt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Ri),t.mipmapCount===1&&(e.minFilter=Gt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class RS extends qn{constructor(e){super(e)}load(e,t,n,s){const r=new $t,a=new ro(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Rs extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class E0 extends Rs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const cu=new et,zp=new P,Vp=new P;class tf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=Hn,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rr,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zp.setFromMatrixPosition(e.matrixWorld),t.position.copy(zp),Vp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vp),t.updateMatrixWorld(),cu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cu,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ir||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const cl=new P,hl=new _n,Ei=new P;let vh=class extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(cl,hl,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cl,hl,Ei.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(cl,hl,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cl,hl,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const us=new P,Gp=new ie,Hp=new ie;class pn extends vh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jr*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,t){return this.getViewBounds(e,Gp,Hp),t.subVectors(Hp,Gp)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(er*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class IS extends tf{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Jr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class A0 extends Rs{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new IS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class PS extends tf{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0}}class C0 extends Rs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new PS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class oa extends vh{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class DS extends tf{constructor(){super(new oa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class R0 extends Rs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new DS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class I0 extends Rs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class P0 extends Rs{constructor(e,t,n=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class nf{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new P)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,s=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*s),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*s)),t.addScaledVector(a[5],1.092548*(s*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-s*s)),t}getIrradianceAt(e,t){const n=e.x,s=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*s),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*s),t.addScaledVector(a[5],2*.429043*s*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-s*s)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].fromArray(e,t+s*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].toArray(e,t+s*3);return e}static getBasisAt(e,t){const n=e.x,s=e.y,r=e.z;t[0]=.282095,t[1]=.488603*s,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*s,t[5]=1.092548*s*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-s*s)}}class D0 extends Rs{constructor(e=new nf,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}const Wp={};class yh extends qn{constructor(e){super(e),this.textures={}}load(e,t,n,s){const r=this,a=new Qi(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):Ye(l),r.manager.itemError(e)}},n,s)}parse(e){const t=this.createMaterialFromType(e.type);return t.fromJSON(e,this.textures),t}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return yh.createMaterialFromType(e)}static createMaterialFromType(e){const n={ShadowMaterial:u0,SpriteMaterial:Od,RawShaderMaterial:$d,ShaderMaterial:ui,PointsMaterial:kd,MeshPhysicalMaterial:f0,MeshStandardMaterial:Yd,MeshPhongMaterial:p0,MeshToonMaterial:m0,MeshNormalMaterial:g0,MeshLambertMaterial:_0,MeshDepthMaterial:Zd,MeshDistanceMaterial:Kd,MeshBasicMaterial:ns,MeshMatcapMaterial:v0,LineDashedMaterial:y0,LineBasicMaterial:kn,Material:yn,...Wp}[e];let s;return n===void 0?(ys(`MaterialLoader: Unknown material type "${e}". Use .registerMaterial() before starting the deserialization process.`),s=new yn):s=new n,s}static registerMaterial(e,t){Wp[e]=t}}class Hu{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class L0 extends lt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class U0 extends qn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new Qi(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):Ye(l),r.manager.itemError(e)}},n,s)}parse(e){const t={},n={};function s(f,p){if(t[p]!==void 0)return t[p];const g=f.interleavedBuffers[p],m=r(f,g.buffer),v=Vr(g.type,m),b=new Qc(v,g.stride);return b.uuid=g.uuid,t[p]=b,b}function r(f,p){if(n[p]!==void 0)return n[p];const g=f.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}const a=e.isInstancedBufferGeometry?new L0:new lt,o=e.data.index;if(o!==void 0){const f=Vr(o.type,o.array);a.setIndex(new Nt(f,1))}const l=e.data.attributes;for(const f in l){const p=l[f];let _;if(p.isInterleavedBufferAttribute){const g=s(e.data,p.data);_=new sr(g,p.itemSize,p.offset,p.normalized)}else{const g=Vr(p.type,p.array),m=p.isInstancedBufferAttribute?Qr:Nt;_=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),a.setAttribute(f,_)}const c=e.data.morphAttributes;if(c)for(const f in c){const p=c[f],_=[];for(let g=0,m=p.length;g<m;g++){const v=p[g];let b;if(v.isInterleavedBufferAttribute){const y=s(e.data,v.data);b=new sr(y,v.itemSize,v.offset,v.normalized)}else{const y=Vr(v.type,v.array);b=new Nt(y,v.itemSize,v.normalized)}v.name!==void 0&&(b.name=v.name),_.push(b)}a.morphAttributes[f]=_}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const d=e.data.groups||e.data.drawcalls||e.data.offsets;if(d!==void 0)for(let f=0,p=d.length;f!==p;++f){const _=d[f];a.addGroup(_.start,_.count,_.materialIndex)}const h=e.data.boundingSphere;return h!==void 0&&(a.boundingSphere=new vn().fromJSON(h)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}const hu={};class LS extends qn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=this.path===""?Hu.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new Qi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(d){s!==void 0&&s(d),Ye("ObjectLoader: Can't parse "+e+".",d.message);return}const u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){s!==void 0&&s(new Error("THREE.ObjectLoader: Can't load "+e)),Ye("ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,s)}async loadAsync(e,t){const n=this,s=this.path===""?Hu.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||s;const r=new Qi(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(e,t);let o;try{o=JSON.parse(a)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+e+". "+c.message)}const l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),s=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,s),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,l,o,n),u=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,u),this.bindLightTargets(c),t!==void 0){let d=!1;for(const h in a)if(a[h].data instanceof HTMLImageElement){d=!0;break}d===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,s,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(e,t){hu[e]=t}parseShapes(e){const t={};if(e!==void 0)for(let n=0,s=e.length;n<s;n++){const r=new So().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},s={};if(t.traverse(function(r){r.isBone&&(s[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=new eh().fromJSON(e[r],s);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const s=new U0;for(let r=0,a=e.length;r<a;r++){let o;const l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=s.parse(l);break;default:l.type in Fp?o=Fp[l.type].fromJSON(l,t):l.type in hu?o=hu[l.type].fromJSON(l,t):Me(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){const n={},s={};if(e!==void 0){const r=new yh;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){const l=e[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),s[l.uuid]=n[l.uuid]}}return s}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const s=e[n],r=so.parse(s);t[r.uuid]=r}return t}parseImages(e,t){const n=this,s={};let r;function a(l){return l=n.manager.resolveURL(l),n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(u)}else return l.data?{data:Vr(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new ef(t);r=new ro(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,u=e.length;c<u;c++){const d=e[c],h=d.url;if(Array.isArray(h)){const f=[];for(let p=0,_=h.length;p<_;p++){const g=h[p],m=o(g);m!==null&&(m instanceof HTMLImageElement?f.push(m):f.push(new oi(m.data,m.width,m.height)))}s[d.uuid]=new _s(f)}else{const f=o(d.url);s[d.uuid]=new _s(f)}}}return s}async parseImagesAsync(e){const t=this,n={};let s;async function r(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await s.loadAsync(l)}else return a.data?{data:Vr(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){s=new ro(this.manager),s.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.url;if(Array.isArray(c)){const u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d],p=await r(f);p!==null&&(p instanceof HTMLImageElement?u.push(p):u.push(new oi(p.data,p.width,p.height)))}n[l.uuid]=new _s(u)}else{const u=await r(l.url);n[l.uuid]=new _s(u)}}}return n}parseTextures(e,t){function n(r,a){return typeof r=="number"?r:(Me("ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const s={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=e[r];o.image===void 0&&Me('ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&Me("ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let u;Array.isArray(c)?(u=new yo,c.length===6&&(u.needsUpdate=!0)):(c&&c.data?u=new oi:u=new $t,c&&(u.needsUpdate=!0)),u.source=l,u.uuid=o.uuid,o.name!==void 0&&(u.name=o.name),o.mapping!==void 0&&(u.mapping=n(o.mapping,US)),o.channel!==void 0&&(u.channel=o.channel),o.offset!==void 0&&u.offset.fromArray(o.offset),o.repeat!==void 0&&u.repeat.fromArray(o.repeat),o.center!==void 0&&u.center.fromArray(o.center),o.rotation!==void 0&&(u.rotation=o.rotation),o.wrap!==void 0&&(u.wrapS=n(o.wrap[0],Xp),u.wrapT=n(o.wrap[1],Xp)),o.format!==void 0&&(u.format=o.format),o.internalFormat!==void 0&&(u.internalFormat=o.internalFormat),o.type!==void 0&&(u.type=o.type),o.colorSpace!==void 0&&(u.colorSpace=o.colorSpace),o.minFilter!==void 0&&(u.minFilter=n(o.minFilter,qp)),o.magFilter!==void 0&&(u.magFilter=n(o.magFilter,qp)),o.anisotropy!==void 0&&(u.anisotropy=o.anisotropy),o.flipY!==void 0&&(u.flipY=o.flipY),o.generateMipmaps!==void 0&&(u.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(u.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(u.compareFunction=o.compareFunction),o.normalized!==void 0&&(u.normalized=o.normalized),o.userData!==void 0&&(u.userData=o.userData),s[o.uuid]=u}return s}parseObject(e,t,n,s,r){let a;function o(h){return t[h]===void 0&&Me("ObjectLoader: Undefined geometry",h),t[h]}function l(h){if(h!==void 0){if(Array.isArray(h)){const f=[];for(let p=0,_=h.length;p<_;p++){const g=h[p];n[g]===void 0&&Me("ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[h]===void 0&&Me("ObjectLoader: Undefined material",h),n[h]}}function c(h){return s[h]===void 0&&Me("ObjectLoader: Undefined texture",h),s[h]}let u,d;switch(e.type){case"Scene":a=new Ld,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new Fe(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new Jc(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new jc(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new pn(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new oa(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new I0(e.color,e.intensity);break;case"DirectionalLight":a=new R0(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new C0(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new P0(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new A0(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new E0(e.color,e.groundColor,e.intensity);break;case"LightProbe":const h=new nf().fromArray(e.sh);a=new D0(h,e.intensity);break;case"SkinnedMesh":u=o(e.geometry),d=l(e.material),a=new $g(u,d),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":u=o(e.geometry),d=l(e.material),a=new nn(u,d);break;case"InstancedMesh":u=o(e.geometry),d=l(e.material);const f=e.count,p=e.instanceMatrix,_=e.instanceColor;a=new Yg(u,d,f),a.instanceMatrix=new Qr(new Float32Array(p.array),16),_!==void 0&&(a.instanceColor=new Qr(new Float32Array(_.array),_.itemSize));break;case"BatchedMesh":u=o(e.geometry),d=l(e.material),a=new Zg(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,d),a.geometry=u,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._geometryInfo=e.geometryInfo.map(g=>{let m=null,v=null;return g.boundingBox!==void 0&&(m=new En().fromJSON(g.boundingBox)),g.boundingSphere!==void 0&&(v=new vn().fromJSON(g.boundingSphere)),{...g,boundingBox:m,boundingSphere:v}}),a._instanceInfo=e.instanceInfo,a._availableInstanceIds=e._availableInstanceIds,a._availableGeometryIds=e._availableGeometryIds,a._nextIndexStart=e.nextIndexStart,a._nextVertexStart=e.nextVertexStart,a._geometryCount=e.geometryCount,a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._matricesTexture=c(e.matricesTexture.uuid),a._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(a.boundingSphere=new vn().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(a.boundingBox=new En().fromJSON(e.boundingBox));break;case"LOD":a=new qg;break;case"Line":a=new ws(o(e.geometry),l(e.material));break;case"LineLoop":a=new Kg(o(e.geometry),l(e.material));break;case"LineSegments":a=new Oi(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new jg(o(e.geometry),l(e.material));break;case"Sprite":a=new Xg(l(e.material));break;case"Group":a=new Gr;break;case"Bone":a=new Fd;break;default:a=new wt}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.pivot!==void 0&&(a.pivot=new P().fromArray(e.pivot)),e.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.static!==void 0&&(a.static=e.static),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const h=e.children;for(let f=0;f<h.length;f++)a.add(this.parseObject(h[f],t,n,s,r))}if(e.animations!==void 0){const h=e.animations;for(let f=0;f<h.length;f++){const p=h[f];a.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const h=e.levels;for(let f=0;f<h.length;f++){const p=h[f],_=a.getObjectByProperty("uuid",p.object);_!==void 0&&a.addLevel(_,p.distance,p.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const s=t[n.skeleton];s===void 0?Me("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(s,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,s=e.getObjectByProperty("uuid",n);s!==void 0?t.target=s:t.target=new wt}})}}const US={UVMapping:kc,CubeReflectionMapping:Di,CubeRefractionMapping:bs,EquirectangularReflectionMapping:Ia,EquirectangularRefractionMapping:Pa,CubeUVReflectionMapping:sa},Xp={RepeatWrapping:Ha,ClampToEdgeWrapping:Xn,MirroredRepeatWrapping:Wa},qp={NearestFilter:tn,NearestMipmapNearestFilter:Md,NearestMipmapLinearFilter:zr,LinearFilter:Gt,LinearMipmapNearestFilter:Da,LinearMipmapLinearFilter:Ri},uu=new WeakMap;class NS extends qn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Me("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Me("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ii.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{uu.has(a)===!0?(s&&s(uu.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){Ii.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){s&&s(c),uu.set(l,c),Ii.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ii.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let ul;class sf{static getContext(){return ul===void 0&&(ul=new(window.AudioContext||window.webkitAudioContext)),ul}static setContext(e){ul=e}}class OS extends qn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new Qi(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0),u=sf.getContext(),d=e+"#decode";r.manager.itemStart(d),u.decodeAudioData(c,function(h){t(h),r.manager.itemEnd(d)}).catch(function(h){o(h),r.manager.itemEnd(d)})}catch(c){o(c)}},n,s);function o(l){s?s(l):Ye(l),r.manager.itemError(e)}}}const $p=new et,Yp=new et,ks=new et;class FS{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new pn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new pn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,ks.copy(e.projectionMatrix);const s=t.eyeSep/2,r=s*t.near/t.focus,a=t.near*Math.tan(er*t.fov*.5)/t.zoom;let o,l;Yp.elements[12]=-s,$p.elements[12]=s,o=-a*t.aspect+r,l=a*t.aspect+r,ks.elements[0]=2*t.near/(l-o),ks.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(ks),o=-a*t.aspect-r,l=a*t.aspect-r,ks.elements[0]=2*t.near/(l-o),ks.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(ks)}this.cameraL.matrix.copy(e.matrixWorld).multiply(Yp),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(e.matrixWorld).multiply($p),this.cameraR.matrixWorldNeedsUpdate=!0}}const Dr=-90,Lr=1;class N0 extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(Dr,Lr,e,t);s.layers=this.layers,this.add(s);const r=new pn(Dr,Lr,e,t);r.layers=this.layers,this.add(r);const a=new pn(Dr,Lr,e,t);a.layers=this.layers,this.add(a);const o=new pn(Dr,Lr,e,t);o.layers=this.layers,this.add(o);const l=new pn(Dr,Lr,e,t);l.layers=this.layers,this.add(l);const c=new pn(Dr,Lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class O0 extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class F0{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=kS.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function kS(){this._document.hidden===!1&&this.reset()}const Bs=new P,du=new _n,BS=new P,zs=new P,Vs=new P;class zS extends wt{constructor(){super(),this.type="AudioListener",this.context=sf.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new F0}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();const t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Bs,du,BS),zs.set(0,0,-1).applyQuaternion(du),Vs.set(0,1,0).applyQuaternion(du),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Bs.x,n),t.positionY.linearRampToValueAtTime(Bs.y,n),t.positionZ.linearRampToValueAtTime(Bs.z,n),t.forwardX.linearRampToValueAtTime(zs.x,n),t.forwardY.linearRampToValueAtTime(zs.y,n),t.forwardZ.linearRampToValueAtTime(zs.z,n),t.upX.linearRampToValueAtTime(Vs.x,n),t.upY.linearRampToValueAtTime(Vs.y,n),t.upZ.linearRampToValueAtTime(Vs.z,n)}else t.setPosition(Bs.x,Bs.y,Bs.z),t.setOrientation(zs.x,zs.y,zs.z,Vs.x,Vs.y,Vs.z)}}class k0 extends wt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){Me("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Me("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Me("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){Me("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){Me("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Me("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){Me("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(Me("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const Gs=new P,Zp=new _n,VS=new P,Hs=new P;class GS extends k0{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Gs,Zp,VS),Hs.set(0,0,1).applyQuaternion(Zp);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Gs.x,n),t.positionY.linearRampToValueAtTime(Gs.y,n),t.positionZ.linearRampToValueAtTime(Gs.z,n),t.orientationX.linearRampToValueAtTime(Hs.x,n),t.orientationY.linearRampToValueAtTime(Hs.y,n),t.orientationZ.linearRampToValueAtTime(Hs.z,n)}else t.setPosition(Gs.x,Gs.y,Gs.z),t.setOrientation(Hs.x,Hs.y,Hs.z)}}class HS{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class B0{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){_n.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const a=this._workIndex*r;_n.multiplyQuaternionsFlat(e,a,e,t,e,n),_n.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){const a=1-s;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*s}}}const rf="\\[\\]\\.:\\/",WS=new RegExp("["+rf+"]","g"),af="[^"+rf+"]",XS="[^"+rf.replace("\\.","")+"]",qS=/((?:WC+[\/:])*)/.source.replace("WC",af),$S=/(WCOD+)?/.source.replace("WCOD",XS),YS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",af),ZS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",af),KS=new RegExp("^"+qS+$S+YS+ZS+"$"),jS=["material","materials","bones","map"];class JS{constructor(e,t,n){const s=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class At{constructor(e,t,n){this.path=t,this.parsedPath=n||At.parseTrackName(t),this.node=At.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new At.Composite(e,t,n):new At(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(WS,"")}static parseTrackName(e){const t=KS.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);jS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=At.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Me("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}At.Composite=JS;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class QS{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Qn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,s=arguments.length;n!==s;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,s=this._parsedPaths,r=this._bindings,a=r.length;let o,l=e.length,c=this.nCachedObjects_;for(let u=0,d=arguments.length;u!==d;++u){const h=arguments[u],f=h.uuid;let p=t[f];if(p===void 0){p=l++,t[f]=p,e.push(h);for(let _=0,g=a;_!==g;++_)r[_].push(new At(h,n[_],s[_]))}else if(p<c){o=e[p];const _=--c,g=e[_];t[g.uuid]=p,e[p]=g,t[f]=_,e[_]=h;for(let m=0,v=a;m!==v;++m){const b=r[m],y=b[_];let w=b[p];b[p]=y,w===void 0&&(w=new At(h,n[m],s[m])),b[_]=w}}else e[p]!==o&&Ye("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,s=n.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,u=t[c];if(u!==void 0&&u>=r){const d=r++,h=e[d];t[h.uuid]=u,e[u]=h,t[c]=d,e[d]=l;for(let f=0,p=s;f!==p;++f){const _=n[f],g=_[d],m=_[u];_[u]=g,_[d]=m}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,s=n.length;let r=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],u=c.uuid,d=t[u];if(d!==void 0)if(delete t[u],d<r){const h=--r,f=e[h],p=--a,_=e[p];t[f.uuid]=d,e[d]=f,t[_.uuid]=h,e[h]=_,e.pop();for(let g=0,m=s;g!==m;++g){const v=n[g],b=v[h],y=v[p];v[d]=b,v[h]=y,v.pop()}}else{const h=--a,f=e[h];h>0&&(t[f.uuid]=d),e[d]=f,e.pop();for(let p=0,_=s;p!==_;++p){const g=n[p];g[d]=g[h],g.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let s=n[e];const r=this._bindings;if(s!==void 0)return r[s];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,d=new Array(c);s=r.length,n[e]=s,a.push(e),o.push(t),r.push(d);for(let h=u,f=l.length;h!==f;++h){const p=l[h];d[h]=new At(p,e,t)}return d}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const s=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),s[n]=s[o],s.pop()}}}class z0{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Ys,endingEnd:Ys};for(let c=0;c!==a;++c){const u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Cg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Id:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case Xc:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(a),c[u].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const a=n===Rg;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===Ag){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){const o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=Zs,s.endingEnd=Zs):(e?s.endingStart=this.zeroSlopeAtStart?Zs:Ys:s.endingStart=Ya,t?s.endingEnd=this.zeroSlopeAtEnd?Zs:Ys:s.endingEnd=Ya)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const eM=new Float32Array(1);class tM extends Mi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let d=0;d!==r;++d){const h=s[d],f=h.name;let p=u[f];if(p!==void 0)++p.referenceCount,a[d]=p;else{if(p=a[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const _=t&&t._propertyBindings[d].binding.parsedPath;p=new B0(At.create(n,f,_),h.ValueTypeName,h.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[d]=p}o[d].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,h=(e._localRoot||this._root).uuid;delete d[h],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new jd(new Float32Array(2),new Float32Array(2),1,eM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let a=typeof e=="string"?so.findByName(s,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Xc),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new z0(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?so.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class nM extends Dd{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isRenderTarget3D=!0,this.depth=n,this.texture=new Zc(null,e,t,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}}class of{constructor(e){this.value=e}clone(){return new of(this.value.clone===void 0?this.value:this.value.clone())}}let iM=0;class sM extends Mi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:iM++}),this.name="",this.usage=ja,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,s=t.length;n<s;n++){const r=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class rM extends Qc{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class aM{constructor(e,t,n,s,r,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=s,this.count=r,this.normalized=a,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Kp=new et;class oM{constructor(e,t,n=0,s=1/0){this.ray=new cr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Kc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ye("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kp),this}intersectObject(e,t=!0,n=[]){return Wu(e,this,n,t),n.sort(jp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Wu(e[s],this,n,t);return n.sort(jp),n}}function jp(i,e){return i.distance-e.distance}function Wu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Wu(r[a],e,t,!0)}}class lM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Me("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Xu{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=it(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(it(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class cM{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const bf=class bf{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};bf.prototype.isMatrix2=!0;let qu=bf;const Jp=new ie;class V0{constructor(e=new ie(1/0,1/0),t=new ie(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jp.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jp).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qp=new P,dl=new P,Ur=new P,Nr=new P,fu=new P,hM=new P,uM=new P;class dM{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Qp.subVectors(e,this.start),dl.subVectors(this.end,this.start);const n=dl.dot(dl);if(n===0)return 0;let r=dl.dot(Qp)/n;return t&&(r=it(r,0,1)),r}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=hM,n=uM){const s=10000000000000001e-32;let r,a;const o=this.start,l=e.start,c=this.end,u=e.end;Ur.subVectors(c,o),Nr.subVectors(u,l),fu.subVectors(o,l);const d=Ur.dot(Ur),h=Nr.dot(Nr),f=Nr.dot(fu);if(d<=s&&h<=s)return t.copy(o),n.copy(l),t.sub(n),t.dot(t);if(d<=s)r=0,a=f/h,a=it(a,0,1);else{const p=Ur.dot(fu);if(h<=s)a=0,r=it(-p/d,0,1);else{const _=Ur.dot(Nr),g=d*h-_*_;g!==0?r=it((_*f-p*h)/g,0,1):r=0,a=(_*r+f)/h,a<0?(a=0,r=it(-p/d,0,1)):a>1&&(a=1,r=it((_-p)/d,0,1))}}return t.copy(o).addScaledVector(Ur,r),n.copy(l).addScaledVector(Nr,a),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const em=new P;class fM extends wt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new lt,s=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,u=o/l*Math.PI*2;s.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new ke(s,3));const r=new kn({fog:!1,toneMapped:!1});this.cone=new Oi(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),em.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(em),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const ds=new P,fl=new et,pu=new et;class pM extends Oi{constructor(e){const t=G0(e),n=new lt,s=[],r=[];for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(s.push(0,0,0),s.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new ke(s,3)),n.setAttribute("color",new ke(r,3));const a=new kn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const o=new Fe(255),l=new Fe(65280);this.setColors(o,l)}updateMatrixWorld(e){const t=this.bones,n=this.geometry,s=n.getAttribute("position");pu.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(fl.multiplyMatrices(pu,o.matrixWorld),ds.setFromMatrixPosition(fl),s.setXYZ(a,ds.x,ds.y,ds.z),fl.multiplyMatrices(pu,o.parent.matrixWorld),ds.setFromMatrixPosition(fl),s.setXYZ(a+1,ds.x,ds.y,ds.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const s=this.geometry.getAttribute("color");for(let r=0;r<s.count;r+=2)s.setXYZ(r,e.r,e.g,e.b),s.setXYZ(r+1,t.r,t.g,t.b);return s.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function G0(i){const e=[];i.isBone===!0&&e.push(i);for(let t=0;t<i.children.length;t++)e.push(...G0(i.children[t]));return e}class mM extends nn{constructor(e,t,n){const s=new wo(t,4,2),r=new ns({wireframe:!0,fog:!1,toneMapped:!1});super(s,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const gM=new P,tm=new Fe,nm=new Fe;class _M extends wt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const s=new Mo(t);s.rotateY(Math.PI*.5),this.material=new ns({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=s.getAttribute("position"),a=new Float32Array(r.count*3);s.setAttribute("color",new Nt(a,3)),this.add(new nn(s,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");tm.copy(this.light.color),nm.copy(this.light.groundColor);for(let n=0,s=t.count;n<s;n++){const r=n<s/2?tm:nm;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),e.lookAt(gM.setFromMatrixPosition(this.light.matrixWorld).negate())}}class vM extends Oi{constructor(e=10,t=10,n=4473924,s=8947848){n=new Fe(n),s=new Fe(s);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let h=0,f=0,p=-o;h<=t;h++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const _=h===r?n:s;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const u=new lt;u.setAttribute("position",new ke(l,3)),u.setAttribute("color",new ke(c,3));const d=new kn({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class yM extends Oi{constructor(e=10,t=16,n=8,s=64,r=4473924,a=8947848){r=new Fe(r),a=new Fe(a);const o=[],l=[];if(t>1)for(let d=0;d<t;d++){const h=d/t*(Math.PI*2),f=Math.sin(h)*e,p=Math.cos(h)*e;o.push(0,0,0),o.push(f,0,p);const _=d&1?r:a;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let d=0;d<n;d++){const h=d&1?r:a,f=e-e/n*d;for(let p=0;p<s;p++){let _=p/s*(Math.PI*2),g=Math.sin(_)*f,m=Math.cos(_)*f;o.push(g,0,m),l.push(h.r,h.g,h.b),_=(p+1)/s*(Math.PI*2),g=Math.sin(_)*f,m=Math.cos(_)*f,o.push(g,0,m),l.push(h.r,h.g,h.b)}}const c=new lt;c.setAttribute("position",new ke(o,3)),c.setAttribute("color",new ke(l,3));const u=new kn({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const im=new P,pl=new P,sm=new P;class xM extends wt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let s=new lt;s.setAttribute("position",new ke([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new kn({fog:!1,toneMapped:!1});this.lightPlane=new ws(s,r),this.add(this.lightPlane),s=new lt,s.setAttribute("position",new ke([0,0,0,0,0,1],3)),this.targetLine=new ws(s,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),im.setFromMatrixPosition(this.light.matrixWorld),pl.setFromMatrixPosition(this.light.target.matrixWorld),sm.subVectors(pl,im),this.lightPlane.lookAt(pl),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(pl),this.targetLine.scale.z=sm.length()}}const ml=new P,Zt=new vh;class bM extends Oi{constructor(e){const t=new lt,n=new kn({color:16777215,vertexColors:!0,toneMapped:!1}),s=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,_){l(p),l(_)}function l(p){s.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(s.length/3-1)}t.setAttribute("position",new ke(s,3)),t.setAttribute("color",new ke(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new Fe(16755200),u=new Fe(16711680),d=new Fe(43775),h=new Fe(16777215),f=new Fe(3355443);this.setColors(c,u,d,h,f)}setColors(e,t,n,s,r){const o=this.geometry.getAttribute("color");return o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,s.r,s.g,s.b),o.setXYZ(39,s.r,s.g,s.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,n=1,s=1;let r,a;if(Zt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,a=0;else if(this.camera.coordinateSystem===jn)r=-1,a=1;else if(this.camera.coordinateSystem===ir)r=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Jt("c",t,e,Zt,0,0,r),Jt("t",t,e,Zt,0,0,a),Jt("n1",t,e,Zt,-n,-s,r),Jt("n2",t,e,Zt,n,-s,r),Jt("n3",t,e,Zt,-n,s,r),Jt("n4",t,e,Zt,n,s,r),Jt("f1",t,e,Zt,-n,-s,a),Jt("f2",t,e,Zt,n,-s,a),Jt("f3",t,e,Zt,-n,s,a),Jt("f4",t,e,Zt,n,s,a),Jt("u1",t,e,Zt,n*.7,s*1.1,r),Jt("u2",t,e,Zt,-n*.7,s*1.1,r),Jt("u3",t,e,Zt,0,s*2,r),Jt("cf1",t,e,Zt,-n,0,a),Jt("cf2",t,e,Zt,n,0,a),Jt("cf3",t,e,Zt,0,-s,a),Jt("cf4",t,e,Zt,0,s,a),Jt("cn1",t,e,Zt,-n,0,r),Jt("cn2",t,e,Zt,n,0,r),Jt("cn3",t,e,Zt,0,-s,r),Jt("cn4",t,e,Zt,0,s,r),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Jt(i,e,t,n,s,r,a){ml.set(s,r,a).unproject(n);const o=e[i];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,u=o.length;c<u;c++)l.setXYZ(o[c],ml.x,ml.y,ml.z)}}const gl=new En;class SM extends Oi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new lt;r.setIndex(new Nt(n,1)),r.setAttribute("position",new Nt(s,3)),super(r,new kn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&gl.setFromObject(this.object),gl.isEmpty())return;const e=gl.min,t=gl.max,n=this.geometry.attributes.position,s=n.array;s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=e.x,s[4]=t.y,s[5]=t.z,s[6]=e.x,s[7]=e.y,s[8]=t.z,s[9]=t.x,s[10]=e.y,s[11]=t.z,s[12]=t.x,s[13]=t.y,s[14]=e.z,s[15]=e.x,s[16]=t.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=t.x,s[22]=e.y,s[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class MM extends Oi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new lt;r.setIndex(new Nt(n,1)),r.setAttribute("position",new ke(s,3)),super(r,new kn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class wM extends ws{constructor(e,t=1,n=16776960){const s=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new lt;a.setAttribute("position",new ke(r,3)),a.computeBoundingSphere(),super(a,new kn({color:s,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new lt;l.setAttribute("position",new ke(o,3)),l.computeBoundingSphere(),this.add(new nn(l,new ns({color:s,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const rm=new P;let _l,mu;class TM extends wt{constructor(e=new P(0,0,1),t=new P(0,0,0),n=1,s=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",_l===void 0&&(_l=new lt,_l.setAttribute("position",new ke([0,0,0,0,1,0],3)),mu=new bo(.5,1,5,1),mu.translate(0,-.5,0)),this.position.copy(t),this.line=new ws(_l,new kn({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new nn(mu,new ns({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{rm.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(rm,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class EM extends Oi{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new lt;s.setAttribute("position",new ke(t,3)),s.setAttribute("color",new ke(n,3));const r=new kn({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){const s=new Fe,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class AM{constructor(){this.type="ShapePath",this.color=new Fe,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new eo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,a){return this.currentPath.bezierCurveTo(e,t,n,s,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let u=!1;const d=c.length;for(let h=0,f=d-1;h<d;f=h++){const p=c[h],_=c[f];p.y>l.y!=_.y>l.y&&l.x<(_.x-p.x)*(l.y-p.y)/(_.y-p.y)+p.x&&(u=!u)}return u}function t(l,c){const u=c.getCenter(new ie);if(e(u,l))return u;const d=u.y,h=[],f=l.length;for(let p=0;p<f;p++){const _=l[p],g=l[(p+1)%f];if(_.y>d!=g.y>d){const m=_.x+(d-_.y)*(g.x-_.x)/(g.y-_.y);h.push(m)}}return h.length>1&&(h.sort((p,_)=>p-_),u.x=(h[0]+h[1])/2),u}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(Me('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");const s=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(const l of this.subPaths){const c=l.getPoints();if(c.length<3)continue;const u=vi.area(c);if(u===0)continue;const d=new V0;for(let h=0;h<c.length;h++)d.expandByPoint(c[h]);r.push({subPath:l,points:c,boundingBox:d,interiorPoint:t(c,d),absArea:Math.abs(u),winding:u<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){const c=r[l];let u=0;for(let d=l-1;d>=0;d--){const h=r[d];if(h.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,h.points)){c.container=h.exclude?h.container:h,u=h.winding,c.winding+=u;break}}s(c.winding)===s(u)&&(c.exclude=!0)}for(const l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");const a=[],o=new Map;for(const l of r){if(l.exclude||l.role!=="outer")continue;const c=new So;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(const l of r){if(l.exclude||l.role!=="hole")continue;const c=o.get(l.container);if(!c)continue;const u=new eo;u.curves=l.subPath.curves,c.holes.push(u)}return a}}class H0 extends Mi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Me("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function CM(i,e){const t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2):(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0),i}function RM(i,e){const t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0):(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2),i}function IM(i){return i.repeat.x=1,i.repeat.y=1,i.offset.x=0,i.offset.y=0,i}function $u(i,e,t,n){const s=PM(n);switch(t){case Cd:return i*e;case Gc:return i*e/s.components*s.byteLength;case vo:return i*e/s.components*s.byteLength;case Ss:return i*e*2/s.components*s.byteLength;case Hc:return i*e*2/s.components*s.byteLength;case Rd:return i*e*3/s.components*s.byteLength;case On:return i*e*4/s.components*s.byteLength;case Wc:return i*e*4/s.components*s.byteLength;case La:case Ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Na:case Oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wl:case ql:return Math.max(i,16)*Math.max(e,8)/4;case Hl:case Xl:return Math.max(i,8)*Math.max(e,8)/2;case $l:case Yl:case Kl:case jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zl:case Xa:case Jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ec:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case tc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case nc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ic:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case sc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case rc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ac:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case oc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case lc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case cc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case hc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case uc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case dc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case fc:case pc:case mc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case gc:case _c:return Math.ceil(i/4)*Math.ceil(e/4)*8;case qa:case vc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function PM(i){switch(i){case Hn:case wd:return{byteLength:1,components:1};case Kr:case Td:case Li:return{byteLength:2,components:1};case zc:case Vc:return{byteLength:2,components:4};case hi:case Bc:case Nn:return{byteLength:4,components:1};case Ed:case Ad:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}class DM{static contain(e,t){return CM(e,t)}static cover(e,t){return RM(e,t)}static fill(e){return IM(e)}static getByteLength(e,t,n,s){return $u(e,t,n,s)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oc}}));typeof window<"u"&&(window.__THREE__?Me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oc);function W0(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function LM(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){const p=d[h],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){const _=d[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var UM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,OM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,FM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,BM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,VM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,GM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,HM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,WM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$M=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,YM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ZM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ew=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,tw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,nw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,iw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,aw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ow=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hw="gl_FragColor = linearToOutputTexel( gl_FragColor );",uw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,fw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_w=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ww=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ew=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Aw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Dw=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Uw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ow=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Fw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ww=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$w=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,iT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,hT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,_T=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ST=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ET=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,CT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,RT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,IT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,LT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const UT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,VT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,GT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,HT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,WT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$T=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ZT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,t1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,n1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,r1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,c1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:UM,alphahash_pars_fragment:NM,alphamap_fragment:OM,alphamap_pars_fragment:FM,alphatest_fragment:kM,alphatest_pars_fragment:BM,aomap_fragment:zM,aomap_pars_fragment:VM,batching_pars_vertex:GM,batching_vertex:HM,begin_vertex:WM,beginnormal_vertex:XM,bsdfs:qM,iridescence_fragment:$M,bumpmap_pars_fragment:YM,clipping_planes_fragment:ZM,clipping_planes_pars_fragment:KM,clipping_planes_pars_vertex:jM,clipping_planes_vertex:JM,color_fragment:QM,color_pars_fragment:ew,color_pars_vertex:tw,color_vertex:nw,common:iw,cube_uv_reflection_fragment:sw,defaultnormal_vertex:rw,displacementmap_pars_vertex:aw,displacementmap_vertex:ow,emissivemap_fragment:lw,emissivemap_pars_fragment:cw,colorspace_fragment:hw,colorspace_pars_fragment:uw,envmap_fragment:dw,envmap_common_pars_fragment:fw,envmap_pars_fragment:pw,envmap_pars_vertex:mw,envmap_physical_pars_fragment:Ew,envmap_vertex:gw,fog_vertex:_w,fog_pars_vertex:vw,fog_fragment:yw,fog_pars_fragment:xw,gradientmap_pars_fragment:bw,lightmap_pars_fragment:Sw,lights_lambert_fragment:Mw,lights_lambert_pars_fragment:ww,lights_pars_begin:Tw,lights_toon_fragment:Aw,lights_toon_pars_fragment:Cw,lights_phong_fragment:Rw,lights_phong_pars_fragment:Iw,lights_physical_fragment:Pw,lights_physical_pars_fragment:Dw,lights_fragment_begin:Lw,lights_fragment_maps:Uw,lights_fragment_end:Nw,lightprobes_pars_fragment:Ow,logdepthbuf_fragment:Fw,logdepthbuf_pars_fragment:kw,logdepthbuf_pars_vertex:Bw,logdepthbuf_vertex:zw,map_fragment:Vw,map_pars_fragment:Gw,map_particle_fragment:Hw,map_particle_pars_fragment:Ww,metalnessmap_fragment:Xw,metalnessmap_pars_fragment:qw,morphinstance_vertex:$w,morphcolor_vertex:Yw,morphnormal_vertex:Zw,morphtarget_pars_vertex:Kw,morphtarget_vertex:jw,normal_fragment_begin:Jw,normal_fragment_maps:Qw,normal_pars_fragment:eT,normal_pars_vertex:tT,normal_vertex:nT,normalmap_pars_fragment:iT,clearcoat_normal_fragment_begin:sT,clearcoat_normal_fragment_maps:rT,clearcoat_pars_fragment:aT,iridescence_pars_fragment:oT,opaque_fragment:lT,packing:cT,premultiplied_alpha_fragment:hT,project_vertex:uT,dithering_fragment:dT,dithering_pars_fragment:fT,roughnessmap_fragment:pT,roughnessmap_pars_fragment:mT,shadowmap_pars_fragment:gT,shadowmap_pars_vertex:_T,shadowmap_vertex:vT,shadowmask_pars_fragment:yT,skinbase_vertex:xT,skinning_pars_vertex:bT,skinning_vertex:ST,skinnormal_vertex:MT,specularmap_fragment:wT,specularmap_pars_fragment:TT,tonemapping_fragment:ET,tonemapping_pars_fragment:AT,transmission_fragment:CT,transmission_pars_fragment:RT,uv_pars_fragment:IT,uv_pars_vertex:PT,uv_vertex:DT,worldpos_vertex:LT,background_vert:UT,background_frag:NT,backgroundCube_vert:OT,backgroundCube_frag:FT,cube_vert:kT,cube_frag:BT,depth_vert:zT,depth_frag:VT,distance_vert:GT,distance_frag:HT,equirect_vert:WT,equirect_frag:XT,linedashed_vert:qT,linedashed_frag:$T,meshbasic_vert:YT,meshbasic_frag:ZT,meshlambert_vert:KT,meshlambert_frag:jT,meshmatcap_vert:JT,meshmatcap_frag:QT,meshnormal_vert:e1,meshnormal_frag:t1,meshphong_vert:n1,meshphong_frag:i1,meshphysical_vert:s1,meshphysical_frag:r1,meshtoon_vert:a1,meshtoon_frag:o1,points_vert:l1,points_frag:c1,shadow_vert:h1,shadow_frag:u1,sprite_vert:d1,sprite_frag:f1},Te={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},ri={basic:{uniforms:In([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:In([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:In([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:In([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:In([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Fe(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:In([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:In([Te.points,Te.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:In([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:In([Te.common,Te.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:In([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:In([Te.sprite,Te.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:In([Te.common,Te.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:In([Te.lights,Te.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};ri.physical={uniforms:In([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const vl={r:0,b:0,g:0},p1=new et,X0=new ot;X0.set(-1,0,0,0,1,0,0,0,1);function m1(i,e,t,n,s,r){const a=new Fe(0);let o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){const y=v.backgroundBlurriness>0;b=e.get(b,y)}return b}function p(v){let b=!1;const y=f(v);y===null?g(a,o):y&&y.isColor&&(g(y,1),b=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,b){const y=f(b);y&&(y.isCubeTexture||y.mapping===sa)?(c===void 0&&(c=new nn(new As(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:ta(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(p1.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(X0),c.material.toneMapped=vt.getTransfer(y.colorSpace)!==Pt,(u!==y||d!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new nn(new ra(2,2),new ui({name:"BackgroundMaterial",uniforms:ta(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=vt.getTransfer(y.colorSpace)!==Pt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,b){v.getRGB(vl,d0(i)),t.buffers.color.setClear(vl.r,vl.g,vl.b,b,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:p,addToRenderList:_,dispose:m}}function g1(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(I,B,L,F,k){let U=!1;const O=d(I,F,L,B);r!==O&&(r=O,c(r.object)),U=f(I,F,L,k),U&&p(I,F,L,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,y(I,B,L,F),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function d(I,B,L,F){const k=F.wireframe===!0;let U=n[B.id];U===void 0&&(U={},n[B.id]=U);const O=I.isInstancedMesh===!0?I.id:0;let G=U[O];G===void 0&&(G={},U[O]=G);let W=G[L.id];W===void 0&&(W={},G[L.id]=W);let se=W[k];return se===void 0&&(se=h(l()),W[k]=se),se}function h(I){const B=[],L=[],F=[];for(let k=0;k<t;k++)B[k]=0,L[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:L,attributeDivisors:F,object:I,attributes:{},index:null}}function f(I,B,L,F){const k=r.attributes,U=B.attributes;let O=0;const G=L.getAttributes();for(const W in G)if(G[W].location>=0){const J=k[W];let te=U[W];if(te===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(te=I.instanceColor)),J===void 0||J.attribute!==te||te&&J.data!==te.data)return!0;O++}return r.attributesNum!==O||r.index!==F}function p(I,B,L,F){const k={},U=B.attributes;let O=0;const G=L.getAttributes();for(const W in G)if(G[W].location>=0){let J=U[W];J===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(J=I.instanceColor));const te={};te.attribute=J,J&&J.data&&(te.data=J.data),k[W]=te,O++}r.attributes=k,r.attributesNum=O,r.index=F}function _(){const I=r.newAttributes;for(let B=0,L=I.length;B<L;B++)I[B]=0}function g(I){m(I,0)}function m(I,B){const L=r.newAttributes,F=r.enabledAttributes,k=r.attributeDivisors;L[I]=1,F[I]===0&&(i.enableVertexAttribArray(I),F[I]=1),k[I]!==B&&(i.vertexAttribDivisor(I,B),k[I]=B)}function v(){const I=r.newAttributes,B=r.enabledAttributes;for(let L=0,F=B.length;L<F;L++)B[L]!==I[L]&&(i.disableVertexAttribArray(L),B[L]=0)}function b(I,B,L,F,k,U,O){O===!0?i.vertexAttribIPointer(I,B,L,k,U):i.vertexAttribPointer(I,B,L,F,k,U)}function y(I,B,L,F){_();const k=F.attributes,U=L.getAttributes(),O=B.defaultAttributeValues;for(const G in U){const W=U[G];if(W.location>=0){let se=k[G];if(se===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(se=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(se=I.instanceColor)),se!==void 0){const J=se.normalized,te=se.itemSize,Ce=e.get(se);if(Ce===void 0)continue;const ct=Ce.buffer,at=Ce.type,ee=Ce.bytesPerElement,_e=at===i.INT||at===i.UNSIGNED_INT||se.gpuType===Bc;if(se.isInterleavedBufferAttribute){const ue=se.data,We=ue.stride,Je=se.offset;if(ue.isInstancedInterleavedBuffer){for(let he=0;he<W.locationSize;he++)m(W.location+he,ue.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let he=0;he<W.locationSize;he++)g(W.location+he);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let he=0;he<W.locationSize;he++)b(W.location+he,te/W.locationSize,at,J,We*ee,(Je+te/W.locationSize*he)*ee,_e)}else{if(se.isInstancedBufferAttribute){for(let ue=0;ue<W.locationSize;ue++)m(W.location+ue,se.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ue=0;ue<W.locationSize;ue++)g(W.location+ue);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let ue=0;ue<W.locationSize;ue++)b(W.location+ue,te/W.locationSize,at,J,te*ee,te/W.locationSize*ue*ee,_e)}}else if(O!==void 0){const J=O[G];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(W.location,J);break;case 3:i.vertexAttrib3fv(W.location,J);break;case 4:i.vertexAttrib4fv(W.location,J);break;default:i.vertexAttrib1fv(W.location,J)}}}}v()}function w(){T();for(const I in n){const B=n[I];for(const L in B){const F=B[L];for(const k in F){const U=F[k];for(const O in U)u(U[O].object),delete U[O];delete F[k]}}delete n[I]}}function M(I){if(n[I.id]===void 0)return;const B=n[I.id];for(const L in B){const F=B[L];for(const k in F){const U=F[k];for(const O in U)u(U[O].object),delete U[O];delete F[k]}}delete n[I.id]}function A(I){for(const B in n){const L=n[B];for(const F in L){const k=L[F];if(k[I.id]===void 0)continue;const U=k[I.id];for(const O in U)u(U[O].object),delete U[O];delete k[I.id]}}}function x(I){for(const B in n){const L=n[B],F=I.isInstancedMesh===!0?I.id:0,k=L[F];if(k!==void 0){for(const U in k){const O=k[U];for(const G in O)u(O[G].object),delete O[G];delete k[U]}delete L[F],Object.keys(L).length===0&&delete n[B]}}}function T(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function _1(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function v1(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==On&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const x=A===Li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Hn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Nn&&!x)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Me("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Me("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:y,maxSamples:w,samples:M}}function y1(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Xi,o=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const p=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{const v=r?0:n,b=v*4;let y=m.clippingState||null;l.value=y,y=u(p,h,b,f);for(let w=0;w!==b;++w)y[w]=t[w];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,p){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=f+_*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,y=f;b!==_;++b,y+=4)a.copy(d[b]).applyMatrix4(v,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}const vs=4,am=[.125,.215,.35,.446,.526,.582],qs=20,x1=256,Sa=new oa,om=new Fe;let gu=null,_u=0,vu=0,yu=!1;const b1=new P;class Yu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=b1}=r;gu=this._renderer.getRenderTarget(),_u=this._renderer.getActiveCubeFace(),vu=this._renderer.getActiveMipmapLevel(),yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gu,_u,vu),this._renderer.xr.enabled=yu,e.scissorTest=!1,Or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Di||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gu=this._renderer.getRenderTarget(),_u=this._renderer.getActiveCubeFace(),vu=this._renderer.getActiveMipmapLevel(),yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Li,format:On,colorSpace:Za,depthBuffer:!1},s=lm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lm(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=S1(r)),this._blurMaterial=w1(r,e,t),this._ggxMaterial=M1(r,e,t)}return s}_compileMaterial(e){const t=new nn(new lt,e);this._renderer.compile(t,Sa)}_sceneToCubeUV(e,t,n,s,r){const l=new pn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(om),d.toneMapping=xi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new nn(new As,new ns({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let m=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,m=!0):(g.color.copy(om),m=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const w=this._cubeSize;Or(s,y*w,b>2?w:0,w,w),d.setRenderTarget(s),m&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Di||e.mapping===bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cm());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Or(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Sa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-vs?n-p+vs:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Or(r,g,m,3*_,2*_),s.setRenderTarget(r),s.render(o,Sa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Or(e,g,m,3*_,2*_),s.setRenderTarget(e),s.render(o,Sa)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=c;const h=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*qs-1),_=r/p,g=isFinite(r)?1+Math.floor(u*_):qs;g>qs&&Me(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${qs}`);const m=[];let v=0;for(let A=0;A<qs;++A){const x=A/_,T=Math.exp(-x*x/2);m.push(T),A===0?v+=T:A<g&&(v+=2*T)}for(let A=0;A<m.length;A++)m[A]=m[A]/v;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=p,h.mipInt.value=b-n;const y=this._sizeLods[s],w=3*y*(s>b-vs?s-b+vs:0),M=4*(this._cubeSize-y);Or(t,w,M,3*y,2*y),l.setRenderTarget(t),l.render(d,Sa)}}function S1(i){const e=[],t=[],n=[];let s=i;const r=i-vs+1+am.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-vs?l=am[a-i+vs-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,p=6,_=3,g=2,m=1,v=new Float32Array(_*p*f),b=new Float32Array(g*p*f),y=new Float32Array(m*p*f);for(let M=0;M<f;M++){const A=M%3*2/3-1,x=M>2?0:-1,T=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];v.set(T,_*p*M),b.set(h,g*p*M);const R=[M,M,M,M,M,M];y.set(R,m*p*M)}const w=new lt;w.setAttribute("position",new Nt(v,_)),w.setAttribute("uv",new Nt(b,g)),w.setAttribute("faceIndex",new Nt(y,m)),n.push(new nn(w,null)),s>vs&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function lm(i,e,t){const n=new ei(i,e,t);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Or(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function M1(i,e,t){return new ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:x1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function w1(i,e,t){const n=new Float32Array(qs),s=new P(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function cm(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function hm(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function xh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class lf extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new yo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new As(5,5,5),r=new ui({name:"CubemapFromEquirect",uniforms:ta(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fn,blending:Pi});r.uniforms.tEquirect.value=t;const a=new nn(s,r),o=t.minFilter;return t.minFilter===Ri&&(t.minFilter=Gt),new N0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function T1(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===Ia||f===Pa)if(e.has(h)){const p=e.get(h).texture;return o(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const _=new lf(p.height);return _.fromEquirectangularTexture(i,h),e.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,p=f===Ia||f===Pa,_=f===Di||f===bs;if(p||_){let g=t.get(h);const m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new Yu(i)),g=p?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const v=h.image;return p&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new Yu(i)),g=p?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,f){return f===Ia?h.mapping=Di:f===Pa&&(h.mapping=bs),h}function l(h){let f=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&f++;return f===p}function c(h){const f=h.target;f.removeEventListener("dispose",c);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function E1(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ys("WebGLRenderer: "+n+" extension not supported."),s}}}function A1(i,e,t,n){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",a),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,p=d.attributes.position;let _=0;if(p===void 0)return;if(f!==null){const v=f.array;_=f.version;for(let b=0,y=v.length;b<y;b+=3){const w=v[b+0],M=v[b+1],A=v[b+2];h.push(w,M,M,A,A,w)}}else{const v=p.array;_=p.version;for(let b=0,y=v.length/3-1;b<y;b+=3){const w=b+0,M=b+1,A=b+2;h.push(w,M,M,A,A,w)}}const g=new(p.count>=65535?Nd:Ud)(h,1);g.version=_;const m=r.get(d);m&&e.remove(m),r.set(d,g)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function C1(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),t.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*a,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function R1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ye("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function I1(i,e,t){const n=new WeakMap,s=new Dt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let T=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let b=0;f===!0&&(b=1),p===!0&&(b=2),_===!0&&(b=3);let y=o.attributes.position.count*b,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const M=new Float32Array(y*w*4*d),A=new Yc(M,y,w,d);A.type=Nn,A.needsUpdate=!0;const x=b*4;for(let R=0;R<d;R++){const I=g[R],B=m[R],L=v[R],F=y*w*4*R;for(let k=0;k<I.count;k++){const U=k*x;f===!0&&(s.fromBufferAttribute(I,k),M[F+U+0]=s.x,M[F+U+1]=s.y,M[F+U+2]=s.z,M[F+U+3]=0),p===!0&&(s.fromBufferAttribute(B,k),M[F+U+4]=s.x,M[F+U+5]=s.y,M[F+U+6]=s.z,M[F+U+7]=0),_===!0&&(s.fromBufferAttribute(L,k),M[F+U+8]=s.x,M[F+U+9]=s.y,M[F+U+10]=s.z,M[F+U+11]=L.itemSize===4?s.w:1)}}h={count:d,texture:A,size:new ie(y,w)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function P1(i,e,t,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const D1={[_d]:"LINEAR_TONE_MAPPING",[vd]:"REINHARD_TONE_MAPPING",[yd]:"CINEON_TONE_MAPPING",[xd]:"ACES_FILMIC_TONE_MAPPING",[Fc]:"AGX_TONE_MAPPING",[Sd]:"NEUTRAL_TONE_MAPPING",[bd]:"CUSTOM_TONE_MAPPING"};function L1(i,e,t,n,s,r){const a=new ei(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new ar(e,t):void 0}),o=new ei(e,t,{type:Li,depthBuffer:!1,stencilBuffer:!1}),l=new lt;l.setAttribute("position",new ke([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ke([0,2,0,0,2,0],2));const c=new $d({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new nn(l,c),d=new oa(-1,1,1,-1,0,1);let h=null,f=null,p=!1,_,g=null,m=[],v=!1;this.setSize=function(b,y){a.setSize(b,y),o.setSize(b,y);for(let w=0;w<m.length;w++){const M=m[w];M.setSize&&M.setSize(b,y)}},this.setEffects=function(b){m=b,v=m.length>0&&m[0].isRenderPass===!0;const y=a.width,w=a.height;for(let M=0;M<m.length;M++){const A=m[M];A.setSize&&A.setSize(y,w)}},this.begin=function(b,y){if(p||b.toneMapping===xi&&m.length===0)return!1;if(g=y,y!==null){const w=y.width,M=y.height;(a.width!==w||a.height!==M)&&this.setSize(w,M)}return v===!1&&b.setRenderTarget(a),_=b.toneMapping,b.toneMapping=xi,!0},this.hasRenderPass=function(){return v},this.end=function(b,y){b.toneMapping=_,p=!0;let w=a,M=o;for(let A=0;A<m.length;A++){const x=m[A];if(x.enabled!==!1&&(x.render(b,M,w,y),x.needsSwap!==!1)){const T=w;w=M,M=T}}if(h!==b.outputColorSpace||f!==b.toneMapping){h=b.outputColorSpace,f=b.toneMapping,c.defines={},vt.getTransfer(h)===Pt&&(c.defines.SRGB_TRANSFER="");const A=D1[f];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,b.setRenderTarget(g),b.render(u,d),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const q0=new $t,Zu=new ar(1,1),$0=new Yc,Y0=new Zc,Z0=new yo,um=[],dm=[],fm=new Float32Array(16),pm=new Float32Array(9),mm=new Float32Array(4);function la(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=um[s];if(r===void 0&&(r=new Float32Array(s),um[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function ln(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function cn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function bh(i,e){let t=dm[e];t===void 0&&(t=new Int32Array(e),dm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function U1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function N1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2fv(this.addr,e),cn(t,e)}}function O1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;i.uniform3fv(this.addr,e),cn(t,e)}}function F1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4fv(this.addr,e),cn(t,e)}}function k1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;mm.set(n),i.uniformMatrix2fv(this.addr,!1,mm),cn(t,n)}}function B1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;pm.set(n),i.uniformMatrix3fv(this.addr,!1,pm),cn(t,n)}}function z1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;fm.set(n),i.uniformMatrix4fv(this.addr,!1,fm),cn(t,n)}}function V1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function G1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2iv(this.addr,e),cn(t,e)}}function H1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;i.uniform3iv(this.addr,e),cn(t,e)}}function W1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4iv(this.addr,e),cn(t,e)}}function X1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function q1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2uiv(this.addr,e),cn(t,e)}}function $1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;i.uniform3uiv(this.addr,e),cn(t,e)}}function Y1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4uiv(this.addr,e),cn(t,e)}}function Z1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zu.compareFunction=t.isReversedDepthBuffer()?$c:qc,r=Zu):r=q0,t.setTexture2D(e||r,s)}function K1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Y0,s)}function j1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Z0,s)}function J1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||$0,s)}function Q1(i){switch(i){case 5126:return U1;case 35664:return N1;case 35665:return O1;case 35666:return F1;case 35674:return k1;case 35675:return B1;case 35676:return z1;case 5124:case 35670:return V1;case 35667:case 35671:return G1;case 35668:case 35672:return H1;case 35669:case 35673:return W1;case 5125:return X1;case 36294:return q1;case 36295:return $1;case 36296:return Y1;case 35678:case 36198:case 36298:case 36306:case 35682:return Z1;case 35679:case 36299:case 36307:return K1;case 35680:case 36300:case 36308:case 36293:return j1;case 36289:case 36303:case 36311:case 36292:return J1}}function eE(i,e){i.uniform1fv(this.addr,e)}function tE(i,e){const t=la(e,this.size,2);i.uniform2fv(this.addr,t)}function nE(i,e){const t=la(e,this.size,3);i.uniform3fv(this.addr,t)}function iE(i,e){const t=la(e,this.size,4);i.uniform4fv(this.addr,t)}function sE(i,e){const t=la(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rE(i,e){const t=la(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function aE(i,e){const t=la(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function oE(i,e){i.uniform1iv(this.addr,e)}function lE(i,e){i.uniform2iv(this.addr,e)}function cE(i,e){i.uniform3iv(this.addr,e)}function hE(i,e){i.uniform4iv(this.addr,e)}function uE(i,e){i.uniform1uiv(this.addr,e)}function dE(i,e){i.uniform2uiv(this.addr,e)}function fE(i,e){i.uniform3uiv(this.addr,e)}function pE(i,e){i.uniform4uiv(this.addr,e)}function mE(i,e,t){const n=this.cache,s=e.length,r=bh(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Zu:a=q0;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function gE(i,e,t){const n=this.cache,s=e.length,r=bh(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Y0,r[a])}function _E(i,e,t){const n=this.cache,s=e.length,r=bh(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Z0,r[a])}function vE(i,e,t){const n=this.cache,s=e.length,r=bh(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||$0,r[a])}function yE(i){switch(i){case 5126:return eE;case 35664:return tE;case 35665:return nE;case 35666:return iE;case 35674:return sE;case 35675:return rE;case 35676:return aE;case 5124:case 35670:return oE;case 35667:case 35671:return lE;case 35668:case 35672:return cE;case 35669:case 35673:return hE;case 5125:return uE;case 36294:return dE;case 36295:return fE;case 36296:return pE;case 35678:case 36198:case 36298:case 36306:case 35682:return mE;case 35679:case 36299:case 36307:return gE;case 35680:case 36300:case 36308:case 36293:return _E;case 36289:case 36303:case 36311:case 36292:return vE}}class xE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Q1(t.type)}}class bE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yE(t.type)}}class SE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const xu=/(\w+)(\])?(\[|\.)?/g;function gm(i,e){i.seq.push(e),i.map[e.id]=e}function ME(i,e,t){const n=i.name,s=n.length;for(xu.lastIndex=0;;){const r=xu.exec(n),a=xu.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){gm(t,c===void 0?new xE(o,i,e):new bE(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new SE(o),gm(t,d)),t=d}}}class El{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);ME(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function _m(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const wE=37297;let TE=0;function EE(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const vm=new ot;function AE(i){vt._getMatrix(vm,vt.workingColorSpace,i);const e=`mat3( ${vm.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(i)){case Ka:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return Me("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ym(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+EE(i.getShaderSource(e),o)}else return r}function CE(i,e){const t=AE(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const RE={[_d]:"Linear",[vd]:"Reinhard",[yd]:"Cineon",[xd]:"ACESFilmic",[Fc]:"AgX",[Sd]:"Neutral",[bd]:"Custom"};function IE(i,e){const t=RE[e];return t===void 0?(Me("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yl=new P;function PE(){vt.getLuminanceCoefficients(yl);const i=yl.x.toFixed(4),e=yl.y.toFixed(4),t=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Aa).join(`
`)}function LE(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function UE(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Aa(i){return i!==""}function xm(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ku(i){return i.replace(NE,FE)}const OE=new Map;function FE(i,e){let t=tt[e];if(t===void 0){const n=OE.get(e);if(n!==void 0)t=tt[n],Me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ku(t)}const kE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sm(i){return i.replace(kE,BE)}function BE(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mm(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const zE={[Ra]:"SHADOWMAP_TYPE_PCF",[Br]:"SHADOWMAP_TYPE_VSM"};function VE(i){return zE[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const GE={[Di]:"ENVMAP_TYPE_CUBE",[bs]:"ENVMAP_TYPE_CUBE",[sa]:"ENVMAP_TYPE_CUBE_UV"};function HE(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":GE[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const WE={[bs]:"ENVMAP_MODE_REFRACTION"};function XE(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":WE[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const qE={[_o]:"ENVMAP_BLENDING_MULTIPLY",[wg]:"ENVMAP_BLENDING_MIX",[Tg]:"ENVMAP_BLENDING_ADD"};function $E(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":qE[i.combine]||"ENVMAP_BLENDING_NONE"}function YE(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ZE(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=VE(t),c=HE(t),u=XE(t),d=$E(t),h=YE(t),f=DE(t),p=LE(r),_=s.createProgram();let g,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Aa).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Aa).join(`
`),m.length>0&&(m+=`
`)):(g=[Mm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Aa).join(`
`),m=[Mm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?tt.tonemapping_pars_fragment:"",t.toneMapping!==xi?IE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,CE("linearToOutputTexel",t.outputColorSpace),PE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Aa).join(`
`)),a=Ku(a),a=xm(a,t),a=bm(a,t),o=Ku(o),o=xm(o,t),o=bm(o,t),a=Sm(a),o=Sm(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=v+g+a,y=v+m+o,w=_m(s,s.VERTEX_SHADER,b),M=_m(s,s.FRAGMENT_SHADER,y);s.attachShader(_,w),s.attachShader(_,M),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(I){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(_)||"",L=s.getShaderInfoLog(w)||"",F=s.getShaderInfoLog(M)||"",k=B.trim(),U=L.trim(),O=F.trim();let G=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,M);else{const se=ym(s,w,"vertex"),J=ym(s,M,"fragment");Ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+se+`
`+J)}else k!==""?Me("WebGLProgram: Program Info Log:",k):(U===""||O==="")&&(W=!1);W&&(I.diagnostics={runnable:G,programLog:k,vertexShader:{log:U,prefix:g},fragmentShader:{log:O,prefix:m}})}s.deleteShader(w),s.deleteShader(M),x=new El(s,_),T=UE(s,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(_,wE)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=TE++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=M,this}let KE=0;class jE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new JE(e),t.set(e,n)),n}}class JE{constructor(e){this.id=KE++,this.code=e,this.usedTimes=0}}function QE(i){return i===Ss||i===Xa||i===qa}function eA(i,e,t,n,s,r){const a=new Kc,o=new jE,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,T,R,I,B,L){const F=I.fog,k=B.geometry,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,G=e.get(x.envMap||U,O),W=G&&G.mapping===sa?G.image.height:null,se=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Me("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const J=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,te=J!==void 0?J.length:0;let Ce=0;k.morphAttributes.position!==void 0&&(Ce=1),k.morphAttributes.normal!==void 0&&(Ce=2),k.morphAttributes.color!==void 0&&(Ce=3);let ct,at,ee,_e;if(se){const He=ri[se];ct=He.vertexShader,at=He.fragmentShader}else{ct=x.vertexShader,at=x.fragmentShader;const He=o.getVertexShaderStage(x),Ht=o.getFragmentShaderStage(x);o.update(x,He,Ht),ee=He.id,_e=Ht.id}const ue=i.getRenderTarget(),We=i.state.buffers.depth.getReversed(),Je=B.isInstancedMesh===!0,he=B.isBatchedMesh===!0,Re=!!x.map,ze=!!x.matcap,re=!!G,ae=!!x.aoMap,oe=!!x.lightMap,Se=!!x.bumpMap&&x.wireframe===!1,be=!!x.normalMap,Qe=!!x.displacementMap,ye=!!x.emissiveMap,ve=!!x.metalnessMap,Pe=!!x.roughnessMap,z=x.anisotropy>0,Tt=x.clearcoat>0,gt=x.dispersion>0,D=x.iridescence>0,S=x.sheen>0,q=x.transmission>0,N=z&&!!x.anisotropyMap,H=Tt&&!!x.clearcoatMap,ne=Tt&&!!x.clearcoatNormalMap,ce=Tt&&!!x.clearcoatRoughnessMap,$=D&&!!x.iridescenceMap,j=D&&!!x.iridescenceThicknessMap,ge=S&&!!x.sheenColorMap,Ge=S&&!!x.sheenRoughnessMap,fe=!!x.specularMap,de=!!x.specularColorMap,Oe=!!x.specularIntensityMap,Ne=q&&!!x.transmissionMap,nt=q&&!!x.thicknessMap,V=!!x.gradientMap,xe=!!x.alphaMap,Q=x.alphaTest>0,we=!!x.alphaHash,Ie=!!x.extensions;let le=xi;x.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(le=i.toneMapping);const Xe={shaderID:se,shaderType:x.type,shaderName:x.name,vertexShader:ct,fragmentShader:at,defines:x.defines,customVertexShaderID:ee,customFragmentShaderID:_e,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:he,batchingColor:he&&B._colorsTexture!==null,instancing:Je,instancingColor:Je&&B.instanceColor!==null,instancingMorph:Je&&B.morphTexture!==null,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Re,matcap:ze,envMap:re,envMapMode:re&&G.mapping,envMapCubeUVHeight:W,aoMap:ae,lightMap:oe,bumpMap:Se,normalMap:be,displacementMap:Qe,emissiveMap:ye,normalMapObjectSpace:be&&x.normalMapType===Pg,normalMapTangentSpace:be&&x.normalMapType===Ji,packedNormalMap:be&&x.normalMapType===Ji&&QE(x.normalMap.format),metalnessMap:ve,roughnessMap:Pe,anisotropy:z,anisotropyMap:N,clearcoat:Tt,clearcoatMap:H,clearcoatNormalMap:ne,clearcoatRoughnessMap:ce,dispersion:gt,iridescence:D,iridescenceMap:$,iridescenceThicknessMap:j,sheen:S,sheenColorMap:ge,sheenRoughnessMap:Ge,specularMap:fe,specularColorMap:de,specularIntensityMap:Oe,transmission:q,transmissionMap:Ne,thicknessMap:nt,gradientMap:V,opaque:x.transparent===!1&&x.blending===Qs&&x.alphaToCoverage===!1,alphaMap:xe,alphaTest:Q,alphaHash:we,combine:x.combine,mapUv:Re&&p(x.map.channel),aoMapUv:ae&&p(x.aoMap.channel),lightMapUv:oe&&p(x.lightMap.channel),bumpMapUv:Se&&p(x.bumpMap.channel),normalMapUv:be&&p(x.normalMap.channel),displacementMapUv:Qe&&p(x.displacementMap.channel),emissiveMapUv:ye&&p(x.emissiveMap.channel),metalnessMapUv:ve&&p(x.metalnessMap.channel),roughnessMapUv:Pe&&p(x.roughnessMap.channel),anisotropyMapUv:N&&p(x.anisotropyMap.channel),clearcoatMapUv:H&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ne&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:j&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&p(x.sheenRoughnessMap.channel),specularMapUv:fe&&p(x.specularMap.channel),specularColorMapUv:de&&p(x.specularColorMap.channel),specularIntensityMapUv:Oe&&p(x.specularIntensityMap.channel),transmissionMapUv:Ne&&p(x.transmissionMap.channel),thicknessMapUv:nt&&p(x.thicknessMap.channel),alphaMapUv:xe&&p(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(be||z),vertexNormals:!!k.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!k.attributes.uv&&(Re||xe),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||k.attributes.normal===void 0&&be===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:We,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Ce,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:Re&&x.map.isVideoTexture===!0&&vt.getTransfer(x.map.colorSpace)===Pt,decodeVideoTextureEmissive:ye&&x.emissiveMap.isVideoTexture===!0&&vt.getTransfer(x.emissiveMap.colorSpace)===Pt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ci,flipSided:x.side===Fn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ie&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&x.extensions.multiDraw===!0||he)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function g(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)T.push(R),T.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(m(T,x),v(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function m(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function v(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function b(x){const T=f[x.type];let R;if(T){const I=ri[T];R=qd.clone(I.uniforms)}else R=x.uniforms;return R}function y(x,T){let R=u.get(T);return R!==void 0?++R.usedTimes:(R=new ZE(i,T,x,s),c.push(R),u.set(T,R)),R}function w(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function M(x){o.remove(x)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:b,acquireProgram:y,releaseProgram:w,releaseShaderCache:M,programs:c,dispose:A}}function tA(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function nA(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function wm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Tm(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,p,_,g,m){let v=i[e];return v===void 0?(v={id:h.id,object:h,geometry:f,material:p,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},i[e]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=p,v.materialVariant=a(h),v.groupOrder=_,v.renderOrder=h.renderOrder,v.z=g,v.group=m),e++,v}function l(h,f,p,_,g,m){const v=o(h,f,p,_,g,m);p.transmission>0?n.push(v):p.transparent===!0?s.push(v):t.push(v)}function c(h,f,p,_,g,m){const v=o(h,f,p,_,g,m);p.transmission>0?n.unshift(v):p.transparent===!0?s.unshift(v):t.unshift(v)}function u(h,f,p){t.length>1&&t.sort(h||nA),n.length>1&&n.sort(f||wm),s.length>1&&s.sort(f||wm),p&&(t.reverse(),n.reverse(),s.reverse())}function d(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function iA(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Tm,i.set(n,[a])):s>=r.length?(a=new Tm,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function sA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Fe};break;case"SpotLight":t={position:new P,direction:new P,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function rA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let aA=0;function oA(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function lA(i){const e=new sA,t=rA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new et,a=new et;function o(c){let u=0,d=0,h=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,v=0,b=0,y=0,w=0,M=0,A=0;c.sort(oA);for(let T=0,R=c.length;T<R;T++){const I=c[T],B=I.color,L=I.intensity,F=I.distance;let k=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ss?k=I.shadow.map.texture:k=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=B.r*L,d+=B.g*L,h+=B.b*L;else if(I.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(I.sh.coefficients[U],L);A++}else if(I.isDirectionalLight){const U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const O=I.shadow,G=t.get(I);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=I.shadow.matrix,v++}n.directional[f]=U,f++}else if(I.isSpotLight){const U=e.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(B).multiplyScalar(L),U.distance=F,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,n.spot[_]=U;const O=I.shadow;if(I.map&&(n.spotLightMap[w]=I.map,w++,O.updateMatrices(I),I.castShadow&&M++),n.spotLightMatrix[_]=O.matrix,I.castShadow){const G=t.get(I);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=k,y++}_++}else if(I.isRectAreaLight){const U=e.get(I);U.color.copy(B).multiplyScalar(L),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=U,g++}else if(I.isPointLight){const U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),U.distance=I.distance,U.decay=I.decay,I.castShadow){const O=I.shadow,G=t.get(I);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,G.shadowCameraNear=O.camera.near,G.shadowCameraFar=O.camera.far,n.pointShadow[p]=G,n.pointShadowMap[p]=k,n.pointShadowMatrix[p]=I.shadow.matrix,b++}n.point[p]=U,p++}else if(I.isHemisphereLight){const U=e.get(I);U.skyColor.copy(I.color).multiplyScalar(L),U.groundColor.copy(I.groundColor).multiplyScalar(L),n.hemi[m]=U,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const x=n.hash;(x.directionalLength!==f||x.pointLength!==p||x.spotLength!==_||x.rectAreaLength!==g||x.hemiLength!==m||x.numDirectionalShadows!==v||x.numPointShadows!==b||x.numSpotShadows!==y||x.numSpotMaps!==w||x.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+w-M,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=A,x.directionalLength=f,x.pointLength=p,x.spotLength=_,x.rectAreaLength=g,x.hemiLength=m,x.numDirectionalShadows=v,x.numPointShadows=b,x.numSpotShadows=y,x.numSpotMaps=w,x.numLightProbes=A,n.version=aA++)}function l(c,u){let d=0,h=0,f=0,p=0,_=0;const g=u.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){const b=c[m];if(b.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),d++}else if(b.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(b.isRectAreaLight){const y=n.rectArea[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(b.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),p++}else if(b.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),h++}else if(b.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function Em(i){const e=new lA(i),t=[],n=[],s=[];function r(h){d.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function cA(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Em(i),e.set(s,[o])):r>=a.length?(o=new Em(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const hA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,dA=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],fA=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Am=new et,Ma=new P,bu=new P;function pA(i,e,t){let n=new rr;const s=new ie,r=new ie,a=new Dt,o=new Zd,l=new Kd,c={},u=t.maxTextureSize,d={[ji]:Fn,[Fn]:ji,[Ci]:Ci},h=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:hA,fragmentShader:uA}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const p=new lt;p.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new nn(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ra;let m=this.type;this.render=function(M,A,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===Ll&&(Me("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ra);const T=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Pi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const L=m!==this.type;L&&A.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(k=>k.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,k=M.length;F<k;F++){const U=M[F],O=U.shadow;if(O===void 0){Me("WebGLShadowMap:",U,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const G=O.getFrameExtents();s.multiply(G),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/G.x),s.x=r.x*G.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/G.y),s.y=r.y*G.y,O.mapSize.y=r.y));const W=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=W,O.map===null||L===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Br){if(U.isPointLight){Me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new ei(s.x,s.y,{format:Ss,type:Li,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),O.map.texture.name=U.name+".shadowMap",O.map.depthTexture=new ar(s.x,s.y,Nn),O.map.depthTexture.name=U.name+".shadowMapDepth",O.map.depthTexture.format=Ui,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=tn,O.map.depthTexture.magFilter=tn}else U.isPointLight?(O.map=new lf(s.x),O.map.depthTexture=new Qg(s.x,hi)):(O.map=new ei(s.x,s.y),O.map.depthTexture=new ar(s.x,s.y,hi)),O.map.depthTexture.name=U.name+".shadowMap",O.map.depthTexture.format=Ui,this.type===Ra?(O.map.depthTexture.compareFunction=W?$c:qc,O.map.depthTexture.minFilter=Gt,O.map.depthTexture.magFilter=Gt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=tn,O.map.depthTexture.magFilter=tn);O.camera.updateProjectionMatrix()}const se=O.map.isWebGLCubeRenderTarget?6:1;for(let J=0;J<se;J++){if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,J),i.clear();else{J===0&&(i.setRenderTarget(O.map),i.clear());const te=O.getViewport(J);a.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),B.viewport(a)}if(U.isPointLight){const te=O.camera,Ce=O.matrix,ct=U.distance||te.far;ct!==te.far&&(te.far=ct,te.updateProjectionMatrix()),Ma.setFromMatrixPosition(U.matrixWorld),te.position.copy(Ma),bu.copy(te.position),bu.add(dA[J]),te.up.copy(fA[J]),te.lookAt(bu),te.updateMatrixWorld(),Ce.makeTranslation(-Ma.x,-Ma.y,-Ma.z),Am.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Am,te.coordinateSystem,te.reversedDepth)}else O.updateMatrices(U);n=O.getFrustum(),y(A,x,O.camera,U,this.type)}O.isPointLightShadow!==!0&&this.type===Br&&v(O,x),O.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(T,R,I)};function v(M,A){const x=e.update(_);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ei(s.x,s.y,{format:Ss,type:Li})),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(A,null,x,h,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(A,null,x,f,_,null)}function b(M,A,x,T){let R=null;const I=x.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(I!==void 0)R=I;else if(R=x.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const B=R.uuid,L=A.uuid;let F=c[B];F===void 0&&(F={},c[B]=F);let k=F[L];k===void 0&&(k=R.clone(),F[L]=k,A.addEventListener("dispose",w)),R=k}if(R.visible=A.visible,R.wireframe=A.wireframe,T===Br?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:d[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const B=i.properties.get(R);B.light=x}return R}function y(M,A,x,T,R){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===Br)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,M.matrixWorld);const L=e.update(M),F=M.material;if(Array.isArray(F)){const k=L.groups;for(let U=0,O=k.length;U<O;U++){const G=k[U],W=F[G.materialIndex];if(W&&W.visible){const se=b(M,W,T,R);M.onBeforeShadow(i,M,A,x,L,se,G),i.renderBufferDirect(x,null,L,se,M,G),M.onAfterShadow(i,M,A,x,L,se,G)}}}else if(F.visible){const k=b(M,F,T,R);M.onBeforeShadow(i,M,A,x,L,k,null),i.renderBufferDirect(x,null,L,k,M,null),M.onAfterShadow(i,M,A,x,L,k,null)}}const B=M.children;for(let L=0,F=B.length;L<F;L++)y(B[L],A,x,T,R)}function w(M){M.target.removeEventListener("dispose",w);for(const x in c){const T=c[x],R=M.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function mA(i,e){function t(){let V=!1;const xe=new Dt;let Q=null;const we=new Dt(0,0,0,0);return{setMask:function(Ie){Q!==Ie&&!V&&(i.colorMask(Ie,Ie,Ie,Ie),Q=Ie)},setLocked:function(Ie){V=Ie},setClear:function(Ie,le,Xe,He,Ht){Ht===!0&&(Ie*=He,le*=He,Xe*=He),xe.set(Ie,le,Xe,He),we.equals(xe)===!1&&(i.clearColor(Ie,le,Xe,He),we.copy(xe))},reset:function(){V=!1,Q=null,we.set(-1,0,0,0)}}}function n(){let V=!1,xe=!1,Q=null,we=null,Ie=null;return{setReversed:function(le){if(xe!==le){const Xe=e.get("EXT_clip_control");le?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),xe=le;const He=Ie;Ie=null,this.setClear(He)}},getReversed:function(){return xe},setTest:function(le){le?ue(i.DEPTH_TEST):We(i.DEPTH_TEST)},setMask:function(le){Q!==le&&!V&&(i.depthMask(le),Q=le)},setFunc:function(le){if(xe&&(le=Ux[le]),we!==le){switch(le){case Ol:i.depthFunc(i.NEVER);break;case Fl:i.depthFunc(i.ALWAYS);break;case kl:i.depthFunc(i.LESS);break;case nr:i.depthFunc(i.LEQUAL);break;case Bl:i.depthFunc(i.EQUAL);break;case zl:i.depthFunc(i.GEQUAL);break;case Vl:i.depthFunc(i.GREATER);break;case Gl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=le}},setLocked:function(le){V=le},setClear:function(le){Ie!==le&&(Ie=le,xe&&(le=1-le),i.clearDepth(le))},reset:function(){V=!1,Q=null,we=null,Ie=null,xe=!1}}}function s(){let V=!1,xe=null,Q=null,we=null,Ie=null,le=null,Xe=null,He=null,Ht=null;return{setTest:function(qe){V||(qe?ue(i.STENCIL_TEST):We(i.STENCIL_TEST))},setMask:function(qe){xe!==qe&&!V&&(i.stencilMask(qe),xe=qe)},setFunc:function(qe,rt,ft){(Q!==qe||we!==rt||Ie!==ft)&&(i.stencilFunc(qe,rt,ft),Q=qe,we=rt,Ie=ft)},setOp:function(qe,rt,ft){(le!==qe||Xe!==rt||He!==ft)&&(i.stencilOp(qe,rt,ft),le=qe,Xe=rt,He=ft)},setLocked:function(qe){V=qe},setClear:function(qe){Ht!==qe&&(i.clearStencil(qe),Ht=qe)},reset:function(){V=!1,xe=null,Q=null,we=null,Ie=null,le=null,Xe=null,He=null,Ht=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,p=[],_=null,g=!1,m=null,v=null,b=null,y=null,w=null,M=null,A=null,x=new Fe(0,0,0),T=0,R=!1,I=null,B=null,L=null,F=null,k=null;const U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,G=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=G>=1):W.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=G>=2);let se=null,J={};const te=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),ct=new Dt().fromArray(te),at=new Dt().fromArray(Ce);function ee(V,xe,Q,we){const Ie=new Uint8Array(4),le=i.createTexture();i.bindTexture(V,le),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<Q;Xe++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(xe+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return le}const _e={};_e[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(i.DEPTH_TEST),a.setFunc(nr),Se(!1),be(Pu),ue(i.CULL_FACE),ae(Pi);function ue(V){u[V]!==!0&&(i.enable(V),u[V]=!0)}function We(V){u[V]!==!1&&(i.disable(V),u[V]=!1)}function Je(V,xe){return h[V]!==xe?(i.bindFramebuffer(V,xe),h[V]=xe,V===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=xe),V===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function he(V,xe){let Q=p,we=!1;if(V){Q=f.get(xe),Q===void 0&&(Q=[],f.set(xe,Q));const Ie=V.textures;if(Q.length!==Ie.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Xe=Ie.length;le<Xe;le++)Q[le]=i.COLOR_ATTACHMENT0+le;Q.length=Ie.length,we=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,we=!0);we&&i.drawBuffers(Q)}function Re(V){return _!==V?(i.useProgram(V),_=V,!0):!1}const ze={[ms]:i.FUNC_ADD,[og]:i.FUNC_SUBTRACT,[lg]:i.FUNC_REVERSE_SUBTRACT};ze[cg]=i.MIN,ze[hg]=i.MAX;const re={[ug]:i.ZERO,[dg]:i.ONE,[fg]:i.SRC_COLOR,[Ul]:i.SRC_ALPHA,[yg]:i.SRC_ALPHA_SATURATE,[_g]:i.DST_COLOR,[mg]:i.DST_ALPHA,[pg]:i.ONE_MINUS_SRC_COLOR,[Nl]:i.ONE_MINUS_SRC_ALPHA,[vg]:i.ONE_MINUS_DST_COLOR,[gg]:i.ONE_MINUS_DST_ALPHA,[xg]:i.CONSTANT_COLOR,[bg]:i.ONE_MINUS_CONSTANT_COLOR,[Sg]:i.CONSTANT_ALPHA,[Mg]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(V,xe,Q,we,Ie,le,Xe,He,Ht,qe){if(V===Pi){g===!0&&(We(i.BLEND),g=!1);return}if(g===!1&&(ue(i.BLEND),g=!0),V!==ag){if(V!==m||qe!==R){if((v!==ms||w!==ms)&&(i.blendEquation(i.FUNC_ADD),v=ms,w=ms),qe)switch(V){case Qs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Du:i.blendFunc(i.ONE,i.ONE);break;case Lu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",V);break}else switch(V){case Qs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Du:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Lu:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uu:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",V);break}b=null,y=null,M=null,A=null,x.set(0,0,0),T=0,m=V,R=qe}return}Ie=Ie||xe,le=le||Q,Xe=Xe||we,(xe!==v||Ie!==w)&&(i.blendEquationSeparate(ze[xe],ze[Ie]),v=xe,w=Ie),(Q!==b||we!==y||le!==M||Xe!==A)&&(i.blendFuncSeparate(re[Q],re[we],re[le],re[Xe]),b=Q,y=we,M=le,A=Xe),(He.equals(x)===!1||Ht!==T)&&(i.blendColor(He.r,He.g,He.b,Ht),x.copy(He),T=Ht),m=V,R=!1}function oe(V,xe){V.side===Ci?We(i.CULL_FACE):ue(i.CULL_FACE);let Q=V.side===Fn;xe&&(Q=!Q),Se(Q),V.blending===Qs&&V.transparent===!1?ae(Pi):ae(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);const we=V.stencilWrite;o.setTest(we),we&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ye(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):We(i.SAMPLE_ALPHA_TO_COVERAGE)}function Se(V){I!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),I=V)}function be(V){V!==sg?(ue(i.CULL_FACE),V!==B&&(V===Pu?i.cullFace(i.BACK):V===rg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):We(i.CULL_FACE),B=V}function Qe(V){V!==L&&(O&&i.lineWidth(V),L=V)}function ye(V,xe,Q){V?(ue(i.POLYGON_OFFSET_FILL),(F!==xe||k!==Q)&&(F=xe,k=Q,a.getReversed()&&(xe=-xe),i.polygonOffset(xe,Q))):We(i.POLYGON_OFFSET_FILL)}function ve(V){V?ue(i.SCISSOR_TEST):We(i.SCISSOR_TEST)}function Pe(V){V===void 0&&(V=i.TEXTURE0+U-1),se!==V&&(i.activeTexture(V),se=V)}function z(V,xe,Q){Q===void 0&&(se===null?Q=i.TEXTURE0+U-1:Q=se);let we=J[Q];we===void 0&&(we={type:void 0,texture:void 0},J[Q]=we),(we.type!==V||we.texture!==xe)&&(se!==Q&&(i.activeTexture(Q),se=Q),i.bindTexture(V,xe||_e[V]),we.type=V,we.texture=xe)}function Tt(){const V=J[se];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function gt(){try{i.compressedTexImage2D(...arguments)}catch(V){Ye("WebGLState:",V)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(V){Ye("WebGLState:",V)}}function S(){try{i.texSubImage2D(...arguments)}catch(V){Ye("WebGLState:",V)}}function q(){try{i.texSubImage3D(...arguments)}catch(V){Ye("WebGLState:",V)}}function N(){try{i.compressedTexSubImage2D(...arguments)}catch(V){Ye("WebGLState:",V)}}function H(){try{i.compressedTexSubImage3D(...arguments)}catch(V){Ye("WebGLState:",V)}}function ne(){try{i.texStorage2D(...arguments)}catch(V){Ye("WebGLState:",V)}}function ce(){try{i.texStorage3D(...arguments)}catch(V){Ye("WebGLState:",V)}}function $(){try{i.texImage2D(...arguments)}catch(V){Ye("WebGLState:",V)}}function j(){try{i.texImage3D(...arguments)}catch(V){Ye("WebGLState:",V)}}function ge(V){return d[V]!==void 0?d[V]:i.getParameter(V)}function Ge(V,xe){d[V]!==xe&&(i.pixelStorei(V,xe),d[V]=xe)}function fe(V){ct.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),ct.copy(V))}function de(V){at.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),at.copy(V))}function Oe(V,xe){let Q=c.get(xe);Q===void 0&&(Q=new WeakMap,c.set(xe,Q));let we=Q.get(V);we===void 0&&(we=i.getUniformBlockIndex(xe,V.name),Q.set(V,we))}function Ne(V,xe){const we=c.get(xe).get(V);l.get(xe)!==we&&(i.uniformBlockBinding(xe,we,V.__bindingPointIndex),l.set(xe,we))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},se=null,J={},h={},f=new WeakMap,p=[],_=null,g=!1,m=null,v=null,b=null,y=null,w=null,M=null,A=null,x=new Fe(0,0,0),T=0,R=!1,I=null,B=null,L=null,F=null,k=null,ct.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ue,disable:We,bindFramebuffer:Je,drawBuffers:he,useProgram:Re,setBlending:ae,setMaterial:oe,setFlipSided:Se,setCullFace:be,setLineWidth:Qe,setPolygonOffset:ye,setScissorTest:ve,activeTexture:Pe,bindTexture:z,unbindTexture:Tt,compressedTexImage2D:gt,compressedTexImage3D:D,texImage2D:$,texImage3D:j,pixelStorei:Ge,getParameter:ge,updateUBOMapping:Oe,uniformBlockBinding:Ne,texStorage2D:ne,texStorage3D:ce,texSubImage2D:S,texSubImage3D:q,compressedTexSubImage2D:N,compressedTexSubImage3D:H,scissor:fe,viewport:de,reset:nt}}function gA(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,S){return p?new OffscreenCanvas(D,S):Ja("canvas")}function g(D,S,q){let N=1;const H=gt(D);if((H.width>q||H.height>q)&&(N=q/Math.max(H.width,H.height)),N<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ne=Math.floor(N*H.width),ce=Math.floor(N*H.height);h===void 0&&(h=_(ne,ce));const $=S?_(ne,ce):h;return $.width=ne,$.height=ce,$.getContext("2d").drawImage(D,0,0,ne,ce),Me("WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+ne+"x"+ce+")."),$}else return"data"in D&&Me("WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),D;return D}function m(D){return D.generateMipmaps}function v(D){i.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(D,S,q,N,H,ne=!1){if(D!==null){if(i[D]!==void 0)return i[D];Me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce;N&&(ce=e.get("EXT_texture_norm16"),ce||Me("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=S;if(S===i.RED&&(q===i.FLOAT&&($=i.R32F),q===i.HALF_FLOAT&&($=i.R16F),q===i.UNSIGNED_BYTE&&($=i.R8),q===i.UNSIGNED_SHORT&&ce&&($=ce.R16_EXT),q===i.SHORT&&ce&&($=ce.R16_SNORM_EXT)),S===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&($=i.R8UI),q===i.UNSIGNED_SHORT&&($=i.R16UI),q===i.UNSIGNED_INT&&($=i.R32UI),q===i.BYTE&&($=i.R8I),q===i.SHORT&&($=i.R16I),q===i.INT&&($=i.R32I)),S===i.RG&&(q===i.FLOAT&&($=i.RG32F),q===i.HALF_FLOAT&&($=i.RG16F),q===i.UNSIGNED_BYTE&&($=i.RG8),q===i.UNSIGNED_SHORT&&ce&&($=ce.RG16_EXT),q===i.SHORT&&ce&&($=ce.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&($=i.RG8UI),q===i.UNSIGNED_SHORT&&($=i.RG16UI),q===i.UNSIGNED_INT&&($=i.RG32UI),q===i.BYTE&&($=i.RG8I),q===i.SHORT&&($=i.RG16I),q===i.INT&&($=i.RG32I)),S===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&($=i.RGB8UI),q===i.UNSIGNED_SHORT&&($=i.RGB16UI),q===i.UNSIGNED_INT&&($=i.RGB32UI),q===i.BYTE&&($=i.RGB8I),q===i.SHORT&&($=i.RGB16I),q===i.INT&&($=i.RGB32I)),S===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&($=i.RGBA8UI),q===i.UNSIGNED_SHORT&&($=i.RGBA16UI),q===i.UNSIGNED_INT&&($=i.RGBA32UI),q===i.BYTE&&($=i.RGBA8I),q===i.SHORT&&($=i.RGBA16I),q===i.INT&&($=i.RGBA32I)),S===i.RGB&&(q===i.UNSIGNED_SHORT&&ce&&($=ce.RGB16_EXT),q===i.SHORT&&ce&&($=ce.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),S===i.RGBA){const j=ne?Ka:vt.getTransfer(H);q===i.FLOAT&&($=i.RGBA32F),q===i.HALF_FLOAT&&($=i.RGBA16F),q===i.UNSIGNED_BYTE&&($=j===Pt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&ce&&($=ce.RGBA16_EXT),q===i.SHORT&&ce&&($=ce.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function w(D,S){let q;return D?S===null||S===hi||S===jr?q=i.DEPTH24_STENCIL8:S===Nn?q=i.DEPTH32F_STENCIL8:S===Kr&&(q=i.DEPTH24_STENCIL8,Me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===hi||S===jr?q=i.DEPTH_COMPONENT24:S===Nn?q=i.DEPTH_COMPONENT32F:S===Kr&&(q=i.DEPTH_COMPONENT16),q}function M(D,S){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==tn&&D.minFilter!==Gt?Math.log2(Math.max(S.width,S.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?S.mipmaps.length:1}function A(D){const S=D.target;S.removeEventListener("dispose",A),T(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&d.delete(S)}function x(D){const S=D.target;S.removeEventListener("dispose",x),I(S)}function T(D){const S=n.get(D);if(S.__webglInit===void 0)return;const q=D.source,N=f.get(q);if(N){const H=N[S.__cacheKey];H.usedTimes--,H.usedTimes===0&&R(D),Object.keys(N).length===0&&f.delete(q)}n.remove(D)}function R(D){const S=n.get(D);i.deleteTexture(S.__webglTexture);const q=D.source,N=f.get(q);delete N[S.__cacheKey],a.memory.textures--}function I(D){const S=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(S.__webglFramebuffer[N]))for(let H=0;H<S.__webglFramebuffer[N].length;H++)i.deleteFramebuffer(S.__webglFramebuffer[N][H]);else i.deleteFramebuffer(S.__webglFramebuffer[N]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[N])}else{if(Array.isArray(S.__webglFramebuffer))for(let N=0;N<S.__webglFramebuffer.length;N++)i.deleteFramebuffer(S.__webglFramebuffer[N]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let N=0;N<S.__webglColorRenderbuffer.length;N++)S.__webglColorRenderbuffer[N]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[N]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const q=D.textures;for(let N=0,H=q.length;N<H;N++){const ne=n.get(q[N]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(q[N])}n.remove(D)}let B=0;function L(){B=0}function F(){return B}function k(D){B=D}function U(){const D=B;return D>=s.maxTextures&&Me("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),B+=1,D}function O(D){const S=[];return S.push(D.wrapS),S.push(D.wrapT),S.push(D.wrapR||0),S.push(D.magFilter),S.push(D.minFilter),S.push(D.anisotropy),S.push(D.internalFormat),S.push(D.format),S.push(D.type),S.push(D.generateMipmaps),S.push(D.premultiplyAlpha),S.push(D.flipY),S.push(D.unpackAlignment),S.push(D.colorSpace),S.join()}function G(D,S){const q=n.get(D);if(D.isVideoTexture&&z(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&q.__version!==D.version){const N=D.image;if(N===null)Me("WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)Me("WebGLRenderer: Texture marked for update but image is incomplete");else{We(q,D,S);return}}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+S)}function W(D,S){const q=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){We(q,D,S);return}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+S)}function se(D,S){const q=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){We(q,D,S);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+S)}function J(D,S){const q=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&q.__version!==D.version){Je(q,D,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+S)}const te={[Ha]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[Wa]:i.MIRRORED_REPEAT},Ce={[tn]:i.NEAREST,[Md]:i.NEAREST_MIPMAP_NEAREST,[zr]:i.NEAREST_MIPMAP_LINEAR,[Gt]:i.LINEAR,[Da]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},ct={[Dg]:i.NEVER,[Fg]:i.ALWAYS,[Lg]:i.LESS,[qc]:i.LEQUAL,[Ug]:i.EQUAL,[$c]:i.GEQUAL,[Ng]:i.GREATER,[Og]:i.NOTEQUAL};function at(D,S){if(S.type===Nn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Gt||S.magFilter===Da||S.magFilter===zr||S.magFilter===Ri||S.minFilter===Gt||S.minFilter===Da||S.minFilter===zr||S.minFilter===Ri)&&Me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,te[S.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,te[S.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,te[S.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,Ce[S.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,Ce[S.minFilter]),S.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,ct[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===tn||S.minFilter!==zr&&S.minFilter!==Ri||S.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ee(D,S){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,S.addEventListener("dispose",A));const N=S.source;let H=f.get(N);H===void 0&&(H={},f.set(N,H));const ne=O(S);if(ne!==D.__cacheKey){H[ne]===void 0&&(H[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),H[ne].usedTimes++;const ce=H[D.__cacheKey];ce!==void 0&&(H[D.__cacheKey].usedTimes--,ce.usedTimes===0&&R(S)),D.__cacheKey=ne,D.__webglTexture=H[ne].texture}return q}function _e(D,S,q){return Math.floor(Math.floor(D/q)/S)}function ue(D,S,q,N){const ne=D.updateRanges;if(ne.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,q,N,S.data);else{ne.sort((Ge,fe)=>Ge.start-fe.start);let ce=0;for(let Ge=1;Ge<ne.length;Ge++){const fe=ne[ce],de=ne[Ge],Oe=fe.start+fe.count,Ne=_e(de.start,S.width,4),nt=_e(fe.start,S.width,4);de.start<=Oe+1&&Ne===nt&&_e(de.start+de.count-1,S.width,4)===Ne?fe.count=Math.max(fe.count,de.start+de.count-fe.start):(++ce,ne[ce]=de)}ne.length=ce+1;const $=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),ge=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let Ge=0,fe=ne.length;Ge<fe;Ge++){const de=ne[Ge],Oe=Math.floor(de.start/4),Ne=Math.ceil(de.count/4),nt=Oe%S.width,V=Math.floor(Oe/S.width),xe=Ne,Q=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),t.pixelStorei(i.UNPACK_SKIP_ROWS,V),t.texSubImage2D(i.TEXTURE_2D,0,nt,V,xe,Q,q,N,S.data)}D.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,ge)}}function We(D,S,q){let N=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(N=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(N=i.TEXTURE_3D);const H=ee(D,S),ne=S.source;t.bindTexture(N,D.__webglTexture,i.TEXTURE0+q);const ce=n.get(ne);if(ne.version!==ce.__version||H===!0){if(t.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const Q=vt.getPrimaries(vt.workingColorSpace),we=S.colorSpace===qi?null:vt.getPrimaries(S.colorSpace),Ie=S.colorSpace===qi||Q===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let j=g(S.image,!1,s.maxTextureSize);j=Tt(S,j);const ge=r.convert(S.format,S.colorSpace),Ge=r.convert(S.type);let fe=y(S.internalFormat,ge,Ge,S.normalized,S.colorSpace,S.isVideoTexture);at(N,S);let de;const Oe=S.mipmaps,Ne=S.isVideoTexture!==!0,nt=ce.__version===void 0||H===!0,V=ne.dataReady,xe=M(S,j);if(S.isDepthTexture)fe=w(S.format===gs,S.type),nt&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,fe,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,fe,j.width,j.height,0,ge,Ge,null));else if(S.isDataTexture)if(Oe.length>0){Ne&&nt&&t.texStorage2D(i.TEXTURE_2D,xe,fe,Oe[0].width,Oe[0].height);for(let Q=0,we=Oe.length;Q<we;Q++)de=Oe[Q],Ne?V&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,de.width,de.height,ge,Ge,de.data):t.texImage2D(i.TEXTURE_2D,Q,fe,de.width,de.height,0,ge,Ge,de.data);S.generateMipmaps=!1}else Ne?(nt&&t.texStorage2D(i.TEXTURE_2D,xe,fe,j.width,j.height),V&&ue(S,j,ge,Ge)):t.texImage2D(i.TEXTURE_2D,0,fe,j.width,j.height,0,ge,Ge,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ne&&nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,fe,Oe[0].width,Oe[0].height,j.depth);for(let Q=0,we=Oe.length;Q<we;Q++)if(de=Oe[Q],S.format!==On)if(ge!==null)if(Ne){if(V)if(S.layerUpdates.size>0){const Ie=$u(de.width,de.height,S.format,S.type);for(const le of S.layerUpdates){const Xe=de.data.subarray(le*Ie/de.data.BYTES_PER_ELEMENT,(le+1)*Ie/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,le,de.width,de.height,1,ge,Xe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,j.depth,ge,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,fe,de.width,de.height,j.depth,0,de.data,0,0);else Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,j.depth,ge,Ge,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,fe,de.width,de.height,j.depth,0,ge,Ge,de.data)}else{Ne&&nt&&t.texStorage2D(i.TEXTURE_2D,xe,fe,Oe[0].width,Oe[0].height);for(let Q=0,we=Oe.length;Q<we;Q++)de=Oe[Q],S.format!==On?ge!==null?Ne?V&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,de.width,de.height,ge,de.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,fe,de.width,de.height,0,de.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?V&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,de.width,de.height,ge,Ge,de.data):t.texImage2D(i.TEXTURE_2D,Q,fe,de.width,de.height,0,ge,Ge,de.data)}else if(S.isDataArrayTexture)if(Ne){if(nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,fe,j.width,j.height,j.depth),V)if(S.layerUpdates.size>0){const Q=$u(j.width,j.height,S.format,S.type);for(const we of S.layerUpdates){const Ie=j.data.subarray(we*Q/j.data.BYTES_PER_ELEMENT,(we+1)*Q/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,we,j.width,j.height,1,ge,Ge,Ie)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ge,Ge,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,fe,j.width,j.height,j.depth,0,ge,Ge,j.data);else if(S.isData3DTexture)Ne?(nt&&t.texStorage3D(i.TEXTURE_3D,xe,fe,j.width,j.height,j.depth),V&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ge,Ge,j.data)):t.texImage3D(i.TEXTURE_3D,0,fe,j.width,j.height,j.depth,0,ge,Ge,j.data);else if(S.isFramebufferTexture){if(nt)if(Ne)t.texStorage2D(i.TEXTURE_2D,xe,fe,j.width,j.height);else{let Q=j.width,we=j.height;for(let Ie=0;Ie<xe;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,fe,Q,we,0,ge,Ge,null),Q>>=1,we>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){const Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),j.parentNode!==Q){Q.appendChild(j),d.add(S),Q.onpaint=we=>{const Ie=we.changedElements;for(const le of d)Ie.includes(le.image)&&(le.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{const Ie=i.RGBA,le=i.RGBA,Xe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ie,le,Xe,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(Ne&&nt){const Q=gt(Oe[0]);t.texStorage2D(i.TEXTURE_2D,xe,fe,Q.width,Q.height)}for(let Q=0,we=Oe.length;Q<we;Q++)de=Oe[Q],Ne?V&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ge,Ge,de):t.texImage2D(i.TEXTURE_2D,Q,fe,ge,Ge,de);S.generateMipmaps=!1}else if(Ne){if(nt){const Q=gt(j);t.texStorage2D(i.TEXTURE_2D,xe,fe,Q.width,Q.height)}V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Ge,j)}else t.texImage2D(i.TEXTURE_2D,0,fe,ge,Ge,j);m(S)&&v(N),ce.__version=ne.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function Je(D,S,q){if(S.image.length!==6)return;const N=ee(D,S),H=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+q);const ne=n.get(H);if(H.version!==ne.__version||N===!0){t.activeTexture(i.TEXTURE0+q);const ce=vt.getPrimaries(vt.workingColorSpace),$=S.colorSpace===qi?null:vt.getPrimaries(S.colorSpace),j=S.colorSpace===qi||ce===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const ge=S.isCompressedTexture||S.image[0].isCompressedTexture,Ge=S.image[0]&&S.image[0].isDataTexture,fe=[];for(let le=0;le<6;le++)!ge&&!Ge?fe[le]=g(S.image[le],!0,s.maxCubemapSize):fe[le]=Ge?S.image[le].image:S.image[le],fe[le]=Tt(S,fe[le]);const de=fe[0],Oe=r.convert(S.format,S.colorSpace),Ne=r.convert(S.type),nt=y(S.internalFormat,Oe,Ne,S.normalized,S.colorSpace),V=S.isVideoTexture!==!0,xe=ne.__version===void 0||N===!0,Q=H.dataReady;let we=M(S,de);at(i.TEXTURE_CUBE_MAP,S);let Ie;if(ge){V&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,nt,de.width,de.height);for(let le=0;le<6;le++){Ie=fe[le].mipmaps;for(let Xe=0;Xe<Ie.length;Xe++){const He=Ie[Xe];S.format!==On?Oe!==null?V?Q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Xe,0,0,He.width,He.height,Oe,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Xe,nt,He.width,He.height,0,He.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Xe,0,0,He.width,He.height,Oe,Ne,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Xe,nt,He.width,He.height,0,Oe,Ne,He.data)}}}else{if(Ie=S.mipmaps,V&&xe){Ie.length>0&&we++;const le=gt(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,nt,le.width,le.height)}for(let le=0;le<6;le++)if(Ge){V?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,fe[le].width,fe[le].height,Oe,Ne,fe[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,nt,fe[le].width,fe[le].height,0,Oe,Ne,fe[le].data);for(let Xe=0;Xe<Ie.length;Xe++){const Ht=Ie[Xe].image[le].image;V?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Xe+1,0,0,Ht.width,Ht.height,Oe,Ne,Ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Xe+1,nt,Ht.width,Ht.height,0,Oe,Ne,Ht.data)}}else{V?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Oe,Ne,fe[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,nt,Oe,Ne,fe[le]);for(let Xe=0;Xe<Ie.length;Xe++){const He=Ie[Xe];V?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Xe+1,0,0,Oe,Ne,He.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Xe+1,nt,Oe,Ne,He.image[le])}}}m(S)&&v(i.TEXTURE_CUBE_MAP),ne.__version=H.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function he(D,S,q,N,H,ne){const ce=r.convert(q.format,q.colorSpace),$=r.convert(q.type),j=y(q.internalFormat,ce,$,q.normalized,q.colorSpace),ge=n.get(S),Ge=n.get(q);if(Ge.__renderTarget=S,!ge.__hasExternalTextures){const fe=Math.max(1,S.width>>ne),de=Math.max(1,S.height>>ne);H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?t.texImage3D(H,ne,j,fe,de,S.depth,0,ce,$,null):t.texImage2D(H,ne,j,fe,de,0,ce,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),Pe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,N,H,Ge.__webglTexture,0,ve(S)):(H===i.TEXTURE_2D||H>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,N,H,Ge.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(D,S,q){if(i.bindRenderbuffer(i.RENDERBUFFER,D),S.depthBuffer){const N=S.depthTexture,H=N&&N.isDepthTexture?N.type:null,ne=w(S.stencilBuffer,H),ce=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Pe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve(S),ne,S.width,S.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve(S),ne,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ne,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,D)}else{const N=S.textures;for(let H=0;H<N.length;H++){const ne=N[H],ce=r.convert(ne.format,ne.colorSpace),$=r.convert(ne.type),j=y(ne.internalFormat,ce,$,ne.normalized,ne.colorSpace);Pe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve(S),j,S.width,S.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve(S),j,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,j,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ze(D,S,q){const N=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const H=n.get(S.depthTexture);if(H.__renderTarget=S,(!H.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N){if(H.__webglInit===void 0&&(H.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),H.__webglTexture===void 0){H.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),at(i.TEXTURE_CUBE_MAP,S.depthTexture);const ge=r.convert(S.depthTexture.format),Ge=r.convert(S.depthTexture.type);let fe;S.depthTexture.format===Ui?fe=i.DEPTH_COMPONENT24:S.depthTexture.format===gs&&(fe=i.DEPTH24_STENCIL8);for(let de=0;de<6;de++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,fe,S.width,S.height,0,ge,Ge,null)}}else G(S.depthTexture,0);const ne=H.__webglTexture,ce=ve(S),$=N?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,j=S.depthTexture.format===gs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ui)Pe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,$,ne,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,j,$,ne,0);else if(S.depthTexture.format===gs)Pe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,$,ne,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,j,$,ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(D){const S=n.get(D),q=D.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==D.depthTexture){const N=D.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),N){const H=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,N.removeEventListener("dispose",H)};N.addEventListener("dispose",H),S.__depthDisposeCallback=H}S.__boundDepthTexture=N}if(D.depthTexture&&!S.__autoAllocateDepthBuffer)if(q)for(let N=0;N<6;N++)ze(S.__webglFramebuffer[N],D,N);else{const N=D.texture.mipmaps;N&&N.length>0?ze(S.__webglFramebuffer[0],D,0):ze(S.__webglFramebuffer,D,0)}else if(q){S.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[N]),S.__webglDepthbuffer[N]===void 0)S.__webglDepthbuffer[N]=i.createRenderbuffer(),Re(S.__webglDepthbuffer[N],D,!1);else{const H=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer[N];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,ne)}}else{const N=D.texture.mipmaps;if(N&&N.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Re(S.__webglDepthbuffer,D,!1);else{const H=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,ne)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(D,S,q){const N=n.get(D);S!==void 0&&he(N.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&re(D)}function oe(D){const S=D.texture,q=n.get(D),N=n.get(S);D.addEventListener("dispose",x);const H=D.textures,ne=D.isWebGLCubeRenderTarget===!0,ce=H.length>1;if(ce||(N.__webglTexture===void 0&&(N.__webglTexture=i.createTexture()),N.__version=S.version,a.memory.textures++),ne){q.__webglFramebuffer=[];for(let $=0;$<6;$++)if(S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer[$]=[];for(let j=0;j<S.mipmaps.length;j++)q.__webglFramebuffer[$][j]=i.createFramebuffer()}else q.__webglFramebuffer[$]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer=[];for(let $=0;$<S.mipmaps.length;$++)q.__webglFramebuffer[$]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(ce)for(let $=0,j=H.length;$<j;$++){const ge=n.get(H[$]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),a.memory.textures++)}if(D.samples>0&&Pe(D)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let $=0;$<H.length;$++){const j=H[$];q.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[$]);const ge=r.convert(j.format,j.colorSpace),Ge=r.convert(j.type),fe=y(j.internalFormat,ge,Ge,j.normalized,j.colorSpace,D.isXRRenderTarget===!0),de=ve(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,fe,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,q.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture),at(i.TEXTURE_CUBE_MAP,S);for(let $=0;$<6;$++)if(S.mipmaps&&S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)he(q.__webglFramebuffer[$][j],D,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else he(q.__webglFramebuffer[$],D,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);m(S)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let $=0,j=H.length;$<j;$++){const ge=H[$],Ge=n.get(ge);let fe=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(fe=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,Ge.__webglTexture),at(fe,ge),he(q.__webglFramebuffer,D,ge,i.COLOR_ATTACHMENT0+$,fe,0),m(ge)&&v(fe)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&($=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,N.__webglTexture),at($,S),S.mipmaps&&S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)he(q.__webglFramebuffer[j],D,S,i.COLOR_ATTACHMENT0,$,j);else he(q.__webglFramebuffer,D,S,i.COLOR_ATTACHMENT0,$,0);m(S)&&v($),t.unbindTexture()}D.depthBuffer&&re(D)}function Se(D){const S=D.textures;for(let q=0,N=S.length;q<N;q++){const H=S[q];if(m(H)){const ne=b(D),ce=n.get(H).__webglTexture;t.bindTexture(ne,ce),v(ne),t.unbindTexture()}}}const be=[],Qe=[];function ye(D){if(D.samples>0){if(Pe(D)===!1){const S=D.textures,q=D.width,N=D.height;let H=i.COLOR_BUFFER_BIT;const ne=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(D),$=S.length>1;if($)for(let ge=0;ge<S.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const j=D.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ge=0;ge<S.length;ge++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(H|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(H|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ge]);const Ge=n.get(S[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ge,0)}i.blitFramebuffer(0,0,q,N,0,0,q,N,H,i.NEAREST),l===!0&&(be.length=0,Qe.length=0,be.push(i.COLOR_ATTACHMENT0+ge),D.depthBuffer&&D.resolveDepthBuffer===!1&&(be.push(ne),Qe.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Qe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let ge=0;ge<S.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ge]);const Ge=n.get(S[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,Ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const S=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ve(D){return Math.min(s.maxSamples,D.samples)}function Pe(D){const S=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function z(D){const S=a.render.frame;u.get(D)!==S&&(u.set(D,S),D.update())}function Tt(D,S){const q=D.colorSpace,N=D.format,H=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==Za&&q!==qi&&(vt.getTransfer(q)===Pt?(N!==On||H!==Hn)&&Me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",q)),S}function gt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.getTextureUnits=F,this.setTextureUnits=k,this.setTexture2D=G,this.setTexture2DArray=W,this.setTexture3D=se,this.setTextureCube=J,this.rebindTextures=ae,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function K0(i,e){function t(n,s=qi){let r;const a=vt.getTransfer(s);if(n===Hn)return i.UNSIGNED_BYTE;if(n===zc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ed)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ad)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===wd)return i.BYTE;if(n===Td)return i.SHORT;if(n===Kr)return i.UNSIGNED_SHORT;if(n===Bc)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===Li)return i.HALF_FLOAT;if(n===Cd)return i.ALPHA;if(n===Rd)return i.RGB;if(n===On)return i.RGBA;if(n===Ui)return i.DEPTH_COMPONENT;if(n===gs)return i.DEPTH_STENCIL;if(n===Gc)return i.RED;if(n===vo)return i.RED_INTEGER;if(n===Ss)return i.RG;if(n===Hc)return i.RG_INTEGER;if(n===Wc)return i.RGBA_INTEGER;if(n===La||n===Ua||n===Na||n===Oa)if(a===Pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===La)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===La)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hl||n===Wl||n===Xl||n===ql)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$l||n===Yl||n===Zl||n===Kl||n===jl||n===Xa||n===Jl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$l||n===Yl)return a===Pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Kl)return r.COMPRESSED_R11_EAC;if(n===jl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Xa)return r.COMPRESSED_RG11_EAC;if(n===Jl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===lc||n===cc||n===hc||n===uc||n===dc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ql)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ec)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tc)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nc)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ic)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sc)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rc)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ac)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oc)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lc)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cc)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hc)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uc)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dc)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fc||n===pc||n===mc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===fc)return a===Pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gc||n===_c||n===qa||n===vc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===gc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_c)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===jr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const _A=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Bd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ui({vertexShader:_A,fragmentShader:vA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nn(new ra(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xA extends Mi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null;const _=typeof XRWebGLBinding<"u",g=new yA,m={},v=t.getContextAttributes();let b=null,y=null;const w=[],M=[],A=new ie;let x=null;const T=new pn;T.viewport=new Dt;const R=new pn;R.viewport=new Dt;const I=[T,R],B=new O0;let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let _e=w[ee];return _e===void 0&&(_e=new Tl,w[ee]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(ee){let _e=w[ee];return _e===void 0&&(_e=new Tl,w[ee]=_e),_e.getGripSpace()},this.getHand=function(ee){let _e=w[ee];return _e===void 0&&(_e=new Tl,w[ee]=_e),_e.getHandSpace()};function k(ee){const _e=M.indexOf(ee.inputSource);if(_e===-1)return;const ue=w[_e];ue!==void 0&&(ue.update(ee.inputSource,ee.frame,c||a),ue.dispatchEvent({type:ee.type,data:ee.inputSource}))}function U(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",O);for(let ee=0;ee<w.length;ee++){const _e=M[ee];_e!==null&&(M[ee]=null,w[ee].disconnect(_e))}L=null,F=null,g.reset();for(const ee in m)delete m[ee];e.setRenderTarget(b),f=null,h=null,d=null,s=null,y=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&Me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&Me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",U),s.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,We=null,Je=null;v.depth&&(Je=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=v.stencil?gs:Ui,We=v.stencil?jr:hi);const he={colorFormat:t.RGBA8,depthFormat:Je,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(he),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new ei(h.textureWidth,h.textureHeight,{format:On,type:Hn,depthTexture:new ar(h.textureWidth,h.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ue={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ei(f.framebufferWidth,f.framebufferHeight,{format:On,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),at.setContext(s),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(ee){for(let _e=0;_e<ee.removed.length;_e++){const ue=ee.removed[_e],We=M.indexOf(ue);We>=0&&(M[We]=null,w[We].disconnect(ue))}for(let _e=0;_e<ee.added.length;_e++){const ue=ee.added[_e];let We=M.indexOf(ue);if(We===-1){for(let he=0;he<w.length;he++)if(he>=M.length){M.push(ue),We=he;break}else if(M[he]===null){M[he]=ue,We=he;break}if(We===-1)break}const Je=w[We];Je&&Je.connect(ue)}}const G=new P,W=new P;function se(ee,_e,ue){G.setFromMatrixPosition(_e.matrixWorld),W.setFromMatrixPosition(ue.matrixWorld);const We=G.distanceTo(W),Je=_e.projectionMatrix.elements,he=ue.projectionMatrix.elements,Re=Je[14]/(Je[10]-1),ze=Je[14]/(Je[10]+1),re=(Je[9]+1)/Je[5],ae=(Je[9]-1)/Je[5],oe=(Je[8]-1)/Je[0],Se=(he[8]+1)/he[0],be=Re*oe,Qe=Re*Se,ye=We/(-oe+Se),ve=ye*-oe;if(_e.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(ve),ee.translateZ(ye),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Je[10]===-1)ee.projectionMatrix.copy(_e.projectionMatrix),ee.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const Pe=Re+ye,z=ze+ye,Tt=be-ve,gt=Qe+(We-ve),D=re*ze/z*Pe,S=ae*ze/z*Pe;ee.projectionMatrix.makePerspective(Tt,gt,D,S,Pe,z),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function J(ee,_e){_e===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(_e.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let _e=ee.near,ue=ee.far;g.texture!==null&&(g.depthNear>0&&(_e=g.depthNear),g.depthFar>0&&(ue=g.depthFar)),B.near=R.near=T.near=_e,B.far=R.far=T.far=ue,(L!==B.near||F!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),L=B.near,F=B.far),B.layers.mask=ee.layers.mask|6,T.layers.mask=B.layers.mask&-5,R.layers.mask=B.layers.mask&-3;const We=ee.parent,Je=B.cameras;J(B,We);for(let he=0;he<Je.length;he++)J(Je[he],We);Je.length===2?se(B,T,R):B.projectionMatrix.copy(T.projectionMatrix),te(ee,B,We)};function te(ee,_e,ue){ue===null?ee.matrix.copy(_e.matrixWorld):(ee.matrix.copy(ue.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(_e.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(_e.projectionMatrix),ee.projectionMatrixInverse.copy(_e.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Jr*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ee)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(ee){return m[ee]};let Ce=null;function ct(ee,_e){if(u=_e.getViewerPose(c||a),p=_e,u!==null){const ue=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let We=!1;ue.length!==B.cameras.length&&(B.cameras.length=0,We=!0);for(let ze=0;ze<ue.length;ze++){const re=ue[ze];let ae=null;if(f!==null)ae=f.getViewport(re);else{const Se=d.getViewSubImage(h,re);ae=Se.viewport,ze===0&&(e.setRenderTargetTextures(y,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(y))}let oe=I[ze];oe===void 0&&(oe=new pn,oe.layers.enable(ze),oe.viewport=new Dt,I[ze]=oe),oe.matrix.fromArray(re.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(re.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ae.x,ae.y,ae.width,ae.height),ze===0&&(B.matrix.copy(oe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),We===!0&&B.cameras.push(oe)}const Je=s.enabledFeatures;if(Je&&Je.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const ze=d.getDepthInformation(ue[0]);ze&&ze.isValid&&ze.texture&&g.init(ze,s.renderState)}if(Je&&Je.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let ze=0;ze<ue.length;ze++){const re=ue[ze].camera;if(re){let ae=m[re];ae||(ae=new Bd,m[re]=ae);const oe=d.getCameraImage(re);ae.sourceTexture=oe}}}}for(let ue=0;ue<w.length;ue++){const We=M[ue],Je=w[ue];We!==null&&Je!==void 0&&Je.update(We,_e,c||a)}Ce&&Ce(ee,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),p=null}const at=new W0;at.setAnimationLoop(ct),this.setAnimationLoop=function(ee){Ce=ee},this.dispose=function(){}}}const bA=new et,j0=new ot;j0.set(-1,0,0,0,1,0,0,0,1);function SA(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,d0(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,b,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,v,b):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Fn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Fn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const v=e.get(m),b=v.envMap,y=v.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(bA.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(j0),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Fn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const v=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function MA(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){const M=w.program;n.uniformBlockBinding(y,M)}function c(y,w){let M=s[y.id];M===void 0&&(g(y),M=u(y),s[y.id]=M,y.addEventListener("dispose",v));const A=w.program;n.updateUBOMapping(y,A);const x=e.render.frame;r[y.id]!==x&&(h(y),r[y.id]=x)}function u(y){const w=d();y.__bindingPointIndex=w;const M=i.createBuffer(),A=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,A,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,M),M}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const w=s[y.id],M=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let x=0,T=M.length;x<T;x++){const R=M[x];if(Array.isArray(R))for(let I=0,B=R.length;I<B;I++)f(R[I],x,I,A);else f(R,x,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,w,M,A){if(_(y,w,M,A)===!0){const x=y.__offset,T=y.value;if(Array.isArray(T)){let R=0;for(let I=0;I<T.length;I++){const B=T[I],L=m(B);p(B,y.__data,R),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(R+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function p(y,w,M){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,M)}function _(y,w,M,A){const x=y.value,T=w+"_"+M;if(A[T]===void 0)return typeof x=="number"||typeof x=="boolean"?A[T]=x:ArrayBuffer.isView(x)?A[T]=x.slice():A[T]=x.clone(),!0;{const R=A[T];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return A[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function g(y){const w=y.uniforms;let M=0;const A=16;for(let T=0,R=w.length;T<R;T++){const I=Array.isArray(w[T])?w[T]:[w[T]];for(let B=0,L=I.length;B<L;B++){const F=I[B],k=Array.isArray(F.value)?F.value:[F.value];for(let U=0,O=k.length;U<O;U++){const G=k[U],W=m(G),se=M%A,J=se%W.boundary,te=se+J;M+=J,te!==0&&A-te<W.storage&&(M+=A-te),F.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=W.storage}}}const x=M%A;return x>0&&(M+=A-x),y.__size=M,y.__cache={},this}function m(y){const w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?Me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):Me("WebGLRenderer: Unsupported uniform value type.",y),w}function v(y){const w=y.target;w.removeEventListener("dispose",v);const M=a.indexOf(w.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function b(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:b}}const wA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ai=null;function TA(){return Ai===null&&(Ai=new oi(wA,16,16,Ss,Li),Ai.name="DFG_LUT",Ai.minFilter=Gt,Ai.magFilter=Gt,Ai.wrapS=Xn,Ai.wrapT=Xn,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}class J0{constructor(e={}){const{canvas:t=Bg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Hn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=f,g=new Set([Wc,Hc,vo]),m=new Set([Hn,hi,Kr,jr,zc,Vc]),v=new Uint32Array(4),b=new Int32Array(4),y=new P;let w=null,M=null;const A=[],x=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let I=!1,B=null,L=null,F=null,k=null;this._outputColorSpace=Dn;let U=0,O=0,G=null,W=-1,se=null;const J=new Dt,te=new Dt;let Ce=null;const ct=new Fe(0);let at=0,ee=t.width,_e=t.height,ue=1,We=null,Je=null;const he=new Dt(0,0,ee,_e),Re=new Dt(0,0,ee,_e);let ze=!1;const re=new rr;let ae=!1,oe=!1;const Se=new et,be=new P,Qe=new Dt,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function Pe(){return G===null?ue:1}let z=n;function Tt(E,X){return t.getContext(E,X)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oc}`),t.addEventListener("webglcontextlost",Ht,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",rt,!1),z===null){const X="webgl2";if(z=Tt(X,E),z===null)throw Tt(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw Ye("WebGLRenderer: "+E.message),E}let gt,D,S,q,N,H,ne,ce,$,j,ge,Ge,fe,de,Oe,Ne,nt,V,xe,Q,we,Ie,le;function Xe(){gt=new E1(z),gt.init(),we=new K0(z,gt),D=new v1(z,gt,e,we),S=new mA(z,gt),D.reversedDepthBuffer&&h&&S.buffers.depth.setReversed(!0),L=z.createFramebuffer(),F=z.createFramebuffer(),k=z.createFramebuffer(),q=new R1(z),N=new tA,H=new gA(z,gt,S,N,D,we,q),ne=new T1(R),ce=new LM(z),Ie=new g1(z,ce),$=new A1(z,ce,q,Ie),j=new P1(z,$,ce,Ie,q),V=new I1(z,D,H),Oe=new y1(N),ge=new eA(R,ne,gt,D,Ie,Oe),Ge=new SA(R,N),fe=new iA,de=new cA(gt),nt=new m1(R,ne,S,j,p,l),Ne=new pA(R,j,D),le=new MA(z,q,D,S),xe=new _1(z,gt,q),Q=new C1(z,gt,q),q.programs=ge.programs,R.capabilities=D,R.extensions=gt,R.properties=N,R.renderLists=fe,R.shadowMap=Ne,R.state=S,R.info=q}Xe(),_!==Hn&&(T=new L1(_,t.width,t.height,o,s,r));const He=new xA(R,z);this.xr=He,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const E=gt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=gt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(E){E!==void 0&&(ue=E,this.setSize(ee,_e,!1))},this.getSize=function(E){return E.set(ee,_e)},this.setSize=function(E,X,K=!0){if(He.isPresenting){Me("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=E,_e=X,t.width=Math.floor(E*ue),t.height=Math.floor(X*ue),K===!0&&(t.style.width=E+"px",t.style.height=X+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,E,X)},this.getDrawingBufferSize=function(E){return E.set(ee*ue,_e*ue).floor()},this.setDrawingBufferSize=function(E,X,K){ee=E,_e=X,ue=K,t.width=Math.floor(E*K),t.height=Math.floor(X*K),this.setViewport(0,0,E,X)},this.setEffects=function(E){if(_===Hn){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let X=0;X<E.length;X++)if(E[X].isOutputPass===!0){Me("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(J)},this.getViewport=function(E){return E.copy(he)},this.setViewport=function(E,X,K,Y){E.isVector4?he.set(E.x,E.y,E.z,E.w):he.set(E,X,K,Y),S.viewport(J.copy(he).multiplyScalar(ue).round())},this.getScissor=function(E){return E.copy(Re)},this.setScissor=function(E,X,K,Y){E.isVector4?Re.set(E.x,E.y,E.z,E.w):Re.set(E,X,K,Y),S.scissor(te.copy(Re).multiplyScalar(ue).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(E){S.setScissorTest(ze=E)},this.setOpaqueSort=function(E){We=E},this.setTransparentSort=function(E){Je=E},this.getClearColor=function(E){return E.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(E=!0,X=!0,K=!0){let Y=0;if(E){let Z=!1;if(G!==null){const Le=G.texture.format;Z=g.has(Le)}if(Z){const Le=G.texture.type,Ve=m.has(Le),De=nt.getClearColor(),$e=nt.getClearAlpha(),Ke=De.r,pt=De.g,_t=De.b;Ve?(v[0]=Ke,v[1]=pt,v[2]=_t,v[3]=$e,z.clearBufferuiv(z.COLOR,0,v)):(b[0]=Ke,b[1]=pt,b[2]=_t,b[3]=$e,z.clearBufferiv(z.COLOR,0,b))}else Y|=z.COLOR_BUFFER_BIT}X&&(Y|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),B=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Ht,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",rt,!1),nt.dispose(),fe.dispose(),de.dispose(),N.dispose(),ne.dispose(),j.dispose(),Ie.dispose(),le.dispose(),ge.dispose(),He.dispose(),He.removeEventListener("sessionstart",To),He.removeEventListener("sessionend",Sf),Ps.stop()};function Ht(E){E.preventDefault(),Qa("WebGLRenderer: Context Lost."),I=!0}function qe(){Qa("WebGLRenderer: Context Restored."),I=!1;const E=q.autoReset,X=Ne.enabled,K=Ne.autoUpdate,Y=Ne.needsUpdate,Z=Ne.type;Xe(),q.autoReset=E,Ne.enabled=X,Ne.autoUpdate=K,Ne.needsUpdate=Y,Ne.type=Z}function rt(E){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ft(E){const X=E.target;X.removeEventListener("dispose",ft),Wt(X)}function Wt(E){gn(E),N.remove(E)}function gn(E){const X=N.get(E).programs;X!==void 0&&(X.forEach(function(K){ge.releaseProgram(K)}),E.isShaderMaterial&&ge.releaseShaderCache(E))}this.renderBufferDirect=function(E,X,K,Y,Z,Le){X===null&&(X=ye);const Ve=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,De=y_(E,X,K,Y,Z);S.setMaterial(Y,Ve);let $e=K.index,Ke=1;if(Y.wireframe===!0){if($e=$.getWireframeAttribute(K),$e===void 0)return;Ke=2}const pt=K.drawRange,_t=K.attributes.position;let je=pt.start*Ke,Lt=(pt.start+pt.count)*Ke;Le!==null&&(je=Math.max(je,Le.start*Ke),Lt=Math.min(Lt,(Le.start+Le.count)*Ke)),$e!==null?(je=Math.max(je,0),Lt=Math.min(Lt,$e.count)):_t!=null&&(je=Math.max(je,0),Lt=Math.min(Lt,_t.count));const Kt=Lt-je;if(Kt<0||Kt===1/0)return;Ie.setup(Z,Y,De,K,$e);let Yt,Ot=xe;if($e!==null&&(Yt=ce.get($e),Ot=Q,Ot.setIndex(Yt)),Z.isMesh)Y.wireframe===!0?(S.setLineWidth(Y.wireframeLinewidth*Pe()),Ot.setMode(z.LINES)):Ot.setMode(z.TRIANGLES);else if(Z.isLine){let xn=Y.linewidth;xn===void 0&&(xn=1),S.setLineWidth(xn*Pe()),Z.isLineSegments?Ot.setMode(z.LINES):Z.isLineLoop?Ot.setMode(z.LINE_LOOP):Ot.setMode(z.LINE_STRIP)}else Z.isPoints?Ot.setMode(z.POINTS):Z.isSprite&&Ot.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const xn=Z._multiDrawStarts,Be=Z._multiDrawCounts,Yn=Z._multiDrawCount,Et=$e?ce.get($e).bytesPerElement:1,ti=N.get(Y).currentProgram.getUniforms();for(let Ti=0;Ti<Yn;Ti++)ti.setValue(z,"_gl_DrawID",Ti),Ot.render(xn[Ti]/Et,Be[Ti])}else if(Z.isInstancedMesh)Ot.renderInstances(je,Kt,Z.count);else if(K.isInstancedBufferGeometry){const xn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Be=Math.min(K.instanceCount,xn);Ot.renderInstances(je,Kt,Be)}else Ot.render(je,Kt)};function Bn(E,X,K){E.transparent===!0&&E.side===Ci&&E.forceSinglePass===!1?(E.side=Fn,E.needsUpdate=!0,Ao(E,X,K),E.side=ji,E.needsUpdate=!0,Ao(E,X,K),E.side=Ci):Ao(E,X,K)}this.compile=function(E,X,K=null){K===null&&(K=E),M=de.get(K),M.init(X),x.push(M),K.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(M.pushLight(Z),Z.castShadow&&M.pushShadow(Z))}),E!==K&&E.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(M.pushLight(Z),Z.castShadow&&M.pushShadow(Z))}),M.setupLights();const Y=new Set;return E.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Le=Z.material;if(Le)if(Array.isArray(Le))for(let Ve=0;Ve<Le.length;Ve++){const De=Le[Ve];Bn(De,K,Z),Y.add(De)}else Bn(Le,K,Z),Y.add(Le)}),M=x.pop(),Y},this.compileAsync=function(E,X,K=null){const Y=this.compile(E,X,K);return new Promise(Z=>{function Le(){if(Y.forEach(function(Ve){N.get(Ve).currentProgram.isReady()&&Y.delete(Ve)}),Y.size===0){Z(E);return}setTimeout(Le,10)}gt.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let $n=null;function Fi(E){$n&&$n(E)}function To(){Ps.stop()}function Sf(){Ps.start()}const Ps=new W0;Ps.setAnimationLoop(Fi),typeof self<"u"&&Ps.setContext(self),this.setAnimationLoop=function(E){$n=E,He.setAnimationLoop(E),E===null?Ps.stop():Ps.start()},He.addEventListener("sessionstart",To),He.addEventListener("sessionend",Sf),this.render=function(E,X){if(X!==void 0&&X.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;B!==null&&B.renderStart(E,X);const K=He.enabled===!0&&He.isPresenting===!0,Y=T!==null&&(G===null||K)&&T.begin(R,G);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(X),X=He.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,X,G),M=de.get(E,x.length),M.init(X),M.state.textureUnits=H.getTextureUnits(),x.push(M),Se.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),re.setFromProjectionMatrix(Se,jn,X.reversedDepth),oe=this.localClippingEnabled,ae=Oe.init(this.clippingPlanes,oe),w=fe.get(E,A.length),w.init(),A.push(w),He.enabled===!0&&He.isPresenting===!0){const Ve=R.xr.getDepthSensingMesh();Ve!==null&&Ah(Ve,X,-1/0,R.sortObjects)}Ah(E,X,0,R.sortObjects),w.finish(),R.sortObjects===!0&&w.sort(We,Je,X.reversedDepth),ve=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,ve&&nt.addToRenderList(w,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&Oe.beginShadows();const Z=M.state.shadowsArray;if(Ne.render(Z,E,X),ae===!0&&Oe.endShadows(),(Y&&T.hasRenderPass())===!1){const Ve=w.opaque,De=w.transmissive;if(M.setupLights(),X.isArrayCamera){const $e=X.cameras;if(De.length>0)for(let Ke=0,pt=$e.length;Ke<pt;Ke++){const _t=$e[Ke];wf(Ve,De,E,_t)}ve&&nt.render(E);for(let Ke=0,pt=$e.length;Ke<pt;Ke++){const _t=$e[Ke];Mf(w,E,_t,_t.viewport)}}else De.length>0&&wf(Ve,De,E,X),ve&&nt.render(E),Mf(w,E,X)}G!==null&&O===0&&(H.updateMultisampleRenderTarget(G),H.updateRenderTargetMipmap(G)),Y&&T.end(R),E.isScene===!0&&E.onAfterRender(R,E,X),Ie.resetDefaultState(),W=-1,se=null,x.pop(),x.length>0?(M=x[x.length-1],H.setTextureUnits(M.state.textureUnits),ae===!0&&Oe.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,A.pop(),A.length>0?w=A[A.length-1]:w=null,B!==null&&B.renderEnd()};function Ah(E,X,K,Y){if(E.visible===!1)return;if(E.layers.test(X.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(X);else if(E.isLightProbeGrid)M.pushLightProbeGrid(E);else if(E.isLight)M.pushLight(E),E.castShadow&&M.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||re.intersectsSprite(E)){Y&&Qe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Se);const Ve=j.update(E),De=E.material;De.visible&&w.push(E,Ve,De,K,Qe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||re.intersectsObject(E))){const Ve=j.update(E),De=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Qe.copy(E.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Qe.copy(Ve.boundingSphere.center)),Qe.applyMatrix4(E.matrixWorld).applyMatrix4(Se)),Array.isArray(De)){const $e=Ve.groups;for(let Ke=0,pt=$e.length;Ke<pt;Ke++){const _t=$e[Ke],je=De[_t.materialIndex];je&&je.visible&&w.push(E,Ve,je,K,Qe.z,_t)}}else De.visible&&w.push(E,Ve,De,K,Qe.z,null)}}const Le=E.children;for(let Ve=0,De=Le.length;Ve<De;Ve++)Ah(Le[Ve],X,K,Y)}function Mf(E,X,K,Y){const{opaque:Z,transmissive:Le,transparent:Ve}=E;M.setupLightsView(K),ae===!0&&Oe.setGlobalState(R.clippingPlanes,K),Y&&S.viewport(J.copy(Y)),Z.length>0&&Eo(Z,X,K),Le.length>0&&Eo(Le,X,K),Ve.length>0&&Eo(Ve,X,K),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function wf(E,X,K,Y){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Y.id]===void 0){const je=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Y.id]=new ei(1,1,{generateMipmaps:!0,type:je?Li:Hn,minFilter:Ri,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace})}const Le=M.state.transmissionRenderTarget[Y.id],Ve=Y.viewport||J;Le.setSize(Ve.z*R.transmissionResolutionScale,Ve.w*R.transmissionResolutionScale);const De=R.getRenderTarget(),$e=R.getActiveCubeFace(),Ke=R.getActiveMipmapLevel();R.setRenderTarget(Le),R.getClearColor(ct),at=R.getClearAlpha(),at<1&&R.setClearColor(16777215,.5),R.clear(),ve&&nt.render(K);const pt=R.toneMapping;R.toneMapping=xi;const _t=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),M.setupLightsView(Y),ae===!0&&Oe.setGlobalState(R.clippingPlanes,Y),Eo(E,K,Y),H.updateMultisampleRenderTarget(Le),H.updateRenderTargetMipmap(Le),gt.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Lt=0,Kt=X.length;Lt<Kt;Lt++){const Yt=X[Lt],{object:Ot,geometry:xn,material:Be,group:Yn}=Yt;if(Be.side===Ci&&Ot.layers.test(Y.layers)){const Et=Be.side;Be.side=Fn,Be.needsUpdate=!0,Tf(Ot,K,Y,xn,Be,Yn),Be.side=Et,Be.needsUpdate=!0,je=!0}}je===!0&&(H.updateMultisampleRenderTarget(Le),H.updateRenderTargetMipmap(Le))}R.setRenderTarget(De,$e,Ke),R.setClearColor(ct,at),_t!==void 0&&(Y.viewport=_t),R.toneMapping=pt}function Eo(E,X,K){const Y=X.isScene===!0?X.overrideMaterial:null;for(let Z=0,Le=E.length;Z<Le;Z++){const Ve=E[Z],{object:De,geometry:$e,group:Ke}=Ve;let pt=Ve.material;pt.allowOverride===!0&&Y!==null&&(pt=Y),De.layers.test(K.layers)&&Tf(De,X,K,$e,pt,Ke)}}function Tf(E,X,K,Y,Z,Le){E.onBeforeRender(R,X,K,Y,Z,Le),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Z.onBeforeRender(R,X,K,Y,E,Le),Z.transparent===!0&&Z.side===Ci&&Z.forceSinglePass===!1?(Z.side=Fn,Z.needsUpdate=!0,R.renderBufferDirect(K,X,Y,Z,E,Le),Z.side=ji,Z.needsUpdate=!0,R.renderBufferDirect(K,X,Y,Z,E,Le),Z.side=Ci):R.renderBufferDirect(K,X,Y,Z,E,Le),E.onAfterRender(R,X,K,Y,Z,Le)}function Ao(E,X,K){X.isScene!==!0&&(X=ye);const Y=N.get(E),Z=M.state.lights,Le=M.state.shadowsArray,Ve=Z.state.version,De=ge.getParameters(E,Z.state,Le,X,K,M.state.lightProbeGridArray),$e=ge.getProgramCacheKey(De);let Ke=Y.programs;Y.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?X.environment:null,Y.fog=X.fog;const pt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Y.envMap=ne.get(E.envMap||Y.environment,pt),Y.envMapRotation=Y.environment!==null&&E.envMap===null?X.environmentRotation:E.envMapRotation,Ke===void 0&&(E.addEventListener("dispose",ft),Ke=new Map,Y.programs=Ke);let _t=Ke.get($e);if(_t!==void 0){if(Y.currentProgram===_t&&Y.lightsStateVersion===Ve)return Af(E,De),_t}else De.uniforms=ge.getUniforms(E),B!==null&&E.isNodeMaterial&&B.build(E,K,De),E.onBeforeCompile(De,R),_t=ge.acquireProgram(De,$e),Ke.set($e,_t),Y.uniforms=De.uniforms;const je=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(je.clippingPlanes=Oe.uniform),Af(E,De),Y.needsLights=b_(E),Y.lightsStateVersion=Ve,Y.needsLights&&(je.ambientLightColor.value=Z.state.ambient,je.lightProbe.value=Z.state.probe,je.directionalLights.value=Z.state.directional,je.directionalLightShadows.value=Z.state.directionalShadow,je.spotLights.value=Z.state.spot,je.spotLightShadows.value=Z.state.spotShadow,je.rectAreaLights.value=Z.state.rectArea,je.ltc_1.value=Z.state.rectAreaLTC1,je.ltc_2.value=Z.state.rectAreaLTC2,je.pointLights.value=Z.state.point,je.pointLightShadows.value=Z.state.pointShadow,je.hemisphereLights.value=Z.state.hemi,je.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,je.spotLightMatrix.value=Z.state.spotLightMatrix,je.spotLightMap.value=Z.state.spotLightMap,je.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=M.state.lightProbeGridArray.length>0,Y.currentProgram=_t,Y.uniformsList=null,_t}function Ef(E){if(E.uniformsList===null){const X=E.currentProgram.getUniforms();E.uniformsList=El.seqWithValue(X.seq,E.uniforms)}return E.uniformsList}function Af(E,X){const K=N.get(E);K.outputColorSpace=X.outputColorSpace,K.batching=X.batching,K.batchingColor=X.batchingColor,K.instancing=X.instancing,K.instancingColor=X.instancingColor,K.instancingMorph=X.instancingMorph,K.skinning=X.skinning,K.morphTargets=X.morphTargets,K.morphNormals=X.morphNormals,K.morphColors=X.morphColors,K.morphTargetsCount=X.morphTargetsCount,K.numClippingPlanes=X.numClippingPlanes,K.numIntersection=X.numClipIntersection,K.vertexAlphas=X.vertexAlphas,K.vertexTangents=X.vertexTangents,K.toneMapping=X.toneMapping}function v_(E,X){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(X.matrixWorld);for(let K=0,Y=E.length;K<Y;K++){const Z=E[K];if(Z.texture!==null&&Z.boundingBox.containsPoint(y))return Z}return null}function y_(E,X,K,Y,Z){X.isScene!==!0&&(X=ye),H.resetTextureUnits();const Le=X.fog,Ve=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?X.environment:null,De=G===null?R.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:vt.workingColorSpace,$e=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Ke=ne.get(Y.envMap||Ve,$e),pt=Y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,_t=!!K.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),je=!!K.morphAttributes.position,Lt=!!K.morphAttributes.normal,Kt=!!K.morphAttributes.color;let Yt=xi;Y.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Yt=R.toneMapping);const Ot=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,xn=Ot!==void 0?Ot.length:0,Be=N.get(Y),Yn=M.state.lights;if(ae===!0&&(oe===!0||E!==se)){const Bt=E===se&&Y.id===W;Oe.setState(Y,E,Bt)}let Et=!1;Y.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Yn.state.version||Be.outputColorSpace!==De||Z.isBatchedMesh&&Be.batching===!1||!Z.isBatchedMesh&&Be.batching===!0||Z.isBatchedMesh&&Be.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Be.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Be.instancing===!1||!Z.isInstancedMesh&&Be.instancing===!0||Z.isSkinnedMesh&&Be.skinning===!1||!Z.isSkinnedMesh&&Be.skinning===!0||Z.isInstancedMesh&&Be.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Be.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Be.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Be.instancingMorph===!1&&Z.morphTexture!==null||Be.envMap!==Ke||Y.fog===!0&&Be.fog!==Le||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Oe.numPlanes||Be.numIntersection!==Oe.numIntersection)||Be.vertexAlphas!==pt||Be.vertexTangents!==_t||Be.morphTargets!==je||Be.morphNormals!==Lt||Be.morphColors!==Kt||Be.toneMapping!==Yt||Be.morphTargetsCount!==xn||!!Be.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Et=!0):(Et=!0,Be.__version=Y.version);let ti=Be.currentProgram;Et===!0&&(ti=Ao(Y,X,Z),B&&Y.isNodeMaterial&&B.onUpdateProgram(Y,ti,Be));let Ti=!1,is=!1,pr=!1;const Ft=ti.getUniforms(),jt=Be.uniforms;if(S.useProgram(ti.program)&&(Ti=!0,is=!0,pr=!0),Y.id!==W&&(W=Y.id,is=!0),Be.needsLights){const Bt=v_(M.state.lightProbeGridArray,Z);Be.lightProbeGrid!==Bt&&(Be.lightProbeGrid=Bt,is=!0)}if(Ti||se!==E){S.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Ft.setValue(z,"projectionMatrix",E.projectionMatrix),Ft.setValue(z,"viewMatrix",E.matrixWorldInverse);const rs=Ft.map.cameraPosition;rs!==void 0&&rs.setValue(z,be.setFromMatrixPosition(E.matrixWorld)),D.logarithmicDepthBuffer&&Ft.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ft.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),se!==E&&(se=E,is=!0,pr=!0)}if(Be.needsLights&&(Yn.state.directionalShadowMap.length>0&&Ft.setValue(z,"directionalShadowMap",Yn.state.directionalShadowMap,H),Yn.state.spotShadowMap.length>0&&Ft.setValue(z,"spotShadowMap",Yn.state.spotShadowMap,H),Yn.state.pointShadowMap.length>0&&Ft.setValue(z,"pointShadowMap",Yn.state.pointShadowMap,H)),Z.isSkinnedMesh){Ft.setOptional(z,Z,"bindMatrix"),Ft.setOptional(z,Z,"bindMatrixInverse");const Bt=Z.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Ft.setValue(z,"boneTexture",Bt.boneTexture,H))}Z.isBatchedMesh&&(Ft.setOptional(z,Z,"batchingTexture"),Ft.setValue(z,"batchingTexture",Z._matricesTexture,H),Ft.setOptional(z,Z,"batchingIdTexture"),Ft.setValue(z,"batchingIdTexture",Z._indirectTexture,H),Ft.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ft.setValue(z,"batchingColorTexture",Z._colorsTexture,H));const ss=K.morphAttributes;if((ss.position!==void 0||ss.normal!==void 0||ss.color!==void 0)&&V.update(Z,K,ti),(is||Be.receiveShadow!==Z.receiveShadow)&&(Be.receiveShadow=Z.receiveShadow,Ft.setValue(z,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&X.environment!==null&&(jt.envMapIntensity.value=X.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=TA()),is){if(Ft.setValue(z,"toneMappingExposure",R.toneMappingExposure),Be.needsLights&&x_(jt,pr),Le&&Y.fog===!0&&Ge.refreshFogUniforms(jt,Le),Ge.refreshMaterialUniforms(jt,Y,ue,_e,M.state.transmissionRenderTarget[E.id]),Be.needsLights&&Be.lightProbeGrid){const Bt=Be.lightProbeGrid;jt.probesSH.value=Bt.texture,jt.probesMin.value.copy(Bt.boundingBox.min),jt.probesMax.value.copy(Bt.boundingBox.max),jt.probesResolution.value.copy(Bt.resolution)}El.upload(z,Ef(Be),jt,H)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(El.upload(z,Ef(Be),jt,H),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ft.setValue(z,"center",Z.center),Ft.setValue(z,"modelViewMatrix",Z.modelViewMatrix),Ft.setValue(z,"normalMatrix",Z.normalMatrix),Ft.setValue(z,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){const Bt=Y.uniformsGroups;for(let rs=0,mr=Bt.length;rs<mr;rs++){const Cf=Bt[rs];le.update(Cf,ti),le.bind(Cf,ti)}}return ti}function x_(E,X){E.ambientLightColor.needsUpdate=X,E.lightProbe.needsUpdate=X,E.directionalLights.needsUpdate=X,E.directionalLightShadows.needsUpdate=X,E.pointLights.needsUpdate=X,E.pointLightShadows.needsUpdate=X,E.spotLights.needsUpdate=X,E.spotLightShadows.needsUpdate=X,E.rectAreaLights.needsUpdate=X,E.hemisphereLights.needsUpdate=X}function b_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(E,X,K){const Y=N.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),N.get(E.texture).__webglTexture=X,N.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:K,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,X){const K=N.get(E);K.__webglFramebuffer=X,K.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(E,X=0,K=0){G=E,U=X,O=K;let Y=null,Z=!1,Le=!1;if(E){const De=N.get(E);if(De.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(z.FRAMEBUFFER,De.__webglFramebuffer),J.copy(E.viewport),te.copy(E.scissor),Ce=E.scissorTest,S.viewport(J),S.scissor(te),S.setScissorTest(Ce),W=-1;return}else if(De.__webglFramebuffer===void 0)H.setupRenderTarget(E);else if(De.__hasExternalTextures)H.rebindTextures(E,N.get(E.texture).__webglTexture,N.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const pt=E.depthTexture;if(De.__boundDepthTexture!==pt){if(pt!==null&&N.has(pt)&&(E.width!==pt.image.width||E.height!==pt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(E)}}const $e=E.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Le=!0);const Ke=N.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ke[X])?Y=Ke[X][K]:Y=Ke[X],Z=!0):E.samples>0&&H.useMultisampledRTT(E)===!1?Y=N.get(E).__webglMultisampledFramebuffer:Array.isArray(Ke)?Y=Ke[K]:Y=Ke,J.copy(E.viewport),te.copy(E.scissor),Ce=E.scissorTest}else J.copy(he).multiplyScalar(ue).floor(),te.copy(Re).multiplyScalar(ue).floor(),Ce=ze;if(K!==0&&(Y=L),S.bindFramebuffer(z.FRAMEBUFFER,Y)&&S.drawBuffers(E,Y),S.viewport(J),S.scissor(te),S.setScissorTest(Ce),Z){const De=N.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,De.__webglTexture,K)}else if(Le){const De=X;for(let $e=0;$e<E.textures.length;$e++){const Ke=N.get(E.textures[$e]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+$e,Ke.__webglTexture,K,De)}}else if(E!==null&&K!==0){const De=N.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,De.__webglTexture,K)}W=-1},this.readRenderTargetPixels=function(E,X,K,Y,Z,Le,Ve,De=0){if(!(E&&E.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=N.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ve!==void 0&&($e=$e[Ve]),$e){S.bindFramebuffer(z.FRAMEBUFFER,$e);try{const Ke=E.textures[De],pt=Ke.format,_t=Ke.type;if(E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+De),!D.textureFormatReadable(pt)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(_t)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=E.width-Y&&K>=0&&K<=E.height-Z&&z.readPixels(X,K,Y,Z,we.convert(pt),we.convert(_t),Le)}finally{const Ke=G!==null?N.get(G).__webglFramebuffer:null;S.bindFramebuffer(z.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(E,X,K,Y,Z,Le,Ve,De=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=N.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ve!==void 0&&($e=$e[Ve]),$e)if(X>=0&&X<=E.width-Y&&K>=0&&K<=E.height-Z){S.bindFramebuffer(z.FRAMEBUFFER,$e);const Ke=E.textures[De],pt=Ke.format,_t=Ke.type;if(E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+De),!D.textureFormatReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,je),z.bufferData(z.PIXEL_PACK_BUFFER,Le.byteLength,z.STREAM_READ),z.readPixels(X,K,Y,Z,we.convert(pt),we.convert(_t),0);const Lt=G!==null?N.get(G).__webglFramebuffer:null;S.bindFramebuffer(z.FRAMEBUFFER,Lt);const Kt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Lx(z,Kt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,je),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Le),z.deleteBuffer(je),z.deleteSync(Kt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,X=null,K=0){const Y=Math.pow(2,-K),Z=Math.floor(E.image.width*Y),Le=Math.floor(E.image.height*Y),Ve=X!==null?X.x:0,De=X!==null?X.y:0;H.setTexture2D(E,0),z.copyTexSubImage2D(z.TEXTURE_2D,K,0,0,Ve,De,Z,Le),S.unbindTexture()},this.copyTextureToTexture=function(E,X,K=null,Y=null,Z=0,Le=0){let Ve,De,$e,Ke,pt,_t,je,Lt,Kt;const Yt=E.isCompressedTexture?E.mipmaps[Le]:E.image;if(K!==null)Ve=K.max.x-K.min.x,De=K.max.y-K.min.y,$e=K.isBox3?K.max.z-K.min.z:1,Ke=K.min.x,pt=K.min.y,_t=K.isBox3?K.min.z:0;else{const jt=Math.pow(2,-Z);Ve=Math.floor(Yt.width*jt),De=Math.floor(Yt.height*jt),E.isDataArrayTexture?$e=Yt.depth:E.isData3DTexture?$e=Math.floor(Yt.depth*jt):$e=1,Ke=0,pt=0,_t=0}Y!==null?(je=Y.x,Lt=Y.y,Kt=Y.z):(je=0,Lt=0,Kt=0);const Ot=we.convert(X.format),xn=we.convert(X.type);let Be;X.isData3DTexture?(H.setTexture3D(X,0),Be=z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(H.setTexture2DArray(X,0),Be=z.TEXTURE_2D_ARRAY):(H.setTexture2D(X,0),Be=z.TEXTURE_2D),S.activeTexture(z.TEXTURE0),S.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),S.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),S.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);const Yn=S.getParameter(z.UNPACK_ROW_LENGTH),Et=S.getParameter(z.UNPACK_IMAGE_HEIGHT),ti=S.getParameter(z.UNPACK_SKIP_PIXELS),Ti=S.getParameter(z.UNPACK_SKIP_ROWS),is=S.getParameter(z.UNPACK_SKIP_IMAGES);S.pixelStorei(z.UNPACK_ROW_LENGTH,Yt.width),S.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Yt.height),S.pixelStorei(z.UNPACK_SKIP_PIXELS,Ke),S.pixelStorei(z.UNPACK_SKIP_ROWS,pt),S.pixelStorei(z.UNPACK_SKIP_IMAGES,_t);const pr=E.isDataArrayTexture||E.isData3DTexture,Ft=X.isDataArrayTexture||X.isData3DTexture;if(E.isDepthTexture){const jt=N.get(E),ss=N.get(X),Bt=N.get(jt.__renderTarget),rs=N.get(ss.__renderTarget);S.bindFramebuffer(z.READ_FRAMEBUFFER,Bt.__webglFramebuffer),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,rs.__webglFramebuffer);for(let mr=0;mr<$e;mr++)pr&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,N.get(E).__webglTexture,Z,_t+mr),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,N.get(X).__webglTexture,Le,Kt+mr)),z.blitFramebuffer(Ke,pt,Ve,De,je,Lt,Ve,De,z.DEPTH_BUFFER_BIT,z.NEAREST);S.bindFramebuffer(z.READ_FRAMEBUFFER,null),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Z!==0||E.isRenderTargetTexture||N.has(E)){const jt=N.get(E),ss=N.get(X);S.bindFramebuffer(z.READ_FRAMEBUFFER,F),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,k);for(let Bt=0;Bt<$e;Bt++)pr?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,jt.__webglTexture,Z,_t+Bt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,jt.__webglTexture,Z),Ft?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ss.__webglTexture,Le,Kt+Bt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ss.__webglTexture,Le),Z!==0?z.blitFramebuffer(Ke,pt,Ve,De,je,Lt,Ve,De,z.COLOR_BUFFER_BIT,z.NEAREST):Ft?z.copyTexSubImage3D(Be,Le,je,Lt,Kt+Bt,Ke,pt,Ve,De):z.copyTexSubImage2D(Be,Le,je,Lt,Ke,pt,Ve,De);S.bindFramebuffer(z.READ_FRAMEBUFFER,null),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ft?E.isDataTexture||E.isData3DTexture?z.texSubImage3D(Be,Le,je,Lt,Kt,Ve,De,$e,Ot,xn,Yt.data):X.isCompressedArrayTexture?z.compressedTexSubImage3D(Be,Le,je,Lt,Kt,Ve,De,$e,Ot,Yt.data):z.texSubImage3D(Be,Le,je,Lt,Kt,Ve,De,$e,Ot,xn,Yt):E.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Le,je,Lt,Ve,De,Ot,xn,Yt.data):E.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Le,je,Lt,Yt.width,Yt.height,Ot,Yt.data):z.texSubImage2D(z.TEXTURE_2D,Le,je,Lt,Ve,De,Ot,xn,Yt);S.pixelStorei(z.UNPACK_ROW_LENGTH,Yn),S.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Et),S.pixelStorei(z.UNPACK_SKIP_PIXELS,ti),S.pixelStorei(z.UNPACK_SKIP_ROWS,Ti),S.pixelStorei(z.UNPACK_SKIP_IMAGES,is),Le===0&&X.generateMipmaps&&z.generateMipmap(Be),S.unbindTexture()},this.initRenderTarget=function(E){N.get(E).__webglFramebuffer===void 0&&H.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?H.setTextureCube(E,0):E.isData3DTexture?H.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?H.setTexture2DArray(E,0):H.setTexture2D(E,0),S.unbindTexture()},this.resetState=function(){U=0,O=0,G=null,S.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}const EA=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:xd,AddEquation:ms,AddOperation:Tg,AdditiveAnimationBlendMode:Id,AdditiveBlending:Du,AgXToneMapping:Fc,AlphaFormat:Cd,AlwaysCompare:Fg,AlwaysDepth:Fl,AlwaysStencilFunc:Fu,AmbientLight:I0,AnimationAction:z0,AnimationClip:so,AnimationLoader:TS,AnimationMixer:tM,AnimationObjectGroup:QS,AnimationUtils:bS,ArcCurve:t0,ArrayCamera:O0,ArrowHelper:TM,AttachedBindMode:Nu,Audio:k0,AudioAnalyser:HS,AudioContext:sf,AudioListener:zS,AudioLoader:OS,AxesHelper:EM,BackSide:Fn,BasicDepthPacking:Ig,BasicShadowMap:zy,BatchedMesh:Zg,BezierInterpolant:w0,Bone:Fd,BooleanKeyframeTrack:hr,Box2:V0,Box3:En,Box3Helper:MM,BoxGeometry:As,BoxHelper:SM,BufferAttribute:Nt,BufferGeometry:lt,BufferGeometryLoader:U0,ByteType:wd,Cache:Ii,Camera:vh,CameraHelper:bM,CanvasTexture:zb,CapsuleGeometry:ih,CatmullRomCurve3:n0,CineonToneMapping:yd,CircleGeometry:sh,ClampToEdgeWrapping:Xn,Clock:lM,Color:Fe,ColorKeyframeTrack:Jd,ColorManagement:vt,Compatibility:Cx,CompressedArrayTexture:kb,CompressedCubeTexture:Bb,CompressedTexture:nh,CompressedTextureLoader:ES,ConeGeometry:bo,ConstantAlphaFactor:Sg,ConstantColorFactor:xg,Controls:H0,CubeCamera:N0,CubeDepthTexture:Qg,CubeReflectionMapping:Di,CubeRefractionMapping:bs,CubeTexture:yo,CubeTextureLoader:AS,CubeUVReflectionMapping:sa,CubicBezierCurve:Vd,CubicBezierCurve3:i0,CubicInterpolant:S0,CullFaceBack:Pu,CullFaceFront:rg,CullFaceFrontBack:By,CullFaceNone:sg,Curve:wi,CurvePath:r0,CustomBlending:ag,CustomToneMapping:bd,CylinderGeometry:xo,Cylindrical:cM,Data3DTexture:Zc,DataArrayTexture:Yc,DataTexture:oi,DataTextureLoader:CS,DataUtils:hb,DecrementStencilOp:rx,DecrementWrapStencilOp:ox,DefaultLoadingManager:dr,DepthFormat:Ui,DepthStencilFormat:gs,DepthTexture:ar,DetachedBindMode:Eg,DirectionalLight:R0,DirectionalLightHelper:xM,DiscreteInterpolant:M0,DodecahedronGeometry:rh,DoubleSide:Ci,DstAlphaFactor:mg,DstColorFactor:_g,DynamicCopyUsage:Sx,DynamicDrawUsage:gx,DynamicReadUsage:yx,EdgesGeometry:e0,EllipseCurve:ah,EqualCompare:Ug,EqualDepth:Bl,EqualStencilFunc:ux,EquirectangularReflectionMapping:Ia,EquirectangularRefractionMapping:Pa,Euler:bi,EventDispatcher:Mi,ExternalTexture:Bd,ExtrudeGeometry:oh,FileLoader:Qi,Float16BufferAttribute:_b,Float32BufferAttribute:ke,FloatType:Nn,Fog:Jc,FogExp2:jc,FramebufferTexture:Fb,FrontSide:ji,Frustum:rr,FrustumArray:th,GLBufferAttribute:aM,GLSL1:wx,GLSL3:ku,GreaterCompare:Ng,GreaterDepth:Vl,GreaterEqualCompare:$c,GreaterEqualDepth:zl,GreaterEqualStencilFunc:mx,GreaterStencilFunc:fx,GridHelper:vM,Group:Gr,HTMLTexture:Vb,HalfFloatType:Li,HemisphereLight:E0,HemisphereLightHelper:_M,IcosahedronGeometry:lh,ImageBitmapLoader:NS,ImageLoader:ro,ImageUtils:Gg,IncrementStencilOp:sx,IncrementWrapStencilOp:ax,InstancedBufferAttribute:Qr,InstancedBufferGeometry:L0,InstancedInterleavedBuffer:rM,InstancedMesh:Yg,Int16BufferAttribute:mb,Int32BufferAttribute:gb,Int8BufferAttribute:db,IntType:Bc,InterleavedBuffer:Qc,InterleavedBufferAttribute:sr,Interpolant:aa,InterpolateBezier:Ou,InterpolateDiscrete:$a,InterpolateLinear:yc,InterpolateSmooth:wl,InterpolationSamplingMode:Ax,InterpolationSamplingType:Ex,InvertStencilOp:lx,KeepStencilOp:Xs,KeyframeTrack:fi,LOD:qg,LatheGeometry:ch,Layers:Kc,LessCompare:Lg,LessDepth:kl,LessEqualCompare:qc,LessEqualDepth:nr,LessEqualStencilFunc:dx,LessStencilFunc:hx,Light:Rs,LightProbe:D0,Line:ws,Line3:dM,LineBasicMaterial:kn,LineCurve:Gd,LineCurve3:s0,LineDashedMaterial:y0,LineLoop:Kg,LineSegments:Oi,LinearFilter:Gt,LinearInterpolant:jd,LinearMipMapLinearFilter:Xy,LinearMipMapNearestFilter:Wy,LinearMipmapLinearFilter:Ri,LinearMipmapNearestFilter:Da,LinearSRGBColorSpace:Za,LinearToneMapping:_d,LinearTransfer:Ka,Loader:qn,LoaderUtils:Hu,LoadingManager:ef,LoopOnce:Ag,LoopPingPong:Rg,LoopRepeat:Cg,MOUSE:Js,Material:yn,MaterialBlending:Vy,MaterialLoader:yh,MathUtils:Vg,Matrix2:qu,Matrix3:ot,Matrix4:et,MaxEquation:hg,Mesh:nn,MeshBasicMaterial:ns,MeshDepthMaterial:Zd,MeshDistanceMaterial:Kd,MeshLambertMaterial:_0,MeshMatcapMaterial:v0,MeshNormalMaterial:g0,MeshPhongMaterial:p0,MeshPhysicalMaterial:f0,MeshStandardMaterial:Yd,MeshToonMaterial:m0,MinEquation:cg,MirroredRepeatWrapping:Wa,MixOperation:wg,MultiplyBlending:Uu,MultiplyOperation:_o,NearestFilter:tn,NearestMipMapLinearFilter:Hy,NearestMipMapNearestFilter:Gy,NearestMipmapLinearFilter:zr,NearestMipmapNearestFilter:Md,NeutralToneMapping:Sd,NeverCompare:Dg,NeverDepth:Ol,NeverStencilFunc:cx,NoBlending:Pi,NoColorSpace:qi,NoNormalPacking:Qy,NoToneMapping:xi,NormalAnimationBlendMode:Xc,NormalBlending:Qs,NormalGAPacking:tx,NormalRGPacking:ex,NotEqualCompare:Og,NotEqualDepth:Gl,NotEqualStencilFunc:px,NumberKeyframeTrack:gh,Object3D:wt,ObjectLoader:LS,ObjectSpaceNormalMap:Pg,OctahedronGeometry:Mo,OneFactor:dg,OneMinusConstantAlphaFactor:Mg,OneMinusConstantColorFactor:bg,OneMinusDstAlphaFactor:gg,OneMinusDstColorFactor:vg,OneMinusSrcAlphaFactor:Nl,OneMinusSrcColorFactor:pg,OrthographicCamera:oa,PCFShadowMap:Ra,PCFSoftShadowMap:Ll,PMREMGenerator:Yu,Path:eo,PerspectiveCamera:pn,Plane:Xi,PlaneGeometry:ra,PlaneHelper:wM,PointLight:C0,PointLightHelper:mM,Points:jg,PointsMaterial:kd,PolarGridHelper:yM,PolyhedronGeometry:Cs,PositionalAudio:GS,PropertyBinding:At,PropertyMixer:B0,QuadraticBezierCurve:Hd,QuadraticBezierCurve3:Wd,Quaternion:_n,QuaternionKeyframeTrack:_h,QuaternionLinearInterpolant:T0,R11_EAC_Format:Kl,RED_GREEN_RGTC2_Format:qa,RED_RGTC1_Format:gc,REVISION:Oc,RG11_EAC_Format:Xa,RGBADepthPacking:Ky,RGBAFormat:On,RGBAIntegerFormat:Wc,RGBA_ASTC_10x10_Format:hc,RGBA_ASTC_10x5_Format:oc,RGBA_ASTC_10x6_Format:lc,RGBA_ASTC_10x8_Format:cc,RGBA_ASTC_12x10_Format:uc,RGBA_ASTC_12x12_Format:dc,RGBA_ASTC_4x4_Format:Ql,RGBA_ASTC_5x4_Format:ec,RGBA_ASTC_5x5_Format:tc,RGBA_ASTC_6x5_Format:nc,RGBA_ASTC_6x6_Format:ic,RGBA_ASTC_8x5_Format:sc,RGBA_ASTC_8x6_Format:rc,RGBA_ASTC_8x8_Format:ac,RGBA_BPTC_Format:fc,RGBA_ETC2_EAC_Format:Zl,RGBA_PVRTC_2BPPV1_Format:ql,RGBA_PVRTC_4BPPV1_Format:Xl,RGBA_S3TC_DXT1_Format:Ua,RGBA_S3TC_DXT3_Format:Na,RGBA_S3TC_DXT5_Format:Oa,RGBDepthPacking:jy,RGBFormat:Rd,RGBIntegerFormat:qy,RGB_BPTC_SIGNED_Format:pc,RGB_BPTC_UNSIGNED_Format:mc,RGB_ETC1_Format:$l,RGB_ETC2_Format:Yl,RGB_PVRTC_2BPPV1_Format:Wl,RGB_PVRTC_4BPPV1_Format:Hl,RGB_S3TC_DXT1_Format:La,RGDepthPacking:Jy,RGFormat:Ss,RGIntegerFormat:Hc,RawShaderMaterial:$d,Ray:cr,Raycaster:oM,RectAreaLight:P0,RedFormat:Gc,RedIntegerFormat:vo,ReinhardToneMapping:vd,RenderTarget:Dd,RenderTarget3D:nM,RepeatWrapping:Ha,ReplaceStencilOp:ix,ReverseSubtractEquation:lg,RingGeometry:hh,SIGNED_R11_EAC_Format:jl,SIGNED_RED_GREEN_RGTC2_Format:vc,SIGNED_RED_RGTC1_Format:_c,SIGNED_RG11_EAC_Format:Jl,SRGBColorSpace:Dn,SRGBTransfer:Pt,Scene:Ld,ShaderChunk:tt,ShaderLib:ri,ShaderMaterial:ui,ShadowMaterial:u0,Shape:So,ShapeGeometry:uh,ShapePath:AM,ShapeUtils:vi,ShortType:Td,Skeleton:eh,SkeletonHelper:pM,SkinnedMesh:$g,Source:_s,Sphere:vn,SphereGeometry:wo,Spherical:Xu,SphericalHarmonics3:nf,SplineCurve:Xd,SpotLight:A0,SpotLightHelper:fM,Sprite:Xg,SpriteMaterial:Od,SrcAlphaFactor:Ul,SrcAlphaSaturateFactor:yg,SrcColorFactor:fg,StaticCopyUsage:bx,StaticDrawUsage:ja,StaticReadUsage:vx,StereoCamera:FS,StreamCopyUsage:Mx,StreamDrawUsage:_x,StreamReadUsage:xx,StringKeyframeTrack:ur,SubtractEquation:og,SubtractiveBlending:Lu,TOUCH:$s,TangentSpaceNormalMap:Ji,TetrahedronGeometry:dh,Texture:$t,TextureLoader:RS,TextureUtils:DM,Timer:F0,TimestampQuery:Tx,TorusGeometry:fh,TorusKnotGeometry:ph,Triangle:Wn,TriangleFanDrawMode:Zy,TriangleStripDrawMode:Yy,TrianglesDrawMode:$y,TubeGeometry:mh,UVMapping:kc,Uint16BufferAttribute:Ud,Uint32BufferAttribute:Nd,Uint8BufferAttribute:fb,Uint8ClampedBufferAttribute:pb,Uniform:of,UniformsGroup:sM,UniformsLib:Te,UniformsUtils:qd,UnsignedByteType:Hn,UnsignedInt101111Type:Ad,UnsignedInt248Type:jr,UnsignedInt5999Type:Ed,UnsignedIntType:hi,UnsignedShort4444Type:zc,UnsignedShort5551Type:Vc,UnsignedShortType:Kr,VSMShadowMap:Br,Vector2:ie,Vector3:P,Vector4:Dt,VectorKeyframeTrack:Qd,VideoFrameTexture:Ob,VideoTexture:Jg,WebGL3DRenderTarget:tb,WebGLArrayRenderTarget:eb,WebGLCoordinateSystem:jn,WebGLCubeRenderTarget:lf,WebGLRenderTarget:ei,WebGLRenderer:J0,WebGLUtils:K0,WebGPUCoordinateSystem:ir,WebXRController:Tl,WireframeGeometry:h0,WrapAroundEnding:Ya,ZeroCurvatureEnding:Ys,ZeroFactor:ug,ZeroSlopeEnding:Zs,ZeroStencilOp:nx,createCanvasElement:Bg,error:Ye,getConsoleFunction:Dx,log:Qa,setConsoleFunction:Px,warn:Me,warnOnce:ys},Symbol.toStringTag,{value:"Module"})),Is=i=>{const e=kr(i),t={set:n=>{t.current=n,e.set(n)},subscribe:e.subscribe,update:n=>{const s=n(t.current);t.current=s,e.set(s)},current:i};return t},js=(i,e)=>({subscribe:ad(i,e).subscribe,set:e,update:n=>e(n(Ae(i))),get current(){return Ae(i)}}),cf=i=>{const{subscribe:e}=ad(i);return{subscribe:e,get current(){return Ae(i)}}},AA=i=>{const e=i.getBoundingClientRect();let t=yi({width:e.width,height:e.height}),n=0,s=0,r=0,a=0,o=!0,l=!1,c;const u=()=>{l=!0,c!==void 0&&clearTimeout(c),c=setTimeout(()=>{l=!1,c=void 0},250)},d=()=>{u()},h=new ResizeObserver(()=>{o=!0,u();const p=i.getBoundingClientRect();me(t,{width:p.width,height:p.height})});function f(){if(!o&&!l)return!1;const{clientWidth:p,clientHeight:_}=i;if(!o&&p===s&&_===n)return!1;s=p,n=_,o=!1;const g=i.getBoundingClientRect();return me(t,{width:g.width,height:g.height}),C(t).width===r&&C(t).height===a?!1:(r=C(t).width,a=C(t).height,!0)}return xs(()=>(h.observe(i),window.addEventListener("resize",d,{passive:!0}),()=>{h.disconnect(),window.removeEventListener("resize",d),c!==void 0&&clearTimeout(c)})),{size:{get current(){return C(t)}},shouldUpdateSize:f}},CA=i=>{const e=typeof i=="function"?i():i,{dom:t,canvas:n}=e,{size:s,shouldUpdateSize:r}=AA(t),a={dom:t,canvas:n,size:cf(()=>s.current),shouldUpdateSize:r};return Si("threlte-dom-context",a),a},Sh=()=>{const i=di("threlte-dom-context");if(!i)throw new Error("useDOM can only be used in a child component to <Canvas>.");return i};class fs{allVertices=new Map;isolatedVertices=new Map;connectedVertices=new Map;sortedConnectedValues=[];needsSort=!1;listeners=new Map;emit(e,t){const n=this.listeners.get(e);if(n)for(const s of n)s(t)}on(e,t){let n=this.listeners.get(e);n||(n=new Set,this.listeners.set(e,n)),n.add(t)}off(e,t){this.listeners.get(e)?.delete(t)}get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices.get(e);t&&(this.isolatedVertices.set(e,t),this.connectedVertices.delete(e))}moveToConnected(e){const t=this.isolatedVertices.get(e);t&&(this.connectedVertices.set(e,t),this.isolatedVertices.delete(e))}getKey=e=>typeof e=="object"?e.key:e;add(e,t,n){let s=this.allVertices.get(e);if(s&&s.value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);s?s.value===void 0&&(s.value=t):(s={value:t,previous:new Set,next:new Set},this.allVertices.set(e,s));const r=s.next.size>0||s.previous.size>0;if(!n?.after&&!n?.before&&!r){this.isolatedVertices.set(e,s),this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices.set(e,s);if(n?.after){const a=Array.isArray(n.after)?n.after:[n.after];for(const o of a)s.previous.add(this.getKey(o));for(const o of a){const l=this.getKey(o),c=this.allVertices.get(l);if(c)c.next.add(e),this.moveToConnected(l);else{const u={value:void 0,previous:new Set,next:new Set([e])};this.allVertices.set(l,u),this.connectedVertices.set(l,u)}}}if(n?.before){const a=Array.isArray(n.before)?n.before:[n.before];for(const o of a)s.next.add(this.getKey(o));for(const o of a){const l=this.getKey(o),c=this.allVertices.get(l);if(c)c.previous.add(e),this.moveToConnected(l);else{const u={value:void 0,previous:new Set([e]),next:new Set};this.allVertices.set(l,u),this.connectedVertices.set(l,u)}}}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices.get(t)){this.isolatedVertices.delete(t),this.allVertices.delete(t),this.emit("node:removed",{key:t,type:"isolated"});return}const s=this.connectedVertices.get(t);if(!(!s||s.value===void 0)){for(const r of s.next){const a=this.connectedVertices.get(r);a&&(a.previous.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}for(const r of s.previous){const a=this.connectedVertices.get(r);a&&(a.next.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}this.connectedVertices.delete(t),this.allVertices.delete(t),this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0}}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((n,s)=>{t.push(e(n,s))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);for(const n of this.isolatedVertices.values())n.value!==void 0&&e(n.value,t++)}getValueByKey(e){return this.allVertices.get(e)?.value}sort(){const e=new Map,t=[],n=[];for(const[r,a]of this.connectedVertices)a.value!==void 0&&e.set(r,0);for(const[r]of e){const a=this.connectedVertices.get(r);for(const o of a.next)e.has(o)&&e.set(o,e.get(o)+1)}for(const[r,a]of e)a===0&&t.push(r);let s=0;for(;s<t.length;){const r=t[s++];n.push(r);const a=this.connectedVertices.get(r)?.next;if(a)for(const o of a){const l=(e.get(o)||0)-1;e.set(o,l),l===0&&t.push(o)}}if(n.length!==e.size)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");this.sortedConnectedValues.length=0;for(let r=0;r<n.length;r++){const a=this.connectedVertices.get(n[r]).value;a!==void 0&&this.sortedConnectedValues.push(a)}this.needsSort=!1}clear(){this.allVertices.clear(),this.isolatedVertices.clear(),this.connectedVertices.clear(),this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class RA{key;stage;callback;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}constructor(e,t,n){this.stage=e,this.key=t,this.callback=n}run(e){this.runTask&&this.callback(e)}}class IA extends fs{key;scheduler;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}get tasks(){return this.sortedVertices}callback=(e,t)=>t();constructor(e,t,n){super(),this.scheduler=e,this.key=t,this.start=this.start.bind(this),this.stop=this.stop.bind(this),n&&(this.callback=n.bind(this))}createTask(e,t,n){const s=new RA(this,e,t);return this.add(e,s,n),s}getTask(e){return this.getValueByKey(e)}removeTask=this.remove.bind(this);run(e){this.runTask&&this.callback(e,t=>{this.forEachNode(n=>{n.run(t??e)})})}runWithTiming(e){if(!this.runTask)return{};const t={};return this.callback(e,n=>{this.forEachNode(s=>{const r=performance.now();s.run(n??e);const a=performance.now()-r;t[s.key]=a})}),t}getSchedule(){return this.mapNodes(e=>e.key.toString())}}class PA extends fs{lastTime=0;clampDeltaTo=.1;get stages(){return this.sortedVertices}constructor(e){super(),e?.clampDeltaTo&&(this.clampDeltaTo=e.clampDeltaTo),this.run=this.run.bind(this)}createStage(e,t){const n=new IA(this,e,t?.callback);return this.add(e,n,{after:t?.after,before:t?.before}),n}getStage(e){return this.getValueByKey(e)}removeStage=this.remove.bind(this);run(e){const t=e-this.lastTime;this.forEachNode(n=>{n.run(Math.min(t/1e3,this.clampDeltaTo))}),this.lastTime=e}runWithTiming(e){const t=e-this.lastTime,n={},s=performance.now();return this.forEachNode(r=>{const a=performance.now(),o=r.runWithTiming(Math.min(t/1e3,this.clampDeltaTo)),l=performance.now()-a;n[r.key.toString()]={duration:l,tasks:o}}),this.lastTime=e,{total:performance.now()-s,stages:n}}getSchedule(e={tasks:!0}){return{stages:this.mapNodes(t=>{if(t===void 0)throw new Error("Stage not found");return{key:t.key.toString(),tasks:e.tasks?t.getSchedule():void 0}})}}dispose(){this.clear()}}const DA=i=>{const e=new PA,t=e.createStage(Symbol("threlte-main-stage")),n=Qt(i),s=Qt(()=>C(n).autoRender),r=Qt(()=>C(n).renderMode);let a=Qt(()=>C(s)??!0),o=Qt(()=>C(r)??"on-demand");const l=new Set;let c=!0;const u=()=>C(o)==="always"||C(o)==="on-demand"&&(c||l.size>0)||C(o)==="manual"&&c,d={scheduler:e,autoInvalidations:l,frameInvalidated:{get current(){return c},set current(h){c=h}},advance:()=>{c=!0},autoRender:js(()=>C(a),h=>me(a,h)),renderMode:js(()=>C(o),h=>me(o,h)),invalidate(){c=!0},mainStage:t,shouldRender:u,renderStage:e.createStage(Symbol("threlte-render-stage"),{after:t,callback(h,f){d.shouldRender()&&f()}}),resetFrameInvalidation(){c=!1}};return xs(()=>()=>{e.dispose()}),Si("threlte-scheduler-context",d),d},fr=()=>{const i=di("threlte-scheduler-context");if(!i)throw new Error("useScheduler can only be used in a child component to <Canvas>.");return i};var LA=["forEach","isDisjointFrom","isSubsetOf","isSupersetOf"],UA=["difference","intersection","symmetricDifference","union"],Cm=!1;class Mc extends Set{#t=new Map;#e=yi(0);#n=yi(0);#r=Cl||-1;constructor(e){if(super(),e){for(var t of e)super.add(t);this.#n.v=super.size}Cm||this.#s()}#i(e){return Cl===this.#r?yi(e):nd(e)}#s(){Cm=!0;var e=Mc.prototype,t=Set.prototype;for(const n of LA)e[n]=function(...s){return C(this.#e),t[n].apply(this,s)};for(const n of UA)e[n]=function(...s){C(this.#e);var r=t[n].apply(this,s);return new Mc(r)}}has(e){var t=super.has(e),n=this.#t,s=n.get(e);if(s===void 0){if(!t)return C(this.#e),!1;s=this.#i(!0),n.set(e,s)}return C(s),t}add(e){return super.has(e)||(super.add(e),me(this.#n,super.size),ps(this.#e)),this}delete(e){var t=super.delete(e),n=this.#t,s=n.get(e);return s!==void 0&&(n.delete(e),me(s,!1)),t&&(me(this.#n,super.size),ps(this.#e)),t}clear(){if(super.size!==0){super.clear();var e=this.#t;for(var t of e.values())me(t,!1);e.clear(),me(this.#n,0),ps(this.#e)}}keys(){return this.values()}values(){return C(this.#e),super.values()}entries(){return C(this.#e),super.entries()}[Symbol.iterator](){return this.keys()}get size(){return C(this.#n)}}class NA extends Map{#t=new Map;#e=yi(0);#n=yi(0);#r=Cl||-1;constructor(e){if(super(),e){for(var[t,n]of e)super.set(t,n);this.#n.v=super.size}}#i(e){return Cl===this.#r?yi(e):nd(e)}has(e){var t=this.#t,n=t.get(e);if(n===void 0)if(super.has(e))n=this.#i(0),t.set(e,n);else return C(this.#e),!1;return C(n),!0}forEach(e,t){this.#s(),super.forEach(e,t)}get(e){var t=this.#t,n=t.get(e);if(n===void 0)if(super.has(e))n=this.#i(0),t.set(e,n);else{C(this.#e);return}return C(n),super.get(e)}set(e,t){var n=this.#t,s=n.get(e),r=super.get(e),a=super.set(e,t),o=this.#e;if(s===void 0)s=this.#i(0),n.set(e,s),me(this.#n,super.size),ps(o);else if(r!==t){ps(s);var l=o.reactions===null?null:new Set(o.reactions),c=l===null||!s.reactions?.every(u=>l.has(u));c&&ps(o)}return a}delete(e){var t=this.#t,n=t.get(e),s=super.delete(e);return n!==void 0&&(t.delete(e),me(n,-1)),s&&(me(this.#n,super.size),ps(this.#e)),s}clear(){if(super.size!==0){super.clear();var e=this.#t;me(this.#n,0);for(var t of e.values())me(t,-1);ps(this.#e),e.clear()}}#s(){C(this.#e);var e=this.#t;if(this.#n.v!==e.size){for(var t of super.keys())if(!e.has(t)){var n=this.#i(0);e.set(t,n)}}for([,n]of this.#t)C(n)}keys(){return C(this.#e),super.keys()}values(){return this.#s(),super.values()}entries(){return this.#s(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return C(this.#n),super.size}}const OA=()=>{const{size:i}=Sh(),e=Cc(i),{invalidate:t}=fr(),n=new Mc,s=new WeakMap,r=new pn(75,1,.1,1e3);r.position.z=5,r.lookAt(0,0,0);let a=yi(!1),o=yi(r);mn(()=>{if(C(o)!==r||C(a))return;const{width:c,height:u}=e.current;r.aspect=c/u,r.updateProjectionMatrix(),r.updateMatrixWorld(),t()}),mn(()=>{if(C(o)===void 0||n.size===0){let c=!1;C(o)!==r&&(me(o,r),c=!0),C(a)&&(me(a,!1),c=!0),c&&t()}});const l={makeDefaultCameras:n,makeDefaultCameraManual:s,camera:js(()=>C(o),c=>me(o,c)),manual:{get current(){return C(a)},set(c){me(a,c,!0)}}};return Si("threlte-camera-context",l),l},hf=()=>{const i=di("threlte-camera-context");if(!i)throw new Error("useCamera can only be used in a child component to <Canvas>.");return i},FA=()=>{const i=new Map,e={disposableObjects:i,removeObjectFromDisposal:t=>{i.delete(t)},disposableObjectMounted:t=>{const n=i.get(t);n?i.set(t,n+1):i.set(t,1)},disposableObjectUnmounted:t=>{const n=i.get(t);n&&n>0&&(i.set(t,n-1),n-1<=0&&(i.delete(t),t.dispose()))}};return xs(()=>()=>{for(const[t]of i)t.dispose();i.clear()}),Si("threlte-disposal-context",e),e},kA=()=>{const i=di("threlte-disposal-context");if(!i)throw new Error("useDisposal can only be used in a child component to <Canvas>.");return i},Q0=Symbol("threlte-parent-context"),e_=i=>{const e={get current(){return i()}};return Si(Q0,e),e},t_=()=>di(Q0),BA=()=>{const i=t_();return cf(()=>i.current)},ju=Symbol("threlte-parent-object3d-context"),n_=i=>{const e=di(ju),t={get current(){return i()??e.current}};return Si(ju,t),t},zA=()=>di(ju),VA=i=>{const e={scene:new Ld};return Si("threlte-scene-context",e),e},i_=()=>{const i=di("threlte-scene-context");if(!i)throw new Error("useScene can only be used in a child component to <Canvas>.");return i},GA=new class{#t=nd(window.devicePixelRatio);#e(){const e=M_(window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),"change",()=>{me(this.#t,window.devicePixelRatio),e(),this.#e()})}constructor(){this.#e()}get current(){return C(this.#t),window.devicePixelRatio}},_i=(i,e)=>i?.[`is${e}`]===!0,HA=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom","filmGauge","filmOffset"]),s_=(i,e,t)=>{_i(i,"PerspectiveCamera")?i.aspect=e/t:_i(i,"OrthographicCamera")&&(i.left=e/-2,i.right=e/2,i.top=t/2,i.bottom=t/-2),i.updateProjectionMatrix(),i.updateMatrixWorld()},WA=(i,e,t,n)=>{const{camera:s,manual:r,makeDefaultCameras:a,makeDefaultCameraManual:o}=hf(),{invalidate:l}=fr(),{size:c}=Sh(),u=Cc(c);mn(()=>{if(!t())return;const d=i(),h=e();return a.add(d),o.set(d,h),s.set(d),r.set(h),l(),()=>{a.delete(d),o.delete(d);const f=a.values().next().value;s.current===d&&(f?(s.set(f),r.set(o.get(f)??!1)):r.set(!1),l())}}),mn(()=>{if(e())return;const d=i();for(const h in n())if(HA.has(h)){d.updateProjectionMatrix(),l();break}}),mn(()=>{e()||s_(i(),u.current.width,u.current.height)})},XA=i=>{const{camera:e,manual:t}=hf(),{scene:n}=i_(),{invalidate:s,mainStage:r,renderStage:a,autoRender:o,scheduler:l,frameInvalidated:c}=fr(),{canvas:u,size:d,shouldUpdateSize:h}=Sh(),f=Qt(i),p=Ae(()=>C(f).createRenderer?C(f).createRenderer(u):new J0({canvas:u,powerPreference:"high-performance",antialias:!0,alpha:!0}));l.createStage(Symbol("threlte-resize-stage"),{before:r}).createTask(Symbol("threlte-resize-task"),()=>{p.xr.isPresenting||h()&&(p.setSize(d.current.width,d.current.height),t.current||s_(e.current,d.current.width,d.current.height),s())});const g=a.createTask(Symbol("threlte-auto-render-task"),()=>{p.render(n,e.current)}),m=Qt(()=>C(f).colorSpace),v=Qt(()=>C(f).dpr),b=Qt(()=>C(f).shadows),y=Qt(()=>C(f).toneMapping);let w=Qt(()=>C(m)??Dn),M=Qt(()=>{const I=GA.current??window.devicePixelRatio;return Array.isArray(C(v))?Math.min(Math.max(C(v)[0],I),C(v)[1]):C(v)??I}),A=Qt(()=>C(b)??Ll),x=Qt(()=>C(y)??Fc);const T={renderer:p,colorManagementEnabled:cf(()=>C(f).colorManagementEnabled??!0),colorSpace:js(()=>C(w),I=>me(w,I)),dpr:js(()=>C(M),I=>me(M,I)),shadows:js(()=>C(A),I=>me(A,I)),toneMapping:js(()=>C(x),I=>me(x,I)),autoRenderTask:g};Si("threlte-renderer-context",T);const R=Cc(o);return vt.enabled=C(f).colorManagementEnabled??!0,mn(()=>{p.outputColorSpace=C(w),s()}),mn(()=>{p.setPixelRatio(C(M)),s()}),mn(()=>{p.shadowMap.enabled=C(A)!==!1,C(A)!==!1&&C(A)!==!0?p.shadowMap.type=C(A):C(A)===!0&&(p.shadowMap.type=Ll),s()}),mn(()=>{p.toneMapping=C(x),s()}),mn(()=>(R.current?T.autoRenderTask.start():T.autoRenderTask.stop(),s(),()=>{T.autoRenderTask.stop()})),p.setAnimationLoop(I=>{l.run(I),c.current=!1}),xs(()=>()=>{p.setAnimationLoop(null);try{p.dispose()}catch{}}),T},qA=()=>{const i=di("threlte-renderer-context");if(!i)throw new Error("useRenderer can only be used in a child component to <Canvas>.");return i},$A=()=>{const i=Is({});return Si("threlte-user-context",i),i},YA=()=>{const i=di("threlte-user-context");if(!i)throw new Error("useUserContext can only be used in a child component to <Canvas>.");return i},ZA=i=>{const{scene:e}=VA(),t=typeof i=="function"?i:()=>i;return{scene:e,...CA(t),...ky(),...e_(()=>e),...n_(()=>e),...FA(),...DA(t),...OA(),...XA(t),...$A()}};var KA=new Set(["$$slots","$$events","$$legacy","children"]);function jA(i,e){An(e,!0);let t=co(e,KA);ZA(()=>t);var n=Xr(),s=on(n);Ac(s,()=>e.children),ht(i,n),Cn()}var JA=new Set(["$$slots","$$events","$$legacy","children"]),QA=It('<div class="svelte-clyidt"><canvas class="svelte-clyidt"><!></canvas></div>');function eC(i,e){let t=co(e,JA),n=yi(void 0),s=yi(void 0);var r=QA(),a=en(r),o=en(a);{var l=c=>{jA(c,sd({get dom(){return C(s)},get canvas(){return C(n)}},()=>t,{children:(u,d)=>{var h=Xr(),f=on(h);Ac(f,()=>e.children??id),ht(u,h)},$$slots:{default:!0}}))};Ln(o,c=>{C(n)&&C(s)&&c(l)})}kt(a),Il(a,c=>me(n,c),()=>C(n)),kt(r),Il(r,c=>me(s,c),()=>C(s)),ht(i,r)}const tC=(i,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let s=0;s<t.length;s+=1)if(i=i[t[s]],i==null)return console.error(`Cannot resolve property path "${e}": "${t[s]}" is ${i}`),{target:{},key:""};return{target:i,key:n}}else return{target:i,key:e}},nC=i=>typeof i=="object"&&i!==null,iC=(i,e)=>{const{invalidate:t}=fr(),n=t_(),s=zA();mn(()=>{t();const r=i(),a=e();if(a===void 0&&_i(r,"Object3D")){const o=s.current;return o?.add(r),()=>{t(),o?.remove(r)}}if(a===void 0&&nC(n.current)){const o=n.current;if(_i(r,"Material")){const l=o.material;return o.material=r,()=>{t(),o.material=l}}else if(_i(r,"BufferGeometry")){const l=o.geometry;return o.geometry=r,()=>{t(),o.geometry=l}}}if(a===!1)return()=>{t()};if(typeof a=="function"){const o=a({ref:r,parent:n.current,parentObject3D:s.current});return()=>{t(),o?.()}}if(typeof a=="string"){const{target:o,key:l}=tC(n.current,a);if(l in o){const c=o[l];return o[l]=r,()=>{t(),o[l]=c}}else return o[l]=r,()=>{t(),delete o[l]}}if(_i(a,"Object3D")&&_i(r,"Object3D"))return a.add(r),()=>{t(),a.remove(r)}})},Rm=Symbol("threlte-disposable-object-context"),sC=i=>typeof i?.dispose=="function",rC=(i,e)=>{const{disposableObjectMounted:t,disposableObjectUnmounted:n,removeObjectFromDisposal:s}=kA(),r=di(Rm),a=Qt(()=>{const l=e();return l!==void 0?l!==!1:r?.()!==!1});Si(Rm,()=>C(a));const o=new Set;xs(()=>{const l=i();sC(l)&&(C(a)?(t(l),o.add(l)):(s(l),o.delete(l)))}),xs(()=>()=>{for(const l of o)n(l);o.clear()})};let Ju;const aC=i=>{Ju=i},oC=()=>{const i=Ju;return Ju=void 0,i},lC="threlte-plugin-context",cC=i=>{const e=di(lC);if(!e)return;const t=[],n=Object.values(e);if(n.length>0)for(let s=0;s<n.length;s++){const r=n[s],a=r(i);a&&a.pluginProps&&t.push(...a.pluginProps)}return{pluginsProps:t}},hC=i=>typeof i=="string"||typeof i=="number"||typeof i=="boolean"||typeof i>"u"||i===null,uC=(i,e,t)=>{const n=i[e],s=Array.isArray(t);!s&&typeof t=="number"&&typeof n=="object"&&n!==null&&typeof n.setScalar=="function"&&!n.isColor?n.setScalar(t):typeof n=="object"&&n!==null&&typeof n.set=="function"?s?n.set(...t):n.set(t):i[e]=t},dC=(i,e,t)=>{const{invalidate:n}=fr(),s=new Map,r=(a,o,l)=>{if(hC(l)){const h=s.get(o);if(h&&h.instance===a&&h.value===l)return;s.set(o,{instance:a,value:l})}else s.delete(o);let c=a,u=o;const d=o.includes(".");if(d){const h=o.split(".");u=h.pop();for(let f=0;f<h.length;f++)if(c=c[h[f]],c==null){console.error(`Cannot resolve property path "${o}": "${h[f]}" is ${c}`);return}}if(typeof l=="function"&&u.startsWith("on")&&!d&&"addEventListener"in c){const h=c,f=u.slice(2);return h.addEventListener(f,l),()=>{h.removeEventListener?.(f,l)}}l!=null?uC(c,u,l):c[u]=l,n()};mn(()=>{const a=i(),o=e(),l=t();s.clear(),Ae(()=>{for(const c in o)l?.includes(c)||mn(()=>r(a,c,o[c]))})})},fC=i=>typeof i=="function"&&Function.prototype.toString.call(i).startsWith("class "),pC=(i,e)=>fC(i)?Array.isArray(e)?new i(...e):new i:i;var mC=new Set(["$$slots","$$events","$$legacy","ref","manual","makeDefault"]);function gC(i,e){An(e,!0);let t=Ze(e,"manual",3,!1),n=Ze(e,"makeDefault",3,!1),s=co(e,mC);WA(()=>e.ref,()=>t(),()=>n(),()=>s),Cn()}var _C=new Set(["$$slots","$$events","$$legacy","is","args","attach","dispose","ref","oncreate","children","makeDefault","manual"]),vC=It("<!> <!>",1);function Im(i,e){An(e,!0);let t=Ze(e,"is",19,oC),n=Ze(e,"ref",15),s=co(e,_C);const r=Qt(()=>pC(t(),e.args)),a=cC({get ref(){return C(r)},get args(){return e.args},get attach(){return e.attach},get manual(){return e.manual},get makeDefault(){return e.makeDefault},get dispose(){return e.dispose},get props(){return s}});dC(()=>C(r),()=>s,()=>a?.pluginsProps),iC(()=>C(r),()=>e.attach),rC(()=>C(r),()=>e.dispose),n_(()=>_i(C(r),"Object3D")?C(r):void 0),e_(()=>C(r)),xs(()=>{if(C(r))return Ae(()=>(n()!==C(r)&&n(C(r)),e.oncreate?.(C(r))))});var o=vC(),l=on(o);{var c=h=>{gC(h,sd({get ref(){return C(r)},get manual(){return e.manual},get makeDefault(){return e.makeDefault}},()=>s))},u=Qt(()=>_i(C(r),"PerspectiveCamera")||_i(C(r),"OrthographicCamera"));Ln(l,h=>{C(u)&&h(c)})}var d=ut(l,2);Ac(d,()=>e.children??id,()=>({ref:C(r)})),ht(i,o),Cn()}const yC={},xt=new Proxy(Im,{get(i,e){if(typeof e!="string")return Reflect.get(i,e);const t=yC[e]||EA[e];if(t===void 0)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return(...n)=>(aC(t),Im(...n))}}),xC=()=>{const i=fr(),e=qA(),t=hf(),n=i_(),s=Sh();return{advance:i.advance,autoRender:i.autoRender,autoRenderTask:e.autoRenderTask,camera:t.camera,colorManagementEnabled:e.colorManagementEnabled,colorSpace:e.colorSpace,dpr:e.dpr,invalidate:i.invalidate,mainStage:i.mainStage,renderer:e.renderer,renderMode:i.renderMode,renderStage:i.renderStage,scheduler:i.scheduler,shadows:e.shadows,shouldRender:i.shouldRender,dom:s.dom,canvas:s.canvas,size:s.size,toneMapping:e.toneMapping,get scene(){return n.scene},set scene(a){n.scene=a}}},bC=typeof window<"u";function SC(i,e,t){if(!bC)return{task:void 0,start:()=>{},stop:()=>{},started:T_(!1)};let n,s,r;fs.isKey(i)?(n=i,s=e,r=t):(n=Symbol("useTask"),s=i,r=e);const a=fr(),o=r?.autoInvalidate??!0;let l=a.mainStage,c=Qt(()=>r?.running?.()??r?.autoStart??!0);if(r){if(r.stage)if(fs.isValue(r.stage))l=r.stage;else{const d=a.scheduler.getStage(r.stage);if(!d)throw new Error(`No stage found with key ${r.stage.toString()}`);l=d}else if(r.after)if(Array.isArray(r.after))for(let d=0;d<r.after.length;d++){const h=r.after[d];if(fs.isValue(h)){l=h.stage;break}}else fs.isValue(r.after)&&(l=r.after.stage);else if(r.before)if(Array.isArray(r.before))for(let d=0;d<r.before.length;d++){const h=r.before[d];if(fs.isValue(h)){l=h.stage;break}}else fs.isValue(r.before)&&(l=r.before.stage)}const u=l.createTask(n,s,r);return mn(()=>{C(c)?(u.start(),o&&a.autoInvalidations.add(s)):(u.stop(),o&&a.autoInvalidations.delete(s))}),mn(()=>()=>{l.removeTask(n),o&&a.autoInvalidations.delete(s)}),{task:u,start:()=>{me(c,!0)},stop:()=>{me(c,!1)},started:ad(()=>C(c))}}function MC(i,e,t){const n=YA();if(!n)throw new Error("No user context store found, did you invoke this function outside of your main <Canvas> component?");return e?(n.update(s=>{if(i in s)return s;const r=typeof e=="function"?e():e;return s[i]=r,s}),n.current[i]):E_(n,s=>s[i])}const Pm=Symbol(),wC=i=>typeof i?.subscribe=="function",r_=(i,e,t)=>{const n=i().map(a=>wC(a)?Cc(a):Pm),s=Qt(()=>i().map((a,o)=>n[o]===Pm?a:n[o].current)),r=()=>{C(s);let a;return Ae(()=>{a=e(C(s))}),a};t?mn(r):xs(r)},TC=(i,e)=>r_(i,e,!1),EC=(i,e)=>r_(i,e,!0);Object.assign(TC,{pre:EC});const Ws=i=>({subscribe:i.subscribe,get current(){return i.current}});let za=0;const uf=Is(!1),Mh=Is(!1),df=Is(void 0),ff=Is(0),pf=Is(0),a_=Is([]),mf=Is(0),{onStart:AC,onLoad:CC,onError:RC}=dr;dr.onStart=(i,e,t)=>{AC?.(i,e,t),Mh.set(!0),df.set(i),ff.set(e),pf.set(t);const n=(e-za)/(t-za);mf.set(n),n===1&&uf.set(!0)};dr.onLoad=()=>{CC?.(),Mh.set(!1)};dr.onError=i=>{RC?.(i),a_.update(e=>[...e,i])};dr.onProgress=(i,e,t)=>{e===t&&(za=t),Mh.set(!0),df.set(i),ff.set(e),pf.set(t);const n=(e-za)/(t-za)||1;mf.set(n),n===1&&uf.set(!0)};Ws(Mh),Ws(df),Ws(ff),Ws(pf),Ws(a_),Ws(mf),Ws(uf);const IC=()=>MC("threlte-controls",{orbitControls:kr(void 0),trackballControls:kr(void 0),cameraControls:kr(void 0),transformControls:kr(void 0)});new et;new et;new wt;const PC="Right",DC="Top",LC="Front",UC="Left",NC="Bottom",OC="Back";[PC,DC,LC,UC,NC,OC].map(i=>i.toLocaleLowerCase());Te.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ie(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ri.line={uniforms:qd.merge([Te.common,Te.fog,Te.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};new et;const Dm={type:"change"},gf={type:"start"},o_={type:"end"},xl=new cr,Lm=new Xi,FC=Math.cos(70*Vg.DEG2RAD),an=new P,Vn=2*Math.PI,Ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Su=1e-6;class kC extends H0{constructor(e,t=null){super(e,t),this.state=Ut.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Js.ROTATE,MIDDLE:Js.DOLLY,RIGHT:Js.PAN},this.touches={ONE:$s.ROTATE,TWO:$s.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new _n,this._lastTargetPosition=new P,this._quat=new _n().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xu,this._sphericalDelta=new Xu,this._scale=1,this._panOffset=new P,this._rotateStart=new ie,this._rotateEnd=new ie,this._rotateDelta=new ie,this._panStart=new ie,this._panEnd=new ie,this._panDelta=new ie,this._dollyStart=new ie,this._dollyEnd=new ie,this._dollyDelta=new ie,this._dollyDirection=new P,this._mouse=new ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zC.bind(this),this._onPointerDown=BC.bind(this),this._onPointerUp=VC.bind(this),this._onContextMenu=YC.bind(this),this._onMouseWheel=WC.bind(this),this._onKeyDown=XC.bind(this),this._onTouchStart=qC.bind(this),this._onTouchMove=$C.bind(this),this._onMouseDown=GC.bind(this),this._onMouseMove=HC.bind(this),this._interceptControlDown=ZC.bind(this),this._interceptControlUp=KC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dm),this.update(),this.state=Ut.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;an.copy(t).sub(this.target),an.applyQuaternion(this._quat),this._spherical.setFromVector3(an),this.autoRotate&&this.state===Ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Vn:n>Math.PI&&(n-=Vn),s<-Math.PI?s+=Vn:s>Math.PI&&(s-=Vn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(an.setFromSpherical(this._spherical),an.applyQuaternion(this._quatInverse),t.copy(this.target).add(an),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=an.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=an.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(xl.origin.copy(this.object.position),xl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xl.direction))<FC?this.object.lookAt(this.target):(Lm.setFromNormalAndCoplanarPoint(this.object.up,this.target),xl.intersectPlane(Lm,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Su||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Su||this._lastTargetPosition.distanceToSquared(this.target)>Su?(this.dispatchEvent(Dm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Vn/60*this.autoRotateSpeed*e:Vn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){an.setFromMatrixColumn(t,0),an.multiplyScalar(-e),this._panOffset.add(an)}_panUp(e,t){this.screenSpacePanning===!0?an.setFromMatrixColumn(t,1):(an.setFromMatrixColumn(t,0),an.crossVectors(this.object.up,an)),an.multiplyScalar(e),this._panOffset.add(an)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;an.copy(s).sub(this.target);let r=an.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ie,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function BC(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function zC(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function VC(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(o_),this.state=Ut.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function GC(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Js.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ut.DOLLY;break;case Js.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ut.ROTATE}break;case Js.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ut.PAN}break;default:this.state=Ut.NONE}this.state!==Ut.NONE&&this.dispatchEvent(gf)}function HC(i){switch(this.state){case Ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function WC(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ut.NONE||(i.preventDefault(),this.dispatchEvent(gf),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(o_))}function XC(i){this.enabled!==!1&&this._handleKeyDown(i)}function qC(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case $s.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ut.TOUCH_ROTATE;break;case $s.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ut.TOUCH_PAN;break;default:this.state=Ut.NONE}break;case 2:switch(this.touches.TWO){case $s.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ut.TOUCH_DOLLY_PAN;break;case $s.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ut.TOUCH_DOLLY_ROTATE;break;default:this.state=Ut.NONE}break;default:this.state=Ut.NONE}this.state!==Ut.NONE&&this.dispatchEvent(gf)}function $C(i){switch(this._trackPointer(i),this.state){case Ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ut.NONE}}function YC(i){this.enabled!==!1&&i.preventDefault()}function ZC(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function KC(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var jC=new Set(["$$slots","$$events","$$legacy","camera","ref","children"]);function JC(i,e){An(e,!0);const t=()=>Uf(d,"$parent",s),n=()=>Uf(c,"$defaultCamera",s),[s,r]=U_();let a=Ze(e,"ref",15),o=co(e,jC);const{dom:l,camera:c,invalidate:u}=xC(),d=BA(),h=Qt(()=>e.camera?e.camera:_i(t(),"Camera")?t():n()),f=new kC(Ae(()=>C(h)),l);mn(()=>{f.object=C(h)});const{orbitControls:p}=IC();SC(()=>{f.update()},{autoInvalidate:!1,running:()=>e.autoRotate||e.enableDamping||!1});const _=g=>{u(),e.onchange?.(g)};mn(()=>(p.set(f),()=>{p.set(void 0)})),xt(i,sd({get is(){return f}},()=>o,{onchange:_,get ref(){return a()},set ref(g){a(g)},children:(g,m)=>{var v=Xr(),b=on(v);Ac(b,()=>e.children??id,()=>({ref:f})),ht(g,v)},$$slots:{default:!0}})),Cn(),r()}new et;new et;new nn;const QC=tt.shadowmap_pars_fragment;QC.includes("unpackRGBAToDepth");`${tt.logdepthbuf_pars_vertex}${tt.fog_pars_vertex}${tt.logdepthbuf_vertex}${tt.fog_vertex}`;`${tt.tonemapping_fragment}${tt.colorspace_fragment}`;`${tt.tonemapping_fragment}${tt.colorspace_fragment}`;const eR=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,tR=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int pointer = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( pointer > - 1 && pointer < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ pointer ];
		pointer --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = currNodeIndex + boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			pointer ++;
			stack[ pointer ] = c2;

			pointer ++;
			stack[ pointer ] = c1;

		}

	}

	return found;

}
`,nR=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,iR=nR,sR=`
	${eR}
	${tR}
`;`${iR}${sR}${tt.tonemapping_fragment}${tt.colorspace_fragment}`;typeof window<"u"&&document.createElement("div");new NA;for(let i=0;i<256;i++)(i<16?"0":"")+i.toString(16);new oa(-1,1,1,-1,0,1);class rR extends lt{constructor(){super(),this.setAttribute("position",new ke([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ke([0,2,0,0,2,0],2))}}new rR;var l_={exports:{}};l_.exports=wh;l_.exports.default=wh;function wh(i,e,t){t=t||2;var n=e&&e.length,s=n?e[0]*t:i.length,r=c_(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;var o,l,c,u,d,h,f;if(n&&(r=hR(i,e,r,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(var p=t;p<s;p+=t)d=i[p],h=i[p+1],d<o&&(o=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);f=Math.max(c-o,u-l),f=f!==0?32767/f:0}return ao(r,a,t,o,l,f,0),a}function c_(i,e,t,n,s){var r,a;if(s===td(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Um(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Um(r,i[r],i[r+1],a);return a&&Th(a,a.next)&&(lo(a),a=a.next),a}function lr(i,e){if(!i)return i;e||(e=i);var t=i,n;do if(n=!1,!t.steiner&&(Th(t,t.next)||qt(t.prev,t,t.next)===0)){if(lo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ao(i,e,t,n,s,r,a){if(i){!a&&r&&mR(i,n,s,r);for(var o=i,l,c;i.prev!==i.next;){if(l=i.prev,c=i.next,r?oR(i,n,s,r):aR(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),lo(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=lR(lr(i),e,t),ao(i,e,t,n,s,r,2)):a===2&&cR(i,e,t,n,s,r):ao(lr(i),e,t,n,s,r,1);break}}}}function aR(i){var e=i.prev,t=i,n=i.next;if(qt(e,t,n)>=0)return!1;for(var s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,h=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,p=n.next;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&Hr(s,o,r,l,a,c,p.x,p.y)&&qt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function oR(i,e,t,n){var s=i.prev,r=i,a=i.next;if(qt(s,r,a)>=0)return!1;for(var o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=o<l?o<c?o:c:l<c?l:c,p=u<d?u<h?u:h:d<h?d:h,_=o>l?o>c?o:c:l>c?l:c,g=u>d?u>h?u:h:d>h?d:h,m=Qu(f,p,e,t,n),v=Qu(_,g,e,t,n),b=i.prevZ,y=i.nextZ;b&&b.z>=m&&y&&y.z<=v;){if(b.x>=f&&b.x<=_&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&Hr(o,u,l,d,c,h,b.x,b.y)&&qt(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&Hr(o,u,l,d,c,h,y.x,y.y)&&qt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=_&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&Hr(o,u,l,d,c,h,b.x,b.y)&&qt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&Hr(o,u,l,d,c,h,y.x,y.y)&&qt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function lR(i,e,t){var n=i;do{var s=n.prev,r=n.next.next;!Th(s,r)&&h_(s,n,n.next,r)&&oo(s,r)&&oo(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),lo(n),lo(n.next),n=i=r),n=n.next}while(n!==i);return lr(n)}function cR(i,e,t,n,s,r){var a=i;do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&vR(a,o)){var l=u_(a,o);a=lr(a,a.next),l=lr(l,l.next),ao(a,e,t,n,s,r,0),ao(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function hR(i,e,t,n){var s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=c_(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(_R(c));for(s.sort(uR),r=0;r<s.length;r++)t=dR(s[r],t);return t}function uR(i,e){return i.x-e.x}function dR(i,e){var t=fR(i,e);if(!t)return e;var n=u_(t,i);return lr(n,n.next),lr(t,t.next)}function fR(i,e){var t=e,n=i.x,s=i.y,r=-1/0,a;do{if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){var o=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(o<=n&&o>r&&(r=o,a=t.x<t.next.x?t:t.next,o===n))return a}t=t.next}while(t!==e);if(!a)return null;var l=a,c=a.x,u=a.y,d=1/0,h;t=a;do n>=t.x&&t.x>=c&&n!==t.x&&Hr(s<u?n:r,s,c,u,s<u?r:n,s,t.x,t.y)&&(h=Math.abs(s-t.y)/(n-t.x),oo(t,i)&&(h<d||h===d&&(t.x>a.x||t.x===a.x&&pR(a,t)))&&(a=t,d=h)),t=t.next;while(t!==l);return a}function pR(i,e){return qt(i.prev,i,e.prev)<0&&qt(e.next,i,i.next)<0}function mR(i,e,t,n){var s=i;do s.z===0&&(s.z=Qu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,gR(s)}function gR(i){var e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Qu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function _R(i){var e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Hr(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function vR(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!yR(i,e)&&(oo(i,e)&&oo(e,i)&&xR(i,e)&&(qt(i.prev,i,e.prev)||qt(i,e.prev,e))||Th(i,e)&&qt(i.prev,i,i.next)>0&&qt(e.prev,e,e.next)>0)}function qt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Th(i,e){return i.x===e.x&&i.y===e.y}function h_(i,e,t,n){var s=Sl(qt(i,e,t)),r=Sl(qt(i,e,n)),a=Sl(qt(t,n,i)),o=Sl(qt(t,n,e));return!!(s!==r&&a!==o||s===0&&bl(i,t,e)||r===0&&bl(i,n,e)||a===0&&bl(t,i,n)||o===0&&bl(t,e,n))}function bl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Sl(i){return i>0?1:i<0?-1:0}function yR(i,e){var t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&h_(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function oo(i,e){return qt(i.prev,i,i.next)<0?qt(i,e,i.next)>=0&&qt(i,i.prev,e)>=0:qt(i,e,i.prev)<0||qt(i,i.next,e)<0}function xR(i,e){var t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function u_(i,e){var t=new ed(i.i,i.x,i.y),n=new ed(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Um(i,e,t,n){var s=new ed(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function lo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ed(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}wh.deviation=function(i,e,t,n){var s=e&&e.length,r=s?e[0]*t:i.length,a=Math.abs(td(i,0,r,t));if(s)for(var o=0,l=e.length;o<l;o++){var c=e[o]*t,u=o<l-1?e[o+1]*t:i.length;a-=Math.abs(td(i,c,u,t))}var d=0;for(o=0;o<n.length;o+=3){var h=n[o]*t,f=n[o+1]*t,p=n[o+2]*t;d+=Math.abs((i[h]-i[p])*(i[f+1]-i[h+1])-(i[h]-i[f])*(i[p+1]-i[h+1]))}return a===0&&d===0?0:Math.abs((d-a)/a)};function td(i,e,t,n){for(var s=0,r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}wh.flatten=function(i){for(var e=i[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,s=0;s<i.length;s++){for(var r=0;r<i[s].length;r++)for(var a=0;a<e;a++)t.vertices.push(i[s][r][a]);s>0&&(n+=i[s-1].length,t.holes.push(n))}return t};var Nm;(i=>{function e(s){let r=s.slice();return r.sort(i.POINT_COMPARATOR),i.makeHullPresorted(r)}i.makeHull=e;function t(s){if(s.length<=1)return s.slice();let r=[];for(let o=0;o<s.length;o++){const l=s[o];for(;r.length>=2;){const c=r[r.length-1],u=r[r.length-2];if((c.x-u.x)*(l.y-u.y)>=(c.y-u.y)*(l.x-u.x))r.pop();else break}r.push(l)}r.pop();let a=[];for(let o=s.length-1;o>=0;o--){const l=s[o];for(;a.length>=2;){const c=a[a.length-1],u=a[a.length-2];if((c.x-u.x)*(l.y-u.y)>=(c.y-u.y)*(l.x-u.x))a.pop();else break}a.push(l)}return a.pop(),r.length==1&&a.length==1&&r[0].x==a[0].x&&r[0].y==a[0].y?r:r.concat(a)}i.makeHullPresorted=t;function n(s,r){return s.x<r.x?-1:s.x>r.x?1:s.y<r.y?-1:s.y>r.y?1:0}i.POINT_COMPARATOR=n})(Nm||(Nm={}));new ns;new et;const wa=new P;function ii(i,e,t,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;wa.copy(e),wa[n]=0,wa.normalize();const c=.5*a/(a+o),u=1-wa.angleTo(i)/l;return Math.sign(wa[t])===1?u*c:o/(a+o)+c+c*(1-u)}class Eh extends As{constructor(e=1,t=1,n=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new P,c=new P,u=new P(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,_=new P,g=.5/a;for(let m=0,v=0;m<d.length;m+=3,v+=2)switch(l.fromArray(d,m),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),d[m+0]=u.x*Math.sign(l.x)+c.x*r,d[m+1]=u.y*Math.sign(l.y)+c.y*r,d[m+2]=u.z*Math.sign(l.z)+c.z*r,h[m+0]=c.x,h[m+1]=c.y,h[m+2]=c.z,Math.floor(m/p)){case 0:_.set(1,0,0),f[v+0]=ii(_,c,"z","y",r,n),f[v+1]=1-ii(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),f[v+0]=1-ii(_,c,"z","y",r,n),f[v+1]=1-ii(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),f[v+0]=1-ii(_,c,"x","z",r,e),f[v+1]=ii(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),f[v+0]=1-ii(_,c,"x","z",r,e),f[v+1]=1-ii(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),f[v+0]=1-ii(_,c,"x","y",r,e),f[v+1]=1-ii(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),f[v+0]=ii(_,c,"x","y",r,e),f[v+1]=1-ii(_,c,"y","x",r,t);break}}static fromJSON(e){return new Eh(e.width,e.height,e.depth,e.segments,e.radius)}}var bR=It("<!><!>",1),SR=It("<!> <!>",1);function MR(i,e){An(e,!1);let t=Ze(e,"position",24,()=>[0,0,0]);const n=new Eh(1.08,.28,.62,8,.09);Ts(),xt.Group(i,{get position(){return t()},children:(s,r)=>{var a=SR(),o=on(a);xt.Mesh(o,{children:(c,u)=>{var d=bR(),h=on(d);xt.BoxGeometry(h,{args:[.82,.16,.44]});var f=ut(h);xt.MeshBasicMaterial(f,{color:"#bff8ff"}),ht(c,d)},$$slots:{default:!0}});var l=ut(o,2);xt.Mesh(l,{get geometry(){return n},children:(c,u)=>{xt.MeshPhysicalMaterial(c,{color:"#eafcff",emissive:"#43d9ef",emissiveIntensity:.18,metalness:.08,roughness:.1,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:2})},$$slots:{default:!0}}),ht(s,a)},$$slots:{default:!0}}),Cn()}var wR=It("<!><!>",1),TR=It("<!> <!>",1);function Ml(i,e){An(e,!1);const t=dt();let n=Ze(e,"color",8),s=Ze(e,"position",24,()=>[0,0,0]),r=Ze(e,"rotation",24,()=>[0,0,0]),a=Ze(e,"scale",8,1),o=Ze(e,"glow",8,.28);const l={cyan:"#30e7ff",pink:"#ff4aa2",yellow:"#ffe15b",green:"#63f58b",purple:"#aa66ff",orange:"#ff8a35",blue:"#4d7cff",wild:"#ffffff"},c=new Eh(.94,.42,.94,8,.1);zt(()=>Ee(n()),()=>{me(t,l[n()])}),es(),Ts(),xt.Group(i,{get position(){return s()},get rotation(){return r()},get scale(){return a()},children:(u,d)=>{var h=TR(),f=on(h);xt.Mesh(f,{children:(_,g)=>{var m=wR(),v=on(m);xt.BoxGeometry(v,{args:[.72,.25,.72]});var b=ut(v);xt.MeshBasicMaterial(b,{get color(){return C(t)},transparent:!0,get opacity(){return o()}}),ht(_,m)},$$slots:{default:!0}});var p=ut(f,2);xt.Mesh(p,{get geometry(){return c},castShadow:!0,receiveShadow:!0,children:(_,g)=>{xt.MeshPhongMaterial(_,{get color(){return C(t)},specular:"#ffffff",shininess:90})},$$slots:{default:!0}}),ht(u,h)},$$slots:{default:!0}}),Cn()}function d_(i,e,t,n,s){const r=new Map(t.filter(_=>i.includes(_.playerId)).map(_=>[_.playerId,_])),a=i.filter(_=>!r.has(_)),o=i.length===1?r.size===1:r.size>=i.length-1;if(o)for(const _ of a)r.set(_,{playerId:_,result:"cleared",tick:Number.MAX_SAFE_INTEGER,score:0,misses:0,seat:i.indexOf(_)});const l=[...r.values()].sort((_,g)=>(_.result==="cleared"?0:1)-(g.result==="cleared"?0:1)||_.tick-g.tick||g.score-_.score||_.misses-g.misses||_.seat-g.seat),c=Object.fromEntries(i.map(_=>[_,0]));o&&l.forEach((_,g)=>c[_.playerId]=Math.max(0,i.length-1-g));const u=Object.fromEntries(i.map(_=>[_,(e[_]??0)+c[_]])),d=Math.max(...Object.values(u)),h=o&&s>=2?i.filter(_=>u[_]===d):[],f=n.filter(_=>i.includes(_)),p=o&&s>=2;return{playerIds:i,terminalPlayerIds:[...r.keys()],readyPlayerIds:f,finished:o,winnerId:p?h.length===1?h[0]:void 0:l[0]?.playerId,winnerIds:h,allReady:o&&i.every(_=>f.includes(_)),round:s,matchComplete:p,roundPoints:c,scores:u}}const ER=Object.freeze({place:41,settle:30,burst:24,fall:22,miss:54});var Fr=It("<!><!>",1),AR=It("<!><!> <!><!><!><!><!> <!> <!> <!> <!> <!> <!><!> <!> <!> <!> <!>",1),CR=It('<button class="svelte-1y6lvup"></button>'),RR=It('<div class="lanes svelte-1y6lvup"></div>'),IR=It("<button> </button>"),PR=It('<strong class="countdown svelte-1y6lvup"> </strong>'),DR=It('<div data-ramp-direction="far-to-player" data-roll-direction="edge-over-edge-toward-player" data-paddle-position="player-edge" data-bin-position="below-paddle" data-bin-layout="vertical-stacks"><!> <!><!><!></div>');function mI(i,e){An(e,!1);const t=dt();let n=Ze(e,"state",8),s=Ze(e,"compact",8,!1),r=Ze(e,"label",8,"Stax ramp"),a=Ze(e,"selectLane",8,void 0),o=Ze(e,"onChainCue",8,void 0),l=Ze(e,"onTerminalPresentationComplete",8,void 0),c=dt(!1);const u=N=>(N-2)*1.15,d=.13,h=.72,f=-.52,p=.09,_=-4.35,g=3.55,m=4.08,v=.2,b=.42,y=-1.78,w=5.35,M=-2.25,A=N=>h+p/Math.cos(d)-(N-f)*Math.tan(d),x=(N,H=!1)=>{const ne=Math.min(1,N/(H?360:C(t))),ce=H?1-ne:ne,$=_+ce*(g-_),j=(H?-1:1)*N*.06+d,ge=.21*Math.abs(Math.cos(j))+.47*Math.abs(Math.sin(j));return{z:$,y:A($)+ge+.015,roll:j}},{place:T,settle:R,burst:I,fall:B}=ER;let L=dt([]),F=dt(),k=dt([]),U=dt(""),O=-1,G=-1,W=dt(0),se=0,J=!1,te=dt(!0),Ce=0,ct=0,at=new Map;const ee=N=>Math.atan2(Math.sin(N),Math.cos(N)),_e=N=>N+(Math.PI-(N%Math.PI+Math.PI)%Math.PI)%Math.PI,ue=()=>{at=new Map(n().ramp.map(N=>[N.id,{color:N.color,lane:N.lane,returning:N.returning}])),n().paddle.map(N=>({...N})),n().columns.map(N=>N.length),n().placements},We=()=>{if(me(L,C(L).filter(N=>C(W)-N.startedTick<N.durationTicks)),C(F)){const N=C(W)-C(F).startedTick,H=T+R+C(F).waves.length*(I+B);if(N>=H)me(F,void 0);else{const ne=Math.floor(Math.max(0,N-T-R)/(I+B));N>=T+R&&ne<C(F).waves.length&&ne>=C(F).cued&&(o()?.(),L_(F,C(F).cued=ne+1))}}},Je=()=>n().phase==="cleared"||n().phase==="lost",he=N=>{if(!Je()||!C(L).length&&!C(F)){const H=!C(te)&&Je();me(te,!0),Ce=0,ct=0,H&&l()?.();return}ct&&me(W,C(W)+Math.min(3,(N-ct)/(1e3/60))),ct=N,We(),Ce=requestAnimationFrame(he)},Re=()=>{me(te,!1),Ce||(ct=0,Ce=requestAnimationFrame(he))};Ec(()=>()=>cancelAnimationFrame(Ce));function ze(){if(!J||n().phase==="countdown"){const $=!J&&Je();me(L,[]),me(F,void 0),O=-1,G=-1,me(W,n().tick),se=n().tick,J=!0,me(te,!0),ue(),$&&queueMicrotask(()=>l()?.());return}me(W,C(W)+Math.min(1,Math.max(0,n().tick-se))),se=n().tick,We();const N=new Set(n().paddle.map($=>$.id));for(const[$,j]of at)n().ramp.some(ge=>ge.id===$)||me(L,[...C(L),{id:$,color:j.color,kind:N.has($)?"catch":"miss",lane:j.lane,startedTick:C(W),durationTicks:N.has($)?25:54,roll:ee(x(j.returning?360:C(t),j.returning).roll)}]);const H=n().lastPlacement,ne=!!(H&&H.placement!==O),ce=n().lastClearWaves.length&&n().placements!==G;ne&&H&&(me(L,[...C(L).filter($=>$.id!==H.id),{id:H.id,color:H.color,kind:"place",lane:H.column,column:H.column,row:H.row,startedTick:C(W),durationTicks:T,roll:0}]),O=H.placement),ce&&H&&(me(F,{startedTick:C(W),column:H.column,placedRow:H.row,waves:structuredClone(n().lastClearWaves),cued:0}),G=n().placements),Je()&&(C(L).length||C(F))?Re():Je()||me(te,!0),ue()}const re=(N,H)=>C(L).some(ne=>ne.kind===N&&ne.id===H),ae=N=>N?v-.35-(N-1)*b:v,oe=()=>{const N=C(L).find(ce=>ce.kind==="catch");if(!N)return ae(n().paddle.length);const H=Math.max(0,Math.min(1,(C(W)-N.startedTick)/N.durationTicks)),ne=Math.max(0,(H-.5)/.5);return ae(Math.max(0,n().paddle.length-1))+(ae(n().paddle.length)-ae(Math.max(0,n().paddle.length-1)))*(1-Math.pow(1-ne,3))},Se=()=>{if(!C(F)){const de=C(L).find(Oe=>Oe.kind==="place");return n().columns.flatMap((Oe,Ne)=>Oe.flatMap((nt,V)=>de?.column===Ne&&de.row===V?[]:[{key:`rest-${Ne}-${V}`,color:nt,column:Ne,y:y+V*b,scale:1,glow:.28}]))}const N=C(W)-C(F).startedTick;if(N<T+R)return C(F).waves[0].before.flatMap((Oe,Ne)=>Oe.map((nt,V)=>({key:`form-${Ne}-${V}`,color:nt,column:Ne,y:y+V*b,scale:Ne===C(F)?.column&&V===C(F).placedRow&&N<T?0:1,glow:.28})));const H=N-T-R,ne=Math.min(C(F).waves.length-1,Math.floor(H/(I+B))),ce=H%(I+B),$=C(F).waves[ne],j=new Set($.cells.map(de=>`${de.column}:${de.row}`));if(ce<I){const de=ce/I,Oe=1+.18*Math.sin(Math.PI*Math.min(1,de*2)),Ne=de<.55?Oe:Math.max(.05,1-(de-.55)/.45);return $.before.flatMap((nt,V)=>nt.map((xe,Q)=>({key:`burst-${ne}-${V}-${Q}`,color:xe,column:V,y:y+Q*b,scale:j.has(`${V}:${Q}`)?Ne:1,glow:j.has(`${V}:${Q}`)?1:.28})))}const ge=(ce-I)/B,Ge=ge*ge*(3-2*ge),fe=[];for(let de=0;de<5;de++){let Oe=0;for(let Ne=0;Ne<$.before[de].length;Ne++)j.has(`${de}:${Ne}`)||(fe.push({key:`fall-${ne}-${de}-${Ne}`,color:$.before[de][Ne],column:de,y:y+(Ne+(Oe-Ne)*Ge)*b,scale:1,glow:.28}),Oe++)}return fe},be=()=>{if(!C(F))return"";const N=C(W)-C(F).startedTick;return N<T?"placing":N<T+R?"settled":(N-T-R)%(I+B)<I?"burst":"fall"},Qe=N=>{const H=Math.max(0,Math.min(1,(C(W)-N.startedTick)/N.durationTicks)),ne=1-Math.pow(1-H,3);if(N.kind==="miss"){const fe=x(C(t));return{position:[u(N.lane),fe.y-4.8*H*H,fe.z+2.8*H],rotation:[N.roll+8*H,0,.7*H]}}if(N.kind==="catch"){const fe=x(C(t)),de=fe.y+(v-fe.y)*ne+.16*Math.sin(Math.PI*H),Oe=_e(N.roll);return{position:[u(N.lane),de,fe.z+(m-fe.z)*ne],rotation:[N.roll+(Oe-N.roll)*ne,0,0]}}const ce=.46,$=N.column??N.lane,j=N.row??0;if(H<ce){const fe=H/ce;return{position:[u(N.lane)+(u($)-u(N.lane))*fe,v+.2*Math.sin(Math.PI*fe),m+(w-m)*fe],rotation:[Math.PI*fe,0,0]}}const ge=(H-ce)/(1-ce),Ge=ge*ge;return{position:[u($),v+(y+j*b-v)*Ge,w],rotation:[Math.PI,0,0]}};zt(()=>Ee(n()),()=>{me(t,tv(n().level).travel)}),zt(()=>Ee(n()),()=>{n(),ze()}),zt(()=>(Ee(n()),C(L),C(F),C(W)),()=>{n(),C(L),C(F),C(W),me(k,Se())}),zt(()=>(Ee(n()),C(F),C(W)),()=>{n(),C(F),C(W),me(U,be())}),es(),Ts();var ye=DR();let ve;var Pe=en(ye);eC(Pe,{dpr:[1,2],children:(N,H)=>{var ne=AR(),ce=on(ne);qm(ce,()=>C(c),qe=>{xt.PerspectiveCamera(qe,{makeDefault:!0,position:[0,6.1,12.4],rotation:[-.58,0,0],fov:43})});var $=ut(ce);{var j=qe=>{JC(qe,{enableDamping:!0,target:[0,-.35,.7]})};Ln($,qe=>{a()&&C(c)&&qe(j)})}var ge=ut($,2);xt.Color(ge,{attach:"background",args:["#05050a"]});var Ge=ut(ge);xt.AmbientLight(Ge,{intensity:.72});var fe=ut(Ge);xt.DirectionalLight(fe,{position:[5,10,7],intensity:4,color:"#fff0dd",castShadow:!0});var de=ut(fe);xt.DirectionalLight(de,{position:[-8,5,-5],intensity:3,color:"#cceeff"});var Oe=ut(de);xt.SpotLight(Oe,{position:[0,8,-5],intensity:10,color:"#00ffcc",angle:.5,penumbra:.5,decay:0,distance:20});var Ne=ut(Oe,2);xt.Mesh(Ne,{rotation:[.13,0,0],position:[0,.72,-.52],receiveShadow:!0,children:(qe,rt)=>{var ft=Fr(),Wt=on(ft);xt.BoxGeometry(Wt,{args:[6.3,.18,8.35]});var gn=ut(Wt);xt.MeshStandardMaterial(gn,{color:"#11182b",metalness:.28,roughness:.38}),ht(qe,ft)},$$slots:{default:!0}});var nt=ut(Ne,2);Pn(nt,0,()=>Array(6),ai,(qe,rt,ft)=>{xt.Mesh(qe,{rotation:[.13,0,0],position:[(ft-2.5)*1.15,.83,-.52],children:(Wt,gn)=>{var Bn=Fr(),$n=on(Bn);xt.BoxGeometry($n,{args:[.035,.035,8.2]});var Fi=ut($n);xt.MeshBasicMaterial(Fi,{color:"#2c4777"}),ht(Wt,Bn)},$$slots:{default:!0}})});var V=ut(nt,2);Pn(V,1,()=>(Ee(n()),Ae(()=>n().ramp)),qe=>qe.id,(qe,rt)=>{const ft=Wi(()=>(C(rt),Ae(()=>x(C(rt).progress,C(rt).returning))));{let Wt=Wi(()=>(C(rt),Ee(C(ft)),Ae(()=>[u(C(rt).lane),C(ft).y,C(ft).z]))),gn=Wi(()=>(Ee(C(ft)),Ae(()=>[C(ft).roll,0,0])));Ml(qe,{get color(){return C(rt),Ae(()=>C(rt).color)},get position(){return C(Wt)},get rotation(){return C(gn)}})}});var xe=ut(V,2);xt.Mesh(xe,{position:[0,M,5.35],receiveShadow:!0,children:(qe,rt)=>{var ft=Fr(),Wt=on(ft);xt.BoxGeometry(Wt,{args:[6.3,.18,1.45]});var gn=ut(Wt);xt.MeshStandardMaterial(gn,{color:"#0b1020",metalness:.22,roughness:.42}),ht(qe,ft)},$$slots:{default:!0}});var Q=ut(xe,2);Pn(Q,0,()=>Array(6),ai,(qe,rt,ft)=>{xt.Mesh(qe,{position:[(ft-2.5)*1.15,M+.105,5.35],children:(Wt,gn)=>{var Bn=Fr(),$n=on(Bn);xt.BoxGeometry($n,{args:[.025,.025,1.32]});var Fi=ut($n);xt.MeshBasicMaterial(Fi,{color:"#263d68"}),ht(Wt,Bn)},$$slots:{default:!0}})});var we=ut(Q,2);xt.Mesh(we,{position:[0,M+.105,4.68],children:(qe,rt)=>{var ft=Fr(),Wt=on(ft);xt.BoxGeometry(Wt,{args:[5.75,.025,.035]});var gn=ut(Wt);xt.MeshBasicMaterial(gn,{color:"#263d68"}),ht(qe,ft)},$$slots:{default:!0}});var Ie=ut(we);xt.Mesh(Ie,{position:[0,M+.105,6.02],children:(qe,rt)=>{var ft=Fr(),Wt=on(ft);xt.BoxGeometry(Wt,{args:[5.75,.025,.035]});var gn=ut(Wt);xt.MeshBasicMaterial(gn,{color:"#263d68"}),ht(qe,ft)},$$slots:{default:!0}});var le=ut(Ie,2);Pn(le,1,()=>C(k),qe=>qe.key,(qe,rt)=>{var ft=Xr(),Wt=on(ft);{var gn=Bn=>{{let $n=Wi(()=>(C(rt),Ae(()=>[u(C(rt).column),C(rt).y,w])));Ml(Bn,{get color(){return C(rt),Ae(()=>C(rt).color)},get position(){return C($n)},get scale(){return C(rt),Ae(()=>C(rt).scale)},get glow(){return C(rt),Ae(()=>C(rt).glow)}})}};Ln(Wt,Bn=>{C(rt),Ae(()=>C(rt).scale>0)&&Bn(gn)})}ht(qe,ft)});var Xe=ut(le,2);{let qe=Wi(()=>(Ee(n()),Ae(()=>[u(n().paddleLane),oe(),m])));MR(Xe,{get position(){return C(qe)}})}var He=ut(Xe,2);Pn(He,1,()=>(Ee(n()),Ae(()=>n().paddle)),ai,(qe,rt,ft)=>{var Wt=Xr(),gn=on(Wt);{var Bn=Fi=>{{let To=Wi(()=>(Ee(n()),Ae(()=>[u(n().paddleLane),v-(n().paddle.length-1-ft)*b,m])));Ml(Fi,{get color(){return C(rt),Ae(()=>C(rt).color)},get position(){return C(To)}})}},$n=Qt(()=>(C(rt),Ae(()=>!re("catch",C(rt).id))));Ln(gn,Fi=>{C($n)&&Fi(Bn)})}ht(qe,Wt)});var Ht=ut(He,2);Pn(Ht,1,()=>C(L),qe=>qe.kind+qe.id,(qe,rt)=>{const ft=Wi(()=>(C(rt),Ae(()=>Qe(C(rt)))));Ml(qe,{get color(){return C(rt),Ae(()=>C(rt).color)},get position(){return Ee(C(ft)),Ae(()=>C(ft).position)},get rotation(){return Ee(C(ft)),Ae(()=>C(ft).rotation)}})}),ht(N,ne)},$$slots:{default:!0}});var z=ut(Pe,2);{var Tt=N=>{var H=RR();Pn(H,4,()=>Array(5),ai,(ne,ce,$)=>{var j=CR();st(j,"aria-label",`Catch lane ${$+1}`),Al("pointerdown",j,Xm(()=>a()?.($))),ht(ne,j)}),kt(H),ht(N,H)};Ln(z,N=>{a()&&!C(c)&&N(Tt)})}var gt=ut(z);{var D=N=>{var H=IR();let ne;var ce=en(H,!0);kt(H),rn(()=>{ne=si(H,1,"inspect svelte-1y6lvup",null,ne,{active:C(c)}),st(H,"aria-label",C(c)?"Exit orbit view":"Inspect scene in orbit view"),st(H,"aria-pressed",C(c)),Zi(ce,C(c)?"EXIT ORBIT":"ORBIT VIEW")}),Al("click",H,()=>me(c,!C(c))),ht(N,H)};Ln(gt,N=>{a()&&N(D)})}var S=ut(gt);{var q=N=>{var H=PR(),ne=en(H,!0);kt(H),rn(ce=>Zi(ne,ce),[()=>(Ee(n()),Ae(()=>Math.max(1,Math.ceil(n().countdown/60))))]),ht(N,H)};Ln(S,N=>{Ee(n()),Ae(()=>n().phase==="countdown")&&N(q)})}kt(ye),rn((N,H,ne,ce,$)=>{ve=si(ye,1,"scene svelte-1y6lvup",null,ve,{compact:s()}),st(ye,"aria-label",r()),st(ye,"data-tick",(Ee(n()),Ae(()=>n().tick))),st(ye,"data-phase",(Ee(n()),Ae(()=>n().phase))),st(ye,"data-resolution-phase",C(U)),st(ye,"data-terminal-presentation",C(te)?"complete":"playing"),st(ye,"data-paddle-lane",(Ee(n()),Ae(()=>n().paddleLane))),st(ye,"data-paddle-count",(Ee(n()),Ae(()=>n().paddle.length))),st(ye,"data-paddle-y",N),st(ye,"data-ramp-count",(Ee(n()),Ae(()=>n().ramp.length))),st(ye,"data-leading-lane",(Ee(n()),Ae(()=>n().ramp[0]?.lane??""))),st(ye,"data-leading-color",(Ee(n()),Ae(()=>n().ramp[0]?.color??""))),st(ye,"data-leading-progress",(Ee(n()),Ae(()=>n().ramp[0]?.progress??""))),st(ye,"data-leading-roll",H),st(ye,"data-column-counts",ne),st(ye,"data-rendered-board-count",(C(k),Ae(()=>C(k).length))),st(ye,"data-misses",(Ee(n()),Ae(()=>n().misses))),st(ye,"data-visual-transitions",ce),st(ye,"data-visual-progress",$),st(ye,"data-score",(Ee(n()),Ae(()=>n().score)))},[()=>Ae(oe),()=>(Ee(n()),Ae(()=>n().ramp[0]?x(n().ramp[0].progress,n().ramp[0].returning).roll:"")),()=>(Ee(n()),Ae(()=>n().columns.map(N=>N.length).join(","))),()=>(C(L),Ae(()=>C(L).map(N=>N.kind).join(","))),()=>(C(L),C(W),Ae(()=>C(L)[0]?Math.floor(C(W)-C(L)[0].startedTick):""))]),ht(i,ye),Cn()}function LR(i){if(!St(i)||!bt(i,["type","roomId","ruleset","rulesVersion","seed","tickRate","hostUid","audioOutput","members","players","settings","matchId","round","previousGameId","scores","serverTime"])||i.type!=="game/started"||i.ruleset!=="stax"||i.rulesVersion!=="stax/1"||i.tickRate!==60||!Ct(i.seed,0,4294967295)||!Ct(i.round,0,2)||!yt(i.matchId)||!yt(i.hostUid)||!yt(i.roomId)||!Ni(i.serverTime)||!St(i.members)||!St(i.players)||!St(i.scores)||!St(i.settings)||!bt(i.settings,["width","height","targetWins","matchRounds"])||i.settings.width!==5||i.settings.height!==5||i.settings.targetWins!==3||i.settings.matchRounds!==3||i.previousGameId!==void 0&&!yt(i.previousGameId)||i.audioOutput!=="cast"&&i.audioOutput!=="controllers")throw new Error("Invalid Stax start record.");const e=i.members,t=i.players,n=i.scores,s=Object.keys(t);if(s.length<1||s.length>4||!Object.entries(e).every(([r,a])=>yt(r)&&a===!0)||!Object.entries(t).every(([r,a])=>yt(r)&&e[r]===!0&&St(a)&&bt(a,["seat","level"])&&Ct(a.seat,0,3)&&Ct(a.level,0,20))||!bt(n,s)||!s.every(r=>Ct(n[r],0,12)))throw new Error("Invalid Stax roster or scores.");return i}function f_(i){if(!St(i)||!bt(i,["type","playerId","tick","result","score","misses","seat","stateHash","serverTime"])||i.type!=="player/terminal"||!yt(i.playerId)||!Ct(i.tick,0)||!["cleared","lost"].includes(String(i.result))||!Ct(i.score,0,1e9)||!Ct(i.misses,0,5)||!Ct(i.seat,0,3)||typeof i.stateHash!="string"||!/^s1-[0-9a-f]{8}$/.test(i.stateHash)||!Ni(i.serverTime))throw new Error("Invalid Stax terminal record.");return i}function UR(i,e,t=!1){const n=pd(i,e,t),s=St(n.payload)?n.payload:{};if(n.type==="input/move"&&bt(s,["dx"])&&(s.dx===-1||s.dx===1))return{commandId:i,...n,type:n.type,payload:{dx:s.dx}};if(["input/place","input/throw-back","input/accelerate-start","input/accelerate-end","input/restart"].includes(n.type)&&bt(s,[]))return{commandId:i,...n,type:n.type,payload:{}};if(n.type==="progress/tick"&&bt(s,["phase","stateHash"])&&["countdown","playing","cleared","lost"].includes(String(s.phase))&&typeof s.stateHash=="string"&&/^s1-[0-9a-f]{8}$/.test(s.stateHash))return{commandId:i,...n,type:n.type,payload:{phase:s.phase,stateHash:s.stateHash}};throw new Error("Invalid Stax controller payload.")}const na=LR,wc=UR,p_=(i,e)=>nv(i.seed,e),m_=sv,g_=iv,__=Wm,NR=(i,e,t,n)=>rv(i,e,t,n);async function gI(i){if(!pe)throw new Error("Firebase unavailable.");return na((await Mt(Ue(pe,`games/${i}/start`))).val())}function OR(i,e,t){if(!pe)throw new Error("Firebase unavailable.");let n,s=[],r=[];const a=[],o=()=>{n&&e(d_(Object.keys(n.players),n.scores??{},s,r,n.round))};return Mt(Ue(pe,`games/${i}/start`)).then(l=>{n=na(l.val()),a.push(ci(Ue(pe,`games/${i}/terminals`),c=>{s=[],c.forEach(u=>{const d=f_(u.val());d.playerId===u.key&&Object.hasOwn(n.players,u.key)&&s.push(d)}),o()},t),ci(Ue(pe,`games/${i}/rematch/ready`),c=>{r=[],c.forEach(u=>{u.val()?.playerId===u.key&&Object.hasOwn(n.players,u.key)&&r.push(u.key)}),o()},t)),o()}).catch(l=>t(l instanceof Error?l:new Error(String(l)))),()=>a.forEach(l=>l())}const _I=(i,e)=>Dc(i,e);async function FR(i){if(!pe)throw new Error("Firebase unavailable.");const[e,t]=await Promise.all([Mt(Ue(pe,`games/${i}/start`)),Mt(Ue(pe,`games/${i}/terminals`))]),n=na(e.val()),s=[];t.forEach(a=>{s.push(f_(a.val()))});const r=d_(Object.keys(n.players),n.scores,s,[],n.round);return Lc(i,na,a=>{const o=Object.fromEntries(Object.keys(a.players).map(c=>[c,r.scores[c]??0])),l=r.matchComplete;return{advance:!l,scores:l?Object.fromEntries(Object.keys(a.players).map(c=>[c,0])):o}})}function vI(i,e){if(!li?.currentUser||!pe)throw new Error("Firebase unavailable.");const t=li.currentUser.uid,n=new Es(Hm.tickRate),s=gd("stax",i,t,"outbox");let r,a,o=0,l=0,c=!1,u=!1,d=!1,h=!1,f=0,p=-1,_,g,m,v=!1,b=[],y=()=>{},w=!1;const M=mo(localStorage,s,O=>{if(!O||typeof O!="object"||typeof O.commandId!="string")throw new Error("Invalid Stax Match outbox.");const{commandId:G,...W}=O;return wc(G,W,!0)}),A=O=>e({playerId:t,tick:o,ready:c,state:r?structuredClone(r):void 0,lifecycle:m,audioOutput:g,error:O,lastCommand:_,ownershipConflict:v,opponents:b.map(G=>({...G,state:structuredClone(G.state)}))}),x=new Uc(pe,`games/${i}/players/${t}/writer`,()=>{v=!0,c=!1,cancelAnimationFrame(f),A("This controller was taken over by another tab.")}),T=OR(i,O=>{m=O,O.finished&&cancelAnimationFrame(f),O.allReady&&!h&&(h=!0,FR(i).catch(G=>{h=!1,A(G instanceof Error?G.message:String(G))})),A()},O=>A(O.message)),R=new Ga({initial:M,order:(O,G)=>O.clientSeq-G.clientSeq,identify:O=>O.commandId,persist:O=>go(localStorage,s,O),deliver:async O=>{if(!c)throw new Error("Controller is not ready.");const{commandId:G,...W}=O;await wn(Ue(pe,`games/${i}/players/${t}/records/${G}`),{...W,serverTime:Tn()})},failed:O=>A(O instanceof Error?O.message:String(O))}),I=O=>{const W={commandId:qr(Ue(pe,`games/${i}/players/${t}/records`)).key,playerId:t,epochId:x.epochId,clientSeq:++l,tick:o,...O};return R.enqueue(W),W},B=(O=!1)=>{!r||!O&&o-p<15||(I({type:"progress/tick",payload:{phase:r.phase,stateHash:__(r)}}),p=o)},L=()=>{!r||w||!["cleared","lost"].includes(r.phase)||!a||(w=!0,wn(Ue(pe,`games/${i}/terminals/${t}`),{type:"player/terminal",playerId:t,tick:r.tick,result:r.phase,score:r.score,misses:r.misses,seat:a.players[t].seat,stateHash:Wm(r),serverTime:Tn()}).catch(O=>{w=!1,A(O.message)}))},F=O=>{if(u||d||!c||!r||r.phase==="cleared"||r.phase==="lost"||m?.terminalPlayerIds.includes(t))return;for(let W=n.consume(O);W>0;W--)m_(r),o=r.tick;B();const G=r.phase;if(G==="cleared"||G==="lost"){B(!0),A();return}A(),f=requestAnimationFrame(F)},k=ci(Ue(pe,`games/${i}/start`),async O=>{if(!c)try{if(a=na(O.val()),!a.players[t])throw new Error("Player is not part of this Stax Match game.");if(g=a.audioOutput,!await x.claim())throw v=!0,new Error("This controller is already active in another tab.");v=!1,y(),y=kR(i,J=>{b=J.filter(te=>te.playerId!==t),A()},J=>A(J.message));const G=await Mt(Ue(pe,`games/${i}/players/${t}/records`)),W=new Map;G.forEach(J=>{const te=wc(J.key,J.val());W.set(te.commandId,te)});for(const J of R.values())W.set(J.commandId,J);const se=[...W.values()].sort((J,te)=>J.clientSeq-te.clientSeq);r=NR(p_(a,a.players[t].level),Math.max(0,...se.map(J=>J.tick)),se,a.seed),o=r.tick,l=Math.max(0,...se.map(J=>J.clientSeq)),await wn(Ue(pe,`games/${i}/players/${t}/epochs/${x.epochId}`),{clientId:x.clientId,startedFromTick:o,startedFromCommandSeq:l,serverTime:Tn()}),c=!0,R.flush(),B(!0),A(),r.phase==="cleared"||r.phase==="lost"?L():f=requestAnimationFrame(F)}catch(G){A(G instanceof Error?G.message:String(G))}},O=>A(O.message)),U=()=>{R.flush()};return window.addEventListener("online",U),{command(O){!c||!r||r.phase!=="playing"||!a||(I(O),g_(r,O,a.seed),o=r.tick,_=`${O.type} · tick ${o}`,(r.phase==="cleared"||r.phase==="lost")&&B(!0),A())},suspend(){!c||d||(d=!0,cancelAnimationFrame(f),n.reset(),B(!0))},resume(){!c||!d||(d=!1,n.reset(),f=requestAnimationFrame(F))},async takeOver(){await x.takeOver()&&(v=!1,c=!0,d=!1,R.flush(),f=requestAnimationFrame(F),A())},destroy(){B(!0),u=!0,k(),T(),y(),cancelAnimationFrame(f),window.removeEventListener("online",U),R.destroy(),x.release()},finishPresentation(){L()}}}function kR(i,e,t){if(!pe)throw new Error("Firebase unavailable.");let n=!1,s=0,r;const a=new Es(Hm.tickRate),o=new Map,l=new Map,c=[],u={clone:h=>structuredClone(h),tick:h=>h.tick,advanceTo:(h,f)=>{for(;h.tick<f&&h.phase!=="cleared"&&h.phase!=="lost";)m_(h)},apply:(h,f)=>{f.type!=="progress/tick"&&g_(h,f,r.seed)},hash:__,phase:h=>h.phase,terminal:h=>h.phase==="cleared"||h.phase==="lost",progress:h=>h.type==="progress/tick"?h.payload:void 0},d=()=>e([...l].map(([h,f])=>{const p=f.snapshot();return{playerId:h,tick:p.displayTick,controllerTick:p.controllerTick,lag:p.lag,state:p.state,hashMatches:p.hashMatches}}));return Mt(Ue(pe,`games/${i}/start`)).then(async h=>{r=na(h.val());let f=0;if(await Promise.all(Object.keys(r.players).map(async _=>{const g=await Mt(Ue(pe,`games/${i}/players/${_}/records`)),m=[];g.forEach(v=>{m.push(wc(v.key,v.val()))}),m.sort((v,b)=>v.clientSeq-b.clientSeq),o.set(_,m);for(const v of m)v.type==="progress/tick"&&(f=Math.max(f,v.tick))})),n)return;for(const _ of Object.keys(r.players)){const g=new Pc(u,p_(r,r.players[_].level),f);l.set(_,g);for(const m of o.get(_)??[])g.receive(m);c.push(ts(Ue(pe,`games/${i}/players/${_}/records`),m=>{try{g.receive(wc(m.key,m.val())),d()}catch(v){t(v instanceof Error?v:new Error(String(v)))}},t))}const p=_=>{if(!n){for(let g=a.consume(_);g>0;g--)for(const m of l.values())m.advance();d(),s=requestAnimationFrame(p)}};d(),s=requestAnimationFrame(p)}).catch(h=>t(h instanceof Error?h:new Error(String(h)))),()=>{n=!0,cancelAnimationFrame(s),c.forEach(h=>h())}}export{oI as C,ZR as G,KR as M,JR as P,aI as Q,uI as S,nI as T,QR as a,jR as b,dy as c,hy as d,tI as e,lI as f,xv as g,Ly as h,Py as i,rI as j,gI as k,kR as l,OR as m,mI as n,eI as o,sI as p,hI as q,iI as r,ty as s,cI as t,vI as u,_I as v};
