import{b as w_,s as Ui,a as ot,e as Rl,f as Rt,c as Qs,o as T_}from"./D7WBsNp9.js";import{i as As}from"./CNpYNPB2.js";import{g as E_,w as Vr,o as Rc,a as A_,r as C_,d as R_}from"./CIsv7tgC.js";import{T as Om,U as I_,h as Eu,b as P_,be as D_,bf as If,aj as L_,as as Pf,aw as Df,ar as Lf,a as Uf,bg as U_,r as N_,p as In,s as pe,aT as cn,z as At,v as Me,g as T,A as Bi,d as Pn,m as st,f as Qt,j as Lt,i as dt,t as Jt,u as Se,B as Ii,bh as Fm,y as on,bi as wi,ah as bi,o as Ss,bj as pi,ai as jt,bk as Il,ak as id,al as ms,k as _n,C as sd}from"./C2YMu1xD.js";import{B as km,p as Ye,i as An,r as po,s as rd,a as O_,b as Nf}from"./CLo1wlLn.js";import{x as F_,A as mo,h as jn,s as tt,k as hi,l as Of,m as ge,y as _t,p as Oe,z as Pl,n as oi,o as li,q as k_,v as B_,t as z_,B as ns,C as Ff,D as ui,E as Ga}from"./Dtcy_RKZ.js";import{s as V_}from"./BUOEY_XU.js";import{L as G_,e as Cn,i as Jn,b as ad,P as It,r as H_,a as ha,f as Ph,p as Dh,h as W_,j as Io,k as X_,T as Bm,l as Au,m as zm,n as Vm,o as Gm,q as q_,Q as Hm,t as $_,u as Y_,v as Z_,w as K_,x as j_,y as J_,z as Q_,A as ev,B as tv,D as nv,E as iv,S as Wm,F as Xm,G as sv,H as rv,I as av,J as ov}from"./DHzD1_Fl.js";import{b as Dl}from"./Ck97Rx7k.js";import{p as qm}from"./D4Caz1gY.js";function Ic(i,e,...t){var n=new km(i);Om(()=>{const s=e()??null;n.ensure(s,s&&(r=>s(r,...t)))},I_)}const lv=Symbol("NaN");function $m(i,e,t){Eu&&P_();var n=new km(i),s=!D_();Om(()=>{var r=e();r!==r&&(r=lv),s&&r!==null&&typeof r=="object"&&(r={}),n.ensure(r,t)})}function Ll(i,e,t,n){var s=i[If];if(Eu||s!==e){var r=F_(e);(!Eu||r!==i.getAttribute("style"))&&(r==null?i.removeAttribute("style"):i.style.cssText=r),i[If]=e}return n}function od(i,e){var t=Uf,n=Df,s=i();const r=Vr(s,a=>{var o=s!==i(),l,c=Df,u=Uf;Pf(n),Lf(t);try{l=U_(()=>{N_(()=>{const f=i();o&&a(f)})})}finally{Pf(c),Lf(u)}return o=!0,l});return e?{set:e,update:a=>e(a(i())),subscribe:r.subscribe}:{subscribe:r.subscribe}}function Pc(i){let e;const t=w_(s=>{let r=!1;const a=i.subscribe(o=>{e=o,r&&s()});return r=!0,a});function n(){return L_()?(t(),e):E_(i)}return"set"in i?{get current(){return n()},set current(s){i.set(s)}}:{get current(){return n()}}}const cv=""+new URL("../assets/05. Chill.C8foJhTx.mp3",import.meta.url).href,hv=""+new URL("../assets/06. Chill Clear.-oz0izif.mp3",import.meta.url).href,uv=""+new URL("../assets/03. Fever.DOR2z6Jo.mp3",import.meta.url).href,dv=""+new URL("../assets/04. Fever Clear.DCfLhPTS.mp3",import.meta.url).href,kf=""+new URL("../assets/12. Combo Fanfare 1.CrabW0Of.mp3",import.meta.url).href;function jR(i,e){In(e,!1);const t=st(),n=st();let s=Ye(e,"state",8),r=Ye(e,"enabled",8,!1),a=Ye(e,"rainSignal",8,0),o=st(),l=st(0),c=st(0),u=st();const f=h=>h%2?{music:uv,clear:dv}:{music:cv,clear:hv};Rc(()=>{const h=()=>{pe(u,kf),cn(c)},d=p=>{pe(u,f(p.detail).clear),cn(c)};return window.addEventListener("drm-rain",h),window.addEventListener("drm-clear",d),()=>{window.removeEventListener("drm-rain",h),window.removeEventListener("drm-clear",d)}}),At(()=>Me(s()),()=>{pe(t,s()?.phase==="playing"?f(s().level).music:void 0)}),At(()=>Me(s()),()=>{pe(n,s()?`pill:${s().level}`:"")}),At(()=>(Me(s()),Me(a()),T(l),T(c),T(o)),()=>{s()&&(a()>T(l)?(pe(u,kf),cn(c)):s().phase==="countdown"&&T(o)==="playing"&&(pe(u,f(s().level).clear),cn(c)),pe(l,a()),pe(o,s().phase))}),Bi(),As(),mo(i,{get enabled(){return r()},get loopUrl(){return T(t)},get loopKey(){return T(n)},get cueUrl(){return T(u)},get cueSignal(){return T(c)}}),Pn()}var fv=Rt('<button class="svelte-e6s17f"> </button>'),pv=Rt('<small class="svelte-e6s17f"> </small>'),mv=Rt('<div class="match-result svelte-e6s17f" role="status" aria-live="polite"><h1 class="svelte-e6s17f"> </h1><!> <!> <!> <!></div>');function JR(i,e){In(e,!1);let t=Ye(e,"title",8,"GAME OVER"),n=Ye(e,"action",8,"PLAY AGAIN"),s=Ye(e,"ready",8,0),r=Ye(e,"total",8,0),a=Ye(e,"disabled",8,!1),o=Ye(e,"interactive",8,!0),l=Ye(e,"level",8,0),c=Ye(e,"changeLevel",8,()=>{}),u=Ye(e,"activate",8,()=>{});Rc(()=>{const w=M=>{!a()&&M.key.toLowerCase()==="a"&&!M.repeat&&(M.preventDefault(),u()())};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)}),As();var f=mv(),h=Qt(f),d=Qt(h,!0);Lt(h);var p=dt(h);V_(p,e,"default",{});var _=dt(p,2);{var g=w=>{G_(w,{get level(){return l()},get disabled(){return a()},get change(){return c()},get activate(){return u()}})};An(_,w=>{o()&&w(g)})}var m=dt(_,2);{var v=w=>{var M=fv(),C=Qt(M,!0);Lt(M),Jt(()=>{M.disabled=a(),Ui(C,n())}),Rl("click",M,function(...x){u()?.apply(this,x)}),ot(w,M)};An(m,w=>{o()&&w(v)})}var b=dt(m,2);{var y=w=>{var M=pv(),C=Qt(M);Lt(M),Jt(()=>Ui(C,`${s()??""}/${r()??""} ready`)),ot(w,M)};An(b,w=>{r()>0&&w(y)})}Lt(f),Jt(()=>Ui(d,t())),ot(i,f),Pn()}var gv=Rt('<span aria-hidden="true"> </span>'),_v=Rt('<li class="svelte-18574qx"><span class="rank svelte-18574qx"></span><strong class="svelte-18574qx"> </strong><span class="win-track svelte-18574qx"></span></li>'),vv=Rt('<section class="match-standings svelte-18574qx"><h2 class="svelte-18574qx"> </h2> <ol class="svelte-18574qx"></ol></section>');function QR(i,e){let t=Ye(e,"entries",24,()=>[]),n=Ye(e,"title",8,"RACE TO THREE"),s=Ye(e,"target",8,3);var r=vv(),a=Qt(r),o=Qt(a,!0);Lt(a);var l=dt(a,2);Cn(l,5,t,Jn,(c,u,f)=>{var h=_v(),d=Qt(h);d.textContent=f+1;var p=dt(d),_=Qt(p,!0);Lt(p);var g=dt(p);Cn(g,5,()=>(Me(s()),Se(()=>Array(s()))),Jn,(m,v,b)=>{var y=gv();let w;var M=Qt(y,!0);Lt(y),Jt(()=>{w=jn(y,1,"svelte-18574qx",null,w,{earned:b<T(u).score}),Ui(M,(T(u),Se(()=>b<T(u).score?"★":"☆")))}),ot(m,y)}),Lt(g),Lt(h),Jt(()=>{Ui(_,(T(u),Se(()=>T(u).name))),tt(g,"aria-label",(T(u),Me(s()),Se(()=>`${T(u).score} of ${s()} wins`)))}),ot(c,h)}),Lt(l),Lt(r),Jt(()=>{tt(r,"aria-label",n()),Ui(o,n())}),ot(i,r)}function Cu(i){let e=i|0;return e^=e<<13,e^=e>>>17,e^=e<<5,e>>>0}function yv(i){return i>>>0||1}const Ht=8,ei=16,mn=(i,e)=>i*Ht+e;function Ra(i){return i.rng=Cu(i.rng),i.rng/4294967296}function xv(i){const e=Cu(i.rng),t=Cu(e);return[e,t].map(n=>It.colors[Math.floor(n/4294967296*It.colors.length)])}function ld(i){return{0:[[0,0],[0,1]],1:[[0,0],[-1,0]],2:[[0,1],[0,0]],3:[[-1,0],[0,0]]}[i.orientation].map(([t,n])=>[i.row+t,i.col+n])}function cd(i,e){return ld(e).every(([t,n])=>t>=0&&t<ei&&n>=0&&n<Ht&&!i.board[mn(t,n)])}function bv(i){for(let e=0;e<ei;e++)for(let t=0;t<Ht;t++){const n=i[mn(e,t)];if(n&&(t<=Ht-4&&[1,2,3].every(s=>i[mn(e,t+s)]?.color===n.color)||e<=ei-4&&[1,2,3].every(s=>i[mn(e+s,t)]?.color===n.color)))return!0}return!1}function Ym(i){i.softDrop=!1;const e={id:i.nextId++,row:It.spawn.row,col:It.spawn.col,orientation:0,colors:[It.colors[Math.floor(Ra(i)*It.colors.length)],It.colors[Math.floor(Ra(i)*It.colors.length)]]};i.active=cd(i,e)?e:null,i.active||(i.phase="lost")}function Sv(i){return Math.min(It.maxVirusCount,(i+1)*It.virusesPerLevel)}function Mv(i){return Math.max(It.minimumGravityTicks,It.initialGravityTicks-i.level*It.gravityTicksPerLevel-Math.floor(i.pills/It.pillsPerSpeedIncrease))}function Zm(i){i.board.fill(null),i.active=null,i.pills=0,i.gravityCounter=0,i.viruses=Sv(i.level),i.phase="playing",i.softDrop=!1,i.chain=0,i.resolving=!1,delete i.resolutionLineColors,delete i.pendingRain,delete i.fallingRain,delete i.rainGravityCounter,delete i.countdownEndsAt;let e=0,t=0;for(;e<i.viruses&&t++<1e5;){const n=It.virusRowStart+Math.floor(Ra(i)*(It.virusRowEnd-It.virusRowStart+1)),s=Math.floor(Ra(i)*Ht),r=mn(n,s);if(!i.board[r]){if(i.board[r]={kind:"virus",color:It.colors[Math.floor(Ra(i)*It.colors.length)],id:`l${i.level}v${e}`},bv(i.board)){i.board[r]=null;continue}e++}}i.viruses=e,Ym(i)}function Km(i,e=0,t=0){const n={rulesVersion:ad,tick:0,level:t,pills:0,gravityCounter:0,board:Array(Ht*ei).fill(null),active:null,rng:yv(i),nextId:1,viruses:0,phase:"playing",softDrop:!1,chain:0,resolving:!1};return Zm(n),n}function hd(i){const e=new Set,t=[];for(let s=0;s<ei;s++)for(let r=0;r<Ht;r++){const a=i.board[mn(s,r)];if(a){if(r===0||i.board[mn(s,r-1)]?.color!==a.color){const o=[mn(s,r)];for(let l=r+1;l<Ht&&i.board[mn(s,l)]?.color===a.color;l++)o.push(mn(s,l));o.length>=4&&(o.forEach(l=>e.add(l)),t.push(a.color))}if(s===0||i.board[mn(s-1,r)]?.color!==a.color){const o=[mn(s,r)];for(let l=s+1;l<ei&&i.board[mn(l,r)]?.color===a.color;l++)o.push(mn(l,r));o.length>=4&&(o.forEach(l=>e.add(l)),t.push(a.color))}}}const n=[];for(const s of[...e].sort((r,a)=>r-a))i.board[s]?.kind==="virus"&&(n.push(i.board[s].color),i.viruses--),i.board[s]=null;return e.size&&i.viruses===0&&(i.phase="countdown",i.countdownEndsAt=i.tick+It.levelCountdownTicks,i.active=null,i.softDrop=!1,i.resolving=!1),e.size>0?{lineColors:t}:void 0}function Ru(i){const e=i.resolutionLineColors??[];return delete i.resolutionLineColors,e.length>0?[{type:"clear",tick:i.tick,chain:i.chain,lineColors:e}]:[]}function Dc(i){const e=i.pendingRain?.shift();if(i.pendingRain?.length===0&&delete i.pendingRain,!e){Ym(i);return}const t=e.colors.map((n,s)=>({attackId:e.attackId,item:s,color:n,column:e.columns[s],row:0}));if(t.some(n=>i.board[mn(0,n.column)])){i.phase="lost",i.active=null,i.softDrop=!1;return}i.fallingRain=t,i.rainGravityCounter=0}function wv(i){const e=i.fallingRain;if(!e||(i.rainGravityCounter=(i.rainGravityCounter??0)+1,i.rainGravityCounter<It.rainGravityTicks))return;i.rainGravityCounter=0;const t=[];for(const s of e){const r=s.row+1;r>=ei||i.board[mn(r,s.column)]?i.board[mn(s.row,s.column)]={kind:"pill",color:s.color,id:`g${s.attackId}-${s.item}x`}:t.push({...s,row:r})}if(t.length>0){i.fallingRain=t;return}delete i.fallingRain,delete i.rainGravityCounter,hd(i)?(i.chain=1,i.phase==="playing"&&(i.resolving=!0)):Dc(i)}function Tv(i){const e=new Map;i.board.forEach((c,u)=>{if(c?.kind!=="pill")return;const f=c.id.slice(0,-1),h=e.get(f)??[];h.push(u),e.set(f,h)});const t=[];for(const c of e.values())c.length===2&&Math.abs(Math.floor(c[0]/Ht)-Math.floor(c[1]/Ht))+Math.abs(c[0]%Ht-c[1]%Ht)===1?t.push(c):c.forEach(f=>t.push([f]));const n=new Map;t.forEach((c,u)=>c.forEach(f=>n.set(f,u)));const s=t.map((c,u)=>u).sort((c,u)=>Math.max(...t[u])-Math.max(...t[c])),r=new Set;let a=!0;for(;a;){a=!1;for(const c of s){if(r.has(c))continue;t[c].every(f=>{if(Math.floor(f/Ht)===ei-1)return!1;const h=f+Ht,d=n.get(h);return d===c||!i.board[h]||d!==void 0&&r.has(d)})&&(r.add(c),a=!0)}}const o=[...r].flatMap(c=>t[c]),l=o.map(c=>({from:c,to:c+Ht,cell:i.board[c]}));return l.forEach(({from:c})=>{i.board[c]=null}),l.forEach(({to:c,cell:u})=>{i.board[c]=u}),o.length>0}function jm(i){if(!i.active)return[];const e=i.active;ld(e).forEach(([n,s],r)=>{i.board[mn(n,s)]={kind:"pill",color:e.colors[r],id:`p${e.id}${r}`}}),i.active=null,i.pills++,i.gravityCounter=0,i.chain=0;const t=hd(i);return t?(i.resolutionLineColors=[...t.lineColors],i.chain=1,i.phase==="playing"&&(i.resolving=!0)):Dc(i),t&&!i.resolving?Ru(i):[]}function Iu(i,e,t){if(!i.active)return!1;const n={...i.active,row:i.active.row+e,col:i.active.col+t};return cd(i,n)?(i.active=n,delete i.active.groundedAt,!0):!1}function Ev(i,e){i.phase==="playing"&&(i.pendingRain=[...i.pendingRain??[],{attackId:e.payload.attackId,colors:[...e.payload.colors],columns:[...e.payload.columns]}],!i.active&&!i.resolving&&!i.fallingRain&&Dc(i))}function Ha(i,e){if(e.type==="attack/rain")return Ev(i,e),[];if(i.phase!=="playing"||!i.active)return[];if(e.type==="input/move")Iu(i,0,e.payload.dx);else if(e.type==="input/rotate"){const t=i.active.orientation%2===1,n=e.payload.direction==="clockwise"?1:3,s=(i.active.orientation+n)%4,r=[{...i.active,orientation:s}];t?r.push({...i.active,col:i.active.col-1,orientation:s}):r.push({...i.active,col:i.active.col+1,orientation:s},{...i.active,col:i.active.col-1,orientation:s});const a=r.find(o=>cd(i,o));a&&(i.active=a,delete i.active.groundedAt)}else if(e.type==="input/soft-drop-start")i.softDrop=!0;else if(e.type==="input/soft-drop-end")i.softDrop=!1;else if(e.type==="input/hard-drop"&&It.hardDrop){for(;Iu(i,1,0););return jm(i)}return[]}function ud(i){if(i.phase==="lost")return[];if(i.tick++,i.phase==="countdown")return i.countdownEndsAt!==void 0&&i.tick>=i.countdownEndsAt&&(i.level++,Zm(i)),[];if(i.resolving){if(i.tick%It.resolutionGravityTicks!==0)return[];if(Tv(i))return[];const t=hd(i);return t?(i.resolutionLineColors&&(i.resolutionLineColors=[...i.resolutionLineColors,...t.lineColors]),i.chain++,i.resolving?[]:Ru(i)):(i.resolving=!1,Dc(i),Ru(i))}if(i.fallingRain)return wv(i),[];if(!i.active)return[];const e=i.softDrop?It.softDropTicks:Mv(i);return i.gravityCounter++,i.gravityCounter>=e&&(i.gravityCounter=0,Iu(i,1,0)||(i.active.groundedAt??=i.tick)),i.active?.groundedAt!==void 0&&i.tick-i.active.groundedAt>=It.lockDelayTicks?jm(i):[]}function Av(i){return i.active?ld(i.active).map(([e,t],n)=>({row:e,col:t,cell:{kind:"pill",color:i.active.colors[n],id:`a${i.active.id}${n}`}})):[]}function Cv(i){return(i.fallingRain??[]).map(e=>({row:e.row,col:e.column,cell:{kind:"pill",color:e.color,id:`g${e.attackId}-${e.item}x`}}))}const Rv=2,Iv=4;function Pv(i){return i.lineColors.length>=Rv?i.lineColors.slice(0,Iv):[]}function Dv(i){let e=2166136261;for(const t of i)e^=t.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0}function Lv(i,e){const t=Array.from({length:Ht},(s,r)=>r);let n=Dv(i);for(let s=t.length-1;s>0;s--){n=Math.imul(n,1664525)+1013904223>>>0;const r=n%(s+1);[t[s],t[r]]=[t[r],t[s]]}return t.slice(0,Math.min(e,Ht))}const Jm=3;function dd(i,e,t,n=0){const s=e.filter(({playerId:d})=>i.includes(d)).sort((d,p)=>d.tick-p.tick||i.indexOf(d.playerId)-i.indexOf(p.playerId)),r=new Map(s.map(d=>[d.playerId,d])),a=s.find(({result:d})=>d==="cleared"),o=new Set(s.filter(({result:d})=>d==="lost").map(({playerId:d})=>d)),l=i.length>1&&o.size===i.length-1?i.find(d=>!o.has(d)):void 0,c=!!(a||l)||r.size===i.length,u=c?a?.playerId??l:void 0,f=t.filter(d=>i.includes(d)),h=Object.fromEntries(i.map(d=>[d,d===u?1:0]));return{playerIds:i,terminalPlayerIds:[...r.keys()],readyPlayerIds:f,finished:c,winnerId:u,draw:c&&i.length>1&&u===void 0,allReady:c&&i.every(d=>f.includes(d)),terminalResults:Object.fromEntries([...r].map(([d,p])=>[d,p.result])),terminalTicks:Object.fromEntries([...r].map(([d,p])=>[d,p.tick])),round:n,matchComplete:!1,roundPoints:h,scores:Object.fromEntries(i.map(d=>[d,h[d]]))}}function Uv(i,e,t){if(!Number.isInteger(e)||e<i.tick)throw new Error("Target tick must not precede the current state.");const n=new Map;for(const a of t){const o=n.get(a.commandId);if(o&&JSON.stringify(o)!==JSON.stringify(a))throw new Error(`Conflicting replay command identity: ${a.commandId}`);n.set(a.commandId,a)}const s=[...n.values()].sort((a,o)=>a.tick-o.tick||a.clientSeq-o.clientSeq||a.commandId.localeCompare(o.commandId));let r=0;for(;r<s.length&&s[r].tick<i.tick;)r++;for(;i.tick<=e;){for(;r<s.length&&s[r].tick===i.tick;)Ha(i,s[r].input),r++;if(i.tick===e)break;const a=i.tick;if(ud(i),i.tick===a)break}return i}function Lc(i){return{rulesVersion:i.rulesVersion,tick:i.tick,level:i.level,pills:i.pills,gravityCounter:i.gravityCounter,...i.countdownEndsAt===void 0?{}:{countdownEndsAt:i.countdownEndsAt},board:i.board.map(e=>e?{...e}:null),active:i.active?{...i.active,colors:[...i.active.colors]}:null,rng:i.rng,nextId:i.nextId,viruses:i.viruses,phase:i.phase,softDrop:i.softDrop,chain:i.chain,resolving:i.resolving,...i.resolutionLineColors?.length?{resolutionLineColors:[...i.resolutionLineColors]}:{},...i.pendingRain?.length?{pendingRain:i.pendingRain.map(e=>({attackId:e.attackId,colors:[...e.colors],columns:[...e.columns]}))}:{},...i.fallingRain?.length?{fallingRain:i.fallingRain.map(e=>({...e}))}:{},...i.rainGravityCounter===void 0?{}:{rainGravityCounter:i.rainGravityCounter}}}const go=["cyan","pink","yellow"],pn=(i,e=0)=>Number.isInteger(i)&&i>=e,_o=(i,e)=>Object.keys(i).every(t=>e.includes(t)),Nv=i=>{if(!i||typeof i!="object")return!1;const e=i;return _o(e,["kind","color","id"])&&(e.kind==="virus"||e.kind==="pill")&&go.includes(e.color)&&typeof e.id=="string"&&e.id.length>0&&e.id.length<=160},Ov=i=>{if(!i||typeof i!="object")return!1;const e=i;return _o(e,["id","row","col","orientation","colors","groundedAt"])&&pn(e.id,1)&&pn(e.row)&&pn(e.col)&&[0,1,2,3].includes(e.orientation)&&Array.isArray(e.colors)&&e.colors.length===2&&e.colors.every(t=>go.includes(t))&&(e.groundedAt===void 0||pn(e.groundedAt))},Fv=i=>{if(!i||typeof i!="object")return!1;const e=i;return _o(e,["attackId","colors","columns"])&&typeof e.attackId=="string"&&e.attackId.length<=128&&Array.isArray(e.colors)&&e.colors.length>=2&&e.colors.length<=4&&e.colors.every(t=>go.includes(t))&&Array.isArray(e.columns)&&e.columns.length===e.colors.length&&e.columns.every(t=>pn(t)&&t<Ht)&&new Set(e.columns).size===e.columns.length},kv=i=>{if(!i||typeof i!="object")return!1;const e=i;return _o(e,["attackId","item","color","column","row"])&&typeof e.attackId=="string"&&e.attackId.length<=128&&pn(e.item)&&e.item<4&&go.includes(e.color)&&pn(e.column)&&e.column<Ht&&pn(e.row)&&e.row<ei};function Bv(i){if(!i||typeof i!="object")throw new Error("Invalid serialized bottle state.");const e=i;if(!_o(e,["rulesVersion","tick","level","pills","gravityCounter","countdownEndsAt","board","active","rng","nextId","viruses","phase","softDrop","chain","resolving","resolutionLineColors","pendingRain","fallingRain","rainGravityCounter"])||e.rulesVersion!==ad||!pn(e.tick)||!pn(e.level)||!pn(e.pills)||!pn(e.gravityCounter)||e.countdownEndsAt!==void 0&&(!pn(e.countdownEndsAt)||e.countdownEndsAt<e.tick)||!Array.isArray(e.board)||e.board.length!==Ht*ei||!e.board.every(t=>t===null||Nv(t))||e.active!==null&&!Ov(e.active)||!pn(e.rng)||e.rng>4294967295||!pn(e.nextId,1)||!pn(e.viruses)||e.viruses>80||!["playing","countdown","lost"].includes(e.phase)||e.phase==="countdown"!=(e.countdownEndsAt!==void 0)||typeof e.softDrop!="boolean"||!pn(e.chain)||typeof e.resolving!="boolean"||e.resolutionLineColors!==void 0&&(!Array.isArray(e.resolutionLineColors)||!e.resolutionLineColors.every(t=>go.includes(t)))||e.pendingRain!==void 0&&(!Array.isArray(e.pendingRain)||!e.pendingRain.every(Fv))||e.fallingRain!==void 0&&(!Array.isArray(e.fallingRain)||e.fallingRain.length<1||e.fallingRain.length>4||!e.fallingRain.every(kv))||e.rainGravityCounter!==void 0&&(!pn(e.rainGravityCounter)||e.rainGravityCounter>=It.rainGravityTicks)||e.fallingRain===void 0!=(e.rainGravityCounter===void 0))throw new Error("Invalid serialized bottle state.");return e}function fd(i){return Lc(Bv(i))}function Wa(i){const e=JSON.stringify(Lc(i));let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return`pb3-${(t>>>0).toString(16).padStart(8,"0")}`}class Uc{adapter;displayTick;state;checkpoint;pending=new Map;identities=new Map;controllerTick;reportedStateHash;hashMatches=!0;constructor(e,t,n=0){this.adapter=e,this.displayTick=n,this.state=e.clone(t),this.checkpoint={clientSeq:0,tick:e.tick(t),state:e.clone(t)},e.advanceTo(this.state,n)}receive(e){const t=JSON.stringify(e),n=this.identities.get(e.commandId);if(n&&n!==t)throw new Error(`Conflicting controller record identity: ${e.commandId}`);if(n||(this.identities.set(e.commandId,t),e.clientSeq<=this.checkpoint.clientSeq))return;const s=this.pending.get(e.clientSeq);if(s&&JSON.stringify(s)!==t)throw new Error(`Conflicting controller sequence: ${e.clientSeq}`);this.pending.set(e.clientSeq,e),this.adapter.progress(e)&&(this.controllerTick===void 0||e.tick>=this.controllerTick)&&(this.controllerTick=e.tick),this.processAvailable()}advance(){this.displayTick++,this.adapter.advanceTo(this.state,this.displayTick),this.processAvailable()}snapshot(){return{displayTick:this.displayTick,controllerTick:this.controllerTick,lag:this.controllerTick===void 0?void 0:this.displayTick-this.controllerTick,state:this.adapter.clone(this.state),stateHash:this.adapter.hash(this.state),reportedStateHash:this.reportedStateHash,hashMatches:this.hashMatches}}processAvailable(){for(;;){const e=this.pending.get(this.checkpoint.clientSeq+1);if(!e||e.tick>this.displayTick)return;if(e.tick<this.checkpoint.tick)throw new Error("Controller record tick precedes its checkpoint.");const t=this.adapter.clone(this.checkpoint.state);if(this.adapter.advanceTo(t,e.tick),this.adapter.tick(t)!==e.tick){if(!this.adapter.terminal?.(t))throw new Error("Controller record could not reach its declared tick.");const s=this.adapter.progress(e);s&&(this.reportedStateHash=s.stateHash,this.hashMatches=!1),this.checkpoint={clientSeq:e.clientSeq,tick:this.adapter.tick(t),state:this.adapter.clone(t)},this.pending.delete(e.clientSeq),this.state=t;continue}const n=this.adapter.progress(e);n?(this.reportedStateHash=n.stateHash,this.hashMatches=this.adapter.hash(t)===n.stateHash&&this.adapter.phase(t)===n.phase):this.adapter.apply(t,e),this.checkpoint={clientSeq:e.clientSeq,tick:e.tick,state:this.adapter.clone(t)},this.pending.delete(e.clientSeq),this.adapter.advanceTo(t,this.displayTick),this.state=t}}}function zv(i,e){for(;i.tick<e&&i.phase!=="lost";)ud(i)}class Vv extends Uc{constructor(e,t=0){super({clone:n=>fd(Lc(n)),tick:n=>n.tick,advanceTo:zv,apply:(n,s)=>{s.type!=="progress/tick"&&Ha(n,s)},hash:Wa,phase:n=>n.phase,terminal:n=>n.phase==="lost",progress:n=>n.type==="progress/tick"?n.payload:void 0},e,t)}}function pd(i,e,t){return Object.fromEntries(e.playerIds.map(n=>[n,n===e.winnerId?1:0]))}var Gv=Rt('<canvas class="preview-pill svelte-1jw6p41" width="40" height="20"></canvas>'),Hv=Rt('<div class="next-pill svelte-1jw6p41"><!></div>'),Wv=Rt('<div class="bottle-shell svelte-1jw6p41"><!> <canvas width="184" height="360"></canvas></div>');function eI(i,e){In(e,!1);const t=st();let n=Ye(e,"state",8),s=Ye(e,"label",8,"Pill bottle"),r=Ye(e,"showPreview",8,!0),a=st(),o=st(),l="",c=st(""),u="",f;const h=10,d=6,p=11,_=2,g={cyan:"#39d9e6",pink:"#ff4f91",yellow:"#ffd84a"};function m(L){return L.kind==="pill"?L.id.slice(0,-1):""}function v(L,O){const F=d+O.col*h,U=p+O.row*h;L.fillStyle="#08090d",L.beginPath(),L.roundRect(F+.25,U+1.25,9.5,7,3),L.fill(),L.fillRect(F+2,U+.25,2.25,2.5),L.fillRect(F+5.75,U+.25,2.25,2.5),L.fillRect(F+1.25,U+7,2.75,2.5),L.fillRect(F+6,U+7,2.75,2.5),L.fillStyle=g[O.color],L.beginPath(),L.roundRect(F+1.25,U+2,7.5,5.5,2),L.fill(),L.fillRect(F+2.75,U+1,1.25,2),L.fillRect(F+6,U+1,1.25,2),L.fillRect(F+2,U+7,1.5,1.5),L.fillRect(F+6.5,U+7,1.5,1.5),L.fillStyle="rgba(255,255,255,.34)",L.fillRect(F+2,U+2.25,5.75,.75),L.fillStyle="#08090d",L.fillRect(F+2.5,U+4,1.5,1.75),L.fillRect(F+6,U+4,1.5,1.75),L.fillRect(F+4.25,U+6.25,1.5,.75)}function b(L,O,F){return L===1?[F,0,0,F]:L===-1?[0,F,F,0]:O===1?[F,F,0,0]:O===-1?[0,0,F,F]:F}function y(L,O,F,U=d,N=p){const B=F.find(re=>re!==O&&m(re)===m(O)),H=B?.col===O.col?0:(B?.col??O.col)-O.col,oe=B?.row===O.row?0:(B?.row??O.row)-O.row,ee=U+O.col*h,ie=N+O.row*h,Pe=b(H,oe,4);L.fillStyle="#08090d",L.beginPath(),L.roundRect(ee,ie,10,10,Pe),L.fill();const ut=ee+(H===-1?0:1.25),De=ie+(oe===-1?0:1.25),J=H===0?7.5:8.75,fe=oe===0?7.5:8.75;L.fillStyle=g[O.color],L.beginPath(),L.roundRect(ut,De,J,fe,b(H,oe,3)),L.fill(),L.save(),L.beginPath(),L.roundRect(ut,De,J,fe,b(H,oe,3)),L.clip(),oe!==-1&&(L.fillStyle="rgba(255,255,255,.38)",L.fillRect(ee+(H===-1?0:1.75),ie+1.75,H===0?6.5:8.25,1.25)),oe!==1&&(L.fillStyle="rgba(0,0,0,.28)",L.fillRect(ee+(H===-1?0:1.75),ie+7.25,H===0?6.5:8.25,1.25)),L.restore(),L.fillStyle="#08090d",H===1&&L.fillRect(ee+9.75,ie+1.25,.5,7.5),oe===1&&L.fillRect(ee+1.25,ie+9.75,7.5,.5)}function w(){if(!T(o)||n().phase!=="playing")return;const L=T(o).getContext("2d");if(!L)return;L.setTransform(1,0,0,1,0,0),L.clearRect(0,0,T(o).width,T(o).height),L.setTransform(_,0,0,_,0,0);const O=[{id:"previewa",kind:"pill",color:T(t)[0],row:0,col:0},{id:"previewb",kind:"pill",color:T(t)[1],row:0,col:1}];for(const F of O)y(L,F,O,0,0)}function M(){if(!T(a))return;const L=`${n().phase}|${n().board.map(U=>U?`${U.id}:${U.color}`:"").join(",")}|${n().active?`${n().active.id}:${n().active.row}:${n().active.col}:${n().active.orientation}:${n().active.colors.join(":")}`:""}|${n().fallingRain?.map(U=>`${U.attackId}:${U.item}:${U.row}`).join(",")??""}`;if(L===l)return;l=L;const O=T(a).getContext("2d");if(!O)return;O.setTransform(1,0,0,1,0,0),O.clearRect(0,0,T(a).width,T(a).height),O.setTransform(_,0,0,_,0,0),O.imageSmoothingEnabled=!0,O.fillStyle="#606477",O.fillRect(26,0,40,3),O.fillRect(26,0,3,11),O.fillRect(63,0,3,11),O.fillRect(3,8,86,169),O.fillStyle="#08090d",O.fillRect(6,11,80,163),O.fillStyle="#050609",O.fillRect(89,13,3,164),O.fillRect(8,177,84,3),O.fillStyle="#0d0f14";for(let U=1;U<Ht;U++)O.fillRect(d+U*h,p,.35,ei*h);for(let U=1;U<ei;U++)O.fillRect(d,p+U*h,Ht*h,.35);const F=[];n().board.forEach((U,N)=>{U&&F.push({...U,row:Math.floor(N/Ht),col:N%Ht})});for(const U of Av(n()))F.push({...U.cell,row:U.row,col:U.col});for(const U of Cv(n()))F.push({...U.cell,row:U.row,col:U.col});for(const U of F)U.kind==="virus"?v(O,U):y(O,U,F);w()}function C(){if(!T(a))return;const L=n().board.filter(H=>H?.id.startsWith("g")).length,O=`${n().viruses}:${n().pills}:${n().phase}:${L}`;if(!u){u=O;return}if(O===u)return;const[F,U,N,B]=u.split(":");u=O,pe(c,L>Number(B)?"rain":n().viruses<Number(F)?"clear":n().phase!==N?"finish":n().pills>Number(U)?"lock":""),T(c)&&(f&&clearTimeout(f),f=setTimeout(()=>pe(c,""),420))}Rc(()=>(M(),C(),()=>{f&&clearTimeout(f)})),At(()=>Me(n()),()=>{pe(t,xv(n()))}),At(()=>Me(n()),()=>{n(),M(),C()}),Bi(),As();var x=Wv(),E=Qt(x);{var R=L=>{var O=Hv(),F=Qt(O);{var U=N=>{var B=Gv();Dl(B,H=>pe(o,H),()=>T(o)),ot(N,B)};An(F,N=>{Me(n()),Se(()=>n().phase==="playing")&&N(U)})}Lt(O),Jt(()=>{tt(O,"aria-label",(T(t),Se(()=>`Next pill: ${T(t)[0]} and ${T(t)[1]}`))),tt(O,"aria-hidden",(Me(n()),Se(()=>n().phase!=="playing")))}),ot(L,O)};An(E,L=>{r()&&L(R)})}var D=dt(E,2);let z;Dl(D,L=>pe(a,L),()=>T(a)),Lt(x),Jt((L,O,F)=>{z=jn(D,1,"bottle svelte-1jw6p41",null,z,{clear:T(c)==="clear",lock:T(c)==="lock",finish:T(c)==="finish",rain:T(c)==="rain"}),tt(D,"aria-label",s()),tt(D,"data-cell-count",Ht*ei),tt(D,"data-virus-count",(Me(n()),Se(()=>n().viruses))),tt(D,"data-next-colors",L),tt(D,"data-active-pill",(Me(n()),Se(()=>n().active?"true":"false"))),tt(D,"data-active-pill-id",(Me(n()),Se(()=>n().active?.id??""))),tt(D,"data-pending-rain-count",(Me(n()),Se(()=>n().pendingRain?.length??0))),tt(D,"data-rain-rows",O),tt(D,"data-garbage-count",F)},[()=>(T(t),Se(()=>T(t).join(","))),()=>(Me(n()),Se(()=>n().fallingRain?.map(L=>L.row).join(",")??"")),()=>(Me(n()),Se(()=>n().board.filter(L=>L?.id.startsWith("g")).length))]),ot(i,x),Pn()}class Cs{lastTime;accumulator=0;tickRate;maximumCatchUpMs;constructor(e,t=250){if(!Number.isFinite(e)||e<=0)throw new Error("Tick rate must be positive.");this.tickRate=e,this.maximumCatchUpMs=t}consume(e){if(this.lastTime===void 0)return this.lastTime=e,0;this.accumulator+=Math.min(Math.max(0,e-this.lastTime),this.maximumCatchUpMs),this.lastTime=e;const t=1e3/this.tickRate,n=Math.floor(this.accumulator/t);return this.accumulator-=n*t,n}reset(){this.lastTime=void 0,this.accumulator=0}}async function Nc(i,e){if(!hi?.currentUser||!ge)throw new Error("Firebase is unavailable.");const t=hi.currentUser.uid,n=Oe(ge,`games/${i}/rematch/ready/${t}`);if(!Number.isInteger(e)||e<0||e>20)throw new Error("Level must be between 0 and 20.");(await _t(n)).exists()||await oi(n,{playerId:t,level:e,serverTime:li()})}async function Oc(i,e,t){if(!hi?.currentUser||!Of||!ge)throw new Error("Firebase is unavailable.");const n=await _t(Oe(ge,`games/${i}/start`));if(!n.exists())throw new Error("The previous game no longer exists.");const s=e(n.val());if(!s.players[hi.currentUser.uid])return;const r=await _t(Oe(ge,`games/${i}/rematch/ready`)),a=new Map;if(r.forEach(d=>{const p=d.val();p?.playerId===d.key&&Number.isInteger(p.level)&&a.set(p.playerId,p.level)}),!Object.keys(s.players).every(d=>a.has(d)))return;const o=crypto.randomUUID(),l=Oe(ge,`games/${i}/rematch/nextGameId`),c=await Pl(l,d=>d===null?o:void 0,{applyLocally:!1}),u=c.committed?c.snapshot.val():(await _t(l)).val();if(typeof u!="string")throw new Error("Could not reserve the rematch.");const f=t(s),h=Oe(ge,`games/${u}/start`);try{await oi(h,{type:"game/started",roomId:s.roomId,ruleset:s.ruleset,rulesVersion:s.rulesVersion,seed:H_(),tickRate:s.tickRate,hostUid:s.hostUid,members:s.members,players:Object.fromEntries(Object.entries(s.players).map(([d,p])=>[d,{...p,level:s.ruleset==="quarry-match"?Math.max(...a.values()):a.get(d)}])),settings:f.settings??s.settings,audioOutput:s.audioOutput,...f.scores??s.scores?{scores:f.scores??s.scores}:{},matchId:f.advance?s.matchId:u,round:f.advance?f.round??s.round+1:0,previousGameId:i,serverTime:li()})}catch(d){const p=await _t(h).catch(()=>{});if(!p?.exists()||e(p.val()).roomId!==s.roomId)throw d}return await k_(B_(Of,"rooms",s.roomId),{status:"active",activeGameId:u,startedAt:z_()}),u}const Fc=async(i,e,t,n,s,r,a)=>{const o=Oe(i,`games/${e}/players/${t}/epochs/${n}`);(await _t(o)).exists()||await oi(o,{clientId:s,startedFromTick:r,startedFromCommandSeq:a,serverTime:li()})};function Xv(i,e,t,n,s,r=!1){let a=!1,o=()=>{};return(async()=>{try{const l=Oe(i,`games/${e}/interactions`),c=await _t(l),u=new Set;if(r||c.forEach(f=>{u.add(f.key)}),a)return;o=ns(l,f=>{try{const h=t(f.val());u.delete(f.key)||n(h,f.key)}catch(h){s(h instanceof Error?h:new Error(String(h)))}},s)}catch(l){s(l instanceof Error?l:new Error(String(l)))}})(),()=>{a=!0,o()}}function qv(i=globalThis.localStorage){const e=crypto.randomUUID();try{const t=i?.getItem("drm-client-id");if(t)return t;i?.setItem("drm-client-id",e)}catch{}return e}class kc{epochId=crypto.randomUUID();clientId=qv();owned=!1;unsubscribe=()=>{};database;path;lost;constructor(e,t,n){this.database=e,this.path=t,this.lost=n}async claim(e=!1){const t=Oe(this.database,this.path),n=await Pl(t,s=>e||s===null||s?.epochId===this.epochId?{epochId:this.epochId,clientId:this.clientId}:void 0,{applyLocally:!1});return this.owned=n.committed&&n.snapshot.val()?.epochId===this.epochId,this.owned?(await Ff(t).remove(),this.unsubscribe(),this.unsubscribe=ui(t,s=>{this.owned&&s.val()?.epochId!==this.epochId&&(this.owned=!1,this.lost())}),!0):!1}async takeOver(){return this.claim(!0)}async release(){this.unsubscribe();const e=Oe(this.database,this.path);await Ff(e).cancel(),await Pl(e,t=>t?.epochId===this.epochId?null:t,{applyLocally:!1}),this.owned=!1}async suspend(){this.owned&&(await oi(Oe(this.database,this.path),null),this.owned=!1)}get ownsWriter(){return this.owned}}class Xa{options;items;flushing=!1;retry;destroyed=!1;constructor(e){this.options=e,this.items=[...e.initial].sort(e.order)}enqueue(e){this.items.some(t=>this.options.identify(t)===this.options.identify(e))||(this.items=[...this.items,e].sort(this.options.order),this.options.persist(this.items),this.flush())}async flush(){if(!(this.flushing||this.destroyed)){this.flushing=!0;try{for(;this.items.length&&!this.destroyed;){const e=this.items[0];await this.options.deliver(e);const t=this.options.identify(e);this.items=this.items.filter(n=>this.options.identify(n)!==t),this.options.persist(this.items)}}catch(e){this.options.failed?.(e),!this.retry&&!this.destroyed&&(this.retry=setTimeout(()=>{this.retry=void 0,this.flush()},this.options.retryMilliseconds??1e3))}finally{this.flushing=!1}}}values(){return[...this.items]}destroy(){this.destroyed=!0,this.retry&&clearTimeout(this.retry)}}const bt=i=>!!i&&typeof i=="object"&&!Array.isArray(i),St=(i,e)=>Object.keys(i).every(t=>e.includes(t)),Ct=(i,e=0,t=1e9)=>Number.isInteger(i)&&i>=e&&i<=t,yt=(i,e=128)=>typeof i=="string"&&i.length>0&&i.length<=e,zi=i=>typeof i=="number"&&Number.isFinite(i)&&i>=0;function md(i,e,t=!1){const n=t?["type","playerId","epochId","clientSeq","tick","payload"]:["type","playerId","epochId","clientSeq","tick","payload","serverTime"];if(!bt(e)||!St(e,n)||!yt(i)||!yt(e.playerId)||!yt(e.epochId)||!Ct(e.clientSeq,1)||!Ct(e.tick)||!t&&!zi(e.serverTime))throw new Error("Invalid controller record envelope.");return e}function $v(i,e){const t=bt(e)?e:{};if(i==="input/move"&&St(t,["dx"])&&(t.dx===-1||t.dx===1))return{type:i,payload:{dx:t.dx}};if(i==="input/rotate"&&St(t,["direction"])&&(t.direction==="clockwise"||t.direction==="counterclockwise"))return{type:i,payload:{direction:t.direction}};if((i==="input/soft-drop-start"||i==="input/soft-drop-end"||i==="input/hard-drop")&&St(t,[]))return{type:i,payload:{}};throw new Error("Invalid pill command input.")}function ia(i){if(!bt(i)||!St(i,["type","roomId","ruleset","rulesVersion","seed","tickRate","hostUid","audioOutput","members","players","settings","matchId","round","previousGameId","serverTime"])||i.type!=="game/started"||i.ruleset!=="pill-bottle"||i.rulesVersion!==ad||i.tickRate!==It.tickRate||!yt(i.roomId)||!yt(i.hostUid)||i.audioOutput!==void 0&&i.audioOutput!=="cast"&&i.audioOutput!=="controllers"||i.matchId!==void 0&&!yt(i.matchId)||i.round!==void 0&&!Ct(i.round,0,It.matchRounds-1)||i.previousGameId!==void 0&&!yt(i.previousGameId)||!Ct(i.seed,0,4294967295)||!zi(i.serverTime)||!bt(i.members)||!bt(i.players)||!bt(i.settings))throw new Error("Invalid pill-bottle/3 start record.");const e=i.members,t=Object.entries(e),n=Object.entries(i.players),s=n.map(([,a])=>bt(a)?a.seat:void 0),r=i.settings;if(t.length<1||t.length>4||!t.every(([a,o])=>yt(a)&&o===!0)||e[i.hostUid]!==!0||n.length<1||n.length>4||!n.every(([a,o])=>yt(a)&&bt(o)&&St(o,["seat","level"])&&Ct(o.seat,0,3)&&Ct(o.level,0,20)&&e[a]===!0)||new Set(s).size!==s.length||!St(r,["initialVirusCount","initialGravityTicks","hardDrop","matchRounds"])||r.initialVirusCount!==ha.initialVirusCount||r.initialGravityTicks!==ha.initialGravityTicks||r.hardDrop!==ha.hardDrop||r.matchRounds!==void 0&&r.matchRounds!==ha.matchRounds)throw new Error("Invalid pill-bottle/3 start definition.");return{...i,audioOutput:i.audioOutput??"controllers",settings:{...r,matchRounds:ha.matchRounds},matchId:i.matchId??i.roomId,round:i.round??0}}function ir(i,e,t={}){const n=t.pending?["type","playerId","epochId","clientSeq","tick","payload"]:["type","playerId","epochId","clientSeq","tick","payload","serverTime"];if(!bt(e)||!St(e,n)||!yt(i)||!yt(e.playerId)||!yt(e.epochId)||!Ct(e.clientSeq,1)||!Ct(e.tick)||!t.pending&&!zi(e.serverTime))throw new Error("Invalid pill controller record.");const s={commandId:i,playerId:e.playerId,epochId:e.epochId,clientSeq:e.clientSeq,tick:e.tick};if(e.type==="attack/rain"){if(!bt(e.payload)||!St(e.payload,["attackId","colors","columns"])||!yt(e.payload.attackId)||!Array.isArray(e.payload.colors)||!Array.isArray(e.payload.columns)||e.payload.colors.length<2||e.payload.colors.length>4||e.payload.colors.length!==e.payload.columns.length||!e.payload.colors.every(a=>["cyan","pink","yellow"].includes(a))||!e.payload.columns.every(a=>Ct(a,0,7))||new Set(e.payload.columns).size!==e.payload.columns.length)throw new Error("Invalid pill rain attack.");return{...s,type:e.type,payload:e.payload,...t.pending?{}:{serverTime:e.serverTime}}}if(e.type==="progress/tick"){if(!bt(e.payload)||!St(e.payload,["phase","stateHash"])||!["playing","countdown","lost"].includes(e.payload.phase)||typeof e.payload.stateHash!="string"||!/^pb3-[0-9a-f]{8}$/.test(e.payload.stateHash))throw new Error("Invalid pill progress command.");return{...s,type:e.type,payload:{phase:e.payload.phase,stateHash:e.payload.stateHash},...t.pending?{}:{serverTime:e.serverTime}}}const r=$v(e.type,e.payload);return{...s,...r,...t.pending?{}:{serverTime:e.serverTime}}}function gd(i){if(!bt(i)||!St(i,["type","playerId","tick","result","stateHash","serverTime"])||i.type!=="player/terminal"||!yt(i.playerId)||!Ct(i.tick)||!["cleared","lost"].includes(i.result)||typeof i.stateHash!="string"||!/^pb3-[0-9a-f]{8}$/.test(i.stateHash)||!zi(i.serverTime))throw new Error("Invalid pill terminal declaration.");return i}function Yv(i){if(!bt(i)||!St(i,["playerId","level","serverTime"])||!yt(i.playerId)||!Ct(i.level,0,20)||!zi(i.serverTime))throw new Error("Invalid pill rematch readiness.");return i}function _d(i){if(!bt(i)||!St(i,["type","attackId","sourcePlayerId","sourceTick","sourceChain","targetPlayerIds","colors","serverTime"])||i.type!=="attack/generated"||!yt(i.attackId)||!yt(i.sourcePlayerId)||!Ct(i.sourceTick)||!Ct(i.sourceChain,1,100)||!Array.isArray(i.targetPlayerIds)||i.targetPlayerIds.length<1||i.targetPlayerIds.length>3||!i.targetPlayerIds.every(e=>yt(e))||new Set(i.targetPlayerIds).size!==i.targetPlayerIds.length||!Array.isArray(i.colors)||i.colors.length<2||i.colors.length>4||!i.colors.every(e=>["cyan","pink","yellow"].includes(e))||!zi(i.serverTime))throw new Error("Invalid pill attack interaction.");return i}function vo(i,e,t){try{const n=JSON.parse(i.getItem(e)??"[]");return Array.isArray(n)?n.map(t):[]}catch{return[]}}function yo(i,e,t){i.setItem(e,JSON.stringify(t))}function Zv(i,e,t){try{const n=JSON.parse(i.getItem(e)??"null");return n===null?void 0:t(n)}catch{return}}function Kv(i,e,t){i.setItem(e,JSON.stringify(t))}function vd(i,e,t,n){return`drm-game:${i}:${e}:${t}:${n}`}const sa=(i,e)=>`drm-pill-bottle:${i}:${e}`;function jv(i,e){return vo(localStorage,`${sa(i,e)}:outbox`,t=>{if(!t||typeof t!="object"||typeof t.commandId!="string")throw new Error("Invalid local controller outbox.");const{commandId:n,...s}=t;return ir(n,s,{pending:!0})})}function Jv(i,e,t){yo(localStorage,`${sa(i,e)}:outbox`,t)}function Qv(i,e){return vo(localStorage,`${sa(i,e)}:attacks`,t=>{if(!t||typeof t!="object"||typeof t.interactionId!="string")throw new Error("Invalid local attack outbox.");const{interactionId:n,...s}=t,{serverTime:r,...a}=_d({...s,serverTime:0});return{interactionId:n,...a}})}function ey(i,e,t){yo(localStorage,`${sa(i,e)}:attacks`,t)}function Bf(i,e,t,n){const s={commandId:t.commandId,clientSeq:t.clientSeq,tick:t.tick,state:Lc(n),stateHash:Wa(n)};Kv(localStorage,`${sa(i,e)}:checkpoint`,s)}function ty(i,e){return Zv(localStorage,`${sa(i,e)}:checkpoint`,t=>{const n=t;if(!n||typeof n.commandId!="string"||!Number.isInteger(n.clientSeq)||!Number.isInteger(n.tick)||typeof n.stateHash!="string")throw new Error("Invalid local checkpoint.");const s=fd(n.state);if(s.tick!==n.tick||Wa(s)!==n.stateHash)throw new Error("Invalid local checkpoint state.");return n})}function Qm(i,e,t){if(!ge)throw new Error("Firebase is unavailable.");let n=!1,s=[],r=[],a=[],o=0,l,c={};const u=new Map,f=[],h=()=>{if(s.length===0)return;const d=dd(s,r,a,o);if(!l)return e(d);const p=pd(l,d),_=Object.fromEntries(s.map(g=>[g,(c[g]??0)+p[g]]));e({...d,roundPoints:p,scores:_,matchComplete:!!(s.length>1&&d.winnerId&&_[d.winnerId]>=Jm)})};return(async()=>{try{const d=await _t(Oe(ge,`games/${i}/start`));if(n||!d.exists())return;const p=ia(d.val());l=p,s=Object.keys(p.players),o=p.round,c=await tg(p.previousGameId,p.matchId),await Promise.all(s.map(async _=>{const g=await _t(Oe(ge,`games/${i}/players/${_}/records`)),m=[];g.forEach(v=>{const b=Yr(ir(v.key,v.val()));b.playerId===_&&m.push(b)}),m.sort((v,b)=>v.clientSeq-b.clientSeq),u.set(_,m),f.push(ns(Oe(ge,`games/${i}/players/${_}/records`),v=>{try{const b=Yr(ir(v.key,v.val())),y=u.get(_)??[];b.playerId===_&&!y.some(w=>w.commandId===b.commandId)&&(y.push(b),y.sort((w,M)=>w.clientSeq-M.clientSeq),u.set(_,y),h())}catch(b){t(b instanceof Error?b:new Error(String(b)))}},t))})),f.push(ui(Oe(ge,`games/${i}/terminals`),_=>{try{r=[],_.forEach(g=>{const m=gd(g.val());g.key===m.playerId&&s.includes(m.playerId)&&r.push(m)}),h()}catch(g){t(g instanceof Error?g:new Error(String(g)))}},t)),f.push(ui(Oe(ge,`games/${i}/rematch/ready`),_=>{try{a=[],_.forEach(g=>{const m=Yv(g.val());g.key===m.playerId&&s.includes(m.playerId)&&a.push(m.playerId)}),h()}catch(g){t(g instanceof Error?g:new Error(String(g)))}},t)),h()}catch(d){t(d instanceof Error?d:new Error(String(d)))}})(),()=>{n=!0;for(const d of f)d()}}async function ny(i,e){return Nc(i,e)}async function eg(i){const e=await ry(i);return Oc(i,ia,t=>{const n=Object.keys(t.players).length===1;return{advance:!n&&!e.matchComplete,round:n?0:Math.min(It.matchRounds-1,t.round+1)}})}function Yr(i){const{serverTime:e,...t}=i;return t}function iy(i,e,t,n,s,r=!0){if(!ge)throw new Error("Firebase is unavailable.");let a=!1,o=0;const l=new Cs(It.tickRate);let c=!1,u=new Set,f=!1;const h=[],d=new Map,p=new Map,_=Qm(i,v=>{c=v.finished,u=new Set(v.terminalPlayerIds),n?.(v),r&&v.allReady&&!f&&(f=!0,eg(i).catch(b=>{f=!1,t(b)}))},t),g=()=>{e([...d.entries()].map(([v,b])=>{const y=b.snapshot();return{playerId:v,tick:y.displayTick,...y}}))},m=v=>{if(!a){for(let b=l.consume(v);b>0;b--)if(!c)for(const[y,w]of d)u.has(y)||w.advance();g(),o=requestAnimationFrame(m)}};return(async()=>{try{const v=await _t(Oe(ge,`games/${i}/start`));if(a||!v.exists())return;const b=ia(v.val());s?.(b);let y=0;if(await Promise.all(Object.keys(b.players).map(async w=>{const M=await _t(Oe(ge,`games/${i}/players/${w}/records`)),C=[];M.forEach(x=>{const E=Yr(ir(x.key,x.val()));E.playerId===w&&C.push(E)}),C.sort((x,E)=>x.clientSeq-E.clientSeq);for(const x of C)x.type==="progress/tick"&&(y=Math.max(y,x.tick));p.set(w,C)})),a)return;for(const[w,M]of Object.entries(b.players)){const C=new Vv(Km(b.seed,M.seat,M.level),y);d.set(w,C);for(const x of p.get(w)??[])C.receive(x);h.push(ns(Oe(ge,`games/${i}/players/${w}/records`),x=>{try{const E=Yr(ir(x.key,x.val()));if(E.playerId===w){const R=p.get(w)??[];R.some(D=>D.commandId===E.commandId)||(R.push(E),R.sort((D,z)=>D.clientSeq-z.clientSeq),p.set(w,R)),C.receive(E)}g()}catch(E){t(E instanceof Error?E:new Error(String(E)))}},t))}g(),o=requestAnimationFrame(m)}catch(v){t(v instanceof Error?v:new Error(String(v)))}})(),()=>{a=!0,cancelAnimationFrame(o),_();for(const v of h)v()}}function tI(i,e,t){if(!ge)throw new Error("Firebase is unavailable.");return Xv(ge,i,_d,()=>e(),t)}function sy(i,e){Uv(i,e.tick,[]),e.type!=="progress/tick"&&Ha(i,e)}async function tg(i,e){const t={};let n=i;for(;n&&ge;){const s=await _t(Oe(ge,`games/${n}/start`));if(!s.exists())break;const r=ia(s.val());if(r.matchId!==e)break;const a=await _t(Oe(ge,`games/${n}/terminals`)),o=[];a.forEach(h=>{o.push(gd(h.val()))});const l=Object.keys(r.players),c=dd(l,o,[],r.round),u=new Map;await Promise.all(l.map(async h=>{const d=await _t(Oe(ge,`games/${n}/players/${h}/records`)),p=[];d.forEach(_=>{p.push(Yr(ir(_.key,_.val())))}),p.sort((_,g)=>_.clientSeq-g.clientSeq),u.set(h,p)}));const f=pd(r,c);for(const h of l)t[h]=(t[h]??0)+f[h];n=r.previousGameId}return t}async function ry(i){if(!ge)throw new Error("Firebase is unavailable.");const e=await _t(Oe(ge,`games/${i}/start`));if(!e.exists())throw new Error("The previous game no longer exists.");const t=ia(e.val()),n=await _t(Oe(ge,`games/${i}/terminals`)),s=[];n.forEach(u=>{s.push(gd(u.val()))});const r=Object.keys(t.players),a=dd(r,s,[],t.round),o=await tg(t.previousGameId,t.matchId),l=pd(t,a),c=Object.fromEntries(r.map(u=>[u,(o[u]??0)+l[u]]));return{...a,roundPoints:l,scores:c,matchComplete:!!(r.length>1&&a.winnerId&&c[a.winnerId]>=Jm)}}function nI(i,e){if(!hi?.currentUser||!ge)throw new Error("Firebase is unavailable.");const t=hi.currentUser.uid;let n=0,s=0,r=-1,a=0;const o=new Cs(It.tickRate);let l=!1,c=!1,u=!1,f=!1,h=!1,d=!1,p=!1,_=!1,g,m,v,b,y=0,w=!1,M=[],C=[],x=()=>{},E=()=>{};const R=new Set,D=jv(i,t),z=Qv(i,t),L=le=>e({playerId:t,tick:n,ready:l,bottle:m?structuredClone(m):void 0,lastCommand:g,error:le,lifecycle:v,audioOutput:b,rainSignal:y,ownershipConflict:w,opponents:C.map(Te=>({...Te,state:structuredClone(Te.state)}))}),O=new kc(ge,`games/${i}/players/${t}/writer`,()=>{w=!0,l=!1,f=!0,cancelAnimationFrame(a),L("Control moved to another tab or device.")}),F=O.epochId,U=new Xa({initial:D,order:(le,Te)=>le.clientSeq-Te.clientSeq,identify:le=>le.commandId,persist:le=>Jv(i,t,le),deliver:async le=>{const{commandId:Te,...Fe}=le;await oi(Oe(ge,`games/${i}/players/${t}/records/${Te}`),{...Fe,serverTime:li()})}}),N=new Xa({initial:z,order:()=>0,identify:le=>le.interactionId,persist:le=>ey(i,t,le),deliver:async le=>{const{interactionId:Te,...Fe}=le;await oi(Oe(ge,`games/${i}/interactions/${Te}`),{...Fe,serverTime:li()})}}),B=Qm(i,le=>{v=le,h=le.finished,d=le.terminalPlayerIds.includes(t),h&&(cancelAnimationFrame(a),o.reset()),le.allReady&&!_&&(_=!0,eg(i).catch(Te=>{_=!1,L(Te instanceof Error?Te.message:String(Te))})),L()},le=>L(le.message));function H(le){m&&(U.enqueue(le),s=le.clientSeq)}function oe(le){if(m){try{Bf(i,t,le,m)}catch{}U.flush()}}function ee(le){if(n<r)throw new Error("A controller record cannot precede its latest progress tick.");const Te=Ga(Oe(ge,`games/${i}/players/${t}/records`));if(!Te.key)throw new Error("Could not allocate a controller record identifier.");return{commandId:Te.key,playerId:t,epochId:F,clientSeq:s+1,tick:n,...le}}function ie(le){for(const Te of le){const Fe=Pv(Te);if(Fe.length===0)continue;const te=M.filter(xe=>xe!==t&&!v?.terminalPlayerIds.includes(xe));if(te.length===0){y++;continue}const se=`${t}-${F}-${Te.tick}-${Te.chain}`,he=Ga(Oe(ge,`games/${i}/interactions`));if(!he.key)throw new Error("Could not allocate an attack interaction identifier.");const ve={interactionId:he.key,type:"attack/generated",attackId:se,sourcePlayerId:t,sourceTick:Te.tick,sourceChain:Te.chain,targetPlayerIds:te,colors:Fe};N.enqueue(ve)}}function Pe(le=!1){if(!m||!le&&n-r<15)return;const Te=ee({type:"progress/tick",payload:{phase:m.phase,stateHash:Wa(m)}});H(Te),r=n,oe(Te)}async function ut(){if(!m||p)return;const le=m.phase==="lost"?"lost":m.phase==="countdown"?"cleared":void 0;if(le){p=!0;try{const Te=Oe(ge,`games/${i}/terminals/${t}`);(await _t(Te)).exists()||await oi(Te,{type:"player/terminal",playerId:t,tick:n,result:le,stateHash:Wa(m),serverTime:li()})}catch{p=!1}}}function De(le){if(u||!l||f||h||d)return;const Te=m?.phase;for(let Fe=o.consume(le);Fe>0;Fe--){if(!m||m.phase==="lost"||m.phase==="countdown"&&(v?.playerIds.length??0)>1){o.reset();break}ie(ud(m)),n=m.tick}m?.phase!==Te||m?.phase==="lost"&&r!==n?Pe(!0):Pe(),ut(),L(),a=requestAnimationFrame(De)}const J=ui(Oe(ge,`games/${i}/start`),async le=>{if(!(!le.exists()||l||c)){c=!0;try{const Te=ia(le.val());if(b=Te.audioOutput,M=Object.keys(Te.players),!Te.players[t])throw new Error("Player is not part of this pill-bottle/3 game.");if(E(),E=iy(i,ue=>{C=ue.filter(Le=>Le.playerId!==t),L()},ue=>L(ue.message),void 0,void 0,!1),!await O.claim())throw w=!0,new Error("This controller is already active in another tab.");const Fe=await _t(Oe(ge,`games/${i}/players/${t}/records`)),te=new Map;Fe.forEach(ue=>{const Le=Yr(ir(ue.key,ue.val()));Le.playerId===t&&te.set(Le.commandId,Le)});for(const ue of U.values())te.set(ue.commandId,ue);const se=[...te.values()].sort((ue,Le)=>ue.clientSeq-Le.clientSeq);for(const ue of se)ue.type==="attack/rain"&&R.add(ue.payload.attackId);se.forEach((ue,Le)=>{if(ue.clientSeq!==Le+1)throw new Error("Controller record history has a sequence gap.");if(Le>0&&ue.tick<se[Le-1].tick)throw new Error("Controller record ticks moved backward.")});const he=ty(i,t),ve=he&&se.find(ue=>ue.commandId===he.commandId&&ue.clientSeq===he.clientSeq&&ue.tick===he.tick);m=ve?fd(he.state):Km(Te.seed,Te.players[t].seat,Te.players[t].level);for(const ue of se)ve&&ue.clientSeq<=ve.clientSeq||sy(m,ue);if(s=se.at(-1)?.clientSeq??0,n=m.tick,r=se.reduce((ue,Le)=>Le.type==="progress/tick"?Math.max(ue,Le.tick):ue,-1),se.length>0)try{Bf(i,t,se.at(-1),m)}catch{}await Fc(ge,i,t,F,O.clientId,n,s);const xe=Oe(ge,`games/${i}/interactions`),Je=await _t(xe),qe=new Set;Je.forEach(ue=>{qe.add(ue.key)}),l=!0,x=ns(xe,ue=>{try{const Le=_d(ue.val());if(qe.delete(ue.key)||y++,!Le.targetPlayerIds.includes(t)||R.has(Le.attackId)||!m){L();return}const V={type:"attack/rain",payload:{attackId:Le.attackId,colors:Le.colors,columns:Lv(Le.attackId,Le.colors.length)}},Mt=ee(V);H(Mt),Ha(m,V),R.add(Le.attackId),oe(Mt),m.phase==="lost"&&(Pe(!0),ut()),L()}catch(Le){L(Le instanceof Error?Le.message:String(Le))}},ue=>L(ue.message)),Pe(!0),ut(),L(),U.flush(),N.flush(),a=requestAnimationFrame(De)}catch(Te){L(Te instanceof Error?Te.message:String(Te))}finally{c=!1}}},le=>L(le.message)),fe=()=>{U.flush(),N.flush()};window.addEventListener("online",fe);function re(){!l||f||h||(Pe(!0),f=!0,cancelAnimationFrame(a),o.reset())}function we(){!l||!f||u||h||(f=!1,o.reset(),Pe(!0),a=requestAnimationFrame(De))}async function Xe(le){if(!l||!m||m.phase!=="playing"||h)return;const Te=m.phase,Fe=ee(le);H(Fe),ie(Ha(m,le)),oe(Fe);const te=m.phase;te!==Te&&Pe(!0),te==="lost"&&ut(),g=`${le.type} · tick ${n}`,L()}return{command:Xe,requestRematch:le=>ny(i,le),async takeOver(){await O.takeOver()&&(w=!1,l=!0,f=!1,o.reset(),a=requestAnimationFrame(De),L())},suspend:re,resume:we,destroy(){l&&!f&&Pe(!0),u=!0,J(),B(),x(),E(),cancelAnimationFrame(a),U.destroy(),N.destroy(),O.release(),window.removeEventListener("online",fe)}}}const ay=3;function ng(i,e,t,n,s){const r=t.filter(({playerId:d})=>i.includes(d)).sort((d,p)=>d.tick-p.tick||i.indexOf(d.playerId)-i.indexOf(p.playerId)),a=new Map(r.map(d=>[d.playerId,d])),o=r.find(({result:d})=>d==="cleared"),l=!!o||a.size===i.length,c=l?o?.playerId:void 0,u=Object.fromEntries(i.map(d=>[d,d===c?1:0])),f=Object.fromEntries(i.map(d=>[d,(e[d]??0)+u[d]])),h=n.filter(d=>i.includes(d));return{playerIds:i,terminalPlayerIds:[...a.keys()],readyPlayerIds:h,finished:l,winnerId:c,draw:l&&c===void 0,allReady:l&&i.every(d=>h.includes(d)),terminalResults:Object.fromEntries([...a].map(([d,p])=>[d,p.result])),terminalTicks:Object.fromEntries([...a].map(([d,p])=>[d,p.tick])),round:s,matchComplete:!!(i.length>1&&c&&f[c]>=ay),roundPoints:u,scores:f}}var zf=Rt("<i></i>"),oy=Rt('<span class="next-piece svelte-63ux23"></span>'),ly=Rt('<div class="next svelte-63ux23"></div>'),cy=Rt('<div><!> <div class="matrix svelte-63ux23" role="img"></div></div>');function iI(i,e){In(e,!1);const t=st();let n=Ye(e,"state",8),s=Ye(e,"label",8,"Block Stack board"),r=Ye(e,"compact",8,!1);const a={I:"#30d9d4",J:"#4d72ff",L:"#ff9f43",O:"#f5d547",S:"#5fe06d",T:"#b66cff",Z:"#ff4f64"};function o(p){const _=p.active?Dh(p.active):[],g=p.active?Dh({...p.active,row:Ph(p)}):[];return Array.from({length:W_*Io},(m,v)=>{const b=Math.floor(v/Io)+X_,y=v%Io;if(p.active&&_.some(M=>M.row===b&&M.col===y))return{kind:p.active.kind,ghost:!1,active:!0};const w=p.board[b*Io+y];return w?{kind:w,ghost:!1,active:!1}:p.active&&g.some(M=>M.row===b&&M.col===y)?{kind:p.active.kind,ghost:!0,active:!1}:void 0})}function l(p){const _=new Set(Dh({kind:p,row:0,col:0,orientation:0}).map(({row:g,col:m})=>`${g}:${m}`));return Array.from({length:16},(g,m)=>_.has(`${Math.floor(m/4)}:${m%4}`))}At(()=>Me(n()),()=>{pe(t,o(n()))}),Bi(),As();var c=cy();let u;var f=Qt(c);{var h=p=>{var _=ly();Cn(_,5,()=>(Me(n()),Se(()=>n().next.slice(0,3))),Jn,(g,m)=>{var v=oy();Cn(v,5,()=>(T(m),Se(()=>l(T(m)))),Jn,(b,y)=>{var w=zf();let M;Jt(()=>M=jn(w,1,"svelte-63ux23",null,M,{occupied:T(y)})),ot(b,w)}),Lt(v),Jt(()=>{tt(v,"aria-label",`${T(m)} piece`),Ll(v,(T(m),Se(()=>`--piece:${a[T(m)]}`)))}),ot(g,v)}),Lt(_),Jt(g=>tt(_,"aria-label",g),[()=>(Me(n()),Se(()=>`Next pieces: ${n().next.slice(0,3).join(", ")}`))]),ot(p,_)};An(f,p=>{r()||p(h)})}var d=dt(f,2);Cn(d,5,()=>T(t),Jn,(p,_)=>{var g=zf();let m;Jt(v=>{Ll(g,(T(_),Se(()=>T(_)?`--piece:${a[T(_).kind]}`:""))),m=jn(g,1,"svelte-63ux23",null,m,v)},[()=>({filled:!!(T(_)&&!T(_).ghost),active:T(_)?.active,ghost:T(_)?.ghost})]),ot(p,g)}),Lt(d),Lt(c),Jt(p=>{u=jn(c,1,"tetris-shell svelte-63ux23",null,u,{compact:r()}),tt(d,"aria-label",s()),tt(d,"data-lines",(Me(n()),Se(()=>n().lines))),tt(d,"data-score",(Me(n()),Se(()=>n().score))),tt(d,"data-level",(Me(n()),Se(()=>n().level))),tt(d,"data-phase",(Me(n()),Se(()=>n().phase))),tt(d,"data-active-row",(Me(n()),Se(()=>n().active?.row))),tt(d,"data-active-id",(Me(n()),Se(()=>n().active?.id))),tt(d,"data-ghost-row",p)},[()=>(Me(Ph),Me(n()),Se(()=>Ph(n())))]),ot(i,c),Pn()}const Vf=""+new URL("../assets/Granite Promenade.B9kdwy7x.mp3",import.meta.url).href,hy=""+new URL("../assets/Snowbound Sabre.U751p-Yz.mp3",import.meta.url).href;function sI(i,e){In(e,!1);const t=st();let n=Ye(e,"enabled",8,!1),s=Ye(e,"level",8,0);At(()=>(Me(s()),Vf),()=>{pe(t,s()%2?hy:Vf)}),Bi();{let r=Ii(()=>`tetris:${s()}`);mo(i,{get enabled(){return n()},get loopUrl(){return T(t)},get loopKey(){return T(r)}})}Pn()}function uy(i){if(!bt(i)||!St(i,["type","roomId","ruleset","rulesVersion","seed","tickRate","hostUid","audioOutput","members","players","scores","settings","matchId","round","previousGameId","serverTime"])||i.type!=="game/started"||i.ruleset!=="tetris"||i.rulesVersion!=="tetris/2"||i.tickRate!==60||!Ct(i.seed,0,4294967295)||!Ct(i.round,0,99)||!yt(i.matchId)||!yt(i.hostUid)||!yt(i.roomId)||!zi(i.serverTime)||!bt(i.members)||!bt(i.players)||!bt(i.scores)||!bt(i.settings)||!St(i.settings,["width","height","hiddenRows","targetWins","matchRounds"])||i.settings.width!==10||i.settings.height!==20||i.settings.hiddenRows!==2||i.settings.targetWins!==3||i.settings.matchRounds!==3||i.previousGameId!==void 0&&!yt(i.previousGameId)||i.audioOutput!=="cast"&&i.audioOutput!=="controllers")throw new Error("Invalid tetris/2 start record.");const e=i.members,t=i.players,n=i.scores;if(!Object.entries(e).every(([s,r])=>yt(s)&&r===!0)||!Object.entries(t).every(([s,r])=>yt(s)&&e[s]===!0&&bt(r)&&St(r,["seat","level"])&&Ct(r.seat,0,3)&&Ct(r.level,0,20))||!Object.keys(t).every(s=>Ct(n[s],0,3))||Object.keys(n).some(s=>!t[s]))throw new Error("Invalid Tetris roster.");return i}function dy(i,e,t=!1){const n=md(i,e,t),s=bt(n.payload)?n.payload:{};if(n.type==="input/move"&&St(s,["dx"])&&(s.dx===-1||s.dx===1))return{commandId:i,...n,type:"input/move",payload:{dx:s.dx}};if(n.type==="input/rotate"&&St(s,["direction"])&&(s.direction==="clockwise"||s.direction==="counterclockwise"))return{commandId:i,...n,type:"input/rotate",payload:{direction:s.direction}};if(["input/soft-drop-start","input/soft-drop-end","input/hard-drop"].includes(n.type)&&St(s,[]))return{commandId:i,...n,type:n.type,payload:{}};if(n.type==="progress/tick"&&St(s,["phase","stateHash"])&&(s.phase==="playing"||s.phase==="cleared"||s.phase==="lost")&&typeof s.stateHash=="string"&&/^t2-[0-9a-f]{8}$/.test(s.stateHash))return{commandId:i,...n,type:"progress/tick",payload:{phase:s.phase,stateHash:s.stateHash}};throw new Error("Invalid Tetris controller payload.")}const qa=uy,Ul=dy;function fy(i,e,t){if(!ge)throw new Error("Firebase unavailable.");let n=[],s=[],r={},a=0,o=[];const l=()=>{n.length&&e(ng(n,r,o,s,a))},c=[];return _t(Oe(ge,`games/${i}/start`)).then(u=>{const f=qa(u.val());n=Object.keys(f.players),r=f.scores,a=f.round,c.push(ns(Oe(ge,`games/${i}/terminals`),h=>{const d=h.val();(d?.result==="cleared"||d?.result==="lost")&&n.includes(d.playerId)&&Number.isInteger(d.tick)&&(o=[...o.filter(p=>p.playerId!==d.playerId),{playerId:d.playerId,result:d.result,tick:d.tick}]),l()},t),ui(Oe(ge,`games/${i}/rematch/ready`),h=>{s=[],h.forEach(d=>{d.val()?.playerId===d.key&&n.includes(d.key)&&s.push(d.key)}),l()},t)),l()}).catch(u=>t(u instanceof Error?u:new Error(String(u)))),()=>c.forEach(u=>u())}const rI=(i,e)=>Nc(i,e);async function py(i){if(!ge)throw new Error("Firebase unavailable.");const e=await _t(Oe(ge,`games/${i}/start`)),t=qa(e.val()),n=await _t(Oe(ge,`games/${i}/terminals`)),s=[];n.forEach(a=>{const o=a.val();o&&(o.result==="cleared"||o.result==="lost")&&Number.isInteger(o.tick)&&s.push({playerId:o.playerId,result:o.result,tick:o.tick})});const r=ng(Object.keys(t.players),t.scores,s,[],t.round);return Oc(i,qa,a=>{const o=Object.keys(a.players).length===1,l=!o&&r.matchComplete;return{advance:!o&&!l,round:o?0:Math.min(a.settings.matchRounds-1,a.round+1),scores:o||l?Object.fromEntries(Object.keys(a.players).map(c=>[c,0])):r.scores}})}function aI(i,e){if(!hi?.currentUser||!ge)throw new Error("Firebase unavailable.");const t=hi.currentUser.uid,n=new Cs(Bm.tickRate),s=vd("tetris",i,t,"outbox");let r,a=0,o=0,l=!1,c=!1,u=!1,f=!1,h=0,d=-1,p,_,g,m=!1,v=[],b=()=>{};const y=vo(localStorage,s,U=>{if(!U||typeof U!="object"||typeof U.commandId!="string")throw new Error("Invalid Tetris outbox.");const{commandId:N,...B}=U;return Ul(N,B,!0)}),w=U=>e({playerId:t,tick:a,ready:l,state:r?structuredClone(r):void 0,lifecycle:g,audioOutput:_,error:U,lastCommand:p,ownershipConflict:m,opponents:v.map(N=>({...N,state:structuredClone(N.state)}))}),M=new kc(ge,`games/${i}/players/${t}/writer`,()=>{m=!0,l=!1,cancelAnimationFrame(h),w("This controller was taken over by another tab.")}),C=fy(i,U=>{g=U,U.finished&&cancelAnimationFrame(h),U.allReady&&!f&&(f=!0,py(i).catch(N=>{f=!1,w(N instanceof Error?N.message:String(N))})),w()},U=>w(U.message)),x=new Xa({initial:y,order:(U,N)=>U.clientSeq-N.clientSeq,identify:U=>U.commandId,persist:U=>yo(localStorage,s,U),deliver:async U=>{if(!l)throw new Error("Controller is not ready.");const{commandId:N,...B}=U;await oi(Oe(ge,`games/${i}/players/${t}/records/${N}`),{...B,serverTime:li()})},failed:U=>w(U instanceof Error?U.message:String(U))}),E=U=>{const B={commandId:Ga(Oe(ge,`games/${i}/players/${t}/records`)).key,playerId:t,epochId:M.epochId,clientSeq:++o,tick:a,...U};return x.enqueue(B),B},R=(U=!1)=>{!r||!U&&a-d<15||(E({type:"progress/tick",payload:{phase:r.phase,stateHash:Au(r)}}),d=a)},D=()=>r?.phase==="lost"||r?.phase==="cleared",z=()=>{D()&&r&&oi(Oe(ge,`games/${i}/terminals/${t}`),{type:"player/terminal",playerId:t,tick:a,result:r.phase,stateHash:Au(r),serverTime:li()}).catch(U=>w(U.message))},L=U=>{if(!(c||u||!l||!r||D()||g?.finished)){for(let N=n.consume(U);N>0;N--)Gm(r),a=r.tick;R(),D()&&(R(!0),z()),w(),h=requestAnimationFrame(L)}},O=ui(Oe(ge,`games/${i}/start`),async U=>{if(!l)try{const N=qa(U.val());if(!N.players[t])throw new Error("Player is not part of this Tetris game.");if(_=N.audioOutput,!await M.claim())throw m=!0,new Error("This controller is already active in another tab.");m=!1,b(),b=my(i,ee=>{v=ee.filter(ie=>ie.playerId!==t),w()},ee=>w(ee.message));const B=await _t(Oe(ge,`games/${i}/players/${t}/records`)),H=new Map;B.forEach(ee=>{const ie=Ul(ee.key,ee.val());H.set(ie.commandId,ie)});for(const ee of x.values())H.set(ee.commandId,ee);const oe=[...H.values()].sort((ee,ie)=>ee.clientSeq-ie.clientSeq);r=q_(zm(N.seed,N.players[t].level),Math.max(0,...oe.map(ee=>ee.tick)),oe),a=r.tick,o=Math.max(0,...oe.map(ee=>ee.clientSeq)),await Fc(ge,i,t,M.epochId,M.clientId,a,o),l=!0,x.flush(),R(!0),w(),h=requestAnimationFrame(L);return}catch(N){w(N instanceof Error?N.message:String(N));return}},U=>w(U.message)),F=()=>{x.flush()};return window.addEventListener("online",F),{command(U){!l||!r||r.phase!=="playing"||(E(U),Vm(r,U),a=r.tick,p=`${U.type} · tick ${a}`,D()&&(R(!0),z()),w())},suspend(){!l||u||(u=!0,cancelAnimationFrame(h),n.reset(),R(!0))},resume(){!l||!u||(u=!1,n.reset(),h=requestAnimationFrame(L))},async takeOver(){await M.takeOver()&&(m=!1,l=!0,u=!1,x.flush(),h=requestAnimationFrame(L),w())},destroy(){R(!0),c=!0,O(),C(),b(),cancelAnimationFrame(h),window.removeEventListener("online",F),x.destroy(),M.release()}}}function my(i,e,t){if(!ge)throw new Error("Firebase unavailable.");let n=!1,s=0,r;const a=new Cs(Bm.tickRate),o=new Map,l=new Map,c=[],u={clone:h=>structuredClone(h),tick:h=>h.tick,advanceTo:(h,d)=>{for(;h.tick<d&&h.phase==="playing";)Gm(h)},apply:(h,d)=>{d.type!=="progress/tick"&&Vm(h,d)},hash:Au,phase:h=>h.phase,terminal:h=>h.phase!=="playing",progress:h=>h.type==="progress/tick"?h.payload:void 0},f=()=>e([...l].map(([h,d])=>{const p=d.snapshot();return{playerId:h,tick:p.displayTick,controllerTick:p.controllerTick,lag:p.lag,state:p.state,hashMatches:p.hashMatches}}));return _t(Oe(ge,`games/${i}/start`)).then(async h=>{r=qa(h.val());let d=0;if(await Promise.all(Object.keys(r.players).map(async _=>{const g=await _t(Oe(ge,`games/${i}/players/${_}/records`)),m=[];g.forEach(v=>{m.push(Ul(v.key,v.val()))}),m.sort((v,b)=>v.clientSeq-b.clientSeq),o.set(_,m);for(const v of m)v.type==="progress/tick"&&(d=Math.max(d,v.tick))})),n)return;for(const _ of Object.keys(r.players)){const g=new Uc(u,zm(r.seed,r.players[_].level),d);l.set(_,g);for(const m of o.get(_)??[])g.receive(m);c.push(ns(Oe(ge,`games/${i}/players/${_}/records`),m=>{try{g.receive(Ul(m.key,m.val())),f()}catch(v){t(v instanceof Error?v:new Error(String(v)))}},t))}const p=_=>{if(!n){for(let g=a.consume(_);g>0;g--)for(const m of l.values())m.advance();f(),s=requestAnimationFrame(p)}};f(),s=requestAnimationFrame(p)}).catch(h=>t(h instanceof Error?h:new Error(String(h)))),()=>{n=!0,cancelAnimationFrame(s),c.forEach(h=>h())}}const Gf=Object.freeze({burst:520,settle:360});var gy=Rt("<span> </span>"),_y=Rt("<div> </div>"),vy=Rt('<button type="button">▲</button>'),yy=Rt("<div>▲</div>"),xy=Rt("<!> <!>",1),by=Rt("<i>✦</i>"),Sy=Rt('<div><div class="progress svelte-40oo2k" aria-label="Current match group"></div> <div class="board svelte-40oo2k"><!> <div class="effects svelte-40oo2k" aria-hidden="true"><!></div></div></div>');function oI(i,e){In(e,!1);const t=st(),n=st(),s=st(),r=st(),a=st(),o=st();let l=Ye(e,"state",8),c=Ye(e,"label",8,"Quarry Match board"),u=Ye(e,"compact",8,!1),f=Ye(e,"selectColumn",8,void 0),h=Ye(e,"onCascadeCue",8,void 0),d=Ye(e,"onPresentationChange",8,void 0);const p={cyan:"◆",pink:"●",yellow:"✦",green:"▲",purple:"■"},_=Gf.burst,g=Gf.settle,m=_+g;let v=st(),b=0,y=st(0),w=l().cascades,M=l().restarts,C=!1,x=st(0);function E(){return Array.from({length:12},()=>({drop:0,bursting:!1}))}function R(De){return De.map(J=>{const fe=E();return J.forEach((re,we)=>fe[we]={color:re,drop:0,bursting:!1}),fe})}function D(De){const J=R(De.before),fe=new Set(De.cells.map(re=>`${re.column}:${re.row}`));return J.forEach((re,we)=>re.forEach((Xe,le)=>Xe.bursting=fe.has(`${we}:${le}`))),J}function z(De){const J=De.after.map(()=>E()),fe=new Set(De.cells.map(re=>`${re.column}:${re.row}`));return De.before.forEach((re,we)=>{let Xe=0;re.forEach((le,Te)=>{fe.has(`${we}:${Te}`)||(J[we][Xe]={color:le,drop:Te-Xe,bursting:!1},Xe++)})}),J}function L(De){!T(v)||De<T(v).cuedStages||De>=T(v).waves.length||(Fm(v,T(v).cuedStages=De+1),cn(x),h()?.())}function O(){cancelAnimationFrame(b),b=0,pe(v,void 0),d()?.(!0)}function F(De){if(!T(v))return;pe(y,De);const J=Math.floor((De-T(v).startedAt)/m);if(J>=T(v).waves.length){O();return}L(J),b=requestAnimationFrame(F)}function U(De){cancelAnimationFrame(b),pe(y,performance.now()),pe(v,{waves:structuredClone(De),startedAt:T(y),cuedStages:0}),d()?.(!1),L(0),b=requestAnimationFrame(F)}function N(){if(!C){C=!0,w=l().cascades,M=l().restarts;return}if(l().restarts!==M||l().cascades<w){M=l().restarts,w=l().cascades,O();return}l().cascades>w&&(w=l().cascades,l().lastCascadeWaves.length&&U(l().lastCascadeWaves))}A_(()=>cancelAnimationFrame(b)),At(()=>Me(l()),()=>{l(),N()}),At(()=>(T(v),T(y)),()=>{pe(t,T(v)?Math.max(0,T(y)-T(v).startedAt):0)}),At(()=>(T(v),T(t)),()=>{pe(n,T(v)?Math.min(T(v).waves.length-1,Math.floor(T(t)/m)):-1)}),At(()=>(T(v),T(t)),()=>{pe(s,T(v)?T(t)%m<_?"burst":"settle":"idle")}),At(()=>(T(v),T(n)),()=>{pe(r,T(v)&&T(n)>=0?T(v).waves[T(n)]:void 0)}),At(()=>(T(r),T(s),Me(l())),()=>{pe(a,T(r)?T(s)==="burst"?D(T(r)):z(T(r)):R(l().columns))}),At(()=>(T(r),T(s)),()=>{pe(o,T(r)&&T(s)==="burst"?T(r).cells:[])}),Bi(),As();var B=Sy();let H;var oe=Qt(B);Cn(oe,4,()=>[0,1,2],Jn,(De,J)=>{var fe=gy();let re;var we=Qt(fe,!0);Lt(fe),Jt(()=>{re=jn(fe,1,"svelte-40oo2k",null,re,{stone:J<l().groupCount,occupied:J<l().groupCount,cyan:l().groupColor==="cyan",pink:l().groupColor==="pink",yellow:l().groupColor==="yellow",green:l().groupColor==="green",purple:l().groupColor==="purple"}),Ui(we,(Me(l()),Se(()=>J<l().groupCount&&l().groupColor?p[l().groupColor]:"·")))}),ot(De,fe)}),Lt(oe);var ee=dt(oe,2),ie=Qt(ee);Cn(ie,1,()=>T(a),Jn,(De,J,fe)=>{var re=xy(),we=on(re);Cn(we,0,()=>Array(12),Jn,(Fe,te,se)=>{const he=Ii(()=>(Me(l()),Se(()=>l().rulesVersion==="crystal-canopy/1"?se:11-se))),ve=Ii(()=>(T(J),Me(T(he)),Se(()=>T(J)[T(he)])));var xe=_y();let Je;var qe=Qt(xe,!0);Lt(xe),Jt(ue=>{Je=jn(xe,1,"cell svelte-40oo2k",null,Je,ue),Ll(xe,(Me(T(ve)),Se(()=>`--drop:${T(ve).drop}`))),Ui(qe,(Me(T(ve)),Se(()=>T(ve).color?p[T(ve).color]:"")))},[()=>({occupied:!!T(ve).color,cyan:T(ve).color==="cyan",pink:T(ve).color==="pink",yellow:T(ve).color==="yellow",green:T(ve).color==="green",purple:T(ve).color==="purple",bursting:T(ve).bursting,settling:T(s)==="settle"&&T(ve).drop>0})]),ot(Fe,xe)});var Xe=dt(we,2);{var le=Fe=>{var te=vy();let se;tt(te,"aria-label",`Shoot column ${fe+1}`),Jt(()=>se=jn(te,1,"cursor svelte-40oo2k",null,se,{selected:l().cursor===fe})),Rl("pointerdown",te,qm(()=>f()?.(fe))),ot(Fe,te)},Te=Fe=>{var te=yy();let se;Jt(()=>se=jn(te,1,"cursor svelte-40oo2k",null,se,{selected:l().cursor===fe})),ot(Fe,te)};An(Xe,Fe=>{f()?Fe(le):Fe(Te,-1)})}ot(De,re)});var Pe=dt(ie,2),ut=Qt(Pe);$m(ut,()=>(Me(l()),T(n),T(s),Se(()=>`${l().cascades}:${T(n)}:${T(s)}`)),De=>{var J=Qs(),fe=on(J);Cn(fe,1,()=>T(o),Jn,(re,we)=>{var Xe=by();let le;Jt(()=>{le=jn(Xe,1,"burst svelte-40oo2k",null,le,{cyan:T(we).color==="cyan",pink:T(we).color==="pink",yellow:T(we).color==="yellow",green:T(we).color==="green",purple:T(we).color==="purple"}),Ll(Xe,(T(we),Se(()=>`grid-column:${T(we).column+1};grid-row:${12-T(we).row}`)))}),ot(re,Xe)}),ot(De,J)}),Lt(Pe),Lt(ee),Lt(B),Jt(De=>{H=jn(B,1,"quarry-shell svelte-40oo2k",null,H,{compact:u(),canopy:l().rulesVersion==="crystal-canopy/1"}),tt(B,"aria-label",c()),tt(B,"data-remaining",(Me(l()),Se(()=>l().total-l().removed))),tt(B,"data-rendered-remaining",De),tt(B,"data-cursor",(Me(l()),Se(()=>l().cursor))),tt(B,"data-cascades",(Me(l()),Se(()=>l().cascades))),tt(B,"data-cascade-stage",T(n)>=0?T(n)+1:""),tt(B,"data-cascade-stages",(T(v),Se(()=>T(v)?.waves.length??0))),tt(B,"data-cascade-phase",T(s)),tt(B,"data-cascade-cues",T(x)),tt(B,"data-terminal-presentation",T(v)?"playing":"complete")},[()=>(T(a),Se(()=>T(a).flat().filter(De=>De.color).length))]),ot(i,B),Pn()}const Hf=""+new URL("../assets/Prismatic Descent.ZNplIXQf.mp3",import.meta.url).href,Wf=""+new URL("../assets/Prismatic Descent Clear.BmLl8QF3.mp3",import.meta.url).href,My=""+new URL("../assets/Prismatic Descent Combo.hOwJq7xI.mp3",import.meta.url).href,wy=""+new URL("../assets/Prismatic Descent Reset.XTEzipFH.mp3",import.meta.url).href;function lI(i,e){In(e,!1);const t=st();let n=Ye(e,"enabled",8,!1),s=Ye(e,"phase",8,"playing"),r=Ye(e,"cascadeSignal",8,0),a=Ye(e,"resetSignal",8,0),o=st(s()),l=st(r()),c=st(a()),u=st(0),f=st(Wf);At(()=>(Me(s()),Hf),()=>{pe(t,s()==="playing"?Hf:void 0)}),At(()=>(Me(r()),T(l),T(u)),()=>{r()>T(l)&&(pe(f,My),cn(u),pe(l,r()))}),At(()=>(Me(a()),T(c),T(u)),()=>{a()>T(c)&&(pe(f,wy),cn(u),pe(c,a()))}),At(()=>(Me(s()),T(o),T(u)),()=>{s()!==T(o)&&(s()==="cleared"&&(pe(f,Wf),cn(u)),pe(o,s()))}),Bi(),mo(i,{get enabled(){return n()},get loopUrl(){return T(t)},loopKey:"quarry-match",get cueUrl(){return T(f)},get cueSignal(){return T(u)}}),Pn()}const Xf=""+new URL("../assets/Glacial Vault.Dw_n7dj9.mp3",import.meta.url).href,Ty=""+new URL("../assets/Glacial Vault Clear.C5HrP9Bz.mp3",import.meta.url).href,qf=""+new URL("../assets/Glacial Vault Shot.Ckp_Mc68.mp3",import.meta.url).href,Ey=""+new URL("../assets/Glacial Vault Triple.Bb19vC-Z.mp3",import.meta.url).href,Ay=""+new URL("../assets/Glacial Vault Reset.DYr4V8th.mp3",import.meta.url).href;function cI(i,e){In(e,!1);const t=st();let n=Ye(e,"enabled",8,!1),s=Ye(e,"phase",8,"playing"),r=Ye(e,"shotSignal",8,0),a=Ye(e,"tripleSignal",8,0),o=Ye(e,"resetSignal",8,0),l=st(s()),c=st(r()),u=st(a()),f=st(o()),h=st(0),d=st(qf);At(()=>(Me(s()),Xf),()=>{pe(t,s()==="playing"?Xf:void 0)}),At(()=>(Me(r()),T(c),T(h)),()=>{r()>T(c)&&(pe(d,qf),cn(h),pe(c,r()))}),At(()=>(Me(a()),T(u),T(h)),()=>{a()>T(u)&&(pe(d,Ey),cn(h),pe(u,a()))}),At(()=>(Me(o()),T(f),T(h),Me(r()),Me(a())),()=>{o()>T(f)&&(pe(d,Ay),cn(h),pe(f,o()),pe(c,r()),pe(u,a()))}),At(()=>(Me(s()),T(l),T(h)),()=>{s()!==T(l)&&(s()==="cleared"&&(pe(d,Ty),cn(h)),pe(l,s()))}),Bi(),mo(i,{get enabled(){return n()},get loopUrl(){return T(t)},loopKey:"crystal-canopy",get cueUrl(){return T(d)},get cueSignal(){return T(h)}}),Pn()}function Cy(i,e,t,n,s,r=3){const a=Object.fromEntries(i.map(c=>[c,e[c]??0]));t&&i.includes(t)?a[t]++:t=void 0;const o=!!t,l=n.filter(c=>i.includes(c));return{playerIds:i,readyPlayerIds:l,finished:o,winnerId:t,allReady:o&&i.every(c=>l.includes(c)),round:s,matchComplete:!!(i.length>1&&t&&a[t]>=r),roundPoints:Object.fromEntries(i.map(c=>[c,c===t?1:0])),scores:a}}function Ry(i){if(!bt(i)||!St(i,["type","roomId","ruleset","rulesVersion","seed","tickRate","hostUid","audioOutput","members","players","settings","matchId","round","previousGameId","scores","serverTime"])||i.type!=="game/started"||!(i.ruleset==="quarry-match"&&(i.rulesVersion==="quarry-match/2"||i.rulesVersion==="quarry-match/3")||i.ruleset==="crystal-canopy"&&i.rulesVersion==="crystal-canopy/1")||i.tickRate!==60||!Ct(i.seed,0,4294967295)||!Ct(i.round,0,4)||!yt(i.matchId)||!yt(i.hostUid)||!yt(i.roomId)||!zi(i.serverTime)||!bt(i.members)||!bt(i.players)||!bt(i.settings)||!St(i.settings,["width","height","targetWins","matchRounds"])||i.settings.width!==5||i.settings.height!==12||i.settings.targetWins!==3||i.settings.matchRounds!==5||i.previousGameId!==void 0&&!yt(i.previousGameId)||i.audioOutput!=="cast"&&i.audioOutput!=="controllers")throw new Error("Invalid match-puzzle start record.");const e=i.members,t=i.players,n=i.scores;if(!Object.entries(e).every(([s,r])=>yt(s)&&r===!0)||!Object.entries(t).every(([s,r])=>yt(s)&&e[s]===!0&&bt(r)&&St(r,["seat","level"])&&Ct(r.seat,0,3)&&Ct(r.level,0,20))||n!==void 0&&(!bt(n)||!St(n,Object.keys(t))||!Object.keys(t).every(s=>Ct(n[s],0,3))))throw new Error("Invalid Quarry Match roster or scores.");return i}function Iy(i,e,t=!1){const n=md(i,e,t),s=bt(n.payload)?n.payload:{};if(n.type==="input/move"&&St(s,["dx"])&&(s.dx===-1||s.dx===1))return{commandId:i,...n,type:"input/move",payload:{dx:s.dx}};if((n.type==="input/fire"||n.type==="input/restart")&&St(s,[]))return{commandId:i,...n,type:n.type,payload:{}};if(n.type==="attack/rain"&&St(s,["attackId","colors","columns"])&&yt(s.attackId)&&Array.isArray(s.colors)&&s.colors.length>=1&&s.colors.length<=4&&s.colors.every(r=>r==="cyan"||r==="pink"||r==="yellow"||r==="green"||r==="purple")&&Array.isArray(s.columns)&&s.columns.length===s.colors.length&&s.columns.every(r=>Ct(r,0,4)))return{commandId:i,...n,type:"attack/rain",payload:{attackId:s.attackId,colors:s.colors,columns:s.columns}};if(n.type==="progress/tick"&&St(s,["phase","stateHash"])&&(s.phase==="playing"||s.phase==="cleared")&&typeof s.stateHash=="string"&&/^(q2|q3|c1)-[0-9a-f]{8}$/.test(s.stateHash))return{commandId:i,...n,type:"progress/tick",payload:{phase:s.phase,stateHash:s.stateHash}};throw new Error("Invalid Quarry Match controller payload.")}const Zr=Ry,Nl=Iy,xs=i=>i.rulesVersion==="crystal-canopy/1",ig=(i,e)=>xs(i)?Z_(i.seed,e):K_(i.seed,e,i.rulesVersion),sg=i=>xs(i)?Q_(i):ev(i),rg=(i,e,t)=>xs(i)?j_(i,e,t):J_(i,e,t),Pu=i=>xs(i)?$_(i):Y_(i),Py=(i,e,t,n)=>xs(i)?tv(i,e,t,n):nv(i,e,t,n);async function hI(i){if(!ge)throw new Error("Firebase unavailable.");return Zr((await _t(Oe(ge,`games/${i}/start`))).val())}function Dy(i,e,t){if(!ge)throw new Error("Firebase unavailable.");let n,s,r=[];const a=[],o=()=>{n&&e(Cy(Object.keys(n.players),n.scores??{},s,r,n.round,n.settings.targetWins))};return _t(Oe(ge,`games/${i}/start`)).then(l=>{n=Zr(l.val()),a.push(ui(Oe(ge,`games/${i}/winner`),c=>{const u=c.val();s=u&&Object.hasOwn(n.players,u.playerId)?u.playerId:void 0,o()},t),ui(Oe(ge,`games/${i}/rematch/ready`),c=>{r=[],c.forEach(u=>{u.val()?.playerId===u.key&&Object.hasOwn(n.players,u.key)&&r.push(u.key)}),o()},t)),o()}).catch(l=>t(l instanceof Error?l:new Error(String(l)))),()=>a.forEach(l=>l())}const uI=(i,e)=>Nc(i,e);async function Ly(i){if(!ge)throw new Error("Firebase unavailable.");const[e,t]=await Promise.all([_t(Oe(ge,`games/${i}/start`)),_t(Oe(ge,`games/${i}/winner`))]);Zr(e.val());const n=t.val()?.playerId;return Oc(i,Zr,s=>{const r=Object.keys(s.players).length===1,a=Object.fromEntries(Object.keys(s.players).map(l=>[l,(s.scores?.[l]??0)+(l===n?1:0)])),o=!!(!r&&n&&a[n]>=s.settings.targetWins);return{advance:!r&&!o,round:r?0:s.round+1,scores:r||o?Object.fromEntries(Object.keys(s.players).map(l=>[l,0])):a}})}function dI(i,e){if(!hi?.currentUser||!ge)throw new Error("Firebase unavailable.");const t=hi.currentUser.uid,n=new Cs(Hm.tickRate),s=vd("quarry",i,t,"outbox");let r,a,o=0,l=0,c=!1,u=!1,f=!1,h=!1,d=0,p=-1,_,g,m,v=!1,b=[],y=()=>{},w=()=>{};const M=new Set,C=vo(localStorage,s,B=>{if(!B||typeof B!="object"||typeof B.commandId!="string")throw new Error("Invalid Quarry Match outbox.");const{commandId:H,...oe}=B;return Nl(H,oe,!0)}),x=B=>e({playerId:t,tick:o,ready:c,state:r?structuredClone(r):void 0,lifecycle:m,audioOutput:g,error:B,lastCommand:_,ownershipConflict:v,opponents:b.map(H=>({...H,state:structuredClone(H.state)}))}),E=new kc(ge,`games/${i}/players/${t}/writer`,()=>{v=!0,c=!1,cancelAnimationFrame(d),x("This controller was taken over by another tab.")}),R=Dy(i,B=>{m=B,B.finished&&cancelAnimationFrame(d),B.allReady&&!h&&(h=!0,Ly(i).catch(H=>{h=!1,x(H instanceof Error?H.message:String(H))})),x()},B=>x(B.message)),D=new Xa({initial:C,order:(B,H)=>B.clientSeq-H.clientSeq,identify:B=>B.commandId,persist:B=>yo(localStorage,s,B),deliver:async B=>{if(!c)throw new Error("Controller is not ready.");const{commandId:H,...oe}=B;await oi(Oe(ge,`games/${i}/players/${t}/records/${H}`),{...oe,serverTime:li()})},failed:B=>x(B instanceof Error?B.message:String(B))}),z=B=>{const oe={commandId:Ga(Oe(ge,`games/${i}/players/${t}/records`)).key,playerId:t,epochId:E.epochId,clientSeq:++l,tick:o,...B};return D.enqueue(oe),oe},L=(B=!1)=>{!r||!B&&o-p<15||(z({type:"progress/tick",payload:{phase:r.phase,stateHash:Pu(r)}}),p=o)},O=()=>{!r||r.phase!=="cleared"||Pl(Oe(ge,`games/${i}/winner`),B=>B===null?{playerId:t,tick:r.tick,stateHash:Pu(r),serverTime:li()}:void 0,{applyLocally:!1}).catch(B=>x(B.message))},F=B=>{if(!(u||f||!c||!r||r.phase==="cleared"||m?.finished)){for(let H=n.consume(B);H>0;H--)sg(r),o=r.tick;L(),x(),d=requestAnimationFrame(F)}},U=ui(Oe(ge,`games/${i}/start`),async B=>{if(!c)try{if(a=Zr(B.val()),!a.players[t])throw new Error("Player is not part of this Quarry Match game.");if(g=a.audioOutput,!await E.claim())throw v=!0,new Error("This controller is already active in another tab.");v=!1,y(),y=Uy(i,ie=>{b=ie.filter(Pe=>Pe.playerId!==t),x()},ie=>x(ie.message));const H=await _t(Oe(ge,`games/${i}/players/${t}/records`)),oe=new Map;H.forEach(ie=>{const Pe=Nl(ie.key,ie.val());oe.set(Pe.commandId,Pe),Pe.type==="attack/rain"&&M.add(Pe.payload.attackId)});for(const ie of D.values())oe.set(ie.commandId,ie);const ee=[...oe.values()].sort((ie,Pe)=>ie.clientSeq-Pe.clientSeq);r=Py(ig(a,a.players[t].level),Math.max(0,...ee.map(ie=>ie.tick)),ee,a.seed),o=r.tick,l=Math.max(0,...ee.map(ie=>ie.clientSeq)),await Fc(ge,i,t,E.epochId,E.clientId,o,l),c=!0,w(),w=ns(Oe(ge,`games/${i}/interactions`),ie=>{const Pe=ie.val();xs(a)||Pe?.type!=="attack/generated"||!Pe.attackId||!Pe.targetPlayerIds?.includes(t)||M.has(Pe.attackId)||M.add(Pe.attackId)},ie=>x(ie.message)),D.flush(),L(!0),x(),r.phase==="cleared"?O():d=requestAnimationFrame(F)}catch(H){x(H instanceof Error?H.message:String(H))}},B=>x(B.message)),N=()=>{D.flush()};return window.addEventListener("online",N),{command(B){!c||!r||r.phase!=="playing"||!a||B.type==="input/fire"&&(!(xs(r)?r.columns[r.cursor].at(-1):r.columns[r.cursor][0])||r.groupColor&&(xs(r)?r.columns[r.cursor].at(-1):r.columns[r.cursor][0])!==r.groupColor)||(z(B),rg(r,B,a.seed),o=r.tick,_=`${B.type} · tick ${o}`,r.phase==="cleared"&&(L(!0),O()),x())},suspend(){!c||f||(f=!0,cancelAnimationFrame(d),n.reset(),L(!0))},resume(){!c||!f||(f=!1,n.reset(),d=requestAnimationFrame(F))},async takeOver(){await E.takeOver()&&(v=!1,c=!0,f=!1,D.flush(),d=requestAnimationFrame(F),x())},destroy(){L(!0),u=!0,U(),R(),y(),w(),cancelAnimationFrame(d),window.removeEventListener("online",N),D.destroy(),E.release()}}}function Uy(i,e,t){if(!ge)throw new Error("Firebase unavailable.");let n=!1,s=0,r;const a=new Cs(Hm.tickRate),o=new Map,l=new Map,c=[],u={clone:h=>structuredClone(h),tick:h=>h.tick,advanceTo:(h,d)=>{for(;h.tick<d&&h.phase==="playing";)sg(h)},apply:(h,d)=>{d.type!=="progress/tick"&&rg(h,d,r.seed)},hash:Pu,phase:h=>h.phase,terminal:h=>h.phase==="cleared",progress:h=>h.type==="progress/tick"?h.payload:void 0},f=()=>e([...l].map(([h,d])=>{const p=d.snapshot();return{playerId:h,tick:p.displayTick,controllerTick:p.controllerTick,lag:p.lag,state:p.state,hashMatches:p.hashMatches}}));return _t(Oe(ge,`games/${i}/start`)).then(async h=>{r=Zr(h.val());let d=0;if(await Promise.all(Object.keys(r.players).map(async _=>{const g=await _t(Oe(ge,`games/${i}/players/${_}/records`)),m=[];g.forEach(v=>{m.push(Nl(v.key,v.val()))}),m.sort((v,b)=>v.clientSeq-b.clientSeq),o.set(_,m);for(const v of m)v.type==="progress/tick"&&(d=Math.max(d,v.tick))})),n)return;for(const _ of Object.keys(r.players)){const g=new Uc(u,ig(r,r.players[_].level),d);l.set(_,g);for(const m of o.get(_)??[])g.receive(m);c.push(ns(Oe(ge,`games/${i}/players/${_}/records`),m=>{try{g.receive(Nl(m.key,m.val())),f()}catch(v){t(v instanceof Error?v:new Error(String(v)))}},t))}const p=_=>{if(!n){for(let g=a.consume(_);g>0;g--)for(const m of l.values())m.advance();f(),s=requestAnimationFrame(p)}};f(),s=requestAnimationFrame(p)}).catch(h=>t(h instanceof Error?h:new Error(String(h)))),()=>{n=!0,cancelAnimationFrame(s),c.forEach(h=>h())}}const $f=""+new URL("../assets/Ivory Avalanche.jheecTlA.mp3",import.meta.url).href,Ny=""+new URL("../assets/Ivory Avalanche Clear.CHjDqg-F.mp3",import.meta.url).href,Lh=""+new URL("../assets/Ivory Avalanche Catch.Cin_KYx1.mp3",import.meta.url).href,Yf=""+new URL("../assets/Ivory Avalanche Place.BAM6pE8m.mp3",import.meta.url).href,Oy=""+new URL("../assets/Ivory Avalanche Throw.CcIWy32w.mp3",import.meta.url).href,Fy=""+new URL("../assets/Ivory Avalanche Chain.B0QUhIke.mp3",import.meta.url).href,ky=""+new URL("../assets/Ivory Avalanche Miss.B0VhYMKi.mp3",import.meta.url).href,Zf=""+new URL("../assets/Ivory Avalanche Failure.BOUADSZZ.mp3",import.meta.url).href;function fI(i,e){In(e,!1);const t=st();let n=Ye(e,"enabled",8,!1),s=Ye(e,"phase",8,"countdown"),r=Ye(e,"survived",8,0),a=Ye(e,"placements",8,0),o=Ye(e,"chains",8,0),l=Ye(e,"misses",8,0),c=Ye(e,"returns",8,0),u=st(s()),f=st(r()),h=st(a()),d=st(o()),p=st(l()),_=st(c()),g=st(0),m=st(Lh);At(()=>(Me(s()),$f),()=>{pe(t,s()==="playing"?$f:void 0)}),At(()=>(Me(o()),T(d),T(g),Me(a()),T(h),Yf),()=>{o()>T(d)?(pe(m,Fy),cn(g),pe(d,o())):a()>T(h)&&(pe(m,Yf),cn(g),pe(h,a()))}),At(()=>(Me(l()),T(p),T(g),Me(r()),T(f),Lh),()=>{l()>T(p)?(pe(m,ky),cn(g),pe(p,l())):r()>T(f)&&(pe(m,Lh),cn(g),pe(f,r()))}),At(()=>(Me(c()),T(_),T(g)),()=>{c()>T(_)&&(pe(m,Oy),cn(g),pe(_,c()))}),At(()=>(Me(s()),T(u),T(g),Zf),()=>{s()!==T(u)&&(s()==="cleared"?(pe(m,Ny),cn(g)):s()==="lost"&&(pe(m,Zf),cn(g)),pe(u,s()))}),Bi(),mo(i,{get enabled(){return n()},get loopUrl(){return T(t)},loopKey:"stax",get cueUrl(){return T(m)},get cueSignal(){return T(g)}}),Pn()}const Uh=(i,e)=>{if(i===e)return!0;if(!i||!e)return!1;const t=i.length;if(e.length!==t)return!1;for(let n=0;n<t;n++)if(i[n]!==e[n])return!1;return!0},By=()=>{const i=[],n={items:i,remember:(s,r)=>{for(let l=0;l<i.length;l++){const c=i[l];if(Uh(r,c.keys)&&c.promise)return c.promise}const a=s();a.catch(()=>{for(let l=0;l<i.length;l++){const c=i[l];if(Uh(r,c.keys)){i.splice(l,1);break}}});const o={promise:a,keys:r};return i.push(o),o.promise},clear:s=>{for(let r=0;r<i.length;r++){const a=i[r];if(Uh(s,a.keys)){i.splice(r,1);return}}}};return wi("threlte-cache",n),n};const Bc="185",er={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ys={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ag=0,Du=1,og=2,zy=3,Vy=0,Ia=1,Ol=2,Gr=3,Qi=0,Bn=1,Pi=2,Ni=0,tr=1,Lu=2,Uu=3,Nu=4,lg=5,Gy=6,gs=100,cg=101,hg=102,ug=103,dg=104,fg=200,pg=201,mg=202,gg=203,Fl=204,kl=205,_g=206,vg=207,yg=208,xg=209,bg=210,Sg=211,Mg=212,wg=213,Tg=214,Bl=0,zl=1,Vl=2,sr=3,Gl=4,Hl=5,Wl=6,Xl=7,xo=0,Eg=1,Ag=2,Si=0,yd=1,xd=2,bd=3,Sd=4,Md=5,zc=6,wd=7,Ou="attached",Cg="detached",Vc=300,Oi=301,Ms=302,Pa=303,Da=304,ra=306,$a=1e3,qn=1001,Ya=1002,sn=1003,Td=1004,Hy=1004,Hr=1005,Wy=1005,Wt=1006,La=1007,Xy=1007,Di=1008,qy=1008,Wn=1009,Ed=1010,Ad=1011,Kr=1012,Gc=1013,di=1014,Fn=1015,Fi=1016,Hc=1017,Wc=1018,jr=1020,Cd=35902,Rd=35899,Id=1021,Pd=1022,kn=1023,ki=1026,_s=1027,Xc=1028,bo=1029,ws=1030,qc=1031,$y=1032,$c=1033,Ua=33776,Na=33777,Oa=33778,Fa=33779,ql=35840,$l=35841,Yl=35842,Zl=35843,Kl=36196,jl=37492,Jl=37496,Ql=37488,ec=37489,Za=37490,tc=37491,nc=37808,ic=37809,sc=37810,rc=37811,ac=37812,oc=37813,lc=37814,cc=37815,hc=37816,uc=37817,dc=37818,fc=37819,pc=37820,mc=37821,gc=36492,_c=36494,vc=36495,yc=36283,xc=36284,Ka=36285,bc=36286,Rg=2200,Ig=2201,Pg=2202,ja=2300,Sc=2301,El=2302,Fu=2303,Zs=2400,Ks=2401,Ja=2402,Yc=2500,Dd=2501,Yy=0,Zy=1,Ky=2,Dg=3200,jy=3201,Jy=3202,Qy=3203,es=0,Lg=1,Ki="",Nn="srgb",Qa="srgb-linear",eo="linear",Dt="srgb",ex="",tx="rg",nx="ga",ix=0,qs=7680,sx=7681,rx=7682,ax=7683,ox=34055,lx=34056,cx=5386,hx=512,ux=513,dx=514,fx=515,px=516,mx=517,gx=518,ku=519,Ug=512,Ng=513,Og=514,Zc=515,Fg=516,kg=517,Kc=518,Bg=519,to=35044,_x=35048,vx=35040,yx=35045,xx=35049,bx=35041,Sx=35046,Mx=35050,wx=35042,Tx="100",Bu="300 es",Qn=2e3,rr=2001,Ex={COMPUTE:"compute",RENDER:"render"},Ax={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},Cx={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},Rx={TEXTURE_COMPARE:"depthTextureCompare"};function Ix(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}const Px={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Wr(i,e){return new Px[i](e)}function zg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function no(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vg(){const i=no("canvas");return i.style.display="block",i}const Kf={};let Ts=null;function Dx(i){Ts=i}function Lx(){return Ts}function io(...i){const e="THREE."+i.shift();Ts?Ts("log",e,...i):console.log(e,...i)}function Gg(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ce(...i){i=Gg(i);const e="THREE."+i.shift();if(Ts)Ts("warn",e,...i);else{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function je(...i){i=Gg(i);const e="THREE."+i.shift();if(Ts)Ts("error",e,...i);else{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function bs(...i){const e=i.join(" ");e in Kf||(Kf[e]=!0,Ce(...i))}function Ux(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Nx={[Bl]:zl,[Vl]:Wl,[Gl]:Xl,[sr]:Hl,[zl]:Bl,[Wl]:Vl,[Xl]:Gl,[Hl]:sr};class Ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jf=1234567;const nr=Math.PI/180,Jr=180/Math.PI;function ti(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function rt(i,e,t){return Math.max(e,Math.min(t,i))}function Ld(i,e){return(i%e+e)%e}function Ox(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Fx(i,e,t){return i!==e?(t-i)/(e-i):0}function ka(i,e,t){return(1-t)*i+t*e}function kx(i,e,t,n){return ka(i,e,1-Math.exp(-t*n))}function Bx(i,e=1){return e-Math.abs(Ld(i,e*2)-e)}function zx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Vx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Gx(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Hx(i,e){return i+Math.random()*(e-i)}function Wx(i){return i*(.5-Math.random())}function Xx(i){i!==void 0&&(jf=i);let e=jf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qx(i){return i*nr}function $x(i){return i*Jr}function Yx(i){return(i&i-1)===0&&i!==0}function Zx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Kx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jx(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),f=r((e-n)/2),h=a((e-n)/2),d=r((n-e)/2),p=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*f,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*p,l*d,o*c);break;case"YXY":i.set(l*d,o*u,l*p,o*c);break;case"ZYZ":i.set(l*p,l*d,o*u,o*c);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function On(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Hg={DEG2RAD:nr,RAD2DEG:Jr,generateUUID:ti,clamp:rt,euclideanModulo:Ld,mapLinear:Ox,inverseLerp:Fx,lerp:ka,damp:kx,pingpong:Bx,smoothstep:zx,smootherstep:Vx,randInt:Gx,randFloat:Hx,randFloatSpread:Wx,seededRandom:Xx,degToRad:qx,radToDeg:$x,isPowerOfTwo:Yx,ceilPowerOfTwo:Zx,floorPowerOfTwo:Kx,setQuaternionFromProperEuler:jx,normalize:pt,denormalize:On},yf=class yf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yf.prototype.isVector2=!0;let ae=yf;class yn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],d=r[a+1],p=r[a+2],_=r[a+3];if(f!==_||l!==h||c!==d||u!==p){let g=l*h+c*d+u*p+f*_;g<0&&(h=-h,d=-d,p=-p,_=-_,g=-g);let m=1-o;if(g<.9995){const v=Math.acos(g),b=Math.sin(v);m=Math.sin(m*v)/b,o=Math.sin(o*v)/b,l=l*m+h*o,c=c*m+d*o,u=u*m+p*o,f=f*m+_*o}else{l=l*m+h*o,c=c*m+d*o,u=u*m+p*o,f=f*m+_*o;const v=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=v,c*=v,u*=v,f*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],h=r[a+1],d=r[a+2],p=r[a+3];return e[t]=o*p+u*f+l*d-c*h,e[t+1]=l*p+u*h+c*f-o*d,e[t+2]=c*p+u*d+o*h-l*f,e[t+3]=u*p-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),h=l(n/2),d=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"YXZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"ZXY":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"ZYX":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"YZX":this._x=h*u*f+c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f-h*d*p;break;case"XZY":this._x=h*u*f-c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f+h*d*p;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const xf=class xf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nh.copy(this).projectOnVector(e),this.sub(Nh)}reflect(e){return this.sub(Nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xf.prototype.isVector3=!0;let P=xf;const Nh=new P,Jf=new yn,bf=class bf{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],p=n[8],_=s[0],g=s[3],m=s[6],v=s[1],b=s[4],y=s[7],w=s[2],M=s[5],C=s[8];return r[0]=a*_+o*v+l*w,r[3]=a*g+o*b+l*M,r[6]=a*m+o*y+l*C,r[1]=c*_+u*v+f*w,r[4]=c*g+u*b+f*M,r[7]=c*m+u*y+f*C,r[2]=h*_+d*v+p*w,r[5]=h*g+d*b+p*M,r[8]=h*m+d*y+p*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,p=t*f+n*h+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=f*_,e[1]=(s*c-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Oh.makeScale(e,t)),this}rotate(e){return bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Oh.makeRotation(-e)),this}translate(e,t){return bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Oh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bf.prototype.isMatrix3=!0;let ct=bf;const Oh=new ct,Qf=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ep=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jx(){const i={enabled:!0,workingColorSpace:Qa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Dt&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Dt&&(s.r=$r(s.r),s.g=$r(s.g),s.b=$r(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ki?eo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qa]:{primaries:e,whitePoint:n,transfer:eo,toXYZ:Qf,fromXYZ:ep,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:e,whitePoint:n,transfer:Dt,toXYZ:Qf,fromXYZ:ep,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),i}const vt=Jx();function Ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let yr;class Wg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{yr===void 0&&(yr=no("canvas")),yr.width=e.width,yr.height=e.height;const s=yr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=yr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=no("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ji(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ji(t[n]/255)*255):t[n]=Ji(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qx=0;class vs{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Fh(s[a].image)):r.push(Fh(s[a]))}else r=Fh(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Fh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}let eb=0;const kh=new P;class Yt extends Ti{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,n=qn,s=qn,r=Wt,a=Di,o=kn,l=Wn,c=Yt.DEFAULT_ANISOTROPY,u=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=ti(),this.name="",this.source=new vs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kh).x}get height(){return this.source.getSize(kh).y}get depth(){return this.source.getSize(kh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $a:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case Ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $a:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case Ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Vc;Yt.DEFAULT_ANISOTROPY=1;const Sf=class Sf{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(d+1)/2,w=(m+1)/2,M=(u+h)/4,C=(f+_)/4,x=(p+g)/4;return b>y&&b>w?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=M/n,r=C/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=M/s,r=x/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=C/r,s=x/r),this.set(n,s,r,t),this}let v=Math.sqrt((g-p)*(g-p)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(f-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sf.prototype.isVector4=!0;let Ut=Sf;class Ud extends Ti{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Yt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new vs(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends Ud{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jc extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tb extends ni{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new jc(null,e,t,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}}class Jc extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nb extends ni{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Jc(null,e,t,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}}const Cc=class Cc{constructor(e,t,n,s,r,a,o,l,c,u,f,h,d,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,f,h,d,p,_,g)}set(e,t,n,s,r,a,o,l,c,u,f,h,d,p,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Cc().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/xr.setFromMatrixColumn(e,0).length(),r=1/xr.setFromMatrixColumn(e,1).length(),a=1/xr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,d=a*f,p=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=p+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,p=c*u,_=c*f;t[0]=h+_*o,t[4]=p*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-p,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,p=c*u,_=c*f;t[0]=h-_*o,t[4]=-a*f,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,p=o*u,_=o*f;t[0]=l*u,t[4]=p*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,p=o*l,_=o*c;t[0]=l*u,t[4]=_-h*f,t[8]=p*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+p,t[10]=h-_*f}else if(e.order==="XZY"){const h=a*l,d=a*c,p=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=a*u,t[9]=d*f-p,t[2]=p*f-d,t[6]=o*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ib,e,sb)}lookAt(e,t,n){const s=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),os.crossVectors(n,Zn),os.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),os.crossVectors(n,Zn)),os.normalize(),Po.crossVectors(Zn,os),s[0]=os.x,s[4]=Po.x,s[8]=Zn.x,s[1]=os.y,s[5]=Po.y,s[9]=Zn.y,s[2]=os.z,s[6]=Po.z,s[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],p=n[2],_=n[6],g=n[10],m=n[14],v=n[3],b=n[7],y=n[11],w=n[15],M=s[0],C=s[4],x=s[8],E=s[12],R=s[1],D=s[5],z=s[9],L=s[13],O=s[2],F=s[6],U=s[10],N=s[14],B=s[3],H=s[7],oe=s[11],ee=s[15];return r[0]=a*M+o*R+l*O+c*B,r[4]=a*C+o*D+l*F+c*H,r[8]=a*x+o*z+l*U+c*oe,r[12]=a*E+o*L+l*N+c*ee,r[1]=u*M+f*R+h*O+d*B,r[5]=u*C+f*D+h*F+d*H,r[9]=u*x+f*z+h*U+d*oe,r[13]=u*E+f*L+h*N+d*ee,r[2]=p*M+_*R+g*O+m*B,r[6]=p*C+_*D+g*F+m*H,r[10]=p*x+_*z+g*U+m*oe,r[14]=p*E+_*L+g*N+m*ee,r[3]=v*M+b*R+y*O+w*B,r[7]=v*C+b*D+y*F+w*H,r[11]=v*x+b*z+y*U+w*oe,r[15]=v*E+b*L+y*N+w*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],p=e[3],_=e[7],g=e[11],m=e[15],v=l*d-c*h,b=o*d-c*f,y=o*h-l*f,w=a*d-c*u,M=a*h-l*u,C=a*f-o*u;return t*(_*v-g*b+m*y)-n*(p*v-g*w+m*M)+s*(p*b-_*w+m*C)-r*(p*y-_*M+g*C)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],p=e[12],_=e[13],g=e[14],m=e[15],v=t*o-n*a,b=t*l-s*a,y=t*c-r*a,w=n*l-s*o,M=n*c-r*o,C=s*c-r*l,x=u*_-f*p,E=u*g-h*p,R=u*m-d*p,D=f*g-h*_,z=f*m-d*_,L=h*m-d*g,O=v*L-b*z+y*D+w*R-M*E+C*x;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return e[0]=(o*L-l*z+c*D)*F,e[1]=(s*z-n*L-r*D)*F,e[2]=(_*C-g*M+m*w)*F,e[3]=(h*M-f*C-d*w)*F,e[4]=(l*R-a*L-c*E)*F,e[5]=(t*L-s*R+r*E)*F,e[6]=(g*y-p*C-m*b)*F,e[7]=(u*C-h*y+d*b)*F,e[8]=(a*z-o*R+c*x)*F,e[9]=(n*R-t*z-r*x)*F,e[10]=(p*M-_*y+m*v)*F,e[11]=(f*y-u*M-d*v)*F,e[12]=(o*E-a*D-l*x)*F,e[13]=(t*D-n*E+s*x)*F,e[14]=(_*b-p*w-g*v)*F,e[15]=(u*w-f*b+h*v)*F,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,p=r*f,_=a*u,g=a*f,m=o*f,v=l*c,b=l*u,y=l*f,w=n.x,M=n.y,C=n.z;return s[0]=(1-(_+m))*w,s[1]=(d+y)*w,s[2]=(p-b)*w,s[3]=0,s[4]=(d-y)*M,s[5]=(1-(h+m))*M,s[6]=(g+v)*M,s[7]=0,s[8]=(p+b)*C,s[9]=(g-v)*C,s[10]=(1-(h+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=xr.set(s[0],s[1],s[2]).length();const o=xr.set(s[4],s[5],s[6]).length(),l=xr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),gi.copy(this);const c=1/a,u=1/o,f=1/l;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=u,gi.elements[5]*=u,gi.elements[6]*=u,gi.elements[8]*=f,gi.elements[9]*=f,gi.elements[10]*=f,t.setFromRotationMatrix(gi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Qn,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let p,_;if(l)p=r/(a-r),_=a*r/(a-r);else if(o===Qn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===rr)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Qn,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),d=-(n+s)/(n-s);let p,_;if(l)p=1/(a-r),_=a/(a-r);else if(o===Qn)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===rr)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Cc.prototype.isMatrix4=!0;let nt=Cc;const xr=new P,gi=new nt,ib=new P(0,0,0),sb=new P(1,1,1),os=new P,Po=new P,Zn=new P,tp=new nt,np=new yn;class Mi{constructor(e=0,t=0,n=0,s=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return np.setFromEuler(this),this.setFromQuaternion(np,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class Qc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rb=0;const ip=new P,br=new yn,Hi=new nt,Do=new P,ua=new P,ab=new P,ob=new yn,sp=new P(1,0,0),rp=new P(0,1,0),ap=new P(0,0,1),op={type:"added"},lb={type:"removed"},Sr={type:"childadded",child:null},Bh={type:"childremoved",child:null};class wt extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new P,t=new Mi,n=new yn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new ct}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(sp,e)}rotateY(e){return this.rotateOnAxis(rp,e)}rotateZ(e){return this.rotateOnAxis(ap,e)}translateOnAxis(e,t){return ip.copy(e).applyQuaternion(this.quaternion),this.position.add(ip.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sp,e)}translateY(e){return this.translateOnAxis(rp,e)}translateZ(e){return this.translateOnAxis(ap,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Do.copy(e):Do.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(ua,Do,this.up):Hi.lookAt(Do,ua,this.up),this.quaternion.setFromRotationMatrix(Hi),s&&(Hi.extractRotation(s.matrixWorld),br.setFromRotationMatrix(Hi),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(op),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lb),Bh.child=e,this.dispatchEvent(Bh),Bh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(op),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,e,ab),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,ob,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}wt.DEFAULT_UP=new P(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Xr extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cb={type:"move"};class Al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&h>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cb)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Xg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function zh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=vt.workingColorSpace){if(e=Ld(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=zh(a,r,e+1/3),this.g=zh(a,r,e),this.b=zh(a,r,e-1/3)}return vt.colorSpaceToWorking(this,s),this}setStyle(e,t=Nn){function n(r){r!==void 0&&parseFloat(r)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nn){const n=Xg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return vt.workingToColorSpace(Tn.copy(this),e),Math.round(rt(Tn.r*255,0,255))*65536+Math.round(rt(Tn.g*255,0,255))*256+Math.round(rt(Tn.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(Tn.copy(this),t);const n=Tn.r,s=Tn.g,r=Tn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=Nn){vt.workingToColorSpace(Tn.copy(this),e);const t=Tn.r,n=Tn.g,s=Tn.b;return e!==Nn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ls),this.setHSL(ls.h+e,ls.s+t,ls.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ls),e.getHSL(Lo);const n=ka(ls.h,Lo.h,t),s=ka(ls.s,Lo.s,t),r=ka(ls.l,Lo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Be;Be.NAMES=Xg;class eh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Be(e),this.density=t}clone(){return new eh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class th{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=n}clone(){return new th(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Nd extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const _i=new P,Wi=new P,Vh=new P,Xi=new P,Mr=new P,wr=new P,lp=new P,Gh=new P,Hh=new P,Wh=new P,Xh=new Ut,qh=new Ut,$h=new Ut;class Xn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),_i.subVectors(e,t),s.cross(_i);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){_i.subVectors(s,t),Wi.subVectors(n,t),Vh.subVectors(e,t);const a=_i.dot(_i),o=_i.dot(Wi),l=_i.dot(Vh),c=Wi.dot(Wi),u=Wi.dot(Vh),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,p=(a*u-o*l)*h;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xi.x),l.addScaledVector(a,Xi.y),l.addScaledVector(o,Xi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Xh.setScalar(0),qh.setScalar(0),$h.setScalar(0),Xh.fromBufferAttribute(e,t),qh.fromBufferAttribute(e,n),$h.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Xh,r.x),a.addScaledVector(qh,r.y),a.addScaledVector($h,r.z),a}static isFrontFacing(e,t,n,s){return _i.subVectors(n,t),Wi.subVectors(e,t),_i.cross(Wi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),_i.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Xn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Mr.subVectors(s,n),wr.subVectors(r,n),Gh.subVectors(e,n);const l=Mr.dot(Gh),c=wr.dot(Gh);if(l<=0&&c<=0)return t.copy(n);Hh.subVectors(e,s);const u=Mr.dot(Hh),f=wr.dot(Hh);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Mr,a);Wh.subVectors(e,r);const d=Mr.dot(Wh),p=wr.dot(Wh);if(p>=0&&d<=p)return t.copy(r);const _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(wr,o);const g=u*p-d*f;if(g<=0&&f-u>=0&&d-p>=0)return lp.subVectors(r,s),o=(f-u)/(f-u+(d-p)),t.copy(s).addScaledVector(lp,o);const m=1/(g+_+h);return a=_*m,o=h*m,t.copy(n).addScaledVector(Mr,a).addScaledVector(wr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Rn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vi):vi.fromBufferAttribute(r,a),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Uo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Uo.copy(n.boundingBox)),Uo.applyMatrix4(e.matrixWorld),this.union(Uo)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(da),No.subVectors(this.max,da),Tr.subVectors(e.a,da),Er.subVectors(e.b,da),Ar.subVectors(e.c,da),cs.subVectors(Er,Tr),hs.subVectors(Ar,Er),Ls.subVectors(Tr,Ar);let t=[0,-cs.z,cs.y,0,-hs.z,hs.y,0,-Ls.z,Ls.y,cs.z,0,-cs.x,hs.z,0,-hs.x,Ls.z,0,-Ls.x,-cs.y,cs.x,0,-hs.y,hs.x,0,-Ls.y,Ls.x,0];return!Yh(t,Tr,Er,Ar,No)||(t=[1,0,0,0,1,0,0,0,1],!Yh(t,Tr,Er,Ar,No))?!1:(Oo.crossVectors(cs,hs),t=[Oo.x,Oo.y,Oo.z],Yh(t,Tr,Er,Ar,No))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qi=[new P,new P,new P,new P,new P,new P,new P,new P],vi=new P,Uo=new Rn,Tr=new P,Er=new P,Ar=new P,cs=new P,hs=new P,Ls=new P,da=new P,No=new P,Oo=new P,Us=new P;function Yh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Us.fromArray(i,r);const o=s.x*Math.abs(Us.x)+s.y*Math.abs(Us.y)+s.z*Math.abs(Us.z),l=e.dot(Us),c=t.dot(Us),u=n.dot(Us);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ji=hb();function hb(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Hn(i){Math.abs(i)>65504&&Ce("DataUtils.toHalfFloat(): Value out of range."),i=rt(i,-65504,65504),ji.floatView[0]=i;const e=ji.uint32View[0],t=e>>23&511;return ji.baseTable[t]+((e&8388607)>>ji.shiftTable[t])}function Ea(i){const e=i>>10;return ji.uint32View[0]=ji.mantissaTable[ji.offsetTable[e]+(i&1023)]+ji.exponentTable[e],ji.floatView[0]}class ub{static toHalfFloat(e){return Hn(e)}static fromHalfFloat(e){return Ea(e)}}const an=new P,Fo=new ae;let db=0;class kt extends Ti{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:db++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=to,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fo.fromBufferAttribute(this,t),Fo.applyMatrix3(e),this.setXY(t,Fo.x,Fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=On(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=On(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=On(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=On(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==to&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class fb extends kt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class pb extends kt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class mb extends kt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class gb extends kt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Od extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class _b extends kt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Fd extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vb extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Ea(this.array[e*this.itemSize]);return this.normalized&&(t=On(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=Hn(t),this}getY(e){let t=Ea(this.array[e*this.itemSize+1]);return this.normalized&&(t=On(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=Hn(t),this}getZ(e){let t=Ea(this.array[e*this.itemSize+2]);return this.normalized&&(t=On(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=Hn(t),this}getW(e){let t=Ea(this.array[e*this.itemSize+3]);return this.normalized&&(t=On(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=Hn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=Hn(t),this.array[e+1]=Hn(n),this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.array[e+0]=Hn(t),this.array[e+1]=Hn(n),this.array[e+2]=Hn(s),this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.array[e+0]=Hn(t),this.array[e+1]=Hn(n),this.array[e+2]=Hn(s),this.array[e+3]=Hn(r),this}}class Ve extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const yb=new Rn,fa=new P,Zh=new P;class xn{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yb.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fa.subVectors(e,this.center);const t=fa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(fa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fa.copy(e.center).add(Zh)),this.expandByPoint(fa.copy(e.center).sub(Zh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let xb=0;const si=new nt,Kh=new wt,Cr=new P,Kn=new Rn,pa=new Rn,fn=new P;class ht extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ix(e)?Fd:Od)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ct().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,n){return si.makeTranslation(e,t,n),this.applyMatrix4(si),this}scale(e,t,n){return si.makeScale(e,t,n),this.applyMatrix4(si),this}lookAt(e){return Kh.lookAt(e),Kh.updateMatrix(),this.applyMatrix4(Kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ve(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Kn.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];pa.setFromBufferAttribute(o),this.morphTargetsRelative?(fn.addVectors(Kn.min,pa.min),Kn.expandByPoint(fn),fn.addVectors(Kn.max,pa.max),Kn.expandByPoint(fn)):(Kn.expandByPoint(pa.min),Kn.expandByPoint(pa.max))}Kn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)fn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(fn));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)fn.fromBufferAttribute(o,c),l&&(Cr.fromBufferAttribute(e,c),fn.add(Cr)),s=Math.max(s,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new kt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new P,l[x]=new P;const c=new P,u=new P,f=new P,h=new ae,d=new ae,p=new ae,_=new P,g=new P;function m(x,E,R){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,R),h.fromBufferAttribute(r,x),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,R),u.sub(c),f.sub(c),d.sub(h),p.sub(h);const D=1/(d.x*p.y-p.x*d.y);isFinite(D)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(D),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(D),o[x].add(_),o[E].add(_),o[R].add(_),l[x].add(g),l[E].add(g),l[R].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,E=v.length;x<E;++x){const R=v[x],D=R.start,z=R.count;for(let L=D,O=D+z;L<O;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const b=new P,y=new P,w=new P,M=new P;function C(x){w.fromBufferAttribute(s,x),M.copy(w);const E=o[x];b.copy(E),b.sub(w.multiplyScalar(w.dot(E))).normalize(),y.crossVectors(M,E);const D=y.dot(l[x])<0?-1:1;a.setXYZW(x,b.x,b.y,b.z,D)}for(let x=0,E=v.length;x<E;++x){const R=v[x],D=R.start,z=R.count;for(let L=D,O=D+z;L<O;L+=3)C(e.getX(L+0)),C(e.getX(L+1)),C(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,f=new P;if(e)for(let h=0,d=e.count;h<d;h+=3){const p=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,p=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let m=0;m<u;m++)h[p++]=c[d++]}return new kt(h,u,f)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ht,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=to,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ln=new P;class ar{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=On(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=On(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=On(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=On(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){io("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ar(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){io("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let bb=0;class bn extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bb++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=tr,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fl,this.blendDst=kl,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(n.blending=this.blending),this.side!==Qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fl&&(n.blendSrc=this.blendSrc),this.blendDst!==kl&&(n.blendDst=this.blendDst),this.blendEquation!==gs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ku&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ae().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class kd extends bn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Rr;const ma=new P,Ir=new P,Pr=new P,Dr=new ae,ga=new ae,qg=new nt,ko=new P,_a=new P,Bo=new P,cp=new ae,jh=new ae,hp=new ae;class $g extends wt{constructor(e=new kd){if(super(),this.isSprite=!0,this.type="Sprite",Rr===void 0){Rr=new ht;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new nh(t,5);Rr.setIndex([0,1,2,0,2,3]),Rr.setAttribute("position",new ar(n,3,0,!1)),Rr.setAttribute("uv",new ar(n,2,3,!1))}this.geometry=Rr,this.material=e,this.center=new ae(.5,.5),this.count=1}raycast(e,t){e.camera===null&&je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ir.setFromMatrixScale(this.matrixWorld),qg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Pr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ir.multiplyScalar(-Pr.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;zo(ko.set(-.5,-.5,0),Pr,a,Ir,s,r),zo(_a.set(.5,-.5,0),Pr,a,Ir,s,r),zo(Bo.set(.5,.5,0),Pr,a,Ir,s,r),cp.set(0,0),jh.set(1,0),hp.set(1,1);let o=e.ray.intersectTriangle(ko,_a,Bo,!1,ma);if(o===null&&(zo(_a.set(-.5,.5,0),Pr,a,Ir,s,r),jh.set(0,1),o=e.ray.intersectTriangle(ko,Bo,_a,!1,ma),o===null))return;const l=e.ray.origin.distanceTo(ma);l<e.near||l>e.far||t.push({distance:l,point:ma.clone(),uv:Xn.getInterpolation(ma,ko,_a,Bo,cp,jh,hp,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function zo(i,e,t,n,s,r){Dr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ga.x=r*Dr.x-s*Dr.y,ga.y=s*Dr.x+r*Dr.y):ga.copy(Dr),i.copy(e),i.x+=ga.x,i.y+=ga.y,i.applyMatrix4(qg)}const Vo=new P,up=new P;class Yg extends wt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,s=t.length;n<s;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const s=this.levels;let r;for(r=0;r<s.length&&!(t<s[r].distance);r++);return s.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const s=t.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,s;for(n=1,s=t.length;n<s;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Vo.setFromMatrixPosition(this.matrixWorld);const s=e.ray.origin.distanceTo(Vo);this.getObjectForDistance(s).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Vo.setFromMatrixPosition(e.matrixWorld),up.setFromMatrixPosition(this.matrixWorld);const n=Vo.distanceTo(up)/e.zoom;t[0].object.visible=!0;let s,r;for(s=1,r=t.length;s<r;s++){let a=t[s].distance;if(t[s].object.visible&&(a-=a*t[s].hysteresis),n>=a)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)t[s].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let s=0,r=n.length;s<r;s++){const a=n[s];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const $i=new P,Jh=new P,Go=new P,us=new P,Qh=new P,Ho=new P,eu=new P;class ur{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Jh.copy(e).add(t).multiplyScalar(.5),Go.copy(t).sub(e).normalize(),us.copy(this.origin).sub(Jh);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Go),o=us.dot(this.direction),l=-us.dot(Go),c=us.lengthSq(),u=Math.abs(1-a*a);let f,h,d,p;if(u>0)if(f=a*l-o,h=a*o-l,p=r*u,f>=0)if(h>=-p)if(h<=p){const _=1/u;f*=_,h*=_,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-p?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=p?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Jh).addScaledVector(Go,h),d}intersectSphere(e,t){$i.subVectors(e.center,this.origin);const n=$i.dot(this.direction),s=$i.dot($i)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,n,s,r){Qh.subVectors(t,e),Ho.subVectors(n,e),eu.crossVectors(Qh,Ho);let a=this.direction.dot(eu),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;us.subVectors(this.origin,e);const l=o*this.direction.dot(Ho.crossVectors(us,Ho));if(l<0)return null;const c=o*this.direction.dot(Qh.cross(us));if(c<0||l+c>a)return null;const u=-o*us.dot(eu);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class is extends bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dp=new nt,Ns=new ur,Wo=new xn,fp=new P,Xo=new P,qo=new P,$o=new P,tu=new P,Yo=new P,pp=new P,Zo=new P;class rn extends wt{constructor(e=new ht,t=new is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Yo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(tu.fromBufferAttribute(f,e),a?Yo.addScaledVector(tu,u):Yo.addScaledVector(tu.sub(t),u))}t.add(Yo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(r),Ns.copy(e.ray).recast(e.near),!(Wo.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(Wo,fp)===null||Ns.origin.distanceToSquared(fp)>(e.far-e.near)**2))&&(dp.copy(r).invert(),Ns.copy(e.ray).applyMatrix4(dp),!(n.boundingBox!==null&&Ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ns)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=h.length;p<_;p++){const g=h[p],m=a[g.materialIndex],v=Math.max(g.start,d.start),b=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,w=b;y<w;y+=3){const M=o.getX(y),C=o.getX(y+1),x=o.getX(y+2);s=Ko(this,m,e,n,c,u,f,M,C,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const v=o.getX(g),b=o.getX(g+1),y=o.getX(g+2);s=Ko(this,a,e,n,c,u,f,v,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=h.length;p<_;p++){const g=h[p],m=a[g.materialIndex],v=Math.max(g.start,d.start),b=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,w=b;y<w;y+=3){const M=y,C=y+1,x=y+2;s=Ko(this,m,e,n,c,u,f,M,C,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const v=g,b=g+1,y=g+2;s=Ko(this,a,e,n,c,u,f,v,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Sb(i,e,t,n,s,r,a,o){let l;if(e.side===Bn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Qi,o),l===null)return null;Zo.copy(o),Zo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Zo);return c<t.near||c>t.far?null:{distance:c,point:Zo.clone(),object:i}}function Ko(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Xo),i.getVertexPosition(l,qo),i.getVertexPosition(c,$o);const u=Sb(i,e,t,n,Xo,qo,$o,pp);if(u){const f=new P;Xn.getBarycoord(pp,Xo,qo,$o,f),s&&(u.uv=Xn.getInterpolatedAttribute(s,o,l,c,f,new ae)),r&&(u.uv1=Xn.getInterpolatedAttribute(r,o,l,c,f,new ae)),a&&(u.normal=Xn.getInterpolatedAttribute(a,o,l,c,f,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new P,materialIndex:0};Xn.getNormal(Xo,qo,$o,h.normal),u.face=h,u.barycoord=f}return u}const va=new Ut,mp=new Ut,gp=new Ut,Mb=new Ut,_p=new nt,jo=new P,nu=new xn,vp=new nt,iu=new ur;class Zg extends rn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ou,this.bindMatrix=new nt,this.bindMatrixInverse=new nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Rn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jo),this.boundingBox.expandByPoint(jo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jo),this.boundingSphere.expandByPoint(jo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nu.copy(this.boundingSphere),nu.applyMatrix4(s),e.ray.intersectsSphere(nu)!==!1&&(vp.copy(s).invert(),iu.copy(e.ray).applyMatrix4(vp),!(this.boundingBox!==null&&iu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,iu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ut,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ou?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Cg?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ce("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;mp.fromBufferAttribute(s.attributes.skinIndex,e),gp.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(va.copy(t),t.set(0,0,0,0)):(va.set(...t,1),t.set(0,0,0)),va.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=gp.getComponent(r);if(a!==0){const o=mp.getComponent(r);_p.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Mb.copy(va).applyMatrix4(_p),a)}}return t.isVector4&&(t.w=va.w),t.applyMatrix4(this.bindMatrixInverse)}}class Bd extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ci extends Yt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=sn,u=sn,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yp=new nt,wb=new nt;class ih{constructor(e=[],t=[]){this.uuid=ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ce("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new nt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new nt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:wb;yp.multiplyMatrices(o,t[r]),yp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new ih(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ci(t,e,e,kn,Fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Ce("Skeleton: No bone found with UUID:",r),a=new Bd),this.bones.push(a),this.boneInverses.push(new nt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Qr extends kt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Lr=new nt,xp=new nt,Jo=[],bp=new Rn,Tb=new nt,ya=new rn,xa=new xn;class Kg extends rn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Tb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Lr),bp.copy(e.boundingBox).applyMatrix4(Lr),this.boundingBox.union(bp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Lr),xa.copy(e.boundingSphere).applyMatrix4(Lr),this.boundingSphere.union(xa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ya.geometry=this.geometry,ya.material=this.material,ya.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xa.copy(this.boundingSphere),xa.applyMatrix4(n),e.ray.intersectsSphere(xa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Lr),xp.multiplyMatrices(n,Lr),ya.matrixWorld=xp,ya.raycast(e,Jo);for(let a=0,o=Jo.length;a<o;a++){const l=Jo[a];l.instanceId=r,l.object=this,t.push(l)}Jo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Qr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ci(new Float32Array(s*this.count),s,this.count,Xc,Fn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const su=new P,Eb=new P,Ab=new ct;class Zi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=su.subVectors(n,t).cross(Eb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(su),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ab.getNormalMatrix(e),s=this.coplanarPoint(su).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Os=new xn,Cb=new ae(.5,.5),Qo=new P;class or{constructor(e=new Zi,t=new Zi,n=new Zi,s=new Zi,r=new Zi,a=new Zi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],p=r[8],_=r[9],g=r[10],m=r[11],v=r[12],b=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-a,d-u,m-p,w-v).normalize(),s[1].setComponents(c+a,d+u,m+p,w+v).normalize(),s[2].setComponents(c+o,d+f,m+_,w+b).normalize(),s[3].setComponents(c-o,d-f,m-_,w-b).normalize(),n)s[4].setComponents(l,h,g,y).normalize(),s[5].setComponents(c-l,d-h,m-g,w-y).normalize();else if(s[4].setComponents(c-l,d-h,m-g,w-y).normalize(),t===Qn)s[5].setComponents(c+l,d+h,m+g,w+y).normalize();else if(t===rr)s[5].setComponents(l,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(e){Os.center.set(0,0,0);const t=Cb.distanceTo(e.center);return Os.radius=.7071067811865476+t,Os.applyMatrix4(e.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Qo.x=s.normal.x>0?e.max.x:e.min.x,Qo.y=s.normal.y>0?e.max.y:e.min.y,Qo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Sp=new nt;class sh{constructor(){this.coordinateSystem=Qn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];Sp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new or),n[s].setFromProjectionMatrix(Sp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new or),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new sh().copy(this)}}function ru(i,e){return i-e}function Rb(i,e){return i.z-e.z}function Ib(i,e){return e.z-i.z}class Pb{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,s){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=s}reset(){this.list.length=0,this.index=0}}const Vn=new nt,Db=new Be(1,1,1),Lb=new or,Ub=new sh,el=new Rn,Fs=new xn,ba=new P,Mp=new P,Nb=new P,au=new Pb,En=new rn,tl=[];function Ob(i,e,t=0){const n=e.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==e.array.constructor){const s=i.count;for(let r=0;r<s;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,i.getComponent(r,a))}else e.array.set(i.array,t*n);e.needsUpdate=!0}function ks(i,e){if(i.constructor!==e.constructor){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++)e[n]=i[n]}else{const t=Math.min(i.length,e.length);e.set(new i.constructor(i.buffer,0,t))}}class jg extends rn{constructor(e,t,n=t*2,s){super(new ht,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new ci(t,e,e,kn,Fn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new ci(t,e,e,bo,di);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new ci(t,e,e,kn,Fn);n.colorSpace=vt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const a=e.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,u=new o.constructor(n*l),f=new kt(u,l,c);t.setAttribute(r,f)}if(e.getIndex()!==null){const r=n>65535?new Uint32Array(s):new Uint16Array(s);t.setIndex(new kt(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const s=e.getAttribute(n),r=t.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,Vn),this.getBoundingBoxAt(r,el).applyMatrix4(Vn),e.union(el)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,Vn),this.getBoundingSphereAt(r,Fs).applyMatrix4(Vn),e.union(Fs)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(ru),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=n):(s=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;Vn.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(Db.toArray(a.image.data,s*4),a.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=n===-1?a.count:n),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(ru),l=this._availableGeometryIds.shift(),r[l]=s):(l=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(l,e),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(s&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const u in n.attributes){const f=t.getAttribute(u),h=n.getAttribute(u);Ob(f,h,l);const d=f.itemSize;for(let p=f.count,_=c;p<_;p++){const g=l+p;for(let m=0;m<d;m++)h.setComponent(g,m,0)}h.needsUpdate=!0,h.addUpdateRange(l*d,c*d)}if(s){const u=o.indexStart,f=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let h=0;h<a.count;h++)r.setX(u+h,l+a.getX(h));for(let h=a.count,d=f;h<d;h++)r.setX(u+h,l);r.needsUpdate=!0,r.addUpdateRange(u,o.reservedIndexCount)}return o.start=s?o.indexStart:o.vertexStart,o.count=s?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let s=0,r=n.length;s<r;s++)n[s].active&&n[s].geometryIndex===e&&this.deleteInstance(s);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,s=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){const l=s[a],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){const{indexStart:u,vertexStart:f,reservedIndexCount:h}=c,d=r.index,p=d.array,_=e-f;for(let g=u;g<u+h;g++)p[g]=p[g]+_;d.array.copyWithin(t,u,u+h),d.addUpdateRange(t,h),d.needsUpdate=!0,c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:u,reservedVertexCount:f}=c,h=r.attributes;for(const d in h){const p=h[d],{array:_,itemSize:g}=p;_.copyWithin(e*g,u*g,(u+f)*g),p.addUpdateRange(e*g,f*g),p.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[e];if(s.boundingBox===null){const r=new Rn,a=n.index,o=n.attributes.position;for(let l=s.start,c=s.start+s.count;l<c;l++){let u=l;a&&(u=a.getX(u)),r.expandByPoint(ba.fromBufferAttribute(o,u))}s.boundingBox=r}return t.copy(s.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[e];if(s.boundingSphere===null){const r=new xn;this.getBoundingBoxAt(e,el),el.getCenter(r.center);const a=n.index,o=n.attributes.position;let l=0;for(let c=s.start,u=s.start+s.count;c<u;c++){let f=c;a&&(f=a.getX(f)),ba.fromBufferAttribute(o,f),l=Math.max(l,r.center.distanceToSquared(ba))}r.radius=Math.sqrt(l),s.boundingSphere=r}return t.copy(s.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,s=this._matricesTexture.image.data;return t.toArray(s,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(ru);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const s=new Int32Array(e),r=new Int32Array(e);ks(this._multiDrawCounts,s),ks(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=e;const a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),ks(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),ks(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),ks(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new ht,this._initializeGeometry(r));const a=this.geometry;r.index&&ks(r.index.array,a.index.array);for(const o in r.attributes)ks(r.attributes[o].array,a.attributes[o].array)}raycast(e,t){const n=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,a=this.geometry;En.material=this.material,En.geometry.index=a.index,En.geometry.attributes=a.attributes,En.geometry.boundingBox===null&&(En.geometry.boundingBox=new Rn),En.geometry.boundingSphere===null&&(En.geometry.boundingSphere=new xn);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;const c=n[o].geometryIndex,u=s[c];En.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(o,En.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,En.geometry.boundingBox),this.getBoundingSphereAt(c,En.geometry.boundingSphere),En.raycast(e,tl);for(let f=0,h=tl.length;f<h;f++){const d=tl[f];d.object=this,d.batchId=o,t.push(d)}tl.length=0}En.material=null,En.geometry.index=null,En.geometry.attributes={},En.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=s.getIndex();let o=a===null?1:a.array.BYTES_PER_ELEMENT,l=1;r.wireframe&&(l=2,o=s.attributes.position.count>65535?4:2);const c=this._instanceInfo,u=this._multiDrawStarts,f=this._multiDrawCounts,h=this._geometryInfo,d=this.perObjectFrustumCulled,p=this._indirectTexture,_=p.image.data,g=n.isArrayCamera?Ub:Lb;d&&(n.isArrayCamera?g.setFromArrayCamera(n):(Vn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),g.setFromProjectionMatrix(Vn,n.coordinateSystem,n.reversedDepth)));let m=0;if(this.sortObjects){Vn.copy(this.matrixWorld).invert(),ba.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Vn),Mp.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Vn);for(let y=0,w=c.length;y<w;y++)if(c[y].visible&&c[y].active){const M=c[y].geometryIndex;this.getMatrixAt(y,Vn),this.getBoundingSphereAt(M,Fs).applyMatrix4(Vn);let C=!1;if(d&&(C=!g.intersectsSphere(Fs)),!C){const x=h[M],E=Nb.subVectors(Fs.center,ba).dot(Mp);au.push(x.start,x.count,E,y)}}const v=au.list,b=this.customSort;b===null?v.sort(r.transparent?Ib:Rb):b.call(this,v,n);for(let y=0,w=v.length;y<w;y++){const M=v[y];u[m]=M.start*o*l,f[m]=M.count*l,_[m]=M.index,m++}au.reset()}else for(let v=0,b=c.length;v<b;v++)if(c[v].visible&&c[v].active){const y=c[v].geometryIndex;let w=!1;if(d&&(this.getMatrixAt(v,Vn),this.getBoundingSphereAt(y,Fs).applyMatrix4(Vn),w=!g.intersectsSphere(Fs)),!w){const M=h[y];u[m]=M.start*o*l,f[m]=M.count*l,_[m]=v,m++}}p.needsUpdate=!0,this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(e,t,n,s,r,a){this.onBeforeRender(e,null,s,r,a)}}class zn extends bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Mc=new P,wc=new P,wp=new nt,Sa=new ur,nl=new xn,ou=new P,Tp=new P;class Es extends wt{constructor(e=new ht,t=new zn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Mc.fromBufferAttribute(t,s-1),wc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Mc.distanceTo(wc);e.setAttribute("lineDistance",new Ve(n,1))}else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nl.copy(n.boundingSphere),nl.applyMatrix4(s),nl.radius+=r,e.ray.intersectsSphere(nl)===!1)return;wp.copy(s).invert(),Sa.copy(e.ray).applyMatrix4(wp);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=d,g=p-1;_<g;_+=c){const m=u.getX(_),v=u.getX(_+1),b=il(this,e,Sa,l,m,v,_);b&&t.push(b)}if(this.isLineLoop){const _=u.getX(p-1),g=u.getX(d),m=il(this,e,Sa,l,_,g,p-1);m&&t.push(m)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=d,g=p-1;_<g;_+=c){const m=il(this,e,Sa,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=il(this,e,Sa,l,p-1,d,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function il(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Mc.fromBufferAttribute(o,s),wc.fromBufferAttribute(o,r),t.distanceSqToSegment(Mc,wc,ou,Tp)>n)return;ou.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ou);if(!(c<e.near||c>e.far))return{distance:c,point:Tp.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Ep=new P,Ap=new P;class Vi extends Es{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ep.fromBufferAttribute(t,s),Ap.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ep.distanceTo(Ap);e.setAttribute("lineDistance",new Ve(n,1))}else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jg extends Es{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}let zd=class extends bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};const Cp=new nt,zu=new ur,sl=new xn,rl=new P;class Qg extends wt{constructor(e=new ht,t=new zd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sl.copy(n.boundingSphere),sl.applyMatrix4(s),sl.radius+=r,e.ray.intersectsSphere(sl)===!1)return;Cp.copy(s).invert(),zu.copy(e.ray).applyMatrix4(Cp);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=h,_=d;p<_;p++){const g=c.getX(p);rl.fromBufferAttribute(f,g),Rp(rl,g,l,s,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let p=h,_=d;p<_;p++)rl.fromBufferAttribute(f,p),Rp(rl,p,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Rp(i,e,t,n,s,r,a){const o=zu.distanceSqToPoint(i);if(o<t){const l=new P;zu.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class e0 extends Yt{constructor(e,t,n,s,r=Wt,a=Wt,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function f(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(f))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Fb extends e0{constructor(e,t,n,s,r,a,o,l){super({},e,t,n,s,r,a,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class kb extends Yt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=sn,this.minFilter=sn,this.generateMipmaps=!1,this.needsUpdate=!0}}class rh extends Yt{constructor(e,t,n,s,r,a,o,l,c,u,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Bb extends rh{constructor(e,t,n,s,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=qn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zb extends rh{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Oi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class So extends Yt{constructor(e=[],t=Oi,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vb extends Yt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gb extends Yt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;const u=e?e.parentNode:null;u!==null&&"requestPaint"in u&&(u.onpaint=()=>{this.needsUpdate=!0},u.requestPaint())}dispose(){const e=this.image?this.image.parentNode:null;e!==null&&"onpaint"in e&&(e.onpaint=null),super.dispose()}}class lr extends Yt{constructor(e,t,n=di,s,r,a,o=sn,l=sn,c,u=ki,f=1){if(u!==ki&&u!==_s)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class t0 extends lr{constructor(e,t=di,n=Oi,s,r,a=sn,o=sn,l,c=ki){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Vd extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Rs extends ht{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(u,3)),this.setAttribute("uv",new Ve(f,2));function p(_,g,m,v,b,y,w,M,C,x,E){const R=y/C,D=w/x,z=y/2,L=w/2,O=M/2,F=C+1,U=x+1;let N=0,B=0;const H=new P;for(let oe=0;oe<U;oe++){const ee=oe*D-L;for(let ie=0;ie<F;ie++){const Pe=ie*R-z;H[_]=Pe*v,H[g]=ee*b,H[m]=O,c.push(H.x,H.y,H.z),H[_]=0,H[g]=0,H[m]=M>0?1:-1,u.push(H.x,H.y,H.z),f.push(ie/C),f.push(1-oe/x),N+=1}}for(let oe=0;oe<x;oe++)for(let ee=0;ee<C;ee++){const ie=h+ee+F*oe,Pe=h+ee+F*(oe+1),ut=h+(ee+1)+F*(oe+1),De=h+(ee+1)+F*oe;l.push(ie,Pe,De),l.push(Pe,ut,De),B+=6}o.addGroup(d,B,E),d+=B,h+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ah extends ht{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],u=t/2,f=Math.PI/2*e,h=t,d=2*f+h,p=n*2+r,_=s+1,g=new P,m=new P;for(let v=0;v<=p;v++){let b=0,y=0,w=0,M=0;if(v<=n){const E=v/n,R=E*Math.PI/2;y=-u-e*Math.cos(R),w=e*Math.sin(R),M=-e*Math.cos(R),b=E*f}else if(v<=n+r){const E=(v-n)/r;y=-u+E*t,w=e,M=0,b=f+E*h}else{const E=(v-n-r)/n,R=E*Math.PI/2;y=u+e*Math.sin(R),w=e*Math.cos(R),M=e*Math.sin(R),b=f+h+E*f}const C=Math.max(0,Math.min(1,b/d));let x=0;v===0?x=.5/s:v===p&&(x=-.5/s);for(let E=0;E<=s;E++){const R=E/s,D=R*Math.PI*2,z=Math.sin(D),L=Math.cos(D);m.x=-w*L,m.y=y,m.z=w*z,o.push(m.x,m.y,m.z),g.set(-w*L,M,w*z),g.normalize(),l.push(g.x,g.y,g.z),c.push(R+x,C)}if(v>0){const E=(v-1)*_;for(let R=0;R<s;R++){const D=E+R,z=E+R+1,L=v*_+R,O=v*_+R+1;a.push(D,z,L),a.push(z,O,L)}}}this.setIndex(a),this.setAttribute("position",new Ve(o,3)),this.setAttribute("normal",new Ve(l,3)),this.setAttribute("uv",new Ve(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ah(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class oh extends ht{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new P,u=new ae;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const d=n+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Ve(a,3)),this.setAttribute("normal",new Ve(o,3)),this.setAttribute("uv",new Ve(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Mo extends ht{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let p=0;const _=[],g=n/2;let m=0;v(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Ve(f,3)),this.setAttribute("normal",new Ve(h,3)),this.setAttribute("uv",new Ve(d,2));function v(){const y=new P,w=new P;let M=0;const C=(t-e)/n;for(let x=0;x<=r;x++){const E=[],R=x/r,D=R*(t-e)+e;for(let z=0;z<=s;z++){const L=z/s,O=L*l+o,F=Math.sin(O),U=Math.cos(O);w.x=D*F,w.y=-R*n+g,w.z=D*U,f.push(w.x,w.y,w.z),y.set(F,C,U).normalize(),h.push(y.x,y.y,y.z),d.push(L,1-R),E.push(p++)}_.push(E)}for(let x=0;x<s;x++)for(let E=0;E<r;E++){const R=_[E][x],D=_[E+1][x],z=_[E+1][x+1],L=_[E][x+1];(e>0||E!==0)&&(u.push(R,D,L),M+=3),(t>0||E!==r-1)&&(u.push(D,z,L),M+=3)}c.addGroup(m,M,0),m+=M}function b(y){const w=p,M=new ae,C=new P;let x=0;const E=y===!0?e:t,R=y===!0?1:-1;for(let z=1;z<=s;z++)f.push(0,g*R,0),h.push(0,R,0),d.push(.5,.5),p++;const D=p;for(let z=0;z<=s;z++){const O=z/s*l+o,F=Math.cos(O),U=Math.sin(O);C.x=E*U,C.y=g*R,C.z=E*F,f.push(C.x,C.y,C.z),h.push(0,R,0),M.x=F*.5+.5,M.y=U*.5*R+.5,d.push(M.x,M.y),p++}for(let z=0;z<s;z++){const L=w+z,O=D+z;y===!0?u.push(O,O+1,L):u.push(O+1,O,L),x+=3}c.addGroup(m,x,y===!0?1:2),m+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wo extends Mo{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new wo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Is extends ht{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Ve(r,3)),this.setAttribute("normal",new Ve(r.slice(),3)),this.setAttribute("uv",new Ve(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const b=new P,y=new P,w=new P;for(let M=0;M<t.length;M+=3)d(t[M+0],b),d(t[M+1],y),d(t[M+2],w),l(b,y,w,v)}function l(v,b,y,w){const M=w+1,C=[];for(let x=0;x<=M;x++){C[x]=[];const E=v.clone().lerp(y,x/M),R=b.clone().lerp(y,x/M),D=M-x;for(let z=0;z<=D;z++)z===0&&x===M?C[x][z]=E:C[x][z]=E.clone().lerp(R,z/D)}for(let x=0;x<M;x++)for(let E=0;E<2*(M-x)-1;E++){const R=Math.floor(E/2);E%2===0?(h(C[x][R+1]),h(C[x+1][R]),h(C[x][R])):(h(C[x][R+1]),h(C[x+1][R+1]),h(C[x+1][R]))}}function c(v){const b=new P;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(v),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function u(){const v=new P;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];const y=g(v)/2/Math.PI+.5,w=m(v)/Math.PI+.5;a.push(y,1-w)}p(),f()}function f(){for(let v=0;v<a.length;v+=6){const b=a[v+0],y=a[v+2],w=a[v+4],M=Math.max(b,y,w),C=Math.min(b,y,w);M>.9&&C<.1&&(b<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),w<.2&&(a[v+4]+=1))}}function h(v){r.push(v.x,v.y,v.z)}function d(v,b){const y=v*3;b.x=e[y+0],b.y=e[y+1],b.z=e[y+2]}function p(){const v=new P,b=new P,y=new P,w=new P,M=new ae,C=new ae,x=new ae;for(let E=0,R=0;E<r.length;E+=9,R+=6){v.set(r[E+0],r[E+1],r[E+2]),b.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),M.set(a[R+0],a[R+1]),C.set(a[R+2],a[R+3]),x.set(a[R+4],a[R+5]),w.copy(v).add(b).add(y).divideScalar(3);const D=g(w);_(M,R+0,v,D),_(C,R+2,b,D),_(x,R+4,y,D)}}function _(v,b,y,w){w<0&&v.x===1&&(a[b]=v.x-1),y.x===0&&y.z===0&&(a[b]=w/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.vertices,e.indices,e.radius,e.detail)}}class lh extends Is{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new lh(e.radius,e.detail)}}const al=new P,ol=new P,lu=new P,ll=new Xn;class n0 extends ht{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(nr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h={},d=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:_,b:g,c:m}=ll;if(_.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),ll.getNormal(lu),f[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,f[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,f[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let v=0;v<3;v++){const b=(v+1)%3,y=f[v],w=f[b],M=ll[u[v]],C=ll[u[b]],x=`${y}_${w}`,E=`${w}_${y}`;E in h&&h[E]?(lu.dot(h[E].normal)<=r&&(d.push(M.x,M.y,M.z),d.push(C.x,C.y,C.z)),h[E]=null):x in h||(h[x]={index0:c[v],index1:c[b],normal:lu.clone()})}}for(const p in h)if(h[p]){const{index0:_,index1:g}=h[p];al.fromBufferAttribute(o,_),ol.fromBufferAttribute(o,g),d.push(al.x,al.y,al.z),d.push(ol.x,ol.y,ol.z)}this.setAttribute("position",new Ve(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ei{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ce("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,d=(a-u)/h;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ae:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,s=[],r=[],a=[],o=new P,l=new nt;for(let d=0;d<=e;d++){const p=d/e;s[d]=this.getTangentAt(p,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(rt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,p))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(rt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ch extends Ei{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ae){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class i0 extends ch{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Gd(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,d*=u,s(a,o,h,d)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Ip=new P,Pp=new P,cu=new Gd,hu=new Gd,uu=new Gd;class s0 extends Ei{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Pp.subVectors(s[0],s[1]).add(s[0]),c=Pp);const f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Ip.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ip),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(u),d);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),cu.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,p,_,g),hu.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,p,_,g),uu.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,p,_,g)}else this.curveType==="catmullrom"&&(cu.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),hu.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),uu.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(cu.calc(l),hu.calc(l),uu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Dp(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Hb(i,e){const t=1-i;return t*t*e}function Wb(i,e){return 2*(1-i)*i*e}function Xb(i,e){return i*i*e}function Ba(i,e,t,n){return Hb(i,e)+Wb(i,t)+Xb(i,n)}function qb(i,e){const t=1-i;return t*t*t*e}function $b(i,e){const t=1-i;return 3*t*t*i*e}function Yb(i,e){return 3*(1-i)*i*i*e}function Zb(i,e){return i*i*i*e}function za(i,e,t,n,s){return qb(i,e)+$b(i,t)+Yb(i,n)+Zb(i,s)}class Hd extends Ei{constructor(e=new ae,t=new ae,n=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ae){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(za(e,s.x,r.x,a.x,o.x),za(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class r0 extends Ei{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(za(e,s.x,r.x,a.x,o.x),za(e,s.y,r.y,a.y,o.y),za(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Wd extends Ei{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class a0 extends Ei{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xd extends Ei{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ba(e,s.x,r.x,a.x),Ba(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qd extends Ei{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ba(e,s.x,r.x,a.x),Ba(e,s.y,r.y,a.y),Ba(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $d extends Ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Dp(o,l.x,c.x,u.x,f.x),Dp(o,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ae().fromArray(s))}return this}}var Tc=Object.freeze({__proto__:null,ArcCurve:i0,CatmullRomCurve3:s0,CubicBezierCurve:Hd,CubicBezierCurve3:r0,EllipseCurve:ch,LineCurve:Wd,LineCurve3:a0,QuadraticBezierCurve:Xd,QuadraticBezierCurve3:qd,SplineCurve:$d});class o0 extends Ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Tc[s.type]().fromJSON(s))}return this}}class so extends o0{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Wd(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Xd(this.currentPoint.clone(),new ae(e,t),new ae(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new Hd(this.currentPoint.clone(),new ae(e,t),new ae(n,s),new ae(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new $d(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){const c=new ch(e,t,n,s,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class To extends so{constructor(e){super(e),this.uuid=ti(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new so().fromJSON(s))}return this}}function Kb(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=l0(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=tS(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let u=o,f=l;for(let h=t;h<s;h+=t){const d=i[h],p=i[h+1];d<o&&(o=d),p<l&&(l=p),d>u&&(u=d),p>f&&(f=p)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return ro(r,a,t,o,l,c,0),a}function l0(i,e,t,n,s){let r;if(s===dS(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Lp(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Lp(a/n|0,i[a],i[a+1],r);return r&&ea(r,r.next)&&(oo(r),r=r.next),r}function cr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ea(t,t.next)||qt(t.prev,t,t.next)===0)){if(oo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ro(i,e,t,n,s,r,a){if(!i)return;!a&&r&&aS(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Jb(i,n,s,r):jb(i)){e.push(l.i,i.i,c.i),oo(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Qb(cr(i),e),ro(i,e,t,n,s,r,2)):a===2&&eS(i,e,t,n,s,r):ro(cr(i),e,t,n,s,r,1);break}}}function jb(i){const e=i.prev,t=i,n=i.next;if(qt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,r,a),f=Math.min(o,l,c),h=Math.max(s,r,a),d=Math.max(o,l,c);let p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=f&&p.y<=d&&Aa(s,o,r,l,a,c,p.x,p.y)&&qt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Jb(i,e,t,n){const s=i.prev,r=i,a=i.next;if(qt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,h=a.y,d=Math.min(o,l,c),p=Math.min(u,f,h),_=Math.max(o,l,c),g=Math.max(u,f,h),m=Vu(d,p,e,t,n),v=Vu(_,g,e,t,n);let b=i.prevZ,y=i.nextZ;for(;b&&b.z>=m&&y&&y.z<=v;){if(b.x>=d&&b.x<=_&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&Aa(o,u,l,f,c,h,b.x,b.y)&&qt(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=d&&y.x<=_&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&Aa(o,u,l,f,c,h,y.x,y.y)&&qt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=m;){if(b.x>=d&&b.x<=_&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&Aa(o,u,l,f,c,h,b.x,b.y)&&qt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=v;){if(y.x>=d&&y.x<=_&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&Aa(o,u,l,f,c,h,y.x,y.y)&&qt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Qb(i,e){let t=i;do{const n=t.prev,s=t.next.next;!ea(n,s)&&h0(n,t,t.next,s)&&ao(n,s)&&ao(s,n)&&(e.push(n.i,t.i,s.i),oo(t),oo(t.next),t=i=s),t=t.next}while(t!==i);return cr(t)}function eS(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&cS(a,o)){let l=u0(a,o);a=cr(a,a.next),l=cr(l,l.next),ro(a,e,t,n,s,r,0),ro(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function tS(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=l0(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(lS(c))}s.sort(nS);for(let r=0;r<s.length;r++)t=iS(s[r],t);return t}function nS(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function iS(i,e){const t=sS(i,e);if(!t)return e;const n=u0(t,i);return cr(n,n.next),cr(t,t.next)}function sS(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(ea(i,t))return t;do{if(ea(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&c0(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const f=Math.abs(s-t.y)/(n-t.x);ao(t,i)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&rS(a,t)))&&(a=t,u=f)}t=t.next}while(t!==o);return a}function rS(i,e){return qt(i.prev,i,e.prev)<0&&qt(e.next,i,i.next)<0}function aS(i,e,t,n){let s=i;do s.z===0&&(s.z=Vu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,oS(s)}function oS(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Vu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function lS(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function c0(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Aa(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&c0(i,e,t,n,s,r,a,o)}function cS(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!hS(i,e)&&(ao(i,e)&&ao(e,i)&&uS(i,e)&&(qt(i.prev,i,e.prev)||qt(i,e.prev,e))||ea(i,e)&&qt(i.prev,i,i.next)>0&&qt(e.prev,e,e.next)>0)}function qt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ea(i,e){return i.x===e.x&&i.y===e.y}function h0(i,e,t,n){const s=hl(qt(i,e,t)),r=hl(qt(i,e,n)),a=hl(qt(t,n,i)),o=hl(qt(t,n,e));return!!(s!==r&&a!==o||s===0&&cl(i,t,e)||r===0&&cl(i,n,e)||a===0&&cl(t,i,n)||o===0&&cl(t,e,n))}function cl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function hl(i){return i>0?1:i<0?-1:0}function hS(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&h0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ao(i,e){return qt(i.prev,i,i.next)<0?qt(i,e,i.next)>=0&&qt(i,i.prev,e)>=0:qt(i,e,i.prev)<0||qt(i,i.next,e)<0}function uS(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function u0(i,e){const t=Gu(i.i,i.x,i.y),n=Gu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Lp(i,e,t,n){const s=Gu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function oo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Gu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function dS(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class fS{static triangulate(e,t,n=2){return Kb(e,t,n)}}class xi{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return xi.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Up(e),Np(n,e);let a=e.length;t.forEach(Up);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Np(n,t[l]);const o=fS.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Up(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Np(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class hh extends ht{constructor(e=new To([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Ve(s,3)),this.setAttribute("uv",new Ve(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:pS;let b,y=!1,w,M,C,x;if(m){b=m.getSpacedPoints(u),y=!0,h=!1;const te=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(u,te),M=new P,C=new P,x=new P}h||(g=0,d=0,p=0,_=0);const E=o.extractPoints(c);let R=E.shape;const D=E.holes;if(!xi.isClockWise(R)){R=R.reverse();for(let te=0,se=D.length;te<se;te++){const he=D[te];xi.isClockWise(he)&&(D[te]=he.reverse())}}function L(te){const he=10000000000000001e-36;let ve=te[0];for(let xe=1;xe<=te.length;xe++){const Je=xe%te.length,qe=te[Je],ue=qe.x-ve.x,Le=qe.y-ve.y,V=ue*ue+Le*Le,Mt=Math.max(Math.abs(qe.x),Math.abs(qe.y),Math.abs(ve.x),Math.abs(ve.y)),mt=he*Mt*Mt;if(V<=mt){te.splice(Je,1),xe--;continue}ve=qe}}L(R),D.forEach(L);const O=D.length,F=R;for(let te=0;te<O;te++){const se=D[te];R=R.concat(se)}function U(te,se,he){return se||je("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(se,he)}const N=R.length;function B(te,se,he){let ve,xe,Je;const qe=te.x-se.x,ue=te.y-se.y,Le=he.x-te.x,V=he.y-te.y,Mt=qe*qe+ue*ue,mt=qe*V-ue*Le;if(Math.abs(mt)>Number.EPSILON){const I=Math.sqrt(Mt),S=Math.sqrt(Le*Le+V*V),X=se.x-ue/I,q=se.y+qe/I,k=he.x-V/S,j=he.y+Le/S,ce=((k-X)*V-(j-q)*Le)/(qe*V-ue*Le);ve=X+qe*ce-te.x,xe=q+ue*ce-te.y;const $=ve*ve+xe*xe;if($<=2)return new ae(ve,xe);Je=Math.sqrt($/2)}else{let I=!1;qe>Number.EPSILON?Le>Number.EPSILON&&(I=!0):qe<-Number.EPSILON?Le<-Number.EPSILON&&(I=!0):Math.sign(ue)===Math.sign(V)&&(I=!0),I?(ve=-ue,xe=qe,Je=Math.sqrt(Mt)):(ve=qe,xe=ue,Je=Math.sqrt(Mt/2))}return new ae(ve/Je,xe/Je)}const H=[];for(let te=0,se=F.length,he=se-1,ve=te+1;te<se;te++,he++,ve++)he===se&&(he=0),ve===se&&(ve=0),H[te]=B(F[te],F[he],F[ve]);const oe=[];let ee,ie=H.concat();for(let te=0,se=O;te<se;te++){const he=D[te];ee=[];for(let ve=0,xe=he.length,Je=xe-1,qe=ve+1;ve<xe;ve++,Je++,qe++)Je===xe&&(Je=0),qe===xe&&(qe=0),ee[ve]=B(he[ve],he[Je],he[qe]);oe.push(ee),ie=ie.concat(ee)}let Pe;if(g===0)Pe=xi.triangulateShape(F,D);else{const te=[],se=[];for(let he=0;he<g;he++){const ve=he/g,xe=d*Math.cos(ve*Math.PI/2),Je=p*Math.sin(ve*Math.PI/2)+_;for(let qe=0,ue=F.length;qe<ue;qe++){const Le=U(F[qe],H[qe],Je);we(Le.x,Le.y,-xe),ve===0&&te.push(Le)}for(let qe=0,ue=O;qe<ue;qe++){const Le=D[qe];ee=oe[qe];const V=[];for(let Mt=0,mt=Le.length;Mt<mt;Mt++){const I=U(Le[Mt],ee[Mt],Je);we(I.x,I.y,-xe),ve===0&&V.push(I)}ve===0&&se.push(V)}}Pe=xi.triangulateShape(te,se)}const ut=Pe.length,De=p+_;for(let te=0;te<N;te++){const se=h?U(R[te],ie[te],De):R[te];y?(C.copy(w.normals[0]).multiplyScalar(se.x),M.copy(w.binormals[0]).multiplyScalar(se.y),x.copy(b[0]).add(C).add(M),we(x.x,x.y,x.z)):we(se.x,se.y,0)}for(let te=1;te<=u;te++)for(let se=0;se<N;se++){const he=h?U(R[se],ie[se],De):R[se];y?(C.copy(w.normals[te]).multiplyScalar(he.x),M.copy(w.binormals[te]).multiplyScalar(he.y),x.copy(b[te]).add(C).add(M),we(x.x,x.y,x.z)):we(he.x,he.y,f/u*te)}for(let te=g-1;te>=0;te--){const se=te/g,he=d*Math.cos(se*Math.PI/2),ve=p*Math.sin(se*Math.PI/2)+_;for(let xe=0,Je=F.length;xe<Je;xe++){const qe=U(F[xe],H[xe],ve);we(qe.x,qe.y,f+he)}for(let xe=0,Je=D.length;xe<Je;xe++){const qe=D[xe];ee=oe[xe];for(let ue=0,Le=qe.length;ue<Le;ue++){const V=U(qe[ue],ee[ue],ve);y?we(V.x,V.y+b[u-1].y,b[u-1].x+he):we(V.x,V.y,f+he)}}}J(),fe();function J(){const te=s.length/3;if(h){let se=0,he=N*se;for(let ve=0;ve<ut;ve++){const xe=Pe[ve];Xe(xe[2]+he,xe[1]+he,xe[0]+he)}se=u+g*2,he=N*se;for(let ve=0;ve<ut;ve++){const xe=Pe[ve];Xe(xe[0]+he,xe[1]+he,xe[2]+he)}}else{for(let se=0;se<ut;se++){const he=Pe[se];Xe(he[2],he[1],he[0])}for(let se=0;se<ut;se++){const he=Pe[se];Xe(he[0]+N*u,he[1]+N*u,he[2]+N*u)}}n.addGroup(te,s.length/3-te,0)}function fe(){const te=s.length/3;let se=0;re(F,se),se+=F.length;for(let he=0,ve=D.length;he<ve;he++){const xe=D[he];re(xe,se),se+=xe.length}n.addGroup(te,s.length/3-te,1)}function re(te,se){let he=te.length;for(;--he>=0;){const ve=he;let xe=he-1;xe<0&&(xe=te.length-1);for(let Je=0,qe=u+g*2;Je<qe;Je++){const ue=N*Je,Le=N*(Je+1),V=se+ve+ue,Mt=se+xe+ue,mt=se+xe+Le,I=se+ve+Le;le(V,Mt,mt,I)}}}function we(te,se,he){l.push(te),l.push(se),l.push(he)}function Xe(te,se,he){Te(te),Te(se),Te(he);const ve=s.length/3,xe=v.generateTopUV(n,s,ve-3,ve-2,ve-1);Fe(xe[0]),Fe(xe[1]),Fe(xe[2])}function le(te,se,he,ve){Te(te),Te(se),Te(ve),Te(se),Te(he),Te(ve);const xe=s.length/3,Je=v.generateSideWallUV(n,s,xe-6,xe-3,xe-2,xe-1);Fe(Je[0]),Fe(Je[1]),Fe(Je[3]),Fe(Je[1]),Fe(Je[2]),Fe(Je[3])}function Te(te){s.push(l[te*3+0]),s.push(l[te*3+1]),s.push(l[te*3+2])}function Fe(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return mS(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Tc[s.type]().fromJSON(s)),new hh(n,e.options)}}const pS={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new ae(r,a),new ae(o,l),new ae(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],f=e[n*3+2],h=e[s*3],d=e[s*3+1],p=e[s*3+2],_=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new ae(a,1-l),new ae(c,1-f),new ae(h,1-p),new ae(_,1-m)]:[new ae(o,1-l),new ae(u,1-f),new ae(d,1-p),new ae(g,1-m)]}};function mS(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class uh extends Is{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new uh(e.radius,e.detail)}}class dh extends ht{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=rt(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/t,f=new P,h=new ae,d=new P,p=new P,_=new P;let g=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,d.x=m*1,d.y=-g,d.z=m*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(p)}for(let v=0;v<=t;v++){const b=n+v*u*s,y=Math.sin(b),w=Math.cos(b);for(let M=0;M<=e.length-1;M++){f.x=e[M].x*y,f.y=e[M].y,f.z=e[M].x*w,a.push(f.x,f.y,f.z),h.x=v/t,h.y=M/(e.length-1),o.push(h.x,h.y);const C=l[3*M+0]*y,x=l[3*M+1],E=l[3*M+0]*w;c.push(C,x,E)}}for(let v=0;v<t;v++)for(let b=0;b<e.length-1;b++){const y=b+v*e.length,w=y,M=y+e.length,C=y+e.length+1,x=y+1;r.push(w,M,x),r.push(C,x,M)}this.setIndex(r),this.setAttribute("position",new Ve(a,3)),this.setAttribute("uv",new Ve(o,2)),this.setAttribute("normal",new Ve(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dh(e.points,e.segments,e.phiStart,e.phiLength)}}class Eo extends Is{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Eo(e.radius,e.detail)}}class aa extends ht{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=t/l,d=[],p=[],_=[],g=[];for(let m=0;m<u;m++){const v=m*h-a;for(let b=0;b<c;b++){const y=b*f-r;p.push(y,-v,0),_.push(0,0,1),g.push(b/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){const b=v+c*m,y=v+c*(m+1),w=v+1+c*(m+1),M=v+1+c*m;d.push(b,y,M),d.push(y,w,M)}this.setIndex(d),this.setAttribute("position",new Ve(p,3)),this.setAttribute("normal",new Ve(_,3)),this.setAttribute("uv",new Ve(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.width,e.height,e.widthSegments,e.heightSegments)}}class fh extends ht{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let f=e;const h=(t-e)/s,d=new P,p=new ae;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){const m=r+g/n*a;d.x=f*Math.cos(m),d.y=f*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,u.push(p.x,p.y)}f+=h}for(let _=0;_<s;_++){const g=_*(n+1);for(let m=0;m<n;m++){const v=m+g,b=v,y=v+n+1,w=v+n+2,M=v+1;o.push(b,y,M),o.push(y,w,M)}}this.setIndex(o),this.setAttribute("position",new Ve(l,3)),this.setAttribute("normal",new Ve(c,3)),this.setAttribute("uv",new Ve(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ph extends ht{constructor(e=new To([new ae(0,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ve(s,3)),this.setAttribute("normal",new Ve(r,3)),this.setAttribute("uv",new Ve(a,2));function c(u){const f=s.length/3,h=u.extractPoints(t);let d=h.shape;const p=h.holes;xi.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=p.length;g<m;g++){const v=p[g];xi.isClockWise(v)===!0&&(p[g]=v.reverse())}const _=xi.triangulateShape(d,p);for(let g=0,m=p.length;g<m;g++){const v=p[g];d=d.concat(v)}for(let g=0,m=d.length;g<m;g++){const v=d[g];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let g=0,m=_.length;g<m;g++){const v=_[g],b=v[0]+f,y=v[1]+f,w=v[2]+f;n.push(b,y,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return gS(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];n.push(a)}return new ph(n,e.curveSegments)}}function gS(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class Ao extends ht{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new P,h=new P,d=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const v=[],b=m/n,y=a+b*o,w=e*Math.cos(y),M=Math.sqrt(e*e-w*w);let C=0;m===0&&a===0?C=.5/t:m===n&&l===Math.PI&&(C=-.5/t);for(let x=0;x<=t;x++){const E=x/t,R=s+E*r;f.x=-M*Math.cos(R),f.y=w,f.z=M*Math.sin(R),p.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),g.push(E+C,1-b),v.push(c++)}u.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){const b=u[m][v+1],y=u[m][v],w=u[m+1][v],M=u[m+1][v+1];(m!==0||a>0)&&d.push(b,y,M),(m!==n-1||l<Math.PI)&&d.push(y,w,M)}this.setIndex(d),this.setAttribute("position",new Ve(p,3)),this.setAttribute("normal",new Ve(_,3)),this.setAttribute("uv",new Ve(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class mh extends Is{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new mh(e.radius,e.detail)}}class gh extends ht{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],f=[],h=new P,d=new P,p=new P;for(let _=0;_<=n;_++){const g=a+_/n*o;for(let m=0;m<=s;m++){const v=m/s*r;d.x=(e+t*Math.cos(g))*Math.cos(v),d.y=(e+t*Math.cos(g))*Math.sin(v),d.z=t*Math.sin(g),c.push(d.x,d.y,d.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),p.subVectors(d,h).normalize(),u.push(p.x,p.y,p.z),f.push(m/s),f.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=s;g++){const m=(s+1)*_+g-1,v=(s+1)*(_-1)+g-1,b=(s+1)*(_-1)+g,y=(s+1)*_+g;l.push(m,v,y),l.push(v,b,y)}this.setIndex(l),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(u,3)),this.setAttribute("uv",new Ve(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class _h extends ht{constructor(e=1,t=.4,n=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:s,p:r,q:a},n=Math.floor(n),s=Math.floor(s);const o=[],l=[],c=[],u=[],f=new P,h=new P,d=new P,p=new P,_=new P,g=new P,m=new P;for(let b=0;b<=n;++b){const y=b/n*r*Math.PI*2;v(y,r,a,e,d),v(y+.01,r,a,e,p),g.subVectors(p,d),m.addVectors(p,d),_.crossVectors(g,m),m.crossVectors(_,g),_.normalize(),m.normalize();for(let w=0;w<=s;++w){const M=w/s*Math.PI*2,C=-t*Math.cos(M),x=t*Math.sin(M);f.x=d.x+(C*m.x+x*_.x),f.y=d.y+(C*m.y+x*_.y),f.z=d.z+(C*m.z+x*_.z),l.push(f.x,f.y,f.z),h.subVectors(f,d).normalize(),c.push(h.x,h.y,h.z),u.push(b/n),u.push(w/s)}}for(let b=1;b<=n;b++)for(let y=1;y<=s;y++){const w=(s+1)*(b-1)+(y-1),M=(s+1)*b+(y-1),C=(s+1)*b+y,x=(s+1)*(b-1)+y;o.push(w,M,x),o.push(M,C,x)}this.setIndex(o),this.setAttribute("position",new Ve(l,3)),this.setAttribute("normal",new Ve(c,3)),this.setAttribute("uv",new Ve(u,2));function v(b,y,w,M,C){const x=Math.cos(b),E=Math.sin(b),R=w/y*b,D=Math.cos(R);C.x=M*(2+D)*.5*x,C.y=M*(2+D)*E*.5,C.z=M*Math.sin(R)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _h(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class vh extends ht{constructor(e=new qd(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,l=new P,c=new ae;let u=new P;const f=[],h=[],d=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Ve(f,3)),this.setAttribute("normal",new Ve(h,3)),this.setAttribute("uv",new Ve(d,2));function _(){for(let b=0;b<t;b++)g(b);g(r===!1?t:0),v(),m()}function g(b){u=e.getPointAt(b/t,u);const y=a.normals[b],w=a.binormals[b];for(let M=0;M<=s;M++){const C=M/s*Math.PI*2,x=Math.sin(C),E=-Math.cos(C);l.x=E*y.x+x*w.x,l.y=E*y.y+x*w.y,l.z=E*y.z+x*w.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,f.push(o.x,o.y,o.z)}}function m(){for(let b=1;b<=t;b++)for(let y=1;y<=s;y++){const w=(s+1)*(b-1)+(y-1),M=(s+1)*b+(y-1),C=(s+1)*b+y,x=(s+1)*(b-1)+y;p.push(w,M,x),p.push(M,C,x)}}function v(){for(let b=0;b<=t;b++)for(let y=0;y<=s;y++)c.x=b/t,c.y=y/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new vh(new Tc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class d0 extends ht{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new P,r=new P;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const f=l[c],h=f.start,d=f.count;for(let p=h,_=h+d;p<_;p+=3)for(let g=0;g<3;g++){const m=o.getX(p+g),v=o.getX(p+(g+1)%3);s.fromBufferAttribute(a,m),r.fromBufferAttribute(a,v),Op(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const u=3*o+c,f=3*o+(c+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,f),Op(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ve(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Op(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}var Fp=Object.freeze({__proto__:null,BoxGeometry:Rs,CapsuleGeometry:ah,CircleGeometry:oh,ConeGeometry:wo,CylinderGeometry:Mo,DodecahedronGeometry:lh,EdgesGeometry:n0,ExtrudeGeometry:hh,IcosahedronGeometry:uh,LatheGeometry:dh,OctahedronGeometry:Eo,PlaneGeometry:aa,PolyhedronGeometry:Is,RingGeometry:fh,ShapeGeometry:ph,SphereGeometry:Ao,TetrahedronGeometry:mh,TorusGeometry:gh,TorusKnotGeometry:_h,TubeGeometry:vh,WireframeGeometry:d0});class f0 extends bn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Be(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function ta(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(kp(s))s.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(kp(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Un(i){const e={};for(let t=0;t<i.length;t++){const n=ta(i[t]);for(const s in n)e[s]=n[s]}return e}function kp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function _S(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function p0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const Yd={clone:ta,merge:Un};var vS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vS,this.fragmentShader=yS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ta(e.uniforms),this.uniformsGroups=_S(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Be().setHex(s.value);break;case"v2":this.uniforms[n].value=new ae().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ct().fromArray(s.value);break;case"m4":this.uniforms[n].value=new nt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Zd extends fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Kd extends bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=es,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class m0 extends Kd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class g0 extends bn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Be(16777215),this.specular=new Be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=es,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=xo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _0 extends bn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Be(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=es,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class v0 extends bn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=es,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class y0 extends bn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=es,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=xo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jd extends bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jd extends bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class x0 extends bn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Be(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=es,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}class b0 extends zn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function js(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function S0(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Hu(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function M0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}function xS(i,e,t,n,s=30){const r=i.clone();r.name=e;const a=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],u=c.getValueSize(),f=[],h=[];for(let d=0;d<c.times.length;++d){const p=c.times[d]*s;if(!(p<t||p>=n)){f.push(c.times[d]);for(let _=0;_<u;++_)h.push(c.values[d*u+_])}}f.length!==0&&(c.times=js(f,c.times.constructor),c.values=js(h,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function bS(i,e=0,t=i,n=30){n<=0&&(n=30);const s=t.tracks.length,r=e/n;for(let a=0;a<s;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=i.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let u=0;const f=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);let h=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);const p=o.times.length-1;let _;if(r<=o.times[0]){const m=u,v=f-u;_=o.values.slice(m,v)}else if(r>=o.times[p]){const m=p*f+u,v=m+f-u;_=o.values.slice(m,v)}else{const m=o.createInterpolant(),v=u,b=f-u;m.evaluate(r),_=m.resultBuffer.slice(v,b)}l==="quaternion"&&new yn().fromArray(_).normalize().conjugate().toArray(_);const g=c.times.length;for(let m=0;m<g;++m){const v=m*d+h;if(l==="quaternion")yn.multiplyQuaternionsFlat(c.values,v,_,0,c.values,v);else{const b=d-h*2;for(let y=0;y<b;++y)c.values[v+y]-=_[y]}}}return i.blendMode=Dd,i}class SS{static convertArray(e,t){return js(e,t)}static isTypedArray(e){return zg(e)}static getKeyframeOrder(e){return S0(e)}static sortedArray(e,t,n){return Hu(e,t,n)}static flattenJSON(e,t,n,s){M0(e,t,n,s)}static subclip(e,t,n,s,r=30){return xS(e,t,n,s,r)}static makeClipAdditive(e,t=0,n=e,s=30){return bS(e,t,n,s)}}class oa{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class w0 extends oa{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zs,endingEnd:Zs}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ks:r=e,o=2*t-n;break;case Ja:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ks:a=e,l=2*n-t;break;case Ja:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,p=(n-t)/(s-t),_=p*p,g=_*p,m=-h*g+2*h*_-h*p,v=(1+h)*g+(-1.5-2*h)*_+(-.5+h)*p+1,b=(-1-d)*g+(1.5+d)*_+.5*p,y=d*g-d*_;for(let w=0;w!==o;++w)r[w]=m*a[u+w]+v*a[c+w]+b*a[l+w]+y*a[f+w];return r}}class Qd extends oa{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),f=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*f+a[l+h]*u;return r}}class T0 extends oa{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class E0 extends oa{interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){const p=(n-t)/(s-t),_=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*_+a[l+g]*p;return r}const h=o*2,d=e-1;for(let p=0;p!==o;++p){const _=a[c+p],g=a[l+p],m=d*h+p*2,v=f[m],b=f[m+1],y=e*h+p*2,w=u[y],M=u[y+1];let C=(n-t)/(s-t),x,E,R,D,z;for(let L=0;L<8;L++){x=C*C,E=x*C,R=1-C,D=R*R,z=D*R;const F=z*t+3*D*C*v+3*R*x*w+E*s-n;if(Math.abs(F)<1e-10)break;const U=3*D*(v-t)+6*R*C*(w-v)+3*x*(s-w);if(Math.abs(U)<1e-10)break;C=C-F/U,C=Math.max(0,Math.min(1,C))}r[p]=z*_+3*D*C*b+3*R*x*M+E*g}return r}}class mi{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=js(t,this.TimeBufferType),this.values=js(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:js(e.times,Array),values:js(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new T0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new w0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new E0(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ja:t=this.InterpolantFactoryMethodDiscrete;break;case Sc:t=this.InterpolantFactoryMethodLinear;break;case El:t=this.InterpolantFactoryMethodSmooth;break;case Fu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ce("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ja;case this.InterpolantFactoryMethodLinear:return Sc;case this.InterpolantFactoryMethodSmooth:return El;case this.InterpolantFactoryMethodBezier:return Fu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){je("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){je("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&zg(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){je("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===El,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{const f=o*n,h=f-n,d=f+n;for(let p=0;p!==n;++p){const _=t[f+p];if(_!==t[h+p]||_!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const f=o*n,h=a*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}mi.prototype.ValueTypeName="";mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=Sc;class dr extends mi{constructor(e,t,n){super(e,t,n)}}dr.prototype.ValueTypeName="bool";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=ja;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;class ef extends mi{constructor(e,t,n,s){super(e,t,n,s)}}ef.prototype.ValueTypeName="color";class yh extends mi{constructor(e,t,n,s){super(e,t,n,s)}}yh.prototype.ValueTypeName="number";class A0 extends oa{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let c=e*o;for(let u=c+o;c!==u;c+=4)yn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class xh extends mi{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new A0(this.times,this.values,this.getValueSize(),e)}}xh.prototype.ValueTypeName="quaternion";xh.prototype.InterpolantFactoryMethodSmooth=void 0;class fr extends mi{constructor(e,t,n){super(e,t,n)}}fr.prototype.ValueTypeName="string";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=ja;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;class tf extends mi{constructor(e,t,n,s){super(e,t,n,s)}}tf.prototype.ValueTypeName="vector";class lo{constructor(e="",t=-1,n=[],s=Yc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ti(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(wS(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(mi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=S0(l);l=Hu(l,1,u),c=Hu(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new yh(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const f=u[1];let h=s[f];h||(s[f]=h=[]),h.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function MS(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return yh;case"vector":case"vector2":case"vector3":case"vector4":return tf;case"color":return ef;case"quaternion":return xh;case"bool":case"boolean":return dr;case"string":return fr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function wS(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=MS(i.type);if(i.times===void 0){const t=[],n=[];M0(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Li={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Bp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Bp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Bp(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class nf{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const pr=new nf;class $n{constructor(e){this.manager=e!==void 0?e:pr,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}$n.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yi={};class TS extends Error{constructor(e,t){super(e),this.response=t}}class ts extends $n{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Li.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Yi[e]!==void 0){Yi[e].push({onLoad:t,onProgress:n,onError:s});return}Yi[e]=[],Yi[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ce("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Yi[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,p=d!==0;let _=0;const g=new ReadableStream({start(m){v();function v(){f.read().then(({done:b,value:y})=>{if(b)m.close();else{_+=y.byteLength;const w=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let M=0,C=u.length;M<C;M++){const x=u[M];x.onProgress&&x.onProgress(w)}m.enqueue(y),v()}},b=>{m.error(b)})}}});return new Response(g)}else throw new TS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Li.add(`file:${e}`,c);const u=Yi[e];delete Yi[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Yi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Yi[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class ES extends $n{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new ts(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):je(l),r.manager.itemError(e)}},n,s)}parse(e){const t=[];for(let n=0;n<e.length;n++){const s=lo.parse(e[n]);t.push(s)}return t}}class AS extends $n{constructor(e){super(e)}load(e,t,n,s){const r=this,a=[],o=new rh,l=new ts(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function u(f){l.load(e[f],function(h){const d=r.parse(h,!0);a[f]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(o.minFilter=Wt),o.image=a,o.format=d.format,o.needsUpdate=!0,t&&t(o))},n,s)}if(Array.isArray(e))for(let f=0,h=e.length;f<h;++f)u(f);else l.load(e,function(f){const h=r.parse(f,!0);if(h.isCubemap){const d=h.mipmaps.length/h.mipmapCount;for(let p=0;p<d;p++){a[p]={mipmaps:[]};for(let _=0;_<h.mipmapCount;_++)a[p].mipmaps.push(h.mipmaps[p*h.mipmapCount+_]),a[p].format=h.format,a[p].width=h.width,a[p].height=h.height}o.image=a}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=Wt),o.format=h.format,o.needsUpdate=!0,t&&t(o)},n,s);return o}}const Ur=new WeakMap;class co extends $n{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Li.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=Ur.get(a);f===void 0&&(f=[],Ur.set(a,f)),f.push({onLoad:t,onError:s})}return a}const o=no("img");function l(){u(),t&&t(this);const f=Ur.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}Ur.delete(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),Li.remove(`image:${e}`);const h=Ur.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onError&&p.onError(f)}Ur.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Li.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class CS extends $n{constructor(e){super(e)}load(e,t,n,s){const r=new So;r.colorSpace=Nn;const a=new co(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){r.images[c]=u,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,s)}for(let c=0;c<e.length;++c)l(c);return r}}class RS extends $n{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new ci,o=new ts(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(u){s!==void 0?s(u):je(u);return}r._applyTexData(a,c),t&&t(a,c)},n,s),a}createDataTexture(e){const t=new ci;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:qn,e.wrapT=t.wrapT!==void 0?t.wrapT:qn,e.magFilter=t.magFilter!==void 0?t.magFilter:Wt,e.minFilter=t.minFilter!==void 0?t.minFilter:Wt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Di),t.mipmapCount===1&&(e.minFilter=Wt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class IS extends $n{constructor(e){super(e)}load(e,t,n,s){const r=new Yt,a=new co(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Ps extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class C0 extends Ps{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const du=new nt,zp=new P,Vp=new P;class sf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new or,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zp.setFromMatrixPosition(e.matrixWorld),t.position.copy(zp),Vp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vp),t.updateMatrixWorld(),du.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(du,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===rr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(du)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ul=new P,dl=new yn,Ci=new P;let bh=class extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ul,dl,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ul,dl,Ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ul,dl,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ul,dl,Ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const ds=new P,Gp=new ae,Hp=new ae;class gn extends bh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jr*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ds.x,ds.y).multiplyScalar(-e/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ds.x,ds.y).multiplyScalar(-e/ds.z)}getViewSize(e,t){return this.getViewBounds(e,Gp,Hp),t.subVectors(Hp,Gp)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class PS extends sf{constructor(){super(new gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Jr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class R0 extends Ps{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new PS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class DS extends sf{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}}class I0 extends Ps{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new DS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class la extends bh{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class LS extends sf{constructor(){super(new la(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class P0 extends Ps{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new LS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class D0 extends Ps{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class L0 extends Ps{constructor(e,t,n=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class rf{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new P)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,s=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*s),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*s)),t.addScaledVector(a[5],1.092548*(s*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-s*s)),t}getIrradianceAt(e,t){const n=e.x,s=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*s),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*s),t.addScaledVector(a[5],2*.429043*s*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-s*s)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].fromArray(e,t+s*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].toArray(e,t+s*3);return e}static getBasisAt(e,t){const n=e.x,s=e.y,r=e.z;t[0]=.282095,t[1]=.488603*s,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*s,t[5]=1.092548*s*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-s*s)}}class U0 extends Ps{constructor(e=new rf,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}const Wp={};class Sh extends $n{constructor(e){super(e),this.textures={}}load(e,t,n,s){const r=this,a=new ts(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):je(l),r.manager.itemError(e)}},n,s)}parse(e){const t=this.createMaterialFromType(e.type);return t.fromJSON(e,this.textures),t}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return Sh.createMaterialFromType(e)}static createMaterialFromType(e){const n={ShadowMaterial:f0,SpriteMaterial:kd,RawShaderMaterial:Zd,ShaderMaterial:fi,PointsMaterial:zd,MeshPhysicalMaterial:m0,MeshStandardMaterial:Kd,MeshPhongMaterial:g0,MeshToonMaterial:_0,MeshNormalMaterial:v0,MeshLambertMaterial:y0,MeshDepthMaterial:jd,MeshDistanceMaterial:Jd,MeshBasicMaterial:is,MeshMatcapMaterial:x0,LineDashedMaterial:b0,LineBasicMaterial:zn,Material:bn,...Wp}[e];let s;return n===void 0?(bs(`MaterialLoader: Unknown material type "${e}". Use .registerMaterial() before starting the deserialization process.`),s=new bn):s=new n,s}static registerMaterial(e,t){Wp[e]=t}}class Wu{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class N0 extends ht{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class O0 extends $n{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new ts(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):je(l),r.manager.itemError(e)}},n,s)}parse(e){const t={},n={};function s(d,p){if(t[p]!==void 0)return t[p];const g=d.interleavedBuffers[p],m=r(d,g.buffer),v=Wr(g.type,m),b=new nh(v,g.stride);return b.uuid=g.uuid,t[p]=b,b}function r(d,p){if(n[p]!==void 0)return n[p];const g=d.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}const a=e.isInstancedBufferGeometry?new N0:new ht,o=e.data.index;if(o!==void 0){const d=Wr(o.type,o.array);a.setIndex(new kt(d,1))}const l=e.data.attributes;for(const d in l){const p=l[d];let _;if(p.isInterleavedBufferAttribute){const g=s(e.data,p.data);_=new ar(g,p.itemSize,p.offset,p.normalized)}else{const g=Wr(p.type,p.array),m=p.isInstancedBufferAttribute?Qr:kt;_=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),a.setAttribute(d,_)}const c=e.data.morphAttributes;if(c)for(const d in c){const p=c[d],_=[];for(let g=0,m=p.length;g<m;g++){const v=p[g];let b;if(v.isInterleavedBufferAttribute){const y=s(e.data,v.data);b=new ar(y,v.itemSize,v.offset,v.normalized)}else{const y=Wr(v.type,v.array);b=new kt(y,v.itemSize,v.normalized)}v.name!==void 0&&(b.name=v.name),_.push(b)}a.morphAttributes[d]=_}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const f=e.data.groups||e.data.drawcalls||e.data.offsets;if(f!==void 0)for(let d=0,p=f.length;d!==p;++d){const _=f[d];a.addGroup(_.start,_.count,_.materialIndex)}const h=e.data.boundingSphere;return h!==void 0&&(a.boundingSphere=new xn().fromJSON(h)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}const fu={};class US extends $n{constructor(e){super(e)}load(e,t,n,s){const r=this,a=this.path===""?Wu.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new ts(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(f){s!==void 0&&s(f),je("ObjectLoader: Can't parse "+e+".",f.message);return}const u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){s!==void 0&&s(new Error("THREE.ObjectLoader: Can't load "+e)),je("ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,s)}async loadAsync(e,t){const n=this,s=this.path===""?Wu.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||s;const r=new ts(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(e,t);let o;try{o=JSON.parse(a)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+e+". "+c.message)}const l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),s=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,s),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,l,o,n),u=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,u),this.bindLightTargets(c),t!==void 0){let f=!1;for(const h in a)if(a[h].data instanceof HTMLImageElement){f=!0;break}f===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,s,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(e,t){fu[e]=t}parseShapes(e){const t={};if(e!==void 0)for(let n=0,s=e.length;n<s;n++){const r=new To().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},s={};if(t.traverse(function(r){r.isBone&&(s[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=new ih().fromJSON(e[r],s);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const s=new O0;for(let r=0,a=e.length;r<a;r++){let o;const l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=s.parse(l);break;default:l.type in Fp?o=Fp[l.type].fromJSON(l,t):l.type in fu?o=fu[l.type].fromJSON(l,t):Ce(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){const n={},s={};if(e!==void 0){const r=new Sh;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){const l=e[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),s[l.uuid]=n[l.uuid]}}return s}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const s=e[n],r=lo.parse(s);t[r.uuid]=r}return t}parseImages(e,t){const n=this,s={};let r;function a(l){return l=n.manager.resolveURL(l),n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(u)}else return l.data?{data:Wr(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new nf(t);r=new co(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,u=e.length;c<u;c++){const f=e[c],h=f.url;if(Array.isArray(h)){const d=[];for(let p=0,_=h.length;p<_;p++){const g=h[p],m=o(g);m!==null&&(m instanceof HTMLImageElement?d.push(m):d.push(new ci(m.data,m.width,m.height)))}s[f.uuid]=new vs(d)}else{const d=o(f.url);s[f.uuid]=new vs(d)}}}return s}async parseImagesAsync(e){const t=this,n={};let s;async function r(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await s.loadAsync(l)}else return a.data?{data:Wr(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){s=new co(this.manager),s.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.url;if(Array.isArray(c)){const u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f],p=await r(d);p!==null&&(p instanceof HTMLImageElement?u.push(p):u.push(new ci(p.data,p.width,p.height)))}n[l.uuid]=new vs(u)}else{const u=await r(l.url);n[l.uuid]=new vs(u)}}}return n}parseTextures(e,t){function n(r,a){return typeof r=="number"?r:(Ce("ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const s={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=e[r];o.image===void 0&&Ce('ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&Ce("ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let u;Array.isArray(c)?(u=new So,c.length===6&&(u.needsUpdate=!0)):(c&&c.data?u=new ci:u=new Yt,c&&(u.needsUpdate=!0)),u.source=l,u.uuid=o.uuid,o.name!==void 0&&(u.name=o.name),o.mapping!==void 0&&(u.mapping=n(o.mapping,NS)),o.channel!==void 0&&(u.channel=o.channel),o.offset!==void 0&&u.offset.fromArray(o.offset),o.repeat!==void 0&&u.repeat.fromArray(o.repeat),o.center!==void 0&&u.center.fromArray(o.center),o.rotation!==void 0&&(u.rotation=o.rotation),o.wrap!==void 0&&(u.wrapS=n(o.wrap[0],Xp),u.wrapT=n(o.wrap[1],Xp)),o.format!==void 0&&(u.format=o.format),o.internalFormat!==void 0&&(u.internalFormat=o.internalFormat),o.type!==void 0&&(u.type=o.type),o.colorSpace!==void 0&&(u.colorSpace=o.colorSpace),o.minFilter!==void 0&&(u.minFilter=n(o.minFilter,qp)),o.magFilter!==void 0&&(u.magFilter=n(o.magFilter,qp)),o.anisotropy!==void 0&&(u.anisotropy=o.anisotropy),o.flipY!==void 0&&(u.flipY=o.flipY),o.generateMipmaps!==void 0&&(u.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(u.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(u.compareFunction=o.compareFunction),o.normalized!==void 0&&(u.normalized=o.normalized),o.userData!==void 0&&(u.userData=o.userData),s[o.uuid]=u}return s}parseObject(e,t,n,s,r){let a;function o(h){return t[h]===void 0&&Ce("ObjectLoader: Undefined geometry",h),t[h]}function l(h){if(h!==void 0){if(Array.isArray(h)){const d=[];for(let p=0,_=h.length;p<_;p++){const g=h[p];n[g]===void 0&&Ce("ObjectLoader: Undefined material",g),d.push(n[g])}return d}return n[h]===void 0&&Ce("ObjectLoader: Undefined material",h),n[h]}}function c(h){return s[h]===void 0&&Ce("ObjectLoader: Undefined texture",h),s[h]}let u,f;switch(e.type){case"Scene":a=new Nd,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new Be(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new th(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new eh(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new gn(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new la(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new D0(e.color,e.intensity);break;case"DirectionalLight":a=new P0(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new I0(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new L0(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new R0(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new C0(e.color,e.groundColor,e.intensity);break;case"LightProbe":const h=new rf().fromArray(e.sh);a=new U0(h,e.intensity);break;case"SkinnedMesh":u=o(e.geometry),f=l(e.material),a=new Zg(u,f),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":u=o(e.geometry),f=l(e.material),a=new rn(u,f);break;case"InstancedMesh":u=o(e.geometry),f=l(e.material);const d=e.count,p=e.instanceMatrix,_=e.instanceColor;a=new Kg(u,f,d),a.instanceMatrix=new Qr(new Float32Array(p.array),16),_!==void 0&&(a.instanceColor=new Qr(new Float32Array(_.array),_.itemSize));break;case"BatchedMesh":u=o(e.geometry),f=l(e.material),a=new jg(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,f),a.geometry=u,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._geometryInfo=e.geometryInfo.map(g=>{let m=null,v=null;return g.boundingBox!==void 0&&(m=new Rn().fromJSON(g.boundingBox)),g.boundingSphere!==void 0&&(v=new xn().fromJSON(g.boundingSphere)),{...g,boundingBox:m,boundingSphere:v}}),a._instanceInfo=e.instanceInfo,a._availableInstanceIds=e._availableInstanceIds,a._availableGeometryIds=e._availableGeometryIds,a._nextIndexStart=e.nextIndexStart,a._nextVertexStart=e.nextVertexStart,a._geometryCount=e.geometryCount,a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._matricesTexture=c(e.matricesTexture.uuid),a._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(a.boundingSphere=new xn().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(a.boundingBox=new Rn().fromJSON(e.boundingBox));break;case"LOD":a=new Yg;break;case"Line":a=new Es(o(e.geometry),l(e.material));break;case"LineLoop":a=new Jg(o(e.geometry),l(e.material));break;case"LineSegments":a=new Vi(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new Qg(o(e.geometry),l(e.material));break;case"Sprite":a=new $g(l(e.material));break;case"Group":a=new Xr;break;case"Bone":a=new Bd;break;default:a=new wt}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.pivot!==void 0&&(a.pivot=new P().fromArray(e.pivot)),e.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.static!==void 0&&(a.static=e.static),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const h=e.children;for(let d=0;d<h.length;d++)a.add(this.parseObject(h[d],t,n,s,r))}if(e.animations!==void 0){const h=e.animations;for(let d=0;d<h.length;d++){const p=h[d];a.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const h=e.levels;for(let d=0;d<h.length;d++){const p=h[d],_=a.getObjectByProperty("uuid",p.object);_!==void 0&&a.addLevel(_,p.distance,p.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const s=t[n.skeleton];s===void 0?Ce("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(s,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,s=e.getObjectByProperty("uuid",n);s!==void 0?t.target=s:t.target=new wt}})}}const NS={UVMapping:Vc,CubeReflectionMapping:Oi,CubeRefractionMapping:Ms,EquirectangularReflectionMapping:Pa,EquirectangularRefractionMapping:Da,CubeUVReflectionMapping:ra},Xp={RepeatWrapping:$a,ClampToEdgeWrapping:qn,MirroredRepeatWrapping:Ya},qp={NearestFilter:sn,NearestMipmapNearestFilter:Td,NearestMipmapLinearFilter:Hr,LinearFilter:Wt,LinearMipmapNearestFilter:La,LinearMipmapLinearFilter:Di},pu=new WeakMap;class OS extends $n{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ce("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ce("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Li.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{pu.has(a)===!0?(s&&s(pu.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){Li.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){s&&s(c),pu.set(l,c),Li.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Li.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let fl;class af{static getContext(){return fl===void 0&&(fl=new(window.AudioContext||window.webkitAudioContext)),fl}static setContext(e){fl=e}}class FS extends $n{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new ts(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0),u=af.getContext(),f=e+"#decode";r.manager.itemStart(f),u.decodeAudioData(c,function(h){t(h),r.manager.itemEnd(f)}).catch(function(h){o(h),r.manager.itemEnd(f)})}catch(c){o(c)}},n,s);function o(l){s?s(l):je(l),r.manager.itemError(e)}}}const $p=new nt,Yp=new nt,Bs=new nt;class kS{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new gn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new gn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Bs.copy(e.projectionMatrix);const s=t.eyeSep/2,r=s*t.near/t.focus,a=t.near*Math.tan(nr*t.fov*.5)/t.zoom;let o,l;Yp.elements[12]=-s,$p.elements[12]=s,o=-a*t.aspect+r,l=a*t.aspect+r,Bs.elements[0]=2*t.near/(l-o),Bs.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(Bs),o=-a*t.aspect-r,l=a*t.aspect-r,Bs.elements[0]=2*t.near/(l-o),Bs.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(Bs)}this.cameraL.matrix.copy(e.matrixWorld).multiply(Yp),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(e.matrixWorld).multiply($p),this.cameraR.matrixWorldNeedsUpdate=!0}}const Nr=-90,Or=1;class F0 extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gn(Nr,Or,e,t);s.layers=this.layers,this.add(s);const r=new gn(Nr,Or,e,t);r.layers=this.layers,this.add(r);const a=new gn(Nr,Or,e,t);a.layers=this.layers,this.add(a);const o=new gn(Nr,Or,e,t);o.layers=this.layers,this.add(o);const l=new gn(Nr,Or,e,t);l.layers=this.layers,this.add(l);const c=new gn(Nr,Or,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class k0 extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class B0{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=BS.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function BS(){this._document.hidden===!1&&this.reset()}const zs=new P,mu=new yn,zS=new P,Vs=new P,Gs=new P;class VS extends wt{constructor(){super(),this.type="AudioListener",this.context=af.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new B0}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();const t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(zs,mu,zS),Vs.set(0,0,-1).applyQuaternion(mu),Gs.set(0,1,0).applyQuaternion(mu),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(zs.x,n),t.positionY.linearRampToValueAtTime(zs.y,n),t.positionZ.linearRampToValueAtTime(zs.z,n),t.forwardX.linearRampToValueAtTime(Vs.x,n),t.forwardY.linearRampToValueAtTime(Vs.y,n),t.forwardZ.linearRampToValueAtTime(Vs.z,n),t.upX.linearRampToValueAtTime(Gs.x,n),t.upY.linearRampToValueAtTime(Gs.y,n),t.upZ.linearRampToValueAtTime(Gs.z,n)}else t.setPosition(zs.x,zs.y,zs.z),t.setOrientation(Vs.x,Vs.y,Vs.z,Gs.x,Gs.y,Gs.z)}}class z0 extends wt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){Ce("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Ce("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Ce("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){Ce("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){Ce("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Ce("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){Ce("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(Ce("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const Hs=new P,Zp=new yn,GS=new P,Ws=new P;class HS extends z0{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Hs,Zp,GS),Ws.set(0,0,1).applyQuaternion(Zp);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Hs.x,n),t.positionY.linearRampToValueAtTime(Hs.y,n),t.positionZ.linearRampToValueAtTime(Hs.z,n),t.orientationX.linearRampToValueAtTime(Ws.x,n),t.orientationY.linearRampToValueAtTime(Ws.y,n),t.orientationZ.linearRampToValueAtTime(Ws.z,n)}else t.setPosition(Hs.x,Hs.y,Hs.z),t.setOrientation(Ws.x,Ws.y,Ws.z)}}class WS{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class V0{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){yn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const a=this._workIndex*r;yn.multiplyQuaternionsFlat(e,a,e,t,e,n),yn.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){const a=1-s;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*s}}}const of="\\[\\]\\.:\\/",XS=new RegExp("["+of+"]","g"),lf="[^"+of+"]",qS="[^"+of.replace("\\.","")+"]",$S=/((?:WC+[\/:])*)/.source.replace("WC",lf),YS=/(WCOD+)?/.source.replace("WCOD",qS),ZS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lf),KS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lf),jS=new RegExp("^"+$S+YS+ZS+KS+"$"),JS=["material","materials","bones","map"];class QS{constructor(e,t,n){const s=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Et{constructor(e,t,n){this.path=t,this.parsedPath=n||Et.parseTrackName(t),this.node=Et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Et.Composite(e,t,n):new Et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(XS,"")}static parseTrackName(e){const t=jS.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);JS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;je("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Et.Composite=QS;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class eM{constructor(){this.isAnimationObjectGroup=!0,this.uuid=ti(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,s=arguments.length;n!==s;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,s=this._parsedPaths,r=this._bindings,a=r.length;let o,l=e.length,c=this.nCachedObjects_;for(let u=0,f=arguments.length;u!==f;++u){const h=arguments[u],d=h.uuid;let p=t[d];if(p===void 0){p=l++,t[d]=p,e.push(h);for(let _=0,g=a;_!==g;++_)r[_].push(new Et(h,n[_],s[_]))}else if(p<c){o=e[p];const _=--c,g=e[_];t[g.uuid]=p,e[p]=g,t[d]=_,e[_]=h;for(let m=0,v=a;m!==v;++m){const b=r[m],y=b[_];let w=b[p];b[p]=y,w===void 0&&(w=new Et(h,n[m],s[m])),b[_]=w}}else e[p]!==o&&je("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,s=n.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,u=t[c];if(u!==void 0&&u>=r){const f=r++,h=e[f];t[h.uuid]=u,e[u]=h,t[c]=f,e[f]=l;for(let d=0,p=s;d!==p;++d){const _=n[d],g=_[f],m=_[u];_[u]=g,_[f]=m}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,s=n.length;let r=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],u=c.uuid,f=t[u];if(f!==void 0)if(delete t[u],f<r){const h=--r,d=e[h],p=--a,_=e[p];t[d.uuid]=f,e[f]=d,t[_.uuid]=h,e[h]=_,e.pop();for(let g=0,m=s;g!==m;++g){const v=n[g],b=v[h],y=v[p];v[f]=b,v[h]=y,v.pop()}}else{const h=--a,d=e[h];h>0&&(t[d.uuid]=f),e[f]=d,e.pop();for(let p=0,_=s;p!==_;++p){const g=n[p];g[f]=g[h],g.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let s=n[e];const r=this._bindings;if(s!==void 0)return r[s];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,f=new Array(c);s=r.length,n[e]=s,a.push(e),o.push(t),r.push(f);for(let h=u,d=l.length;h!==d;++h){const p=l[h];f[h]=new Et(p,e,t)}return f}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const s=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),s[n]=s[o],s.pop()}}}class G0{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Zs,endingEnd:Zs};for(let c=0;c!==a;++c){const u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Ig,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Dd:for(let u=0,f=l.length;u!==f;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case Yc:default:for(let u=0,f=l.length;u!==f;++u)l[u].evaluate(a),c[u].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const a=n===Pg;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===Rg){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){const o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=Ks,s.endingEnd=Ks):(e?s.endingStart=this.zeroSlopeAtStart?Ks:Zs:s.endingStart=Ja,t?s.endingEnd=this.zeroSlopeAtEnd?Ks:Zs:s.endingEnd=Ja)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const tM=new Float32Array(1);class nM extends Ti{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let f=0;f!==r;++f){const h=s[f],d=h.name;let p=u[d];if(p!==void 0)++p.referenceCount,a[f]=p;else{if(p=a[f],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,d));continue}const _=t&&t._propertyBindings[f].binding.parsedPath;p=new V0(Et.create(n,d,_),h.ValueTypeName,h.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,d),a[f]=p}o[f].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const f=o.actionByRoot,h=(e._localRoot||this._root).uuid;delete f[h],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Qd(new Float32Array(2),new Float32Array(2),1,tM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let a=typeof e=="string"?lo.findByName(s,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Yc),l!==void 0){const f=l.actionByRoot[r];if(f!==void 0&&f.blendMode===n)return f;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new G0(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?lo.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,f=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,f._cacheIndex=u,t[u]=f,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class iM extends Ud{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isRenderTarget3D=!0,this.depth=n,this.texture=new Jc(null,e,t,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}}class cf{constructor(e){this.value=e}clone(){return new cf(this.value.clone===void 0?this.value:this.value.clone())}}let sM=0;class rM extends Ti{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:sM++}),this.name="",this.usage=to,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,s=t.length;n<s;n++){const r=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class aM extends nh{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class oM{constructor(e,t,n,s,r,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=s,this.count=r,this.normalized=a,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Kp=new nt;class lM{constructor(e,t,n=0,s=1/0){this.ray=new ur(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Qc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kp),this}intersectObject(e,t=!0,n=[]){return Xu(e,this,n,t),n.sort(jp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Xu(e[s],this,n,t);return n.sort(jp),n}}function jp(i,e){return i.distance-e.distance}function Xu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Xu(r[a],e,t,!0)}}class cM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ce("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class qu{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class hM{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const Mf=class Mf{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Mf.prototype.isMatrix2=!0;let $u=Mf;const Jp=new ae;class H0{constructor(e=new ae(1/0,1/0),t=new ae(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jp.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jp).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qp=new P,pl=new P,Fr=new P,kr=new P,gu=new P,uM=new P,dM=new P;class fM{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Qp.subVectors(e,this.start),pl.subVectors(this.end,this.start);const n=pl.dot(pl);if(n===0)return 0;let r=pl.dot(Qp)/n;return t&&(r=rt(r,0,1)),r}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=uM,n=dM){const s=10000000000000001e-32;let r,a;const o=this.start,l=e.start,c=this.end,u=e.end;Fr.subVectors(c,o),kr.subVectors(u,l),gu.subVectors(o,l);const f=Fr.dot(Fr),h=kr.dot(kr),d=kr.dot(gu);if(f<=s&&h<=s)return t.copy(o),n.copy(l),t.sub(n),t.dot(t);if(f<=s)r=0,a=d/h,a=rt(a,0,1);else{const p=Fr.dot(gu);if(h<=s)a=0,r=rt(-p/f,0,1);else{const _=Fr.dot(kr),g=f*h-_*_;g!==0?r=rt((_*d-p*h)/g,0,1):r=0,a=(_*r+d)/h,a<0?(a=0,r=rt(-p/f,0,1)):a>1&&(a=1,r=rt((_-p)/f,0,1))}}return t.copy(o).addScaledVector(Fr,r),n.copy(l).addScaledVector(kr,a),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const em=new P;class pM extends wt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new ht,s=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,u=o/l*Math.PI*2;s.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new Ve(s,3));const r=new zn({fog:!1,toneMapped:!1});this.cone=new Vi(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),em.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(em),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const fs=new P,ml=new nt,_u=new nt;class mM extends Vi{constructor(e){const t=W0(e),n=new ht,s=[],r=[];for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(s.push(0,0,0),s.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new Ve(s,3)),n.setAttribute("color",new Ve(r,3));const a=new zn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const o=new Be(255),l=new Be(65280);this.setColors(o,l)}updateMatrixWorld(e){const t=this.bones,n=this.geometry,s=n.getAttribute("position");_u.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(ml.multiplyMatrices(_u,o.matrixWorld),fs.setFromMatrixPosition(ml),s.setXYZ(a,fs.x,fs.y,fs.z),ml.multiplyMatrices(_u,o.parent.matrixWorld),fs.setFromMatrixPosition(ml),s.setXYZ(a+1,fs.x,fs.y,fs.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const s=this.geometry.getAttribute("color");for(let r=0;r<s.count;r+=2)s.setXYZ(r,e.r,e.g,e.b),s.setXYZ(r+1,t.r,t.g,t.b);return s.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function W0(i){const e=[];i.isBone===!0&&e.push(i);for(let t=0;t<i.children.length;t++)e.push(...W0(i.children[t]));return e}class gM extends rn{constructor(e,t,n){const s=new Ao(t,4,2),r=new is({wireframe:!0,fog:!1,toneMapped:!1});super(s,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const _M=new P,tm=new Be,nm=new Be;class vM extends wt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const s=new Eo(t);s.rotateY(Math.PI*.5),this.material=new is({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=s.getAttribute("position"),a=new Float32Array(r.count*3);s.setAttribute("color",new kt(a,3)),this.add(new rn(s,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");tm.copy(this.light.color),nm.copy(this.light.groundColor);for(let n=0,s=t.count;n<s;n++){const r=n<s/2?tm:nm;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),e.lookAt(_M.setFromMatrixPosition(this.light.matrixWorld).negate())}}class yM extends Vi{constructor(e=10,t=10,n=4473924,s=8947848){n=new Be(n),s=new Be(s);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let h=0,d=0,p=-o;h<=t;h++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const _=h===r?n:s;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const u=new ht;u.setAttribute("position",new Ve(l,3)),u.setAttribute("color",new Ve(c,3));const f=new zn({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class xM extends Vi{constructor(e=10,t=16,n=8,s=64,r=4473924,a=8947848){r=new Be(r),a=new Be(a);const o=[],l=[];if(t>1)for(let f=0;f<t;f++){const h=f/t*(Math.PI*2),d=Math.sin(h)*e,p=Math.cos(h)*e;o.push(0,0,0),o.push(d,0,p);const _=f&1?r:a;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let f=0;f<n;f++){const h=f&1?r:a,d=e-e/n*f;for(let p=0;p<s;p++){let _=p/s*(Math.PI*2),g=Math.sin(_)*d,m=Math.cos(_)*d;o.push(g,0,m),l.push(h.r,h.g,h.b),_=(p+1)/s*(Math.PI*2),g=Math.sin(_)*d,m=Math.cos(_)*d,o.push(g,0,m),l.push(h.r,h.g,h.b)}}const c=new ht;c.setAttribute("position",new Ve(o,3)),c.setAttribute("color",new Ve(l,3));const u=new zn({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const im=new P,gl=new P,sm=new P;class bM extends wt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let s=new ht;s.setAttribute("position",new Ve([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new zn({fog:!1,toneMapped:!1});this.lightPlane=new Es(s,r),this.add(this.lightPlane),s=new ht,s.setAttribute("position",new Ve([0,0,0,0,0,1],3)),this.targetLine=new Es(s,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),im.setFromMatrixPosition(this.light.matrixWorld),gl.setFromMatrixPosition(this.light.target.matrixWorld),sm.subVectors(gl,im),this.lightPlane.lookAt(gl),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(gl),this.targetLine.scale.z=sm.length()}}const _l=new P,Kt=new bh;class SM extends Vi{constructor(e){const t=new ht,n=new zn({color:16777215,vertexColors:!0,toneMapped:!1}),s=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,_){l(p),l(_)}function l(p){s.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(s.length/3-1)}t.setAttribute("position",new Ve(s,3)),t.setAttribute("color",new Ve(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new Be(16755200),u=new Be(16711680),f=new Be(43775),h=new Be(16777215),d=new Be(3355443);this.setColors(c,u,f,h,d)}setColors(e,t,n,s,r){const o=this.geometry.getAttribute("color");return o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,s.r,s.g,s.b),o.setXYZ(39,s.r,s.g,s.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,n=1,s=1;let r,a;if(Kt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,a=0;else if(this.camera.coordinateSystem===Qn)r=-1,a=1;else if(this.camera.coordinateSystem===rr)r=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);nn("c",t,e,Kt,0,0,r),nn("t",t,e,Kt,0,0,a),nn("n1",t,e,Kt,-n,-s,r),nn("n2",t,e,Kt,n,-s,r),nn("n3",t,e,Kt,-n,s,r),nn("n4",t,e,Kt,n,s,r),nn("f1",t,e,Kt,-n,-s,a),nn("f2",t,e,Kt,n,-s,a),nn("f3",t,e,Kt,-n,s,a),nn("f4",t,e,Kt,n,s,a),nn("u1",t,e,Kt,n*.7,s*1.1,r),nn("u2",t,e,Kt,-n*.7,s*1.1,r),nn("u3",t,e,Kt,0,s*2,r),nn("cf1",t,e,Kt,-n,0,a),nn("cf2",t,e,Kt,n,0,a),nn("cf3",t,e,Kt,0,-s,a),nn("cf4",t,e,Kt,0,s,a),nn("cn1",t,e,Kt,-n,0,r),nn("cn2",t,e,Kt,n,0,r),nn("cn3",t,e,Kt,0,-s,r),nn("cn4",t,e,Kt,0,s,r),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function nn(i,e,t,n,s,r,a){_l.set(s,r,a).unproject(n);const o=e[i];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,u=o.length;c<u;c++)l.setXYZ(o[c],_l.x,_l.y,_l.z)}}const vl=new Rn;class MM extends Vi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new ht;r.setIndex(new kt(n,1)),r.setAttribute("position",new kt(s,3)),super(r,new zn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&vl.setFromObject(this.object),vl.isEmpty())return;const e=vl.min,t=vl.max,n=this.geometry.attributes.position,s=n.array;s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=e.x,s[4]=t.y,s[5]=t.z,s[6]=e.x,s[7]=e.y,s[8]=t.z,s[9]=t.x,s[10]=e.y,s[11]=t.z,s[12]=t.x,s[13]=t.y,s[14]=e.z,s[15]=e.x,s[16]=t.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=t.x,s[22]=e.y,s[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class wM extends Vi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new ht;r.setIndex(new kt(n,1)),r.setAttribute("position",new Ve(s,3)),super(r,new zn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class TM extends Es{constructor(e,t=1,n=16776960){const s=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new ht;a.setAttribute("position",new Ve(r,3)),a.computeBoundingSphere(),super(a,new zn({color:s,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new ht;l.setAttribute("position",new Ve(o,3)),l.computeBoundingSphere(),this.add(new rn(l,new is({color:s,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const rm=new P;let yl,vu;class EM extends wt{constructor(e=new P(0,0,1),t=new P(0,0,0),n=1,s=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",yl===void 0&&(yl=new ht,yl.setAttribute("position",new Ve([0,0,0,0,1,0],3)),vu=new wo(.5,1,5,1),vu.translate(0,-.5,0)),this.position.copy(t),this.line=new Es(yl,new zn({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new rn(vu,new is({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{rm.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(rm,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class AM extends Vi{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new ht;s.setAttribute("position",new Ve(t,3)),s.setAttribute("color",new Ve(n,3));const r=new zn({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){const s=new Be,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class CM{constructor(){this.type="ShapePath",this.color=new Be,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new so,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,a){return this.currentPath.bezierCurveTo(e,t,n,s,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let u=!1;const f=c.length;for(let h=0,d=f-1;h<f;d=h++){const p=c[h],_=c[d];p.y>l.y!=_.y>l.y&&l.x<(_.x-p.x)*(l.y-p.y)/(_.y-p.y)+p.x&&(u=!u)}return u}function t(l,c){const u=c.getCenter(new ae);if(e(u,l))return u;const f=u.y,h=[],d=l.length;for(let p=0;p<d;p++){const _=l[p],g=l[(p+1)%d];if(_.y>f!=g.y>f){const m=_.x+(f-_.y)*(g.x-_.x)/(g.y-_.y);h.push(m)}}return h.length>1&&(h.sort((p,_)=>p-_),u.x=(h[0]+h[1])/2),u}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(Ce('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");const s=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(const l of this.subPaths){const c=l.getPoints();if(c.length<3)continue;const u=xi.area(c);if(u===0)continue;const f=new H0;for(let h=0;h<c.length;h++)f.expandByPoint(c[h]);r.push({subPath:l,points:c,boundingBox:f,interiorPoint:t(c,f),absArea:Math.abs(u),winding:u<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){const c=r[l];let u=0;for(let f=l-1;f>=0;f--){const h=r[f];if(h.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,h.points)){c.container=h.exclude?h.container:h,u=h.winding,c.winding+=u;break}}s(c.winding)===s(u)&&(c.exclude=!0)}for(const l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");const a=[],o=new Map;for(const l of r){if(l.exclude||l.role!=="outer")continue;const c=new To;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(const l of r){if(l.exclude||l.role!=="hole")continue;const c=o.get(l.container);if(!c)continue;const u=new so;u.curves=l.subPath.curves,c.holes.push(u)}return a}}class X0 extends Ti{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ce("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function RM(i,e){const t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2):(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0),i}function IM(i,e){const t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0):(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2),i}function PM(i){return i.repeat.x=1,i.repeat.y=1,i.offset.x=0,i.offset.y=0,i}function Yu(i,e,t,n){const s=DM(n);switch(t){case Id:return i*e;case Xc:return i*e/s.components*s.byteLength;case bo:return i*e/s.components*s.byteLength;case ws:return i*e*2/s.components*s.byteLength;case qc:return i*e*2/s.components*s.byteLength;case Pd:return i*e*3/s.components*s.byteLength;case kn:return i*e*4/s.components*s.byteLength;case $c:return i*e*4/s.components*s.byteLength;case Ua:case Na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oa:case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $l:case Zl:return Math.max(i,16)*Math.max(e,8)/4;case ql:case Yl:return Math.max(i,8)*Math.max(e,8)/2;case Kl:case jl:case Ql:case ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Jl:case Za:case tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case sc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case rc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ac:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case oc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case lc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case cc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case hc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case uc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case dc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case fc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case pc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case mc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case gc:case _c:case vc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case yc:case xc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ka:case bc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function DM(i){switch(i){case Wn:case Ed:return{byteLength:1,components:1};case Kr:case Ad:case Fi:return{byteLength:2,components:1};case Hc:case Wc:return{byteLength:2,components:4};case di:case Gc:case Fn:return{byteLength:4,components:1};case Cd:case Rd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}class LM{static contain(e,t){return RM(e,t)}static cover(e,t){return IM(e,t)}static fill(e){return PM(e)}static getByteLength(e,t,n,s){return Yu(e,t,n,s)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bc}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bc);function q0(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function UM(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<f.length;d++){const p=f[h],_=f[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,p=f.length;d<p;d++){const _=f[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var NM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OM=`#ifdef USE_ALPHAHASH
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
#endif`,FM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VM=`#ifdef USE_AOMAP
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
#endif`,GM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HM=`#ifdef USE_BATCHING
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
#endif`,WM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,XM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$M=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,YM=`#ifdef USE_IRIDESCENCE
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
#endif`,ZM=`#ifdef USE_BUMPMAP
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
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ew=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,iw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,sw=`#define PI 3.141592653589793
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
} // validated`,rw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,aw=`vec3 transformedNormal = objectNormal;
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
#endif`,ow=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uw="gl_FragColor = linearToOutputTexel( gl_FragColor );",dw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fw=`#ifdef USE_ENVMAP
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
#endif`,pw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mw=`#ifdef USE_ENVMAP
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
#endif`,gw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_w=`#ifdef USE_ENVMAP
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
#endif`,vw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sw=`#ifdef USE_GRADIENTMAP
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
}`,Mw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ww=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ew=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Aw=`#ifdef USE_ENVMAP
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
#endif`,Cw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dw=`PhysicalMaterial material;
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
#endif`,Lw=`uniform sampler2D dfgLUT;
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
}`,Uw=`
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
#endif`,Nw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ow=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fw=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,kw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ww=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xw=`#if defined( USE_POINTS_UV )
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
#endif`,qw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$w=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jw=`#ifdef USE_MORPHTARGETS
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
#endif`,Jw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sT=`#ifdef USE_NORMALMAP
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
#endif`,rT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_T=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xT=`float getShadowMask() {
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
}`,bT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ST=`#ifdef USE_SKINNING
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
#endif`,MT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wT=`#ifdef USE_SKINNING
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
#endif`,TT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ET=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,RT=`#ifdef USE_TRANSMISSION
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
#endif`,IT=`#ifdef USE_TRANSMISSION
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
#endif`,PT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OT=`uniform sampler2D t2D;
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
}`,FT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,BT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VT=`#include <common>
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
}`,GT=`#if DEPTH_PACKING == 3200
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
}`,HT=`#define DISTANCE
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
}`,WT=`#define DISTANCE
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
}`,XT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$T=`uniform float scale;
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
}`,YT=`uniform vec3 diffuse;
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
}`,ZT=`#include <common>
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
}`,KT=`uniform vec3 diffuse;
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
}`,jT=`#define LAMBERT
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
}`,JT=`#define LAMBERT
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
}`,QT=`#define MATCAP
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
}`,eE=`#define MATCAP
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
}`,tE=`#define NORMAL
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
}`,nE=`#define NORMAL
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
}`,iE=`#define PHONG
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
}`,sE=`#define PHONG
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
}`,rE=`#define STANDARD
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
}`,aE=`#define STANDARD
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
}`,oE=`#define TOON
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
}`,lE=`#define TOON
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
}`,cE=`uniform float size;
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
}`,hE=`uniform vec3 diffuse;
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
}`,uE=`#include <common>
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
}`,dE=`uniform vec3 color;
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
}`,fE=`uniform float rotation;
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
}`,pE=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:NM,alphahash_pars_fragment:OM,alphamap_fragment:FM,alphamap_pars_fragment:kM,alphatest_fragment:BM,alphatest_pars_fragment:zM,aomap_fragment:VM,aomap_pars_fragment:GM,batching_pars_vertex:HM,batching_vertex:WM,begin_vertex:XM,beginnormal_vertex:qM,bsdfs:$M,iridescence_fragment:YM,bumpmap_pars_fragment:ZM,clipping_planes_fragment:KM,clipping_planes_pars_fragment:jM,clipping_planes_pars_vertex:JM,clipping_planes_vertex:QM,color_fragment:ew,color_pars_fragment:tw,color_pars_vertex:nw,color_vertex:iw,common:sw,cube_uv_reflection_fragment:rw,defaultnormal_vertex:aw,displacementmap_pars_vertex:ow,displacementmap_vertex:lw,emissivemap_fragment:cw,emissivemap_pars_fragment:hw,colorspace_fragment:uw,colorspace_pars_fragment:dw,envmap_fragment:fw,envmap_common_pars_fragment:pw,envmap_pars_fragment:mw,envmap_pars_vertex:gw,envmap_physical_pars_fragment:Aw,envmap_vertex:_w,fog_vertex:vw,fog_pars_vertex:yw,fog_fragment:xw,fog_pars_fragment:bw,gradientmap_pars_fragment:Sw,lightmap_pars_fragment:Mw,lights_lambert_fragment:ww,lights_lambert_pars_fragment:Tw,lights_pars_begin:Ew,lights_toon_fragment:Cw,lights_toon_pars_fragment:Rw,lights_phong_fragment:Iw,lights_phong_pars_fragment:Pw,lights_physical_fragment:Dw,lights_physical_pars_fragment:Lw,lights_fragment_begin:Uw,lights_fragment_maps:Nw,lights_fragment_end:Ow,lightprobes_pars_fragment:Fw,logdepthbuf_fragment:kw,logdepthbuf_pars_fragment:Bw,logdepthbuf_pars_vertex:zw,logdepthbuf_vertex:Vw,map_fragment:Gw,map_pars_fragment:Hw,map_particle_fragment:Ww,map_particle_pars_fragment:Xw,metalnessmap_fragment:qw,metalnessmap_pars_fragment:$w,morphinstance_vertex:Yw,morphcolor_vertex:Zw,morphnormal_vertex:Kw,morphtarget_pars_vertex:jw,morphtarget_vertex:Jw,normal_fragment_begin:Qw,normal_fragment_maps:eT,normal_pars_fragment:tT,normal_pars_vertex:nT,normal_vertex:iT,normalmap_pars_fragment:sT,clearcoat_normal_fragment_begin:rT,clearcoat_normal_fragment_maps:aT,clearcoat_pars_fragment:oT,iridescence_pars_fragment:lT,opaque_fragment:cT,packing:hT,premultiplied_alpha_fragment:uT,project_vertex:dT,dithering_fragment:fT,dithering_pars_fragment:pT,roughnessmap_fragment:mT,roughnessmap_pars_fragment:gT,shadowmap_pars_fragment:_T,shadowmap_pars_vertex:vT,shadowmap_vertex:yT,shadowmask_pars_fragment:xT,skinbase_vertex:bT,skinning_pars_vertex:ST,skinning_vertex:MT,skinnormal_vertex:wT,specularmap_fragment:TT,specularmap_pars_fragment:ET,tonemapping_fragment:AT,tonemapping_pars_fragment:CT,transmission_fragment:RT,transmission_pars_fragment:IT,uv_pars_fragment:PT,uv_pars_vertex:DT,uv_vertex:LT,worldpos_vertex:UT,background_vert:NT,background_frag:OT,backgroundCube_vert:FT,backgroundCube_frag:kT,cube_vert:BT,cube_frag:zT,depth_vert:VT,depth_frag:GT,distance_vert:HT,distance_frag:WT,equirect_vert:XT,equirect_frag:qT,linedashed_vert:$T,linedashed_frag:YT,meshbasic_vert:ZT,meshbasic_frag:KT,meshlambert_vert:jT,meshlambert_frag:JT,meshmatcap_vert:QT,meshmatcap_frag:eE,meshnormal_vert:tE,meshnormal_frag:nE,meshphong_vert:iE,meshphong_frag:sE,meshphysical_vert:rE,meshphysical_frag:aE,meshtoon_vert:oE,meshtoon_frag:lE,points_vert:cE,points_frag:hE,shadow_vert:uE,shadow_frag:dE,sprite_vert:fE,sprite_frag:pE},Re={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},ai={basic:{uniforms:Un([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Un([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Un([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Un([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Un([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Be(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Un([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Un([Re.points,Re.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Un([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Un([Re.common,Re.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Un([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Un([Re.sprite,Re.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:Un([Re.common,Re.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:Un([Re.lights,Re.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};ai.physical={uniforms:Un([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const xl={r:0,b:0,g:0},mE=new nt,$0=new ct;$0.set(-1,0,0,0,1,0,0,0,1);function gE(i,e,t,n,s,r){const a=new Be(0);let o=s===!0?0:1,l,c,u=null,f=0,h=null;function d(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){const y=v.backgroundBlurriness>0;b=e.get(b,y)}return b}function p(v){let b=!1;const y=d(v);y===null?g(a,o):y&&y.isColor&&(g(y,1),b=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,b){const y=d(b);y&&(y.isCubeTexture||y.mapping===ra)?(c===void 0&&(c=new rn(new Rs(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:ta(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,M,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(mE.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply($0),c.material.toneMapped=vt.getTransfer(y.colorSpace)!==Dt,(u!==y||f!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new rn(new aa(2,2),new fi({name:"BackgroundMaterial",uniforms:ta(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=vt.getTransfer(y.colorSpace)!==Dt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,b){v.getRGB(xl,p0(i)),t.buffers.color.setClear(xl.r,xl.g,xl.b,b,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:p,addToRenderList:_,dispose:m}}function _E(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(D,z,L,O,F){let U=!1;const N=f(D,O,L,z);r!==N&&(r=N,c(r.object)),U=d(D,O,L,F),U&&p(D,O,L,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,y(D,z,L,O),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function f(D,z,L,O){const F=O.wireframe===!0;let U=n[z.id];U===void 0&&(U={},n[z.id]=U);const N=D.isInstancedMesh===!0?D.id:0;let B=U[N];B===void 0&&(B={},U[N]=B);let H=B[L.id];H===void 0&&(H={},B[L.id]=H);let oe=H[F];return oe===void 0&&(oe=h(l()),H[F]=oe),oe}function h(D){const z=[],L=[],O=[];for(let F=0;F<t;F++)z[F]=0,L[F]=0,O[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:L,attributeDivisors:O,object:D,attributes:{},index:null}}function d(D,z,L,O){const F=r.attributes,U=z.attributes;let N=0;const B=L.getAttributes();for(const H in B)if(B[H].location>=0){const ee=F[H];let ie=U[H];if(ie===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor)),ee===void 0||ee.attribute!==ie||ie&&ee.data!==ie.data)return!0;N++}return r.attributesNum!==N||r.index!==O}function p(D,z,L,O){const F={},U=z.attributes;let N=0;const B=L.getAttributes();for(const H in B)if(B[H].location>=0){let ee=U[H];ee===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor));const ie={};ie.attribute=ee,ee&&ee.data&&(ie.data=ee.data),F[H]=ie,N++}r.attributes=F,r.attributesNum=N,r.index=O}function _(){const D=r.newAttributes;for(let z=0,L=D.length;z<L;z++)D[z]=0}function g(D){m(D,0)}function m(D,z){const L=r.newAttributes,O=r.enabledAttributes,F=r.attributeDivisors;L[D]=1,O[D]===0&&(i.enableVertexAttribArray(D),O[D]=1),F[D]!==z&&(i.vertexAttribDivisor(D,z),F[D]=z)}function v(){const D=r.newAttributes,z=r.enabledAttributes;for(let L=0,O=z.length;L<O;L++)z[L]!==D[L]&&(i.disableVertexAttribArray(L),z[L]=0)}function b(D,z,L,O,F,U,N){N===!0?i.vertexAttribIPointer(D,z,L,F,U):i.vertexAttribPointer(D,z,L,O,F,U)}function y(D,z,L,O){_();const F=O.attributes,U=L.getAttributes(),N=z.defaultAttributeValues;for(const B in U){const H=U[B];if(H.location>=0){let oe=F[B];if(oe===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor)),oe!==void 0){const ee=oe.normalized,ie=oe.itemSize,Pe=e.get(oe);if(Pe===void 0)continue;const ut=Pe.buffer,De=Pe.type,J=Pe.bytesPerElement,fe=De===i.INT||De===i.UNSIGNED_INT||oe.gpuType===Gc;if(oe.isInterleavedBufferAttribute){const re=oe.data,we=re.stride,Xe=oe.offset;if(re.isInstancedInterleavedBuffer){for(let le=0;le<H.locationSize;le++)m(H.location+le,re.meshPerAttribute);D.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let le=0;le<H.locationSize;le++)g(H.location+le);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let le=0;le<H.locationSize;le++)b(H.location+le,ie/H.locationSize,De,ee,we*J,(Xe+ie/H.locationSize*le)*J,fe)}else{if(oe.isInstancedBufferAttribute){for(let re=0;re<H.locationSize;re++)m(H.location+re,oe.meshPerAttribute);D.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let re=0;re<H.locationSize;re++)g(H.location+re);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let re=0;re<H.locationSize;re++)b(H.location+re,ie/H.locationSize,De,ee,ie*J,ie/H.locationSize*re*J,fe)}}else if(N!==void 0){const ee=N[B];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(H.location,ee);break;case 3:i.vertexAttrib3fv(H.location,ee);break;case 4:i.vertexAttrib4fv(H.location,ee);break;default:i.vertexAttrib1fv(H.location,ee)}}}}v()}function w(){E();for(const D in n){const z=n[D];for(const L in z){const O=z[L];for(const F in O){const U=O[F];for(const N in U)u(U[N].object),delete U[N];delete O[F]}}delete n[D]}}function M(D){if(n[D.id]===void 0)return;const z=n[D.id];for(const L in z){const O=z[L];for(const F in O){const U=O[F];for(const N in U)u(U[N].object),delete U[N];delete O[F]}}delete n[D.id]}function C(D){for(const z in n){const L=n[z];for(const O in L){const F=L[O];if(F[D.id]===void 0)continue;const U=F[D.id];for(const N in U)u(U[N].object),delete U[N];delete F[D.id]}}}function x(D){for(const z in n){const L=n[z],O=D.isInstancedMesh===!0?D.id:0,F=L[O];if(F!==void 0){for(const U in F){const N=F[U];for(const B in N)u(N[B].object),delete N[B];delete F[U]}delete L[O],Object.keys(L).length===0&&delete n[z]}}}function E(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function vE(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function yE(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==kn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const x=C===Fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Wn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Fn&&!x)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ce("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:y,maxSamples:w,samples:M}}function xE(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Zi,o=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const p=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{const v=r?0:n,b=v*4;let y=m.clippingState||null;l.value=y,y=u(p,h,b,d);for(let w=0;w!==b;++w)y[w]=t[w];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,p){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=d+_*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,y=d;b!==_;++b,y+=4)a.copy(f[b]).applyMatrix4(v,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}const ys=4,am=[.125,.215,.35,.446,.526,.582],$s=20,bE=256,Ma=new la,om=new Be;let yu=null,xu=0,bu=0,Su=!1;const SE=new P;class Zu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=SE}=r;yu=this._renderer.getRenderTarget(),xu=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),Su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yu,xu,bu),this._renderer.xr.enabled=Su,e.scissorTest=!1,Br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oi||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yu=this._renderer.getRenderTarget(),xu=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),Su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Fi,format:kn,colorSpace:Qa,depthBuffer:!1},s=lm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lm(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ME(r)),this._blurMaterial=TE(r,e,t),this._ggxMaterial=wE(r,e,t)}return s}_compileMaterial(e){const t=new rn(new ht,e);this._renderer.compile(t,Ma)}_sceneToCubeUV(e,t,n,s,r){const l=new gn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(om),f.toneMapping=Si,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rn(new Rs,new is({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let m=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,m=!0):(g.color.copy(om),m=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const w=this._cubeSize;Br(s,y*w,b>2?w:0,w,w),f.setRenderTarget(s),m&&f.render(_,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Oi||e.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cm());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Br(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ma)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-ys?n-p+ys:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,Br(r,g,m,3*_,2*_),s.setRenderTarget(r),s.render(o,Ma),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Br(e,g,m,3*_,2*_),s.setRenderTarget(e),s.render(o,Ma)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const h=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*$s-1),_=r/p,g=isFinite(r)?1+Math.floor(u*_):$s;g>$s&&Ce(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${$s}`);const m=[];let v=0;for(let C=0;C<$s;++C){const x=C/_,E=Math.exp(-x*x/2);m.push(E),C===0?v+=E:C<g&&(v+=2*E)}for(let C=0;C<m.length;C++)m[C]=m[C]/v;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=p,h.mipInt.value=b-n;const y=this._sizeLods[s],w=3*y*(s>b-ys?s-b+ys:0),M=4*(this._cubeSize-y);Br(t,w,M,3*y,2*y),l.setRenderTarget(t),l.render(f,Ma)}}function ME(i){const e=[],t=[],n=[];let s=i;const r=i-ys+1+am.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ys?l=am[a-i+ys-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,p=6,_=3,g=2,m=1,v=new Float32Array(_*p*d),b=new Float32Array(g*p*d),y=new Float32Array(m*p*d);for(let M=0;M<d;M++){const C=M%3*2/3-1,x=M>2?0:-1,E=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];v.set(E,_*p*M),b.set(h,g*p*M);const R=[M,M,M,M,M,M];y.set(R,m*p*M)}const w=new ht;w.setAttribute("position",new kt(v,_)),w.setAttribute("uv",new kt(b,g)),w.setAttribute("faceIndex",new kt(y,m)),n.push(new rn(w,null)),s>ys&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function lm(i,e,t){const n=new ni(i,e,t);return n.texture.mapping=ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Br(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function wE(i,e,t){return new fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function TE(i,e,t){const n=new Float32Array($s),s=new P(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:$s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function cm(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function hm(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Mh(){return`

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
	`}class hf extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new So(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Rs(5,5,5),r=new fi({name:"CubemapFromEquirect",uniforms:ta(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bn,blending:Ni});r.uniforms.tEquirect.value=t;const a=new rn(s,r),o=t.minFilter;return t.minFilter===Di&&(t.minFilter=Wt),new F0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function EE(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Pa||d===Da)if(e.has(h)){const p=e.get(h).texture;return o(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const _=new hf(p.height);return _.fromEquirectangularTexture(i,h),e.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,p=d===Pa||d===Da,_=d===Oi||d===Ms;if(p||_){let g=t.get(h);const m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new Zu(i)),g=p?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const v=h.image;return p&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new Zu(i)),g=p?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,d){return d===Pa?h.mapping=Oi:d===Da&&(h.mapping=Ms),h}function l(h){let d=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&d++;return d===p}function c(h){const d=h.target;d.removeEventListener("dispose",c);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function AE(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&bs("WebGLRenderer: "+n+" extension not supported."),s}}}function CE(i,e,t,n){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",a),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],i.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,p=f.attributes.position;let _=0;if(p===void 0)return;if(d!==null){const v=d.array;_=d.version;for(let b=0,y=v.length;b<y;b+=3){const w=v[b+0],M=v[b+1],C=v[b+2];h.push(w,M,M,C,C,w)}}else{const v=p.array;_=p.version;for(let b=0,y=v.length/3-1;b<y;b+=3){const w=b+0,M=b+1,C=b+2;h.push(w,M,M,C,C,w)}}const g=new(p.count>=65535?Fd:Od)(h,1);g.version=_;const m=r.get(f);m&&e.remove(m),r.set(f,g)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function RE(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),t.update(h,n,1)}function c(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*a,d),t.update(h,n,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let _=0;for(let g=0;g<d;g++)_+=h[g];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function IE(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function PE(i,e,t){const n=new WeakMap,s=new Ut;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let E=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let b=0;d===!0&&(b=1),p===!0&&(b=2),_===!0&&(b=3);let y=o.attributes.position.count*b,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const M=new Float32Array(y*w*4*f),C=new jc(M,y,w,f);C.type=Fn,C.needsUpdate=!0;const x=b*4;for(let R=0;R<f;R++){const D=g[R],z=m[R],L=v[R],O=y*w*4*R;for(let F=0;F<D.count;F++){const U=F*x;d===!0&&(s.fromBufferAttribute(D,F),M[O+U+0]=s.x,M[O+U+1]=s.y,M[O+U+2]=s.z,M[O+U+3]=0),p===!0&&(s.fromBufferAttribute(z,F),M[O+U+4]=s.x,M[O+U+5]=s.y,M[O+U+6]=s.z,M[O+U+7]=0),_===!0&&(s.fromBufferAttribute(L,F),M[O+U+8]=s.x,M[O+U+9]=s.y,M[O+U+10]=s.z,M[O+U+11]=L.itemSize===4?s.w:1)}}h={count:f,texture:C,size:new ae(y,w)},n.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function DE(i,e,t,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const LE={[yd]:"LINEAR_TONE_MAPPING",[xd]:"REINHARD_TONE_MAPPING",[bd]:"CINEON_TONE_MAPPING",[Sd]:"ACES_FILMIC_TONE_MAPPING",[zc]:"AGX_TONE_MAPPING",[wd]:"NEUTRAL_TONE_MAPPING",[Md]:"CUSTOM_TONE_MAPPING"};function UE(i,e,t,n,s,r){const a=new ni(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new lr(e,t):void 0}),o=new ni(e,t,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),l=new ht;l.setAttribute("position",new Ve([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ve([0,2,0,0,2,0],2));const c=new Zd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new rn(l,c),f=new la(-1,1,1,-1,0,1);let h=null,d=null,p=!1,_,g=null,m=[],v=!1;this.setSize=function(b,y){a.setSize(b,y),o.setSize(b,y);for(let w=0;w<m.length;w++){const M=m[w];M.setSize&&M.setSize(b,y)}},this.setEffects=function(b){m=b,v=m.length>0&&m[0].isRenderPass===!0;const y=a.width,w=a.height;for(let M=0;M<m.length;M++){const C=m[M];C.setSize&&C.setSize(y,w)}},this.begin=function(b,y){if(p||b.toneMapping===Si&&m.length===0)return!1;if(g=y,y!==null){const w=y.width,M=y.height;(a.width!==w||a.height!==M)&&this.setSize(w,M)}return v===!1&&b.setRenderTarget(a),_=b.toneMapping,b.toneMapping=Si,!0},this.hasRenderPass=function(){return v},this.end=function(b,y){b.toneMapping=_,p=!0;let w=a,M=o;for(let C=0;C<m.length;C++){const x=m[C];if(x.enabled!==!1&&(x.render(b,M,w,y),x.needsSwap!==!1)){const E=w;w=M,M=E}}if(h!==b.outputColorSpace||d!==b.toneMapping){h=b.outputColorSpace,d=b.toneMapping,c.defines={},vt.getTransfer(h)===Dt&&(c.defines.SRGB_TRANSFER="");const C=LE[d];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,b.setRenderTarget(g),b.render(u,f),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Y0=new Yt,Ku=new lr(1,1),Z0=new jc,K0=new Jc,j0=new So,um=[],dm=[],fm=new Float32Array(16),pm=new Float32Array(9),mm=new Float32Array(4);function ca(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=um[s];if(r===void 0&&(r=new Float32Array(s),um[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function hn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function un(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function wh(i,e){let t=dm[e];t===void 0&&(t=new Int32Array(e),dm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function NE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function OE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2fv(this.addr,e),un(t,e)}}function FE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;i.uniform3fv(this.addr,e),un(t,e)}}function kE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4fv(this.addr,e),un(t,e)}}function BE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;mm.set(n),i.uniformMatrix2fv(this.addr,!1,mm),un(t,n)}}function zE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;pm.set(n),i.uniformMatrix3fv(this.addr,!1,pm),un(t,n)}}function VE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;fm.set(n),i.uniformMatrix4fv(this.addr,!1,fm),un(t,n)}}function GE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function HE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2iv(this.addr,e),un(t,e)}}function WE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3iv(this.addr,e),un(t,e)}}function XE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4iv(this.addr,e),un(t,e)}}function qE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $E(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2uiv(this.addr,e),un(t,e)}}function YE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3uiv(this.addr,e),un(t,e)}}function ZE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4uiv(this.addr,e),un(t,e)}}function KE(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ku.compareFunction=t.isReversedDepthBuffer()?Kc:Zc,r=Ku):r=Y0,t.setTexture2D(e||r,s)}function jE(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||K0,s)}function JE(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||j0,s)}function QE(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Z0,s)}function e1(i){switch(i){case 5126:return NE;case 35664:return OE;case 35665:return FE;case 35666:return kE;case 35674:return BE;case 35675:return zE;case 35676:return VE;case 5124:case 35670:return GE;case 35667:case 35671:return HE;case 35668:case 35672:return WE;case 35669:case 35673:return XE;case 5125:return qE;case 36294:return $E;case 36295:return YE;case 36296:return ZE;case 35678:case 36198:case 36298:case 36306:case 35682:return KE;case 35679:case 36299:case 36307:return jE;case 35680:case 36300:case 36308:case 36293:return JE;case 36289:case 36303:case 36311:case 36292:return QE}}function t1(i,e){i.uniform1fv(this.addr,e)}function n1(i,e){const t=ca(e,this.size,2);i.uniform2fv(this.addr,t)}function i1(i,e){const t=ca(e,this.size,3);i.uniform3fv(this.addr,t)}function s1(i,e){const t=ca(e,this.size,4);i.uniform4fv(this.addr,t)}function r1(i,e){const t=ca(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function a1(i,e){const t=ca(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function o1(i,e){const t=ca(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function l1(i,e){i.uniform1iv(this.addr,e)}function c1(i,e){i.uniform2iv(this.addr,e)}function h1(i,e){i.uniform3iv(this.addr,e)}function u1(i,e){i.uniform4iv(this.addr,e)}function d1(i,e){i.uniform1uiv(this.addr,e)}function f1(i,e){i.uniform2uiv(this.addr,e)}function p1(i,e){i.uniform3uiv(this.addr,e)}function m1(i,e){i.uniform4uiv(this.addr,e)}function g1(i,e,t){const n=this.cache,s=e.length,r=wh(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ku:a=Y0;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function _1(i,e,t){const n=this.cache,s=e.length,r=wh(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||K0,r[a])}function v1(i,e,t){const n=this.cache,s=e.length,r=wh(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||j0,r[a])}function y1(i,e,t){const n=this.cache,s=e.length,r=wh(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Z0,r[a])}function x1(i){switch(i){case 5126:return t1;case 35664:return n1;case 35665:return i1;case 35666:return s1;case 35674:return r1;case 35675:return a1;case 35676:return o1;case 5124:case 35670:return l1;case 35667:case 35671:return c1;case 35668:case 35672:return h1;case 35669:case 35673:return u1;case 5125:return d1;case 36294:return f1;case 36295:return p1;case 36296:return m1;case 35678:case 36198:case 36298:case 36306:case 35682:return g1;case 35679:case 36299:case 36307:return _1;case 35680:case 36300:case 36308:case 36293:return v1;case 36289:case 36303:case 36311:case 36292:return y1}}class b1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=e1(t.type)}}class S1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=x1(t.type)}}class M1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Mu=/(\w+)(\])?(\[|\.)?/g;function gm(i,e){i.seq.push(e),i.map[e.id]=e}function w1(i,e,t){const n=i.name,s=n.length;for(Mu.lastIndex=0;;){const r=Mu.exec(n),a=Mu.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){gm(t,c===void 0?new b1(o,i,e):new S1(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new M1(o),gm(t,f)),t=f}}}class Cl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);w1(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function _m(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const T1=37297;let E1=0;function A1(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const vm=new ct;function C1(i){vt._getMatrix(vm,vt.workingColorSpace,i);const e=`mat3( ${vm.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(i)){case eo:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ym(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+A1(i.getShaderSource(e),o)}else return r}function R1(i,e){const t=C1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const I1={[yd]:"Linear",[xd]:"Reinhard",[bd]:"Cineon",[Sd]:"ACESFilmic",[zc]:"AgX",[wd]:"Neutral",[Md]:"Custom"};function P1(i,e){const t=I1[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bl=new P;function D1(){vt.getLuminanceCoefficients(bl);const i=bl.x.toFixed(4),e=bl.y.toFixed(4),t=bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ca).join(`
`)}function U1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function N1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ca(i){return i!==""}function xm(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const O1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ju(i){return i.replace(O1,k1)}const F1=new Map;function k1(i,e){let t=it[e];if(t===void 0){const n=F1.get(e);if(n!==void 0)t=it[n],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ju(t)}const B1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sm(i){return i.replace(B1,z1)}function z1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const V1={[Ia]:"SHADOWMAP_TYPE_PCF",[Gr]:"SHADOWMAP_TYPE_VSM"};function G1(i){return V1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const H1={[Oi]:"ENVMAP_TYPE_CUBE",[Ms]:"ENVMAP_TYPE_CUBE",[ra]:"ENVMAP_TYPE_CUBE_UV"};function W1(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":H1[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const X1={[Ms]:"ENVMAP_MODE_REFRACTION"};function q1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":X1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $1={[xo]:"ENVMAP_BLENDING_MULTIPLY",[Eg]:"ENVMAP_BLENDING_MIX",[Ag]:"ENVMAP_BLENDING_ADD"};function Y1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":$1[i.combine]||"ENVMAP_BLENDING_NONE"}function Z1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function K1(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=G1(t),c=W1(t),u=q1(t),f=Y1(t),h=Z1(t),d=L1(t),p=U1(r),_=s.createProgram();let g,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ca).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ca).join(`
`),m.length>0&&(m+=`
`)):(g=[Mm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ca).join(`
`),m=[Mm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?it.tonemapping_pars_fragment:"",t.toneMapping!==Si?P1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,R1("linearToOutputTexel",t.outputColorSpace),D1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ca).join(`
`)),a=ju(a),a=xm(a,t),a=bm(a,t),o=ju(o),o=xm(o,t),o=bm(o,t),a=Sm(a),o=Sm(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=v+g+a,y=v+m+o,w=_m(s,s.VERTEX_SHADER,b),M=_m(s,s.FRAGMENT_SHADER,y);s.attachShader(_,w),s.attachShader(_,M),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(D){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(_)||"",L=s.getShaderInfoLog(w)||"",O=s.getShaderInfoLog(M)||"",F=z.trim(),U=L.trim(),N=O.trim();let B=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,M);else{const oe=ym(s,w,"vertex"),ee=ym(s,M,"fragment");je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+oe+`
`+ee)}else F!==""?Ce("WebGLProgram: Program Info Log:",F):(U===""||N==="")&&(H=!1);H&&(D.diagnostics={runnable:B,programLog:F,vertexShader:{log:U,prefix:g},fragmentShader:{log:N,prefix:m}})}s.deleteShader(w),s.deleteShader(M),x=new Cl(s,_),E=N1(s,_)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(_,T1)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=E1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=M,this}let j1=0;class J1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Q1(e),t.set(e,n)),n}}class Q1{constructor(e){this.id=j1++,this.code=e,this.usedTimes=0}}function eA(i){return i===ws||i===Za||i===Ka}function tA(i,e,t,n,s,r){const a=new Qc,o=new J1,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,E,R,D,z,L){const O=D.fog,F=z.geometry,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,B=e.get(x.envMap||U,N),H=B&&B.mapping===ra?B.image.height:null,oe=d[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ce("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const ee=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ie=ee!==void 0?ee.length:0;let Pe=0;F.morphAttributes.position!==void 0&&(Pe=1),F.morphAttributes.normal!==void 0&&(Pe=2),F.morphAttributes.color!==void 0&&(Pe=3);let ut,De,J,fe;if(oe){const $e=ai[oe];ut=$e.vertexShader,De=$e.fragmentShader}else{ut=x.vertexShader,De=x.fragmentShader;const $e=o.getVertexShaderStage(x),Gt=o.getFragmentShaderStage(x);o.update(x,$e,Gt),J=$e.id,fe=Gt.id}const re=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),Xe=z.isInstancedMesh===!0,le=z.isBatchedMesh===!0,Te=!!x.map,Fe=!!x.matcap,te=!!B,se=!!x.aoMap,he=!!x.lightMap,ve=!!x.bumpMap&&x.wireframe===!1,xe=!!x.normalMap,Je=!!x.displacementMap,qe=!!x.emissiveMap,ue=!!x.metalnessMap,Le=!!x.roughnessMap,V=x.anisotropy>0,Mt=x.clearcoat>0,mt=x.dispersion>0,I=x.iridescence>0,S=x.sheen>0,X=x.transmission>0,q=V&&!!x.anisotropyMap,k=Mt&&!!x.clearcoatMap,j=Mt&&!!x.clearcoatNormalMap,ce=Mt&&!!x.clearcoatRoughnessMap,$=I&&!!x.iridescenceMap,K=I&&!!x.iridescenceThicknessMap,me=S&&!!x.sheenColorMap,ke=S&&!!x.sheenRoughnessMap,Ee=!!x.specularMap,_e=!!x.specularColorMap,Ae=!!x.specularIntensityMap,ze=X&&!!x.transmissionMap,We=X&&!!x.thicknessMap,G=!!x.gradientMap,ye=!!x.alphaMap,ne=x.alphaTest>0,be=!!x.alphaHash,Ie=!!x.extensions;let de=Si;x.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(de=i.toneMapping);const Ze={shaderID:oe,shaderType:x.type,shaderName:x.name,vertexShader:ut,fragmentShader:De,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:fe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:le,batchingColor:le&&z._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&z.instanceColor!==null,instancingMorph:Xe&&z.morphTexture!==null,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Te,matcap:Fe,envMap:te,envMapMode:te&&B.mapping,envMapCubeUVHeight:H,aoMap:se,lightMap:he,bumpMap:ve,normalMap:xe,displacementMap:Je,emissiveMap:qe,normalMapObjectSpace:xe&&x.normalMapType===Lg,normalMapTangentSpace:xe&&x.normalMapType===es,packedNormalMap:xe&&x.normalMapType===es&&eA(x.normalMap.format),metalnessMap:ue,roughnessMap:Le,anisotropy:V,anisotropyMap:q,clearcoat:Mt,clearcoatMap:k,clearcoatNormalMap:j,clearcoatRoughnessMap:ce,dispersion:mt,iridescence:I,iridescenceMap:$,iridescenceThicknessMap:K,sheen:S,sheenColorMap:me,sheenRoughnessMap:ke,specularMap:Ee,specularColorMap:_e,specularIntensityMap:Ae,transmission:X,transmissionMap:ze,thicknessMap:We,gradientMap:G,opaque:x.transparent===!1&&x.blending===tr&&x.alphaToCoverage===!1,alphaMap:ye,alphaTest:ne,alphaHash:be,combine:x.combine,mapUv:Te&&p(x.map.channel),aoMapUv:se&&p(x.aoMap.channel),lightMapUv:he&&p(x.lightMap.channel),bumpMapUv:ve&&p(x.bumpMap.channel),normalMapUv:xe&&p(x.normalMap.channel),displacementMapUv:Je&&p(x.displacementMap.channel),emissiveMapUv:qe&&p(x.emissiveMap.channel),metalnessMapUv:ue&&p(x.metalnessMap.channel),roughnessMapUv:Le&&p(x.roughnessMap.channel),anisotropyMapUv:q&&p(x.anisotropyMap.channel),clearcoatMapUv:k&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:j&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:K&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:me&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:ke&&p(x.sheenRoughnessMap.channel),specularMapUv:Ee&&p(x.specularMap.channel),specularColorMapUv:_e&&p(x.specularColorMap.channel),specularIntensityMapUv:Ae&&p(x.specularIntensityMap.channel),transmissionMapUv:ze&&p(x.transmissionMap.channel),thicknessMapUv:We&&p(x.thicknessMap.channel),alphaMapUv:ye&&p(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(xe||V),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!F.attributes.uv&&(Te||ye),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&xe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:we,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Pe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,decodeVideoTexture:Te&&x.map.isVideoTexture===!0&&vt.getTransfer(x.map.colorSpace)===Dt,decodeVideoTextureEmissive:qe&&x.emissiveMap.isVideoTexture===!0&&vt.getTransfer(x.emissiveMap.colorSpace)===Dt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Pi,flipSided:x.side===Bn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ie&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&x.extensions.multiDraw===!0||le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ze.vertexUv1s=l.has(1),Ze.vertexUv2s=l.has(2),Ze.vertexUv3s=l.has(3),l.clear(),Ze}function g(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)E.push(R),E.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(m(E,x),v(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function m(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function v(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function b(x){const E=d[x.type];let R;if(E){const D=ai[E];R=Yd.clone(D.uniforms)}else R=x.uniforms;return R}function y(x,E){let R=u.get(E);return R!==void 0?++R.usedTimes:(R=new K1(i,E,x,s),c.push(R),u.set(E,R)),R}function w(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function M(x){o.remove(x)}function C(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:b,acquireProgram:y,releaseProgram:w,releaseShaderCache:M,programs:c,dispose:C}}function nA(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function iA(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function wm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Tm(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,p,_,g,m){let v=i[e];return v===void 0?(v={id:h.id,object:h,geometry:d,material:p,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},i[e]=v):(v.id=h.id,v.object=h,v.geometry=d,v.material=p,v.materialVariant=a(h),v.groupOrder=_,v.renderOrder=h.renderOrder,v.z=g,v.group=m),e++,v}function l(h,d,p,_,g,m){const v=o(h,d,p,_,g,m);p.transmission>0?n.push(v):p.transparent===!0?s.push(v):t.push(v)}function c(h,d,p,_,g,m){const v=o(h,d,p,_,g,m);p.transmission>0?n.unshift(v):p.transparent===!0?s.unshift(v):t.unshift(v)}function u(h,d,p){t.length>1&&t.sort(h||iA),n.length>1&&n.sort(d||wm),s.length>1&&s.sort(d||wm),p&&(t.reverse(),n.reverse(),s.reverse())}function f(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function sA(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Tm,i.set(n,[a])):s>=r.length?(a=new Tm,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function rA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Be};break;case"SpotLight":t={position:new P,direction:new P,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function aA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let oA=0;function lA(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function cA(i){const e=new rA,t=aA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new nt,a=new nt;function o(c){let u=0,f=0,h=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,p=0,_=0,g=0,m=0,v=0,b=0,y=0,w=0,M=0,C=0;c.sort(lA);for(let E=0,R=c.length;E<R;E++){const D=c[E],z=D.color,L=D.intensity,O=D.distance;let F=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ws?F=D.shadow.map.texture:F=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=z.r*L,f+=z.g*L,h+=z.b*L;else if(D.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(D.sh.coefficients[U],L);C++}else if(D.isDirectionalLight){const U=e.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const N=D.shadow,B=t.get(D);B.shadowIntensity=N.intensity,B.shadowBias=N.bias,B.shadowNormalBias=N.normalBias,B.shadowRadius=N.radius,B.shadowMapSize=N.mapSize,n.directionalShadow[d]=B,n.directionalShadowMap[d]=F,n.directionalShadowMatrix[d]=D.shadow.matrix,v++}n.directional[d]=U,d++}else if(D.isSpotLight){const U=e.get(D);U.position.setFromMatrixPosition(D.matrixWorld),U.color.copy(z).multiplyScalar(L),U.distance=O,U.coneCos=Math.cos(D.angle),U.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),U.decay=D.decay,n.spot[_]=U;const N=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,N.updateMatrices(D),D.castShadow&&M++),n.spotLightMatrix[_]=N.matrix,D.castShadow){const B=t.get(D);B.shadowIntensity=N.intensity,B.shadowBias=N.bias,B.shadowNormalBias=N.normalBias,B.shadowRadius=N.radius,B.shadowMapSize=N.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=F,y++}_++}else if(D.isRectAreaLight){const U=e.get(D);U.color.copy(z).multiplyScalar(L),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=U,g++}else if(D.isPointLight){const U=e.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),U.distance=D.distance,U.decay=D.decay,D.castShadow){const N=D.shadow,B=t.get(D);B.shadowIntensity=N.intensity,B.shadowBias=N.bias,B.shadowNormalBias=N.normalBias,B.shadowRadius=N.radius,B.shadowMapSize=N.mapSize,B.shadowCameraNear=N.camera.near,B.shadowCameraFar=N.camera.far,n.pointShadow[p]=B,n.pointShadowMap[p]=F,n.pointShadowMatrix[p]=D.shadow.matrix,b++}n.point[p]=U,p++}else if(D.isHemisphereLight){const U=e.get(D);U.skyColor.copy(D.color).multiplyScalar(L),U.groundColor.copy(D.groundColor).multiplyScalar(L),n.hemi[m]=U,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const x=n.hash;(x.directionalLength!==d||x.pointLength!==p||x.spotLength!==_||x.rectAreaLength!==g||x.hemiLength!==m||x.numDirectionalShadows!==v||x.numPointShadows!==b||x.numSpotShadows!==y||x.numSpotMaps!==w||x.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+w-M,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=C,x.directionalLength=d,x.pointLength=p,x.spotLength=_,x.rectAreaLength=g,x.hemiLength=m,x.numDirectionalShadows=v,x.numPointShadows=b,x.numSpotShadows=y,x.numSpotMaps=w,x.numLightProbes=C,n.version=oA++)}function l(c,u){let f=0,h=0,d=0,p=0,_=0;const g=u.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){const b=c[m];if(b.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(b.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),d++}else if(b.isRectAreaLight){const y=n.rectArea[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(b.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),p++}else if(b.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),h++}else if(b.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function Em(i){const e=new cA(i),t=[],n=[],s=[];function r(h){f.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function hA(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Em(i),e.set(s,[o])):r>=a.length?(o=new Em(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const uA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dA=`uniform sampler2D shadow_pass;
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
}`,fA=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],pA=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Am=new nt,wa=new P,wu=new P;function mA(i,e,t){let n=new or;const s=new ae,r=new ae,a=new Ut,o=new jd,l=new Jd,c={},u=t.maxTextureSize,f={[Qi]:Bn,[Bn]:Qi,[Pi]:Pi},h=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:uA,fragmentShader:dA}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const p=new ht;p.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new rn(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ia;let m=this.type;this.render=function(M,C,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===Ol&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ia);const E=i.getRenderTarget(),R=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Ni),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const L=m!==this.type;L&&C.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(F=>F.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,F=M.length;O<F;O++){const U=M[O],N=U.shadow;if(N===void 0){Ce("WebGLShadowMap:",U,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const B=N.getFrameExtents();s.multiply(B),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/B.x),s.x=r.x*B.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/B.y),s.y=r.y*B.y,N.mapSize.y=r.y));const H=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=H,N.map===null||L===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Gr){if(U.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new ni(s.x,s.y,{format:ws,type:Fi,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),N.map.texture.name=U.name+".shadowMap",N.map.depthTexture=new lr(s.x,s.y,Fn),N.map.depthTexture.name=U.name+".shadowMapDepth",N.map.depthTexture.format=ki,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=sn,N.map.depthTexture.magFilter=sn}else U.isPointLight?(N.map=new hf(s.x),N.map.depthTexture=new t0(s.x,di)):(N.map=new ni(s.x,s.y),N.map.depthTexture=new lr(s.x,s.y,di)),N.map.depthTexture.name=U.name+".shadowMap",N.map.depthTexture.format=ki,this.type===Ia?(N.map.depthTexture.compareFunction=H?Kc:Zc,N.map.depthTexture.minFilter=Wt,N.map.depthTexture.magFilter=Wt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=sn,N.map.depthTexture.magFilter=sn);N.camera.updateProjectionMatrix()}const oe=N.map.isWebGLCubeRenderTarget?6:1;for(let ee=0;ee<oe;ee++){if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,ee),i.clear();else{ee===0&&(i.setRenderTarget(N.map),i.clear());const ie=N.getViewport(ee);a.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),z.viewport(a)}if(U.isPointLight){const ie=N.camera,Pe=N.matrix,ut=U.distance||ie.far;ut!==ie.far&&(ie.far=ut,ie.updateProjectionMatrix()),wa.setFromMatrixPosition(U.matrixWorld),ie.position.copy(wa),wu.copy(ie.position),wu.add(fA[ee]),ie.up.copy(pA[ee]),ie.lookAt(wu),ie.updateMatrixWorld(),Pe.makeTranslation(-wa.x,-wa.y,-wa.z),Am.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Am,ie.coordinateSystem,ie.reversedDepth)}else N.updateMatrices(U);n=N.getFrustum(),y(C,x,N.camera,U,this.type)}N.isPointLightShadow!==!0&&this.type===Gr&&v(N,x),N.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(E,R,D)};function v(M,C){const x=e.update(_);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ni(s.x,s.y,{format:ws,type:Fi})),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(C,null,x,h,_,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(C,null,x,d,_,null)}function b(M,C,x,E){let R=null;const D=x.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)R=D;else if(R=x.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const z=R.uuid,L=C.uuid;let O=c[z];O===void 0&&(O={},c[z]=O);let F=O[L];F===void 0&&(F=R.clone(),O[L]=F,C.addEventListener("dispose",w)),R=F}if(R.visible=C.visible,R.wireframe=C.wireframe,E===Gr?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:f[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const z=i.properties.get(R);z.light=x}return R}function y(M,C,x,E,R){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===Gr)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,M.matrixWorld);const L=e.update(M),O=M.material;if(Array.isArray(O)){const F=L.groups;for(let U=0,N=F.length;U<N;U++){const B=F[U],H=O[B.materialIndex];if(H&&H.visible){const oe=b(M,H,E,R);M.onBeforeShadow(i,M,C,x,L,oe,B),i.renderBufferDirect(x,null,L,oe,M,B),M.onAfterShadow(i,M,C,x,L,oe,B)}}}else if(O.visible){const F=b(M,O,E,R);M.onBeforeShadow(i,M,C,x,L,F,null),i.renderBufferDirect(x,null,L,F,M,null),M.onAfterShadow(i,M,C,x,L,F,null)}}const z=M.children;for(let L=0,O=z.length;L<O;L++)y(z[L],C,x,E,R)}function w(M){M.target.removeEventListener("dispose",w);for(const x in c){const E=c[x],R=M.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function gA(i,e){function t(){let G=!1;const ye=new Ut;let ne=null;const be=new Ut(0,0,0,0);return{setMask:function(Ie){ne!==Ie&&!G&&(i.colorMask(Ie,Ie,Ie,Ie),ne=Ie)},setLocked:function(Ie){G=Ie},setClear:function(Ie,de,Ze,$e,Gt){Gt===!0&&(Ie*=$e,de*=$e,Ze*=$e),ye.set(Ie,de,Ze,$e),be.equals(ye)===!1&&(i.clearColor(Ie,de,Ze,$e),be.copy(ye))},reset:function(){G=!1,ne=null,be.set(-1,0,0,0)}}}function n(){let G=!1,ye=!1,ne=null,be=null,Ie=null;return{setReversed:function(de){if(ye!==de){const Ze=e.get("EXT_clip_control");de?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),ye=de;const $e=Ie;Ie=null,this.setClear($e)}},getReversed:function(){return ye},setTest:function(de){de?re(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(de){ne!==de&&!G&&(i.depthMask(de),ne=de)},setFunc:function(de){if(ye&&(de=Nx[de]),be!==de){switch(de){case Bl:i.depthFunc(i.NEVER);break;case zl:i.depthFunc(i.ALWAYS);break;case Vl:i.depthFunc(i.LESS);break;case sr:i.depthFunc(i.LEQUAL);break;case Gl:i.depthFunc(i.EQUAL);break;case Hl:i.depthFunc(i.GEQUAL);break;case Wl:i.depthFunc(i.GREATER);break;case Xl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=de}},setLocked:function(de){G=de},setClear:function(de){Ie!==de&&(Ie=de,ye&&(de=1-de),i.clearDepth(de))},reset:function(){G=!1,ne=null,be=null,Ie=null,ye=!1}}}function s(){let G=!1,ye=null,ne=null,be=null,Ie=null,de=null,Ze=null,$e=null,Gt=null;return{setTest:function(Nt){G||(Nt?re(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(Nt){ye!==Nt&&!G&&(i.stencilMask(Nt),ye=Nt)},setFunc:function(Nt,lt,at){(ne!==Nt||be!==lt||Ie!==at)&&(i.stencilFunc(Nt,lt,at),ne=Nt,be=lt,Ie=at)},setOp:function(Nt,lt,at){(de!==Nt||Ze!==lt||$e!==at)&&(i.stencilOp(Nt,lt,at),de=Nt,Ze=lt,$e=at)},setLocked:function(Nt){G=Nt},setClear:function(Nt){Gt!==Nt&&(i.clearStencil(Nt),Gt=Nt)},reset:function(){G=!1,ye=null,ne=null,be=null,Ie=null,de=null,Ze=null,$e=null,Gt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h={},d=new WeakMap,p=[],_=null,g=!1,m=null,v=null,b=null,y=null,w=null,M=null,C=null,x=new Be(0,0,0),E=0,R=!1,D=null,z=null,L=null,O=null,F=null;const U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,B=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(H)[1]),N=B>=1):H.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),N=B>=2);let oe=null,ee={};const ie=i.getParameter(i.SCISSOR_BOX),Pe=i.getParameter(i.VIEWPORT),ut=new Ut().fromArray(ie),De=new Ut().fromArray(Pe);function J(G,ye,ne,be){const Ie=new Uint8Array(4),de=i.createTexture();i.bindTexture(G,de),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<ne;Ze++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(ye+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return de}const fe={};fe[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(i.DEPTH_TEST),a.setFunc(sr),ve(!1),xe(Du),re(i.CULL_FACE),se(Ni);function re(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function we(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function Xe(G,ye){return h[G]!==ye?(i.bindFramebuffer(G,ye),h[G]=ye,G===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ye),G===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function le(G,ye){let ne=p,be=!1;if(G){ne=d.get(ye),ne===void 0&&(ne=[],d.set(ye,ne));const Ie=G.textures;if(ne.length!==Ie.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let de=0,Ze=Ie.length;de<Ze;de++)ne[de]=i.COLOR_ATTACHMENT0+de;ne.length=Ie.length,be=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,be=!0);be&&i.drawBuffers(ne)}function Te(G){return _!==G?(i.useProgram(G),_=G,!0):!1}const Fe={[gs]:i.FUNC_ADD,[cg]:i.FUNC_SUBTRACT,[hg]:i.FUNC_REVERSE_SUBTRACT};Fe[ug]=i.MIN,Fe[dg]=i.MAX;const te={[fg]:i.ZERO,[pg]:i.ONE,[mg]:i.SRC_COLOR,[Fl]:i.SRC_ALPHA,[bg]:i.SRC_ALPHA_SATURATE,[yg]:i.DST_COLOR,[_g]:i.DST_ALPHA,[gg]:i.ONE_MINUS_SRC_COLOR,[kl]:i.ONE_MINUS_SRC_ALPHA,[xg]:i.ONE_MINUS_DST_COLOR,[vg]:i.ONE_MINUS_DST_ALPHA,[Sg]:i.CONSTANT_COLOR,[Mg]:i.ONE_MINUS_CONSTANT_COLOR,[wg]:i.CONSTANT_ALPHA,[Tg]:i.ONE_MINUS_CONSTANT_ALPHA};function se(G,ye,ne,be,Ie,de,Ze,$e,Gt,Nt){if(G===Ni){g===!0&&(we(i.BLEND),g=!1);return}if(g===!1&&(re(i.BLEND),g=!0),G!==lg){if(G!==m||Nt!==R){if((v!==gs||w!==gs)&&(i.blendEquation(i.FUNC_ADD),v=gs,w=gs),Nt)switch(G){case tr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lu:i.blendFunc(i.ONE,i.ONE);break;case Uu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:je("WebGLState: Invalid blending: ",G);break}else switch(G){case tr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Uu:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nu:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",G);break}b=null,y=null,M=null,C=null,x.set(0,0,0),E=0,m=G,R=Nt}return}Ie=Ie||ye,de=de||ne,Ze=Ze||be,(ye!==v||Ie!==w)&&(i.blendEquationSeparate(Fe[ye],Fe[Ie]),v=ye,w=Ie),(ne!==b||be!==y||de!==M||Ze!==C)&&(i.blendFuncSeparate(te[ne],te[be],te[de],te[Ze]),b=ne,y=be,M=de,C=Ze),($e.equals(x)===!1||Gt!==E)&&(i.blendColor($e.r,$e.g,$e.b,Gt),x.copy($e),E=Gt),m=G,R=!1}function he(G,ye){G.side===Pi?we(i.CULL_FACE):re(i.CULL_FACE);let ne=G.side===Bn;ye&&(ne=!ne),ve(ne),G.blending===tr&&G.transparent===!1?se(Ni):se(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);const be=G.stencilWrite;o.setTest(be),be&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),qe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function ve(G){D!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),D=G)}function xe(G){G!==ag?(re(i.CULL_FACE),G!==z&&(G===Du?i.cullFace(i.BACK):G===og?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),z=G}function Je(G){G!==L&&(N&&i.lineWidth(G),L=G)}function qe(G,ye,ne){G?(re(i.POLYGON_OFFSET_FILL),(O!==ye||F!==ne)&&(O=ye,F=ne,a.getReversed()&&(ye=-ye),i.polygonOffset(ye,ne))):we(i.POLYGON_OFFSET_FILL)}function ue(G){G?re(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function Le(G){G===void 0&&(G=i.TEXTURE0+U-1),oe!==G&&(i.activeTexture(G),oe=G)}function V(G,ye,ne){ne===void 0&&(oe===null?ne=i.TEXTURE0+U-1:ne=oe);let be=ee[ne];be===void 0&&(be={type:void 0,texture:void 0},ee[ne]=be),(be.type!==G||be.texture!==ye)&&(oe!==ne&&(i.activeTexture(ne),oe=ne),i.bindTexture(G,ye||fe[G]),be.type=G,be.texture=ye)}function Mt(){const G=ee[oe];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function mt(){try{i.compressedTexImage2D(...arguments)}catch(G){je("WebGLState:",G)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(G){je("WebGLState:",G)}}function S(){try{i.texSubImage2D(...arguments)}catch(G){je("WebGLState:",G)}}function X(){try{i.texSubImage3D(...arguments)}catch(G){je("WebGLState:",G)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(G){je("WebGLState:",G)}}function k(){try{i.compressedTexSubImage3D(...arguments)}catch(G){je("WebGLState:",G)}}function j(){try{i.texStorage2D(...arguments)}catch(G){je("WebGLState:",G)}}function ce(){try{i.texStorage3D(...arguments)}catch(G){je("WebGLState:",G)}}function $(){try{i.texImage2D(...arguments)}catch(G){je("WebGLState:",G)}}function K(){try{i.texImage3D(...arguments)}catch(G){je("WebGLState:",G)}}function me(G){return f[G]!==void 0?f[G]:i.getParameter(G)}function ke(G,ye){f[G]!==ye&&(i.pixelStorei(G,ye),f[G]=ye)}function Ee(G){ut.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),ut.copy(G))}function _e(G){De.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),De.copy(G))}function Ae(G,ye){let ne=c.get(ye);ne===void 0&&(ne=new WeakMap,c.set(ye,ne));let be=ne.get(G);be===void 0&&(be=i.getUniformBlockIndex(ye,G.name),ne.set(G,be))}function ze(G,ye){const be=c.get(ye).get(G);l.get(ye)!==be&&(i.uniformBlockBinding(ye,be,G.__bindingPointIndex),l.set(ye,be))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},oe=null,ee={},h={},d=new WeakMap,p=[],_=null,g=!1,m=null,v=null,b=null,y=null,w=null,M=null,C=null,x=new Be(0,0,0),E=0,R=!1,D=null,z=null,L=null,O=null,F=null,ut.set(0,0,i.canvas.width,i.canvas.height),De.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:re,disable:we,bindFramebuffer:Xe,drawBuffers:le,useProgram:Te,setBlending:se,setMaterial:he,setFlipSided:ve,setCullFace:xe,setLineWidth:Je,setPolygonOffset:qe,setScissorTest:ue,activeTexture:Le,bindTexture:V,unbindTexture:Mt,compressedTexImage2D:mt,compressedTexImage3D:I,texImage2D:$,texImage3D:K,pixelStorei:ke,getParameter:me,updateUBOMapping:Ae,uniformBlockBinding:ze,texStorage2D:j,texStorage3D:ce,texSubImage2D:S,texSubImage3D:X,compressedTexSubImage2D:q,compressedTexSubImage3D:k,scissor:Ee,viewport:_e,reset:We}}function _A(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,S){return p?new OffscreenCanvas(I,S):no("canvas")}function g(I,S,X){let q=1;const k=mt(I);if((k.width>X||k.height>X)&&(q=X/Math.max(k.width,k.height)),q<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const j=Math.floor(q*k.width),ce=Math.floor(q*k.height);h===void 0&&(h=_(j,ce));const $=S?_(j,ce):h;return $.width=j,$.height=ce,$.getContext("2d").drawImage(I,0,0,j,ce),Ce("WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+j+"x"+ce+")."),$}else return"data"in I&&Ce("WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),I;return I}function m(I){return I.generateMipmaps}function v(I){i.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(I,S,X,q,k,j=!1){if(I!==null){if(i[I]!==void 0)return i[I];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ce;q&&(ce=e.get("EXT_texture_norm16"),ce||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=S;if(S===i.RED&&(X===i.FLOAT&&($=i.R32F),X===i.HALF_FLOAT&&($=i.R16F),X===i.UNSIGNED_BYTE&&($=i.R8),X===i.UNSIGNED_SHORT&&ce&&($=ce.R16_EXT),X===i.SHORT&&ce&&($=ce.R16_SNORM_EXT)),S===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&($=i.R8UI),X===i.UNSIGNED_SHORT&&($=i.R16UI),X===i.UNSIGNED_INT&&($=i.R32UI),X===i.BYTE&&($=i.R8I),X===i.SHORT&&($=i.R16I),X===i.INT&&($=i.R32I)),S===i.RG&&(X===i.FLOAT&&($=i.RG32F),X===i.HALF_FLOAT&&($=i.RG16F),X===i.UNSIGNED_BYTE&&($=i.RG8),X===i.UNSIGNED_SHORT&&ce&&($=ce.RG16_EXT),X===i.SHORT&&ce&&($=ce.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&($=i.RG8UI),X===i.UNSIGNED_SHORT&&($=i.RG16UI),X===i.UNSIGNED_INT&&($=i.RG32UI),X===i.BYTE&&($=i.RG8I),X===i.SHORT&&($=i.RG16I),X===i.INT&&($=i.RG32I)),S===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&($=i.RGB8UI),X===i.UNSIGNED_SHORT&&($=i.RGB16UI),X===i.UNSIGNED_INT&&($=i.RGB32UI),X===i.BYTE&&($=i.RGB8I),X===i.SHORT&&($=i.RGB16I),X===i.INT&&($=i.RGB32I)),S===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&($=i.RGBA8UI),X===i.UNSIGNED_SHORT&&($=i.RGBA16UI),X===i.UNSIGNED_INT&&($=i.RGBA32UI),X===i.BYTE&&($=i.RGBA8I),X===i.SHORT&&($=i.RGBA16I),X===i.INT&&($=i.RGBA32I)),S===i.RGB&&(X===i.UNSIGNED_SHORT&&ce&&($=ce.RGB16_EXT),X===i.SHORT&&ce&&($=ce.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),S===i.RGBA){const K=j?eo:vt.getTransfer(k);X===i.FLOAT&&($=i.RGBA32F),X===i.HALF_FLOAT&&($=i.RGBA16F),X===i.UNSIGNED_BYTE&&($=K===Dt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&ce&&($=ce.RGBA16_EXT),X===i.SHORT&&ce&&($=ce.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function w(I,S){let X;return I?S===null||S===di||S===jr?X=i.DEPTH24_STENCIL8:S===Fn?X=i.DEPTH32F_STENCIL8:S===Kr&&(X=i.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===di||S===jr?X=i.DEPTH_COMPONENT24:S===Fn?X=i.DEPTH_COMPONENT32F:S===Kr&&(X=i.DEPTH_COMPONENT16),X}function M(I,S){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==sn&&I.minFilter!==Wt?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function C(I){const S=I.target;S.removeEventListener("dispose",C),E(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&f.delete(S)}function x(I){const S=I.target;S.removeEventListener("dispose",x),D(S)}function E(I){const S=n.get(I);if(S.__webglInit===void 0)return;const X=I.source,q=d.get(X);if(q){const k=q[S.__cacheKey];k.usedTimes--,k.usedTimes===0&&R(I),Object.keys(q).length===0&&d.delete(X)}n.remove(I)}function R(I){const S=n.get(I);i.deleteTexture(S.__webglTexture);const X=I.source,q=d.get(X);delete q[S.__cacheKey],a.memory.textures--}function D(I){const S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let k=0;k<S.__webglFramebuffer[q].length;k++)i.deleteFramebuffer(S.__webglFramebuffer[q][k]);else i.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)i.deleteFramebuffer(S.__webglFramebuffer[q]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const X=I.textures;for(let q=0,k=X.length;q<k;q++){const j=n.get(X[q]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(X[q])}n.remove(I)}let z=0;function L(){z=0}function O(){return z}function F(I){z=I}function U(){const I=z;return I>=s.maxTextures&&Ce("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),z+=1,I}function N(I){const S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function B(I,S){const X=n.get(I);if(I.isVideoTexture&&V(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&X.__version!==I.version){const q=I.image;if(q===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{we(X,I,S);return}}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+S)}function H(I,S){const X=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){we(X,I,S);return}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+S)}function oe(I,S){const X=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){we(X,I,S);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+S)}function ee(I,S){const X=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&X.__version!==I.version){Xe(X,I,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+S)}const ie={[$a]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[Ya]:i.MIRRORED_REPEAT},Pe={[sn]:i.NEAREST,[Td]:i.NEAREST_MIPMAP_NEAREST,[Hr]:i.NEAREST_MIPMAP_LINEAR,[Wt]:i.LINEAR,[La]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},ut={[Ug]:i.NEVER,[Bg]:i.ALWAYS,[Ng]:i.LESS,[Zc]:i.LEQUAL,[Og]:i.EQUAL,[Kc]:i.GEQUAL,[Fg]:i.GREATER,[kg]:i.NOTEQUAL};function De(I,S){if(S.type===Fn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Wt||S.magFilter===La||S.magFilter===Hr||S.magFilter===Di||S.minFilter===Wt||S.minFilter===La||S.minFilter===Hr||S.minFilter===Di)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ie[S.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ie[S.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ie[S.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Pe[S.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Pe[S.minFilter]),S.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ut[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===sn||S.minFilter!==Hr&&S.minFilter!==Di||S.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function J(I,S){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",C));const q=S.source;let k=d.get(q);k===void 0&&(k={},d.set(q,k));const j=N(S);if(j!==I.__cacheKey){k[j]===void 0&&(k[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),k[j].usedTimes++;const ce=k[I.__cacheKey];ce!==void 0&&(k[I.__cacheKey].usedTimes--,ce.usedTimes===0&&R(S)),I.__cacheKey=j,I.__webglTexture=k[j].texture}return X}function fe(I,S,X){return Math.floor(Math.floor(I/X)/S)}function re(I,S,X,q){const j=I.updateRanges;if(j.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,X,q,S.data);else{j.sort((ke,Ee)=>ke.start-Ee.start);let ce=0;for(let ke=1;ke<j.length;ke++){const Ee=j[ce],_e=j[ke],Ae=Ee.start+Ee.count,ze=fe(_e.start,S.width,4),We=fe(Ee.start,S.width,4);_e.start<=Ae+1&&ze===We&&fe(_e.start+_e.count-1,S.width,4)===ze?Ee.count=Math.max(Ee.count,_e.start+_e.count-Ee.start):(++ce,j[ce]=_e)}j.length=ce+1;const $=t.getParameter(i.UNPACK_ROW_LENGTH),K=t.getParameter(i.UNPACK_SKIP_PIXELS),me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let ke=0,Ee=j.length;ke<Ee;ke++){const _e=j[ke],Ae=Math.floor(_e.start/4),ze=Math.ceil(_e.count/4),We=Ae%S.width,G=Math.floor(Ae/S.width),ye=ze,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,We),t.pixelStorei(i.UNPACK_SKIP_ROWS,G),t.texSubImage2D(i.TEXTURE_2D,0,We,G,ye,ne,X,q,S.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,K),t.pixelStorei(i.UNPACK_SKIP_ROWS,me)}}function we(I,S,X){let q=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=i.TEXTURE_3D);const k=J(I,S),j=S.source;t.bindTexture(q,I.__webglTexture,i.TEXTURE0+X);const ce=n.get(j);if(j.version!==ce.__version||k===!0){if(t.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const ne=vt.getPrimaries(vt.workingColorSpace),be=S.colorSpace===Ki?null:vt.getPrimaries(S.colorSpace),Ie=S.colorSpace===Ki||ne===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let K=g(S.image,!1,s.maxTextureSize);K=Mt(S,K);const me=r.convert(S.format,S.colorSpace),ke=r.convert(S.type);let Ee=y(S.internalFormat,me,ke,S.normalized,S.colorSpace,S.isVideoTexture);De(q,S);let _e;const Ae=S.mipmaps,ze=S.isVideoTexture!==!0,We=ce.__version===void 0||k===!0,G=j.dataReady,ye=M(S,K);if(S.isDepthTexture)Ee=w(S.format===_s,S.type),We&&(ze?t.texStorage2D(i.TEXTURE_2D,1,Ee,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,Ee,K.width,K.height,0,me,ke,null));else if(S.isDataTexture)if(Ae.length>0){ze&&We&&t.texStorage2D(i.TEXTURE_2D,ye,Ee,Ae[0].width,Ae[0].height);for(let ne=0,be=Ae.length;ne<be;ne++)_e=Ae[ne],ze?G&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,_e.width,_e.height,me,ke,_e.data):t.texImage2D(i.TEXTURE_2D,ne,Ee,_e.width,_e.height,0,me,ke,_e.data);S.generateMipmaps=!1}else ze?(We&&t.texStorage2D(i.TEXTURE_2D,ye,Ee,K.width,K.height),G&&re(S,K,me,ke)):t.texImage2D(i.TEXTURE_2D,0,Ee,K.width,K.height,0,me,ke,K.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ze&&We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Ee,Ae[0].width,Ae[0].height,K.depth);for(let ne=0,be=Ae.length;ne<be;ne++)if(_e=Ae[ne],S.format!==kn)if(me!==null)if(ze){if(G)if(S.layerUpdates.size>0){const Ie=Yu(_e.width,_e.height,S.format,S.type);for(const de of S.layerUpdates){const Ze=_e.data.subarray(de*Ie/_e.data.BYTES_PER_ELEMENT,(de+1)*Ie/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,de,_e.width,_e.height,1,me,Ze)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,_e.width,_e.height,K.depth,me,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Ee,_e.width,_e.height,K.depth,0,_e.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,_e.width,_e.height,K.depth,me,ke,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Ee,_e.width,_e.height,K.depth,0,me,ke,_e.data)}else{ze&&We&&t.texStorage2D(i.TEXTURE_2D,ye,Ee,Ae[0].width,Ae[0].height);for(let ne=0,be=Ae.length;ne<be;ne++)_e=Ae[ne],S.format!==kn?me!==null?ze?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,_e.width,_e.height,me,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Ee,_e.width,_e.height,0,_e.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?G&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,_e.width,_e.height,me,ke,_e.data):t.texImage2D(i.TEXTURE_2D,ne,Ee,_e.width,_e.height,0,me,ke,_e.data)}else if(S.isDataArrayTexture)if(ze){if(We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Ee,K.width,K.height,K.depth),G)if(S.layerUpdates.size>0){const ne=Yu(K.width,K.height,S.format,S.type);for(const be of S.layerUpdates){const Ie=K.data.subarray(be*ne/K.data.BYTES_PER_ELEMENT,(be+1)*ne/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,be,K.width,K.height,1,me,ke,Ie)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,me,ke,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,K.width,K.height,K.depth,0,me,ke,K.data);else if(S.isData3DTexture)ze?(We&&t.texStorage3D(i.TEXTURE_3D,ye,Ee,K.width,K.height,K.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,me,ke,K.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,K.width,K.height,K.depth,0,me,ke,K.data);else if(S.isFramebufferTexture){if(We)if(ze)t.texStorage2D(i.TEXTURE_2D,ye,Ee,K.width,K.height);else{let ne=K.width,be=K.height;for(let Ie=0;Ie<ye;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Ee,ne,be,0,me,ke,null),ne>>=1,be>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){const ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),K.parentNode!==ne){ne.appendChild(K),f.add(S),ne.onpaint=be=>{const Ie=be.changedElements;for(const de of f)Ie.includes(de.image)&&(de.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{const Ie=i.RGBA,de=i.RGBA,Ze=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ie,de,Ze,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(ze&&We){const ne=mt(Ae[0]);t.texStorage2D(i.TEXTURE_2D,ye,Ee,ne.width,ne.height)}for(let ne=0,be=Ae.length;ne<be;ne++)_e=Ae[ne],ze?G&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,me,ke,_e):t.texImage2D(i.TEXTURE_2D,ne,Ee,me,ke,_e);S.generateMipmaps=!1}else if(ze){if(We){const ne=mt(K);t.texStorage2D(i.TEXTURE_2D,ye,Ee,ne.width,ne.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,ke,K)}else t.texImage2D(i.TEXTURE_2D,0,Ee,me,ke,K);m(S)&&v(q),ce.__version=j.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Xe(I,S,X){if(S.image.length!==6)return;const q=J(I,S),k=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+X);const j=n.get(k);if(k.version!==j.__version||q===!0){t.activeTexture(i.TEXTURE0+X);const ce=vt.getPrimaries(vt.workingColorSpace),$=S.colorSpace===Ki?null:vt.getPrimaries(S.colorSpace),K=S.colorSpace===Ki||ce===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const me=S.isCompressedTexture||S.image[0].isCompressedTexture,ke=S.image[0]&&S.image[0].isDataTexture,Ee=[];for(let de=0;de<6;de++)!me&&!ke?Ee[de]=g(S.image[de],!0,s.maxCubemapSize):Ee[de]=ke?S.image[de].image:S.image[de],Ee[de]=Mt(S,Ee[de]);const _e=Ee[0],Ae=r.convert(S.format,S.colorSpace),ze=r.convert(S.type),We=y(S.internalFormat,Ae,ze,S.normalized,S.colorSpace),G=S.isVideoTexture!==!0,ye=j.__version===void 0||q===!0,ne=k.dataReady;let be=M(S,_e);De(i.TEXTURE_CUBE_MAP,S);let Ie;if(me){G&&ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,We,_e.width,_e.height);for(let de=0;de<6;de++){Ie=Ee[de].mipmaps;for(let Ze=0;Ze<Ie.length;Ze++){const $e=Ie[Ze];S.format!==kn?Ae!==null?G?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ze,0,0,$e.width,$e.height,Ae,$e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ze,We,$e.width,$e.height,0,$e.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ze,0,0,$e.width,$e.height,Ae,ze,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ze,We,$e.width,$e.height,0,Ae,ze,$e.data)}}}else{if(Ie=S.mipmaps,G&&ye){Ie.length>0&&be++;const de=mt(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,We,de.width,de.height)}for(let de=0;de<6;de++)if(ke){G?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ee[de].width,Ee[de].height,Ae,ze,Ee[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,We,Ee[de].width,Ee[de].height,0,Ae,ze,Ee[de].data);for(let Ze=0;Ze<Ie.length;Ze++){const Gt=Ie[Ze].image[de].image;G?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ze+1,0,0,Gt.width,Gt.height,Ae,ze,Gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ze+1,We,Gt.width,Gt.height,0,Ae,ze,Gt.data)}}else{G?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ae,ze,Ee[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,We,Ae,ze,Ee[de]);for(let Ze=0;Ze<Ie.length;Ze++){const $e=Ie[Ze];G?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ze+1,0,0,Ae,ze,$e.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ze+1,We,Ae,ze,$e.image[de])}}}m(S)&&v(i.TEXTURE_CUBE_MAP),j.__version=k.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function le(I,S,X,q,k,j){const ce=r.convert(X.format,X.colorSpace),$=r.convert(X.type),K=y(X.internalFormat,ce,$,X.normalized,X.colorSpace),me=n.get(S),ke=n.get(X);if(ke.__renderTarget=S,!me.__hasExternalTextures){const Ee=Math.max(1,S.width>>j),_e=Math.max(1,S.height>>j);k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?t.texImage3D(k,j,K,Ee,_e,S.depth,0,ce,$,null):t.texImage2D(k,j,K,Ee,_e,0,ce,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Le(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,k,ke.__webglTexture,0,ue(S)):(k===i.TEXTURE_2D||k>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,k,ke.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(I,S,X){if(i.bindRenderbuffer(i.RENDERBUFFER,I),S.depthBuffer){const q=S.depthTexture,k=q&&q.isDepthTexture?q.type:null,j=w(S.stencilBuffer,k),ce=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Le(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(S),j,S.width,S.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(S),j,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,j,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,I)}else{const q=S.textures;for(let k=0;k<q.length;k++){const j=q[k],ce=r.convert(j.format,j.colorSpace),$=r.convert(j.type),K=y(j.internalFormat,ce,$,j.normalized,j.colorSpace);Le(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(S),K,S.width,S.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(S),K,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,K,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(I,S,X){const q=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const k=n.get(S.depthTexture);if(k.__renderTarget=S,(!k.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q){if(k.__webglInit===void 0&&(k.__webglInit=!0,S.depthTexture.addEventListener("dispose",C)),k.__webglTexture===void 0){k.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),De(i.TEXTURE_CUBE_MAP,S.depthTexture);const me=r.convert(S.depthTexture.format),ke=r.convert(S.depthTexture.type);let Ee;S.depthTexture.format===ki?Ee=i.DEPTH_COMPONENT24:S.depthTexture.format===_s&&(Ee=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ee,S.width,S.height,0,me,ke,null)}}else B(S.depthTexture,0);const j=k.__webglTexture,ce=ue(S),$=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,K=S.depthTexture.format===_s?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===ki)Le(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,$,j,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,K,$,j,0);else if(S.depthTexture.format===_s)Le(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,$,j,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,K,$,j,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function te(I){const S=n.get(I),X=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){const q=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const k=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",k)};q.addEventListener("dispose",k),S.__depthDisposeCallback=k}S.__boundDepthTexture=q}if(I.depthTexture&&!S.__autoAllocateDepthBuffer)if(X)for(let q=0;q<6;q++)Fe(S.__webglFramebuffer[q],I,q);else{const q=I.texture.mipmaps;q&&q.length>0?Fe(S.__webglFramebuffer[0],I,0):Fe(S.__webglFramebuffer,I,0)}else if(X){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=i.createRenderbuffer(),Te(S.__webglDepthbuffer[q],I,!1);else{const k=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,j)}}else{const q=I.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Te(S.__webglDepthbuffer,I,!1);else{const k=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,j)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(I,S,X){const q=n.get(I);S!==void 0&&le(q.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&te(I)}function he(I){const S=I.texture,X=n.get(I),q=n.get(S);I.addEventListener("dispose",x);const k=I.textures,j=I.isWebGLCubeRenderTarget===!0,ce=k.length>1;if(ce||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=S.version,a.memory.textures++),j){X.__webglFramebuffer=[];for(let $=0;$<6;$++)if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[$]=[];for(let K=0;K<S.mipmaps.length;K++)X.__webglFramebuffer[$][K]=i.createFramebuffer()}else X.__webglFramebuffer[$]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let $=0;$<S.mipmaps.length;$++)X.__webglFramebuffer[$]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(ce)for(let $=0,K=k.length;$<K;$++){const me=n.get(k[$]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&Le(I)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let $=0;$<k.length;$++){const K=k[$];X.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[$]);const me=r.convert(K.format,K.colorSpace),ke=r.convert(K.type),Ee=y(K.internalFormat,me,ke,K.normalized,K.colorSpace,I.isXRRenderTarget===!0),_e=ue(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,Ee,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,X.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(X.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),De(i.TEXTURE_CUBE_MAP,S);for(let $=0;$<6;$++)if(S.mipmaps&&S.mipmaps.length>0)for(let K=0;K<S.mipmaps.length;K++)le(X.__webglFramebuffer[$][K],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,K);else le(X.__webglFramebuffer[$],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);m(S)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let $=0,K=k.length;$<K;$++){const me=k[$],ke=n.get(me);let Ee=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ee=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,ke.__webglTexture),De(Ee,me),le(X.__webglFramebuffer,I,me,i.COLOR_ATTACHMENT0+$,Ee,0),m(me)&&v(Ee)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&($=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,q.__webglTexture),De($,S),S.mipmaps&&S.mipmaps.length>0)for(let K=0;K<S.mipmaps.length;K++)le(X.__webglFramebuffer[K],I,S,i.COLOR_ATTACHMENT0,$,K);else le(X.__webglFramebuffer,I,S,i.COLOR_ATTACHMENT0,$,0);m(S)&&v($),t.unbindTexture()}I.depthBuffer&&te(I)}function ve(I){const S=I.textures;for(let X=0,q=S.length;X<q;X++){const k=S[X];if(m(k)){const j=b(I),ce=n.get(k).__webglTexture;t.bindTexture(j,ce),v(j),t.unbindTexture()}}}const xe=[],Je=[];function qe(I){if(I.samples>0){if(Le(I)===!1){const S=I.textures,X=I.width,q=I.height;let k=i.COLOR_BUFFER_BIT;const j=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(I),$=S.length>1;if($)for(let me=0;me<S.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const K=I.texture.mipmaps;K&&K.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let me=0;me<S.length;me++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(k|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(k|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[me]);const ke=n.get(S[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ke,0)}i.blitFramebuffer(0,0,X,q,0,0,X,q,k,i.NEAREST),l===!0&&(xe.length=0,Je.length=0,xe.push(i.COLOR_ATTACHMENT0+me),I.depthBuffer&&I.resolveDepthBuffer===!1&&(xe.push(j),Je.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Je)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let me=0;me<S.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,ce.__webglColorRenderbuffer[me]);const ke=n.get(S[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const S=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ue(I){return Math.min(s.maxSamples,I.samples)}function Le(I){const S=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function V(I){const S=a.render.frame;u.get(I)!==S&&(u.set(I,S),I.update())}function Mt(I,S){const X=I.colorSpace,q=I.format,k=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==Qa&&X!==Ki&&(vt.getTransfer(X)===Dt?(q!==kn||k!==Wn)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",X)),S}function mt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.getTextureUnits=O,this.setTextureUnits=F,this.setTexture2D=B,this.setTexture2DArray=H,this.setTexture3D=oe,this.setTextureCube=ee,this.rebindTextures=se,this.setupRenderTarget=he,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Le,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function J0(i,e){function t(n,s=Ki){let r;const a=vt.getTransfer(s);if(n===Wn)return i.UNSIGNED_BYTE;if(n===Hc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ed)return i.BYTE;if(n===Ad)return i.SHORT;if(n===Kr)return i.UNSIGNED_SHORT;if(n===Gc)return i.INT;if(n===di)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===Fi)return i.HALF_FLOAT;if(n===Id)return i.ALPHA;if(n===Pd)return i.RGB;if(n===kn)return i.RGBA;if(n===ki)return i.DEPTH_COMPONENT;if(n===_s)return i.DEPTH_STENCIL;if(n===Xc)return i.RED;if(n===bo)return i.RED_INTEGER;if(n===ws)return i.RG;if(n===qc)return i.RG_INTEGER;if(n===$c)return i.RGBA_INTEGER;if(n===Ua||n===Na||n===Oa||n===Fa)if(a===Dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ql||n===$l||n===Yl||n===Zl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$l)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kl||n===jl||n===Jl||n===Ql||n===ec||n===Za||n===tc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Kl||n===jl)return a===Dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Jl)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ql)return r.COMPRESSED_R11_EAC;if(n===ec)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Za)return r.COMPRESSED_RG11_EAC;if(n===tc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===nc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ic)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ac)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gc||n===_c||n===vc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===gc)return a===Dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_c)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yc||n===xc||n===Ka||n===bc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===yc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===jr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const vA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yA=`
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

}`;class xA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Vd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new fi({vertexShader:vA,fragmentShader:yA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rn(new aa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bA extends Ti{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,p=null;const _=typeof XRWebGLBinding<"u",g=new xA,m={},v=t.getContextAttributes();let b=null,y=null;const w=[],M=[],C=new ae;let x=null;const E=new gn;E.viewport=new Ut;const R=new gn;R.viewport=new Ut;const D=[E,R],z=new k0;let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let fe=w[J];return fe===void 0&&(fe=new Al,w[J]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(J){let fe=w[J];return fe===void 0&&(fe=new Al,w[J]=fe),fe.getGripSpace()},this.getHand=function(J){let fe=w[J];return fe===void 0&&(fe=new Al,w[J]=fe),fe.getHandSpace()};function F(J){const fe=M.indexOf(J.inputSource);if(fe===-1)return;const re=w[fe];re!==void 0&&(re.update(J.inputSource,J.frame,c||a),re.dispatchEvent({type:J.type,data:J.inputSource}))}function U(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",N);for(let J=0;J<w.length;J++){const fe=M[J];fe!==null&&(M[J]=null,w[J].disconnect(fe))}L=null,O=null,g.reset();for(const J in m)delete m[J];e.setRenderTarget(b),d=null,h=null,f=null,s=null,y=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",U),s.addEventListener("inputsourceschange",N),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,we=null,Xe=null;v.depth&&(Xe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=v.stencil?_s:ki,we=v.stencil?jr:di);const le={colorFormat:t.RGBA8,depthFormat:Xe,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(le),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new ni(h.textureWidth,h.textureHeight,{format:kn,type:Wn,depthTexture:new lr(h.textureWidth,h.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const re={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new ni(d.framebufferWidth,d.framebufferHeight,{format:kn,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),De.setContext(s),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function N(J){for(let fe=0;fe<J.removed.length;fe++){const re=J.removed[fe],we=M.indexOf(re);we>=0&&(M[we]=null,w[we].disconnect(re))}for(let fe=0;fe<J.added.length;fe++){const re=J.added[fe];let we=M.indexOf(re);if(we===-1){for(let le=0;le<w.length;le++)if(le>=M.length){M.push(re),we=le;break}else if(M[le]===null){M[le]=re,we=le;break}if(we===-1)break}const Xe=w[we];Xe&&Xe.connect(re)}}const B=new P,H=new P;function oe(J,fe,re){B.setFromMatrixPosition(fe.matrixWorld),H.setFromMatrixPosition(re.matrixWorld);const we=B.distanceTo(H),Xe=fe.projectionMatrix.elements,le=re.projectionMatrix.elements,Te=Xe[14]/(Xe[10]-1),Fe=Xe[14]/(Xe[10]+1),te=(Xe[9]+1)/Xe[5],se=(Xe[9]-1)/Xe[5],he=(Xe[8]-1)/Xe[0],ve=(le[8]+1)/le[0],xe=Te*he,Je=Te*ve,qe=we/(-he+ve),ue=qe*-he;if(fe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ue),J.translateZ(qe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Xe[10]===-1)J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Le=Te+qe,V=Fe+qe,Mt=xe-ue,mt=Je+(we-ue),I=te*Fe/V*Le,S=se*Fe/V*Le;J.projectionMatrix.makePerspective(Mt,mt,I,S,Le,V),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ee(J,fe){fe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(fe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let fe=J.near,re=J.far;g.texture!==null&&(g.depthNear>0&&(fe=g.depthNear),g.depthFar>0&&(re=g.depthFar)),z.near=R.near=E.near=fe,z.far=R.far=E.far=re,(L!==z.near||O!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,O=z.far),z.layers.mask=J.layers.mask|6,E.layers.mask=z.layers.mask&-5,R.layers.mask=z.layers.mask&-3;const we=J.parent,Xe=z.cameras;ee(z,we);for(let le=0;le<Xe.length;le++)ee(Xe[le],we);Xe.length===2?oe(z,E,R):z.projectionMatrix.copy(E.projectionMatrix),ie(J,z,we)};function ie(J,fe,re){re===null?J.matrix.copy(fe.matrixWorld):(J.matrix.copy(re.matrixWorld),J.matrix.invert(),J.matrix.multiply(fe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Jr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(J){return m[J]};let Pe=null;function ut(J,fe){if(u=fe.getViewerPose(c||a),p=fe,u!==null){const re=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let we=!1;re.length!==z.cameras.length&&(z.cameras.length=0,we=!0);for(let Fe=0;Fe<re.length;Fe++){const te=re[Fe];let se=null;if(d!==null)se=d.getViewport(te);else{const ve=f.getViewSubImage(h,te);se=ve.viewport,Fe===0&&(e.setRenderTargetTextures(y,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(y))}let he=D[Fe];he===void 0&&(he=new gn,he.layers.enable(Fe),he.viewport=new Ut,D[Fe]=he),he.matrix.fromArray(te.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(te.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(se.x,se.y,se.width,se.height),Fe===0&&(z.matrix.copy(he.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),we===!0&&z.cameras.push(he)}const Xe=s.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const Fe=f.getDepthInformation(re[0]);Fe&&Fe.isValid&&Fe.texture&&g.init(Fe,s.renderState)}if(Xe&&Xe.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let Fe=0;Fe<re.length;Fe++){const te=re[Fe].camera;if(te){let se=m[te];se||(se=new Vd,m[te]=se);const he=f.getCameraImage(te);se.sourceTexture=he}}}}for(let re=0;re<w.length;re++){const we=M[re],Xe=w[re];we!==null&&Xe!==void 0&&Xe.update(we,fe,c||a)}Pe&&Pe(J,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),p=null}const De=new q0;De.setAnimationLoop(ut),this.setAnimationLoop=function(J){Pe=J},this.dispose=function(){}}}const SA=new nt,Q0=new ct;Q0.set(-1,0,0,0,1,0,0,0,1);function MA(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,p0(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,b,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&d(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,v,b):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Bn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Bn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const v=e.get(m),b=v.envMap,y=v.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(SA.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Q0),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Bn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const v=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wA(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){const M=w.program;n.uniformBlockBinding(y,M)}function c(y,w){let M=s[y.id];M===void 0&&(g(y),M=u(y),s[y.id]=M,y.addEventListener("dispose",v));const C=w.program;n.updateUBOMapping(y,C);const x=e.render.frame;r[y.id]!==x&&(h(y),r[y.id]=x)}function u(y){const w=f();y.__bindingPointIndex=w;const M=i.createBuffer(),C=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,C,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,M),M}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const w=s[y.id],M=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let x=0,E=M.length;x<E;x++){const R=M[x];if(Array.isArray(R))for(let D=0,z=R.length;D<z;D++)d(R[D],x,D,C);else d(R,x,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,w,M,C){if(_(y,w,M,C)===!0){const x=y.__offset,E=y.value;if(Array.isArray(E)){let R=0;for(let D=0;D<E.length;D++){const z=E[D],L=m(z);p(z,y.__data,R),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(R+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function p(y,w,M){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,M)}function _(y,w,M,C){const x=y.value,E=w+"_"+M;if(C[E]===void 0)return typeof x=="number"||typeof x=="boolean"?C[E]=x:ArrayBuffer.isView(x)?C[E]=x.slice():C[E]=x.clone(),!0;{const R=C[E];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return C[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function g(y){const w=y.uniforms;let M=0;const C=16;for(let E=0,R=w.length;E<R;E++){const D=Array.isArray(w[E])?w[E]:[w[E]];for(let z=0,L=D.length;z<L;z++){const O=D[z],F=Array.isArray(O.value)?O.value:[O.value];for(let U=0,N=F.length;U<N;U++){const B=F[U],H=m(B),oe=M%C,ee=oe%H.boundary,ie=oe+ee;M+=ee,ie!==0&&C-ie<H.storage&&(M+=C-ie),O.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=H.storage}}}const x=M%C;return x>0&&(M+=C-x),y.__size=M,y.__cache={},this}function m(y){const w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",y),w}function v(y){const w=y.target;w.removeEventListener("dispose",v);const M=a.indexOf(w.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function b(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:b}}const TA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ri=null;function EA(){return Ri===null&&(Ri=new ci(TA,16,16,ws,Fi),Ri.name="DFG_LUT",Ri.minFilter=Wt,Ri.magFilter=Wt,Ri.wrapS=qn,Ri.wrapT=qn,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}class e_{constructor(e={}){const{canvas:t=Vg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Wn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=d,g=new Set([$c,qc,bo]),m=new Set([Wn,di,Kr,jr,Hc,Wc]),v=new Uint32Array(4),b=new Int32Array(4),y=new P;let w=null,M=null;const C=[],x=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1,z=null,L=null,O=null,F=null;this._outputColorSpace=Nn;let U=0,N=0,B=null,H=-1,oe=null;const ee=new Ut,ie=new Ut;let Pe=null;const ut=new Be(0);let De=0,J=t.width,fe=t.height,re=1,we=null,Xe=null;const le=new Ut(0,0,J,fe),Te=new Ut(0,0,J,fe);let Fe=!1;const te=new or;let se=!1,he=!1;const ve=new nt,xe=new P,Je=new Ut,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function Le(){return B===null?re:1}let V=n;function Mt(A,W){return t.getContext(A,W)}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bc}`),t.addEventListener("webglcontextlost",Gt,!1),t.addEventListener("webglcontextrestored",Nt,!1),t.addEventListener("webglcontextcreationerror",lt,!1),V===null){const W="webgl2";if(V=Mt(W,A),V===null)throw Mt(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw je("WebGLRenderer: "+A.message),A}let mt,I,S,X,q,k,j,ce,$,K,me,ke,Ee,_e,Ae,ze,We,G,ye,ne,be,Ie,de;function Ze(){mt=new AE(V),mt.init(),be=new J0(V,mt),I=new yE(V,mt,e,be),S=new gA(V,mt),I.reversedDepthBuffer&&h&&S.buffers.depth.setReversed(!0),L=V.createFramebuffer(),O=V.createFramebuffer(),F=V.createFramebuffer(),X=new IE(V),q=new nA,k=new _A(V,mt,S,q,I,be,X),j=new EE(R),ce=new UM(V),Ie=new _E(V,ce),$=new CE(V,ce,X,Ie),K=new DE(V,$,ce,Ie,X),G=new PE(V,I,k),Ae=new xE(q),me=new tA(R,j,mt,I,Ie,Ae),ke=new MA(R,q),Ee=new sA,_e=new hA(mt),We=new gE(R,j,S,K,p,l),ze=new mA(R,K,I),de=new wA(V,X,I,S),ye=new vE(V,mt,X),ne=new RE(V,mt,X),X.programs=me.programs,R.capabilities=I,R.extensions=mt,R.properties=q,R.renderLists=Ee,R.shadowMap=ze,R.state=S,R.info=X}Ze(),_!==Wn&&(E=new UE(_,t.width,t.height,o,s,r));const $e=new bA(R,V);this.xr=$e,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(A){A!==void 0&&(re=A,this.setSize(J,fe,!1))},this.getSize=function(A){return A.set(J,fe)},this.setSize=function(A,W,Q=!0){if($e.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}J=A,fe=W,t.width=Math.floor(A*re),t.height=Math.floor(W*re),Q===!0&&(t.style.width=A+"px",t.style.height=W+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(J*re,fe*re).floor()},this.setDrawingBufferSize=function(A,W,Q){J=A,fe=W,re=Q,t.width=Math.floor(A*Q),t.height=Math.floor(W*Q),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(_===Wn){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ee)},this.getViewport=function(A){return A.copy(le)},this.setViewport=function(A,W,Q,Y){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,W,Q,Y),S.viewport(ee.copy(le).multiplyScalar(re).round())},this.getScissor=function(A){return A.copy(Te)},this.setScissor=function(A,W,Q,Y){A.isVector4?Te.set(A.x,A.y,A.z,A.w):Te.set(A,W,Q,Y),S.scissor(ie.copy(Te).multiplyScalar(re).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(A){S.setScissorTest(Fe=A)},this.setOpaqueSort=function(A){we=A},this.setTransparentSort=function(A){Xe=A},this.getClearColor=function(A){return A.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,Q=!0){let Y=0;if(A){let Z=!1;if(B!==null){const Ne=B.texture.format;Z=g.has(Ne)}if(Z){const Ne=B.texture.type,He=m.has(Ne),Ue=We.getClearColor(),Ke=We.getClearAlpha(),Qe=Ue.r,ft=Ue.g,gt=Ue.b;He?(v[0]=Qe,v[1]=ft,v[2]=gt,v[3]=Ke,V.clearBufferuiv(V.COLOR,0,v)):(b[0]=Qe,b[1]=ft,b[2]=gt,b[3]=Ke,V.clearBufferiv(V.COLOR,0,b))}else Y|=V.COLOR_BUFFER_BIT}W&&(Y|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&V.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),z=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Gt,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",lt,!1),We.dispose(),Ee.dispose(),_e.dispose(),q.dispose(),j.dispose(),K.dispose(),Ie.dispose(),de.dispose(),me.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",Sn),$e.removeEventListener("sessionend",gr),Gi.stop()};function Gt(A){A.preventDefault(),io("WebGLRenderer: Context Lost."),D=!0}function Nt(){io("WebGLRenderer: Context Restored."),D=!1;const A=X.autoReset,W=ze.enabled,Q=ze.autoUpdate,Y=ze.needsUpdate,Z=ze.type;Ze(),X.autoReset=A,ze.enabled=W,ze.autoUpdate=Q,ze.needsUpdate=Y,ze.type=Z}function lt(A){je("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function at(A){const W=A.target;W.removeEventListener("dispose",at),Pt(W)}function Pt(A){Xt(A),q.remove(A)}function Xt(A){const W=q.get(A).programs;W!==void 0&&(W.forEach(function(Q){me.releaseProgram(Q)}),A.isShaderMaterial&&me.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,Q,Y,Z,Ne){W===null&&(W=qe);const He=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Ue=b_(A,W,Q,Y,Z);S.setMaterial(Y,He);let Ke=Q.index,Qe=1;if(Y.wireframe===!0){if(Ke=$.getWireframeAttribute(Q),Ke===void 0)return;Qe=2}const ft=Q.drawRange,gt=Q.attributes.position;let et=ft.start*Qe,Ot=(ft.start+ft.count)*Qe;Ne!==null&&(et=Math.max(et,Ne.start*Qe),Ot=Math.min(Ot,(Ne.start+Ne.count)*Qe)),Ke!==null?(et=Math.max(et,0),Ot=Math.min(Ot,Ke.count)):gt!=null&&(et=Math.max(et,0),Ot=Math.min(Ot,gt.count));const en=Ot-et;if(en<0||en===1/0)return;Ie.setup(Z,Y,Ue,Q,Ke);let Zt,Bt=ye;if(Ke!==null&&(Zt=ce.get(Ke),Bt=ne,Bt.setIndex(Zt)),Z.isMesh)Y.wireframe===!0?(S.setLineWidth(Y.wireframeLinewidth*Le()),Bt.setMode(V.LINES)):Bt.setMode(V.TRIANGLES);else if(Z.isLine){let Mn=Y.linewidth;Mn===void 0&&(Mn=1),S.setLineWidth(Mn*Le()),Z.isLineSegments?Bt.setMode(V.LINES):Z.isLineLoop?Bt.setMode(V.LINE_LOOP):Bt.setMode(V.LINE_STRIP)}else Z.isPoints?Bt.setMode(V.POINTS):Z.isSprite&&Bt.setMode(V.TRIANGLES);if(Z.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))Bt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Mn=Z._multiDrawStarts,Ge=Z._multiDrawCounts,Yn=Z._multiDrawCount,Tt=Ke?ce.get(Ke).bytesPerElement:1,ii=q.get(Y).currentProgram.getUniforms();for(let Ai=0;Ai<Yn;Ai++)ii.setValue(V,"_gl_DrawID",Ai),Bt.render(Mn[Ai]/Tt,Ge[Ai])}else if(Z.isInstancedMesh)Bt.renderInstances(et,en,Z.count);else if(Q.isInstancedBufferGeometry){const Mn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ge=Math.min(Q.instanceCount,Mn);Bt.renderInstances(et,en,Ge)}else Bt.render(et,en)};function dn(A,W,Q){A.transparent===!0&&A.side===Pi&&A.forceSinglePass===!1?(A.side=Bn,A.needsUpdate=!0,Ro(A,W,Q),A.side=Qi,A.needsUpdate=!0,Ro(A,W,Q),A.side=Pi):Ro(A,W,Q)}this.compile=function(A,W,Q=null){Q===null&&(Q=A),M=_e.get(Q),M.init(W),x.push(M),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(M.pushLight(Z),Z.castShadow&&M.pushShadow(Z))}),A!==Q&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(M.pushLight(Z),Z.castShadow&&M.pushShadow(Z))}),M.setupLights();const Y=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ne=Z.material;if(Ne)if(Array.isArray(Ne))for(let He=0;He<Ne.length;He++){const Ue=Ne[He];dn(Ue,Q,Z),Y.add(Ue)}else dn(Ne,Q,Z),Y.add(Ne)}),M=x.pop(),Y},this.compileAsync=function(A,W,Q=null){const Y=this.compile(A,W,Q);return new Promise(Z=>{function Ne(){if(Y.forEach(function(He){q.get(He).currentProgram.isReady()&&Y.delete(He)}),Y.size===0){Z(A);return}setTimeout(Ne,10)}mt.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let vn=null;function Dn(A){vn&&vn(A)}function Sn(){Gi.stop()}function gr(){Gi.start()}const Gi=new q0;Gi.setAnimationLoop(Dn),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(A){vn=A,$e.setAnimationLoop(A),A===null?Gi.stop():Gi.start()},$e.addEventListener("sessionstart",Sn),$e.addEventListener("sessionend",gr),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;z!==null&&z.renderStart(A,W);const Q=$e.enabled===!0&&$e.isPresenting===!0,Y=E!==null&&(B===null||Q)&&E.begin(R,B);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&($e.cameraAutoUpdate===!0&&$e.updateCamera(W),W=$e.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,W,B),M=_e.get(A,x.length),M.init(W),M.state.textureUnits=k.getTextureUnits(),x.push(M),ve.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),te.setFromProjectionMatrix(ve,Qn,W.reversedDepth),he=this.localClippingEnabled,se=Ae.init(this.clippingPlanes,he),w=Ee.get(A,C.length),w.init(),C.push(w),$e.enabled===!0&&$e.isPresenting===!0){const He=R.xr.getDepthSensingMesh();He!==null&&Ih(He,W,-1/0,R.sortObjects)}Ih(A,W,0,R.sortObjects),w.finish(),R.sortObjects===!0&&w.sort(we,Xe,W.reversedDepth),ue=$e.enabled===!1||$e.isPresenting===!1||$e.hasDepthSensing()===!1,ue&&We.addToRenderList(w,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&Ae.beginShadows();const Z=M.state.shadowsArray;if(ze.render(Z,A,W),se===!0&&Ae.endShadows(),(Y&&E.hasRenderPass())===!1){const He=w.opaque,Ue=w.transmissive;if(M.setupLights(),W.isArrayCamera){const Ke=W.cameras;if(Ue.length>0)for(let Qe=0,ft=Ke.length;Qe<ft;Qe++){const gt=Ke[Qe];Tf(He,Ue,A,gt)}ue&&We.render(A);for(let Qe=0,ft=Ke.length;Qe<ft;Qe++){const gt=Ke[Qe];wf(w,A,gt,gt.viewport)}}else Ue.length>0&&Tf(He,Ue,A,W),ue&&We.render(A),wf(w,A,W)}B!==null&&N===0&&(k.updateMultisampleRenderTarget(B),k.updateRenderTargetMipmap(B)),Y&&E.end(R),A.isScene===!0&&A.onAfterRender(R,A,W),Ie.resetDefaultState(),H=-1,oe=null,x.pop(),x.length>0?(M=x[x.length-1],k.setTextureUnits(M.state.textureUnits),se===!0&&Ae.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,z!==null&&z.renderEnd()};function Ih(A,W,Q,Y){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLightProbeGrid)M.pushLightProbeGrid(A);else if(A.isLight)M.pushLight(A),A.castShadow&&M.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||te.intersectsSprite(A)){Y&&Je.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ve);const He=K.update(A),Ue=A.material;Ue.visible&&w.push(A,He,Ue,Q,Je.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||te.intersectsObject(A))){const He=K.update(A),Ue=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Je.copy(A.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Je.copy(He.boundingSphere.center)),Je.applyMatrix4(A.matrixWorld).applyMatrix4(ve)),Array.isArray(Ue)){const Ke=He.groups;for(let Qe=0,ft=Ke.length;Qe<ft;Qe++){const gt=Ke[Qe],et=Ue[gt.materialIndex];et&&et.visible&&w.push(A,He,et,Q,Je.z,gt)}}else Ue.visible&&w.push(A,He,Ue,Q,Je.z,null)}}const Ne=A.children;for(let He=0,Ue=Ne.length;He<Ue;He++)Ih(Ne[He],W,Q,Y)}function wf(A,W,Q,Y){const{opaque:Z,transmissive:Ne,transparent:He}=A;M.setupLightsView(Q),se===!0&&Ae.setGlobalState(R.clippingPlanes,Q),Y&&S.viewport(ee.copy(Y)),Z.length>0&&Co(Z,W,Q),Ne.length>0&&Co(Ne,W,Q),He.length>0&&Co(He,W,Q),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Tf(A,W,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Y.id]===void 0){const et=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Y.id]=new ni(1,1,{generateMipmaps:!0,type:et?Fi:Wn,minFilter:Di,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace})}const Ne=M.state.transmissionRenderTarget[Y.id],He=Y.viewport||ee;Ne.setSize(He.z*R.transmissionResolutionScale,He.w*R.transmissionResolutionScale);const Ue=R.getRenderTarget(),Ke=R.getActiveCubeFace(),Qe=R.getActiveMipmapLevel();R.setRenderTarget(Ne),R.getClearColor(ut),De=R.getClearAlpha(),De<1&&R.setClearColor(16777215,.5),R.clear(),ue&&We.render(Q);const ft=R.toneMapping;R.toneMapping=Si;const gt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),M.setupLightsView(Y),se===!0&&Ae.setGlobalState(R.clippingPlanes,Y),Co(A,Q,Y),k.updateMultisampleRenderTarget(Ne),k.updateRenderTargetMipmap(Ne),mt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ot=0,en=W.length;Ot<en;Ot++){const Zt=W[Ot],{object:Bt,geometry:Mn,material:Ge,group:Yn}=Zt;if(Ge.side===Pi&&Bt.layers.test(Y.layers)){const Tt=Ge.side;Ge.side=Bn,Ge.needsUpdate=!0,Ef(Bt,Q,Y,Mn,Ge,Yn),Ge.side=Tt,Ge.needsUpdate=!0,et=!0}}et===!0&&(k.updateMultisampleRenderTarget(Ne),k.updateRenderTargetMipmap(Ne))}R.setRenderTarget(Ue,Ke,Qe),R.setClearColor(ut,De),gt!==void 0&&(Y.viewport=gt),R.toneMapping=ft}function Co(A,W,Q){const Y=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,Ne=A.length;Z<Ne;Z++){const He=A[Z],{object:Ue,geometry:Ke,group:Qe}=He;let ft=He.material;ft.allowOverride===!0&&Y!==null&&(ft=Y),Ue.layers.test(Q.layers)&&Ef(Ue,W,Q,Ke,ft,Qe)}}function Ef(A,W,Q,Y,Z,Ne){A.onBeforeRender(R,W,Q,Y,Z,Ne),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(R,W,Q,Y,A,Ne),Z.transparent===!0&&Z.side===Pi&&Z.forceSinglePass===!1?(Z.side=Bn,Z.needsUpdate=!0,R.renderBufferDirect(Q,W,Y,Z,A,Ne),Z.side=Qi,Z.needsUpdate=!0,R.renderBufferDirect(Q,W,Y,Z,A,Ne),Z.side=Pi):R.renderBufferDirect(Q,W,Y,Z,A,Ne),A.onAfterRender(R,W,Q,Y,Z,Ne)}function Ro(A,W,Q){W.isScene!==!0&&(W=qe);const Y=q.get(A),Z=M.state.lights,Ne=M.state.shadowsArray,He=Z.state.version,Ue=me.getParameters(A,Z.state,Ne,W,Q,M.state.lightProbeGridArray),Ke=me.getProgramCacheKey(Ue);let Qe=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,Y.fog=W.fog;const ft=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=j.get(A.envMap||Y.environment,ft),Y.envMapRotation=Y.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Qe===void 0&&(A.addEventListener("dispose",at),Qe=new Map,Y.programs=Qe);let gt=Qe.get(Ke);if(gt!==void 0){if(Y.currentProgram===gt&&Y.lightsStateVersion===He)return Cf(A,Ue),gt}else Ue.uniforms=me.getUniforms(A),z!==null&&A.isNodeMaterial&&z.build(A,Q,Ue),A.onBeforeCompile(Ue,R),gt=me.acquireProgram(Ue,Ke),Qe.set(Ke,gt),Y.uniforms=Ue.uniforms;const et=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(et.clippingPlanes=Ae.uniform),Cf(A,Ue),Y.needsLights=M_(A),Y.lightsStateVersion=He,Y.needsLights&&(et.ambientLightColor.value=Z.state.ambient,et.lightProbe.value=Z.state.probe,et.directionalLights.value=Z.state.directional,et.directionalLightShadows.value=Z.state.directionalShadow,et.spotLights.value=Z.state.spot,et.spotLightShadows.value=Z.state.spotShadow,et.rectAreaLights.value=Z.state.rectArea,et.ltc_1.value=Z.state.rectAreaLTC1,et.ltc_2.value=Z.state.rectAreaLTC2,et.pointLights.value=Z.state.point,et.pointLightShadows.value=Z.state.pointShadow,et.hemisphereLights.value=Z.state.hemi,et.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,et.spotLightMatrix.value=Z.state.spotLightMatrix,et.spotLightMap.value=Z.state.spotLightMap,et.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=M.state.lightProbeGridArray.length>0,Y.currentProgram=gt,Y.uniformsList=null,gt}function Af(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Cl.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Cf(A,W){const Q=q.get(A);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.batchingColor=W.batchingColor,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function x_(A,W){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;y.setFromMatrixPosition(W.matrixWorld);for(let Q=0,Y=A.length;Q<Y;Q++){const Z=A[Q];if(Z.texture!==null&&Z.boundingBox.containsPoint(y))return Z}return null}function b_(A,W,Q,Y,Z){W.isScene!==!0&&(W=qe),k.resetTextureUnits();const Ne=W.fog,He=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?W.environment:null,Ue=B===null?R.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:vt.workingColorSpace,Ke=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Qe=j.get(Y.envMap||He,Ke),ft=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,gt=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),et=!!Q.morphAttributes.position,Ot=!!Q.morphAttributes.normal,en=!!Q.morphAttributes.color;let Zt=Si;Y.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Zt=R.toneMapping);const Bt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Mn=Bt!==void 0?Bt.length:0,Ge=q.get(Y),Yn=M.state.lights;if(se===!0&&(he===!0||A!==oe)){const Vt=A===oe&&Y.id===H;Ae.setState(Y,A,Vt)}let Tt=!1;Y.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Yn.state.version||Ge.outputColorSpace!==Ue||Z.isBatchedMesh&&Ge.batching===!1||!Z.isBatchedMesh&&Ge.batching===!0||Z.isBatchedMesh&&Ge.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ge.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ge.instancing===!1||!Z.isInstancedMesh&&Ge.instancing===!0||Z.isSkinnedMesh&&Ge.skinning===!1||!Z.isSkinnedMesh&&Ge.skinning===!0||Z.isInstancedMesh&&Ge.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ge.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ge.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ge.instancingMorph===!1&&Z.morphTexture!==null||Ge.envMap!==Qe||Y.fog===!0&&Ge.fog!==Ne||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Ae.numPlanes||Ge.numIntersection!==Ae.numIntersection)||Ge.vertexAlphas!==ft||Ge.vertexTangents!==gt||Ge.morphTargets!==et||Ge.morphNormals!==Ot||Ge.morphColors!==en||Ge.toneMapping!==Zt||Ge.morphTargetsCount!==Mn||!!Ge.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Tt=!0):(Tt=!0,Ge.__version=Y.version);let ii=Ge.currentProgram;Tt===!0&&(ii=Ro(Y,W,Z),z&&Y.isNodeMaterial&&z.onUpdateProgram(Y,ii,Ge));let Ai=!1,ss=!1,_r=!1;const zt=ii.getUniforms(),tn=Ge.uniforms;if(S.useProgram(ii.program)&&(Ai=!0,ss=!0,_r=!0),Y.id!==H&&(H=Y.id,ss=!0),Ge.needsLights){const Vt=x_(M.state.lightProbeGridArray,Z);Ge.lightProbeGrid!==Vt&&(Ge.lightProbeGrid=Vt,ss=!0)}if(Ai||oe!==A){S.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),zt.setValue(V,"projectionMatrix",A.projectionMatrix),zt.setValue(V,"viewMatrix",A.matrixWorldInverse);const as=zt.map.cameraPosition;as!==void 0&&as.setValue(V,xe.setFromMatrixPosition(A.matrixWorld)),I.logarithmicDepthBuffer&&zt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&zt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),oe!==A&&(oe=A,ss=!0,_r=!0)}if(Ge.needsLights&&(Yn.state.directionalShadowMap.length>0&&zt.setValue(V,"directionalShadowMap",Yn.state.directionalShadowMap,k),Yn.state.spotShadowMap.length>0&&zt.setValue(V,"spotShadowMap",Yn.state.spotShadowMap,k),Yn.state.pointShadowMap.length>0&&zt.setValue(V,"pointShadowMap",Yn.state.pointShadowMap,k)),Z.isSkinnedMesh){zt.setOptional(V,Z,"bindMatrix"),zt.setOptional(V,Z,"bindMatrixInverse");const Vt=Z.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),zt.setValue(V,"boneTexture",Vt.boneTexture,k))}Z.isBatchedMesh&&(zt.setOptional(V,Z,"batchingTexture"),zt.setValue(V,"batchingTexture",Z._matricesTexture,k),zt.setOptional(V,Z,"batchingIdTexture"),zt.setValue(V,"batchingIdTexture",Z._indirectTexture,k),zt.setOptional(V,Z,"batchingColorTexture"),Z._colorsTexture!==null&&zt.setValue(V,"batchingColorTexture",Z._colorsTexture,k));const rs=Q.morphAttributes;if((rs.position!==void 0||rs.normal!==void 0||rs.color!==void 0)&&G.update(Z,Q,ii),(ss||Ge.receiveShadow!==Z.receiveShadow)&&(Ge.receiveShadow=Z.receiveShadow,zt.setValue(V,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&W.environment!==null&&(tn.envMapIntensity.value=W.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=EA()),ss){if(zt.setValue(V,"toneMappingExposure",R.toneMappingExposure),Ge.needsLights&&S_(tn,_r),Ne&&Y.fog===!0&&ke.refreshFogUniforms(tn,Ne),ke.refreshMaterialUniforms(tn,Y,re,fe,M.state.transmissionRenderTarget[A.id]),Ge.needsLights&&Ge.lightProbeGrid){const Vt=Ge.lightProbeGrid;tn.probesSH.value=Vt.texture,tn.probesMin.value.copy(Vt.boundingBox.min),tn.probesMax.value.copy(Vt.boundingBox.max),tn.probesResolution.value.copy(Vt.resolution)}Cl.upload(V,Af(Ge),tn,k)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Cl.upload(V,Af(Ge),tn,k),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&zt.setValue(V,"center",Z.center),zt.setValue(V,"modelViewMatrix",Z.modelViewMatrix),zt.setValue(V,"normalMatrix",Z.normalMatrix),zt.setValue(V,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){const Vt=Y.uniformsGroups;for(let as=0,vr=Vt.length;as<vr;as++){const Rf=Vt[as];de.update(Rf,ii),de.bind(Rf,ii)}}return ii}function S_(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function M_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(A,W,Q){const Y=q.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),q.get(A.texture).__webglTexture=W,q.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const Q=q.get(A);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,Q=0){B=A,U=W,N=Q;let Y=null,Z=!1,Ne=!1;if(A){const Ue=q.get(A);if(Ue.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(V.FRAMEBUFFER,Ue.__webglFramebuffer),ee.copy(A.viewport),ie.copy(A.scissor),Pe=A.scissorTest,S.viewport(ee),S.scissor(ie),S.setScissorTest(Pe),H=-1;return}else if(Ue.__webglFramebuffer===void 0)k.setupRenderTarget(A);else if(Ue.__hasExternalTextures)k.rebindTextures(A,q.get(A.texture).__webglTexture,q.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ft=A.depthTexture;if(Ue.__boundDepthTexture!==ft){if(ft!==null&&q.has(ft)&&(A.width!==ft.image.width||A.height!==ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(A)}}const Ke=A.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ne=!0);const Qe=q.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qe[W])?Y=Qe[W][Q]:Y=Qe[W],Z=!0):A.samples>0&&k.useMultisampledRTT(A)===!1?Y=q.get(A).__webglMultisampledFramebuffer:Array.isArray(Qe)?Y=Qe[Q]:Y=Qe,ee.copy(A.viewport),ie.copy(A.scissor),Pe=A.scissorTest}else ee.copy(le).multiplyScalar(re).floor(),ie.copy(Te).multiplyScalar(re).floor(),Pe=Fe;if(Q!==0&&(Y=L),S.bindFramebuffer(V.FRAMEBUFFER,Y)&&S.drawBuffers(A,Y),S.viewport(ee),S.scissor(ie),S.setScissorTest(Pe),Z){const Ue=q.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ue.__webglTexture,Q)}else if(Ne){const Ue=W;for(let Ke=0;Ke<A.textures.length;Ke++){const Qe=q.get(A.textures[Ke]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ke,Qe.__webglTexture,Q,Ue)}}else if(A!==null&&Q!==0){const Ue=q.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ue.__webglTexture,Q)}H=-1},this.readRenderTargetPixels=function(A,W,Q,Y,Z,Ne,He,Ue=0){if(!(A&&A.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(Ke=Ke[He]),Ke){S.bindFramebuffer(V.FRAMEBUFFER,Ke);try{const Qe=A.textures[Ue],ft=Qe.format,gt=Qe.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ue),!I.textureFormatReadable(ft)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(gt)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-Y&&Q>=0&&Q<=A.height-Z&&V.readPixels(W,Q,Y,Z,be.convert(ft),be.convert(gt),Ne)}finally{const Qe=B!==null?q.get(B).__webglFramebuffer:null;S.bindFramebuffer(V.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(A,W,Q,Y,Z,Ne,He,Ue=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(Ke=Ke[He]),Ke)if(W>=0&&W<=A.width-Y&&Q>=0&&Q<=A.height-Z){S.bindFramebuffer(V.FRAMEBUFFER,Ke);const Qe=A.textures[Ue],ft=Qe.format,gt=Qe.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ue),!I.textureFormatReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,et),V.bufferData(V.PIXEL_PACK_BUFFER,Ne.byteLength,V.STREAM_READ),V.readPixels(W,Q,Y,Z,be.convert(ft),be.convert(gt),0);const Ot=B!==null?q.get(B).__webglFramebuffer:null;S.bindFramebuffer(V.FRAMEBUFFER,Ot);const en=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Ux(V,en,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,et),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ne),V.deleteBuffer(et),V.deleteSync(en),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,Q=0){const Y=Math.pow(2,-Q),Z=Math.floor(A.image.width*Y),Ne=Math.floor(A.image.height*Y),He=W!==null?W.x:0,Ue=W!==null?W.y:0;k.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,Q,0,0,He,Ue,Z,Ne),S.unbindTexture()},this.copyTextureToTexture=function(A,W,Q=null,Y=null,Z=0,Ne=0){let He,Ue,Ke,Qe,ft,gt,et,Ot,en;const Zt=A.isCompressedTexture?A.mipmaps[Ne]:A.image;if(Q!==null)He=Q.max.x-Q.min.x,Ue=Q.max.y-Q.min.y,Ke=Q.isBox3?Q.max.z-Q.min.z:1,Qe=Q.min.x,ft=Q.min.y,gt=Q.isBox3?Q.min.z:0;else{const tn=Math.pow(2,-Z);He=Math.floor(Zt.width*tn),Ue=Math.floor(Zt.height*tn),A.isDataArrayTexture?Ke=Zt.depth:A.isData3DTexture?Ke=Math.floor(Zt.depth*tn):Ke=1,Qe=0,ft=0,gt=0}Y!==null?(et=Y.x,Ot=Y.y,en=Y.z):(et=0,Ot=0,en=0);const Bt=be.convert(W.format),Mn=be.convert(W.type);let Ge;W.isData3DTexture?(k.setTexture3D(W,0),Ge=V.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(k.setTexture2DArray(W,0),Ge=V.TEXTURE_2D_ARRAY):(k.setTexture2D(W,0),Ge=V.TEXTURE_2D),S.activeTexture(V.TEXTURE0),S.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),S.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),S.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);const Yn=S.getParameter(V.UNPACK_ROW_LENGTH),Tt=S.getParameter(V.UNPACK_IMAGE_HEIGHT),ii=S.getParameter(V.UNPACK_SKIP_PIXELS),Ai=S.getParameter(V.UNPACK_SKIP_ROWS),ss=S.getParameter(V.UNPACK_SKIP_IMAGES);S.pixelStorei(V.UNPACK_ROW_LENGTH,Zt.width),S.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Zt.height),S.pixelStorei(V.UNPACK_SKIP_PIXELS,Qe),S.pixelStorei(V.UNPACK_SKIP_ROWS,ft),S.pixelStorei(V.UNPACK_SKIP_IMAGES,gt);const _r=A.isDataArrayTexture||A.isData3DTexture,zt=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const tn=q.get(A),rs=q.get(W),Vt=q.get(tn.__renderTarget),as=q.get(rs.__renderTarget);S.bindFramebuffer(V.READ_FRAMEBUFFER,Vt.__webglFramebuffer),S.bindFramebuffer(V.DRAW_FRAMEBUFFER,as.__webglFramebuffer);for(let vr=0;vr<Ke;vr++)_r&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,q.get(A).__webglTexture,Z,gt+vr),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,q.get(W).__webglTexture,Ne,en+vr)),V.blitFramebuffer(Qe,ft,He,Ue,et,Ot,He,Ue,V.DEPTH_BUFFER_BIT,V.NEAREST);S.bindFramebuffer(V.READ_FRAMEBUFFER,null),S.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||q.has(A)){const tn=q.get(A),rs=q.get(W);S.bindFramebuffer(V.READ_FRAMEBUFFER,O),S.bindFramebuffer(V.DRAW_FRAMEBUFFER,F);for(let Vt=0;Vt<Ke;Vt++)_r?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,tn.__webglTexture,Z,gt+Vt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,tn.__webglTexture,Z),zt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,rs.__webglTexture,Ne,en+Vt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,rs.__webglTexture,Ne),Z!==0?V.blitFramebuffer(Qe,ft,He,Ue,et,Ot,He,Ue,V.COLOR_BUFFER_BIT,V.NEAREST):zt?V.copyTexSubImage3D(Ge,Ne,et,Ot,en+Vt,Qe,ft,He,Ue):V.copyTexSubImage2D(Ge,Ne,et,Ot,Qe,ft,He,Ue);S.bindFramebuffer(V.READ_FRAMEBUFFER,null),S.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else zt?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Ge,Ne,et,Ot,en,He,Ue,Ke,Bt,Mn,Zt.data):W.isCompressedArrayTexture?V.compressedTexSubImage3D(Ge,Ne,et,Ot,en,He,Ue,Ke,Bt,Zt.data):V.texSubImage3D(Ge,Ne,et,Ot,en,He,Ue,Ke,Bt,Mn,Zt):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ne,et,Ot,He,Ue,Bt,Mn,Zt.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ne,et,Ot,Zt.width,Zt.height,Bt,Zt.data):V.texSubImage2D(V.TEXTURE_2D,Ne,et,Ot,He,Ue,Bt,Mn,Zt);S.pixelStorei(V.UNPACK_ROW_LENGTH,Yn),S.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Tt),S.pixelStorei(V.UNPACK_SKIP_PIXELS,ii),S.pixelStorei(V.UNPACK_SKIP_ROWS,Ai),S.pixelStorei(V.UNPACK_SKIP_IMAGES,ss),Ne===0&&W.generateMipmaps&&V.generateMipmap(Ge),S.unbindTexture()},this.initRenderTarget=function(A){q.get(A).__webglFramebuffer===void 0&&k.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?k.setTextureCube(A,0):A.isData3DTexture?k.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?k.setTexture2DArray(A,0):k.setTexture2D(A,0),S.unbindTexture()},this.resetState=function(){U=0,N=0,B=null,S.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}const AA=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Sd,AddEquation:gs,AddOperation:Ag,AdditiveAnimationBlendMode:Dd,AdditiveBlending:Lu,AgXToneMapping:zc,AlphaFormat:Id,AlwaysCompare:Bg,AlwaysDepth:zl,AlwaysStencilFunc:ku,AmbientLight:D0,AnimationAction:G0,AnimationClip:lo,AnimationLoader:ES,AnimationMixer:nM,AnimationObjectGroup:eM,AnimationUtils:SS,ArcCurve:i0,ArrayCamera:k0,ArrowHelper:EM,AttachedBindMode:Ou,Audio:z0,AudioAnalyser:WS,AudioContext:af,AudioListener:VS,AudioLoader:FS,AxesHelper:AM,BackSide:Bn,BasicDepthPacking:Dg,BasicShadowMap:Vy,BatchedMesh:jg,BezierInterpolant:E0,Bone:Bd,BooleanKeyframeTrack:dr,Box2:H0,Box3:Rn,Box3Helper:wM,BoxGeometry:Rs,BoxHelper:MM,BufferAttribute:kt,BufferGeometry:ht,BufferGeometryLoader:O0,ByteType:Ed,Cache:Li,Camera:bh,CameraHelper:SM,CanvasTexture:Vb,CapsuleGeometry:ah,CatmullRomCurve3:s0,CineonToneMapping:bd,CircleGeometry:oh,ClampToEdgeWrapping:qn,Clock:cM,Color:Be,ColorKeyframeTrack:ef,ColorManagement:vt,Compatibility:Rx,CompressedArrayTexture:Bb,CompressedCubeTexture:zb,CompressedTexture:rh,CompressedTextureLoader:AS,ConeGeometry:wo,ConstantAlphaFactor:wg,ConstantColorFactor:Sg,Controls:X0,CubeCamera:F0,CubeDepthTexture:t0,CubeReflectionMapping:Oi,CubeRefractionMapping:Ms,CubeTexture:So,CubeTextureLoader:CS,CubeUVReflectionMapping:ra,CubicBezierCurve:Hd,CubicBezierCurve3:r0,CubicInterpolant:w0,CullFaceBack:Du,CullFaceFront:og,CullFaceFrontBack:zy,CullFaceNone:ag,Curve:Ei,CurvePath:o0,CustomBlending:lg,CustomToneMapping:Md,CylinderGeometry:Mo,Cylindrical:hM,Data3DTexture:Jc,DataArrayTexture:jc,DataTexture:ci,DataTextureLoader:RS,DataUtils:ub,DecrementStencilOp:ax,DecrementWrapStencilOp:lx,DefaultLoadingManager:pr,DepthFormat:ki,DepthStencilFormat:_s,DepthTexture:lr,DetachedBindMode:Cg,DirectionalLight:P0,DirectionalLightHelper:bM,DiscreteInterpolant:T0,DodecahedronGeometry:lh,DoubleSide:Pi,DstAlphaFactor:_g,DstColorFactor:yg,DynamicCopyUsage:Mx,DynamicDrawUsage:_x,DynamicReadUsage:xx,EdgesGeometry:n0,EllipseCurve:ch,EqualCompare:Og,EqualDepth:Gl,EqualStencilFunc:dx,EquirectangularReflectionMapping:Pa,EquirectangularRefractionMapping:Da,Euler:Mi,EventDispatcher:Ti,ExternalTexture:Vd,ExtrudeGeometry:hh,FileLoader:ts,Float16BufferAttribute:vb,Float32BufferAttribute:Ve,FloatType:Fn,Fog:th,FogExp2:eh,FramebufferTexture:kb,FrontSide:Qi,Frustum:or,FrustumArray:sh,GLBufferAttribute:oM,GLSL1:Tx,GLSL3:Bu,GreaterCompare:Fg,GreaterDepth:Wl,GreaterEqualCompare:Kc,GreaterEqualDepth:Hl,GreaterEqualStencilFunc:gx,GreaterStencilFunc:px,GridHelper:yM,Group:Xr,HTMLTexture:Gb,HalfFloatType:Fi,HemisphereLight:C0,HemisphereLightHelper:vM,IcosahedronGeometry:uh,ImageBitmapLoader:OS,ImageLoader:co,ImageUtils:Wg,IncrementStencilOp:rx,IncrementWrapStencilOp:ox,InstancedBufferAttribute:Qr,InstancedBufferGeometry:N0,InstancedInterleavedBuffer:aM,InstancedMesh:Kg,Int16BufferAttribute:gb,Int32BufferAttribute:_b,Int8BufferAttribute:fb,IntType:Gc,InterleavedBuffer:nh,InterleavedBufferAttribute:ar,Interpolant:oa,InterpolateBezier:Fu,InterpolateDiscrete:ja,InterpolateLinear:Sc,InterpolateSmooth:El,InterpolationSamplingMode:Cx,InterpolationSamplingType:Ax,InvertStencilOp:cx,KeepStencilOp:qs,KeyframeTrack:mi,LOD:Yg,LatheGeometry:dh,Layers:Qc,LessCompare:Ng,LessDepth:Vl,LessEqualCompare:Zc,LessEqualDepth:sr,LessEqualStencilFunc:fx,LessStencilFunc:ux,Light:Ps,LightProbe:U0,Line:Es,Line3:fM,LineBasicMaterial:zn,LineCurve:Wd,LineCurve3:a0,LineDashedMaterial:b0,LineLoop:Jg,LineSegments:Vi,LinearFilter:Wt,LinearInterpolant:Qd,LinearMipMapLinearFilter:qy,LinearMipMapNearestFilter:Xy,LinearMipmapLinearFilter:Di,LinearMipmapNearestFilter:La,LinearSRGBColorSpace:Qa,LinearToneMapping:yd,LinearTransfer:eo,Loader:$n,LoaderUtils:Wu,LoadingManager:nf,LoopOnce:Rg,LoopPingPong:Pg,LoopRepeat:Ig,MOUSE:er,Material:bn,MaterialBlending:Gy,MaterialLoader:Sh,MathUtils:Hg,Matrix2:$u,Matrix3:ct,Matrix4:nt,MaxEquation:dg,Mesh:rn,MeshBasicMaterial:is,MeshDepthMaterial:jd,MeshDistanceMaterial:Jd,MeshLambertMaterial:y0,MeshMatcapMaterial:x0,MeshNormalMaterial:v0,MeshPhongMaterial:g0,MeshPhysicalMaterial:m0,MeshStandardMaterial:Kd,MeshToonMaterial:_0,MinEquation:ug,MirroredRepeatWrapping:Ya,MixOperation:Eg,MultiplyBlending:Nu,MultiplyOperation:xo,NearestFilter:sn,NearestMipMapLinearFilter:Wy,NearestMipMapNearestFilter:Hy,NearestMipmapLinearFilter:Hr,NearestMipmapNearestFilter:Td,NeutralToneMapping:wd,NeverCompare:Ug,NeverDepth:Bl,NeverStencilFunc:hx,NoBlending:Ni,NoColorSpace:Ki,NoNormalPacking:ex,NoToneMapping:Si,NormalAnimationBlendMode:Yc,NormalBlending:tr,NormalGAPacking:nx,NormalRGPacking:tx,NotEqualCompare:kg,NotEqualDepth:Xl,NotEqualStencilFunc:mx,NumberKeyframeTrack:yh,Object3D:wt,ObjectLoader:US,ObjectSpaceNormalMap:Lg,OctahedronGeometry:Eo,OneFactor:pg,OneMinusConstantAlphaFactor:Tg,OneMinusConstantColorFactor:Mg,OneMinusDstAlphaFactor:vg,OneMinusDstColorFactor:xg,OneMinusSrcAlphaFactor:kl,OneMinusSrcColorFactor:gg,OrthographicCamera:la,PCFShadowMap:Ia,PCFSoftShadowMap:Ol,PMREMGenerator:Zu,Path:so,PerspectiveCamera:gn,Plane:Zi,PlaneGeometry:aa,PlaneHelper:TM,PointLight:I0,PointLightHelper:gM,Points:Qg,PointsMaterial:zd,PolarGridHelper:xM,PolyhedronGeometry:Is,PositionalAudio:HS,PropertyBinding:Et,PropertyMixer:V0,QuadraticBezierCurve:Xd,QuadraticBezierCurve3:qd,Quaternion:yn,QuaternionKeyframeTrack:xh,QuaternionLinearInterpolant:A0,R11_EAC_Format:Ql,RED_GREEN_RGTC2_Format:Ka,RED_RGTC1_Format:yc,REVISION:Bc,RG11_EAC_Format:Za,RGBADepthPacking:jy,RGBAFormat:kn,RGBAIntegerFormat:$c,RGBA_ASTC_10x10_Format:fc,RGBA_ASTC_10x5_Format:hc,RGBA_ASTC_10x6_Format:uc,RGBA_ASTC_10x8_Format:dc,RGBA_ASTC_12x10_Format:pc,RGBA_ASTC_12x12_Format:mc,RGBA_ASTC_4x4_Format:nc,RGBA_ASTC_5x4_Format:ic,RGBA_ASTC_5x5_Format:sc,RGBA_ASTC_6x5_Format:rc,RGBA_ASTC_6x6_Format:ac,RGBA_ASTC_8x5_Format:oc,RGBA_ASTC_8x6_Format:lc,RGBA_ASTC_8x8_Format:cc,RGBA_BPTC_Format:gc,RGBA_ETC2_EAC_Format:Jl,RGBA_PVRTC_2BPPV1_Format:Zl,RGBA_PVRTC_4BPPV1_Format:Yl,RGBA_S3TC_DXT1_Format:Na,RGBA_S3TC_DXT3_Format:Oa,RGBA_S3TC_DXT5_Format:Fa,RGBDepthPacking:Jy,RGBFormat:Pd,RGBIntegerFormat:$y,RGB_BPTC_SIGNED_Format:_c,RGB_BPTC_UNSIGNED_Format:vc,RGB_ETC1_Format:Kl,RGB_ETC2_Format:jl,RGB_PVRTC_2BPPV1_Format:$l,RGB_PVRTC_4BPPV1_Format:ql,RGB_S3TC_DXT1_Format:Ua,RGDepthPacking:Qy,RGFormat:ws,RGIntegerFormat:qc,RawShaderMaterial:Zd,Ray:ur,Raycaster:lM,RectAreaLight:L0,RedFormat:Xc,RedIntegerFormat:bo,ReinhardToneMapping:xd,RenderTarget:Ud,RenderTarget3D:iM,RepeatWrapping:$a,ReplaceStencilOp:sx,ReverseSubtractEquation:hg,RingGeometry:fh,SIGNED_R11_EAC_Format:ec,SIGNED_RED_GREEN_RGTC2_Format:bc,SIGNED_RED_RGTC1_Format:xc,SIGNED_RG11_EAC_Format:tc,SRGBColorSpace:Nn,SRGBTransfer:Dt,Scene:Nd,ShaderChunk:it,ShaderLib:ai,ShaderMaterial:fi,ShadowMaterial:f0,Shape:To,ShapeGeometry:ph,ShapePath:CM,ShapeUtils:xi,ShortType:Ad,Skeleton:ih,SkeletonHelper:mM,SkinnedMesh:Zg,Source:vs,Sphere:xn,SphereGeometry:Ao,Spherical:qu,SphericalHarmonics3:rf,SplineCurve:$d,SpotLight:R0,SpotLightHelper:pM,Sprite:$g,SpriteMaterial:kd,SrcAlphaFactor:Fl,SrcAlphaSaturateFactor:bg,SrcColorFactor:mg,StaticCopyUsage:Sx,StaticDrawUsage:to,StaticReadUsage:yx,StereoCamera:kS,StreamCopyUsage:wx,StreamDrawUsage:vx,StreamReadUsage:bx,StringKeyframeTrack:fr,SubtractEquation:cg,SubtractiveBlending:Uu,TOUCH:Ys,TangentSpaceNormalMap:es,TetrahedronGeometry:mh,Texture:Yt,TextureLoader:IS,TextureUtils:LM,Timer:B0,TimestampQuery:Ex,TorusGeometry:gh,TorusKnotGeometry:_h,Triangle:Xn,TriangleFanDrawMode:Ky,TriangleStripDrawMode:Zy,TrianglesDrawMode:Yy,TubeGeometry:vh,UVMapping:Vc,Uint16BufferAttribute:Od,Uint32BufferAttribute:Fd,Uint8BufferAttribute:pb,Uint8ClampedBufferAttribute:mb,Uniform:cf,UniformsGroup:rM,UniformsLib:Re,UniformsUtils:Yd,UnsignedByteType:Wn,UnsignedInt101111Type:Rd,UnsignedInt248Type:jr,UnsignedInt5999Type:Cd,UnsignedIntType:di,UnsignedShort4444Type:Hc,UnsignedShort5551Type:Wc,UnsignedShortType:Kr,VSMShadowMap:Gr,Vector2:ae,Vector3:P,Vector4:Ut,VectorKeyframeTrack:tf,VideoFrameTexture:Fb,VideoTexture:e0,WebGL3DRenderTarget:nb,WebGLArrayRenderTarget:tb,WebGLCoordinateSystem:Qn,WebGLCubeRenderTarget:hf,WebGLRenderTarget:ni,WebGLRenderer:e_,WebGLUtils:J0,WebGPUCoordinateSystem:rr,WebXRController:Al,WireframeGeometry:d0,WrapAroundEnding:Ja,ZeroCurvatureEnding:Zs,ZeroFactor:fg,ZeroSlopeEnding:Ks,ZeroStencilOp:ix,createCanvasElement:Vg,error:je,getConsoleFunction:Lx,log:io,setConsoleFunction:Dx,warn:Ce,warnOnce:bs},Symbol.toStringTag,{value:"Module"})),Ds=i=>{const e=Vr(i),t={set:n=>{t.current=n,e.set(n)},subscribe:e.subscribe,update:n=>{const s=n(t.current);t.current=s,e.set(s)},current:i};return t},Js=(i,e)=>({subscribe:od(i,e).subscribe,set:e,update:n=>e(n(Se(i))),get current(){return Se(i)}}),uf=i=>{const{subscribe:e}=od(i);return{subscribe:e,get current(){return Se(i)}}},CA=i=>{const e=i.getBoundingClientRect();let t=bi({width:e.width,height:e.height}),n=0,s=0,r=0,a=0,o=!0,l=!1,c;const u=()=>{l=!0,c!==void 0&&clearTimeout(c),c=setTimeout(()=>{l=!1,c=void 0},250)},f=()=>{u()},h=new ResizeObserver(()=>{o=!0,u();const p=i.getBoundingClientRect();pe(t,{width:p.width,height:p.height})});function d(){if(!o&&!l)return!1;const{clientWidth:p,clientHeight:_}=i;if(!o&&p===s&&_===n)return!1;s=p,n=_,o=!1;const g=i.getBoundingClientRect();return pe(t,{width:g.width,height:g.height}),T(t).width===r&&T(t).height===a?!1:(r=T(t).width,a=T(t).height,!0)}return Ss(()=>(h.observe(i),window.addEventListener("resize",f,{passive:!0}),()=>{h.disconnect(),window.removeEventListener("resize",f),c!==void 0&&clearTimeout(c)})),{size:{get current(){return T(t)}},shouldUpdateSize:d}},RA=i=>{const e=typeof i=="function"?i():i,{dom:t,canvas:n}=e,{size:s,shouldUpdateSize:r}=CA(t),a={dom:t,canvas:n,size:uf(()=>s.current),shouldUpdateSize:r};return wi("threlte-dom-context",a),a},Th=()=>{const i=pi("threlte-dom-context");if(!i)throw new Error("useDOM can only be used in a child component to <Canvas>.");return i};class ps{allVertices=new Map;isolatedVertices=new Map;connectedVertices=new Map;sortedConnectedValues=[];needsSort=!1;listeners=new Map;emit(e,t){const n=this.listeners.get(e);if(n)for(const s of n)s(t)}on(e,t){let n=this.listeners.get(e);n||(n=new Set,this.listeners.set(e,n)),n.add(t)}off(e,t){this.listeners.get(e)?.delete(t)}get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices.get(e);t&&(this.isolatedVertices.set(e,t),this.connectedVertices.delete(e))}moveToConnected(e){const t=this.isolatedVertices.get(e);t&&(this.connectedVertices.set(e,t),this.isolatedVertices.delete(e))}getKey=e=>typeof e=="object"?e.key:e;add(e,t,n){let s=this.allVertices.get(e);if(s&&s.value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);s?s.value===void 0&&(s.value=t):(s={value:t,previous:new Set,next:new Set},this.allVertices.set(e,s));const r=s.next.size>0||s.previous.size>0;if(!n?.after&&!n?.before&&!r){this.isolatedVertices.set(e,s),this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices.set(e,s);if(n?.after){const a=Array.isArray(n.after)?n.after:[n.after];for(const o of a)s.previous.add(this.getKey(o));for(const o of a){const l=this.getKey(o),c=this.allVertices.get(l);if(c)c.next.add(e),this.moveToConnected(l);else{const u={value:void 0,previous:new Set,next:new Set([e])};this.allVertices.set(l,u),this.connectedVertices.set(l,u)}}}if(n?.before){const a=Array.isArray(n.before)?n.before:[n.before];for(const o of a)s.next.add(this.getKey(o));for(const o of a){const l=this.getKey(o),c=this.allVertices.get(l);if(c)c.previous.add(e),this.moveToConnected(l);else{const u={value:void 0,previous:new Set([e]),next:new Set};this.allVertices.set(l,u),this.connectedVertices.set(l,u)}}}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices.get(t)){this.isolatedVertices.delete(t),this.allVertices.delete(t),this.emit("node:removed",{key:t,type:"isolated"});return}const s=this.connectedVertices.get(t);if(!(!s||s.value===void 0)){for(const r of s.next){const a=this.connectedVertices.get(r);a&&(a.previous.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}for(const r of s.previous){const a=this.connectedVertices.get(r);a&&(a.next.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}this.connectedVertices.delete(t),this.allVertices.delete(t),this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0}}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((n,s)=>{t.push(e(n,s))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);for(const n of this.isolatedVertices.values())n.value!==void 0&&e(n.value,t++)}getValueByKey(e){return this.allVertices.get(e)?.value}sort(){const e=new Map,t=[],n=[];for(const[r,a]of this.connectedVertices)a.value!==void 0&&e.set(r,0);for(const[r]of e){const a=this.connectedVertices.get(r);for(const o of a.next)e.has(o)&&e.set(o,e.get(o)+1)}for(const[r,a]of e)a===0&&t.push(r);let s=0;for(;s<t.length;){const r=t[s++];n.push(r);const a=this.connectedVertices.get(r)?.next;if(a)for(const o of a){const l=(e.get(o)||0)-1;e.set(o,l),l===0&&t.push(o)}}if(n.length!==e.size)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");this.sortedConnectedValues.length=0;for(let r=0;r<n.length;r++){const a=this.connectedVertices.get(n[r]).value;a!==void 0&&this.sortedConnectedValues.push(a)}this.needsSort=!1}clear(){this.allVertices.clear(),this.isolatedVertices.clear(),this.connectedVertices.clear(),this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class IA{key;stage;callback;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}constructor(e,t,n){this.stage=e,this.key=t,this.callback=n}run(e){this.runTask&&this.callback(e)}}class PA extends ps{key;scheduler;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}get tasks(){return this.sortedVertices}callback=(e,t)=>t();constructor(e,t,n){super(),this.scheduler=e,this.key=t,this.start=this.start.bind(this),this.stop=this.stop.bind(this),n&&(this.callback=n.bind(this))}createTask(e,t,n){const s=new IA(this,e,t);return this.add(e,s,n),s}getTask(e){return this.getValueByKey(e)}removeTask=this.remove.bind(this);run(e){this.runTask&&this.callback(e,t=>{this.forEachNode(n=>{n.run(t??e)})})}runWithTiming(e){if(!this.runTask)return{};const t={};return this.callback(e,n=>{this.forEachNode(s=>{const r=performance.now();s.run(n??e);const a=performance.now()-r;t[s.key]=a})}),t}getSchedule(){return this.mapNodes(e=>e.key.toString())}}class DA extends ps{lastTime=0;clampDeltaTo=.1;get stages(){return this.sortedVertices}constructor(e){super(),e?.clampDeltaTo&&(this.clampDeltaTo=e.clampDeltaTo),this.run=this.run.bind(this)}createStage(e,t){const n=new PA(this,e,t?.callback);return this.add(e,n,{after:t?.after,before:t?.before}),n}getStage(e){return this.getValueByKey(e)}removeStage=this.remove.bind(this);run(e){const t=e-this.lastTime;this.forEachNode(n=>{n.run(Math.min(t/1e3,this.clampDeltaTo))}),this.lastTime=e}runWithTiming(e){const t=e-this.lastTime,n={},s=performance.now();return this.forEachNode(r=>{const a=performance.now(),o=r.runWithTiming(Math.min(t/1e3,this.clampDeltaTo)),l=performance.now()-a;n[r.key.toString()]={duration:l,tasks:o}}),this.lastTime=e,{total:performance.now()-s,stages:n}}getSchedule(e={tasks:!0}){return{stages:this.mapNodes(t=>{if(t===void 0)throw new Error("Stage not found");return{key:t.key.toString(),tasks:e.tasks?t.getSchedule():void 0}})}}dispose(){this.clear()}}const LA=i=>{const e=new DA,t=e.createStage(Symbol("threlte-main-stage")),n=jt(i),s=jt(()=>T(n).autoRender),r=jt(()=>T(n).renderMode);let a=jt(()=>T(s)??!0),o=jt(()=>T(r)??"on-demand");const l=new Set;let c=!0;const u=()=>T(o)==="always"||T(o)==="on-demand"&&(c||l.size>0)||T(o)==="manual"&&c,f={scheduler:e,autoInvalidations:l,frameInvalidated:{get current(){return c},set current(h){c=h}},advance:()=>{c=!0},autoRender:Js(()=>T(a),h=>pe(a,h)),renderMode:Js(()=>T(o),h=>pe(o,h)),invalidate(){c=!0},mainStage:t,shouldRender:u,renderStage:e.createStage(Symbol("threlte-render-stage"),{after:t,callback(h,d){f.shouldRender()&&d()}}),resetFrameInvalidation(){c=!1}};return Ss(()=>()=>{e.dispose()}),wi("threlte-scheduler-context",f),f},mr=()=>{const i=pi("threlte-scheduler-context");if(!i)throw new Error("useScheduler can only be used in a child component to <Canvas>.");return i};var UA=["forEach","isDisjointFrom","isSubsetOf","isSupersetOf"],NA=["difference","intersection","symmetricDifference","union"],Cm=!1;class Ec extends Set{#t=new Map;#e=bi(0);#n=bi(0);#r=Il||-1;constructor(e){if(super(),e){for(var t of e)super.add(t);this.#n.v=super.size}Cm||this.#s()}#i(e){return Il===this.#r?bi(e):id(e)}#s(){Cm=!0;var e=Ec.prototype,t=Set.prototype;for(const n of UA)e[n]=function(...s){return T(this.#e),t[n].apply(this,s)};for(const n of NA)e[n]=function(...s){T(this.#e);var r=t[n].apply(this,s);return new Ec(r)}}has(e){var t=super.has(e),n=this.#t,s=n.get(e);if(s===void 0){if(!t)return T(this.#e),!1;s=this.#i(!0),n.set(e,s)}return T(s),t}add(e){return super.has(e)||(super.add(e),pe(this.#n,super.size),ms(this.#e)),this}delete(e){var t=super.delete(e),n=this.#t,s=n.get(e);return s!==void 0&&(n.delete(e),pe(s,!1)),t&&(pe(this.#n,super.size),ms(this.#e)),t}clear(){if(super.size!==0){super.clear();var e=this.#t;for(var t of e.values())pe(t,!1);e.clear(),pe(this.#n,0),ms(this.#e)}}keys(){return this.values()}values(){return T(this.#e),super.values()}entries(){return T(this.#e),super.entries()}[Symbol.iterator](){return this.keys()}get size(){return T(this.#n)}}class OA extends Map{#t=new Map;#e=bi(0);#n=bi(0);#r=Il||-1;constructor(e){if(super(),e){for(var[t,n]of e)super.set(t,n);this.#n.v=super.size}}#i(e){return Il===this.#r?bi(e):id(e)}has(e){var t=this.#t,n=t.get(e);if(n===void 0)if(super.has(e))n=this.#i(0),t.set(e,n);else return T(this.#e),!1;return T(n),!0}forEach(e,t){this.#s(),super.forEach(e,t)}get(e){var t=this.#t,n=t.get(e);if(n===void 0)if(super.has(e))n=this.#i(0),t.set(e,n);else{T(this.#e);return}return T(n),super.get(e)}set(e,t){var n=this.#t,s=n.get(e),r=super.get(e),a=super.set(e,t),o=this.#e;if(s===void 0)s=this.#i(0),n.set(e,s),pe(this.#n,super.size),ms(o);else if(r!==t){ms(s);var l=o.reactions===null?null:new Set(o.reactions),c=l===null||!s.reactions?.every(u=>l.has(u));c&&ms(o)}return a}delete(e){var t=this.#t,n=t.get(e),s=super.delete(e);return n!==void 0&&(t.delete(e),pe(n,-1)),s&&(pe(this.#n,super.size),ms(this.#e)),s}clear(){if(super.size!==0){super.clear();var e=this.#t;pe(this.#n,0);for(var t of e.values())pe(t,-1);ms(this.#e),e.clear()}}#s(){T(this.#e);var e=this.#t;if(this.#n.v!==e.size){for(var t of super.keys())if(!e.has(t)){var n=this.#i(0);e.set(t,n)}}for([,n]of this.#t)T(n)}keys(){return T(this.#e),super.keys()}values(){return this.#s(),super.values()}entries(){return this.#s(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return T(this.#n),super.size}}const FA=()=>{const{size:i}=Th(),e=Pc(i),{invalidate:t}=mr(),n=new Ec,s=new WeakMap,r=new gn(75,1,.1,1e3);r.position.z=5,r.lookAt(0,0,0);let a=bi(!1),o=bi(r);_n(()=>{if(T(o)!==r||T(a))return;const{width:c,height:u}=e.current;r.aspect=c/u,r.updateProjectionMatrix(),r.updateMatrixWorld(),t()}),_n(()=>{if(T(o)===void 0||n.size===0){let c=!1;T(o)!==r&&(pe(o,r),c=!0),T(a)&&(pe(a,!1),c=!0),c&&t()}});const l={makeDefaultCameras:n,makeDefaultCameraManual:s,camera:Js(()=>T(o),c=>pe(o,c)),manual:{get current(){return T(a)},set(c){pe(a,c,!0)}}};return wi("threlte-camera-context",l),l},df=()=>{const i=pi("threlte-camera-context");if(!i)throw new Error("useCamera can only be used in a child component to <Canvas>.");return i},kA=()=>{const i=new Map,e={disposableObjects:i,removeObjectFromDisposal:t=>{i.delete(t)},disposableObjectMounted:t=>{const n=i.get(t);n?i.set(t,n+1):i.set(t,1)},disposableObjectUnmounted:t=>{const n=i.get(t);n&&n>0&&(i.set(t,n-1),n-1<=0&&(i.delete(t),t.dispose()))}};return Ss(()=>()=>{for(const[t]of i)t.dispose();i.clear()}),wi("threlte-disposal-context",e),e},BA=()=>{const i=pi("threlte-disposal-context");if(!i)throw new Error("useDisposal can only be used in a child component to <Canvas>.");return i},t_=Symbol("threlte-parent-context"),n_=i=>{const e={get current(){return i()}};return wi(t_,e),e},i_=()=>pi(t_),zA=()=>{const i=i_();return uf(()=>i.current)},Ju=Symbol("threlte-parent-object3d-context"),s_=i=>{const e=pi(Ju),t={get current(){return i()??e.current}};return wi(Ju,t),t},VA=()=>pi(Ju),GA=i=>{const e={scene:new Nd};return wi("threlte-scene-context",e),e},r_=()=>{const i=pi("threlte-scene-context");if(!i)throw new Error("useScene can only be used in a child component to <Canvas>.");return i},HA=new class{#t=id(window.devicePixelRatio);#e(){const e=T_(window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),"change",()=>{pe(this.#t,window.devicePixelRatio),e(),this.#e()})}constructor(){this.#e()}get current(){return T(this.#t),window.devicePixelRatio}},yi=(i,e)=>i?.[`is${e}`]===!0,WA=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom","filmGauge","filmOffset"]),a_=(i,e,t)=>{yi(i,"PerspectiveCamera")?i.aspect=e/t:yi(i,"OrthographicCamera")&&(i.left=e/-2,i.right=e/2,i.top=t/2,i.bottom=t/-2),i.updateProjectionMatrix(),i.updateMatrixWorld()},XA=(i,e,t,n)=>{const{camera:s,manual:r,makeDefaultCameras:a,makeDefaultCameraManual:o}=df(),{invalidate:l}=mr(),{size:c}=Th(),u=Pc(c);_n(()=>{if(!t())return;const f=i(),h=e();return a.add(f),o.set(f,h),s.set(f),r.set(h),l(),()=>{a.delete(f),o.delete(f);const d=a.values().next().value;s.current===f&&(d?(s.set(d),r.set(o.get(d)??!1)):r.set(!1),l())}}),_n(()=>{if(e())return;const f=i();for(const h in n())if(WA.has(h)){f.updateProjectionMatrix(),l();break}}),_n(()=>{e()||a_(i(),u.current.width,u.current.height)})},qA=i=>{const{camera:e,manual:t}=df(),{scene:n}=r_(),{invalidate:s,mainStage:r,renderStage:a,autoRender:o,scheduler:l,frameInvalidated:c}=mr(),{canvas:u,size:f,shouldUpdateSize:h}=Th(),d=jt(i),p=Se(()=>T(d).createRenderer?T(d).createRenderer(u):new e_({canvas:u,powerPreference:"high-performance",antialias:!0,alpha:!0}));l.createStage(Symbol("threlte-resize-stage"),{before:r}).createTask(Symbol("threlte-resize-task"),()=>{p.xr.isPresenting||h()&&(p.setSize(f.current.width,f.current.height),t.current||a_(e.current,f.current.width,f.current.height),s())});const g=a.createTask(Symbol("threlte-auto-render-task"),()=>{p.render(n,e.current)}),m=jt(()=>T(d).colorSpace),v=jt(()=>T(d).dpr),b=jt(()=>T(d).shadows),y=jt(()=>T(d).toneMapping);let w=jt(()=>T(m)??Nn),M=jt(()=>{const D=HA.current??window.devicePixelRatio;return Array.isArray(T(v))?Math.min(Math.max(T(v)[0],D),T(v)[1]):T(v)??D}),C=jt(()=>T(b)??Ol),x=jt(()=>T(y)??zc);const E={renderer:p,colorManagementEnabled:uf(()=>T(d).colorManagementEnabled??!0),colorSpace:Js(()=>T(w),D=>pe(w,D)),dpr:Js(()=>T(M),D=>pe(M,D)),shadows:Js(()=>T(C),D=>pe(C,D)),toneMapping:Js(()=>T(x),D=>pe(x,D)),autoRenderTask:g};wi("threlte-renderer-context",E);const R=Pc(o);return vt.enabled=T(d).colorManagementEnabled??!0,_n(()=>{p.outputColorSpace=T(w),s()}),_n(()=>{p.setPixelRatio(T(M)),s()}),_n(()=>{p.shadowMap.enabled=T(C)!==!1,T(C)!==!1&&T(C)!==!0?p.shadowMap.type=T(C):T(C)===!0&&(p.shadowMap.type=Ol),s()}),_n(()=>{p.toneMapping=T(x),s()}),_n(()=>(R.current?E.autoRenderTask.start():E.autoRenderTask.stop(),s(),()=>{E.autoRenderTask.stop()})),p.setAnimationLoop(D=>{l.run(D),c.current=!1}),Ss(()=>()=>{p.setAnimationLoop(null);try{p.dispose()}catch{}}),E},$A=()=>{const i=pi("threlte-renderer-context");if(!i)throw new Error("useRenderer can only be used in a child component to <Canvas>.");return i},YA=()=>{const i=Ds({});return wi("threlte-user-context",i),i},ZA=()=>{const i=pi("threlte-user-context");if(!i)throw new Error("useUserContext can only be used in a child component to <Canvas>.");return i},KA=i=>{const{scene:e}=GA(),t=typeof i=="function"?i:()=>i;return{scene:e,...RA(t),...By(),...n_(()=>e),...s_(()=>e),...kA(),...LA(t),...FA(),...qA(t),...YA()}};var jA=new Set(["$$slots","$$events","$$legacy","children"]);function JA(i,e){In(e,!0);let t=po(e,jA);KA(()=>t);var n=Qs(),s=on(n);Ic(s,()=>e.children),ot(i,n),Pn()}var QA=new Set(["$$slots","$$events","$$legacy","children"]),eC=Rt('<div class="svelte-clyidt"><canvas class="svelte-clyidt"><!></canvas></div>');function tC(i,e){let t=po(e,QA),n=bi(void 0),s=bi(void 0);var r=eC(),a=Qt(r),o=Qt(a);{var l=c=>{JA(c,rd({get dom(){return T(s)},get canvas(){return T(n)}},()=>t,{children:(u,f)=>{var h=Qs(),d=on(h);Ic(d,()=>e.children??sd),ot(u,h)},$$slots:{default:!0}}))};An(o,c=>{T(n)&&T(s)&&c(l)})}Lt(a),Dl(a,c=>pe(n,c),()=>T(n)),Lt(r),Dl(r,c=>pe(s,c),()=>T(s)),ot(i,r)}const nC=(i,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let s=0;s<t.length;s+=1)if(i=i[t[s]],i==null)return console.error(`Cannot resolve property path "${e}": "${t[s]}" is ${i}`),{target:{},key:""};return{target:i,key:n}}else return{target:i,key:e}},iC=i=>typeof i=="object"&&i!==null,sC=(i,e)=>{const{invalidate:t}=mr(),n=i_(),s=VA();_n(()=>{t();const r=i(),a=e();if(a===void 0&&yi(r,"Object3D")){const o=s.current;return o?.add(r),()=>{t(),o?.remove(r)}}if(a===void 0&&iC(n.current)){const o=n.current;if(yi(r,"Material")){const l=o.material;return o.material=r,()=>{t(),o.material=l}}else if(yi(r,"BufferGeometry")){const l=o.geometry;return o.geometry=r,()=>{t(),o.geometry=l}}}if(a===!1)return()=>{t()};if(typeof a=="function"){const o=a({ref:r,parent:n.current,parentObject3D:s.current});return()=>{t(),o?.()}}if(typeof a=="string"){const{target:o,key:l}=nC(n.current,a);if(l in o){const c=o[l];return o[l]=r,()=>{t(),o[l]=c}}else return o[l]=r,()=>{t(),delete o[l]}}if(yi(a,"Object3D")&&yi(r,"Object3D"))return a.add(r),()=>{t(),a.remove(r)}})},Rm=Symbol("threlte-disposable-object-context"),rC=i=>typeof i?.dispose=="function",aC=(i,e)=>{const{disposableObjectMounted:t,disposableObjectUnmounted:n,removeObjectFromDisposal:s}=BA(),r=pi(Rm),a=jt(()=>{const l=e();return l!==void 0?l!==!1:r?.()!==!1});wi(Rm,()=>T(a));const o=new Set;Ss(()=>{const l=i();rC(l)&&(T(a)?(t(l),o.add(l)):(s(l),o.delete(l)))}),Ss(()=>()=>{for(const l of o)n(l);o.clear()})};let Qu;const oC=i=>{Qu=i},lC=()=>{const i=Qu;return Qu=void 0,i},cC="threlte-plugin-context",hC=i=>{const e=pi(cC);if(!e)return;const t=[],n=Object.values(e);if(n.length>0)for(let s=0;s<n.length;s++){const r=n[s],a=r(i);a&&a.pluginProps&&t.push(...a.pluginProps)}return{pluginsProps:t}},uC=i=>typeof i=="string"||typeof i=="number"||typeof i=="boolean"||typeof i>"u"||i===null,dC=(i,e,t)=>{const n=i[e],s=Array.isArray(t);!s&&typeof t=="number"&&typeof n=="object"&&n!==null&&typeof n.setScalar=="function"&&!n.isColor?n.setScalar(t):typeof n=="object"&&n!==null&&typeof n.set=="function"?s?n.set(...t):n.set(t):i[e]=t},fC=(i,e,t)=>{const{invalidate:n}=mr(),s=new Map,r=(a,o,l)=>{if(uC(l)){const h=s.get(o);if(h&&h.instance===a&&h.value===l)return;s.set(o,{instance:a,value:l})}else s.delete(o);let c=a,u=o;const f=o.includes(".");if(f){const h=o.split(".");u=h.pop();for(let d=0;d<h.length;d++)if(c=c[h[d]],c==null){console.error(`Cannot resolve property path "${o}": "${h[d]}" is ${c}`);return}}if(typeof l=="function"&&u.startsWith("on")&&!f&&"addEventListener"in c){const h=c,d=u.slice(2);return h.addEventListener(d,l),()=>{h.removeEventListener?.(d,l)}}l!=null?dC(c,u,l):c[u]=l,n()};_n(()=>{const a=i(),o=e(),l=t();s.clear(),Se(()=>{for(const c in o)l?.includes(c)||_n(()=>r(a,c,o[c]))})})},pC=i=>typeof i=="function"&&Function.prototype.toString.call(i).startsWith("class "),mC=(i,e)=>pC(i)?Array.isArray(e)?new i(...e):new i:i;var gC=new Set(["$$slots","$$events","$$legacy","ref","manual","makeDefault"]);function _C(i,e){In(e,!0);let t=Ye(e,"manual",3,!1),n=Ye(e,"makeDefault",3,!1),s=po(e,gC);XA(()=>e.ref,()=>t(),()=>n(),()=>s),Pn()}var vC=new Set(["$$slots","$$events","$$legacy","is","args","attach","dispose","ref","oncreate","children","makeDefault","manual"]),yC=Rt("<!> <!>",1);function Im(i,e){In(e,!0);let t=Ye(e,"is",19,lC),n=Ye(e,"ref",15),s=po(e,vC);const r=jt(()=>mC(t(),e.args)),a=hC({get ref(){return T(r)},get args(){return e.args},get attach(){return e.attach},get manual(){return e.manual},get makeDefault(){return e.makeDefault},get dispose(){return e.dispose},get props(){return s}});fC(()=>T(r),()=>s,()=>a?.pluginsProps),sC(()=>T(r),()=>e.attach),aC(()=>T(r),()=>e.dispose),s_(()=>yi(T(r),"Object3D")?T(r):void 0),n_(()=>T(r)),Ss(()=>{if(T(r))return Se(()=>(n()!==T(r)&&n(T(r)),e.oncreate?.(T(r))))});var o=yC(),l=on(o);{var c=h=>{_C(h,rd({get ref(){return T(r)},get manual(){return e.manual},get makeDefault(){return e.makeDefault}},()=>s))},u=jt(()=>yi(T(r),"PerspectiveCamera")||yi(T(r),"OrthographicCamera"));An(l,h=>{T(u)&&h(c)})}var f=dt(l,2);Ic(f,()=>e.children??sd,()=>({ref:T(r)})),ot(i,o),Pn()}const xC={},xt=new Proxy(Im,{get(i,e){if(typeof e!="string")return Reflect.get(i,e);const t=xC[e]||AA[e];if(t===void 0)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return(...n)=>(oC(t),Im(...n))}}),bC=()=>{const i=mr(),e=$A(),t=df(),n=r_(),s=Th();return{advance:i.advance,autoRender:i.autoRender,autoRenderTask:e.autoRenderTask,camera:t.camera,colorManagementEnabled:e.colorManagementEnabled,colorSpace:e.colorSpace,dpr:e.dpr,invalidate:i.invalidate,mainStage:i.mainStage,renderer:e.renderer,renderMode:i.renderMode,renderStage:i.renderStage,scheduler:i.scheduler,shadows:e.shadows,shouldRender:i.shouldRender,dom:s.dom,canvas:s.canvas,size:s.size,toneMapping:e.toneMapping,get scene(){return n.scene},set scene(a){n.scene=a}}},SC=typeof window<"u";function MC(i,e,t){if(!SC)return{task:void 0,start:()=>{},stop:()=>{},started:C_(!1)};let n,s,r;ps.isKey(i)?(n=i,s=e,r=t):(n=Symbol("useTask"),s=i,r=e);const a=mr(),o=r?.autoInvalidate??!0;let l=a.mainStage,c=jt(()=>r?.running?.()??r?.autoStart??!0);if(r){if(r.stage)if(ps.isValue(r.stage))l=r.stage;else{const f=a.scheduler.getStage(r.stage);if(!f)throw new Error(`No stage found with key ${r.stage.toString()}`);l=f}else if(r.after)if(Array.isArray(r.after))for(let f=0;f<r.after.length;f++){const h=r.after[f];if(ps.isValue(h)){l=h.stage;break}}else ps.isValue(r.after)&&(l=r.after.stage);else if(r.before)if(Array.isArray(r.before))for(let f=0;f<r.before.length;f++){const h=r.before[f];if(ps.isValue(h)){l=h.stage;break}}else ps.isValue(r.before)&&(l=r.before.stage)}const u=l.createTask(n,s,r);return _n(()=>{T(c)?(u.start(),o&&a.autoInvalidations.add(s)):(u.stop(),o&&a.autoInvalidations.delete(s))}),_n(()=>()=>{l.removeTask(n),o&&a.autoInvalidations.delete(s)}),{task:u,start:()=>{pe(c,!0)},stop:()=>{pe(c,!1)},started:od(()=>T(c))}}function wC(i,e,t){const n=ZA();if(!n)throw new Error("No user context store found, did you invoke this function outside of your main <Canvas> component?");return e?(n.update(s=>{if(i in s)return s;const r=typeof e=="function"?e():e;return s[i]=r,s}),n.current[i]):R_(n,s=>s[i])}const Pm=Symbol(),TC=i=>typeof i?.subscribe=="function",o_=(i,e,t)=>{const n=i().map(a=>TC(a)?Pc(a):Pm),s=jt(()=>i().map((a,o)=>n[o]===Pm?a:n[o].current)),r=()=>{T(s);let a;return Se(()=>{a=e(T(s))}),a};t?_n(r):Ss(r)},EC=(i,e)=>o_(i,e,!1),AC=(i,e)=>o_(i,e,!0);Object.assign(EC,{pre:AC});const Xs=i=>({subscribe:i.subscribe,get current(){return i.current}});let Va=0;const ff=Ds(!1),Eh=Ds(!1),pf=Ds(void 0),mf=Ds(0),gf=Ds(0),l_=Ds([]),_f=Ds(0),{onStart:CC,onLoad:RC,onError:IC}=pr;pr.onStart=(i,e,t)=>{CC?.(i,e,t),Eh.set(!0),pf.set(i),mf.set(e),gf.set(t);const n=(e-Va)/(t-Va);_f.set(n),n===1&&ff.set(!0)};pr.onLoad=()=>{RC?.(),Eh.set(!1)};pr.onError=i=>{IC?.(i),l_.update(e=>[...e,i])};pr.onProgress=(i,e,t)=>{e===t&&(Va=t),Eh.set(!0),pf.set(i),mf.set(e),gf.set(t);const n=(e-Va)/(t-Va)||1;_f.set(n),n===1&&ff.set(!0)};Xs(Eh),Xs(pf),Xs(mf),Xs(gf),Xs(l_),Xs(_f),Xs(ff);const PC=()=>wC("threlte-controls",{orbitControls:Vr(void 0),trackballControls:Vr(void 0),cameraControls:Vr(void 0),transformControls:Vr(void 0)});new nt;new nt;new wt;const DC="Right",LC="Top",UC="Front",NC="Left",OC="Bottom",FC="Back";[DC,LC,UC,NC,OC,FC].map(i=>i.toLocaleLowerCase());Re.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ae(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ai.line={uniforms:Yd.merge([Re.common,Re.fog,Re.line]),vertexShader:`
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
		`};new nt;const Dm={type:"change"},vf={type:"start"},c_={type:"end"},Sl=new ur,Lm=new Zi,kC=Math.cos(70*Hg.DEG2RAD),ln=new P,Gn=2*Math.PI,Ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Tu=1e-6;class BC extends X0{constructor(e,t=null){super(e,t),this.state=Ft.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:er.ROTATE,MIDDLE:er.DOLLY,RIGHT:er.PAN},this.touches={ONE:Ys.ROTATE,TWO:Ys.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new yn,this._lastTargetPosition=new P,this._quat=new yn().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qu,this._sphericalDelta=new qu,this._scale=1,this._panOffset=new P,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new P,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=VC.bind(this),this._onPointerDown=zC.bind(this),this._onPointerUp=GC.bind(this),this._onContextMenu=ZC.bind(this),this._onMouseWheel=XC.bind(this),this._onKeyDown=qC.bind(this),this._onTouchStart=$C.bind(this),this._onTouchMove=YC.bind(this),this._onMouseDown=HC.bind(this),this._onMouseMove=WC.bind(this),this._interceptControlDown=KC.bind(this),this._interceptControlUp=jC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dm),this.update(),this.state=Ft.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;ln.copy(t).sub(this.target),ln.applyQuaternion(this._quat),this._spherical.setFromVector3(ln),this.autoRotate&&this.state===Ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Gn:n>Math.PI&&(n-=Gn),s<-Math.PI?s+=Gn:s>Math.PI&&(s-=Gn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ln.setFromSpherical(this._spherical),ln.applyQuaternion(this._quatInverse),t.copy(this.target).add(ln),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ln.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=ln.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Sl.origin.copy(this.object.position),Sl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Sl.direction))<kC?this.object.lookAt(this.target):(Lm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Sl.intersectPlane(Lm,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Tu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Tu||this._lastTargetPosition.distanceToSquared(this.target)>Tu?(this.dispatchEvent(Dm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Gn/60*this.autoRotateSpeed*e:Gn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ln.setFromMatrixColumn(t,0),ln.multiplyScalar(-e),this._panOffset.add(ln)}_panUp(e,t){this.screenSpacePanning===!0?ln.setFromMatrixColumn(t,1):(ln.setFromMatrixColumn(t,0),ln.crossVectors(this.object.up,ln)),ln.multiplyScalar(e),this._panOffset.add(ln)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ln.copy(s).sub(this.target);let r=ln.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function zC(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function VC(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function GC(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(c_),this.state=Ft.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function HC(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case er.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ft.DOLLY;break;case er.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ft.ROTATE}break;case er.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ft.PAN}break;default:this.state=Ft.NONE}this.state!==Ft.NONE&&this.dispatchEvent(vf)}function WC(i){switch(this.state){case Ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function XC(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ft.NONE||(i.preventDefault(),this.dispatchEvent(vf),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(c_))}function qC(i){this.enabled!==!1&&this._handleKeyDown(i)}function $C(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ys.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ft.TOUCH_ROTATE;break;case Ys.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ft.TOUCH_PAN;break;default:this.state=Ft.NONE}break;case 2:switch(this.touches.TWO){case Ys.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ft.TOUCH_DOLLY_PAN;break;case Ys.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ft.TOUCH_DOLLY_ROTATE;break;default:this.state=Ft.NONE}break;default:this.state=Ft.NONE}this.state!==Ft.NONE&&this.dispatchEvent(vf)}function YC(i){switch(this._trackPointer(i),this.state){case Ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ft.NONE}}function ZC(i){this.enabled!==!1&&i.preventDefault()}function KC(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jC(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var JC=new Set(["$$slots","$$events","$$legacy","camera","ref","children"]);function QC(i,e){In(e,!0);const t=()=>Nf(f,"$parent",s),n=()=>Nf(c,"$defaultCamera",s),[s,r]=O_();let a=Ye(e,"ref",15),o=po(e,JC);const{dom:l,camera:c,invalidate:u}=bC(),f=zA(),h=jt(()=>e.camera?e.camera:yi(t(),"Camera")?t():n()),d=new BC(Se(()=>T(h)),l);_n(()=>{d.object=T(h)});const{orbitControls:p}=PC();MC(()=>{d.update()},{autoInvalidate:!1,running:()=>e.autoRotate||e.enableDamping||!1});const _=g=>{u(),e.onchange?.(g)};_n(()=>(p.set(d),()=>{p.set(void 0)})),xt(i,rd({get is(){return d}},()=>o,{onchange:_,get ref(){return a()},set ref(g){a(g)},children:(g,m)=>{var v=Qs(),b=on(v);Ic(b,()=>e.children??sd,()=>({ref:d})),ot(g,v)},$$slots:{default:!0}})),Pn(),r()}new nt;new nt;new rn;const eR=it.shadowmap_pars_fragment;eR.includes("unpackRGBAToDepth");`${it.logdepthbuf_pars_vertex}${it.fog_pars_vertex}${it.logdepthbuf_vertex}${it.fog_vertex}`;`${it.tonemapping_fragment}${it.colorspace_fragment}`;`${it.tonemapping_fragment}${it.colorspace_fragment}`;const tR=`

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
`,nR=`

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
`,iR=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,sR=iR,rR=`
	${tR}
	${nR}
`;`${sR}${rR}${it.tonemapping_fragment}${it.colorspace_fragment}`;typeof window<"u"&&document.createElement("div");new OA;for(let i=0;i<256;i++)(i<16?"0":"")+i.toString(16);new la(-1,1,1,-1,0,1);class aR extends ht{constructor(){super(),this.setAttribute("position",new Ve([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ve([0,2,0,0,2,0],2))}}new aR;var h_={exports:{}};h_.exports=Ah;h_.exports.default=Ah;function Ah(i,e,t){t=t||2;var n=e&&e.length,s=n?e[0]*t:i.length,r=u_(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;var o,l,c,u,f,h,d;if(n&&(r=uR(i,e,r,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(var p=t;p<s;p+=t)f=i[p],h=i[p+1],f<o&&(o=f),h<l&&(l=h),f>c&&(c=f),h>u&&(u=h);d=Math.max(c-o,u-l),d=d!==0?32767/d:0}return ho(r,a,t,o,l,d,0),a}function u_(i,e,t,n,s){var r,a;if(s===nd(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Um(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Um(r,i[r],i[r+1],a);return a&&Ch(a,a.next)&&(fo(a),a=a.next),a}function hr(i,e){if(!i)return i;e||(e=i);var t=i,n;do if(n=!1,!t.steiner&&(Ch(t,t.next)||$t(t.prev,t,t.next)===0)){if(fo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ho(i,e,t,n,s,r,a){if(i){!a&&r&&gR(i,n,s,r);for(var o=i,l,c;i.prev!==i.next;){if(l=i.prev,c=i.next,r?lR(i,n,s,r):oR(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),fo(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=cR(hr(i),e,t),ho(i,e,t,n,s,r,2)):a===2&&hR(i,e,t,n,s,r):ho(hr(i),e,t,n,s,r,1);break}}}}function oR(i){var e=i.prev,t=i,n=i.next;if($t(e,t,n)>=0)return!1;for(var s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,f=o<l?o<c?o:c:l<c?l:c,h=s>r?s>a?s:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c,p=n.next;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=f&&p.y<=d&&qr(s,o,r,l,a,c,p.x,p.y)&&$t(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function lR(i,e,t,n){var s=i.prev,r=i,a=i.next;if($t(s,r,a)>=0)return!1;for(var o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,h=a.y,d=o<l?o<c?o:c:l<c?l:c,p=u<f?u<h?u:h:f<h?f:h,_=o>l?o>c?o:c:l>c?l:c,g=u>f?u>h?u:h:f>h?f:h,m=ed(d,p,e,t,n),v=ed(_,g,e,t,n),b=i.prevZ,y=i.nextZ;b&&b.z>=m&&y&&y.z<=v;){if(b.x>=d&&b.x<=_&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&qr(o,u,l,f,c,h,b.x,b.y)&&$t(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=d&&y.x<=_&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&qr(o,u,l,f,c,h,y.x,y.y)&&$t(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=m;){if(b.x>=d&&b.x<=_&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&qr(o,u,l,f,c,h,b.x,b.y)&&$t(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=v;){if(y.x>=d&&y.x<=_&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&qr(o,u,l,f,c,h,y.x,y.y)&&$t(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function cR(i,e,t){var n=i;do{var s=n.prev,r=n.next.next;!Ch(s,r)&&d_(s,n,n.next,r)&&uo(s,r)&&uo(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),fo(n),fo(n.next),n=i=r),n=n.next}while(n!==i);return hr(n)}function hR(i,e,t,n,s,r){var a=i;do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&yR(a,o)){var l=f_(a,o);a=hr(a,a.next),l=hr(l,l.next),ho(a,e,t,n,s,r,0),ho(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function uR(i,e,t,n){var s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=u_(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(vR(c));for(s.sort(dR),r=0;r<s.length;r++)t=fR(s[r],t);return t}function dR(i,e){return i.x-e.x}function fR(i,e){var t=pR(i,e);if(!t)return e;var n=f_(t,i);return hr(n,n.next),hr(t,t.next)}function pR(i,e){var t=e,n=i.x,s=i.y,r=-1/0,a;do{if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){var o=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(o<=n&&o>r&&(r=o,a=t.x<t.next.x?t:t.next,o===n))return a}t=t.next}while(t!==e);if(!a)return null;var l=a,c=a.x,u=a.y,f=1/0,h;t=a;do n>=t.x&&t.x>=c&&n!==t.x&&qr(s<u?n:r,s,c,u,s<u?r:n,s,t.x,t.y)&&(h=Math.abs(s-t.y)/(n-t.x),uo(t,i)&&(h<f||h===f&&(t.x>a.x||t.x===a.x&&mR(a,t)))&&(a=t,f=h)),t=t.next;while(t!==l);return a}function mR(i,e){return $t(i.prev,i,e.prev)<0&&$t(e.next,i,i.next)<0}function gR(i,e,t,n){var s=i;do s.z===0&&(s.z=ed(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,_R(s)}function _R(i){var e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function ed(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function vR(i){var e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function qr(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function yR(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!xR(i,e)&&(uo(i,e)&&uo(e,i)&&bR(i,e)&&($t(i.prev,i,e.prev)||$t(i,e.prev,e))||Ch(i,e)&&$t(i.prev,i,i.next)>0&&$t(e.prev,e,e.next)>0)}function $t(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ch(i,e){return i.x===e.x&&i.y===e.y}function d_(i,e,t,n){var s=wl($t(i,e,t)),r=wl($t(i,e,n)),a=wl($t(t,n,i)),o=wl($t(t,n,e));return!!(s!==r&&a!==o||s===0&&Ml(i,t,e)||r===0&&Ml(i,n,e)||a===0&&Ml(t,i,n)||o===0&&Ml(t,e,n))}function Ml(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function wl(i){return i>0?1:i<0?-1:0}function xR(i,e){var t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&d_(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function uo(i,e){return $t(i.prev,i,i.next)<0?$t(i,e,i.next)>=0&&$t(i,i.prev,e)>=0:$t(i,e,i.prev)<0||$t(i,i.next,e)<0}function bR(i,e){var t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function f_(i,e){var t=new td(i.i,i.x,i.y),n=new td(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Um(i,e,t,n){var s=new td(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function fo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function td(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Ah.deviation=function(i,e,t,n){var s=e&&e.length,r=s?e[0]*t:i.length,a=Math.abs(nd(i,0,r,t));if(s)for(var o=0,l=e.length;o<l;o++){var c=e[o]*t,u=o<l-1?e[o+1]*t:i.length;a-=Math.abs(nd(i,c,u,t))}var f=0;for(o=0;o<n.length;o+=3){var h=n[o]*t,d=n[o+1]*t,p=n[o+2]*t;f+=Math.abs((i[h]-i[p])*(i[d+1]-i[h+1])-(i[h]-i[d])*(i[p+1]-i[h+1]))}return a===0&&f===0?0:Math.abs((f-a)/a)};function nd(i,e,t,n){for(var s=0,r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}Ah.flatten=function(i){for(var e=i[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,s=0;s<i.length;s++){for(var r=0;r<i[s].length;r++)for(var a=0;a<e;a++)t.vertices.push(i[s][r][a]);s>0&&(n+=i[s-1].length,t.holes.push(n))}return t};var Nm;(i=>{function e(s){let r=s.slice();return r.sort(i.POINT_COMPARATOR),i.makeHullPresorted(r)}i.makeHull=e;function t(s){if(s.length<=1)return s.slice();let r=[];for(let o=0;o<s.length;o++){const l=s[o];for(;r.length>=2;){const c=r[r.length-1],u=r[r.length-2];if((c.x-u.x)*(l.y-u.y)>=(c.y-u.y)*(l.x-u.x))r.pop();else break}r.push(l)}r.pop();let a=[];for(let o=s.length-1;o>=0;o--){const l=s[o];for(;a.length>=2;){const c=a[a.length-1],u=a[a.length-2];if((c.x-u.x)*(l.y-u.y)>=(c.y-u.y)*(l.x-u.x))a.pop();else break}a.push(l)}return a.pop(),r.length==1&&a.length==1&&r[0].x==a[0].x&&r[0].y==a[0].y?r:r.concat(a)}i.makeHullPresorted=t;function n(s,r){return s.x<r.x?-1:s.x>r.x?1:s.y<r.y?-1:s.y>r.y?1:0}i.POINT_COMPARATOR=n})(Nm||(Nm={}));new is;new nt;const Ta=new P;function ri(i,e,t,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Ta.copy(e),Ta[n]=0,Ta.normalize();const c=.5*a/(a+o),u=1-Ta.angleTo(i)/l;return Math.sign(Ta[t])===1?u*c:o/(a+o)+c+c*(1-u)}class Rh extends Rs{constructor(e=1,t=1,n=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new P,c=new P,u=new P(e,t,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,p=f.length/6,_=new P,g=.5/a;for(let m=0,v=0;m<f.length;m+=3,v+=2)switch(l.fromArray(f,m),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),f[m+0]=u.x*Math.sign(l.x)+c.x*r,f[m+1]=u.y*Math.sign(l.y)+c.y*r,f[m+2]=u.z*Math.sign(l.z)+c.z*r,h[m+0]=c.x,h[m+1]=c.y,h[m+2]=c.z,Math.floor(m/p)){case 0:_.set(1,0,0),d[v+0]=ri(_,c,"z","y",r,n),d[v+1]=1-ri(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),d[v+0]=1-ri(_,c,"z","y",r,n),d[v+1]=1-ri(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),d[v+0]=1-ri(_,c,"x","z",r,e),d[v+1]=ri(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),d[v+0]=1-ri(_,c,"x","z",r,e),d[v+1]=1-ri(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),d[v+0]=1-ri(_,c,"x","y",r,e),d[v+1]=1-ri(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),d[v+0]=ri(_,c,"x","y",r,e),d[v+1]=1-ri(_,c,"y","x",r,t);break}}static fromJSON(e){return new Rh(e.width,e.height,e.depth,e.segments,e.radius)}}var SR=Rt("<!><!>",1),MR=Rt("<!> <!>",1);function wR(i,e){In(e,!1);let t=Ye(e,"position",24,()=>[0,0,0]);const n=new Rh(1.08,.28,.62,8,.09);As(),xt.Group(i,{get position(){return t()},children:(s,r)=>{var a=MR(),o=on(a);xt.Mesh(o,{children:(c,u)=>{var f=SR(),h=on(f);xt.BoxGeometry(h,{args:[.82,.16,.44]});var d=dt(h);xt.MeshBasicMaterial(d,{color:"#bff8ff"}),ot(c,f)},$$slots:{default:!0}});var l=dt(o,2);xt.Mesh(l,{get geometry(){return n},children:(c,u)=>{xt.MeshPhysicalMaterial(c,{color:"#eafcff",emissive:"#43d9ef",emissiveIntensity:.18,metalness:.08,roughness:.1,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:2})},$$slots:{default:!0}}),ot(s,a)},$$slots:{default:!0}}),Pn()}var TR=Rt("<!><!>",1),ER=Rt("<!> <!>",1);function Tl(i,e){In(e,!1);const t=st();let n=Ye(e,"color",8),s=Ye(e,"position",24,()=>[0,0,0]),r=Ye(e,"rotation",24,()=>[0,0,0]),a=Ye(e,"scale",8,1),o=Ye(e,"glow",8,.28);const l={cyan:"#30e7ff",pink:"#ff4aa2",yellow:"#ffe15b",green:"#63f58b",purple:"#aa66ff",orange:"#ff8a35",blue:"#4d7cff",wild:"#ffffff"},c=new Rh(.94,.42,.94,8,.1);At(()=>Me(n()),()=>{pe(t,l[n()])}),Bi(),As(),xt.Group(i,{get position(){return s()},get rotation(){return r()},get scale(){return a()},children:(u,f)=>{var h=ER(),d=on(h);xt.Mesh(d,{children:(_,g)=>{var m=TR(),v=on(m);xt.BoxGeometry(v,{args:[.72,.25,.72]});var b=dt(v);xt.MeshBasicMaterial(b,{get color(){return T(t)},transparent:!0,get opacity(){return o()}}),ot(_,m)},$$slots:{default:!0}});var p=dt(d,2);xt.Mesh(p,{get geometry(){return c},castShadow:!0,receiveShadow:!0,children:(_,g)=>{xt.MeshPhongMaterial(_,{get color(){return T(t)},specular:"#ffffff",shininess:90})},$$slots:{default:!0}}),ot(u,h)},$$slots:{default:!0}}),Pn()}const AR=3;function _I(i,e){return Math.min(20,i+(e==="cleared"?1:0))}function p_(i,e,t,n,s){const r=new Map(t.filter(_=>i.includes(_.playerId)).map(_=>[_.playerId,_])),a=Object.fromEntries(i.map(_=>[_,r.get(_)?.result==="cleared"?1:0])),o=Object.fromEntries(i.map(_=>[_,(e[_]??0)+a[_]])),l=i.length>1?i.filter(_=>o[_]>=AR):[],c=Math.min(...l.map(_=>r.get(_)?.tick??Number.MAX_SAFE_INTEGER)),u=l.filter(_=>(r.get(_)?.tick??Number.MAX_SAFE_INTEGER)===c),f=u.length>0,h=f||r.size===i.length,d=[...r.values()].filter(_=>_.result==="cleared").sort((_,g)=>_.tick-g.tick||_.seat-g.seat),p=n.filter(_=>i.includes(_));return{playerIds:i,terminalPlayerIds:[...r.keys()],readyPlayerIds:p,finished:h,winnerId:f?u.length===1?u[0]:void 0:d[0]?.playerId,winnerIds:u,allReady:h&&i.every(_=>p.includes(_)),round:s,matchComplete:f,roundPoints:a,scores:o}}const CR=Object.freeze({place:41,settle:30,burst:24,fall:22,miss:54});var zr=Rt("<!><!>",1),RR=Rt("<!><!> <!><!><!><!><!> <!> <!> <!> <!> <!> <!><!> <!> <!> <!> <!>",1),IR=Rt('<button class="svelte-1y6lvup"></button>'),PR=Rt('<div class="lanes svelte-1y6lvup"></div>'),DR=Rt("<button> </button>"),LR=Rt('<strong class="countdown svelte-1y6lvup"> </strong>'),UR=Rt('<div data-ramp-direction="far-to-player" data-roll-direction="edge-over-edge-toward-player" data-paddle-position="player-edge" data-bin-position="below-paddle" data-bin-layout="vertical-stacks"><!> <!><!><!></div>');function vI(i,e){In(e,!1);const t=st();let n=Ye(e,"state",8),s=Ye(e,"compact",8,!1),r=Ye(e,"label",8,"Stax ramp"),a=Ye(e,"selectLane",8,void 0),o=Ye(e,"onChainCue",8,void 0),l=Ye(e,"onTerminalPresentationComplete",8,void 0),c=st(!1);const u=k=>(k-2)*1.15,f=.13,h=.72,d=-.52,p=.09,_=-4.35,g=3.55,m=4.08,v=.2,b=.42,y=-1.78,w=5.35,M=-2.25,C=k=>h+p/Math.cos(f)-(k-d)*Math.tan(f),x=(k,j=!1)=>{const ce=Math.min(1,k/(j?360:T(t))),$=j?1-ce:ce,K=_+$*(g-_),me=(j?-1:1)*k*.06+f,ke=.21*Math.abs(Math.cos(me))+.47*Math.abs(Math.sin(me));return{z:K,y:C(K)+ke+.015,roll:me}},{place:E,settle:R,burst:D,fall:z}=CR;let L=st([]),O=st(),F=st([]),U=st(""),N=-1,B=-1,H=st(0),oe=0,ee=!1,ie=st(!0),Pe=0,ut=0,De=new Map,J=[];const fe=k=>Math.atan2(Math.sin(k),Math.cos(k)),re=k=>k+(Math.PI-(k%Math.PI+Math.PI)%Math.PI)%Math.PI,we=()=>{De=new Map(n().ramp.map(k=>[k.id,{color:k.color,lane:k.lane,returning:k.returning}])),J=n().paddle.map(k=>({...k})),n().columns.map(k=>k.length),n().placements},Xe=()=>{if(pe(L,T(L).filter(k=>T(H)-k.startedTick<k.durationTicks)),T(O)){const k=T(H)-T(O).startedTick,j=E+R+T(O).waves.length*(D+z);if(k>=j)pe(O,void 0);else{const ce=Math.floor(Math.max(0,k-E-R)/(D+z));k>=E+R&&ce<T(O).waves.length&&ce>=T(O).cued&&(o()?.(),Fm(O,T(O).cued=ce+1))}}},le=()=>n().phase==="cleared"||n().phase==="lost",Te=k=>{if(!le()||!T(L).length&&!T(O)){const j=!T(ie)&&le();pe(ie,!0),Pe=0,ut=0,j&&l()?.();return}ut&&pe(H,T(H)+Math.min(3,(k-ut)/(1e3/60))),ut=k,Xe(),Pe=requestAnimationFrame(Te)},Fe=()=>{pe(ie,!1),Pe||(ut=0,Pe=requestAnimationFrame(Te))};Rc(()=>()=>cancelAnimationFrame(Pe));function te(){if(!ee||n().phase==="countdown"){const K=!ee&&le();pe(L,[]),pe(O,void 0),N=-1,B=-1,pe(H,n().tick),oe=n().tick,ee=!0,pe(ie,!0),we(),K&&queueMicrotask(()=>l()?.());return}pe(H,T(H)+Math.min(1,Math.max(0,n().tick-oe))),oe=n().tick,Xe();const k=new Set(n().paddle.map(K=>K.id));for(const[K,me]of De)n().ramp.some(ke=>ke.id===K)||pe(L,[...T(L),{id:K,color:me.color,kind:k.has(K)?"catch":"miss",lane:me.lane,startedTick:T(H),durationTicks:k.has(K)?25:54,roll:fe(x(me.returning?360:T(t),me.returning).roll)}]);for(const K of n().ramp)!De.has(K.id)&&J.some(me=>me.id===K.id)&&pe(L,[...T(L),{id:K.id,color:K.color,kind:"throw",lane:K.lane,startedTick:T(H),durationTicks:30,roll:0}]);const j=n().lastPlacement,ce=!!(j&&j.placement!==N),$=n().lastClearWaves.length&&n().placements!==B;ce&&j&&(pe(L,[...T(L).filter(K=>K.id!==j.id),{id:j.id,color:j.color,kind:"place",lane:j.column,column:j.column,row:j.row,startedTick:T(H),durationTicks:E,roll:0}]),N=j.placement),$&&j&&(pe(O,{startedTick:T(H),column:j.column,placedRow:j.row,waves:structuredClone(n().lastClearWaves),cued:0}),B=n().placements),le()&&(T(L).length||T(O))?Fe():le()||pe(ie,!0),we()}const se=(k,j)=>T(L).some(ce=>ce.kind===k&&ce.id===j),he=k=>k?v-.35-(k-1)*b:v,ve=()=>{const k=T(L).find($=>$.kind==="catch");if(!k)return he(n().paddle.length);const j=Math.max(0,Math.min(1,(T(H)-k.startedTick)/k.durationTicks)),ce=Math.max(0,(j-.5)/.5);return he(Math.max(0,n().paddle.length-1))+(he(n().paddle.length)-he(Math.max(0,n().paddle.length-1)))*(1-Math.pow(1-ce,3))},xe=()=>{if(!T(O)){const Ae=T(L).find(ze=>ze.kind==="place");return n().columns.flatMap((ze,We)=>ze.flatMap((G,ye)=>Ae?.column===We&&Ae.row===ye?[]:[{key:`rest-${We}-${ye}`,color:G,column:We,y:y+ye*b,scale:1,glow:.28}]))}const k=T(H)-T(O).startedTick;if(k<E+R)return T(O).waves[0].before.flatMap((ze,We)=>ze.map((G,ye)=>({key:`form-${We}-${ye}`,color:G,column:We,y:y+ye*b,scale:We===T(O)?.column&&ye===T(O).placedRow&&k<E?0:1,glow:.28})));const j=k-E-R,ce=Math.min(T(O).waves.length-1,Math.floor(j/(D+z))),$=j%(D+z),K=T(O).waves[ce],me=new Set(K.cells.map(Ae=>`${Ae.column}:${Ae.row}`));if($<D){const Ae=$/D,ze=1+.18*Math.sin(Math.PI*Math.min(1,Ae*2)),We=Ae<.55?ze:Math.max(.05,1-(Ae-.55)/.45);return K.before.flatMap((G,ye)=>G.map((ne,be)=>({key:`burst-${ce}-${ye}-${be}`,color:ne,column:ye,y:y+be*b,scale:me.has(`${ye}:${be}`)?We:1,glow:me.has(`${ye}:${be}`)?1:.28})))}const ke=($-D)/z,Ee=ke*ke*(3-2*ke),_e=[];for(let Ae=0;Ae<5;Ae++){let ze=0;for(let We=0;We<K.before[Ae].length;We++)me.has(`${Ae}:${We}`)||(_e.push({key:`fall-${ce}-${Ae}-${We}`,color:K.before[Ae][We],column:Ae,y:y+(We+(ze-We)*Ee)*b,scale:1,glow:.28}),ze++)}return _e},Je=()=>{if(!T(O))return"";const k=T(H)-T(O).startedTick;return k<E?"placing":k<E+R?"settled":(k-E-R)%(D+z)<D?"burst":"fall"},qe=k=>{const j=Math.max(0,Math.min(1,(T(H)-k.startedTick)/k.durationTicks)),ce=1-Math.pow(1-j,3);if(k.kind==="miss"){const _e=x(T(t));return{position:[u(k.lane),_e.y-4.8*j*j,_e.z+2.8*j],rotation:[k.roll+8*j,0,.7*j]}}if(k.kind==="catch"){const _e=x(T(t)),Ae=_e.y+(v-_e.y)*ce+.16*Math.sin(Math.PI*j),ze=re(k.roll);return{position:[u(k.lane),Ae,_e.z+(m-_e.z)*ce],rotation:[k.roll+(ze-k.roll)*ce,0,0]}}if(k.kind==="throw"){const _e=n().ramp.find(We=>We.id===k.id),Ae=x(_e?.progress??Math.floor(T(t)/2)),ze=v+(Ae.y-v)*ce+1.4*Math.sin(Math.PI*j);return{position:[u(k.lane),ze,m+(Ae.z-m)*ce],rotation:[-Math.PI*2*j,0,0]}}const $=.46,K=k.column??k.lane,me=k.row??0;if(j<$){const _e=j/$;return{position:[u(k.lane)+(u(K)-u(k.lane))*_e,v+.2*Math.sin(Math.PI*_e),m+(w-m)*_e],rotation:[Math.PI*_e,0,0]}}const ke=(j-$)/(1-$),Ee=ke*ke;return{position:[u(K),v+(y+me*b-v)*Ee,w],rotation:[Math.PI,0,0]}};At(()=>Me(n()),()=>{pe(t,iv(n().level).travel)}),At(()=>Me(n()),()=>{n(),te()}),At(()=>(Me(n()),T(L),T(O),T(H)),()=>{n(),T(L),T(O),T(H),pe(F,xe())}),At(()=>(Me(n()),T(O),T(H)),()=>{n(),T(O),T(H),pe(U,Je())}),Bi(),As();var ue=UR();let Le;var V=Qt(ue);tC(V,{dpr:[1,2],children:(k,j)=>{var ce=RR(),$=on(ce);$m($,()=>T(c),lt=>{xt.PerspectiveCamera(lt,{makeDefault:!0,position:[0,6.1,12.4],rotation:[-.58,0,0],fov:43})});var K=dt($);{var me=lt=>{QC(lt,{enableDamping:!0,target:[0,-.35,.7]})};An(K,lt=>{a()&&T(c)&&lt(me)})}var ke=dt(K,2);xt.Color(ke,{attach:"background",args:["#05050a"]});var Ee=dt(ke);xt.AmbientLight(Ee,{intensity:.72});var _e=dt(Ee);xt.DirectionalLight(_e,{position:[5,10,7],intensity:4,color:"#fff0dd",castShadow:!0});var Ae=dt(_e);xt.DirectionalLight(Ae,{position:[-8,5,-5],intensity:3,color:"#cceeff"});var ze=dt(Ae);xt.SpotLight(ze,{position:[0,8,-5],intensity:10,color:"#00ffcc",angle:.5,penumbra:.5,decay:0,distance:20});var We=dt(ze,2);xt.Mesh(We,{rotation:[.13,0,0],position:[0,.72,-.52],receiveShadow:!0,children:(lt,at)=>{var Pt=zr(),Xt=on(Pt);xt.BoxGeometry(Xt,{args:[6.3,.18,8.35]});var dn=dt(Xt);xt.MeshStandardMaterial(dn,{color:"#11182b",metalness:.28,roughness:.38}),ot(lt,Pt)},$$slots:{default:!0}});var G=dt(We,2);Cn(G,0,()=>Array(6),Jn,(lt,at,Pt)=>{xt.Mesh(lt,{rotation:[.13,0,0],position:[(Pt-2.5)*1.15,.83,-.52],children:(Xt,dn)=>{var vn=zr(),Dn=on(vn);xt.BoxGeometry(Dn,{args:[.035,.035,8.2]});var Sn=dt(Dn);xt.MeshBasicMaterial(Sn,{color:"#2c4777"}),ot(Xt,vn)},$$slots:{default:!0}})});var ye=dt(G,2);Cn(ye,1,()=>(Me(n()),Se(()=>n().ramp)),lt=>lt.id,(lt,at)=>{var Pt=Qs(),Xt=on(Pt);{var dn=Dn=>{const Sn=Ii(()=>(T(at),Se(()=>x(T(at).progress,T(at).returning))));{let gr=Ii(()=>(T(at),Me(T(Sn)),Se(()=>[u(T(at).lane),T(Sn).y,T(Sn).z]))),Gi=Ii(()=>(Me(T(Sn)),Se(()=>[T(Sn).roll,0,0])));Tl(Dn,{get color(){return T(at),Se(()=>T(at).color)},get position(){return T(gr)},get rotation(){return T(Gi)}})}},vn=jt(()=>(T(at),Se(()=>!se("throw",T(at).id))));An(Xt,Dn=>{T(vn)&&Dn(dn)})}ot(lt,Pt)});var ne=dt(ye,2);xt.Mesh(ne,{position:[0,M,5.35],receiveShadow:!0,children:(lt,at)=>{var Pt=zr(),Xt=on(Pt);xt.BoxGeometry(Xt,{args:[6.3,.18,1.45]});var dn=dt(Xt);xt.MeshStandardMaterial(dn,{color:"#0b1020",metalness:.22,roughness:.42}),ot(lt,Pt)},$$slots:{default:!0}});var be=dt(ne,2);Cn(be,0,()=>Array(6),Jn,(lt,at,Pt)=>{xt.Mesh(lt,{position:[(Pt-2.5)*1.15,M+.105,5.35],children:(Xt,dn)=>{var vn=zr(),Dn=on(vn);xt.BoxGeometry(Dn,{args:[.025,.025,1.32]});var Sn=dt(Dn);xt.MeshBasicMaterial(Sn,{color:"#263d68"}),ot(Xt,vn)},$$slots:{default:!0}})});var Ie=dt(be,2);xt.Mesh(Ie,{position:[0,M+.105,4.68],children:(lt,at)=>{var Pt=zr(),Xt=on(Pt);xt.BoxGeometry(Xt,{args:[5.75,.025,.035]});var dn=dt(Xt);xt.MeshBasicMaterial(dn,{color:"#263d68"}),ot(lt,Pt)},$$slots:{default:!0}});var de=dt(Ie);xt.Mesh(de,{position:[0,M+.105,6.02],children:(lt,at)=>{var Pt=zr(),Xt=on(Pt);xt.BoxGeometry(Xt,{args:[5.75,.025,.035]});var dn=dt(Xt);xt.MeshBasicMaterial(dn,{color:"#263d68"}),ot(lt,Pt)},$$slots:{default:!0}});var Ze=dt(de,2);Cn(Ze,1,()=>T(F),lt=>lt.key,(lt,at)=>{var Pt=Qs(),Xt=on(Pt);{var dn=vn=>{{let Dn=Ii(()=>(T(at),Se(()=>[u(T(at).column),T(at).y,w])));Tl(vn,{get color(){return T(at),Se(()=>T(at).color)},get position(){return T(Dn)},get scale(){return T(at),Se(()=>T(at).scale)},get glow(){return T(at),Se(()=>T(at).glow)}})}};An(Xt,vn=>{T(at),Se(()=>T(at).scale>0)&&vn(dn)})}ot(lt,Pt)});var $e=dt(Ze,2);{let lt=Ii(()=>(Me(n()),Se(()=>[u(n().paddleLane),ve(),m])));wR($e,{get position(){return T(lt)}})}var Gt=dt($e,2);Cn(Gt,1,()=>(Me(n()),Se(()=>n().paddle)),Jn,(lt,at,Pt)=>{var Xt=Qs(),dn=on(Xt);{var vn=Sn=>{{let gr=Ii(()=>(Me(n()),Se(()=>[u(n().paddleLane),v-(n().paddle.length-1-Pt)*b,m])));Tl(Sn,{get color(){return T(at),Se(()=>T(at).color)},get position(){return T(gr)}})}},Dn=jt(()=>(T(at),Se(()=>!se("catch",T(at).id))));An(dn,Sn=>{T(Dn)&&Sn(vn)})}ot(lt,Xt)});var Nt=dt(Gt,2);Cn(Nt,1,()=>T(L),lt=>lt.kind+lt.id,(lt,at)=>{const Pt=Ii(()=>(T(at),Se(()=>qe(T(at)))));Tl(lt,{get color(){return T(at),Se(()=>T(at).color)},get position(){return Me(T(Pt)),Se(()=>T(Pt).position)},get rotation(){return Me(T(Pt)),Se(()=>T(Pt).rotation)}})}),ot(k,ce)},$$slots:{default:!0}});var Mt=dt(V,2);{var mt=k=>{var j=PR();Cn(j,4,()=>Array(5),Jn,(ce,$,K)=>{var me=IR();tt(me,"aria-label",`Catch lane ${K+1}`),Rl("pointerdown",me,qm(()=>a()?.(K))),ot(ce,me)}),Lt(j),ot(k,j)};An(Mt,k=>{a()&&!T(c)&&k(mt)})}var I=dt(Mt);{var S=k=>{var j=DR();let ce;var $=Qt(j,!0);Lt(j),Jt(()=>{ce=jn(j,1,"inspect svelte-1y6lvup",null,ce,{active:T(c)}),tt(j,"aria-label",T(c)?"Exit orbit view":"Inspect scene in orbit view"),tt(j,"aria-pressed",T(c)),Ui($,T(c)?"EXIT ORBIT":"ORBIT VIEW")}),Rl("click",j,()=>pe(c,!T(c))),ot(k,j)};An(I,k=>{a()&&k(S)})}var X=dt(I);{var q=k=>{var j=LR(),ce=Qt(j,!0);Lt(j),Jt($=>Ui(ce,$),[()=>(Me(n()),Se(()=>Math.max(1,Math.ceil(n().countdown/60))))]),ot(k,j)};An(X,k=>{Me(n()),Se(()=>n().phase==="countdown")&&k(q)})}Lt(ue),Jt((k,j,ce,$,K)=>{Le=jn(ue,1,"scene svelte-1y6lvup",null,Le,{compact:s()}),tt(ue,"aria-label",r()),tt(ue,"data-tick",(Me(n()),Se(()=>n().tick))),tt(ue,"data-phase",(Me(n()),Se(()=>n().phase))),tt(ue,"data-resolution-phase",T(U)),tt(ue,"data-terminal-presentation",T(ie)?"complete":"playing"),tt(ue,"data-paddle-lane",(Me(n()),Se(()=>n().paddleLane))),tt(ue,"data-paddle-count",(Me(n()),Se(()=>n().paddle.length))),tt(ue,"data-paddle-y",k),tt(ue,"data-ramp-count",(Me(n()),Se(()=>n().ramp.length))),tt(ue,"data-leading-lane",(Me(n()),Se(()=>n().ramp[0]?.lane??""))),tt(ue,"data-leading-color",(Me(n()),Se(()=>n().ramp[0]?.color??""))),tt(ue,"data-leading-progress",(Me(n()),Se(()=>n().ramp[0]?.progress??""))),tt(ue,"data-leading-roll",j),tt(ue,"data-column-counts",ce),tt(ue,"data-rendered-board-count",(T(F),Se(()=>T(F).length))),tt(ue,"data-misses",(Me(n()),Se(()=>n().misses))),tt(ue,"data-visual-transitions",$),tt(ue,"data-visual-progress",K),tt(ue,"data-score",(Me(n()),Se(()=>n().score)))},[()=>Se(ve),()=>(Me(n()),Se(()=>n().ramp[0]?x(n().ramp[0].progress,n().ramp[0].returning).roll:"")),()=>(Me(n()),Se(()=>n().columns.map(k=>k.length).join(","))),()=>(T(L),Se(()=>T(L).map(k=>k.kind).join(","))),()=>(T(L),T(H),Se(()=>T(L)[0]?Math.floor(T(H)-T(L)[0].startedTick):""))]),ot(i,ue),Pn()}function NR(i){if(!bt(i)||!St(i,["type","roomId","ruleset","rulesVersion","seed","tickRate","hostUid","audioOutput","members","players","settings","matchId","round","previousGameId","scores","serverTime"])||i.type!=="game/started"||i.ruleset!=="stax"||i.rulesVersion!=="stax/1"||i.tickRate!==60||!Ct(i.seed,0,4294967295)||!Ct(i.round,0,2)||!yt(i.matchId)||!yt(i.hostUid)||!yt(i.roomId)||!zi(i.serverTime)||!bt(i.members)||!bt(i.players)||!bt(i.scores)||!bt(i.settings)||!St(i.settings,["width","height","targetWins","matchRounds"])||i.settings.width!==5||i.settings.height!==5||i.settings.targetWins!==3||i.settings.matchRounds!==3||i.previousGameId!==void 0&&!yt(i.previousGameId)||i.audioOutput!=="cast"&&i.audioOutput!=="controllers")throw new Error("Invalid Stax start record.");const e=i.members,t=i.players,n=i.scores,s=Object.keys(t);if(s.length<1||s.length>4||!Object.entries(e).every(([r,a])=>yt(r)&&a===!0)||!Object.entries(t).every(([r,a])=>yt(r)&&e[r]===!0&&bt(a)&&St(a,["seat","level"])&&Ct(a.seat,0,3)&&Ct(a.level,0,20))||!St(n,s)||!s.every(r=>Ct(n[r],0,12)))throw new Error("Invalid Stax roster or scores.");return i}function m_(i){if(!bt(i)||!St(i,["type","playerId","tick","result","score","misses","seat","stateHash","serverTime"])||i.type!=="player/terminal"||!yt(i.playerId)||!Ct(i.tick,0)||!["cleared","lost"].includes(String(i.result))||!Ct(i.score,0,1e9)||!Ct(i.misses,0,5)||!Ct(i.seat,0,3)||typeof i.stateHash!="string"||!/^s1-[0-9a-f]{8}$/.test(i.stateHash)||!zi(i.serverTime))throw new Error("Invalid Stax terminal record.");return i}function OR(i,e,t=!1){const n=md(i,e,t),s=bt(n.payload)?n.payload:{};if(n.type==="input/move"&&St(s,["dx"])&&(s.dx===-1||s.dx===1))return{commandId:i,...n,type:n.type,payload:{dx:s.dx}};if(["input/place","input/throw-back","input/accelerate-start","input/accelerate-end","input/restart"].includes(n.type)&&St(s,[]))return{commandId:i,...n,type:n.type,payload:{}};if(n.type==="progress/tick"&&St(s,["phase","stateHash"])&&["countdown","playing","cleared","lost"].includes(String(s.phase))&&typeof s.stateHash=="string"&&/^s1-[0-9a-f]{8}$/.test(s.stateHash))return{commandId:i,...n,type:n.type,payload:{phase:s.phase,stateHash:s.stateHash}};throw new Error("Invalid Stax controller payload.")}const na=NR,Ac=OR,g_=(i,e)=>sv(i.seed,e),__=av,v_=rv,y_=Xm,FR=(i,e,t,n)=>ov(i,e,t,n);async function yI(i){if(!ge)throw new Error("Firebase unavailable.");return na((await _t(Oe(ge,`games/${i}/start`))).val())}function kR(i,e,t){if(!ge)throw new Error("Firebase unavailable.");let n,s=[],r=[];const a=[],o=()=>{n&&e(p_(Object.keys(n.players),n.scores??{},s,r,n.round))};return _t(Oe(ge,`games/${i}/start`)).then(l=>{n=na(l.val()),a.push(ui(Oe(ge,`games/${i}/terminals`),c=>{s=[],c.forEach(u=>{const f=m_(u.val());f.playerId===u.key&&Object.hasOwn(n.players,u.key)&&s.push(f)}),o()},t),ui(Oe(ge,`games/${i}/rematch/ready`),c=>{r=[],c.forEach(u=>{u.val()?.playerId===u.key&&Object.hasOwn(n.players,u.key)&&r.push(u.key)}),o()},t)),o()}).catch(l=>t(l instanceof Error?l:new Error(String(l)))),()=>a.forEach(l=>l())}const xI=(i,e)=>Nc(i,e);async function BR(i){if(!ge)throw new Error("Firebase unavailable.");const[e,t]=await Promise.all([_t(Oe(ge,`games/${i}/start`)),_t(Oe(ge,`games/${i}/terminals`))]),n=na(e.val()),s=[];t.forEach(a=>{s.push(m_(a.val()))});const r=p_(Object.keys(n.players),n.scores,s,[],n.round);return Oc(i,na,a=>{const o=Object.keys(a.players).length===1,l=Object.fromEntries(Object.keys(a.players).map(u=>[u,r.scores[u]??0])),c=!o&&r.matchComplete;return{advance:!o&&!c,round:o?0:Math.min(2,a.round+1),scores:o||c?Object.fromEntries(Object.keys(a.players).map(u=>[u,0])):l}})}function bI(i,e){if(!hi?.currentUser||!ge)throw new Error("Firebase unavailable.");const t=hi.currentUser.uid,n=new Cs(Wm.tickRate),s=vd("stax",i,t,"outbox");let r,a,o=0,l=0,c=!1,u=!1,f=!1,h=!1,d=0,p=-1,_,g,m,v=!1,b=[],y=()=>{},w=!1;const M=vo(localStorage,s,N=>{if(!N||typeof N!="object"||typeof N.commandId!="string")throw new Error("Invalid Stax Match outbox.");const{commandId:B,...H}=N;return Ac(B,H,!0)}),C=N=>e({playerId:t,tick:o,ready:c,state:r?structuredClone(r):void 0,lifecycle:m,audioOutput:g,error:N,lastCommand:_,ownershipConflict:v,opponents:b.map(B=>({...B,state:structuredClone(B.state)}))}),x=new kc(ge,`games/${i}/players/${t}/writer`,()=>{v=!0,c=!1,cancelAnimationFrame(d),C("This controller was taken over by another tab.")}),E=kR(i,N=>{m=N,N.finished&&cancelAnimationFrame(d),N.allReady&&!h&&(h=!0,BR(i).catch(B=>{h=!1,C(B instanceof Error?B.message:String(B))})),C()},N=>C(N.message)),R=new Xa({initial:M,order:(N,B)=>N.clientSeq-B.clientSeq,identify:N=>N.commandId,persist:N=>yo(localStorage,s,N),deliver:async N=>{if(!c)throw new Error("Controller is not ready.");const{commandId:B,...H}=N;await oi(Oe(ge,`games/${i}/players/${t}/records/${B}`),{...H,serverTime:li()})},failed:N=>C(N instanceof Error?N.message:String(N))}),D=N=>{const H={commandId:Ga(Oe(ge,`games/${i}/players/${t}/records`)).key,playerId:t,epochId:x.epochId,clientSeq:++l,tick:o,...N};return R.enqueue(H),H},z=(N=!1)=>{!r||!N&&o-p<15||(D({type:"progress/tick",payload:{phase:r.phase,stateHash:y_(r)}}),p=o)},L=()=>{!r||w||!["cleared","lost"].includes(r.phase)||!a||(w=!0,oi(Oe(ge,`games/${i}/terminals/${t}`),{type:"player/terminal",playerId:t,tick:r.tick,result:r.phase,score:r.score,misses:r.misses,seat:a.players[t].seat,stateHash:Xm(r),serverTime:li()}).catch(N=>{w=!1,C(N.message)}))},O=N=>{if(u||f||!c||!r||r.phase==="cleared"||r.phase==="lost"||m?.terminalPlayerIds.includes(t))return;for(let H=n.consume(N);H>0;H--)__(r),o=r.tick;z();const B=r.phase;if(B==="cleared"||B==="lost"){z(!0),C();return}C(),d=requestAnimationFrame(O)},F=ui(Oe(ge,`games/${i}/start`),async N=>{if(!c)try{if(a=na(N.val()),!a.players[t])throw new Error("Player is not part of this Stax Match game.");if(g=a.audioOutput,!await x.claim())throw v=!0,new Error("This controller is already active in another tab.");v=!1,y(),y=zR(i,ee=>{b=ee.filter(ie=>ie.playerId!==t),C()},ee=>C(ee.message));const B=await _t(Oe(ge,`games/${i}/players/${t}/records`)),H=new Map;B.forEach(ee=>{const ie=Ac(ee.key,ee.val());H.set(ie.commandId,ie)});for(const ee of R.values())H.set(ee.commandId,ee);const oe=[...H.values()].sort((ee,ie)=>ee.clientSeq-ie.clientSeq);r=FR(g_(a,a.players[t].level),Math.max(0,...oe.map(ee=>ee.tick)),oe,a.seed),o=r.tick,l=Math.max(0,...oe.map(ee=>ee.clientSeq)),await Fc(ge,i,t,x.epochId,x.clientId,o,l),c=!0,R.flush(),z(!0),C(),r.phase==="cleared"||r.phase==="lost"?L():d=requestAnimationFrame(O)}catch(B){C(B instanceof Error?B.message:String(B))}},N=>C(N.message)),U=()=>{R.flush()};return window.addEventListener("online",U),{command(N){!c||!r||r.phase!=="playing"||!a||(D(N),v_(r,N,a.seed),o=r.tick,_=`${N.type} · tick ${o}`,(r.phase==="cleared"||r.phase==="lost")&&z(!0),C())},suspend(){!c||f||(f=!0,cancelAnimationFrame(d),n.reset(),z(!0))},resume(){!c||!f||(f=!1,n.reset(),d=requestAnimationFrame(O))},async takeOver(){await x.takeOver()&&(v=!1,c=!0,f=!1,R.flush(),d=requestAnimationFrame(O),C())},destroy(){z(!0),u=!0,F(),E(),y(),cancelAnimationFrame(d),window.removeEventListener("online",U),R.destroy(),x.release()},finishPresentation(){L()}}}function zR(i,e,t){if(!ge)throw new Error("Firebase unavailable.");let n=!1,s=0,r;const a=new Cs(Wm.tickRate),o=new Map,l=new Map,c=[],u={clone:h=>structuredClone(h),tick:h=>h.tick,advanceTo:(h,d)=>{for(;h.tick<d&&h.phase!=="cleared"&&h.phase!=="lost";)__(h)},apply:(h,d)=>{d.type!=="progress/tick"&&v_(h,d,r.seed)},hash:y_,phase:h=>h.phase,terminal:h=>h.phase==="cleared"||h.phase==="lost",progress:h=>h.type==="progress/tick"?h.payload:void 0},f=()=>e([...l].map(([h,d])=>{const p=d.snapshot();return{playerId:h,tick:p.displayTick,controllerTick:p.controllerTick,lag:p.lag,state:p.state,hashMatches:p.hashMatches}}));return _t(Oe(ge,`games/${i}/start`)).then(async h=>{r=na(h.val());let d=0;if(await Promise.all(Object.keys(r.players).map(async _=>{const g=await _t(Oe(ge,`games/${i}/players/${_}/records`)),m=[];g.forEach(v=>{m.push(Ac(v.key,v.val()))}),m.sort((v,b)=>v.clientSeq-b.clientSeq),o.set(_,m);for(const v of m)v.type==="progress/tick"&&(d=Math.max(d,v.tick))})),n)return;for(const _ of Object.keys(r.players)){const g=new Uc(u,g_(r,r.players[_].level),d);l.set(_,g);for(const m of o.get(_)??[])g.receive(m);c.push(ns(Oe(ge,`games/${i}/players/${_}/records`),m=>{try{g.receive(Ac(m.key,m.val())),f()}catch(v){t(v instanceof Error?v:new Error(String(v)))}},t))}const p=_=>{if(!n){for(let g=a.consume(_);g>0;g--)for(const m of l.values())m.advance();f(),s=requestAnimationFrame(p)}};f(),s=requestAnimationFrame(p)}).catch(h=>t(h instanceof Error?h:new Error(String(h)))),()=>{n=!0,cancelAnimationFrame(s),c.forEach(h=>h())}}export{cI as C,jR as G,JR as M,eI as P,lI as Q,fI as S,sI as T,tI as a,QR as b,my as c,fy as d,iI as e,hI as f,Mv as g,Uy as h,Dy as i,oI as j,yI as k,zR as l,kR as m,vI as n,nI as o,aI as p,dI as q,rI as r,iy as s,uI as t,bI as u,_I as v,xI as w,Ll as x};
