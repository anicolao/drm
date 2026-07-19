import{b as wv,a as ot,s as ti,e as di,f as bt,c as Gr,o as Tv}from"./DCR833OP.js";import{i as Ji}from"./CtYjPAzH.js";import{g as Ev,w as Nr,o as bc,a as Av,r as Cv,d as Rv}from"./Ctpka_qS.js";import{V as Nm,W as Iv,h as _u,b as Pv,be as Dv,bf as Ef,ak as Lv,at as Af,ax as Cf,as as Rf,a as If,bg as Uv,r as Nv,p as vn,s as ge,g as C,C as zt,y as Te,E as Li,B as nn,i as tt,d as _n,m as lt,f as It,j as yt,t as Yt,aU as hn,u as Re,F as Gi,bh as _i,ai as mi,w as vs,bi as oi,aj as jt,bj as Ml,al as Ju,am as us,q as fn,G as ju}from"./BXAQ_QY8.js";import{B as Om,p as Xe,i as un,r as ao,s as Qu,a as Ov,b as Pf}from"./D8ScO0sd.js";import{s as Fv}from"./BlezxWyg.js";import{L as kv,e as Cn,i as ei,b as ed,P as Ct,r as Bv,a as aa,p as wh,d as zv,f as Vv,h as wo,j as Gv,T as Fm,k as yu,l as km,m as Bm,n as zm,o as Hv,q as Df,Q as Vm,t as Wv,u as Xv,v as qv,w as $v,x as Yv,y as Zv,z as Kv,A as Jv,B as jv,D as Qv,E as e_,S as Gm,F as Hm,G as t_,H as n_,I as i_,J as s_}from"./CR0TpxUW.js";import{w as r_,s as st,r as Lf,d as jn,j as ii,k as Uf,l as ve,x as Mt,o as Ne,y as wl,m as Mn,n as wn,p as a_,t as o_,q as l_,z as ji,A as Nf,B as si,C as Hr}from"./BYSbxV1H.js";import{b as Tl}from"./DJNVUrOB.js";import{b as Of,p as Wm}from"./DoDhgRV8.js";function Sc(i,e,...t){var n=new Om(i);Nm(()=>{const s=e()??null;n.ensure(s,s&&(r=>s(r,...t)))},Iv)}const c_=Symbol("NaN");function Xm(i,e,t){_u&&Pv();var n=new Om(i),s=!Dv();Nm(()=>{var r=e();r!==r&&(r=c_),s&&r!==null&&typeof r=="object"&&(r={}),n.ensure(r,t)})}function xu(i,e,t,n){var s=i[Ef];if(_u||s!==e){var r=r_(e);(!_u||r!==i.getAttribute("style"))&&(r==null?i.removeAttribute("style"):i.style.cssText=r),i[Ef]=e}return n}function td(i,e){var t=If,n=Cf,s=i();const r=Nr(s,a=>{var o=s!==i(),l,c=Cf,u=If;Af(n),Rf(t);try{l=Uv(()=>{Nv(()=>{const d=i();o&&a(d)})})}finally{Af(c),Rf(u)}return o=!0,l});return e?{set:e,update:a=>e(a(i())),subscribe:r.subscribe}:{subscribe:r.subscribe}}function Mc(i){let e;const t=wv(s=>{let r=!1;const a=i.subscribe(o=>{e=o,r&&s()});return r=!0,a});function n(){return Lv()?(t(),e):Ev(i)}return"set"in i?{get current(){return n()},set current(s){i.set(s)}}:{get current(){return n()}}}let dr;var h_=bt('<section class="mixer svelte-4qorxz" aria-label="Audio settings"><div class="svelte-4qorxz"><strong>MUSIC</strong><button class="svelte-4qorxz"> </button></div> <label class="svelte-4qorxz">Music volume <input aria-label="Music volume" type="range" min="0" max="100" class="svelte-4qorxz"/></label> <div class="svelte-4qorxz"><strong>EFFECTS</strong><button class="svelte-4qorxz"> </button></div> <label class="svelte-4qorxz">Effects volume <input aria-label="Effects volume" type="range" min="0" max="100" class="svelte-4qorxz"/></label></section>'),u_=bt('<div class="audio-controls svelte-4qorxz"><button class="mute svelte-4qorxz"> </button> <button class="settings-toggle svelte-4qorxz" aria-label="Audio settings">MIX</button> <!></div>'),d_=bt('<button class="start svelte-4qorxz" aria-label="Enable game audio">♪ TAP FOR SOUND</button>'),f_=bt("<!> <!>",1);function oo(i,e){vn(e,!1);let t=Xe(e,"enabled",8,!1),n=Xe(e,"loopUrl",8,void 0),s=Xe(e,"loopKey",8,""),r=Xe(e,"cueUrl",8,void 0),a=Xe(e,"cueSignal",8,0);const o=Symbol("audio-host");let l,c,u=lt(!1),d=lt(!1),h=lt(!1),f=lt(42),p=lt(62),v=lt(!1),g=lt(!1),m="",_=0,b=!1;function y(z){z&&(z.pause(),z.currentTime=0)}function w(){y(l),dr?.owner===o&&(dr=void 0),l=void 0,m=""}async function M(z){try{return await z.play(),ge(v,!1),!0}catch{return ge(v,!0),!1}}function A(z){dr&&dr.owner!==o&&y(dr.audio),dr={owner:o,audio:z}}function x(){localStorage.setItem("drm-audio-muted",String(C(u))),localStorage.setItem("drm-audio-settings",JSON.stringify({musicMuted:C(d),effectsMuted:C(h),musicVolume:C(f),effectsVolume:C(p)}))}function T(){if(b){if(!t()||C(u)){w(),y(c),c=void 0,ge(v,!1),_=a();return}!C(d)&&n()?m!==s()||!l?(w(),l=new Audio(n()),l.loop=!0,l.preload="auto",l.volume=C(f)/100,m=s(),A(l),M(l)):l.volume=C(f)/100:w(),!C(h)&&r()&&a()>_&&(y(c),c=new Audio(r()),c.preload="auto",c.volume=C(p)/100,M(c)),_=a()}}async function I(){l&&(A(l),await M(l)),c&&await M(c)}function D(){ge(u,!C(u)),x(),T()}function k(){x(),T()}bc(()=>{ge(u,localStorage.getItem("drm-audio-muted")==="true");try{const W=JSON.parse(localStorage.getItem("drm-audio-settings")??"{}");ge(d,W.musicMuted===!0),ge(h,W.effectsMuted===!0),Number.isFinite(W.musicVolume)&&ge(f,Math.max(0,Math.min(100,W.musicVolume))),Number.isFinite(W.effectsVolume)&&ge(p,Math.max(0,Math.min(100,W.effectsVolume)))}catch{}b=!0,T();const z=()=>{C(v)&&I()};return window.addEventListener("pointerdown",z,!0),window.addEventListener("keydown",z,!0),()=>{window.removeEventListener("pointerdown",z,!0),window.removeEventListener("keydown",z,!0)}}),Av(()=>{w(),y(c)}),zt(()=>(Te(t()),Te(n()),Te(s()),Te(r()),Te(a()),C(d),C(h),C(f),C(p)),()=>{t(),n(),s(),r(),a(),C(d),C(h),C(f),C(p),T()}),Li(),Ji();var L=f_(),V=nn(L);{var O=z=>{var W=u_(),ie=It(W),Q=It(ie);yt(ie);var re=tt(ie,2),Pe=tt(re,2);{var dt=at=>{var ee=h_(),_e=It(ee),de=tt(It(_e)),He=It(de,!0);yt(de),yt(_e);var je=tt(_e,2),te=tt(It(je));Lf(te),yt(je);var we=tt(je,2),Le=tt(It(we)),ae=It(Le,!0);yt(Le),yt(we);var he=tt(we,2),ue=tt(It(he));Lf(ue),yt(he),yt(ee),Yt(()=>{st(de,"aria-label",C(d)?"Unmute music":"Mute music"),st(de,"aria-pressed",C(d)),ti(He,C(d)?"OFF":"ON"),st(Le,"aria-label",C(h)?"Unmute effects":"Mute effects"),st(Le,"aria-pressed",C(h)),ti(ae,C(h)?"OFF":"ON")}),di("click",de,()=>{ge(d,!C(d)),k()}),Of(te,()=>C(f),be=>ge(f,be)),di("input",te,k),di("click",Le,()=>{ge(h,!C(h)),k()}),Of(ue,()=>C(p),be=>ge(p,be)),di("input",ue,k),ot(at,ee)};un(Pe,at=>{C(g)&&at(dt)})}yt(W),Yt(()=>{st(ie,"aria-label",C(u)?"Unmute game audio":"Mute game audio"),st(ie,"aria-pressed",C(u)),ti(Q,`♫ ${C(u)?"SOUND OFF":"SOUND ON"}`),st(re,"aria-expanded",C(g))}),di("click",ie,D),di("click",re,()=>ge(g,!C(g))),ot(z,W)};un(V,z=>{t()&&z(O)})}var N=tt(V,2);{var F=z=>{var W=d_();di("click",W,I),ot(z,W)};un(N,z=>{t()&&C(v)&&!C(u)&&z(F)})}ot(i,L),_n()}const p_=""+new URL("../assets/05. Chill.C8foJhTx.mp3",import.meta.url).href,m_=""+new URL("../assets/06. Chill Clear.-oz0izif.mp3",import.meta.url).href,g_=""+new URL("../assets/03. Fever.DOR2z6Jo.mp3",import.meta.url).href,v_=""+new URL("../assets/04. Fever Clear.DCfLhPTS.mp3",import.meta.url).href,Ff=""+new URL("../assets/12. Combo Fanfare 1.CrabW0Of.mp3",import.meta.url).href;function tI(i,e){vn(e,!1);const t=lt(),n=lt();let s=Xe(e,"state",8),r=Xe(e,"enabled",8,!1),a=Xe(e,"rainSignal",8,0),o=lt(),l=lt(0),c=lt(0),u=lt();const d=h=>h%2?{music:g_,clear:v_}:{music:p_,clear:m_};bc(()=>{const h=()=>{ge(u,Ff),hn(c)},f=p=>{ge(u,d(p.detail).clear),hn(c)};return window.addEventListener("drm-rain",h),window.addEventListener("drm-clear",f),()=>{window.removeEventListener("drm-rain",h),window.removeEventListener("drm-clear",f)}}),zt(()=>Te(s()),()=>{ge(t,s()?.phase==="playing"?d(s().level).music:void 0)}),zt(()=>Te(s()),()=>{ge(n,s()?`pill:${s().level}`:"")}),zt(()=>(Te(s()),Te(a()),C(l),C(c),C(o)),()=>{s()&&(a()>C(l)?(ge(u,Ff),hn(c)):s().phase==="countdown"&&C(o)==="playing"&&(ge(u,d(s().level).clear),hn(c)),ge(l,a()),ge(o,s().phase))}),Li(),Ji(),oo(i,{get enabled(){return r()},get loopUrl(){return C(t)},get loopKey(){return C(n)},get cueUrl(){return C(u)},get cueSignal(){return C(c)}}),_n()}var __=bt('<button class="svelte-e6s17f"> </button>'),y_=bt('<small class="svelte-e6s17f"> </small>'),x_=bt('<div class="match-result svelte-e6s17f" role="status" aria-live="polite"><h1 class="svelte-e6s17f"> </h1><!> <!> <!> <!></div>');function nI(i,e){vn(e,!1);let t=Xe(e,"title",8,"GAME OVER"),n=Xe(e,"action",8,"PLAY AGAIN"),s=Xe(e,"ready",8,0),r=Xe(e,"total",8,0),a=Xe(e,"disabled",8,!1),o=Xe(e,"interactive",8,!0),l=Xe(e,"level",8,0),c=Xe(e,"changeLevel",8,()=>{}),u=Xe(e,"activate",8,()=>{});bc(()=>{const w=M=>{!a()&&M.key.toLowerCase()==="a"&&!M.repeat&&(M.preventDefault(),u()())};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)}),Ji();var d=x_(),h=It(d),f=It(h,!0);yt(h);var p=tt(h);Fv(p,e,"default",{});var v=tt(p,2);{var g=w=>{kv(w,{get level(){return l()},get disabled(){return a()},get change(){return c()},get activate(){return u()}})};un(v,w=>{o()&&w(g)})}var m=tt(v,2);{var _=w=>{var M=__(),A=It(M,!0);yt(M),Yt(()=>{M.disabled=a(),ti(A,n())}),di("click",M,function(...x){u()?.apply(this,x)}),ot(w,M)};un(m,w=>{o()&&w(_)})}var b=tt(m,2);{var y=w=>{var M=y_(),A=It(M);yt(M),Yt(()=>ti(A,`${s()??""}/${r()??""} ready`)),ot(w,M)};un(b,w=>{r()>0&&w(y)})}yt(d),Yt(()=>ti(f,t())),ot(i,d),_n()}var b_=bt('<li class="svelte-18574qx"><span class="rank svelte-18574qx"></span><strong class="svelte-18574qx"> </strong><b class="svelte-18574qx"> </b></li>'),S_=bt('<section class="match-standings svelte-18574qx" aria-label="Final standings"><h2 class="svelte-18574qx">FINAL STANDINGS</h2> <ol class="svelte-18574qx"></ol></section>');function iI(i,e){let t=Xe(e,"entries",24,()=>[]);var n=S_(),s=tt(It(n),2);Cn(s,5,t,ei,(r,a,o)=>{var l=b_(),c=It(l);c.textContent=o+1;var u=tt(c),d=It(u,!0);yt(u);var h=tt(u),f=It(h,!0);yt(h),yt(l),Yt(()=>{ti(d,(C(a),Re(()=>C(a).name))),ti(f,(C(a),Re(()=>C(a).score)))}),ot(r,l)}),yt(s),yt(n),ot(i,n)}function bu(i){let e=i|0;return e^=e<<13,e^=e>>>17,e^=e<<5,e>>>0}function M_(i){return i>>>0||1}const Bt=8,qn=16,cn=(i,e)=>i*Bt+e;function Ta(i){return i.rng=bu(i.rng),i.rng/4294967296}function w_(i){const e=bu(i.rng),t=bu(e);return[e,t].map(n=>Ct.colors[Math.floor(n/4294967296*Ct.colors.length)])}function nd(i){return{0:[[0,0],[0,1]],1:[[0,0],[-1,0]],2:[[0,1],[0,0]],3:[[-1,0],[0,0]]}[i.orientation].map(([t,n])=>[i.row+t,i.col+n])}function id(i,e){return nd(e).every(([t,n])=>t>=0&&t<qn&&n>=0&&n<Bt&&!i.board[cn(t,n)])}function T_(i){for(let e=0;e<qn;e++)for(let t=0;t<Bt;t++){const n=i[cn(e,t)];if(n&&(t<=Bt-4&&[1,2,3].every(s=>i[cn(e,t+s)]?.color===n.color)||e<=qn-4&&[1,2,3].every(s=>i[cn(e+s,t)]?.color===n.color)))return!0}return!1}function qm(i){i.softDrop=!1;const e={id:i.nextId++,row:Ct.spawn.row,col:Ct.spawn.col,orientation:0,colors:[Ct.colors[Math.floor(Ta(i)*Ct.colors.length)],Ct.colors[Math.floor(Ta(i)*Ct.colors.length)]]};i.active=id(i,e)?e:null,i.active||(i.phase="lost")}function E_(i){return Math.min(Ct.maxVirusCount,(i+1)*Ct.virusesPerLevel)}function A_(i){return Math.max(Ct.minimumGravityTicks,Ct.initialGravityTicks-i.level*Ct.gravityTicksPerLevel-Math.floor(i.pills/Ct.pillsPerSpeedIncrease))}function $m(i){i.board.fill(null),i.active=null,i.pills=0,i.gravityCounter=0,i.viruses=E_(i.level),i.phase="playing",i.softDrop=!1,i.chain=0,i.resolving=!1,delete i.resolutionLineColors,delete i.pendingRain,delete i.fallingRain,delete i.rainGravityCounter,delete i.countdownEndsAt;let e=0,t=0;for(;e<i.viruses&&t++<1e5;){const n=Ct.virusRowStart+Math.floor(Ta(i)*(Ct.virusRowEnd-Ct.virusRowStart+1)),s=Math.floor(Ta(i)*Bt),r=cn(n,s);if(!i.board[r]){if(i.board[r]={kind:"virus",color:Ct.colors[Math.floor(Ta(i)*Ct.colors.length)],id:`l${i.level}v${e}`},T_(i.board)){i.board[r]=null;continue}e++}}i.viruses=e,qm(i)}function sd(i,e=0,t=0){const n={rulesVersion:ed,tick:0,level:t,pills:0,gravityCounter:0,board:Array(Bt*qn).fill(null),active:null,rng:M_(i),nextId:1,viruses:0,phase:"playing",softDrop:!1,chain:0,resolving:!1};return $m(n),n}function rd(i){const e=new Set,t=[];for(let s=0;s<qn;s++)for(let r=0;r<Bt;r++){const a=i.board[cn(s,r)];if(a){if(r===0||i.board[cn(s,r-1)]?.color!==a.color){const o=[cn(s,r)];for(let l=r+1;l<Bt&&i.board[cn(s,l)]?.color===a.color;l++)o.push(cn(s,l));o.length>=4&&(o.forEach(l=>e.add(l)),t.push(a.color))}if(s===0||i.board[cn(s-1,r)]?.color!==a.color){const o=[cn(s,r)];for(let l=s+1;l<qn&&i.board[cn(l,r)]?.color===a.color;l++)o.push(cn(l,r));o.length>=4&&(o.forEach(l=>e.add(l)),t.push(a.color))}}}const n=[];for(const s of[...e].sort((r,a)=>r-a))i.board[s]?.kind==="virus"&&(n.push(i.board[s].color),i.viruses--),i.board[s]=null;return e.size&&i.viruses===0&&(i.phase="countdown",i.countdownEndsAt=i.tick+Ct.levelCountdownTicks,i.active=null,i.softDrop=!1,i.resolving=!1),e.size>0?{lineColors:t}:void 0}function Su(i){const e=i.resolutionLineColors??[];return delete i.resolutionLineColors,e.length>0?[{type:"clear",tick:i.tick,chain:i.chain,lineColors:e}]:[]}function wc(i){const e=i.pendingRain?.shift();if(i.pendingRain?.length===0&&delete i.pendingRain,!e){qm(i);return}const t=e.colors.map((n,s)=>({attackId:e.attackId,item:s,color:n,column:e.columns[s],row:0}));if(t.some(n=>i.board[cn(0,n.column)])){i.phase="lost",i.active=null,i.softDrop=!1;return}i.fallingRain=t,i.rainGravityCounter=0}function C_(i){const e=i.fallingRain;if(!e||(i.rainGravityCounter=(i.rainGravityCounter??0)+1,i.rainGravityCounter<Ct.rainGravityTicks))return;i.rainGravityCounter=0;const t=[];for(const s of e){const r=s.row+1;r>=qn||i.board[cn(r,s.column)]?i.board[cn(s.row,s.column)]={kind:"pill",color:s.color,id:`g${s.attackId}-${s.item}x`}:t.push({...s,row:r})}if(t.length>0){i.fallingRain=t;return}delete i.fallingRain,delete i.rainGravityCounter,rd(i)?(i.chain=1,i.phase==="playing"&&(i.resolving=!0)):wc(i)}function R_(i){const e=new Map;i.board.forEach((c,u)=>{if(c?.kind!=="pill")return;const d=c.id.slice(0,-1),h=e.get(d)??[];h.push(u),e.set(d,h)});const t=[];for(const c of e.values())c.length===2&&Math.abs(Math.floor(c[0]/Bt)-Math.floor(c[1]/Bt))+Math.abs(c[0]%Bt-c[1]%Bt)===1?t.push(c):c.forEach(d=>t.push([d]));const n=new Map;t.forEach((c,u)=>c.forEach(d=>n.set(d,u)));const s=t.map((c,u)=>u).sort((c,u)=>Math.max(...t[u])-Math.max(...t[c])),r=new Set;let a=!0;for(;a;){a=!1;for(const c of s){if(r.has(c))continue;t[c].every(d=>{if(Math.floor(d/Bt)===qn-1)return!1;const h=d+Bt,f=n.get(h);return f===c||!i.board[h]||f!==void 0&&r.has(f)})&&(r.add(c),a=!0)}}const o=[...r].flatMap(c=>t[c]),l=o.map(c=>({from:c,to:c+Bt,cell:i.board[c]}));return l.forEach(({from:c})=>{i.board[c]=null}),l.forEach(({to:c,cell:u})=>{i.board[c]=u}),o.length>0}function Ym(i){if(!i.active)return[];const e=i.active;nd(e).forEach(([n,s],r)=>{i.board[cn(n,s)]={kind:"pill",color:e.colors[r],id:`p${e.id}${r}`}}),i.active=null,i.pills++,i.gravityCounter=0,i.chain=0;const t=rd(i);return t?(i.resolutionLineColors=[...t.lineColors],i.chain=1,i.phase==="playing"&&(i.resolving=!0)):wc(i),t&&!i.resolving?Su(i):[]}function Mu(i,e,t){if(!i.active)return!1;const n={...i.active,row:i.active.row+e,col:i.active.col+t};return id(i,n)?(i.active=n,delete i.active.groundedAt,!0):!1}function I_(i,e){i.phase==="playing"&&(i.pendingRain=[...i.pendingRain??[],{attackId:e.payload.attackId,colors:[...e.payload.colors],columns:[...e.payload.columns]}],!i.active&&!i.resolving&&!i.fallingRain&&wc(i))}function Wr(i,e){if(e.type==="attack/rain")return I_(i,e),[];if(i.phase!=="playing"||!i.active)return[];if(e.type==="input/move")Mu(i,0,e.payload.dx);else if(e.type==="input/rotate"){const t=i.active.orientation%2===1,n=e.payload.direction==="clockwise"?1:3,s=(i.active.orientation+n)%4,r=[{...i.active,orientation:s}];t?r.push({...i.active,col:i.active.col-1,orientation:s}):r.push({...i.active,col:i.active.col+1,orientation:s},{...i.active,col:i.active.col-1,orientation:s});const a=r.find(o=>id(i,o));a&&(i.active=a,delete i.active.groundedAt)}else if(e.type==="input/soft-drop-start")i.softDrop=!0;else if(e.type==="input/soft-drop-end")i.softDrop=!1;else if(e.type==="input/hard-drop"&&Ct.hardDrop){for(;Mu(i,1,0););return Ym(i)}return[]}function ad(i){if(i.phase==="lost")return[];if(i.tick++,i.phase==="countdown")return i.countdownEndsAt!==void 0&&i.tick>=i.countdownEndsAt&&(i.level++,$m(i)),[];if(i.resolving){if(i.tick%Ct.resolutionGravityTicks!==0)return[];if(R_(i))return[];const t=rd(i);return t?(i.resolutionLineColors&&(i.resolutionLineColors=[...i.resolutionLineColors,...t.lineColors]),i.chain++,i.resolving?[]:Su(i)):(i.resolving=!1,wc(i),Su(i))}if(i.fallingRain)return C_(i),[];if(!i.active)return[];const e=i.softDrop?Ct.softDropTicks:A_(i);return i.gravityCounter++,i.gravityCounter>=e&&(i.gravityCounter=0,Mu(i,1,0)||(i.active.groundedAt??=i.tick)),i.active?.groundedAt!==void 0&&i.tick-i.active.groundedAt>=Ct.lockDelayTicks?Ym(i):[]}function P_(i){return i.active?nd(i.active).map(([e,t],n)=>({row:e,col:t,cell:{kind:"pill",color:i.active.colors[n],id:`a${i.active.id}${n}`}})):[]}function D_(i){return(i.fallingRain??[]).map(e=>({row:e.row,col:e.column,cell:{kind:"pill",color:e.color,id:`g${e.attackId}-${e.item}x`}}))}const L_=2,U_=4;function N_(i){return i.lineColors.length>=L_?i.lineColors.slice(0,U_):[]}function O_(i){let e=2166136261;for(const t of i)e^=t.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0}function F_(i,e){const t=Array.from({length:Bt},(s,r)=>r);let n=O_(i);for(let s=t.length-1;s>0;s--){n=Math.imul(n,1664525)+1013904223>>>0;const r=n%(s+1);[t[s],t[r]]=[t[r],t[s]]}return t.slice(0,Math.min(e,Bt))}function Zm(i,e,t,n,s){const r=e.filter(({playerId:p})=>i.includes(p)),a=Object.fromEntries(r.map(({playerId:p,result:v})=>[p,v])),o=Object.fromEntries(r.map(({playerId:p,tick:v})=>[p,v])),l=Object.keys(a),c=new Set(l),u=t.filter(p=>i.includes(p)),d=i.length===1?c.size===1:c.size>=i.length-1,h=i.filter(p=>!c.has(p)),f=d&&h.length===1?h[0]:void 0;return{playerIds:i,terminalPlayerIds:l,readyPlayerIds:u,finished:d,winnerId:f,draw:d&&i.length>1&&f===void 0,allReady:d&&i.every(p=>u.includes(p)),terminalResults:a,terminalTicks:o,round:n,matchComplete:d&&(i.length===1||n+1>=s),roundPoints:Object.fromEntries(i.map(p=>[p,0])),scores:Object.fromEntries(i.map(p=>[p,0]))}}function k_(i,e,t){const n=Math.min(e,t??e);return i.reduce((s,r)=>r.tick<=n?Math.max(s,r.tick):s,0)}function Km(i,e,t,n=0){return Zm(i,e,t,n,Ct.matchRounds)}function od(i,e,t){if(!Number.isInteger(e)||e<i.tick)throw new Error("Target tick must not precede the current state.");const n=new Map;for(const a of t){const o=n.get(a.commandId);if(o&&JSON.stringify(o)!==JSON.stringify(a))throw new Error(`Conflicting replay command identity: ${a.commandId}`);n.set(a.commandId,a)}const s=[...n.values()].sort((a,o)=>a.tick-o.tick||a.clientSeq-o.clientSeq||a.commandId.localeCompare(o.commandId));let r=0;for(;r<s.length&&s[r].tick<i.tick;)r++;for(;i.tick<=e;){for(;r<s.length&&s[r].tick===i.tick;)Wr(i,s[r].input),r++;if(i.tick===e)break;const a=i.tick;if(ad(i),i.tick===a)break}return i}function Tc(i){return{rulesVersion:i.rulesVersion,tick:i.tick,level:i.level,pills:i.pills,gravityCounter:i.gravityCounter,...i.countdownEndsAt===void 0?{}:{countdownEndsAt:i.countdownEndsAt},board:i.board.map(e=>e?{...e}:null),active:i.active?{...i.active,colors:[...i.active.colors]}:null,rng:i.rng,nextId:i.nextId,viruses:i.viruses,phase:i.phase,softDrop:i.softDrop,chain:i.chain,resolving:i.resolving,...i.resolutionLineColors?.length?{resolutionLineColors:[...i.resolutionLineColors]}:{},...i.pendingRain?.length?{pendingRain:i.pendingRain.map(e=>({attackId:e.attackId,colors:[...e.colors],columns:[...e.columns]}))}:{},...i.fallingRain?.length?{fallingRain:i.fallingRain.map(e=>({...e}))}:{},...i.rainGravityCounter===void 0?{}:{rainGravityCounter:i.rainGravityCounter}}}const lo=["cyan","pink","yellow"],ln=(i,e=0)=>Number.isInteger(i)&&i>=e,co=(i,e)=>Object.keys(i).every(t=>e.includes(t)),B_=i=>{if(!i||typeof i!="object")return!1;const e=i;return co(e,["kind","color","id"])&&(e.kind==="virus"||e.kind==="pill")&&lo.includes(e.color)&&typeof e.id=="string"&&e.id.length>0&&e.id.length<=160},z_=i=>{if(!i||typeof i!="object")return!1;const e=i;return co(e,["id","row","col","orientation","colors","groundedAt"])&&ln(e.id,1)&&ln(e.row)&&ln(e.col)&&[0,1,2,3].includes(e.orientation)&&Array.isArray(e.colors)&&e.colors.length===2&&e.colors.every(t=>lo.includes(t))&&(e.groundedAt===void 0||ln(e.groundedAt))},V_=i=>{if(!i||typeof i!="object")return!1;const e=i;return co(e,["attackId","colors","columns"])&&typeof e.attackId=="string"&&e.attackId.length<=128&&Array.isArray(e.colors)&&e.colors.length>=2&&e.colors.length<=4&&e.colors.every(t=>lo.includes(t))&&Array.isArray(e.columns)&&e.columns.length===e.colors.length&&e.columns.every(t=>ln(t)&&t<Bt)&&new Set(e.columns).size===e.columns.length},G_=i=>{if(!i||typeof i!="object")return!1;const e=i;return co(e,["attackId","item","color","column","row"])&&typeof e.attackId=="string"&&e.attackId.length<=128&&ln(e.item)&&e.item<4&&lo.includes(e.color)&&ln(e.column)&&e.column<Bt&&ln(e.row)&&e.row<qn};function H_(i){if(!i||typeof i!="object")throw new Error("Invalid serialized bottle state.");const e=i;if(!co(e,["rulesVersion","tick","level","pills","gravityCounter","countdownEndsAt","board","active","rng","nextId","viruses","phase","softDrop","chain","resolving","resolutionLineColors","pendingRain","fallingRain","rainGravityCounter"])||e.rulesVersion!==ed||!ln(e.tick)||!ln(e.level)||!ln(e.pills)||!ln(e.gravityCounter)||e.countdownEndsAt!==void 0&&(!ln(e.countdownEndsAt)||e.countdownEndsAt<e.tick)||!Array.isArray(e.board)||e.board.length!==Bt*qn||!e.board.every(t=>t===null||B_(t))||e.active!==null&&!z_(e.active)||!ln(e.rng)||e.rng>4294967295||!ln(e.nextId,1)||!ln(e.viruses)||e.viruses>80||!["playing","countdown","lost"].includes(e.phase)||e.phase==="countdown"!=(e.countdownEndsAt!==void 0)||typeof e.softDrop!="boolean"||!ln(e.chain)||typeof e.resolving!="boolean"||e.resolutionLineColors!==void 0&&(!Array.isArray(e.resolutionLineColors)||!e.resolutionLineColors.every(t=>lo.includes(t)))||e.pendingRain!==void 0&&(!Array.isArray(e.pendingRain)||!e.pendingRain.every(V_))||e.fallingRain!==void 0&&(!Array.isArray(e.fallingRain)||e.fallingRain.length<1||e.fallingRain.length>4||!e.fallingRain.every(G_))||e.rainGravityCounter!==void 0&&(!ln(e.rainGravityCounter)||e.rainGravityCounter>=Ct.rainGravityTicks)||e.fallingRain===void 0!=(e.rainGravityCounter===void 0))throw new Error("Invalid serialized bottle state.");return e}function ld(i){return Tc(H_(i))}function ka(i){const e=JSON.stringify(Tc(i));let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return`pb3-${(t>>>0).toString(16).padStart(8,"0")}`}class Ec{adapter;displayTick;state;checkpoint;pending=new Map;identities=new Map;controllerTick;reportedStateHash;hashMatches=!0;constructor(e,t,n=0){this.adapter=e,this.displayTick=n,this.state=e.clone(t),this.checkpoint={clientSeq:0,tick:e.tick(t),state:e.clone(t)},e.advanceTo(this.state,n)}receive(e){const t=JSON.stringify(e),n=this.identities.get(e.commandId);if(n&&n!==t)throw new Error(`Conflicting controller record identity: ${e.commandId}`);if(n||(this.identities.set(e.commandId,t),e.clientSeq<=this.checkpoint.clientSeq))return;const s=this.pending.get(e.clientSeq);if(s&&JSON.stringify(s)!==t)throw new Error(`Conflicting controller sequence: ${e.clientSeq}`);this.pending.set(e.clientSeq,e),this.adapter.progress(e)&&(this.controllerTick===void 0||e.tick>=this.controllerTick)&&(this.controllerTick=e.tick),this.processAvailable()}advance(){this.displayTick++,this.adapter.advanceTo(this.state,this.displayTick),this.processAvailable()}snapshot(){return{displayTick:this.displayTick,controllerTick:this.controllerTick,lag:this.controllerTick===void 0?void 0:this.displayTick-this.controllerTick,state:this.adapter.clone(this.state),stateHash:this.adapter.hash(this.state),reportedStateHash:this.reportedStateHash,hashMatches:this.hashMatches}}processAvailable(){for(;;){const e=this.pending.get(this.checkpoint.clientSeq+1);if(!e||e.tick>this.displayTick)return;if(e.tick<this.checkpoint.tick)throw new Error("Controller record tick precedes its checkpoint.");const t=this.adapter.clone(this.checkpoint.state);if(this.adapter.advanceTo(t,e.tick),this.adapter.tick(t)!==e.tick){if(!this.adapter.terminal?.(t))throw new Error("Controller record could not reach its declared tick.");const s=this.adapter.progress(e);s&&(this.reportedStateHash=s.stateHash,this.hashMatches=!1),this.checkpoint={clientSeq:e.clientSeq,tick:this.adapter.tick(t),state:this.adapter.clone(t)},this.pending.delete(e.clientSeq),this.state=t;continue}const n=this.adapter.progress(e);n?(this.reportedStateHash=n.stateHash,this.hashMatches=this.adapter.hash(t)===n.stateHash&&this.adapter.phase(t)===n.phase):this.adapter.apply(t,e),this.checkpoint={clientSeq:e.clientSeq,tick:e.tick,state:this.adapter.clone(t)},this.pending.delete(e.clientSeq),this.adapter.advanceTo(t,this.displayTick),this.state=t}}}function W_(i,e){for(;i.tick<e&&i.phase!=="lost";)ad(i)}class X_ extends Ec{constructor(e,t=0){super({clone:n=>ld(Tc(n)),tick:n=>n.tick,advanceTo:W_,apply:(n,s)=>{s.type!=="progress/tick"&&Wr(n,s)},hash:ka,phase:n=>n.phase,terminal:n=>n.phase==="lost",progress:n=>n.type==="progress/tick"?n.payload:void 0},e,t)}}function q_(i,e){od(i,e.tick,[]),e.type!=="progress/tick"&&Wr(i,e)}function kf(i,e,t,n,s){const r=i.players[e];if(!r)return 0;const a=k_(t,n,s),o=sd(i.seed,r.seat,r.level);for(const l of t){if(l.tick>a)break;q_(o,l)}return o.tick<a&&o.phase!=="lost"&&od(o,a,[]),o.viruses}function Jm(i,e,t){const n=Object.fromEntries(e.playerIds.map(r=>[r,0])),s=e.playerIds.filter(r=>e.terminalResults[r]==="cleared");for(const r of s){const a=e.terminalTicks[r];for(const o of e.playerIds)o!==r&&(n[r]+=kf(i,o,t.get(o)??[],a,e.terminalTicks[o]))}if(s.length===0&&e.finished&&e.winnerId)for(const r of e.terminalPlayerIds){if(e.terminalResults[r]!=="lost")continue;const a=e.terminalTicks[r];n[e.winnerId]+=kf(i,r,t.get(r)??[],a,a)}return n}var $_=bt('<canvas class="preview-pill svelte-1jw6p41" width="40" height="20"></canvas>'),Y_=bt('<div class="next-pill svelte-1jw6p41"><!></div>'),Z_=bt('<div class="bottle-shell svelte-1jw6p41"><!> <canvas width="184" height="360"></canvas></div>');function sI(i,e){vn(e,!1);const t=lt();let n=Xe(e,"state",8),s=Xe(e,"label",8,"Pill bottle"),r=Xe(e,"showPreview",8,!0),a=lt(),o=lt(),l="",c=lt(""),u="",d;const h=10,f=6,p=11,v=2,g={cyan:"#39d9e6",pink:"#ff4f91",yellow:"#ffd84a"};function m(L){return L.kind==="pill"?L.id.slice(0,-1):""}function _(L,V){const O=f+V.col*h,N=p+V.row*h;L.fillStyle="#08090d",L.beginPath(),L.roundRect(O+.25,N+1.25,9.5,7,3),L.fill(),L.fillRect(O+2,N+.25,2.25,2.5),L.fillRect(O+5.75,N+.25,2.25,2.5),L.fillRect(O+1.25,N+7,2.75,2.5),L.fillRect(O+6,N+7,2.75,2.5),L.fillStyle=g[V.color],L.beginPath(),L.roundRect(O+1.25,N+2,7.5,5.5,2),L.fill(),L.fillRect(O+2.75,N+1,1.25,2),L.fillRect(O+6,N+1,1.25,2),L.fillRect(O+2,N+7,1.5,1.5),L.fillRect(O+6.5,N+7,1.5,1.5),L.fillStyle="rgba(255,255,255,.34)",L.fillRect(O+2,N+2.25,5.75,.75),L.fillStyle="#08090d",L.fillRect(O+2.5,N+4,1.5,1.75),L.fillRect(O+6,N+4,1.5,1.75),L.fillRect(O+4.25,N+6.25,1.5,.75)}function b(L,V,O){return L===1?[O,0,0,O]:L===-1?[0,O,O,0]:V===1?[O,O,0,0]:V===-1?[0,0,O,O]:O}function y(L,V,O,N=f,F=p){const z=O.find(de=>de!==V&&m(de)===m(V)),W=z?.col===V.col?0:(z?.col??V.col)-V.col,ie=z?.row===V.row?0:(z?.row??V.row)-V.row,Q=N+V.col*h,re=F+V.row*h,Pe=b(W,ie,4);L.fillStyle="#08090d",L.beginPath(),L.roundRect(Q,re,10,10,Pe),L.fill();const dt=Q+(W===-1?0:1.25),at=re+(ie===-1?0:1.25),ee=W===0?7.5:8.75,_e=ie===0?7.5:8.75;L.fillStyle=g[V.color],L.beginPath(),L.roundRect(dt,at,ee,_e,b(W,ie,3)),L.fill(),L.save(),L.beginPath(),L.roundRect(dt,at,ee,_e,b(W,ie,3)),L.clip(),ie!==-1&&(L.fillStyle="rgba(255,255,255,.38)",L.fillRect(Q+(W===-1?0:1.75),re+1.75,W===0?6.5:8.25,1.25)),ie!==1&&(L.fillStyle="rgba(0,0,0,.28)",L.fillRect(Q+(W===-1?0:1.75),re+7.25,W===0?6.5:8.25,1.25)),L.restore(),L.fillStyle="#08090d",W===1&&L.fillRect(Q+9.75,re+1.25,.5,7.5),ie===1&&L.fillRect(Q+1.25,re+9.75,7.5,.5)}function w(){if(!C(o)||n().phase!=="playing")return;const L=C(o).getContext("2d");if(!L)return;L.setTransform(1,0,0,1,0,0),L.clearRect(0,0,C(o).width,C(o).height),L.setTransform(v,0,0,v,0,0);const V=[{id:"previewa",kind:"pill",color:C(t)[0],row:0,col:0},{id:"previewb",kind:"pill",color:C(t)[1],row:0,col:1}];for(const O of V)y(L,O,V,0,0)}function M(){if(!C(a))return;const L=`${n().phase}|${n().board.map(N=>N?`${N.id}:${N.color}`:"").join(",")}|${n().active?`${n().active.id}:${n().active.row}:${n().active.col}:${n().active.orientation}:${n().active.colors.join(":")}`:""}|${n().fallingRain?.map(N=>`${N.attackId}:${N.item}:${N.row}`).join(",")??""}`;if(L===l)return;l=L;const V=C(a).getContext("2d");if(!V)return;V.setTransform(1,0,0,1,0,0),V.clearRect(0,0,C(a).width,C(a).height),V.setTransform(v,0,0,v,0,0),V.imageSmoothingEnabled=!0,V.fillStyle="#606477",V.fillRect(26,0,40,3),V.fillRect(26,0,3,11),V.fillRect(63,0,3,11),V.fillRect(3,8,86,169),V.fillStyle="#08090d",V.fillRect(6,11,80,163),V.fillStyle="#050609",V.fillRect(89,13,3,164),V.fillRect(8,177,84,3),V.fillStyle="#0d0f14";for(let N=1;N<Bt;N++)V.fillRect(f+N*h,p,.35,qn*h);for(let N=1;N<qn;N++)V.fillRect(f,p+N*h,Bt*h,.35);const O=[];n().board.forEach((N,F)=>{N&&O.push({...N,row:Math.floor(F/Bt),col:F%Bt})});for(const N of P_(n()))O.push({...N.cell,row:N.row,col:N.col});for(const N of D_(n()))O.push({...N.cell,row:N.row,col:N.col});for(const N of O)N.kind==="virus"?_(V,N):y(V,N,O);w()}function A(){if(!C(a))return;const L=n().board.filter(W=>W?.id.startsWith("g")).length,V=`${n().viruses}:${n().pills}:${n().phase}:${L}`;if(!u){u=V;return}if(V===u)return;const[O,N,F,z]=u.split(":");u=V,ge(c,L>Number(z)?"rain":n().viruses<Number(O)?"clear":n().phase!==F?"finish":n().pills>Number(N)?"lock":""),C(c)&&(d&&clearTimeout(d),d=setTimeout(()=>ge(c,""),420))}bc(()=>(M(),A(),()=>{d&&clearTimeout(d)})),zt(()=>Te(n()),()=>{ge(t,w_(n()))}),zt(()=>Te(n()),()=>{n(),M(),A()}),Li(),Ji();var x=Z_(),T=It(x);{var I=L=>{var V=Y_(),O=It(V);{var N=F=>{var z=$_();Tl(z,W=>ge(o,W),()=>C(o)),ot(F,z)};un(O,F=>{Te(n()),Re(()=>n().phase==="playing")&&F(N)})}yt(V),Yt(()=>{st(V,"aria-label",(C(t),Re(()=>`Next pill: ${C(t)[0]} and ${C(t)[1]}`))),st(V,"aria-hidden",(Te(n()),Re(()=>n().phase!=="playing")))}),ot(L,V)};un(T,L=>{r()&&L(I)})}var D=tt(T,2);let k;Tl(D,L=>ge(a,L),()=>C(a)),yt(x),Yt((L,V,O)=>{k=jn(D,1,"bottle svelte-1jw6p41",null,k,{clear:C(c)==="clear",lock:C(c)==="lock",finish:C(c)==="finish",rain:C(c)==="rain"}),st(D,"aria-label",s()),st(D,"data-cell-count",Bt*qn),st(D,"data-virus-count",(Te(n()),Re(()=>n().viruses))),st(D,"data-next-colors",L),st(D,"data-active-pill",(Te(n()),Re(()=>n().active?"true":"false"))),st(D,"data-active-pill-id",(Te(n()),Re(()=>n().active?.id??""))),st(D,"data-pending-rain-count",(Te(n()),Re(()=>n().pendingRain?.length??0))),st(D,"data-rain-rows",V),st(D,"data-garbage-count",O)},[()=>(C(t),Re(()=>C(t).join(","))),()=>(Te(n()),Re(()=>n().fallingRain?.map(L=>L.row).join(",")??"")),()=>(Te(n()),Re(()=>n().board.filter(L=>L?.id.startsWith("g")).length))]),ot(i,x),_n()}class Ss{lastTime;accumulator=0;tickRate;maximumCatchUpMs;constructor(e,t=250){if(!Number.isFinite(e)||e<=0)throw new Error("Tick rate must be positive.");this.tickRate=e,this.maximumCatchUpMs=t}consume(e){if(this.lastTime===void 0)return this.lastTime=e,0;this.accumulator+=Math.min(Math.max(0,e-this.lastTime),this.maximumCatchUpMs),this.lastTime=e;const t=1e3/this.tickRate,n=Math.floor(this.accumulator/t);return this.accumulator-=n*t,n}reset(){this.lastTime=void 0,this.accumulator=0}}async function Ac(i,e){if(!ii?.currentUser||!ve)throw new Error("Firebase is unavailable.");const t=ii.currentUser.uid,n=Ne(ve,`games/${i}/rematch/ready/${t}`);if(!Number.isInteger(e)||e<0||e>20)throw new Error("Level must be between 0 and 20.");(await Mt(n)).exists()||await Mn(n,{playerId:t,level:e,serverTime:wn()})}async function Cc(i,e,t){if(!ii?.currentUser||!Uf||!ve)throw new Error("Firebase is unavailable.");const n=await Mt(Ne(ve,`games/${i}/start`));if(!n.exists())throw new Error("The previous game no longer exists.");const s=e(n.val());if(!s.players[ii.currentUser.uid])return;const r=await Mt(Ne(ve,`games/${i}/rematch/ready`)),a=new Map;if(r.forEach(f=>{const p=f.val();p?.playerId===f.key&&Number.isInteger(p.level)&&a.set(p.playerId,p.level)}),!Object.keys(s.players).every(f=>a.has(f)))return;const o=crypto.randomUUID(),l=Ne(ve,`games/${i}/rematch/nextGameId`),c=await wl(l,f=>f===null?o:void 0,{applyLocally:!1}),u=c.committed?c.snapshot.val():(await Mt(l)).val();if(typeof u!="string")throw new Error("Could not reserve the rematch.");const d=t(s),h=Ne(ve,`games/${u}/start`);try{await Mn(h,{type:"game/started",roomId:s.roomId,ruleset:s.ruleset,rulesVersion:s.rulesVersion,seed:Bv(),tickRate:s.tickRate,hostUid:s.hostUid,members:s.members,players:Object.fromEntries(Object.entries(s.players).map(([f,p])=>[f,{...p,level:s.ruleset==="quarry-match"?Math.max(...a.values()):a.get(f)}])),settings:d.settings??s.settings,audioOutput:s.audioOutput,...d.scores??s.scores?{scores:d.scores??s.scores}:{},matchId:d.advance?s.matchId:u,round:d.advance?s.round+1:0,previousGameId:i,serverTime:wn()})}catch(f){const p=await Mt(h).catch(()=>{});if(!p?.exists()||e(p.val()).roomId!==s.roomId)throw f}return await a_(o_(Uf,"rooms",s.roomId),{status:"active",activeGameId:u,startedAt:l_()}),u}function K_(i,e,t,n,s,r=!1){let a=!1,o=()=>{};return(async()=>{try{const l=Ne(i,`games/${e}/interactions`),c=await Mt(l),u=new Set;if(r||c.forEach(d=>{u.add(d.key)}),a)return;o=ji(l,d=>{try{const h=t(d.val());u.delete(d.key)||n(h,d.key)}catch(h){s(h instanceof Error?h:new Error(String(h)))}},s)}catch(l){s(l instanceof Error?l:new Error(String(l)))}})(),()=>{a=!0,o()}}function J_(i=globalThis.localStorage){const e=crypto.randomUUID();try{const t=i?.getItem("drm-client-id");if(t)return t;i?.setItem("drm-client-id",e)}catch{}return e}class Rc{epochId=crypto.randomUUID();clientId=J_();owned=!1;unsubscribe=()=>{};database;path;lost;constructor(e,t,n){this.database=e,this.path=t,this.lost=n}async claim(e=!1){const t=Ne(this.database,this.path),n=await wl(t,s=>e||s===null||s?.epochId===this.epochId?{epochId:this.epochId,clientId:this.clientId}:void 0,{applyLocally:!1});return this.owned=n.committed&&n.snapshot.val()?.epochId===this.epochId,this.owned?(await Nf(t).remove(),this.unsubscribe(),this.unsubscribe=si(t,s=>{this.owned&&s.val()?.epochId!==this.epochId&&(this.owned=!1,this.lost())}),!0):!1}async takeOver(){return this.claim(!0)}async release(){this.unsubscribe();const e=Ne(this.database,this.path);await Nf(e).cancel(),await wl(e,t=>t?.epochId===this.epochId?null:t,{applyLocally:!1}),this.owned=!1}async suspend(){this.owned&&(await Mn(Ne(this.database,this.path),null),this.owned=!1)}get ownsWriter(){return this.owned}}class Ba{options;items;flushing=!1;retry;destroyed=!1;constructor(e){this.options=e,this.items=[...e.initial].sort(e.order)}enqueue(e){this.items.some(t=>this.options.identify(t)===this.options.identify(e))||(this.items=[...this.items,e].sort(this.options.order),this.options.persist(this.items),this.flush())}async flush(){if(!(this.flushing||this.destroyed)){this.flushing=!0;try{for(;this.items.length&&!this.destroyed;){const e=this.items[0];await this.options.deliver(e);const t=this.options.identify(e);this.items=this.items.filter(n=>this.options.identify(n)!==t),this.options.persist(this.items)}}catch(e){this.options.failed?.(e),!this.retry&&!this.destroyed&&(this.retry=setTimeout(()=>{this.retry=void 0,this.flush()},this.options.retryMilliseconds??1e3))}finally{this.flushing=!1}}}values(){return[...this.items]}destroy(){this.destroyed=!0,this.retry&&clearTimeout(this.retry)}}const St=i=>!!i&&typeof i=="object"&&!Array.isArray(i),xt=(i,e)=>Object.keys(i).every(t=>e.includes(t)),At=(i,e=0,t=1e9)=>Number.isInteger(i)&&i>=e&&i<=t,vt=(i,e=128)=>typeof i=="string"&&i.length>0&&i.length<=e,Ui=i=>typeof i=="number"&&Number.isFinite(i)&&i>=0;function cd(i,e,t=!1){const n=t?["type","playerId","epochId","clientSeq","tick","payload"]:["type","playerId","epochId","clientSeq","tick","payload","serverTime"];if(!St(e)||!xt(e,n)||!vt(i)||!vt(e.playerId)||!vt(e.epochId)||!At(e.clientSeq,1)||!At(e.tick)||!t&&!Ui(e.serverTime))throw new Error("Invalid controller record envelope.");return e}function j_(i,e){const t=St(e)?e:{};if(i==="input/move"&&xt(t,["dx"])&&(t.dx===-1||t.dx===1))return{type:i,payload:{dx:t.dx}};if(i==="input/rotate"&&xt(t,["direction"])&&(t.direction==="clockwise"||t.direction==="counterclockwise"))return{type:i,payload:{direction:t.direction}};if((i==="input/soft-drop-start"||i==="input/soft-drop-end"||i==="input/hard-drop")&&xt(t,[]))return{type:i,payload:{}};throw new Error("Invalid pill command input.")}function ho(i){if(!St(i)||!xt(i,["type","roomId","ruleset","rulesVersion","seed","tickRate","hostUid","audioOutput","members","players","settings","matchId","round","previousGameId","serverTime"])||i.type!=="game/started"||i.ruleset!=="pill-bottle"||i.rulesVersion!==ed||i.tickRate!==Ct.tickRate||!vt(i.roomId)||!vt(i.hostUid)||i.audioOutput!==void 0&&i.audioOutput!=="cast"&&i.audioOutput!=="controllers"||i.matchId!==void 0&&!vt(i.matchId)||i.round!==void 0&&!At(i.round,0,Ct.matchRounds-1)||i.previousGameId!==void 0&&!vt(i.previousGameId)||!At(i.seed,0,4294967295)||!Ui(i.serverTime)||!St(i.members)||!St(i.players)||!St(i.settings))throw new Error("Invalid pill-bottle/3 start record.");const e=i.members,t=Object.entries(e),n=Object.entries(i.players),s=n.map(([,a])=>St(a)?a.seat:void 0),r=i.settings;if(t.length<1||t.length>4||!t.every(([a,o])=>vt(a)&&o===!0)||e[i.hostUid]!==!0||n.length<1||n.length>4||!n.every(([a,o])=>vt(a)&&St(o)&&xt(o,["seat","level"])&&At(o.seat,0,3)&&At(o.level,0,20)&&e[a]===!0)||new Set(s).size!==s.length||!xt(r,["initialVirusCount","initialGravityTicks","hardDrop","matchRounds"])||r.initialVirusCount!==aa.initialVirusCount||r.initialGravityTicks!==aa.initialGravityTicks||r.hardDrop!==aa.hardDrop||r.matchRounds!==void 0&&r.matchRounds!==aa.matchRounds)throw new Error("Invalid pill-bottle/3 start definition.");return{...i,audioOutput:i.audioOutput??"controllers",settings:{...r,matchRounds:aa.matchRounds},matchId:i.matchId??i.roomId,round:i.round??0}}function Js(i,e,t={}){const n=t.pending?["type","playerId","epochId","clientSeq","tick","payload"]:["type","playerId","epochId","clientSeq","tick","payload","serverTime"];if(!St(e)||!xt(e,n)||!vt(i)||!vt(e.playerId)||!vt(e.epochId)||!At(e.clientSeq,1)||!At(e.tick)||!t.pending&&!Ui(e.serverTime))throw new Error("Invalid pill controller record.");const s={commandId:i,playerId:e.playerId,epochId:e.epochId,clientSeq:e.clientSeq,tick:e.tick};if(e.type==="attack/rain"){if(!St(e.payload)||!xt(e.payload,["attackId","colors","columns"])||!vt(e.payload.attackId)||!Array.isArray(e.payload.colors)||!Array.isArray(e.payload.columns)||e.payload.colors.length<2||e.payload.colors.length>4||e.payload.colors.length!==e.payload.columns.length||!e.payload.colors.every(a=>["cyan","pink","yellow"].includes(a))||!e.payload.columns.every(a=>At(a,0,7))||new Set(e.payload.columns).size!==e.payload.columns.length)throw new Error("Invalid pill rain attack.");return{...s,type:e.type,payload:e.payload,...t.pending?{}:{serverTime:e.serverTime}}}if(e.type==="progress/tick"){if(!St(e.payload)||!xt(e.payload,["phase","stateHash"])||!["playing","countdown","lost"].includes(e.payload.phase)||typeof e.payload.stateHash!="string"||!/^pb3-[0-9a-f]{8}$/.test(e.payload.stateHash))throw new Error("Invalid pill progress command.");return{...s,type:e.type,payload:{phase:e.payload.phase,stateHash:e.payload.stateHash},...t.pending?{}:{serverTime:e.serverTime}}}const r=j_(e.type,e.payload);return{...s,...r,...t.pending?{}:{serverTime:e.serverTime}}}function jm(i){if(!St(i)||!xt(i,["type","playerId","tick","result","stateHash","serverTime"])||i.type!=="player/terminal"||!vt(i.playerId)||!At(i.tick)||!["cleared","lost"].includes(i.result)||typeof i.stateHash!="string"||!/^pb3-[0-9a-f]{8}$/.test(i.stateHash)||!Ui(i.serverTime))throw new Error("Invalid pill terminal declaration.");return i}function Q_(i){if(!St(i)||!xt(i,["playerId","level","serverTime"])||!vt(i.playerId)||!At(i.level,0,20)||!Ui(i.serverTime))throw new Error("Invalid pill rematch readiness.");return i}function hd(i){if(!St(i)||!xt(i,["type","attackId","sourcePlayerId","sourceTick","sourceChain","targetPlayerIds","colors","serverTime"])||i.type!=="attack/generated"||!vt(i.attackId)||!vt(i.sourcePlayerId)||!At(i.sourceTick)||!At(i.sourceChain,1,100)||!Array.isArray(i.targetPlayerIds)||i.targetPlayerIds.length<1||i.targetPlayerIds.length>3||!i.targetPlayerIds.every(e=>vt(e))||new Set(i.targetPlayerIds).size!==i.targetPlayerIds.length||!Array.isArray(i.colors)||i.colors.length<2||i.colors.length>4||!i.colors.every(e=>["cyan","pink","yellow"].includes(e))||!Ui(i.serverTime))throw new Error("Invalid pill attack interaction.");return i}function uo(i,e,t){try{const n=JSON.parse(i.getItem(e)??"[]");return Array.isArray(n)?n.map(t):[]}catch{return[]}}function fo(i,e,t){i.setItem(e,JSON.stringify(t))}function ey(i,e,t){try{const n=JSON.parse(i.getItem(e)??"null");return n===null?void 0:t(n)}catch{return}}function ty(i,e,t){i.setItem(e,JSON.stringify(t))}function ud(i,e,t,n){return`drm-game:${i}:${e}:${t}:${n}`}const ea=(i,e)=>`drm-pill-bottle:${i}:${e}`;function ny(i,e){return uo(localStorage,`${ea(i,e)}:outbox`,t=>{if(!t||typeof t!="object"||typeof t.commandId!="string")throw new Error("Invalid local controller outbox.");const{commandId:n,...s}=t;return Js(n,s,{pending:!0})})}function iy(i,e,t){fo(localStorage,`${ea(i,e)}:outbox`,t)}function sy(i,e){return uo(localStorage,`${ea(i,e)}:attacks`,t=>{if(!t||typeof t!="object"||typeof t.interactionId!="string")throw new Error("Invalid local attack outbox.");const{interactionId:n,...s}=t,{serverTime:r,...a}=hd({...s,serverTime:0});return{interactionId:n,...a}})}function ry(i,e,t){fo(localStorage,`${ea(i,e)}:attacks`,t)}function Bf(i,e,t,n){const s={commandId:t.commandId,clientSeq:t.clientSeq,tick:t.tick,state:Tc(n),stateHash:ka(n)};ty(localStorage,`${ea(i,e)}:checkpoint`,s)}function ay(i,e){return ey(localStorage,`${ea(i,e)}:checkpoint`,t=>{const n=t;if(!n||typeof n.commandId!="string"||!Number.isInteger(n.clientSeq)||!Number.isInteger(n.tick)||typeof n.stateHash!="string")throw new Error("Invalid local checkpoint.");const s=ld(n.state);if(s.tick!==n.tick||ka(s)!==n.stateHash)throw new Error("Invalid local checkpoint state.");return n})}function Qm(i,e,t){if(!ve)throw new Error("Firebase is unavailable.");let n=!1,s=[],r=[],a=[],o=0,l,c={};const u=new Map,d=[],h=()=>{if(s.length===0)return;const f=Km(s,r,a,o);if(!l)return e(f);const p=Jm(l,f,u),v=Object.fromEntries(s.map(g=>[g,(c[g]??0)+p[g]]));e({...f,roundPoints:p,scores:v})};return(async()=>{try{const f=await Mt(Ne(ve,`games/${i}/start`));if(n||!f.exists())return;const p=ho(f.val());l=p,s=Object.keys(p.players),o=p.round,c=await hy(p.previousGameId,p.matchId),await Promise.all(s.map(async v=>{const g=await Mt(Ne(ve,`games/${i}/players/${v}/records`)),m=[];g.forEach(_=>{const b=Xr(Js(_.key,_.val()));b.playerId===v&&m.push(b)}),m.sort((_,b)=>_.clientSeq-b.clientSeq),u.set(v,m),d.push(ji(Ne(ve,`games/${i}/players/${v}/records`),_=>{try{const b=Xr(Js(_.key,_.val())),y=u.get(v)??[];b.playerId===v&&!y.some(w=>w.commandId===b.commandId)&&(y.push(b),y.sort((w,M)=>w.clientSeq-M.clientSeq),u.set(v,y),h())}catch(b){t(b instanceof Error?b:new Error(String(b)))}},t))})),d.push(si(Ne(ve,`games/${i}/terminals`),v=>{try{r=[],v.forEach(g=>{const m=jm(g.val());g.key===m.playerId&&s.includes(m.playerId)&&r.push(m)}),h()}catch(g){t(g instanceof Error?g:new Error(String(g)))}},t)),d.push(si(Ne(ve,`games/${i}/rematch/ready`),v=>{try{a=[],v.forEach(g=>{const m=Q_(g.val());g.key===m.playerId&&s.includes(m.playerId)&&a.push(m.playerId)}),h()}catch(g){t(g instanceof Error?g:new Error(String(g)))}},t)),h()}catch(f){t(f instanceof Error?f:new Error(String(f)))}})(),()=>{n=!0;for(const f of d)f()}}async function oy(i,e){return Ac(i,e)}async function eg(i){return Cc(i,ho,e=>({advance:Object.keys(e.players).length>1&&e.round+1<Ct.matchRounds}))}function Xr(i){const{serverTime:e,...t}=i;return t}function ly(i,e,t,n,s,r=!0){if(!ve)throw new Error("Firebase is unavailable.");let a=!1,o=0;const l=new Ss(Ct.tickRate);let c=!1,u=new Set,d=!1;const h=[],f=new Map,p=new Map,v=Qm(i,_=>{c=_.finished,u=new Set(_.terminalPlayerIds),n?.(_),r&&_.allReady&&!d&&(d=!0,eg(i).catch(b=>{d=!1,t(b)}))},t),g=()=>{e([...f.entries()].map(([_,b])=>{const y=b.snapshot();return{playerId:_,tick:y.displayTick,...y}}))},m=_=>{if(!a){for(let b=l.consume(_);b>0;b--)if(!c)for(const[y,w]of f)u.has(y)||w.advance();g(),o=requestAnimationFrame(m)}};return(async()=>{try{const _=await Mt(Ne(ve,`games/${i}/start`));if(a||!_.exists())return;const b=ho(_.val());s?.(b);let y=0;if(await Promise.all(Object.keys(b.players).map(async w=>{const M=await Mt(Ne(ve,`games/${i}/players/${w}/records`)),A=[];M.forEach(x=>{const T=Xr(Js(x.key,x.val()));T.playerId===w&&A.push(T)}),A.sort((x,T)=>x.clientSeq-T.clientSeq);for(const x of A)x.type==="progress/tick"&&(y=Math.max(y,x.tick));p.set(w,A)})),a)return;for(const[w,M]of Object.entries(b.players)){const A=new X_(sd(b.seed,M.seat,M.level),y);f.set(w,A);for(const x of p.get(w)??[])A.receive(x);h.push(ji(Ne(ve,`games/${i}/players/${w}/records`),x=>{try{const T=Xr(Js(x.key,x.val()));if(T.playerId===w){const I=p.get(w)??[];I.some(D=>D.commandId===T.commandId)||(I.push(T),I.sort((D,k)=>D.clientSeq-k.clientSeq),p.set(w,I)),A.receive(T)}g()}catch(T){t(T instanceof Error?T:new Error(String(T)))}},t))}g(),o=requestAnimationFrame(m)}catch(_){t(_ instanceof Error?_:new Error(String(_)))}})(),()=>{a=!0,cancelAnimationFrame(o),v();for(const _ of h)_()}}function rI(i,e,t){if(!ve)throw new Error("Firebase is unavailable.");return K_(ve,i,hd,()=>e(),t)}function cy(i,e){od(i,e.tick,[]),e.type!=="progress/tick"&&Wr(i,e)}async function hy(i,e){const t={};let n=i;for(;n&&ve;){const s=await Mt(Ne(ve,`games/${n}/start`));if(!s.exists())break;const r=ho(s.val());if(r.matchId!==e)break;const a=await Mt(Ne(ve,`games/${n}/terminals`)),o=[];a.forEach(h=>{o.push(jm(h.val()))});const l=Object.keys(r.players),c=Km(l,o,[],r.round),u=new Map;await Promise.all(l.map(async h=>{const f=await Mt(Ne(ve,`games/${n}/players/${h}/records`)),p=[];f.forEach(v=>{p.push(Xr(Js(v.key,v.val())))}),p.sort((v,g)=>v.clientSeq-g.clientSeq),u.set(h,p)}));const d=Jm(r,c,u);for(const h of l)t[h]=(t[h]??0)+d[h];n=r.previousGameId}return t}function aI(i,e){if(!ii?.currentUser||!ve)throw new Error("Firebase is unavailable.");const t=ii.currentUser.uid;let n=0,s=0,r=-1,a=0;const o=new Ss(Ct.tickRate);let l=!1,c=!1,u=!1,d=!1,h=!1,f=!1,p=!1,v=!1,g,m,_,b,y=0,w=!1,M=[],A=[],x=()=>{},T=()=>{};const I=new Set,D=ny(i,t),k=sy(i,t),L=te=>e({playerId:t,tick:n,ready:l,bottle:m?structuredClone(m):void 0,lastCommand:g,error:te,lifecycle:_,audioOutput:b,rainSignal:y,ownershipConflict:w,opponents:A.map(we=>({...we,state:structuredClone(we.state)}))}),V=new Rc(ve,`games/${i}/players/${t}/writer`,()=>{w=!0,l=!1,d=!0,cancelAnimationFrame(a),L("Control moved to another tab or device.")}),O=V.epochId,N=new Ba({initial:D,order:(te,we)=>te.clientSeq-we.clientSeq,identify:te=>te.commandId,persist:te=>iy(i,t,te),deliver:async te=>{const{commandId:we,...Le}=te;await Mn(Ne(ve,`games/${i}/players/${t}/records/${we}`),{...Le,serverTime:wn()})}}),F=new Ba({initial:k,order:()=>0,identify:te=>te.interactionId,persist:te=>ry(i,t,te),deliver:async te=>{const{interactionId:we,...Le}=te;await Mn(Ne(ve,`games/${i}/interactions/${we}`),{...Le,serverTime:wn()})}}),z=Qm(i,te=>{_=te,h=te.finished,f=te.terminalPlayerIds.includes(t),h&&(cancelAnimationFrame(a),o.reset()),te.allReady&&!v&&(v=!0,eg(i).catch(we=>{v=!1,L(we instanceof Error?we.message:String(we))})),L()},te=>L(te.message));function W(te){m&&(N.enqueue(te),s=te.clientSeq)}function ie(te){if(m){try{Bf(i,t,te,m)}catch{}N.flush()}}function Q(te){if(n<r)throw new Error("A controller record cannot precede its latest progress tick.");const we=Hr(Ne(ve,`games/${i}/players/${t}/records`));if(!we.key)throw new Error("Could not allocate a controller record identifier.");return{commandId:we.key,playerId:t,epochId:O,clientSeq:s+1,tick:n,...te}}function re(te){for(const we of te){const Le=N_(we);if(Le.length===0)continue;const ae=M.filter(Me=>Me!==t&&!_?.terminalPlayerIds.includes(Me));if(ae.length===0){y++;continue}const he=`${t}-${O}-${we.tick}-${we.chain}`,ue=Hr(Ne(ve,`games/${i}/interactions`));if(!ue.key)throw new Error("Could not allocate an attack interaction identifier.");const be={interactionId:ue.key,type:"attack/generated",attackId:he,sourcePlayerId:t,sourceTick:we.tick,sourceChain:we.chain,targetPlayerIds:ae,colors:Le};F.enqueue(be)}}function Pe(te=!1){if(!m||!te&&n-r<15)return;const we=Q({type:"progress/tick",payload:{phase:m.phase,stateHash:ka(m)}});W(we),r=n,ie(we)}async function dt(){if(!m||p)return;const te=(_?.playerIds.length??0)>1,we=m.phase==="lost"?"lost":te&&m.phase==="countdown"?"cleared":void 0;if(we){p=!0;try{const Le=Ne(ve,`games/${i}/terminals/${t}`);(await Mt(Le)).exists()||await Mn(Le,{type:"player/terminal",playerId:t,tick:n,result:we,stateHash:ka(m),serverTime:wn()})}catch{p=!1}}}function at(te){if(u||!l||d||h||f)return;const we=m?.phase;for(let Le=o.consume(te);Le>0;Le--){if(!m||m.phase==="lost"||m.phase==="countdown"&&(_?.playerIds.length??0)>1){o.reset();break}re(ad(m)),n=m.tick}m?.phase!==we||m?.phase==="lost"&&r!==n?Pe(!0):Pe(),dt(),L(),a=requestAnimationFrame(at)}const ee=si(Ne(ve,`games/${i}/start`),async te=>{if(!(!te.exists()||l||c)){c=!0;try{const we=ho(te.val());if(b=we.audioOutput,M=Object.keys(we.players),!we.players[t])throw new Error("Player is not part of this pill-bottle/3 game.");if(T(),T=ly(i,ne=>{A=ne.filter(pe=>pe.playerId!==t),L()},ne=>L(ne.message),void 0,void 0,!1),!await V.claim())throw w=!0,new Error("This controller is already active in another tab.");const Le=await Mt(Ne(ve,`games/${i}/players/${t}/records`)),ae=new Map;Le.forEach(ne=>{const pe=Xr(Js(ne.key,ne.val()));pe.playerId===t&&ae.set(pe.commandId,pe)});for(const ne of N.values())ae.set(ne.commandId,ne);const he=[...ae.values()].sort((ne,pe)=>ne.clientSeq-pe.clientSeq);for(const ne of he)ne.type==="attack/rain"&&I.add(ne.payload.attackId);he.forEach((ne,pe)=>{if(ne.clientSeq!==pe+1)throw new Error("Controller record history has a sequence gap.");if(pe>0&&ne.tick<he[pe-1].tick)throw new Error("Controller record ticks moved backward.")});const ue=ay(i,t),be=ue&&he.find(ne=>ne.commandId===ue.commandId&&ne.clientSeq===ue.clientSeq&&ne.tick===ue.tick);m=be?ld(ue.state):sd(we.seed,we.players[t].seat,we.players[t].level);for(const ne of he)be&&ne.clientSeq<=be.clientSeq||cy(m,ne);if(s=he.at(-1)?.clientSeq??0,n=m.tick,r=he.reduce((ne,pe)=>pe.type==="progress/tick"?Math.max(ne,pe.tick):ne,-1),he.length>0)try{Bf(i,t,he.at(-1),m)}catch{}await Mn(Ne(ve,`games/${i}/players/${t}/epochs/${O}`),{clientId:V.clientId,startedFromTick:n,startedFromCommandSeq:s,serverTime:wn()});const Me=Ne(ve,`games/${i}/interactions`),Qe=await Mt(Me),j=new Set;Qe.forEach(ne=>{j.add(ne.key)}),l=!0,x=ji(Me,ne=>{try{const pe=hd(ne.val());if(j.delete(ne.key)||y++,!pe.targetPlayerIds.includes(t)||I.has(pe.attackId)||!m){L();return}const U={type:"attack/rain",payload:{attackId:pe.attackId,colors:pe.colors,columns:F_(pe.attackId,pe.colors.length)}},Ge=Q(U);W(Ge),Wr(m,U),I.add(pe.attackId),ie(Ge),m.phase==="lost"&&(Pe(!0),dt()),L()}catch(pe){L(pe instanceof Error?pe.message:String(pe))}},ne=>L(ne.message)),Pe(!0),dt(),L(),N.flush(),F.flush(),a=requestAnimationFrame(at)}catch(we){L(we instanceof Error?we.message:String(we))}finally{c=!1}}},te=>L(te.message)),_e=()=>{N.flush(),F.flush()};window.addEventListener("online",_e);function de(){!l||d||h||(Pe(!0),d=!0,cancelAnimationFrame(a),o.reset())}function He(){!l||!d||u||h||(d=!1,o.reset(),Pe(!0),a=requestAnimationFrame(at))}async function je(te){if(!l||!m||m.phase!=="playing"||h)return;const we=m.phase,Le=Q(te);W(Le),re(Wr(m,te)),ie(Le);const ae=m.phase;ae!==we&&Pe(!0),ae==="lost"&&dt(),g=`${te.type} · tick ${n}`,L()}return{command:je,requestRematch:te=>oy(i,te),async takeOver(){await V.takeOver()&&(w=!1,l=!0,d=!1,o.reset(),a=requestAnimationFrame(at),L())},suspend:de,resume:He,destroy(){l&&!d&&Pe(!0),u=!0,ee(),z(),x(),T(),cancelAnimationFrame(a),N.destroy(),F.destroy(),V.release(),window.removeEventListener("online",_e)}}}var zf=bt("<i></i>"),uy=bt('<span class="next-piece svelte-63ux23"></span>'),dy=bt('<div class="next svelte-63ux23"></div>'),fy=bt('<div><!> <div class="matrix svelte-63ux23" role="img"></div></div>');function oI(i,e){vn(e,!1);const t=lt();let n=Xe(e,"state",8),s=Xe(e,"label",8,"Block Stack board"),r=Xe(e,"compact",8,!1);const a={I:"#30d9d4",J:"#4d72ff",L:"#ff9f43",O:"#f5d547",S:"#5fe06d",T:"#b66cff",Z:"#ff4f64"};function o(p){const v=p.active?wh(p.active):[],g=p.active?wh({...p.active,row:zv(p)}):[];return Array.from({length:Vv*wo},(m,_)=>{const b=Math.floor(_/wo)+Gv,y=_%wo;if(p.active&&v.some(M=>M.row===b&&M.col===y))return{kind:p.active.kind,ghost:!1,active:!0};const w=p.board[b*wo+y];return w?{kind:w,ghost:!1,active:!1}:p.active&&g.some(M=>M.row===b&&M.col===y)?{kind:p.active.kind,ghost:!0,active:!1}:void 0})}function l(p){const v=new Set(wh({kind:p,row:0,col:0,orientation:0}).map(({row:g,col:m})=>`${g}:${m}`));return Array.from({length:16},(g,m)=>v.has(`${Math.floor(m/4)}:${m%4}`))}zt(()=>Te(n()),()=>{ge(t,o(n()))}),Li(),Ji();var c=fy();let u;var d=It(c);{var h=p=>{var v=dy();Cn(v,5,()=>(Te(n()),Re(()=>n().next.slice(0,3))),ei,(g,m)=>{var _=uy();Cn(_,5,()=>(C(m),Re(()=>l(C(m)))),ei,(b,y)=>{var w=zf();let M;Yt(()=>M=jn(w,1,"svelte-63ux23",null,M,{occupied:C(y)})),ot(b,w)}),yt(_),Yt(()=>{st(_,"aria-label",`${C(m)} piece`),xu(_,(C(m),Re(()=>`--piece:${a[C(m)]}`)))}),ot(g,_)}),yt(v),Yt(g=>st(v,"aria-label",g),[()=>(Te(n()),Re(()=>`Next pieces: ${n().next.slice(0,3).join(", ")}`))]),ot(p,v)};un(d,p=>{r()||p(h)})}var f=tt(d,2);Cn(f,5,()=>C(t),ei,(p,v)=>{var g=zf();let m;Yt(_=>{xu(g,(C(v),Re(()=>C(v)?`--piece:${a[C(v).kind]}`:""))),m=jn(g,1,"svelte-63ux23",null,m,_)},[()=>({filled:!!(C(v)&&!C(v).ghost),active:C(v)?.active,ghost:C(v)?.ghost})]),ot(p,g)}),yt(f),yt(c),Yt(()=>{u=jn(c,1,"tetris-shell svelte-63ux23",null,u,{compact:r()}),st(f,"aria-label",s()),st(f,"data-lines",(Te(n()),Re(()=>n().lines))),st(f,"data-score",(Te(n()),Re(()=>n().score))),st(f,"data-level",(Te(n()),Re(()=>n().level))),st(f,"data-phase",(Te(n()),Re(()=>n().phase))),st(f,"data-active-row",(Te(n()),Re(()=>n().active?.row))),st(f,"data-active-id",(Te(n()),Re(()=>n().active?.id)))}),ot(i,c),_n()}const Vf=""+new URL("../assets/Granite Promenade.B9kdwy7x.mp3",import.meta.url).href,py=""+new URL("../assets/Snowbound Sabre.U751p-Yz.mp3",import.meta.url).href;function lI(i,e){vn(e,!1);const t=lt();let n=Xe(e,"enabled",8,!1),s=Xe(e,"level",8,0);zt(()=>(Te(s()),Vf),()=>{ge(t,s()%2?py:Vf)}),Li();{let r=Gi(()=>`tetris:${s()}`);oo(i,{get enabled(){return n()},get loopUrl(){return C(t)},get loopKey(){return C(r)}})}_n()}function my(i){if(!St(i)||!xt(i,["type","roomId","ruleset","rulesVersion","seed","tickRate","hostUid","audioOutput","members","players","settings","matchId","round","previousGameId","serverTime"])||i.type!=="game/started"||i.ruleset!=="tetris"||i.rulesVersion!=="tetris/1"||i.tickRate!==60||!At(i.seed,0,4294967295)||!At(i.round,0,99)||!vt(i.matchId)||!vt(i.hostUid)||!vt(i.roomId)||!Ui(i.serverTime)||!St(i.members)||!St(i.players)||!St(i.settings)||!xt(i.settings,["width","height","hiddenRows","matchRounds"])||i.settings.width!==10||i.settings.height!==20||i.settings.hiddenRows!==2||!At(i.settings.matchRounds,1,99)||i.previousGameId!==void 0&&!vt(i.previousGameId)||i.audioOutput!=="cast"&&i.audioOutput!=="controllers")throw new Error("Invalid tetris/1 start record.");const e=i.members,t=i.players;if(!Object.entries(e).every(([n,s])=>vt(n)&&s===!0)||!Object.entries(t).every(([n,s])=>vt(n)&&e[n]===!0&&St(s)&&xt(s,["seat","level"])&&At(s.seat,0,3)&&At(s.level,0,20)))throw new Error("Invalid Tetris roster.");return i}function gy(i,e,t=!1){const n=cd(i,e,t),s=St(n.payload)?n.payload:{};if(n.type==="input/move"&&xt(s,["dx"])&&(s.dx===-1||s.dx===1))return{commandId:i,...n,type:"input/move",payload:{dx:s.dx}};if(n.type==="input/rotate"&&xt(s,["direction"])&&(s.direction==="clockwise"||s.direction==="counterclockwise"))return{commandId:i,...n,type:"input/rotate",payload:{direction:s.direction}};if(["input/soft-drop-start","input/soft-drop-end","input/hard-drop"].includes(n.type)&&xt(s,[]))return{commandId:i,...n,type:n.type,payload:{}};if(n.type==="progress/tick"&&xt(s,["phase","stateHash"])&&(s.phase==="playing"||s.phase==="lost")&&typeof s.stateHash=="string"&&/^t1-[0-9a-f]{8}$/.test(s.stateHash))return{commandId:i,...n,type:"progress/tick",payload:{phase:s.phase,stateHash:s.stateHash}};throw new Error("Invalid Tetris controller payload.")}const Ic=my,El=gy;function vy(i,e,t){if(!ve)throw new Error("Firebase unavailable.");let n=[],s=[],r=1,a=0,o=[];const l=()=>{n.length&&e(Zm(n,o,s,a,r))},c=[];return Mt(Ne(ve,`games/${i}/start`)).then(u=>{const d=Ic(u.val());n=Object.keys(d.players),r=d.settings.matchRounds,a=d.round,c.push(ji(Ne(ve,`games/${i}/terminals`),h=>{const f=h.val();f?.result==="lost"&&(o=[...o.filter(p=>p.playerId!==f.playerId),{playerId:f.playerId,result:"lost",tick:f.tick}]),l()},t),si(Ne(ve,`games/${i}/rematch/ready`),h=>{s=[],h.forEach(f=>{f.val()?.playerId===f.key&&n.includes(f.key)&&s.push(f.key)}),l()},t)),l()}).catch(u=>t(u instanceof Error?u:new Error(String(u)))),()=>c.forEach(u=>u())}const cI=(i,e)=>Ac(i,e),_y=i=>Cc(i,Ic,e=>({advance:e.round+1<e.settings.matchRounds}));function hI(i,e){if(!ii?.currentUser||!ve)throw new Error("Firebase unavailable.");const t=ii.currentUser.uid,n=new Ss(Fm.tickRate),s=ud("tetris",i,t,"outbox");let r,a=0,o=0,l=!1,c=!1,u=!1,d=!1,h=0,f=-1,p,v,g,m=!1,_=[],b=()=>{};const y=uo(localStorage,s,N=>{if(!N||typeof N!="object"||typeof N.commandId!="string")throw new Error("Invalid Tetris outbox.");const{commandId:F,...z}=N;return El(F,z,!0)}),w=N=>e({playerId:t,tick:a,ready:l,state:r?structuredClone(r):void 0,lifecycle:g,audioOutput:v,error:N,lastCommand:p,ownershipConflict:m,opponents:_.map(F=>({...F,state:structuredClone(F.state)}))}),M=new Rc(ve,`games/${i}/players/${t}/writer`,()=>{m=!0,l=!1,cancelAnimationFrame(h),w("This controller was taken over by another tab.")}),A=vy(i,N=>{g=N,N.finished&&cancelAnimationFrame(h),N.allReady&&!d&&(d=!0,_y(i).catch(F=>{d=!1,w(F instanceof Error?F.message:String(F))})),w()},N=>w(N.message)),x=new Ba({initial:y,order:(N,F)=>N.clientSeq-F.clientSeq,identify:N=>N.commandId,persist:N=>fo(localStorage,s,N),deliver:async N=>{if(!l)throw new Error("Controller is not ready.");const{commandId:F,...z}=N;await Mn(Ne(ve,`games/${i}/players/${t}/records/${F}`),{...z,serverTime:wn()})},failed:N=>w(N instanceof Error?N.message:String(N))}),T=N=>{const z={commandId:Hr(Ne(ve,`games/${i}/players/${t}/records`)).key,playerId:t,epochId:M.epochId,clientSeq:++o,tick:a,...N};return x.enqueue(z),z},I=(N=!1)=>{!r||!N&&a-f<15||(T({type:"progress/tick",payload:{phase:r.phase,stateHash:yu(r)}}),f=a)},D=()=>r?.phase==="lost",k=()=>{D()&&r&&Mn(Ne(ve,`games/${i}/terminals/${t}`),{type:"player/terminal",playerId:t,tick:a,result:"lost",stateHash:yu(r),serverTime:wn()}).catch(N=>w(N.message))},L=N=>{if(!(c||u||!l||!r||D()||g?.finished)){for(let F=n.consume(N);F>0;F--)zm(r),a=r.tick;I(),D()&&(I(!0),k()),w(),h=requestAnimationFrame(L)}},V=si(Ne(ve,`games/${i}/start`),async N=>{if(!l)try{const F=Ic(N.val());if(!F.players[t])throw new Error("Player is not part of this Tetris game.");if(v=F.audioOutput,!await M.claim())throw m=!0,new Error("This controller is already active in another tab.");m=!1,b(),b=yy(i,Q=>{_=Q.filter(re=>re.playerId!==t),w()},Q=>w(Q.message));const z=await Mt(Ne(ve,`games/${i}/players/${t}/records`)),W=new Map;z.forEach(Q=>{const re=El(Q.key,Q.val());W.set(re.commandId,re)});for(const Q of x.values())W.set(Q.commandId,Q);const ie=[...W.values()].sort((Q,re)=>Q.clientSeq-re.clientSeq);r=Hv(km(F.seed,F.players[t].level),Math.max(0,...ie.map(Q=>Q.tick)),ie),a=r.tick,o=Math.max(0,...ie.map(Q=>Q.clientSeq)),await Mn(Ne(ve,`games/${i}/players/${t}/epochs/${M.epochId}`),{clientId:M.clientId,startedFromTick:a,startedFromCommandSeq:o,serverTime:wn()}),l=!0,x.flush(),I(!0),w(),h=requestAnimationFrame(L);return}catch(F){w(F instanceof Error?F.message:String(F));return}},N=>w(N.message)),O=()=>{x.flush()};return window.addEventListener("online",O),{command(N){!l||!r||r.phase!=="playing"||(T(N),Bm(r,N),a=r.tick,p=`${N.type} · tick ${a}`,D()&&(I(!0),k()),w())},suspend(){!l||u||(u=!0,cancelAnimationFrame(h),n.reset(),I(!0))},resume(){!l||!u||(u=!1,n.reset(),h=requestAnimationFrame(L))},async takeOver(){await M.takeOver()&&(m=!1,l=!0,u=!1,x.flush(),h=requestAnimationFrame(L),w())},destroy(){I(!0),c=!0,V(),A(),b(),cancelAnimationFrame(h),window.removeEventListener("online",O),x.destroy(),M.release()}}}function yy(i,e,t){if(!ve)throw new Error("Firebase unavailable.");let n=!1,s=0,r;const a=new Ss(Fm.tickRate),o=new Map,l=new Map,c=[],u={clone:h=>structuredClone(h),tick:h=>h.tick,advanceTo:(h,f)=>{for(;h.tick<f&&h.phase==="playing";)zm(h)},apply:(h,f)=>{f.type!=="progress/tick"&&Bm(h,f)},hash:yu,phase:h=>h.phase,terminal:h=>h.phase==="lost",progress:h=>h.type==="progress/tick"?h.payload:void 0},d=()=>e([...l].map(([h,f])=>{const p=f.snapshot();return{playerId:h,tick:p.displayTick,controllerTick:p.controllerTick,lag:p.lag,state:p.state,hashMatches:p.hashMatches}}));return Mt(Ne(ve,`games/${i}/start`)).then(async h=>{r=Ic(h.val());let f=0;if(await Promise.all(Object.keys(r.players).map(async v=>{const g=await Mt(Ne(ve,`games/${i}/players/${v}/records`)),m=[];g.forEach(_=>{m.push(El(_.key,_.val()))}),m.sort((_,b)=>_.clientSeq-b.clientSeq),o.set(v,m);for(const _ of m)_.type==="progress/tick"&&(f=Math.max(f,_.tick))})),n)return;for(const v of Object.keys(r.players)){const g=new Ec(u,km(r.seed,r.players[v].level),f);l.set(v,g);for(const m of o.get(v)??[])g.receive(m);c.push(ji(Ne(ve,`games/${i}/players/${v}/records`),m=>{try{g.receive(El(m.key,m.val())),d()}catch(_){t(_ instanceof Error?_:new Error(String(_)))}},t))}const p=v=>{if(!n){for(let g=a.consume(v);g>0;g--)for(const m of l.values())m.advance();d(),s=requestAnimationFrame(p)}};d(),s=requestAnimationFrame(p)}).catch(h=>t(h instanceof Error?h:new Error(String(h)))),()=>{n=!0,cancelAnimationFrame(s),c.forEach(h=>h())}}var xy=bt("<span> </span>"),by=bt("<div> </div>"),Sy=bt('<button type="button">▲</button>'),My=bt("<div>▲</div>"),wy=bt("<!><!>",1),Ty=bt("<i>✦</i>"),Ey=bt('<div><div class="progress svelte-40oo2k" aria-label="Current match group"></div> <div class="board svelte-40oo2k"><!><div class="effects svelte-40oo2k" aria-hidden="true"><!></div></div></div>');function uI(i,e){vn(e,!1);let t=Xe(e,"state",8),n=Xe(e,"label",8,"Quarry Match board"),s=Xe(e,"compact",8,!1),r=Xe(e,"selectColumn",8,void 0);const a={cyan:"◆",pink:"●",yellow:"✦",green:"▲",purple:"■"};Ji();var o=Ey();let l;var c=It(o);Cn(c,4,()=>[0,1,2],ei,(p,v)=>{var g=xy();let m;var _=It(g,!0);yt(g),Yt(()=>{m=jn(g,1,"svelte-40oo2k",null,m,{stone:v<t().groupCount,occupied:v<t().groupCount,cyan:t().groupColor==="cyan",pink:t().groupColor==="pink",yellow:t().groupColor==="yellow",green:t().groupColor==="green",purple:t().groupColor==="purple"}),ti(_,(Te(t()),Re(()=>v<t().groupCount&&t().groupColor?a[t().groupColor]:"·")))}),ot(p,g)}),yt(c);var u=tt(c,2),d=It(u);Cn(d,1,()=>(Te(t()),Re(()=>t().columns)),ei,(p,v,g)=>{var m=wy(),_=nn(m);Cn(_,0,()=>Array(12),ei,(M,A,x)=>{const T=Gi(()=>(Te(t()),C(v),Re(()=>t().rulesVersion==="crystal-canopy/1"?C(v)[x]:C(v)[11-x])));var I=by();let D;var k=It(I,!0);yt(I),Yt(L=>{D=jn(I,1,"cell svelte-40oo2k",null,D,L),ti(k,(Te(C(T)),Re(()=>C(T)?a[C(T)]:"")))},[()=>({occupied:!!C(T),cyan:C(T)==="cyan",pink:C(T)==="pink",yellow:C(T)==="yellow",green:C(T)==="green",purple:C(T)==="purple"})]),ot(M,I)});var b=tt(_);{var y=M=>{var A=Sy();let x;st(A,"aria-label",`Shoot column ${g+1}`),Yt(()=>x=jn(A,1,"cursor svelte-40oo2k",null,x,{selected:t().cursor===g})),di("pointerdown",A,Wm(()=>r()?.(g))),ot(M,A)},w=M=>{var A=My();let x;Yt(()=>x=jn(A,1,"cursor svelte-40oo2k",null,x,{selected:t().cursor===g})),ot(M,A)};un(b,M=>{r()?M(y):M(w,-1)})}ot(p,m)});var h=tt(d),f=It(h);Xm(f,()=>(Te(t()),Re(()=>t().cascades)),p=>{var v=Gr(),g=nn(v);Cn(g,1,()=>(Te(t()),Re(()=>t().lastCascadeCells??[])),ei,(m,_)=>{var b=Ty();let y;Yt(()=>{y=jn(b,1,"burst svelte-40oo2k",null,y,{cyan:C(_).color==="cyan",pink:C(_).color==="pink",yellow:C(_).color==="yellow",green:C(_).color==="green",purple:C(_).color==="purple"}),xu(b,(C(_),Re(()=>`grid-column:${C(_).column+1};grid-row:${12-C(_).row}`)))}),ot(m,b)}),ot(p,v)}),yt(h),yt(u),yt(o),Yt(()=>{l=jn(o,1,"quarry-shell svelte-40oo2k",null,l,{compact:s(),canopy:t().rulesVersion==="crystal-canopy/1"}),st(o,"aria-label",n()),st(o,"data-remaining",(Te(t()),Re(()=>t().total-t().removed))),st(o,"data-cursor",(Te(t()),Re(()=>t().cursor))),st(o,"data-cascades",(Te(t()),Re(()=>t().cascades)))}),ot(i,o),_n()}const Gf=""+new URL("../assets/Prismatic Descent.ZNplIXQf.mp3",import.meta.url).href,Hf=""+new URL("../assets/Prismatic Descent Clear.BmLl8QF3.mp3",import.meta.url).href,Ay=""+new URL("../assets/Prismatic Descent Combo.hOwJq7xI.mp3",import.meta.url).href,Cy=""+new URL("../assets/Prismatic Descent Reset.XTEzipFH.mp3",import.meta.url).href;function dI(i,e){vn(e,!1);const t=lt();let n=Xe(e,"enabled",8,!1),s=Xe(e,"phase",8,"playing"),r=Xe(e,"cascadeSignal",8,0),a=Xe(e,"resetSignal",8,0),o=lt(s()),l=lt(r()),c=lt(a()),u=lt(0),d=lt(Hf);zt(()=>(Te(s()),Gf),()=>{ge(t,s()==="playing"?Gf:void 0)}),zt(()=>(Te(r()),C(l),C(u)),()=>{r()>C(l)&&(ge(d,Ay),hn(u),ge(l,r()))}),zt(()=>(Te(a()),C(c),C(u)),()=>{a()>C(c)&&(ge(d,Cy),hn(u),ge(c,a()))}),zt(()=>(Te(s()),C(o),C(u)),()=>{s()!==C(o)&&(s()==="cleared"&&(ge(d,Hf),hn(u)),ge(o,s()))}),Li(),oo(i,{get enabled(){return n()},get loopUrl(){return C(t)},loopKey:"quarry-match",get cueUrl(){return C(d)},get cueSignal(){return C(u)}}),_n()}const Wf=""+new URL("../assets/Glacial Vault.Dw_n7dj9.mp3",import.meta.url).href,Ry=""+new URL("../assets/Glacial Vault Clear.C5HrP9Bz.mp3",import.meta.url).href,Xf=""+new URL("../assets/Glacial Vault Shot.Ckp_Mc68.mp3",import.meta.url).href,Iy=""+new URL("../assets/Glacial Vault Triple.Bb19vC-Z.mp3",import.meta.url).href,Py=""+new URL("../assets/Glacial Vault Reset.DYr4V8th.mp3",import.meta.url).href;function fI(i,e){vn(e,!1);const t=lt();let n=Xe(e,"enabled",8,!1),s=Xe(e,"phase",8,"playing"),r=Xe(e,"shotSignal",8,0),a=Xe(e,"tripleSignal",8,0),o=Xe(e,"resetSignal",8,0),l=lt(s()),c=lt(r()),u=lt(a()),d=lt(o()),h=lt(0),f=lt(Xf);zt(()=>(Te(s()),Wf),()=>{ge(t,s()==="playing"?Wf:void 0)}),zt(()=>(Te(r()),C(c),C(h)),()=>{r()>C(c)&&(ge(f,Xf),hn(h),ge(c,r()))}),zt(()=>(Te(a()),C(u),C(h)),()=>{a()>C(u)&&(ge(f,Iy),hn(h),ge(u,a()))}),zt(()=>(Te(o()),C(d),C(h),Te(r()),Te(a())),()=>{o()>C(d)&&(ge(f,Py),hn(h),ge(d,o()),ge(c,r()),ge(u,a()))}),zt(()=>(Te(s()),C(l),C(h)),()=>{s()!==C(l)&&(s()==="cleared"&&(ge(f,Ry),hn(h)),ge(l,s()))}),Li(),oo(i,{get enabled(){return n()},get loopUrl(){return C(t)},loopKey:"crystal-canopy",get cueUrl(){return C(f)},get cueSignal(){return C(h)}}),_n()}function Dy(i){let e=2166136261;for(const t of i)e^=t.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0}function Ly(i,e){const t=Array.from({length:Df},(s,r)=>r);let n=Dy(i);for(let s=t.length-1;s>0;s--){n=Math.imul(n,1664525)+1013904223>>>0;const r=n%(s+1);[t[s],t[r]]=[t[r],t[s]]}return t.slice(0,Math.min(e,Df))}function Uy(i,e,t,n,s,r=3){const a=Object.fromEntries(i.map(c=>[c,e[c]??0]));t&&i.includes(t)?a[t]++:t=void 0;const o=!!t,l=n.filter(c=>i.includes(c));return{playerIds:i,readyPlayerIds:l,finished:o,winnerId:t,allReady:o&&i.every(c=>l.includes(c)),round:s,matchComplete:!!(t&&a[t]>=r),roundPoints:Object.fromEntries(i.map(c=>[c,c===t?1:0])),scores:a}}function Ny(i){if(!St(i)||!xt(i,["type","roomId","ruleset","rulesVersion","seed","tickRate","hostUid","audioOutput","members","players","settings","matchId","round","previousGameId","scores","serverTime"])||i.type!=="game/started"||!(i.ruleset==="quarry-match"&&i.rulesVersion==="quarry-match/1"||i.ruleset==="crystal-canopy"&&i.rulesVersion==="crystal-canopy/1")||i.tickRate!==60||!At(i.seed,0,4294967295)||!At(i.round,0,4)||!vt(i.matchId)||!vt(i.hostUid)||!vt(i.roomId)||!Ui(i.serverTime)||!St(i.members)||!St(i.players)||!St(i.settings)||!xt(i.settings,["width","height","targetWins","matchRounds"])||i.settings.width!==5||i.settings.height!==12||i.settings.targetWins!==3||i.settings.matchRounds!==5||i.previousGameId!==void 0&&!vt(i.previousGameId)||i.audioOutput!=="cast"&&i.audioOutput!=="controllers")throw new Error("Invalid match-puzzle start record.");const e=i.members,t=i.players,n=i.scores;if(!Object.entries(e).every(([s,r])=>vt(s)&&r===!0)||!Object.entries(t).every(([s,r])=>vt(s)&&e[s]===!0&&St(r)&&xt(r,["seat","level"])&&At(r.seat,0,3)&&At(r.level,0,20))||n!==void 0&&(!St(n)||!xt(n,Object.keys(t))||!Object.keys(t).every(s=>At(n[s],0,3))))throw new Error("Invalid Quarry Match roster or scores.");return i}function Oy(i,e,t=!1){const n=cd(i,e,t),s=St(n.payload)?n.payload:{};if(n.type==="input/move"&&xt(s,["dx"])&&(s.dx===-1||s.dx===1))return{commandId:i,...n,type:"input/move",payload:{dx:s.dx}};if((n.type==="input/fire"||n.type==="input/restart")&&xt(s,[]))return{commandId:i,...n,type:n.type,payload:{}};if(n.type==="attack/rain"&&xt(s,["attackId","colors","columns"])&&vt(s.attackId)&&Array.isArray(s.colors)&&s.colors.length>=1&&s.colors.length<=4&&s.colors.every(r=>r==="cyan"||r==="pink"||r==="yellow"||r==="green"||r==="purple")&&Array.isArray(s.columns)&&s.columns.length===s.colors.length&&s.columns.every(r=>At(r,0,4)))return{commandId:i,...n,type:"attack/rain",payload:{attackId:s.attackId,colors:s.colors,columns:s.columns}};if(n.type==="progress/tick"&&xt(s,["phase","stateHash"])&&(s.phase==="playing"||s.phase==="cleared")&&typeof s.stateHash=="string"&&/^(q1|c1)-[0-9a-f]{8}$/.test(s.stateHash))return{commandId:i,...n,type:"progress/tick",payload:{phase:s.phase,stateHash:s.stateHash}};throw new Error("Invalid Quarry Match controller payload.")}const qr=Ny,Al=Oy,qi=i=>i.rulesVersion==="crystal-canopy/1",tg=(i,e)=>qi(i)?qv(i.seed,e):$v(i.seed,e),ng=i=>qi(i)?Kv(i):Jv(i),wu=(i,e,t)=>qi(i)?Yv(i,e,t):Zv(i,e,t),Tu=i=>qi(i)?Wv(i):Xv(i),Fy=(i,e,t,n)=>qi(i)?jv(i,e,t,n):Qv(i,e,t,n);async function pI(i){if(!ve)throw new Error("Firebase unavailable.");return qr((await Mt(Ne(ve,`games/${i}/start`))).val())}function ky(i,e,t){if(!ve)throw new Error("Firebase unavailable.");let n,s,r=[];const a=[],o=()=>{n&&e(Uy(Object.keys(n.players),n.scores??{},s,r,n.round,n.settings.targetWins))};return Mt(Ne(ve,`games/${i}/start`)).then(l=>{n=qr(l.val()),a.push(si(Ne(ve,`games/${i}/winner`),c=>{const u=c.val();s=u&&Object.hasOwn(n.players,u.playerId)?u.playerId:void 0,o()},t),si(Ne(ve,`games/${i}/rematch/ready`),c=>{r=[],c.forEach(u=>{u.val()?.playerId===u.key&&Object.hasOwn(n.players,u.key)&&r.push(u.key)}),o()},t)),o()}).catch(l=>t(l instanceof Error?l:new Error(String(l)))),()=>a.forEach(l=>l())}const mI=(i,e)=>Ac(i,e);async function By(i){if(!ve)throw new Error("Firebase unavailable.");const[e,t]=await Promise.all([Mt(Ne(ve,`games/${i}/start`)),Mt(Ne(ve,`games/${i}/winner`))]);qr(e.val());const n=t.val()?.playerId;return Cc(i,qr,s=>{const r=Object.fromEntries(Object.keys(s.players).map(o=>[o,(s.scores?.[o]??0)+(o===n?1:0)])),a=!!(n&&r[n]>=s.settings.targetWins);return{advance:!a,scores:a?Object.fromEntries(Object.keys(s.players).map(o=>[o,0])):r}})}function gI(i,e){if(!ii?.currentUser||!ve)throw new Error("Firebase unavailable.");const t=ii.currentUser.uid,n=new Ss(Vm.tickRate),s=ud("quarry",i,t,"outbox");let r,a,o=0,l=0,c=!1,u=!1,d=!1,h=!1,f=0,p=-1,v,g,m,_=!1,b=[],y=()=>{},w=()=>{};const M=new Set,A=uo(localStorage,s,z=>{if(!z||typeof z!="object"||typeof z.commandId!="string")throw new Error("Invalid Quarry Match outbox.");const{commandId:W,...ie}=z;return Al(W,ie,!0)}),x=z=>e({playerId:t,tick:o,ready:c,state:r?structuredClone(r):void 0,lifecycle:m,audioOutput:g,error:z,lastCommand:v,ownershipConflict:_,opponents:b.map(W=>({...W,state:structuredClone(W.state)}))}),T=new Rc(ve,`games/${i}/players/${t}/writer`,()=>{_=!0,c=!1,cancelAnimationFrame(f),x("This controller was taken over by another tab.")}),I=ky(i,z=>{m=z,z.finished&&cancelAnimationFrame(f),z.allReady&&!h&&(h=!0,By(i).catch(W=>{h=!1,x(W instanceof Error?W.message:String(W))})),x()},z=>x(z.message)),D=new Ba({initial:A,order:(z,W)=>z.clientSeq-W.clientSeq,identify:z=>z.commandId,persist:z=>fo(localStorage,s,z),deliver:async z=>{if(!c)throw new Error("Controller is not ready.");const{commandId:W,...ie}=z;await Mn(Ne(ve,`games/${i}/players/${t}/records/${W}`),{...ie,serverTime:wn()})},failed:z=>x(z instanceof Error?z.message:String(z))}),k=z=>{const ie={commandId:Hr(Ne(ve,`games/${i}/players/${t}/records`)).key,playerId:t,epochId:T.epochId,clientSeq:++l,tick:o,...z};return D.enqueue(ie),ie},L=(z=!1)=>{!r||!z&&o-p<15||(k({type:"progress/tick",payload:{phase:r.phase,stateHash:Tu(r)}}),p=o)},V=()=>{!r||r.phase!=="cleared"||wl(Ne(ve,`games/${i}/winner`),z=>z===null?{playerId:t,tick:r.tick,stateHash:Tu(r),serverTime:wn()}:void 0,{applyLocally:!1}).catch(z=>x(z.message))},O=z=>{if(!(u||d||!c||!r||r.phase==="cleared"||m?.finished)){for(let W=n.consume(z);W>0;W--)ng(r),o=r.tick;L(),x(),f=requestAnimationFrame(O)}},N=si(Ne(ve,`games/${i}/start`),async z=>{if(!c)try{if(a=qr(z.val()),!a.players[t])throw new Error("Player is not part of this Quarry Match game.");if(g=a.audioOutput,!await T.claim())throw _=!0,new Error("This controller is already active in another tab.");_=!1,y(),y=zy(i,re=>{b=re.filter(Pe=>Pe.playerId!==t),x()},re=>x(re.message));const W=await Mt(Ne(ve,`games/${i}/players/${t}/records`)),ie=new Map;W.forEach(re=>{const Pe=Al(re.key,re.val());ie.set(Pe.commandId,Pe),Pe.type==="attack/rain"&&M.add(Pe.payload.attackId)});for(const re of D.values())ie.set(re.commandId,re);const Q=[...ie.values()].sort((re,Pe)=>re.clientSeq-Pe.clientSeq);r=Fy(tg(a,a.players[t].level),Math.max(0,...Q.map(re=>re.tick)),Q,a.seed),o=r.tick,l=Math.max(0,...Q.map(re=>re.clientSeq)),await Mn(Ne(ve,`games/${i}/players/${t}/epochs/${T.epochId}`),{clientId:T.clientId,startedFromTick:o,startedFromCommandSeq:l,serverTime:wn()}),c=!0,w(),w=ji(Ne(ve,`games/${i}/interactions`),re=>{const Pe=re.val();if(qi(a)||Pe?.type!=="attack/generated"||!Pe.targetPlayerIds?.includes(t)||M.has(Pe.attackId))return;const dt={type:"attack/rain",payload:{attackId:Pe.attackId,colors:Pe.colors,columns:Ly(Pe.attackId,Pe.colors.length)}};M.add(Pe.attackId),k(dt),wu(r,dt,a.seed),x()},re=>x(re.message)),D.flush(),L(!0),x(),r.phase==="cleared"?V():f=requestAnimationFrame(O)}catch(W){x(W instanceof Error?W.message:String(W))}},z=>x(z.message)),F=()=>{D.flush()};return window.addEventListener("online",F),{command(z){if(!c||!r||r.phase!=="playing"||!a||z.type==="input/fire"&&(!(qi(r)?r.columns[r.cursor].at(-1):r.columns[r.cursor][0])||r.groupColor&&(qi(r)?r.columns[r.cursor].at(-1):r.columns[r.cursor][0])!==r.groupColor))return;k(z);const W=wu(r,z,a.seed);if(W&&a&&!qi(a)){const ie=Object.keys(a.players).filter(Q=>Q!==t);if(ie.length){const Q=`${t}-${T.epochId}-${l}-${W.tick}-${W.chain}`,re=Hr(Ne(ve,`games/${i}/interactions`));Mn(re,{type:"attack/generated",attackId:Q,sourcePlayerId:t,sourceTick:W.tick,sourceChain:W.chain,targetPlayerIds:ie,colors:W.colors,serverTime:wn()}).catch(Pe=>x(Pe.message))}}o=r.tick,v=`${z.type} · tick ${o}`,r.phase==="cleared"&&(L(!0),V()),x()},suspend(){!c||d||(d=!0,cancelAnimationFrame(f),n.reset(),L(!0))},resume(){!c||!d||(d=!1,n.reset(),f=requestAnimationFrame(O))},async takeOver(){await T.takeOver()&&(_=!1,c=!0,d=!1,D.flush(),f=requestAnimationFrame(O),x())},destroy(){L(!0),u=!0,N(),I(),y(),w(),cancelAnimationFrame(f),window.removeEventListener("online",F),D.destroy(),T.release()}}}function zy(i,e,t){if(!ve)throw new Error("Firebase unavailable.");let n=!1,s=0,r;const a=new Ss(Vm.tickRate),o=new Map,l=new Map,c=[],u={clone:h=>structuredClone(h),tick:h=>h.tick,advanceTo:(h,f)=>{for(;h.tick<f&&h.phase==="playing";)ng(h)},apply:(h,f)=>{f.type!=="progress/tick"&&wu(h,f,r.seed)},hash:Tu,phase:h=>h.phase,terminal:h=>h.phase==="cleared",progress:h=>h.type==="progress/tick"?h.payload:void 0},d=()=>e([...l].map(([h,f])=>{const p=f.snapshot();return{playerId:h,tick:p.displayTick,controllerTick:p.controllerTick,lag:p.lag,state:p.state,hashMatches:p.hashMatches}}));return Mt(Ne(ve,`games/${i}/start`)).then(async h=>{r=qr(h.val());let f=0;if(await Promise.all(Object.keys(r.players).map(async v=>{const g=await Mt(Ne(ve,`games/${i}/players/${v}/records`)),m=[];g.forEach(_=>{m.push(Al(_.key,_.val()))}),m.sort((_,b)=>_.clientSeq-b.clientSeq),o.set(v,m);for(const _ of m)_.type==="progress/tick"&&(f=Math.max(f,_.tick))})),n)return;for(const v of Object.keys(r.players)){const g=new Ec(u,tg(r,r.players[v].level),f);l.set(v,g);for(const m of o.get(v)??[])g.receive(m);c.push(ji(Ne(ve,`games/${i}/players/${v}/records`),m=>{try{g.receive(Al(m.key,m.val())),d()}catch(_){t(_ instanceof Error?_:new Error(String(_)))}},t))}const p=v=>{if(!n){for(let g=a.consume(v);g>0;g--)for(const m of l.values())m.advance();d(),s=requestAnimationFrame(p)}};d(),s=requestAnimationFrame(p)}).catch(h=>t(h instanceof Error?h:new Error(String(h)))),()=>{n=!0,cancelAnimationFrame(s),c.forEach(h=>h())}}const qf=""+new URL("../assets/Ivory Avalanche.jheecTlA.mp3",import.meta.url).href,Vy=""+new URL("../assets/Ivory Avalanche Clear.CHjDqg-F.mp3",import.meta.url).href,Th=""+new URL("../assets/Ivory Avalanche Catch.Cin_KYx1.mp3",import.meta.url).href,$f=""+new URL("../assets/Ivory Avalanche Place.BAM6pE8m.mp3",import.meta.url).href,Gy=""+new URL("../assets/Ivory Avalanche Throw.CcIWy32w.mp3",import.meta.url).href,Hy=""+new URL("../assets/Ivory Avalanche Chain.B0QUhIke.mp3",import.meta.url).href,Wy=""+new URL("../assets/Ivory Avalanche Miss.B0VhYMKi.mp3",import.meta.url).href,Yf=""+new URL("../assets/Ivory Avalanche Failure.BOUADSZZ.mp3",import.meta.url).href;function vI(i,e){vn(e,!1);const t=lt();let n=Xe(e,"enabled",8,!1),s=Xe(e,"phase",8,"countdown"),r=Xe(e,"survived",8,0),a=Xe(e,"placements",8,0),o=Xe(e,"chains",8,0),l=Xe(e,"misses",8,0),c=Xe(e,"returns",8,0),u=lt(s()),d=lt(r()),h=lt(a()),f=lt(o()),p=lt(l()),v=lt(c()),g=lt(0),m=lt(Th);zt(()=>(Te(s()),qf),()=>{ge(t,s()==="playing"?qf:void 0)}),zt(()=>(Te(o()),C(f),C(g),Te(a()),C(h),$f),()=>{o()>C(f)?(ge(m,Hy),hn(g),ge(f,o())):a()>C(h)&&(ge(m,$f),hn(g),ge(h,a()))}),zt(()=>(Te(l()),C(p),C(g),Te(r()),C(d),Th),()=>{l()>C(p)?(ge(m,Wy),hn(g),ge(p,l())):r()>C(d)&&(ge(m,Th),hn(g),ge(d,r()))}),zt(()=>(Te(c()),C(v),C(g)),()=>{c()>C(v)&&(ge(m,Gy),hn(g),ge(v,c()))}),zt(()=>(Te(s()),C(u),C(g),Yf),()=>{s()!==C(u)&&(s()==="cleared"?(ge(m,Vy),hn(g)):s()==="lost"&&(ge(m,Yf),hn(g)),ge(u,s()))}),Li(),oo(i,{get enabled(){return n()},get loopUrl(){return C(t)},loopKey:"stax",get cueUrl(){return C(m)},get cueSignal(){return C(g)}}),_n()}const Eh=(i,e)=>{if(i===e)return!0;if(!i||!e)return!1;const t=i.length;if(e.length!==t)return!1;for(let n=0;n<t;n++)if(i[n]!==e[n])return!1;return!0},Xy=()=>{const i=[],n={items:i,remember:(s,r)=>{for(let l=0;l<i.length;l++){const c=i[l];if(Eh(r,c.keys)&&c.promise)return c.promise}const a=s();a.catch(()=>{for(let l=0;l<i.length;l++){const c=i[l];if(Eh(r,c.keys)){i.splice(l,1);break}}});const o={promise:a,keys:r};return i.push(o),o.promise},clear:s=>{for(let r=0;r<i.length;r++){const a=i[r];if(Eh(s,a.keys)){i.splice(r,1);return}}}};return _i("threlte-cache",n),n};const Pc="185",Ys={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Hs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ig=0,Eu=1,sg=2,qy=3,$y=0,Ea=1,Cl=2,Or=3,Yi=0,Ln=1,Ei=2,Ri=0,Zs=1,Au=2,Cu=3,Ru=4,rg=5,Yy=6,ds=100,ag=101,og=102,lg=103,cg=104,hg=200,ug=201,dg=202,fg=203,Rl=204,Il=205,pg=206,mg=207,gg=208,vg=209,_g=210,yg=211,xg=212,bg=213,Sg=214,Pl=0,Dl=1,Ll=2,js=3,Ul=4,Nl=5,Ol=6,Fl=7,po=0,Mg=1,wg=2,gi=0,dd=1,fd=2,pd=3,md=4,gd=5,Dc=6,vd=7,Iu="attached",Tg="detached",Lc=300,Ii=301,_s=302,Aa=303,Ca=304,ta=306,za=1e3,zn=1001,Va=1002,Qt=1003,_d=1004,Zy=1004,Fr=1005,Ky=1005,Vt=1006,Ra=1007,Jy=1007,Ai=1008,jy=1008,kn=1009,yd=1010,xd=1011,$r=1012,Uc=1013,ri=1014,Pn=1015,Pi=1016,Nc=1017,Oc=1018,Yr=1020,bd=35902,Sd=35899,Md=1021,wd=1022,Dn=1023,Di=1026,fs=1027,Fc=1028,mo=1029,ys=1030,kc=1031,Qy=1032,Bc=1033,Ia=33776,Pa=33777,Da=33778,La=33779,kl=35840,Bl=35841,zl=35842,Vl=35843,Gl=36196,Hl=37492,Wl=37496,Xl=37488,ql=37489,Ga=37490,$l=37491,Yl=37808,Zl=37809,Kl=37810,Jl=37811,jl=37812,Ql=37813,ec=37814,tc=37815,nc=37816,ic=37817,sc=37818,rc=37819,ac=37820,oc=37821,lc=36492,cc=36494,hc=36495,uc=36283,dc=36284,Ha=36285,fc=36286,Eg=2200,Ag=2201,Cg=2202,Wa=2300,pc=2301,xl=2302,Pu=2303,Ws=2400,Xs=2401,Xa=2402,zc=2500,Td=2501,ex=0,tx=1,nx=2,Rg=3200,ix=3201,sx=3202,rx=3203,Zi=0,Ig=1,Wi="",Rn="srgb",qa="srgb-linear",$a="linear",Rt="srgb",ax="",ox="rg",lx="ga",cx=0,Vs=7680,hx=7681,ux=7682,dx=7683,fx=34055,px=34056,mx=5386,gx=512,vx=513,_x=514,yx=515,xx=516,bx=517,Sx=518,Du=519,Pg=512,Dg=513,Lg=514,Vc=515,Ug=516,Ng=517,Gc=518,Og=519,Ya=35044,Mx=35048,wx=35040,Tx=35045,Ex=35049,Ax=35041,Cx=35046,Rx=35050,Ix=35042,Px="100",Lu="300 es",Xn=2e3,Qs=2001,Dx={COMPUTE:"compute",RENDER:"render"},Lx={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},Ux={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},Nx={TEXTURE_COMPARE:"depthTextureCompare"};function Ox(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}const Fx={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function kr(i,e){return new Fx[i](e)}function Fg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Za(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kg(){const i=Za("canvas");return i.style.display="block",i}const Zf={};let xs=null;function kx(i){xs=i}function Bx(){return xs}function Ka(...i){const e="THREE."+i.shift();xs?xs("log",e,...i):console.log(e,...i)}function Bg(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ee(...i){i=Bg(i);const e="THREE."+i.shift();if(xs)xs("warn",e,...i);else{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ye(...i){i=Bg(i);const e="THREE."+i.shift();if(xs)xs("error",e,...i);else{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function gs(...i){const e=i.join(" ");e in Zf||(Zf[e]=!0,Ee(...i))}function zx(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Vx={[Pl]:Dl,[Ll]:Ol,[Ul]:Fl,[js]:Nl,[Dl]:Pl,[Ol]:Ll,[Fl]:Ul,[Nl]:js};class yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kf=1234567;const Ks=Math.PI/180,Zr=180/Math.PI;function $n(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function rt(i,e,t){return Math.max(e,Math.min(t,i))}function Ed(i,e){return(i%e+e)%e}function Gx(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Hx(i,e,t){return i!==e?(t-i)/(e-i):0}function Ua(i,e,t){return(1-t)*i+t*e}function Wx(i,e,t,n){return Ua(i,e,1-Math.exp(-t*n))}function Xx(i,e=1){return e-Math.abs(Ed(i,e*2)-e)}function qx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function $x(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Yx(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Zx(i,e){return i+Math.random()*(e-i)}function Kx(i){return i*(.5-Math.random())}function Jx(i){i!==void 0&&(Kf=i);let e=Kf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jx(i){return i*Ks}function Qx(i){return i*Zr}function eb(i){return(i&i-1)===0&&i!==0}function tb(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function nb(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ib(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),h=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*p,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*p,o*c);break;case"ZYZ":i.set(l*p,l*f,o*u,o*c);break;default:Ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const zg={DEG2RAD:Ks,RAD2DEG:Zr,generateUUID:$n,clamp:rt,euclideanModulo:Ed,mapLinear:Gx,inverseLerp:Hx,lerp:Ua,damp:Wx,pingpong:Xx,smoothstep:qx,smootherstep:$x,randInt:Yx,randFloat:Zx,randFloatSpread:Kx,seededRandom:Jx,degToRad:jx,radToDeg:Qx,isPowerOfTwo:eb,ceilPowerOfTwo:tb,floorPowerOfTwo:nb,setQuaternionFromProperEuler:ib,normalize:pt,denormalize:In},df=class df{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};df.prototype.isVector2=!0;let oe=df;class pn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],p=r[a+2],v=r[a+3];if(d!==v||l!==h||c!==f||u!==p){let g=l*h+c*f+u*p+d*v;g<0&&(h=-h,f=-f,p=-p,v=-v,g=-g);let m=1-o;if(g<.9995){const _=Math.acos(g),b=Math.sin(_);m=Math.sin(m*_)/b,o=Math.sin(o*_)/b,l=l*m+h*o,c=c*m+f*o,u=u*m+p*o,d=d*m+v*o}else{l=l*m+h*o,c=c*m+f*o,u=u*m+p*o,d=d*m+v*o;const _=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=_,c*=_,u*=_,d*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+u*d+l*f-c*h,e[t+1]=l*p+u*h+c*d-o*f,e[t+2]=c*p+u*f+o*h-l*d,e[t+3]=u*p-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:Ee("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ff=class ff{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ah.copy(this).projectOnVector(e),this.sub(Ah)}reflect(e){return this.sub(Ah.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ff.prototype.isVector3=!0;let P=ff;const Ah=new P,Jf=new pn,pf=class pf{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],v=s[0],g=s[3],m=s[6],_=s[1],b=s[4],y=s[7],w=s[2],M=s[5],A=s[8];return r[0]=a*v+o*_+l*w,r[3]=a*g+o*b+l*M,r[6]=a*m+o*y+l*A,r[1]=c*v+u*_+d*w,r[4]=c*g+u*b+d*M,r[7]=c*m+u*y+d*A,r[2]=h*v+f*_+p*w,r[5]=h*g+f*b+p*M,r[8]=h*m+f*y+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,p=t*d+n*h+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=d*v,e[1]=(s*c-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ch.makeScale(e,t)),this}rotate(e){return gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ch.makeRotation(-e)),this}translate(e,t){return gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ch.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};pf.prototype.isMatrix3=!0;let ct=pf;const Ch=new ct,jf=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qf=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sb(){const i={enabled:!0,workingColorSpace:qa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Rt&&(s.r=$i(s.r),s.g=$i(s.g),s.b=$i(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Rt&&(s.r=Vr(s.r),s.g=Vr(s.g),s.b=Vr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wi?$a:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return gs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return gs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qa]:{primaries:e,whitePoint:n,transfer:$a,toXYZ:jf,fromXYZ:Qf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:e,whitePoint:n,transfer:Rt,toXYZ:jf,fromXYZ:Qf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),i}const gt=sb();function $i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let fr;class Vg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fr===void 0&&(fr=Za("canvas")),fr.width=e.width,fr.height=e.height;const s=fr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=fr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Za("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=$i(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($i(t[n]/255)*255):t[n]=$i(t[n]);return{data:t,width:e.width,height:e.height}}else return Ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rb=0;class ps{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Rh(s[a].image)):r.push(Rh(s[a]))}else r=Rh(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Rh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ee("Texture: Unable to serialize Texture."),{})}let ab=0;const Ih=new P;class Xt extends yi{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,n=zn,s=zn,r=Vt,a=Ai,o=Dn,l=kn,c=Xt.DEFAULT_ANISOTROPY,u=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=$n(),this.name="",this.source=new ps(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ih).x}get height(){return this.source.getSize(Ih).y}get depth(){return this.source.getSize(Ih).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ee(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ee(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case za:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case Va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case za:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case Va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Lc;Xt.DEFAULT_ANISOTROPY=1;const mf=class mf{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(f+1)/2,w=(m+1)/2,M=(u+h)/4,A=(d+v)/4,x=(p+g)/4;return b>y&&b>w?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=M/n,r=A/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=M/s,r=x/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=A/r,s=x/r),this.set(n,s,r,t),this}let _=Math.sqrt((g-p)*(g-p)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(d-v)/_,this.z=(h-u)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};mf.prototype.isVector4=!0;let Pt=mf;class Ad extends yi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Xt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ps(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends Ad{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hc extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ob extends Yn{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Hc(null,e,t,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}}class Wc extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lb extends Yn{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Wc(null,e,t,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}}const xc=class xc{constructor(e,t,n,s,r,a,o,l,c,u,d,h,f,p,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,d,h,f,p,v,g)}set(e,t,n,s,r,a,o,l,c,u,d,h,f,p,v,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xc().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/pr.setFromMatrixColumn(e,0).length(),r=1/pr.setFromMatrixColumn(e,1).length(),a=1/pr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,f=a*d,p=o*u,v=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,p=c*u,v=c*d;t[0]=h+v*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-p,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,p=c*u,v=c*d;t[0]=h-v*o,t[4]=-a*d,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,p=o*u,v=o*d;t[0]=l*u,t[4]=p*c-f,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,p=o*l,v=o*c;t[0]=l*u,t[4]=v-h*d,t[8]=p*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+p,t[10]=h-v*d}else if(e.order==="XZY"){const h=a*l,f=a*c,p=o*l,v=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+v,t[5]=a*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=o*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cb,e,hb)}lookAt(e,t,n){const s=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),is.crossVectors(n,Hn),is.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),is.crossVectors(n,Hn)),is.normalize(),To.crossVectors(Hn,is),s[0]=is.x,s[4]=To.x,s[8]=Hn.x,s[1]=is.y,s[5]=To.y,s[9]=Hn.y,s[2]=is.z,s[6]=To.z,s[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],v=n[6],g=n[10],m=n[14],_=n[3],b=n[7],y=n[11],w=n[15],M=s[0],A=s[4],x=s[8],T=s[12],I=s[1],D=s[5],k=s[9],L=s[13],V=s[2],O=s[6],N=s[10],F=s[14],z=s[3],W=s[7],ie=s[11],Q=s[15];return r[0]=a*M+o*I+l*V+c*z,r[4]=a*A+o*D+l*O+c*W,r[8]=a*x+o*k+l*N+c*ie,r[12]=a*T+o*L+l*F+c*Q,r[1]=u*M+d*I+h*V+f*z,r[5]=u*A+d*D+h*O+f*W,r[9]=u*x+d*k+h*N+f*ie,r[13]=u*T+d*L+h*F+f*Q,r[2]=p*M+v*I+g*V+m*z,r[6]=p*A+v*D+g*O+m*W,r[10]=p*x+v*k+g*N+m*ie,r[14]=p*T+v*L+g*F+m*Q,r[3]=_*M+b*I+y*V+w*z,r[7]=_*A+b*D+y*O+w*W,r[11]=_*x+b*k+y*N+w*ie,r[15]=_*T+b*L+y*F+w*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],v=e[7],g=e[11],m=e[15],_=l*f-c*h,b=o*f-c*d,y=o*h-l*d,w=a*f-c*u,M=a*h-l*u,A=a*d-o*u;return t*(v*_-g*b+m*y)-n*(p*_-g*w+m*M)+s*(p*b-v*w+m*A)-r*(p*y-v*M+g*A)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],v=e[13],g=e[14],m=e[15],_=t*o-n*a,b=t*l-s*a,y=t*c-r*a,w=n*l-s*o,M=n*c-r*o,A=s*c-r*l,x=u*v-d*p,T=u*g-h*p,I=u*m-f*p,D=d*g-h*v,k=d*m-f*v,L=h*m-f*g,V=_*L-b*k+y*D+w*I-M*T+A*x;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/V;return e[0]=(o*L-l*k+c*D)*O,e[1]=(s*k-n*L-r*D)*O,e[2]=(v*A-g*M+m*w)*O,e[3]=(h*M-d*A-f*w)*O,e[4]=(l*I-a*L-c*T)*O,e[5]=(t*L-s*I+r*T)*O,e[6]=(g*y-p*A-m*b)*O,e[7]=(u*A-h*y+f*b)*O,e[8]=(a*k-o*I+c*x)*O,e[9]=(n*I-t*k-r*x)*O,e[10]=(p*M-v*y+m*_)*O,e[11]=(d*y-u*M-f*_)*O,e[12]=(o*T-a*D-l*x)*O,e[13]=(t*D-n*T+s*x)*O,e[14]=(v*b-p*w-g*_)*O,e[15]=(u*w-d*b+h*_)*O,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,p=r*d,v=a*u,g=a*d,m=o*d,_=l*c,b=l*u,y=l*d,w=n.x,M=n.y,A=n.z;return s[0]=(1-(v+m))*w,s[1]=(f+y)*w,s[2]=(p-b)*w,s[3]=0,s[4]=(f-y)*M,s[5]=(1-(h+m))*M,s[6]=(g+_)*M,s[7]=0,s[8]=(p+b)*A,s[9]=(g-_)*A,s[10]=(1-(h+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=pr.set(s[0],s[1],s[2]).length();const o=pr.set(s[4],s[5],s[6]).length(),l=pr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ci.copy(this);const c=1/a,u=1/o,d=1/l;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=u,ci.elements[5]*=u,ci.elements[6]*=u,ci.elements[8]*=d,ci.elements[9]*=d,ci.elements[10]*=d,t.setFromRotationMatrix(ci),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Xn,l=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let p,v;if(l)p=r/(a-r),v=a*r/(a-r);else if(o===Xn)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Qs)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Xn,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s);let p,v;if(l)p=1/(a-r),v=a/(a-r);else if(o===Xn)p=-2/(a-r),v=-(a+r)/(a-r);else if(o===Qs)p=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};xc.prototype.isMatrix4=!0;let nt=xc;const pr=new P,ci=new nt,cb=new P(0,0,0),hb=new P(1,1,1),is=new P,To=new P,Hn=new P,ep=new nt,tp=new pn;class vi{constructor(e=0,t=0,n=0,s=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ep,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tp.setFromEuler(this),this.setFromQuaternion(tp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class Xc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ub=0;const np=new P,mr=new pn,Oi=new nt,Eo=new P,oa=new P,db=new P,fb=new pn,ip=new P(1,0,0),sp=new P(0,1,0),rp=new P(0,0,1),ap={type:"added"},pb={type:"removed"},gr={type:"childadded",child:null},Ph={type:"childremoved",child:null};class wt extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new P,t=new vi,n=new pn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new ct}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.multiply(mr),this}rotateOnWorldAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.premultiply(mr),this}rotateX(e){return this.rotateOnAxis(ip,e)}rotateY(e){return this.rotateOnAxis(sp,e)}rotateZ(e){return this.rotateOnAxis(rp,e)}translateOnAxis(e,t){return np.copy(e).applyQuaternion(this.quaternion),this.position.add(np.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ip,e)}translateY(e){return this.translateOnAxis(sp,e)}translateZ(e){return this.translateOnAxis(rp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Eo.copy(e):Eo.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(oa,Eo,this.up):Oi.lookAt(Eo,oa,this.up),this.quaternion.setFromRotationMatrix(Oi),s&&(Oi.extractRotation(s.matrixWorld),mr.setFromRotationMatrix(Oi),this.quaternion.premultiply(mr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ap),gr.child=e,this.dispatchEvent(gr),gr.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pb),Ph.child=e,this.dispatchEvent(Ph),Ph.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ap),gr.child=e,this.dispatchEvent(gr),gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,e,db),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,fb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}wt.DEFAULT_UP=new P(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Br extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mb={type:"move"};class bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mb)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Br;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Gg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function Dh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=gt.workingColorSpace){if(e=Ed(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Dh(a,r,e+1/3),this.g=Dh(a,r,e),this.b=Dh(a,r,e-1/3)}return gt.colorSpaceToWorking(this,s),this}setStyle(e,t=Rn){function n(r){r!==void 0&&parseFloat(r)<1&&Ee("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ee("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ee("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rn){const n=Gg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ee("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return gt.workingToColorSpace(bn.copy(this),e),Math.round(rt(bn.r*255,0,255))*65536+Math.round(rt(bn.g*255,0,255))*256+Math.round(rt(bn.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(bn.copy(this),t);const n=bn.r,s=bn.g,r=bn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=Rn){gt.workingToColorSpace(bn.copy(this),e);const t=bn.r,n=bn.g,s=bn.b;return e!==Rn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+t,ss.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ss),e.getHSL(Ao);const n=Ua(ss.h,Ao.h,t),s=Ua(ss.s,Ao.s,t),r=Ua(ss.l,Ao.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Fe;Fe.NAMES=Gg;class qc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Fe(e),this.density=t}clone(){return new qc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class $c{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=t,this.far=n}clone(){return new $c(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Cd extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const hi=new P,Fi=new P,Lh=new P,ki=new P,vr=new P,_r=new P,op=new P,Uh=new P,Nh=new P,Oh=new P,Fh=new Pt,kh=new Pt,Bh=new Pt;class Bn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),hi.subVectors(e,t),s.cross(hi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){hi.subVectors(s,t),Fi.subVectors(n,t),Lh.subVectors(e,t);const a=hi.dot(hi),o=hi.dot(Fi),l=hi.dot(Lh),c=Fi.dot(Fi),u=Fi.dot(Lh),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,p=(a*u-o*l)*h;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ki.x),l.addScaledVector(a,ki.y),l.addScaledVector(o,ki.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Fh.setScalar(0),kh.setScalar(0),Bh.setScalar(0),Fh.fromBufferAttribute(e,t),kh.fromBufferAttribute(e,n),Bh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Fh,r.x),a.addScaledVector(kh,r.y),a.addScaledVector(Bh,r.z),a}static isFrontFacing(e,t,n,s){return hi.subVectors(n,t),Fi.subVectors(e,t),hi.cross(Fi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),hi.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Bn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;vr.subVectors(s,n),_r.subVectors(r,n),Uh.subVectors(e,n);const l=vr.dot(Uh),c=_r.dot(Uh);if(l<=0&&c<=0)return t.copy(n);Nh.subVectors(e,s);const u=vr.dot(Nh),d=_r.dot(Nh);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(vr,a);Oh.subVectors(e,r);const f=vr.dot(Oh),p=_r.dot(Oh);if(p>=0&&f<=p)return t.copy(r);const v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(_r,o);const g=u*p-f*d;if(g<=0&&d-u>=0&&f-p>=0)return op.subVectors(r,s),o=(d-u)/(d-u+(f-p)),t.copy(s).addScaledVector(op,o);const m=1/(g+v+h);return a=v*m,o=h*m,t.copy(n).addScaledVector(vr,a).addScaledVector(_r,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Tn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ui):ui.fromBufferAttribute(r,a),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Co.copy(n.boundingBox)),Co.applyMatrix4(e.matrixWorld),this.union(Co)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(la),Ro.subVectors(this.max,la),yr.subVectors(e.a,la),xr.subVectors(e.b,la),br.subVectors(e.c,la),rs.subVectors(xr,yr),as.subVectors(br,xr),Cs.subVectors(yr,br);let t=[0,-rs.z,rs.y,0,-as.z,as.y,0,-Cs.z,Cs.y,rs.z,0,-rs.x,as.z,0,-as.x,Cs.z,0,-Cs.x,-rs.y,rs.x,0,-as.y,as.x,0,-Cs.y,Cs.x,0];return!zh(t,yr,xr,br,Ro)||(t=[1,0,0,0,1,0,0,0,1],!zh(t,yr,xr,br,Ro))?!1:(Io.crossVectors(rs,as),t=[Io.x,Io.y,Io.z],zh(t,yr,xr,br,Ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bi=[new P,new P,new P,new P,new P,new P,new P,new P],ui=new P,Co=new Tn,yr=new P,xr=new P,br=new P,rs=new P,as=new P,Cs=new P,la=new P,Ro=new P,Io=new P,Rs=new P;function zh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Rs.fromArray(i,r);const o=s.x*Math.abs(Rs.x)+s.y*Math.abs(Rs.y)+s.z*Math.abs(Rs.z),l=e.dot(Rs),c=t.dot(Rs),u=n.dot(Rs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Xi=gb();function gb(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Fn(i){Math.abs(i)>65504&&Ee("DataUtils.toHalfFloat(): Value out of range."),i=rt(i,-65504,65504),Xi.floatView[0]=i;const e=Xi.uint32View[0],t=e>>23&511;return Xi.baseTable[t]+((e&8388607)>>Xi.shiftTable[t])}function Sa(i){const e=i>>10;return Xi.uint32View[0]=Xi.mantissaTable[Xi.offsetTable[e]+(i&1023)]+Xi.exponentTable[e],Xi.floatView[0]}class vb{static toHalfFloat(e){return Fn(e)}static fromHalfFloat(e){return Sa(e)}}const tn=new P,Po=new oe;let _b=0;class Ut extends yi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_b++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ya,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Po.fromBufferAttribute(this,t),Po.applyMatrix3(e),this.setXY(t,Po.x,Po.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ya&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class yb extends Ut{constructor(e,t,n){super(new Int8Array(e),t,n)}}class xb extends Ut{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class bb extends Ut{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class Sb extends Ut{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Rd extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Mb extends Ut{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Id extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class wb extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Sa(this.array[e*this.itemSize]);return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=Fn(t),this}getY(e){let t=Sa(this.array[e*this.itemSize+1]);return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=Fn(t),this}getZ(e){let t=Sa(this.array[e*this.itemSize+2]);return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=Fn(t),this}getW(e){let t=Sa(this.array[e*this.itemSize+3]);return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=Fn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=Fn(t),this.array[e+1]=Fn(n),this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.array[e+0]=Fn(t),this.array[e+1]=Fn(n),this.array[e+2]=Fn(s),this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.array[e+0]=Fn(t),this.array[e+1]=Fn(n),this.array[e+2]=Fn(s),this.array[e+3]=Fn(r),this}}class Be extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Tb=new Tn,ca=new P,Vh=new P;class mn{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Tb.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ca.subVectors(e,this.center);const t=ca.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ca,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ca.copy(e.center).add(Vh)),this.expandByPoint(ca.copy(e.center).sub(Vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Eb=0;const Kn=new nt,Gh=new wt,Sr=new P,Wn=new Tn,ha=new Tn,on=new P;class ht extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ox(e)?Id:Rd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ct().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,n){return Kn.makeTranslation(e,t,n),this.applyMatrix4(Kn),this}scale(e,t,n){return Kn.makeScale(e,t,n),this.applyMatrix4(Kn),this}lookAt(e){return Gh.lookAt(e),Gh.updateMatrix(),this.applyMatrix4(Gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Be(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ha.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(Wn.min,ha.min),Wn.expandByPoint(on),on.addVectors(Wn.max,ha.max),Wn.expandByPoint(on)):(Wn.expandByPoint(ha.min),Wn.expandByPoint(ha.max))}Wn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)on.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(on));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)on.fromBufferAttribute(o,c),l&&(Sr.fromBufferAttribute(e,c),on.add(Sr)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ut(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new P,l[x]=new P;const c=new P,u=new P,d=new P,h=new oe,f=new oe,p=new oe,v=new P,g=new P;function m(x,T,I){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,I),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,I),u.sub(c),d.sub(c),f.sub(h),p.sub(h);const D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(D),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(D),o[x].add(v),o[T].add(v),o[I].add(v),l[x].add(g),l[T].add(g),l[I].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let x=0,T=_.length;x<T;++x){const I=_[x],D=I.start,k=I.count;for(let L=D,V=D+k;L<V;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const b=new P,y=new P,w=new P,M=new P;function A(x){w.fromBufferAttribute(s,x),M.copy(w);const T=o[x];b.copy(T),b.sub(w.multiplyScalar(w.dot(T))).normalize(),y.crossVectors(M,T);const D=y.dot(l[x])<0?-1:1;a.setXYZW(x,b.x,b.y,b.z,D)}for(let x=0,T=_.length;x<T;++x){const I=_[x],D=I.start,k=I.count;for(let L=D,V=D+k;L<V;L+=3)A(e.getX(L+0)),A(e.getX(L+1)),A(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,d=new P;if(e)for(let h=0,f=e.count;h<f;h+=3){const p=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,p=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let m=0;m<u;m++)h[p++]=c[f++]}return new Ut(h,u,d)}if(this.index===null)return Ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ht,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yc{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ya,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const En=new P;class er{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ka("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new er(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ka("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Ab=0;class gn extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ab++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=Zs,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Il,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ee(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ee(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(n.blending=this.blending),this.side!==Yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rl&&(n.blendSrc=this.blendSrc),this.blendDst!==Il&&(n.blendDst=this.blendDst),this.blendEquation!==ds&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Du&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pd extends gn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Mr;const ua=new P,wr=new P,Tr=new P,Er=new oe,da=new oe,Hg=new nt,Do=new P,fa=new P,Lo=new P,lp=new oe,Hh=new oe,cp=new oe;class Wg extends wt{constructor(e=new Pd){if(super(),this.isSprite=!0,this.type="Sprite",Mr===void 0){Mr=new ht;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Yc(t,5);Mr.setIndex([0,1,2,0,2,3]),Mr.setAttribute("position",new er(n,3,0,!1)),Mr.setAttribute("uv",new er(n,2,3,!1))}this.geometry=Mr,this.material=e,this.center=new oe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ye('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),wr.setFromMatrixScale(this.matrixWorld),Hg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Tr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wr.multiplyScalar(-Tr.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Uo(Do.set(-.5,-.5,0),Tr,a,wr,s,r),Uo(fa.set(.5,-.5,0),Tr,a,wr,s,r),Uo(Lo.set(.5,.5,0),Tr,a,wr,s,r),lp.set(0,0),Hh.set(1,0),cp.set(1,1);let o=e.ray.intersectTriangle(Do,fa,Lo,!1,ua);if(o===null&&(Uo(fa.set(-.5,.5,0),Tr,a,wr,s,r),Hh.set(0,1),o=e.ray.intersectTriangle(Do,Lo,fa,!1,ua),o===null))return;const l=e.ray.origin.distanceTo(ua);l<e.near||l>e.far||t.push({distance:l,point:ua.clone(),uv:Bn.getInterpolation(ua,Do,fa,Lo,lp,Hh,cp,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Uo(i,e,t,n,s,r){Er.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(da.x=r*Er.x-s*Er.y,da.y=s*Er.x+r*Er.y):da.copy(Er),i.copy(e),i.x+=da.x,i.y+=da.y,i.applyMatrix4(Hg)}const No=new P,hp=new P;class Xg extends wt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,s=t.length;n<s;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const s=this.levels;let r;for(r=0;r<s.length&&!(t<s[r].distance);r++);return s.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const s=t.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,s;for(n=1,s=t.length;n<s;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){No.setFromMatrixPosition(this.matrixWorld);const s=e.ray.origin.distanceTo(No);this.getObjectForDistance(s).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){No.setFromMatrixPosition(e.matrixWorld),hp.setFromMatrixPosition(this.matrixWorld);const n=No.distanceTo(hp)/e.zoom;t[0].object.visible=!0;let s,r;for(s=1,r=t.length;s<r;s++){let a=t[s].distance;if(t[s].object.visible&&(a-=a*t[s].hysteresis),n>=a)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)t[s].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let s=0,r=n.length;s<r;s++){const a=n[s];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const zi=new P,Wh=new P,Oo=new P,os=new P,Xh=new P,Fo=new P,qh=new P;class rr{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Wh.copy(e).add(t).multiplyScalar(.5),Oo.copy(t).sub(e).normalize(),os.copy(this.origin).sub(Wh);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Oo),o=os.dot(this.direction),l=-os.dot(Oo),c=os.lengthSq(),u=Math.abs(1-a*a);let d,h,f,p;if(u>0)if(d=a*l-o,h=a*o-l,p=r*u,d>=0)if(h>=-p)if(h<=p){const v=1/u;d*=v,h*=v,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Wh).addScaledVector(Oo,h),f}intersectSphere(e,t){zi.subVectors(e.center,this.origin);const n=zi.dot(this.direction),s=zi.dot(zi)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,n,s,r){Xh.subVectors(t,e),Fo.subVectors(n,e),qh.crossVectors(Xh,Fo);let a=this.direction.dot(qh),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;os.subVectors(this.origin,e);const l=o*this.direction.dot(Fo.crossVectors(os,Fo));if(l<0)return null;const c=o*this.direction.dot(Xh.cross(os));if(c<0||l+c>a)return null;const u=-o*os.dot(qh);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qi extends gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const up=new nt,Is=new rr,ko=new mn,dp=new P,Bo=new P,zo=new P,Vo=new P,$h=new P,Go=new P,fp=new P,Ho=new P;class en extends wt{constructor(e=new ht,t=new Qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Go.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&($h.fromBufferAttribute(d,e),a?Go.addScaledVector($h,u):Go.addScaledVector($h.sub(t),u))}t.add(Go)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(r),Is.copy(e.ray).recast(e.near),!(ko.containsPoint(Is.origin)===!1&&(Is.intersectSphere(ko,dp)===null||Is.origin.distanceToSquared(dp)>(e.far-e.near)**2))&&(up.copy(r).invert(),Is.copy(e.ray).applyMatrix4(up),!(n.boundingBox!==null&&Is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Is)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=h.length;p<v;p++){const g=h[p],m=a[g.materialIndex],_=Math.max(g.start,f.start),b=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,w=b;y<w;y+=3){const M=o.getX(y),A=o.getX(y+1),x=o.getX(y+2);s=Wo(this,m,e,n,c,u,d,M,A,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const _=o.getX(g),b=o.getX(g+1),y=o.getX(g+2);s=Wo(this,a,e,n,c,u,d,_,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=h.length;p<v;p++){const g=h[p],m=a[g.materialIndex],_=Math.max(g.start,f.start),b=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,w=b;y<w;y+=3){const M=y,A=y+1,x=y+2;s=Wo(this,m,e,n,c,u,d,M,A,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const _=g,b=g+1,y=g+2;s=Wo(this,a,e,n,c,u,d,_,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Cb(i,e,t,n,s,r,a,o){let l;if(e.side===Ln?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Yi,o),l===null)return null;Ho.copy(o),Ho.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ho);return c<t.near||c>t.far?null:{distance:c,point:Ho.clone(),object:i}}function Wo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Bo),i.getVertexPosition(l,zo),i.getVertexPosition(c,Vo);const u=Cb(i,e,t,n,Bo,zo,Vo,fp);if(u){const d=new P;Bn.getBarycoord(fp,Bo,zo,Vo,d),s&&(u.uv=Bn.getInterpolatedAttribute(s,o,l,c,d,new oe)),r&&(u.uv1=Bn.getInterpolatedAttribute(r,o,l,c,d,new oe)),a&&(u.normal=Bn.getInterpolatedAttribute(a,o,l,c,d,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new P,materialIndex:0};Bn.getNormal(Bo,zo,Vo,h.normal),u.face=h,u.barycoord=d}return u}const pa=new Pt,pp=new Pt,mp=new Pt,Rb=new Pt,gp=new nt,Xo=new P,Yh=new mn,vp=new nt,Zh=new rr;class qg extends en{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Iu,this.bindMatrix=new nt,this.bindMatrixInverse=new nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Tn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xo),this.boundingBox.expandByPoint(Xo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xo),this.boundingSphere.expandByPoint(Xo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yh.copy(this.boundingSphere),Yh.applyMatrix4(s),e.ray.intersectsSphere(Yh)!==!1&&(vp.copy(s).invert(),Zh.copy(e.ray).applyMatrix4(vp),!(this.boundingBox!==null&&Zh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Zh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Pt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Iu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Tg?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ee("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;pp.fromBufferAttribute(s.attributes.skinIndex,e),mp.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(pa.copy(t),t.set(0,0,0,0)):(pa.set(...t,1),t.set(0,0,0)),pa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=mp.getComponent(r);if(a!==0){const o=pp.getComponent(r);gp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Rb.copy(pa).applyMatrix4(gp),a)}}return t.isVector4&&(t.w=pa.w),t.applyMatrix4(this.bindMatrixInverse)}}class Dd extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ni extends Xt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Qt,u=Qt,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _p=new nt,Ib=new nt;class Zc{constructor(e=[],t=[]){this.uuid=$n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ee("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new nt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new nt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Ib;_p.multiplyMatrices(o,t[r]),_p.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Zc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ni(t,e,e,Dn,Pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Ee("Skeleton: No bone found with UUID:",r),a=new Dd),this.bones.push(a),this.boneInverses.push(new nt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Kr extends Ut{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ar=new nt,yp=new nt,qo=[],xp=new Tn,Pb=new nt,ma=new en,ga=new mn;class $g extends en{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Kr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Pb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ar),xp.copy(e.boundingBox).applyMatrix4(Ar),this.boundingBox.union(xp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ar),ga.copy(e.boundingSphere).applyMatrix4(Ar),this.boundingSphere.union(ga)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ma.geometry=this.geometry,ma.material=this.material,ma.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ga.copy(this.boundingSphere),ga.applyMatrix4(n),e.ray.intersectsSphere(ga)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ar),yp.multiplyMatrices(n,Ar),ma.matrixWorld=yp,ma.raycast(e,qo);for(let a=0,o=qo.length;a<o;a++){const l=qo[a];l.instanceId=r,l.object=this,t.push(l)}qo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Kr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ni(new Float32Array(s*this.count),s,this.count,Fc,Pn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Kh=new P,Db=new P,Lb=new ct;class Hi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Kh.subVectors(n,t).cross(Db.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Kh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lb.getNormalMatrix(e),s=this.coplanarPoint(Kh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ps=new mn,Ub=new oe(.5,.5),$o=new P;class tr{constructor(e=new Hi,t=new Hi,n=new Hi,s=new Hi,r=new Hi,a=new Hi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],p=r[8],v=r[9],g=r[10],m=r[11],_=r[12],b=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-a,f-u,m-p,w-_).normalize(),s[1].setComponents(c+a,f+u,m+p,w+_).normalize(),s[2].setComponents(c+o,f+d,m+v,w+b).normalize(),s[3].setComponents(c-o,f-d,m-v,w-b).normalize(),n)s[4].setComponents(l,h,g,y).normalize(),s[5].setComponents(c-l,f-h,m-g,w-y).normalize();else if(s[4].setComponents(c-l,f-h,m-g,w-y).normalize(),t===Xn)s[5].setComponents(c+l,f+h,m+g,w+y).normalize();else if(t===Qs)s[5].setComponents(l,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){Ps.center.set(0,0,0);const t=Ub.distanceTo(e.center);return Ps.radius=.7071067811865476+t,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if($o.x=s.normal.x>0?e.max.x:e.min.x,$o.y=s.normal.y>0?e.max.y:e.min.y,$o.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint($o)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const bp=new nt;class Kc{constructor(){this.coordinateSystem=Xn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];bp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new tr),n[s].setFromProjectionMatrix(bp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new tr),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new Kc().copy(this)}}function Jh(i,e){return i-e}function Nb(i,e){return i.z-e.z}function Ob(i,e){return e.z-i.z}class Fb{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,s){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=s}reset(){this.list.length=0,this.index=0}}const Nn=new nt,kb=new Fe(1,1,1),Bb=new tr,zb=new Kc,Yo=new Tn,Ds=new mn,va=new P,Sp=new P,Vb=new P,jh=new Fb,Sn=new en,Zo=[];function Gb(i,e,t=0){const n=e.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==e.array.constructor){const s=i.count;for(let r=0;r<s;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,i.getComponent(r,a))}else e.array.set(i.array,t*n);e.needsUpdate=!0}function Ls(i,e){if(i.constructor!==e.constructor){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++)e[n]=i[n]}else{const t=Math.min(i.length,e.length);e.set(new i.constructor(i.buffer,0,t))}}class Yg extends en{constructor(e,t,n=t*2,s){super(new ht,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new ni(t,e,e,Dn,Pn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new ni(t,e,e,mo,ri);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new ni(t,e,e,Dn,Pn);n.colorSpace=gt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const a=e.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,u=new o.constructor(n*l),d=new Ut(u,l,c);t.setAttribute(r,d)}if(e.getIndex()!==null){const r=n>65535?new Uint32Array(s):new Uint16Array(s);t.setIndex(new Ut(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const s=e.getAttribute(n),r=t.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,Nn),this.getBoundingBoxAt(r,Yo).applyMatrix4(Nn),e.union(Yo)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,Nn),this.getBoundingSphereAt(r,Ds).applyMatrix4(Nn),e.union(Ds)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Jh),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=n):(s=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;Nn.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(kb.toArray(a.image.data,s*4),a.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=n===-1?a.count:n),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Jh),l=this._availableGeometryIds.shift(),r[l]=s):(l=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(l,e),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(s&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const u in n.attributes){const d=t.getAttribute(u),h=n.getAttribute(u);Gb(d,h,l);const f=d.itemSize;for(let p=d.count,v=c;p<v;p++){const g=l+p;for(let m=0;m<f;m++)h.setComponent(g,m,0)}h.needsUpdate=!0,h.addUpdateRange(l*f,c*f)}if(s){const u=o.indexStart,d=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let h=0;h<a.count;h++)r.setX(u+h,l+a.getX(h));for(let h=a.count,f=d;h<f;h++)r.setX(u+h,l);r.needsUpdate=!0,r.addUpdateRange(u,o.reservedIndexCount)}return o.start=s?o.indexStart:o.vertexStart,o.count=s?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let s=0,r=n.length;s<r;s++)n[s].active&&n[s].geometryIndex===e&&this.deleteInstance(s);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,s=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){const l=s[a],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){const{indexStart:u,vertexStart:d,reservedIndexCount:h}=c,f=r.index,p=f.array,v=e-d;for(let g=u;g<u+h;g++)p[g]=p[g]+v;f.array.copyWithin(t,u,u+h),f.addUpdateRange(t,h),f.needsUpdate=!0,c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:u,reservedVertexCount:d}=c,h=r.attributes;for(const f in h){const p=h[f],{array:v,itemSize:g}=p;v.copyWithin(e*g,u*g,(u+d)*g),p.addUpdateRange(e*g,d*g),p.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[e];if(s.boundingBox===null){const r=new Tn,a=n.index,o=n.attributes.position;for(let l=s.start,c=s.start+s.count;l<c;l++){let u=l;a&&(u=a.getX(u)),r.expandByPoint(va.fromBufferAttribute(o,u))}s.boundingBox=r}return t.copy(s.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[e];if(s.boundingSphere===null){const r=new mn;this.getBoundingBoxAt(e,Yo),Yo.getCenter(r.center);const a=n.index,o=n.attributes.position;let l=0;for(let c=s.start,u=s.start+s.count;c<u;c++){let d=c;a&&(d=a.getX(d)),va.fromBufferAttribute(o,d),l=Math.max(l,r.center.distanceToSquared(va))}r.radius=Math.sqrt(l),s.boundingSphere=r}return t.copy(s.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,s=this._matricesTexture.image.data;return t.toArray(s,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(Jh);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const s=new Int32Array(e),r=new Int32Array(e);Ls(this._multiDrawCounts,s),Ls(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=e;const a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),Ls(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),Ls(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Ls(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new ht,this._initializeGeometry(r));const a=this.geometry;r.index&&Ls(r.index.array,a.index.array);for(const o in r.attributes)Ls(r.attributes[o].array,a.attributes[o].array)}raycast(e,t){const n=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,a=this.geometry;Sn.material=this.material,Sn.geometry.index=a.index,Sn.geometry.attributes=a.attributes,Sn.geometry.boundingBox===null&&(Sn.geometry.boundingBox=new Tn),Sn.geometry.boundingSphere===null&&(Sn.geometry.boundingSphere=new mn);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;const c=n[o].geometryIndex,u=s[c];Sn.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(o,Sn.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,Sn.geometry.boundingBox),this.getBoundingSphereAt(c,Sn.geometry.boundingSphere),Sn.raycast(e,Zo);for(let d=0,h=Zo.length;d<h;d++){const f=Zo[d];f.object=this,f.batchId=o,t.push(f)}Zo.length=0}Sn.material=null,Sn.geometry.index=null,Sn.geometry.attributes={},Sn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=s.getIndex();let o=a===null?1:a.array.BYTES_PER_ELEMENT,l=1;r.wireframe&&(l=2,o=s.attributes.position.count>65535?4:2);const c=this._instanceInfo,u=this._multiDrawStarts,d=this._multiDrawCounts,h=this._geometryInfo,f=this.perObjectFrustumCulled,p=this._indirectTexture,v=p.image.data,g=n.isArrayCamera?zb:Bb;f&&(n.isArrayCamera?g.setFromArrayCamera(n):(Nn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),g.setFromProjectionMatrix(Nn,n.coordinateSystem,n.reversedDepth)));let m=0;if(this.sortObjects){Nn.copy(this.matrixWorld).invert(),va.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Nn),Sp.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Nn);for(let y=0,w=c.length;y<w;y++)if(c[y].visible&&c[y].active){const M=c[y].geometryIndex;this.getMatrixAt(y,Nn),this.getBoundingSphereAt(M,Ds).applyMatrix4(Nn);let A=!1;if(f&&(A=!g.intersectsSphere(Ds)),!A){const x=h[M],T=Vb.subVectors(Ds.center,va).dot(Sp);jh.push(x.start,x.count,T,y)}}const _=jh.list,b=this.customSort;b===null?_.sort(r.transparent?Ob:Nb):b.call(this,_,n);for(let y=0,w=_.length;y<w;y++){const M=_[y];u[m]=M.start*o*l,d[m]=M.count*l,v[m]=M.index,m++}jh.reset()}else for(let _=0,b=c.length;_<b;_++)if(c[_].visible&&c[_].active){const y=c[_].geometryIndex;let w=!1;if(f&&(this.getMatrixAt(_,Nn),this.getBoundingSphereAt(y,Ds).applyMatrix4(Nn),w=!g.intersectsSphere(Ds)),!w){const M=h[y];u[m]=M.start*o*l,d[m]=M.count*l,v[m]=_,m++}}p.needsUpdate=!0,this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(e,t,n,s,r,a){this.onBeforeRender(e,null,s,r,a)}}class Un extends gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mc=new P,gc=new P,Mp=new nt,_a=new rr,Ko=new mn,Qh=new P,wp=new P;class bs extends wt{constructor(e=new ht,t=new Un){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)mc.fromBufferAttribute(t,s-1),gc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=mc.distanceTo(gc);e.setAttribute("lineDistance",new Be(n,1))}else Ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(s),Ko.radius+=r,e.ray.intersectsSphere(Ko)===!1)return;Mp.copy(s).invert(),_a.copy(e.ray).applyMatrix4(Mp);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let v=f,g=p-1;v<g;v+=c){const m=u.getX(v),_=u.getX(v+1),b=Jo(this,e,_a,l,m,_,v);b&&t.push(b)}if(this.isLineLoop){const v=u.getX(p-1),g=u.getX(f),m=Jo(this,e,_a,l,v,g,p-1);m&&t.push(m)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=f,g=p-1;v<g;v+=c){const m=Jo(this,e,_a,l,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){const v=Jo(this,e,_a,l,p-1,f,p-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Jo(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(mc.fromBufferAttribute(o,s),gc.fromBufferAttribute(o,r),t.distanceSqToSegment(mc,gc,Qh,wp)>n)return;Qh.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Qh);if(!(c<e.near||c>e.far))return{distance:c,point:wp.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Tp=new P,Ep=new P;class Ni extends bs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Tp.fromBufferAttribute(t,s),Ep.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Tp.distanceTo(Ep);e.setAttribute("lineDistance",new Be(n,1))}else Ee("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zg extends bs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}let Ld=class extends gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};const Ap=new nt,Uu=new rr,jo=new mn,Qo=new P;class Kg extends wt{constructor(e=new ht,t=new Ld){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(s),jo.radius+=r,e.ray.intersectsSphere(jo)===!1)return;Ap.copy(s).invert(),Uu.copy(e.ray).applyMatrix4(Ap);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=h,v=f;p<v;p++){const g=c.getX(p);Qo.fromBufferAttribute(d,g),Cp(Qo,g,l,s,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=h,v=f;p<v;p++)Qo.fromBufferAttribute(d,p),Cp(Qo,p,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Cp(i,e,t,n,s,r,a){const o=Uu.distanceSqToPoint(i);if(o<t){const l=new P;Uu.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Jg extends Xt{constructor(e,t,n,s,r=Vt,a=Vt,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function d(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Hb extends Jg{constructor(e,t,n,s,r,a,o,l){super({},e,t,n,s,r,a,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class Wb extends Xt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Qt,this.minFilter=Qt,this.generateMipmaps=!1,this.needsUpdate=!0}}class Jc extends Xt{constructor(e,t,n,s,r,a,o,l,c,u,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Xb extends Jc{constructor(e,t,n,s,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=zn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qb extends Jc{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Ii),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class go extends Xt{constructor(e=[],t=Ii,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $b extends Xt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yb extends Xt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;const u=e?e.parentNode:null;u!==null&&"requestPaint"in u&&(u.onpaint=()=>{this.needsUpdate=!0},u.requestPaint())}dispose(){const e=this.image?this.image.parentNode:null;e!==null&&"onpaint"in e&&(e.onpaint=null),super.dispose()}}class nr extends Xt{constructor(e,t,n=ri,s,r,a,o=Qt,l=Qt,c,u=Di,d=1){if(u!==Di&&u!==fs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ps(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class jg extends nr{constructor(e,t=ri,n=Ii,s,r,a=Qt,o=Qt,l,c=Di){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ud extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ms extends ht{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(u,3)),this.setAttribute("uv",new Be(d,2));function p(v,g,m,_,b,y,w,M,A,x,T){const I=y/A,D=w/x,k=y/2,L=w/2,V=M/2,O=A+1,N=x+1;let F=0,z=0;const W=new P;for(let ie=0;ie<N;ie++){const Q=ie*D-L;for(let re=0;re<O;re++){const Pe=re*I-k;W[v]=Pe*_,W[g]=Q*b,W[m]=V,c.push(W.x,W.y,W.z),W[v]=0,W[g]=0,W[m]=M>0?1:-1,u.push(W.x,W.y,W.z),d.push(re/A),d.push(1-ie/x),F+=1}}for(let ie=0;ie<x;ie++)for(let Q=0;Q<A;Q++){const re=h+Q+O*ie,Pe=h+Q+O*(ie+1),dt=h+(Q+1)+O*(ie+1),at=h+(Q+1)+O*ie;l.push(re,Pe,at),l.push(Pe,dt,at),z+=6}o.addGroup(f,z,T),f+=z,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class jc extends ht{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],u=t/2,d=Math.PI/2*e,h=t,f=2*d+h,p=n*2+r,v=s+1,g=new P,m=new P;for(let _=0;_<=p;_++){let b=0,y=0,w=0,M=0;if(_<=n){const T=_/n,I=T*Math.PI/2;y=-u-e*Math.cos(I),w=e*Math.sin(I),M=-e*Math.cos(I),b=T*d}else if(_<=n+r){const T=(_-n)/r;y=-u+T*t,w=e,M=0,b=d+T*h}else{const T=(_-n-r)/n,I=T*Math.PI/2;y=u+e*Math.sin(I),w=e*Math.cos(I),M=e*Math.sin(I),b=d+h+T*d}const A=Math.max(0,Math.min(1,b/f));let x=0;_===0?x=.5/s:_===p&&(x=-.5/s);for(let T=0;T<=s;T++){const I=T/s,D=I*Math.PI*2,k=Math.sin(D),L=Math.cos(D);m.x=-w*L,m.y=y,m.z=w*k,o.push(m.x,m.y,m.z),g.set(-w*L,M,w*k),g.normalize(),l.push(g.x,g.y,g.z),c.push(I+x,A)}if(_>0){const T=(_-1)*v;for(let I=0;I<s;I++){const D=T+I,k=T+I+1,L=_*v+I,V=_*v+I+1;a.push(D,k,L),a.push(k,V,L)}}}this.setIndex(a),this.setAttribute("position",new Be(o,3)),this.setAttribute("normal",new Be(l,3)),this.setAttribute("uv",new Be(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Qc extends ht{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new P,u=new oe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Be(a,3)),this.setAttribute("normal",new Be(o,3)),this.setAttribute("uv",new Be(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class vo extends ht{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let p=0;const v=[],g=n/2;let m=0;_(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Be(d,3)),this.setAttribute("normal",new Be(h,3)),this.setAttribute("uv",new Be(f,2));function _(){const y=new P,w=new P;let M=0;const A=(t-e)/n;for(let x=0;x<=r;x++){const T=[],I=x/r,D=I*(t-e)+e;for(let k=0;k<=s;k++){const L=k/s,V=L*l+o,O=Math.sin(V),N=Math.cos(V);w.x=D*O,w.y=-I*n+g,w.z=D*N,d.push(w.x,w.y,w.z),y.set(O,A,N).normalize(),h.push(y.x,y.y,y.z),f.push(L,1-I),T.push(p++)}v.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){const I=v[T][x],D=v[T+1][x],k=v[T+1][x+1],L=v[T][x+1];(e>0||T!==0)&&(u.push(I,D,L),M+=3),(t>0||T!==r-1)&&(u.push(D,k,L),M+=3)}c.addGroup(m,M,0),m+=M}function b(y){const w=p,M=new oe,A=new P;let x=0;const T=y===!0?e:t,I=y===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,g*I,0),h.push(0,I,0),f.push(.5,.5),p++;const D=p;for(let k=0;k<=s;k++){const V=k/s*l+o,O=Math.cos(V),N=Math.sin(V);A.x=T*N,A.y=g*I,A.z=T*O,d.push(A.x,A.y,A.z),h.push(0,I,0),M.x=O*.5+.5,M.y=N*.5*I+.5,f.push(M.x,M.y),p++}for(let k=0;k<s;k++){const L=w+k,V=D+k;y===!0?u.push(V,V+1,L):u.push(V+1,V,L),x+=3}c.addGroup(m,x,y===!0?1:2),m+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _o extends vo{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new _o(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ws extends ht{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Be(r,3)),this.setAttribute("normal",new Be(r.slice(),3)),this.setAttribute("uv",new Be(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const b=new P,y=new P,w=new P;for(let M=0;M<t.length;M+=3)f(t[M+0],b),f(t[M+1],y),f(t[M+2],w),l(b,y,w,_)}function l(_,b,y,w){const M=w+1,A=[];for(let x=0;x<=M;x++){A[x]=[];const T=_.clone().lerp(y,x/M),I=b.clone().lerp(y,x/M),D=M-x;for(let k=0;k<=D;k++)k===0&&x===M?A[x][k]=T:A[x][k]=T.clone().lerp(I,k/D)}for(let x=0;x<M;x++)for(let T=0;T<2*(M-x)-1;T++){const I=Math.floor(T/2);T%2===0?(h(A[x][I+1]),h(A[x+1][I]),h(A[x][I])):(h(A[x][I+1]),h(A[x+1][I+1]),h(A[x+1][I]))}}function c(_){const b=new P;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(_),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function u(){const _=new P;for(let b=0;b<r.length;b+=3){_.x=r[b+0],_.y=r[b+1],_.z=r[b+2];const y=g(_)/2/Math.PI+.5,w=m(_)/Math.PI+.5;a.push(y,1-w)}p(),d()}function d(){for(let _=0;_<a.length;_+=6){const b=a[_+0],y=a[_+2],w=a[_+4],M=Math.max(b,y,w),A=Math.min(b,y,w);M>.9&&A<.1&&(b<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),w<.2&&(a[_+4]+=1))}}function h(_){r.push(_.x,_.y,_.z)}function f(_,b){const y=_*3;b.x=e[y+0],b.y=e[y+1],b.z=e[y+2]}function p(){const _=new P,b=new P,y=new P,w=new P,M=new oe,A=new oe,x=new oe;for(let T=0,I=0;T<r.length;T+=9,I+=6){_.set(r[T+0],r[T+1],r[T+2]),b.set(r[T+3],r[T+4],r[T+5]),y.set(r[T+6],r[T+7],r[T+8]),M.set(a[I+0],a[I+1]),A.set(a[I+2],a[I+3]),x.set(a[I+4],a[I+5]),w.copy(_).add(b).add(y).divideScalar(3);const D=g(w);v(M,I+0,_,D),v(A,I+2,b,D),v(x,I+4,y,D)}}function v(_,b,y,w){w<0&&_.x===1&&(a[b]=_.x-1),y.x===0&&y.z===0&&(a[b]=w/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.vertices,e.indices,e.radius,e.detail)}}class eh extends ws{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new eh(e.radius,e.detail)}}const el=new P,tl=new P,eu=new P,nl=new Bn;class Qg extends ht{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Ks*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:v,b:g,c:m}=nl;if(v.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),nl.getNormal(eu),d[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){const b=(_+1)%3,y=d[_],w=d[b],M=nl[u[_]],A=nl[u[b]],x=`${y}_${w}`,T=`${w}_${y}`;T in h&&h[T]?(eu.dot(h[T].normal)<=r&&(f.push(M.x,M.y,M.z),f.push(A.x,A.y,A.z)),h[T]=null):x in h||(h[x]={index0:c[_],index1:c[b],normal:eu.clone()})}}for(const p in h)if(h[p]){const{index0:v,index1:g}=h[p];el.fromBufferAttribute(o,v),tl.fromBufferAttribute(o,g),f.push(el.x,el.y,el.z),f.push(tl.x,tl.y,tl.z)}this.setAttribute("position",new Be(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class xi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ee("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new oe:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,s=[],r=[],a=[],o=new P,l=new nt;for(let f=0;f<=e;f++){const p=f/e;s[f]=this.getTangentAt(p,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(rt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(rt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class th extends xi{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new oe){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class e0 extends th{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Nd(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Rp=new P,Ip=new P,tu=new Nd,nu=new Nd,iu=new Nd;class t0 extends xi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Ip.subVectors(s[0],s[1]).add(s[0]),c=Ip);const d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Rp.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Rp),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),tu.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,p,v,g),nu.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,p,v,g),iu.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,p,v,g)}else this.curveType==="catmullrom"&&(tu.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),nu.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),iu.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(tu.calc(l),nu.calc(l),iu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Pp(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Zb(i,e){const t=1-i;return t*t*e}function Kb(i,e){return 2*(1-i)*i*e}function Jb(i,e){return i*i*e}function Na(i,e,t,n){return Zb(i,e)+Kb(i,t)+Jb(i,n)}function jb(i,e){const t=1-i;return t*t*t*e}function Qb(i,e){const t=1-i;return 3*t*t*i*e}function eS(i,e){return 3*(1-i)*i*i*e}function tS(i,e){return i*i*i*e}function Oa(i,e,t,n,s){return jb(i,e)+Qb(i,t)+eS(i,n)+tS(i,s)}class Od extends xi{constructor(e=new oe,t=new oe,n=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new oe){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Oa(e,s.x,r.x,a.x,o.x),Oa(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class n0 extends xi{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Oa(e,s.x,r.x,a.x,o.x),Oa(e,s.y,r.y,a.y,o.y),Oa(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fd extends xi{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class i0 extends xi{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kd extends xi{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Na(e,s.x,r.x,a.x),Na(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bd extends xi{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Na(e,s.x,r.x,a.x),Na(e,s.y,r.y,a.y),Na(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zd extends xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Pp(o,l.x,c.x,u.x,d.x),Pp(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new oe().fromArray(s))}return this}}var vc=Object.freeze({__proto__:null,ArcCurve:e0,CatmullRomCurve3:t0,CubicBezierCurve:Od,CubicBezierCurve3:n0,EllipseCurve:th,LineCurve:Fd,LineCurve3:i0,QuadraticBezierCurve:kd,QuadraticBezierCurve3:Bd,SplineCurve:zd});class s0 extends xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new vc[s.type]().fromJSON(s))}return this}}class Ja extends s0{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Fd(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new kd(this.currentPoint.clone(),new oe(e,t),new oe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new Od(this.currentPoint.clone(),new oe(e,t),new oe(n,s),new oe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new zd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){const c=new th(e,t,n,s,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class yo extends Ja{constructor(e){super(e),this.uuid=$n(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Ja().fromJSON(s))}return this}}function nS(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=r0(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=oS(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let u=o,d=l;for(let h=t;h<s;h+=t){const f=i[h],p=i[h+1];f<o&&(o=f),p<l&&(l=p),f>u&&(u=f),p>d&&(d=p)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return ja(r,a,t,o,l,c,0),a}function r0(i,e,t,n,s){let r;if(s===_S(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Dp(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Dp(a/n|0,i[a],i[a+1],r);return r&&Jr(r,r.next)&&(eo(r),r=r.next),r}function ir(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Jr(t,t.next)||Ht(t.prev,t,t.next)===0)){if(eo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ja(i,e,t,n,s,r,a){if(!i)return;!a&&r&&dS(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?sS(i,n,s,r):iS(i)){e.push(l.i,i.i,c.i),eo(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=rS(ir(i),e),ja(i,e,t,n,s,r,2)):a===2&&aS(i,e,t,n,s,r):ja(ir(i),e,t,n,s,r,1);break}}}function iS(i){const e=i.prev,t=i,n=i.next;if(Ht(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),f=Math.max(o,l,c);let p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&Ma(s,o,r,l,a,c,p.x,p.y)&&Ht(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function sS(i,e,t,n){const s=i.prev,r=i,a=i.next;if(Ht(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,l,c),p=Math.min(u,d,h),v=Math.max(o,l,c),g=Math.max(u,d,h),m=Nu(f,p,e,t,n),_=Nu(v,g,e,t,n);let b=i.prevZ,y=i.nextZ;for(;b&&b.z>=m&&y&&y.z<=_;){if(b.x>=f&&b.x<=v&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&Ma(o,u,l,d,c,h,b.x,b.y)&&Ht(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&Ma(o,u,l,d,c,h,y.x,y.y)&&Ht(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=v&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&Ma(o,u,l,d,c,h,b.x,b.y)&&Ht(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&Ma(o,u,l,d,c,h,y.x,y.y)&&Ht(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function rS(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Jr(n,s)&&o0(n,t,t.next,s)&&Qa(n,s)&&Qa(s,n)&&(e.push(n.i,t.i,s.i),eo(t),eo(t.next),t=i=s),t=t.next}while(t!==i);return ir(t)}function aS(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&mS(a,o)){let l=l0(a,o);a=ir(a,a.next),l=ir(l,l.next),ja(a,e,t,n,s,r,0),ja(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function oS(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=r0(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(pS(c))}s.sort(lS);for(let r=0;r<s.length;r++)t=cS(s[r],t);return t}function lS(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function cS(i,e){const t=hS(i,e);if(!t)return e;const n=l0(t,i);return ir(n,n.next),ir(t,t.next)}function hS(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(Jr(i,t))return t;do{if(Jr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&a0(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const d=Math.abs(s-t.y)/(n-t.x);Qa(t,i)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&uS(a,t)))&&(a=t,u=d)}t=t.next}while(t!==o);return a}function uS(i,e){return Ht(i.prev,i,e.prev)<0&&Ht(e.next,i,i.next)<0}function dS(i,e,t,n){let s=i;do s.z===0&&(s.z=Nu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,fS(s)}function fS(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Nu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function pS(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function a0(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ma(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&a0(i,e,t,n,s,r,a,o)}function mS(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!gS(i,e)&&(Qa(i,e)&&Qa(e,i)&&vS(i,e)&&(Ht(i.prev,i,e.prev)||Ht(i,e.prev,e))||Jr(i,e)&&Ht(i.prev,i,i.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Jr(i,e){return i.x===e.x&&i.y===e.y}function o0(i,e,t,n){const s=sl(Ht(i,e,t)),r=sl(Ht(i,e,n)),a=sl(Ht(t,n,i)),o=sl(Ht(t,n,e));return!!(s!==r&&a!==o||s===0&&il(i,t,e)||r===0&&il(i,n,e)||a===0&&il(t,i,n)||o===0&&il(t,e,n))}function il(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function sl(i){return i>0?1:i<0?-1:0}function gS(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&o0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Qa(i,e){return Ht(i.prev,i,i.next)<0?Ht(i,e,i.next)>=0&&Ht(i,i.prev,e)>=0:Ht(i,e,i.prev)<0||Ht(i,i.next,e)<0}function vS(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function l0(i,e){const t=Ou(i.i,i.x,i.y),n=Ou(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Dp(i,e,t,n){const s=Ou(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function eo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ou(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _S(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class yS{static triangulate(e,t,n=2){return nS(e,t,n)}}class pi{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return pi.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Lp(e),Up(n,e);let a=e.length;t.forEach(Lp);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Up(n,t[l]);const o=yS.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Lp(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Up(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class nh extends ht{constructor(e=new yo([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Be(s,3)),this.setAttribute("uv",new Be(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:xS;let b,y=!1,w,M,A,x;if(m){b=m.getSpacedPoints(u),y=!0,h=!1;const ae=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(u,ae),M=new P,A=new P,x=new P}h||(g=0,f=0,p=0,v=0);const T=o.extractPoints(c);let I=T.shape;const D=T.holes;if(!pi.isClockWise(I)){I=I.reverse();for(let ae=0,he=D.length;ae<he;ae++){const ue=D[ae];pi.isClockWise(ue)&&(D[ae]=ue.reverse())}}function L(ae){const ue=10000000000000001e-36;let be=ae[0];for(let Me=1;Me<=ae.length;Me++){const Qe=Me%ae.length,j=ae[Qe],ne=j.x-be.x,pe=j.y-be.y,U=ne*ne+pe*pe,Ge=Math.max(Math.abs(j.x),Math.abs(j.y),Math.abs(be.x),Math.abs(be.y)),We=ue*Ge*Ge;if(U<=We){ae.splice(Qe,1),Me--;continue}be=j}}L(I),D.forEach(L);const V=D.length,O=I;for(let ae=0;ae<V;ae++){const he=D[ae];I=I.concat(he)}function N(ae,he,ue){return he||Ye("ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(he,ue)}const F=I.length;function z(ae,he,ue){let be,Me,Qe;const j=ae.x-he.x,ne=ae.y-he.y,pe=ue.x-ae.x,U=ue.y-ae.y,Ge=j*j+ne*ne,We=j*U-ne*pe;if(Math.abs(We)>Number.EPSILON){const R=Math.sqrt(Ge),S=Math.sqrt(pe*pe+U*U),G=he.x-ne/R,X=he.y+j/R,Z=ue.x-U/S,fe=ue.y+pe/S,ye=((Z-G)*U-(fe-X)*pe)/(j*U-ne*pe);be=G+j*ye-ae.x,Me=X+ne*ye-ae.y;const J=be*be+Me*Me;if(J<=2)return new oe(be,Me);Qe=Math.sqrt(J/2)}else{let R=!1;j>Number.EPSILON?pe>Number.EPSILON&&(R=!0):j<-Number.EPSILON?pe<-Number.EPSILON&&(R=!0):Math.sign(ne)===Math.sign(U)&&(R=!0),R?(be=-ne,Me=j,Qe=Math.sqrt(Ge)):(be=j,Me=ne,Qe=Math.sqrt(Ge/2))}return new oe(be/Qe,Me/Qe)}const W=[];for(let ae=0,he=O.length,ue=he-1,be=ae+1;ae<he;ae++,ue++,be++)ue===he&&(ue=0),be===he&&(be=0),W[ae]=z(O[ae],O[ue],O[be]);const ie=[];let Q,re=W.concat();for(let ae=0,he=V;ae<he;ae++){const ue=D[ae];Q=[];for(let be=0,Me=ue.length,Qe=Me-1,j=be+1;be<Me;be++,Qe++,j++)Qe===Me&&(Qe=0),j===Me&&(j=0),Q[be]=z(ue[be],ue[Qe],ue[j]);ie.push(Q),re=re.concat(Q)}let Pe;if(g===0)Pe=pi.triangulateShape(O,D);else{const ae=[],he=[];for(let ue=0;ue<g;ue++){const be=ue/g,Me=f*Math.cos(be*Math.PI/2),Qe=p*Math.sin(be*Math.PI/2)+v;for(let j=0,ne=O.length;j<ne;j++){const pe=N(O[j],W[j],Qe);He(pe.x,pe.y,-Me),be===0&&ae.push(pe)}for(let j=0,ne=V;j<ne;j++){const pe=D[j];Q=ie[j];const U=[];for(let Ge=0,We=pe.length;Ge<We;Ge++){const R=N(pe[Ge],Q[Ge],Qe);He(R.x,R.y,-Me),be===0&&U.push(R)}be===0&&he.push(U)}}Pe=pi.triangulateShape(ae,he)}const dt=Pe.length,at=p+v;for(let ae=0;ae<F;ae++){const he=h?N(I[ae],re[ae],at):I[ae];y?(A.copy(w.normals[0]).multiplyScalar(he.x),M.copy(w.binormals[0]).multiplyScalar(he.y),x.copy(b[0]).add(A).add(M),He(x.x,x.y,x.z)):He(he.x,he.y,0)}for(let ae=1;ae<=u;ae++)for(let he=0;he<F;he++){const ue=h?N(I[he],re[he],at):I[he];y?(A.copy(w.normals[ae]).multiplyScalar(ue.x),M.copy(w.binormals[ae]).multiplyScalar(ue.y),x.copy(b[ae]).add(A).add(M),He(x.x,x.y,x.z)):He(ue.x,ue.y,d/u*ae)}for(let ae=g-1;ae>=0;ae--){const he=ae/g,ue=f*Math.cos(he*Math.PI/2),be=p*Math.sin(he*Math.PI/2)+v;for(let Me=0,Qe=O.length;Me<Qe;Me++){const j=N(O[Me],W[Me],be);He(j.x,j.y,d+ue)}for(let Me=0,Qe=D.length;Me<Qe;Me++){const j=D[Me];Q=ie[Me];for(let ne=0,pe=j.length;ne<pe;ne++){const U=N(j[ne],Q[ne],be);y?He(U.x,U.y+b[u-1].y,b[u-1].x+ue):He(U.x,U.y,d+ue)}}}ee(),_e();function ee(){const ae=s.length/3;if(h){let he=0,ue=F*he;for(let be=0;be<dt;be++){const Me=Pe[be];je(Me[2]+ue,Me[1]+ue,Me[0]+ue)}he=u+g*2,ue=F*he;for(let be=0;be<dt;be++){const Me=Pe[be];je(Me[0]+ue,Me[1]+ue,Me[2]+ue)}}else{for(let he=0;he<dt;he++){const ue=Pe[he];je(ue[2],ue[1],ue[0])}for(let he=0;he<dt;he++){const ue=Pe[he];je(ue[0]+F*u,ue[1]+F*u,ue[2]+F*u)}}n.addGroup(ae,s.length/3-ae,0)}function _e(){const ae=s.length/3;let he=0;de(O,he),he+=O.length;for(let ue=0,be=D.length;ue<be;ue++){const Me=D[ue];de(Me,he),he+=Me.length}n.addGroup(ae,s.length/3-ae,1)}function de(ae,he){let ue=ae.length;for(;--ue>=0;){const be=ue;let Me=ue-1;Me<0&&(Me=ae.length-1);for(let Qe=0,j=u+g*2;Qe<j;Qe++){const ne=F*Qe,pe=F*(Qe+1),U=he+be+ne,Ge=he+Me+ne,We=he+Me+pe,R=he+be+pe;te(U,Ge,We,R)}}}function He(ae,he,ue){l.push(ae),l.push(he),l.push(ue)}function je(ae,he,ue){we(ae),we(he),we(ue);const be=s.length/3,Me=_.generateTopUV(n,s,be-3,be-2,be-1);Le(Me[0]),Le(Me[1]),Le(Me[2])}function te(ae,he,ue,be){we(ae),we(he),we(be),we(he),we(ue),we(be);const Me=s.length/3,Qe=_.generateSideWallUV(n,s,Me-6,Me-3,Me-2,Me-1);Le(Qe[0]),Le(Qe[1]),Le(Qe[3]),Le(Qe[1]),Le(Qe[2]),Le(Qe[3])}function we(ae){s.push(l[ae*3+0]),s.push(l[ae*3+1]),s.push(l[ae*3+2])}function Le(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return bS(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new vc[s.type]().fromJSON(s)),new nh(n,e.options)}}const xS={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new oe(r,a),new oe(o,l),new oe(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[s*3],f=e[s*3+1],p=e[s*3+2],v=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new oe(a,1-l),new oe(c,1-d),new oe(h,1-p),new oe(v,1-m)]:[new oe(o,1-l),new oe(u,1-d),new oe(f,1-p),new oe(g,1-m)]}};function bS(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ih extends ws{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ih(e.radius,e.detail)}}class sh extends ht{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=rt(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/t,d=new P,h=new oe,f=new P,p=new P,v=new P;let g=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let _=0;_<=t;_++){const b=n+_*u*s,y=Math.sin(b),w=Math.cos(b);for(let M=0;M<=e.length-1;M++){d.x=e[M].x*y,d.y=e[M].y,d.z=e[M].x*w,a.push(d.x,d.y,d.z),h.x=_/t,h.y=M/(e.length-1),o.push(h.x,h.y);const A=l[3*M+0]*y,x=l[3*M+1],T=l[3*M+0]*w;c.push(A,x,T)}}for(let _=0;_<t;_++)for(let b=0;b<e.length-1;b++){const y=b+_*e.length,w=y,M=y+e.length,A=y+e.length+1,x=y+1;r.push(w,M,x),r.push(A,x,M)}this.setIndex(r),this.setAttribute("position",new Be(a,3)),this.setAttribute("uv",new Be(o,2)),this.setAttribute("normal",new Be(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sh(e.points,e.segments,e.phiStart,e.phiLength)}}class xo extends ws{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new xo(e.radius,e.detail)}}class na extends ht{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,f=[],p=[],v=[],g=[];for(let m=0;m<u;m++){const _=m*h-a;for(let b=0;b<c;b++){const y=b*d-r;p.push(y,-_,0),v.push(0,0,1),g.push(b/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){const b=_+c*m,y=_+c*(m+1),w=_+1+c*(m+1),M=_+1+c*m;f.push(b,y,M),f.push(y,w,M)}this.setIndex(f),this.setAttribute("position",new Be(p,3)),this.setAttribute("normal",new Be(v,3)),this.setAttribute("uv",new Be(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.width,e.height,e.widthSegments,e.heightSegments)}}class rh extends ht{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let d=e;const h=(t-e)/s,f=new P,p=new oe;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){const m=r+g/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}d+=h}for(let v=0;v<s;v++){const g=v*(n+1);for(let m=0;m<n;m++){const _=m+g,b=_,y=_+n+1,w=_+n+2,M=_+1;o.push(b,y,M),o.push(y,w,M)}}this.setIndex(o),this.setAttribute("position",new Be(l,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ah extends ht{constructor(e=new yo([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Be(s,3)),this.setAttribute("normal",new Be(r,3)),this.setAttribute("uv",new Be(a,2));function c(u){const d=s.length/3,h=u.extractPoints(t);let f=h.shape;const p=h.holes;pi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const _=p[g];pi.isClockWise(_)===!0&&(p[g]=_.reverse())}const v=pi.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const _=p[g];f=f.concat(_)}for(let g=0,m=f.length;g<m;g++){const _=f[g];s.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let g=0,m=v.length;g<m;g++){const _=v[g],b=_[0]+d,y=_[1]+d,w=_[2]+d;n.push(b,y,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return SS(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];n.push(a)}return new ah(n,e.curveSegments)}}function SS(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class bo extends ht{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new P,h=new P,f=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){const _=[],b=m/n,y=a+b*o,w=e*Math.cos(y),M=Math.sqrt(e*e-w*w);let A=0;m===0&&a===0?A=.5/t:m===n&&l===Math.PI&&(A=-.5/t);for(let x=0;x<=t;x++){const T=x/t,I=s+T*r;d.x=-M*Math.cos(I),d.y=w,d.z=M*Math.sin(I),p.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),g.push(T+A,1-b),_.push(c++)}u.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){const b=u[m][_+1],y=u[m][_],w=u[m+1][_],M=u[m+1][_+1];(m!==0||a>0)&&f.push(b,y,M),(m!==n-1||l<Math.PI)&&f.push(y,w,M)}this.setIndex(f),this.setAttribute("position",new Be(p,3)),this.setAttribute("normal",new Be(v,3)),this.setAttribute("uv",new Be(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oh extends ws{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new oh(e.radius,e.detail)}}class lh extends ht{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],d=[],h=new P,f=new P,p=new P;for(let v=0;v<=n;v++){const g=a+v/n*o;for(let m=0;m<=s;m++){const _=m/s*r;f.x=(e+t*Math.cos(g))*Math.cos(_),f.y=(e+t*Math.cos(g))*Math.sin(_),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),p.subVectors(f,h).normalize(),u.push(p.x,p.y,p.z),d.push(m/s),d.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=s;g++){const m=(s+1)*v+g-1,_=(s+1)*(v-1)+g-1,b=(s+1)*(v-1)+g,y=(s+1)*v+g;l.push(m,_,y),l.push(_,b,y)}this.setIndex(l),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(u,3)),this.setAttribute("uv",new Be(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ch extends ht{constructor(e=1,t=.4,n=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:s,p:r,q:a},n=Math.floor(n),s=Math.floor(s);const o=[],l=[],c=[],u=[],d=new P,h=new P,f=new P,p=new P,v=new P,g=new P,m=new P;for(let b=0;b<=n;++b){const y=b/n*r*Math.PI*2;_(y,r,a,e,f),_(y+.01,r,a,e,p),g.subVectors(p,f),m.addVectors(p,f),v.crossVectors(g,m),m.crossVectors(v,g),v.normalize(),m.normalize();for(let w=0;w<=s;++w){const M=w/s*Math.PI*2,A=-t*Math.cos(M),x=t*Math.sin(M);d.x=f.x+(A*m.x+x*v.x),d.y=f.y+(A*m.y+x*v.y),d.z=f.z+(A*m.z+x*v.z),l.push(d.x,d.y,d.z),h.subVectors(d,f).normalize(),c.push(h.x,h.y,h.z),u.push(b/n),u.push(w/s)}}for(let b=1;b<=n;b++)for(let y=1;y<=s;y++){const w=(s+1)*(b-1)+(y-1),M=(s+1)*b+(y-1),A=(s+1)*b+y,x=(s+1)*(b-1)+y;o.push(w,M,x),o.push(M,A,x)}this.setIndex(o),this.setAttribute("position",new Be(l,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(u,2));function _(b,y,w,M,A){const x=Math.cos(b),T=Math.sin(b),I=w/y*b,D=Math.cos(I);A.x=M*(2+D)*.5*x,A.y=M*(2+D)*T*.5,A.z=M*Math.sin(I)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ch(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class hh extends ht{constructor(e=new Bd(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,l=new P,c=new oe;let u=new P;const d=[],h=[],f=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Be(d,3)),this.setAttribute("normal",new Be(h,3)),this.setAttribute("uv",new Be(f,2));function v(){for(let b=0;b<t;b++)g(b);g(r===!1?t:0),_(),m()}function g(b){u=e.getPointAt(b/t,u);const y=a.normals[b],w=a.binormals[b];for(let M=0;M<=s;M++){const A=M/s*Math.PI*2,x=Math.sin(A),T=-Math.cos(A);l.x=T*y.x+x*w.x,l.y=T*y.y+x*w.y,l.z=T*y.z+x*w.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let b=1;b<=t;b++)for(let y=1;y<=s;y++){const w=(s+1)*(b-1)+(y-1),M=(s+1)*b+(y-1),A=(s+1)*b+y,x=(s+1)*(b-1)+y;p.push(w,M,x),p.push(M,A,x)}}function _(){for(let b=0;b<=t;b++)for(let y=0;y<=s;y++)c.x=b/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new hh(new vc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class c0 extends ht{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new P,r=new P;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const d=l[c],h=d.start,f=d.count;for(let p=h,v=h+f;p<v;p+=3)for(let g=0;g<3;g++){const m=o.getX(p+g),_=o.getX(p+(g+1)%3);s.fromBufferAttribute(a,m),r.fromBufferAttribute(a,_),Np(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const u=3*o+c,d=3*o+(c+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,d),Np(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Be(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Np(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}var Op=Object.freeze({__proto__:null,BoxGeometry:Ms,CapsuleGeometry:jc,CircleGeometry:Qc,ConeGeometry:_o,CylinderGeometry:vo,DodecahedronGeometry:eh,EdgesGeometry:Qg,ExtrudeGeometry:nh,IcosahedronGeometry:ih,LatheGeometry:sh,OctahedronGeometry:xo,PlaneGeometry:na,PolyhedronGeometry:ws,RingGeometry:rh,ShapeGeometry:ah,SphereGeometry:bo,TetrahedronGeometry:oh,TorusGeometry:lh,TorusKnotGeometry:ch,TubeGeometry:hh,WireframeGeometry:c0});class h0 extends gn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Fe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function jr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Fp(s))s.isRenderTargetTexture?(Ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Fp(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function An(i){const e={};for(let t=0;t<i.length;t++){const n=jr(i[t]);for(const s in n)e[s]=n[s]}return e}function Fp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function MS(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function u0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const Vd={clone:jr,merge:An};var wS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wS,this.fragmentShader=TS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jr(e.uniforms),this.uniformsGroups=MS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Fe().setHex(s.value);break;case"v2":this.uniforms[n].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ct().fromArray(s.value);break;case"m4":this.uniforms[n].value=new nt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Gd extends ai{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Hd extends gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zi,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class d0 extends Hd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class f0 extends gn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Fe(16777215),this.specular=new Fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zi,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=po,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class p0 extends gn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Fe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zi,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class m0 extends gn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zi,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class g0 extends gn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zi,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=po,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wd extends gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xd extends gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class v0 extends gn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Fe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zi,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _0 extends Un{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function qs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function y0(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Fu(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function x0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}function ES(i,e,t,n,s=30){const r=i.clone();r.name=e;const a=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],u=c.getValueSize(),d=[],h=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*s;if(!(p<t||p>=n)){d.push(c.times[f]);for(let v=0;v<u;++v)h.push(c.values[f*u+v])}}d.length!==0&&(c.times=qs(d,c.times.constructor),c.values=qs(h,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function AS(i,e=0,t=i,n=30){n<=0&&(n=30);const s=t.tracks.length,r=e/n;for(let a=0;a<s;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=i.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let u=0;const d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);let h=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=f/3);const p=o.times.length-1;let v;if(r<=o.times[0]){const m=u,_=d-u;v=o.values.slice(m,_)}else if(r>=o.times[p]){const m=p*d+u,_=m+d-u;v=o.values.slice(m,_)}else{const m=o.createInterpolant(),_=u,b=d-u;m.evaluate(r),v=m.resultBuffer.slice(_,b)}l==="quaternion"&&new pn().fromArray(v).normalize().conjugate().toArray(v);const g=c.times.length;for(let m=0;m<g;++m){const _=m*f+h;if(l==="quaternion")pn.multiplyQuaternionsFlat(c.values,_,v,0,c.values,_);else{const b=f-h*2;for(let y=0;y<b;++y)c.values[_+y]-=v[y]}}}return i.blendMode=Td,i}class CS{static convertArray(e,t){return qs(e,t)}static isTypedArray(e){return Fg(e)}static getKeyframeOrder(e){return y0(e)}static sortedArray(e,t,n){return Fu(e,t,n)}static flattenJSON(e,t,n,s){x0(e,t,n,s)}static subclip(e,t,n,s,r=30){return ES(e,t,n,s,r)}static makeClipAdditive(e,t=0,n=e,s=30){return AS(e,t,n,s)}}class ia{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class b0 extends ia{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ws,endingEnd:Ws}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xs:r=e,o=2*t-n;break;case Xa:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xs:a=e,l=2*n-t;break;case Xa:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),v=p*p,g=v*p,m=-h*g+2*h*v-h*p,_=(1+h)*g+(-1.5-2*h)*v+(-.5+h)*p+1,b=(-1-f)*g+(1.5+f)*v+.5*p,y=f*g-f*v;for(let w=0;w!==o;++w)r[w]=m*a[u+w]+_*a[c+w]+b*a[l+w]+y*a[d+w];return r}}class qd extends ia{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}}class S0 extends ia{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class M0 extends ia{interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){const p=(n-t)/(s-t),v=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*v+a[l+g]*p;return r}const h=o*2,f=e-1;for(let p=0;p!==o;++p){const v=a[c+p],g=a[l+p],m=f*h+p*2,_=d[m],b=d[m+1],y=e*h+p*2,w=u[y],M=u[y+1];let A=(n-t)/(s-t),x,T,I,D,k;for(let L=0;L<8;L++){x=A*A,T=x*A,I=1-A,D=I*I,k=D*I;const O=k*t+3*D*A*_+3*I*x*w+T*s-n;if(Math.abs(O)<1e-10)break;const N=3*D*(_-t)+6*I*A*(w-_)+3*x*(s-w);if(Math.abs(N)<1e-10)break;A=A-O/N,A=Math.max(0,Math.min(1,A))}r[p]=k*v+3*D*A*b+3*I*x*M+T*g}return r}}class li{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qs(t,this.TimeBufferType),this.values=qs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qs(e.times,Array),values:qs(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new S0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new b0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new M0(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Wa:t=this.InterpolantFactoryMethodDiscrete;break;case pc:t=this.InterpolantFactoryMethodLinear;break;case xl:t=this.InterpolantFactoryMethodSmooth;break;case Pu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ee("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wa;case this.InterpolantFactoryMethodLinear:return pc;case this.InterpolantFactoryMethodSmooth:return xl;case this.InterpolantFactoryMethodBezier:return Pu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Ye("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ye("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Fg(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){Ye("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===xl,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{const d=o*n,h=d-n,f=d+n;for(let p=0;p!==n;++p){const v=t[d+p];if(v!==t[h+p]||v!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}li.prototype.ValueTypeName="";li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=pc;class ar extends li{constructor(e,t,n){super(e,t,n)}}ar.prototype.ValueTypeName="bool";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=Wa;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;class $d extends li{constructor(e,t,n,s){super(e,t,n,s)}}$d.prototype.ValueTypeName="color";class uh extends li{constructor(e,t,n,s){super(e,t,n,s)}}uh.prototype.ValueTypeName="number";class w0 extends ia{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let c=e*o;for(let u=c+o;c!==u;c+=4)pn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class dh extends li{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new w0(this.times,this.values,this.getValueSize(),e)}}dh.prototype.ValueTypeName="quaternion";dh.prototype.InterpolantFactoryMethodSmooth=void 0;class or extends li{constructor(e,t,n){super(e,t,n)}}or.prototype.ValueTypeName="string";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=Wa;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;class Yd extends li{constructor(e,t,n,s){super(e,t,n,s)}}Yd.prototype.ValueTypeName="vector";class to{constructor(e="",t=-1,n=[],s=zc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=$n(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(IS(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(li.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=y0(l);l=Fu(l,1,u),c=Fu(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new uh(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const d=u[1];let h=s[d];h||(s[d]=h=[]),h.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function RS(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return uh;case"vector":case"vector2":case"vector3":case"vector4":return Yd;case"color":return $d;case"quaternion":return dh;case"bool":case"boolean":return ar;case"string":return or}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function IS(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=RS(i.type);if(i.times===void 0){const t=[],n=[];x0(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Ci={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(kp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!kp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function kp(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Zd{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const lr=new Zd;class Vn{constructor(e){this.manager=e!==void 0?e:lr,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Vn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vi={};class PS extends Error{constructor(e,t){super(e),this.response=t}}class Ki extends Vn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ci.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Vi[e]!==void 0){Vi[e].push({onLoad:t,onProgress:n,onError:s});return}Vi[e]=[],Vi[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ee("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Vi[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,p=f!==0;let v=0;const g=new ReadableStream({start(m){_();function _(){d.read().then(({done:b,value:y})=>{if(b)m.close();else{v+=y.byteLength;const w=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:f});for(let M=0,A=u.length;M<A;M++){const x=u[M];x.onProgress&&x.onProgress(w)}m.enqueue(y),_()}},b=>{m.error(b)})}}});return new Response(g)}else throw new PS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Ci.add(`file:${e}`,c);const u=Vi[e];delete Vi[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Vi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Vi[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class DS extends Vn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new Ki(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):Ye(l),r.manager.itemError(e)}},n,s)}parse(e){const t=[];for(let n=0;n<e.length;n++){const s=to.parse(e[n]);t.push(s)}return t}}class LS extends Vn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=[],o=new Jc,l=new Ki(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function u(d){l.load(e[d],function(h){const f=r.parse(h,!0);a[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=Vt),o.image=a,o.format=f.format,o.needsUpdate=!0,t&&t(o))},n,s)}if(Array.isArray(e))for(let d=0,h=e.length;d<h;++d)u(d);else l.load(e,function(d){const h=r.parse(d,!0);if(h.isCubemap){const f=h.mipmaps.length/h.mipmapCount;for(let p=0;p<f;p++){a[p]={mipmaps:[]};for(let v=0;v<h.mipmapCount;v++)a[p].mipmaps.push(h.mipmaps[p*h.mipmapCount+v]),a[p].format=h.format,a[p].width=h.width,a[p].height=h.height}o.image=a}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=Vt),o.format=h.format,o.needsUpdate=!0,t&&t(o)},n,s);return o}}const Cr=new WeakMap;class no extends Vn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ci.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Cr.get(a);d===void 0&&(d=[],Cr.set(a,d)),d.push({onLoad:t,onError:s})}return a}const o=Za("img");function l(){u(),t&&t(this);const d=Cr.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}Cr.delete(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),Ci.remove(`image:${e}`);const h=Cr.get(this)||[];for(let f=0;f<h.length;f++){const p=h[f];p.onError&&p.onError(d)}Cr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ci.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class US extends Vn{constructor(e){super(e)}load(e,t,n,s){const r=new go;r.colorSpace=Rn;const a=new no(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){r.images[c]=u,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,s)}for(let c=0;c<e.length;++c)l(c);return r}}class NS extends Vn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new ni,o=new Ki(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(u){s!==void 0?s(u):Ye(u);return}r._applyTexData(a,c),t&&t(a,c)},n,s),a}createDataTexture(e){const t=new ni;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:zn,e.wrapT=t.wrapT!==void 0?t.wrapT:zn,e.magFilter=t.magFilter!==void 0?t.magFilter:Vt,e.minFilter=t.minFilter!==void 0?t.minFilter:Vt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Ai),t.mipmapCount===1&&(e.minFilter=Vt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class OS extends Vn{constructor(e){super(e)}load(e,t,n,s){const r=new Xt,a=new no(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Ts extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class T0 extends Ts{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const su=new nt,Bp=new P,zp=new P;class Kd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tr,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Bp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bp),zp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zp),t.updateMatrixWorld(),su.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(su,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Qs||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(su)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const rl=new P,al=new pn,wi=new P;let fh=class extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(rl,al,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rl,al,wi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(rl,al,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rl,al,wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const ls=new P,Vp=new oe,Gp=new oe;class dn extends fh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zr*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,t){return this.getViewBounds(e,Vp,Gp),t.subVectors(Gp,Vp)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ks*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class FS extends Kd{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Zr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class E0 extends Ts{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new FS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class kS extends Kd{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0}}class A0 extends Ts{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new kS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class sa extends fh{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class BS extends Kd{constructor(){super(new sa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class C0 extends Ts{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new BS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class R0 extends Ts{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class I0 extends Ts{constructor(e,t,n=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Jd{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new P)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,s=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*s),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*s)),t.addScaledVector(a[5],1.092548*(s*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-s*s)),t}getIrradianceAt(e,t){const n=e.x,s=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*s),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*s),t.addScaledVector(a[5],2*.429043*s*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-s*s)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].fromArray(e,t+s*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].toArray(e,t+s*3);return e}static getBasisAt(e,t){const n=e.x,s=e.y,r=e.z;t[0]=.282095,t[1]=.488603*s,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*s,t[5]=1.092548*s*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-s*s)}}class P0 extends Ts{constructor(e=new Jd,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}const Hp={};class ph extends Vn{constructor(e){super(e),this.textures={}}load(e,t,n,s){const r=this,a=new Ki(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):Ye(l),r.manager.itemError(e)}},n,s)}parse(e){const t=this.createMaterialFromType(e.type);return t.fromJSON(e,this.textures),t}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return ph.createMaterialFromType(e)}static createMaterialFromType(e){const n={ShadowMaterial:h0,SpriteMaterial:Pd,RawShaderMaterial:Gd,ShaderMaterial:ai,PointsMaterial:Ld,MeshPhysicalMaterial:d0,MeshStandardMaterial:Hd,MeshPhongMaterial:f0,MeshToonMaterial:p0,MeshNormalMaterial:m0,MeshLambertMaterial:g0,MeshDepthMaterial:Wd,MeshDistanceMaterial:Xd,MeshBasicMaterial:Qi,MeshMatcapMaterial:v0,LineDashedMaterial:_0,LineBasicMaterial:Un,Material:gn,...Hp}[e];let s;return n===void 0?(gs(`MaterialLoader: Unknown material type "${e}". Use .registerMaterial() before starting the deserialization process.`),s=new gn):s=new n,s}static registerMaterial(e,t){Hp[e]=t}}class ku{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class D0 extends ht{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class L0 extends Vn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new Ki(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):Ye(l),r.manager.itemError(e)}},n,s)}parse(e){const t={},n={};function s(f,p){if(t[p]!==void 0)return t[p];const g=f.interleavedBuffers[p],m=r(f,g.buffer),_=kr(g.type,m),b=new Yc(_,g.stride);return b.uuid=g.uuid,t[p]=b,b}function r(f,p){if(n[p]!==void 0)return n[p];const g=f.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}const a=e.isInstancedBufferGeometry?new D0:new ht,o=e.data.index;if(o!==void 0){const f=kr(o.type,o.array);a.setIndex(new Ut(f,1))}const l=e.data.attributes;for(const f in l){const p=l[f];let v;if(p.isInterleavedBufferAttribute){const g=s(e.data,p.data);v=new er(g,p.itemSize,p.offset,p.normalized)}else{const g=kr(p.type,p.array),m=p.isInstancedBufferAttribute?Kr:Ut;v=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(v.name=p.name),p.usage!==void 0&&v.setUsage(p.usage),a.setAttribute(f,v)}const c=e.data.morphAttributes;if(c)for(const f in c){const p=c[f],v=[];for(let g=0,m=p.length;g<m;g++){const _=p[g];let b;if(_.isInterleavedBufferAttribute){const y=s(e.data,_.data);b=new er(y,_.itemSize,_.offset,_.normalized)}else{const y=kr(_.type,_.array);b=new Ut(y,_.itemSize,_.normalized)}_.name!==void 0&&(b.name=_.name),v.push(b)}a.morphAttributes[f]=v}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const d=e.data.groups||e.data.drawcalls||e.data.offsets;if(d!==void 0)for(let f=0,p=d.length;f!==p;++f){const v=d[f];a.addGroup(v.start,v.count,v.materialIndex)}const h=e.data.boundingSphere;return h!==void 0&&(a.boundingSphere=new mn().fromJSON(h)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}const ru={};class zS extends Vn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=this.path===""?ku.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new Ki(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(d){s!==void 0&&s(d),Ye("ObjectLoader: Can't parse "+e+".",d.message);return}const u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){s!==void 0&&s(new Error("THREE.ObjectLoader: Can't load "+e)),Ye("ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,s)}async loadAsync(e,t){const n=this,s=this.path===""?ku.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||s;const r=new Ki(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(e,t);let o;try{o=JSON.parse(a)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+e+". "+c.message)}const l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),s=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,s),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,l,o,n),u=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,u),this.bindLightTargets(c),t!==void 0){let d=!1;for(const h in a)if(a[h].data instanceof HTMLImageElement){d=!0;break}d===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,s,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(e,t){ru[e]=t}parseShapes(e){const t={};if(e!==void 0)for(let n=0,s=e.length;n<s;n++){const r=new yo().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},s={};if(t.traverse(function(r){r.isBone&&(s[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=new Zc().fromJSON(e[r],s);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const s=new L0;for(let r=0,a=e.length;r<a;r++){let o;const l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=s.parse(l);break;default:l.type in Op?o=Op[l.type].fromJSON(l,t):l.type in ru?o=ru[l.type].fromJSON(l,t):Ee(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){const n={},s={};if(e!==void 0){const r=new ph;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){const l=e[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),s[l.uuid]=n[l.uuid]}}return s}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const s=e[n],r=to.parse(s);t[r.uuid]=r}return t}parseImages(e,t){const n=this,s={};let r;function a(l){return l=n.manager.resolveURL(l),n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(u)}else return l.data?{data:kr(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new Zd(t);r=new no(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,u=e.length;c<u;c++){const d=e[c],h=d.url;if(Array.isArray(h)){const f=[];for(let p=0,v=h.length;p<v;p++){const g=h[p],m=o(g);m!==null&&(m instanceof HTMLImageElement?f.push(m):f.push(new ni(m.data,m.width,m.height)))}s[d.uuid]=new ps(f)}else{const f=o(d.url);s[d.uuid]=new ps(f)}}}return s}async parseImagesAsync(e){const t=this,n={};let s;async function r(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await s.loadAsync(l)}else return a.data?{data:kr(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){s=new no(this.manager),s.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.url;if(Array.isArray(c)){const u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d],p=await r(f);p!==null&&(p instanceof HTMLImageElement?u.push(p):u.push(new ni(p.data,p.width,p.height)))}n[l.uuid]=new ps(u)}else{const u=await r(l.url);n[l.uuid]=new ps(u)}}}return n}parseTextures(e,t){function n(r,a){return typeof r=="number"?r:(Ee("ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const s={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=e[r];o.image===void 0&&Ee('ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&Ee("ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let u;Array.isArray(c)?(u=new go,c.length===6&&(u.needsUpdate=!0)):(c&&c.data?u=new ni:u=new Xt,c&&(u.needsUpdate=!0)),u.source=l,u.uuid=o.uuid,o.name!==void 0&&(u.name=o.name),o.mapping!==void 0&&(u.mapping=n(o.mapping,VS)),o.channel!==void 0&&(u.channel=o.channel),o.offset!==void 0&&u.offset.fromArray(o.offset),o.repeat!==void 0&&u.repeat.fromArray(o.repeat),o.center!==void 0&&u.center.fromArray(o.center),o.rotation!==void 0&&(u.rotation=o.rotation),o.wrap!==void 0&&(u.wrapS=n(o.wrap[0],Wp),u.wrapT=n(o.wrap[1],Wp)),o.format!==void 0&&(u.format=o.format),o.internalFormat!==void 0&&(u.internalFormat=o.internalFormat),o.type!==void 0&&(u.type=o.type),o.colorSpace!==void 0&&(u.colorSpace=o.colorSpace),o.minFilter!==void 0&&(u.minFilter=n(o.minFilter,Xp)),o.magFilter!==void 0&&(u.magFilter=n(o.magFilter,Xp)),o.anisotropy!==void 0&&(u.anisotropy=o.anisotropy),o.flipY!==void 0&&(u.flipY=o.flipY),o.generateMipmaps!==void 0&&(u.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(u.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(u.compareFunction=o.compareFunction),o.normalized!==void 0&&(u.normalized=o.normalized),o.userData!==void 0&&(u.userData=o.userData),s[o.uuid]=u}return s}parseObject(e,t,n,s,r){let a;function o(h){return t[h]===void 0&&Ee("ObjectLoader: Undefined geometry",h),t[h]}function l(h){if(h!==void 0){if(Array.isArray(h)){const f=[];for(let p=0,v=h.length;p<v;p++){const g=h[p];n[g]===void 0&&Ee("ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[h]===void 0&&Ee("ObjectLoader: Undefined material",h),n[h]}}function c(h){return s[h]===void 0&&Ee("ObjectLoader: Undefined texture",h),s[h]}let u,d;switch(e.type){case"Scene":a=new Cd,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new Fe(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new $c(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new qc(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new dn(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new sa(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new R0(e.color,e.intensity);break;case"DirectionalLight":a=new C0(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new A0(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new I0(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new E0(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new T0(e.color,e.groundColor,e.intensity);break;case"LightProbe":const h=new Jd().fromArray(e.sh);a=new P0(h,e.intensity);break;case"SkinnedMesh":u=o(e.geometry),d=l(e.material),a=new qg(u,d),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":u=o(e.geometry),d=l(e.material),a=new en(u,d);break;case"InstancedMesh":u=o(e.geometry),d=l(e.material);const f=e.count,p=e.instanceMatrix,v=e.instanceColor;a=new $g(u,d,f),a.instanceMatrix=new Kr(new Float32Array(p.array),16),v!==void 0&&(a.instanceColor=new Kr(new Float32Array(v.array),v.itemSize));break;case"BatchedMesh":u=o(e.geometry),d=l(e.material),a=new Yg(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,d),a.geometry=u,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._geometryInfo=e.geometryInfo.map(g=>{let m=null,_=null;return g.boundingBox!==void 0&&(m=new Tn().fromJSON(g.boundingBox)),g.boundingSphere!==void 0&&(_=new mn().fromJSON(g.boundingSphere)),{...g,boundingBox:m,boundingSphere:_}}),a._instanceInfo=e.instanceInfo,a._availableInstanceIds=e._availableInstanceIds,a._availableGeometryIds=e._availableGeometryIds,a._nextIndexStart=e.nextIndexStart,a._nextVertexStart=e.nextVertexStart,a._geometryCount=e.geometryCount,a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._matricesTexture=c(e.matricesTexture.uuid),a._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(a.boundingSphere=new mn().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(a.boundingBox=new Tn().fromJSON(e.boundingBox));break;case"LOD":a=new Xg;break;case"Line":a=new bs(o(e.geometry),l(e.material));break;case"LineLoop":a=new Zg(o(e.geometry),l(e.material));break;case"LineSegments":a=new Ni(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new Kg(o(e.geometry),l(e.material));break;case"Sprite":a=new Wg(l(e.material));break;case"Group":a=new Br;break;case"Bone":a=new Dd;break;default:a=new wt}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.pivot!==void 0&&(a.pivot=new P().fromArray(e.pivot)),e.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.static!==void 0&&(a.static=e.static),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const h=e.children;for(let f=0;f<h.length;f++)a.add(this.parseObject(h[f],t,n,s,r))}if(e.animations!==void 0){const h=e.animations;for(let f=0;f<h.length;f++){const p=h[f];a.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const h=e.levels;for(let f=0;f<h.length;f++){const p=h[f],v=a.getObjectByProperty("uuid",p.object);v!==void 0&&a.addLevel(v,p.distance,p.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const s=t[n.skeleton];s===void 0?Ee("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(s,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,s=e.getObjectByProperty("uuid",n);s!==void 0?t.target=s:t.target=new wt}})}}const VS={UVMapping:Lc,CubeReflectionMapping:Ii,CubeRefractionMapping:_s,EquirectangularReflectionMapping:Aa,EquirectangularRefractionMapping:Ca,CubeUVReflectionMapping:ta},Wp={RepeatWrapping:za,ClampToEdgeWrapping:zn,MirroredRepeatWrapping:Va},Xp={NearestFilter:Qt,NearestMipmapNearestFilter:_d,NearestMipmapLinearFilter:Fr,LinearFilter:Vt,LinearMipmapNearestFilter:Ra,LinearMipmapLinearFilter:Ai},au=new WeakMap;class GS extends Vn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ee("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ee("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ci.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{au.has(a)===!0?(s&&s(au.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){Ci.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){s&&s(c),au.set(l,c),Ci.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ci.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let ol;class jd{static getContext(){return ol===void 0&&(ol=new(window.AudioContext||window.webkitAudioContext)),ol}static setContext(e){ol=e}}class HS extends Vn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new Ki(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0),u=jd.getContext(),d=e+"#decode";r.manager.itemStart(d),u.decodeAudioData(c,function(h){t(h),r.manager.itemEnd(d)}).catch(function(h){o(h),r.manager.itemEnd(d)})}catch(c){o(c)}},n,s);function o(l){s?s(l):Ye(l),r.manager.itemError(e)}}}const qp=new nt,$p=new nt,Us=new nt;class WS{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new dn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new dn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Us.copy(e.projectionMatrix);const s=t.eyeSep/2,r=s*t.near/t.focus,a=t.near*Math.tan(Ks*t.fov*.5)/t.zoom;let o,l;$p.elements[12]=-s,qp.elements[12]=s,o=-a*t.aspect+r,l=a*t.aspect+r,Us.elements[0]=2*t.near/(l-o),Us.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(Us),o=-a*t.aspect-r,l=a*t.aspect-r,Us.elements[0]=2*t.near/(l-o),Us.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(Us)}this.cameraL.matrix.copy(e.matrixWorld).multiply($p),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(e.matrixWorld).multiply(qp),this.cameraR.matrixWorldNeedsUpdate=!0}}const Rr=-90,Ir=1;class U0 extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(Rr,Ir,e,t);s.layers=this.layers,this.add(s);const r=new dn(Rr,Ir,e,t);r.layers=this.layers,this.add(r);const a=new dn(Rr,Ir,e,t);a.layers=this.layers,this.add(a);const o=new dn(Rr,Ir,e,t);o.layers=this.layers,this.add(o);const l=new dn(Rr,Ir,e,t);l.layers=this.layers,this.add(l);const c=new dn(Rr,Ir,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class N0 extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class O0{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=XS.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function XS(){this._document.hidden===!1&&this.reset()}const Ns=new P,ou=new pn,qS=new P,Os=new P,Fs=new P;class $S extends wt{constructor(){super(),this.type="AudioListener",this.context=jd.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new O0}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();const t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Ns,ou,qS),Os.set(0,0,-1).applyQuaternion(ou),Fs.set(0,1,0).applyQuaternion(ou),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ns.x,n),t.positionY.linearRampToValueAtTime(Ns.y,n),t.positionZ.linearRampToValueAtTime(Ns.z,n),t.forwardX.linearRampToValueAtTime(Os.x,n),t.forwardY.linearRampToValueAtTime(Os.y,n),t.forwardZ.linearRampToValueAtTime(Os.z,n),t.upX.linearRampToValueAtTime(Fs.x,n),t.upY.linearRampToValueAtTime(Fs.y,n),t.upZ.linearRampToValueAtTime(Fs.z,n)}else t.setPosition(Ns.x,Ns.y,Ns.z),t.setOrientation(Os.x,Os.y,Os.z,Fs.x,Fs.y,Fs.z)}}let F0=class extends wt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){Ee("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Ee("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Ee("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){Ee("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){Ee("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Ee("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){Ee("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(Ee("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}};const ks=new P,Yp=new pn,YS=new P,Bs=new P;class ZS extends F0{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ks,Yp,YS),Bs.set(0,0,1).applyQuaternion(Yp);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(ks.x,n),t.positionY.linearRampToValueAtTime(ks.y,n),t.positionZ.linearRampToValueAtTime(ks.z,n),t.orientationX.linearRampToValueAtTime(Bs.x,n),t.orientationY.linearRampToValueAtTime(Bs.y,n),t.orientationZ.linearRampToValueAtTime(Bs.z,n)}else t.setPosition(ks.x,ks.y,ks.z),t.setOrientation(Bs.x,Bs.y,Bs.z)}}class KS{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class k0{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){pn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const a=this._workIndex*r;pn.multiplyQuaternionsFlat(e,a,e,t,e,n),pn.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){const a=1-s;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*s}}}const Qd="\\[\\]\\.:\\/",JS=new RegExp("["+Qd+"]","g"),ef="[^"+Qd+"]",jS="[^"+Qd.replace("\\.","")+"]",QS=/((?:WC+[\/:])*)/.source.replace("WC",ef),eM=/(WCOD+)?/.source.replace("WCOD",jS),tM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ef),nM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ef),iM=new RegExp("^"+QS+eM+tM+nM+"$"),sM=["material","materials","bones","map"];class rM{constructor(e,t,n){const s=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Et{constructor(e,t,n){this.path=t,this.parsedPath=n||Et.parseTrackName(t),this.node=Et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Et.Composite(e,t,n):new Et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(JS,"")}static parseTrackName(e){const t=iM.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);sM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Et.Composite=rM;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class aM{constructor(){this.isAnimationObjectGroup=!0,this.uuid=$n(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,s=arguments.length;n!==s;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,s=this._parsedPaths,r=this._bindings,a=r.length;let o,l=e.length,c=this.nCachedObjects_;for(let u=0,d=arguments.length;u!==d;++u){const h=arguments[u],f=h.uuid;let p=t[f];if(p===void 0){p=l++,t[f]=p,e.push(h);for(let v=0,g=a;v!==g;++v)r[v].push(new Et(h,n[v],s[v]))}else if(p<c){o=e[p];const v=--c,g=e[v];t[g.uuid]=p,e[p]=g,t[f]=v,e[v]=h;for(let m=0,_=a;m!==_;++m){const b=r[m],y=b[v];let w=b[p];b[p]=y,w===void 0&&(w=new Et(h,n[m],s[m])),b[v]=w}}else e[p]!==o&&Ye("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,s=n.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,u=t[c];if(u!==void 0&&u>=r){const d=r++,h=e[d];t[h.uuid]=u,e[u]=h,t[c]=d,e[d]=l;for(let f=0,p=s;f!==p;++f){const v=n[f],g=v[d],m=v[u];v[u]=g,v[d]=m}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,s=n.length;let r=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],u=c.uuid,d=t[u];if(d!==void 0)if(delete t[u],d<r){const h=--r,f=e[h],p=--a,v=e[p];t[f.uuid]=d,e[d]=f,t[v.uuid]=h,e[h]=v,e.pop();for(let g=0,m=s;g!==m;++g){const _=n[g],b=_[h],y=_[p];_[d]=b,_[h]=y,_.pop()}}else{const h=--a,f=e[h];h>0&&(t[f.uuid]=d),e[d]=f,e.pop();for(let p=0,v=s;p!==v;++p){const g=n[p];g[d]=g[h],g.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let s=n[e];const r=this._bindings;if(s!==void 0)return r[s];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,d=new Array(c);s=r.length,n[e]=s,a.push(e),o.push(t),r.push(d);for(let h=u,f=l.length;h!==f;++h){const p=l[h];d[h]=new Et(p,e,t)}return d}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const s=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),s[n]=s[o],s.pop()}}}class B0{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Ws,endingEnd:Ws};for(let c=0;c!==a;++c){const u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Ag,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Td:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case zc:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(a),c[u].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const a=n===Cg;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===Eg){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){const o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=Xs,s.endingEnd=Xs):(e?s.endingStart=this.zeroSlopeAtStart?Xs:Ws:s.endingStart=Xa,t?s.endingEnd=this.zeroSlopeAtEnd?Xs:Ws:s.endingEnd=Xa)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const oM=new Float32Array(1);class lM extends yi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let d=0;d!==r;++d){const h=s[d],f=h.name;let p=u[f];if(p!==void 0)++p.referenceCount,a[d]=p;else{if(p=a[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const v=t&&t._propertyBindings[d].binding.parsedPath;p=new k0(Et.create(n,f,v),h.ValueTypeName,h.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[d]=p}o[d].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,h=(e._localRoot||this._root).uuid;delete d[h],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new qd(new Float32Array(2),new Float32Array(2),1,oM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let a=typeof e=="string"?to.findByName(s,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=zc),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new B0(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?to.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class cM extends Ad{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isRenderTarget3D=!0,this.depth=n,this.texture=new Wc(null,e,t,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}}class tf{constructor(e){this.value=e}clone(){return new tf(this.value.clone===void 0?this.value:this.value.clone())}}let hM=0;class uM extends yi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:hM++}),this.name="",this.usage=Ya,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,s=t.length;n<s;n++){const r=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class dM extends Yc{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class fM{constructor(e,t,n,s,r,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=s,this.count=r,this.normalized=a,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Zp=new nt;class pM{constructor(e,t,n=0,s=1/0){this.ray=new rr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Xc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ye("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zp),this}intersectObject(e,t=!0,n=[]){return Bu(e,this,n,t),n.sort(Kp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Bu(e[s],this,n,t);return n.sort(Kp),n}}function Kp(i,e){return i.distance-e.distance}function Bu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Bu(r[a],e,t,!0)}}class mM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ee("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class zu{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class gM{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const gf=class gf{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};gf.prototype.isMatrix2=!0;let Vu=gf;const Jp=new oe;class z0{constructor(e=new oe(1/0,1/0),t=new oe(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jp.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jp).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jp=new P,ll=new P,Pr=new P,Dr=new P,lu=new P,vM=new P,_M=new P;class yM{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){jp.subVectors(e,this.start),ll.subVectors(this.end,this.start);const n=ll.dot(ll);if(n===0)return 0;let r=ll.dot(jp)/n;return t&&(r=rt(r,0,1)),r}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=vM,n=_M){const s=10000000000000001e-32;let r,a;const o=this.start,l=e.start,c=this.end,u=e.end;Pr.subVectors(c,o),Dr.subVectors(u,l),lu.subVectors(o,l);const d=Pr.dot(Pr),h=Dr.dot(Dr),f=Dr.dot(lu);if(d<=s&&h<=s)return t.copy(o),n.copy(l),t.sub(n),t.dot(t);if(d<=s)r=0,a=f/h,a=rt(a,0,1);else{const p=Pr.dot(lu);if(h<=s)a=0,r=rt(-p/d,0,1);else{const v=Pr.dot(Dr),g=d*h-v*v;g!==0?r=rt((v*f-p*h)/g,0,1):r=0,a=(v*r+f)/h,a<0?(a=0,r=rt(-p/d,0,1)):a>1&&(a=1,r=rt((v-p)/d,0,1))}}return t.copy(o).addScaledVector(Pr,r),n.copy(l).addScaledVector(Dr,a),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Qp=new P;class xM extends wt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new ht,s=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,u=o/l*Math.PI*2;s.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new Be(s,3));const r=new Un({fog:!1,toneMapped:!1});this.cone=new Ni(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Qp.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Qp),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const cs=new P,cl=new nt,cu=new nt;class bM extends Ni{constructor(e){const t=V0(e),n=new ht,s=[],r=[];for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(s.push(0,0,0),s.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new Be(s,3)),n.setAttribute("color",new Be(r,3));const a=new Un({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const o=new Fe(255),l=new Fe(65280);this.setColors(o,l)}updateMatrixWorld(e){const t=this.bones,n=this.geometry,s=n.getAttribute("position");cu.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(cl.multiplyMatrices(cu,o.matrixWorld),cs.setFromMatrixPosition(cl),s.setXYZ(a,cs.x,cs.y,cs.z),cl.multiplyMatrices(cu,o.parent.matrixWorld),cs.setFromMatrixPosition(cl),s.setXYZ(a+1,cs.x,cs.y,cs.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const s=this.geometry.getAttribute("color");for(let r=0;r<s.count;r+=2)s.setXYZ(r,e.r,e.g,e.b),s.setXYZ(r+1,t.r,t.g,t.b);return s.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function V0(i){const e=[];i.isBone===!0&&e.push(i);for(let t=0;t<i.children.length;t++)e.push(...V0(i.children[t]));return e}class SM extends en{constructor(e,t,n){const s=new bo(t,4,2),r=new Qi({wireframe:!0,fog:!1,toneMapped:!1});super(s,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const MM=new P,em=new Fe,tm=new Fe;class wM extends wt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const s=new xo(t);s.rotateY(Math.PI*.5),this.material=new Qi({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=s.getAttribute("position"),a=new Float32Array(r.count*3);s.setAttribute("color",new Ut(a,3)),this.add(new en(s,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");em.copy(this.light.color),tm.copy(this.light.groundColor);for(let n=0,s=t.count;n<s;n++){const r=n<s/2?em:tm;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),e.lookAt(MM.setFromMatrixPosition(this.light.matrixWorld).negate())}}class TM extends Ni{constructor(e=10,t=10,n=4473924,s=8947848){n=new Fe(n),s=new Fe(s);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let h=0,f=0,p=-o;h<=t;h++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const v=h===r?n:s;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const u=new ht;u.setAttribute("position",new Be(l,3)),u.setAttribute("color",new Be(c,3));const d=new Un({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class EM extends Ni{constructor(e=10,t=16,n=8,s=64,r=4473924,a=8947848){r=new Fe(r),a=new Fe(a);const o=[],l=[];if(t>1)for(let d=0;d<t;d++){const h=d/t*(Math.PI*2),f=Math.sin(h)*e,p=Math.cos(h)*e;o.push(0,0,0),o.push(f,0,p);const v=d&1?r:a;l.push(v.r,v.g,v.b),l.push(v.r,v.g,v.b)}for(let d=0;d<n;d++){const h=d&1?r:a,f=e-e/n*d;for(let p=0;p<s;p++){let v=p/s*(Math.PI*2),g=Math.sin(v)*f,m=Math.cos(v)*f;o.push(g,0,m),l.push(h.r,h.g,h.b),v=(p+1)/s*(Math.PI*2),g=Math.sin(v)*f,m=Math.cos(v)*f,o.push(g,0,m),l.push(h.r,h.g,h.b)}}const c=new ht;c.setAttribute("position",new Be(o,3)),c.setAttribute("color",new Be(l,3));const u=new Un({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const nm=new P,hl=new P,im=new P;class AM extends wt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let s=new ht;s.setAttribute("position",new Be([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new Un({fog:!1,toneMapped:!1});this.lightPlane=new bs(s,r),this.add(this.lightPlane),s=new ht,s.setAttribute("position",new Be([0,0,0,0,0,1],3)),this.targetLine=new bs(s,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),nm.setFromMatrixPosition(this.light.matrixWorld),hl.setFromMatrixPosition(this.light.target.matrixWorld),im.subVectors(hl,nm),this.lightPlane.lookAt(hl),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(hl),this.targetLine.scale.z=im.length()}}const ul=new P,$t=new fh;class CM extends Ni{constructor(e){const t=new ht,n=new Un({color:16777215,vertexColors:!0,toneMapped:!1}),s=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,v){l(p),l(v)}function l(p){s.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(s.length/3-1)}t.setAttribute("position",new Be(s,3)),t.setAttribute("color",new Be(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new Fe(16755200),u=new Fe(16711680),d=new Fe(43775),h=new Fe(16777215),f=new Fe(3355443);this.setColors(c,u,d,h,f)}setColors(e,t,n,s,r){const o=this.geometry.getAttribute("color");return o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,s.r,s.g,s.b),o.setXYZ(39,s.r,s.g,s.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,n=1,s=1;let r,a;if($t.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,a=0;else if(this.camera.coordinateSystem===Xn)r=-1,a=1;else if(this.camera.coordinateSystem===Qs)r=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Jt("c",t,e,$t,0,0,r),Jt("t",t,e,$t,0,0,a),Jt("n1",t,e,$t,-n,-s,r),Jt("n2",t,e,$t,n,-s,r),Jt("n3",t,e,$t,-n,s,r),Jt("n4",t,e,$t,n,s,r),Jt("f1",t,e,$t,-n,-s,a),Jt("f2",t,e,$t,n,-s,a),Jt("f3",t,e,$t,-n,s,a),Jt("f4",t,e,$t,n,s,a),Jt("u1",t,e,$t,n*.7,s*1.1,r),Jt("u2",t,e,$t,-n*.7,s*1.1,r),Jt("u3",t,e,$t,0,s*2,r),Jt("cf1",t,e,$t,-n,0,a),Jt("cf2",t,e,$t,n,0,a),Jt("cf3",t,e,$t,0,-s,a),Jt("cf4",t,e,$t,0,s,a),Jt("cn1",t,e,$t,-n,0,r),Jt("cn2",t,e,$t,n,0,r),Jt("cn3",t,e,$t,0,-s,r),Jt("cn4",t,e,$t,0,s,r),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Jt(i,e,t,n,s,r,a){ul.set(s,r,a).unproject(n);const o=e[i];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,u=o.length;c<u;c++)l.setXYZ(o[c],ul.x,ul.y,ul.z)}}const dl=new Tn;class RM extends Ni{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new ht;r.setIndex(new Ut(n,1)),r.setAttribute("position",new Ut(s,3)),super(r,new Un({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&dl.setFromObject(this.object),dl.isEmpty())return;const e=dl.min,t=dl.max,n=this.geometry.attributes.position,s=n.array;s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=e.x,s[4]=t.y,s[5]=t.z,s[6]=e.x,s[7]=e.y,s[8]=t.z,s[9]=t.x,s[10]=e.y,s[11]=t.z,s[12]=t.x,s[13]=t.y,s[14]=e.z,s[15]=e.x,s[16]=t.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=t.x,s[22]=e.y,s[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class IM extends Ni{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new ht;r.setIndex(new Ut(n,1)),r.setAttribute("position",new Be(s,3)),super(r,new Un({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class PM extends bs{constructor(e,t=1,n=16776960){const s=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new ht;a.setAttribute("position",new Be(r,3)),a.computeBoundingSphere(),super(a,new Un({color:s,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new ht;l.setAttribute("position",new Be(o,3)),l.computeBoundingSphere(),this.add(new en(l,new Qi({color:s,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const sm=new P;let fl,hu;class DM extends wt{constructor(e=new P(0,0,1),t=new P(0,0,0),n=1,s=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",fl===void 0&&(fl=new ht,fl.setAttribute("position",new Be([0,0,0,0,1,0],3)),hu=new _o(.5,1,5,1),hu.translate(0,-.5,0)),this.position.copy(t),this.line=new bs(fl,new Un({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new en(hu,new Qi({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{sm.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(sm,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class LM extends Ni{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new ht;s.setAttribute("position",new Be(t,3)),s.setAttribute("color",new Be(n,3));const r=new Un({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){const s=new Fe,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class UM{constructor(){this.type="ShapePath",this.color=new Fe,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new Ja,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,a){return this.currentPath.bezierCurveTo(e,t,n,s,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let u=!1;const d=c.length;for(let h=0,f=d-1;h<d;f=h++){const p=c[h],v=c[f];p.y>l.y!=v.y>l.y&&l.x<(v.x-p.x)*(l.y-p.y)/(v.y-p.y)+p.x&&(u=!u)}return u}function t(l,c){const u=c.getCenter(new oe);if(e(u,l))return u;const d=u.y,h=[],f=l.length;for(let p=0;p<f;p++){const v=l[p],g=l[(p+1)%f];if(v.y>d!=g.y>d){const m=v.x+(d-v.y)*(g.x-v.x)/(g.y-v.y);h.push(m)}}return h.length>1&&(h.sort((p,v)=>p-v),u.x=(h[0]+h[1])/2),u}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(Ee('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");const s=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(const l of this.subPaths){const c=l.getPoints();if(c.length<3)continue;const u=pi.area(c);if(u===0)continue;const d=new z0;for(let h=0;h<c.length;h++)d.expandByPoint(c[h]);r.push({subPath:l,points:c,boundingBox:d,interiorPoint:t(c,d),absArea:Math.abs(u),winding:u<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){const c=r[l];let u=0;for(let d=l-1;d>=0;d--){const h=r[d];if(h.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,h.points)){c.container=h.exclude?h.container:h,u=h.winding,c.winding+=u;break}}s(c.winding)===s(u)&&(c.exclude=!0)}for(const l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");const a=[],o=new Map;for(const l of r){if(l.exclude||l.role!=="outer")continue;const c=new yo;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(const l of r){if(l.exclude||l.role!=="hole")continue;const c=o.get(l.container);if(!c)continue;const u=new Ja;u.curves=l.subPath.curves,c.holes.push(u)}return a}}class G0 extends yi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ee("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function NM(i,e){const t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2):(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0),i}function OM(i,e){const t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0):(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2),i}function FM(i){return i.repeat.x=1,i.repeat.y=1,i.offset.x=0,i.offset.y=0,i}function Gu(i,e,t,n){const s=kM(n);switch(t){case Md:return i*e;case Fc:return i*e/s.components*s.byteLength;case mo:return i*e/s.components*s.byteLength;case ys:return i*e*2/s.components*s.byteLength;case kc:return i*e*2/s.components*s.byteLength;case wd:return i*e*3/s.components*s.byteLength;case Dn:return i*e*4/s.components*s.byteLength;case Bc:return i*e*4/s.components*s.byteLength;case Ia:case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Da:case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bl:case Vl:return Math.max(i,16)*Math.max(e,8)/4;case kl:case zl:return Math.max(i,8)*Math.max(e,8)/2;case Gl:case Hl:case Xl:case ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wl:case Ga:case $l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case jl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ec:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case tc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case nc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ic:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case sc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case rc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ac:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case oc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case lc:case cc:case hc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case uc:case dc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ha:case fc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kM(i){switch(i){case kn:case yd:return{byteLength:1,components:1};case $r:case xd:case Pi:return{byteLength:2,components:1};case Nc:case Oc:return{byteLength:2,components:4};case ri:case Uc:case Pn:return{byteLength:4,components:1};case bd:case Sd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}class BM{static contain(e,t){return NM(e,t)}static cover(e,t){return OM(e,t)}static fill(e){return FM(e)}static getByteLength(e,t,n,s){return Gu(e,t,n,s)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pc}}));typeof window<"u"&&(window.__THREE__?Ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pc);function H0(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function zM(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){const p=d[h],v=d[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){const v=d[f];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var VM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GM=`#ifdef USE_ALPHAHASH
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
#endif`,HM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$M=`#ifdef USE_AOMAP
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
#endif`,YM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZM=`#ifdef USE_BATCHING
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
#endif`,KM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ew=`#ifdef USE_IRIDESCENCE
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
#endif`,tw=`#ifdef USE_BUMPMAP
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
#endif`,nw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ow=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,hw=`#define PI 3.141592653589793
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
} // validated`,uw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dw=`vec3 transformedNormal = objectNormal;
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
#endif`,fw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vw="gl_FragColor = linearToOutputTexel( gl_FragColor );",_w=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yw=`#ifdef USE_ENVMAP
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
#endif`,xw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bw=`#ifdef USE_ENVMAP
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
#endif`,Sw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mw=`#ifdef USE_ENVMAP
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
#endif`,ww=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ew=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Aw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cw=`#ifdef USE_GRADIENTMAP
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
}`,Rw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dw=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Lw=`#ifdef USE_ENVMAP
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
#endif`,Uw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ow=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kw=`PhysicalMaterial material;
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
#endif`,Bw=`uniform sampler2D dfgLUT;
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
}`,zw=`
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
#endif`,Vw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hw=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ww=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$w=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jw=`#if defined( USE_POINTS_UV )
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
#endif`,jw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,t1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i1=`#ifdef USE_MORPHTARGETS
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
#endif`,s1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,a1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,o1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,h1=`#ifdef USE_NORMALMAP
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
#endif`,u1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,v1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,E1=`float getShadowMask() {
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
}`,A1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C1=`#ifdef USE_SKINNING
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
#endif`,R1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I1=`#ifdef USE_SKINNING
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
#endif`,P1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,N1=`#ifdef USE_TRANSMISSION
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
#endif`,O1=`#ifdef USE_TRANSMISSION
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
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const V1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G1=`uniform sampler2D t2D;
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
}`,H1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,X1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$1=`#include <common>
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
}`,Y1=`#if DEPTH_PACKING == 3200
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
}`,Z1=`#define DISTANCE
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
}`,K1=`#define DISTANCE
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
}`,J1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q1=`uniform float scale;
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
}`,eT=`uniform vec3 diffuse;
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
}`,tT=`#include <common>
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
}`,nT=`uniform vec3 diffuse;
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
}`,iT=`#define LAMBERT
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
}`,sT=`#define LAMBERT
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
}`,rT=`#define MATCAP
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
}`,aT=`#define MATCAP
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
}`,oT=`#define NORMAL
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
}`,lT=`#define NORMAL
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
}`,cT=`#define PHONG
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
}`,hT=`#define PHONG
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
}`,uT=`#define STANDARD
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
}`,dT=`#define STANDARD
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
}`,fT=`#define TOON
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
}`,pT=`#define TOON
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
}`,mT=`uniform float size;
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
}`,gT=`uniform vec3 diffuse;
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
}`,vT=`#include <common>
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
}`,_T=`uniform vec3 color;
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
}`,yT=`uniform float rotation;
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
}`,xT=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:VM,alphahash_pars_fragment:GM,alphamap_fragment:HM,alphamap_pars_fragment:WM,alphatest_fragment:XM,alphatest_pars_fragment:qM,aomap_fragment:$M,aomap_pars_fragment:YM,batching_pars_vertex:ZM,batching_vertex:KM,begin_vertex:JM,beginnormal_vertex:jM,bsdfs:QM,iridescence_fragment:ew,bumpmap_pars_fragment:tw,clipping_planes_fragment:nw,clipping_planes_pars_fragment:iw,clipping_planes_pars_vertex:sw,clipping_planes_vertex:rw,color_fragment:aw,color_pars_fragment:ow,color_pars_vertex:lw,color_vertex:cw,common:hw,cube_uv_reflection_fragment:uw,defaultnormal_vertex:dw,displacementmap_pars_vertex:fw,displacementmap_vertex:pw,emissivemap_fragment:mw,emissivemap_pars_fragment:gw,colorspace_fragment:vw,colorspace_pars_fragment:_w,envmap_fragment:yw,envmap_common_pars_fragment:xw,envmap_pars_fragment:bw,envmap_pars_vertex:Sw,envmap_physical_pars_fragment:Lw,envmap_vertex:Mw,fog_vertex:ww,fog_pars_vertex:Tw,fog_fragment:Ew,fog_pars_fragment:Aw,gradientmap_pars_fragment:Cw,lightmap_pars_fragment:Rw,lights_lambert_fragment:Iw,lights_lambert_pars_fragment:Pw,lights_pars_begin:Dw,lights_toon_fragment:Uw,lights_toon_pars_fragment:Nw,lights_phong_fragment:Ow,lights_phong_pars_fragment:Fw,lights_physical_fragment:kw,lights_physical_pars_fragment:Bw,lights_fragment_begin:zw,lights_fragment_maps:Vw,lights_fragment_end:Gw,lightprobes_pars_fragment:Hw,logdepthbuf_fragment:Ww,logdepthbuf_pars_fragment:Xw,logdepthbuf_pars_vertex:qw,logdepthbuf_vertex:$w,map_fragment:Yw,map_pars_fragment:Zw,map_particle_fragment:Kw,map_particle_pars_fragment:Jw,metalnessmap_fragment:jw,metalnessmap_pars_fragment:Qw,morphinstance_vertex:e1,morphcolor_vertex:t1,morphnormal_vertex:n1,morphtarget_pars_vertex:i1,morphtarget_vertex:s1,normal_fragment_begin:r1,normal_fragment_maps:a1,normal_pars_fragment:o1,normal_pars_vertex:l1,normal_vertex:c1,normalmap_pars_fragment:h1,clearcoat_normal_fragment_begin:u1,clearcoat_normal_fragment_maps:d1,clearcoat_pars_fragment:f1,iridescence_pars_fragment:p1,opaque_fragment:m1,packing:g1,premultiplied_alpha_fragment:v1,project_vertex:_1,dithering_fragment:y1,dithering_pars_fragment:x1,roughnessmap_fragment:b1,roughnessmap_pars_fragment:S1,shadowmap_pars_fragment:M1,shadowmap_pars_vertex:w1,shadowmap_vertex:T1,shadowmask_pars_fragment:E1,skinbase_vertex:A1,skinning_pars_vertex:C1,skinning_vertex:R1,skinnormal_vertex:I1,specularmap_fragment:P1,specularmap_pars_fragment:D1,tonemapping_fragment:L1,tonemapping_pars_fragment:U1,transmission_fragment:N1,transmission_pars_fragment:O1,uv_pars_fragment:F1,uv_pars_vertex:k1,uv_vertex:B1,worldpos_vertex:z1,background_vert:V1,background_frag:G1,backgroundCube_vert:H1,backgroundCube_frag:W1,cube_vert:X1,cube_frag:q1,depth_vert:$1,depth_frag:Y1,distance_vert:Z1,distance_frag:K1,equirect_vert:J1,equirect_frag:j1,linedashed_vert:Q1,linedashed_frag:eT,meshbasic_vert:tT,meshbasic_frag:nT,meshlambert_vert:iT,meshlambert_frag:sT,meshmatcap_vert:rT,meshmatcap_frag:aT,meshnormal_vert:oT,meshnormal_frag:lT,meshphong_vert:cT,meshphong_frag:hT,meshphysical_vert:uT,meshphysical_frag:dT,meshtoon_vert:fT,meshtoon_frag:pT,points_vert:mT,points_frag:gT,shadow_vert:vT,shadow_frag:_T,sprite_vert:yT,sprite_frag:xT},Ce={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Qn={basic:{uniforms:An([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:An([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:An([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:An([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:An([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Fe(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:An([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:An([Ce.points,Ce.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:An([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:An([Ce.common,Ce.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:An([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:An([Ce.sprite,Ce.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:An([Ce.common,Ce.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:An([Ce.lights,Ce.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Qn.physical={uniforms:An([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const pl={r:0,b:0,g:0},bT=new nt,W0=new ct;W0.set(-1,0,0,0,1,0,0,0,1);function ST(i,e,t,n,s,r){const a=new Fe(0);let o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(_){let b=_.isScene===!0?_.background:null;if(b&&b.isTexture){const y=_.backgroundBlurriness>0;b=e.get(b,y)}return b}function p(_){let b=!1;const y=f(_);y===null?g(a,o):y&&y.isColor&&(g(y,1),b=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(_,b){const y=f(b);y&&(y.isCubeTexture||y.mapping===ta)?(c===void 0&&(c=new en(new Ms(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:jr(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bT.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(W0),c.material.toneMapped=gt.getTransfer(y.colorSpace)!==Rt,(u!==y||d!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new en(new na(2,2),new ai({name:"BackgroundMaterial",uniforms:jr(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=gt.getTransfer(y.colorSpace)!==Rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,b){_.getRGB(pl,u0(i)),t.buffers.color.setClear(pl.r,pl.g,pl.b,b,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,b=1){a.set(_),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(a,o)},render:p,addToRenderList:v,dispose:m}}function MT(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(D,k,L,V,O){let N=!1;const F=d(D,V,L,k);r!==F&&(r=F,c(r.object)),N=f(D,V,L,O),N&&p(D,V,L,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,y(D,k,L,V),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function d(D,k,L,V){const O=V.wireframe===!0;let N=n[k.id];N===void 0&&(N={},n[k.id]=N);const F=D.isInstancedMesh===!0?D.id:0;let z=N[F];z===void 0&&(z={},N[F]=z);let W=z[L.id];W===void 0&&(W={},z[L.id]=W);let ie=W[O];return ie===void 0&&(ie=h(l()),W[O]=ie),ie}function h(D){const k=[],L=[],V=[];for(let O=0;O<t;O++)k[O]=0,L[O]=0,V[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:L,attributeDivisors:V,object:D,attributes:{},index:null}}function f(D,k,L,V){const O=r.attributes,N=k.attributes;let F=0;const z=L.getAttributes();for(const W in z)if(z[W].location>=0){const Q=O[W];let re=N[W];if(re===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(re=D.instanceColor)),Q===void 0||Q.attribute!==re||re&&Q.data!==re.data)return!0;F++}return r.attributesNum!==F||r.index!==V}function p(D,k,L,V){const O={},N=k.attributes;let F=0;const z=L.getAttributes();for(const W in z)if(z[W].location>=0){let Q=N[W];Q===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));const re={};re.attribute=Q,Q&&Q.data&&(re.data=Q.data),O[W]=re,F++}r.attributes=O,r.attributesNum=F,r.index=V}function v(){const D=r.newAttributes;for(let k=0,L=D.length;k<L;k++)D[k]=0}function g(D){m(D,0)}function m(D,k){const L=r.newAttributes,V=r.enabledAttributes,O=r.attributeDivisors;L[D]=1,V[D]===0&&(i.enableVertexAttribArray(D),V[D]=1),O[D]!==k&&(i.vertexAttribDivisor(D,k),O[D]=k)}function _(){const D=r.newAttributes,k=r.enabledAttributes;for(let L=0,V=k.length;L<V;L++)k[L]!==D[L]&&(i.disableVertexAttribArray(L),k[L]=0)}function b(D,k,L,V,O,N,F){F===!0?i.vertexAttribIPointer(D,k,L,O,N):i.vertexAttribPointer(D,k,L,V,O,N)}function y(D,k,L,V){v();const O=V.attributes,N=L.getAttributes(),F=k.defaultAttributeValues;for(const z in N){const W=N[z];if(W.location>=0){let ie=O[z];if(ie===void 0&&(z==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),z==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor)),ie!==void 0){const Q=ie.normalized,re=ie.itemSize,Pe=e.get(ie);if(Pe===void 0)continue;const dt=Pe.buffer,at=Pe.type,ee=Pe.bytesPerElement,_e=at===i.INT||at===i.UNSIGNED_INT||ie.gpuType===Uc;if(ie.isInterleavedBufferAttribute){const de=ie.data,He=de.stride,je=ie.offset;if(de.isInstancedInterleavedBuffer){for(let te=0;te<W.locationSize;te++)m(W.location+te,de.meshPerAttribute);D.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let te=0;te<W.locationSize;te++)g(W.location+te);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let te=0;te<W.locationSize;te++)b(W.location+te,re/W.locationSize,at,Q,He*ee,(je+re/W.locationSize*te)*ee,_e)}else{if(ie.isInstancedBufferAttribute){for(let de=0;de<W.locationSize;de++)m(W.location+de,ie.meshPerAttribute);D.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let de=0;de<W.locationSize;de++)g(W.location+de);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let de=0;de<W.locationSize;de++)b(W.location+de,re/W.locationSize,at,Q,re*ee,re/W.locationSize*de*ee,_e)}}else if(F!==void 0){const Q=F[z];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(W.location,Q);break;case 3:i.vertexAttrib3fv(W.location,Q);break;case 4:i.vertexAttrib4fv(W.location,Q);break;default:i.vertexAttrib1fv(W.location,Q)}}}}_()}function w(){T();for(const D in n){const k=n[D];for(const L in k){const V=k[L];for(const O in V){const N=V[O];for(const F in N)u(N[F].object),delete N[F];delete V[O]}}delete n[D]}}function M(D){if(n[D.id]===void 0)return;const k=n[D.id];for(const L in k){const V=k[L];for(const O in V){const N=V[O];for(const F in N)u(N[F].object),delete N[F];delete V[O]}}delete n[D.id]}function A(D){for(const k in n){const L=n[k];for(const V in L){const O=L[V];if(O[D.id]===void 0)continue;const N=O[D.id];for(const F in N)u(N[F].object),delete N[F];delete O[D.id]}}}function x(D){for(const k in n){const L=n[k],V=D.isInstancedMesh===!0?D.id:0,O=L[V];if(O!==void 0){for(const N in O){const F=O[N];for(const z in F)u(F[z].object),delete F[z];delete O[N]}delete L[V],Object.keys(L).length===0&&delete n[k]}}}function T(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:_}}function wT(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function TT(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Dn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const x=A===Pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==kn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Pn&&!x)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ee("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:y,maxSamples:w,samples:M}}function ET(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Hi,o=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const p=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{const _=r?0:n,b=_*4;let y=m.clippingState||null;l.value=y,y=u(p,h,b,f);for(let w=0;w!==b;++w)y[w]=t[w];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,p){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=l.value,p!==!0||g===null){const m=f+v*4,_=h.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,y=f;b!==v;++b,y+=4)a.copy(d[b]).applyMatrix4(_,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}const ms=4,rm=[.125,.215,.35,.446,.526,.582],Gs=20,AT=256,ya=new sa,am=new Fe;let uu=null,du=0,fu=0,pu=!1;const CT=new P;class Hu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=CT}=r;uu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),fu=this._renderer.getActiveMipmapLevel(),pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(uu,du,fu),this._renderer.xr.enabled=pu,e.scissorTest=!1,Lr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),fu=this._renderer.getActiveMipmapLevel(),pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Pi,format:Dn,colorSpace:qa,depthBuffer:!1},s=om(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=om(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=RT(r)),this._blurMaterial=PT(r,e,t),this._ggxMaterial=IT(r,e,t)}return s}_compileMaterial(e){const t=new en(new ht,e);this._renderer.compile(t,ya)}_sceneToCubeUV(e,t,n,s,r){const l=new dn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(am),d.toneMapping=gi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new en(new Ms,new Qi({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let m=!1;const _=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,m=!0):(g.color.copy(am),m=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const w=this._cubeSize;Lr(s,y*w,b>2?w:0,w,w),d.setRenderTarget(s),m&&d.render(v,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ii||e.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lm());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Lr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ya)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:p}=this,v=this._sizeLods[n],g=3*v*(n>p-ms?n-p+ms:0),m=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Lr(r,g,m,3*v,2*v),s.setRenderTarget(r),s.render(o,ya),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Lr(e,g,m,3*v,2*v),s.setRenderTarget(e),s.render(o,ya)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=c;const h=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Gs-1),v=r/p,g=isFinite(r)?1+Math.floor(u*v):Gs;g>Gs&&Ee(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Gs}`);const m=[];let _=0;for(let A=0;A<Gs;++A){const x=A/v,T=Math.exp(-x*x/2);m.push(T),A===0?_+=T:A<g&&(_+=2*T)}for(let A=0;A<m.length;A++)m[A]=m[A]/_;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=p,h.mipInt.value=b-n;const y=this._sizeLods[s],w=3*y*(s>b-ms?s-b+ms:0),M=4*(this._cubeSize-y);Lr(t,w,M,3*y,2*y),l.setRenderTarget(t),l.render(d,ya)}}function RT(i){const e=[],t=[],n=[];let s=i;const r=i-ms+1+rm.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ms?l=rm[a-i+ms-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,p=6,v=3,g=2,m=1,_=new Float32Array(v*p*f),b=new Float32Array(g*p*f),y=new Float32Array(m*p*f);for(let M=0;M<f;M++){const A=M%3*2/3-1,x=M>2?0:-1,T=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];_.set(T,v*p*M),b.set(h,g*p*M);const I=[M,M,M,M,M,M];y.set(I,m*p*M)}const w=new ht;w.setAttribute("position",new Ut(_,v)),w.setAttribute("uv",new Ut(b,g)),w.setAttribute("faceIndex",new Ut(y,m)),n.push(new en(w,null)),s>ms&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function om(i,e,t){const n=new Yn(i,e,t);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function IT(i,e,t){return new ai({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:AT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mh(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function PT(i,e,t){const n=new Float32Array(Gs),s=new P(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:mh(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function lm(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mh(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function cm(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function mh(){return`

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
	`}class nf extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new go(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ms(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:jr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ln,blending:Ri});r.uniforms.tEquirect.value=t;const a=new en(s,r),o=t.minFilter;return t.minFilter===Ai&&(t.minFilter=Vt),new U0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function DT(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===Aa||f===Ca)if(e.has(h)){const p=e.get(h).texture;return o(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const v=new nf(p.height);return v.fromEquirectangularTexture(i,h),e.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,p=f===Aa||f===Ca,v=f===Ii||f===_s;if(p||v){let g=t.get(h);const m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new Hu(i)),g=p?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const _=h.image;return p&&_&&_.height>0||v&&_&&l(_)?(n===null&&(n=new Hu(i)),g=p?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,f){return f===Aa?h.mapping=Ii:f===Ca&&(h.mapping=_s),h}function l(h){let f=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&f++;return f===p}function c(h){const f=h.target;f.removeEventListener("dispose",c);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function LT(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&gs("WebGLRenderer: "+n+" extension not supported."),s}}}function UT(i,e,t,n){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",a),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,p=d.attributes.position;let v=0;if(p===void 0)return;if(f!==null){const _=f.array;v=f.version;for(let b=0,y=_.length;b<y;b+=3){const w=_[b+0],M=_[b+1],A=_[b+2];h.push(w,M,M,A,A,w)}}else{const _=p.array;v=p.version;for(let b=0,y=_.length/3-1;b<y;b+=3){const w=b+0,M=b+1,A=b+2;h.push(w,M,M,A,A,w)}}const g=new(p.count>=65535?Id:Rd)(h,1);g.version=v;const m=r.get(d);m&&e.remove(m),r.set(d,g)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function NT(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),t.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*a,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let v=0;for(let g=0;g<f;g++)v+=h[g];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function OT(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ye("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function FT(i,e,t){const n=new WeakMap,s=new Pt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let T=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let b=0;f===!0&&(b=1),p===!0&&(b=2),v===!0&&(b=3);let y=o.attributes.position.count*b,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const M=new Float32Array(y*w*4*d),A=new Hc(M,y,w,d);A.type=Pn,A.needsUpdate=!0;const x=b*4;for(let I=0;I<d;I++){const D=g[I],k=m[I],L=_[I],V=y*w*4*I;for(let O=0;O<D.count;O++){const N=O*x;f===!0&&(s.fromBufferAttribute(D,O),M[V+N+0]=s.x,M[V+N+1]=s.y,M[V+N+2]=s.z,M[V+N+3]=0),p===!0&&(s.fromBufferAttribute(k,O),M[V+N+4]=s.x,M[V+N+5]=s.y,M[V+N+6]=s.z,M[V+N+7]=0),v===!0&&(s.fromBufferAttribute(L,O),M[V+N+8]=s.x,M[V+N+9]=s.y,M[V+N+10]=s.z,M[V+N+11]=L.itemSize===4?s.w:1)}}h={count:d,texture:A,size:new oe(y,w)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function kT(i,e,t,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const BT={[dd]:"LINEAR_TONE_MAPPING",[fd]:"REINHARD_TONE_MAPPING",[pd]:"CINEON_TONE_MAPPING",[md]:"ACES_FILMIC_TONE_MAPPING",[Dc]:"AGX_TONE_MAPPING",[vd]:"NEUTRAL_TONE_MAPPING",[gd]:"CUSTOM_TONE_MAPPING"};function zT(i,e,t,n,s,r){const a=new Yn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new nr(e,t):void 0}),o=new Yn(e,t,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),l=new ht;l.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Be([0,2,0,0,2,0],2));const c=new Gd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new en(l,c),d=new sa(-1,1,1,-1,0,1);let h=null,f=null,p=!1,v,g=null,m=[],_=!1;this.setSize=function(b,y){a.setSize(b,y),o.setSize(b,y);for(let w=0;w<m.length;w++){const M=m[w];M.setSize&&M.setSize(b,y)}},this.setEffects=function(b){m=b,_=m.length>0&&m[0].isRenderPass===!0;const y=a.width,w=a.height;for(let M=0;M<m.length;M++){const A=m[M];A.setSize&&A.setSize(y,w)}},this.begin=function(b,y){if(p||b.toneMapping===gi&&m.length===0)return!1;if(g=y,y!==null){const w=y.width,M=y.height;(a.width!==w||a.height!==M)&&this.setSize(w,M)}return _===!1&&b.setRenderTarget(a),v=b.toneMapping,b.toneMapping=gi,!0},this.hasRenderPass=function(){return _},this.end=function(b,y){b.toneMapping=v,p=!0;let w=a,M=o;for(let A=0;A<m.length;A++){const x=m[A];if(x.enabled!==!1&&(x.render(b,M,w,y),x.needsSwap!==!1)){const T=w;w=M,M=T}}if(h!==b.outputColorSpace||f!==b.toneMapping){h=b.outputColorSpace,f=b.toneMapping,c.defines={},gt.getTransfer(h)===Rt&&(c.defines.SRGB_TRANSFER="");const A=BT[f];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,b.setRenderTarget(g),b.render(u,d),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const X0=new Xt,Wu=new nr(1,1),q0=new Hc,$0=new Wc,Y0=new go,hm=[],um=[],dm=new Float32Array(16),fm=new Float32Array(9),pm=new Float32Array(4);function ra(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=hm[s];if(r===void 0&&(r=new Float32Array(s),hm[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function rn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function an(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function gh(i,e){let t=um[e];t===void 0&&(t=new Int32Array(e),um[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function VT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function GT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2fv(this.addr,e),an(t,e)}}function HT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;i.uniform3fv(this.addr,e),an(t,e)}}function WT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4fv(this.addr,e),an(t,e)}}function XT(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(rn(t,n))return;pm.set(n),i.uniformMatrix2fv(this.addr,!1,pm),an(t,n)}}function qT(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(rn(t,n))return;fm.set(n),i.uniformMatrix3fv(this.addr,!1,fm),an(t,n)}}function $T(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(rn(t,n))return;dm.set(n),i.uniformMatrix4fv(this.addr,!1,dm),an(t,n)}}function YT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ZT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2iv(this.addr,e),an(t,e)}}function KT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3iv(this.addr,e),an(t,e)}}function JT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4iv(this.addr,e),an(t,e)}}function jT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function QT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2uiv(this.addr,e),an(t,e)}}function eE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3uiv(this.addr,e),an(t,e)}}function tE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4uiv(this.addr,e),an(t,e)}}function nE(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Wu.compareFunction=t.isReversedDepthBuffer()?Gc:Vc,r=Wu):r=X0,t.setTexture2D(e||r,s)}function iE(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||$0,s)}function sE(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Y0,s)}function rE(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||q0,s)}function aE(i){switch(i){case 5126:return VT;case 35664:return GT;case 35665:return HT;case 35666:return WT;case 35674:return XT;case 35675:return qT;case 35676:return $T;case 5124:case 35670:return YT;case 35667:case 35671:return ZT;case 35668:case 35672:return KT;case 35669:case 35673:return JT;case 5125:return jT;case 36294:return QT;case 36295:return eE;case 36296:return tE;case 35678:case 36198:case 36298:case 36306:case 35682:return nE;case 35679:case 36299:case 36307:return iE;case 35680:case 36300:case 36308:case 36293:return sE;case 36289:case 36303:case 36311:case 36292:return rE}}function oE(i,e){i.uniform1fv(this.addr,e)}function lE(i,e){const t=ra(e,this.size,2);i.uniform2fv(this.addr,t)}function cE(i,e){const t=ra(e,this.size,3);i.uniform3fv(this.addr,t)}function hE(i,e){const t=ra(e,this.size,4);i.uniform4fv(this.addr,t)}function uE(i,e){const t=ra(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function dE(i,e){const t=ra(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function fE(i,e){const t=ra(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function pE(i,e){i.uniform1iv(this.addr,e)}function mE(i,e){i.uniform2iv(this.addr,e)}function gE(i,e){i.uniform3iv(this.addr,e)}function vE(i,e){i.uniform4iv(this.addr,e)}function _E(i,e){i.uniform1uiv(this.addr,e)}function yE(i,e){i.uniform2uiv(this.addr,e)}function xE(i,e){i.uniform3uiv(this.addr,e)}function bE(i,e){i.uniform4uiv(this.addr,e)}function SE(i,e,t){const n=this.cache,s=e.length,r=gh(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Wu:a=X0;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function ME(i,e,t){const n=this.cache,s=e.length,r=gh(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||$0,r[a])}function wE(i,e,t){const n=this.cache,s=e.length,r=gh(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Y0,r[a])}function TE(i,e,t){const n=this.cache,s=e.length,r=gh(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||q0,r[a])}function EE(i){switch(i){case 5126:return oE;case 35664:return lE;case 35665:return cE;case 35666:return hE;case 35674:return uE;case 35675:return dE;case 35676:return fE;case 5124:case 35670:return pE;case 35667:case 35671:return mE;case 35668:case 35672:return gE;case 35669:case 35673:return vE;case 5125:return _E;case 36294:return yE;case 36295:return xE;case 36296:return bE;case 35678:case 36198:case 36298:case 36306:case 35682:return SE;case 35679:case 36299:case 36307:return ME;case 35680:case 36300:case 36308:case 36293:return wE;case 36289:case 36303:case 36311:case 36292:return TE}}class AE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=aE(t.type)}}class CE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=EE(t.type)}}class RE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const mu=/(\w+)(\])?(\[|\.)?/g;function mm(i,e){i.seq.push(e),i.map[e.id]=e}function IE(i,e,t){const n=i.name,s=n.length;for(mu.lastIndex=0;;){const r=mu.exec(n),a=mu.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){mm(t,c===void 0?new AE(o,i,e):new CE(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new RE(o),mm(t,d)),t=d}}}class Sl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);IE(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function gm(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const PE=37297;let DE=0;function LE(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const vm=new ct;function UE(i){gt._getMatrix(vm,gt.workingColorSpace,i);const e=`mat3( ${vm.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(i)){case $a:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return Ee("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function _m(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+LE(i.getShaderSource(e),o)}else return r}function NE(i,e){const t=UE(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const OE={[dd]:"Linear",[fd]:"Reinhard",[pd]:"Cineon",[md]:"ACESFilmic",[Dc]:"AgX",[vd]:"Neutral",[gd]:"Custom"};function FE(i,e){const t=OE[e];return t===void 0?(Ee("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ml=new P;function kE(){gt.getLuminanceCoefficients(ml);const i=ml.x.toFixed(4),e=ml.y.toFixed(4),t=ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wa).join(`
`)}function zE(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function VE(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function wa(i){return i!==""}function ym(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xu(i){return i.replace(GE,WE)}const HE=new Map;function WE(i,e){let t=it[e];if(t===void 0){const n=HE.get(e);if(n!==void 0)t=it[n],Ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Xu(t)}const XE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bm(i){return i.replace(XE,qE)}function qE(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const $E={[Ea]:"SHADOWMAP_TYPE_PCF",[Or]:"SHADOWMAP_TYPE_VSM"};function YE(i){return $E[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ZE={[Ii]:"ENVMAP_TYPE_CUBE",[_s]:"ENVMAP_TYPE_CUBE",[ta]:"ENVMAP_TYPE_CUBE_UV"};function KE(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ZE[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const JE={[_s]:"ENVMAP_MODE_REFRACTION"};function jE(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":JE[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const QE={[po]:"ENVMAP_BLENDING_MULTIPLY",[Mg]:"ENVMAP_BLENDING_MIX",[wg]:"ENVMAP_BLENDING_ADD"};function eA(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":QE[i.combine]||"ENVMAP_BLENDING_NONE"}function tA(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function nA(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=YE(t),c=KE(t),u=jE(t),d=eA(t),h=tA(t),f=BE(t),p=zE(r),v=s.createProgram();let g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(wa).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(wa).join(`
`),m.length>0&&(m+=`
`)):(g=[Sm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wa).join(`
`),m=[Sm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?it.tonemapping_pars_fragment:"",t.toneMapping!==gi?FE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,NE("linearToOutputTexel",t.outputColorSpace),kE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wa).join(`
`)),a=Xu(a),a=ym(a,t),a=xm(a,t),o=Xu(o),o=ym(o,t),o=xm(o,t),a=bm(a),o=bm(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=_+g+a,y=_+m+o,w=gm(s,s.VERTEX_SHADER,b),M=gm(s,s.FRAGMENT_SHADER,y);s.attachShader(v,w),s.attachShader(v,M),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(D){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(v)||"",L=s.getShaderInfoLog(w)||"",V=s.getShaderInfoLog(M)||"",O=k.trim(),N=L.trim(),F=V.trim();let z=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,w,M);else{const ie=_m(s,w,"vertex"),Q=_m(s,M,"fragment");Ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+ie+`
`+Q)}else O!==""?Ee("WebGLProgram: Program Info Log:",O):(N===""||F==="")&&(W=!1);W&&(D.diagnostics={runnable:z,programLog:O,vertexShader:{log:N,prefix:g},fragmentShader:{log:F,prefix:m}})}s.deleteShader(w),s.deleteShader(M),x=new Sl(s,v),T=VE(s,v)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(v,PE)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=DE++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=M,this}let iA=0;class sA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new rA(e),t.set(e,n)),n}}class rA{constructor(e){this.id=iA++,this.code=e,this.usedTimes=0}}function aA(i){return i===ys||i===Ga||i===Ha}function oA(i,e,t,n,s,r){const a=new Xc,o=new sA,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,T,I,D,k,L){const V=D.fog,O=k.geometry,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=e.get(x.envMap||N,F),W=z&&z.mapping===ta?z.image.height:null,ie=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ee("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const Q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,re=Q!==void 0?Q.length:0;let Pe=0;O.morphAttributes.position!==void 0&&(Pe=1),O.morphAttributes.normal!==void 0&&(Pe=2),O.morphAttributes.color!==void 0&&(Pe=3);let dt,at,ee,_e;if(ie){const Oe=Qn[ie];dt=Oe.vertexShader,at=Oe.fragmentShader}else{dt=x.vertexShader,at=x.fragmentShader;const Oe=o.getVertexShaderStage(x),Gt=o.getFragmentShaderStage(x);o.update(x,Oe,Gt),ee=Oe.id,_e=Gt.id}const de=i.getRenderTarget(),He=i.state.buffers.depth.getReversed(),je=k.isInstancedMesh===!0,te=k.isBatchedMesh===!0,we=!!x.map,Le=!!x.matcap,ae=!!z,he=!!x.aoMap,ue=!!x.lightMap,be=!!x.bumpMap&&x.wireframe===!1,Me=!!x.normalMap,Qe=!!x.displacementMap,j=!!x.emissiveMap,ne=!!x.metalnessMap,pe=!!x.roughnessMap,U=x.anisotropy>0,Ge=x.clearcoat>0,We=x.dispersion>0,R=x.iridescence>0,S=x.sheen>0,G=x.transmission>0,X=U&&!!x.anisotropyMap,Z=Ge&&!!x.clearcoatMap,fe=Ge&&!!x.clearcoatNormalMap,ye=Ge&&!!x.clearcoatRoughnessMap,J=R&&!!x.iridescenceMap,se=R&&!!x.iridescenceThicknessMap,Se=S&&!!x.sheenColorMap,qe=S&&!!x.sheenRoughnessMap,Ie=!!x.specularMap,Ae=!!x.specularColorMap,Ze=!!x.specularIntensityMap,et=G&&!!x.transmissionMap,ut=G&&!!x.thicknessMap,B=!!x.gradientMap,ce=!!x.alphaMap,Y=x.alphaTest>0,me=!!x.alphaHash,xe=!!x.extensions;let le=gi;x.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(le=i.toneMapping);const ke={shaderID:ie,shaderType:x.type,shaderName:x.name,vertexShader:dt,fragmentShader:at,defines:x.defines,customVertexShaderID:ee,customFragmentShaderID:_e,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:te,batchingColor:te&&k._colorsTexture!==null,instancing:je,instancingColor:je&&k.instanceColor!==null,instancingMorph:je&&k.morphTexture!==null,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:we,matcap:Le,envMap:ae,envMapMode:ae&&z.mapping,envMapCubeUVHeight:W,aoMap:he,lightMap:ue,bumpMap:be,normalMap:Me,displacementMap:Qe,emissiveMap:j,normalMapObjectSpace:Me&&x.normalMapType===Ig,normalMapTangentSpace:Me&&x.normalMapType===Zi,packedNormalMap:Me&&x.normalMapType===Zi&&aA(x.normalMap.format),metalnessMap:ne,roughnessMap:pe,anisotropy:U,anisotropyMap:X,clearcoat:Ge,clearcoatMap:Z,clearcoatNormalMap:fe,clearcoatRoughnessMap:ye,dispersion:We,iridescence:R,iridescenceMap:J,iridescenceThicknessMap:se,sheen:S,sheenColorMap:Se,sheenRoughnessMap:qe,specularMap:Ie,specularColorMap:Ae,specularIntensityMap:Ze,transmission:G,transmissionMap:et,thicknessMap:ut,gradientMap:B,opaque:x.transparent===!1&&x.blending===Zs&&x.alphaToCoverage===!1,alphaMap:ce,alphaTest:Y,alphaHash:me,combine:x.combine,mapUv:we&&p(x.map.channel),aoMapUv:he&&p(x.aoMap.channel),lightMapUv:ue&&p(x.lightMap.channel),bumpMapUv:be&&p(x.bumpMap.channel),normalMapUv:Me&&p(x.normalMap.channel),displacementMapUv:Qe&&p(x.displacementMap.channel),emissiveMapUv:j&&p(x.emissiveMap.channel),metalnessMapUv:ne&&p(x.metalnessMap.channel),roughnessMapUv:pe&&p(x.roughnessMap.channel),anisotropyMapUv:X&&p(x.anisotropyMap.channel),clearcoatMapUv:Z&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:fe&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:se&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:qe&&p(x.sheenRoughnessMap.channel),specularMapUv:Ie&&p(x.specularMap.channel),specularColorMapUv:Ae&&p(x.specularColorMap.channel),specularIntensityMapUv:Ze&&p(x.specularIntensityMap.channel),transmissionMapUv:et&&p(x.transmissionMap.channel),thicknessMapUv:ut&&p(x.thicknessMap.channel),alphaMapUv:ce&&p(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Me||U),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!O.attributes.uv&&(we||ce),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&Me===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:He,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Pe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:we&&x.map.isVideoTexture===!0&&gt.getTransfer(x.map.colorSpace)===Rt,decodeVideoTextureEmissive:j&&x.emissiveMap.isVideoTexture===!0&&gt.getTransfer(x.emissiveMap.colorSpace)===Rt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ei,flipSided:x.side===Ln,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:xe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&x.extensions.multiDraw===!0||te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function g(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)T.push(I),T.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(m(T,x),_(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function m(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function _(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function b(x){const T=f[x.type];let I;if(T){const D=Qn[T];I=Vd.clone(D.uniforms)}else I=x.uniforms;return I}function y(x,T){let I=u.get(T);return I!==void 0?++I.usedTimes:(I=new nA(i,T,x,s),c.push(I),u.set(T,I)),I}function w(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function M(x){o.remove(x)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:b,acquireProgram:y,releaseProgram:w,releaseShaderCache:M,programs:c,dispose:A}}function lA(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function cA(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Mm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wm(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,p,v,g,m){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:g,group:m},i[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.materialVariant=a(h),_.groupOrder=v,_.renderOrder=h.renderOrder,_.z=g,_.group=m),e++,_}function l(h,f,p,v,g,m){const _=o(h,f,p,v,g,m);p.transmission>0?n.push(_):p.transparent===!0?s.push(_):t.push(_)}function c(h,f,p,v,g,m){const _=o(h,f,p,v,g,m);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function u(h,f,p){t.length>1&&t.sort(h||cA),n.length>1&&n.sort(f||Mm),s.length>1&&s.sort(f||Mm),p&&(t.reverse(),n.reverse(),s.reverse())}function d(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function hA(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new wm,i.set(n,[a])):s>=r.length?(a=new wm,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function uA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Fe};break;case"SpotLight":t={position:new P,direction:new P,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function dA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let fA=0;function pA(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function mA(i){const e=new uA,t=dA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new nt,a=new nt;function o(c){let u=0,d=0,h=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,_=0,b=0,y=0,w=0,M=0,A=0;c.sort(pA);for(let T=0,I=c.length;T<I;T++){const D=c[T],k=D.color,L=D.intensity,V=D.distance;let O=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ys?O=D.shadow.map.texture:O=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=k.r*L,d+=k.g*L,h+=k.b*L;else if(D.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(D.sh.coefficients[N],L);A++}else if(D.isDirectionalLight){const N=e.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const F=D.shadow,z=t.get(D);z.shadowIntensity=F.intensity,z.shadowBias=F.bias,z.shadowNormalBias=F.normalBias,z.shadowRadius=F.radius,z.shadowMapSize=F.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=O,n.directionalShadowMatrix[f]=D.shadow.matrix,_++}n.directional[f]=N,f++}else if(D.isSpotLight){const N=e.get(D);N.position.setFromMatrixPosition(D.matrixWorld),N.color.copy(k).multiplyScalar(L),N.distance=V,N.coneCos=Math.cos(D.angle),N.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),N.decay=D.decay,n.spot[v]=N;const F=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,F.updateMatrices(D),D.castShadow&&M++),n.spotLightMatrix[v]=F.matrix,D.castShadow){const z=t.get(D);z.shadowIntensity=F.intensity,z.shadowBias=F.bias,z.shadowNormalBias=F.normalBias,z.shadowRadius=F.radius,z.shadowMapSize=F.mapSize,n.spotShadow[v]=z,n.spotShadowMap[v]=O,y++}v++}else if(D.isRectAreaLight){const N=e.get(D);N.color.copy(k).multiplyScalar(L),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=N,g++}else if(D.isPointLight){const N=e.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity),N.distance=D.distance,N.decay=D.decay,D.castShadow){const F=D.shadow,z=t.get(D);z.shadowIntensity=F.intensity,z.shadowBias=F.bias,z.shadowNormalBias=F.normalBias,z.shadowRadius=F.radius,z.shadowMapSize=F.mapSize,z.shadowCameraNear=F.camera.near,z.shadowCameraFar=F.camera.far,n.pointShadow[p]=z,n.pointShadowMap[p]=O,n.pointShadowMatrix[p]=D.shadow.matrix,b++}n.point[p]=N,p++}else if(D.isHemisphereLight){const N=e.get(D);N.skyColor.copy(D.color).multiplyScalar(L),N.groundColor.copy(D.groundColor).multiplyScalar(L),n.hemi[m]=N,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const x=n.hash;(x.directionalLength!==f||x.pointLength!==p||x.spotLength!==v||x.rectAreaLength!==g||x.hemiLength!==m||x.numDirectionalShadows!==_||x.numPointShadows!==b||x.numSpotShadows!==y||x.numSpotMaps!==w||x.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+w-M,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=A,x.directionalLength=f,x.pointLength=p,x.spotLength=v,x.rectAreaLength=g,x.hemiLength=m,x.numDirectionalShadows=_,x.numPointShadows=b,x.numSpotShadows=y,x.numSpotMaps=w,x.numLightProbes=A,n.version=fA++)}function l(c,u){let d=0,h=0,f=0,p=0,v=0;const g=u.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){const b=c[m];if(b.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),d++}else if(b.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(b.isRectAreaLight){const y=n.rectArea[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(b.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),p++}else if(b.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),h++}else if(b.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:n}}function Tm(i){const e=new mA(i),t=[],n=[],s=[];function r(h){d.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function gA(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Tm(i),e.set(s,[o])):r>=a.length?(o=new Tm(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const vA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_A=`uniform sampler2D shadow_pass;
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
}`,yA=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],xA=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Em=new nt,xa=new P,gu=new P;function bA(i,e,t){let n=new tr;const s=new oe,r=new oe,a=new Pt,o=new Wd,l=new Xd,c={},u=t.maxTextureSize,d={[Yi]:Ln,[Ln]:Yi,[Ei]:Ei},h=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:vA,fragmentShader:_A}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const p=new ht;p.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new en(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ea;let m=this.type;this.render=function(M,A,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===Cl&&(Ee("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ea);const T=i.getRenderTarget(),I=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Ri),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const L=m!==this.type;L&&A.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(O=>O.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,O=M.length;V<O;V++){const N=M[V],F=N.shadow;if(F===void 0){Ee("WebGLShadowMap:",N,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const z=F.getFrameExtents();s.multiply(z),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/z.x),s.x=r.x*z.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/z.y),s.y=r.y*z.y,F.mapSize.y=r.y));const W=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=W,F.map===null||L===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Or){if(N.isPointLight){Ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Yn(s.x,s.y,{format:ys,type:Pi,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),F.map.texture.name=N.name+".shadowMap",F.map.depthTexture=new nr(s.x,s.y,Pn),F.map.depthTexture.name=N.name+".shadowMapDepth",F.map.depthTexture.format=Di,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Qt,F.map.depthTexture.magFilter=Qt}else N.isPointLight?(F.map=new nf(s.x),F.map.depthTexture=new jg(s.x,ri)):(F.map=new Yn(s.x,s.y),F.map.depthTexture=new nr(s.x,s.y,ri)),F.map.depthTexture.name=N.name+".shadowMap",F.map.depthTexture.format=Di,this.type===Ea?(F.map.depthTexture.compareFunction=W?Gc:Vc,F.map.depthTexture.minFilter=Vt,F.map.depthTexture.magFilter=Vt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Qt,F.map.depthTexture.magFilter=Qt);F.camera.updateProjectionMatrix()}const ie=F.map.isWebGLCubeRenderTarget?6:1;for(let Q=0;Q<ie;Q++){if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(F.map),i.clear());const re=F.getViewport(Q);a.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),k.viewport(a)}if(N.isPointLight){const re=F.camera,Pe=F.matrix,dt=N.distance||re.far;dt!==re.far&&(re.far=dt,re.updateProjectionMatrix()),xa.setFromMatrixPosition(N.matrixWorld),re.position.copy(xa),gu.copy(re.position),gu.add(yA[Q]),re.up.copy(xA[Q]),re.lookAt(gu),re.updateMatrixWorld(),Pe.makeTranslation(-xa.x,-xa.y,-xa.z),Em.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Em,re.coordinateSystem,re.reversedDepth)}else F.updateMatrices(N);n=F.getFrustum(),y(A,x,F.camera,N,this.type)}F.isPointLightShadow!==!0&&this.type===Or&&_(F,x),F.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(T,I,D)};function _(M,A){const x=e.update(v);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Yn(s.x,s.y,{format:ys,type:Pi})),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(A,null,x,h,v,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(A,null,x,f,v,null)}function b(M,A,x,T){let I=null;const D=x.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)I=D;else if(I=x.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const k=I.uuid,L=A.uuid;let V=c[k];V===void 0&&(V={},c[k]=V);let O=V[L];O===void 0&&(O=I.clone(),V[L]=O,A.addEventListener("dispose",w)),I=O}if(I.visible=A.visible,I.wireframe=A.wireframe,T===Or?I.side=A.shadowSide!==null?A.shadowSide:A.side:I.side=A.shadowSide!==null?A.shadowSide:d[A.side],I.alphaMap=A.alphaMap,I.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,I.map=A.map,I.clipShadows=A.clipShadows,I.clippingPlanes=A.clippingPlanes,I.clipIntersection=A.clipIntersection,I.displacementMap=A.displacementMap,I.displacementScale=A.displacementScale,I.displacementBias=A.displacementBias,I.wireframeLinewidth=A.wireframeLinewidth,I.linewidth=A.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const k=i.properties.get(I);k.light=x}return I}function y(M,A,x,T,I){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&I===Or)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,M.matrixWorld);const L=e.update(M),V=M.material;if(Array.isArray(V)){const O=L.groups;for(let N=0,F=O.length;N<F;N++){const z=O[N],W=V[z.materialIndex];if(W&&W.visible){const ie=b(M,W,T,I);M.onBeforeShadow(i,M,A,x,L,ie,z),i.renderBufferDirect(x,null,L,ie,M,z),M.onAfterShadow(i,M,A,x,L,ie,z)}}}else if(V.visible){const O=b(M,V,T,I);M.onBeforeShadow(i,M,A,x,L,O,null),i.renderBufferDirect(x,null,L,O,M,null),M.onAfterShadow(i,M,A,x,L,O,null)}}const k=M.children;for(let L=0,V=k.length;L<V;L++)y(k[L],A,x,T,I)}function w(M){M.target.removeEventListener("dispose",w);for(const x in c){const T=c[x],I=M.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function SA(i,e){function t(){let B=!1;const ce=new Pt;let Y=null;const me=new Pt(0,0,0,0);return{setMask:function(xe){Y!==xe&&!B&&(i.colorMask(xe,xe,xe,xe),Y=xe)},setLocked:function(xe){B=xe},setClear:function(xe,le,ke,Oe,Gt){Gt===!0&&(xe*=Oe,le*=Oe,ke*=Oe),ce.set(xe,le,ke,Oe),me.equals(ce)===!1&&(i.clearColor(xe,le,ke,Oe),me.copy(ce))},reset:function(){B=!1,Y=null,me.set(-1,0,0,0)}}}function n(){let B=!1,ce=!1,Y=null,me=null,xe=null;return{setReversed:function(le){if(ce!==le){const ke=e.get("EXT_clip_control");le?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),ce=le;const Oe=xe;xe=null,this.setClear(Oe)}},getReversed:function(){return ce},setTest:function(le){le?de(i.DEPTH_TEST):He(i.DEPTH_TEST)},setMask:function(le){Y!==le&&!B&&(i.depthMask(le),Y=le)},setFunc:function(le){if(ce&&(le=Vx[le]),me!==le){switch(le){case Pl:i.depthFunc(i.NEVER);break;case Dl:i.depthFunc(i.ALWAYS);break;case Ll:i.depthFunc(i.LESS);break;case js:i.depthFunc(i.LEQUAL);break;case Ul:i.depthFunc(i.EQUAL);break;case Nl:i.depthFunc(i.GEQUAL);break;case Ol:i.depthFunc(i.GREATER);break;case Fl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=le}},setLocked:function(le){B=le},setClear:function(le){xe!==le&&(xe=le,ce&&(le=1-le),i.clearDepth(le))},reset:function(){B=!1,Y=null,me=null,xe=null,ce=!1}}}function s(){let B=!1,ce=null,Y=null,me=null,xe=null,le=null,ke=null,Oe=null,Gt=null;return{setTest:function(Ft){B||(Ft?de(i.STENCIL_TEST):He(i.STENCIL_TEST))},setMask:function(Ft){ce!==Ft&&!B&&(i.stencilMask(Ft),ce=Ft)},setFunc:function(Ft,bi,Si){(Y!==Ft||me!==bi||xe!==Si)&&(i.stencilFunc(Ft,bi,Si),Y=Ft,me=bi,xe=Si)},setOp:function(Ft,bi,Si){(le!==Ft||ke!==bi||Oe!==Si)&&(i.stencilOp(Ft,bi,Si),le=Ft,ke=bi,Oe=Si)},setLocked:function(Ft){B=Ft},setClear:function(Ft){Gt!==Ft&&(i.clearStencil(Ft),Gt=Ft)},reset:function(){B=!1,ce=null,Y=null,me=null,xe=null,le=null,ke=null,Oe=null,Gt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,p=[],v=null,g=!1,m=null,_=null,b=null,y=null,w=null,M=null,A=null,x=new Fe(0,0,0),T=0,I=!1,D=null,k=null,L=null,V=null,O=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,z=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(W)[1]),F=z>=1):W.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),F=z>=2);let ie=null,Q={};const re=i.getParameter(i.SCISSOR_BOX),Pe=i.getParameter(i.VIEWPORT),dt=new Pt().fromArray(re),at=new Pt().fromArray(Pe);function ee(B,ce,Y,me){const xe=new Uint8Array(4),le=i.createTexture();i.bindTexture(B,le),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<Y;ke++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(ce+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return le}const _e={};_e[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),de(i.DEPTH_TEST),a.setFunc(js),be(!1),Me(Eu),de(i.CULL_FACE),he(Ri);function de(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function He(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function je(B,ce){return h[B]!==ce?(i.bindFramebuffer(B,ce),h[B]=ce,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ce),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function te(B,ce){let Y=p,me=!1;if(B){Y=f.get(ce),Y===void 0&&(Y=[],f.set(ce,Y));const xe=B.textures;if(Y.length!==xe.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let le=0,ke=xe.length;le<ke;le++)Y[le]=i.COLOR_ATTACHMENT0+le;Y.length=xe.length,me=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,me=!0);me&&i.drawBuffers(Y)}function we(B){return v!==B?(i.useProgram(B),v=B,!0):!1}const Le={[ds]:i.FUNC_ADD,[ag]:i.FUNC_SUBTRACT,[og]:i.FUNC_REVERSE_SUBTRACT};Le[lg]=i.MIN,Le[cg]=i.MAX;const ae={[hg]:i.ZERO,[ug]:i.ONE,[dg]:i.SRC_COLOR,[Rl]:i.SRC_ALPHA,[_g]:i.SRC_ALPHA_SATURATE,[gg]:i.DST_COLOR,[pg]:i.DST_ALPHA,[fg]:i.ONE_MINUS_SRC_COLOR,[Il]:i.ONE_MINUS_SRC_ALPHA,[vg]:i.ONE_MINUS_DST_COLOR,[mg]:i.ONE_MINUS_DST_ALPHA,[yg]:i.CONSTANT_COLOR,[xg]:i.ONE_MINUS_CONSTANT_COLOR,[bg]:i.CONSTANT_ALPHA,[Sg]:i.ONE_MINUS_CONSTANT_ALPHA};function he(B,ce,Y,me,xe,le,ke,Oe,Gt,Ft){if(B===Ri){g===!0&&(He(i.BLEND),g=!1);return}if(g===!1&&(de(i.BLEND),g=!0),B!==rg){if(B!==m||Ft!==I){if((_!==ds||w!==ds)&&(i.blendEquation(i.FUNC_ADD),_=ds,w=ds),Ft)switch(B){case Zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Au:i.blendFunc(i.ONE,i.ONE);break;case Cu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ru:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",B);break}else switch(B){case Zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Au:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Cu:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ru:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",B);break}b=null,y=null,M=null,A=null,x.set(0,0,0),T=0,m=B,I=Ft}return}xe=xe||ce,le=le||Y,ke=ke||me,(ce!==_||xe!==w)&&(i.blendEquationSeparate(Le[ce],Le[xe]),_=ce,w=xe),(Y!==b||me!==y||le!==M||ke!==A)&&(i.blendFuncSeparate(ae[Y],ae[me],ae[le],ae[ke]),b=Y,y=me,M=le,A=ke),(Oe.equals(x)===!1||Gt!==T)&&(i.blendColor(Oe.r,Oe.g,Oe.b,Gt),x.copy(Oe),T=Gt),m=B,I=!1}function ue(B,ce){B.side===Ei?He(i.CULL_FACE):de(i.CULL_FACE);let Y=B.side===Ln;ce&&(Y=!Y),be(Y),B.blending===Zs&&B.transparent===!1?he(Ri):he(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const me=B.stencilWrite;o.setTest(me),me&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),j(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):He(i.SAMPLE_ALPHA_TO_COVERAGE)}function be(B){D!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),D=B)}function Me(B){B!==ig?(de(i.CULL_FACE),B!==k&&(B===Eu?i.cullFace(i.BACK):B===sg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):He(i.CULL_FACE),k=B}function Qe(B){B!==L&&(F&&i.lineWidth(B),L=B)}function j(B,ce,Y){B?(de(i.POLYGON_OFFSET_FILL),(V!==ce||O!==Y)&&(V=ce,O=Y,a.getReversed()&&(ce=-ce),i.polygonOffset(ce,Y))):He(i.POLYGON_OFFSET_FILL)}function ne(B){B?de(i.SCISSOR_TEST):He(i.SCISSOR_TEST)}function pe(B){B===void 0&&(B=i.TEXTURE0+N-1),ie!==B&&(i.activeTexture(B),ie=B)}function U(B,ce,Y){Y===void 0&&(ie===null?Y=i.TEXTURE0+N-1:Y=ie);let me=Q[Y];me===void 0&&(me={type:void 0,texture:void 0},Q[Y]=me),(me.type!==B||me.texture!==ce)&&(ie!==Y&&(i.activeTexture(Y),ie=Y),i.bindTexture(B,ce||_e[B]),me.type=B,me.texture=ce)}function Ge(){const B=Q[ie];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function We(){try{i.compressedTexImage2D(...arguments)}catch(B){Ye("WebGLState:",B)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(B){Ye("WebGLState:",B)}}function S(){try{i.texSubImage2D(...arguments)}catch(B){Ye("WebGLState:",B)}}function G(){try{i.texSubImage3D(...arguments)}catch(B){Ye("WebGLState:",B)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(B){Ye("WebGLState:",B)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(B){Ye("WebGLState:",B)}}function fe(){try{i.texStorage2D(...arguments)}catch(B){Ye("WebGLState:",B)}}function ye(){try{i.texStorage3D(...arguments)}catch(B){Ye("WebGLState:",B)}}function J(){try{i.texImage2D(...arguments)}catch(B){Ye("WebGLState:",B)}}function se(){try{i.texImage3D(...arguments)}catch(B){Ye("WebGLState:",B)}}function Se(B){return d[B]!==void 0?d[B]:i.getParameter(B)}function qe(B,ce){d[B]!==ce&&(i.pixelStorei(B,ce),d[B]=ce)}function Ie(B){dt.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),dt.copy(B))}function Ae(B){at.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),at.copy(B))}function Ze(B,ce){let Y=c.get(ce);Y===void 0&&(Y=new WeakMap,c.set(ce,Y));let me=Y.get(B);me===void 0&&(me=i.getUniformBlockIndex(ce,B.name),Y.set(B,me))}function et(B,ce){const me=c.get(ce).get(B);l.get(ce)!==me&&(i.uniformBlockBinding(ce,me,B.__bindingPointIndex),l.set(ce,me))}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},ie=null,Q={},h={},f=new WeakMap,p=[],v=null,g=!1,m=null,_=null,b=null,y=null,w=null,M=null,A=null,x=new Fe(0,0,0),T=0,I=!1,D=null,k=null,L=null,V=null,O=null,dt.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:de,disable:He,bindFramebuffer:je,drawBuffers:te,useProgram:we,setBlending:he,setMaterial:ue,setFlipSided:be,setCullFace:Me,setLineWidth:Qe,setPolygonOffset:j,setScissorTest:ne,activeTexture:pe,bindTexture:U,unbindTexture:Ge,compressedTexImage2D:We,compressedTexImage3D:R,texImage2D:J,texImage3D:se,pixelStorei:qe,getParameter:Se,updateUBOMapping:Ze,uniformBlockBinding:et,texStorage2D:fe,texStorage3D:ye,texSubImage2D:S,texSubImage3D:G,compressedTexSubImage2D:X,compressedTexSubImage3D:Z,scissor:Ie,viewport:Ae,reset:ut}}function MA(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,S){return p?new OffscreenCanvas(R,S):Za("canvas")}function g(R,S,G){let X=1;const Z=We(R);if((Z.width>G||Z.height>G)&&(X=G/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const fe=Math.floor(X*Z.width),ye=Math.floor(X*Z.height);h===void 0&&(h=v(fe,ye));const J=S?v(fe,ye):h;return J.width=fe,J.height=ye,J.getContext("2d").drawImage(R,0,0,fe,ye),Ee("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+fe+"x"+ye+")."),J}else return"data"in R&&Ee("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function m(R){return R.generateMipmaps}function _(R){i.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,S,G,X,Z,fe=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ye;X&&(ye=e.get("EXT_texture_norm16"),ye||Ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=S;if(S===i.RED&&(G===i.FLOAT&&(J=i.R32F),G===i.HALF_FLOAT&&(J=i.R16F),G===i.UNSIGNED_BYTE&&(J=i.R8),G===i.UNSIGNED_SHORT&&ye&&(J=ye.R16_EXT),G===i.SHORT&&ye&&(J=ye.R16_SNORM_EXT)),S===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.R8UI),G===i.UNSIGNED_SHORT&&(J=i.R16UI),G===i.UNSIGNED_INT&&(J=i.R32UI),G===i.BYTE&&(J=i.R8I),G===i.SHORT&&(J=i.R16I),G===i.INT&&(J=i.R32I)),S===i.RG&&(G===i.FLOAT&&(J=i.RG32F),G===i.HALF_FLOAT&&(J=i.RG16F),G===i.UNSIGNED_BYTE&&(J=i.RG8),G===i.UNSIGNED_SHORT&&ye&&(J=ye.RG16_EXT),G===i.SHORT&&ye&&(J=ye.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.RG8UI),G===i.UNSIGNED_SHORT&&(J=i.RG16UI),G===i.UNSIGNED_INT&&(J=i.RG32UI),G===i.BYTE&&(J=i.RG8I),G===i.SHORT&&(J=i.RG16I),G===i.INT&&(J=i.RG32I)),S===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.RGB8UI),G===i.UNSIGNED_SHORT&&(J=i.RGB16UI),G===i.UNSIGNED_INT&&(J=i.RGB32UI),G===i.BYTE&&(J=i.RGB8I),G===i.SHORT&&(J=i.RGB16I),G===i.INT&&(J=i.RGB32I)),S===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),G===i.UNSIGNED_INT&&(J=i.RGBA32UI),G===i.BYTE&&(J=i.RGBA8I),G===i.SHORT&&(J=i.RGBA16I),G===i.INT&&(J=i.RGBA32I)),S===i.RGB&&(G===i.UNSIGNED_SHORT&&ye&&(J=ye.RGB16_EXT),G===i.SHORT&&ye&&(J=ye.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),S===i.RGBA){const se=fe?$a:gt.getTransfer(Z);G===i.FLOAT&&(J=i.RGBA32F),G===i.HALF_FLOAT&&(J=i.RGBA16F),G===i.UNSIGNED_BYTE&&(J=se===Rt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&ye&&(J=ye.RGBA16_EXT),G===i.SHORT&&ye&&(J=ye.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function w(R,S){let G;return R?S===null||S===ri||S===Yr?G=i.DEPTH24_STENCIL8:S===Pn?G=i.DEPTH32F_STENCIL8:S===$r&&(G=i.DEPTH24_STENCIL8,Ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ri||S===Yr?G=i.DEPTH_COMPONENT24:S===Pn?G=i.DEPTH_COMPONENT32F:S===$r&&(G=i.DEPTH_COMPONENT16),G}function M(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Qt&&R.minFilter!==Vt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function A(R){const S=R.target;S.removeEventListener("dispose",A),T(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&d.delete(S)}function x(R){const S=R.target;S.removeEventListener("dispose",x),D(S)}function T(R){const S=n.get(R);if(S.__webglInit===void 0)return;const G=R.source,X=f.get(G);if(X){const Z=X[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&I(R),Object.keys(X).length===0&&f.delete(G)}n.remove(R)}function I(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const G=R.source,X=f.get(G);delete X[S.__cacheKey],a.memory.textures--}function D(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(S.__webglFramebuffer[X]))for(let Z=0;Z<S.__webglFramebuffer[X].length;Z++)i.deleteFramebuffer(S.__webglFramebuffer[X][Z]);else i.deleteFramebuffer(S.__webglFramebuffer[X]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[X])}else{if(Array.isArray(S.__webglFramebuffer))for(let X=0;X<S.__webglFramebuffer.length;X++)i.deleteFramebuffer(S.__webglFramebuffer[X]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let X=0;X<S.__webglColorRenderbuffer.length;X++)S.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[X]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=R.textures;for(let X=0,Z=G.length;X<Z;X++){const fe=n.get(G[X]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),a.memory.textures--),n.remove(G[X])}n.remove(R)}let k=0;function L(){k=0}function V(){return k}function O(R){k=R}function N(){const R=k;return R>=s.maxTextures&&Ee("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),k+=1,R}function F(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function z(R,S){const G=n.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){const X=R.image;if(X===null)Ee("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ee("WebGLRenderer: Texture marked for update but image is incomplete");else{He(G,R,S);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+S)}function W(R,S){const G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){He(G,R,S);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+S)}function ie(R,S){const G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){He(G,R,S);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+S)}function Q(R,S){const G=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&G.__version!==R.version){je(G,R,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+S)}const re={[za]:i.REPEAT,[zn]:i.CLAMP_TO_EDGE,[Va]:i.MIRRORED_REPEAT},Pe={[Qt]:i.NEAREST,[_d]:i.NEAREST_MIPMAP_NEAREST,[Fr]:i.NEAREST_MIPMAP_LINEAR,[Vt]:i.LINEAR,[Ra]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},dt={[Pg]:i.NEVER,[Og]:i.ALWAYS,[Dg]:i.LESS,[Vc]:i.LEQUAL,[Lg]:i.EQUAL,[Gc]:i.GEQUAL,[Ug]:i.GREATER,[Ng]:i.NOTEQUAL};function at(R,S){if(S.type===Pn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Vt||S.magFilter===Ra||S.magFilter===Fr||S.magFilter===Ai||S.minFilter===Vt||S.minFilter===Ra||S.minFilter===Fr||S.minFilter===Ai)&&Ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,re[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,re[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,re[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Pe[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Pe[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,dt[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Qt||S.minFilter!==Fr&&S.minFilter!==Ai||S.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ee(R,S){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",A));const X=S.source;let Z=f.get(X);Z===void 0&&(Z={},f.set(X,Z));const fe=F(S);if(fe!==R.__cacheKey){Z[fe]===void 0&&(Z[fe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),Z[fe].usedTimes++;const ye=Z[R.__cacheKey];ye!==void 0&&(Z[R.__cacheKey].usedTimes--,ye.usedTimes===0&&I(S)),R.__cacheKey=fe,R.__webglTexture=Z[fe].texture}return G}function _e(R,S,G){return Math.floor(Math.floor(R/G)/S)}function de(R,S,G,X){const fe=R.updateRanges;if(fe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,G,X,S.data);else{fe.sort((qe,Ie)=>qe.start-Ie.start);let ye=0;for(let qe=1;qe<fe.length;qe++){const Ie=fe[ye],Ae=fe[qe],Ze=Ie.start+Ie.count,et=_e(Ae.start,S.width,4),ut=_e(Ie.start,S.width,4);Ae.start<=Ze+1&&et===ut&&_e(Ae.start+Ae.count-1,S.width,4)===et?Ie.count=Math.max(Ie.count,Ae.start+Ae.count-Ie.start):(++ye,fe[ye]=Ae)}fe.length=ye+1;const J=t.getParameter(i.UNPACK_ROW_LENGTH),se=t.getParameter(i.UNPACK_SKIP_PIXELS),Se=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let qe=0,Ie=fe.length;qe<Ie;qe++){const Ae=fe[qe],Ze=Math.floor(Ae.start/4),et=Math.ceil(Ae.count/4),ut=Ze%S.width,B=Math.floor(Ze/S.width),ce=et,Y=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),t.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,ut,B,ce,Y,G,X,S.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,se),t.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function He(R,S,G){let X=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(X=i.TEXTURE_3D);const Z=ee(R,S),fe=S.source;t.bindTexture(X,R.__webglTexture,i.TEXTURE0+G);const ye=n.get(fe);if(fe.version!==ye.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const Y=gt.getPrimaries(gt.workingColorSpace),me=S.colorSpace===Wi?null:gt.getPrimaries(S.colorSpace),xe=S.colorSpace===Wi||Y===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let se=g(S.image,!1,s.maxTextureSize);se=Ge(S,se);const Se=r.convert(S.format,S.colorSpace),qe=r.convert(S.type);let Ie=y(S.internalFormat,Se,qe,S.normalized,S.colorSpace,S.isVideoTexture);at(X,S);let Ae;const Ze=S.mipmaps,et=S.isVideoTexture!==!0,ut=ye.__version===void 0||Z===!0,B=fe.dataReady,ce=M(S,se);if(S.isDepthTexture)Ie=w(S.format===fs,S.type),ut&&(et?t.texStorage2D(i.TEXTURE_2D,1,Ie,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Ie,se.width,se.height,0,Se,qe,null));else if(S.isDataTexture)if(Ze.length>0){et&&ut&&t.texStorage2D(i.TEXTURE_2D,ce,Ie,Ze[0].width,Ze[0].height);for(let Y=0,me=Ze.length;Y<me;Y++)Ae=Ze[Y],et?B&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,Ae.width,Ae.height,Se,qe,Ae.data):t.texImage2D(i.TEXTURE_2D,Y,Ie,Ae.width,Ae.height,0,Se,qe,Ae.data);S.generateMipmaps=!1}else et?(ut&&t.texStorage2D(i.TEXTURE_2D,ce,Ie,se.width,se.height),B&&de(S,se,Se,qe)):t.texImage2D(i.TEXTURE_2D,0,Ie,se.width,se.height,0,Se,qe,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){et&&ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,Ie,Ze[0].width,Ze[0].height,se.depth);for(let Y=0,me=Ze.length;Y<me;Y++)if(Ae=Ze[Y],S.format!==Dn)if(Se!==null)if(et){if(B)if(S.layerUpdates.size>0){const xe=Gu(Ae.width,Ae.height,S.format,S.type);for(const le of S.layerUpdates){const ke=Ae.data.subarray(le*xe/Ae.data.BYTES_PER_ELEMENT,(le+1)*xe/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,le,Ae.width,Ae.height,1,Se,ke)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Ae.width,Ae.height,se.depth,Se,Ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Ie,Ae.width,Ae.height,se.depth,0,Ae.data,0,0);else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Ae.width,Ae.height,se.depth,Se,qe,Ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,Ie,Ae.width,Ae.height,se.depth,0,Se,qe,Ae.data)}else{et&&ut&&t.texStorage2D(i.TEXTURE_2D,ce,Ie,Ze[0].width,Ze[0].height);for(let Y=0,me=Ze.length;Y<me;Y++)Ae=Ze[Y],S.format!==Dn?Se!==null?et?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,Ae.width,Ae.height,Se,Ae.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,Ie,Ae.width,Ae.height,0,Ae.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?B&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,Ae.width,Ae.height,Se,qe,Ae.data):t.texImage2D(i.TEXTURE_2D,Y,Ie,Ae.width,Ae.height,0,Se,qe,Ae.data)}else if(S.isDataArrayTexture)if(et){if(ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,Ie,se.width,se.height,se.depth),B)if(S.layerUpdates.size>0){const Y=Gu(se.width,se.height,S.format,S.type);for(const me of S.layerUpdates){const xe=se.data.subarray(me*Y/se.data.BYTES_PER_ELEMENT,(me+1)*Y/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,se.width,se.height,1,Se,qe,xe)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Se,qe,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,se.width,se.height,se.depth,0,Se,qe,se.data);else if(S.isData3DTexture)et?(ut&&t.texStorage3D(i.TEXTURE_3D,ce,Ie,se.width,se.height,se.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Se,qe,se.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,se.width,se.height,se.depth,0,Se,qe,se.data);else if(S.isFramebufferTexture){if(ut)if(et)t.texStorage2D(i.TEXTURE_2D,ce,Ie,se.width,se.height);else{let Y=se.width,me=se.height;for(let xe=0;xe<ce;xe++)t.texImage2D(i.TEXTURE_2D,xe,Ie,Y,me,0,Se,qe,null),Y>>=1,me>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){const Y=i.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),se.parentNode!==Y){Y.appendChild(se),d.add(S),Y.onpaint=me=>{const xe=me.changedElements;for(const le of d)xe.includes(le.image)&&(le.needsUpdate=!0)},Y.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,se);else{const xe=i.RGBA,le=i.RGBA,ke=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xe,le,ke,se)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ze.length>0){if(et&&ut){const Y=We(Ze[0]);t.texStorage2D(i.TEXTURE_2D,ce,Ie,Y.width,Y.height)}for(let Y=0,me=Ze.length;Y<me;Y++)Ae=Ze[Y],et?B&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,Se,qe,Ae):t.texImage2D(i.TEXTURE_2D,Y,Ie,Se,qe,Ae);S.generateMipmaps=!1}else if(et){if(ut){const Y=We(se);t.texStorage2D(i.TEXTURE_2D,ce,Ie,Y.width,Y.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,qe,se)}else t.texImage2D(i.TEXTURE_2D,0,Ie,Se,qe,se);m(S)&&_(X),ye.__version=fe.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function je(R,S,G){if(S.image.length!==6)return;const X=ee(R,S),Z=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);const fe=n.get(Z);if(Z.version!==fe.__version||X===!0){t.activeTexture(i.TEXTURE0+G);const ye=gt.getPrimaries(gt.workingColorSpace),J=S.colorSpace===Wi?null:gt.getPrimaries(S.colorSpace),se=S.colorSpace===Wi||ye===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const Se=S.isCompressedTexture||S.image[0].isCompressedTexture,qe=S.image[0]&&S.image[0].isDataTexture,Ie=[];for(let le=0;le<6;le++)!Se&&!qe?Ie[le]=g(S.image[le],!0,s.maxCubemapSize):Ie[le]=qe?S.image[le].image:S.image[le],Ie[le]=Ge(S,Ie[le]);const Ae=Ie[0],Ze=r.convert(S.format,S.colorSpace),et=r.convert(S.type),ut=y(S.internalFormat,Ze,et,S.normalized,S.colorSpace),B=S.isVideoTexture!==!0,ce=fe.__version===void 0||X===!0,Y=Z.dataReady;let me=M(S,Ae);at(i.TEXTURE_CUBE_MAP,S);let xe;if(Se){B&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,ut,Ae.width,Ae.height);for(let le=0;le<6;le++){xe=Ie[le].mipmaps;for(let ke=0;ke<xe.length;ke++){const Oe=xe[ke];S.format!==Dn?Ze!==null?B?Y&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke,0,0,Oe.width,Oe.height,Ze,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke,ut,Oe.width,Oe.height,0,Oe.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke,0,0,Oe.width,Oe.height,Ze,et,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke,ut,Oe.width,Oe.height,0,Ze,et,Oe.data)}}}else{if(xe=S.mipmaps,B&&ce){xe.length>0&&me++;const le=We(Ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,ut,le.width,le.height)}for(let le=0;le<6;le++)if(qe){B?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ie[le].width,Ie[le].height,Ze,et,Ie[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ut,Ie[le].width,Ie[le].height,0,Ze,et,Ie[le].data);for(let ke=0;ke<xe.length;ke++){const Gt=xe[ke].image[le].image;B?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke+1,0,0,Gt.width,Gt.height,Ze,et,Gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke+1,ut,Gt.width,Gt.height,0,Ze,et,Gt.data)}}else{B?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ze,et,Ie[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ut,Ze,et,Ie[le]);for(let ke=0;ke<xe.length;ke++){const Oe=xe[ke];B?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke+1,0,0,Ze,et,Oe.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke+1,ut,Ze,et,Oe.image[le])}}}m(S)&&_(i.TEXTURE_CUBE_MAP),fe.__version=Z.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function te(R,S,G,X,Z,fe){const ye=r.convert(G.format,G.colorSpace),J=r.convert(G.type),se=y(G.internalFormat,ye,J,G.normalized,G.colorSpace),Se=n.get(S),qe=n.get(G);if(qe.__renderTarget=S,!Se.__hasExternalTextures){const Ie=Math.max(1,S.width>>fe),Ae=Math.max(1,S.height>>fe);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,fe,se,Ie,Ae,S.depth,0,ye,J,null):t.texImage2D(Z,fe,se,Ie,Ae,0,ye,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),pe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,Z,qe.__webglTexture,0,ne(S)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,Z,qe.__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(R,S,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const X=S.depthTexture,Z=X&&X.isDepthTexture?X.type:null,fe=w(S.stencilBuffer,Z),ye=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne(S),fe,S.width,S.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne(S),fe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,fe,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,R)}else{const X=S.textures;for(let Z=0;Z<X.length;Z++){const fe=X[Z],ye=r.convert(fe.format,fe.colorSpace),J=r.convert(fe.type),se=y(fe.internalFormat,ye,J,fe.normalized,fe.colorSpace);pe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne(S),se,S.width,S.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne(S),se,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,se,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(R,S,G){const X=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=n.get(S.depthTexture);if(Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),at(i.TEXTURE_CUBE_MAP,S.depthTexture);const Se=r.convert(S.depthTexture.format),qe=r.convert(S.depthTexture.type);let Ie;S.depthTexture.format===Di?Ie=i.DEPTH_COMPONENT24:S.depthTexture.format===fs&&(Ie=i.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Ie,S.width,S.height,0,Se,qe,null)}}else z(S.depthTexture,0);const fe=Z.__webglTexture,ye=ne(S),J=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,se=S.depthTexture.format===fs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Di)pe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,J,fe,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,se,J,fe,0);else if(S.depthTexture.format===fs)pe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,J,fe,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,se,J,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ae(R){const S=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const X=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),X){const Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=X}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let X=0;X<6;X++)Le(S.__webglFramebuffer[X],R,X);else{const X=R.texture.mipmaps;X&&X.length>0?Le(S.__webglFramebuffer[0],R,0):Le(S.__webglFramebuffer,R,0)}else if(G){S.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[X]),S.__webglDepthbuffer[X]===void 0)S.__webglDepthbuffer[X]=i.createRenderbuffer(),we(S.__webglDepthbuffer[X],R,!1);else{const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=S.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,fe)}}else{const X=R.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),we(S.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,fe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(R,S,G){const X=n.get(R);S!==void 0&&te(X.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&ae(R)}function ue(R){const S=R.texture,G=n.get(R),X=n.get(S);R.addEventListener("dispose",x);const Z=R.textures,fe=R.isWebGLCubeRenderTarget===!0,ye=Z.length>1;if(ye||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=S.version,a.memory.textures++),fe){G.__webglFramebuffer=[];for(let J=0;J<6;J++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[J]=[];for(let se=0;se<S.mipmaps.length;se++)G.__webglFramebuffer[J][se]=i.createFramebuffer()}else G.__webglFramebuffer[J]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let J=0;J<S.mipmaps.length;J++)G.__webglFramebuffer[J]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(ye)for(let J=0,se=Z.length;J<se;J++){const Se=n.get(Z[J]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&pe(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){const se=Z[J];G.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[J]);const Se=r.convert(se.format,se.colorSpace),qe=r.convert(se.type),Ie=y(se.internalFormat,Se,qe,se.normalized,se.colorSpace,R.isXRRenderTarget===!0),Ae=ne(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,Ie,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,G.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),we(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),at(i.TEXTURE_CUBE_MAP,S);for(let J=0;J<6;J++)if(S.mipmaps&&S.mipmaps.length>0)for(let se=0;se<S.mipmaps.length;se++)te(G.__webglFramebuffer[J][se],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,se);else te(G.__webglFramebuffer[J],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);m(S)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let J=0,se=Z.length;J<se;J++){const Se=Z[J],qe=n.get(Se);let Ie=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ie=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ie,qe.__webglTexture),at(Ie,Se),te(G.__webglFramebuffer,R,Se,i.COLOR_ATTACHMENT0+J,Ie,0),m(Se)&&_(Ie)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(J=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,X.__webglTexture),at(J,S),S.mipmaps&&S.mipmaps.length>0)for(let se=0;se<S.mipmaps.length;se++)te(G.__webglFramebuffer[se],R,S,i.COLOR_ATTACHMENT0,J,se);else te(G.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,J,0);m(S)&&_(J),t.unbindTexture()}R.depthBuffer&&ae(R)}function be(R){const S=R.textures;for(let G=0,X=S.length;G<X;G++){const Z=S[G];if(m(Z)){const fe=b(R),ye=n.get(Z).__webglTexture;t.bindTexture(fe,ye),_(fe),t.unbindTexture()}}}const Me=[],Qe=[];function j(R){if(R.samples>0){if(pe(R)===!1){const S=R.textures,G=R.width,X=R.height;let Z=i.COLOR_BUFFER_BIT;const fe=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(R),J=S.length>1;if(J)for(let Se=0;Se<S.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const se=R.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Se=0;Se<S.length;Se++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Se]);const qe=n.get(S[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qe,0)}i.blitFramebuffer(0,0,G,X,0,0,G,X,Z,i.NEAREST),l===!0&&(Me.length=0,Qe.length=0,Me.push(i.COLOR_ATTACHMENT0+Se),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Me.push(fe),Qe.push(fe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Qe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let Se=0;Se<S.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Se]);const qe=n.get(S[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ne(R){return Math.min(s.maxSamples,R.samples)}function pe(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function U(R){const S=a.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function Ge(R,S){const G=R.colorSpace,X=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==qa&&G!==Wi&&(gt.getTransfer(G)===Rt?(X!==Dn||Z!==kn)&&Ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",G)),S}function We(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.getTextureUnits=V,this.setTextureUnits=O,this.setTexture2D=z,this.setTexture2DArray=W,this.setTexture3D=ie,this.setTextureCube=Q,this.rebindTextures=he,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=te,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Z0(i,e){function t(n,s=Wi){let r;const a=gt.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===Nc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===yd)return i.BYTE;if(n===xd)return i.SHORT;if(n===$r)return i.UNSIGNED_SHORT;if(n===Uc)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===Pi)return i.HALF_FLOAT;if(n===Md)return i.ALPHA;if(n===wd)return i.RGB;if(n===Dn)return i.RGBA;if(n===Di)return i.DEPTH_COMPONENT;if(n===fs)return i.DEPTH_STENCIL;if(n===Fc)return i.RED;if(n===mo)return i.RED_INTEGER;if(n===ys)return i.RG;if(n===kc)return i.RG_INTEGER;if(n===Bc)return i.RGBA_INTEGER;if(n===Ia||n===Pa||n===Da||n===La)if(a===Rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kl||n===Bl||n===zl||n===Vl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gl||n===Hl||n===Wl||n===Xl||n===ql||n===Ga||n===$l)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gl||n===Hl)return a===Rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xl)return r.COMPRESSED_R11_EAC;if(n===ql)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ga)return r.COMPRESSED_RG11_EAC;if(n===$l)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Yl||n===Zl||n===Kl||n===Jl||n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ql)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ec)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tc)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nc)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ic)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sc)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rc)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ac)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oc)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lc||n===cc||n===hc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===lc)return a===Rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uc||n===dc||n===Ha||n===fc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===uc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ha)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const wA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TA=`
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

}`;class EA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ud(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ai({vertexShader:wA,fragmentShader:TA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new en(new na(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AA extends yi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null;const v=typeof XRWebGLBinding<"u",g=new EA,m={},_=t.getContextAttributes();let b=null,y=null;const w=[],M=[],A=new oe;let x=null;const T=new dn;T.viewport=new Pt;const I=new dn;I.viewport=new Pt;const D=[T,I],k=new N0;let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let _e=w[ee];return _e===void 0&&(_e=new bl,w[ee]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(ee){let _e=w[ee];return _e===void 0&&(_e=new bl,w[ee]=_e),_e.getGripSpace()},this.getHand=function(ee){let _e=w[ee];return _e===void 0&&(_e=new bl,w[ee]=_e),_e.getHandSpace()};function O(ee){const _e=M.indexOf(ee.inputSource);if(_e===-1)return;const de=w[_e];de!==void 0&&(de.update(ee.inputSource,ee.frame,c||a),de.dispatchEvent({type:ee.type,data:ee.inputSource}))}function N(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",F);for(let ee=0;ee<w.length;ee++){const _e=M[ee];_e!==null&&(M[ee]=null,w[ee].disconnect(_e))}L=null,V=null,g.reset();for(const ee in m)delete m[ee];e.setRenderTarget(b),f=null,h=null,d=null,s=null,y=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&Ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&Ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",N),s.addEventListener("inputsourceschange",F),_.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,He=null,je=null;_.depth&&(je=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=_.stencil?fs:Di,He=_.stencil?Yr:ri);const te={colorFormat:t.RGBA8,depthFormat:je,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(te),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Yn(h.textureWidth,h.textureHeight,{format:Dn,type:kn,depthTexture:new nr(h.textureWidth,h.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const de={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Yn(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),at.setContext(s),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function F(ee){for(let _e=0;_e<ee.removed.length;_e++){const de=ee.removed[_e],He=M.indexOf(de);He>=0&&(M[He]=null,w[He].disconnect(de))}for(let _e=0;_e<ee.added.length;_e++){const de=ee.added[_e];let He=M.indexOf(de);if(He===-1){for(let te=0;te<w.length;te++)if(te>=M.length){M.push(de),He=te;break}else if(M[te]===null){M[te]=de,He=te;break}if(He===-1)break}const je=w[He];je&&je.connect(de)}}const z=new P,W=new P;function ie(ee,_e,de){z.setFromMatrixPosition(_e.matrixWorld),W.setFromMatrixPosition(de.matrixWorld);const He=z.distanceTo(W),je=_e.projectionMatrix.elements,te=de.projectionMatrix.elements,we=je[14]/(je[10]-1),Le=je[14]/(je[10]+1),ae=(je[9]+1)/je[5],he=(je[9]-1)/je[5],ue=(je[8]-1)/je[0],be=(te[8]+1)/te[0],Me=we*ue,Qe=we*be,j=He/(-ue+be),ne=j*-ue;if(_e.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(ne),ee.translateZ(j),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),je[10]===-1)ee.projectionMatrix.copy(_e.projectionMatrix),ee.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const pe=we+j,U=Le+j,Ge=Me-ne,We=Qe+(He-ne),R=ae*Le/U*pe,S=he*Le/U*pe;ee.projectionMatrix.makePerspective(Ge,We,R,S,pe,U),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function Q(ee,_e){_e===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(_e.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let _e=ee.near,de=ee.far;g.texture!==null&&(g.depthNear>0&&(_e=g.depthNear),g.depthFar>0&&(de=g.depthFar)),k.near=I.near=T.near=_e,k.far=I.far=T.far=de,(L!==k.near||V!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),L=k.near,V=k.far),k.layers.mask=ee.layers.mask|6,T.layers.mask=k.layers.mask&-5,I.layers.mask=k.layers.mask&-3;const He=ee.parent,je=k.cameras;Q(k,He);for(let te=0;te<je.length;te++)Q(je[te],He);je.length===2?ie(k,T,I):k.projectionMatrix.copy(T.projectionMatrix),re(ee,k,He)};function re(ee,_e,de){de===null?ee.matrix.copy(_e.matrixWorld):(ee.matrix.copy(de.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(_e.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(_e.projectionMatrix),ee.projectionMatrixInverse.copy(_e.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Zr*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ee)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(ee){return m[ee]};let Pe=null;function dt(ee,_e){if(u=_e.getViewerPose(c||a),p=_e,u!==null){const de=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let He=!1;de.length!==k.cameras.length&&(k.cameras.length=0,He=!0);for(let Le=0;Le<de.length;Le++){const ae=de[Le];let he=null;if(f!==null)he=f.getViewport(ae);else{const be=d.getViewSubImage(h,ae);he=be.viewport,Le===0&&(e.setRenderTargetTextures(y,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(y))}let ue=D[Le];ue===void 0&&(ue=new dn,ue.layers.enable(Le),ue.viewport=new Pt,D[Le]=ue),ue.matrix.fromArray(ae.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(ae.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(he.x,he.y,he.width,he.height),Le===0&&(k.matrix.copy(ue.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),He===!0&&k.cameras.push(ue)}const je=s.enabledFeatures;if(je&&je.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const Le=d.getDepthInformation(de[0]);Le&&Le.isValid&&Le.texture&&g.init(Le,s.renderState)}if(je&&je.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let Le=0;Le<de.length;Le++){const ae=de[Le].camera;if(ae){let he=m[ae];he||(he=new Ud,m[ae]=he);const ue=d.getCameraImage(ae);he.sourceTexture=ue}}}}for(let de=0;de<w.length;de++){const He=M[de],je=w[de];He!==null&&je!==void 0&&je.update(He,_e,c||a)}Pe&&Pe(ee,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),p=null}const at=new H0;at.setAnimationLoop(dt),this.setAnimationLoop=function(ee){Pe=ee},this.dispose=function(){}}}const CA=new nt,K0=new ct;K0.set(-1,0,0,0,1,0,0,0,1);function RA(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,u0(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,b,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,_,b):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ln&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ln&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const _=e.get(m),b=_.envMap,y=_.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(CA.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(K0),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ln&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function IA(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){const M=w.program;n.uniformBlockBinding(y,M)}function c(y,w){let M=s[y.id];M===void 0&&(g(y),M=u(y),s[y.id]=M,y.addEventListener("dispose",_));const A=w.program;n.updateUBOMapping(y,A);const x=e.render.frame;r[y.id]!==x&&(h(y),r[y.id]=x)}function u(y){const w=d();y.__bindingPointIndex=w;const M=i.createBuffer(),A=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,A,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,M),M}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const w=s[y.id],M=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let x=0,T=M.length;x<T;x++){const I=M[x];if(Array.isArray(I))for(let D=0,k=I.length;D<k;D++)f(I[D],x,D,A);else f(I,x,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,w,M,A){if(v(y,w,M,A)===!0){const x=y.__offset,T=y.value;if(Array.isArray(T)){let I=0;for(let D=0;D<T.length;D++){const k=T[D],L=m(k);p(k,y.__data,I),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(I+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function p(y,w,M){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,M)}function v(y,w,M,A){const x=y.value,T=w+"_"+M;if(A[T]===void 0)return typeof x=="number"||typeof x=="boolean"?A[T]=x:ArrayBuffer.isView(x)?A[T]=x.slice():A[T]=x.clone(),!0;{const I=A[T];if(typeof x=="number"||typeof x=="boolean"){if(I!==x)return A[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(I.equals(x)===!1)return I.copy(x),!0}}return!1}function g(y){const w=y.uniforms;let M=0;const A=16;for(let T=0,I=w.length;T<I;T++){const D=Array.isArray(w[T])?w[T]:[w[T]];for(let k=0,L=D.length;k<L;k++){const V=D[k],O=Array.isArray(V.value)?V.value:[V.value];for(let N=0,F=O.length;N<F;N++){const z=O[N],W=m(z),ie=M%A,Q=ie%W.boundary,re=ie+Q;M+=Q,re!==0&&A-re<W.storage&&(M+=A-re),V.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=W.storage}}}const x=M%A;return x>0&&(M+=A-x),y.__size=M,y.__cache={},this}function m(y){const w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?Ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):Ee("WebGLRenderer: Unsupported uniform value type.",y),w}function _(y){const w=y.target;w.removeEventListener("dispose",_);const M=a.indexOf(w.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function b(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:b}}const PA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ti=null;function DA(){return Ti===null&&(Ti=new ni(PA,16,16,ys,Pi),Ti.name="DFG_LUT",Ti.minFilter=Vt,Ti.magFilter=Vt,Ti.wrapS=zn,Ti.wrapT=zn,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}class J0{constructor(e={}){const{canvas:t=kg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=kn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const v=f,g=new Set([Bc,kc,mo]),m=new Set([kn,ri,$r,Yr,Nc,Oc]),_=new Uint32Array(4),b=new Int32Array(4),y=new P;let w=null,M=null;const A=[],x=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let D=!1,k=null,L=null,V=null,O=null;this._outputColorSpace=Rn;let N=0,F=0,z=null,W=-1,ie=null;const Q=new Pt,re=new Pt;let Pe=null;const dt=new Fe(0);let at=0,ee=t.width,_e=t.height,de=1,He=null,je=null;const te=new Pt(0,0,ee,_e),we=new Pt(0,0,ee,_e);let Le=!1;const ae=new tr;let he=!1,ue=!1;const be=new nt,Me=new P,Qe=new Pt,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function pe(){return z===null?de:1}let U=n;function Ge(E,H){return t.getContext(E,H)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pc}`),t.addEventListener("webglcontextlost",Gt,!1),t.addEventListener("webglcontextrestored",Ft,!1),t.addEventListener("webglcontextcreationerror",bi,!1),U===null){const H="webgl2";if(U=Ge(H,E),U===null)throw Ge(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw Ye("WebGLRenderer: "+E.message),E}let We,R,S,G,X,Z,fe,ye,J,se,Se,qe,Ie,Ae,Ze,et,ut,B,ce,Y,me,xe,le;function ke(){We=new LT(U),We.init(),me=new Z0(U,We),R=new TT(U,We,e,me),S=new SA(U,We),R.reversedDepthBuffer&&h&&S.buffers.depth.setReversed(!0),L=U.createFramebuffer(),V=U.createFramebuffer(),O=U.createFramebuffer(),G=new OT(U),X=new lA,Z=new MA(U,We,S,X,R,me,G),fe=new DT(I),ye=new zM(U),xe=new MT(U,ye),J=new UT(U,ye,G,xe),se=new kT(U,J,ye,xe,G),B=new FT(U,R,Z),Ze=new ET(X),Se=new oA(I,fe,We,R,xe,Ze),qe=new RA(I,X),Ie=new hA,Ae=new gA(We),ut=new ST(I,fe,S,se,p,l),et=new bA(I,se,R),le=new IA(U,G,R,S),ce=new wT(U,We,G),Y=new NT(U,We,G),G.programs=Se.programs,I.capabilities=R,I.extensions=We,I.properties=X,I.renderLists=Ie,I.shadowMap=et,I.state=S,I.info=G}ke(),v!==kn&&(T=new zT(v,t.width,t.height,o,s,r));const Oe=new AA(I,U);this.xr=Oe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=We.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=We.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(E){E!==void 0&&(de=E,this.setSize(ee,_e,!1))},this.getSize=function(E){return E.set(ee,_e)},this.setSize=function(E,H,K=!0){if(Oe.isPresenting){Ee("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=E,_e=H,t.width=Math.floor(E*de),t.height=Math.floor(H*de),K===!0&&(t.style.width=E+"px",t.style.height=H+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(ee*de,_e*de).floor()},this.setDrawingBufferSize=function(E,H,K){ee=E,_e=H,de=K,t.width=Math.floor(E*K),t.height=Math.floor(H*K),this.setViewport(0,0,E,H)},this.setEffects=function(E){if(v===kn){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let H=0;H<E.length;H++)if(E[H].isOutputPass===!0){Ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(Q)},this.getViewport=function(E){return E.copy(te)},this.setViewport=function(E,H,K,q){E.isVector4?te.set(E.x,E.y,E.z,E.w):te.set(E,H,K,q),S.viewport(Q.copy(te).multiplyScalar(de).round())},this.getScissor=function(E){return E.copy(we)},this.setScissor=function(E,H,K,q){E.isVector4?we.set(E.x,E.y,E.z,E.w):we.set(E,H,K,q),S.scissor(re.copy(we).multiplyScalar(de).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(E){S.setScissorTest(Le=E)},this.setOpaqueSort=function(E){He=E},this.setTransparentSort=function(E){je=E},this.getClearColor=function(E){return E.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(E=!0,H=!0,K=!0){let q=0;if(E){let $=!1;if(z!==null){const Ue=z.texture.format;$=g.has(Ue)}if($){const Ue=z.texture.type,Ve=m.has(Ue),De=ut.getClearColor(),$e=ut.getClearAlpha(),Ke=De.r,ft=De.g,mt=De.b;Ve?(_[0]=Ke,_[1]=ft,_[2]=mt,_[3]=$e,U.clearBufferuiv(U.COLOR,0,_)):(b[0]=Ke,b[1]=ft,b[2]=mt,b[3]=$e,U.clearBufferiv(U.COLOR,0,b))}else q|=U.COLOR_BUFFER_BIT}H&&(q|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&U.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),k=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Gt,!1),t.removeEventListener("webglcontextrestored",Ft,!1),t.removeEventListener("webglcontextcreationerror",bi,!1),ut.dispose(),Ie.dispose(),Ae.dispose(),X.dispose(),fe.dispose(),se.dispose(),xe.dispose(),le.dispose(),Se.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",_f),Oe.removeEventListener("sessionend",yf),As.stop()};function Gt(E){E.preventDefault(),Ka("WebGLRenderer: Context Lost."),D=!0}function Ft(){Ka("WebGLRenderer: Context Restored."),D=!1;const E=G.autoReset,H=et.enabled,K=et.autoUpdate,q=et.needsUpdate,$=et.type;ke(),G.autoReset=E,et.enabled=H,et.autoUpdate=K,et.needsUpdate=q,et.type=$}function bi(E){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Si(E){const H=E.target;H.removeEventListener("dispose",Si),vv(H)}function vv(E){_v(E),X.remove(E)}function _v(E){const H=X.get(E).programs;H!==void 0&&(H.forEach(function(K){Se.releaseProgram(K)}),E.isShaderMaterial&&Se.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,K,q,$,Ue){H===null&&(H=j);const Ve=$.isMesh&&$.matrixWorld.determinantAffine()<0,De=bv(E,H,K,q,$);S.setMaterial(q,Ve);let $e=K.index,Ke=1;if(q.wireframe===!0){if($e=J.getWireframeAttribute(K),$e===void 0)return;Ke=2}const ft=K.drawRange,mt=K.attributes.position;let Je=ft.start*Ke,Dt=(ft.start+ft.count)*Ke;Ue!==null&&(Je=Math.max(Je,Ue.start*Ke),Dt=Math.min(Dt,(Ue.start+Ue.count)*Ke)),$e!==null?(Je=Math.max(Je,0),Dt=Math.min(Dt,$e.count)):mt!=null&&(Je=Math.max(Je,0),Dt=Math.min(Dt,mt.count));const Zt=Dt-Je;if(Zt<0||Zt===1/0)return;xe.setup($,q,De,K,$e);let qt,Nt=ce;if($e!==null&&(qt=ye.get($e),Nt=Y,Nt.setIndex(qt)),$.isMesh)q.wireframe===!0?(S.setLineWidth(q.wireframeLinewidth*pe()),Nt.setMode(U.LINES)):Nt.setMode(U.TRIANGLES);else if($.isLine){let yn=q.linewidth;yn===void 0&&(yn=1),S.setLineWidth(yn*pe()),$.isLineSegments?Nt.setMode(U.LINES):$.isLineLoop?Nt.setMode(U.LINE_LOOP):Nt.setMode(U.LINE_STRIP)}else $.isPoints?Nt.setMode(U.POINTS):$.isSprite&&Nt.setMode(U.TRIANGLES);if($.isBatchedMesh)if(We.get("WEBGL_multi_draw"))Nt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const yn=$._multiDrawStarts,ze=$._multiDrawCounts,Gn=$._multiDrawCount,Tt=$e?ye.get($e).bytesPerElement:1,Zn=X.get(q).currentProgram.getUniforms();for(let Mi=0;Mi<Gn;Mi++)Zn.setValue(U,"_gl_DrawID",Mi),Nt.render(yn[Mi]/Tt,ze[Mi])}else if($.isInstancedMesh)Nt.renderInstances(Je,Zt,$.count);else if(K.isInstancedBufferGeometry){const yn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ze=Math.min(K.instanceCount,yn);Nt.renderInstances(Je,Zt,ze)}else Nt.render(Je,Zt)};function vf(E,H,K){E.transparent===!0&&E.side===Ei&&E.forceSinglePass===!1?(E.side=Ln,E.needsUpdate=!0,Mo(E,H,K),E.side=Yi,E.needsUpdate=!0,Mo(E,H,K),E.side=Ei):Mo(E,H,K)}this.compile=function(E,H,K=null){K===null&&(K=E),M=Ae.get(K),M.init(H),x.push(M),K.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(M.pushLight($),$.castShadow&&M.pushShadow($))}),E!==K&&E.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(M.pushLight($),$.castShadow&&M.pushShadow($))}),M.setupLights();const q=new Set;return E.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ue=$.material;if(Ue)if(Array.isArray(Ue))for(let Ve=0;Ve<Ue.length;Ve++){const De=Ue[Ve];vf(De,K,$),q.add(De)}else vf(Ue,K,$),q.add(Ue)}),M=x.pop(),q},this.compileAsync=function(E,H,K=null){const q=this.compile(E,H,K);return new Promise($=>{function Ue(){if(q.forEach(function(Ve){X.get(Ve).currentProgram.isReady()&&q.delete(Ve)}),q.size===0){$(E);return}setTimeout(Ue,10)}We.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Sh=null;function yv(E){Sh&&Sh(E)}function _f(){As.stop()}function yf(){As.start()}const As=new H0;As.setAnimationLoop(yv),typeof self<"u"&&As.setContext(self),this.setAnimationLoop=function(E){Sh=E,Oe.setAnimationLoop(E),E===null?As.stop():As.start()},Oe.addEventListener("sessionstart",_f),Oe.addEventListener("sessionend",yf),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;k!==null&&k.renderStart(E,H);const K=Oe.enabled===!0&&Oe.isPresenting===!0,q=T!==null&&(z===null||K)&&T.begin(I,z);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(H),H=Oe.getCamera()),E.isScene===!0&&E.onBeforeRender(I,E,H,z),M=Ae.get(E,x.length),M.init(H),M.state.textureUnits=Z.getTextureUnits(),x.push(M),be.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ae.setFromProjectionMatrix(be,Xn,H.reversedDepth),ue=this.localClippingEnabled,he=Ze.init(this.clippingPlanes,ue),w=Ie.get(E,A.length),w.init(),A.push(w),Oe.enabled===!0&&Oe.isPresenting===!0){const Ve=I.xr.getDepthSensingMesh();Ve!==null&&Mh(Ve,H,-1/0,I.sortObjects)}Mh(E,H,0,I.sortObjects),w.finish(),I.sortObjects===!0&&w.sort(He,je,H.reversedDepth),ne=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,ne&&ut.addToRenderList(w,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),he===!0&&Ze.beginShadows();const $=M.state.shadowsArray;if(et.render($,E,H),he===!0&&Ze.endShadows(),(q&&T.hasRenderPass())===!1){const Ve=w.opaque,De=w.transmissive;if(M.setupLights(),H.isArrayCamera){const $e=H.cameras;if(De.length>0)for(let Ke=0,ft=$e.length;Ke<ft;Ke++){const mt=$e[Ke];bf(Ve,De,E,mt)}ne&&ut.render(E);for(let Ke=0,ft=$e.length;Ke<ft;Ke++){const mt=$e[Ke];xf(w,E,mt,mt.viewport)}}else De.length>0&&bf(Ve,De,E,H),ne&&ut.render(E),xf(w,E,H)}z!==null&&F===0&&(Z.updateMultisampleRenderTarget(z),Z.updateRenderTargetMipmap(z)),q&&T.end(I),E.isScene===!0&&E.onAfterRender(I,E,H),xe.resetDefaultState(),W=-1,ie=null,x.pop(),x.length>0?(M=x[x.length-1],Z.setTextureUnits(M.state.textureUnits),he===!0&&Ze.setGlobalState(I.clippingPlanes,M.state.camera)):M=null,A.pop(),A.length>0?w=A[A.length-1]:w=null,k!==null&&k.renderEnd()};function Mh(E,H,K,q){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLightProbeGrid)M.pushLightProbeGrid(E);else if(E.isLight)M.pushLight(E),E.castShadow&&M.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ae.intersectsSprite(E)){q&&Qe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(be);const Ve=se.update(E),De=E.material;De.visible&&w.push(E,Ve,De,K,Qe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ae.intersectsObject(E))){const Ve=se.update(E),De=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Qe.copy(E.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Qe.copy(Ve.boundingSphere.center)),Qe.applyMatrix4(E.matrixWorld).applyMatrix4(be)),Array.isArray(De)){const $e=Ve.groups;for(let Ke=0,ft=$e.length;Ke<ft;Ke++){const mt=$e[Ke],Je=De[mt.materialIndex];Je&&Je.visible&&w.push(E,Ve,Je,K,Qe.z,mt)}}else De.visible&&w.push(E,Ve,De,K,Qe.z,null)}}const Ue=E.children;for(let Ve=0,De=Ue.length;Ve<De;Ve++)Mh(Ue[Ve],H,K,q)}function xf(E,H,K,q){const{opaque:$,transmissive:Ue,transparent:Ve}=E;M.setupLightsView(K),he===!0&&Ze.setGlobalState(I.clippingPlanes,K),q&&S.viewport(Q.copy(q)),$.length>0&&So($,H,K),Ue.length>0&&So(Ue,H,K),Ve.length>0&&So(Ve,H,K),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function bf(E,H,K,q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[q.id]===void 0){const Je=We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[q.id]=new Yn(1,1,{generateMipmaps:!0,type:Je?Pi:kn,minFilter:Ai,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace})}const Ue=M.state.transmissionRenderTarget[q.id],Ve=q.viewport||Q;Ue.setSize(Ve.z*I.transmissionResolutionScale,Ve.w*I.transmissionResolutionScale);const De=I.getRenderTarget(),$e=I.getActiveCubeFace(),Ke=I.getActiveMipmapLevel();I.setRenderTarget(Ue),I.getClearColor(dt),at=I.getClearAlpha(),at<1&&I.setClearColor(16777215,.5),I.clear(),ne&&ut.render(K);const ft=I.toneMapping;I.toneMapping=gi;const mt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),M.setupLightsView(q),he===!0&&Ze.setGlobalState(I.clippingPlanes,q),So(E,K,q),Z.updateMultisampleRenderTarget(Ue),Z.updateRenderTargetMipmap(Ue),We.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Dt=0,Zt=H.length;Dt<Zt;Dt++){const qt=H[Dt],{object:Nt,geometry:yn,material:ze,group:Gn}=qt;if(ze.side===Ei&&Nt.layers.test(q.layers)){const Tt=ze.side;ze.side=Ln,ze.needsUpdate=!0,Sf(Nt,K,q,yn,ze,Gn),ze.side=Tt,ze.needsUpdate=!0,Je=!0}}Je===!0&&(Z.updateMultisampleRenderTarget(Ue),Z.updateRenderTargetMipmap(Ue))}I.setRenderTarget(De,$e,Ke),I.setClearColor(dt,at),mt!==void 0&&(q.viewport=mt),I.toneMapping=ft}function So(E,H,K){const q=H.isScene===!0?H.overrideMaterial:null;for(let $=0,Ue=E.length;$<Ue;$++){const Ve=E[$],{object:De,geometry:$e,group:Ke}=Ve;let ft=Ve.material;ft.allowOverride===!0&&q!==null&&(ft=q),De.layers.test(K.layers)&&Sf(De,H,K,$e,ft,Ke)}}function Sf(E,H,K,q,$,Ue){E.onBeforeRender(I,H,K,q,$,Ue),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(I,H,K,q,E,Ue),$.transparent===!0&&$.side===Ei&&$.forceSinglePass===!1?($.side=Ln,$.needsUpdate=!0,I.renderBufferDirect(K,H,q,$,E,Ue),$.side=Yi,$.needsUpdate=!0,I.renderBufferDirect(K,H,q,$,E,Ue),$.side=Ei):I.renderBufferDirect(K,H,q,$,E,Ue),E.onAfterRender(I,H,K,q,$,Ue)}function Mo(E,H,K){H.isScene!==!0&&(H=j);const q=X.get(E),$=M.state.lights,Ue=M.state.shadowsArray,Ve=$.state.version,De=Se.getParameters(E,$.state,Ue,H,K,M.state.lightProbeGridArray),$e=Se.getProgramCacheKey(De);let Ke=q.programs;q.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?H.environment:null,q.fog=H.fog;const ft=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;q.envMap=fe.get(E.envMap||q.environment,ft),q.envMapRotation=q.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,Ke===void 0&&(E.addEventListener("dispose",Si),Ke=new Map,q.programs=Ke);let mt=Ke.get($e);if(mt!==void 0){if(q.currentProgram===mt&&q.lightsStateVersion===Ve)return wf(E,De),mt}else De.uniforms=Se.getUniforms(E),k!==null&&E.isNodeMaterial&&k.build(E,K,De),E.onBeforeCompile(De,I),mt=Se.acquireProgram(De,$e),Ke.set($e,mt),q.uniforms=De.uniforms;const Je=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Je.clippingPlanes=Ze.uniform),wf(E,De),q.needsLights=Mv(E),q.lightsStateVersion=Ve,q.needsLights&&(Je.ambientLightColor.value=$.state.ambient,Je.lightProbe.value=$.state.probe,Je.directionalLights.value=$.state.directional,Je.directionalLightShadows.value=$.state.directionalShadow,Je.spotLights.value=$.state.spot,Je.spotLightShadows.value=$.state.spotShadow,Je.rectAreaLights.value=$.state.rectArea,Je.ltc_1.value=$.state.rectAreaLTC1,Je.ltc_2.value=$.state.rectAreaLTC2,Je.pointLights.value=$.state.point,Je.pointLightShadows.value=$.state.pointShadow,Je.hemisphereLights.value=$.state.hemi,Je.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Je.spotLightMatrix.value=$.state.spotLightMatrix,Je.spotLightMap.value=$.state.spotLightMap,Je.pointShadowMatrix.value=$.state.pointShadowMatrix),q.lightProbeGrid=M.state.lightProbeGridArray.length>0,q.currentProgram=mt,q.uniformsList=null,mt}function Mf(E){if(E.uniformsList===null){const H=E.currentProgram.getUniforms();E.uniformsList=Sl.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function wf(E,H){const K=X.get(E);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function xv(E,H){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(H.matrixWorld);for(let K=0,q=E.length;K<q;K++){const $=E[K];if($.texture!==null&&$.boundingBox.containsPoint(y))return $}return null}function bv(E,H,K,q,$){H.isScene!==!0&&(H=j),Z.resetTextureUnits();const Ue=H.fog,Ve=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?H.environment:null,De=z===null?I.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:gt.workingColorSpace,$e=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Ke=fe.get(q.envMap||Ve,$e),ft=q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,mt=!!K.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Je=!!K.morphAttributes.position,Dt=!!K.morphAttributes.normal,Zt=!!K.morphAttributes.color;let qt=gi;q.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(qt=I.toneMapping);const Nt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,yn=Nt!==void 0?Nt.length:0,ze=X.get(q),Gn=M.state.lights;if(he===!0&&(ue===!0||E!==ie)){const kt=E===ie&&q.id===W;Ze.setState(q,E,kt)}let Tt=!1;q.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Gn.state.version||ze.outputColorSpace!==De||$.isBatchedMesh&&ze.batching===!1||!$.isBatchedMesh&&ze.batching===!0||$.isBatchedMesh&&ze.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&ze.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&ze.instancing===!1||!$.isInstancedMesh&&ze.instancing===!0||$.isSkinnedMesh&&ze.skinning===!1||!$.isSkinnedMesh&&ze.skinning===!0||$.isInstancedMesh&&ze.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ze.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&ze.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&ze.instancingMorph===!1&&$.morphTexture!==null||ze.envMap!==Ke||q.fog===!0&&ze.fog!==Ue||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ze.numPlanes||ze.numIntersection!==Ze.numIntersection)||ze.vertexAlphas!==ft||ze.vertexTangents!==mt||ze.morphTargets!==Je||ze.morphNormals!==Dt||ze.morphColors!==Zt||ze.toneMapping!==qt||ze.morphTargetsCount!==yn||!!ze.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Tt=!0):(Tt=!0,ze.__version=q.version);let Zn=ze.currentProgram;Tt===!0&&(Zn=Mo(q,H,$),k&&q.isNodeMaterial&&k.onUpdateProgram(q,Zn,ze));let Mi=!1,es=!1,hr=!1;const Ot=Zn.getUniforms(),Kt=ze.uniforms;if(S.useProgram(Zn.program)&&(Mi=!0,es=!0,hr=!0),q.id!==W&&(W=q.id,es=!0),ze.needsLights){const kt=xv(M.state.lightProbeGridArray,$);ze.lightProbeGrid!==kt&&(ze.lightProbeGrid=kt,es=!0)}if(Mi||ie!==E){S.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Ot.setValue(U,"projectionMatrix",E.projectionMatrix),Ot.setValue(U,"viewMatrix",E.matrixWorldInverse);const ns=Ot.map.cameraPosition;ns!==void 0&&ns.setValue(U,Me.setFromMatrixPosition(E.matrixWorld)),R.logarithmicDepthBuffer&&Ot.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ot.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),ie!==E&&(ie=E,es=!0,hr=!0)}if(ze.needsLights&&(Gn.state.directionalShadowMap.length>0&&Ot.setValue(U,"directionalShadowMap",Gn.state.directionalShadowMap,Z),Gn.state.spotShadowMap.length>0&&Ot.setValue(U,"spotShadowMap",Gn.state.spotShadowMap,Z),Gn.state.pointShadowMap.length>0&&Ot.setValue(U,"pointShadowMap",Gn.state.pointShadowMap,Z)),$.isSkinnedMesh){Ot.setOptional(U,$,"bindMatrix"),Ot.setOptional(U,$,"bindMatrixInverse");const kt=$.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),Ot.setValue(U,"boneTexture",kt.boneTexture,Z))}$.isBatchedMesh&&(Ot.setOptional(U,$,"batchingTexture"),Ot.setValue(U,"batchingTexture",$._matricesTexture,Z),Ot.setOptional(U,$,"batchingIdTexture"),Ot.setValue(U,"batchingIdTexture",$._indirectTexture,Z),Ot.setOptional(U,$,"batchingColorTexture"),$._colorsTexture!==null&&Ot.setValue(U,"batchingColorTexture",$._colorsTexture,Z));const ts=K.morphAttributes;if((ts.position!==void 0||ts.normal!==void 0||ts.color!==void 0)&&B.update($,K,Zn),(es||ze.receiveShadow!==$.receiveShadow)&&(ze.receiveShadow=$.receiveShadow,Ot.setValue(U,"receiveShadow",$.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&H.environment!==null&&(Kt.envMapIntensity.value=H.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=DA()),es){if(Ot.setValue(U,"toneMappingExposure",I.toneMappingExposure),ze.needsLights&&Sv(Kt,hr),Ue&&q.fog===!0&&qe.refreshFogUniforms(Kt,Ue),qe.refreshMaterialUniforms(Kt,q,de,_e,M.state.transmissionRenderTarget[E.id]),ze.needsLights&&ze.lightProbeGrid){const kt=ze.lightProbeGrid;Kt.probesSH.value=kt.texture,Kt.probesMin.value.copy(kt.boundingBox.min),Kt.probesMax.value.copy(kt.boundingBox.max),Kt.probesResolution.value.copy(kt.resolution)}Sl.upload(U,Mf(ze),Kt,Z)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Sl.upload(U,Mf(ze),Kt,Z),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ot.setValue(U,"center",$.center),Ot.setValue(U,"modelViewMatrix",$.modelViewMatrix),Ot.setValue(U,"normalMatrix",$.normalMatrix),Ot.setValue(U,"modelMatrix",$.matrixWorld),q.uniformsGroups!==void 0){const kt=q.uniformsGroups;for(let ns=0,ur=kt.length;ns<ur;ns++){const Tf=kt[ns];le.update(Tf,Zn),le.bind(Tf,Zn)}}return Zn}function Sv(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function Mv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(E,H,K){const q=X.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),X.get(E.texture).__webglTexture=H,X.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:K,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,H){const K=X.get(E);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(E,H=0,K=0){z=E,N=H,F=K;let q=null,$=!1,Ue=!1;if(E){const De=X.get(E);if(De.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(U.FRAMEBUFFER,De.__webglFramebuffer),Q.copy(E.viewport),re.copy(E.scissor),Pe=E.scissorTest,S.viewport(Q),S.scissor(re),S.setScissorTest(Pe),W=-1;return}else if(De.__webglFramebuffer===void 0)Z.setupRenderTarget(E);else if(De.__hasExternalTextures)Z.rebindTextures(E,X.get(E.texture).__webglTexture,X.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ft=E.depthTexture;if(De.__boundDepthTexture!==ft){if(ft!==null&&X.has(ft)&&(E.width!==ft.image.width||E.height!==ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(E)}}const $e=E.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ue=!0);const Ke=X.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ke[H])?q=Ke[H][K]:q=Ke[H],$=!0):E.samples>0&&Z.useMultisampledRTT(E)===!1?q=X.get(E).__webglMultisampledFramebuffer:Array.isArray(Ke)?q=Ke[K]:q=Ke,Q.copy(E.viewport),re.copy(E.scissor),Pe=E.scissorTest}else Q.copy(te).multiplyScalar(de).floor(),re.copy(we).multiplyScalar(de).floor(),Pe=Le;if(K!==0&&(q=L),S.bindFramebuffer(U.FRAMEBUFFER,q)&&S.drawBuffers(E,q),S.viewport(Q),S.scissor(re),S.setScissorTest(Pe),$){const De=X.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+H,De.__webglTexture,K)}else if(Ue){const De=H;for(let $e=0;$e<E.textures.length;$e++){const Ke=X.get(E.textures[$e]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+$e,Ke.__webglTexture,K,De)}}else if(E!==null&&K!==0){const De=X.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,De.__webglTexture,K)}W=-1},this.readRenderTargetPixels=function(E,H,K,q,$,Ue,Ve,De=0){if(!(E&&E.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ve!==void 0&&($e=$e[Ve]),$e){S.bindFramebuffer(U.FRAMEBUFFER,$e);try{const Ke=E.textures[De],ft=Ke.format,mt=Ke.type;if(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+De),!R.textureFormatReadable(ft)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(mt)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-q&&K>=0&&K<=E.height-$&&U.readPixels(H,K,q,$,me.convert(ft),me.convert(mt),Ue)}finally{const Ke=z!==null?X.get(z).__webglFramebuffer:null;S.bindFramebuffer(U.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(E,H,K,q,$,Ue,Ve,De=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ve!==void 0&&($e=$e[Ve]),$e)if(H>=0&&H<=E.width-q&&K>=0&&K<=E.height-$){S.bindFramebuffer(U.FRAMEBUFFER,$e);const Ke=E.textures[De],ft=Ke.format,mt=Ke.type;if(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+De),!R.textureFormatReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Je),U.bufferData(U.PIXEL_PACK_BUFFER,Ue.byteLength,U.STREAM_READ),U.readPixels(H,K,q,$,me.convert(ft),me.convert(mt),0);const Dt=z!==null?X.get(z).__webglFramebuffer:null;S.bindFramebuffer(U.FRAMEBUFFER,Dt);const Zt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await zx(U,Zt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Je),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ue),U.deleteBuffer(Je),U.deleteSync(Zt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,H=null,K=0){const q=Math.pow(2,-K),$=Math.floor(E.image.width*q),Ue=Math.floor(E.image.height*q),Ve=H!==null?H.x:0,De=H!==null?H.y:0;Z.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,Ve,De,$,Ue),S.unbindTexture()},this.copyTextureToTexture=function(E,H,K=null,q=null,$=0,Ue=0){let Ve,De,$e,Ke,ft,mt,Je,Dt,Zt;const qt=E.isCompressedTexture?E.mipmaps[Ue]:E.image;if(K!==null)Ve=K.max.x-K.min.x,De=K.max.y-K.min.y,$e=K.isBox3?K.max.z-K.min.z:1,Ke=K.min.x,ft=K.min.y,mt=K.isBox3?K.min.z:0;else{const Kt=Math.pow(2,-$);Ve=Math.floor(qt.width*Kt),De=Math.floor(qt.height*Kt),E.isDataArrayTexture?$e=qt.depth:E.isData3DTexture?$e=Math.floor(qt.depth*Kt):$e=1,Ke=0,ft=0,mt=0}q!==null?(Je=q.x,Dt=q.y,Zt=q.z):(Je=0,Dt=0,Zt=0);const Nt=me.convert(H.format),yn=me.convert(H.type);let ze;H.isData3DTexture?(Z.setTexture3D(H,0),ze=U.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Z.setTexture2DArray(H,0),ze=U.TEXTURE_2D_ARRAY):(Z.setTexture2D(H,0),ze=U.TEXTURE_2D),S.activeTexture(U.TEXTURE0),S.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),S.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),S.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);const Gn=S.getParameter(U.UNPACK_ROW_LENGTH),Tt=S.getParameter(U.UNPACK_IMAGE_HEIGHT),Zn=S.getParameter(U.UNPACK_SKIP_PIXELS),Mi=S.getParameter(U.UNPACK_SKIP_ROWS),es=S.getParameter(U.UNPACK_SKIP_IMAGES);S.pixelStorei(U.UNPACK_ROW_LENGTH,qt.width),S.pixelStorei(U.UNPACK_IMAGE_HEIGHT,qt.height),S.pixelStorei(U.UNPACK_SKIP_PIXELS,Ke),S.pixelStorei(U.UNPACK_SKIP_ROWS,ft),S.pixelStorei(U.UNPACK_SKIP_IMAGES,mt);const hr=E.isDataArrayTexture||E.isData3DTexture,Ot=H.isDataArrayTexture||H.isData3DTexture;if(E.isDepthTexture){const Kt=X.get(E),ts=X.get(H),kt=X.get(Kt.__renderTarget),ns=X.get(ts.__renderTarget);S.bindFramebuffer(U.READ_FRAMEBUFFER,kt.__webglFramebuffer),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,ns.__webglFramebuffer);for(let ur=0;ur<$e;ur++)hr&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(E).__webglTexture,$,mt+ur),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(H).__webglTexture,Ue,Zt+ur)),U.blitFramebuffer(Ke,ft,Ve,De,Je,Dt,Ve,De,U.DEPTH_BUFFER_BIT,U.NEAREST);S.bindFramebuffer(U.READ_FRAMEBUFFER,null),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if($!==0||E.isRenderTargetTexture||X.has(E)){const Kt=X.get(E),ts=X.get(H);S.bindFramebuffer(U.READ_FRAMEBUFFER,V),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,O);for(let kt=0;kt<$e;kt++)hr?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Kt.__webglTexture,$,mt+kt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Kt.__webglTexture,$),Ot?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ts.__webglTexture,Ue,Zt+kt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ts.__webglTexture,Ue),$!==0?U.blitFramebuffer(Ke,ft,Ve,De,Je,Dt,Ve,De,U.COLOR_BUFFER_BIT,U.NEAREST):Ot?U.copyTexSubImage3D(ze,Ue,Je,Dt,Zt+kt,Ke,ft,Ve,De):U.copyTexSubImage2D(ze,Ue,Je,Dt,Ke,ft,Ve,De);S.bindFramebuffer(U.READ_FRAMEBUFFER,null),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ot?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(ze,Ue,Je,Dt,Zt,Ve,De,$e,Nt,yn,qt.data):H.isCompressedArrayTexture?U.compressedTexSubImage3D(ze,Ue,Je,Dt,Zt,Ve,De,$e,Nt,qt.data):U.texSubImage3D(ze,Ue,Je,Dt,Zt,Ve,De,$e,Nt,yn,qt):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ue,Je,Dt,Ve,De,Nt,yn,qt.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ue,Je,Dt,qt.width,qt.height,Nt,qt.data):U.texSubImage2D(U.TEXTURE_2D,Ue,Je,Dt,Ve,De,Nt,yn,qt);S.pixelStorei(U.UNPACK_ROW_LENGTH,Gn),S.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Tt),S.pixelStorei(U.UNPACK_SKIP_PIXELS,Zn),S.pixelStorei(U.UNPACK_SKIP_ROWS,Mi),S.pixelStorei(U.UNPACK_SKIP_IMAGES,es),Ue===0&&H.generateMipmaps&&U.generateMipmap(ze),S.unbindTexture()},this.initRenderTarget=function(E){X.get(E).__webglFramebuffer===void 0&&Z.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Z.setTextureCube(E,0):E.isData3DTexture?Z.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Z.setTexture2DArray(E,0):Z.setTexture2D(E,0),S.unbindTexture()},this.resetState=function(){N=0,F=0,z=null,S.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}}const LA=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:md,AddEquation:ds,AddOperation:wg,AdditiveAnimationBlendMode:Td,AdditiveBlending:Au,AgXToneMapping:Dc,AlphaFormat:Md,AlwaysCompare:Og,AlwaysDepth:Dl,AlwaysStencilFunc:Du,AmbientLight:R0,AnimationAction:B0,AnimationClip:to,AnimationLoader:DS,AnimationMixer:lM,AnimationObjectGroup:aM,AnimationUtils:CS,ArcCurve:e0,ArrayCamera:N0,ArrowHelper:DM,AttachedBindMode:Iu,Audio:F0,AudioAnalyser:KS,AudioContext:jd,AudioListener:$S,AudioLoader:HS,AxesHelper:LM,BackSide:Ln,BasicDepthPacking:Rg,BasicShadowMap:$y,BatchedMesh:Yg,BezierInterpolant:M0,Bone:Dd,BooleanKeyframeTrack:ar,Box2:z0,Box3:Tn,Box3Helper:IM,BoxGeometry:Ms,BoxHelper:RM,BufferAttribute:Ut,BufferGeometry:ht,BufferGeometryLoader:L0,ByteType:yd,Cache:Ci,Camera:fh,CameraHelper:CM,CanvasTexture:$b,CapsuleGeometry:jc,CatmullRomCurve3:t0,CineonToneMapping:pd,CircleGeometry:Qc,ClampToEdgeWrapping:zn,Clock:mM,Color:Fe,ColorKeyframeTrack:$d,ColorManagement:gt,Compatibility:Nx,CompressedArrayTexture:Xb,CompressedCubeTexture:qb,CompressedTexture:Jc,CompressedTextureLoader:LS,ConeGeometry:_o,ConstantAlphaFactor:bg,ConstantColorFactor:yg,Controls:G0,CubeCamera:U0,CubeDepthTexture:jg,CubeReflectionMapping:Ii,CubeRefractionMapping:_s,CubeTexture:go,CubeTextureLoader:US,CubeUVReflectionMapping:ta,CubicBezierCurve:Od,CubicBezierCurve3:n0,CubicInterpolant:b0,CullFaceBack:Eu,CullFaceFront:sg,CullFaceFrontBack:qy,CullFaceNone:ig,Curve:xi,CurvePath:s0,CustomBlending:rg,CustomToneMapping:gd,CylinderGeometry:vo,Cylindrical:gM,Data3DTexture:Wc,DataArrayTexture:Hc,DataTexture:ni,DataTextureLoader:NS,DataUtils:vb,DecrementStencilOp:dx,DecrementWrapStencilOp:px,DefaultLoadingManager:lr,DepthFormat:Di,DepthStencilFormat:fs,DepthTexture:nr,DetachedBindMode:Tg,DirectionalLight:C0,DirectionalLightHelper:AM,DiscreteInterpolant:S0,DodecahedronGeometry:eh,DoubleSide:Ei,DstAlphaFactor:pg,DstColorFactor:gg,DynamicCopyUsage:Rx,DynamicDrawUsage:Mx,DynamicReadUsage:Ex,EdgesGeometry:Qg,EllipseCurve:th,EqualCompare:Lg,EqualDepth:Ul,EqualStencilFunc:_x,EquirectangularReflectionMapping:Aa,EquirectangularRefractionMapping:Ca,Euler:vi,EventDispatcher:yi,ExternalTexture:Ud,ExtrudeGeometry:nh,FileLoader:Ki,Float16BufferAttribute:wb,Float32BufferAttribute:Be,FloatType:Pn,Fog:$c,FogExp2:qc,FramebufferTexture:Wb,FrontSide:Yi,Frustum:tr,FrustumArray:Kc,GLBufferAttribute:fM,GLSL1:Px,GLSL3:Lu,GreaterCompare:Ug,GreaterDepth:Ol,GreaterEqualCompare:Gc,GreaterEqualDepth:Nl,GreaterEqualStencilFunc:Sx,GreaterStencilFunc:xx,GridHelper:TM,Group:Br,HTMLTexture:Yb,HalfFloatType:Pi,HemisphereLight:T0,HemisphereLightHelper:wM,IcosahedronGeometry:ih,ImageBitmapLoader:GS,ImageLoader:no,ImageUtils:Vg,IncrementStencilOp:ux,IncrementWrapStencilOp:fx,InstancedBufferAttribute:Kr,InstancedBufferGeometry:D0,InstancedInterleavedBuffer:dM,InstancedMesh:$g,Int16BufferAttribute:Sb,Int32BufferAttribute:Mb,Int8BufferAttribute:yb,IntType:Uc,InterleavedBuffer:Yc,InterleavedBufferAttribute:er,Interpolant:ia,InterpolateBezier:Pu,InterpolateDiscrete:Wa,InterpolateLinear:pc,InterpolateSmooth:xl,InterpolationSamplingMode:Ux,InterpolationSamplingType:Lx,InvertStencilOp:mx,KeepStencilOp:Vs,KeyframeTrack:li,LOD:Xg,LatheGeometry:sh,Layers:Xc,LessCompare:Dg,LessDepth:Ll,LessEqualCompare:Vc,LessEqualDepth:js,LessEqualStencilFunc:yx,LessStencilFunc:vx,Light:Ts,LightProbe:P0,Line:bs,Line3:yM,LineBasicMaterial:Un,LineCurve:Fd,LineCurve3:i0,LineDashedMaterial:_0,LineLoop:Zg,LineSegments:Ni,LinearFilter:Vt,LinearInterpolant:qd,LinearMipMapLinearFilter:jy,LinearMipMapNearestFilter:Jy,LinearMipmapLinearFilter:Ai,LinearMipmapNearestFilter:Ra,LinearSRGBColorSpace:qa,LinearToneMapping:dd,LinearTransfer:$a,Loader:Vn,LoaderUtils:ku,LoadingManager:Zd,LoopOnce:Eg,LoopPingPong:Cg,LoopRepeat:Ag,MOUSE:Ys,Material:gn,MaterialBlending:Yy,MaterialLoader:ph,MathUtils:zg,Matrix2:Vu,Matrix3:ct,Matrix4:nt,MaxEquation:cg,Mesh:en,MeshBasicMaterial:Qi,MeshDepthMaterial:Wd,MeshDistanceMaterial:Xd,MeshLambertMaterial:g0,MeshMatcapMaterial:v0,MeshNormalMaterial:m0,MeshPhongMaterial:f0,MeshPhysicalMaterial:d0,MeshStandardMaterial:Hd,MeshToonMaterial:p0,MinEquation:lg,MirroredRepeatWrapping:Va,MixOperation:Mg,MultiplyBlending:Ru,MultiplyOperation:po,NearestFilter:Qt,NearestMipMapLinearFilter:Ky,NearestMipMapNearestFilter:Zy,NearestMipmapLinearFilter:Fr,NearestMipmapNearestFilter:_d,NeutralToneMapping:vd,NeverCompare:Pg,NeverDepth:Pl,NeverStencilFunc:gx,NoBlending:Ri,NoColorSpace:Wi,NoNormalPacking:ax,NoToneMapping:gi,NormalAnimationBlendMode:zc,NormalBlending:Zs,NormalGAPacking:lx,NormalRGPacking:ox,NotEqualCompare:Ng,NotEqualDepth:Fl,NotEqualStencilFunc:bx,NumberKeyframeTrack:uh,Object3D:wt,ObjectLoader:zS,ObjectSpaceNormalMap:Ig,OctahedronGeometry:xo,OneFactor:ug,OneMinusConstantAlphaFactor:Sg,OneMinusConstantColorFactor:xg,OneMinusDstAlphaFactor:mg,OneMinusDstColorFactor:vg,OneMinusSrcAlphaFactor:Il,OneMinusSrcColorFactor:fg,OrthographicCamera:sa,PCFShadowMap:Ea,PCFSoftShadowMap:Cl,PMREMGenerator:Hu,Path:Ja,PerspectiveCamera:dn,Plane:Hi,PlaneGeometry:na,PlaneHelper:PM,PointLight:A0,PointLightHelper:SM,Points:Kg,PointsMaterial:Ld,PolarGridHelper:EM,PolyhedronGeometry:ws,PositionalAudio:ZS,PropertyBinding:Et,PropertyMixer:k0,QuadraticBezierCurve:kd,QuadraticBezierCurve3:Bd,Quaternion:pn,QuaternionKeyframeTrack:dh,QuaternionLinearInterpolant:w0,R11_EAC_Format:Xl,RED_GREEN_RGTC2_Format:Ha,RED_RGTC1_Format:uc,REVISION:Pc,RG11_EAC_Format:Ga,RGBADepthPacking:ix,RGBAFormat:Dn,RGBAIntegerFormat:Bc,RGBA_ASTC_10x10_Format:rc,RGBA_ASTC_10x5_Format:nc,RGBA_ASTC_10x6_Format:ic,RGBA_ASTC_10x8_Format:sc,RGBA_ASTC_12x10_Format:ac,RGBA_ASTC_12x12_Format:oc,RGBA_ASTC_4x4_Format:Yl,RGBA_ASTC_5x4_Format:Zl,RGBA_ASTC_5x5_Format:Kl,RGBA_ASTC_6x5_Format:Jl,RGBA_ASTC_6x6_Format:jl,RGBA_ASTC_8x5_Format:Ql,RGBA_ASTC_8x6_Format:ec,RGBA_ASTC_8x8_Format:tc,RGBA_BPTC_Format:lc,RGBA_ETC2_EAC_Format:Wl,RGBA_PVRTC_2BPPV1_Format:Vl,RGBA_PVRTC_4BPPV1_Format:zl,RGBA_S3TC_DXT1_Format:Pa,RGBA_S3TC_DXT3_Format:Da,RGBA_S3TC_DXT5_Format:La,RGBDepthPacking:sx,RGBFormat:wd,RGBIntegerFormat:Qy,RGB_BPTC_SIGNED_Format:cc,RGB_BPTC_UNSIGNED_Format:hc,RGB_ETC1_Format:Gl,RGB_ETC2_Format:Hl,RGB_PVRTC_2BPPV1_Format:Bl,RGB_PVRTC_4BPPV1_Format:kl,RGB_S3TC_DXT1_Format:Ia,RGDepthPacking:rx,RGFormat:ys,RGIntegerFormat:kc,RawShaderMaterial:Gd,Ray:rr,Raycaster:pM,RectAreaLight:I0,RedFormat:Fc,RedIntegerFormat:mo,ReinhardToneMapping:fd,RenderTarget:Ad,RenderTarget3D:cM,RepeatWrapping:za,ReplaceStencilOp:hx,ReverseSubtractEquation:og,RingGeometry:rh,SIGNED_R11_EAC_Format:ql,SIGNED_RED_GREEN_RGTC2_Format:fc,SIGNED_RED_RGTC1_Format:dc,SIGNED_RG11_EAC_Format:$l,SRGBColorSpace:Rn,SRGBTransfer:Rt,Scene:Cd,ShaderChunk:it,ShaderLib:Qn,ShaderMaterial:ai,ShadowMaterial:h0,Shape:yo,ShapeGeometry:ah,ShapePath:UM,ShapeUtils:pi,ShortType:xd,Skeleton:Zc,SkeletonHelper:bM,SkinnedMesh:qg,Source:ps,Sphere:mn,SphereGeometry:bo,Spherical:zu,SphericalHarmonics3:Jd,SplineCurve:zd,SpotLight:E0,SpotLightHelper:xM,Sprite:Wg,SpriteMaterial:Pd,SrcAlphaFactor:Rl,SrcAlphaSaturateFactor:_g,SrcColorFactor:dg,StaticCopyUsage:Cx,StaticDrawUsage:Ya,StaticReadUsage:Tx,StereoCamera:WS,StreamCopyUsage:Ix,StreamDrawUsage:wx,StreamReadUsage:Ax,StringKeyframeTrack:or,SubtractEquation:ag,SubtractiveBlending:Cu,TOUCH:Hs,TangentSpaceNormalMap:Zi,TetrahedronGeometry:oh,Texture:Xt,TextureLoader:OS,TextureUtils:BM,Timer:O0,TimestampQuery:Dx,TorusGeometry:lh,TorusKnotGeometry:ch,Triangle:Bn,TriangleFanDrawMode:nx,TriangleStripDrawMode:tx,TrianglesDrawMode:ex,TubeGeometry:hh,UVMapping:Lc,Uint16BufferAttribute:Rd,Uint32BufferAttribute:Id,Uint8BufferAttribute:xb,Uint8ClampedBufferAttribute:bb,Uniform:tf,UniformsGroup:uM,UniformsLib:Ce,UniformsUtils:Vd,UnsignedByteType:kn,UnsignedInt101111Type:Sd,UnsignedInt248Type:Yr,UnsignedInt5999Type:bd,UnsignedIntType:ri,UnsignedShort4444Type:Nc,UnsignedShort5551Type:Oc,UnsignedShortType:$r,VSMShadowMap:Or,Vector2:oe,Vector3:P,Vector4:Pt,VectorKeyframeTrack:Yd,VideoFrameTexture:Hb,VideoTexture:Jg,WebGL3DRenderTarget:lb,WebGLArrayRenderTarget:ob,WebGLCoordinateSystem:Xn,WebGLCubeRenderTarget:nf,WebGLRenderTarget:Yn,WebGLRenderer:J0,WebGLUtils:Z0,WebGPUCoordinateSystem:Qs,WebXRController:bl,WireframeGeometry:c0,WrapAroundEnding:Xa,ZeroCurvatureEnding:Ws,ZeroFactor:hg,ZeroSlopeEnding:Xs,ZeroStencilOp:cx,createCanvasElement:kg,error:Ye,getConsoleFunction:Bx,log:Ka,setConsoleFunction:kx,warn:Ee,warnOnce:gs},Symbol.toStringTag,{value:"Module"})),Es=i=>{const e=Nr(i),t={set:n=>{t.current=n,e.set(n)},subscribe:e.subscribe,update:n=>{const s=n(t.current);t.current=s,e.set(s)},current:i};return t},$s=(i,e)=>({subscribe:td(i,e).subscribe,set:e,update:n=>e(n(Re(i))),get current(){return Re(i)}}),sf=i=>{const{subscribe:e}=td(i);return{subscribe:e,get current(){return Re(i)}}},UA=i=>{const e=i.getBoundingClientRect();let t=mi({width:e.width,height:e.height}),n=0,s=0,r=0,a=0,o=!0,l=!1,c;const u=()=>{l=!0,c!==void 0&&clearTimeout(c),c=setTimeout(()=>{l=!1,c=void 0},250)},d=()=>{u()},h=new ResizeObserver(()=>{o=!0,u();const p=i.getBoundingClientRect();ge(t,{width:p.width,height:p.height})});function f(){if(!o&&!l)return!1;const{clientWidth:p,clientHeight:v}=i;if(!o&&p===s&&v===n)return!1;s=p,n=v,o=!1;const g=i.getBoundingClientRect();return ge(t,{width:g.width,height:g.height}),C(t).width===r&&C(t).height===a?!1:(r=C(t).width,a=C(t).height,!0)}return vs(()=>(h.observe(i),window.addEventListener("resize",d,{passive:!0}),()=>{h.disconnect(),window.removeEventListener("resize",d),c!==void 0&&clearTimeout(c)})),{size:{get current(){return C(t)}},shouldUpdateSize:f}},NA=i=>{const e=typeof i=="function"?i():i,{dom:t,canvas:n}=e,{size:s,shouldUpdateSize:r}=UA(t),a={dom:t,canvas:n,size:sf(()=>s.current),shouldUpdateSize:r};return _i("threlte-dom-context",a),a},vh=()=>{const i=oi("threlte-dom-context");if(!i)throw new Error("useDOM can only be used in a child component to <Canvas>.");return i};class hs{allVertices=new Map;isolatedVertices=new Map;connectedVertices=new Map;sortedConnectedValues=[];needsSort=!1;listeners=new Map;emit(e,t){const n=this.listeners.get(e);if(n)for(const s of n)s(t)}on(e,t){let n=this.listeners.get(e);n||(n=new Set,this.listeners.set(e,n)),n.add(t)}off(e,t){this.listeners.get(e)?.delete(t)}get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices.get(e);t&&(this.isolatedVertices.set(e,t),this.connectedVertices.delete(e))}moveToConnected(e){const t=this.isolatedVertices.get(e);t&&(this.connectedVertices.set(e,t),this.isolatedVertices.delete(e))}getKey=e=>typeof e=="object"?e.key:e;add(e,t,n){let s=this.allVertices.get(e);if(s&&s.value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);s?s.value===void 0&&(s.value=t):(s={value:t,previous:new Set,next:new Set},this.allVertices.set(e,s));const r=s.next.size>0||s.previous.size>0;if(!n?.after&&!n?.before&&!r){this.isolatedVertices.set(e,s),this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices.set(e,s);if(n?.after){const a=Array.isArray(n.after)?n.after:[n.after];for(const o of a)s.previous.add(this.getKey(o));for(const o of a){const l=this.getKey(o),c=this.allVertices.get(l);if(c)c.next.add(e),this.moveToConnected(l);else{const u={value:void 0,previous:new Set,next:new Set([e])};this.allVertices.set(l,u),this.connectedVertices.set(l,u)}}}if(n?.before){const a=Array.isArray(n.before)?n.before:[n.before];for(const o of a)s.next.add(this.getKey(o));for(const o of a){const l=this.getKey(o),c=this.allVertices.get(l);if(c)c.previous.add(e),this.moveToConnected(l);else{const u={value:void 0,previous:new Set([e]),next:new Set};this.allVertices.set(l,u),this.connectedVertices.set(l,u)}}}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices.get(t)){this.isolatedVertices.delete(t),this.allVertices.delete(t),this.emit("node:removed",{key:t,type:"isolated"});return}const s=this.connectedVertices.get(t);if(!(!s||s.value===void 0)){for(const r of s.next){const a=this.connectedVertices.get(r);a&&(a.previous.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}for(const r of s.previous){const a=this.connectedVertices.get(r);a&&(a.next.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}this.connectedVertices.delete(t),this.allVertices.delete(t),this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0}}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((n,s)=>{t.push(e(n,s))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);for(const n of this.isolatedVertices.values())n.value!==void 0&&e(n.value,t++)}getValueByKey(e){return this.allVertices.get(e)?.value}sort(){const e=new Map,t=[],n=[];for(const[r,a]of this.connectedVertices)a.value!==void 0&&e.set(r,0);for(const[r]of e){const a=this.connectedVertices.get(r);for(const o of a.next)e.has(o)&&e.set(o,e.get(o)+1)}for(const[r,a]of e)a===0&&t.push(r);let s=0;for(;s<t.length;){const r=t[s++];n.push(r);const a=this.connectedVertices.get(r)?.next;if(a)for(const o of a){const l=(e.get(o)||0)-1;e.set(o,l),l===0&&t.push(o)}}if(n.length!==e.size)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");this.sortedConnectedValues.length=0;for(let r=0;r<n.length;r++){const a=this.connectedVertices.get(n[r]).value;a!==void 0&&this.sortedConnectedValues.push(a)}this.needsSort=!1}clear(){this.allVertices.clear(),this.isolatedVertices.clear(),this.connectedVertices.clear(),this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class OA{key;stage;callback;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}constructor(e,t,n){this.stage=e,this.key=t,this.callback=n}run(e){this.runTask&&this.callback(e)}}class FA extends hs{key;scheduler;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}get tasks(){return this.sortedVertices}callback=(e,t)=>t();constructor(e,t,n){super(),this.scheduler=e,this.key=t,this.start=this.start.bind(this),this.stop=this.stop.bind(this),n&&(this.callback=n.bind(this))}createTask(e,t,n){const s=new OA(this,e,t);return this.add(e,s,n),s}getTask(e){return this.getValueByKey(e)}removeTask=this.remove.bind(this);run(e){this.runTask&&this.callback(e,t=>{this.forEachNode(n=>{n.run(t??e)})})}runWithTiming(e){if(!this.runTask)return{};const t={};return this.callback(e,n=>{this.forEachNode(s=>{const r=performance.now();s.run(n??e);const a=performance.now()-r;t[s.key]=a})}),t}getSchedule(){return this.mapNodes(e=>e.key.toString())}}class kA extends hs{lastTime=0;clampDeltaTo=.1;get stages(){return this.sortedVertices}constructor(e){super(),e?.clampDeltaTo&&(this.clampDeltaTo=e.clampDeltaTo),this.run=this.run.bind(this)}createStage(e,t){const n=new FA(this,e,t?.callback);return this.add(e,n,{after:t?.after,before:t?.before}),n}getStage(e){return this.getValueByKey(e)}removeStage=this.remove.bind(this);run(e){const t=e-this.lastTime;this.forEachNode(n=>{n.run(Math.min(t/1e3,this.clampDeltaTo))}),this.lastTime=e}runWithTiming(e){const t=e-this.lastTime,n={},s=performance.now();return this.forEachNode(r=>{const a=performance.now(),o=r.runWithTiming(Math.min(t/1e3,this.clampDeltaTo)),l=performance.now()-a;n[r.key.toString()]={duration:l,tasks:o}}),this.lastTime=e,{total:performance.now()-s,stages:n}}getSchedule(e={tasks:!0}){return{stages:this.mapNodes(t=>{if(t===void 0)throw new Error("Stage not found");return{key:t.key.toString(),tasks:e.tasks?t.getSchedule():void 0}})}}dispose(){this.clear()}}const BA=i=>{const e=new kA,t=e.createStage(Symbol("threlte-main-stage")),n=jt(i),s=jt(()=>C(n).autoRender),r=jt(()=>C(n).renderMode);let a=jt(()=>C(s)??!0),o=jt(()=>C(r)??"on-demand");const l=new Set;let c=!0;const u=()=>C(o)==="always"||C(o)==="on-demand"&&(c||l.size>0)||C(o)==="manual"&&c,d={scheduler:e,autoInvalidations:l,frameInvalidated:{get current(){return c},set current(h){c=h}},advance:()=>{c=!0},autoRender:$s(()=>C(a),h=>ge(a,h)),renderMode:$s(()=>C(o),h=>ge(o,h)),invalidate(){c=!0},mainStage:t,shouldRender:u,renderStage:e.createStage(Symbol("threlte-render-stage"),{after:t,callback(h,f){d.shouldRender()&&f()}}),resetFrameInvalidation(){c=!1}};return vs(()=>()=>{e.dispose()}),_i("threlte-scheduler-context",d),d},cr=()=>{const i=oi("threlte-scheduler-context");if(!i)throw new Error("useScheduler can only be used in a child component to <Canvas>.");return i};var zA=["forEach","isDisjointFrom","isSubsetOf","isSupersetOf"],VA=["difference","intersection","symmetricDifference","union"],Am=!1;class _c extends Set{#t=new Map;#e=mi(0);#n=mi(0);#r=Ml||-1;constructor(e){if(super(),e){for(var t of e)super.add(t);this.#n.v=super.size}Am||this.#s()}#i(e){return Ml===this.#r?mi(e):Ju(e)}#s(){Am=!0;var e=_c.prototype,t=Set.prototype;for(const n of zA)e[n]=function(...s){return C(this.#e),t[n].apply(this,s)};for(const n of VA)e[n]=function(...s){C(this.#e);var r=t[n].apply(this,s);return new _c(r)}}has(e){var t=super.has(e),n=this.#t,s=n.get(e);if(s===void 0){if(!t)return C(this.#e),!1;s=this.#i(!0),n.set(e,s)}return C(s),t}add(e){return super.has(e)||(super.add(e),ge(this.#n,super.size),us(this.#e)),this}delete(e){var t=super.delete(e),n=this.#t,s=n.get(e);return s!==void 0&&(n.delete(e),ge(s,!1)),t&&(ge(this.#n,super.size),us(this.#e)),t}clear(){if(super.size!==0){super.clear();var e=this.#t;for(var t of e.values())ge(t,!1);e.clear(),ge(this.#n,0),us(this.#e)}}keys(){return this.values()}values(){return C(this.#e),super.values()}entries(){return C(this.#e),super.entries()}[Symbol.iterator](){return this.keys()}get size(){return C(this.#n)}}class GA extends Map{#t=new Map;#e=mi(0);#n=mi(0);#r=Ml||-1;constructor(e){if(super(),e){for(var[t,n]of e)super.set(t,n);this.#n.v=super.size}}#i(e){return Ml===this.#r?mi(e):Ju(e)}has(e){var t=this.#t,n=t.get(e);if(n===void 0)if(super.has(e))n=this.#i(0),t.set(e,n);else return C(this.#e),!1;return C(n),!0}forEach(e,t){this.#s(),super.forEach(e,t)}get(e){var t=this.#t,n=t.get(e);if(n===void 0)if(super.has(e))n=this.#i(0),t.set(e,n);else{C(this.#e);return}return C(n),super.get(e)}set(e,t){var n=this.#t,s=n.get(e),r=super.get(e),a=super.set(e,t),o=this.#e;if(s===void 0)s=this.#i(0),n.set(e,s),ge(this.#n,super.size),us(o);else if(r!==t){us(s);var l=o.reactions===null?null:new Set(o.reactions),c=l===null||!s.reactions?.every(u=>l.has(u));c&&us(o)}return a}delete(e){var t=this.#t,n=t.get(e),s=super.delete(e);return n!==void 0&&(t.delete(e),ge(n,-1)),s&&(ge(this.#n,super.size),us(this.#e)),s}clear(){if(super.size!==0){super.clear();var e=this.#t;ge(this.#n,0);for(var t of e.values())ge(t,-1);us(this.#e),e.clear()}}#s(){C(this.#e);var e=this.#t;if(this.#n.v!==e.size){for(var t of super.keys())if(!e.has(t)){var n=this.#i(0);e.set(t,n)}}for([,n]of this.#t)C(n)}keys(){return C(this.#e),super.keys()}values(){return this.#s(),super.values()}entries(){return this.#s(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return C(this.#n),super.size}}const HA=()=>{const{size:i}=vh(),e=Mc(i),{invalidate:t}=cr(),n=new _c,s=new WeakMap,r=new dn(75,1,.1,1e3);r.position.z=5,r.lookAt(0,0,0);let a=mi(!1),o=mi(r);fn(()=>{if(C(o)!==r||C(a))return;const{width:c,height:u}=e.current;r.aspect=c/u,r.updateProjectionMatrix(),r.updateMatrixWorld(),t()}),fn(()=>{if(C(o)===void 0||n.size===0){let c=!1;C(o)!==r&&(ge(o,r),c=!0),C(a)&&(ge(a,!1),c=!0),c&&t()}});const l={makeDefaultCameras:n,makeDefaultCameraManual:s,camera:$s(()=>C(o),c=>ge(o,c)),manual:{get current(){return C(a)},set(c){ge(a,c,!0)}}};return _i("threlte-camera-context",l),l},rf=()=>{const i=oi("threlte-camera-context");if(!i)throw new Error("useCamera can only be used in a child component to <Canvas>.");return i},WA=()=>{const i=new Map,e={disposableObjects:i,removeObjectFromDisposal:t=>{i.delete(t)},disposableObjectMounted:t=>{const n=i.get(t);n?i.set(t,n+1):i.set(t,1)},disposableObjectUnmounted:t=>{const n=i.get(t);n&&n>0&&(i.set(t,n-1),n-1<=0&&(i.delete(t),t.dispose()))}};return vs(()=>()=>{for(const[t]of i)t.dispose();i.clear()}),_i("threlte-disposal-context",e),e},XA=()=>{const i=oi("threlte-disposal-context");if(!i)throw new Error("useDisposal can only be used in a child component to <Canvas>.");return i},j0=Symbol("threlte-parent-context"),Q0=i=>{const e={get current(){return i()}};return _i(j0,e),e},ev=()=>oi(j0),qA=()=>{const i=ev();return sf(()=>i.current)},qu=Symbol("threlte-parent-object3d-context"),tv=i=>{const e=oi(qu),t={get current(){return i()??e.current}};return _i(qu,t),t},$A=()=>oi(qu),YA=i=>{const e={scene:new Cd};return _i("threlte-scene-context",e),e},nv=()=>{const i=oi("threlte-scene-context");if(!i)throw new Error("useScene can only be used in a child component to <Canvas>.");return i},ZA=new class{#t=Ju(window.devicePixelRatio);#e(){const e=Tv(window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),"change",()=>{ge(this.#t,window.devicePixelRatio),e(),this.#e()})}constructor(){this.#e()}get current(){return C(this.#t),window.devicePixelRatio}},fi=(i,e)=>i?.[`is${e}`]===!0,KA=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom","filmGauge","filmOffset"]),iv=(i,e,t)=>{fi(i,"PerspectiveCamera")?i.aspect=e/t:fi(i,"OrthographicCamera")&&(i.left=e/-2,i.right=e/2,i.top=t/2,i.bottom=t/-2),i.updateProjectionMatrix(),i.updateMatrixWorld()},JA=(i,e,t,n)=>{const{camera:s,manual:r,makeDefaultCameras:a,makeDefaultCameraManual:o}=rf(),{invalidate:l}=cr(),{size:c}=vh(),u=Mc(c);fn(()=>{if(!t())return;const d=i(),h=e();return a.add(d),o.set(d,h),s.set(d),r.set(h),l(),()=>{a.delete(d),o.delete(d);const f=a.values().next().value;s.current===d&&(f?(s.set(f),r.set(o.get(f)??!1)):r.set(!1),l())}}),fn(()=>{if(e())return;const d=i();for(const h in n())if(KA.has(h)){d.updateProjectionMatrix(),l();break}}),fn(()=>{e()||iv(i(),u.current.width,u.current.height)})},jA=i=>{const{camera:e,manual:t}=rf(),{scene:n}=nv(),{invalidate:s,mainStage:r,renderStage:a,autoRender:o,scheduler:l,frameInvalidated:c}=cr(),{canvas:u,size:d,shouldUpdateSize:h}=vh(),f=jt(i),p=Re(()=>C(f).createRenderer?C(f).createRenderer(u):new J0({canvas:u,powerPreference:"high-performance",antialias:!0,alpha:!0}));l.createStage(Symbol("threlte-resize-stage"),{before:r}).createTask(Symbol("threlte-resize-task"),()=>{p.xr.isPresenting||h()&&(p.setSize(d.current.width,d.current.height),t.current||iv(e.current,d.current.width,d.current.height),s())});const g=a.createTask(Symbol("threlte-auto-render-task"),()=>{p.render(n,e.current)}),m=jt(()=>C(f).colorSpace),_=jt(()=>C(f).dpr),b=jt(()=>C(f).shadows),y=jt(()=>C(f).toneMapping);let w=jt(()=>C(m)??Rn),M=jt(()=>{const D=ZA.current??window.devicePixelRatio;return Array.isArray(C(_))?Math.min(Math.max(C(_)[0],D),C(_)[1]):C(_)??D}),A=jt(()=>C(b)??Cl),x=jt(()=>C(y)??Dc);const T={renderer:p,colorManagementEnabled:sf(()=>C(f).colorManagementEnabled??!0),colorSpace:$s(()=>C(w),D=>ge(w,D)),dpr:$s(()=>C(M),D=>ge(M,D)),shadows:$s(()=>C(A),D=>ge(A,D)),toneMapping:$s(()=>C(x),D=>ge(x,D)),autoRenderTask:g};_i("threlte-renderer-context",T);const I=Mc(o);return gt.enabled=C(f).colorManagementEnabled??!0,fn(()=>{p.outputColorSpace=C(w),s()}),fn(()=>{p.setPixelRatio(C(M)),s()}),fn(()=>{p.shadowMap.enabled=C(A)!==!1,C(A)!==!1&&C(A)!==!0?p.shadowMap.type=C(A):C(A)===!0&&(p.shadowMap.type=Cl),s()}),fn(()=>{p.toneMapping=C(x),s()}),fn(()=>(I.current?T.autoRenderTask.start():T.autoRenderTask.stop(),s(),()=>{T.autoRenderTask.stop()})),p.setAnimationLoop(D=>{l.run(D),c.current=!1}),vs(()=>()=>{p.setAnimationLoop(null);try{p.dispose()}catch{}}),T},QA=()=>{const i=oi("threlte-renderer-context");if(!i)throw new Error("useRenderer can only be used in a child component to <Canvas>.");return i},eC=()=>{const i=Es({});return _i("threlte-user-context",i),i},tC=()=>{const i=oi("threlte-user-context");if(!i)throw new Error("useUserContext can only be used in a child component to <Canvas>.");return i},nC=i=>{const{scene:e}=YA(),t=typeof i=="function"?i:()=>i;return{scene:e,...NA(t),...Xy(),...Q0(()=>e),...tv(()=>e),...WA(),...BA(t),...HA(),...jA(t),...eC()}};var iC=new Set(["$$slots","$$events","$$legacy","children"]);function sC(i,e){vn(e,!0);let t=ao(e,iC);nC(()=>t);var n=Gr(),s=nn(n);Sc(s,()=>e.children),ot(i,n),_n()}var rC=new Set(["$$slots","$$events","$$legacy","children"]),aC=bt('<div class="svelte-clyidt"><canvas class="svelte-clyidt"><!></canvas></div>');function oC(i,e){let t=ao(e,rC),n=mi(void 0),s=mi(void 0);var r=aC(),a=It(r),o=It(a);{var l=c=>{sC(c,Qu({get dom(){return C(s)},get canvas(){return C(n)}},()=>t,{children:(u,d)=>{var h=Gr(),f=nn(h);Sc(f,()=>e.children??ju),ot(u,h)},$$slots:{default:!0}}))};un(o,c=>{C(n)&&C(s)&&c(l)})}yt(a),Tl(a,c=>ge(n,c),()=>C(n)),yt(r),Tl(r,c=>ge(s,c),()=>C(s)),ot(i,r)}const lC=(i,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let s=0;s<t.length;s+=1)if(i=i[t[s]],i==null)return console.error(`Cannot resolve property path "${e}": "${t[s]}" is ${i}`),{target:{},key:""};return{target:i,key:n}}else return{target:i,key:e}},cC=i=>typeof i=="object"&&i!==null,hC=(i,e)=>{const{invalidate:t}=cr(),n=ev(),s=$A();fn(()=>{t();const r=i(),a=e();if(a===void 0&&fi(r,"Object3D")){const o=s.current;return o?.add(r),()=>{t(),o?.remove(r)}}if(a===void 0&&cC(n.current)){const o=n.current;if(fi(r,"Material")){const l=o.material;return o.material=r,()=>{t(),o.material=l}}else if(fi(r,"BufferGeometry")){const l=o.geometry;return o.geometry=r,()=>{t(),o.geometry=l}}}if(a===!1)return()=>{t()};if(typeof a=="function"){const o=a({ref:r,parent:n.current,parentObject3D:s.current});return()=>{t(),o?.()}}if(typeof a=="string"){const{target:o,key:l}=lC(n.current,a);if(l in o){const c=o[l];return o[l]=r,()=>{t(),o[l]=c}}else return o[l]=r,()=>{t(),delete o[l]}}if(fi(a,"Object3D")&&fi(r,"Object3D"))return a.add(r),()=>{t(),a.remove(r)}})},Cm=Symbol("threlte-disposable-object-context"),uC=i=>typeof i?.dispose=="function",dC=(i,e)=>{const{disposableObjectMounted:t,disposableObjectUnmounted:n,removeObjectFromDisposal:s}=XA(),r=oi(Cm),a=jt(()=>{const l=e();return l!==void 0?l!==!1:r?.()!==!1});_i(Cm,()=>C(a));const o=new Set;vs(()=>{const l=i();uC(l)&&(C(a)?(t(l),o.add(l)):(s(l),o.delete(l)))}),vs(()=>()=>{for(const l of o)n(l);o.clear()})};let $u;const fC=i=>{$u=i},pC=()=>{const i=$u;return $u=void 0,i},mC="threlte-plugin-context",gC=i=>{const e=oi(mC);if(!e)return;const t=[],n=Object.values(e);if(n.length>0)for(let s=0;s<n.length;s++){const r=n[s],a=r(i);a&&a.pluginProps&&t.push(...a.pluginProps)}return{pluginsProps:t}},vC=i=>typeof i=="string"||typeof i=="number"||typeof i=="boolean"||typeof i>"u"||i===null,_C=(i,e,t)=>{const n=i[e],s=Array.isArray(t);!s&&typeof t=="number"&&typeof n=="object"&&n!==null&&typeof n.setScalar=="function"&&!n.isColor?n.setScalar(t):typeof n=="object"&&n!==null&&typeof n.set=="function"?s?n.set(...t):n.set(t):i[e]=t},yC=(i,e,t)=>{const{invalidate:n}=cr(),s=new Map,r=(a,o,l)=>{if(vC(l)){const h=s.get(o);if(h&&h.instance===a&&h.value===l)return;s.set(o,{instance:a,value:l})}else s.delete(o);let c=a,u=o;const d=o.includes(".");if(d){const h=o.split(".");u=h.pop();for(let f=0;f<h.length;f++)if(c=c[h[f]],c==null){console.error(`Cannot resolve property path "${o}": "${h[f]}" is ${c}`);return}}if(typeof l=="function"&&u.startsWith("on")&&!d&&"addEventListener"in c){const h=c,f=u.slice(2);return h.addEventListener(f,l),()=>{h.removeEventListener?.(f,l)}}l!=null?_C(c,u,l):c[u]=l,n()};fn(()=>{const a=i(),o=e(),l=t();s.clear(),Re(()=>{for(const c in o)l?.includes(c)||fn(()=>r(a,c,o[c]))})})},xC=i=>typeof i=="function"&&Function.prototype.toString.call(i).startsWith("class "),bC=(i,e)=>xC(i)?Array.isArray(e)?new i(...e):new i:i;var SC=new Set(["$$slots","$$events","$$legacy","ref","manual","makeDefault"]);function MC(i,e){vn(e,!0);let t=Xe(e,"manual",3,!1),n=Xe(e,"makeDefault",3,!1),s=ao(e,SC);JA(()=>e.ref,()=>t(),()=>n(),()=>s),_n()}var wC=new Set(["$$slots","$$events","$$legacy","is","args","attach","dispose","ref","oncreate","children","makeDefault","manual"]),TC=bt("<!> <!>",1);function Rm(i,e){vn(e,!0);let t=Xe(e,"is",19,pC),n=Xe(e,"ref",15),s=ao(e,wC);const r=jt(()=>bC(t(),e.args)),a=gC({get ref(){return C(r)},get args(){return e.args},get attach(){return e.attach},get manual(){return e.manual},get makeDefault(){return e.makeDefault},get dispose(){return e.dispose},get props(){return s}});yC(()=>C(r),()=>s,()=>a?.pluginsProps),hC(()=>C(r),()=>e.attach),dC(()=>C(r),()=>e.dispose),tv(()=>fi(C(r),"Object3D")?C(r):void 0),Q0(()=>C(r)),vs(()=>{if(C(r))return Re(()=>(n()!==C(r)&&n(C(r)),e.oncreate?.(C(r))))});var o=TC(),l=nn(o);{var c=h=>{MC(h,Qu({get ref(){return C(r)},get manual(){return e.manual},get makeDefault(){return e.makeDefault}},()=>s))},u=jt(()=>fi(C(r),"PerspectiveCamera")||fi(C(r),"OrthographicCamera"));un(l,h=>{C(u)&&h(c)})}var d=tt(l,2);Sc(d,()=>e.children??ju,()=>({ref:C(r)})),ot(i,o),_n()}const EC={},_t=new Proxy(Rm,{get(i,e){if(typeof e!="string")return Reflect.get(i,e);const t=EC[e]||LA[e];if(t===void 0)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return(...n)=>(fC(t),Rm(...n))}}),AC=()=>{const i=cr(),e=QA(),t=rf(),n=nv(),s=vh();return{advance:i.advance,autoRender:i.autoRender,autoRenderTask:e.autoRenderTask,camera:t.camera,colorManagementEnabled:e.colorManagementEnabled,colorSpace:e.colorSpace,dpr:e.dpr,invalidate:i.invalidate,mainStage:i.mainStage,renderer:e.renderer,renderMode:i.renderMode,renderStage:i.renderStage,scheduler:i.scheduler,shadows:e.shadows,shouldRender:i.shouldRender,dom:s.dom,canvas:s.canvas,size:s.size,toneMapping:e.toneMapping,get scene(){return n.scene},set scene(a){n.scene=a}}},CC=typeof window<"u";function RC(i,e,t){if(!CC)return{task:void 0,start:()=>{},stop:()=>{},started:Cv(!1)};let n,s,r;hs.isKey(i)?(n=i,s=e,r=t):(n=Symbol("useTask"),s=i,r=e);const a=cr(),o=r?.autoInvalidate??!0;let l=a.mainStage,c=jt(()=>r?.running?.()??r?.autoStart??!0);if(r){if(r.stage)if(hs.isValue(r.stage))l=r.stage;else{const d=a.scheduler.getStage(r.stage);if(!d)throw new Error(`No stage found with key ${r.stage.toString()}`);l=d}else if(r.after)if(Array.isArray(r.after))for(let d=0;d<r.after.length;d++){const h=r.after[d];if(hs.isValue(h)){l=h.stage;break}}else hs.isValue(r.after)&&(l=r.after.stage);else if(r.before)if(Array.isArray(r.before))for(let d=0;d<r.before.length;d++){const h=r.before[d];if(hs.isValue(h)){l=h.stage;break}}else hs.isValue(r.before)&&(l=r.before.stage)}const u=l.createTask(n,s,r);return fn(()=>{C(c)?(u.start(),o&&a.autoInvalidations.add(s)):(u.stop(),o&&a.autoInvalidations.delete(s))}),fn(()=>()=>{l.removeTask(n),o&&a.autoInvalidations.delete(s)}),{task:u,start:()=>{ge(c,!0)},stop:()=>{ge(c,!1)},started:td(()=>C(c))}}function IC(i,e,t){const n=tC();if(!n)throw new Error("No user context store found, did you invoke this function outside of your main <Canvas> component?");return e?(n.update(s=>{if(i in s)return s;const r=typeof e=="function"?e():e;return s[i]=r,s}),n.current[i]):Rv(n,s=>s[i])}const Im=Symbol(),PC=i=>typeof i?.subscribe=="function",sv=(i,e,t)=>{const n=i().map(a=>PC(a)?Mc(a):Im),s=jt(()=>i().map((a,o)=>n[o]===Im?a:n[o].current)),r=()=>{C(s);let a;return Re(()=>{a=e(C(s))}),a};t?fn(r):vs(r)},DC=(i,e)=>sv(i,e,!1),LC=(i,e)=>sv(i,e,!0);Object.assign(DC,{pre:LC});const zs=i=>({subscribe:i.subscribe,get current(){return i.current}});let Fa=0;const af=Es(!1),_h=Es(!1),of=Es(void 0),lf=Es(0),cf=Es(0),rv=Es([]),hf=Es(0),{onStart:UC,onLoad:NC,onError:OC}=lr;lr.onStart=(i,e,t)=>{UC?.(i,e,t),_h.set(!0),of.set(i),lf.set(e),cf.set(t);const n=(e-Fa)/(t-Fa);hf.set(n),n===1&&af.set(!0)};lr.onLoad=()=>{NC?.(),_h.set(!1)};lr.onError=i=>{OC?.(i),rv.update(e=>[...e,i])};lr.onProgress=(i,e,t)=>{e===t&&(Fa=t),_h.set(!0),of.set(i),lf.set(e),cf.set(t);const n=(e-Fa)/(t-Fa)||1;hf.set(n),n===1&&af.set(!0)};zs(_h),zs(of),zs(lf),zs(cf),zs(rv),zs(hf),zs(af);const FC=()=>IC("threlte-controls",{orbitControls:Nr(void 0),trackballControls:Nr(void 0),cameraControls:Nr(void 0),transformControls:Nr(void 0)});new nt;new nt;new wt;const kC="Right",BC="Top",zC="Front",VC="Left",GC="Bottom",HC="Back";[kC,BC,zC,VC,GC,HC].map(i=>i.toLocaleLowerCase());Ce.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new oe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Qn.line={uniforms:Vd.merge([Ce.common,Ce.fog,Ce.line]),vertexShader:`
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
		`};new nt;const Pm={type:"change"},uf={type:"start"},av={type:"end"},gl=new rr,Dm=new Hi,WC=Math.cos(70*zg.DEG2RAD),sn=new P,On=2*Math.PI,Lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vu=1e-6;class XC extends G0{constructor(e,t=null){super(e,t),this.state=Lt.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ys.ROTATE,MIDDLE:Ys.DOLLY,RIGHT:Ys.PAN},this.touches={ONE:Hs.ROTATE,TWO:Hs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new pn,this._lastTargetPosition=new P,this._quat=new pn().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new zu,this._sphericalDelta=new zu,this._scale=1,this._panOffset=new P,this._rotateStart=new oe,this._rotateEnd=new oe,this._rotateDelta=new oe,this._panStart=new oe,this._panEnd=new oe,this._panDelta=new oe,this._dollyStart=new oe,this._dollyEnd=new oe,this._dollyDelta=new oe,this._dollyDirection=new P,this._mouse=new oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$C.bind(this),this._onPointerDown=qC.bind(this),this._onPointerUp=YC.bind(this),this._onContextMenu=tR.bind(this),this._onMouseWheel=JC.bind(this),this._onKeyDown=jC.bind(this),this._onTouchStart=QC.bind(this),this._onTouchMove=eR.bind(this),this._onMouseDown=ZC.bind(this),this._onMouseMove=KC.bind(this),this._interceptControlDown=nR.bind(this),this._interceptControlUp=iR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Pm),this.update(),this.state=Lt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;sn.copy(t).sub(this.target),sn.applyQuaternion(this._quat),this._spherical.setFromVector3(sn),this.autoRotate&&this.state===Lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=On:n>Math.PI&&(n-=On),s<-Math.PI?s+=On:s>Math.PI&&(s-=On),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(sn.setFromSpherical(this._spherical),sn.applyQuaternion(this._quatInverse),t.copy(this.target).add(sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=sn.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(gl.origin.copy(this.object.position),gl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(gl.direction))<WC?this.object.lookAt(this.target):(Dm.setFromNormalAndCoplanarPoint(this.object.up,this.target),gl.intersectPlane(Dm,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>vu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vu||this._lastTargetPosition.distanceToSquared(this.target)>vu?(this.dispatchEvent(Pm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?On/60*this.autoRotateSpeed*e:On/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){sn.setFromMatrixColumn(t,0),sn.multiplyScalar(-e),this._panOffset.add(sn)}_panUp(e,t){this.screenSpacePanning===!0?sn.setFromMatrixColumn(t,1):(sn.setFromMatrixColumn(t,0),sn.crossVectors(this.object.up,sn)),sn.multiplyScalar(e),this._panOffset.add(sn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;sn.copy(s).sub(this.target);let r=sn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(On*this._rotateDelta.x/t.clientHeight),this._rotateUp(On*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(On*this._rotateDelta.x/t.clientHeight),this._rotateUp(On*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function qC(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function $C(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function YC(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(av),this.state=Lt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ZC(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ys.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Lt.DOLLY;break;case Ys.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Lt.ROTATE}break;case Ys.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Lt.PAN}break;default:this.state=Lt.NONE}this.state!==Lt.NONE&&this.dispatchEvent(uf)}function KC(i){switch(this.state){case Lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function JC(i){this.enabled===!1||this.enableZoom===!1||this.state!==Lt.NONE||(i.preventDefault(),this.dispatchEvent(uf),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(av))}function jC(i){this.enabled!==!1&&this._handleKeyDown(i)}function QC(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Hs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Lt.TOUCH_ROTATE;break;case Hs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Lt.TOUCH_PAN;break;default:this.state=Lt.NONE}break;case 2:switch(this.touches.TWO){case Hs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Lt.TOUCH_DOLLY_PAN;break;case Hs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Lt.TOUCH_DOLLY_ROTATE;break;default:this.state=Lt.NONE}break;default:this.state=Lt.NONE}this.state!==Lt.NONE&&this.dispatchEvent(uf)}function eR(i){switch(this._trackPointer(i),this.state){case Lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Lt.NONE}}function tR(i){this.enabled!==!1&&i.preventDefault()}function nR(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function iR(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var sR=new Set(["$$slots","$$events","$$legacy","camera","ref","children"]);function rR(i,e){vn(e,!0);const t=()=>Pf(d,"$parent",s),n=()=>Pf(c,"$defaultCamera",s),[s,r]=Ov();let a=Xe(e,"ref",15),o=ao(e,sR);const{dom:l,camera:c,invalidate:u}=AC(),d=qA(),h=jt(()=>e.camera?e.camera:fi(t(),"Camera")?t():n()),f=new XC(Re(()=>C(h)),l);fn(()=>{f.object=C(h)});const{orbitControls:p}=FC();RC(()=>{f.update()},{autoInvalidate:!1,running:()=>e.autoRotate||e.enableDamping||!1});const v=g=>{u(),e.onchange?.(g)};fn(()=>(p.set(f),()=>{p.set(void 0)})),_t(i,Qu({get is(){return f}},()=>o,{onchange:v,get ref(){return a()},set ref(g){a(g)},children:(g,m)=>{var _=Gr(),b=nn(_);Sc(b,()=>e.children??ju,()=>({ref:f})),ot(g,_)},$$slots:{default:!0}})),_n(),r()}new nt;new nt;new en;const aR=it.shadowmap_pars_fragment;aR.includes("unpackRGBAToDepth");`${it.logdepthbuf_pars_vertex}${it.fog_pars_vertex}${it.logdepthbuf_vertex}${it.fog_vertex}`;`${it.tonemapping_fragment}${it.colorspace_fragment}`;`${it.tonemapping_fragment}${it.colorspace_fragment}`;const oR=`

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
`,lR=`

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
`,cR=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,hR=cR,uR=`
	${oR}
	${lR}
`;`${hR}${uR}${it.tonemapping_fragment}${it.colorspace_fragment}`;typeof window<"u"&&document.createElement("div");new GA;for(let i=0;i<256;i++)(i<16?"0":"")+i.toString(16);new sa(-1,1,1,-1,0,1);class dR extends ht{constructor(){super(),this.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Be([0,2,0,0,2,0],2))}}new dR;var ov={exports:{}};ov.exports=yh;ov.exports.default=yh;function yh(i,e,t){t=t||2;var n=e&&e.length,s=n?e[0]*t:i.length,r=lv(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;var o,l,c,u,d,h,f;if(n&&(r=vR(i,e,r,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(var p=t;p<s;p+=t)d=i[p],h=i[p+1],d<o&&(o=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);f=Math.max(c-o,u-l),f=f!==0?32767/f:0}return io(r,a,t,o,l,f,0),a}function lv(i,e,t,n,s){var r,a;if(s===Ku(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Lm(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Lm(r,i[r],i[r+1],a);return a&&xh(a,a.next)&&(ro(a),a=a.next),a}function sr(i,e){if(!i)return i;e||(e=i);var t=i,n;do if(n=!1,!t.steiner&&(xh(t,t.next)||Wt(t.prev,t,t.next)===0)){if(ro(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function io(i,e,t,n,s,r,a){if(i){!a&&r&&SR(i,n,s,r);for(var o=i,l,c;i.prev!==i.next;){if(l=i.prev,c=i.next,r?pR(i,n,s,r):fR(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),ro(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=mR(sr(i),e,t),io(i,e,t,n,s,r,2)):a===2&&gR(i,e,t,n,s,r):io(sr(i),e,t,n,s,r,1);break}}}}function fR(i){var e=i.prev,t=i,n=i.next;if(Wt(e,t,n)>=0)return!1;for(var s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,h=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,p=n.next;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&zr(s,o,r,l,a,c,p.x,p.y)&&Wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function pR(i,e,t,n){var s=i.prev,r=i,a=i.next;if(Wt(s,r,a)>=0)return!1;for(var o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=o<l?o<c?o:c:l<c?l:c,p=u<d?u<h?u:h:d<h?d:h,v=o>l?o>c?o:c:l>c?l:c,g=u>d?u>h?u:h:d>h?d:h,m=Yu(f,p,e,t,n),_=Yu(v,g,e,t,n),b=i.prevZ,y=i.nextZ;b&&b.z>=m&&y&&y.z<=_;){if(b.x>=f&&b.x<=v&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&zr(o,u,l,d,c,h,b.x,b.y)&&Wt(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&zr(o,u,l,d,c,h,y.x,y.y)&&Wt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=v&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&zr(o,u,l,d,c,h,b.x,b.y)&&Wt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&zr(o,u,l,d,c,h,y.x,y.y)&&Wt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function mR(i,e,t){var n=i;do{var s=n.prev,r=n.next.next;!xh(s,r)&&cv(s,n,n.next,r)&&so(s,r)&&so(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ro(n),ro(n.next),n=i=r),n=n.next}while(n!==i);return sr(n)}function gR(i,e,t,n,s,r){var a=i;do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&TR(a,o)){var l=hv(a,o);a=sr(a,a.next),l=sr(l,l.next),io(a,e,t,n,s,r,0),io(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function vR(i,e,t,n){var s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=lv(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(wR(c));for(s.sort(_R),r=0;r<s.length;r++)t=yR(s[r],t);return t}function _R(i,e){return i.x-e.x}function yR(i,e){var t=xR(i,e);if(!t)return e;var n=hv(t,i);return sr(n,n.next),sr(t,t.next)}function xR(i,e){var t=e,n=i.x,s=i.y,r=-1/0,a;do{if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){var o=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(o<=n&&o>r&&(r=o,a=t.x<t.next.x?t:t.next,o===n))return a}t=t.next}while(t!==e);if(!a)return null;var l=a,c=a.x,u=a.y,d=1/0,h;t=a;do n>=t.x&&t.x>=c&&n!==t.x&&zr(s<u?n:r,s,c,u,s<u?r:n,s,t.x,t.y)&&(h=Math.abs(s-t.y)/(n-t.x),so(t,i)&&(h<d||h===d&&(t.x>a.x||t.x===a.x&&bR(a,t)))&&(a=t,d=h)),t=t.next;while(t!==l);return a}function bR(i,e){return Wt(i.prev,i,e.prev)<0&&Wt(e.next,i,i.next)<0}function SR(i,e,t,n){var s=i;do s.z===0&&(s.z=Yu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,MR(s)}function MR(i){var e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Yu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function wR(i){var e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function zr(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function TR(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ER(i,e)&&(so(i,e)&&so(e,i)&&AR(i,e)&&(Wt(i.prev,i,e.prev)||Wt(i,e.prev,e))||xh(i,e)&&Wt(i.prev,i,i.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function xh(i,e){return i.x===e.x&&i.y===e.y}function cv(i,e,t,n){var s=_l(Wt(i,e,t)),r=_l(Wt(i,e,n)),a=_l(Wt(t,n,i)),o=_l(Wt(t,n,e));return!!(s!==r&&a!==o||s===0&&vl(i,t,e)||r===0&&vl(i,n,e)||a===0&&vl(t,i,n)||o===0&&vl(t,e,n))}function vl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function _l(i){return i>0?1:i<0?-1:0}function ER(i,e){var t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&cv(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function so(i,e){return Wt(i.prev,i,i.next)<0?Wt(i,e,i.next)>=0&&Wt(i,i.prev,e)>=0:Wt(i,e,i.prev)<0||Wt(i,i.next,e)<0}function AR(i,e){var t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function hv(i,e){var t=new Zu(i.i,i.x,i.y),n=new Zu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Lm(i,e,t,n){var s=new Zu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ro(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Zu(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}yh.deviation=function(i,e,t,n){var s=e&&e.length,r=s?e[0]*t:i.length,a=Math.abs(Ku(i,0,r,t));if(s)for(var o=0,l=e.length;o<l;o++){var c=e[o]*t,u=o<l-1?e[o+1]*t:i.length;a-=Math.abs(Ku(i,c,u,t))}var d=0;for(o=0;o<n.length;o+=3){var h=n[o]*t,f=n[o+1]*t,p=n[o+2]*t;d+=Math.abs((i[h]-i[p])*(i[f+1]-i[h+1])-(i[h]-i[f])*(i[p+1]-i[h+1]))}return a===0&&d===0?0:Math.abs((d-a)/a)};function Ku(i,e,t,n){for(var s=0,r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}yh.flatten=function(i){for(var e=i[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,s=0;s<i.length;s++){for(var r=0;r<i[s].length;r++)for(var a=0;a<e;a++)t.vertices.push(i[s][r][a]);s>0&&(n+=i[s-1].length,t.holes.push(n))}return t};var Um;(i=>{function e(s){let r=s.slice();return r.sort(i.POINT_COMPARATOR),i.makeHullPresorted(r)}i.makeHull=e;function t(s){if(s.length<=1)return s.slice();let r=[];for(let o=0;o<s.length;o++){const l=s[o];for(;r.length>=2;){const c=r[r.length-1],u=r[r.length-2];if((c.x-u.x)*(l.y-u.y)>=(c.y-u.y)*(l.x-u.x))r.pop();else break}r.push(l)}r.pop();let a=[];for(let o=s.length-1;o>=0;o--){const l=s[o];for(;a.length>=2;){const c=a[a.length-1],u=a[a.length-2];if((c.x-u.x)*(l.y-u.y)>=(c.y-u.y)*(l.x-u.x))a.pop();else break}a.push(l)}return a.pop(),r.length==1&&a.length==1&&r[0].x==a[0].x&&r[0].y==a[0].y?r:r.concat(a)}i.makeHullPresorted=t;function n(s,r){return s.x<r.x?-1:s.x>r.x?1:s.y<r.y?-1:s.y>r.y?1:0}i.POINT_COMPARATOR=n})(Um||(Um={}));new Qi;new nt;const ba=new P;function Jn(i,e,t,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;ba.copy(e),ba[n]=0,ba.normalize();const c=.5*a/(a+o),u=1-ba.angleTo(i)/l;return Math.sign(ba[t])===1?u*c:o/(a+o)+c+c*(1-u)}class bh extends Ms{constructor(e=1,t=1,n=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new P,c=new P,u=new P(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,v=new P,g=.5/a;for(let m=0,_=0;m<d.length;m+=3,_+=2)switch(l.fromArray(d,m),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),d[m+0]=u.x*Math.sign(l.x)+c.x*r,d[m+1]=u.y*Math.sign(l.y)+c.y*r,d[m+2]=u.z*Math.sign(l.z)+c.z*r,h[m+0]=c.x,h[m+1]=c.y,h[m+2]=c.z,Math.floor(m/p)){case 0:v.set(1,0,0),f[_+0]=Jn(v,c,"z","y",r,n),f[_+1]=1-Jn(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),f[_+0]=1-Jn(v,c,"z","y",r,n),f[_+1]=1-Jn(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),f[_+0]=1-Jn(v,c,"x","z",r,e),f[_+1]=Jn(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),f[_+0]=1-Jn(v,c,"x","z",r,e),f[_+1]=1-Jn(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),f[_+0]=1-Jn(v,c,"x","y",r,e),f[_+1]=1-Jn(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),f[_+0]=Jn(v,c,"x","y",r,e),f[_+1]=1-Jn(v,c,"y","x",r,t);break}}static fromJSON(e){return new bh(e.width,e.height,e.depth,e.segments,e.radius)}}var CR=bt("<!><!>",1),RR=bt("<!> <!>",1);function IR(i,e){vn(e,!1);let t=Xe(e,"position",24,()=>[0,0,0]);const n=new bh(1.08,.28,.62,8,.09);Ji(),_t.Group(i,{get position(){return t()},children:(s,r)=>{var a=RR(),o=nn(a);_t.Mesh(o,{children:(c,u)=>{var d=CR(),h=nn(d);_t.BoxGeometry(h,{args:[.82,.16,.44]});var f=tt(h);_t.MeshBasicMaterial(f,{color:"#bff8ff"}),ot(c,d)},$$slots:{default:!0}});var l=tt(o,2);_t.Mesh(l,{get geometry(){return n},children:(c,u)=>{_t.MeshPhysicalMaterial(c,{color:"#eafcff",emissive:"#43d9ef",emissiveIntensity:.18,metalness:.08,roughness:.1,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:2})},$$slots:{default:!0}}),ot(s,a)},$$slots:{default:!0}}),_n()}var PR=bt("<!><!>",1),DR=bt("<!> <!>",1);function yl(i,e){vn(e,!1);const t=lt();let n=Xe(e,"color",8),s=Xe(e,"position",24,()=>[0,0,0]),r=Xe(e,"rotation",24,()=>[0,0,0]),a=Xe(e,"scale",8,1),o=Xe(e,"glow",8,.28);const l={cyan:"#30e7ff",pink:"#ff4aa2",yellow:"#ffe15b",green:"#63f58b",purple:"#aa66ff",orange:"#ff8a35",blue:"#4d7cff",wild:"#ffffff"},c=new bh(.94,.42,.94,8,.1);zt(()=>Te(n()),()=>{ge(t,l[n()])}),Li(),Ji(),_t.Group(i,{get position(){return s()},get rotation(){return r()},get scale(){return a()},children:(u,d)=>{var h=DR(),f=nn(h);_t.Mesh(f,{children:(v,g)=>{var m=PR(),_=nn(m);_t.BoxGeometry(_,{args:[.72,.25,.72]});var b=tt(_);_t.MeshBasicMaterial(b,{get color(){return C(t)},transparent:!0,get opacity(){return o()}}),ot(v,m)},$$slots:{default:!0}});var p=tt(f,2);_t.Mesh(p,{get geometry(){return c},castShadow:!0,receiveShadow:!0,children:(v,g)=>{_t.MeshPhongMaterial(v,{get color(){return C(t)},specular:"#ffffff",shininess:90})},$$slots:{default:!0}}),ot(u,h)},$$slots:{default:!0}}),_n()}function uv(i,e,t,n,s){const r=new Map(t.filter(v=>i.includes(v.playerId)).map(v=>[v.playerId,v])),a=i.filter(v=>!r.has(v)),o=i.length===1?r.size===1:r.size>=i.length-1;if(o)for(const v of a)r.set(v,{playerId:v,result:"cleared",tick:Number.MAX_SAFE_INTEGER,score:0,misses:0,seat:i.indexOf(v)});const l=[...r.values()].sort((v,g)=>(v.result==="cleared"?0:1)-(g.result==="cleared"?0:1)||v.tick-g.tick||g.score-v.score||v.misses-g.misses||v.seat-g.seat),c=Object.fromEntries(i.map(v=>[v,0]));o&&l.forEach((v,g)=>c[v.playerId]=Math.max(0,i.length-1-g));const u=Object.fromEntries(i.map(v=>[v,(e[v]??0)+c[v]])),d=Math.max(...Object.values(u)),h=o&&s>=2?i.filter(v=>u[v]===d):[],f=n.filter(v=>i.includes(v)),p=o&&s>=2;return{playerIds:i,terminalPlayerIds:[...r.keys()],readyPlayerIds:f,finished:o,winnerId:p?h.length===1?h[0]:void 0:l[0]?.playerId,winnerIds:h,allReady:o&&i.every(v=>f.includes(v)),round:s,matchComplete:p,roundPoints:c,scores:u}}var Ur=bt("<!><!>",1),LR=bt("<!><!> <!><!><!><!><!> <!> <!> <!> <!> <!> <!><!> <!> <!> <!> <!>",1),UR=bt('<button class="svelte-1y6lvup"></button>'),NR=bt('<div class="lanes svelte-1y6lvup"></div>'),OR=bt("<button> </button>"),FR=bt('<strong class="countdown svelte-1y6lvup"> </strong>'),kR=bt('<div data-ramp-direction="far-to-player" data-roll-direction="edge-over-edge-toward-player" data-paddle-position="player-edge" data-bin-position="below-paddle" data-bin-layout="vertical-stacks"><!> <!><!><!></div>');function SI(i,e){vn(e,!1);const t=lt();let n=Xe(e,"state",8),s=Xe(e,"compact",8,!1),r=Xe(e,"label",8,"Stax ramp"),a=Xe(e,"selectLane",8,void 0),o=Xe(e,"onChainCue",8,void 0),l=lt(!1);const c=j=>(j-2)*1.15,u=.13,d=.72,h=-.52,f=.09,p=-4.35,v=3.55,g=4.08,m=.2,_=.42,b=-1.78,y=5.35,w=-2.11,M=j=>d+f/Math.cos(u)-(j-h)*Math.tan(u),A=(j,ne=!1)=>{const pe=Math.min(1,j/(ne?360:C(t))),U=ne?1-pe:pe,Ge=p+U*(v-p),We=(ne?-1:1)*j*.06+u,R=.21*Math.abs(Math.cos(We))+.47*Math.abs(Math.sin(We));return{z:Ge,y:M(Ge)+R+.015,roll:We}},x=41,T=30,I=24,D=22;let k=lt([]),L,V=-1,O=lt(0),N=0,F=!1,z=new Map,W=[],ie=0;const Q=j=>Math.atan2(Math.sin(j),Math.cos(j)),re=j=>j+(Math.PI-(j%Math.PI+Math.PI)%Math.PI)%Math.PI,Pe=()=>{z=new Map(n().ramp.map(j=>[j.id,{color:j.color,lane:j.lane,roll:A(j.progress,j.returning).roll}])),W=n().paddle.map(j=>({...j})),n().columns.map(j=>j.length),ie=n().placements};function dt(){if(!F||n().phase==="countdown"){ge(k,[]),L=void 0,V=-1,ge(O,n().tick),N=n().tick,F=!0,Pe();return}if(ge(O,C(O)+Math.min(1,Math.max(0,n().tick-N))),N=n().tick,ge(k,C(k).filter(U=>C(O)-U.startedTick<U.durationTicks)),L){const U=C(O)-L.startedTick,Ge=x+T+L.waves.length*(I+D);if(U>=Ge)L=void 0;else{const We=Math.floor(Math.max(0,U-x-T)/(I+D));U>=x+T&&We<L.waves.length&&We>=L.cued&&(o()?.(),L.cued=We+1)}}const j=new Set(n().paddle.map(U=>U.id));for(const[U,Ge]of z)n().ramp.some(We=>We.id===U)||ge(k,[...C(k),{id:U,color:Ge.color,kind:j.has(U)?"catch":"miss",lane:Ge.lane,startedTick:C(O),durationTicks:j.has(U)?25:54,roll:Q(Ge.roll)}]);const ne=W.find(U=>!n().paddle.some(Ge=>Ge.id===U.id)),pe=n().lastClearWaves.length&&n().placements!==V;if(n().placements>ie||pe){const U=n().paddleLane,Ge=(n().lastClearWaves[0]?.before[U]?.length??n().columns[U].length)-1,We=ne?.color??n().lastClearWaves[0]?.before[U]?.[Ge]??n().columns[U][Ge],R=ne?.id??-n().placements;We&&ge(k,[...C(k).filter(S=>S.id!==R),{id:R,color:We,kind:"place",lane:n().paddleLane,column:U,row:Ge,startedTick:C(O),durationTicks:x,roll:0}]),pe&&(L={startedTick:C(O),column:U,placedRow:Ge,waves:structuredClone(n().lastClearWaves),cued:0},V=n().placements)}Pe()}const at=(j,ne)=>C(k).some(pe=>pe.kind===j&&pe.id===ne),ee=j=>j?m-.35-(j-1)*_:m,_e=()=>{const j=C(k).find(U=>U.kind==="catch");if(!j)return ee(n().paddle.length);const ne=Math.max(0,Math.min(1,(C(O)-j.startedTick)/j.durationTicks)),pe=Math.max(0,(ne-.5)/.5);return ee(Math.max(0,n().paddle.length-1))+(ee(n().paddle.length)-ee(Math.max(0,n().paddle.length-1)))*(1-Math.pow(1-pe,3))},de=()=>{if(!L)return n().columns.flatMap((X,Z)=>X.map((fe,ye)=>({key:`rest-${Z}-${ye}`,color:fe,column:Z,y:b+ye*_,scale:1,glow:.28})));const j=C(O)-L.startedTick;if(j<x+T)return L.waves[0].before.flatMap((Z,fe)=>Z.map((ye,J)=>({key:`form-${fe}-${J}`,color:ye,column:fe,y:b+J*_,scale:fe===L?.column&&J===L.placedRow&&j<x?0:1,glow:.28})));const ne=j-x-T,pe=Math.min(L.waves.length-1,Math.floor(ne/(I+D))),U=ne%(I+D),Ge=L.waves[pe],We=new Set(Ge.cells.map(X=>`${X.column}:${X.row}`));if(U<I){const X=U/I,Z=1+.18*Math.sin(Math.PI*Math.min(1,X*2)),fe=X<.55?Z:Math.max(.05,1-(X-.55)/.45);return Ge.before.flatMap((ye,J)=>ye.map((se,Se)=>({key:`burst-${pe}-${J}-${Se}`,color:se,column:J,y:b+Se*_,scale:We.has(`${J}:${Se}`)?fe:1,glow:We.has(`${J}:${Se}`)?1:.28})))}const R=(U-I)/D,S=R*R*(3-2*R),G=[];for(let X=0;X<5;X++){let Z=0;for(let fe=0;fe<Ge.before[X].length;fe++)We.has(`${X}:${fe}`)||(G.push({key:`fall-${pe}-${X}-${fe}`,color:Ge.before[X][fe],column:X,y:b+(fe+(Z-fe)*S)*_,scale:1,glow:.28}),Z++)}return G},He=()=>{if(!L)return"";const j=C(O)-L.startedTick;return j<x?"placing":j<x+T?"settled":(j-x-T)%(I+D)<I?"burst":"fall"},je=j=>{const ne=Math.max(0,Math.min(1,(C(O)-j.startedTick)/j.durationTicks)),pe=1-Math.pow(1-ne,3);if(j.kind==="miss"){const G=A(C(t));return{position:[c(j.lane),G.y-4.8*ne*ne,G.z+2.8*ne],rotation:[j.roll+8*ne,0,.7*ne]}}if(j.kind==="catch"){const G=A(C(t)),X=G.y+(m-G.y)*pe+.16*Math.sin(Math.PI*ne),Z=re(j.roll);return{position:[c(j.lane),X,G.z+(g-G.z)*pe],rotation:[j.roll+(Z-j.roll)*pe,0,0]}}const U=.46,Ge=j.column??j.lane,We=j.row??0;if(ne<U){const G=ne/U;return{position:[c(j.lane)+(c(Ge)-c(j.lane))*G,m+.2*Math.sin(Math.PI*G),g+(y-g)*G],rotation:[Math.PI*G,0,0]}}const R=(ne-U)/(1-U),S=R*R;return{position:[c(Ge),m+(b+We*_-m)*S,y],rotation:[Math.PI,0,0]}};zt(()=>Te(n()),()=>{ge(t,e_(n().level).travel)}),zt(()=>Te(n()),()=>{n(),dt()}),Li(),Ji();var te=kR();let we;var Le=It(te);oC(Le,{dpr:[1,2],children:(j,ne)=>{var pe=LR(),U=nn(pe);Xm(U,()=>C(l),B=>{_t.PerspectiveCamera(B,{makeDefault:!0,position:[0,8.9,11.8],rotation:[-.65,0,0],fov:43})});var Ge=tt(U);{var We=B=>{rR(B,{enableDamping:!0,target:[0,.25,.4]})};un(Ge,B=>{a()&&C(l)&&B(We)})}var R=tt(Ge,2);_t.Color(R,{attach:"background",args:["#05050a"]});var S=tt(R);_t.AmbientLight(S,{intensity:.72});var G=tt(S);_t.DirectionalLight(G,{position:[5,10,7],intensity:4,color:"#fff0dd",castShadow:!0});var X=tt(G);_t.DirectionalLight(X,{position:[-8,5,-5],intensity:3,color:"#cceeff"});var Z=tt(X);_t.SpotLight(Z,{position:[0,8,-5],intensity:10,color:"#00ffcc",angle:.5,penumbra:.5,decay:0,distance:20});var fe=tt(Z,2);_t.Mesh(fe,{rotation:[.13,0,0],position:[0,.72,-.52],receiveShadow:!0,children:(B,ce)=>{var Y=Ur(),me=nn(Y);_t.BoxGeometry(me,{args:[6.3,.18,8.35]});var xe=tt(me);_t.MeshStandardMaterial(xe,{color:"#11182b",metalness:.28,roughness:.38}),ot(B,Y)},$$slots:{default:!0}});var ye=tt(fe,2);Cn(ye,0,()=>Array(6),ei,(B,ce,Y)=>{_t.Mesh(B,{rotation:[.13,0,0],position:[(Y-2.5)*1.15,.83,-.52],children:(me,xe)=>{var le=Ur(),ke=nn(le);_t.BoxGeometry(ke,{args:[.035,.035,8.2]});var Oe=tt(ke);_t.MeshBasicMaterial(Oe,{color:"#2c4777"}),ot(me,le)},$$slots:{default:!0}})});var J=tt(ye,2);Cn(J,1,()=>(Te(n()),Re(()=>n().ramp)),B=>B.id,(B,ce)=>{const Y=Gi(()=>(C(ce),Re(()=>A(C(ce).progress,C(ce).returning))));{let me=Gi(()=>(C(ce),Te(C(Y)),Re(()=>[c(C(ce).lane),C(Y).y,C(Y).z]))),xe=Gi(()=>(Te(C(Y)),Re(()=>[C(Y).roll,0,0])));yl(B,{get color(){return C(ce),Re(()=>C(ce).color)},get position(){return C(me)},get rotation(){return C(xe)}})}});var se=tt(J,2);_t.Mesh(se,{position:[0,w,5.35],receiveShadow:!0,children:(B,ce)=>{var Y=Ur(),me=nn(Y);_t.BoxGeometry(me,{args:[6.3,.18,1.45]});var xe=tt(me);_t.MeshStandardMaterial(xe,{color:"#0b1020",metalness:.22,roughness:.42}),ot(B,Y)},$$slots:{default:!0}});var Se=tt(se,2);Cn(Se,0,()=>Array(6),ei,(B,ce,Y)=>{_t.Mesh(B,{position:[(Y-2.5)*1.15,w+.105,5.35],children:(me,xe)=>{var le=Ur(),ke=nn(le);_t.BoxGeometry(ke,{args:[.025,.025,1.32]});var Oe=tt(ke);_t.MeshBasicMaterial(Oe,{color:"#263d68"}),ot(me,le)},$$slots:{default:!0}})});var qe=tt(Se,2);_t.Mesh(qe,{position:[0,w+.105,4.68],children:(B,ce)=>{var Y=Ur(),me=nn(Y);_t.BoxGeometry(me,{args:[5.75,.025,.035]});var xe=tt(me);_t.MeshBasicMaterial(xe,{color:"#263d68"}),ot(B,Y)},$$slots:{default:!0}});var Ie=tt(qe);_t.Mesh(Ie,{position:[0,w+.105,6.02],children:(B,ce)=>{var Y=Ur(),me=nn(Y);_t.BoxGeometry(me,{args:[5.75,.025,.035]});var xe=tt(me);_t.MeshBasicMaterial(xe,{color:"#263d68"}),ot(B,Y)},$$slots:{default:!0}});var Ae=tt(Ie,2);Cn(Ae,1,()=>Re(de),B=>B.key,(B,ce)=>{var Y=Gr(),me=nn(Y);{var xe=le=>{{let ke=Gi(()=>(C(ce),Re(()=>[c(C(ce).column),C(ce).y,y])));yl(le,{get color(){return C(ce),Re(()=>C(ce).color)},get position(){return C(ke)},get scale(){return C(ce),Re(()=>C(ce).scale)},get glow(){return C(ce),Re(()=>C(ce).glow)}})}};un(me,le=>{C(ce),Re(()=>C(ce).scale>0)&&le(xe)})}ot(B,Y)});var Ze=tt(Ae,2);{let B=Gi(()=>(Te(n()),Re(()=>[c(n().paddleLane),_e(),g])));IR(Ze,{get position(){return C(B)}})}var et=tt(Ze,2);Cn(et,1,()=>(Te(n()),Re(()=>n().paddle)),ei,(B,ce,Y)=>{var me=Gr(),xe=nn(me);{var le=Oe=>{{let Gt=Gi(()=>(Te(n()),Re(()=>[c(n().paddleLane),m-(n().paddle.length-1-Y)*_,g])));yl(Oe,{get color(){return C(ce),Re(()=>C(ce).color)},get position(){return C(Gt)}})}},ke=jt(()=>(C(ce),Re(()=>!at("catch",C(ce).id))));un(xe,Oe=>{C(ke)&&Oe(le)})}ot(B,me)});var ut=tt(et,2);Cn(ut,1,()=>C(k),B=>B.kind+B.id,(B,ce)=>{const Y=Gi(()=>(C(ce),Re(()=>je(C(ce)))));yl(B,{get color(){return C(ce),Re(()=>C(ce).color)},get position(){return Te(C(Y)),Re(()=>C(Y).position)},get rotation(){return Te(C(Y)),Re(()=>C(Y).rotation)}})}),ot(j,pe)},$$slots:{default:!0}});var ae=tt(Le,2);{var he=j=>{var ne=NR();Cn(ne,4,()=>Array(5),ei,(pe,U,Ge)=>{var We=UR();st(We,"aria-label",`Catch lane ${Ge+1}`),di("pointerdown",We,Wm(()=>a()?.(Ge))),ot(pe,We)}),yt(ne),ot(j,ne)};un(ae,j=>{a()&&!C(l)&&j(he)})}var ue=tt(ae);{var be=j=>{var ne=OR();let pe;var U=It(ne,!0);yt(ne),Yt(()=>{pe=jn(ne,1,"inspect svelte-1y6lvup",null,pe,{active:C(l)}),st(ne,"aria-label",C(l)?"Exit orbit view":"Inspect scene in orbit view"),st(ne,"aria-pressed",C(l)),ti(U,C(l)?"EXIT ORBIT":"ORBIT VIEW")}),di("click",ne,()=>ge(l,!C(l))),ot(j,ne)};un(ue,j=>{a()&&j(be)})}var Me=tt(ue);{var Qe=j=>{var ne=FR(),pe=It(ne,!0);yt(ne),Yt(U=>ti(pe,U),[()=>(Te(n()),Re(()=>Math.max(1,Math.ceil(n().countdown/60))))]),ot(j,ne)};un(Me,j=>{Te(n()),Re(()=>n().phase==="countdown")&&j(Qe)})}yt(te),Yt((j,ne,pe,U,Ge)=>{we=jn(te,1,"scene svelte-1y6lvup",null,we,{compact:s()}),st(te,"aria-label",r()),st(te,"data-tick",(Te(n()),Re(()=>n().tick))),st(te,"data-phase",(Te(n()),Re(()=>n().phase))),st(te,"data-resolution-phase",j),st(te,"data-paddle-lane",(Te(n()),Re(()=>n().paddleLane))),st(te,"data-paddle-count",(Te(n()),Re(()=>n().paddle.length))),st(te,"data-paddle-y",ne),st(te,"data-ramp-count",(Te(n()),Re(()=>n().ramp.length))),st(te,"data-leading-lane",(Te(n()),Re(()=>n().ramp[0]?.lane??""))),st(te,"data-leading-color",(Te(n()),Re(()=>n().ramp[0]?.color??""))),st(te,"data-leading-progress",(Te(n()),Re(()=>n().ramp[0]?.progress??""))),st(te,"data-leading-roll",pe),st(te,"data-column-counts",U),st(te,"data-misses",(Te(n()),Re(()=>n().misses))),st(te,"data-visual-transitions",Ge),st(te,"data-visual-progress",(C(k),C(O),Re(()=>C(k)[0]?C(O)-C(k)[0].startedTick:""))),st(te,"data-score",(Te(n()),Re(()=>n().score)))},[()=>Re(He),()=>Re(_e),()=>(Te(n()),Re(()=>n().ramp[0]?A(n().ramp[0].progress,n().ramp[0].returning).roll:"")),()=>(Te(n()),Re(()=>n().columns.map(j=>j.length).join(","))),()=>(C(k),Re(()=>C(k).map(j=>j.kind).join(",")))]),ot(i,te),_n()}function BR(i){if(!St(i)||!xt(i,["type","roomId","ruleset","rulesVersion","seed","tickRate","hostUid","audioOutput","members","players","settings","matchId","round","previousGameId","scores","serverTime"])||i.type!=="game/started"||i.ruleset!=="stax"||i.rulesVersion!=="stax/1"||i.tickRate!==60||!At(i.seed,0,4294967295)||!At(i.round,0,2)||!vt(i.matchId)||!vt(i.hostUid)||!vt(i.roomId)||!Ui(i.serverTime)||!St(i.members)||!St(i.players)||!St(i.scores)||!St(i.settings)||!xt(i.settings,["width","height","targetWins","matchRounds"])||i.settings.width!==5||i.settings.height!==5||i.settings.targetWins!==3||i.settings.matchRounds!==3||i.previousGameId!==void 0&&!vt(i.previousGameId)||i.audioOutput!=="cast"&&i.audioOutput!=="controllers")throw new Error("Invalid Stax start record.");const e=i.members,t=i.players,n=i.scores,s=Object.keys(t);if(s.length<1||s.length>4||!Object.entries(e).every(([r,a])=>vt(r)&&a===!0)||!Object.entries(t).every(([r,a])=>vt(r)&&e[r]===!0&&St(a)&&xt(a,["seat","level"])&&At(a.seat,0,3)&&At(a.level,0,20))||!xt(n,s)||!s.every(r=>At(n[r],0,12)))throw new Error("Invalid Stax roster or scores.");return i}function dv(i){if(!St(i)||!xt(i,["type","playerId","tick","result","score","misses","seat","stateHash","serverTime"])||i.type!=="player/terminal"||!vt(i.playerId)||!At(i.tick,0)||!["cleared","lost"].includes(String(i.result))||!At(i.score,0,1e9)||!At(i.misses,0,5)||!At(i.seat,0,3)||typeof i.stateHash!="string"||!/^s1-[0-9a-f]{8}$/.test(i.stateHash)||!Ui(i.serverTime))throw new Error("Invalid Stax terminal record.");return i}function zR(i,e,t=!1){const n=cd(i,e,t),s=St(n.payload)?n.payload:{};if(n.type==="input/move"&&xt(s,["dx"])&&(s.dx===-1||s.dx===1))return{commandId:i,...n,type:n.type,payload:{dx:s.dx}};if(["input/place","input/throw-back","input/accelerate-start","input/accelerate-end","input/restart"].includes(n.type)&&xt(s,[]))return{commandId:i,...n,type:n.type,payload:{}};if(n.type==="progress/tick"&&xt(s,["phase","stateHash"])&&["countdown","playing","cleared","lost"].includes(String(s.phase))&&typeof s.stateHash=="string"&&/^s1-[0-9a-f]{8}$/.test(s.stateHash))return{commandId:i,...n,type:n.type,payload:{phase:s.phase,stateHash:s.stateHash}};throw new Error("Invalid Stax controller payload.")}const Qr=BR,yc=zR,fv=(i,e)=>t_(i.seed,e),pv=i_,mv=n_,gv=Hm,VR=(i,e,t,n)=>s_(i,e,t,n);async function MI(i){if(!ve)throw new Error("Firebase unavailable.");return Qr((await Mt(Ne(ve,`games/${i}/start`))).val())}function GR(i,e,t){if(!ve)throw new Error("Firebase unavailable.");let n,s=[],r=[];const a=[],o=()=>{n&&e(uv(Object.keys(n.players),n.scores??{},s,r,n.round))};return Mt(Ne(ve,`games/${i}/start`)).then(l=>{n=Qr(l.val()),a.push(si(Ne(ve,`games/${i}/terminals`),c=>{s=[],c.forEach(u=>{const d=dv(u.val());d.playerId===u.key&&Object.hasOwn(n.players,u.key)&&s.push(d)}),o()},t),si(Ne(ve,`games/${i}/rematch/ready`),c=>{r=[],c.forEach(u=>{u.val()?.playerId===u.key&&Object.hasOwn(n.players,u.key)&&r.push(u.key)}),o()},t)),o()}).catch(l=>t(l instanceof Error?l:new Error(String(l)))),()=>a.forEach(l=>l())}const wI=(i,e)=>Ac(i,e);async function HR(i){if(!ve)throw new Error("Firebase unavailable.");const[e,t]=await Promise.all([Mt(Ne(ve,`games/${i}/start`)),Mt(Ne(ve,`games/${i}/terminals`))]),n=Qr(e.val()),s=[];t.forEach(a=>{s.push(dv(a.val()))});const r=uv(Object.keys(n.players),n.scores,s,[],n.round);return Cc(i,Qr,a=>{const o=Object.fromEntries(Object.keys(a.players).map(c=>[c,r.scores[c]??0])),l=r.matchComplete;return{advance:!l,scores:l?Object.fromEntries(Object.keys(a.players).map(c=>[c,0])):o}})}function TI(i,e){if(!ii?.currentUser||!ve)throw new Error("Firebase unavailable.");const t=ii.currentUser.uid,n=new Ss(Gm.tickRate),s=ud("stax",i,t,"outbox");let r,a,o=0,l=0,c=!1,u=!1,d=!1,h=!1,f=0,p=-1,v,g,m,_=!1,b=[],y=()=>{},w=!1;const M=uo(localStorage,s,F=>{if(!F||typeof F!="object"||typeof F.commandId!="string")throw new Error("Invalid Stax Match outbox.");const{commandId:z,...W}=F;return yc(z,W,!0)}),A=F=>e({playerId:t,tick:o,ready:c,state:r?structuredClone(r):void 0,lifecycle:m,audioOutput:g,error:F,lastCommand:v,ownershipConflict:_,opponents:b.map(z=>({...z,state:structuredClone(z.state)}))}),x=new Rc(ve,`games/${i}/players/${t}/writer`,()=>{_=!0,c=!1,cancelAnimationFrame(f),A("This controller was taken over by another tab.")}),T=GR(i,F=>{m=F,F.finished&&cancelAnimationFrame(f),F.allReady&&!h&&(h=!0,HR(i).catch(z=>{h=!1,A(z instanceof Error?z.message:String(z))})),A()},F=>A(F.message)),I=new Ba({initial:M,order:(F,z)=>F.clientSeq-z.clientSeq,identify:F=>F.commandId,persist:F=>fo(localStorage,s,F),deliver:async F=>{if(!c)throw new Error("Controller is not ready.");const{commandId:z,...W}=F;await Mn(Ne(ve,`games/${i}/players/${t}/records/${z}`),{...W,serverTime:wn()})},failed:F=>A(F instanceof Error?F.message:String(F))}),D=F=>{const W={commandId:Hr(Ne(ve,`games/${i}/players/${t}/records`)).key,playerId:t,epochId:x.epochId,clientSeq:++l,tick:o,...F};return I.enqueue(W),W},k=(F=!1)=>{!r||!F&&o-p<15||(D({type:"progress/tick",payload:{phase:r.phase,stateHash:gv(r)}}),p=o)},L=()=>{!r||w||!["cleared","lost"].includes(r.phase)||!a||(w=!0,Mn(Ne(ve,`games/${i}/terminals/${t}`),{type:"player/terminal",playerId:t,tick:r.tick,result:r.phase,score:r.score,misses:r.misses,seat:a.players[t].seat,stateHash:Hm(r),serverTime:wn()}).catch(F=>{w=!1,A(F.message)}))},V=F=>{if(!(u||d||!c||!r||r.phase==="cleared"||m?.terminalPlayerIds.includes(t))){for(let z=n.consume(F);z>0;z--)pv(r),o=r.tick;k(),L(),A(),f=requestAnimationFrame(V)}},O=si(Ne(ve,`games/${i}/start`),async F=>{if(!c)try{if(a=Qr(F.val()),!a.players[t])throw new Error("Player is not part of this Stax Match game.");if(g=a.audioOutput,!await x.claim())throw _=!0,new Error("This controller is already active in another tab.");_=!1,y(),y=WR(i,Q=>{b=Q.filter(re=>re.playerId!==t),A()},Q=>A(Q.message));const z=await Mt(Ne(ve,`games/${i}/players/${t}/records`)),W=new Map;z.forEach(Q=>{const re=yc(Q.key,Q.val());W.set(re.commandId,re)});for(const Q of I.values())W.set(Q.commandId,Q);const ie=[...W.values()].sort((Q,re)=>Q.clientSeq-re.clientSeq);r=VR(fv(a,a.players[t].level),Math.max(0,...ie.map(Q=>Q.tick)),ie,a.seed),o=r.tick,l=Math.max(0,...ie.map(Q=>Q.clientSeq)),await Mn(Ne(ve,`games/${i}/players/${t}/epochs/${x.epochId}`),{clientId:x.clientId,startedFromTick:o,startedFromCommandSeq:l,serverTime:wn()}),c=!0,I.flush(),k(!0),A(),r.phase==="cleared"||r.phase==="lost"?L():f=requestAnimationFrame(V)}catch(z){A(z instanceof Error?z.message:String(z))}},F=>A(F.message)),N=()=>{I.flush()};return window.addEventListener("online",N),{command(F){!c||!r||r.phase!=="playing"||!a||(D(F),mv(r,F,a.seed),o=r.tick,v=`${F.type} · tick ${o}`,r.phase==="cleared"&&(k(!0),L()),A())},suspend(){!c||d||(d=!0,cancelAnimationFrame(f),n.reset(),k(!0))},resume(){!c||!d||(d=!1,n.reset(),f=requestAnimationFrame(V))},async takeOver(){await x.takeOver()&&(_=!1,c=!0,d=!1,I.flush(),f=requestAnimationFrame(V),A())},destroy(){k(!0),u=!0,O(),T(),y(),cancelAnimationFrame(f),window.removeEventListener("online",N),I.destroy(),x.release()}}}function WR(i,e,t){if(!ve)throw new Error("Firebase unavailable.");let n=!1,s=0,r;const a=new Ss(Gm.tickRate),o=new Map,l=new Map,c=[],u={clone:h=>structuredClone(h),tick:h=>h.tick,advanceTo:(h,f)=>{for(;h.tick<f&&h.phase!=="cleared"&&h.phase!=="lost";)pv(h)},apply:(h,f)=>{f.type!=="progress/tick"&&mv(h,f,r.seed)},hash:gv,phase:h=>h.phase,terminal:h=>h.phase==="cleared"||h.phase==="lost",progress:h=>h.type==="progress/tick"?h.payload:void 0},d=()=>e([...l].map(([h,f])=>{const p=f.snapshot();return{playerId:h,tick:p.displayTick,controllerTick:p.controllerTick,lag:p.lag,state:p.state,hashMatches:p.hashMatches}}));return Mt(Ne(ve,`games/${i}/start`)).then(async h=>{r=Qr(h.val());let f=0;if(await Promise.all(Object.keys(r.players).map(async v=>{const g=await Mt(Ne(ve,`games/${i}/players/${v}/records`)),m=[];g.forEach(_=>{m.push(yc(_.key,_.val()))}),m.sort((_,b)=>_.clientSeq-b.clientSeq),o.set(v,m);for(const _ of m)_.type==="progress/tick"&&(f=Math.max(f,_.tick))})),n)return;for(const v of Object.keys(r.players)){const g=new Ec(u,fv(r,r.players[v].level),f);l.set(v,g);for(const m of o.get(v)??[])g.receive(m);c.push(ji(Ne(ve,`games/${i}/players/${v}/records`),m=>{try{g.receive(yc(m.key,m.val())),d()}catch(_){t(_ instanceof Error?_:new Error(String(_)))}},t))}const p=v=>{if(!n){for(let g=a.consume(v);g>0;g--)for(const m of l.values())m.advance();d(),s=requestAnimationFrame(p)}};d(),s=requestAnimationFrame(p)}).catch(h=>t(h instanceof Error?h:new Error(String(h)))),()=>{n=!0,cancelAnimationFrame(s),c.forEach(h=>h())}}export{fI as C,tI as G,nI as M,sI as P,dI as Q,vI as S,lI as T,rI as a,iI as b,yy as c,vy as d,oI as e,pI as f,A_ as g,zy as h,ky as i,uI as j,MI as k,WR as l,GR as m,SI as n,aI as o,hI as p,gI as q,cI as r,ly as s,mI as t,TI as u,wI as v};
