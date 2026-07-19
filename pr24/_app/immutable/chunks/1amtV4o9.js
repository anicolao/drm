import{b as Mv,a as st,s as ti,e as di,f as xt,c as ro,o as wv}from"./DnpGVXjh.js";import{i as Ji}from"./D67UkUS9.js";import{g as Ev,w as Nr,o as xc,a as Tv,r as Av,d as Cv}from"./C6kg8FEX.js";import{V as Om,W as Rv,h as _u,b as Iv,bd as Pv,be as Af,ak as Dv,at as Cf,ax as Rf,as as If,a as Pf,bf as Lv,r as Uv,p as gn,s as de,g as P,C as Vt,y as Ae,E as Li,B as tn,i as Je,d as vn,m as lt,f as It,j as _t,t as Yt,bg as hn,u as ze,F as Gi,bh as _i,ai as mi,w as vs,bi as oi,aj as nn,bj as Sl,al as Ju,am as us,q as dn,G as ju}from"./CIr3rdDo.js";import{B as Fm,p as Ge,i as Sn,r as ao,s as Qu,a as Nv,b as Df}from"./D8aSsr8h.js";import{s as Ov}from"./DgLGWV0U.js";import{L as Fv,e as Cn,i as kn,b as ed,P as At,r as kv,a as ra,p as Mh,d as Bv,f as zv,h as wo,j as Vv,T as km,k as yu,l as Bm,m as zm,n as Vm,o as Gv,q as Lf,Q as Gm,t as Hv,u as Wv,v as Xv,w as qv,x as $v,y as Yv,z as Zv,A as Kv,B as Jv,D as jv,E as Qv,S as Hm,F as Wm,G as e_,H as t_,I as n_,J as i_}from"./iaXYIg0N.js";import{w as s_,s as at,r as Uf,d as Qn,j as ii,k as Nf,l as ue,x as St,o as De,y as Ml,m as Mn,n as wn,p as r_,t as a_,q as o_,z as ji,A as Of,B as si,C as Gr}from"./BLT3cNc7.js";import{b as wl}from"./MUYbU8Wl.js";import{b as Ff,p as Xm}from"./CUbnAJcE.js";function bc(i,e,...t){var n=new Fm(i);Om(()=>{const s=e()??null;n.ensure(s,s&&(r=>s(r,...t)))},Rv)}const l_=Symbol("NaN");function c_(i,e,t){_u&&Iv();var n=new Fm(i),s=!Pv();Om(()=>{var r=e();r!==r&&(r=l_),s&&r!==null&&typeof r=="object"&&(r={}),n.ensure(r,t)})}function xu(i,e,t,n){var s=i[Af];if(_u||s!==e){var r=s_(e);(!_u||r!==i.getAttribute("style"))&&(r==null?i.removeAttribute("style"):i.style.cssText=r),i[Af]=e}return n}function td(i,e){var t=Pf,n=Rf,s=i();const r=Nr(s,a=>{var o=s!==i(),l,c=Rf,u=Pf;Cf(n),If(t);try{l=Lv(()=>{Uv(()=>{const d=i();o&&a(d)})})}finally{Cf(c),If(u)}return o=!0,l});return e?{set:e,update:a=>e(a(i())),subscribe:r.subscribe}:{subscribe:r.subscribe}}function Sc(i){let e;const t=Mv(s=>{let r=!1;const a=i.subscribe(o=>{e=o,r&&s()});return r=!0,a});function n(){return Dv()?(t(),e):Ev(i)}return"set"in i?{get current(){return n()},set current(s){i.set(s)}}:{get current(){return n()}}}let fr;var h_=xt('<section class="mixer svelte-4qorxz" aria-label="Audio settings"><div class="svelte-4qorxz"><strong>MUSIC</strong><button class="svelte-4qorxz"> </button></div> <label class="svelte-4qorxz">Music volume <input aria-label="Music volume" type="range" min="0" max="100" class="svelte-4qorxz"/></label> <div class="svelte-4qorxz"><strong>EFFECTS</strong><button class="svelte-4qorxz"> </button></div> <label class="svelte-4qorxz">Effects volume <input aria-label="Effects volume" type="range" min="0" max="100" class="svelte-4qorxz"/></label></section>'),u_=xt('<div class="audio-controls svelte-4qorxz"><button class="mute svelte-4qorxz"> </button> <button class="settings-toggle svelte-4qorxz" aria-label="Audio settings">MIX</button> <!></div>'),d_=xt('<button class="start svelte-4qorxz" aria-label="Enable game audio">♪ TAP FOR SOUND</button>'),f_=xt("<!> <!>",1);function oo(i,e){gn(e,!1);let t=Ge(e,"enabled",8,!1),n=Ge(e,"loopUrl",8,void 0),s=Ge(e,"loopKey",8,""),r=Ge(e,"cueUrl",8,void 0),a=Ge(e,"cueSignal",8,0);const o=Symbol("audio-host");let l,c,u=lt(!1),d=lt(!1),h=lt(!1),f=lt(42),p=lt(62),v=lt(!1),g=lt(!1),m="",y=0,b=!1;function _(F){F&&(F.pause(),F.currentTime=0)}function w(){_(l),fr?.owner===o&&(fr=void 0),l=void 0,m=""}async function M(F){try{return await F.play(),de(v,!1),!0}catch{return de(v,!0),!1}}function A(F){fr&&fr.owner!==o&&_(fr.audio),fr={owner:o,audio:F}}function x(){localStorage.setItem("drm-audio-muted",String(P(u))),localStorage.setItem("drm-audio-settings",JSON.stringify({musicMuted:P(d),effectsMuted:P(h),musicVolume:P(f),effectsVolume:P(p)}))}function E(){if(b){if(!t()||P(u)){w(),_(c),c=void 0,de(v,!1),y=a();return}!P(d)&&n()?m!==s()||!l?(w(),l=new Audio(n()),l.loop=!0,l.preload="auto",l.volume=P(f)/100,m=s(),A(l),M(l)):l.volume=P(f)/100:w(),!P(h)&&r()&&a()>y&&(_(c),c=new Audio(r()),c.preload="auto",c.volume=P(p)/100,M(c)),y=a()}}async function C(){l&&(A(l),await M(l)),c&&await M(c)}function D(){de(u,!P(u)),x(),E()}function k(){x(),E()}xc(()=>{de(u,localStorage.getItem("drm-audio-muted")==="true");try{const H=JSON.parse(localStorage.getItem("drm-audio-settings")??"{}");de(d,H.musicMuted===!0),de(h,H.effectsMuted===!0),Number.isFinite(H.musicVolume)&&de(f,Math.max(0,Math.min(100,H.musicVolume))),Number.isFinite(H.effectsVolume)&&de(p,Math.max(0,Math.min(100,H.effectsVolume)))}catch{}b=!0,E();const F=()=>{P(v)&&C()};return window.addEventListener("pointerdown",F,!0),window.addEventListener("keydown",F,!0),()=>{window.removeEventListener("pointerdown",F,!0),window.removeEventListener("keydown",F,!0)}}),Tv(()=>{w(),_(c)}),Vt(()=>(Ae(t()),Ae(n()),Ae(s()),Ae(r()),Ae(a()),P(d),P(h),P(f),P(p)),()=>{t(),n(),s(),r(),a(),P(d),P(h),P(f),P(p),E()}),Li(),Ji();var L=f_(),B=tn(L);{var O=F=>{var H=u_(),ee=It(H),K=It(ee);_t(ee);var te=Je(ee,2),Ce=Je(te,2);{var ct=it=>{var X=h_(),ce=It(X),J=Je(It(ce)),pe=It(J,!0);_t(J),_t(ce);var Ne=Je(ce,2),le=Je(It(Ne));Uf(le),_t(Ne);var me=Je(Ne,2),Me=Je(It(me)),ne=It(Me,!0);_t(Me),_t(me);var ae=Je(me,2),oe=Je(It(ae));Uf(oe),_t(ae),_t(X),Yt(()=>{at(J,"aria-label",P(d)?"Unmute music":"Mute music"),at(J,"aria-pressed",P(d)),ti(pe,P(d)?"OFF":"ON"),at(Me,"aria-label",P(h)?"Unmute effects":"Mute effects"),at(Me,"aria-pressed",P(h)),ti(ne,P(h)?"OFF":"ON")}),di("click",J,()=>{de(d,!P(d)),k()}),Ff(le,()=>P(f),ge=>de(f,ge)),di("input",le,k),di("click",Me,()=>{de(h,!P(h)),k()}),Ff(oe,()=>P(p),ge=>de(p,ge)),di("input",oe,k),st(it,X)};Sn(Ce,it=>{P(g)&&it(ct)})}_t(H),Yt(()=>{at(ee,"aria-label",P(u)?"Unmute game audio":"Mute game audio"),at(ee,"aria-pressed",P(u)),ti(K,`♫ ${P(u)?"SOUND OFF":"SOUND ON"}`),at(te,"aria-expanded",P(g))}),di("click",ee,D),di("click",te,()=>de(g,!P(g))),st(F,H)};Sn(B,F=>{t()&&F(O)})}var U=Je(B,2);{var N=F=>{var H=d_();di("click",H,C),st(F,H)};Sn(U,F=>{t()&&P(v)&&!P(u)&&F(N)})}st(i,L),vn()}const p_=""+new URL("../assets/05. Chill.C8foJhTx.mp3",import.meta.url).href,m_=""+new URL("../assets/06. Chill Clear.-oz0izif.mp3",import.meta.url).href,g_=""+new URL("../assets/03. Fever.DOR2z6Jo.mp3",import.meta.url).href,v_=""+new URL("../assets/04. Fever Clear.DCfLhPTS.mp3",import.meta.url).href,kf=""+new URL("../assets/12. Combo Fanfare 1.CrabW0Of.mp3",import.meta.url).href;function tI(i,e){gn(e,!1);const t=lt(),n=lt();let s=Ge(e,"state",8),r=Ge(e,"enabled",8,!1),a=Ge(e,"rainSignal",8,0),o=lt(),l=lt(0),c=lt(0),u=lt();const d=h=>h%2?{music:g_,clear:v_}:{music:p_,clear:m_};xc(()=>{const h=()=>{de(u,kf),hn(c)},f=p=>{de(u,d(p.detail).clear),hn(c)};return window.addEventListener("drm-rain",h),window.addEventListener("drm-clear",f),()=>{window.removeEventListener("drm-rain",h),window.removeEventListener("drm-clear",f)}}),Vt(()=>Ae(s()),()=>{de(t,s()?.phase==="playing"?d(s().level).music:void 0)}),Vt(()=>Ae(s()),()=>{de(n,s()?`pill:${s().level}`:"")}),Vt(()=>(Ae(s()),Ae(a()),P(l),P(c),P(o)),()=>{s()&&(a()>P(l)?(de(u,kf),hn(c)):s().phase==="countdown"&&P(o)==="playing"&&(de(u,d(s().level).clear),hn(c)),de(l,a()),de(o,s().phase))}),Li(),Ji(),oo(i,{get enabled(){return r()},get loopUrl(){return P(t)},get loopKey(){return P(n)},get cueUrl(){return P(u)},get cueSignal(){return P(c)}}),vn()}var __=xt('<button class="svelte-e6s17f"> </button>'),y_=xt('<small class="svelte-e6s17f"> </small>'),x_=xt('<div class="match-result svelte-e6s17f" role="status" aria-live="polite"><h1 class="svelte-e6s17f"> </h1><!> <!> <!> <!></div>');function nI(i,e){gn(e,!1);let t=Ge(e,"title",8,"GAME OVER"),n=Ge(e,"action",8,"PLAY AGAIN"),s=Ge(e,"ready",8,0),r=Ge(e,"total",8,0),a=Ge(e,"disabled",8,!1),o=Ge(e,"interactive",8,!0),l=Ge(e,"level",8,0),c=Ge(e,"changeLevel",8,()=>{}),u=Ge(e,"activate",8,()=>{});xc(()=>{const w=M=>{!a()&&M.key.toLowerCase()==="a"&&!M.repeat&&(M.preventDefault(),u()())};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)}),Ji();var d=x_(),h=It(d),f=It(h,!0);_t(h);var p=Je(h);Ov(p,e,"default",{});var v=Je(p,2);{var g=w=>{Fv(w,{get level(){return l()},get disabled(){return a()},get change(){return c()},get activate(){return u()}})};Sn(v,w=>{o()&&w(g)})}var m=Je(v,2);{var y=w=>{var M=__(),A=It(M,!0);_t(M),Yt(()=>{M.disabled=a(),ti(A,n())}),di("click",M,function(...x){u()?.apply(this,x)}),st(w,M)};Sn(m,w=>{o()&&w(y)})}var b=Je(m,2);{var _=w=>{var M=y_(),A=It(M);_t(M),Yt(()=>ti(A,`${s()??""}/${r()??""} ready`)),st(w,M)};Sn(b,w=>{r()>0&&w(_)})}_t(d),Yt(()=>ti(f,t())),st(i,d),vn()}var b_=xt('<li class="svelte-18574qx"><span class="rank svelte-18574qx"></span><strong class="svelte-18574qx"> </strong><b class="svelte-18574qx"> </b></li>'),S_=xt('<section class="match-standings svelte-18574qx" aria-label="Final standings"><h2 class="svelte-18574qx">FINAL STANDINGS</h2> <ol class="svelte-18574qx"></ol></section>');function iI(i,e){let t=Ge(e,"entries",24,()=>[]);var n=S_(),s=Je(It(n),2);Cn(s,5,t,kn,(r,a,o)=>{var l=b_(),c=It(l);c.textContent=o+1;var u=Je(c),d=It(u,!0);_t(u);var h=Je(u),f=It(h,!0);_t(h),_t(l),Yt(()=>{ti(d,(P(a),ze(()=>P(a).name))),ti(f,(P(a),ze(()=>P(a).score)))}),st(r,l)}),_t(s),_t(n),st(i,n)}function bu(i){let e=i|0;return e^=e<<13,e^=e>>>17,e^=e<<5,e>>>0}function M_(i){return i>>>0||1}const Bt=8,$n=16,cn=(i,e)=>i*Bt+e;function wa(i){return i.rng=bu(i.rng),i.rng/4294967296}function w_(i){const e=bu(i.rng),t=bu(e);return[e,t].map(n=>At.colors[Math.floor(n/4294967296*At.colors.length)])}function nd(i){return{0:[[0,0],[0,1]],1:[[0,0],[-1,0]],2:[[0,1],[0,0]],3:[[-1,0],[0,0]]}[i.orientation].map(([t,n])=>[i.row+t,i.col+n])}function id(i,e){return nd(e).every(([t,n])=>t>=0&&t<$n&&n>=0&&n<Bt&&!i.board[cn(t,n)])}function E_(i){for(let e=0;e<$n;e++)for(let t=0;t<Bt;t++){const n=i[cn(e,t)];if(n&&(t<=Bt-4&&[1,2,3].every(s=>i[cn(e,t+s)]?.color===n.color)||e<=$n-4&&[1,2,3].every(s=>i[cn(e+s,t)]?.color===n.color)))return!0}return!1}function qm(i){i.softDrop=!1;const e={id:i.nextId++,row:At.spawn.row,col:At.spawn.col,orientation:0,colors:[At.colors[Math.floor(wa(i)*At.colors.length)],At.colors[Math.floor(wa(i)*At.colors.length)]]};i.active=id(i,e)?e:null,i.active||(i.phase="lost")}function T_(i){return Math.min(At.maxVirusCount,(i+1)*At.virusesPerLevel)}function A_(i){return Math.max(At.minimumGravityTicks,At.initialGravityTicks-i.level*At.gravityTicksPerLevel-Math.floor(i.pills/At.pillsPerSpeedIncrease))}function $m(i){i.board.fill(null),i.active=null,i.pills=0,i.gravityCounter=0,i.viruses=T_(i.level),i.phase="playing",i.softDrop=!1,i.chain=0,i.resolving=!1,delete i.resolutionLineColors,delete i.pendingRain,delete i.fallingRain,delete i.rainGravityCounter,delete i.countdownEndsAt;let e=0,t=0;for(;e<i.viruses&&t++<1e5;){const n=At.virusRowStart+Math.floor(wa(i)*(At.virusRowEnd-At.virusRowStart+1)),s=Math.floor(wa(i)*Bt),r=cn(n,s);if(!i.board[r]){if(i.board[r]={kind:"virus",color:At.colors[Math.floor(wa(i)*At.colors.length)],id:`l${i.level}v${e}`},E_(i.board)){i.board[r]=null;continue}e++}}i.viruses=e,qm(i)}function sd(i,e=0,t=0){const n={rulesVersion:ed,tick:0,level:t,pills:0,gravityCounter:0,board:Array(Bt*$n).fill(null),active:null,rng:M_(i),nextId:1,viruses:0,phase:"playing",softDrop:!1,chain:0,resolving:!1};return $m(n),n}function rd(i){const e=new Set,t=[];for(let s=0;s<$n;s++)for(let r=0;r<Bt;r++){const a=i.board[cn(s,r)];if(a){if(r===0||i.board[cn(s,r-1)]?.color!==a.color){const o=[cn(s,r)];for(let l=r+1;l<Bt&&i.board[cn(s,l)]?.color===a.color;l++)o.push(cn(s,l));o.length>=4&&(o.forEach(l=>e.add(l)),t.push(a.color))}if(s===0||i.board[cn(s-1,r)]?.color!==a.color){const o=[cn(s,r)];for(let l=s+1;l<$n&&i.board[cn(l,r)]?.color===a.color;l++)o.push(cn(l,r));o.length>=4&&(o.forEach(l=>e.add(l)),t.push(a.color))}}}const n=[];for(const s of[...e].sort((r,a)=>r-a))i.board[s]?.kind==="virus"&&(n.push(i.board[s].color),i.viruses--),i.board[s]=null;return e.size&&i.viruses===0&&(i.phase="countdown",i.countdownEndsAt=i.tick+At.levelCountdownTicks,i.active=null,i.softDrop=!1,i.resolving=!1),e.size>0?{lineColors:t}:void 0}function Su(i){const e=i.resolutionLineColors??[];return delete i.resolutionLineColors,e.length>0?[{type:"clear",tick:i.tick,chain:i.chain,lineColors:e}]:[]}function Mc(i){const e=i.pendingRain?.shift();if(i.pendingRain?.length===0&&delete i.pendingRain,!e){qm(i);return}const t=e.colors.map((n,s)=>({attackId:e.attackId,item:s,color:n,column:e.columns[s],row:0}));if(t.some(n=>i.board[cn(0,n.column)])){i.phase="lost",i.active=null,i.softDrop=!1;return}i.fallingRain=t,i.rainGravityCounter=0}function C_(i){const e=i.fallingRain;if(!e||(i.rainGravityCounter=(i.rainGravityCounter??0)+1,i.rainGravityCounter<At.rainGravityTicks))return;i.rainGravityCounter=0;const t=[];for(const s of e){const r=s.row+1;r>=$n||i.board[cn(r,s.column)]?i.board[cn(s.row,s.column)]={kind:"pill",color:s.color,id:`g${s.attackId}-${s.item}x`}:t.push({...s,row:r})}if(t.length>0){i.fallingRain=t;return}delete i.fallingRain,delete i.rainGravityCounter,rd(i)?(i.chain=1,i.phase==="playing"&&(i.resolving=!0)):Mc(i)}function R_(i){const e=new Map;i.board.forEach((c,u)=>{if(c?.kind!=="pill")return;const d=c.id.slice(0,-1),h=e.get(d)??[];h.push(u),e.set(d,h)});const t=[];for(const c of e.values())c.length===2&&Math.abs(Math.floor(c[0]/Bt)-Math.floor(c[1]/Bt))+Math.abs(c[0]%Bt-c[1]%Bt)===1?t.push(c):c.forEach(d=>t.push([d]));const n=new Map;t.forEach((c,u)=>c.forEach(d=>n.set(d,u)));const s=t.map((c,u)=>u).sort((c,u)=>Math.max(...t[u])-Math.max(...t[c])),r=new Set;let a=!0;for(;a;){a=!1;for(const c of s){if(r.has(c))continue;t[c].every(d=>{if(Math.floor(d/Bt)===$n-1)return!1;const h=d+Bt,f=n.get(h);return f===c||!i.board[h]||f!==void 0&&r.has(f)})&&(r.add(c),a=!0)}}const o=[...r].flatMap(c=>t[c]),l=o.map(c=>({from:c,to:c+Bt,cell:i.board[c]}));return l.forEach(({from:c})=>{i.board[c]=null}),l.forEach(({to:c,cell:u})=>{i.board[c]=u}),o.length>0}function Ym(i){if(!i.active)return[];const e=i.active;nd(e).forEach(([n,s],r)=>{i.board[cn(n,s)]={kind:"pill",color:e.colors[r],id:`p${e.id}${r}`}}),i.active=null,i.pills++,i.gravityCounter=0,i.chain=0;const t=rd(i);return t?(i.resolutionLineColors=[...t.lineColors],i.chain=1,i.phase==="playing"&&(i.resolving=!0)):Mc(i),t&&!i.resolving?Su(i):[]}function Mu(i,e,t){if(!i.active)return!1;const n={...i.active,row:i.active.row+e,col:i.active.col+t};return id(i,n)?(i.active=n,delete i.active.groundedAt,!0):!1}function I_(i,e){i.phase==="playing"&&(i.pendingRain=[...i.pendingRain??[],{attackId:e.payload.attackId,colors:[...e.payload.colors],columns:[...e.payload.columns]}],!i.active&&!i.resolving&&!i.fallingRain&&Mc(i))}function Hr(i,e){if(e.type==="attack/rain")return I_(i,e),[];if(i.phase!=="playing"||!i.active)return[];if(e.type==="input/move")Mu(i,0,e.payload.dx);else if(e.type==="input/rotate"){const t=i.active.orientation%2===1,n=e.payload.direction==="clockwise"?1:3,s=(i.active.orientation+n)%4,r=[{...i.active,orientation:s}];t?r.push({...i.active,col:i.active.col-1,orientation:s}):r.push({...i.active,col:i.active.col+1,orientation:s},{...i.active,col:i.active.col-1,orientation:s});const a=r.find(o=>id(i,o));a&&(i.active=a,delete i.active.groundedAt)}else if(e.type==="input/soft-drop-start")i.softDrop=!0;else if(e.type==="input/soft-drop-end")i.softDrop=!1;else if(e.type==="input/hard-drop"&&At.hardDrop){for(;Mu(i,1,0););return Ym(i)}return[]}function ad(i){if(i.phase==="lost")return[];if(i.tick++,i.phase==="countdown")return i.countdownEndsAt!==void 0&&i.tick>=i.countdownEndsAt&&(i.level++,$m(i)),[];if(i.resolving){if(i.tick%At.resolutionGravityTicks!==0)return[];if(R_(i))return[];const t=rd(i);return t?(i.resolutionLineColors&&(i.resolutionLineColors=[...i.resolutionLineColors,...t.lineColors]),i.chain++,i.resolving?[]:Su(i)):(i.resolving=!1,Mc(i),Su(i))}if(i.fallingRain)return C_(i),[];if(!i.active)return[];const e=i.softDrop?At.softDropTicks:A_(i);return i.gravityCounter++,i.gravityCounter>=e&&(i.gravityCounter=0,Mu(i,1,0)||(i.active.groundedAt??=i.tick)),i.active?.groundedAt!==void 0&&i.tick-i.active.groundedAt>=At.lockDelayTicks?Ym(i):[]}function P_(i){return i.active?nd(i.active).map(([e,t],n)=>({row:e,col:t,cell:{kind:"pill",color:i.active.colors[n],id:`a${i.active.id}${n}`}})):[]}function D_(i){return(i.fallingRain??[]).map(e=>({row:e.row,col:e.column,cell:{kind:"pill",color:e.color,id:`g${e.attackId}-${e.item}x`}}))}const L_=2,U_=4;function N_(i){return i.lineColors.length>=L_?i.lineColors.slice(0,U_):[]}function O_(i){let e=2166136261;for(const t of i)e^=t.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0}function F_(i,e){const t=Array.from({length:Bt},(s,r)=>r);let n=O_(i);for(let s=t.length-1;s>0;s--){n=Math.imul(n,1664525)+1013904223>>>0;const r=n%(s+1);[t[s],t[r]]=[t[r],t[s]]}return t.slice(0,Math.min(e,Bt))}function Zm(i,e,t,n,s){const r=e.filter(({playerId:p})=>i.includes(p)),a=Object.fromEntries(r.map(({playerId:p,result:v})=>[p,v])),o=Object.fromEntries(r.map(({playerId:p,tick:v})=>[p,v])),l=Object.keys(a),c=new Set(l),u=t.filter(p=>i.includes(p)),d=i.length===1?c.size===1:c.size>=i.length-1,h=i.filter(p=>!c.has(p)),f=d&&h.length===1?h[0]:void 0;return{playerIds:i,terminalPlayerIds:l,readyPlayerIds:u,finished:d,winnerId:f,draw:d&&i.length>1&&f===void 0,allReady:d&&i.every(p=>u.includes(p)),terminalResults:a,terminalTicks:o,round:n,matchComplete:d&&(i.length===1||n+1>=s),roundPoints:Object.fromEntries(i.map(p=>[p,0])),scores:Object.fromEntries(i.map(p=>[p,0]))}}function k_(i,e,t){const n=Math.min(e,t??e);return i.reduce((s,r)=>r.tick<=n?Math.max(s,r.tick):s,0)}function Km(i,e,t,n=0){return Zm(i,e,t,n,At.matchRounds)}function od(i,e,t){if(!Number.isInteger(e)||e<i.tick)throw new Error("Target tick must not precede the current state.");const n=new Map;for(const a of t){const o=n.get(a.commandId);if(o&&JSON.stringify(o)!==JSON.stringify(a))throw new Error(`Conflicting replay command identity: ${a.commandId}`);n.set(a.commandId,a)}const s=[...n.values()].sort((a,o)=>a.tick-o.tick||a.clientSeq-o.clientSeq||a.commandId.localeCompare(o.commandId));let r=0;for(;r<s.length&&s[r].tick<i.tick;)r++;for(;i.tick<=e;){for(;r<s.length&&s[r].tick===i.tick;)Hr(i,s[r].input),r++;if(i.tick===e)break;const a=i.tick;if(ad(i),i.tick===a)break}return i}function wc(i){return{rulesVersion:i.rulesVersion,tick:i.tick,level:i.level,pills:i.pills,gravityCounter:i.gravityCounter,...i.countdownEndsAt===void 0?{}:{countdownEndsAt:i.countdownEndsAt},board:i.board.map(e=>e?{...e}:null),active:i.active?{...i.active,colors:[...i.active.colors]}:null,rng:i.rng,nextId:i.nextId,viruses:i.viruses,phase:i.phase,softDrop:i.softDrop,chain:i.chain,resolving:i.resolving,...i.resolutionLineColors?.length?{resolutionLineColors:[...i.resolutionLineColors]}:{},...i.pendingRain?.length?{pendingRain:i.pendingRain.map(e=>({attackId:e.attackId,colors:[...e.colors],columns:[...e.columns]}))}:{},...i.fallingRain?.length?{fallingRain:i.fallingRain.map(e=>({...e}))}:{},...i.rainGravityCounter===void 0?{}:{rainGravityCounter:i.rainGravityCounter}}}const lo=["cyan","pink","yellow"],ln=(i,e=0)=>Number.isInteger(i)&&i>=e,co=(i,e)=>Object.keys(i).every(t=>e.includes(t)),B_=i=>{if(!i||typeof i!="object")return!1;const e=i;return co(e,["kind","color","id"])&&(e.kind==="virus"||e.kind==="pill")&&lo.includes(e.color)&&typeof e.id=="string"&&e.id.length>0&&e.id.length<=160},z_=i=>{if(!i||typeof i!="object")return!1;const e=i;return co(e,["id","row","col","orientation","colors","groundedAt"])&&ln(e.id,1)&&ln(e.row)&&ln(e.col)&&[0,1,2,3].includes(e.orientation)&&Array.isArray(e.colors)&&e.colors.length===2&&e.colors.every(t=>lo.includes(t))&&(e.groundedAt===void 0||ln(e.groundedAt))},V_=i=>{if(!i||typeof i!="object")return!1;const e=i;return co(e,["attackId","colors","columns"])&&typeof e.attackId=="string"&&e.attackId.length<=128&&Array.isArray(e.colors)&&e.colors.length>=2&&e.colors.length<=4&&e.colors.every(t=>lo.includes(t))&&Array.isArray(e.columns)&&e.columns.length===e.colors.length&&e.columns.every(t=>ln(t)&&t<Bt)&&new Set(e.columns).size===e.columns.length},G_=i=>{if(!i||typeof i!="object")return!1;const e=i;return co(e,["attackId","item","color","column","row"])&&typeof e.attackId=="string"&&e.attackId.length<=128&&ln(e.item)&&e.item<4&&lo.includes(e.color)&&ln(e.column)&&e.column<Bt&&ln(e.row)&&e.row<$n};function H_(i){if(!i||typeof i!="object")throw new Error("Invalid serialized bottle state.");const e=i;if(!co(e,["rulesVersion","tick","level","pills","gravityCounter","countdownEndsAt","board","active","rng","nextId","viruses","phase","softDrop","chain","resolving","resolutionLineColors","pendingRain","fallingRain","rainGravityCounter"])||e.rulesVersion!==ed||!ln(e.tick)||!ln(e.level)||!ln(e.pills)||!ln(e.gravityCounter)||e.countdownEndsAt!==void 0&&(!ln(e.countdownEndsAt)||e.countdownEndsAt<e.tick)||!Array.isArray(e.board)||e.board.length!==Bt*$n||!e.board.every(t=>t===null||B_(t))||e.active!==null&&!z_(e.active)||!ln(e.rng)||e.rng>4294967295||!ln(e.nextId,1)||!ln(e.viruses)||e.viruses>80||!["playing","countdown","lost"].includes(e.phase)||e.phase==="countdown"!=(e.countdownEndsAt!==void 0)||typeof e.softDrop!="boolean"||!ln(e.chain)||typeof e.resolving!="boolean"||e.resolutionLineColors!==void 0&&(!Array.isArray(e.resolutionLineColors)||!e.resolutionLineColors.every(t=>lo.includes(t)))||e.pendingRain!==void 0&&(!Array.isArray(e.pendingRain)||!e.pendingRain.every(V_))||e.fallingRain!==void 0&&(!Array.isArray(e.fallingRain)||e.fallingRain.length<1||e.fallingRain.length>4||!e.fallingRain.every(G_))||e.rainGravityCounter!==void 0&&(!ln(e.rainGravityCounter)||e.rainGravityCounter>=At.rainGravityTicks)||e.fallingRain===void 0!=(e.rainGravityCounter===void 0))throw new Error("Invalid serialized bottle state.");return e}function ld(i){return wc(H_(i))}function Fa(i){const e=JSON.stringify(wc(i));let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return`pb3-${(t>>>0).toString(16).padStart(8,"0")}`}class Ec{adapter;displayTick;state;checkpoint;pending=new Map;identities=new Map;controllerTick;reportedStateHash;hashMatches=!0;constructor(e,t,n=0){this.adapter=e,this.displayTick=n,this.state=e.clone(t),this.checkpoint={clientSeq:0,tick:e.tick(t),state:e.clone(t)},e.advanceTo(this.state,n)}receive(e){const t=JSON.stringify(e),n=this.identities.get(e.commandId);if(n&&n!==t)throw new Error(`Conflicting controller record identity: ${e.commandId}`);if(n||(this.identities.set(e.commandId,t),e.clientSeq<=this.checkpoint.clientSeq))return;const s=this.pending.get(e.clientSeq);if(s&&JSON.stringify(s)!==t)throw new Error(`Conflicting controller sequence: ${e.clientSeq}`);this.pending.set(e.clientSeq,e),this.adapter.progress(e)&&(this.controllerTick===void 0||e.tick>=this.controllerTick)&&(this.controllerTick=e.tick),this.processAvailable()}advance(){this.displayTick++,this.adapter.advanceTo(this.state,this.displayTick),this.processAvailable()}snapshot(){return{displayTick:this.displayTick,controllerTick:this.controllerTick,lag:this.controllerTick===void 0?void 0:this.displayTick-this.controllerTick,state:this.adapter.clone(this.state),stateHash:this.adapter.hash(this.state),reportedStateHash:this.reportedStateHash,hashMatches:this.hashMatches}}processAvailable(){for(;;){const e=this.pending.get(this.checkpoint.clientSeq+1);if(!e||e.tick>this.displayTick)return;if(e.tick<this.checkpoint.tick)throw new Error("Controller record tick precedes its checkpoint.");const t=this.adapter.clone(this.checkpoint.state);if(this.adapter.advanceTo(t,e.tick),this.adapter.tick(t)!==e.tick){if(!this.adapter.terminal?.(t))throw new Error("Controller record could not reach its declared tick.");const s=this.adapter.progress(e);s&&(this.reportedStateHash=s.stateHash,this.hashMatches=!1),this.checkpoint={clientSeq:e.clientSeq,tick:this.adapter.tick(t),state:this.adapter.clone(t)},this.pending.delete(e.clientSeq),this.state=t;continue}const n=this.adapter.progress(e);n?(this.reportedStateHash=n.stateHash,this.hashMatches=this.adapter.hash(t)===n.stateHash&&this.adapter.phase(t)===n.phase):this.adapter.apply(t,e),this.checkpoint={clientSeq:e.clientSeq,tick:e.tick,state:this.adapter.clone(t)},this.pending.delete(e.clientSeq),this.adapter.advanceTo(t,this.displayTick),this.state=t}}}function W_(i,e){for(;i.tick<e&&i.phase!=="lost";)ad(i)}class X_ extends Ec{constructor(e,t=0){super({clone:n=>ld(wc(n)),tick:n=>n.tick,advanceTo:W_,apply:(n,s)=>{s.type!=="progress/tick"&&Hr(n,s)},hash:Fa,phase:n=>n.phase,terminal:n=>n.phase==="lost",progress:n=>n.type==="progress/tick"?n.payload:void 0},e,t)}}function q_(i,e){od(i,e.tick,[]),e.type!=="progress/tick"&&Hr(i,e)}function Bf(i,e,t,n,s){const r=i.players[e];if(!r)return 0;const a=k_(t,n,s),o=sd(i.seed,r.seat,r.level);for(const l of t){if(l.tick>a)break;q_(o,l)}return o.tick<a&&o.phase!=="lost"&&od(o,a,[]),o.viruses}function Jm(i,e,t){const n=Object.fromEntries(e.playerIds.map(r=>[r,0])),s=e.playerIds.filter(r=>e.terminalResults[r]==="cleared");for(const r of s){const a=e.terminalTicks[r];for(const o of e.playerIds)o!==r&&(n[r]+=Bf(i,o,t.get(o)??[],a,e.terminalTicks[o]))}if(s.length===0&&e.finished&&e.winnerId)for(const r of e.terminalPlayerIds){if(e.terminalResults[r]!=="lost")continue;const a=e.terminalTicks[r];n[e.winnerId]+=Bf(i,r,t.get(r)??[],a,a)}return n}var $_=xt('<canvas class="preview-pill svelte-1jw6p41" width="40" height="20"></canvas>'),Y_=xt('<div class="next-pill svelte-1jw6p41"><!></div>'),Z_=xt('<div class="bottle-shell svelte-1jw6p41"><!> <canvas width="184" height="360"></canvas></div>');function sI(i,e){gn(e,!1);const t=lt();let n=Ge(e,"state",8),s=Ge(e,"label",8,"Pill bottle"),r=Ge(e,"showPreview",8,!0),a=lt(),o=lt(),l="",c=lt(""),u="",d;const h=10,f=6,p=11,v=2,g={cyan:"#39d9e6",pink:"#ff4f91",yellow:"#ffd84a"};function m(L){return L.kind==="pill"?L.id.slice(0,-1):""}function y(L,B){const O=f+B.col*h,U=p+B.row*h;L.fillStyle="#08090d",L.beginPath(),L.roundRect(O+.25,U+1.25,9.5,7,3),L.fill(),L.fillRect(O+2,U+.25,2.25,2.5),L.fillRect(O+5.75,U+.25,2.25,2.5),L.fillRect(O+1.25,U+7,2.75,2.5),L.fillRect(O+6,U+7,2.75,2.5),L.fillStyle=g[B.color],L.beginPath(),L.roundRect(O+1.25,U+2,7.5,5.5,2),L.fill(),L.fillRect(O+2.75,U+1,1.25,2),L.fillRect(O+6,U+1,1.25,2),L.fillRect(O+2,U+7,1.5,1.5),L.fillRect(O+6.5,U+7,1.5,1.5),L.fillStyle="rgba(255,255,255,.34)",L.fillRect(O+2,U+2.25,5.75,.75),L.fillStyle="#08090d",L.fillRect(O+2.5,U+4,1.5,1.75),L.fillRect(O+6,U+4,1.5,1.75),L.fillRect(O+4.25,U+6.25,1.5,.75)}function b(L,B,O){return L===1?[O,0,0,O]:L===-1?[0,O,O,0]:B===1?[O,O,0,0]:B===-1?[0,0,O,O]:O}function _(L,B,O,U=f,N=p){const F=O.find(J=>J!==B&&m(J)===m(B)),H=F?.col===B.col?0:(F?.col??B.col)-B.col,ee=F?.row===B.row?0:(F?.row??B.row)-B.row,K=U+B.col*h,te=N+B.row*h,Ce=b(H,ee,4);L.fillStyle="#08090d",L.beginPath(),L.roundRect(K,te,10,10,Ce),L.fill();const ct=K+(H===-1?0:1.25),it=te+(ee===-1?0:1.25),X=H===0?7.5:8.75,ce=ee===0?7.5:8.75;L.fillStyle=g[B.color],L.beginPath(),L.roundRect(ct,it,X,ce,b(H,ee,3)),L.fill(),L.save(),L.beginPath(),L.roundRect(ct,it,X,ce,b(H,ee,3)),L.clip(),ee!==-1&&(L.fillStyle="rgba(255,255,255,.38)",L.fillRect(K+(H===-1?0:1.75),te+1.75,H===0?6.5:8.25,1.25)),ee!==1&&(L.fillStyle="rgba(0,0,0,.28)",L.fillRect(K+(H===-1?0:1.75),te+7.25,H===0?6.5:8.25,1.25)),L.restore(),L.fillStyle="#08090d",H===1&&L.fillRect(K+9.75,te+1.25,.5,7.5),ee===1&&L.fillRect(K+1.25,te+9.75,7.5,.5)}function w(){if(!P(o)||n().phase!=="playing")return;const L=P(o).getContext("2d");if(!L)return;L.setTransform(1,0,0,1,0,0),L.clearRect(0,0,P(o).width,P(o).height),L.setTransform(v,0,0,v,0,0);const B=[{id:"previewa",kind:"pill",color:P(t)[0],row:0,col:0},{id:"previewb",kind:"pill",color:P(t)[1],row:0,col:1}];for(const O of B)_(L,O,B,0,0)}function M(){if(!P(a))return;const L=`${n().phase}|${n().board.map(U=>U?`${U.id}:${U.color}`:"").join(",")}|${n().active?`${n().active.id}:${n().active.row}:${n().active.col}:${n().active.orientation}:${n().active.colors.join(":")}`:""}|${n().fallingRain?.map(U=>`${U.attackId}:${U.item}:${U.row}`).join(",")??""}`;if(L===l)return;l=L;const B=P(a).getContext("2d");if(!B)return;B.setTransform(1,0,0,1,0,0),B.clearRect(0,0,P(a).width,P(a).height),B.setTransform(v,0,0,v,0,0),B.imageSmoothingEnabled=!0,B.fillStyle="#606477",B.fillRect(26,0,40,3),B.fillRect(26,0,3,11),B.fillRect(63,0,3,11),B.fillRect(3,8,86,169),B.fillStyle="#08090d",B.fillRect(6,11,80,163),B.fillStyle="#050609",B.fillRect(89,13,3,164),B.fillRect(8,177,84,3),B.fillStyle="#0d0f14";for(let U=1;U<Bt;U++)B.fillRect(f+U*h,p,.35,$n*h);for(let U=1;U<$n;U++)B.fillRect(f,p+U*h,Bt*h,.35);const O=[];n().board.forEach((U,N)=>{U&&O.push({...U,row:Math.floor(N/Bt),col:N%Bt})});for(const U of P_(n()))O.push({...U.cell,row:U.row,col:U.col});for(const U of D_(n()))O.push({...U.cell,row:U.row,col:U.col});for(const U of O)U.kind==="virus"?y(B,U):_(B,U,O);w()}function A(){if(!P(a))return;const L=n().board.filter(H=>H?.id.startsWith("g")).length,B=`${n().viruses}:${n().pills}:${n().phase}:${L}`;if(!u){u=B;return}if(B===u)return;const[O,U,N,F]=u.split(":");u=B,de(c,L>Number(F)?"rain":n().viruses<Number(O)?"clear":n().phase!==N?"finish":n().pills>Number(U)?"lock":""),P(c)&&(d&&clearTimeout(d),d=setTimeout(()=>de(c,""),420))}xc(()=>(M(),A(),()=>{d&&clearTimeout(d)})),Vt(()=>Ae(n()),()=>{de(t,w_(n()))}),Vt(()=>Ae(n()),()=>{n(),M(),A()}),Li(),Ji();var x=Z_(),E=It(x);{var C=L=>{var B=Y_(),O=It(B);{var U=N=>{var F=$_();wl(F,H=>de(o,H),()=>P(o)),st(N,F)};Sn(O,N=>{Ae(n()),ze(()=>n().phase==="playing")&&N(U)})}_t(B),Yt(()=>{at(B,"aria-label",(P(t),ze(()=>`Next pill: ${P(t)[0]} and ${P(t)[1]}`))),at(B,"aria-hidden",(Ae(n()),ze(()=>n().phase!=="playing")))}),st(L,B)};Sn(E,L=>{r()&&L(C)})}var D=Je(E,2);let k;wl(D,L=>de(a,L),()=>P(a)),_t(x),Yt((L,B,O)=>{k=Qn(D,1,"bottle svelte-1jw6p41",null,k,{clear:P(c)==="clear",lock:P(c)==="lock",finish:P(c)==="finish",rain:P(c)==="rain"}),at(D,"aria-label",s()),at(D,"data-cell-count",Bt*$n),at(D,"data-virus-count",(Ae(n()),ze(()=>n().viruses))),at(D,"data-next-colors",L),at(D,"data-active-pill",(Ae(n()),ze(()=>n().active?"true":"false"))),at(D,"data-active-pill-id",(Ae(n()),ze(()=>n().active?.id??""))),at(D,"data-pending-rain-count",(Ae(n()),ze(()=>n().pendingRain?.length??0))),at(D,"data-rain-rows",B),at(D,"data-garbage-count",O)},[()=>(P(t),ze(()=>P(t).join(","))),()=>(Ae(n()),ze(()=>n().fallingRain?.map(L=>L.row).join(",")??"")),()=>(Ae(n()),ze(()=>n().board.filter(L=>L?.id.startsWith("g")).length))]),st(i,x),vn()}class Ss{lastTime;accumulator=0;tickRate;maximumCatchUpMs;constructor(e,t=250){if(!Number.isFinite(e)||e<=0)throw new Error("Tick rate must be positive.");this.tickRate=e,this.maximumCatchUpMs=t}consume(e){if(this.lastTime===void 0)return this.lastTime=e,0;this.accumulator+=Math.min(Math.max(0,e-this.lastTime),this.maximumCatchUpMs),this.lastTime=e;const t=1e3/this.tickRate,n=Math.floor(this.accumulator/t);return this.accumulator-=n*t,n}reset(){this.lastTime=void 0,this.accumulator=0}}async function Tc(i,e){if(!ii?.currentUser||!ue)throw new Error("Firebase is unavailable.");const t=ii.currentUser.uid,n=De(ue,`games/${i}/rematch/ready/${t}`);if(!Number.isInteger(e)||e<0||e>20)throw new Error("Level must be between 0 and 20.");(await St(n)).exists()||await Mn(n,{playerId:t,level:e,serverTime:wn()})}async function Ac(i,e,t){if(!ii?.currentUser||!Nf||!ue)throw new Error("Firebase is unavailable.");const n=await St(De(ue,`games/${i}/start`));if(!n.exists())throw new Error("The previous game no longer exists.");const s=e(n.val());if(!s.players[ii.currentUser.uid])return;const r=await St(De(ue,`games/${i}/rematch/ready`)),a=new Map;if(r.forEach(f=>{const p=f.val();p?.playerId===f.key&&Number.isInteger(p.level)&&a.set(p.playerId,p.level)}),!Object.keys(s.players).every(f=>a.has(f)))return;const o=crypto.randomUUID(),l=De(ue,`games/${i}/rematch/nextGameId`),c=await Ml(l,f=>f===null?o:void 0,{applyLocally:!1}),u=c.committed?c.snapshot.val():(await St(l)).val();if(typeof u!="string")throw new Error("Could not reserve the rematch.");const d=t(s),h=De(ue,`games/${u}/start`);try{await Mn(h,{type:"game/started",roomId:s.roomId,ruleset:s.ruleset,rulesVersion:s.rulesVersion,seed:kv(),tickRate:s.tickRate,hostUid:s.hostUid,members:s.members,players:Object.fromEntries(Object.entries(s.players).map(([f,p])=>[f,{...p,level:s.ruleset==="quarry-match"?Math.max(...a.values()):a.get(f)}])),settings:d.settings??s.settings,audioOutput:s.audioOutput,...d.scores??s.scores?{scores:d.scores??s.scores}:{},matchId:d.advance?s.matchId:u,round:d.advance?s.round+1:0,previousGameId:i,serverTime:wn()})}catch(f){const p=await St(h).catch(()=>{});if(!p?.exists()||e(p.val()).roomId!==s.roomId)throw f}return await r_(a_(Nf,"rooms",s.roomId),{status:"active",activeGameId:u,startedAt:o_()}),u}function K_(i,e,t,n,s,r=!1){let a=!1,o=()=>{};return(async()=>{try{const l=De(i,`games/${e}/interactions`),c=await St(l),u=new Set;if(r||c.forEach(d=>{u.add(d.key)}),a)return;o=ji(l,d=>{try{const h=t(d.val());u.delete(d.key)||n(h,d.key)}catch(h){s(h instanceof Error?h:new Error(String(h)))}},s)}catch(l){s(l instanceof Error?l:new Error(String(l)))}})(),()=>{a=!0,o()}}function J_(i=globalThis.localStorage){const e=crypto.randomUUID();try{const t=i?.getItem("drm-client-id");if(t)return t;i?.setItem("drm-client-id",e)}catch{}return e}class Cc{epochId=crypto.randomUUID();clientId=J_();owned=!1;unsubscribe=()=>{};database;path;lost;constructor(e,t,n){this.database=e,this.path=t,this.lost=n}async claim(e=!1){const t=De(this.database,this.path),n=await Ml(t,s=>e||s===null||s?.epochId===this.epochId?{epochId:this.epochId,clientId:this.clientId}:void 0,{applyLocally:!1});return this.owned=n.committed&&n.snapshot.val()?.epochId===this.epochId,this.owned?(await Of(t).remove(),this.unsubscribe(),this.unsubscribe=si(t,s=>{this.owned&&s.val()?.epochId!==this.epochId&&(this.owned=!1,this.lost())}),!0):!1}async takeOver(){return this.claim(!0)}async release(){this.unsubscribe();const e=De(this.database,this.path);await Of(e).cancel(),await Ml(e,t=>t?.epochId===this.epochId?null:t,{applyLocally:!1}),this.owned=!1}async suspend(){this.owned&&(await Mn(De(this.database,this.path),null),this.owned=!1)}get ownsWriter(){return this.owned}}class ka{options;items;flushing=!1;retry;destroyed=!1;constructor(e){this.options=e,this.items=[...e.initial].sort(e.order)}enqueue(e){this.items.some(t=>this.options.identify(t)===this.options.identify(e))||(this.items=[...this.items,e].sort(this.options.order),this.options.persist(this.items),this.flush())}async flush(){if(!(this.flushing||this.destroyed)){this.flushing=!0;try{for(;this.items.length&&!this.destroyed;){const e=this.items[0];await this.options.deliver(e);const t=this.options.identify(e);this.items=this.items.filter(n=>this.options.identify(n)!==t),this.options.persist(this.items)}}catch(e){this.options.failed?.(e),!this.retry&&!this.destroyed&&(this.retry=setTimeout(()=>{this.retry=void 0,this.flush()},this.options.retryMilliseconds??1e3))}finally{this.flushing=!1}}}values(){return[...this.items]}destroy(){this.destroyed=!0,this.retry&&clearTimeout(this.retry)}}const bt=i=>!!i&&typeof i=="object"&&!Array.isArray(i),yt=(i,e)=>Object.keys(i).every(t=>e.includes(t)),Tt=(i,e=0,t=1e9)=>Number.isInteger(i)&&i>=e&&i<=t,gt=(i,e=128)=>typeof i=="string"&&i.length>0&&i.length<=e,Ui=i=>typeof i=="number"&&Number.isFinite(i)&&i>=0;function cd(i,e,t=!1){const n=t?["type","playerId","epochId","clientSeq","tick","payload"]:["type","playerId","epochId","clientSeq","tick","payload","serverTime"];if(!bt(e)||!yt(e,n)||!gt(i)||!gt(e.playerId)||!gt(e.epochId)||!Tt(e.clientSeq,1)||!Tt(e.tick)||!t&&!Ui(e.serverTime))throw new Error("Invalid controller record envelope.");return e}function j_(i,e){const t=bt(e)?e:{};if(i==="input/move"&&yt(t,["dx"])&&(t.dx===-1||t.dx===1))return{type:i,payload:{dx:t.dx}};if(i==="input/rotate"&&yt(t,["direction"])&&(t.direction==="clockwise"||t.direction==="counterclockwise"))return{type:i,payload:{direction:t.direction}};if((i==="input/soft-drop-start"||i==="input/soft-drop-end"||i==="input/hard-drop")&&yt(t,[]))return{type:i,payload:{}};throw new Error("Invalid pill command input.")}function ho(i){if(!bt(i)||!yt(i,["type","roomId","ruleset","rulesVersion","seed","tickRate","hostUid","audioOutput","members","players","settings","matchId","round","previousGameId","serverTime"])||i.type!=="game/started"||i.ruleset!=="pill-bottle"||i.rulesVersion!==ed||i.tickRate!==At.tickRate||!gt(i.roomId)||!gt(i.hostUid)||i.audioOutput!==void 0&&i.audioOutput!=="cast"&&i.audioOutput!=="controllers"||i.matchId!==void 0&&!gt(i.matchId)||i.round!==void 0&&!Tt(i.round,0,At.matchRounds-1)||i.previousGameId!==void 0&&!gt(i.previousGameId)||!Tt(i.seed,0,4294967295)||!Ui(i.serverTime)||!bt(i.members)||!bt(i.players)||!bt(i.settings))throw new Error("Invalid pill-bottle/3 start record.");const e=i.members,t=Object.entries(e),n=Object.entries(i.players),s=n.map(([,a])=>bt(a)?a.seat:void 0),r=i.settings;if(t.length<1||t.length>4||!t.every(([a,o])=>gt(a)&&o===!0)||e[i.hostUid]!==!0||n.length<1||n.length>4||!n.every(([a,o])=>gt(a)&&bt(o)&&yt(o,["seat","level"])&&Tt(o.seat,0,3)&&Tt(o.level,0,20)&&e[a]===!0)||new Set(s).size!==s.length||!yt(r,["initialVirusCount","initialGravityTicks","hardDrop","matchRounds"])||r.initialVirusCount!==ra.initialVirusCount||r.initialGravityTicks!==ra.initialGravityTicks||r.hardDrop!==ra.hardDrop||r.matchRounds!==void 0&&r.matchRounds!==ra.matchRounds)throw new Error("Invalid pill-bottle/3 start definition.");return{...i,audioOutput:i.audioOutput??"controllers",settings:{...r,matchRounds:ra.matchRounds},matchId:i.matchId??i.roomId,round:i.round??0}}function js(i,e,t={}){const n=t.pending?["type","playerId","epochId","clientSeq","tick","payload"]:["type","playerId","epochId","clientSeq","tick","payload","serverTime"];if(!bt(e)||!yt(e,n)||!gt(i)||!gt(e.playerId)||!gt(e.epochId)||!Tt(e.clientSeq,1)||!Tt(e.tick)||!t.pending&&!Ui(e.serverTime))throw new Error("Invalid pill controller record.");const s={commandId:i,playerId:e.playerId,epochId:e.epochId,clientSeq:e.clientSeq,tick:e.tick};if(e.type==="attack/rain"){if(!bt(e.payload)||!yt(e.payload,["attackId","colors","columns"])||!gt(e.payload.attackId)||!Array.isArray(e.payload.colors)||!Array.isArray(e.payload.columns)||e.payload.colors.length<2||e.payload.colors.length>4||e.payload.colors.length!==e.payload.columns.length||!e.payload.colors.every(a=>["cyan","pink","yellow"].includes(a))||!e.payload.columns.every(a=>Tt(a,0,7))||new Set(e.payload.columns).size!==e.payload.columns.length)throw new Error("Invalid pill rain attack.");return{...s,type:e.type,payload:e.payload,...t.pending?{}:{serverTime:e.serverTime}}}if(e.type==="progress/tick"){if(!bt(e.payload)||!yt(e.payload,["phase","stateHash"])||!["playing","countdown","lost"].includes(e.payload.phase)||typeof e.payload.stateHash!="string"||!/^pb3-[0-9a-f]{8}$/.test(e.payload.stateHash))throw new Error("Invalid pill progress command.");return{...s,type:e.type,payload:{phase:e.payload.phase,stateHash:e.payload.stateHash},...t.pending?{}:{serverTime:e.serverTime}}}const r=j_(e.type,e.payload);return{...s,...r,...t.pending?{}:{serverTime:e.serverTime}}}function jm(i){if(!bt(i)||!yt(i,["type","playerId","tick","result","stateHash","serverTime"])||i.type!=="player/terminal"||!gt(i.playerId)||!Tt(i.tick)||!["cleared","lost"].includes(i.result)||typeof i.stateHash!="string"||!/^pb3-[0-9a-f]{8}$/.test(i.stateHash)||!Ui(i.serverTime))throw new Error("Invalid pill terminal declaration.");return i}function Q_(i){if(!bt(i)||!yt(i,["playerId","level","serverTime"])||!gt(i.playerId)||!Tt(i.level,0,20)||!Ui(i.serverTime))throw new Error("Invalid pill rematch readiness.");return i}function hd(i){if(!bt(i)||!yt(i,["type","attackId","sourcePlayerId","sourceTick","sourceChain","targetPlayerIds","colors","serverTime"])||i.type!=="attack/generated"||!gt(i.attackId)||!gt(i.sourcePlayerId)||!Tt(i.sourceTick)||!Tt(i.sourceChain,1,100)||!Array.isArray(i.targetPlayerIds)||i.targetPlayerIds.length<1||i.targetPlayerIds.length>3||!i.targetPlayerIds.every(e=>gt(e))||new Set(i.targetPlayerIds).size!==i.targetPlayerIds.length||!Array.isArray(i.colors)||i.colors.length<2||i.colors.length>4||!i.colors.every(e=>["cyan","pink","yellow"].includes(e))||!Ui(i.serverTime))throw new Error("Invalid pill attack interaction.");return i}function uo(i,e,t){try{const n=JSON.parse(i.getItem(e)??"[]");return Array.isArray(n)?n.map(t):[]}catch{return[]}}function fo(i,e,t){i.setItem(e,JSON.stringify(t))}function ey(i,e,t){try{const n=JSON.parse(i.getItem(e)??"null");return n===null?void 0:t(n)}catch{return}}function ty(i,e,t){i.setItem(e,JSON.stringify(t))}function ud(i,e,t,n){return`drm-game:${i}:${e}:${t}:${n}`}const Qr=(i,e)=>`drm-pill-bottle:${i}:${e}`;function ny(i,e){return uo(localStorage,`${Qr(i,e)}:outbox`,t=>{if(!t||typeof t!="object"||typeof t.commandId!="string")throw new Error("Invalid local controller outbox.");const{commandId:n,...s}=t;return js(n,s,{pending:!0})})}function iy(i,e,t){fo(localStorage,`${Qr(i,e)}:outbox`,t)}function sy(i,e){return uo(localStorage,`${Qr(i,e)}:attacks`,t=>{if(!t||typeof t!="object"||typeof t.interactionId!="string")throw new Error("Invalid local attack outbox.");const{interactionId:n,...s}=t,{serverTime:r,...a}=hd({...s,serverTime:0});return{interactionId:n,...a}})}function ry(i,e,t){fo(localStorage,`${Qr(i,e)}:attacks`,t)}function zf(i,e,t,n){const s={commandId:t.commandId,clientSeq:t.clientSeq,tick:t.tick,state:wc(n),stateHash:Fa(n)};ty(localStorage,`${Qr(i,e)}:checkpoint`,s)}function ay(i,e){return ey(localStorage,`${Qr(i,e)}:checkpoint`,t=>{const n=t;if(!n||typeof n.commandId!="string"||!Number.isInteger(n.clientSeq)||!Number.isInteger(n.tick)||typeof n.stateHash!="string")throw new Error("Invalid local checkpoint.");const s=ld(n.state);if(s.tick!==n.tick||Fa(s)!==n.stateHash)throw new Error("Invalid local checkpoint state.");return n})}function Qm(i,e,t){if(!ue)throw new Error("Firebase is unavailable.");let n=!1,s=[],r=[],a=[],o=0,l,c={};const u=new Map,d=[],h=()=>{if(s.length===0)return;const f=Km(s,r,a,o);if(!l)return e(f);const p=Jm(l,f,u),v=Object.fromEntries(s.map(g=>[g,(c[g]??0)+p[g]]));e({...f,roundPoints:p,scores:v})};return(async()=>{try{const f=await St(De(ue,`games/${i}/start`));if(n||!f.exists())return;const p=ho(f.val());l=p,s=Object.keys(p.players),o=p.round,c=await hy(p.previousGameId,p.matchId),await Promise.all(s.map(async v=>{const g=await St(De(ue,`games/${i}/players/${v}/records`)),m=[];g.forEach(y=>{const b=Wr(js(y.key,y.val()));b.playerId===v&&m.push(b)}),m.sort((y,b)=>y.clientSeq-b.clientSeq),u.set(v,m),d.push(ji(De(ue,`games/${i}/players/${v}/records`),y=>{try{const b=Wr(js(y.key,y.val())),_=u.get(v)??[];b.playerId===v&&!_.some(w=>w.commandId===b.commandId)&&(_.push(b),_.sort((w,M)=>w.clientSeq-M.clientSeq),u.set(v,_),h())}catch(b){t(b instanceof Error?b:new Error(String(b)))}},t))})),d.push(si(De(ue,`games/${i}/terminals`),v=>{try{r=[],v.forEach(g=>{const m=jm(g.val());g.key===m.playerId&&s.includes(m.playerId)&&r.push(m)}),h()}catch(g){t(g instanceof Error?g:new Error(String(g)))}},t)),d.push(si(De(ue,`games/${i}/rematch/ready`),v=>{try{a=[],v.forEach(g=>{const m=Q_(g.val());g.key===m.playerId&&s.includes(m.playerId)&&a.push(m.playerId)}),h()}catch(g){t(g instanceof Error?g:new Error(String(g)))}},t)),h()}catch(f){t(f instanceof Error?f:new Error(String(f)))}})(),()=>{n=!0;for(const f of d)f()}}async function oy(i,e){return Tc(i,e)}async function eg(i){return Ac(i,ho,e=>({advance:Object.keys(e.players).length>1&&e.round+1<At.matchRounds}))}function Wr(i){const{serverTime:e,...t}=i;return t}function ly(i,e,t,n,s,r=!0){if(!ue)throw new Error("Firebase is unavailable.");let a=!1,o=0;const l=new Ss(At.tickRate);let c=!1,u=new Set,d=!1;const h=[],f=new Map,p=new Map,v=Qm(i,y=>{c=y.finished,u=new Set(y.terminalPlayerIds),n?.(y),r&&y.allReady&&!d&&(d=!0,eg(i).catch(b=>{d=!1,t(b)}))},t),g=()=>{e([...f.entries()].map(([y,b])=>{const _=b.snapshot();return{playerId:y,tick:_.displayTick,..._}}))},m=y=>{if(!a){for(let b=l.consume(y);b>0;b--)if(!c)for(const[_,w]of f)u.has(_)||w.advance();g(),o=requestAnimationFrame(m)}};return(async()=>{try{const y=await St(De(ue,`games/${i}/start`));if(a||!y.exists())return;const b=ho(y.val());s?.(b);let _=0;if(await Promise.all(Object.keys(b.players).map(async w=>{const M=await St(De(ue,`games/${i}/players/${w}/records`)),A=[];M.forEach(x=>{const E=Wr(js(x.key,x.val()));E.playerId===w&&A.push(E)}),A.sort((x,E)=>x.clientSeq-E.clientSeq);for(const x of A)x.type==="progress/tick"&&(_=Math.max(_,x.tick));p.set(w,A)})),a)return;for(const[w,M]of Object.entries(b.players)){const A=new X_(sd(b.seed,M.seat,M.level),_);f.set(w,A);for(const x of p.get(w)??[])A.receive(x);h.push(ji(De(ue,`games/${i}/players/${w}/records`),x=>{try{const E=Wr(js(x.key,x.val()));if(E.playerId===w){const C=p.get(w)??[];C.some(D=>D.commandId===E.commandId)||(C.push(E),C.sort((D,k)=>D.clientSeq-k.clientSeq),p.set(w,C)),A.receive(E)}g()}catch(E){t(E instanceof Error?E:new Error(String(E)))}},t))}g(),o=requestAnimationFrame(m)}catch(y){t(y instanceof Error?y:new Error(String(y)))}})(),()=>{a=!0,cancelAnimationFrame(o),v();for(const y of h)y()}}function rI(i,e,t){if(!ue)throw new Error("Firebase is unavailable.");return K_(ue,i,hd,()=>e(),t)}function cy(i,e){od(i,e.tick,[]),e.type!=="progress/tick"&&Hr(i,e)}async function hy(i,e){const t={};let n=i;for(;n&&ue;){const s=await St(De(ue,`games/${n}/start`));if(!s.exists())break;const r=ho(s.val());if(r.matchId!==e)break;const a=await St(De(ue,`games/${n}/terminals`)),o=[];a.forEach(h=>{o.push(jm(h.val()))});const l=Object.keys(r.players),c=Km(l,o,[],r.round),u=new Map;await Promise.all(l.map(async h=>{const f=await St(De(ue,`games/${n}/players/${h}/records`)),p=[];f.forEach(v=>{p.push(Wr(js(v.key,v.val())))}),p.sort((v,g)=>v.clientSeq-g.clientSeq),u.set(h,p)}));const d=Jm(r,c,u);for(const h of l)t[h]=(t[h]??0)+d[h];n=r.previousGameId}return t}function aI(i,e){if(!ii?.currentUser||!ue)throw new Error("Firebase is unavailable.");const t=ii.currentUser.uid;let n=0,s=0,r=-1,a=0;const o=new Ss(At.tickRate);let l=!1,c=!1,u=!1,d=!1,h=!1,f=!1,p=!1,v=!1,g,m,y,b,_=0,w=!1,M=[],A=[],x=()=>{},E=()=>{};const C=new Set,D=ny(i,t),k=sy(i,t),L=le=>e({playerId:t,tick:n,ready:l,bottle:m?structuredClone(m):void 0,lastCommand:g,error:le,lifecycle:y,audioOutput:b,rainSignal:_,ownershipConflict:w,opponents:A.map(me=>({...me,state:structuredClone(me.state)}))}),B=new Cc(ue,`games/${i}/players/${t}/writer`,()=>{w=!0,l=!1,d=!0,cancelAnimationFrame(a),L("Control moved to another tab or device.")}),O=B.epochId,U=new ka({initial:D,order:(le,me)=>le.clientSeq-me.clientSeq,identify:le=>le.commandId,persist:le=>iy(i,t,le),deliver:async le=>{const{commandId:me,...Me}=le;await Mn(De(ue,`games/${i}/players/${t}/records/${me}`),{...Me,serverTime:wn()})}}),N=new ka({initial:k,order:()=>0,identify:le=>le.interactionId,persist:le=>ry(i,t,le),deliver:async le=>{const{interactionId:me,...Me}=le;await Mn(De(ue,`games/${i}/interactions/${me}`),{...Me,serverTime:wn()})}}),F=Qm(i,le=>{y=le,h=le.finished,f=le.terminalPlayerIds.includes(t),h&&(cancelAnimationFrame(a),o.reset()),le.allReady&&!v&&(v=!0,eg(i).catch(me=>{v=!1,L(me instanceof Error?me.message:String(me))})),L()},le=>L(le.message));function H(le){m&&(U.enqueue(le),s=le.clientSeq)}function ee(le){if(m){try{zf(i,t,le,m)}catch{}U.flush()}}function K(le){if(n<r)throw new Error("A controller record cannot precede its latest progress tick.");const me=Gr(De(ue,`games/${i}/players/${t}/records`));if(!me.key)throw new Error("Could not allocate a controller record identifier.");return{commandId:me.key,playerId:t,epochId:O,clientSeq:s+1,tick:n,...le}}function te(le){for(const me of le){const Me=N_(me);if(Me.length===0)continue;const ne=M.filter(_e=>_e!==t&&!y?.terminalPlayerIds.includes(_e));if(ne.length===0){_++;continue}const ae=`${t}-${O}-${me.tick}-${me.chain}`,oe=Gr(De(ue,`games/${i}/interactions`));if(!oe.key)throw new Error("Could not allocate an attack interaction identifier.");const ge={interactionId:oe.key,type:"attack/generated",attackId:ae,sourcePlayerId:t,sourceTick:me.tick,sourceChain:me.chain,targetPlayerIds:ne,colors:Me};N.enqueue(ge)}}function Ce(le=!1){if(!m||!le&&n-r<15)return;const me=K({type:"progress/tick",payload:{phase:m.phase,stateHash:Fa(m)}});H(me),r=n,ee(me)}async function ct(){if(!m||p)return;const le=(y?.playerIds.length??0)>1,me=m.phase==="lost"?"lost":le&&m.phase==="countdown"?"cleared":void 0;if(me){p=!0;try{const Me=De(ue,`games/${i}/terminals/${t}`);(await St(Me)).exists()||await Mn(Me,{type:"player/terminal",playerId:t,tick:n,result:me,stateHash:Fa(m),serverTime:wn()})}catch{p=!1}}}function it(le){if(u||!l||d||h||f)return;const me=m?.phase;for(let Me=o.consume(le);Me>0;Me--){if(!m||m.phase==="lost"||m.phase==="countdown"&&(y?.playerIds.length??0)>1){o.reset();break}te(ad(m)),n=m.tick}m?.phase!==me||m?.phase==="lost"&&r!==n?Ce(!0):Ce(),ct(),L(),a=requestAnimationFrame(it)}const X=si(De(ue,`games/${i}/start`),async le=>{if(!(!le.exists()||l||c)){c=!0;try{const me=ho(le.val());if(b=me.audioOutput,M=Object.keys(me.players),!me.players[t])throw new Error("Player is not part of this pill-bottle/3 game.");if(E(),E=ly(i,ve=>{A=ve.filter(Ue=>Ue.playerId!==t),L()},ve=>L(ve.message),void 0,void 0,!1),!await B.claim())throw w=!0,new Error("This controller is already active in another tab.");const Me=await St(De(ue,`games/${i}/players/${t}/records`)),ne=new Map;Me.forEach(ve=>{const Ue=Wr(js(ve.key,ve.val()));Ue.playerId===t&&ne.set(Ue.commandId,Ue)});for(const ve of U.values())ne.set(ve.commandId,ve);const ae=[...ne.values()].sort((ve,Ue)=>ve.clientSeq-Ue.clientSeq);for(const ve of ae)ve.type==="attack/rain"&&C.add(ve.payload.attackId);ae.forEach((ve,Ue)=>{if(ve.clientSeq!==Ue+1)throw new Error("Controller record history has a sequence gap.");if(Ue>0&&ve.tick<ae[Ue-1].tick)throw new Error("Controller record ticks moved backward.")});const oe=ay(i,t),ge=oe&&ae.find(ve=>ve.commandId===oe.commandId&&ve.clientSeq===oe.clientSeq&&ve.tick===oe.tick);m=ge?ld(oe.state):sd(me.seed,me.players[t].seat,me.players[t].level);for(const ve of ae)ge&&ve.clientSeq<=ge.clientSeq||cy(m,ve);if(s=ae.at(-1)?.clientSeq??0,n=m.tick,r=ae.reduce((ve,Ue)=>Ue.type==="progress/tick"?Math.max(ve,Ue.tick):ve,-1),ae.length>0)try{zf(i,t,ae.at(-1),m)}catch{}await Mn(De(ue,`games/${i}/players/${t}/epochs/${O}`),{clientId:B.clientId,startedFromTick:n,startedFromCommandSeq:s,serverTime:wn()});const _e=De(ue,`games/${i}/interactions`),je=await St(_e),He=new Set;je.forEach(ve=>{He.add(ve.key)}),l=!0,x=ji(_e,ve=>{try{const Ue=hd(ve.val());if(He.delete(ve.key)||_++,!Ue.targetPlayerIds.includes(t)||C.has(Ue.attackId)||!m){L();return}const z={type:"attack/rain",payload:{attackId:Ue.attackId,colors:Ue.colors,columns:F_(Ue.attackId,Ue.colors.length)}},Ct=K(z);H(Ct),Hr(m,z),C.add(Ue.attackId),ee(Ct),m.phase==="lost"&&(Ce(!0),ct()),L()}catch(Ue){L(Ue instanceof Error?Ue.message:String(Ue))}},ve=>L(ve.message)),Ce(!0),ct(),L(),U.flush(),N.flush(),a=requestAnimationFrame(it)}catch(me){L(me instanceof Error?me.message:String(me))}finally{c=!1}}},le=>L(le.message)),ce=()=>{U.flush(),N.flush()};window.addEventListener("online",ce);function J(){!l||d||h||(Ce(!0),d=!0,cancelAnimationFrame(a),o.reset())}function pe(){!l||!d||u||h||(d=!1,o.reset(),Ce(!0),a=requestAnimationFrame(it))}async function Ne(le){if(!l||!m||m.phase!=="playing"||h)return;const me=m.phase,Me=K(le);H(Me),te(Hr(m,le)),ee(Me);const ne=m.phase;ne!==me&&Ce(!0),ne==="lost"&&ct(),g=`${le.type} · tick ${n}`,L()}return{command:Ne,requestRematch:le=>oy(i,le),async takeOver(){await B.takeOver()&&(w=!1,l=!0,d=!1,o.reset(),a=requestAnimationFrame(it),L())},suspend:J,resume:pe,destroy(){l&&!d&&Ce(!0),u=!0,X(),F(),x(),E(),cancelAnimationFrame(a),U.destroy(),N.destroy(),B.release(),window.removeEventListener("online",ce)}}}var Vf=xt("<i></i>"),uy=xt('<span class="next-piece svelte-63ux23"></span>'),dy=xt('<div class="next svelte-63ux23"></div>'),fy=xt('<div><!> <div class="matrix svelte-63ux23" role="img"></div></div>');function oI(i,e){gn(e,!1);const t=lt();let n=Ge(e,"state",8),s=Ge(e,"label",8,"Block Stack board"),r=Ge(e,"compact",8,!1);const a={I:"#30d9d4",J:"#4d72ff",L:"#ff9f43",O:"#f5d547",S:"#5fe06d",T:"#b66cff",Z:"#ff4f64"};function o(p){const v=p.active?Mh(p.active):[],g=p.active?Mh({...p.active,row:Bv(p)}):[];return Array.from({length:zv*wo},(m,y)=>{const b=Math.floor(y/wo)+Vv,_=y%wo;if(p.active&&v.some(M=>M.row===b&&M.col===_))return{kind:p.active.kind,ghost:!1,active:!0};const w=p.board[b*wo+_];return w?{kind:w,ghost:!1,active:!1}:p.active&&g.some(M=>M.row===b&&M.col===_)?{kind:p.active.kind,ghost:!0,active:!1}:void 0})}function l(p){const v=new Set(Mh({kind:p,row:0,col:0,orientation:0}).map(({row:g,col:m})=>`${g}:${m}`));return Array.from({length:16},(g,m)=>v.has(`${Math.floor(m/4)}:${m%4}`))}Vt(()=>Ae(n()),()=>{de(t,o(n()))}),Li(),Ji();var c=fy();let u;var d=It(c);{var h=p=>{var v=dy();Cn(v,5,()=>(Ae(n()),ze(()=>n().next.slice(0,3))),kn,(g,m)=>{var y=uy();Cn(y,5,()=>(P(m),ze(()=>l(P(m)))),kn,(b,_)=>{var w=Vf();let M;Yt(()=>M=Qn(w,1,"svelte-63ux23",null,M,{occupied:P(_)})),st(b,w)}),_t(y),Yt(()=>{at(y,"aria-label",`${P(m)} piece`),xu(y,(P(m),ze(()=>`--piece:${a[P(m)]}`)))}),st(g,y)}),_t(v),Yt(g=>at(v,"aria-label",g),[()=>(Ae(n()),ze(()=>`Next pieces: ${n().next.slice(0,3).join(", ")}`))]),st(p,v)};Sn(d,p=>{r()||p(h)})}var f=Je(d,2);Cn(f,5,()=>P(t),kn,(p,v)=>{var g=Vf();let m;Yt(y=>{xu(g,(P(v),ze(()=>P(v)?`--piece:${a[P(v).kind]}`:""))),m=Qn(g,1,"svelte-63ux23",null,m,y)},[()=>({filled:!!(P(v)&&!P(v).ghost),active:P(v)?.active,ghost:P(v)?.ghost})]),st(p,g)}),_t(f),_t(c),Yt(()=>{u=Qn(c,1,"tetris-shell svelte-63ux23",null,u,{compact:r()}),at(f,"aria-label",s()),at(f,"data-lines",(Ae(n()),ze(()=>n().lines))),at(f,"data-score",(Ae(n()),ze(()=>n().score))),at(f,"data-level",(Ae(n()),ze(()=>n().level))),at(f,"data-phase",(Ae(n()),ze(()=>n().phase))),at(f,"data-active-row",(Ae(n()),ze(()=>n().active?.row))),at(f,"data-active-id",(Ae(n()),ze(()=>n().active?.id)))}),st(i,c),vn()}const Gf=""+new URL("../assets/Granite Promenade.B9kdwy7x.mp3",import.meta.url).href,py=""+new URL("../assets/Snowbound Sabre.U751p-Yz.mp3",import.meta.url).href;function lI(i,e){gn(e,!1);const t=lt();let n=Ge(e,"enabled",8,!1),s=Ge(e,"level",8,0);Vt(()=>(Ae(s()),Gf),()=>{de(t,s()%2?py:Gf)}),Li();{let r=Gi(()=>`tetris:${s()}`);oo(i,{get enabled(){return n()},get loopUrl(){return P(t)},get loopKey(){return P(r)}})}vn()}function my(i){if(!bt(i)||!yt(i,["type","roomId","ruleset","rulesVersion","seed","tickRate","hostUid","audioOutput","members","players","settings","matchId","round","previousGameId","serverTime"])||i.type!=="game/started"||i.ruleset!=="tetris"||i.rulesVersion!=="tetris/1"||i.tickRate!==60||!Tt(i.seed,0,4294967295)||!Tt(i.round,0,99)||!gt(i.matchId)||!gt(i.hostUid)||!gt(i.roomId)||!Ui(i.serverTime)||!bt(i.members)||!bt(i.players)||!bt(i.settings)||!yt(i.settings,["width","height","hiddenRows","matchRounds"])||i.settings.width!==10||i.settings.height!==20||i.settings.hiddenRows!==2||!Tt(i.settings.matchRounds,1,99)||i.previousGameId!==void 0&&!gt(i.previousGameId)||i.audioOutput!=="cast"&&i.audioOutput!=="controllers")throw new Error("Invalid tetris/1 start record.");const e=i.members,t=i.players;if(!Object.entries(e).every(([n,s])=>gt(n)&&s===!0)||!Object.entries(t).every(([n,s])=>gt(n)&&e[n]===!0&&bt(s)&&yt(s,["seat","level"])&&Tt(s.seat,0,3)&&Tt(s.level,0,20)))throw new Error("Invalid Tetris roster.");return i}function gy(i,e,t=!1){const n=cd(i,e,t),s=bt(n.payload)?n.payload:{};if(n.type==="input/move"&&yt(s,["dx"])&&(s.dx===-1||s.dx===1))return{commandId:i,...n,type:"input/move",payload:{dx:s.dx}};if(n.type==="input/rotate"&&yt(s,["direction"])&&(s.direction==="clockwise"||s.direction==="counterclockwise"))return{commandId:i,...n,type:"input/rotate",payload:{direction:s.direction}};if(["input/soft-drop-start","input/soft-drop-end","input/hard-drop"].includes(n.type)&&yt(s,[]))return{commandId:i,...n,type:n.type,payload:{}};if(n.type==="progress/tick"&&yt(s,["phase","stateHash"])&&(s.phase==="playing"||s.phase==="lost")&&typeof s.stateHash=="string"&&/^t1-[0-9a-f]{8}$/.test(s.stateHash))return{commandId:i,...n,type:"progress/tick",payload:{phase:s.phase,stateHash:s.stateHash}};throw new Error("Invalid Tetris controller payload.")}const Rc=my,El=gy;function vy(i,e,t){if(!ue)throw new Error("Firebase unavailable.");let n=[],s=[],r=1,a=0,o=[];const l=()=>{n.length&&e(Zm(n,o,s,a,r))},c=[];return St(De(ue,`games/${i}/start`)).then(u=>{const d=Rc(u.val());n=Object.keys(d.players),r=d.settings.matchRounds,a=d.round,c.push(ji(De(ue,`games/${i}/terminals`),h=>{const f=h.val();f?.result==="lost"&&(o=[...o.filter(p=>p.playerId!==f.playerId),{playerId:f.playerId,result:"lost",tick:f.tick}]),l()},t),si(De(ue,`games/${i}/rematch/ready`),h=>{s=[],h.forEach(f=>{f.val()?.playerId===f.key&&n.includes(f.key)&&s.push(f.key)}),l()},t)),l()}).catch(u=>t(u instanceof Error?u:new Error(String(u)))),()=>c.forEach(u=>u())}const cI=(i,e)=>Tc(i,e),_y=i=>Ac(i,Rc,e=>({advance:e.round+1<e.settings.matchRounds}));function hI(i,e){if(!ii?.currentUser||!ue)throw new Error("Firebase unavailable.");const t=ii.currentUser.uid,n=new Ss(km.tickRate),s=ud("tetris",i,t,"outbox");let r,a=0,o=0,l=!1,c=!1,u=!1,d=!1,h=0,f=-1,p,v,g,m=!1,y=[],b=()=>{};const _=uo(localStorage,s,U=>{if(!U||typeof U!="object"||typeof U.commandId!="string")throw new Error("Invalid Tetris outbox.");const{commandId:N,...F}=U;return El(N,F,!0)}),w=U=>e({playerId:t,tick:a,ready:l,state:r?structuredClone(r):void 0,lifecycle:g,audioOutput:v,error:U,lastCommand:p,ownershipConflict:m,opponents:y.map(N=>({...N,state:structuredClone(N.state)}))}),M=new Cc(ue,`games/${i}/players/${t}/writer`,()=>{m=!0,l=!1,cancelAnimationFrame(h),w("This controller was taken over by another tab.")}),A=vy(i,U=>{g=U,U.finished&&cancelAnimationFrame(h),U.allReady&&!d&&(d=!0,_y(i).catch(N=>{d=!1,w(N instanceof Error?N.message:String(N))})),w()},U=>w(U.message)),x=new ka({initial:_,order:(U,N)=>U.clientSeq-N.clientSeq,identify:U=>U.commandId,persist:U=>fo(localStorage,s,U),deliver:async U=>{if(!l)throw new Error("Controller is not ready.");const{commandId:N,...F}=U;await Mn(De(ue,`games/${i}/players/${t}/records/${N}`),{...F,serverTime:wn()})},failed:U=>w(U instanceof Error?U.message:String(U))}),E=U=>{const F={commandId:Gr(De(ue,`games/${i}/players/${t}/records`)).key,playerId:t,epochId:M.epochId,clientSeq:++o,tick:a,...U};return x.enqueue(F),F},C=(U=!1)=>{!r||!U&&a-f<15||(E({type:"progress/tick",payload:{phase:r.phase,stateHash:yu(r)}}),f=a)},D=()=>r?.phase==="lost",k=()=>{D()&&r&&Mn(De(ue,`games/${i}/terminals/${t}`),{type:"player/terminal",playerId:t,tick:a,result:"lost",stateHash:yu(r),serverTime:wn()}).catch(U=>w(U.message))},L=U=>{if(!(c||u||!l||!r||D()||g?.finished)){for(let N=n.consume(U);N>0;N--)Vm(r),a=r.tick;C(),D()&&(C(!0),k()),w(),h=requestAnimationFrame(L)}},B=si(De(ue,`games/${i}/start`),async U=>{if(!l)try{const N=Rc(U.val());if(!N.players[t])throw new Error("Player is not part of this Tetris game.");if(v=N.audioOutput,!await M.claim())throw m=!0,new Error("This controller is already active in another tab.");m=!1,b(),b=yy(i,K=>{y=K.filter(te=>te.playerId!==t),w()},K=>w(K.message));const F=await St(De(ue,`games/${i}/players/${t}/records`)),H=new Map;F.forEach(K=>{const te=El(K.key,K.val());H.set(te.commandId,te)});for(const K of x.values())H.set(K.commandId,K);const ee=[...H.values()].sort((K,te)=>K.clientSeq-te.clientSeq);r=Gv(Bm(N.seed,N.players[t].level),Math.max(0,...ee.map(K=>K.tick)),ee),a=r.tick,o=Math.max(0,...ee.map(K=>K.clientSeq)),await Mn(De(ue,`games/${i}/players/${t}/epochs/${M.epochId}`),{clientId:M.clientId,startedFromTick:a,startedFromCommandSeq:o,serverTime:wn()}),l=!0,x.flush(),C(!0),w(),h=requestAnimationFrame(L);return}catch(N){w(N instanceof Error?N.message:String(N));return}},U=>w(U.message)),O=()=>{x.flush()};return window.addEventListener("online",O),{command(U){!l||!r||r.phase!=="playing"||(E(U),zm(r,U),a=r.tick,p=`${U.type} · tick ${a}`,D()&&(C(!0),k()),w())},suspend(){!l||u||(u=!0,cancelAnimationFrame(h),n.reset(),C(!0))},resume(){!l||!u||(u=!1,n.reset(),h=requestAnimationFrame(L))},async takeOver(){await M.takeOver()&&(m=!1,l=!0,u=!1,x.flush(),h=requestAnimationFrame(L),w())},destroy(){C(!0),c=!0,B(),A(),b(),cancelAnimationFrame(h),window.removeEventListener("online",O),x.destroy(),M.release()}}}function yy(i,e,t){if(!ue)throw new Error("Firebase unavailable.");let n=!1,s=0,r;const a=new Ss(km.tickRate),o=new Map,l=new Map,c=[],u={clone:h=>structuredClone(h),tick:h=>h.tick,advanceTo:(h,f)=>{for(;h.tick<f&&h.phase==="playing";)Vm(h)},apply:(h,f)=>{f.type!=="progress/tick"&&zm(h,f)},hash:yu,phase:h=>h.phase,terminal:h=>h.phase==="lost",progress:h=>h.type==="progress/tick"?h.payload:void 0},d=()=>e([...l].map(([h,f])=>{const p=f.snapshot();return{playerId:h,tick:p.displayTick,controllerTick:p.controllerTick,lag:p.lag,state:p.state,hashMatches:p.hashMatches}}));return St(De(ue,`games/${i}/start`)).then(async h=>{r=Rc(h.val());let f=0;if(await Promise.all(Object.keys(r.players).map(async v=>{const g=await St(De(ue,`games/${i}/players/${v}/records`)),m=[];g.forEach(y=>{m.push(El(y.key,y.val()))}),m.sort((y,b)=>y.clientSeq-b.clientSeq),o.set(v,m);for(const y of m)y.type==="progress/tick"&&(f=Math.max(f,y.tick))})),n)return;for(const v of Object.keys(r.players)){const g=new Ec(u,Bm(r.seed,r.players[v].level),f);l.set(v,g);for(const m of o.get(v)??[])g.receive(m);c.push(ji(De(ue,`games/${i}/players/${v}/records`),m=>{try{g.receive(El(m.key,m.val())),d()}catch(y){t(y instanceof Error?y:new Error(String(y)))}},t))}const p=v=>{if(!n){for(let g=a.consume(v);g>0;g--)for(const m of l.values())m.advance();d(),s=requestAnimationFrame(p)}};d(),s=requestAnimationFrame(p)}).catch(h=>t(h instanceof Error?h:new Error(String(h)))),()=>{n=!0,cancelAnimationFrame(s),c.forEach(h=>h())}}var xy=xt("<span> </span>"),by=xt("<div> </div>"),Sy=xt('<button type="button">▲</button>'),My=xt("<div>▲</div>"),wy=xt("<!><!>",1),Ey=xt("<i>✦</i>"),Ty=xt('<div><div class="progress svelte-40oo2k" aria-label="Current match group"></div> <div class="board svelte-40oo2k"><!><div class="effects svelte-40oo2k" aria-hidden="true"><!></div></div></div>');function uI(i,e){gn(e,!1);let t=Ge(e,"state",8),n=Ge(e,"label",8,"Quarry Match board"),s=Ge(e,"compact",8,!1),r=Ge(e,"selectColumn",8,void 0);const a={cyan:"◆",pink:"●",yellow:"✦",green:"▲",purple:"■"};Ji();var o=Ty();let l;var c=It(o);Cn(c,4,()=>[0,1,2],kn,(p,v)=>{var g=xy();let m;var y=It(g,!0);_t(g),Yt(()=>{m=Qn(g,1,"svelte-40oo2k",null,m,{stone:v<t().groupCount,occupied:v<t().groupCount,cyan:t().groupColor==="cyan",pink:t().groupColor==="pink",yellow:t().groupColor==="yellow",green:t().groupColor==="green",purple:t().groupColor==="purple"}),ti(y,(Ae(t()),ze(()=>v<t().groupCount&&t().groupColor?a[t().groupColor]:"·")))}),st(p,g)}),_t(c);var u=Je(c,2),d=It(u);Cn(d,1,()=>(Ae(t()),ze(()=>t().columns)),kn,(p,v,g)=>{var m=wy(),y=tn(m);Cn(y,0,()=>Array(12),kn,(M,A,x)=>{const E=Gi(()=>(Ae(t()),P(v),ze(()=>t().rulesVersion==="crystal-canopy/1"?P(v)[x]:P(v)[11-x])));var C=by();let D;var k=It(C,!0);_t(C),Yt(L=>{D=Qn(C,1,"cell svelte-40oo2k",null,D,L),ti(k,(Ae(P(E)),ze(()=>P(E)?a[P(E)]:"")))},[()=>({occupied:!!P(E),cyan:P(E)==="cyan",pink:P(E)==="pink",yellow:P(E)==="yellow",green:P(E)==="green",purple:P(E)==="purple"})]),st(M,C)});var b=Je(y);{var _=M=>{var A=Sy();let x;at(A,"aria-label",`Shoot column ${g+1}`),Yt(()=>x=Qn(A,1,"cursor svelte-40oo2k",null,x,{selected:t().cursor===g})),di("pointerdown",A,Xm(()=>r()?.(g))),st(M,A)},w=M=>{var A=My();let x;Yt(()=>x=Qn(A,1,"cursor svelte-40oo2k",null,x,{selected:t().cursor===g})),st(M,A)};Sn(b,M=>{r()?M(_):M(w,-1)})}st(p,m)});var h=Je(d),f=It(h);c_(f,()=>(Ae(t()),ze(()=>t().cascades)),p=>{var v=ro(),g=tn(v);Cn(g,1,()=>(Ae(t()),ze(()=>t().lastCascadeCells??[])),kn,(m,y)=>{var b=Ey();let _;Yt(()=>{_=Qn(b,1,"burst svelte-40oo2k",null,_,{cyan:P(y).color==="cyan",pink:P(y).color==="pink",yellow:P(y).color==="yellow",green:P(y).color==="green",purple:P(y).color==="purple"}),xu(b,(P(y),ze(()=>`grid-column:${P(y).column+1};grid-row:${12-P(y).row}`)))}),st(m,b)}),st(p,v)}),_t(h),_t(u),_t(o),Yt(()=>{l=Qn(o,1,"quarry-shell svelte-40oo2k",null,l,{compact:s(),canopy:t().rulesVersion==="crystal-canopy/1"}),at(o,"aria-label",n()),at(o,"data-remaining",(Ae(t()),ze(()=>t().total-t().removed))),at(o,"data-cursor",(Ae(t()),ze(()=>t().cursor))),at(o,"data-cascades",(Ae(t()),ze(()=>t().cascades)))}),st(i,o),vn()}const Hf=""+new URL("../assets/Prismatic Descent.ZNplIXQf.mp3",import.meta.url).href,Wf=""+new URL("../assets/Prismatic Descent Clear.BmLl8QF3.mp3",import.meta.url).href,Ay=""+new URL("../assets/Prismatic Descent Combo.hOwJq7xI.mp3",import.meta.url).href,Cy=""+new URL("../assets/Prismatic Descent Reset.XTEzipFH.mp3",import.meta.url).href;function dI(i,e){gn(e,!1);const t=lt();let n=Ge(e,"enabled",8,!1),s=Ge(e,"phase",8,"playing"),r=Ge(e,"cascadeSignal",8,0),a=Ge(e,"resetSignal",8,0),o=lt(s()),l=lt(r()),c=lt(a()),u=lt(0),d=lt(Wf);Vt(()=>(Ae(s()),Hf),()=>{de(t,s()==="playing"?Hf:void 0)}),Vt(()=>(Ae(r()),P(l),P(u)),()=>{r()>P(l)&&(de(d,Ay),hn(u),de(l,r()))}),Vt(()=>(Ae(a()),P(c),P(u)),()=>{a()>P(c)&&(de(d,Cy),hn(u),de(c,a()))}),Vt(()=>(Ae(s()),P(o),P(u)),()=>{s()!==P(o)&&(s()==="cleared"&&(de(d,Wf),hn(u)),de(o,s()))}),Li(),oo(i,{get enabled(){return n()},get loopUrl(){return P(t)},loopKey:"quarry-match",get cueUrl(){return P(d)},get cueSignal(){return P(u)}}),vn()}const Xf=""+new URL("../assets/Glacial Vault.Dw_n7dj9.mp3",import.meta.url).href,Ry=""+new URL("../assets/Glacial Vault Clear.C5HrP9Bz.mp3",import.meta.url).href,qf=""+new URL("../assets/Glacial Vault Shot.Ckp_Mc68.mp3",import.meta.url).href,Iy=""+new URL("../assets/Glacial Vault Triple.Bb19vC-Z.mp3",import.meta.url).href,Py=""+new URL("../assets/Glacial Vault Reset.DYr4V8th.mp3",import.meta.url).href;function fI(i,e){gn(e,!1);const t=lt();let n=Ge(e,"enabled",8,!1),s=Ge(e,"phase",8,"playing"),r=Ge(e,"shotSignal",8,0),a=Ge(e,"tripleSignal",8,0),o=Ge(e,"resetSignal",8,0),l=lt(s()),c=lt(r()),u=lt(a()),d=lt(o()),h=lt(0),f=lt(qf);Vt(()=>(Ae(s()),Xf),()=>{de(t,s()==="playing"?Xf:void 0)}),Vt(()=>(Ae(r()),P(c),P(h)),()=>{r()>P(c)&&(de(f,qf),hn(h),de(c,r()))}),Vt(()=>(Ae(a()),P(u),P(h)),()=>{a()>P(u)&&(de(f,Iy),hn(h),de(u,a()))}),Vt(()=>(Ae(o()),P(d),P(h),Ae(r()),Ae(a())),()=>{o()>P(d)&&(de(f,Py),hn(h),de(d,o()),de(c,r()),de(u,a()))}),Vt(()=>(Ae(s()),P(l),P(h)),()=>{s()!==P(l)&&(s()==="cleared"&&(de(f,Ry),hn(h)),de(l,s()))}),Li(),oo(i,{get enabled(){return n()},get loopUrl(){return P(t)},loopKey:"crystal-canopy",get cueUrl(){return P(f)},get cueSignal(){return P(h)}}),vn()}function Dy(i){let e=2166136261;for(const t of i)e^=t.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0}function Ly(i,e){const t=Array.from({length:Lf},(s,r)=>r);let n=Dy(i);for(let s=t.length-1;s>0;s--){n=Math.imul(n,1664525)+1013904223>>>0;const r=n%(s+1);[t[s],t[r]]=[t[r],t[s]]}return t.slice(0,Math.min(e,Lf))}function Uy(i,e,t,n,s,r=3){const a=Object.fromEntries(i.map(c=>[c,e[c]??0]));t&&i.includes(t)?a[t]++:t=void 0;const o=!!t,l=n.filter(c=>i.includes(c));return{playerIds:i,readyPlayerIds:l,finished:o,winnerId:t,allReady:o&&i.every(c=>l.includes(c)),round:s,matchComplete:!!(t&&a[t]>=r),roundPoints:Object.fromEntries(i.map(c=>[c,c===t?1:0])),scores:a}}function Ny(i){if(!bt(i)||!yt(i,["type","roomId","ruleset","rulesVersion","seed","tickRate","hostUid","audioOutput","members","players","settings","matchId","round","previousGameId","scores","serverTime"])||i.type!=="game/started"||!(i.ruleset==="quarry-match"&&i.rulesVersion==="quarry-match/1"||i.ruleset==="crystal-canopy"&&i.rulesVersion==="crystal-canopy/1")||i.tickRate!==60||!Tt(i.seed,0,4294967295)||!Tt(i.round,0,4)||!gt(i.matchId)||!gt(i.hostUid)||!gt(i.roomId)||!Ui(i.serverTime)||!bt(i.members)||!bt(i.players)||!bt(i.settings)||!yt(i.settings,["width","height","targetWins","matchRounds"])||i.settings.width!==5||i.settings.height!==12||i.settings.targetWins!==3||i.settings.matchRounds!==5||i.previousGameId!==void 0&&!gt(i.previousGameId)||i.audioOutput!=="cast"&&i.audioOutput!=="controllers")throw new Error("Invalid match-puzzle start record.");const e=i.members,t=i.players,n=i.scores;if(!Object.entries(e).every(([s,r])=>gt(s)&&r===!0)||!Object.entries(t).every(([s,r])=>gt(s)&&e[s]===!0&&bt(r)&&yt(r,["seat","level"])&&Tt(r.seat,0,3)&&Tt(r.level,0,20))||n!==void 0&&(!bt(n)||!yt(n,Object.keys(t))||!Object.keys(t).every(s=>Tt(n[s],0,3))))throw new Error("Invalid Quarry Match roster or scores.");return i}function Oy(i,e,t=!1){const n=cd(i,e,t),s=bt(n.payload)?n.payload:{};if(n.type==="input/move"&&yt(s,["dx"])&&(s.dx===-1||s.dx===1))return{commandId:i,...n,type:"input/move",payload:{dx:s.dx}};if((n.type==="input/fire"||n.type==="input/restart")&&yt(s,[]))return{commandId:i,...n,type:n.type,payload:{}};if(n.type==="attack/rain"&&yt(s,["attackId","colors","columns"])&&gt(s.attackId)&&Array.isArray(s.colors)&&s.colors.length>=1&&s.colors.length<=4&&s.colors.every(r=>r==="cyan"||r==="pink"||r==="yellow"||r==="green"||r==="purple")&&Array.isArray(s.columns)&&s.columns.length===s.colors.length&&s.columns.every(r=>Tt(r,0,4)))return{commandId:i,...n,type:"attack/rain",payload:{attackId:s.attackId,colors:s.colors,columns:s.columns}};if(n.type==="progress/tick"&&yt(s,["phase","stateHash"])&&(s.phase==="playing"||s.phase==="cleared")&&typeof s.stateHash=="string"&&/^(q1|c1)-[0-9a-f]{8}$/.test(s.stateHash))return{commandId:i,...n,type:"progress/tick",payload:{phase:s.phase,stateHash:s.stateHash}};throw new Error("Invalid Quarry Match controller payload.")}const Xr=Ny,Tl=Oy,qi=i=>i.rulesVersion==="crystal-canopy/1",tg=(i,e)=>qi(i)?Xv(i.seed,e):qv(i.seed,e),ng=i=>qi(i)?Zv(i):Kv(i),wu=(i,e,t)=>qi(i)?$v(i,e,t):Yv(i,e,t),Eu=i=>qi(i)?Hv(i):Wv(i),Fy=(i,e,t,n)=>qi(i)?Jv(i,e,t,n):jv(i,e,t,n);async function pI(i){if(!ue)throw new Error("Firebase unavailable.");return Xr((await St(De(ue,`games/${i}/start`))).val())}function ky(i,e,t){if(!ue)throw new Error("Firebase unavailable.");let n,s,r=[];const a=[],o=()=>{n&&e(Uy(Object.keys(n.players),n.scores??{},s,r,n.round,n.settings.targetWins))};return St(De(ue,`games/${i}/start`)).then(l=>{n=Xr(l.val()),a.push(si(De(ue,`games/${i}/winner`),c=>{const u=c.val();s=u&&Object.hasOwn(n.players,u.playerId)?u.playerId:void 0,o()},t),si(De(ue,`games/${i}/rematch/ready`),c=>{r=[],c.forEach(u=>{u.val()?.playerId===u.key&&Object.hasOwn(n.players,u.key)&&r.push(u.key)}),o()},t)),o()}).catch(l=>t(l instanceof Error?l:new Error(String(l)))),()=>a.forEach(l=>l())}const mI=(i,e)=>Tc(i,e);async function By(i){if(!ue)throw new Error("Firebase unavailable.");const[e,t]=await Promise.all([St(De(ue,`games/${i}/start`)),St(De(ue,`games/${i}/winner`))]);Xr(e.val());const n=t.val()?.playerId;return Ac(i,Xr,s=>{const r=Object.fromEntries(Object.keys(s.players).map(o=>[o,(s.scores?.[o]??0)+(o===n?1:0)])),a=!!(n&&r[n]>=s.settings.targetWins);return{advance:!a,scores:a?Object.fromEntries(Object.keys(s.players).map(o=>[o,0])):r}})}function gI(i,e){if(!ii?.currentUser||!ue)throw new Error("Firebase unavailable.");const t=ii.currentUser.uid,n=new Ss(Gm.tickRate),s=ud("quarry",i,t,"outbox");let r,a,o=0,l=0,c=!1,u=!1,d=!1,h=!1,f=0,p=-1,v,g,m,y=!1,b=[],_=()=>{},w=()=>{};const M=new Set,A=uo(localStorage,s,F=>{if(!F||typeof F!="object"||typeof F.commandId!="string")throw new Error("Invalid Quarry Match outbox.");const{commandId:H,...ee}=F;return Tl(H,ee,!0)}),x=F=>e({playerId:t,tick:o,ready:c,state:r?structuredClone(r):void 0,lifecycle:m,audioOutput:g,error:F,lastCommand:v,ownershipConflict:y,opponents:b.map(H=>({...H,state:structuredClone(H.state)}))}),E=new Cc(ue,`games/${i}/players/${t}/writer`,()=>{y=!0,c=!1,cancelAnimationFrame(f),x("This controller was taken over by another tab.")}),C=ky(i,F=>{m=F,F.finished&&cancelAnimationFrame(f),F.allReady&&!h&&(h=!0,By(i).catch(H=>{h=!1,x(H instanceof Error?H.message:String(H))})),x()},F=>x(F.message)),D=new ka({initial:A,order:(F,H)=>F.clientSeq-H.clientSeq,identify:F=>F.commandId,persist:F=>fo(localStorage,s,F),deliver:async F=>{if(!c)throw new Error("Controller is not ready.");const{commandId:H,...ee}=F;await Mn(De(ue,`games/${i}/players/${t}/records/${H}`),{...ee,serverTime:wn()})},failed:F=>x(F instanceof Error?F.message:String(F))}),k=F=>{const ee={commandId:Gr(De(ue,`games/${i}/players/${t}/records`)).key,playerId:t,epochId:E.epochId,clientSeq:++l,tick:o,...F};return D.enqueue(ee),ee},L=(F=!1)=>{!r||!F&&o-p<15||(k({type:"progress/tick",payload:{phase:r.phase,stateHash:Eu(r)}}),p=o)},B=()=>{!r||r.phase!=="cleared"||Ml(De(ue,`games/${i}/winner`),F=>F===null?{playerId:t,tick:r.tick,stateHash:Eu(r),serverTime:wn()}:void 0,{applyLocally:!1}).catch(F=>x(F.message))},O=F=>{if(!(u||d||!c||!r||r.phase==="cleared"||m?.finished)){for(let H=n.consume(F);H>0;H--)ng(r),o=r.tick;L(),x(),f=requestAnimationFrame(O)}},U=si(De(ue,`games/${i}/start`),async F=>{if(!c)try{if(a=Xr(F.val()),!a.players[t])throw new Error("Player is not part of this Quarry Match game.");if(g=a.audioOutput,!await E.claim())throw y=!0,new Error("This controller is already active in another tab.");y=!1,_(),_=zy(i,te=>{b=te.filter(Ce=>Ce.playerId!==t),x()},te=>x(te.message));const H=await St(De(ue,`games/${i}/players/${t}/records`)),ee=new Map;H.forEach(te=>{const Ce=Tl(te.key,te.val());ee.set(Ce.commandId,Ce),Ce.type==="attack/rain"&&M.add(Ce.payload.attackId)});for(const te of D.values())ee.set(te.commandId,te);const K=[...ee.values()].sort((te,Ce)=>te.clientSeq-Ce.clientSeq);r=Fy(tg(a,a.players[t].level),Math.max(0,...K.map(te=>te.tick)),K,a.seed),o=r.tick,l=Math.max(0,...K.map(te=>te.clientSeq)),await Mn(De(ue,`games/${i}/players/${t}/epochs/${E.epochId}`),{clientId:E.clientId,startedFromTick:o,startedFromCommandSeq:l,serverTime:wn()}),c=!0,w(),w=ji(De(ue,`games/${i}/interactions`),te=>{const Ce=te.val();if(qi(a)||Ce?.type!=="attack/generated"||!Ce.targetPlayerIds?.includes(t)||M.has(Ce.attackId))return;const ct={type:"attack/rain",payload:{attackId:Ce.attackId,colors:Ce.colors,columns:Ly(Ce.attackId,Ce.colors.length)}};M.add(Ce.attackId),k(ct),wu(r,ct,a.seed),x()},te=>x(te.message)),D.flush(),L(!0),x(),r.phase==="cleared"?B():f=requestAnimationFrame(O)}catch(H){x(H instanceof Error?H.message:String(H))}},F=>x(F.message)),N=()=>{D.flush()};return window.addEventListener("online",N),{command(F){if(!c||!r||r.phase!=="playing"||!a||F.type==="input/fire"&&(!(qi(r)?r.columns[r.cursor].at(-1):r.columns[r.cursor][0])||r.groupColor&&(qi(r)?r.columns[r.cursor].at(-1):r.columns[r.cursor][0])!==r.groupColor))return;k(F);const H=wu(r,F,a.seed);if(H&&a&&!qi(a)){const ee=Object.keys(a.players).filter(K=>K!==t);if(ee.length){const K=`${t}-${E.epochId}-${l}-${H.tick}-${H.chain}`,te=Gr(De(ue,`games/${i}/interactions`));Mn(te,{type:"attack/generated",attackId:K,sourcePlayerId:t,sourceTick:H.tick,sourceChain:H.chain,targetPlayerIds:ee,colors:H.colors,serverTime:wn()}).catch(Ce=>x(Ce.message))}}o=r.tick,v=`${F.type} · tick ${o}`,r.phase==="cleared"&&(L(!0),B()),x()},suspend(){!c||d||(d=!0,cancelAnimationFrame(f),n.reset(),L(!0))},resume(){!c||!d||(d=!1,n.reset(),f=requestAnimationFrame(O))},async takeOver(){await E.takeOver()&&(y=!1,c=!0,d=!1,D.flush(),f=requestAnimationFrame(O),x())},destroy(){L(!0),u=!0,U(),C(),_(),w(),cancelAnimationFrame(f),window.removeEventListener("online",N),D.destroy(),E.release()}}}function zy(i,e,t){if(!ue)throw new Error("Firebase unavailable.");let n=!1,s=0,r;const a=new Ss(Gm.tickRate),o=new Map,l=new Map,c=[],u={clone:h=>structuredClone(h),tick:h=>h.tick,advanceTo:(h,f)=>{for(;h.tick<f&&h.phase==="playing";)ng(h)},apply:(h,f)=>{f.type!=="progress/tick"&&wu(h,f,r.seed)},hash:Eu,phase:h=>h.phase,terminal:h=>h.phase==="cleared",progress:h=>h.type==="progress/tick"?h.payload:void 0},d=()=>e([...l].map(([h,f])=>{const p=f.snapshot();return{playerId:h,tick:p.displayTick,controllerTick:p.controllerTick,lag:p.lag,state:p.state,hashMatches:p.hashMatches}}));return St(De(ue,`games/${i}/start`)).then(async h=>{r=Xr(h.val());let f=0;if(await Promise.all(Object.keys(r.players).map(async v=>{const g=await St(De(ue,`games/${i}/players/${v}/records`)),m=[];g.forEach(y=>{m.push(Tl(y.key,y.val()))}),m.sort((y,b)=>y.clientSeq-b.clientSeq),o.set(v,m);for(const y of m)y.type==="progress/tick"&&(f=Math.max(f,y.tick))})),n)return;for(const v of Object.keys(r.players)){const g=new Ec(u,tg(r,r.players[v].level),f);l.set(v,g);for(const m of o.get(v)??[])g.receive(m);c.push(ji(De(ue,`games/${i}/players/${v}/records`),m=>{try{g.receive(Tl(m.key,m.val())),d()}catch(y){t(y instanceof Error?y:new Error(String(y)))}},t))}const p=v=>{if(!n){for(let g=a.consume(v);g>0;g--)for(const m of l.values())m.advance();d(),s=requestAnimationFrame(p)}};d(),s=requestAnimationFrame(p)}).catch(h=>t(h instanceof Error?h:new Error(String(h)))),()=>{n=!0,cancelAnimationFrame(s),c.forEach(h=>h())}}const $f=""+new URL("../assets/Ivory Avalanche.jheecTlA.mp3",import.meta.url).href,Vy=""+new URL("../assets/Ivory Avalanche Clear.CHjDqg-F.mp3",import.meta.url).href,wh=""+new URL("../assets/Ivory Avalanche Catch.Cin_KYx1.mp3",import.meta.url).href,Yf=""+new URL("../assets/Ivory Avalanche Place.BAM6pE8m.mp3",import.meta.url).href,Gy=""+new URL("../assets/Ivory Avalanche Throw.CcIWy32w.mp3",import.meta.url).href,Hy=""+new URL("../assets/Ivory Avalanche Chain.B0QUhIke.mp3",import.meta.url).href,Wy=""+new URL("../assets/Ivory Avalanche Miss.B0VhYMKi.mp3",import.meta.url).href,Zf=""+new URL("../assets/Ivory Avalanche Failure.BOUADSZZ.mp3",import.meta.url).href;function vI(i,e){gn(e,!1);const t=lt();let n=Ge(e,"enabled",8,!1),s=Ge(e,"phase",8,"countdown"),r=Ge(e,"survived",8,0),a=Ge(e,"placements",8,0),o=Ge(e,"chains",8,0),l=Ge(e,"misses",8,0),c=Ge(e,"returns",8,0),u=lt(s()),d=lt(r()),h=lt(a()),f=lt(o()),p=lt(l()),v=lt(c()),g=lt(0),m=lt(wh);Vt(()=>(Ae(s()),$f),()=>{de(t,s()==="playing"?$f:void 0)}),Vt(()=>(Ae(o()),P(f),P(g),Ae(a()),P(h),Yf),()=>{o()>P(f)?(de(m,Hy),hn(g),de(f,o())):a()>P(h)&&(de(m,Yf),hn(g),de(h,a()))}),Vt(()=>(Ae(l()),P(p),P(g),Ae(r()),P(d),wh),()=>{l()>P(p)?(de(m,Wy),hn(g),de(p,l())):r()>P(d)&&(de(m,wh),hn(g),de(d,r()))}),Vt(()=>(Ae(c()),P(v),P(g)),()=>{c()>P(v)&&(de(m,Gy),hn(g),de(v,c()))}),Vt(()=>(Ae(s()),P(u),P(g),Zf),()=>{s()!==P(u)&&(s()==="cleared"?(de(m,Vy),hn(g)):s()==="lost"&&(de(m,Zf),hn(g)),de(u,s()))}),Li(),oo(i,{get enabled(){return n()},get loopUrl(){return P(t)},loopKey:"stax",get cueUrl(){return P(m)},get cueSignal(){return P(g)}}),vn()}const Eh=(i,e)=>{if(i===e)return!0;if(!i||!e)return!1;const t=i.length;if(e.length!==t)return!1;for(let n=0;n<t;n++)if(i[n]!==e[n])return!1;return!0},Xy=()=>{const i=[],n={items:i,remember:(s,r)=>{for(let l=0;l<i.length;l++){const c=i[l];if(Eh(r,c.keys)&&c.promise)return c.promise}const a=s();a.catch(()=>{for(let l=0;l<i.length;l++){const c=i[l];if(Eh(r,c.keys)){i.splice(l,1);break}}});const o={promise:a,keys:r};return i.push(o),o.promise},clear:s=>{for(let r=0;r<i.length;r++){const a=i[r];if(Eh(s,a.keys)){i.splice(r,1);return}}}};return _i("threlte-cache",n),n};const Ic="185",Zs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ig=0,Tu=1,sg=2,qy=3,$y=0,Ea=1,Al=2,Or=3,Yi=0,Ln=1,Ti=2,Ri=0,Ks=1,Au=2,Cu=3,Ru=4,rg=5,Yy=6,ds=100,ag=101,og=102,lg=103,cg=104,hg=200,ug=201,dg=202,fg=203,Cl=204,Rl=205,pg=206,mg=207,gg=208,vg=209,_g=210,yg=211,xg=212,bg=213,Sg=214,Il=0,Pl=1,Dl=2,Qs=3,Ll=4,Ul=5,Nl=6,Ol=7,po=0,Mg=1,wg=2,gi=0,dd=1,fd=2,pd=3,md=4,gd=5,Pc=6,vd=7,Iu="attached",Eg="detached",Dc=300,Ii=301,_s=302,Ta=303,Aa=304,ea=306,Ba=1e3,Vn=1001,za=1002,jt=1003,_d=1004,Zy=1004,Fr=1005,Ky=1005,zt=1006,Ca=1007,Jy=1007,Ai=1008,jy=1008,Bn=1009,yd=1010,xd=1011,qr=1012,Lc=1013,ri=1014,Pn=1015,Pi=1016,Uc=1017,Nc=1018,$r=1020,bd=35902,Sd=35899,Md=1021,wd=1022,Dn=1023,Di=1026,fs=1027,Oc=1028,mo=1029,ys=1030,Fc=1031,Qy=1032,kc=1033,Ra=33776,Ia=33777,Pa=33778,Da=33779,Fl=35840,kl=35841,Bl=35842,zl=35843,Vl=36196,Gl=37492,Hl=37496,Wl=37488,Xl=37489,Va=37490,ql=37491,$l=37808,Yl=37809,Zl=37810,Kl=37811,Jl=37812,jl=37813,Ql=37814,ec=37815,tc=37816,nc=37817,ic=37818,sc=37819,rc=37820,ac=37821,oc=36492,lc=36494,cc=36495,hc=36283,uc=36284,Ga=36285,dc=36286,Tg=2200,Ag=2201,Cg=2202,Ha=2300,fc=2301,yl=2302,Pu=2303,Xs=2400,qs=2401,Wa=2402,Bc=2500,Ed=2501,ex=0,tx=1,nx=2,Rg=3200,ix=3201,sx=3202,rx=3203,Zi=0,Ig=1,Wi="",Rn="srgb",Xa="srgb-linear",qa="linear",Rt="srgb",ax="",ox="rg",lx="ga",cx=0,Gs=7680,hx=7681,ux=7682,dx=7683,fx=34055,px=34056,mx=5386,gx=512,vx=513,_x=514,yx=515,xx=516,bx=517,Sx=518,Du=519,Pg=512,Dg=513,Lg=514,zc=515,Ug=516,Ng=517,Vc=518,Og=519,$a=35044,Mx=35048,wx=35040,Ex=35045,Tx=35049,Ax=35041,Cx=35046,Rx=35050,Ix=35042,Px="100",Lu="300 es",qn=2e3,er=2001,Dx={COMPUTE:"compute",RENDER:"render"},Lx={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},Ux={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},Nx={TEXTURE_COMPARE:"depthTextureCompare"};function Ox(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}const Fx={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function kr(i,e){return new Fx[i](e)}function Fg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ya(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kg(){const i=Ya("canvas");return i.style.display="block",i}const Kf={};let xs=null;function kx(i){xs=i}function Bx(){return xs}function Za(...i){const e="THREE."+i.shift();xs?xs("log",e,...i):console.log(e,...i)}function Bg(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function xe(...i){i=Bg(i);const e="THREE."+i.shift();if(xs)xs("warn",e,...i);else{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Xe(...i){i=Bg(i);const e="THREE."+i.shift();if(xs)xs("error",e,...i);else{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function gs(...i){const e=i.join(" ");e in Kf||(Kf[e]=!0,xe(...i))}function zx(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Vx={[Il]:Pl,[Dl]:Nl,[Ll]:Ol,[Qs]:Ul,[Pl]:Il,[Nl]:Dl,[Ol]:Ll,[Ul]:Qs};class yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jf=1234567;const Js=Math.PI/180,Yr=180/Math.PI;function Yn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function nt(i,e,t){return Math.max(e,Math.min(t,i))}function Td(i,e){return(i%e+e)%e}function Gx(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Hx(i,e,t){return i!==e?(t-i)/(e-i):0}function La(i,e,t){return(1-t)*i+t*e}function Wx(i,e,t,n){return La(i,e,1-Math.exp(-t*n))}function Xx(i,e=1){return e-Math.abs(Td(i,e*2)-e)}function qx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function $x(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Yx(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Zx(i,e){return i+Math.random()*(e-i)}function Kx(i){return i*(.5-Math.random())}function Jx(i){i!==void 0&&(Jf=i);let e=Jf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jx(i){return i*Js}function Qx(i){return i*Yr}function eb(i){return(i&i-1)===0&&i!==0}function tb(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function nb(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ib(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),h=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*p,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*p,o*c);break;case"ZYZ":i.set(l*p,l*f,o*u,o*c);break;default:xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const zg={DEG2RAD:Js,RAD2DEG:Yr,generateUUID:Yn,clamp:nt,euclideanModulo:Td,mapLinear:Gx,inverseLerp:Hx,lerp:La,damp:Wx,pingpong:Xx,smoothstep:qx,smootherstep:$x,randInt:Yx,randFloat:Zx,randFloatSpread:Kx,seededRandom:Jx,degToRad:jx,radToDeg:Qx,isPowerOfTwo:eb,ceilPowerOfTwo:tb,floorPowerOfTwo:nb,setQuaternionFromProperEuler:ib,normalize:dt,denormalize:In},ff=class ff{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ff.prototype.isVector2=!0;let ie=ff;class fn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],p=r[a+2],v=r[a+3];if(d!==v||l!==h||c!==f||u!==p){let g=l*h+c*f+u*p+d*v;g<0&&(h=-h,f=-f,p=-p,v=-v,g=-g);let m=1-o;if(g<.9995){const y=Math.acos(g),b=Math.sin(y);m=Math.sin(m*y)/b,o=Math.sin(o*y)/b,l=l*m+h*o,c=c*m+f*o,u=u*m+p*o,d=d*m+v*o}else{l=l*m+h*o,c=c*m+f*o,u=u*m+p*o,d=d*m+v*o;const y=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=y,c*=y,u*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+u*d+l*f-c*h,e[t+1]=l*p+u*h+c*d-o*f,e[t+2]=c*p+u*f+o*h-l*d,e[t+3]=u*p-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const pf=class pf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Th.copy(this).projectOnVector(e),this.sub(Th)}reflect(e){return this.sub(Th.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pf.prototype.isVector3=!0;let R=pf;const Th=new R,jf=new fn,mf=class mf{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],v=s[0],g=s[3],m=s[6],y=s[1],b=s[4],_=s[7],w=s[2],M=s[5],A=s[8];return r[0]=a*v+o*y+l*w,r[3]=a*g+o*b+l*M,r[6]=a*m+o*_+l*A,r[1]=c*v+u*y+d*w,r[4]=c*g+u*b+d*M,r[7]=c*m+u*_+d*A,r[2]=h*v+f*y+p*w,r[5]=h*g+f*b+p*M,r[8]=h*m+f*_+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,p=t*d+n*h+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=d*v,e[1]=(s*c-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ah.makeScale(e,t)),this}rotate(e){return gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ah.makeRotation(-e)),this}translate(e,t){return gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ah.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};mf.prototype.isMatrix3=!0;let rt=mf;const Ah=new rt,Qf=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ep=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sb(){const i={enabled:!0,workingColorSpace:Xa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Rt&&(s.r=$i(s.r),s.g=$i(s.g),s.b=$i(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Rt&&(s.r=Vr(s.r),s.g=Vr(s.g),s.b=Vr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wi?qa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return gs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return gs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xa]:{primaries:e,whitePoint:n,transfer:qa,toXYZ:Qf,fromXYZ:ep,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:e,whitePoint:n,transfer:Rt,toXYZ:Qf,fromXYZ:ep,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),i}const mt=sb();function $i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let pr;class Vg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{pr===void 0&&(pr=Ya("canvas")),pr.width=e.width,pr.height=e.height;const s=pr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=pr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ya("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=$i(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($i(t[n]/255)*255):t[n]=$i(t[n]);return{data:t,width:e.width,height:e.height}}else return xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rb=0;class ps{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=Yn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ch(s[a].image)):r.push(Ch(s[a]))}else r=Ch(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ch(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(xe("Texture: Unable to serialize Texture."),{})}let ab=0;const Rh=new R;class Wt extends yi{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=Vn,s=Vn,r=zt,a=Ai,o=Dn,l=Bn,c=Wt.DEFAULT_ANISOTROPY,u=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=Yn(),this.name="",this.source=new ps(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Rh).x}get height(){return this.source.getSize(Rh).y}get depth(){return this.source.getSize(Rh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){xe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ba:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ba:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Dc;Wt.DEFAULT_ANISOTROPY=1;const gf=class gf{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,_=(f+1)/2,w=(m+1)/2,M=(u+h)/4,A=(d+v)/4,x=(p+g)/4;return b>_&&b>w?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=M/n,r=A/n):_>w?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=M/s,r=x/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=A/r,s=x/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-p)*(g-p)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(d-v)/y,this.z=(h-u)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gf.prototype.isVector4=!0;let Pt=gf;class Ad extends yi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Wt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ps(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends Ad{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Gc extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ob extends Zn{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Gc(null,e,t,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}}class Hc extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lb extends Zn{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Hc(null,e,t,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}}const yc=class yc{constructor(e,t,n,s,r,a,o,l,c,u,d,h,f,p,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,d,h,f,p,v,g)}set(e,t,n,s,r,a,o,l,c,u,d,h,f,p,v,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yc().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/mr.setFromMatrixColumn(e,0).length(),r=1/mr.setFromMatrixColumn(e,1).length(),a=1/mr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,f=a*d,p=o*u,v=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,p=c*u,v=c*d;t[0]=h+v*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-p,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,p=c*u,v=c*d;t[0]=h-v*o,t[4]=-a*d,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,p=o*u,v=o*d;t[0]=l*u,t[4]=p*c-f,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,p=o*l,v=o*c;t[0]=l*u,t[4]=v-h*d,t[8]=p*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+p,t[10]=h-v*d}else if(e.order==="XZY"){const h=a*l,f=a*c,p=o*l,v=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+v,t[5]=a*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=o*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cb,e,hb)}lookAt(e,t,n){const s=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),is.crossVectors(n,Wn),is.lengthSq()===0&&(Math.abs(n.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),is.crossVectors(n,Wn)),is.normalize(),Eo.crossVectors(Wn,is),s[0]=is.x,s[4]=Eo.x,s[8]=Wn.x,s[1]=is.y,s[5]=Eo.y,s[9]=Wn.y,s[2]=is.z,s[6]=Eo.z,s[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],v=n[6],g=n[10],m=n[14],y=n[3],b=n[7],_=n[11],w=n[15],M=s[0],A=s[4],x=s[8],E=s[12],C=s[1],D=s[5],k=s[9],L=s[13],B=s[2],O=s[6],U=s[10],N=s[14],F=s[3],H=s[7],ee=s[11],K=s[15];return r[0]=a*M+o*C+l*B+c*F,r[4]=a*A+o*D+l*O+c*H,r[8]=a*x+o*k+l*U+c*ee,r[12]=a*E+o*L+l*N+c*K,r[1]=u*M+d*C+h*B+f*F,r[5]=u*A+d*D+h*O+f*H,r[9]=u*x+d*k+h*U+f*ee,r[13]=u*E+d*L+h*N+f*K,r[2]=p*M+v*C+g*B+m*F,r[6]=p*A+v*D+g*O+m*H,r[10]=p*x+v*k+g*U+m*ee,r[14]=p*E+v*L+g*N+m*K,r[3]=y*M+b*C+_*B+w*F,r[7]=y*A+b*D+_*O+w*H,r[11]=y*x+b*k+_*U+w*ee,r[15]=y*E+b*L+_*N+w*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],v=e[7],g=e[11],m=e[15],y=l*f-c*h,b=o*f-c*d,_=o*h-l*d,w=a*f-c*u,M=a*h-l*u,A=a*d-o*u;return t*(v*y-g*b+m*_)-n*(p*y-g*w+m*M)+s*(p*b-v*w+m*A)-r*(p*_-v*M+g*A)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],v=e[13],g=e[14],m=e[15],y=t*o-n*a,b=t*l-s*a,_=t*c-r*a,w=n*l-s*o,M=n*c-r*o,A=s*c-r*l,x=u*v-d*p,E=u*g-h*p,C=u*m-f*p,D=d*g-h*v,k=d*m-f*v,L=h*m-f*g,B=y*L-b*k+_*D+w*C-M*E+A*x;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/B;return e[0]=(o*L-l*k+c*D)*O,e[1]=(s*k-n*L-r*D)*O,e[2]=(v*A-g*M+m*w)*O,e[3]=(h*M-d*A-f*w)*O,e[4]=(l*C-a*L-c*E)*O,e[5]=(t*L-s*C+r*E)*O,e[6]=(g*_-p*A-m*b)*O,e[7]=(u*A-h*_+f*b)*O,e[8]=(a*k-o*C+c*x)*O,e[9]=(n*C-t*k-r*x)*O,e[10]=(p*M-v*_+m*y)*O,e[11]=(d*_-u*M-f*y)*O,e[12]=(o*E-a*D-l*x)*O,e[13]=(t*D-n*E+s*x)*O,e[14]=(v*b-p*w-g*y)*O,e[15]=(u*w-d*b+h*y)*O,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,p=r*d,v=a*u,g=a*d,m=o*d,y=l*c,b=l*u,_=l*d,w=n.x,M=n.y,A=n.z;return s[0]=(1-(v+m))*w,s[1]=(f+_)*w,s[2]=(p-b)*w,s[3]=0,s[4]=(f-_)*M,s[5]=(1-(h+m))*M,s[6]=(g+y)*M,s[7]=0,s[8]=(p+b)*A,s[9]=(g-y)*A,s[10]=(1-(h+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=mr.set(s[0],s[1],s[2]).length();const o=mr.set(s[4],s[5],s[6]).length(),l=mr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ci.copy(this);const c=1/a,u=1/o,d=1/l;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=u,ci.elements[5]*=u,ci.elements[6]*=u,ci.elements[8]*=d,ci.elements[9]*=d,ci.elements[10]*=d,t.setFromRotationMatrix(ci),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=qn,l=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let p,v;if(l)p=r/(a-r),v=a*r/(a-r);else if(o===qn)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===er)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=qn,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s);let p,v;if(l)p=1/(a-r),v=a/(a-r);else if(o===qn)p=-2/(a-r),v=-(a+r)/(a-r);else if(o===er)p=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};yc.prototype.isMatrix4=!0;let Qe=yc;const mr=new R,ci=new Qe,cb=new R(0,0,0),hb=new R(1,1,1),is=new R,Eo=new R,Wn=new R,tp=new Qe,np=new fn;class vi{constructor(e=0,t=0,n=0,s=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return np.setFromEuler(this),this.setFromQuaternion(np,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class Wc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ub=0;const ip=new R,gr=new fn,Oi=new Qe,To=new R,aa=new R,db=new R,fb=new fn,sp=new R(1,0,0),rp=new R(0,1,0),ap=new R(0,0,1),op={type:"added"},pb={type:"removed"},vr={type:"childadded",child:null},Ih={type:"childremoved",child:null};class Mt extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new R,t=new vi,n=new fn,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qe},normalMatrix:{value:new rt}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.multiply(gr),this}rotateOnWorldAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.premultiply(gr),this}rotateX(e){return this.rotateOnAxis(sp,e)}rotateY(e){return this.rotateOnAxis(rp,e)}rotateZ(e){return this.rotateOnAxis(ap,e)}translateOnAxis(e,t){return ip.copy(e).applyQuaternion(this.quaternion),this.position.add(ip.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sp,e)}translateY(e){return this.translateOnAxis(rp,e)}translateZ(e){return this.translateOnAxis(ap,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?To.copy(e):To.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(aa,To,this.up):Oi.lookAt(To,aa,this.up),this.quaternion.setFromRotationMatrix(Oi),s&&(Oi.extractRotation(s.matrixWorld),gr.setFromRotationMatrix(Oi),this.quaternion.premultiply(gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(op),vr.child=e,this.dispatchEvent(vr),vr.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pb),Ih.child=e,this.dispatchEvent(Ih),Ih.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(op),vr.child=e,this.dispatchEvent(vr),vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,db),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,fb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Mt.DEFAULT_UP=new R(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Br extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mb={type:"move"};class xl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mb)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Br;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Gg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function Ph(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=mt.workingColorSpace){if(e=Td(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ph(a,r,e+1/3),this.g=Ph(a,r,e),this.b=Ph(a,r,e-1/3)}return mt.colorSpaceToWorking(this,s),this}setStyle(e,t=Rn){function n(r){r!==void 0&&parseFloat(r)<1&&xe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:xe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rn){const n=Gg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return mt.workingToColorSpace(xn.copy(this),e),Math.round(nt(xn.r*255,0,255))*65536+Math.round(nt(xn.g*255,0,255))*256+Math.round(nt(xn.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(xn.copy(this),t);const n=xn.r,s=xn.g,r=xn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Rn){mt.workingToColorSpace(xn.copy(this),e);const t=xn.r,n=xn.g,s=xn.b;return e!==Rn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+t,ss.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ss),e.getHSL(Ao);const n=La(ss.h,Ao.h,t),s=La(ss.s,Ao.s,t),r=La(ss.l,Ao.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new Oe;Oe.NAMES=Gg;class Xc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Oe(e),this.density=t}clone(){return new Xc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class qc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Oe(e),this.near=t,this.far=n}clone(){return new qc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Cd extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const hi=new R,Fi=new R,Dh=new R,ki=new R,_r=new R,yr=new R,lp=new R,Lh=new R,Uh=new R,Nh=new R,Oh=new Pt,Fh=new Pt,kh=new Pt;class zn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),hi.subVectors(e,t),s.cross(hi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){hi.subVectors(s,t),Fi.subVectors(n,t),Dh.subVectors(e,t);const a=hi.dot(hi),o=hi.dot(Fi),l=hi.dot(Dh),c=Fi.dot(Fi),u=Fi.dot(Dh),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,p=(a*u-o*l)*h;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ki.x),l.addScaledVector(a,ki.y),l.addScaledVector(o,ki.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Oh.setScalar(0),Fh.setScalar(0),kh.setScalar(0),Oh.fromBufferAttribute(e,t),Fh.fromBufferAttribute(e,n),kh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Oh,r.x),a.addScaledVector(Fh,r.y),a.addScaledVector(kh,r.z),a}static isFrontFacing(e,t,n,s){return hi.subVectors(n,t),Fi.subVectors(e,t),hi.cross(Fi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),hi.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return zn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;_r.subVectors(s,n),yr.subVectors(r,n),Lh.subVectors(e,n);const l=_r.dot(Lh),c=yr.dot(Lh);if(l<=0&&c<=0)return t.copy(n);Uh.subVectors(e,s);const u=_r.dot(Uh),d=yr.dot(Uh);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(_r,a);Nh.subVectors(e,r);const f=_r.dot(Nh),p=yr.dot(Nh);if(p>=0&&f<=p)return t.copy(r);const v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(yr,o);const g=u*p-f*d;if(g<=0&&d-u>=0&&f-p>=0)return lp.subVectors(r,s),o=(d-u)/(d-u+(f-p)),t.copy(s).addScaledVector(lp,o);const m=1/(g+v+h);return a=v*m,o=h*m,t.copy(n).addScaledVector(_r,a).addScaledVector(yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class En{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ui):ui.fromBufferAttribute(r,a),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Co.copy(n.boundingBox)),Co.applyMatrix4(e.matrixWorld),this.union(Co)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),Ro.subVectors(this.max,oa),xr.subVectors(e.a,oa),br.subVectors(e.b,oa),Sr.subVectors(e.c,oa),rs.subVectors(br,xr),as.subVectors(Sr,br),Cs.subVectors(xr,Sr);let t=[0,-rs.z,rs.y,0,-as.z,as.y,0,-Cs.z,Cs.y,rs.z,0,-rs.x,as.z,0,-as.x,Cs.z,0,-Cs.x,-rs.y,rs.x,0,-as.y,as.x,0,-Cs.y,Cs.x,0];return!Bh(t,xr,br,Sr,Ro)||(t=[1,0,0,0,1,0,0,0,1],!Bh(t,xr,br,Sr,Ro))?!1:(Io.crossVectors(rs,as),t=[Io.x,Io.y,Io.z],Bh(t,xr,br,Sr,Ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bi=[new R,new R,new R,new R,new R,new R,new R,new R],ui=new R,Co=new En,xr=new R,br=new R,Sr=new R,rs=new R,as=new R,Cs=new R,oa=new R,Ro=new R,Io=new R,Rs=new R;function Bh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Rs.fromArray(i,r);const o=s.x*Math.abs(Rs.x)+s.y*Math.abs(Rs.y)+s.z*Math.abs(Rs.z),l=e.dot(Rs),c=t.dot(Rs),u=n.dot(Rs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Xi=gb();function gb(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Fn(i){Math.abs(i)>65504&&xe("DataUtils.toHalfFloat(): Value out of range."),i=nt(i,-65504,65504),Xi.floatView[0]=i;const e=Xi.uint32View[0],t=e>>23&511;return Xi.baseTable[t]+((e&8388607)>>Xi.shiftTable[t])}function ba(i){const e=i>>10;return Xi.uint32View[0]=Xi.mantissaTable[Xi.offsetTable[e]+(i&1023)]+Xi.exponentTable[e],Xi.floatView[0]}class vb{static toHalfFloat(e){return Fn(e)}static fromHalfFloat(e){return ba(e)}}const en=new R,Po=new ie;let _b=0;class Ut extends yi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_b++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$a,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Po.fromBufferAttribute(this,t),Po.applyMatrix3(e),this.setXY(t,Po.x,Po.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$a&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class yb extends Ut{constructor(e,t,n){super(new Int8Array(e),t,n)}}class xb extends Ut{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class bb extends Ut{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class Sb extends Ut{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Rd extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Mb extends Ut{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Id extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class wb extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=ba(this.array[e*this.itemSize]);return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=Fn(t),this}getY(e){let t=ba(this.array[e*this.itemSize+1]);return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=Fn(t),this}getZ(e){let t=ba(this.array[e*this.itemSize+2]);return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=Fn(t),this}getW(e){let t=ba(this.array[e*this.itemSize+3]);return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=Fn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=Fn(t),this.array[e+1]=Fn(n),this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.array[e+0]=Fn(t),this.array[e+1]=Fn(n),this.array[e+2]=Fn(s),this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=Fn(t),this.array[e+1]=Fn(n),this.array[e+2]=Fn(s),this.array[e+3]=Fn(r),this}}class Fe extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Eb=new En,la=new R,zh=new R;class pn{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Eb.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);const t=la.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(la,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(zh)),this.expandByPoint(la.copy(e.center).sub(zh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Tb=0;const Jn=new Qe,Vh=new Mt,Mr=new R,Xn=new En,ca=new En,on=new R;class ot extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tb++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ox(e)?Id:Rd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,n){return Jn.makeTranslation(e,t,n),this.applyMatrix4(Jn),this}scale(e,t,n){return Jn.makeScale(e,t,n),this.applyMatrix4(Jn),this}lookAt(e){return Vh.lookAt(e),Vh.updateMatrix(),this.applyMatrix4(Vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Fe(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ca.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(Xn.min,ca.min),Xn.expandByPoint(on),on.addVectors(Xn.max,ca.max),Xn.expandByPoint(on)):(Xn.expandByPoint(ca.min),Xn.expandByPoint(ca.max))}Xn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)on.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(on));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)on.fromBufferAttribute(o,c),l&&(Mr.fromBufferAttribute(e,c),on.add(Mr)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ut(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new R,l[x]=new R;const c=new R,u=new R,d=new R,h=new ie,f=new ie,p=new ie,v=new R,g=new R;function m(x,E,C){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,C),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,C),u.sub(c),d.sub(c),f.sub(h),p.sub(h);const D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(D),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(D),o[x].add(v),o[E].add(v),o[C].add(v),l[x].add(g),l[E].add(g),l[C].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,E=y.length;x<E;++x){const C=y[x],D=C.start,k=C.count;for(let L=D,B=D+k;L<B;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const b=new R,_=new R,w=new R,M=new R;function A(x){w.fromBufferAttribute(s,x),M.copy(w);const E=o[x];b.copy(E),b.sub(w.multiplyScalar(w.dot(E))).normalize(),_.crossVectors(M,E);const D=_.dot(l[x])<0?-1:1;a.setXYZW(x,b.x,b.y,b.z,D)}for(let x=0,E=y.length;x<E;++x){const C=y[x],D=C.start,k=C.count;for(let L=D,B=D+k;L<B;L+=3)A(e.getX(L+0)),A(e.getX(L+1)),A(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,u=new R,d=new R;if(e)for(let h=0,f=e.count;h<f;h+=3){const p=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,p=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let m=0;m<u;m++)h[p++]=c[f++]}return new Ut(h,u,d)}if(this.index===null)return xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ot,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $c{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$a,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Tn=new R;class tr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Za("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new tr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Za("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Ab=0;class mn extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ab++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=Ks,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cl,this.blendDst=Rl,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){xe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(n.blending=this.blending),this.side!==Yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cl&&(n.blendSrc=this.blendSrc),this.blendDst!==Rl&&(n.blendDst=this.blendDst),this.blendEquation!==ds&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Du&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ie().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ie().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pd extends mn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let wr;const ha=new R,Er=new R,Tr=new R,Ar=new ie,ua=new ie,Hg=new Qe,Do=new R,da=new R,Lo=new R,cp=new ie,Gh=new ie,hp=new ie;class Wg extends Mt{constructor(e=new Pd){if(super(),this.isSprite=!0,this.type="Sprite",wr===void 0){wr=new ot;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $c(t,5);wr.setIndex([0,1,2,0,2,3]),wr.setAttribute("position",new tr(n,3,0,!1)),wr.setAttribute("uv",new tr(n,2,3,!1))}this.geometry=wr,this.material=e,this.center=new ie(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Xe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Er.setFromMatrixScale(this.matrixWorld),Hg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Tr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Er.multiplyScalar(-Tr.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Uo(Do.set(-.5,-.5,0),Tr,a,Er,s,r),Uo(da.set(.5,-.5,0),Tr,a,Er,s,r),Uo(Lo.set(.5,.5,0),Tr,a,Er,s,r),cp.set(0,0),Gh.set(1,0),hp.set(1,1);let o=e.ray.intersectTriangle(Do,da,Lo,!1,ha);if(o===null&&(Uo(da.set(-.5,.5,0),Tr,a,Er,s,r),Gh.set(0,1),o=e.ray.intersectTriangle(Do,Lo,da,!1,ha),o===null))return;const l=e.ray.origin.distanceTo(ha);l<e.near||l>e.far||t.push({distance:l,point:ha.clone(),uv:zn.getInterpolation(ha,Do,da,Lo,cp,Gh,hp,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Uo(i,e,t,n,s,r){Ar.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ua.x=r*Ar.x-s*Ar.y,ua.y=s*Ar.x+r*Ar.y):ua.copy(Ar),i.copy(e),i.x+=ua.x,i.y+=ua.y,i.applyMatrix4(Hg)}const No=new R,up=new R;class Xg extends Mt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,s=t.length;n<s;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const s=this.levels;let r;for(r=0;r<s.length&&!(t<s[r].distance);r++);return s.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const s=t.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,s;for(n=1,s=t.length;n<s;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){No.setFromMatrixPosition(this.matrixWorld);const s=e.ray.origin.distanceTo(No);this.getObjectForDistance(s).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){No.setFromMatrixPosition(e.matrixWorld),up.setFromMatrixPosition(this.matrixWorld);const n=No.distanceTo(up)/e.zoom;t[0].object.visible=!0;let s,r;for(s=1,r=t.length;s<r;s++){let a=t[s].distance;if(t[s].object.visible&&(a-=a*t[s].hysteresis),n>=a)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)t[s].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let s=0,r=n.length;s<r;s++){const a=n[s];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const zi=new R,Hh=new R,Oo=new R,os=new R,Wh=new R,Fo=new R,Xh=new R;class ar{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Hh.copy(e).add(t).multiplyScalar(.5),Oo.copy(t).sub(e).normalize(),os.copy(this.origin).sub(Hh);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Oo),o=os.dot(this.direction),l=-os.dot(Oo),c=os.lengthSq(),u=Math.abs(1-a*a);let d,h,f,p;if(u>0)if(d=a*l-o,h=a*o-l,p=r*u,d>=0)if(h>=-p)if(h<=p){const v=1/u;d*=v,h*=v,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Hh).addScaledVector(Oo,h),f}intersectSphere(e,t){zi.subVectors(e.center,this.origin);const n=zi.dot(this.direction),s=zi.dot(zi)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,n,s,r){Wh.subVectors(t,e),Fo.subVectors(n,e),Xh.crossVectors(Wh,Fo);let a=this.direction.dot(Xh),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;os.subVectors(this.origin,e);const l=o*this.direction.dot(Fo.crossVectors(os,Fo));if(l<0)return null;const c=o*this.direction.dot(Wh.cross(os));if(c<0||l+c>a)return null;const u=-o*os.dot(Xh);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qi extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dp=new Qe,Is=new ar,ko=new pn,fp=new R,Bo=new R,zo=new R,Vo=new R,qh=new R,Go=new R,pp=new R,Ho=new R;class Qt extends Mt{constructor(e=new ot,t=new Qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Go.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(qh.fromBufferAttribute(d,e),a?Go.addScaledVector(qh,u):Go.addScaledVector(qh.sub(t),u))}t.add(Go)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(r),Is.copy(e.ray).recast(e.near),!(ko.containsPoint(Is.origin)===!1&&(Is.intersectSphere(ko,fp)===null||Is.origin.distanceToSquared(fp)>(e.far-e.near)**2))&&(dp.copy(r).invert(),Is.copy(e.ray).applyMatrix4(dp),!(n.boundingBox!==null&&Is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Is)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=h.length;p<v;p++){const g=h[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),b=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,w=b;_<w;_+=3){const M=o.getX(_),A=o.getX(_+1),x=o.getX(_+2);s=Wo(this,m,e,n,c,u,d,M,A,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const y=o.getX(g),b=o.getX(g+1),_=o.getX(g+2);s=Wo(this,a,e,n,c,u,d,y,b,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=h.length;p<v;p++){const g=h[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),b=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,w=b;_<w;_+=3){const M=_,A=_+1,x=_+2;s=Wo(this,m,e,n,c,u,d,M,A,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const y=g,b=g+1,_=g+2;s=Wo(this,a,e,n,c,u,d,y,b,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Cb(i,e,t,n,s,r,a,o){let l;if(e.side===Ln?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Yi,o),l===null)return null;Ho.copy(o),Ho.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ho);return c<t.near||c>t.far?null:{distance:c,point:Ho.clone(),object:i}}function Wo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Bo),i.getVertexPosition(l,zo),i.getVertexPosition(c,Vo);const u=Cb(i,e,t,n,Bo,zo,Vo,pp);if(u){const d=new R;zn.getBarycoord(pp,Bo,zo,Vo,d),s&&(u.uv=zn.getInterpolatedAttribute(s,o,l,c,d,new ie)),r&&(u.uv1=zn.getInterpolatedAttribute(r,o,l,c,d,new ie)),a&&(u.normal=zn.getInterpolatedAttribute(a,o,l,c,d,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new R,materialIndex:0};zn.getNormal(Bo,zo,Vo,h.normal),u.face=h,u.barycoord=d}return u}const fa=new Pt,mp=new Pt,gp=new Pt,Rb=new Pt,vp=new Qe,Xo=new R,$h=new pn,_p=new Qe,Yh=new ar;class qg extends Qt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Iu,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new En),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xo),this.boundingBox.expandByPoint(Xo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xo),this.boundingSphere.expandByPoint(Xo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$h.copy(this.boundingSphere),$h.applyMatrix4(s),e.ray.intersectsSphere($h)!==!1&&(_p.copy(s).invert(),Yh.copy(e.ray).applyMatrix4(_p),!(this.boundingBox!==null&&Yh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Yh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Pt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Iu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Eg?this.bindMatrixInverse.copy(this.bindMatrix).invert():xe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;mp.fromBufferAttribute(s.attributes.skinIndex,e),gp.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(fa.copy(t),t.set(0,0,0,0)):(fa.set(...t,1),t.set(0,0,0)),fa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=gp.getComponent(r);if(a!==0){const o=mp.getComponent(r);vp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Rb.copy(fa).applyMatrix4(vp),a)}}return t.isVector4&&(t.w=fa.w),t.applyMatrix4(this.bindMatrixInverse)}}class Dd extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ni extends Wt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=jt,u=jt,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yp=new Qe,Ib=new Qe;class Yc{constructor(e=[],t=[]){this.uuid=Yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){xe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Ib;yp.multiplyMatrices(o,t[r]),yp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Yc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ni(t,e,e,Dn,Pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(xe("Skeleton: No bone found with UUID:",r),a=new Dd),this.bones.push(a),this.boneInverses.push(new Qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Zr extends Ut{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Cr=new Qe,xp=new Qe,qo=[],bp=new En,Pb=new Qe,pa=new Qt,ma=new pn;class $g extends Qt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Pb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new En),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cr),bp.copy(e.boundingBox).applyMatrix4(Cr),this.boundingBox.union(bp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cr),ma.copy(e.boundingSphere).applyMatrix4(Cr),this.boundingSphere.union(ma)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(pa.geometry=this.geometry,pa.material=this.material,pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ma.copy(this.boundingSphere),ma.applyMatrix4(n),e.ray.intersectsSphere(ma)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cr),xp.multiplyMatrices(n,Cr),pa.matrixWorld=xp,pa.raycast(e,qo);for(let a=0,o=qo.length;a<o;a++){const l=qo[a];l.instanceId=r,l.object=this,t.push(l)}qo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Zr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ni(new Float32Array(s*this.count),s,this.count,Oc,Pn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Zh=new R,Db=new R,Lb=new rt;class Hi{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Zh.subVectors(n,t).cross(Db.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Zh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lb.getNormalMatrix(e),s=this.coplanarPoint(Zh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ps=new pn,Ub=new ie(.5,.5),$o=new R;class nr{constructor(e=new Hi,t=new Hi,n=new Hi,s=new Hi,r=new Hi,a=new Hi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],p=r[8],v=r[9],g=r[10],m=r[11],y=r[12],b=r[13],_=r[14],w=r[15];if(s[0].setComponents(c-a,f-u,m-p,w-y).normalize(),s[1].setComponents(c+a,f+u,m+p,w+y).normalize(),s[2].setComponents(c+o,f+d,m+v,w+b).normalize(),s[3].setComponents(c-o,f-d,m-v,w-b).normalize(),n)s[4].setComponents(l,h,g,_).normalize(),s[5].setComponents(c-l,f-h,m-g,w-_).normalize();else if(s[4].setComponents(c-l,f-h,m-g,w-_).normalize(),t===qn)s[5].setComponents(c+l,f+h,m+g,w+_).normalize();else if(t===er)s[5].setComponents(l,h,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){Ps.center.set(0,0,0);const t=Ub.distanceTo(e.center);return Ps.radius=.7071067811865476+t,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if($o.x=s.normal.x>0?e.max.x:e.min.x,$o.y=s.normal.y>0?e.max.y:e.min.y,$o.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint($o)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Sp=new Qe;class Zc{constructor(){this.coordinateSystem=qn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];Sp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new nr),n[s].setFromProjectionMatrix(Sp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new nr),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new Zc().copy(this)}}function Kh(i,e){return i-e}function Nb(i,e){return i.z-e.z}function Ob(i,e){return e.z-i.z}class Fb{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,s){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=s}reset(){this.list.length=0,this.index=0}}const Nn=new Qe,kb=new Oe(1,1,1),Bb=new nr,zb=new Zc,Yo=new En,Ds=new pn,ga=new R,Mp=new R,Vb=new R,Jh=new Fb,bn=new Qt,Zo=[];function Gb(i,e,t=0){const n=e.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==e.array.constructor){const s=i.count;for(let r=0;r<s;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,i.getComponent(r,a))}else e.array.set(i.array,t*n);e.needsUpdate=!0}function Ls(i,e){if(i.constructor!==e.constructor){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++)e[n]=i[n]}else{const t=Math.min(i.length,e.length);e.set(new i.constructor(i.buffer,0,t))}}class Yg extends Qt{constructor(e,t,n=t*2,s){super(new ot,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new ni(t,e,e,Dn,Pn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new ni(t,e,e,mo,ri);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new ni(t,e,e,Dn,Pn);n.colorSpace=mt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const a=e.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,u=new o.constructor(n*l),d=new Ut(u,l,c);t.setAttribute(r,d)}if(e.getIndex()!==null){const r=n>65535?new Uint32Array(s):new Uint16Array(s);t.setIndex(new Ut(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const s=e.getAttribute(n),r=t.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,Nn),this.getBoundingBoxAt(r,Yo).applyMatrix4(Nn),e.union(Yo)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pn);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,Nn),this.getBoundingSphereAt(r,Ds).applyMatrix4(Nn),e.union(Ds)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Kh),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=n):(s=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;Nn.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(kb.toArray(a.image.data,s*4),a.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=n===-1?a.count:n),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Kh),l=this._availableGeometryIds.shift(),r[l]=s):(l=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(l,e),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(s&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const u in n.attributes){const d=t.getAttribute(u),h=n.getAttribute(u);Gb(d,h,l);const f=d.itemSize;for(let p=d.count,v=c;p<v;p++){const g=l+p;for(let m=0;m<f;m++)h.setComponent(g,m,0)}h.needsUpdate=!0,h.addUpdateRange(l*f,c*f)}if(s){const u=o.indexStart,d=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let h=0;h<a.count;h++)r.setX(u+h,l+a.getX(h));for(let h=a.count,f=d;h<f;h++)r.setX(u+h,l);r.needsUpdate=!0,r.addUpdateRange(u,o.reservedIndexCount)}return o.start=s?o.indexStart:o.vertexStart,o.count=s?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let s=0,r=n.length;s<r;s++)n[s].active&&n[s].geometryIndex===e&&this.deleteInstance(s);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,s=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){const l=s[a],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){const{indexStart:u,vertexStart:d,reservedIndexCount:h}=c,f=r.index,p=f.array,v=e-d;for(let g=u;g<u+h;g++)p[g]=p[g]+v;f.array.copyWithin(t,u,u+h),f.addUpdateRange(t,h),f.needsUpdate=!0,c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:u,reservedVertexCount:d}=c,h=r.attributes;for(const f in h){const p=h[f],{array:v,itemSize:g}=p;v.copyWithin(e*g,u*g,(u+d)*g),p.addUpdateRange(e*g,d*g),p.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[e];if(s.boundingBox===null){const r=new En,a=n.index,o=n.attributes.position;for(let l=s.start,c=s.start+s.count;l<c;l++){let u=l;a&&(u=a.getX(u)),r.expandByPoint(ga.fromBufferAttribute(o,u))}s.boundingBox=r}return t.copy(s.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[e];if(s.boundingSphere===null){const r=new pn;this.getBoundingBoxAt(e,Yo),Yo.getCenter(r.center);const a=n.index,o=n.attributes.position;let l=0;for(let c=s.start,u=s.start+s.count;c<u;c++){let d=c;a&&(d=a.getX(d)),ga.fromBufferAttribute(o,d),l=Math.max(l,r.center.distanceToSquared(ga))}r.radius=Math.sqrt(l),s.boundingSphere=r}return t.copy(s.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,s=this._matricesTexture.image.data;return t.toArray(s,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(Kh);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const s=new Int32Array(e),r=new Int32Array(e);Ls(this._multiDrawCounts,s),Ls(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=e;const a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),Ls(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),Ls(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Ls(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new ot,this._initializeGeometry(r));const a=this.geometry;r.index&&Ls(r.index.array,a.index.array);for(const o in r.attributes)Ls(r.attributes[o].array,a.attributes[o].array)}raycast(e,t){const n=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,a=this.geometry;bn.material=this.material,bn.geometry.index=a.index,bn.geometry.attributes=a.attributes,bn.geometry.boundingBox===null&&(bn.geometry.boundingBox=new En),bn.geometry.boundingSphere===null&&(bn.geometry.boundingSphere=new pn);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;const c=n[o].geometryIndex,u=s[c];bn.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(o,bn.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,bn.geometry.boundingBox),this.getBoundingSphereAt(c,bn.geometry.boundingSphere),bn.raycast(e,Zo);for(let d=0,h=Zo.length;d<h;d++){const f=Zo[d];f.object=this,f.batchId=o,t.push(f)}Zo.length=0}bn.material=null,bn.geometry.index=null,bn.geometry.attributes={},bn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=s.getIndex();let o=a===null?1:a.array.BYTES_PER_ELEMENT,l=1;r.wireframe&&(l=2,o=s.attributes.position.count>65535?4:2);const c=this._instanceInfo,u=this._multiDrawStarts,d=this._multiDrawCounts,h=this._geometryInfo,f=this.perObjectFrustumCulled,p=this._indirectTexture,v=p.image.data,g=n.isArrayCamera?zb:Bb;f&&(n.isArrayCamera?g.setFromArrayCamera(n):(Nn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),g.setFromProjectionMatrix(Nn,n.coordinateSystem,n.reversedDepth)));let m=0;if(this.sortObjects){Nn.copy(this.matrixWorld).invert(),ga.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Nn),Mp.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Nn);for(let _=0,w=c.length;_<w;_++)if(c[_].visible&&c[_].active){const M=c[_].geometryIndex;this.getMatrixAt(_,Nn),this.getBoundingSphereAt(M,Ds).applyMatrix4(Nn);let A=!1;if(f&&(A=!g.intersectsSphere(Ds)),!A){const x=h[M],E=Vb.subVectors(Ds.center,ga).dot(Mp);Jh.push(x.start,x.count,E,_)}}const y=Jh.list,b=this.customSort;b===null?y.sort(r.transparent?Ob:Nb):b.call(this,y,n);for(let _=0,w=y.length;_<w;_++){const M=y[_];u[m]=M.start*o*l,d[m]=M.count*l,v[m]=M.index,m++}Jh.reset()}else for(let y=0,b=c.length;y<b;y++)if(c[y].visible&&c[y].active){const _=c[y].geometryIndex;let w=!1;if(f&&(this.getMatrixAt(y,Nn),this.getBoundingSphereAt(_,Ds).applyMatrix4(Nn),w=!g.intersectsSphere(Ds)),!w){const M=h[_];u[m]=M.start*o*l,d[m]=M.count*l,v[m]=y,m++}}p.needsUpdate=!0,this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(e,t,n,s,r,a){this.onBeforeRender(e,null,s,r,a)}}class Un extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pc=new R,mc=new R,wp=new Qe,va=new ar,Ko=new pn,jh=new R,Ep=new R;class bs extends Mt{constructor(e=new ot,t=new Un){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)pc.fromBufferAttribute(t,s-1),mc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=pc.distanceTo(mc);e.setAttribute("lineDistance",new Fe(n,1))}else xe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(s),Ko.radius+=r,e.ray.intersectsSphere(Ko)===!1)return;wp.copy(s).invert(),va.copy(e.ray).applyMatrix4(wp);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let v=f,g=p-1;v<g;v+=c){const m=u.getX(v),y=u.getX(v+1),b=Jo(this,e,va,l,m,y,v);b&&t.push(b)}if(this.isLineLoop){const v=u.getX(p-1),g=u.getX(f),m=Jo(this,e,va,l,v,g,p-1);m&&t.push(m)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=f,g=p-1;v<g;v+=c){const m=Jo(this,e,va,l,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){const v=Jo(this,e,va,l,p-1,f,p-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Jo(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(pc.fromBufferAttribute(o,s),mc.fromBufferAttribute(o,r),t.distanceSqToSegment(pc,mc,jh,Ep)>n)return;jh.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(jh);if(!(c<e.near||c>e.far))return{distance:c,point:Ep.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Tp=new R,Ap=new R;class Ni extends bs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Tp.fromBufferAttribute(t,s),Ap.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Tp.distanceTo(Ap);e.setAttribute("lineDistance",new Fe(n,1))}else xe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zg extends bs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}let Ld=class extends mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};const Cp=new Qe,Uu=new ar,jo=new pn,Qo=new R;class Kg extends Mt{constructor(e=new ot,t=new Ld){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(s),jo.radius+=r,e.ray.intersectsSphere(jo)===!1)return;Cp.copy(s).invert(),Uu.copy(e.ray).applyMatrix4(Cp);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=h,v=f;p<v;p++){const g=c.getX(p);Qo.fromBufferAttribute(d,g),Rp(Qo,g,l,s,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=h,v=f;p<v;p++)Qo.fromBufferAttribute(d,p),Rp(Qo,p,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Rp(i,e,t,n,s,r,a){const o=Uu.distanceSqToPoint(i);if(o<t){const l=new R;Uu.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Jg extends Wt{constructor(e,t,n,s,r=zt,a=zt,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function d(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Hb extends Jg{constructor(e,t,n,s,r,a,o,l){super({},e,t,n,s,r,a,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class Wb extends Wt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=jt,this.minFilter=jt,this.generateMipmaps=!1,this.needsUpdate=!0}}class Kc extends Wt{constructor(e,t,n,s,r,a,o,l,c,u,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Xb extends Kc{constructor(e,t,n,s,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=Vn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qb extends Kc{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Ii),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class go extends Wt{constructor(e=[],t=Ii,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $b extends Wt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yb extends Wt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;const u=e?e.parentNode:null;u!==null&&"requestPaint"in u&&(u.onpaint=()=>{this.needsUpdate=!0},u.requestPaint())}dispose(){const e=this.image?this.image.parentNode:null;e!==null&&"onpaint"in e&&(e.onpaint=null),super.dispose()}}class ir extends Wt{constructor(e,t,n=ri,s,r,a,o=jt,l=jt,c,u=Di,d=1){if(u!==Di&&u!==fs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ps(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class jg extends ir{constructor(e,t=ri,n=Ii,s,r,a=jt,o=jt,l,c=Di){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ud extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ms extends ot{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(u,3)),this.setAttribute("uv",new Fe(d,2));function p(v,g,m,y,b,_,w,M,A,x,E){const C=_/A,D=w/x,k=_/2,L=w/2,B=M/2,O=A+1,U=x+1;let N=0,F=0;const H=new R;for(let ee=0;ee<U;ee++){const K=ee*D-L;for(let te=0;te<O;te++){const Ce=te*C-k;H[v]=Ce*y,H[g]=K*b,H[m]=B,c.push(H.x,H.y,H.z),H[v]=0,H[g]=0,H[m]=M>0?1:-1,u.push(H.x,H.y,H.z),d.push(te/A),d.push(1-ee/x),N+=1}}for(let ee=0;ee<x;ee++)for(let K=0;K<A;K++){const te=h+K+O*ee,Ce=h+K+O*(ee+1),ct=h+(K+1)+O*(ee+1),it=h+(K+1)+O*ee;l.push(te,Ce,it),l.push(Ce,ct,it),F+=6}o.addGroup(f,F,E),f+=F,h+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Jc extends ot{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],u=t/2,d=Math.PI/2*e,h=t,f=2*d+h,p=n*2+r,v=s+1,g=new R,m=new R;for(let y=0;y<=p;y++){let b=0,_=0,w=0,M=0;if(y<=n){const E=y/n,C=E*Math.PI/2;_=-u-e*Math.cos(C),w=e*Math.sin(C),M=-e*Math.cos(C),b=E*d}else if(y<=n+r){const E=(y-n)/r;_=-u+E*t,w=e,M=0,b=d+E*h}else{const E=(y-n-r)/n,C=E*Math.PI/2;_=u+e*Math.sin(C),w=e*Math.cos(C),M=e*Math.sin(C),b=d+h+E*d}const A=Math.max(0,Math.min(1,b/f));let x=0;y===0?x=.5/s:y===p&&(x=-.5/s);for(let E=0;E<=s;E++){const C=E/s,D=C*Math.PI*2,k=Math.sin(D),L=Math.cos(D);m.x=-w*L,m.y=_,m.z=w*k,o.push(m.x,m.y,m.z),g.set(-w*L,M,w*k),g.normalize(),l.push(g.x,g.y,g.z),c.push(C+x,A)}if(y>0){const E=(y-1)*v;for(let C=0;C<s;C++){const D=E+C,k=E+C+1,L=y*v+C,B=y*v+C+1;a.push(D,k,L),a.push(k,B,L)}}}this.setIndex(a),this.setAttribute("position",new Fe(o,3)),this.setAttribute("normal",new Fe(l,3)),this.setAttribute("uv",new Fe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class jc extends ot{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new R,u=new ie;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Fe(a,3)),this.setAttribute("normal",new Fe(o,3)),this.setAttribute("uv",new Fe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class vo extends ot{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let p=0;const v=[],g=n/2;let m=0;y(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Fe(d,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(f,2));function y(){const _=new R,w=new R;let M=0;const A=(t-e)/n;for(let x=0;x<=r;x++){const E=[],C=x/r,D=C*(t-e)+e;for(let k=0;k<=s;k++){const L=k/s,B=L*l+o,O=Math.sin(B),U=Math.cos(B);w.x=D*O,w.y=-C*n+g,w.z=D*U,d.push(w.x,w.y,w.z),_.set(O,A,U).normalize(),h.push(_.x,_.y,_.z),f.push(L,1-C),E.push(p++)}v.push(E)}for(let x=0;x<s;x++)for(let E=0;E<r;E++){const C=v[E][x],D=v[E+1][x],k=v[E+1][x+1],L=v[E][x+1];(e>0||E!==0)&&(u.push(C,D,L),M+=3),(t>0||E!==r-1)&&(u.push(D,k,L),M+=3)}c.addGroup(m,M,0),m+=M}function b(_){const w=p,M=new ie,A=new R;let x=0;const E=_===!0?e:t,C=_===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,g*C,0),h.push(0,C,0),f.push(.5,.5),p++;const D=p;for(let k=0;k<=s;k++){const B=k/s*l+o,O=Math.cos(B),U=Math.sin(B);A.x=E*U,A.y=g*C,A.z=E*O,d.push(A.x,A.y,A.z),h.push(0,C,0),M.x=O*.5+.5,M.y=U*.5*C+.5,f.push(M.x,M.y),p++}for(let k=0;k<s;k++){const L=w+k,B=D+k;_===!0?u.push(B,B+1,L):u.push(B+1,B,L),x+=3}c.addGroup(m,x,_===!0?1:2),m+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _o extends vo{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new _o(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ws extends ot{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Fe(r,3)),this.setAttribute("normal",new Fe(r.slice(),3)),this.setAttribute("uv",new Fe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const b=new R,_=new R,w=new R;for(let M=0;M<t.length;M+=3)f(t[M+0],b),f(t[M+1],_),f(t[M+2],w),l(b,_,w,y)}function l(y,b,_,w){const M=w+1,A=[];for(let x=0;x<=M;x++){A[x]=[];const E=y.clone().lerp(_,x/M),C=b.clone().lerp(_,x/M),D=M-x;for(let k=0;k<=D;k++)k===0&&x===M?A[x][k]=E:A[x][k]=E.clone().lerp(C,k/D)}for(let x=0;x<M;x++)for(let E=0;E<2*(M-x)-1;E++){const C=Math.floor(E/2);E%2===0?(h(A[x][C+1]),h(A[x+1][C]),h(A[x][C])):(h(A[x][C+1]),h(A[x+1][C+1]),h(A[x+1][C]))}}function c(y){const b=new R;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(y),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function u(){const y=new R;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];const _=g(y)/2/Math.PI+.5,w=m(y)/Math.PI+.5;a.push(_,1-w)}p(),d()}function d(){for(let y=0;y<a.length;y+=6){const b=a[y+0],_=a[y+2],w=a[y+4],M=Math.max(b,_,w),A=Math.min(b,_,w);M>.9&&A<.1&&(b<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),w<.2&&(a[y+4]+=1))}}function h(y){r.push(y.x,y.y,y.z)}function f(y,b){const _=y*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function p(){const y=new R,b=new R,_=new R,w=new R,M=new ie,A=new ie,x=new ie;for(let E=0,C=0;E<r.length;E+=9,C+=6){y.set(r[E+0],r[E+1],r[E+2]),b.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),M.set(a[C+0],a[C+1]),A.set(a[C+2],a[C+3]),x.set(a[C+4],a[C+5]),w.copy(y).add(b).add(_).divideScalar(3);const D=g(w);v(M,C+0,y,D),v(A,C+2,b,D),v(x,C+4,_,D)}}function v(y,b,_,w){w<0&&y.x===1&&(a[b]=y.x-1),_.x===0&&_.z===0&&(a[b]=w/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.vertices,e.indices,e.radius,e.detail)}}class Qc extends ws{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Qc(e.radius,e.detail)}}const el=new R,tl=new R,Qh=new R,nl=new zn;class Qg extends ot{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Js*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:v,b:g,c:m}=nl;if(v.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),nl.getNormal(Qh),d[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let y=0;y<3;y++){const b=(y+1)%3,_=d[y],w=d[b],M=nl[u[y]],A=nl[u[b]],x=`${_}_${w}`,E=`${w}_${_}`;E in h&&h[E]?(Qh.dot(h[E].normal)<=r&&(f.push(M.x,M.y,M.z),f.push(A.x,A.y,A.z)),h[E]=null):x in h||(h[x]={index0:c[y],index1:c[b],normal:Qh.clone()})}}for(const p in h)if(h[p]){const{index0:v,index1:g}=h[p];el.fromBufferAttribute(o,v),tl.fromBufferAttribute(o,g),f.push(el.x,el.y,el.z),f.push(tl.x,tl.y,tl.z)}this.setAttribute("position",new Fe(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class xi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){xe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ie:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new R,s=[],r=[],a=[],o=new R,l=new Qe;for(let f=0;f<=e;f++){const p=f/e;s[f]=this.getTangentAt(p,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(nt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(nt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class eh extends xi{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ie){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class e0 extends eh{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Nd(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Ip=new R,Pp=new R,eu=new Nd,tu=new Nd,nu=new Nd;class t0 extends xi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Pp.subVectors(s[0],s[1]).add(s[0]),c=Pp);const d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Ip.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ip),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),eu.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,p,v,g),tu.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,p,v,g),nu.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,p,v,g)}else this.curveType==="catmullrom"&&(eu.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),tu.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),nu.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(eu.calc(l),tu.calc(l),nu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Dp(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Zb(i,e){const t=1-i;return t*t*e}function Kb(i,e){return 2*(1-i)*i*e}function Jb(i,e){return i*i*e}function Ua(i,e,t,n){return Zb(i,e)+Kb(i,t)+Jb(i,n)}function jb(i,e){const t=1-i;return t*t*t*e}function Qb(i,e){const t=1-i;return 3*t*t*i*e}function eS(i,e){return 3*(1-i)*i*i*e}function tS(i,e){return i*i*i*e}function Na(i,e,t,n,s){return jb(i,e)+Qb(i,t)+eS(i,n)+tS(i,s)}class Od extends xi{constructor(e=new ie,t=new ie,n=new ie,s=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ie){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Na(e,s.x,r.x,a.x,o.x),Na(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class n0 extends xi{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Na(e,s.x,r.x,a.x,o.x),Na(e,s.y,r.y,a.y,o.y),Na(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fd extends xi{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class i0 extends xi{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kd extends xi{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ua(e,s.x,r.x,a.x),Ua(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bd extends xi{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ua(e,s.x,r.x,a.x),Ua(e,s.y,r.y,a.y),Ua(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zd extends xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Dp(o,l.x,c.x,u.x,d.x),Dp(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ie().fromArray(s))}return this}}var gc=Object.freeze({__proto__:null,ArcCurve:e0,CatmullRomCurve3:t0,CubicBezierCurve:Od,CubicBezierCurve3:n0,EllipseCurve:eh,LineCurve:Fd,LineCurve3:i0,QuadraticBezierCurve:kd,QuadraticBezierCurve3:Bd,SplineCurve:zd});class s0 extends xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new gc[s.type]().fromJSON(s))}return this}}class Ka extends s0{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Fd(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new kd(this.currentPoint.clone(),new ie(e,t),new ie(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new Od(this.currentPoint.clone(),new ie(e,t),new ie(n,s),new ie(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new zd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){const c=new eh(e,t,n,s,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class yo extends Ka{constructor(e){super(e),this.uuid=Yn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Ka().fromJSON(s))}return this}}function nS(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=r0(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=oS(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let u=o,d=l;for(let h=t;h<s;h+=t){const f=i[h],p=i[h+1];f<o&&(o=f),p<l&&(l=p),f>u&&(u=f),p>d&&(d=p)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return Ja(r,a,t,o,l,c,0),a}function r0(i,e,t,n,s){let r;if(s===_S(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Lp(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Lp(a/n|0,i[a],i[a+1],r);return r&&Kr(r,r.next)&&(Qa(r),r=r.next),r}function sr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Kr(t,t.next)||Gt(t.prev,t,t.next)===0)){if(Qa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ja(i,e,t,n,s,r,a){if(!i)return;!a&&r&&dS(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?sS(i,n,s,r):iS(i)){e.push(l.i,i.i,c.i),Qa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=rS(sr(i),e),Ja(i,e,t,n,s,r,2)):a===2&&aS(i,e,t,n,s,r):Ja(sr(i),e,t,n,s,r,1);break}}}function iS(i){const e=i.prev,t=i,n=i.next;if(Gt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),f=Math.max(o,l,c);let p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&Sa(s,o,r,l,a,c,p.x,p.y)&&Gt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function sS(i,e,t,n){const s=i.prev,r=i,a=i.next;if(Gt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,l,c),p=Math.min(u,d,h),v=Math.max(o,l,c),g=Math.max(u,d,h),m=Nu(f,p,e,t,n),y=Nu(v,g,e,t,n);let b=i.prevZ,_=i.nextZ;for(;b&&b.z>=m&&_&&_.z<=y;){if(b.x>=f&&b.x<=v&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&Sa(o,u,l,d,c,h,b.x,b.y)&&Gt(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=f&&_.x<=v&&_.y>=p&&_.y<=g&&_!==s&&_!==a&&Sa(o,u,l,d,c,h,_.x,_.y)&&Gt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=v&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&Sa(o,u,l,d,c,h,b.x,b.y)&&Gt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=p&&_.y<=g&&_!==s&&_!==a&&Sa(o,u,l,d,c,h,_.x,_.y)&&Gt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function rS(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Kr(n,s)&&o0(n,t,t.next,s)&&ja(n,s)&&ja(s,n)&&(e.push(n.i,t.i,s.i),Qa(t),Qa(t.next),t=i=s),t=t.next}while(t!==i);return sr(t)}function aS(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&mS(a,o)){let l=l0(a,o);a=sr(a,a.next),l=sr(l,l.next),Ja(a,e,t,n,s,r,0),Ja(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function oS(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=r0(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(pS(c))}s.sort(lS);for(let r=0;r<s.length;r++)t=cS(s[r],t);return t}function lS(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function cS(i,e){const t=hS(i,e);if(!t)return e;const n=l0(t,i);return sr(n,n.next),sr(t,t.next)}function hS(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(Kr(i,t))return t;do{if(Kr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&a0(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const d=Math.abs(s-t.y)/(n-t.x);ja(t,i)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&uS(a,t)))&&(a=t,u=d)}t=t.next}while(t!==o);return a}function uS(i,e){return Gt(i.prev,i,e.prev)<0&&Gt(e.next,i,i.next)<0}function dS(i,e,t,n){let s=i;do s.z===0&&(s.z=Nu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,fS(s)}function fS(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Nu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function pS(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function a0(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Sa(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&a0(i,e,t,n,s,r,a,o)}function mS(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!gS(i,e)&&(ja(i,e)&&ja(e,i)&&vS(i,e)&&(Gt(i.prev,i,e.prev)||Gt(i,e.prev,e))||Kr(i,e)&&Gt(i.prev,i,i.next)>0&&Gt(e.prev,e,e.next)>0)}function Gt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Kr(i,e){return i.x===e.x&&i.y===e.y}function o0(i,e,t,n){const s=sl(Gt(i,e,t)),r=sl(Gt(i,e,n)),a=sl(Gt(t,n,i)),o=sl(Gt(t,n,e));return!!(s!==r&&a!==o||s===0&&il(i,t,e)||r===0&&il(i,n,e)||a===0&&il(t,i,n)||o===0&&il(t,e,n))}function il(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function sl(i){return i>0?1:i<0?-1:0}function gS(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&o0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ja(i,e){return Gt(i.prev,i,i.next)<0?Gt(i,e,i.next)>=0&&Gt(i,i.prev,e)>=0:Gt(i,e,i.prev)<0||Gt(i,i.next,e)<0}function vS(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function l0(i,e){const t=Ou(i.i,i.x,i.y),n=Ou(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Lp(i,e,t,n){const s=Ou(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Qa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ou(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _S(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class yS{static triangulate(e,t,n=2){return nS(e,t,n)}}class pi{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return pi.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Up(e),Np(n,e);let a=e.length;t.forEach(Up);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Np(n,t[l]);const o=yS.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Up(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Np(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class th extends ot{constructor(e=new yo([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Fe(s,3)),this.setAttribute("uv",new Fe(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:xS;let b,_=!1,w,M,A,x;if(m){b=m.getSpacedPoints(u),_=!0,h=!1;const ne=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(u,ne),M=new R,A=new R,x=new R}h||(g=0,f=0,p=0,v=0);const E=o.extractPoints(c);let C=E.shape;const D=E.holes;if(!pi.isClockWise(C)){C=C.reverse();for(let ne=0,ae=D.length;ne<ae;ne++){const oe=D[ne];pi.isClockWise(oe)&&(D[ne]=oe.reverse())}}function L(ne){const oe=10000000000000001e-36;let ge=ne[0];for(let _e=1;_e<=ne.length;_e++){const je=_e%ne.length,He=ne[je],ve=He.x-ge.x,Ue=He.y-ge.y,z=ve*ve+Ue*Ue,Ct=Math.max(Math.abs(He.x),Math.abs(He.y),Math.abs(ge.x),Math.abs(ge.y)),vt=oe*Ct*Ct;if(z<=vt){ne.splice(je,1),_e--;continue}ge=He}}L(C),D.forEach(L);const B=D.length,O=C;for(let ne=0;ne<B;ne++){const ae=D[ne];C=C.concat(ae)}function U(ne,ae,oe){return ae||Xe("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(ae,oe)}const N=C.length;function F(ne,ae,oe){let ge,_e,je;const He=ne.x-ae.x,ve=ne.y-ae.y,Ue=oe.x-ne.x,z=oe.y-ne.y,Ct=He*He+ve*ve,vt=He*z-ve*Ue;if(Math.abs(vt)>Number.EPSILON){const I=Math.sqrt(Ct),S=Math.sqrt(Ue*Ue+z*z),W=ae.x-ve/I,Y=ae.y+He/I,j=oe.x-z/S,fe=oe.y+Ue/S,ye=((j-W)*z-(fe-Y)*Ue)/(He*z-ve*Ue);ge=W+He*ye-ne.x,_e=Y+ve*ye-ne.y;const Q=ge*ge+_e*_e;if(Q<=2)return new ie(ge,_e);je=Math.sqrt(Q/2)}else{let I=!1;He>Number.EPSILON?Ue>Number.EPSILON&&(I=!0):He<-Number.EPSILON?Ue<-Number.EPSILON&&(I=!0):Math.sign(ve)===Math.sign(z)&&(I=!0),I?(ge=-ve,_e=He,je=Math.sqrt(Ct)):(ge=He,_e=ve,je=Math.sqrt(Ct/2))}return new ie(ge/je,_e/je)}const H=[];for(let ne=0,ae=O.length,oe=ae-1,ge=ne+1;ne<ae;ne++,oe++,ge++)oe===ae&&(oe=0),ge===ae&&(ge=0),H[ne]=F(O[ne],O[oe],O[ge]);const ee=[];let K,te=H.concat();for(let ne=0,ae=B;ne<ae;ne++){const oe=D[ne];K=[];for(let ge=0,_e=oe.length,je=_e-1,He=ge+1;ge<_e;ge++,je++,He++)je===_e&&(je=0),He===_e&&(He=0),K[ge]=F(oe[ge],oe[je],oe[He]);ee.push(K),te=te.concat(K)}let Ce;if(g===0)Ce=pi.triangulateShape(O,D);else{const ne=[],ae=[];for(let oe=0;oe<g;oe++){const ge=oe/g,_e=f*Math.cos(ge*Math.PI/2),je=p*Math.sin(ge*Math.PI/2)+v;for(let He=0,ve=O.length;He<ve;He++){const Ue=U(O[He],H[He],je);pe(Ue.x,Ue.y,-_e),ge===0&&ne.push(Ue)}for(let He=0,ve=B;He<ve;He++){const Ue=D[He];K=ee[He];const z=[];for(let Ct=0,vt=Ue.length;Ct<vt;Ct++){const I=U(Ue[Ct],K[Ct],je);pe(I.x,I.y,-_e),ge===0&&z.push(I)}ge===0&&ae.push(z)}}Ce=pi.triangulateShape(ne,ae)}const ct=Ce.length,it=p+v;for(let ne=0;ne<N;ne++){const ae=h?U(C[ne],te[ne],it):C[ne];_?(A.copy(w.normals[0]).multiplyScalar(ae.x),M.copy(w.binormals[0]).multiplyScalar(ae.y),x.copy(b[0]).add(A).add(M),pe(x.x,x.y,x.z)):pe(ae.x,ae.y,0)}for(let ne=1;ne<=u;ne++)for(let ae=0;ae<N;ae++){const oe=h?U(C[ae],te[ae],it):C[ae];_?(A.copy(w.normals[ne]).multiplyScalar(oe.x),M.copy(w.binormals[ne]).multiplyScalar(oe.y),x.copy(b[ne]).add(A).add(M),pe(x.x,x.y,x.z)):pe(oe.x,oe.y,d/u*ne)}for(let ne=g-1;ne>=0;ne--){const ae=ne/g,oe=f*Math.cos(ae*Math.PI/2),ge=p*Math.sin(ae*Math.PI/2)+v;for(let _e=0,je=O.length;_e<je;_e++){const He=U(O[_e],H[_e],ge);pe(He.x,He.y,d+oe)}for(let _e=0,je=D.length;_e<je;_e++){const He=D[_e];K=ee[_e];for(let ve=0,Ue=He.length;ve<Ue;ve++){const z=U(He[ve],K[ve],ge);_?pe(z.x,z.y+b[u-1].y,b[u-1].x+oe):pe(z.x,z.y,d+oe)}}}X(),ce();function X(){const ne=s.length/3;if(h){let ae=0,oe=N*ae;for(let ge=0;ge<ct;ge++){const _e=Ce[ge];Ne(_e[2]+oe,_e[1]+oe,_e[0]+oe)}ae=u+g*2,oe=N*ae;for(let ge=0;ge<ct;ge++){const _e=Ce[ge];Ne(_e[0]+oe,_e[1]+oe,_e[2]+oe)}}else{for(let ae=0;ae<ct;ae++){const oe=Ce[ae];Ne(oe[2],oe[1],oe[0])}for(let ae=0;ae<ct;ae++){const oe=Ce[ae];Ne(oe[0]+N*u,oe[1]+N*u,oe[2]+N*u)}}n.addGroup(ne,s.length/3-ne,0)}function ce(){const ne=s.length/3;let ae=0;J(O,ae),ae+=O.length;for(let oe=0,ge=D.length;oe<ge;oe++){const _e=D[oe];J(_e,ae),ae+=_e.length}n.addGroup(ne,s.length/3-ne,1)}function J(ne,ae){let oe=ne.length;for(;--oe>=0;){const ge=oe;let _e=oe-1;_e<0&&(_e=ne.length-1);for(let je=0,He=u+g*2;je<He;je++){const ve=N*je,Ue=N*(je+1),z=ae+ge+ve,Ct=ae+_e+ve,vt=ae+_e+Ue,I=ae+ge+Ue;le(z,Ct,vt,I)}}}function pe(ne,ae,oe){l.push(ne),l.push(ae),l.push(oe)}function Ne(ne,ae,oe){me(ne),me(ae),me(oe);const ge=s.length/3,_e=y.generateTopUV(n,s,ge-3,ge-2,ge-1);Me(_e[0]),Me(_e[1]),Me(_e[2])}function le(ne,ae,oe,ge){me(ne),me(ae),me(ge),me(ae),me(oe),me(ge);const _e=s.length/3,je=y.generateSideWallUV(n,s,_e-6,_e-3,_e-2,_e-1);Me(je[0]),Me(je[1]),Me(je[3]),Me(je[1]),Me(je[2]),Me(je[3])}function me(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function Me(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return bS(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new gc[s.type]().fromJSON(s)),new th(n,e.options)}}const xS={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new ie(r,a),new ie(o,l),new ie(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[s*3],f=e[s*3+1],p=e[s*3+2],v=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new ie(a,1-l),new ie(c,1-d),new ie(h,1-p),new ie(v,1-m)]:[new ie(o,1-l),new ie(u,1-d),new ie(f,1-p),new ie(g,1-m)]}};function bS(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class nh extends ws{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new nh(e.radius,e.detail)}}class ih extends ot{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=nt(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/t,d=new R,h=new ie,f=new R,p=new R,v=new R;let g=0,m=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,f.x=m*1,f.y=-g,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let y=0;y<=t;y++){const b=n+y*u*s,_=Math.sin(b),w=Math.cos(b);for(let M=0;M<=e.length-1;M++){d.x=e[M].x*_,d.y=e[M].y,d.z=e[M].x*w,a.push(d.x,d.y,d.z),h.x=y/t,h.y=M/(e.length-1),o.push(h.x,h.y);const A=l[3*M+0]*_,x=l[3*M+1],E=l[3*M+0]*w;c.push(A,x,E)}}for(let y=0;y<t;y++)for(let b=0;b<e.length-1;b++){const _=b+y*e.length,w=_,M=_+e.length,A=_+e.length+1,x=_+1;r.push(w,M,x),r.push(A,x,M)}this.setIndex(r),this.setAttribute("position",new Fe(a,3)),this.setAttribute("uv",new Fe(o,2)),this.setAttribute("normal",new Fe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ih(e.points,e.segments,e.phiStart,e.phiLength)}}class xo extends ws{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new xo(e.radius,e.detail)}}class ta extends ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,f=[],p=[],v=[],g=[];for(let m=0;m<u;m++){const y=m*h-a;for(let b=0;b<c;b++){const _=b*d-r;p.push(_,-y,0),v.push(0,0,1),g.push(b/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const b=y+c*m,_=y+c*(m+1),w=y+1+c*(m+1),M=y+1+c*m;f.push(b,_,M),f.push(_,w,M)}this.setIndex(f),this.setAttribute("position",new Fe(p,3)),this.setAttribute("normal",new Fe(v,3)),this.setAttribute("uv",new Fe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.width,e.height,e.widthSegments,e.heightSegments)}}class sh extends ot{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let d=e;const h=(t-e)/s,f=new R,p=new ie;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){const m=r+g/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}d+=h}for(let v=0;v<s;v++){const g=v*(n+1);for(let m=0;m<n;m++){const y=m+g,b=y,_=y+n+1,w=y+n+2,M=y+1;o.push(b,_,M),o.push(_,w,M)}}this.setIndex(o),this.setAttribute("position",new Fe(l,3)),this.setAttribute("normal",new Fe(c,3)),this.setAttribute("uv",new Fe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class rh extends ot{constructor(e=new yo([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Fe(s,3)),this.setAttribute("normal",new Fe(r,3)),this.setAttribute("uv",new Fe(a,2));function c(u){const d=s.length/3,h=u.extractPoints(t);let f=h.shape;const p=h.holes;pi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const y=p[g];pi.isClockWise(y)===!0&&(p[g]=y.reverse())}const v=pi.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const y=p[g];f=f.concat(y)}for(let g=0,m=f.length;g<m;g++){const y=f[g];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let g=0,m=v.length;g<m;g++){const y=v[g],b=y[0]+d,_=y[1]+d,w=y[2]+d;n.push(b,_,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return SS(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];n.push(a)}return new rh(n,e.curveSegments)}}function SS(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class bo extends ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new R,h=new R,f=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){const y=[],b=m/n,_=a+b*o,w=e*Math.cos(_),M=Math.sqrt(e*e-w*w);let A=0;m===0&&a===0?A=.5/t:m===n&&l===Math.PI&&(A=-.5/t);for(let x=0;x<=t;x++){const E=x/t,C=s+E*r;d.x=-M*Math.cos(C),d.y=w,d.z=M*Math.sin(C),p.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),g.push(E+A,1-b),y.push(c++)}u.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){const b=u[m][y+1],_=u[m][y],w=u[m+1][y],M=u[m+1][y+1];(m!==0||a>0)&&f.push(b,_,M),(m!==n-1||l<Math.PI)&&f.push(_,w,M)}this.setIndex(f),this.setAttribute("position",new Fe(p,3)),this.setAttribute("normal",new Fe(v,3)),this.setAttribute("uv",new Fe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ah extends ws{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ah(e.radius,e.detail)}}class oh extends ot{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],d=[],h=new R,f=new R,p=new R;for(let v=0;v<=n;v++){const g=a+v/n*o;for(let m=0;m<=s;m++){const y=m/s*r;f.x=(e+t*Math.cos(g))*Math.cos(y),f.y=(e+t*Math.cos(g))*Math.sin(y),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),p.subVectors(f,h).normalize(),u.push(p.x,p.y,p.z),d.push(m/s),d.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=s;g++){const m=(s+1)*v+g-1,y=(s+1)*(v-1)+g-1,b=(s+1)*(v-1)+g,_=(s+1)*v+g;l.push(m,y,_),l.push(y,b,_)}this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(u,3)),this.setAttribute("uv",new Fe(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class lh extends ot{constructor(e=1,t=.4,n=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:s,p:r,q:a},n=Math.floor(n),s=Math.floor(s);const o=[],l=[],c=[],u=[],d=new R,h=new R,f=new R,p=new R,v=new R,g=new R,m=new R;for(let b=0;b<=n;++b){const _=b/n*r*Math.PI*2;y(_,r,a,e,f),y(_+.01,r,a,e,p),g.subVectors(p,f),m.addVectors(p,f),v.crossVectors(g,m),m.crossVectors(v,g),v.normalize(),m.normalize();for(let w=0;w<=s;++w){const M=w/s*Math.PI*2,A=-t*Math.cos(M),x=t*Math.sin(M);d.x=f.x+(A*m.x+x*v.x),d.y=f.y+(A*m.y+x*v.y),d.z=f.z+(A*m.z+x*v.z),l.push(d.x,d.y,d.z),h.subVectors(d,f).normalize(),c.push(h.x,h.y,h.z),u.push(b/n),u.push(w/s)}}for(let b=1;b<=n;b++)for(let _=1;_<=s;_++){const w=(s+1)*(b-1)+(_-1),M=(s+1)*b+(_-1),A=(s+1)*b+_,x=(s+1)*(b-1)+_;o.push(w,M,x),o.push(M,A,x)}this.setIndex(o),this.setAttribute("position",new Fe(l,3)),this.setAttribute("normal",new Fe(c,3)),this.setAttribute("uv",new Fe(u,2));function y(b,_,w,M,A){const x=Math.cos(b),E=Math.sin(b),C=w/_*b,D=Math.cos(C);A.x=M*(2+D)*.5*x,A.y=M*(2+D)*E*.5,A.z=M*Math.sin(C)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lh(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class ch extends ot{constructor(e=new Bd(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new R,l=new R,c=new ie;let u=new R;const d=[],h=[],f=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Fe(d,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(f,2));function v(){for(let b=0;b<t;b++)g(b);g(r===!1?t:0),y(),m()}function g(b){u=e.getPointAt(b/t,u);const _=a.normals[b],w=a.binormals[b];for(let M=0;M<=s;M++){const A=M/s*Math.PI*2,x=Math.sin(A),E=-Math.cos(A);l.x=E*_.x+x*w.x,l.y=E*_.y+x*w.y,l.z=E*_.z+x*w.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let b=1;b<=t;b++)for(let _=1;_<=s;_++){const w=(s+1)*(b-1)+(_-1),M=(s+1)*b+(_-1),A=(s+1)*b+_,x=(s+1)*(b-1)+_;p.push(w,M,x),p.push(M,A,x)}}function y(){for(let b=0;b<=t;b++)for(let _=0;_<=s;_++)c.x=b/t,c.y=_/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ch(new gc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class c0 extends ot{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new R,r=new R;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const d=l[c],h=d.start,f=d.count;for(let p=h,v=h+f;p<v;p+=3)for(let g=0;g<3;g++){const m=o.getX(p+g),y=o.getX(p+(g+1)%3);s.fromBufferAttribute(a,m),r.fromBufferAttribute(a,y),Op(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const u=3*o+c,d=3*o+(c+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,d),Op(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Fe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Op(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}var Fp=Object.freeze({__proto__:null,BoxGeometry:Ms,CapsuleGeometry:Jc,CircleGeometry:jc,ConeGeometry:_o,CylinderGeometry:vo,DodecahedronGeometry:Qc,EdgesGeometry:Qg,ExtrudeGeometry:th,IcosahedronGeometry:nh,LatheGeometry:ih,OctahedronGeometry:xo,PlaneGeometry:ta,PolyhedronGeometry:ws,RingGeometry:sh,ShapeGeometry:rh,SphereGeometry:bo,TetrahedronGeometry:ah,TorusGeometry:oh,TorusKnotGeometry:lh,TubeGeometry:ch,WireframeGeometry:c0});class h0 extends mn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Oe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function Jr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(kp(s))s.isRenderTargetTexture?(xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(kp(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function An(i){const e={};for(let t=0;t<i.length;t++){const n=Jr(i[t]);for(const s in n)e[s]=n[s]}return e}function kp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function MS(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function u0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const Vd={clone:Jr,merge:An};var wS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ES=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wS,this.fragmentShader=ES,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jr(e.uniforms),this.uniformsGroups=MS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Oe().setHex(s.value);break;case"v2":this.uniforms[n].value=new ie().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new rt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Qe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Gd extends ai{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Hd extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zi,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class d0 extends Hd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class f0 extends mn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Oe(16777215),this.specular=new Oe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zi,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=po,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class p0 extends mn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Oe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zi,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class m0 extends mn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zi,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class g0 extends mn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zi,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=po,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wd extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xd extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class v0 extends mn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Oe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zi,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _0 extends Un{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function $s(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function y0(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Fu(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function x0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}function TS(i,e,t,n,s=30){const r=i.clone();r.name=e;const a=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],u=c.getValueSize(),d=[],h=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*s;if(!(p<t||p>=n)){d.push(c.times[f]);for(let v=0;v<u;++v)h.push(c.values[f*u+v])}}d.length!==0&&(c.times=$s(d,c.times.constructor),c.values=$s(h,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function AS(i,e=0,t=i,n=30){n<=0&&(n=30);const s=t.tracks.length,r=e/n;for(let a=0;a<s;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=i.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let u=0;const d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);let h=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=f/3);const p=o.times.length-1;let v;if(r<=o.times[0]){const m=u,y=d-u;v=o.values.slice(m,y)}else if(r>=o.times[p]){const m=p*d+u,y=m+d-u;v=o.values.slice(m,y)}else{const m=o.createInterpolant(),y=u,b=d-u;m.evaluate(r),v=m.resultBuffer.slice(y,b)}l==="quaternion"&&new fn().fromArray(v).normalize().conjugate().toArray(v);const g=c.times.length;for(let m=0;m<g;++m){const y=m*f+h;if(l==="quaternion")fn.multiplyQuaternionsFlat(c.values,y,v,0,c.values,y);else{const b=f-h*2;for(let _=0;_<b;++_)c.values[y+_]-=v[_]}}}return i.blendMode=Ed,i}class CS{static convertArray(e,t){return $s(e,t)}static isTypedArray(e){return Fg(e)}static getKeyframeOrder(e){return y0(e)}static sortedArray(e,t,n){return Fu(e,t,n)}static flattenJSON(e,t,n,s){x0(e,t,n,s)}static subclip(e,t,n,s,r=30){return TS(e,t,n,s,r)}static makeClipAdditive(e,t=0,n=e,s=30){return AS(e,t,n,s)}}class na{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class b0 extends na{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xs,endingEnd:Xs}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case qs:r=e,o=2*t-n;break;case Wa:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qs:a=e,l=2*n-t;break;case Wa:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),v=p*p,g=v*p,m=-h*g+2*h*v-h*p,y=(1+h)*g+(-1.5-2*h)*v+(-.5+h)*p+1,b=(-1-f)*g+(1.5+f)*v+.5*p,_=f*g-f*v;for(let w=0;w!==o;++w)r[w]=m*a[u+w]+y*a[c+w]+b*a[l+w]+_*a[d+w];return r}}class qd extends na{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}}class S0 extends na{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class M0 extends na{interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){const p=(n-t)/(s-t),v=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*v+a[l+g]*p;return r}const h=o*2,f=e-1;for(let p=0;p!==o;++p){const v=a[c+p],g=a[l+p],m=f*h+p*2,y=d[m],b=d[m+1],_=e*h+p*2,w=u[_],M=u[_+1];let A=(n-t)/(s-t),x,E,C,D,k;for(let L=0;L<8;L++){x=A*A,E=x*A,C=1-A,D=C*C,k=D*C;const O=k*t+3*D*A*y+3*C*x*w+E*s-n;if(Math.abs(O)<1e-10)break;const U=3*D*(y-t)+6*C*A*(w-y)+3*x*(s-w);if(Math.abs(U)<1e-10)break;A=A-O/U,A=Math.max(0,Math.min(1,A))}r[p]=k*v+3*D*A*b+3*C*x*M+E*g}return r}}class li{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$s(t,this.TimeBufferType),this.values=$s(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$s(e.times,Array),values:$s(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new S0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new b0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new M0(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ha:t=this.InterpolantFactoryMethodDiscrete;break;case fc:t=this.InterpolantFactoryMethodLinear;break;case yl:t=this.InterpolantFactoryMethodSmooth;break;case Pu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return xe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ha;case this.InterpolantFactoryMethodLinear:return fc;case this.InterpolantFactoryMethodSmooth:return yl;case this.InterpolantFactoryMethodBezier:return Pu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Xe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Fg(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===yl,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{const d=o*n,h=d-n,f=d+n;for(let p=0;p!==n;++p){const v=t[d+p];if(v!==t[h+p]||v!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}li.prototype.ValueTypeName="";li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=fc;class or extends li{constructor(e,t,n){super(e,t,n)}}or.prototype.ValueTypeName="bool";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=Ha;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;class $d extends li{constructor(e,t,n,s){super(e,t,n,s)}}$d.prototype.ValueTypeName="color";class hh extends li{constructor(e,t,n,s){super(e,t,n,s)}}hh.prototype.ValueTypeName="number";class w0 extends na{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let c=e*o;for(let u=c+o;c!==u;c+=4)fn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class uh extends li{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new w0(this.times,this.values,this.getValueSize(),e)}}uh.prototype.ValueTypeName="quaternion";uh.prototype.InterpolantFactoryMethodSmooth=void 0;class lr extends li{constructor(e,t,n){super(e,t,n)}}lr.prototype.ValueTypeName="string";lr.prototype.ValueBufferType=Array;lr.prototype.DefaultInterpolation=Ha;lr.prototype.InterpolantFactoryMethodLinear=void 0;lr.prototype.InterpolantFactoryMethodSmooth=void 0;class Yd extends li{constructor(e,t,n,s){super(e,t,n,s)}}Yd.prototype.ValueTypeName="vector";class eo{constructor(e="",t=-1,n=[],s=Bc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Yn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(IS(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(li.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=y0(l);l=Fu(l,1,u),c=Fu(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new hh(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const d=u[1];let h=s[d];h||(s[d]=h=[]),h.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function RS(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return hh;case"vector":case"vector2":case"vector3":case"vector4":return Yd;case"color":return $d;case"quaternion":return uh;case"bool":case"boolean":return or;case"string":return lr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function IS(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=RS(i.type);if(i.times===void 0){const t=[],n=[];x0(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Ci={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Bp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Bp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Bp(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Zd{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const cr=new Zd;class Gn{constructor(e){this.manager=e!==void 0?e:cr,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Gn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vi={};class PS extends Error{constructor(e,t){super(e),this.response=t}}class Ki extends Gn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ci.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Vi[e]!==void 0){Vi[e].push({onLoad:t,onProgress:n,onError:s});return}Vi[e]=[],Vi[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&xe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Vi[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,p=f!==0;let v=0;const g=new ReadableStream({start(m){y();function y(){d.read().then(({done:b,value:_})=>{if(b)m.close();else{v+=_.byteLength;const w=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:f});for(let M=0,A=u.length;M<A;M++){const x=u[M];x.onProgress&&x.onProgress(w)}m.enqueue(_),y()}},b=>{m.error(b)})}}});return new Response(g)}else throw new PS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Ci.add(`file:${e}`,c);const u=Vi[e];delete Vi[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Vi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Vi[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class DS extends Gn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new Ki(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):Xe(l),r.manager.itemError(e)}},n,s)}parse(e){const t=[];for(let n=0;n<e.length;n++){const s=eo.parse(e[n]);t.push(s)}return t}}class LS extends Gn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=[],o=new Kc,l=new Ki(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function u(d){l.load(e[d],function(h){const f=r.parse(h,!0);a[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=zt),o.image=a,o.format=f.format,o.needsUpdate=!0,t&&t(o))},n,s)}if(Array.isArray(e))for(let d=0,h=e.length;d<h;++d)u(d);else l.load(e,function(d){const h=r.parse(d,!0);if(h.isCubemap){const f=h.mipmaps.length/h.mipmapCount;for(let p=0;p<f;p++){a[p]={mipmaps:[]};for(let v=0;v<h.mipmapCount;v++)a[p].mipmaps.push(h.mipmaps[p*h.mipmapCount+v]),a[p].format=h.format,a[p].width=h.width,a[p].height=h.height}o.image=a}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=zt),o.format=h.format,o.needsUpdate=!0,t&&t(o)},n,s);return o}}const Rr=new WeakMap;class to extends Gn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ci.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Rr.get(a);d===void 0&&(d=[],Rr.set(a,d)),d.push({onLoad:t,onError:s})}return a}const o=Ya("img");function l(){u(),t&&t(this);const d=Rr.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}Rr.delete(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),Ci.remove(`image:${e}`);const h=Rr.get(this)||[];for(let f=0;f<h.length;f++){const p=h[f];p.onError&&p.onError(d)}Rr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ci.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class US extends Gn{constructor(e){super(e)}load(e,t,n,s){const r=new go;r.colorSpace=Rn;const a=new to(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){r.images[c]=u,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,s)}for(let c=0;c<e.length;++c)l(c);return r}}class NS extends Gn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new ni,o=new Ki(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(u){s!==void 0?s(u):Xe(u);return}r._applyTexData(a,c),t&&t(a,c)},n,s),a}createDataTexture(e){const t=new ni;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Vn,e.wrapT=t.wrapT!==void 0?t.wrapT:Vn,e.magFilter=t.magFilter!==void 0?t.magFilter:zt,e.minFilter=t.minFilter!==void 0?t.minFilter:zt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Ai),t.mipmapCount===1&&(e.minFilter=zt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class OS extends Gn{constructor(e){super(e)}load(e,t,n,s){const r=new Wt,a=new to(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Es extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class E0 extends Es{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const iu=new Qe,zp=new R,Vp=new R;class Kd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zp.setFromMatrixPosition(e.matrixWorld),t.position.copy(zp),Vp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vp),t.updateMatrixWorld(),iu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(iu,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===er||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(iu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const rl=new R,al=new fn,wi=new R;let dh=class extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(rl,al,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rl,al,wi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(rl,al,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rl,al,wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const ls=new R,Gp=new ie,Hp=new ie;class un extends dh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,t){return this.getViewBounds(e,Gp,Hp),t.subVectors(Hp,Gp)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Js*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class FS extends Kd{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Yr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class T0 extends Es{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new FS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class kS extends Kd{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}}class A0 extends Es{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new kS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ia extends dh{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class BS extends Kd{constructor(){super(new ia(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class C0 extends Es{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new BS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class R0 extends Es{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class I0 extends Es{constructor(e,t,n=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Jd{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new R)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,s=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*s),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*s)),t.addScaledVector(a[5],1.092548*(s*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-s*s)),t}getIrradianceAt(e,t){const n=e.x,s=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*s),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*s),t.addScaledVector(a[5],2*.429043*s*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-s*s)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].fromArray(e,t+s*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].toArray(e,t+s*3);return e}static getBasisAt(e,t){const n=e.x,s=e.y,r=e.z;t[0]=.282095,t[1]=.488603*s,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*s,t[5]=1.092548*s*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-s*s)}}class P0 extends Es{constructor(e=new Jd,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}const Wp={};class fh extends Gn{constructor(e){super(e),this.textures={}}load(e,t,n,s){const r=this,a=new Ki(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):Xe(l),r.manager.itemError(e)}},n,s)}parse(e){const t=this.createMaterialFromType(e.type);return t.fromJSON(e,this.textures),t}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return fh.createMaterialFromType(e)}static createMaterialFromType(e){const n={ShadowMaterial:h0,SpriteMaterial:Pd,RawShaderMaterial:Gd,ShaderMaterial:ai,PointsMaterial:Ld,MeshPhysicalMaterial:d0,MeshStandardMaterial:Hd,MeshPhongMaterial:f0,MeshToonMaterial:p0,MeshNormalMaterial:m0,MeshLambertMaterial:g0,MeshDepthMaterial:Wd,MeshDistanceMaterial:Xd,MeshBasicMaterial:Qi,MeshMatcapMaterial:v0,LineDashedMaterial:_0,LineBasicMaterial:Un,Material:mn,...Wp}[e];let s;return n===void 0?(gs(`MaterialLoader: Unknown material type "${e}". Use .registerMaterial() before starting the deserialization process.`),s=new mn):s=new n,s}static registerMaterial(e,t){Wp[e]=t}}class ku{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class D0 extends ot{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class L0 extends Gn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new Ki(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):Xe(l),r.manager.itemError(e)}},n,s)}parse(e){const t={},n={};function s(f,p){if(t[p]!==void 0)return t[p];const g=f.interleavedBuffers[p],m=r(f,g.buffer),y=kr(g.type,m),b=new $c(y,g.stride);return b.uuid=g.uuid,t[p]=b,b}function r(f,p){if(n[p]!==void 0)return n[p];const g=f.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}const a=e.isInstancedBufferGeometry?new D0:new ot,o=e.data.index;if(o!==void 0){const f=kr(o.type,o.array);a.setIndex(new Ut(f,1))}const l=e.data.attributes;for(const f in l){const p=l[f];let v;if(p.isInterleavedBufferAttribute){const g=s(e.data,p.data);v=new tr(g,p.itemSize,p.offset,p.normalized)}else{const g=kr(p.type,p.array),m=p.isInstancedBufferAttribute?Zr:Ut;v=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(v.name=p.name),p.usage!==void 0&&v.setUsage(p.usage),a.setAttribute(f,v)}const c=e.data.morphAttributes;if(c)for(const f in c){const p=c[f],v=[];for(let g=0,m=p.length;g<m;g++){const y=p[g];let b;if(y.isInterleavedBufferAttribute){const _=s(e.data,y.data);b=new tr(_,y.itemSize,y.offset,y.normalized)}else{const _=kr(y.type,y.array);b=new Ut(_,y.itemSize,y.normalized)}y.name!==void 0&&(b.name=y.name),v.push(b)}a.morphAttributes[f]=v}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const d=e.data.groups||e.data.drawcalls||e.data.offsets;if(d!==void 0)for(let f=0,p=d.length;f!==p;++f){const v=d[f];a.addGroup(v.start,v.count,v.materialIndex)}const h=e.data.boundingSphere;return h!==void 0&&(a.boundingSphere=new pn().fromJSON(h)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}const su={};class zS extends Gn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=this.path===""?ku.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new Ki(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(d){s!==void 0&&s(d),Xe("ObjectLoader: Can't parse "+e+".",d.message);return}const u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){s!==void 0&&s(new Error("THREE.ObjectLoader: Can't load "+e)),Xe("ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,s)}async loadAsync(e,t){const n=this,s=this.path===""?ku.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||s;const r=new Ki(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(e,t);let o;try{o=JSON.parse(a)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+e+". "+c.message)}const l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),s=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,s),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,l,o,n),u=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,u),this.bindLightTargets(c),t!==void 0){let d=!1;for(const h in a)if(a[h].data instanceof HTMLImageElement){d=!0;break}d===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,s,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(e,t){su[e]=t}parseShapes(e){const t={};if(e!==void 0)for(let n=0,s=e.length;n<s;n++){const r=new yo().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},s={};if(t.traverse(function(r){r.isBone&&(s[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=new Yc().fromJSON(e[r],s);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const s=new L0;for(let r=0,a=e.length;r<a;r++){let o;const l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=s.parse(l);break;default:l.type in Fp?o=Fp[l.type].fromJSON(l,t):l.type in su?o=su[l.type].fromJSON(l,t):xe(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){const n={},s={};if(e!==void 0){const r=new fh;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){const l=e[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),s[l.uuid]=n[l.uuid]}}return s}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const s=e[n],r=eo.parse(s);t[r.uuid]=r}return t}parseImages(e,t){const n=this,s={};let r;function a(l){return l=n.manager.resolveURL(l),n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(u)}else return l.data?{data:kr(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new Zd(t);r=new to(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,u=e.length;c<u;c++){const d=e[c],h=d.url;if(Array.isArray(h)){const f=[];for(let p=0,v=h.length;p<v;p++){const g=h[p],m=o(g);m!==null&&(m instanceof HTMLImageElement?f.push(m):f.push(new ni(m.data,m.width,m.height)))}s[d.uuid]=new ps(f)}else{const f=o(d.url);s[d.uuid]=new ps(f)}}}return s}async parseImagesAsync(e){const t=this,n={};let s;async function r(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await s.loadAsync(l)}else return a.data?{data:kr(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){s=new to(this.manager),s.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.url;if(Array.isArray(c)){const u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d],p=await r(f);p!==null&&(p instanceof HTMLImageElement?u.push(p):u.push(new ni(p.data,p.width,p.height)))}n[l.uuid]=new ps(u)}else{const u=await r(l.url);n[l.uuid]=new ps(u)}}}return n}parseTextures(e,t){function n(r,a){return typeof r=="number"?r:(xe("ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const s={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=e[r];o.image===void 0&&xe('ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&xe("ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let u;Array.isArray(c)?(u=new go,c.length===6&&(u.needsUpdate=!0)):(c&&c.data?u=new ni:u=new Wt,c&&(u.needsUpdate=!0)),u.source=l,u.uuid=o.uuid,o.name!==void 0&&(u.name=o.name),o.mapping!==void 0&&(u.mapping=n(o.mapping,VS)),o.channel!==void 0&&(u.channel=o.channel),o.offset!==void 0&&u.offset.fromArray(o.offset),o.repeat!==void 0&&u.repeat.fromArray(o.repeat),o.center!==void 0&&u.center.fromArray(o.center),o.rotation!==void 0&&(u.rotation=o.rotation),o.wrap!==void 0&&(u.wrapS=n(o.wrap[0],Xp),u.wrapT=n(o.wrap[1],Xp)),o.format!==void 0&&(u.format=o.format),o.internalFormat!==void 0&&(u.internalFormat=o.internalFormat),o.type!==void 0&&(u.type=o.type),o.colorSpace!==void 0&&(u.colorSpace=o.colorSpace),o.minFilter!==void 0&&(u.minFilter=n(o.minFilter,qp)),o.magFilter!==void 0&&(u.magFilter=n(o.magFilter,qp)),o.anisotropy!==void 0&&(u.anisotropy=o.anisotropy),o.flipY!==void 0&&(u.flipY=o.flipY),o.generateMipmaps!==void 0&&(u.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(u.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(u.compareFunction=o.compareFunction),o.normalized!==void 0&&(u.normalized=o.normalized),o.userData!==void 0&&(u.userData=o.userData),s[o.uuid]=u}return s}parseObject(e,t,n,s,r){let a;function o(h){return t[h]===void 0&&xe("ObjectLoader: Undefined geometry",h),t[h]}function l(h){if(h!==void 0){if(Array.isArray(h)){const f=[];for(let p=0,v=h.length;p<v;p++){const g=h[p];n[g]===void 0&&xe("ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[h]===void 0&&xe("ObjectLoader: Undefined material",h),n[h]}}function c(h){return s[h]===void 0&&xe("ObjectLoader: Undefined texture",h),s[h]}let u,d;switch(e.type){case"Scene":a=new Cd,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new Oe(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new qc(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new Xc(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new un(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new ia(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new R0(e.color,e.intensity);break;case"DirectionalLight":a=new C0(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new A0(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new I0(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new T0(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new E0(e.color,e.groundColor,e.intensity);break;case"LightProbe":const h=new Jd().fromArray(e.sh);a=new P0(h,e.intensity);break;case"SkinnedMesh":u=o(e.geometry),d=l(e.material),a=new qg(u,d),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":u=o(e.geometry),d=l(e.material),a=new Qt(u,d);break;case"InstancedMesh":u=o(e.geometry),d=l(e.material);const f=e.count,p=e.instanceMatrix,v=e.instanceColor;a=new $g(u,d,f),a.instanceMatrix=new Zr(new Float32Array(p.array),16),v!==void 0&&(a.instanceColor=new Zr(new Float32Array(v.array),v.itemSize));break;case"BatchedMesh":u=o(e.geometry),d=l(e.material),a=new Yg(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,d),a.geometry=u,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._geometryInfo=e.geometryInfo.map(g=>{let m=null,y=null;return g.boundingBox!==void 0&&(m=new En().fromJSON(g.boundingBox)),g.boundingSphere!==void 0&&(y=new pn().fromJSON(g.boundingSphere)),{...g,boundingBox:m,boundingSphere:y}}),a._instanceInfo=e.instanceInfo,a._availableInstanceIds=e._availableInstanceIds,a._availableGeometryIds=e._availableGeometryIds,a._nextIndexStart=e.nextIndexStart,a._nextVertexStart=e.nextVertexStart,a._geometryCount=e.geometryCount,a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._matricesTexture=c(e.matricesTexture.uuid),a._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(a.boundingSphere=new pn().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(a.boundingBox=new En().fromJSON(e.boundingBox));break;case"LOD":a=new Xg;break;case"Line":a=new bs(o(e.geometry),l(e.material));break;case"LineLoop":a=new Zg(o(e.geometry),l(e.material));break;case"LineSegments":a=new Ni(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new Kg(o(e.geometry),l(e.material));break;case"Sprite":a=new Wg(l(e.material));break;case"Group":a=new Br;break;case"Bone":a=new Dd;break;default:a=new Mt}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.pivot!==void 0&&(a.pivot=new R().fromArray(e.pivot)),e.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.static!==void 0&&(a.static=e.static),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const h=e.children;for(let f=0;f<h.length;f++)a.add(this.parseObject(h[f],t,n,s,r))}if(e.animations!==void 0){const h=e.animations;for(let f=0;f<h.length;f++){const p=h[f];a.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const h=e.levels;for(let f=0;f<h.length;f++){const p=h[f],v=a.getObjectByProperty("uuid",p.object);v!==void 0&&a.addLevel(v,p.distance,p.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const s=t[n.skeleton];s===void 0?xe("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(s,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,s=e.getObjectByProperty("uuid",n);s!==void 0?t.target=s:t.target=new Mt}})}}const VS={UVMapping:Dc,CubeReflectionMapping:Ii,CubeRefractionMapping:_s,EquirectangularReflectionMapping:Ta,EquirectangularRefractionMapping:Aa,CubeUVReflectionMapping:ea},Xp={RepeatWrapping:Ba,ClampToEdgeWrapping:Vn,MirroredRepeatWrapping:za},qp={NearestFilter:jt,NearestMipmapNearestFilter:_d,NearestMipmapLinearFilter:Fr,LinearFilter:zt,LinearMipmapNearestFilter:Ca,LinearMipmapLinearFilter:Ai},ru=new WeakMap;class GS extends Gn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&xe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&xe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ci.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{ru.has(a)===!0?(s&&s(ru.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){Ci.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){s&&s(c),ru.set(l,c),Ci.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ci.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let ol;class jd{static getContext(){return ol===void 0&&(ol=new(window.AudioContext||window.webkitAudioContext)),ol}static setContext(e){ol=e}}class HS extends Gn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new Ki(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0),u=jd.getContext(),d=e+"#decode";r.manager.itemStart(d),u.decodeAudioData(c,function(h){t(h),r.manager.itemEnd(d)}).catch(function(h){o(h),r.manager.itemEnd(d)})}catch(c){o(c)}},n,s);function o(l){s?s(l):Xe(l),r.manager.itemError(e)}}}const $p=new Qe,Yp=new Qe,Us=new Qe;class WS{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new un,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new un,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Us.copy(e.projectionMatrix);const s=t.eyeSep/2,r=s*t.near/t.focus,a=t.near*Math.tan(Js*t.fov*.5)/t.zoom;let o,l;Yp.elements[12]=-s,$p.elements[12]=s,o=-a*t.aspect+r,l=a*t.aspect+r,Us.elements[0]=2*t.near/(l-o),Us.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(Us),o=-a*t.aspect-r,l=a*t.aspect-r,Us.elements[0]=2*t.near/(l-o),Us.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(Us)}this.cameraL.matrix.copy(e.matrixWorld).multiply(Yp),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(e.matrixWorld).multiply($p),this.cameraR.matrixWorldNeedsUpdate=!0}}const Ir=-90,Pr=1;class U0 extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(Ir,Pr,e,t);s.layers=this.layers,this.add(s);const r=new un(Ir,Pr,e,t);r.layers=this.layers,this.add(r);const a=new un(Ir,Pr,e,t);a.layers=this.layers,this.add(a);const o=new un(Ir,Pr,e,t);o.layers=this.layers,this.add(o);const l=new un(Ir,Pr,e,t);l.layers=this.layers,this.add(l);const c=new un(Ir,Pr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class N0 extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class O0{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=XS.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function XS(){this._document.hidden===!1&&this.reset()}const Ns=new R,au=new fn,qS=new R,Os=new R,Fs=new R;class $S extends Mt{constructor(){super(),this.type="AudioListener",this.context=jd.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new O0}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();const t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Ns,au,qS),Os.set(0,0,-1).applyQuaternion(au),Fs.set(0,1,0).applyQuaternion(au),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ns.x,n),t.positionY.linearRampToValueAtTime(Ns.y,n),t.positionZ.linearRampToValueAtTime(Ns.z,n),t.forwardX.linearRampToValueAtTime(Os.x,n),t.forwardY.linearRampToValueAtTime(Os.y,n),t.forwardZ.linearRampToValueAtTime(Os.z,n),t.upX.linearRampToValueAtTime(Fs.x,n),t.upY.linearRampToValueAtTime(Fs.y,n),t.upZ.linearRampToValueAtTime(Fs.z,n)}else t.setPosition(Ns.x,Ns.y,Ns.z),t.setOrientation(Os.x,Os.y,Os.z,Fs.x,Fs.y,Fs.z)}}let F0=class extends Mt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){xe("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){xe("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){xe("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){xe("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){xe("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(xe("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){xe("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(xe("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}};const ks=new R,Zp=new fn,YS=new R,Bs=new R;class ZS extends F0{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ks,Zp,YS),Bs.set(0,0,1).applyQuaternion(Zp);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(ks.x,n),t.positionY.linearRampToValueAtTime(ks.y,n),t.positionZ.linearRampToValueAtTime(ks.z,n),t.orientationX.linearRampToValueAtTime(Bs.x,n),t.orientationY.linearRampToValueAtTime(Bs.y,n),t.orientationZ.linearRampToValueAtTime(Bs.z,n)}else t.setPosition(ks.x,ks.y,ks.z),t.setOrientation(Bs.x,Bs.y,Bs.z)}}class KS{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class k0{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){fn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const a=this._workIndex*r;fn.multiplyQuaternionsFlat(e,a,e,t,e,n),fn.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){const a=1-s;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*s}}}const Qd="\\[\\]\\.:\\/",JS=new RegExp("["+Qd+"]","g"),ef="[^"+Qd+"]",jS="[^"+Qd.replace("\\.","")+"]",QS=/((?:WC+[\/:])*)/.source.replace("WC",ef),eM=/(WCOD+)?/.source.replace("WCOD",jS),tM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ef),nM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ef),iM=new RegExp("^"+QS+eM+tM+nM+"$"),sM=["material","materials","bones","map"];class rM{constructor(e,t,n){const s=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Et{constructor(e,t,n){this.path=t,this.parsedPath=n||Et.parseTrackName(t),this.node=Et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Et.Composite(e,t,n):new Et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(JS,"")}static parseTrackName(e){const t=iM.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);sM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Et.Composite=rM;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class aM{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Yn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,s=arguments.length;n!==s;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,s=this._parsedPaths,r=this._bindings,a=r.length;let o,l=e.length,c=this.nCachedObjects_;for(let u=0,d=arguments.length;u!==d;++u){const h=arguments[u],f=h.uuid;let p=t[f];if(p===void 0){p=l++,t[f]=p,e.push(h);for(let v=0,g=a;v!==g;++v)r[v].push(new Et(h,n[v],s[v]))}else if(p<c){o=e[p];const v=--c,g=e[v];t[g.uuid]=p,e[p]=g,t[f]=v,e[v]=h;for(let m=0,y=a;m!==y;++m){const b=r[m],_=b[v];let w=b[p];b[p]=_,w===void 0&&(w=new Et(h,n[m],s[m])),b[v]=w}}else e[p]!==o&&Xe("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,s=n.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,u=t[c];if(u!==void 0&&u>=r){const d=r++,h=e[d];t[h.uuid]=u,e[u]=h,t[c]=d,e[d]=l;for(let f=0,p=s;f!==p;++f){const v=n[f],g=v[d],m=v[u];v[u]=g,v[d]=m}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,s=n.length;let r=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],u=c.uuid,d=t[u];if(d!==void 0)if(delete t[u],d<r){const h=--r,f=e[h],p=--a,v=e[p];t[f.uuid]=d,e[d]=f,t[v.uuid]=h,e[h]=v,e.pop();for(let g=0,m=s;g!==m;++g){const y=n[g],b=y[h],_=y[p];y[d]=b,y[h]=_,y.pop()}}else{const h=--a,f=e[h];h>0&&(t[f.uuid]=d),e[d]=f,e.pop();for(let p=0,v=s;p!==v;++p){const g=n[p];g[d]=g[h],g.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let s=n[e];const r=this._bindings;if(s!==void 0)return r[s];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,d=new Array(c);s=r.length,n[e]=s,a.push(e),o.push(t),r.push(d);for(let h=u,f=l.length;h!==f;++h){const p=l[h];d[h]=new Et(p,e,t)}return d}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const s=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),s[n]=s[o],s.pop()}}}class B0{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Xs,endingEnd:Xs};for(let c=0;c!==a;++c){const u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Ag,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Ed:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case Bc:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(a),c[u].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const a=n===Cg;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===Tg){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){const o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=qs,s.endingEnd=qs):(e?s.endingStart=this.zeroSlopeAtStart?qs:Xs:s.endingStart=Wa,t?s.endingEnd=this.zeroSlopeAtEnd?qs:Xs:s.endingEnd=Wa)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const oM=new Float32Array(1);class lM extends yi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let d=0;d!==r;++d){const h=s[d],f=h.name;let p=u[f];if(p!==void 0)++p.referenceCount,a[d]=p;else{if(p=a[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const v=t&&t._propertyBindings[d].binding.parsedPath;p=new k0(Et.create(n,f,v),h.ValueTypeName,h.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[d]=p}o[d].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,h=(e._localRoot||this._root).uuid;delete d[h],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new qd(new Float32Array(2),new Float32Array(2),1,oM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let a=typeof e=="string"?eo.findByName(s,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Bc),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new B0(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?eo.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class cM extends Ad{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isRenderTarget3D=!0,this.depth=n,this.texture=new Hc(null,e,t,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}}class tf{constructor(e){this.value=e}clone(){return new tf(this.value.clone===void 0?this.value:this.value.clone())}}let hM=0;class uM extends yi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:hM++}),this.name="",this.usage=$a,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,s=t.length;n<s;n++){const r=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class dM extends $c{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class fM{constructor(e,t,n,s,r,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=s,this.count=r,this.normalized=a,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Kp=new Qe;class pM{constructor(e,t,n=0,s=1/0){this.ray=new ar(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Wc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kp),this}intersectObject(e,t=!0,n=[]){return Bu(e,this,n,t),n.sort(Jp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Bu(e[s],this,n,t);return n.sort(Jp),n}}function Jp(i,e){return i.distance-e.distance}function Bu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Bu(r[a],e,t,!0)}}class mM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,xe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class zu{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=nt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class gM{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const vf=class vf{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};vf.prototype.isMatrix2=!0;let Vu=vf;const jp=new ie;class z0{constructor(e=new ie(1/0,1/0),t=new ie(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jp.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jp).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qp=new R,ll=new R,Dr=new R,Lr=new R,ou=new R,vM=new R,_M=new R;class yM{constructor(e=new R,t=new R){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Qp.subVectors(e,this.start),ll.subVectors(this.end,this.start);const n=ll.dot(ll);if(n===0)return 0;let r=ll.dot(Qp)/n;return t&&(r=nt(r,0,1)),r}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=vM,n=_M){const s=10000000000000001e-32;let r,a;const o=this.start,l=e.start,c=this.end,u=e.end;Dr.subVectors(c,o),Lr.subVectors(u,l),ou.subVectors(o,l);const d=Dr.dot(Dr),h=Lr.dot(Lr),f=Lr.dot(ou);if(d<=s&&h<=s)return t.copy(o),n.copy(l),t.sub(n),t.dot(t);if(d<=s)r=0,a=f/h,a=nt(a,0,1);else{const p=Dr.dot(ou);if(h<=s)a=0,r=nt(-p/d,0,1);else{const v=Dr.dot(Lr),g=d*h-v*v;g!==0?r=nt((v*f-p*h)/g,0,1):r=0,a=(v*r+f)/h,a<0?(a=0,r=nt(-p/d,0,1)):a>1&&(a=1,r=nt((v-p)/d,0,1))}}return t.copy(o).addScaledVector(Dr,r),n.copy(l).addScaledVector(Lr,a),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const em=new R;class xM extends Mt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new ot,s=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,u=o/l*Math.PI*2;s.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new Fe(s,3));const r=new Un({fog:!1,toneMapped:!1});this.cone=new Ni(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),em.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(em),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const cs=new R,cl=new Qe,lu=new Qe;class bM extends Ni{constructor(e){const t=V0(e),n=new ot,s=[],r=[];for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(s.push(0,0,0),s.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new Fe(s,3)),n.setAttribute("color",new Fe(r,3));const a=new Un({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const o=new Oe(255),l=new Oe(65280);this.setColors(o,l)}updateMatrixWorld(e){const t=this.bones,n=this.geometry,s=n.getAttribute("position");lu.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(cl.multiplyMatrices(lu,o.matrixWorld),cs.setFromMatrixPosition(cl),s.setXYZ(a,cs.x,cs.y,cs.z),cl.multiplyMatrices(lu,o.parent.matrixWorld),cs.setFromMatrixPosition(cl),s.setXYZ(a+1,cs.x,cs.y,cs.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const s=this.geometry.getAttribute("color");for(let r=0;r<s.count;r+=2)s.setXYZ(r,e.r,e.g,e.b),s.setXYZ(r+1,t.r,t.g,t.b);return s.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function V0(i){const e=[];i.isBone===!0&&e.push(i);for(let t=0;t<i.children.length;t++)e.push(...V0(i.children[t]));return e}class SM extends Qt{constructor(e,t,n){const s=new bo(t,4,2),r=new Qi({wireframe:!0,fog:!1,toneMapped:!1});super(s,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const MM=new R,tm=new Oe,nm=new Oe;class wM extends Mt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const s=new xo(t);s.rotateY(Math.PI*.5),this.material=new Qi({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=s.getAttribute("position"),a=new Float32Array(r.count*3);s.setAttribute("color",new Ut(a,3)),this.add(new Qt(s,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");tm.copy(this.light.color),nm.copy(this.light.groundColor);for(let n=0,s=t.count;n<s;n++){const r=n<s/2?tm:nm;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),e.lookAt(MM.setFromMatrixPosition(this.light.matrixWorld).negate())}}class EM extends Ni{constructor(e=10,t=10,n=4473924,s=8947848){n=new Oe(n),s=new Oe(s);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let h=0,f=0,p=-o;h<=t;h++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const v=h===r?n:s;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const u=new ot;u.setAttribute("position",new Fe(l,3)),u.setAttribute("color",new Fe(c,3));const d=new Un({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class TM extends Ni{constructor(e=10,t=16,n=8,s=64,r=4473924,a=8947848){r=new Oe(r),a=new Oe(a);const o=[],l=[];if(t>1)for(let d=0;d<t;d++){const h=d/t*(Math.PI*2),f=Math.sin(h)*e,p=Math.cos(h)*e;o.push(0,0,0),o.push(f,0,p);const v=d&1?r:a;l.push(v.r,v.g,v.b),l.push(v.r,v.g,v.b)}for(let d=0;d<n;d++){const h=d&1?r:a,f=e-e/n*d;for(let p=0;p<s;p++){let v=p/s*(Math.PI*2),g=Math.sin(v)*f,m=Math.cos(v)*f;o.push(g,0,m),l.push(h.r,h.g,h.b),v=(p+1)/s*(Math.PI*2),g=Math.sin(v)*f,m=Math.cos(v)*f,o.push(g,0,m),l.push(h.r,h.g,h.b)}}const c=new ot;c.setAttribute("position",new Fe(o,3)),c.setAttribute("color",new Fe(l,3));const u=new Un({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const im=new R,hl=new R,sm=new R;class AM extends Mt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let s=new ot;s.setAttribute("position",new Fe([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new Un({fog:!1,toneMapped:!1});this.lightPlane=new bs(s,r),this.add(this.lightPlane),s=new ot,s.setAttribute("position",new Fe([0,0,0,0,0,1],3)),this.targetLine=new bs(s,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),im.setFromMatrixPosition(this.light.matrixWorld),hl.setFromMatrixPosition(this.light.target.matrixWorld),sm.subVectors(hl,im),this.lightPlane.lookAt(hl),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(hl),this.targetLine.scale.z=sm.length()}}const ul=new R,$t=new dh;class CM extends Ni{constructor(e){const t=new ot,n=new Un({color:16777215,vertexColors:!0,toneMapped:!1}),s=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,v){l(p),l(v)}function l(p){s.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(s.length/3-1)}t.setAttribute("position",new Fe(s,3)),t.setAttribute("color",new Fe(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new Oe(16755200),u=new Oe(16711680),d=new Oe(43775),h=new Oe(16777215),f=new Oe(3355443);this.setColors(c,u,d,h,f)}setColors(e,t,n,s,r){const o=this.geometry.getAttribute("color");return o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,s.r,s.g,s.b),o.setXYZ(39,s.r,s.g,s.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,n=1,s=1;let r,a;if($t.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,a=0;else if(this.camera.coordinateSystem===qn)r=-1,a=1;else if(this.camera.coordinateSystem===er)r=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Jt("c",t,e,$t,0,0,r),Jt("t",t,e,$t,0,0,a),Jt("n1",t,e,$t,-n,-s,r),Jt("n2",t,e,$t,n,-s,r),Jt("n3",t,e,$t,-n,s,r),Jt("n4",t,e,$t,n,s,r),Jt("f1",t,e,$t,-n,-s,a),Jt("f2",t,e,$t,n,-s,a),Jt("f3",t,e,$t,-n,s,a),Jt("f4",t,e,$t,n,s,a),Jt("u1",t,e,$t,n*.7,s*1.1,r),Jt("u2",t,e,$t,-n*.7,s*1.1,r),Jt("u3",t,e,$t,0,s*2,r),Jt("cf1",t,e,$t,-n,0,a),Jt("cf2",t,e,$t,n,0,a),Jt("cf3",t,e,$t,0,-s,a),Jt("cf4",t,e,$t,0,s,a),Jt("cn1",t,e,$t,-n,0,r),Jt("cn2",t,e,$t,n,0,r),Jt("cn3",t,e,$t,0,-s,r),Jt("cn4",t,e,$t,0,s,r),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Jt(i,e,t,n,s,r,a){ul.set(s,r,a).unproject(n);const o=e[i];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,u=o.length;c<u;c++)l.setXYZ(o[c],ul.x,ul.y,ul.z)}}const dl=new En;class RM extends Ni{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new ot;r.setIndex(new Ut(n,1)),r.setAttribute("position",new Ut(s,3)),super(r,new Un({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&dl.setFromObject(this.object),dl.isEmpty())return;const e=dl.min,t=dl.max,n=this.geometry.attributes.position,s=n.array;s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=e.x,s[4]=t.y,s[5]=t.z,s[6]=e.x,s[7]=e.y,s[8]=t.z,s[9]=t.x,s[10]=e.y,s[11]=t.z,s[12]=t.x,s[13]=t.y,s[14]=e.z,s[15]=e.x,s[16]=t.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=t.x,s[22]=e.y,s[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class IM extends Ni{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new ot;r.setIndex(new Ut(n,1)),r.setAttribute("position",new Fe(s,3)),super(r,new Un({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class PM extends bs{constructor(e,t=1,n=16776960){const s=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new ot;a.setAttribute("position",new Fe(r,3)),a.computeBoundingSphere(),super(a,new Un({color:s,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new ot;l.setAttribute("position",new Fe(o,3)),l.computeBoundingSphere(),this.add(new Qt(l,new Qi({color:s,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const rm=new R;let fl,cu;class DM extends Mt{constructor(e=new R(0,0,1),t=new R(0,0,0),n=1,s=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",fl===void 0&&(fl=new ot,fl.setAttribute("position",new Fe([0,0,0,0,1,0],3)),cu=new _o(.5,1,5,1),cu.translate(0,-.5,0)),this.position.copy(t),this.line=new bs(fl,new Un({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Qt(cu,new Qi({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{rm.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(rm,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class LM extends Ni{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new ot;s.setAttribute("position",new Fe(t,3)),s.setAttribute("color",new Fe(n,3));const r=new Un({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){const s=new Oe,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class UM{constructor(){this.type="ShapePath",this.color=new Oe,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new Ka,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,a){return this.currentPath.bezierCurveTo(e,t,n,s,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let u=!1;const d=c.length;for(let h=0,f=d-1;h<d;f=h++){const p=c[h],v=c[f];p.y>l.y!=v.y>l.y&&l.x<(v.x-p.x)*(l.y-p.y)/(v.y-p.y)+p.x&&(u=!u)}return u}function t(l,c){const u=c.getCenter(new ie);if(e(u,l))return u;const d=u.y,h=[],f=l.length;for(let p=0;p<f;p++){const v=l[p],g=l[(p+1)%f];if(v.y>d!=g.y>d){const m=v.x+(d-v.y)*(g.x-v.x)/(g.y-v.y);h.push(m)}}return h.length>1&&(h.sort((p,v)=>p-v),u.x=(h[0]+h[1])/2),u}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(xe('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");const s=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(const l of this.subPaths){const c=l.getPoints();if(c.length<3)continue;const u=pi.area(c);if(u===0)continue;const d=new z0;for(let h=0;h<c.length;h++)d.expandByPoint(c[h]);r.push({subPath:l,points:c,boundingBox:d,interiorPoint:t(c,d),absArea:Math.abs(u),winding:u<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){const c=r[l];let u=0;for(let d=l-1;d>=0;d--){const h=r[d];if(h.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,h.points)){c.container=h.exclude?h.container:h,u=h.winding,c.winding+=u;break}}s(c.winding)===s(u)&&(c.exclude=!0)}for(const l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");const a=[],o=new Map;for(const l of r){if(l.exclude||l.role!=="outer")continue;const c=new yo;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(const l of r){if(l.exclude||l.role!=="hole")continue;const c=o.get(l.container);if(!c)continue;const u=new Ka;u.curves=l.subPath.curves,c.holes.push(u)}return a}}class G0 extends yi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){xe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function NM(i,e){const t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2):(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0),i}function OM(i,e){const t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0):(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2),i}function FM(i){return i.repeat.x=1,i.repeat.y=1,i.offset.x=0,i.offset.y=0,i}function Gu(i,e,t,n){const s=kM(n);switch(t){case Md:return i*e;case Oc:return i*e/s.components*s.byteLength;case mo:return i*e/s.components*s.byteLength;case ys:return i*e*2/s.components*s.byteLength;case Fc:return i*e*2/s.components*s.byteLength;case wd:return i*e*3/s.components*s.byteLength;case Dn:return i*e*4/s.components*s.byteLength;case kc:return i*e*4/s.components*s.byteLength;case Ra:case Ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pa:case Da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kl:case zl:return Math.max(i,16)*Math.max(e,8)/4;case Fl:case Bl:return Math.max(i,8)*Math.max(e,8)/2;case Vl:case Gl:case Wl:case Xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hl:case Va:case ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ec:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case tc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case nc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ic:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case sc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ac:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case oc:case lc:case cc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case hc:case uc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ga:case dc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kM(i){switch(i){case Bn:case yd:return{byteLength:1,components:1};case qr:case xd:case Pi:return{byteLength:2,components:1};case Uc:case Nc:return{byteLength:2,components:4};case ri:case Lc:case Pn:return{byteLength:4,components:1};case bd:case Sd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}class BM{static contain(e,t){return NM(e,t)}static cover(e,t){return OM(e,t)}static fill(e){return FM(e)}static getByteLength(e,t,n,s){return Gu(e,t,n,s)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ic}}));typeof window<"u"&&(window.__THREE__?xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ic);function H0(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function zM(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){const p=d[h],v=d[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){const v=d[f];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var VM=`#ifdef USE_ALPHAHASH
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
#endif`,Ew=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tw=`#ifdef USE_FOG
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
#endif`,E1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,T1=`float getShadowMask() {
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
}`,eE=`uniform vec3 diffuse;
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
}`,tE=`#include <common>
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
}`,nE=`uniform vec3 diffuse;
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
}`,iE=`#define LAMBERT
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
}`,sE=`#define LAMBERT
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
}`,rE=`#define MATCAP
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
}`,aE=`#define MATCAP
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
}`,oE=`#define NORMAL
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
}`,lE=`#define NORMAL
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
}`,cE=`#define PHONG
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
}`,hE=`#define PHONG
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
}`,uE=`#define STANDARD
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
}`,dE=`#define STANDARD
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
}`,fE=`#define TOON
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
}`,pE=`#define TOON
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
}`,mE=`uniform float size;
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
}`,gE=`uniform vec3 diffuse;
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
}`,vE=`#include <common>
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
}`,_E=`uniform vec3 color;
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
}`,yE=`uniform float rotation;
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
}`,xE=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:VM,alphahash_pars_fragment:GM,alphamap_fragment:HM,alphamap_pars_fragment:WM,alphatest_fragment:XM,alphatest_pars_fragment:qM,aomap_fragment:$M,aomap_pars_fragment:YM,batching_pars_vertex:ZM,batching_vertex:KM,begin_vertex:JM,beginnormal_vertex:jM,bsdfs:QM,iridescence_fragment:ew,bumpmap_pars_fragment:tw,clipping_planes_fragment:nw,clipping_planes_pars_fragment:iw,clipping_planes_pars_vertex:sw,clipping_planes_vertex:rw,color_fragment:aw,color_pars_fragment:ow,color_pars_vertex:lw,color_vertex:cw,common:hw,cube_uv_reflection_fragment:uw,defaultnormal_vertex:dw,displacementmap_pars_vertex:fw,displacementmap_vertex:pw,emissivemap_fragment:mw,emissivemap_pars_fragment:gw,colorspace_fragment:vw,colorspace_pars_fragment:_w,envmap_fragment:yw,envmap_common_pars_fragment:xw,envmap_pars_fragment:bw,envmap_pars_vertex:Sw,envmap_physical_pars_fragment:Lw,envmap_vertex:Mw,fog_vertex:ww,fog_pars_vertex:Ew,fog_fragment:Tw,fog_pars_fragment:Aw,gradientmap_pars_fragment:Cw,lightmap_pars_fragment:Rw,lights_lambert_fragment:Iw,lights_lambert_pars_fragment:Pw,lights_pars_begin:Dw,lights_toon_fragment:Uw,lights_toon_pars_fragment:Nw,lights_phong_fragment:Ow,lights_phong_pars_fragment:Fw,lights_physical_fragment:kw,lights_physical_pars_fragment:Bw,lights_fragment_begin:zw,lights_fragment_maps:Vw,lights_fragment_end:Gw,lightprobes_pars_fragment:Hw,logdepthbuf_fragment:Ww,logdepthbuf_pars_fragment:Xw,logdepthbuf_pars_vertex:qw,logdepthbuf_vertex:$w,map_fragment:Yw,map_pars_fragment:Zw,map_particle_fragment:Kw,map_particle_pars_fragment:Jw,metalnessmap_fragment:jw,metalnessmap_pars_fragment:Qw,morphinstance_vertex:e1,morphcolor_vertex:t1,morphnormal_vertex:n1,morphtarget_pars_vertex:i1,morphtarget_vertex:s1,normal_fragment_begin:r1,normal_fragment_maps:a1,normal_pars_fragment:o1,normal_pars_vertex:l1,normal_vertex:c1,normalmap_pars_fragment:h1,clearcoat_normal_fragment_begin:u1,clearcoat_normal_fragment_maps:d1,clearcoat_pars_fragment:f1,iridescence_pars_fragment:p1,opaque_fragment:m1,packing:g1,premultiplied_alpha_fragment:v1,project_vertex:_1,dithering_fragment:y1,dithering_pars_fragment:x1,roughnessmap_fragment:b1,roughnessmap_pars_fragment:S1,shadowmap_pars_fragment:M1,shadowmap_pars_vertex:w1,shadowmap_vertex:E1,shadowmask_pars_fragment:T1,skinbase_vertex:A1,skinning_pars_vertex:C1,skinning_vertex:R1,skinnormal_vertex:I1,specularmap_fragment:P1,specularmap_pars_fragment:D1,tonemapping_fragment:L1,tonemapping_pars_fragment:U1,transmission_fragment:N1,transmission_pars_fragment:O1,uv_pars_fragment:F1,uv_pars_vertex:k1,uv_vertex:B1,worldpos_vertex:z1,background_vert:V1,background_frag:G1,backgroundCube_vert:H1,backgroundCube_frag:W1,cube_vert:X1,cube_frag:q1,depth_vert:$1,depth_frag:Y1,distance_vert:Z1,distance_frag:K1,equirect_vert:J1,equirect_frag:j1,linedashed_vert:Q1,linedashed_frag:eE,meshbasic_vert:tE,meshbasic_frag:nE,meshlambert_vert:iE,meshlambert_frag:sE,meshmatcap_vert:rE,meshmatcap_frag:aE,meshnormal_vert:oE,meshnormal_frag:lE,meshphong_vert:cE,meshphong_frag:hE,meshphysical_vert:uE,meshphysical_frag:dE,meshtoon_vert:fE,meshtoon_frag:pE,points_vert:mE,points_frag:gE,shadow_vert:vE,shadow_frag:_E,sprite_vert:yE,sprite_frag:xE},be={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},ei={basic:{uniforms:An([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:An([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:An([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:An([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:An([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Oe(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:An([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:An([be.points,be.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:An([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:An([be.common,be.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:An([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:An([be.sprite,be.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:An([be.common,be.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:An([be.lights,be.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ei.physical={uniforms:An([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const pl={r:0,b:0,g:0},bE=new Qe,W0=new rt;W0.set(-1,0,0,0,1,0,0,0,1);function SE(i,e,t,n,s,r){const a=new Oe(0);let o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){const _=y.backgroundBlurriness>0;b=e.get(b,_)}return b}function p(y){let b=!1;const _=f(y);_===null?g(a,o):_&&_.isColor&&(g(_,1),b=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(y,b){const _=f(b);_&&(_.isCubeTexture||_.mapping===ea)?(c===void 0&&(c=new Qt(new Ms(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:Jr(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bE.makeRotationFromEuler(b.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(W0),c.material.toneMapped=mt.getTransfer(_.colorSpace)!==Rt,(u!==_||d!==_.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Qt(new ta(2,2),new ai({name:"BackgroundMaterial",uniforms:Jr(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=mt.getTransfer(_.colorSpace)!==Rt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,b){y.getRGB(pl,u0(i)),t.buffers.color.setClear(pl.r,pl.g,pl.b,b,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,b=1){a.set(y),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:p,addToRenderList:v,dispose:m}}function ME(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(D,k,L,B,O){let U=!1;const N=d(D,B,L,k);r!==N&&(r=N,c(r.object)),U=f(D,B,L,O),U&&p(D,B,L,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,_(D,k,L,B),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function d(D,k,L,B){const O=B.wireframe===!0;let U=n[k.id];U===void 0&&(U={},n[k.id]=U);const N=D.isInstancedMesh===!0?D.id:0;let F=U[N];F===void 0&&(F={},U[N]=F);let H=F[L.id];H===void 0&&(H={},F[L.id]=H);let ee=H[O];return ee===void 0&&(ee=h(l()),H[O]=ee),ee}function h(D){const k=[],L=[],B=[];for(let O=0;O<t;O++)k[O]=0,L[O]=0,B[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:L,attributeDivisors:B,object:D,attributes:{},index:null}}function f(D,k,L,B){const O=r.attributes,U=k.attributes;let N=0;const F=L.getAttributes();for(const H in F)if(F[H].location>=0){const K=O[H];let te=U[H];if(te===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(te=D.instanceColor)),K===void 0||K.attribute!==te||te&&K.data!==te.data)return!0;N++}return r.attributesNum!==N||r.index!==B}function p(D,k,L,B){const O={},U=k.attributes;let N=0;const F=L.getAttributes();for(const H in F)if(F[H].location>=0){let K=U[H];K===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(K=D.instanceColor));const te={};te.attribute=K,K&&K.data&&(te.data=K.data),O[H]=te,N++}r.attributes=O,r.attributesNum=N,r.index=B}function v(){const D=r.newAttributes;for(let k=0,L=D.length;k<L;k++)D[k]=0}function g(D){m(D,0)}function m(D,k){const L=r.newAttributes,B=r.enabledAttributes,O=r.attributeDivisors;L[D]=1,B[D]===0&&(i.enableVertexAttribArray(D),B[D]=1),O[D]!==k&&(i.vertexAttribDivisor(D,k),O[D]=k)}function y(){const D=r.newAttributes,k=r.enabledAttributes;for(let L=0,B=k.length;L<B;L++)k[L]!==D[L]&&(i.disableVertexAttribArray(L),k[L]=0)}function b(D,k,L,B,O,U,N){N===!0?i.vertexAttribIPointer(D,k,L,O,U):i.vertexAttribPointer(D,k,L,B,O,U)}function _(D,k,L,B){v();const O=B.attributes,U=L.getAttributes(),N=k.defaultAttributeValues;for(const F in U){const H=U[F];if(H.location>=0){let ee=O[F];if(ee===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),ee!==void 0){const K=ee.normalized,te=ee.itemSize,Ce=e.get(ee);if(Ce===void 0)continue;const ct=Ce.buffer,it=Ce.type,X=Ce.bytesPerElement,ce=it===i.INT||it===i.UNSIGNED_INT||ee.gpuType===Lc;if(ee.isInterleavedBufferAttribute){const J=ee.data,pe=J.stride,Ne=ee.offset;if(J.isInstancedInterleavedBuffer){for(let le=0;le<H.locationSize;le++)m(H.location+le,J.meshPerAttribute);D.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let le=0;le<H.locationSize;le++)g(H.location+le);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let le=0;le<H.locationSize;le++)b(H.location+le,te/H.locationSize,it,K,pe*X,(Ne+te/H.locationSize*le)*X,ce)}else{if(ee.isInstancedBufferAttribute){for(let J=0;J<H.locationSize;J++)m(H.location+J,ee.meshPerAttribute);D.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let J=0;J<H.locationSize;J++)g(H.location+J);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let J=0;J<H.locationSize;J++)b(H.location+J,te/H.locationSize,it,K,te*X,te/H.locationSize*J*X,ce)}}else if(N!==void 0){const K=N[F];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(H.location,K);break;case 3:i.vertexAttrib3fv(H.location,K);break;case 4:i.vertexAttrib4fv(H.location,K);break;default:i.vertexAttrib1fv(H.location,K)}}}}y()}function w(){E();for(const D in n){const k=n[D];for(const L in k){const B=k[L];for(const O in B){const U=B[O];for(const N in U)u(U[N].object),delete U[N];delete B[O]}}delete n[D]}}function M(D){if(n[D.id]===void 0)return;const k=n[D.id];for(const L in k){const B=k[L];for(const O in B){const U=B[O];for(const N in U)u(U[N].object),delete U[N];delete B[O]}}delete n[D.id]}function A(D){for(const k in n){const L=n[k];for(const B in L){const O=L[B];if(O[D.id]===void 0)continue;const U=O[D.id];for(const N in U)u(U[N].object),delete U[N];delete O[D.id]}}}function x(D){for(const k in n){const L=n[k],B=D.isInstancedMesh===!0?D.id:0,O=L[B];if(O!==void 0){for(const U in O){const N=O[U];for(const F in N)u(N[F].object),delete N[F];delete O[U]}delete L[B],Object.keys(L).length===0&&delete n[k]}}}function E(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function wE(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function EE(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Dn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const x=A===Pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Bn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Pn&&!x)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(xe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:_,maxSamples:w,samples:M}}function TE(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Hi,o=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const p=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{const y=r?0:n,b=y*4;let _=m.clippingState||null;l.value=_,_=u(p,h,b,f);for(let w=0;w!==b;++w)_[w]=t[w];m.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,p){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=l.value,p!==!0||g===null){const m=f+v*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,_=f;b!==v;++b,_+=4)a.copy(d[b]).applyMatrix4(y,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}const ms=4,am=[.125,.215,.35,.446,.526,.582],Hs=20,AE=256,_a=new ia,om=new Oe;let hu=null,uu=0,du=0,fu=!1;const CE=new R;class Hu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=CE}=r;hu=this._renderer.getRenderTarget(),uu=this._renderer.getActiveCubeFace(),du=this._renderer.getActiveMipmapLevel(),fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hu,uu,du),this._renderer.xr.enabled=fu,e.scissorTest=!1,Ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hu=this._renderer.getRenderTarget(),uu=this._renderer.getActiveCubeFace(),du=this._renderer.getActiveMipmapLevel(),fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Pi,format:Dn,colorSpace:Xa,depthBuffer:!1},s=lm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lm(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=RE(r)),this._blurMaterial=PE(r,e,t),this._ggxMaterial=IE(r,e,t)}return s}_compileMaterial(e){const t=new Qt(new ot,e);this._renderer.compile(t,_a)}_sceneToCubeUV(e,t,n,s,r){const l=new un(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(om),d.toneMapping=gi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qt(new Ms,new Qi({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let m=!1;const y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,m=!0):(g.color.copy(om),m=!0);for(let b=0;b<6;b++){const _=b%3;_===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):_===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const w=this._cubeSize;Ur(s,_*w,b>2?w:0,w,w),d.setRenderTarget(s),m&&d.render(v,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ii||e.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cm());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ur(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,_a)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:p}=this,v=this._sizeLods[n],g=3*v*(n>p-ms?n-p+ms:0),m=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Ur(r,g,m,3*v,2*v),s.setRenderTarget(r),s.render(o,_a),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Ur(e,g,m,3*v,2*v),s.setRenderTarget(e),s.render(o,_a)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Xe("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=c;const h=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Hs-1),v=r/p,g=isFinite(r)?1+Math.floor(u*v):Hs;g>Hs&&xe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Hs}`);const m=[];let y=0;for(let A=0;A<Hs;++A){const x=A/v,E=Math.exp(-x*x/2);m.push(E),A===0?y+=E:A<g&&(y+=2*E)}for(let A=0;A<m.length;A++)m[A]=m[A]/y;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=p,h.mipInt.value=b-n;const _=this._sizeLods[s],w=3*_*(s>b-ms?s-b+ms:0),M=4*(this._cubeSize-_);Ur(t,w,M,3*_,2*_),l.setRenderTarget(t),l.render(d,_a)}}function RE(i){const e=[],t=[],n=[];let s=i;const r=i-ms+1+am.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ms?l=am[a-i+ms-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,p=6,v=3,g=2,m=1,y=new Float32Array(v*p*f),b=new Float32Array(g*p*f),_=new Float32Array(m*p*f);for(let M=0;M<f;M++){const A=M%3*2/3-1,x=M>2?0:-1,E=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];y.set(E,v*p*M),b.set(h,g*p*M);const C=[M,M,M,M,M,M];_.set(C,m*p*M)}const w=new ot;w.setAttribute("position",new Ut(y,v)),w.setAttribute("uv",new Ut(b,g)),w.setAttribute("faceIndex",new Ut(_,m)),n.push(new Qt(w,null)),s>ms&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function lm(i,e,t){const n=new Zn(i,e,t);return n.texture.mapping=ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ur(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function IE(i,e,t){return new ai({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:AE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ph(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function PE(i,e,t){const n=new Float32Array(Hs),s=new R(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ph(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function cm(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ph(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function hm(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function ph(){return`

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
	`}class nf extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new go(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ms(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:Jr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ln,blending:Ri});r.uniforms.tEquirect.value=t;const a=new Qt(s,r),o=t.minFilter;return t.minFilter===Ai&&(t.minFilter=zt),new U0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function DE(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===Ta||f===Aa)if(e.has(h)){const p=e.get(h).texture;return o(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const v=new nf(p.height);return v.fromEquirectangularTexture(i,h),e.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,p=f===Ta||f===Aa,v=f===Ii||f===_s;if(p||v){let g=t.get(h);const m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new Hu(i)),g=p?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return p&&y&&y.height>0||v&&y&&l(y)?(n===null&&(n=new Hu(i)),g=p?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,f){return f===Ta?h.mapping=Ii:f===Aa&&(h.mapping=_s),h}function l(h){let f=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&f++;return f===p}function c(h){const f=h.target;f.removeEventListener("dispose",c);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function LE(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&gs("WebGLRenderer: "+n+" extension not supported."),s}}}function UE(i,e,t,n){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",a),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,p=d.attributes.position;let v=0;if(p===void 0)return;if(f!==null){const y=f.array;v=f.version;for(let b=0,_=y.length;b<_;b+=3){const w=y[b+0],M=y[b+1],A=y[b+2];h.push(w,M,M,A,A,w)}}else{const y=p.array;v=p.version;for(let b=0,_=y.length/3-1;b<_;b+=3){const w=b+0,M=b+1,A=b+2;h.push(w,M,M,A,A,w)}}const g=new(p.count>=65535?Id:Rd)(h,1);g.version=v;const m=r.get(d);m&&e.remove(m),r.set(d,g)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function NE(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),t.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*a,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let v=0;for(let g=0;g<f;g++)v+=h[g];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function OE(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function FE(i,e,t){const n=new WeakMap,s=new Pt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let E=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let b=0;f===!0&&(b=1),p===!0&&(b=2),v===!0&&(b=3);let _=o.attributes.position.count*b,w=1;_>e.maxTextureSize&&(w=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const M=new Float32Array(_*w*4*d),A=new Gc(M,_,w,d);A.type=Pn,A.needsUpdate=!0;const x=b*4;for(let C=0;C<d;C++){const D=g[C],k=m[C],L=y[C],B=_*w*4*C;for(let O=0;O<D.count;O++){const U=O*x;f===!0&&(s.fromBufferAttribute(D,O),M[B+U+0]=s.x,M[B+U+1]=s.y,M[B+U+2]=s.z,M[B+U+3]=0),p===!0&&(s.fromBufferAttribute(k,O),M[B+U+4]=s.x,M[B+U+5]=s.y,M[B+U+6]=s.z,M[B+U+7]=0),v===!0&&(s.fromBufferAttribute(L,O),M[B+U+8]=s.x,M[B+U+9]=s.y,M[B+U+10]=s.z,M[B+U+11]=L.itemSize===4?s.w:1)}}h={count:d,texture:A,size:new ie(_,w)},n.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function kE(i,e,t,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const BE={[dd]:"LINEAR_TONE_MAPPING",[fd]:"REINHARD_TONE_MAPPING",[pd]:"CINEON_TONE_MAPPING",[md]:"ACES_FILMIC_TONE_MAPPING",[Pc]:"AGX_TONE_MAPPING",[vd]:"NEUTRAL_TONE_MAPPING",[gd]:"CUSTOM_TONE_MAPPING"};function zE(i,e,t,n,s,r){const a=new Zn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new ir(e,t):void 0}),o=new Zn(e,t,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),l=new ot;l.setAttribute("position",new Fe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Fe([0,2,0,0,2,0],2));const c=new Gd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Qt(l,c),d=new ia(-1,1,1,-1,0,1);let h=null,f=null,p=!1,v,g=null,m=[],y=!1;this.setSize=function(b,_){a.setSize(b,_),o.setSize(b,_);for(let w=0;w<m.length;w++){const M=m[w];M.setSize&&M.setSize(b,_)}},this.setEffects=function(b){m=b,y=m.length>0&&m[0].isRenderPass===!0;const _=a.width,w=a.height;for(let M=0;M<m.length;M++){const A=m[M];A.setSize&&A.setSize(_,w)}},this.begin=function(b,_){if(p||b.toneMapping===gi&&m.length===0)return!1;if(g=_,_!==null){const w=_.width,M=_.height;(a.width!==w||a.height!==M)&&this.setSize(w,M)}return y===!1&&b.setRenderTarget(a),v=b.toneMapping,b.toneMapping=gi,!0},this.hasRenderPass=function(){return y},this.end=function(b,_){b.toneMapping=v,p=!0;let w=a,M=o;for(let A=0;A<m.length;A++){const x=m[A];if(x.enabled!==!1&&(x.render(b,M,w,_),x.needsSwap!==!1)){const E=w;w=M,M=E}}if(h!==b.outputColorSpace||f!==b.toneMapping){h=b.outputColorSpace,f=b.toneMapping,c.defines={},mt.getTransfer(h)===Rt&&(c.defines.SRGB_TRANSFER="");const A=BE[f];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,b.setRenderTarget(g),b.render(u,d),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const X0=new Wt,Wu=new ir(1,1),q0=new Gc,$0=new Hc,Y0=new go,um=[],dm=[],fm=new Float32Array(16),pm=new Float32Array(9),mm=new Float32Array(4);function sa(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=um[s];if(r===void 0&&(r=new Float32Array(s),um[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function rn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function an(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function mh(i,e){let t=dm[e];t===void 0&&(t=new Int32Array(e),dm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function VE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function GE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2fv(this.addr,e),an(t,e)}}function HE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;i.uniform3fv(this.addr,e),an(t,e)}}function WE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4fv(this.addr,e),an(t,e)}}function XE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(rn(t,n))return;mm.set(n),i.uniformMatrix2fv(this.addr,!1,mm),an(t,n)}}function qE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(rn(t,n))return;pm.set(n),i.uniformMatrix3fv(this.addr,!1,pm),an(t,n)}}function $E(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(rn(t,n))return;fm.set(n),i.uniformMatrix4fv(this.addr,!1,fm),an(t,n)}}function YE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ZE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2iv(this.addr,e),an(t,e)}}function KE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3iv(this.addr,e),an(t,e)}}function JE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4iv(this.addr,e),an(t,e)}}function jE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function QE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2uiv(this.addr,e),an(t,e)}}function eT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3uiv(this.addr,e),an(t,e)}}function tT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4uiv(this.addr,e),an(t,e)}}function nT(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Wu.compareFunction=t.isReversedDepthBuffer()?Vc:zc,r=Wu):r=X0,t.setTexture2D(e||r,s)}function iT(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||$0,s)}function sT(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Y0,s)}function rT(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||q0,s)}function aT(i){switch(i){case 5126:return VE;case 35664:return GE;case 35665:return HE;case 35666:return WE;case 35674:return XE;case 35675:return qE;case 35676:return $E;case 5124:case 35670:return YE;case 35667:case 35671:return ZE;case 35668:case 35672:return KE;case 35669:case 35673:return JE;case 5125:return jE;case 36294:return QE;case 36295:return eT;case 36296:return tT;case 35678:case 36198:case 36298:case 36306:case 35682:return nT;case 35679:case 36299:case 36307:return iT;case 35680:case 36300:case 36308:case 36293:return sT;case 36289:case 36303:case 36311:case 36292:return rT}}function oT(i,e){i.uniform1fv(this.addr,e)}function lT(i,e){const t=sa(e,this.size,2);i.uniform2fv(this.addr,t)}function cT(i,e){const t=sa(e,this.size,3);i.uniform3fv(this.addr,t)}function hT(i,e){const t=sa(e,this.size,4);i.uniform4fv(this.addr,t)}function uT(i,e){const t=sa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function dT(i,e){const t=sa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function fT(i,e){const t=sa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function pT(i,e){i.uniform1iv(this.addr,e)}function mT(i,e){i.uniform2iv(this.addr,e)}function gT(i,e){i.uniform3iv(this.addr,e)}function vT(i,e){i.uniform4iv(this.addr,e)}function _T(i,e){i.uniform1uiv(this.addr,e)}function yT(i,e){i.uniform2uiv(this.addr,e)}function xT(i,e){i.uniform3uiv(this.addr,e)}function bT(i,e){i.uniform4uiv(this.addr,e)}function ST(i,e,t){const n=this.cache,s=e.length,r=mh(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Wu:a=X0;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function MT(i,e,t){const n=this.cache,s=e.length,r=mh(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||$0,r[a])}function wT(i,e,t){const n=this.cache,s=e.length,r=mh(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Y0,r[a])}function ET(i,e,t){const n=this.cache,s=e.length,r=mh(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||q0,r[a])}function TT(i){switch(i){case 5126:return oT;case 35664:return lT;case 35665:return cT;case 35666:return hT;case 35674:return uT;case 35675:return dT;case 35676:return fT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return gT;case 35669:case 35673:return vT;case 5125:return _T;case 36294:return yT;case 36295:return xT;case 36296:return bT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return wT;case 36289:case 36303:case 36311:case 36292:return ET}}class AT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=aT(t.type)}}class CT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=TT(t.type)}}class RT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const pu=/(\w+)(\])?(\[|\.)?/g;function gm(i,e){i.seq.push(e),i.map[e.id]=e}function IT(i,e,t){const n=i.name,s=n.length;for(pu.lastIndex=0;;){const r=pu.exec(n),a=pu.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){gm(t,c===void 0?new AT(o,i,e):new CT(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new RT(o),gm(t,d)),t=d}}}class bl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);IT(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function vm(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const PT=37297;let DT=0;function LT(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const _m=new rt;function UT(i){mt._getMatrix(_m,mt.workingColorSpace,i);const e=`mat3( ${_m.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(i)){case qa:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return xe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ym(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+LT(i.getShaderSource(e),o)}else return r}function NT(i,e){const t=UT(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const OT={[dd]:"Linear",[fd]:"Reinhard",[pd]:"Cineon",[md]:"ACESFilmic",[Pc]:"AgX",[vd]:"Neutral",[gd]:"Custom"};function FT(i,e){const t=OT[e];return t===void 0?(xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ml=new R;function kT(){mt.getLuminanceCoefficients(ml);const i=ml.x.toFixed(4),e=ml.y.toFixed(4),t=ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BT(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function zT(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function VT(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ma(i){return i!==""}function xm(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xu(i){return i.replace(GT,WT)}const HT=new Map;function WT(i,e){let t=et[e];if(t===void 0){const n=HT.get(e);if(n!==void 0)t=et[n],xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Xu(t)}const XT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sm(i){return i.replace(XT,qT)}function qT(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const $T={[Ea]:"SHADOWMAP_TYPE_PCF",[Or]:"SHADOWMAP_TYPE_VSM"};function YT(i){return $T[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ZT={[Ii]:"ENVMAP_TYPE_CUBE",[_s]:"ENVMAP_TYPE_CUBE",[ea]:"ENVMAP_TYPE_CUBE_UV"};function KT(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ZT[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const JT={[_s]:"ENVMAP_MODE_REFRACTION"};function jT(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":JT[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const QT={[po]:"ENVMAP_BLENDING_MULTIPLY",[Mg]:"ENVMAP_BLENDING_MIX",[wg]:"ENVMAP_BLENDING_ADD"};function eA(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":QT[i.combine]||"ENVMAP_BLENDING_NONE"}function tA(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function nA(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=YT(t),c=KT(t),u=jT(t),d=eA(t),h=tA(t),f=BT(t),p=zT(r),v=s.createProgram();let g,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ma).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ma).join(`
`),m.length>0&&(m+=`
`)):(g=[Mm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),m=[Mm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?et.tonemapping_pars_fragment:"",t.toneMapping!==gi?FT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,NT("linearToOutputTexel",t.outputColorSpace),kT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ma).join(`
`)),a=Xu(a),a=xm(a,t),a=bm(a,t),o=Xu(o),o=xm(o,t),o=bm(o,t),a=Sm(a),o=Sm(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=y+g+a,_=y+m+o,w=vm(s,s.VERTEX_SHADER,b),M=vm(s,s.FRAGMENT_SHADER,_);s.attachShader(v,w),s.attachShader(v,M),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(D){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(v)||"",L=s.getShaderInfoLog(w)||"",B=s.getShaderInfoLog(M)||"",O=k.trim(),U=L.trim(),N=B.trim();let F=!0,H=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,w,M);else{const ee=ym(s,w,"vertex"),K=ym(s,M,"fragment");Xe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+ee+`
`+K)}else O!==""?xe("WebGLProgram: Program Info Log:",O):(U===""||N==="")&&(H=!1);H&&(D.diagnostics={runnable:F,programLog:O,vertexShader:{log:U,prefix:g},fragmentShader:{log:N,prefix:m}})}s.deleteShader(w),s.deleteShader(M),x=new bl(s,v),E=VT(s,v)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(v,PT)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=DT++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=M,this}let iA=0;class sA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new rA(e),t.set(e,n)),n}}class rA{constructor(e){this.id=iA++,this.code=e,this.usedTimes=0}}function aA(i){return i===ys||i===Va||i===Ga}function oA(i,e,t,n,s,r){const a=new Wc,o=new sA,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,E,C,D,k,L){const B=D.fog,O=k.geometry,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=e.get(x.envMap||U,N),H=F&&F.mapping===ea?F.image.height:null,ee=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&xe("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const K=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,te=K!==void 0?K.length:0;let Ce=0;O.morphAttributes.position!==void 0&&(Ce=1),O.morphAttributes.normal!==void 0&&(Ce=2),O.morphAttributes.color!==void 0&&(Ce=3);let ct,it,X,ce;if(ee){const Ve=ei[ee];ct=Ve.vertexShader,it=Ve.fragmentShader}else{ct=x.vertexShader,it=x.fragmentShader;const Ve=o.getVertexShaderStage(x),Xt=o.getFragmentShaderStage(x);o.update(x,Ve,Xt),X=Ve.id,ce=Xt.id}const J=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),Ne=k.isInstancedMesh===!0,le=k.isBatchedMesh===!0,me=!!x.map,Me=!!x.matcap,ne=!!F,ae=!!x.aoMap,oe=!!x.lightMap,ge=!!x.bumpMap&&x.wireframe===!1,_e=!!x.normalMap,je=!!x.displacementMap,He=!!x.emissiveMap,ve=!!x.metalnessMap,Ue=!!x.roughnessMap,z=x.anisotropy>0,Ct=x.clearcoat>0,vt=x.dispersion>0,I=x.iridescence>0,S=x.sheen>0,W=x.transmission>0,Y=z&&!!x.anisotropyMap,j=Ct&&!!x.clearcoatMap,fe=Ct&&!!x.clearcoatNormalMap,ye=Ct&&!!x.clearcoatRoughnessMap,Q=I&&!!x.iridescenceMap,re=I&&!!x.iridescenceThicknessMap,we=S&&!!x.sheenColorMap,$e=S&&!!x.sheenRoughnessMap,Re=!!x.specularMap,Ee=!!x.specularColorMap,Ke=!!x.specularIntensityMap,tt=W&&!!x.transmissionMap,ht=W&&!!x.thicknessMap,V=!!x.gradientMap,Se=!!x.alphaMap,se=x.alphaTest>0,Te=!!x.alphaHash,Le=!!x.extensions;let he=gi;x.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(he=i.toneMapping);const qe={shaderID:ee,shaderType:x.type,shaderName:x.name,vertexShader:ct,fragmentShader:it,defines:x.defines,customVertexShaderID:X,customFragmentShaderID:ce,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:le,batchingColor:le&&k._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&k.instanceColor!==null,instancingMorph:Ne&&k.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:mt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:me,matcap:Me,envMap:ne,envMapMode:ne&&F.mapping,envMapCubeUVHeight:H,aoMap:ae,lightMap:oe,bumpMap:ge,normalMap:_e,displacementMap:je,emissiveMap:He,normalMapObjectSpace:_e&&x.normalMapType===Ig,normalMapTangentSpace:_e&&x.normalMapType===Zi,packedNormalMap:_e&&x.normalMapType===Zi&&aA(x.normalMap.format),metalnessMap:ve,roughnessMap:Ue,anisotropy:z,anisotropyMap:Y,clearcoat:Ct,clearcoatMap:j,clearcoatNormalMap:fe,clearcoatRoughnessMap:ye,dispersion:vt,iridescence:I,iridescenceMap:Q,iridescenceThicknessMap:re,sheen:S,sheenColorMap:we,sheenRoughnessMap:$e,specularMap:Re,specularColorMap:Ee,specularIntensityMap:Ke,transmission:W,transmissionMap:tt,thicknessMap:ht,gradientMap:V,opaque:x.transparent===!1&&x.blending===Ks&&x.alphaToCoverage===!1,alphaMap:Se,alphaTest:se,alphaHash:Te,combine:x.combine,mapUv:me&&p(x.map.channel),aoMapUv:ae&&p(x.aoMap.channel),lightMapUv:oe&&p(x.lightMap.channel),bumpMapUv:ge&&p(x.bumpMap.channel),normalMapUv:_e&&p(x.normalMap.channel),displacementMapUv:je&&p(x.displacementMap.channel),emissiveMapUv:He&&p(x.emissiveMap.channel),metalnessMapUv:ve&&p(x.metalnessMap.channel),roughnessMapUv:Ue&&p(x.roughnessMap.channel),anisotropyMapUv:Y&&p(x.anisotropyMap.channel),clearcoatMapUv:j&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:fe&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:we&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:$e&&p(x.sheenRoughnessMap.channel),specularMapUv:Re&&p(x.specularMap.channel),specularColorMapUv:Ee&&p(x.specularColorMap.channel),specularIntensityMapUv:Ke&&p(x.specularIntensityMap.channel),transmissionMapUv:tt&&p(x.transmissionMap.channel),thicknessMapUv:ht&&p(x.thicknessMap.channel),alphaMapUv:Se&&p(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(_e||z),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!O.attributes.uv&&(me||Se),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&_e===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Ce,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:me&&x.map.isVideoTexture===!0&&mt.getTransfer(x.map.colorSpace)===Rt,decodeVideoTextureEmissive:He&&x.emissiveMap.isVideoTexture===!0&&mt.getTransfer(x.emissiveMap.colorSpace)===Rt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ti,flipSided:x.side===Ln,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Le&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&x.extensions.multiDraw===!0||le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return qe.vertexUv1s=l.has(1),qe.vertexUv2s=l.has(2),qe.vertexUv3s=l.has(3),l.clear(),qe}function g(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)E.push(C),E.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(m(E,x),y(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function m(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function y(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function b(x){const E=f[x.type];let C;if(E){const D=ei[E];C=Vd.clone(D.uniforms)}else C=x.uniforms;return C}function _(x,E){let C=u.get(E);return C!==void 0?++C.usedTimes:(C=new nA(i,E,x,s),c.push(C),u.set(E,C)),C}function w(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function M(x){o.remove(x)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:b,acquireProgram:_,releaseProgram:w,releaseShaderCache:M,programs:c,dispose:A}}function lA(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function cA(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function wm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Em(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,p,v,g,m){let y=i[e];return y===void 0?(y={id:h.id,object:h,geometry:f,material:p,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:g,group:m},i[e]=y):(y.id=h.id,y.object=h,y.geometry=f,y.material=p,y.materialVariant=a(h),y.groupOrder=v,y.renderOrder=h.renderOrder,y.z=g,y.group=m),e++,y}function l(h,f,p,v,g,m){const y=o(h,f,p,v,g,m);p.transmission>0?n.push(y):p.transparent===!0?s.push(y):t.push(y)}function c(h,f,p,v,g,m){const y=o(h,f,p,v,g,m);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function u(h,f,p){t.length>1&&t.sort(h||cA),n.length>1&&n.sort(f||wm),s.length>1&&s.sort(f||wm),p&&(t.reverse(),n.reverse(),s.reverse())}function d(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function hA(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Em,i.set(n,[a])):s>=r.length?(a=new Em,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function uA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Oe};break;case"SpotLight":t={position:new R,direction:new R,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function dA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let fA=0;function pA(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function mA(i){const e=new uA,t=dA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const s=new R,r=new Qe,a=new Qe;function o(c){let u=0,d=0,h=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,y=0,b=0,_=0,w=0,M=0,A=0;c.sort(pA);for(let E=0,C=c.length;E<C;E++){const D=c[E],k=D.color,L=D.intensity,B=D.distance;let O=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ys?O=D.shadow.map.texture:O=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=k.r*L,d+=k.g*L,h+=k.b*L;else if(D.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(D.sh.coefficients[U],L);A++}else if(D.isDirectionalLight){const U=e.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const N=D.shadow,F=t.get(D);F.shadowIntensity=N.intensity,F.shadowBias=N.bias,F.shadowNormalBias=N.normalBias,F.shadowRadius=N.radius,F.shadowMapSize=N.mapSize,n.directionalShadow[f]=F,n.directionalShadowMap[f]=O,n.directionalShadowMatrix[f]=D.shadow.matrix,y++}n.directional[f]=U,f++}else if(D.isSpotLight){const U=e.get(D);U.position.setFromMatrixPosition(D.matrixWorld),U.color.copy(k).multiplyScalar(L),U.distance=B,U.coneCos=Math.cos(D.angle),U.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),U.decay=D.decay,n.spot[v]=U;const N=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,N.updateMatrices(D),D.castShadow&&M++),n.spotLightMatrix[v]=N.matrix,D.castShadow){const F=t.get(D);F.shadowIntensity=N.intensity,F.shadowBias=N.bias,F.shadowNormalBias=N.normalBias,F.shadowRadius=N.radius,F.shadowMapSize=N.mapSize,n.spotShadow[v]=F,n.spotShadowMap[v]=O,_++}v++}else if(D.isRectAreaLight){const U=e.get(D);U.color.copy(k).multiplyScalar(L),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=U,g++}else if(D.isPointLight){const U=e.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),U.distance=D.distance,U.decay=D.decay,D.castShadow){const N=D.shadow,F=t.get(D);F.shadowIntensity=N.intensity,F.shadowBias=N.bias,F.shadowNormalBias=N.normalBias,F.shadowRadius=N.radius,F.shadowMapSize=N.mapSize,F.shadowCameraNear=N.camera.near,F.shadowCameraFar=N.camera.far,n.pointShadow[p]=F,n.pointShadowMap[p]=O,n.pointShadowMatrix[p]=D.shadow.matrix,b++}n.point[p]=U,p++}else if(D.isHemisphereLight){const U=e.get(D);U.skyColor.copy(D.color).multiplyScalar(L),U.groundColor.copy(D.groundColor).multiplyScalar(L),n.hemi[m]=U,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const x=n.hash;(x.directionalLength!==f||x.pointLength!==p||x.spotLength!==v||x.rectAreaLength!==g||x.hemiLength!==m||x.numDirectionalShadows!==y||x.numPointShadows!==b||x.numSpotShadows!==_||x.numSpotMaps!==w||x.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=_+w-M,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=A,x.directionalLength=f,x.pointLength=p,x.spotLength=v,x.rectAreaLength=g,x.hemiLength=m,x.numDirectionalShadows=y,x.numPointShadows=b,x.numSpotShadows=_,x.numSpotMaps=w,x.numLightProbes=A,n.version=fA++)}function l(c,u){let d=0,h=0,f=0,p=0,v=0;const g=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const b=c[m];if(b.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),d++}else if(b.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(b.isRectAreaLight){const _=n.rectArea[p];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(b.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),p++}else if(b.isPointLight){const _=n.point[h];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),h++}else if(b.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:n}}function Tm(i){const e=new mA(i),t=[],n=[],s=[];function r(h){d.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function gA(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Tm(i),e.set(s,[o])):r>=a.length?(o=new Tm(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const vA=`void main() {
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
}`,yA=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],xA=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Am=new Qe,ya=new R,mu=new R;function bA(i,e,t){let n=new nr;const s=new ie,r=new ie,a=new Pt,o=new Wd,l=new Xd,c={},u=t.maxTextureSize,d={[Yi]:Ln,[Ln]:Yi,[Ti]:Ti},h=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:vA,fragmentShader:_A}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const p=new ot;p.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Qt(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ea;let m=this.type;this.render=function(M,A,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===Al&&(xe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ea);const E=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Ri),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const L=m!==this.type;L&&A.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(O=>O.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,O=M.length;B<O;B++){const U=M[B],N=U.shadow;if(N===void 0){xe("WebGLShadowMap:",U,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const F=N.getFrameExtents();s.multiply(F),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/F.x),s.x=r.x*F.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/F.y),s.y=r.y*F.y,N.mapSize.y=r.y));const H=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=H,N.map===null||L===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Or){if(U.isPointLight){xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Zn(s.x,s.y,{format:ys,type:Pi,minFilter:zt,magFilter:zt,generateMipmaps:!1}),N.map.texture.name=U.name+".shadowMap",N.map.depthTexture=new ir(s.x,s.y,Pn),N.map.depthTexture.name=U.name+".shadowMapDepth",N.map.depthTexture.format=Di,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=jt,N.map.depthTexture.magFilter=jt}else U.isPointLight?(N.map=new nf(s.x),N.map.depthTexture=new jg(s.x,ri)):(N.map=new Zn(s.x,s.y),N.map.depthTexture=new ir(s.x,s.y,ri)),N.map.depthTexture.name=U.name+".shadowMap",N.map.depthTexture.format=Di,this.type===Ea?(N.map.depthTexture.compareFunction=H?Vc:zc,N.map.depthTexture.minFilter=zt,N.map.depthTexture.magFilter=zt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=jt,N.map.depthTexture.magFilter=jt);N.camera.updateProjectionMatrix()}const ee=N.map.isWebGLCubeRenderTarget?6:1;for(let K=0;K<ee;K++){if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,K),i.clear();else{K===0&&(i.setRenderTarget(N.map),i.clear());const te=N.getViewport(K);a.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),k.viewport(a)}if(U.isPointLight){const te=N.camera,Ce=N.matrix,ct=U.distance||te.far;ct!==te.far&&(te.far=ct,te.updateProjectionMatrix()),ya.setFromMatrixPosition(U.matrixWorld),te.position.copy(ya),mu.copy(te.position),mu.add(yA[K]),te.up.copy(xA[K]),te.lookAt(mu),te.updateMatrixWorld(),Ce.makeTranslation(-ya.x,-ya.y,-ya.z),Am.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Am,te.coordinateSystem,te.reversedDepth)}else N.updateMatrices(U);n=N.getFrustum(),_(A,x,N.camera,U,this.type)}N.isPointLightShadow!==!0&&this.type===Or&&y(N,x),N.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(E,C,D)};function y(M,A){const x=e.update(v);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Zn(s.x,s.y,{format:ys,type:Pi})),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(A,null,x,h,v,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(A,null,x,f,v,null)}function b(M,A,x,E){let C=null;const D=x.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)C=D;else if(C=x.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const k=C.uuid,L=A.uuid;let B=c[k];B===void 0&&(B={},c[k]=B);let O=B[L];O===void 0&&(O=C.clone(),B[L]=O,A.addEventListener("dispose",w)),C=O}if(C.visible=A.visible,C.wireframe=A.wireframe,E===Or?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:d[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const k=i.properties.get(C);k.light=x}return C}function _(M,A,x,E,C){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&C===Or)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,M.matrixWorld);const L=e.update(M),B=M.material;if(Array.isArray(B)){const O=L.groups;for(let U=0,N=O.length;U<N;U++){const F=O[U],H=B[F.materialIndex];if(H&&H.visible){const ee=b(M,H,E,C);M.onBeforeShadow(i,M,A,x,L,ee,F),i.renderBufferDirect(x,null,L,ee,M,F),M.onAfterShadow(i,M,A,x,L,ee,F)}}}else if(B.visible){const O=b(M,B,E,C);M.onBeforeShadow(i,M,A,x,L,O,null),i.renderBufferDirect(x,null,L,O,M,null),M.onAfterShadow(i,M,A,x,L,O,null)}}const k=M.children;for(let L=0,B=k.length;L<B;L++)_(k[L],A,x,E,C)}function w(M){M.target.removeEventListener("dispose",w);for(const x in c){const E=c[x],C=M.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function SA(i,e){function t(){let V=!1;const Se=new Pt;let se=null;const Te=new Pt(0,0,0,0);return{setMask:function(Le){se!==Le&&!V&&(i.colorMask(Le,Le,Le,Le),se=Le)},setLocked:function(Le){V=Le},setClear:function(Le,he,qe,Ve,Xt){Xt===!0&&(Le*=Ve,he*=Ve,qe*=Ve),Se.set(Le,he,qe,Ve),Te.equals(Se)===!1&&(i.clearColor(Le,he,qe,Ve),Te.copy(Se))},reset:function(){V=!1,se=null,Te.set(-1,0,0,0)}}}function n(){let V=!1,Se=!1,se=null,Te=null,Le=null;return{setReversed:function(he){if(Se!==he){const qe=e.get("EXT_clip_control");he?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Se=he;const Ve=Le;Le=null,this.setClear(Ve)}},getReversed:function(){return Se},setTest:function(he){he?J(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(he){se!==he&&!V&&(i.depthMask(he),se=he)},setFunc:function(he){if(Se&&(he=Vx[he]),Te!==he){switch(he){case Il:i.depthFunc(i.NEVER);break;case Pl:i.depthFunc(i.ALWAYS);break;case Dl:i.depthFunc(i.LESS);break;case Qs:i.depthFunc(i.LEQUAL);break;case Ll:i.depthFunc(i.EQUAL);break;case Ul:i.depthFunc(i.GEQUAL);break;case Nl:i.depthFunc(i.GREATER);break;case Ol:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=he}},setLocked:function(he){V=he},setClear:function(he){Le!==he&&(Le=he,Se&&(he=1-he),i.clearDepth(he))},reset:function(){V=!1,se=null,Te=null,Le=null,Se=!1}}}function s(){let V=!1,Se=null,se=null,Te=null,Le=null,he=null,qe=null,Ve=null,Xt=null;return{setTest:function(Ft){V||(Ft?J(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(Ft){Se!==Ft&&!V&&(i.stencilMask(Ft),Se=Ft)},setFunc:function(Ft,bi,Si){(se!==Ft||Te!==bi||Le!==Si)&&(i.stencilFunc(Ft,bi,Si),se=Ft,Te=bi,Le=Si)},setOp:function(Ft,bi,Si){(he!==Ft||qe!==bi||Ve!==Si)&&(i.stencilOp(Ft,bi,Si),he=Ft,qe=bi,Ve=Si)},setLocked:function(Ft){V=Ft},setClear:function(Ft){Xt!==Ft&&(i.clearStencil(Ft),Xt=Ft)},reset:function(){V=!1,Se=null,se=null,Te=null,Le=null,he=null,qe=null,Ve=null,Xt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,p=[],v=null,g=!1,m=null,y=null,b=null,_=null,w=null,M=null,A=null,x=new Oe(0,0,0),E=0,C=!1,D=null,k=null,L=null,B=null,O=null;const U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,F=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(H)[1]),N=F>=1):H.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),N=F>=2);let ee=null,K={};const te=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),ct=new Pt().fromArray(te),it=new Pt().fromArray(Ce);function X(V,Se,se,Te){const Le=new Uint8Array(4),he=i.createTexture();i.bindTexture(V,he),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<se;qe++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,Le):i.texImage2D(Se+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Le);return he}const ce={};ce[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(Qs),ge(!1),_e(Tu),J(i.CULL_FACE),ae(Ri);function J(V){u[V]!==!0&&(i.enable(V),u[V]=!0)}function pe(V){u[V]!==!1&&(i.disable(V),u[V]=!1)}function Ne(V,Se){return h[V]!==Se?(i.bindFramebuffer(V,Se),h[V]=Se,V===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Se),V===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function le(V,Se){let se=p,Te=!1;if(V){se=f.get(Se),se===void 0&&(se=[],f.set(Se,se));const Le=V.textures;if(se.length!==Le.length||se[0]!==i.COLOR_ATTACHMENT0){for(let he=0,qe=Le.length;he<qe;he++)se[he]=i.COLOR_ATTACHMENT0+he;se.length=Le.length,Te=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,Te=!0);Te&&i.drawBuffers(se)}function me(V){return v!==V?(i.useProgram(V),v=V,!0):!1}const Me={[ds]:i.FUNC_ADD,[ag]:i.FUNC_SUBTRACT,[og]:i.FUNC_REVERSE_SUBTRACT};Me[lg]=i.MIN,Me[cg]=i.MAX;const ne={[hg]:i.ZERO,[ug]:i.ONE,[dg]:i.SRC_COLOR,[Cl]:i.SRC_ALPHA,[_g]:i.SRC_ALPHA_SATURATE,[gg]:i.DST_COLOR,[pg]:i.DST_ALPHA,[fg]:i.ONE_MINUS_SRC_COLOR,[Rl]:i.ONE_MINUS_SRC_ALPHA,[vg]:i.ONE_MINUS_DST_COLOR,[mg]:i.ONE_MINUS_DST_ALPHA,[yg]:i.CONSTANT_COLOR,[xg]:i.ONE_MINUS_CONSTANT_COLOR,[bg]:i.CONSTANT_ALPHA,[Sg]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(V,Se,se,Te,Le,he,qe,Ve,Xt,Ft){if(V===Ri){g===!0&&(pe(i.BLEND),g=!1);return}if(g===!1&&(J(i.BLEND),g=!0),V!==rg){if(V!==m||Ft!==C){if((y!==ds||w!==ds)&&(i.blendEquation(i.FUNC_ADD),y=ds,w=ds),Ft)switch(V){case Ks:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Au:i.blendFunc(i.ONE,i.ONE);break;case Cu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ru:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xe("WebGLState: Invalid blending: ",V);break}else switch(V){case Ks:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Au:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Cu:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ru:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",V);break}b=null,_=null,M=null,A=null,x.set(0,0,0),E=0,m=V,C=Ft}return}Le=Le||Se,he=he||se,qe=qe||Te,(Se!==y||Le!==w)&&(i.blendEquationSeparate(Me[Se],Me[Le]),y=Se,w=Le),(se!==b||Te!==_||he!==M||qe!==A)&&(i.blendFuncSeparate(ne[se],ne[Te],ne[he],ne[qe]),b=se,_=Te,M=he,A=qe),(Ve.equals(x)===!1||Xt!==E)&&(i.blendColor(Ve.r,Ve.g,Ve.b,Xt),x.copy(Ve),E=Xt),m=V,C=!1}function oe(V,Se){V.side===Ti?pe(i.CULL_FACE):J(i.CULL_FACE);let se=V.side===Ln;Se&&(se=!se),ge(se),V.blending===Ks&&V.transparent===!1?ae(Ri):ae(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);const Te=V.stencilWrite;o.setTest(Te),Te&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),He(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ge(V){D!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),D=V)}function _e(V){V!==ig?(J(i.CULL_FACE),V!==k&&(V===Tu?i.cullFace(i.BACK):V===sg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),k=V}function je(V){V!==L&&(N&&i.lineWidth(V),L=V)}function He(V,Se,se){V?(J(i.POLYGON_OFFSET_FILL),(B!==Se||O!==se)&&(B=Se,O=se,a.getReversed()&&(Se=-Se),i.polygonOffset(Se,se))):pe(i.POLYGON_OFFSET_FILL)}function ve(V){V?J(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function Ue(V){V===void 0&&(V=i.TEXTURE0+U-1),ee!==V&&(i.activeTexture(V),ee=V)}function z(V,Se,se){se===void 0&&(ee===null?se=i.TEXTURE0+U-1:se=ee);let Te=K[se];Te===void 0&&(Te={type:void 0,texture:void 0},K[se]=Te),(Te.type!==V||Te.texture!==Se)&&(ee!==se&&(i.activeTexture(se),ee=se),i.bindTexture(V,Se||ce[V]),Te.type=V,Te.texture=Se)}function Ct(){const V=K[ee];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function vt(){try{i.compressedTexImage2D(...arguments)}catch(V){Xe("WebGLState:",V)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(V){Xe("WebGLState:",V)}}function S(){try{i.texSubImage2D(...arguments)}catch(V){Xe("WebGLState:",V)}}function W(){try{i.texSubImage3D(...arguments)}catch(V){Xe("WebGLState:",V)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(V){Xe("WebGLState:",V)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(V){Xe("WebGLState:",V)}}function fe(){try{i.texStorage2D(...arguments)}catch(V){Xe("WebGLState:",V)}}function ye(){try{i.texStorage3D(...arguments)}catch(V){Xe("WebGLState:",V)}}function Q(){try{i.texImage2D(...arguments)}catch(V){Xe("WebGLState:",V)}}function re(){try{i.texImage3D(...arguments)}catch(V){Xe("WebGLState:",V)}}function we(V){return d[V]!==void 0?d[V]:i.getParameter(V)}function $e(V,Se){d[V]!==Se&&(i.pixelStorei(V,Se),d[V]=Se)}function Re(V){ct.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),ct.copy(V))}function Ee(V){it.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),it.copy(V))}function Ke(V,Se){let se=c.get(Se);se===void 0&&(se=new WeakMap,c.set(Se,se));let Te=se.get(V);Te===void 0&&(Te=i.getUniformBlockIndex(Se,V.name),se.set(V,Te))}function tt(V,Se){const Te=c.get(Se).get(V);l.get(Se)!==Te&&(i.uniformBlockBinding(Se,Te,V.__bindingPointIndex),l.set(Se,Te))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},ee=null,K={},h={},f=new WeakMap,p=[],v=null,g=!1,m=null,y=null,b=null,_=null,w=null,M=null,A=null,x=new Oe(0,0,0),E=0,C=!1,D=null,k=null,L=null,B=null,O=null,ct.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:pe,bindFramebuffer:Ne,drawBuffers:le,useProgram:me,setBlending:ae,setMaterial:oe,setFlipSided:ge,setCullFace:_e,setLineWidth:je,setPolygonOffset:He,setScissorTest:ve,activeTexture:Ue,bindTexture:z,unbindTexture:Ct,compressedTexImage2D:vt,compressedTexImage3D:I,texImage2D:Q,texImage3D:re,pixelStorei:$e,getParameter:we,updateUBOMapping:Ke,uniformBlockBinding:tt,texStorage2D:fe,texStorage3D:ye,texSubImage2D:S,texSubImage3D:W,compressedTexSubImage2D:Y,compressedTexSubImage3D:j,scissor:Re,viewport:Ee,reset:ht}}function MA(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,S){return p?new OffscreenCanvas(I,S):Ya("canvas")}function g(I,S,W){let Y=1;const j=vt(I);if((j.width>W||j.height>W)&&(Y=W/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const fe=Math.floor(Y*j.width),ye=Math.floor(Y*j.height);h===void 0&&(h=v(fe,ye));const Q=S?v(fe,ye):h;return Q.width=fe,Q.height=ye,Q.getContext("2d").drawImage(I,0,0,fe,ye),xe("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+fe+"x"+ye+")."),Q}else return"data"in I&&xe("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),I;return I}function m(I){return I.generateMipmaps}function y(I){i.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(I,S,W,Y,j,fe=!1){if(I!==null){if(i[I]!==void 0)return i[I];xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ye;Y&&(ye=e.get("EXT_texture_norm16"),ye||xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=S;if(S===i.RED&&(W===i.FLOAT&&(Q=i.R32F),W===i.HALF_FLOAT&&(Q=i.R16F),W===i.UNSIGNED_BYTE&&(Q=i.R8),W===i.UNSIGNED_SHORT&&ye&&(Q=ye.R16_EXT),W===i.SHORT&&ye&&(Q=ye.R16_SNORM_EXT)),S===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.R8UI),W===i.UNSIGNED_SHORT&&(Q=i.R16UI),W===i.UNSIGNED_INT&&(Q=i.R32UI),W===i.BYTE&&(Q=i.R8I),W===i.SHORT&&(Q=i.R16I),W===i.INT&&(Q=i.R32I)),S===i.RG&&(W===i.FLOAT&&(Q=i.RG32F),W===i.HALF_FLOAT&&(Q=i.RG16F),W===i.UNSIGNED_BYTE&&(Q=i.RG8),W===i.UNSIGNED_SHORT&&ye&&(Q=ye.RG16_EXT),W===i.SHORT&&ye&&(Q=ye.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.RG8UI),W===i.UNSIGNED_SHORT&&(Q=i.RG16UI),W===i.UNSIGNED_INT&&(Q=i.RG32UI),W===i.BYTE&&(Q=i.RG8I),W===i.SHORT&&(Q=i.RG16I),W===i.INT&&(Q=i.RG32I)),S===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),W===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),W===i.UNSIGNED_INT&&(Q=i.RGB32UI),W===i.BYTE&&(Q=i.RGB8I),W===i.SHORT&&(Q=i.RGB16I),W===i.INT&&(Q=i.RGB32I)),S===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),W===i.UNSIGNED_INT&&(Q=i.RGBA32UI),W===i.BYTE&&(Q=i.RGBA8I),W===i.SHORT&&(Q=i.RGBA16I),W===i.INT&&(Q=i.RGBA32I)),S===i.RGB&&(W===i.UNSIGNED_SHORT&&ye&&(Q=ye.RGB16_EXT),W===i.SHORT&&ye&&(Q=ye.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),S===i.RGBA){const re=fe?qa:mt.getTransfer(j);W===i.FLOAT&&(Q=i.RGBA32F),W===i.HALF_FLOAT&&(Q=i.RGBA16F),W===i.UNSIGNED_BYTE&&(Q=re===Rt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&ye&&(Q=ye.RGBA16_EXT),W===i.SHORT&&ye&&(Q=ye.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function w(I,S){let W;return I?S===null||S===ri||S===$r?W=i.DEPTH24_STENCIL8:S===Pn?W=i.DEPTH32F_STENCIL8:S===qr&&(W=i.DEPTH24_STENCIL8,xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ri||S===$r?W=i.DEPTH_COMPONENT24:S===Pn?W=i.DEPTH_COMPONENT32F:S===qr&&(W=i.DEPTH_COMPONENT16),W}function M(I,S){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==jt&&I.minFilter!==zt?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function A(I){const S=I.target;S.removeEventListener("dispose",A),E(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&d.delete(S)}function x(I){const S=I.target;S.removeEventListener("dispose",x),D(S)}function E(I){const S=n.get(I);if(S.__webglInit===void 0)return;const W=I.source,Y=f.get(W);if(Y){const j=Y[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&C(I),Object.keys(Y).length===0&&f.delete(W)}n.remove(I)}function C(I){const S=n.get(I);i.deleteTexture(S.__webglTexture);const W=I.source,Y=f.get(W);delete Y[S.__cacheKey],a.memory.textures--}function D(I){const S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let j=0;j<S.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(S.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)i.deleteFramebuffer(S.__webglFramebuffer[Y]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const W=I.textures;for(let Y=0,j=W.length;Y<j;Y++){const fe=n.get(W[Y]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),a.memory.textures--),n.remove(W[Y])}n.remove(I)}let k=0;function L(){k=0}function B(){return k}function O(I){k=I}function U(){const I=k;return I>=s.maxTextures&&xe("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),k+=1,I}function N(I){const S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function F(I,S){const W=n.get(I);if(I.isVideoTexture&&z(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&W.__version!==I.version){const Y=I.image;if(Y===null)xe("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)xe("WebGLRenderer: Texture marked for update but image is incomplete");else{pe(W,I,S);return}}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+S)}function H(I,S){const W=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){pe(W,I,S);return}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+S)}function ee(I,S){const W=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){pe(W,I,S);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+S)}function K(I,S){const W=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&W.__version!==I.version){Ne(W,I,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+S)}const te={[Ba]:i.REPEAT,[Vn]:i.CLAMP_TO_EDGE,[za]:i.MIRRORED_REPEAT},Ce={[jt]:i.NEAREST,[_d]:i.NEAREST_MIPMAP_NEAREST,[Fr]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[Ca]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},ct={[Pg]:i.NEVER,[Og]:i.ALWAYS,[Dg]:i.LESS,[zc]:i.LEQUAL,[Lg]:i.EQUAL,[Vc]:i.GEQUAL,[Ug]:i.GREATER,[Ng]:i.NOTEQUAL};function it(I,S){if(S.type===Pn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===zt||S.magFilter===Ca||S.magFilter===Fr||S.magFilter===Ai||S.minFilter===zt||S.minFilter===Ca||S.minFilter===Fr||S.minFilter===Ai)&&xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,te[S.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,te[S.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,te[S.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Ce[S.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Ce[S.minFilter]),S.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ct[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===jt||S.minFilter!==Fr&&S.minFilter!==Ai||S.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function X(I,S){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",A));const Y=S.source;let j=f.get(Y);j===void 0&&(j={},f.set(Y,j));const fe=N(S);if(fe!==I.__cacheKey){j[fe]===void 0&&(j[fe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),j[fe].usedTimes++;const ye=j[I.__cacheKey];ye!==void 0&&(j[I.__cacheKey].usedTimes--,ye.usedTimes===0&&C(S)),I.__cacheKey=fe,I.__webglTexture=j[fe].texture}return W}function ce(I,S,W){return Math.floor(Math.floor(I/W)/S)}function J(I,S,W,Y){const fe=I.updateRanges;if(fe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,W,Y,S.data);else{fe.sort(($e,Re)=>$e.start-Re.start);let ye=0;for(let $e=1;$e<fe.length;$e++){const Re=fe[ye],Ee=fe[$e],Ke=Re.start+Re.count,tt=ce(Ee.start,S.width,4),ht=ce(Re.start,S.width,4);Ee.start<=Ke+1&&tt===ht&&ce(Ee.start+Ee.count-1,S.width,4)===tt?Re.count=Math.max(Re.count,Ee.start+Ee.count-Re.start):(++ye,fe[ye]=Ee)}fe.length=ye+1;const Q=t.getParameter(i.UNPACK_ROW_LENGTH),re=t.getParameter(i.UNPACK_SKIP_PIXELS),we=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let $e=0,Re=fe.length;$e<Re;$e++){const Ee=fe[$e],Ke=Math.floor(Ee.start/4),tt=Math.ceil(Ee.count/4),ht=Ke%S.width,V=Math.floor(Ke/S.width),Se=tt,se=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),t.pixelStorei(i.UNPACK_SKIP_ROWS,V),t.texSubImage2D(i.TEXTURE_2D,0,ht,V,Se,se,W,Y,S.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function pe(I,S,W){let Y=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=i.TEXTURE_3D);const j=X(I,S),fe=S.source;t.bindTexture(Y,I.__webglTexture,i.TEXTURE0+W);const ye=n.get(fe);if(fe.version!==ye.__version||j===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const se=mt.getPrimaries(mt.workingColorSpace),Te=S.colorSpace===Wi?null:mt.getPrimaries(S.colorSpace),Le=S.colorSpace===Wi||se===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let re=g(S.image,!1,s.maxTextureSize);re=Ct(S,re);const we=r.convert(S.format,S.colorSpace),$e=r.convert(S.type);let Re=_(S.internalFormat,we,$e,S.normalized,S.colorSpace,S.isVideoTexture);it(Y,S);let Ee;const Ke=S.mipmaps,tt=S.isVideoTexture!==!0,ht=ye.__version===void 0||j===!0,V=fe.dataReady,Se=M(S,re);if(S.isDepthTexture)Re=w(S.format===fs,S.type),ht&&(tt?t.texStorage2D(i.TEXTURE_2D,1,Re,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Re,re.width,re.height,0,we,$e,null));else if(S.isDataTexture)if(Ke.length>0){tt&&ht&&t.texStorage2D(i.TEXTURE_2D,Se,Re,Ke[0].width,Ke[0].height);for(let se=0,Te=Ke.length;se<Te;se++)Ee=Ke[se],tt?V&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Ee.width,Ee.height,we,$e,Ee.data):t.texImage2D(i.TEXTURE_2D,se,Re,Ee.width,Ee.height,0,we,$e,Ee.data);S.generateMipmaps=!1}else tt?(ht&&t.texStorage2D(i.TEXTURE_2D,Se,Re,re.width,re.height),V&&J(S,re,we,$e)):t.texImage2D(i.TEXTURE_2D,0,Re,re.width,re.height,0,we,$e,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){tt&&ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Re,Ke[0].width,Ke[0].height,re.depth);for(let se=0,Te=Ke.length;se<Te;se++)if(Ee=Ke[se],S.format!==Dn)if(we!==null)if(tt){if(V)if(S.layerUpdates.size>0){const Le=Gu(Ee.width,Ee.height,S.format,S.type);for(const he of S.layerUpdates){const qe=Ee.data.subarray(he*Le/Ee.data.BYTES_PER_ELEMENT,(he+1)*Le/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,he,Ee.width,Ee.height,1,we,qe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Ee.width,Ee.height,re.depth,we,Ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Re,Ee.width,Ee.height,re.depth,0,Ee.data,0,0);else xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Ee.width,Ee.height,re.depth,we,$e,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Re,Ee.width,Ee.height,re.depth,0,we,$e,Ee.data)}else{tt&&ht&&t.texStorage2D(i.TEXTURE_2D,Se,Re,Ke[0].width,Ke[0].height);for(let se=0,Te=Ke.length;se<Te;se++)Ee=Ke[se],S.format!==Dn?we!==null?tt?V&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,Ee.width,Ee.height,we,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Re,Ee.width,Ee.height,0,Ee.data):xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?V&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Ee.width,Ee.height,we,$e,Ee.data):t.texImage2D(i.TEXTURE_2D,se,Re,Ee.width,Ee.height,0,we,$e,Ee.data)}else if(S.isDataArrayTexture)if(tt){if(ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Re,re.width,re.height,re.depth),V)if(S.layerUpdates.size>0){const se=Gu(re.width,re.height,S.format,S.type);for(const Te of S.layerUpdates){const Le=re.data.subarray(Te*se/re.data.BYTES_PER_ELEMENT,(Te+1)*se/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Te,re.width,re.height,1,we,$e,Le)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,we,$e,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,re.width,re.height,re.depth,0,we,$e,re.data);else if(S.isData3DTexture)tt?(ht&&t.texStorage3D(i.TEXTURE_3D,Se,Re,re.width,re.height,re.depth),V&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,we,$e,re.data)):t.texImage3D(i.TEXTURE_3D,0,Re,re.width,re.height,re.depth,0,we,$e,re.data);else if(S.isFramebufferTexture){if(ht)if(tt)t.texStorage2D(i.TEXTURE_2D,Se,Re,re.width,re.height);else{let se=re.width,Te=re.height;for(let Le=0;Le<Se;Le++)t.texImage2D(i.TEXTURE_2D,Le,Re,se,Te,0,we,$e,null),se>>=1,Te>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){const se=i.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),re.parentNode!==se){se.appendChild(re),d.add(S),se.onpaint=Te=>{const Le=Te.changedElements;for(const he of d)Le.includes(he.image)&&(he.needsUpdate=!0)},se.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,re);else{const Le=i.RGBA,he=i.RGBA,qe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Le,he,qe,re)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ke.length>0){if(tt&&ht){const se=vt(Ke[0]);t.texStorage2D(i.TEXTURE_2D,Se,Re,se.width,se.height)}for(let se=0,Te=Ke.length;se<Te;se++)Ee=Ke[se],tt?V&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,we,$e,Ee):t.texImage2D(i.TEXTURE_2D,se,Re,we,$e,Ee);S.generateMipmaps=!1}else if(tt){if(ht){const se=vt(re);t.texStorage2D(i.TEXTURE_2D,Se,Re,se.width,se.height)}V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,$e,re)}else t.texImage2D(i.TEXTURE_2D,0,Re,we,$e,re);m(S)&&y(Y),ye.__version=fe.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Ne(I,S,W){if(S.image.length!==6)return;const Y=X(I,S),j=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+W);const fe=n.get(j);if(j.version!==fe.__version||Y===!0){t.activeTexture(i.TEXTURE0+W);const ye=mt.getPrimaries(mt.workingColorSpace),Q=S.colorSpace===Wi?null:mt.getPrimaries(S.colorSpace),re=S.colorSpace===Wi||ye===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const we=S.isCompressedTexture||S.image[0].isCompressedTexture,$e=S.image[0]&&S.image[0].isDataTexture,Re=[];for(let he=0;he<6;he++)!we&&!$e?Re[he]=g(S.image[he],!0,s.maxCubemapSize):Re[he]=$e?S.image[he].image:S.image[he],Re[he]=Ct(S,Re[he]);const Ee=Re[0],Ke=r.convert(S.format,S.colorSpace),tt=r.convert(S.type),ht=_(S.internalFormat,Ke,tt,S.normalized,S.colorSpace),V=S.isVideoTexture!==!0,Se=fe.__version===void 0||Y===!0,se=j.dataReady;let Te=M(S,Ee);it(i.TEXTURE_CUBE_MAP,S);let Le;if(we){V&&Se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,ht,Ee.width,Ee.height);for(let he=0;he<6;he++){Le=Re[he].mipmaps;for(let qe=0;qe<Le.length;qe++){const Ve=Le[qe];S.format!==Dn?Ke!==null?V?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,qe,0,0,Ve.width,Ve.height,Ke,Ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,qe,ht,Ve.width,Ve.height,0,Ve.data):xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,qe,0,0,Ve.width,Ve.height,Ke,tt,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,qe,ht,Ve.width,Ve.height,0,Ke,tt,Ve.data)}}}else{if(Le=S.mipmaps,V&&Se){Le.length>0&&Te++;const he=vt(Re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,ht,he.width,he.height)}for(let he=0;he<6;he++)if($e){V?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Re[he].width,Re[he].height,Ke,tt,Re[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ht,Re[he].width,Re[he].height,0,Ke,tt,Re[he].data);for(let qe=0;qe<Le.length;qe++){const Xt=Le[qe].image[he].image;V?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,qe+1,0,0,Xt.width,Xt.height,Ke,tt,Xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,qe+1,ht,Xt.width,Xt.height,0,Ke,tt,Xt.data)}}else{V?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ke,tt,Re[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ht,Ke,tt,Re[he]);for(let qe=0;qe<Le.length;qe++){const Ve=Le[qe];V?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,qe+1,0,0,Ke,tt,Ve.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,qe+1,ht,Ke,tt,Ve.image[he])}}}m(S)&&y(i.TEXTURE_CUBE_MAP),fe.__version=j.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function le(I,S,W,Y,j,fe){const ye=r.convert(W.format,W.colorSpace),Q=r.convert(W.type),re=_(W.internalFormat,ye,Q,W.normalized,W.colorSpace),we=n.get(S),$e=n.get(W);if($e.__renderTarget=S,!we.__hasExternalTextures){const Re=Math.max(1,S.width>>fe),Ee=Math.max(1,S.height>>fe);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,fe,re,Re,Ee,S.depth,0,ye,Q,null):t.texImage2D(j,fe,re,Re,Ee,0,ye,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Ue(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,$e.__webglTexture,0,ve(S)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,$e.__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(I,S,W){if(i.bindRenderbuffer(i.RENDERBUFFER,I),S.depthBuffer){const Y=S.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,fe=w(S.stencilBuffer,j),ye=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ue(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve(S),fe,S.width,S.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve(S),fe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,fe,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,I)}else{const Y=S.textures;for(let j=0;j<Y.length;j++){const fe=Y[j],ye=r.convert(fe.format,fe.colorSpace),Q=r.convert(fe.type),re=_(fe.internalFormat,ye,Q,fe.normalized,fe.colorSpace);Ue(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve(S),re,S.width,S.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve(S),re,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,re,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(I,S,W){const Y=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=n.get(S.depthTexture);if(j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y){if(j.__webglInit===void 0&&(j.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),it(i.TEXTURE_CUBE_MAP,S.depthTexture);const we=r.convert(S.depthTexture.format),$e=r.convert(S.depthTexture.type);let Re;S.depthTexture.format===Di?Re=i.DEPTH_COMPONENT24:S.depthTexture.format===fs&&(Re=i.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Re,S.width,S.height,0,we,$e,null)}}else F(S.depthTexture,0);const fe=j.__webglTexture,ye=ve(S),Q=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,re=S.depthTexture.format===fs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Di)Ue(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,Q,fe,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,re,Q,fe,0);else if(S.depthTexture.format===fs)Ue(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,Q,fe,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,re,Q,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(I){const S=n.get(I),W=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){const Y=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){const j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=Y}if(I.depthTexture&&!S.__autoAllocateDepthBuffer)if(W)for(let Y=0;Y<6;Y++)Me(S.__webglFramebuffer[Y],I,Y);else{const Y=I.texture.mipmaps;Y&&Y.length>0?Me(S.__webglFramebuffer[0],I,0):Me(S.__webglFramebuffer,I,0)}else if(W){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=i.createRenderbuffer(),me(S.__webglDepthbuffer[Y],I,!1);else{const j=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=S.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,fe)}}else{const Y=I.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),me(S.__webglDepthbuffer,I,!1);else{const j=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,fe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(I,S,W){const Y=n.get(I);S!==void 0&&le(Y.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&ne(I)}function oe(I){const S=I.texture,W=n.get(I),Y=n.get(S);I.addEventListener("dispose",x);const j=I.textures,fe=I.isWebGLCubeRenderTarget===!0,ye=j.length>1;if(ye||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=S.version,a.memory.textures++),fe){W.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[Q]=[];for(let re=0;re<S.mipmaps.length;re++)W.__webglFramebuffer[Q][re]=i.createFramebuffer()}else W.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let Q=0;Q<S.mipmaps.length;Q++)W.__webglFramebuffer[Q]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(ye)for(let Q=0,re=j.length;Q<re;Q++){const we=n.get(j[Q]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&Ue(I)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Q=0;Q<j.length;Q++){const re=j[Q];W.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[Q]);const we=r.convert(re.format,re.colorSpace),$e=r.convert(re.type),Re=_(re.internalFormat,we,$e,re.normalized,re.colorSpace,I.isXRRenderTarget===!0),Ee=ve(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,Re,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,W.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),me(W.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),it(i.TEXTURE_CUBE_MAP,S);for(let Q=0;Q<6;Q++)if(S.mipmaps&&S.mipmaps.length>0)for(let re=0;re<S.mipmaps.length;re++)le(W.__webglFramebuffer[Q][re],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,re);else le(W.__webglFramebuffer[Q],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(S)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let Q=0,re=j.length;Q<re;Q++){const we=j[Q],$e=n.get(we);let Re=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Re=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Re,$e.__webglTexture),it(Re,we),le(W.__webglFramebuffer,I,we,i.COLOR_ATTACHMENT0+Q,Re,0),m(we)&&y(Re)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Q=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,Y.__webglTexture),it(Q,S),S.mipmaps&&S.mipmaps.length>0)for(let re=0;re<S.mipmaps.length;re++)le(W.__webglFramebuffer[re],I,S,i.COLOR_ATTACHMENT0,Q,re);else le(W.__webglFramebuffer,I,S,i.COLOR_ATTACHMENT0,Q,0);m(S)&&y(Q),t.unbindTexture()}I.depthBuffer&&ne(I)}function ge(I){const S=I.textures;for(let W=0,Y=S.length;W<Y;W++){const j=S[W];if(m(j)){const fe=b(I),ye=n.get(j).__webglTexture;t.bindTexture(fe,ye),y(fe),t.unbindTexture()}}}const _e=[],je=[];function He(I){if(I.samples>0){if(Ue(I)===!1){const S=I.textures,W=I.width,Y=I.height;let j=i.COLOR_BUFFER_BIT;const fe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(I),Q=S.length>1;if(Q)for(let we=0;we<S.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const re=I.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let we=0;we<S.length;we++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[we]);const $e=n.get(S[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$e,0)}i.blitFramebuffer(0,0,W,Y,0,0,W,Y,j,i.NEAREST),l===!0&&(_e.length=0,je.length=0,_e.push(i.COLOR_ATTACHMENT0+we),I.depthBuffer&&I.resolveDepthBuffer===!1&&(_e.push(fe),je.push(fe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,je)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let we=0;we<S.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,ye.__webglColorRenderbuffer[we]);const $e=n.get(S[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,$e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const S=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ve(I){return Math.min(s.maxSamples,I.samples)}function Ue(I){const S=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function z(I){const S=a.render.frame;u.get(I)!==S&&(u.set(I,S),I.update())}function Ct(I,S){const W=I.colorSpace,Y=I.format,j=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==Xa&&W!==Wi&&(mt.getTransfer(W)===Rt?(Y!==Dn||j!==Bn)&&xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",W)),S}function vt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.getTextureUnits=B,this.setTextureUnits=O,this.setTexture2D=F,this.setTexture2DArray=H,this.setTexture3D=ee,this.setTextureCube=K,this.rebindTextures=ae,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Ue,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Z0(i,e){function t(n,s=Wi){let r;const a=mt.getTransfer(s);if(n===Bn)return i.UNSIGNED_BYTE;if(n===Uc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Nc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===yd)return i.BYTE;if(n===xd)return i.SHORT;if(n===qr)return i.UNSIGNED_SHORT;if(n===Lc)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===Pi)return i.HALF_FLOAT;if(n===Md)return i.ALPHA;if(n===wd)return i.RGB;if(n===Dn)return i.RGBA;if(n===Di)return i.DEPTH_COMPONENT;if(n===fs)return i.DEPTH_STENCIL;if(n===Oc)return i.RED;if(n===mo)return i.RED_INTEGER;if(n===ys)return i.RG;if(n===Fc)return i.RG_INTEGER;if(n===kc)return i.RGBA_INTEGER;if(n===Ra||n===Ia||n===Pa||n===Da)if(a===Rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fl||n===kl||n===Bl||n===zl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vl||n===Gl||n===Hl||n===Wl||n===Xl||n===Va||n===ql)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vl||n===Gl)return a===Rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wl)return r.COMPRESSED_R11_EAC;if(n===Xl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Va)return r.COMPRESSED_RG11_EAC;if(n===ql)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$l||n===Yl||n===Zl||n===Kl||n===Jl||n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$l)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ql)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ec)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tc)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nc)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ic)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sc)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rc)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ac)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oc||n===lc||n===cc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===oc)return a===Rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hc||n===uc||n===Ga||n===dc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===hc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ga)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$r?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const wA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EA=`
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

}`;class TA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ud(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ai({vertexShader:wA,fragmentShader:EA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qt(new ta(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AA extends yi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null;const v=typeof XRWebGLBinding<"u",g=new TA,m={},y=t.getContextAttributes();let b=null,_=null;const w=[],M=[],A=new ie;let x=null;const E=new un;E.viewport=new Pt;const C=new un;C.viewport=new Pt;const D=[E,C],k=new N0;let L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ce=w[X];return ce===void 0&&(ce=new xl,w[X]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(X){let ce=w[X];return ce===void 0&&(ce=new xl,w[X]=ce),ce.getGripSpace()},this.getHand=function(X){let ce=w[X];return ce===void 0&&(ce=new xl,w[X]=ce),ce.getHandSpace()};function O(X){const ce=M.indexOf(X.inputSource);if(ce===-1)return;const J=w[ce];J!==void 0&&(J.update(X.inputSource,X.frame,c||a),J.dispatchEvent({type:X.type,data:X.inputSource}))}function U(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",N);for(let X=0;X<w.length;X++){const ce=M[X];ce!==null&&(M[X]=null,w[X].disconnect(ce))}L=null,B=null,g.reset();for(const X in m)delete m[X];e.setRenderTarget(b),f=null,h=null,d=null,s=null,_=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",U),s.addEventListener("inputsourceschange",N),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,pe=null,Ne=null;y.depth&&(Ne=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=y.stencil?fs:Di,pe=y.stencil?$r:ri);const le={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(le),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Zn(h.textureWidth,h.textureHeight,{format:Dn,type:Bn,depthTexture:new ir(h.textureWidth,h.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const J={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Zn(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),it.setContext(s),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function N(X){for(let ce=0;ce<X.removed.length;ce++){const J=X.removed[ce],pe=M.indexOf(J);pe>=0&&(M[pe]=null,w[pe].disconnect(J))}for(let ce=0;ce<X.added.length;ce++){const J=X.added[ce];let pe=M.indexOf(J);if(pe===-1){for(let le=0;le<w.length;le++)if(le>=M.length){M.push(J),pe=le;break}else if(M[le]===null){M[le]=J,pe=le;break}if(pe===-1)break}const Ne=w[pe];Ne&&Ne.connect(J)}}const F=new R,H=new R;function ee(X,ce,J){F.setFromMatrixPosition(ce.matrixWorld),H.setFromMatrixPosition(J.matrixWorld);const pe=F.distanceTo(H),Ne=ce.projectionMatrix.elements,le=J.projectionMatrix.elements,me=Ne[14]/(Ne[10]-1),Me=Ne[14]/(Ne[10]+1),ne=(Ne[9]+1)/Ne[5],ae=(Ne[9]-1)/Ne[5],oe=(Ne[8]-1)/Ne[0],ge=(le[8]+1)/le[0],_e=me*oe,je=me*ge,He=pe/(-oe+ge),ve=He*-oe;if(ce.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ve),X.translateZ(He),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ne[10]===-1)X.projectionMatrix.copy(ce.projectionMatrix),X.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Ue=me+He,z=Me+He,Ct=_e-ve,vt=je+(pe-ve),I=ne*Me/z*Ue,S=ae*Me/z*Ue;X.projectionMatrix.makePerspective(Ct,vt,I,S,Ue,z),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function K(X,ce){ce===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ce.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let ce=X.near,J=X.far;g.texture!==null&&(g.depthNear>0&&(ce=g.depthNear),g.depthFar>0&&(J=g.depthFar)),k.near=C.near=E.near=ce,k.far=C.far=E.far=J,(L!==k.near||B!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),L=k.near,B=k.far),k.layers.mask=X.layers.mask|6,E.layers.mask=k.layers.mask&-5,C.layers.mask=k.layers.mask&-3;const pe=X.parent,Ne=k.cameras;K(k,pe);for(let le=0;le<Ne.length;le++)K(Ne[le],pe);Ne.length===2?ee(k,E,C):k.projectionMatrix.copy(E.projectionMatrix),te(X,k,pe)};function te(X,ce,J){J===null?X.matrix.copy(ce.matrixWorld):(X.matrix.copy(J.matrixWorld),X.matrix.invert(),X.matrix.multiply(ce.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ce.projectionMatrix),X.projectionMatrixInverse.copy(ce.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Yr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(X){return m[X]};let Ce=null;function ct(X,ce){if(u=ce.getViewerPose(c||a),p=ce,u!==null){const J=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let pe=!1;J.length!==k.cameras.length&&(k.cameras.length=0,pe=!0);for(let Me=0;Me<J.length;Me++){const ne=J[Me];let ae=null;if(f!==null)ae=f.getViewport(ne);else{const ge=d.getViewSubImage(h,ne);ae=ge.viewport,Me===0&&(e.setRenderTargetTextures(_,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(_))}let oe=D[Me];oe===void 0&&(oe=new un,oe.layers.enable(Me),oe.viewport=new Pt,D[Me]=oe),oe.matrix.fromArray(ne.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(ne.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ae.x,ae.y,ae.width,ae.height),Me===0&&(k.matrix.copy(oe.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),pe===!0&&k.cameras.push(oe)}const Ne=s.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const Me=d.getDepthInformation(J[0]);Me&&Me.isValid&&Me.texture&&g.init(Me,s.renderState)}if(Ne&&Ne.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let Me=0;Me<J.length;Me++){const ne=J[Me].camera;if(ne){let ae=m[ne];ae||(ae=new Ud,m[ne]=ae);const oe=d.getCameraImage(ne);ae.sourceTexture=oe}}}}for(let J=0;J<w.length;J++){const pe=M[J],Ne=w[J];pe!==null&&Ne!==void 0&&Ne.update(pe,ce,c||a)}Ce&&Ce(X,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),p=null}const it=new H0;it.setAnimationLoop(ct),this.setAnimationLoop=function(X){Ce=X},this.dispose=function(){}}}const CA=new Qe,K0=new rt;K0.set(-1,0,0,0,1,0,0,0,1);function RA(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,u0(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,b,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&f(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,y,b):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ln&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ln&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=e.get(m),b=y.envMap,_=y.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(CA.makeRotationFromEuler(_)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(K0),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ln&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function IA(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,w){const M=w.program;n.uniformBlockBinding(_,M)}function c(_,w){let M=s[_.id];M===void 0&&(g(_),M=u(_),s[_.id]=M,_.addEventListener("dispose",y));const A=w.program;n.updateUBOMapping(_,A);const x=e.render.frame;r[_.id]!==x&&(h(_),r[_.id]=x)}function u(_){const w=d();_.__bindingPointIndex=w;const M=i.createBuffer(),A=_.__size,x=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,A,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,M),M}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const w=s[_.id],M=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let x=0,E=M.length;x<E;x++){const C=M[x];if(Array.isArray(C))for(let D=0,k=C.length;D<k;D++)f(C[D],x,D,A);else f(C,x,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,w,M,A){if(v(_,w,M,A)===!0){const x=_.__offset,E=_.value;if(Array.isArray(E)){let C=0;for(let D=0;D<E.length;D++){const k=E[D],L=m(k);p(k,_.__data,C),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(C+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,_.__data)}}function p(_,w,M){typeof _=="number"||typeof _=="boolean"?w[0]=_:_.isMatrix3?(w[0]=_.elements[0],w[1]=_.elements[1],w[2]=_.elements[2],w[3]=0,w[4]=_.elements[3],w[5]=_.elements[4],w[6]=_.elements[5],w[7]=0,w[8]=_.elements[6],w[9]=_.elements[7],w[10]=_.elements[8],w[11]=0):ArrayBuffer.isView(_)?w.set(new _.constructor(_.buffer,_.byteOffset,w.length)):_.toArray(w,M)}function v(_,w,M,A){const x=_.value,E=w+"_"+M;if(A[E]===void 0)return typeof x=="number"||typeof x=="boolean"?A[E]=x:ArrayBuffer.isView(x)?A[E]=x.slice():A[E]=x.clone(),!0;{const C=A[E];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return A[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function g(_){const w=_.uniforms;let M=0;const A=16;for(let E=0,C=w.length;E<C;E++){const D=Array.isArray(w[E])?w[E]:[w[E]];for(let k=0,L=D.length;k<L;k++){const B=D[k],O=Array.isArray(B.value)?B.value:[B.value];for(let U=0,N=O.length;U<N;U++){const F=O[U],H=m(F),ee=M%A,K=ee%H.boundary,te=ee+K;M+=K,te!==0&&A-te<H.storage&&(M+=A-te),B.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=H.storage}}}const x=M%A;return x>0&&(M+=A-x),_.__size=M,_.__cache={},this}function m(_){const w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(w.boundary=16,w.storage=_.byteLength):xe("WebGLRenderer: Unsupported uniform value type.",_),w}function y(_){const w=_.target;w.removeEventListener("dispose",y);const M=a.indexOf(w.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function b(){for(const _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:b}}const PA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ei=null;function DA(){return Ei===null&&(Ei=new ni(PA,16,16,ys,Pi),Ei.name="DFG_LUT",Ei.minFilter=zt,Ei.magFilter=zt,Ei.wrapS=Vn,Ei.wrapT=Vn,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}class sf{constructor(e={}){const{canvas:t=kg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Bn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const v=f,g=new Set([kc,Fc,mo]),m=new Set([Bn,ri,qr,$r,Uc,Nc]),y=new Uint32Array(4),b=new Int32Array(4),_=new R;let w=null,M=null;const A=[],x=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1,k=null,L=null,B=null,O=null;this._outputColorSpace=Rn;let U=0,N=0,F=null,H=-1,ee=null;const K=new Pt,te=new Pt;let Ce=null;const ct=new Oe(0);let it=0,X=t.width,ce=t.height,J=1,pe=null,Ne=null;const le=new Pt(0,0,X,ce),me=new Pt(0,0,X,ce);let Me=!1;const ne=new nr;let ae=!1,oe=!1;const ge=new Qe,_e=new R,je=new Pt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function Ue(){return F===null?J:1}let z=n;function Ct(T,G){return t.getContext(T,G)}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ic}`),t.addEventListener("webglcontextlost",Xt,!1),t.addEventListener("webglcontextrestored",Ft,!1),t.addEventListener("webglcontextcreationerror",bi,!1),z===null){const G="webgl2";if(z=Ct(G,T),z===null)throw Ct(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw Xe("WebGLRenderer: "+T.message),T}let vt,I,S,W,Y,j,fe,ye,Q,re,we,$e,Re,Ee,Ke,tt,ht,V,Se,se,Te,Le,he;function qe(){vt=new LE(z),vt.init(),Te=new Z0(z,vt),I=new EE(z,vt,e,Te),S=new SA(z,vt),I.reversedDepthBuffer&&h&&S.buffers.depth.setReversed(!0),L=z.createFramebuffer(),B=z.createFramebuffer(),O=z.createFramebuffer(),W=new OE(z),Y=new lA,j=new MA(z,vt,S,Y,I,Te,W),fe=new DE(C),ye=new zM(z),Le=new ME(z,ye),Q=new UE(z,ye,W,Le),re=new kE(z,Q,ye,Le,W),V=new FE(z,I,j),Ke=new TE(Y),we=new oA(C,fe,vt,I,Le,Ke),$e=new RA(C,Y),Re=new hA,Ee=new gA(vt),ht=new SE(C,fe,S,re,p,l),tt=new bA(C,re,I),he=new IA(z,W,I,S),Se=new wE(z,vt,W),se=new NE(z,vt,W),W.programs=we.programs,C.capabilities=I,C.extensions=vt,C.properties=Y,C.renderLists=Re,C.shadowMap=tt,C.state=S,C.info=W}qe(),v!==Bn&&(E=new zE(v,t.width,t.height,o,s,r));const Ve=new AA(C,z);this.xr=Ve,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=vt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=vt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(T){T!==void 0&&(J=T,this.setSize(X,ce,!1))},this.getSize=function(T){return T.set(X,ce)},this.setSize=function(T,G,Z=!0){if(Ve.isPresenting){xe("WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,ce=G,t.width=Math.floor(T*J),t.height=Math.floor(G*J),Z===!0&&(t.style.width=T+"px",t.style.height=G+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(X*J,ce*J).floor()},this.setDrawingBufferSize=function(T,G,Z){X=T,ce=G,J=Z,t.width=Math.floor(T*Z),t.height=Math.floor(G*Z),this.setViewport(0,0,T,G)},this.setEffects=function(T){if(v===Bn){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let G=0;G<T.length;G++)if(T[G].isOutputPass===!0){xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(K)},this.getViewport=function(T){return T.copy(le)},this.setViewport=function(T,G,Z,q){T.isVector4?le.set(T.x,T.y,T.z,T.w):le.set(T,G,Z,q),S.viewport(K.copy(le).multiplyScalar(J).round())},this.getScissor=function(T){return T.copy(me)},this.setScissor=function(T,G,Z,q){T.isVector4?me.set(T.x,T.y,T.z,T.w):me.set(T,G,Z,q),S.scissor(te.copy(me).multiplyScalar(J).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(T){S.setScissorTest(Me=T)},this.setOpaqueSort=function(T){pe=T},this.setTransparentSort=function(T){Ne=T},this.getClearColor=function(T){return T.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor(...arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha(...arguments)},this.clear=function(T=!0,G=!0,Z=!0){let q=0;if(T){let $=!1;if(F!==null){const Pe=F.texture.format;$=g.has(Pe)}if($){const Pe=F.texture.type,Be=m.has(Pe),Ie=ht.getClearColor(),We=ht.getClearAlpha(),Ye=Ie.r,ut=Ie.g,pt=Ie.b;Be?(y[0]=Ye,y[1]=ut,y[2]=pt,y[3]=We,z.clearBufferuiv(z.COLOR,0,y)):(b[0]=Ye,b[1]=ut,b[2]=pt,b[3]=We,z.clearBufferiv(z.COLOR,0,b))}else q|=z.COLOR_BUFFER_BIT}G&&(q|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&z.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),k=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Xt,!1),t.removeEventListener("webglcontextrestored",Ft,!1),t.removeEventListener("webglcontextcreationerror",bi,!1),ht.dispose(),Re.dispose(),Ee.dispose(),Y.dispose(),fe.dispose(),re.dispose(),Le.dispose(),he.dispose(),we.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",yf),Ve.removeEventListener("sessionend",xf),As.stop()};function Xt(T){T.preventDefault(),Za("WebGLRenderer: Context Lost."),D=!0}function Ft(){Za("WebGLRenderer: Context Restored."),D=!1;const T=W.autoReset,G=tt.enabled,Z=tt.autoUpdate,q=tt.needsUpdate,$=tt.type;qe(),W.autoReset=T,tt.enabled=G,tt.autoUpdate=Z,tt.needsUpdate=q,tt.type=$}function bi(T){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Si(T){const G=T.target;G.removeEventListener("dispose",Si),gv(G)}function gv(T){vv(T),Y.remove(T)}function vv(T){const G=Y.get(T).programs;G!==void 0&&(G.forEach(function(Z){we.releaseProgram(Z)}),T.isShaderMaterial&&we.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,Z,q,$,Pe){G===null&&(G=He);const Be=$.isMesh&&$.matrixWorld.determinantAffine()<0,Ie=xv(T,G,Z,q,$);S.setMaterial(q,Be);let We=Z.index,Ye=1;if(q.wireframe===!0){if(We=Q.getWireframeAttribute(Z),We===void 0)return;Ye=2}const ut=Z.drawRange,pt=Z.attributes.position;let Ze=ut.start*Ye,Dt=(ut.start+ut.count)*Ye;Pe!==null&&(Ze=Math.max(Ze,Pe.start*Ye),Dt=Math.min(Dt,(Pe.start+Pe.count)*Ye)),We!==null?(Ze=Math.max(Ze,0),Dt=Math.min(Dt,We.count)):pt!=null&&(Ze=Math.max(Ze,0),Dt=Math.min(Dt,pt.count));const Zt=Dt-Ze;if(Zt<0||Zt===1/0)return;Le.setup($,q,Ie,Z,We);let qt,Nt=Se;if(We!==null&&(qt=ye.get(We),Nt=se,Nt.setIndex(qt)),$.isMesh)q.wireframe===!0?(S.setLineWidth(q.wireframeLinewidth*Ue()),Nt.setMode(z.LINES)):Nt.setMode(z.TRIANGLES);else if($.isLine){let _n=q.linewidth;_n===void 0&&(_n=1),S.setLineWidth(_n*Ue()),$.isLineSegments?Nt.setMode(z.LINES):$.isLineLoop?Nt.setMode(z.LINE_LOOP):Nt.setMode(z.LINE_STRIP)}else $.isPoints?Nt.setMode(z.POINTS):$.isSprite&&Nt.setMode(z.TRIANGLES);if($.isBatchedMesh)if(vt.get("WEBGL_multi_draw"))Nt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const _n=$._multiDrawStarts,ke=$._multiDrawCounts,Hn=$._multiDrawCount,wt=We?ye.get(We).bytesPerElement:1,Kn=Y.get(q).currentProgram.getUniforms();for(let Mi=0;Mi<Hn;Mi++)Kn.setValue(z,"_gl_DrawID",Mi),Nt.render(_n[Mi]/wt,ke[Mi])}else if($.isInstancedMesh)Nt.renderInstances(Ze,Zt,$.count);else if(Z.isInstancedBufferGeometry){const _n=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ke=Math.min(Z.instanceCount,_n);Nt.renderInstances(Ze,Zt,ke)}else Nt.render(Ze,Zt)};function _f(T,G,Z){T.transparent===!0&&T.side===Ti&&T.forceSinglePass===!1?(T.side=Ln,T.needsUpdate=!0,Mo(T,G,Z),T.side=Yi,T.needsUpdate=!0,Mo(T,G,Z),T.side=Ti):Mo(T,G,Z)}this.compile=function(T,G,Z=null){Z===null&&(Z=T),M=Ee.get(Z),M.init(G),x.push(M),Z.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(M.pushLight($),$.castShadow&&M.pushShadow($))}),T!==Z&&T.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(M.pushLight($),$.castShadow&&M.pushShadow($))}),M.setupLights();const q=new Set;return T.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Pe=$.material;if(Pe)if(Array.isArray(Pe))for(let Be=0;Be<Pe.length;Be++){const Ie=Pe[Be];_f(Ie,Z,$),q.add(Ie)}else _f(Pe,Z,$),q.add(Pe)}),M=x.pop(),q},this.compileAsync=function(T,G,Z=null){const q=this.compile(T,G,Z);return new Promise($=>{function Pe(){if(q.forEach(function(Be){Y.get(Be).currentProgram.isReady()&&q.delete(Be)}),q.size===0){$(T);return}setTimeout(Pe,10)}vt.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let bh=null;function _v(T){bh&&bh(T)}function yf(){As.stop()}function xf(){As.start()}const As=new H0;As.setAnimationLoop(_v),typeof self<"u"&&As.setContext(self),this.setAnimationLoop=function(T){bh=T,Ve.setAnimationLoop(T),T===null?As.stop():As.start()},Ve.addEventListener("sessionstart",yf),Ve.addEventListener("sessionend",xf),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;k!==null&&k.renderStart(T,G);const Z=Ve.enabled===!0&&Ve.isPresenting===!0,q=E!==null&&(F===null||Z)&&E.begin(C,F);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(G),G=Ve.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,G,F),M=Ee.get(T,x.length),M.init(G),M.state.textureUnits=j.getTextureUnits(),x.push(M),ge.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ne.setFromProjectionMatrix(ge,qn,G.reversedDepth),oe=this.localClippingEnabled,ae=Ke.init(this.clippingPlanes,oe),w=Re.get(T,A.length),w.init(),A.push(w),Ve.enabled===!0&&Ve.isPresenting===!0){const Be=C.xr.getDepthSensingMesh();Be!==null&&Sh(Be,G,-1/0,C.sortObjects)}Sh(T,G,0,C.sortObjects),w.finish(),C.sortObjects===!0&&w.sort(pe,Ne,G.reversedDepth),ve=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,ve&&ht.addToRenderList(w,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&Ke.beginShadows();const $=M.state.shadowsArray;if(tt.render($,T,G),ae===!0&&Ke.endShadows(),(q&&E.hasRenderPass())===!1){const Be=w.opaque,Ie=w.transmissive;if(M.setupLights(),G.isArrayCamera){const We=G.cameras;if(Ie.length>0)for(let Ye=0,ut=We.length;Ye<ut;Ye++){const pt=We[Ye];Sf(Be,Ie,T,pt)}ve&&ht.render(T);for(let Ye=0,ut=We.length;Ye<ut;Ye++){const pt=We[Ye];bf(w,T,pt,pt.viewport)}}else Ie.length>0&&Sf(Be,Ie,T,G),ve&&ht.render(T),bf(w,T,G)}F!==null&&N===0&&(j.updateMultisampleRenderTarget(F),j.updateRenderTargetMipmap(F)),q&&E.end(C),T.isScene===!0&&T.onAfterRender(C,T,G),Le.resetDefaultState(),H=-1,ee=null,x.pop(),x.length>0?(M=x[x.length-1],j.setTextureUnits(M.state.textureUnits),ae===!0&&Ke.setGlobalState(C.clippingPlanes,M.state.camera)):M=null,A.pop(),A.length>0?w=A[A.length-1]:w=null,k!==null&&k.renderEnd()};function Sh(T,G,Z,q){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLightProbeGrid)M.pushLightProbeGrid(T);else if(T.isLight)M.pushLight(T),T.castShadow&&M.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ne.intersectsSprite(T)){q&&je.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ge);const Be=re.update(T),Ie=T.material;Ie.visible&&w.push(T,Be,Ie,Z,je.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ne.intersectsObject(T))){const Be=re.update(T),Ie=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),je.copy(T.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),je.copy(Be.boundingSphere.center)),je.applyMatrix4(T.matrixWorld).applyMatrix4(ge)),Array.isArray(Ie)){const We=Be.groups;for(let Ye=0,ut=We.length;Ye<ut;Ye++){const pt=We[Ye],Ze=Ie[pt.materialIndex];Ze&&Ze.visible&&w.push(T,Be,Ze,Z,je.z,pt)}}else Ie.visible&&w.push(T,Be,Ie,Z,je.z,null)}}const Pe=T.children;for(let Be=0,Ie=Pe.length;Be<Ie;Be++)Sh(Pe[Be],G,Z,q)}function bf(T,G,Z,q){const{opaque:$,transmissive:Pe,transparent:Be}=T;M.setupLightsView(Z),ae===!0&&Ke.setGlobalState(C.clippingPlanes,Z),q&&S.viewport(K.copy(q)),$.length>0&&So($,G,Z),Pe.length>0&&So(Pe,G,Z),Be.length>0&&So(Be,G,Z),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Sf(T,G,Z,q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[q.id]===void 0){const Ze=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[q.id]=new Zn(1,1,{generateMipmaps:!0,type:Ze?Pi:Bn,minFilter:Ai,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace})}const Pe=M.state.transmissionRenderTarget[q.id],Be=q.viewport||K;Pe.setSize(Be.z*C.transmissionResolutionScale,Be.w*C.transmissionResolutionScale);const Ie=C.getRenderTarget(),We=C.getActiveCubeFace(),Ye=C.getActiveMipmapLevel();C.setRenderTarget(Pe),C.getClearColor(ct),it=C.getClearAlpha(),it<1&&C.setClearColor(16777215,.5),C.clear(),ve&&ht.render(Z);const ut=C.toneMapping;C.toneMapping=gi;const pt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),M.setupLightsView(q),ae===!0&&Ke.setGlobalState(C.clippingPlanes,q),So(T,Z,q),j.updateMultisampleRenderTarget(Pe),j.updateRenderTargetMipmap(Pe),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Dt=0,Zt=G.length;Dt<Zt;Dt++){const qt=G[Dt],{object:Nt,geometry:_n,material:ke,group:Hn}=qt;if(ke.side===Ti&&Nt.layers.test(q.layers)){const wt=ke.side;ke.side=Ln,ke.needsUpdate=!0,Mf(Nt,Z,q,_n,ke,Hn),ke.side=wt,ke.needsUpdate=!0,Ze=!0}}Ze===!0&&(j.updateMultisampleRenderTarget(Pe),j.updateRenderTargetMipmap(Pe))}C.setRenderTarget(Ie,We,Ye),C.setClearColor(ct,it),pt!==void 0&&(q.viewport=pt),C.toneMapping=ut}function So(T,G,Z){const q=G.isScene===!0?G.overrideMaterial:null;for(let $=0,Pe=T.length;$<Pe;$++){const Be=T[$],{object:Ie,geometry:We,group:Ye}=Be;let ut=Be.material;ut.allowOverride===!0&&q!==null&&(ut=q),Ie.layers.test(Z.layers)&&Mf(Ie,G,Z,We,ut,Ye)}}function Mf(T,G,Z,q,$,Pe){T.onBeforeRender(C,G,Z,q,$,Pe),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(C,G,Z,q,T,Pe),$.transparent===!0&&$.side===Ti&&$.forceSinglePass===!1?($.side=Ln,$.needsUpdate=!0,C.renderBufferDirect(Z,G,q,$,T,Pe),$.side=Yi,$.needsUpdate=!0,C.renderBufferDirect(Z,G,q,$,T,Pe),$.side=Ti):C.renderBufferDirect(Z,G,q,$,T,Pe),T.onAfterRender(C,G,Z,q,$,Pe)}function Mo(T,G,Z){G.isScene!==!0&&(G=He);const q=Y.get(T),$=M.state.lights,Pe=M.state.shadowsArray,Be=$.state.version,Ie=we.getParameters(T,$.state,Pe,G,Z,M.state.lightProbeGridArray),We=we.getProgramCacheKey(Ie);let Ye=q.programs;q.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,q.fog=G.fog;const ut=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;q.envMap=fe.get(T.envMap||q.environment,ut),q.envMapRotation=q.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,Ye===void 0&&(T.addEventListener("dispose",Si),Ye=new Map,q.programs=Ye);let pt=Ye.get(We);if(pt!==void 0){if(q.currentProgram===pt&&q.lightsStateVersion===Be)return Ef(T,Ie),pt}else Ie.uniforms=we.getUniforms(T),k!==null&&T.isNodeMaterial&&k.build(T,Z,Ie),T.onBeforeCompile(Ie,C),pt=we.acquireProgram(Ie,We),Ye.set(We,pt),q.uniforms=Ie.uniforms;const Ze=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ze.clippingPlanes=Ke.uniform),Ef(T,Ie),q.needsLights=Sv(T),q.lightsStateVersion=Be,q.needsLights&&(Ze.ambientLightColor.value=$.state.ambient,Ze.lightProbe.value=$.state.probe,Ze.directionalLights.value=$.state.directional,Ze.directionalLightShadows.value=$.state.directionalShadow,Ze.spotLights.value=$.state.spot,Ze.spotLightShadows.value=$.state.spotShadow,Ze.rectAreaLights.value=$.state.rectArea,Ze.ltc_1.value=$.state.rectAreaLTC1,Ze.ltc_2.value=$.state.rectAreaLTC2,Ze.pointLights.value=$.state.point,Ze.pointLightShadows.value=$.state.pointShadow,Ze.hemisphereLights.value=$.state.hemi,Ze.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ze.spotLightMatrix.value=$.state.spotLightMatrix,Ze.spotLightMap.value=$.state.spotLightMap,Ze.pointShadowMatrix.value=$.state.pointShadowMatrix),q.lightProbeGrid=M.state.lightProbeGridArray.length>0,q.currentProgram=pt,q.uniformsList=null,pt}function wf(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=bl.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function Ef(T,G){const Z=Y.get(T);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.batchingColor=G.batchingColor,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.instancingMorph=G.instancingMorph,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function yv(T,G){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;_.setFromMatrixPosition(G.matrixWorld);for(let Z=0,q=T.length;Z<q;Z++){const $=T[Z];if($.texture!==null&&$.boundingBox.containsPoint(_))return $}return null}function xv(T,G,Z,q,$){G.isScene!==!0&&(G=He),j.resetTextureUnits();const Pe=G.fog,Be=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?G.environment:null,Ie=F===null?C.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:mt.workingColorSpace,We=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Ye=fe.get(q.envMap||Be,We),ut=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pt=!!Z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ze=!!Z.morphAttributes.position,Dt=!!Z.morphAttributes.normal,Zt=!!Z.morphAttributes.color;let qt=gi;q.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(qt=C.toneMapping);const Nt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,_n=Nt!==void 0?Nt.length:0,ke=Y.get(q),Hn=M.state.lights;if(ae===!0&&(oe===!0||T!==ee)){const kt=T===ee&&q.id===H;Ke.setState(q,T,kt)}let wt=!1;q.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Hn.state.version||ke.outputColorSpace!==Ie||$.isBatchedMesh&&ke.batching===!1||!$.isBatchedMesh&&ke.batching===!0||$.isBatchedMesh&&ke.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&ke.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&ke.instancing===!1||!$.isInstancedMesh&&ke.instancing===!0||$.isSkinnedMesh&&ke.skinning===!1||!$.isSkinnedMesh&&ke.skinning===!0||$.isInstancedMesh&&ke.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ke.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&ke.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&ke.instancingMorph===!1&&$.morphTexture!==null||ke.envMap!==Ye||q.fog===!0&&ke.fog!==Pe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Ke.numPlanes||ke.numIntersection!==Ke.numIntersection)||ke.vertexAlphas!==ut||ke.vertexTangents!==pt||ke.morphTargets!==Ze||ke.morphNormals!==Dt||ke.morphColors!==Zt||ke.toneMapping!==qt||ke.morphTargetsCount!==_n||!!ke.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(wt=!0):(wt=!0,ke.__version=q.version);let Kn=ke.currentProgram;wt===!0&&(Kn=Mo(q,G,$),k&&q.isNodeMaterial&&k.onUpdateProgram(q,Kn,ke));let Mi=!1,es=!1,ur=!1;const Ot=Kn.getUniforms(),Kt=ke.uniforms;if(S.useProgram(Kn.program)&&(Mi=!0,es=!0,ur=!0),q.id!==H&&(H=q.id,es=!0),ke.needsLights){const kt=yv(M.state.lightProbeGridArray,$);ke.lightProbeGrid!==kt&&(ke.lightProbeGrid=kt,es=!0)}if(Mi||ee!==T){S.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ot.setValue(z,"projectionMatrix",T.projectionMatrix),Ot.setValue(z,"viewMatrix",T.matrixWorldInverse);const ns=Ot.map.cameraPosition;ns!==void 0&&ns.setValue(z,_e.setFromMatrixPosition(T.matrixWorld)),I.logarithmicDepthBuffer&&Ot.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ot.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),ee!==T&&(ee=T,es=!0,ur=!0)}if(ke.needsLights&&(Hn.state.directionalShadowMap.length>0&&Ot.setValue(z,"directionalShadowMap",Hn.state.directionalShadowMap,j),Hn.state.spotShadowMap.length>0&&Ot.setValue(z,"spotShadowMap",Hn.state.spotShadowMap,j),Hn.state.pointShadowMap.length>0&&Ot.setValue(z,"pointShadowMap",Hn.state.pointShadowMap,j)),$.isSkinnedMesh){Ot.setOptional(z,$,"bindMatrix"),Ot.setOptional(z,$,"bindMatrixInverse");const kt=$.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),Ot.setValue(z,"boneTexture",kt.boneTexture,j))}$.isBatchedMesh&&(Ot.setOptional(z,$,"batchingTexture"),Ot.setValue(z,"batchingTexture",$._matricesTexture,j),Ot.setOptional(z,$,"batchingIdTexture"),Ot.setValue(z,"batchingIdTexture",$._indirectTexture,j),Ot.setOptional(z,$,"batchingColorTexture"),$._colorsTexture!==null&&Ot.setValue(z,"batchingColorTexture",$._colorsTexture,j));const ts=Z.morphAttributes;if((ts.position!==void 0||ts.normal!==void 0||ts.color!==void 0)&&V.update($,Z,Kn),(es||ke.receiveShadow!==$.receiveShadow)&&(ke.receiveShadow=$.receiveShadow,Ot.setValue(z,"receiveShadow",$.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&G.environment!==null&&(Kt.envMapIntensity.value=G.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=DA()),es){if(Ot.setValue(z,"toneMappingExposure",C.toneMappingExposure),ke.needsLights&&bv(Kt,ur),Pe&&q.fog===!0&&$e.refreshFogUniforms(Kt,Pe),$e.refreshMaterialUniforms(Kt,q,J,ce,M.state.transmissionRenderTarget[T.id]),ke.needsLights&&ke.lightProbeGrid){const kt=ke.lightProbeGrid;Kt.probesSH.value=kt.texture,Kt.probesMin.value.copy(kt.boundingBox.min),Kt.probesMax.value.copy(kt.boundingBox.max),Kt.probesResolution.value.copy(kt.resolution)}bl.upload(z,wf(ke),Kt,j)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(bl.upload(z,wf(ke),Kt,j),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ot.setValue(z,"center",$.center),Ot.setValue(z,"modelViewMatrix",$.modelViewMatrix),Ot.setValue(z,"normalMatrix",$.normalMatrix),Ot.setValue(z,"modelMatrix",$.matrixWorld),q.uniformsGroups!==void 0){const kt=q.uniformsGroups;for(let ns=0,dr=kt.length;ns<dr;ns++){const Tf=kt[ns];he.update(Tf,Kn),he.bind(Tf,Kn)}}return Kn}function bv(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function Sv(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(T,G,Z){const q=Y.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Y.get(T.texture).__webglTexture=G,Y.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Z,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,G){const Z=Y.get(T);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(T,G=0,Z=0){F=T,U=G,N=Z;let q=null,$=!1,Pe=!1;if(T){const Ie=Y.get(T);if(Ie.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(z.FRAMEBUFFER,Ie.__webglFramebuffer),K.copy(T.viewport),te.copy(T.scissor),Ce=T.scissorTest,S.viewport(K),S.scissor(te),S.setScissorTest(Ce),H=-1;return}else if(Ie.__webglFramebuffer===void 0)j.setupRenderTarget(T);else if(Ie.__hasExternalTextures)j.rebindTextures(T,Y.get(T.texture).__webglTexture,Y.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ut=T.depthTexture;if(Ie.__boundDepthTexture!==ut){if(ut!==null&&Y.has(ut)&&(T.width!==ut.image.width||T.height!==ut.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(T)}}const We=T.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Pe=!0);const Ye=Y.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ye[G])?q=Ye[G][Z]:q=Ye[G],$=!0):T.samples>0&&j.useMultisampledRTT(T)===!1?q=Y.get(T).__webglMultisampledFramebuffer:Array.isArray(Ye)?q=Ye[Z]:q=Ye,K.copy(T.viewport),te.copy(T.scissor),Ce=T.scissorTest}else K.copy(le).multiplyScalar(J).floor(),te.copy(me).multiplyScalar(J).floor(),Ce=Me;if(Z!==0&&(q=L),S.bindFramebuffer(z.FRAMEBUFFER,q)&&S.drawBuffers(T,q),S.viewport(K),S.scissor(te),S.setScissorTest(Ce),$){const Ie=Y.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ie.__webglTexture,Z)}else if(Pe){const Ie=G;for(let We=0;We<T.textures.length;We++){const Ye=Y.get(T.textures[We]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+We,Ye.__webglTexture,Z,Ie)}}else if(T!==null&&Z!==0){const Ie=Y.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ie.__webglTexture,Z)}H=-1},this.readRenderTargetPixels=function(T,G,Z,q,$,Pe,Be,Ie=0){if(!(T&&T.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=Y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Be!==void 0&&(We=We[Be]),We){S.bindFramebuffer(z.FRAMEBUFFER,We);try{const Ye=T.textures[Ie],ut=Ye.format,pt=Ye.type;if(T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ie),!I.textureFormatReadable(ut)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(pt)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-q&&Z>=0&&Z<=T.height-$&&z.readPixels(G,Z,q,$,Te.convert(ut),Te.convert(pt),Pe)}finally{const Ye=F!==null?Y.get(F).__webglFramebuffer:null;S.bindFramebuffer(z.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(T,G,Z,q,$,Pe,Be,Ie=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=Y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Be!==void 0&&(We=We[Be]),We)if(G>=0&&G<=T.width-q&&Z>=0&&Z<=T.height-$){S.bindFramebuffer(z.FRAMEBUFFER,We);const Ye=T.textures[Ie],ut=Ye.format,pt=Ye.type;if(T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ie),!I.textureFormatReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ze),z.bufferData(z.PIXEL_PACK_BUFFER,Pe.byteLength,z.STREAM_READ),z.readPixels(G,Z,q,$,Te.convert(ut),Te.convert(pt),0);const Dt=F!==null?Y.get(F).__webglFramebuffer:null;S.bindFramebuffer(z.FRAMEBUFFER,Dt);const Zt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await zx(z,Zt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ze),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Pe),z.deleteBuffer(Ze),z.deleteSync(Zt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,G=null,Z=0){const q=Math.pow(2,-Z),$=Math.floor(T.image.width*q),Pe=Math.floor(T.image.height*q),Be=G!==null?G.x:0,Ie=G!==null?G.y:0;j.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,Z,0,0,Be,Ie,$,Pe),S.unbindTexture()},this.copyTextureToTexture=function(T,G,Z=null,q=null,$=0,Pe=0){let Be,Ie,We,Ye,ut,pt,Ze,Dt,Zt;const qt=T.isCompressedTexture?T.mipmaps[Pe]:T.image;if(Z!==null)Be=Z.max.x-Z.min.x,Ie=Z.max.y-Z.min.y,We=Z.isBox3?Z.max.z-Z.min.z:1,Ye=Z.min.x,ut=Z.min.y,pt=Z.isBox3?Z.min.z:0;else{const Kt=Math.pow(2,-$);Be=Math.floor(qt.width*Kt),Ie=Math.floor(qt.height*Kt),T.isDataArrayTexture?We=qt.depth:T.isData3DTexture?We=Math.floor(qt.depth*Kt):We=1,Ye=0,ut=0,pt=0}q!==null?(Ze=q.x,Dt=q.y,Zt=q.z):(Ze=0,Dt=0,Zt=0);const Nt=Te.convert(G.format),_n=Te.convert(G.type);let ke;G.isData3DTexture?(j.setTexture3D(G,0),ke=z.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(j.setTexture2DArray(G,0),ke=z.TEXTURE_2D_ARRAY):(j.setTexture2D(G,0),ke=z.TEXTURE_2D),S.activeTexture(z.TEXTURE0),S.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),S.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),S.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment);const Hn=S.getParameter(z.UNPACK_ROW_LENGTH),wt=S.getParameter(z.UNPACK_IMAGE_HEIGHT),Kn=S.getParameter(z.UNPACK_SKIP_PIXELS),Mi=S.getParameter(z.UNPACK_SKIP_ROWS),es=S.getParameter(z.UNPACK_SKIP_IMAGES);S.pixelStorei(z.UNPACK_ROW_LENGTH,qt.width),S.pixelStorei(z.UNPACK_IMAGE_HEIGHT,qt.height),S.pixelStorei(z.UNPACK_SKIP_PIXELS,Ye),S.pixelStorei(z.UNPACK_SKIP_ROWS,ut),S.pixelStorei(z.UNPACK_SKIP_IMAGES,pt);const ur=T.isDataArrayTexture||T.isData3DTexture,Ot=G.isDataArrayTexture||G.isData3DTexture;if(T.isDepthTexture){const Kt=Y.get(T),ts=Y.get(G),kt=Y.get(Kt.__renderTarget),ns=Y.get(ts.__renderTarget);S.bindFramebuffer(z.READ_FRAMEBUFFER,kt.__webglFramebuffer),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,ns.__webglFramebuffer);for(let dr=0;dr<We;dr++)ur&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Y.get(T).__webglTexture,$,pt+dr),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Y.get(G).__webglTexture,Pe,Zt+dr)),z.blitFramebuffer(Ye,ut,Be,Ie,Ze,Dt,Be,Ie,z.DEPTH_BUFFER_BIT,z.NEAREST);S.bindFramebuffer(z.READ_FRAMEBUFFER,null),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if($!==0||T.isRenderTargetTexture||Y.has(T)){const Kt=Y.get(T),ts=Y.get(G);S.bindFramebuffer(z.READ_FRAMEBUFFER,B),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,O);for(let kt=0;kt<We;kt++)ur?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Kt.__webglTexture,$,pt+kt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Kt.__webglTexture,$),Ot?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ts.__webglTexture,Pe,Zt+kt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ts.__webglTexture,Pe),$!==0?z.blitFramebuffer(Ye,ut,Be,Ie,Ze,Dt,Be,Ie,z.COLOR_BUFFER_BIT,z.NEAREST):Ot?z.copyTexSubImage3D(ke,Pe,Ze,Dt,Zt+kt,Ye,ut,Be,Ie):z.copyTexSubImage2D(ke,Pe,Ze,Dt,Ye,ut,Be,Ie);S.bindFramebuffer(z.READ_FRAMEBUFFER,null),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ot?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(ke,Pe,Ze,Dt,Zt,Be,Ie,We,Nt,_n,qt.data):G.isCompressedArrayTexture?z.compressedTexSubImage3D(ke,Pe,Ze,Dt,Zt,Be,Ie,We,Nt,qt.data):z.texSubImage3D(ke,Pe,Ze,Dt,Zt,Be,Ie,We,Nt,_n,qt):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Pe,Ze,Dt,Be,Ie,Nt,_n,qt.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Pe,Ze,Dt,qt.width,qt.height,Nt,qt.data):z.texSubImage2D(z.TEXTURE_2D,Pe,Ze,Dt,Be,Ie,Nt,_n,qt);S.pixelStorei(z.UNPACK_ROW_LENGTH,Hn),S.pixelStorei(z.UNPACK_IMAGE_HEIGHT,wt),S.pixelStorei(z.UNPACK_SKIP_PIXELS,Kn),S.pixelStorei(z.UNPACK_SKIP_ROWS,Mi),S.pixelStorei(z.UNPACK_SKIP_IMAGES,es),Pe===0&&G.generateMipmaps&&z.generateMipmap(ke),S.unbindTexture()},this.initRenderTarget=function(T){Y.get(T).__webglFramebuffer===void 0&&j.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?j.setTextureCube(T,0):T.isData3DTexture?j.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?j.setTexture2DArray(T,0):j.setTexture2D(T,0),S.unbindTexture()},this.resetState=function(){U=0,N=0,F=null,S.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}const LA=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:md,AddEquation:ds,AddOperation:wg,AdditiveAnimationBlendMode:Ed,AdditiveBlending:Au,AgXToneMapping:Pc,AlphaFormat:Md,AlwaysCompare:Og,AlwaysDepth:Pl,AlwaysStencilFunc:Du,AmbientLight:R0,AnimationAction:B0,AnimationClip:eo,AnimationLoader:DS,AnimationMixer:lM,AnimationObjectGroup:aM,AnimationUtils:CS,ArcCurve:e0,ArrayCamera:N0,ArrowHelper:DM,AttachedBindMode:Iu,Audio:F0,AudioAnalyser:KS,AudioContext:jd,AudioListener:$S,AudioLoader:HS,AxesHelper:LM,BackSide:Ln,BasicDepthPacking:Rg,BasicShadowMap:$y,BatchedMesh:Yg,BezierInterpolant:M0,Bone:Dd,BooleanKeyframeTrack:or,Box2:z0,Box3:En,Box3Helper:IM,BoxGeometry:Ms,BoxHelper:RM,BufferAttribute:Ut,BufferGeometry:ot,BufferGeometryLoader:L0,ByteType:yd,Cache:Ci,Camera:dh,CameraHelper:CM,CanvasTexture:$b,CapsuleGeometry:Jc,CatmullRomCurve3:t0,CineonToneMapping:pd,CircleGeometry:jc,ClampToEdgeWrapping:Vn,Clock:mM,Color:Oe,ColorKeyframeTrack:$d,ColorManagement:mt,Compatibility:Nx,CompressedArrayTexture:Xb,CompressedCubeTexture:qb,CompressedTexture:Kc,CompressedTextureLoader:LS,ConeGeometry:_o,ConstantAlphaFactor:bg,ConstantColorFactor:yg,Controls:G0,CubeCamera:U0,CubeDepthTexture:jg,CubeReflectionMapping:Ii,CubeRefractionMapping:_s,CubeTexture:go,CubeTextureLoader:US,CubeUVReflectionMapping:ea,CubicBezierCurve:Od,CubicBezierCurve3:n0,CubicInterpolant:b0,CullFaceBack:Tu,CullFaceFront:sg,CullFaceFrontBack:qy,CullFaceNone:ig,Curve:xi,CurvePath:s0,CustomBlending:rg,CustomToneMapping:gd,CylinderGeometry:vo,Cylindrical:gM,Data3DTexture:Hc,DataArrayTexture:Gc,DataTexture:ni,DataTextureLoader:NS,DataUtils:vb,DecrementStencilOp:dx,DecrementWrapStencilOp:px,DefaultLoadingManager:cr,DepthFormat:Di,DepthStencilFormat:fs,DepthTexture:ir,DetachedBindMode:Eg,DirectionalLight:C0,DirectionalLightHelper:AM,DiscreteInterpolant:S0,DodecahedronGeometry:Qc,DoubleSide:Ti,DstAlphaFactor:pg,DstColorFactor:gg,DynamicCopyUsage:Rx,DynamicDrawUsage:Mx,DynamicReadUsage:Tx,EdgesGeometry:Qg,EllipseCurve:eh,EqualCompare:Lg,EqualDepth:Ll,EqualStencilFunc:_x,EquirectangularReflectionMapping:Ta,EquirectangularRefractionMapping:Aa,Euler:vi,EventDispatcher:yi,ExternalTexture:Ud,ExtrudeGeometry:th,FileLoader:Ki,Float16BufferAttribute:wb,Float32BufferAttribute:Fe,FloatType:Pn,Fog:qc,FogExp2:Xc,FramebufferTexture:Wb,FrontSide:Yi,Frustum:nr,FrustumArray:Zc,GLBufferAttribute:fM,GLSL1:Px,GLSL3:Lu,GreaterCompare:Ug,GreaterDepth:Nl,GreaterEqualCompare:Vc,GreaterEqualDepth:Ul,GreaterEqualStencilFunc:Sx,GreaterStencilFunc:xx,GridHelper:EM,Group:Br,HTMLTexture:Yb,HalfFloatType:Pi,HemisphereLight:E0,HemisphereLightHelper:wM,IcosahedronGeometry:nh,ImageBitmapLoader:GS,ImageLoader:to,ImageUtils:Vg,IncrementStencilOp:ux,IncrementWrapStencilOp:fx,InstancedBufferAttribute:Zr,InstancedBufferGeometry:D0,InstancedInterleavedBuffer:dM,InstancedMesh:$g,Int16BufferAttribute:Sb,Int32BufferAttribute:Mb,Int8BufferAttribute:yb,IntType:Lc,InterleavedBuffer:$c,InterleavedBufferAttribute:tr,Interpolant:na,InterpolateBezier:Pu,InterpolateDiscrete:Ha,InterpolateLinear:fc,InterpolateSmooth:yl,InterpolationSamplingMode:Ux,InterpolationSamplingType:Lx,InvertStencilOp:mx,KeepStencilOp:Gs,KeyframeTrack:li,LOD:Xg,LatheGeometry:ih,Layers:Wc,LessCompare:Dg,LessDepth:Dl,LessEqualCompare:zc,LessEqualDepth:Qs,LessEqualStencilFunc:yx,LessStencilFunc:vx,Light:Es,LightProbe:P0,Line:bs,Line3:yM,LineBasicMaterial:Un,LineCurve:Fd,LineCurve3:i0,LineDashedMaterial:_0,LineLoop:Zg,LineSegments:Ni,LinearFilter:zt,LinearInterpolant:qd,LinearMipMapLinearFilter:jy,LinearMipMapNearestFilter:Jy,LinearMipmapLinearFilter:Ai,LinearMipmapNearestFilter:Ca,LinearSRGBColorSpace:Xa,LinearToneMapping:dd,LinearTransfer:qa,Loader:Gn,LoaderUtils:ku,LoadingManager:Zd,LoopOnce:Tg,LoopPingPong:Cg,LoopRepeat:Ag,MOUSE:Zs,Material:mn,MaterialBlending:Yy,MaterialLoader:fh,MathUtils:zg,Matrix2:Vu,Matrix3:rt,Matrix4:Qe,MaxEquation:cg,Mesh:Qt,MeshBasicMaterial:Qi,MeshDepthMaterial:Wd,MeshDistanceMaterial:Xd,MeshLambertMaterial:g0,MeshMatcapMaterial:v0,MeshNormalMaterial:m0,MeshPhongMaterial:f0,MeshPhysicalMaterial:d0,MeshStandardMaterial:Hd,MeshToonMaterial:p0,MinEquation:lg,MirroredRepeatWrapping:za,MixOperation:Mg,MultiplyBlending:Ru,MultiplyOperation:po,NearestFilter:jt,NearestMipMapLinearFilter:Ky,NearestMipMapNearestFilter:Zy,NearestMipmapLinearFilter:Fr,NearestMipmapNearestFilter:_d,NeutralToneMapping:vd,NeverCompare:Pg,NeverDepth:Il,NeverStencilFunc:gx,NoBlending:Ri,NoColorSpace:Wi,NoNormalPacking:ax,NoToneMapping:gi,NormalAnimationBlendMode:Bc,NormalBlending:Ks,NormalGAPacking:lx,NormalRGPacking:ox,NotEqualCompare:Ng,NotEqualDepth:Ol,NotEqualStencilFunc:bx,NumberKeyframeTrack:hh,Object3D:Mt,ObjectLoader:zS,ObjectSpaceNormalMap:Ig,OctahedronGeometry:xo,OneFactor:ug,OneMinusConstantAlphaFactor:Sg,OneMinusConstantColorFactor:xg,OneMinusDstAlphaFactor:mg,OneMinusDstColorFactor:vg,OneMinusSrcAlphaFactor:Rl,OneMinusSrcColorFactor:fg,OrthographicCamera:ia,PCFShadowMap:Ea,PCFSoftShadowMap:Al,PMREMGenerator:Hu,Path:Ka,PerspectiveCamera:un,Plane:Hi,PlaneGeometry:ta,PlaneHelper:PM,PointLight:A0,PointLightHelper:SM,Points:Kg,PointsMaterial:Ld,PolarGridHelper:TM,PolyhedronGeometry:ws,PositionalAudio:ZS,PropertyBinding:Et,PropertyMixer:k0,QuadraticBezierCurve:kd,QuadraticBezierCurve3:Bd,Quaternion:fn,QuaternionKeyframeTrack:uh,QuaternionLinearInterpolant:w0,R11_EAC_Format:Wl,RED_GREEN_RGTC2_Format:Ga,RED_RGTC1_Format:hc,REVISION:Ic,RG11_EAC_Format:Va,RGBADepthPacking:ix,RGBAFormat:Dn,RGBAIntegerFormat:kc,RGBA_ASTC_10x10_Format:sc,RGBA_ASTC_10x5_Format:tc,RGBA_ASTC_10x6_Format:nc,RGBA_ASTC_10x8_Format:ic,RGBA_ASTC_12x10_Format:rc,RGBA_ASTC_12x12_Format:ac,RGBA_ASTC_4x4_Format:$l,RGBA_ASTC_5x4_Format:Yl,RGBA_ASTC_5x5_Format:Zl,RGBA_ASTC_6x5_Format:Kl,RGBA_ASTC_6x6_Format:Jl,RGBA_ASTC_8x5_Format:jl,RGBA_ASTC_8x6_Format:Ql,RGBA_ASTC_8x8_Format:ec,RGBA_BPTC_Format:oc,RGBA_ETC2_EAC_Format:Hl,RGBA_PVRTC_2BPPV1_Format:zl,RGBA_PVRTC_4BPPV1_Format:Bl,RGBA_S3TC_DXT1_Format:Ia,RGBA_S3TC_DXT3_Format:Pa,RGBA_S3TC_DXT5_Format:Da,RGBDepthPacking:sx,RGBFormat:wd,RGBIntegerFormat:Qy,RGB_BPTC_SIGNED_Format:lc,RGB_BPTC_UNSIGNED_Format:cc,RGB_ETC1_Format:Vl,RGB_ETC2_Format:Gl,RGB_PVRTC_2BPPV1_Format:kl,RGB_PVRTC_4BPPV1_Format:Fl,RGB_S3TC_DXT1_Format:Ra,RGDepthPacking:rx,RGFormat:ys,RGIntegerFormat:Fc,RawShaderMaterial:Gd,Ray:ar,Raycaster:pM,RectAreaLight:I0,RedFormat:Oc,RedIntegerFormat:mo,ReinhardToneMapping:fd,RenderTarget:Ad,RenderTarget3D:cM,RepeatWrapping:Ba,ReplaceStencilOp:hx,ReverseSubtractEquation:og,RingGeometry:sh,SIGNED_R11_EAC_Format:Xl,SIGNED_RED_GREEN_RGTC2_Format:dc,SIGNED_RED_RGTC1_Format:uc,SIGNED_RG11_EAC_Format:ql,SRGBColorSpace:Rn,SRGBTransfer:Rt,Scene:Cd,ShaderChunk:et,ShaderLib:ei,ShaderMaterial:ai,ShadowMaterial:h0,Shape:yo,ShapeGeometry:rh,ShapePath:UM,ShapeUtils:pi,ShortType:xd,Skeleton:Yc,SkeletonHelper:bM,SkinnedMesh:qg,Source:ps,Sphere:pn,SphereGeometry:bo,Spherical:zu,SphericalHarmonics3:Jd,SplineCurve:zd,SpotLight:T0,SpotLightHelper:xM,Sprite:Wg,SpriteMaterial:Pd,SrcAlphaFactor:Cl,SrcAlphaSaturateFactor:_g,SrcColorFactor:dg,StaticCopyUsage:Cx,StaticDrawUsage:$a,StaticReadUsage:Ex,StereoCamera:WS,StreamCopyUsage:Ix,StreamDrawUsage:wx,StreamReadUsage:Ax,StringKeyframeTrack:lr,SubtractEquation:ag,SubtractiveBlending:Cu,TOUCH:Ws,TangentSpaceNormalMap:Zi,TetrahedronGeometry:ah,Texture:Wt,TextureLoader:OS,TextureUtils:BM,Timer:O0,TimestampQuery:Dx,TorusGeometry:oh,TorusKnotGeometry:lh,Triangle:zn,TriangleFanDrawMode:nx,TriangleStripDrawMode:tx,TrianglesDrawMode:ex,TubeGeometry:ch,UVMapping:Dc,Uint16BufferAttribute:Rd,Uint32BufferAttribute:Id,Uint8BufferAttribute:xb,Uint8ClampedBufferAttribute:bb,Uniform:tf,UniformsGroup:uM,UniformsLib:be,UniformsUtils:Vd,UnsignedByteType:Bn,UnsignedInt101111Type:Sd,UnsignedInt248Type:$r,UnsignedInt5999Type:bd,UnsignedIntType:ri,UnsignedShort4444Type:Uc,UnsignedShort5551Type:Nc,UnsignedShortType:qr,VSMShadowMap:Or,Vector2:ie,Vector3:R,Vector4:Pt,VectorKeyframeTrack:Yd,VideoFrameTexture:Hb,VideoTexture:Jg,WebGL3DRenderTarget:lb,WebGLArrayRenderTarget:ob,WebGLCoordinateSystem:qn,WebGLCubeRenderTarget:nf,WebGLRenderTarget:Zn,WebGLRenderer:sf,WebGLUtils:Z0,WebGPUCoordinateSystem:er,WebXRController:xl,WireframeGeometry:c0,WrapAroundEnding:Wa,ZeroCurvatureEnding:Xs,ZeroFactor:hg,ZeroSlopeEnding:qs,ZeroStencilOp:cx,createCanvasElement:kg,error:Xe,getConsoleFunction:Bx,log:Za,setConsoleFunction:kx,warn:xe,warnOnce:gs},Symbol.toStringTag,{value:"Module"})),Ts=i=>{const e=Nr(i),t={set:n=>{t.current=n,e.set(n)},subscribe:e.subscribe,update:n=>{const s=n(t.current);t.current=s,e.set(s)},current:i};return t},Ys=(i,e)=>({subscribe:td(i,e).subscribe,set:e,update:n=>e(n(ze(i))),get current(){return ze(i)}}),rf=i=>{const{subscribe:e}=td(i);return{subscribe:e,get current(){return ze(i)}}},UA=i=>{const e=i.getBoundingClientRect();let t=mi({width:e.width,height:e.height}),n=0,s=0,r=0,a=0,o=!0,l=!1,c;const u=()=>{l=!0,c!==void 0&&clearTimeout(c),c=setTimeout(()=>{l=!1,c=void 0},250)},d=()=>{u()},h=new ResizeObserver(()=>{o=!0,u();const p=i.getBoundingClientRect();de(t,{width:p.width,height:p.height})});function f(){if(!o&&!l)return!1;const{clientWidth:p,clientHeight:v}=i;if(!o&&p===s&&v===n)return!1;s=p,n=v,o=!1;const g=i.getBoundingClientRect();return de(t,{width:g.width,height:g.height}),P(t).width===r&&P(t).height===a?!1:(r=P(t).width,a=P(t).height,!0)}return vs(()=>(h.observe(i),window.addEventListener("resize",d,{passive:!0}),()=>{h.disconnect(),window.removeEventListener("resize",d),c!==void 0&&clearTimeout(c)})),{size:{get current(){return P(t)}},shouldUpdateSize:f}},NA=i=>{const e=typeof i=="function"?i():i,{dom:t,canvas:n}=e,{size:s,shouldUpdateSize:r}=UA(t),a={dom:t,canvas:n,size:rf(()=>s.current),shouldUpdateSize:r};return _i("threlte-dom-context",a),a},gh=()=>{const i=oi("threlte-dom-context");if(!i)throw new Error("useDOM can only be used in a child component to <Canvas>.");return i};class hs{allVertices=new Map;isolatedVertices=new Map;connectedVertices=new Map;sortedConnectedValues=[];needsSort=!1;listeners=new Map;emit(e,t){const n=this.listeners.get(e);if(n)for(const s of n)s(t)}on(e,t){let n=this.listeners.get(e);n||(n=new Set,this.listeners.set(e,n)),n.add(t)}off(e,t){this.listeners.get(e)?.delete(t)}get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices.get(e);t&&(this.isolatedVertices.set(e,t),this.connectedVertices.delete(e))}moveToConnected(e){const t=this.isolatedVertices.get(e);t&&(this.connectedVertices.set(e,t),this.isolatedVertices.delete(e))}getKey=e=>typeof e=="object"?e.key:e;add(e,t,n){let s=this.allVertices.get(e);if(s&&s.value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);s?s.value===void 0&&(s.value=t):(s={value:t,previous:new Set,next:new Set},this.allVertices.set(e,s));const r=s.next.size>0||s.previous.size>0;if(!n?.after&&!n?.before&&!r){this.isolatedVertices.set(e,s),this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices.set(e,s);if(n?.after){const a=Array.isArray(n.after)?n.after:[n.after];for(const o of a)s.previous.add(this.getKey(o));for(const o of a){const l=this.getKey(o),c=this.allVertices.get(l);if(c)c.next.add(e),this.moveToConnected(l);else{const u={value:void 0,previous:new Set,next:new Set([e])};this.allVertices.set(l,u),this.connectedVertices.set(l,u)}}}if(n?.before){const a=Array.isArray(n.before)?n.before:[n.before];for(const o of a)s.next.add(this.getKey(o));for(const o of a){const l=this.getKey(o),c=this.allVertices.get(l);if(c)c.previous.add(e),this.moveToConnected(l);else{const u={value:void 0,previous:new Set([e]),next:new Set};this.allVertices.set(l,u),this.connectedVertices.set(l,u)}}}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices.get(t)){this.isolatedVertices.delete(t),this.allVertices.delete(t),this.emit("node:removed",{key:t,type:"isolated"});return}const s=this.connectedVertices.get(t);if(!(!s||s.value===void 0)){for(const r of s.next){const a=this.connectedVertices.get(r);a&&(a.previous.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}for(const r of s.previous){const a=this.connectedVertices.get(r);a&&(a.next.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}this.connectedVertices.delete(t),this.allVertices.delete(t),this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0}}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((n,s)=>{t.push(e(n,s))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);for(const n of this.isolatedVertices.values())n.value!==void 0&&e(n.value,t++)}getValueByKey(e){return this.allVertices.get(e)?.value}sort(){const e=new Map,t=[],n=[];for(const[r,a]of this.connectedVertices)a.value!==void 0&&e.set(r,0);for(const[r]of e){const a=this.connectedVertices.get(r);for(const o of a.next)e.has(o)&&e.set(o,e.get(o)+1)}for(const[r,a]of e)a===0&&t.push(r);let s=0;for(;s<t.length;){const r=t[s++];n.push(r);const a=this.connectedVertices.get(r)?.next;if(a)for(const o of a){const l=(e.get(o)||0)-1;e.set(o,l),l===0&&t.push(o)}}if(n.length!==e.size)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");this.sortedConnectedValues.length=0;for(let r=0;r<n.length;r++){const a=this.connectedVertices.get(n[r]).value;a!==void 0&&this.sortedConnectedValues.push(a)}this.needsSort=!1}clear(){this.allVertices.clear(),this.isolatedVertices.clear(),this.connectedVertices.clear(),this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class OA{key;stage;callback;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}constructor(e,t,n){this.stage=e,this.key=t,this.callback=n}run(e){this.runTask&&this.callback(e)}}class FA extends hs{key;scheduler;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}get tasks(){return this.sortedVertices}callback=(e,t)=>t();constructor(e,t,n){super(),this.scheduler=e,this.key=t,this.start=this.start.bind(this),this.stop=this.stop.bind(this),n&&(this.callback=n.bind(this))}createTask(e,t,n){const s=new OA(this,e,t);return this.add(e,s,n),s}getTask(e){return this.getValueByKey(e)}removeTask=this.remove.bind(this);run(e){this.runTask&&this.callback(e,t=>{this.forEachNode(n=>{n.run(t??e)})})}runWithTiming(e){if(!this.runTask)return{};const t={};return this.callback(e,n=>{this.forEachNode(s=>{const r=performance.now();s.run(n??e);const a=performance.now()-r;t[s.key]=a})}),t}getSchedule(){return this.mapNodes(e=>e.key.toString())}}class kA extends hs{lastTime=0;clampDeltaTo=.1;get stages(){return this.sortedVertices}constructor(e){super(),e?.clampDeltaTo&&(this.clampDeltaTo=e.clampDeltaTo),this.run=this.run.bind(this)}createStage(e,t){const n=new FA(this,e,t?.callback);return this.add(e,n,{after:t?.after,before:t?.before}),n}getStage(e){return this.getValueByKey(e)}removeStage=this.remove.bind(this);run(e){const t=e-this.lastTime;this.forEachNode(n=>{n.run(Math.min(t/1e3,this.clampDeltaTo))}),this.lastTime=e}runWithTiming(e){const t=e-this.lastTime,n={},s=performance.now();return this.forEachNode(r=>{const a=performance.now(),o=r.runWithTiming(Math.min(t/1e3,this.clampDeltaTo)),l=performance.now()-a;n[r.key.toString()]={duration:l,tasks:o}}),this.lastTime=e,{total:performance.now()-s,stages:n}}getSchedule(e={tasks:!0}){return{stages:this.mapNodes(t=>{if(t===void 0)throw new Error("Stage not found");return{key:t.key.toString(),tasks:e.tasks?t.getSchedule():void 0}})}}dispose(){this.clear()}}const BA=i=>{const e=new kA,t=e.createStage(Symbol("threlte-main-stage")),n=nn(i),s=nn(()=>P(n).autoRender),r=nn(()=>P(n).renderMode);let a=nn(()=>P(s)??!0),o=nn(()=>P(r)??"on-demand");const l=new Set;let c=!0;const u=()=>P(o)==="always"||P(o)==="on-demand"&&(c||l.size>0)||P(o)==="manual"&&c,d={scheduler:e,autoInvalidations:l,frameInvalidated:{get current(){return c},set current(h){c=h}},advance:()=>{c=!0},autoRender:Ys(()=>P(a),h=>de(a,h)),renderMode:Ys(()=>P(o),h=>de(o,h)),invalidate(){c=!0},mainStage:t,shouldRender:u,renderStage:e.createStage(Symbol("threlte-render-stage"),{after:t,callback(h,f){d.shouldRender()&&f()}}),resetFrameInvalidation(){c=!1}};return vs(()=>()=>{e.dispose()}),_i("threlte-scheduler-context",d),d},hr=()=>{const i=oi("threlte-scheduler-context");if(!i)throw new Error("useScheduler can only be used in a child component to <Canvas>.");return i};var zA=["forEach","isDisjointFrom","isSubsetOf","isSupersetOf"],VA=["difference","intersection","symmetricDifference","union"],Cm=!1;class vc extends Set{#t=new Map;#e=mi(0);#n=mi(0);#r=Sl||-1;constructor(e){if(super(),e){for(var t of e)super.add(t);this.#n.v=super.size}Cm||this.#s()}#i(e){return Sl===this.#r?mi(e):Ju(e)}#s(){Cm=!0;var e=vc.prototype,t=Set.prototype;for(const n of zA)e[n]=function(...s){return P(this.#e),t[n].apply(this,s)};for(const n of VA)e[n]=function(...s){P(this.#e);var r=t[n].apply(this,s);return new vc(r)}}has(e){var t=super.has(e),n=this.#t,s=n.get(e);if(s===void 0){if(!t)return P(this.#e),!1;s=this.#i(!0),n.set(e,s)}return P(s),t}add(e){return super.has(e)||(super.add(e),de(this.#n,super.size),us(this.#e)),this}delete(e){var t=super.delete(e),n=this.#t,s=n.get(e);return s!==void 0&&(n.delete(e),de(s,!1)),t&&(de(this.#n,super.size),us(this.#e)),t}clear(){if(super.size!==0){super.clear();var e=this.#t;for(var t of e.values())de(t,!1);e.clear(),de(this.#n,0),us(this.#e)}}keys(){return this.values()}values(){return P(this.#e),super.values()}entries(){return P(this.#e),super.entries()}[Symbol.iterator](){return this.keys()}get size(){return P(this.#n)}}class GA extends Map{#t=new Map;#e=mi(0);#n=mi(0);#r=Sl||-1;constructor(e){if(super(),e){for(var[t,n]of e)super.set(t,n);this.#n.v=super.size}}#i(e){return Sl===this.#r?mi(e):Ju(e)}has(e){var t=this.#t,n=t.get(e);if(n===void 0)if(super.has(e))n=this.#i(0),t.set(e,n);else return P(this.#e),!1;return P(n),!0}forEach(e,t){this.#s(),super.forEach(e,t)}get(e){var t=this.#t,n=t.get(e);if(n===void 0)if(super.has(e))n=this.#i(0),t.set(e,n);else{P(this.#e);return}return P(n),super.get(e)}set(e,t){var n=this.#t,s=n.get(e),r=super.get(e),a=super.set(e,t),o=this.#e;if(s===void 0)s=this.#i(0),n.set(e,s),de(this.#n,super.size),us(o);else if(r!==t){us(s);var l=o.reactions===null?null:new Set(o.reactions),c=l===null||!s.reactions?.every(u=>l.has(u));c&&us(o)}return a}delete(e){var t=this.#t,n=t.get(e),s=super.delete(e);return n!==void 0&&(t.delete(e),de(n,-1)),s&&(de(this.#n,super.size),us(this.#e)),s}clear(){if(super.size!==0){super.clear();var e=this.#t;de(this.#n,0);for(var t of e.values())de(t,-1);us(this.#e),e.clear()}}#s(){P(this.#e);var e=this.#t;if(this.#n.v!==e.size){for(var t of super.keys())if(!e.has(t)){var n=this.#i(0);e.set(t,n)}}for([,n]of this.#t)P(n)}keys(){return P(this.#e),super.keys()}values(){return this.#s(),super.values()}entries(){return this.#s(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return P(this.#n),super.size}}const HA=()=>{const{size:i}=gh(),e=Sc(i),{invalidate:t}=hr(),n=new vc,s=new WeakMap,r=new un(75,1,.1,1e3);r.position.z=5,r.lookAt(0,0,0);let a=mi(!1),o=mi(r);dn(()=>{if(P(o)!==r||P(a))return;const{width:c,height:u}=e.current;r.aspect=c/u,r.updateProjectionMatrix(),r.updateMatrixWorld(),t()}),dn(()=>{if(P(o)===void 0||n.size===0){let c=!1;P(o)!==r&&(de(o,r),c=!0),P(a)&&(de(a,!1),c=!0),c&&t()}});const l={makeDefaultCameras:n,makeDefaultCameraManual:s,camera:Ys(()=>P(o),c=>de(o,c)),manual:{get current(){return P(a)},set(c){de(a,c,!0)}}};return _i("threlte-camera-context",l),l},af=()=>{const i=oi("threlte-camera-context");if(!i)throw new Error("useCamera can only be used in a child component to <Canvas>.");return i},WA=()=>{const i=new Map,e={disposableObjects:i,removeObjectFromDisposal:t=>{i.delete(t)},disposableObjectMounted:t=>{const n=i.get(t);n?i.set(t,n+1):i.set(t,1)},disposableObjectUnmounted:t=>{const n=i.get(t);n&&n>0&&(i.set(t,n-1),n-1<=0&&(i.delete(t),t.dispose()))}};return vs(()=>()=>{for(const[t]of i)t.dispose();i.clear()}),_i("threlte-disposal-context",e),e},XA=()=>{const i=oi("threlte-disposal-context");if(!i)throw new Error("useDisposal can only be used in a child component to <Canvas>.");return i},J0=Symbol("threlte-parent-context"),j0=i=>{const e={get current(){return i()}};return _i(J0,e),e},Q0=()=>oi(J0),qA=()=>{const i=Q0();return rf(()=>i.current)},qu=Symbol("threlte-parent-object3d-context"),ev=i=>{const e=oi(qu),t={get current(){return i()??e.current}};return _i(qu,t),t},$A=()=>oi(qu),YA=i=>{const e={scene:new Cd};return _i("threlte-scene-context",e),e},tv=()=>{const i=oi("threlte-scene-context");if(!i)throw new Error("useScene can only be used in a child component to <Canvas>.");return i},ZA=new class{#t=Ju(window.devicePixelRatio);#e(){const e=wv(window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),"change",()=>{de(this.#t,window.devicePixelRatio),e(),this.#e()})}constructor(){this.#e()}get current(){return P(this.#t),window.devicePixelRatio}},fi=(i,e)=>i?.[`is${e}`]===!0,KA=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom","filmGauge","filmOffset"]),nv=(i,e,t)=>{fi(i,"PerspectiveCamera")?i.aspect=e/t:fi(i,"OrthographicCamera")&&(i.left=e/-2,i.right=e/2,i.top=t/2,i.bottom=t/-2),i.updateProjectionMatrix(),i.updateMatrixWorld()},JA=(i,e,t,n)=>{const{camera:s,manual:r,makeDefaultCameras:a,makeDefaultCameraManual:o}=af(),{invalidate:l}=hr(),{size:c}=gh(),u=Sc(c);dn(()=>{if(!t())return;const d=i(),h=e();return a.add(d),o.set(d,h),s.set(d),r.set(h),l(),()=>{a.delete(d),o.delete(d);const f=a.values().next().value;s.current===d&&(f?(s.set(f),r.set(o.get(f)??!1)):r.set(!1),l())}}),dn(()=>{if(e())return;const d=i();for(const h in n())if(KA.has(h)){d.updateProjectionMatrix(),l();break}}),dn(()=>{e()||nv(i(),u.current.width,u.current.height)})},jA=i=>{const{camera:e,manual:t}=af(),{scene:n}=tv(),{invalidate:s,mainStage:r,renderStage:a,autoRender:o,scheduler:l,frameInvalidated:c}=hr(),{canvas:u,size:d,shouldUpdateSize:h}=gh(),f=nn(i),p=ze(()=>P(f).createRenderer?P(f).createRenderer(u):new sf({canvas:u,powerPreference:"high-performance",antialias:!0,alpha:!0}));l.createStage(Symbol("threlte-resize-stage"),{before:r}).createTask(Symbol("threlte-resize-task"),()=>{p.xr.isPresenting||h()&&(p.setSize(d.current.width,d.current.height),t.current||nv(e.current,d.current.width,d.current.height),s())});const g=a.createTask(Symbol("threlte-auto-render-task"),()=>{p.render(n,e.current)}),m=nn(()=>P(f).colorSpace),y=nn(()=>P(f).dpr),b=nn(()=>P(f).shadows),_=nn(()=>P(f).toneMapping);let w=nn(()=>P(m)??Rn),M=nn(()=>{const D=ZA.current??window.devicePixelRatio;return Array.isArray(P(y))?Math.min(Math.max(P(y)[0],D),P(y)[1]):P(y)??D}),A=nn(()=>P(b)??Al),x=nn(()=>P(_)??Pc);const E={renderer:p,colorManagementEnabled:rf(()=>P(f).colorManagementEnabled??!0),colorSpace:Ys(()=>P(w),D=>de(w,D)),dpr:Ys(()=>P(M),D=>de(M,D)),shadows:Ys(()=>P(A),D=>de(A,D)),toneMapping:Ys(()=>P(x),D=>de(x,D)),autoRenderTask:g};_i("threlte-renderer-context",E);const C=Sc(o);return mt.enabled=P(f).colorManagementEnabled??!0,dn(()=>{p.outputColorSpace=P(w),s()}),dn(()=>{p.setPixelRatio(P(M)),s()}),dn(()=>{p.shadowMap.enabled=P(A)!==!1,P(A)!==!1&&P(A)!==!0?p.shadowMap.type=P(A):P(A)===!0&&(p.shadowMap.type=Al),s()}),dn(()=>{p.toneMapping=P(x),s()}),dn(()=>(C.current?E.autoRenderTask.start():E.autoRenderTask.stop(),s(),()=>{E.autoRenderTask.stop()})),p.setAnimationLoop(D=>{l.run(D),c.current=!1}),vs(()=>()=>{p.setAnimationLoop(null);try{p.dispose()}catch{}}),E},QA=()=>{const i=oi("threlte-renderer-context");if(!i)throw new Error("useRenderer can only be used in a child component to <Canvas>.");return i},eC=()=>{const i=Ts({});return _i("threlte-user-context",i),i},tC=()=>{const i=oi("threlte-user-context");if(!i)throw new Error("useUserContext can only be used in a child component to <Canvas>.");return i},nC=i=>{const{scene:e}=YA(),t=typeof i=="function"?i:()=>i;return{scene:e,...NA(t),...Xy(),...j0(()=>e),...ev(()=>e),...WA(),...BA(t),...HA(),...jA(t),...eC()}};var iC=new Set(["$$slots","$$events","$$legacy","children"]);function sC(i,e){gn(e,!0);let t=ao(e,iC);nC(()=>t);var n=ro(),s=tn(n);bc(s,()=>e.children),st(i,n),vn()}var rC=new Set(["$$slots","$$events","$$legacy","children"]),aC=xt('<div class="svelte-clyidt"><canvas class="svelte-clyidt"><!></canvas></div>');function oC(i,e){let t=ao(e,rC),n=mi(void 0),s=mi(void 0);var r=aC(),a=It(r),o=It(a);{var l=c=>{sC(c,Qu({get dom(){return P(s)},get canvas(){return P(n)}},()=>t,{children:(u,d)=>{var h=ro(),f=tn(h);bc(f,()=>e.children??ju),st(u,h)},$$slots:{default:!0}}))};Sn(o,c=>{P(n)&&P(s)&&c(l)})}_t(a),wl(a,c=>de(n,c),()=>P(n)),_t(r),wl(r,c=>de(s,c),()=>P(s)),st(i,r)}const lC=(i,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let s=0;s<t.length;s+=1)if(i=i[t[s]],i==null)return console.error(`Cannot resolve property path "${e}": "${t[s]}" is ${i}`),{target:{},key:""};return{target:i,key:n}}else return{target:i,key:e}},cC=i=>typeof i=="object"&&i!==null,hC=(i,e)=>{const{invalidate:t}=hr(),n=Q0(),s=$A();dn(()=>{t();const r=i(),a=e();if(a===void 0&&fi(r,"Object3D")){const o=s.current;return o?.add(r),()=>{t(),o?.remove(r)}}if(a===void 0&&cC(n.current)){const o=n.current;if(fi(r,"Material")){const l=o.material;return o.material=r,()=>{t(),o.material=l}}else if(fi(r,"BufferGeometry")){const l=o.geometry;return o.geometry=r,()=>{t(),o.geometry=l}}}if(a===!1)return()=>{t()};if(typeof a=="function"){const o=a({ref:r,parent:n.current,parentObject3D:s.current});return()=>{t(),o?.()}}if(typeof a=="string"){const{target:o,key:l}=lC(n.current,a);if(l in o){const c=o[l];return o[l]=r,()=>{t(),o[l]=c}}else return o[l]=r,()=>{t(),delete o[l]}}if(fi(a,"Object3D")&&fi(r,"Object3D"))return a.add(r),()=>{t(),a.remove(r)}})},Rm=Symbol("threlte-disposable-object-context"),uC=i=>typeof i?.dispose=="function",dC=(i,e)=>{const{disposableObjectMounted:t,disposableObjectUnmounted:n,removeObjectFromDisposal:s}=XA(),r=oi(Rm),a=nn(()=>{const l=e();return l!==void 0?l!==!1:r?.()!==!1});_i(Rm,()=>P(a));const o=new Set;vs(()=>{const l=i();uC(l)&&(P(a)?(t(l),o.add(l)):(s(l),o.delete(l)))}),vs(()=>()=>{for(const l of o)n(l);o.clear()})};let $u;const fC=i=>{$u=i},pC=()=>{const i=$u;return $u=void 0,i},mC="threlte-plugin-context",gC=i=>{const e=oi(mC);if(!e)return;const t=[],n=Object.values(e);if(n.length>0)for(let s=0;s<n.length;s++){const r=n[s],a=r(i);a&&a.pluginProps&&t.push(...a.pluginProps)}return{pluginsProps:t}},vC=i=>typeof i=="string"||typeof i=="number"||typeof i=="boolean"||typeof i>"u"||i===null,_C=(i,e,t)=>{const n=i[e],s=Array.isArray(t);!s&&typeof t=="number"&&typeof n=="object"&&n!==null&&typeof n.setScalar=="function"&&!n.isColor?n.setScalar(t):typeof n=="object"&&n!==null&&typeof n.set=="function"?s?n.set(...t):n.set(t):i[e]=t},yC=(i,e,t)=>{const{invalidate:n}=hr(),s=new Map,r=(a,o,l)=>{if(vC(l)){const h=s.get(o);if(h&&h.instance===a&&h.value===l)return;s.set(o,{instance:a,value:l})}else s.delete(o);let c=a,u=o;const d=o.includes(".");if(d){const h=o.split(".");u=h.pop();for(let f=0;f<h.length;f++)if(c=c[h[f]],c==null){console.error(`Cannot resolve property path "${o}": "${h[f]}" is ${c}`);return}}if(typeof l=="function"&&u.startsWith("on")&&!d&&"addEventListener"in c){const h=c,f=u.slice(2);return h.addEventListener(f,l),()=>{h.removeEventListener?.(f,l)}}l!=null?_C(c,u,l):c[u]=l,n()};dn(()=>{const a=i(),o=e(),l=t();s.clear(),ze(()=>{for(const c in o)l?.includes(c)||dn(()=>r(a,c,o[c]))})})},xC=i=>typeof i=="function"&&Function.prototype.toString.call(i).startsWith("class "),bC=(i,e)=>xC(i)?Array.isArray(e)?new i(...e):new i:i;var SC=new Set(["$$slots","$$events","$$legacy","ref","manual","makeDefault"]);function MC(i,e){gn(e,!0);let t=Ge(e,"manual",3,!1),n=Ge(e,"makeDefault",3,!1),s=ao(e,SC);JA(()=>e.ref,()=>t(),()=>n(),()=>s),vn()}var wC=new Set(["$$slots","$$events","$$legacy","is","args","attach","dispose","ref","oncreate","children","makeDefault","manual"]),EC=xt("<!> <!>",1);function Im(i,e){gn(e,!0);let t=Ge(e,"is",19,pC),n=Ge(e,"ref",15),s=ao(e,wC);const r=nn(()=>bC(t(),e.args)),a=gC({get ref(){return P(r)},get args(){return e.args},get attach(){return e.attach},get manual(){return e.manual},get makeDefault(){return e.makeDefault},get dispose(){return e.dispose},get props(){return s}});yC(()=>P(r),()=>s,()=>a?.pluginsProps),hC(()=>P(r),()=>e.attach),dC(()=>P(r),()=>e.dispose),ev(()=>fi(P(r),"Object3D")?P(r):void 0),j0(()=>P(r)),vs(()=>{if(P(r))return ze(()=>(n()!==P(r)&&n(P(r)),e.oncreate?.(P(r))))});var o=EC(),l=tn(o);{var c=h=>{MC(h,Qu({get ref(){return P(r)},get manual(){return e.manual},get makeDefault(){return e.makeDefault}},()=>s))},u=nn(()=>fi(P(r),"PerspectiveCamera")||fi(P(r),"OrthographicCamera"));Sn(l,h=>{P(u)&&h(c)})}var d=Je(l,2);bc(d,()=>e.children??ju,()=>({ref:P(r)})),st(i,o),vn()}const TC={},ft=new Proxy(Im,{get(i,e){if(typeof e!="string")return Reflect.get(i,e);const t=TC[e]||LA[e];if(t===void 0)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return(...n)=>(fC(t),Im(...n))}}),AC=()=>{const i=hr(),e=QA(),t=af(),n=tv(),s=gh();return{advance:i.advance,autoRender:i.autoRender,autoRenderTask:e.autoRenderTask,camera:t.camera,colorManagementEnabled:e.colorManagementEnabled,colorSpace:e.colorSpace,dpr:e.dpr,invalidate:i.invalidate,mainStage:i.mainStage,renderer:e.renderer,renderMode:i.renderMode,renderStage:i.renderStage,scheduler:i.scheduler,shadows:e.shadows,shouldRender:i.shouldRender,dom:s.dom,canvas:s.canvas,size:s.size,toneMapping:e.toneMapping,get scene(){return n.scene},set scene(a){n.scene=a}}},CC=typeof window<"u";function RC(i,e,t){if(!CC)return{task:void 0,start:()=>{},stop:()=>{},started:Av(!1)};let n,s,r;hs.isKey(i)?(n=i,s=e,r=t):(n=Symbol("useTask"),s=i,r=e);const a=hr(),o=r?.autoInvalidate??!0;let l=a.mainStage,c=nn(()=>r?.running?.()??r?.autoStart??!0);if(r){if(r.stage)if(hs.isValue(r.stage))l=r.stage;else{const d=a.scheduler.getStage(r.stage);if(!d)throw new Error(`No stage found with key ${r.stage.toString()}`);l=d}else if(r.after)if(Array.isArray(r.after))for(let d=0;d<r.after.length;d++){const h=r.after[d];if(hs.isValue(h)){l=h.stage;break}}else hs.isValue(r.after)&&(l=r.after.stage);else if(r.before)if(Array.isArray(r.before))for(let d=0;d<r.before.length;d++){const h=r.before[d];if(hs.isValue(h)){l=h.stage;break}}else hs.isValue(r.before)&&(l=r.before.stage)}const u=l.createTask(n,s,r);return dn(()=>{P(c)?(u.start(),o&&a.autoInvalidations.add(s)):(u.stop(),o&&a.autoInvalidations.delete(s))}),dn(()=>()=>{l.removeTask(n),o&&a.autoInvalidations.delete(s)}),{task:u,start:()=>{de(c,!0)},stop:()=>{de(c,!1)},started:td(()=>P(c))}}function IC(i,e,t){const n=tC();if(!n)throw new Error("No user context store found, did you invoke this function outside of your main <Canvas> component?");return e?(n.update(s=>{if(i in s)return s;const r=typeof e=="function"?e():e;return s[i]=r,s}),n.current[i]):Cv(n,s=>s[i])}const Pm=Symbol(),PC=i=>typeof i?.subscribe=="function",iv=(i,e,t)=>{const n=i().map(a=>PC(a)?Sc(a):Pm),s=nn(()=>i().map((a,o)=>n[o]===Pm?a:n[o].current)),r=()=>{P(s);let a;return ze(()=>{a=e(P(s))}),a};t?dn(r):vs(r)},DC=(i,e)=>iv(i,e,!1),LC=(i,e)=>iv(i,e,!0);Object.assign(DC,{pre:LC});const zs=i=>({subscribe:i.subscribe,get current(){return i.current}});let Oa=0;const of=Ts(!1),vh=Ts(!1),lf=Ts(void 0),cf=Ts(0),hf=Ts(0),sv=Ts([]),uf=Ts(0),{onStart:UC,onLoad:NC,onError:OC}=cr;cr.onStart=(i,e,t)=>{UC?.(i,e,t),vh.set(!0),lf.set(i),cf.set(e),hf.set(t);const n=(e-Oa)/(t-Oa);uf.set(n),n===1&&of.set(!0)};cr.onLoad=()=>{NC?.(),vh.set(!1)};cr.onError=i=>{OC?.(i),sv.update(e=>[...e,i])};cr.onProgress=(i,e,t)=>{e===t&&(Oa=t),vh.set(!0),lf.set(i),cf.set(e),hf.set(t);const n=(e-Oa)/(t-Oa)||1;uf.set(n),n===1&&of.set(!0)};zs(vh),zs(lf),zs(cf),zs(hf),zs(sv),zs(uf),zs(of);const FC=()=>IC("threlte-controls",{orbitControls:Nr(void 0),trackballControls:Nr(void 0),cameraControls:Nr(void 0),transformControls:Nr(void 0)});new Qe;new Qe;new Mt;const kC="Right",BC="Top",zC="Front",VC="Left",GC="Bottom",HC="Back";[kC,BC,zC,VC,GC,HC].map(i=>i.toLocaleLowerCase());be.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ie(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ei.line={uniforms:Vd.merge([be.common,be.fog,be.line]),vertexShader:`
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
		`};new Qe;const Dm={type:"change"},df={type:"start"},rv={type:"end"},gl=new ar,Lm=new Hi,WC=Math.cos(70*zg.DEG2RAD),sn=new R,On=2*Math.PI,Lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gu=1e-6;class XC extends G0{constructor(e,t=null){super(e,t),this.state=Lt.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zs.ROTATE,MIDDLE:Zs.DOLLY,RIGHT:Zs.PAN},this.touches={ONE:Ws.ROTATE,TWO:Ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new fn,this._lastTargetPosition=new R,this._quat=new fn().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new zu,this._sphericalDelta=new zu,this._scale=1,this._panOffset=new R,this._rotateStart=new ie,this._rotateEnd=new ie,this._rotateDelta=new ie,this._panStart=new ie,this._panEnd=new ie,this._panDelta=new ie,this._dollyStart=new ie,this._dollyEnd=new ie,this._dollyDelta=new ie,this._dollyDirection=new R,this._mouse=new ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$C.bind(this),this._onPointerDown=qC.bind(this),this._onPointerUp=YC.bind(this),this._onContextMenu=tR.bind(this),this._onMouseWheel=JC.bind(this),this._onKeyDown=jC.bind(this),this._onTouchStart=QC.bind(this),this._onTouchMove=eR.bind(this),this._onMouseDown=ZC.bind(this),this._onMouseMove=KC.bind(this),this._interceptControlDown=nR.bind(this),this._interceptControlUp=iR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dm),this.update(),this.state=Lt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;sn.copy(t).sub(this.target),sn.applyQuaternion(this._quat),this._spherical.setFromVector3(sn),this.autoRotate&&this.state===Lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=On:n>Math.PI&&(n-=On),s<-Math.PI?s+=On:s>Math.PI&&(s-=On),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(sn.setFromSpherical(this._spherical),sn.applyQuaternion(this._quatInverse),t.copy(this.target).add(sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=sn.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new R(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(gl.origin.copy(this.object.position),gl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(gl.direction))<WC?this.object.lookAt(this.target):(Lm.setFromNormalAndCoplanarPoint(this.object.up,this.target),gl.intersectPlane(Lm,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>gu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gu||this._lastTargetPosition.distanceToSquared(this.target)>gu?(this.dispatchEvent(Dm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?On/60*this.autoRotateSpeed*e:On/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){sn.setFromMatrixColumn(t,0),sn.multiplyScalar(-e),this._panOffset.add(sn)}_panUp(e,t){this.screenSpacePanning===!0?sn.setFromMatrixColumn(t,1):(sn.setFromMatrixColumn(t,0),sn.crossVectors(this.object.up,sn)),sn.multiplyScalar(e),this._panOffset.add(sn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;sn.copy(s).sub(this.target);let r=sn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(On*this._rotateDelta.x/t.clientHeight),this._rotateUp(On*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(On*this._rotateDelta.x/t.clientHeight),this._rotateUp(On*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ie,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function qC(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function $C(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function YC(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rv),this.state=Lt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ZC(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Zs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Lt.DOLLY;break;case Zs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Lt.ROTATE}break;case Zs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Lt.PAN}break;default:this.state=Lt.NONE}this.state!==Lt.NONE&&this.dispatchEvent(df)}function KC(i){switch(this.state){case Lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function JC(i){this.enabled===!1||this.enableZoom===!1||this.state!==Lt.NONE||(i.preventDefault(),this.dispatchEvent(df),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(rv))}function jC(i){this.enabled!==!1&&this._handleKeyDown(i)}function QC(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Lt.TOUCH_ROTATE;break;case Ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Lt.TOUCH_PAN;break;default:this.state=Lt.NONE}break;case 2:switch(this.touches.TWO){case Ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Lt.TOUCH_DOLLY_PAN;break;case Ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Lt.TOUCH_DOLLY_ROTATE;break;default:this.state=Lt.NONE}break;default:this.state=Lt.NONE}this.state!==Lt.NONE&&this.dispatchEvent(df)}function eR(i){switch(this._trackPointer(i),this.state){case Lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Lt.NONE}}function tR(i){this.enabled!==!1&&i.preventDefault()}function nR(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function iR(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var sR=new Set(["$$slots","$$events","$$legacy","camera","ref","children"]);function rR(i,e){gn(e,!0);const t=()=>Df(d,"$parent",s),n=()=>Df(c,"$defaultCamera",s),[s,r]=Nv();let a=Ge(e,"ref",15),o=ao(e,sR);const{dom:l,camera:c,invalidate:u}=AC(),d=qA(),h=nn(()=>e.camera?e.camera:fi(t(),"Camera")?t():n()),f=new XC(ze(()=>P(h)),l);dn(()=>{f.object=P(h)});const{orbitControls:p}=FC();RC(()=>{f.update()},{autoInvalidate:!1,running:()=>e.autoRotate||e.enableDamping||!1});const v=g=>{u(),e.onchange?.(g)};dn(()=>(p.set(f),()=>{p.set(void 0)})),ft(i,Qu({get is(){return f}},()=>o,{onchange:v,get ref(){return a()},set ref(g){a(g)},children:(g,m)=>{var y=ro(),b=tn(y);bc(b,()=>e.children??ju,()=>({ref:f})),st(g,y)},$$slots:{default:!0}})),vn(),r()}new Qe;new Qe;new Qt;const aR=et.shadowmap_pars_fragment;aR.includes("unpackRGBAToDepth");`${et.logdepthbuf_pars_vertex}${et.fog_pars_vertex}${et.logdepthbuf_vertex}${et.fog_vertex}`;`${et.tonemapping_fragment}${et.colorspace_fragment}`;`${et.tonemapping_fragment}${et.colorspace_fragment}`;const oR=`

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
`;`${hR}${uR}${et.tonemapping_fragment}${et.colorspace_fragment}`;typeof window<"u"&&document.createElement("div");new GA;for(let i=0;i<256;i++)(i<16?"0":"")+i.toString(16);new ia(-1,1,1,-1,0,1);class dR extends ot{constructor(){super(),this.setAttribute("position",new Fe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Fe([0,2,0,0,2,0],2))}}new dR;var av={exports:{}};av.exports=_h;av.exports.default=_h;function _h(i,e,t){t=t||2;var n=e&&e.length,s=n?e[0]*t:i.length,r=ov(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;var o,l,c,u,d,h,f;if(n&&(r=vR(i,e,r,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(var p=t;p<s;p+=t)d=i[p],h=i[p+1],d<o&&(o=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);f=Math.max(c-o,u-l),f=f!==0?32767/f:0}return no(r,a,t,o,l,f,0),a}function ov(i,e,t,n,s){var r,a;if(s===Ku(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Um(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Um(r,i[r],i[r+1],a);return a&&yh(a,a.next)&&(so(a),a=a.next),a}function rr(i,e){if(!i)return i;e||(e=i);var t=i,n;do if(n=!1,!t.steiner&&(yh(t,t.next)||Ht(t.prev,t,t.next)===0)){if(so(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function no(i,e,t,n,s,r,a){if(i){!a&&r&&SR(i,n,s,r);for(var o=i,l,c;i.prev!==i.next;){if(l=i.prev,c=i.next,r?pR(i,n,s,r):fR(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),so(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=mR(rr(i),e,t),no(i,e,t,n,s,r,2)):a===2&&gR(i,e,t,n,s,r):no(rr(i),e,t,n,s,r,1);break}}}}function fR(i){var e=i.prev,t=i,n=i.next;if(Ht(e,t,n)>=0)return!1;for(var s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,h=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,p=n.next;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&zr(s,o,r,l,a,c,p.x,p.y)&&Ht(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function pR(i,e,t,n){var s=i.prev,r=i,a=i.next;if(Ht(s,r,a)>=0)return!1;for(var o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=o<l?o<c?o:c:l<c?l:c,p=u<d?u<h?u:h:d<h?d:h,v=o>l?o>c?o:c:l>c?l:c,g=u>d?u>h?u:h:d>h?d:h,m=Yu(f,p,e,t,n),y=Yu(v,g,e,t,n),b=i.prevZ,_=i.nextZ;b&&b.z>=m&&_&&_.z<=y;){if(b.x>=f&&b.x<=v&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&zr(o,u,l,d,c,h,b.x,b.y)&&Ht(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=f&&_.x<=v&&_.y>=p&&_.y<=g&&_!==s&&_!==a&&zr(o,u,l,d,c,h,_.x,_.y)&&Ht(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=v&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&zr(o,u,l,d,c,h,b.x,b.y)&&Ht(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=p&&_.y<=g&&_!==s&&_!==a&&zr(o,u,l,d,c,h,_.x,_.y)&&Ht(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function mR(i,e,t){var n=i;do{var s=n.prev,r=n.next.next;!yh(s,r)&&lv(s,n,n.next,r)&&io(s,r)&&io(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),so(n),so(n.next),n=i=r),n=n.next}while(n!==i);return rr(n)}function gR(i,e,t,n,s,r){var a=i;do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&ER(a,o)){var l=cv(a,o);a=rr(a,a.next),l=rr(l,l.next),no(a,e,t,n,s,r,0),no(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function vR(i,e,t,n){var s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=ov(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(wR(c));for(s.sort(_R),r=0;r<s.length;r++)t=yR(s[r],t);return t}function _R(i,e){return i.x-e.x}function yR(i,e){var t=xR(i,e);if(!t)return e;var n=cv(t,i);return rr(n,n.next),rr(t,t.next)}function xR(i,e){var t=e,n=i.x,s=i.y,r=-1/0,a;do{if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){var o=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(o<=n&&o>r&&(r=o,a=t.x<t.next.x?t:t.next,o===n))return a}t=t.next}while(t!==e);if(!a)return null;var l=a,c=a.x,u=a.y,d=1/0,h;t=a;do n>=t.x&&t.x>=c&&n!==t.x&&zr(s<u?n:r,s,c,u,s<u?r:n,s,t.x,t.y)&&(h=Math.abs(s-t.y)/(n-t.x),io(t,i)&&(h<d||h===d&&(t.x>a.x||t.x===a.x&&bR(a,t)))&&(a=t,d=h)),t=t.next;while(t!==l);return a}function bR(i,e){return Ht(i.prev,i,e.prev)<0&&Ht(e.next,i,i.next)<0}function SR(i,e,t,n){var s=i;do s.z===0&&(s.z=Yu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,MR(s)}function MR(i){var e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Yu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function wR(i){var e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function zr(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function ER(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!TR(i,e)&&(io(i,e)&&io(e,i)&&AR(i,e)&&(Ht(i.prev,i,e.prev)||Ht(i,e.prev,e))||yh(i,e)&&Ht(i.prev,i,i.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function yh(i,e){return i.x===e.x&&i.y===e.y}function lv(i,e,t,n){var s=_l(Ht(i,e,t)),r=_l(Ht(i,e,n)),a=_l(Ht(t,n,i)),o=_l(Ht(t,n,e));return!!(s!==r&&a!==o||s===0&&vl(i,t,e)||r===0&&vl(i,n,e)||a===0&&vl(t,i,n)||o===0&&vl(t,e,n))}function vl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function _l(i){return i>0?1:i<0?-1:0}function TR(i,e){var t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&lv(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function io(i,e){return Ht(i.prev,i,i.next)<0?Ht(i,e,i.next)>=0&&Ht(i,i.prev,e)>=0:Ht(i,e,i.prev)<0||Ht(i,i.next,e)<0}function AR(i,e){var t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function cv(i,e){var t=new Zu(i.i,i.x,i.y),n=new Zu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Um(i,e,t,n){var s=new Zu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function so(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Zu(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}_h.deviation=function(i,e,t,n){var s=e&&e.length,r=s?e[0]*t:i.length,a=Math.abs(Ku(i,0,r,t));if(s)for(var o=0,l=e.length;o<l;o++){var c=e[o]*t,u=o<l-1?e[o+1]*t:i.length;a-=Math.abs(Ku(i,c,u,t))}var d=0;for(o=0;o<n.length;o+=3){var h=n[o]*t,f=n[o+1]*t,p=n[o+2]*t;d+=Math.abs((i[h]-i[p])*(i[f+1]-i[h+1])-(i[h]-i[f])*(i[p+1]-i[h+1]))}return a===0&&d===0?0:Math.abs((d-a)/a)};function Ku(i,e,t,n){for(var s=0,r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}_h.flatten=function(i){for(var e=i[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,s=0;s<i.length;s++){for(var r=0;r<i[s].length;r++)for(var a=0;a<e;a++)t.vertices.push(i[s][r][a]);s>0&&(n+=i[s-1].length,t.holes.push(n))}return t};var Nm;(i=>{function e(s){let r=s.slice();return r.sort(i.POINT_COMPARATOR),i.makeHullPresorted(r)}i.makeHull=e;function t(s){if(s.length<=1)return s.slice();let r=[];for(let o=0;o<s.length;o++){const l=s[o];for(;r.length>=2;){const c=r[r.length-1],u=r[r.length-2];if((c.x-u.x)*(l.y-u.y)>=(c.y-u.y)*(l.x-u.x))r.pop();else break}r.push(l)}r.pop();let a=[];for(let o=s.length-1;o>=0;o--){const l=s[o];for(;a.length>=2;){const c=a[a.length-1],u=a[a.length-2];if((c.x-u.x)*(l.y-u.y)>=(c.y-u.y)*(l.x-u.x))a.pop();else break}a.push(l)}return a.pop(),r.length==1&&a.length==1&&r[0].x==a[0].x&&r[0].y==a[0].y?r:r.concat(a)}i.makeHullPresorted=t;function n(s,r){return s.x<r.x?-1:s.x>r.x?1:s.y<r.y?-1:s.y>r.y?1:0}i.POINT_COMPARATOR=n})(Nm||(Nm={}));new Qi;new Qe;const xa=new R;function jn(i,e,t,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;xa.copy(e),xa[n]=0,xa.normalize();const c=.5*a/(a+o),u=1-xa.angleTo(i)/l;return Math.sign(xa[t])===1?u*c:o/(a+o)+c+c*(1-u)}class xh extends Ms{constructor(e=1,t=1,n=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new R,c=new R,u=new R(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,v=new R,g=.5/a;for(let m=0,y=0;m<d.length;m+=3,y+=2)switch(l.fromArray(d,m),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),d[m+0]=u.x*Math.sign(l.x)+c.x*r,d[m+1]=u.y*Math.sign(l.y)+c.y*r,d[m+2]=u.z*Math.sign(l.z)+c.z*r,h[m+0]=c.x,h[m+1]=c.y,h[m+2]=c.z,Math.floor(m/p)){case 0:v.set(1,0,0),f[y+0]=jn(v,c,"z","y",r,n),f[y+1]=1-jn(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),f[y+0]=1-jn(v,c,"z","y",r,n),f[y+1]=1-jn(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),f[y+0]=1-jn(v,c,"x","z",r,e),f[y+1]=jn(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),f[y+0]=1-jn(v,c,"x","z",r,e),f[y+1]=1-jn(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),f[y+0]=1-jn(v,c,"x","y",r,e),f[y+1]=1-jn(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),f[y+0]=jn(v,c,"x","y",r,e),f[y+1]=1-jn(v,c,"y","x",r,t);break}}static fromJSON(e){return new xh(e.width,e.height,e.depth,e.segments,e.radius)}}var CR=xt("<!><!>",1),RR=xt("<!> <!>",1);function IR(i,e){gn(e,!1);let t=Ge(e,"position",24,()=>[0,0,0]);const n=new xh(1.08,.28,.62,8,.09);Ji(),ft.Group(i,{get position(){return t()},children:(s,r)=>{var a=RR(),o=tn(a);ft.Mesh(o,{children:(c,u)=>{var d=CR(),h=tn(d);ft.BoxGeometry(h,{args:[.82,.16,.44]});var f=Je(h);ft.MeshBasicMaterial(f,{color:"#bff8ff"}),st(c,d)},$$slots:{default:!0}});var l=Je(o,2);ft.Mesh(l,{get geometry(){return n},children:(c,u)=>{ft.MeshPhysicalMaterial(c,{color:"#eafcff",emissive:"#43d9ef",emissiveIntensity:.18,metalness:.08,roughness:.1,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:2})},$$slots:{default:!0}}),st(s,a)},$$slots:{default:!0}}),vn()}var PR=xt("<!><!>",1),DR=xt("<!> <!>",1);function vu(i,e){gn(e,!1);const t=lt();let n=Ge(e,"color",8),s=Ge(e,"position",24,()=>[0,0,0]),r=Ge(e,"rotation",24,()=>[0,0,0]),a=Ge(e,"scale",8,1),o=Ge(e,"glow",8,.28);const l={cyan:"#30e7ff",pink:"#ff4aa2",yellow:"#ffe15b",green:"#63f58b",purple:"#aa66ff",orange:"#ff8a35",blue:"#4d7cff",wild:"#ffffff"},c=new xh(.94,.42,.94,8,.1);Vt(()=>Ae(n()),()=>{de(t,l[n()])}),Li(),Ji(),ft.Group(i,{get position(){return s()},get rotation(){return r()},get scale(){return a()},children:(u,d)=>{var h=DR(),f=tn(h);ft.Mesh(f,{children:(v,g)=>{var m=PR(),y=tn(m);ft.BoxGeometry(y,{args:[.72,.25,.72]});var b=Je(y);ft.MeshBasicMaterial(b,{get color(){return P(t)},transparent:!0,get opacity(){return o()}}),st(v,m)},$$slots:{default:!0}});var p=Je(f,2);ft.Mesh(p,{get geometry(){return c},castShadow:!0,receiveShadow:!0,children:(v,g)=>{ft.MeshStandardMaterial(v,{get color(){return P(t)},metalness:.18,roughness:.16})},$$slots:{default:!0}}),st(u,h)},$$slots:{default:!0}}),vn()}function hv(i,e,t,n,s){const r=new Map(t.filter(v=>i.includes(v.playerId)).map(v=>[v.playerId,v])),a=i.filter(v=>!r.has(v)),o=i.length===1?r.size===1:r.size>=i.length-1;if(o)for(const v of a)r.set(v,{playerId:v,result:"cleared",tick:Number.MAX_SAFE_INTEGER,score:0,misses:0,seat:i.indexOf(v)});const l=[...r.values()].sort((v,g)=>(v.result==="cleared"?0:1)-(g.result==="cleared"?0:1)||v.tick-g.tick||g.score-v.score||v.misses-g.misses||v.seat-g.seat),c=Object.fromEntries(i.map(v=>[v,0]));o&&l.forEach((v,g)=>c[v.playerId]=Math.max(0,i.length-1-g));const u=Object.fromEntries(i.map(v=>[v,(e[v]??0)+c[v]])),d=Math.max(...Object.values(u)),h=o&&s>=2?i.filter(v=>u[v]===d):[],f=n.filter(v=>i.includes(v)),p=o&&s>=2;return{playerIds:i,terminalPlayerIds:[...r.keys()],readyPlayerIds:f,finished:o,winnerId:p?h.length===1?h[0]:void 0:l[0]?.playerId,winnerIds:h,allReady:o&&i.every(v=>f.includes(v)),round:s,matchComplete:p,roundPoints:c,scores:u}}var Vs=xt("<!><!>",1),LR=xt("<!><!> <!><!><!><!><!> <!> <!> <!> <!> <!> <!> <!><!> <!> <!> <!>",1),UR=xt('<button class="svelte-1y6lvup"></button>'),NR=xt('<div class="lanes svelte-1y6lvup"></div>'),OR=xt("<button> </button>"),FR=xt('<strong class="countdown svelte-1y6lvup"> </strong>'),kR=xt('<div data-ramp-direction="far-to-player" data-roll-direction="edge-over-edge-toward-player" data-paddle-position="player-edge" data-bin-position="below-paddle" data-bin-layout="vertical-stacks"><!> <!><!><!></div>');function SI(i,e){gn(e,!1);const t=lt();let n=Ge(e,"state",8),s=Ge(e,"compact",8,!1),r=Ge(e,"label",8,"Stax ramp"),a=Ge(e,"selectLane",8,void 0),o=lt(!1);const l=_=>(_-2)*1.15,c=_=>new sf({canvas:_,antialias:!1,alpha:!0,powerPreference:"high-performance"}),u=(_,w=!1)=>{const M=Math.floor(_/3)*3,A=Math.min(1,M/(w?360:P(t))),x=w?1-A:A;return{z:-4.35+x*7.65,y:1.24-x*.98,roll:(w?-1:1)*M*.06}};Vt(()=>Ae(n()),()=>{de(t,Qv(n().level).travel)}),Li(),Ji();var d=kR();let h;var f=It(d);oC(f,{dpr:[1,2],createRenderer:c,shadows:!1,children:(_,w)=>{var M=LR(),A=tn(M);ft.PerspectiveCamera(A,{makeDefault:!0,position:[0,8.9,11.8],fov:43,$$events:{create:({ref:X})=>X.lookAt(0,.25,.4)}});var x=Je(A);{var E=X=>{rR(X,{enableDamping:!0,target:[0,.25,.4]})};Sn(x,X=>{a()&&P(o)&&X(E)})}var C=Je(x,2);ft.Color(C,{attach:"background",args:["#05050a"]});var D=Je(C);ft.AmbientLight(D,{intensity:.72});var k=Je(D);ft.DirectionalLight(k,{position:[5,10,7],intensity:4,color:"#fff0dd",castShadow:!0});var L=Je(k);ft.DirectionalLight(L,{position:[-8,5,-5],intensity:3,color:"#cceeff"});var B=Je(L);ft.SpotLight(B,{position:[0,8,-5],intensity:10,color:"#00ffcc",angle:.5,penumbra:.5,decay:0,distance:20});var O=Je(B,2);ft.Mesh(O,{position:[0,10,-10],children:(X,ce)=>{var J=Vs(),pe=tn(J);ft.SphereGeometry(pe,{args:[4,24,24]});var Ne=Je(pe);ft.MeshBasicMaterial(Ne,{color:"#ffffff"}),st(X,J)},$$slots:{default:!0}});var U=Je(O,2);ft.Mesh(U,{rotation:[.13,0,0],position:[0,.72,-.52],receiveShadow:!0,children:(X,ce)=>{var J=Vs(),pe=tn(J);ft.BoxGeometry(pe,{args:[6.3,.18,8.35]});var Ne=Je(pe);ft.MeshStandardMaterial(Ne,{color:"#11182b",metalness:.28,roughness:.38}),st(X,J)},$$slots:{default:!0}});var N=Je(U,2);Cn(N,0,()=>Array(6),kn,(X,ce,J)=>{ft.Mesh(X,{rotation:[.13,0,0],position:[(J-2.5)*1.15,.83,-.52],children:(pe,Ne)=>{var le=Vs(),me=tn(le);ft.BoxGeometry(me,{args:[.035,.035,8.2]});var Me=Je(me);ft.MeshBasicMaterial(Me,{color:"#2c4777"}),st(pe,le)},$$slots:{default:!0}})});var F=Je(N,2);Cn(F,1,()=>(Ae(n()),ze(()=>n().ramp)),X=>X.id,(X,ce)=>{const J=Gi(()=>(P(ce),ze(()=>u(P(ce).progress,P(ce).returning))));{let pe=Gi(()=>(P(ce),Ae(P(J)),ze(()=>[l(P(ce).lane),P(J).y,P(J).z]))),Ne=Gi(()=>(Ae(P(J)),ze(()=>[P(J).roll,0,0])));vu(X,{get color(){return P(ce),ze(()=>P(ce).color)},get position(){return P(pe)},get rotation(){return P(Ne)}})}});var H=Je(F,2);ft.Mesh(H,{position:[0,-.08,5.35],receiveShadow:!0,children:(X,ce)=>{var J=Vs(),pe=tn(J);ft.BoxGeometry(pe,{args:[6.3,.18,1.45]});var Ne=Je(pe);ft.MeshStandardMaterial(Ne,{color:"#0b1020",metalness:.22,roughness:.42}),st(X,J)},$$slots:{default:!0}});var ee=Je(H,2);Cn(ee,0,()=>Array(6),kn,(X,ce,J)=>{ft.Mesh(X,{position:[(J-2.5)*1.15,.025,5.35],children:(pe,Ne)=>{var le=Vs(),me=tn(le);ft.BoxGeometry(me,{args:[.025,.025,1.32]});var Me=Je(me);ft.MeshBasicMaterial(Me,{color:"#263d68"}),st(pe,le)},$$slots:{default:!0}})});var K=Je(ee,2);ft.Mesh(K,{position:[0,.025,4.68],children:(X,ce)=>{var J=Vs(),pe=tn(J);ft.BoxGeometry(pe,{args:[5.75,.025,.035]});var Ne=Je(pe);ft.MeshBasicMaterial(Ne,{color:"#263d68"}),st(X,J)},$$slots:{default:!0}});var te=Je(K);ft.Mesh(te,{position:[0,.025,6.02],children:(X,ce)=>{var J=Vs(),pe=tn(J);ft.BoxGeometry(pe,{args:[5.75,.025,.035]});var Ne=Je(pe);ft.MeshBasicMaterial(Ne,{color:"#263d68"}),st(X,J)},$$slots:{default:!0}});var Ce=Je(te,2);Cn(Ce,1,()=>(Ae(n()),ze(()=>n().columns)),kn,(X,ce,J)=>{var pe=ro(),Ne=tn(pe);Cn(Ne,1,()=>P(ce),kn,(le,me,Me)=>{{let ne=Gi(()=>ze(()=>[l(J),.2+Me*.31,5.35])),ae=Gi(()=>(Ae(n()),ze(()=>n().lastClearCells.some(oe=>oe.column===J&&oe.row===Me)?.65:.28)));vu(le,{get color(){return P(me)},get position(){return P(ne)},scale:[.9,.72,.58],get glow(){return P(ae)}})}}),st(X,pe)});var ct=Je(Ce,2);{let X=Gi(()=>(Ae(n()),ze(()=>[l(n().paddleLane),.18-n().paddle.length*.29,3.3])));IR(ct,{get position(){return P(X)}})}var it=Je(ct,2);Cn(it,1,()=>(Ae(n()),ze(()=>n().paddle)),kn,(X,ce,J)=>{{let pe=Gi(()=>(Ae(n()),ze(()=>[l(n().paddleLane),.18-n().paddle.length*.29+(J+1)*.29,3.3])));vu(X,{get color(){return P(ce),ze(()=>P(ce).color)},get position(){return P(pe)},scale:[.9,.72,.58]})}}),st(_,M)},$$slots:{default:!0}});var p=Je(f,2);{var v=_=>{var w=NR();Cn(w,4,()=>Array(5),kn,(M,A,x)=>{var E=UR();at(E,"aria-label",`Catch lane ${x+1}`),di("pointerdown",E,Xm(()=>a()?.(x))),st(M,E)}),_t(w),st(_,w)};Sn(p,_=>{a()&&!P(o)&&_(v)})}var g=Je(p);{var m=_=>{var w=OR();let M;var A=It(w,!0);_t(w),Yt(()=>{M=Qn(w,1,"inspect svelte-1y6lvup",null,M,{active:P(o)}),at(w,"aria-label",P(o)?"Exit orbit view":"Inspect scene in orbit view"),at(w,"aria-pressed",P(o)),ti(A,P(o)?"EXIT ORBIT":"ORBIT VIEW")}),di("click",w,()=>de(o,!P(o))),st(_,w)};Sn(g,_=>{a()&&_(m)})}var y=Je(g);{var b=_=>{var w=FR(),M=It(w,!0);_t(w),Yt(A=>ti(M,A),[()=>(Ae(n()),ze(()=>Math.max(1,Math.ceil(n().countdown/60))))]),st(_,w)};Sn(y,_=>{Ae(n()),ze(()=>n().phase==="countdown")&&_(b)})}_t(d),Yt((_,w)=>{h=Qn(d,1,"scene svelte-1y6lvup",null,h,{compact:s()}),at(d,"aria-label",r()),at(d,"data-tick",(Ae(n()),ze(()=>n().tick))),at(d,"data-phase",(Ae(n()),ze(()=>n().phase))),at(d,"data-paddle-lane",(Ae(n()),ze(()=>n().paddleLane))),at(d,"data-paddle-count",(Ae(n()),ze(()=>n().paddle.length))),at(d,"data-ramp-count",(Ae(n()),ze(()=>n().ramp.length))),at(d,"data-leading-progress",(Ae(n()),ze(()=>n().ramp[0]?.progress??""))),at(d,"data-leading-roll",_),at(d,"data-column-counts",w),at(d,"data-score",(Ae(n()),ze(()=>n().score)))},[()=>(Ae(n()),ze(()=>n().ramp[0]?u(n().ramp[0].progress,n().ramp[0].returning).roll:"")),()=>(Ae(n()),ze(()=>n().columns.map(_=>_.length).join(",")))]),st(i,d),vn()}function BR(i){if(!bt(i)||!yt(i,["type","roomId","ruleset","rulesVersion","seed","tickRate","hostUid","audioOutput","members","players","settings","matchId","round","previousGameId","scores","serverTime"])||i.type!=="game/started"||i.ruleset!=="stax"||i.rulesVersion!=="stax/1"||i.tickRate!==60||!Tt(i.seed,0,4294967295)||!Tt(i.round,0,2)||!gt(i.matchId)||!gt(i.hostUid)||!gt(i.roomId)||!Ui(i.serverTime)||!bt(i.members)||!bt(i.players)||!bt(i.scores)||!bt(i.settings)||!yt(i.settings,["width","height","targetWins","matchRounds"])||i.settings.width!==5||i.settings.height!==5||i.settings.targetWins!==3||i.settings.matchRounds!==3||i.previousGameId!==void 0&&!gt(i.previousGameId)||i.audioOutput!=="cast"&&i.audioOutput!=="controllers")throw new Error("Invalid Stax start record.");const e=i.members,t=i.players,n=i.scores,s=Object.keys(t);if(s.length<1||s.length>4||!Object.entries(e).every(([r,a])=>gt(r)&&a===!0)||!Object.entries(t).every(([r,a])=>gt(r)&&e[r]===!0&&bt(a)&&yt(a,["seat","level"])&&Tt(a.seat,0,3)&&Tt(a.level,0,20))||!yt(n,s)||!s.every(r=>Tt(n[r],0,12)))throw new Error("Invalid Stax roster or scores.");return i}function uv(i){if(!bt(i)||!yt(i,["type","playerId","tick","result","score","misses","seat","stateHash","serverTime"])||i.type!=="player/terminal"||!gt(i.playerId)||!Tt(i.tick,0)||!["cleared","lost"].includes(String(i.result))||!Tt(i.score,0,1e9)||!Tt(i.misses,0,5)||!Tt(i.seat,0,3)||typeof i.stateHash!="string"||!/^s1-[0-9a-f]{8}$/.test(i.stateHash)||!Ui(i.serverTime))throw new Error("Invalid Stax terminal record.");return i}function zR(i,e,t=!1){const n=cd(i,e,t),s=bt(n.payload)?n.payload:{};if(n.type==="input/move"&&yt(s,["dx"])&&(s.dx===-1||s.dx===1))return{commandId:i,...n,type:n.type,payload:{dx:s.dx}};if(["input/place","input/throw-back","input/accelerate-start","input/accelerate-end","input/restart"].includes(n.type)&&yt(s,[]))return{commandId:i,...n,type:n.type,payload:{}};if(n.type==="progress/tick"&&yt(s,["phase","stateHash"])&&["countdown","playing","cleared","lost"].includes(String(s.phase))&&typeof s.stateHash=="string"&&/^s1-[0-9a-f]{8}$/.test(s.stateHash))return{commandId:i,...n,type:n.type,payload:{phase:s.phase,stateHash:s.stateHash}};throw new Error("Invalid Stax controller payload.")}const jr=BR,_c=zR,dv=(i,e)=>e_(i.seed,e),fv=n_,pv=t_,mv=Wm,VR=(i,e,t,n)=>i_(i,e,t,n);async function MI(i){if(!ue)throw new Error("Firebase unavailable.");return jr((await St(De(ue,`games/${i}/start`))).val())}function GR(i,e,t){if(!ue)throw new Error("Firebase unavailable.");let n,s=[],r=[];const a=[],o=()=>{n&&e(hv(Object.keys(n.players),n.scores??{},s,r,n.round))};return St(De(ue,`games/${i}/start`)).then(l=>{n=jr(l.val()),a.push(si(De(ue,`games/${i}/terminals`),c=>{s=[],c.forEach(u=>{const d=uv(u.val());d.playerId===u.key&&Object.hasOwn(n.players,u.key)&&s.push(d)}),o()},t),si(De(ue,`games/${i}/rematch/ready`),c=>{r=[],c.forEach(u=>{u.val()?.playerId===u.key&&Object.hasOwn(n.players,u.key)&&r.push(u.key)}),o()},t)),o()}).catch(l=>t(l instanceof Error?l:new Error(String(l)))),()=>a.forEach(l=>l())}const wI=(i,e)=>Tc(i,e);async function HR(i){if(!ue)throw new Error("Firebase unavailable.");const[e,t]=await Promise.all([St(De(ue,`games/${i}/start`)),St(De(ue,`games/${i}/terminals`))]),n=jr(e.val()),s=[];t.forEach(a=>{s.push(uv(a.val()))});const r=hv(Object.keys(n.players),n.scores,s,[],n.round);return Ac(i,jr,a=>{const o=Object.fromEntries(Object.keys(a.players).map(c=>[c,r.scores[c]??0])),l=r.matchComplete;return{advance:!l,scores:l?Object.fromEntries(Object.keys(a.players).map(c=>[c,0])):o}})}function EI(i,e){if(!ii?.currentUser||!ue)throw new Error("Firebase unavailable.");const t=ii.currentUser.uid,n=new Ss(Hm.tickRate),s=ud("stax",i,t,"outbox");let r,a,o=0,l=0,c=!1,u=!1,d=!1,h=!1,f=0,p=-1,v,g,m,y=!1,b=[],_=()=>{},w=!1;const M=uo(localStorage,s,N=>{if(!N||typeof N!="object"||typeof N.commandId!="string")throw new Error("Invalid Stax Match outbox.");const{commandId:F,...H}=N;return _c(F,H,!0)}),A=N=>e({playerId:t,tick:o,ready:c,state:r?structuredClone(r):void 0,lifecycle:m,audioOutput:g,error:N,lastCommand:v,ownershipConflict:y,opponents:b.map(F=>({...F,state:structuredClone(F.state)}))}),x=new Cc(ue,`games/${i}/players/${t}/writer`,()=>{y=!0,c=!1,cancelAnimationFrame(f),A("This controller was taken over by another tab.")}),E=GR(i,N=>{m=N,N.finished&&cancelAnimationFrame(f),N.allReady&&!h&&(h=!0,HR(i).catch(F=>{h=!1,A(F instanceof Error?F.message:String(F))})),A()},N=>A(N.message)),C=new ka({initial:M,order:(N,F)=>N.clientSeq-F.clientSeq,identify:N=>N.commandId,persist:N=>fo(localStorage,s,N),deliver:async N=>{if(!c)throw new Error("Controller is not ready.");const{commandId:F,...H}=N;await Mn(De(ue,`games/${i}/players/${t}/records/${F}`),{...H,serverTime:wn()})},failed:N=>A(N instanceof Error?N.message:String(N))}),D=N=>{const H={commandId:Gr(De(ue,`games/${i}/players/${t}/records`)).key,playerId:t,epochId:x.epochId,clientSeq:++l,tick:o,...N};return C.enqueue(H),H},k=(N=!1)=>{!r||!N&&o-p<15||(D({type:"progress/tick",payload:{phase:r.phase,stateHash:mv(r)}}),p=o)},L=()=>{!r||w||!["cleared","lost"].includes(r.phase)||!a||(w=!0,Mn(De(ue,`games/${i}/terminals/${t}`),{type:"player/terminal",playerId:t,tick:r.tick,result:r.phase,score:r.score,misses:r.misses,seat:a.players[t].seat,stateHash:Wm(r),serverTime:wn()}).catch(N=>{w=!1,A(N.message)}))},B=N=>{if(!(u||d||!c||!r||r.phase==="cleared"||m?.terminalPlayerIds.includes(t))){for(let F=n.consume(N);F>0;F--)fv(r),o=r.tick;k(),L(),A(),f=requestAnimationFrame(B)}},O=si(De(ue,`games/${i}/start`),async N=>{if(!c)try{if(a=jr(N.val()),!a.players[t])throw new Error("Player is not part of this Stax Match game.");if(g=a.audioOutput,!await x.claim())throw y=!0,new Error("This controller is already active in another tab.");y=!1,_(),_=WR(i,K=>{b=K.filter(te=>te.playerId!==t),A()},K=>A(K.message));const F=await St(De(ue,`games/${i}/players/${t}/records`)),H=new Map;F.forEach(K=>{const te=_c(K.key,K.val());H.set(te.commandId,te)});for(const K of C.values())H.set(K.commandId,K);const ee=[...H.values()].sort((K,te)=>K.clientSeq-te.clientSeq);r=VR(dv(a,a.players[t].level),Math.max(0,...ee.map(K=>K.tick)),ee,a.seed),o=r.tick,l=Math.max(0,...ee.map(K=>K.clientSeq)),await Mn(De(ue,`games/${i}/players/${t}/epochs/${x.epochId}`),{clientId:x.clientId,startedFromTick:o,startedFromCommandSeq:l,serverTime:wn()}),c=!0,C.flush(),k(!0),A(),r.phase==="cleared"||r.phase==="lost"?L():f=requestAnimationFrame(B)}catch(F){A(F instanceof Error?F.message:String(F))}},N=>A(N.message)),U=()=>{C.flush()};return window.addEventListener("online",U),{command(N){!c||!r||r.phase!=="playing"||!a||(D(N),pv(r,N,a.seed),o=r.tick,v=`${N.type} · tick ${o}`,r.phase==="cleared"&&(k(!0),L()),A())},suspend(){!c||d||(d=!0,cancelAnimationFrame(f),n.reset(),k(!0))},resume(){!c||!d||(d=!1,n.reset(),f=requestAnimationFrame(B))},async takeOver(){await x.takeOver()&&(y=!1,c=!0,d=!1,C.flush(),f=requestAnimationFrame(B),A())},destroy(){k(!0),u=!0,O(),E(),_(),cancelAnimationFrame(f),window.removeEventListener("online",U),C.destroy(),x.release()}}}function WR(i,e,t){if(!ue)throw new Error("Firebase unavailable.");let n=!1,s=0,r;const a=new Ss(Hm.tickRate),o=new Map,l=new Map,c=[],u={clone:h=>structuredClone(h),tick:h=>h.tick,advanceTo:(h,f)=>{for(;h.tick<f&&h.phase!=="cleared"&&h.phase!=="lost";)fv(h)},apply:(h,f)=>{f.type!=="progress/tick"&&pv(h,f,r.seed)},hash:mv,phase:h=>h.phase,terminal:h=>h.phase==="cleared"||h.phase==="lost",progress:h=>h.type==="progress/tick"?h.payload:void 0},d=()=>e([...l].map(([h,f])=>{const p=f.snapshot();return{playerId:h,tick:p.displayTick,controllerTick:p.controllerTick,lag:p.lag,state:p.state,hashMatches:p.hashMatches}}));return St(De(ue,`games/${i}/start`)).then(async h=>{r=jr(h.val());let f=0;if(await Promise.all(Object.keys(r.players).map(async v=>{const g=await St(De(ue,`games/${i}/players/${v}/records`)),m=[];g.forEach(y=>{m.push(_c(y.key,y.val()))}),m.sort((y,b)=>y.clientSeq-b.clientSeq),o.set(v,m);for(const y of m)y.type==="progress/tick"&&(f=Math.max(f,y.tick))})),n)return;for(const v of Object.keys(r.players)){const g=new Ec(u,dv(r,r.players[v].level),f);l.set(v,g);for(const m of o.get(v)??[])g.receive(m);c.push(ji(De(ue,`games/${i}/players/${v}/records`),m=>{try{g.receive(_c(m.key,m.val())),d()}catch(y){t(y instanceof Error?y:new Error(String(y)))}},t))}const p=v=>{if(!n){for(let g=a.consume(v);g>0;g--)for(const m of l.values())m.advance();d(),s=requestAnimationFrame(p)}};d(),s=requestAnimationFrame(p)}).catch(h=>t(h instanceof Error?h:new Error(String(h)))),()=>{n=!0,cancelAnimationFrame(s),c.forEach(h=>h())}}export{fI as C,tI as G,nI as M,sI as P,dI as Q,vI as S,lI as T,rI as a,iI as b,yy as c,vy as d,oI as e,pI as f,A_ as g,zy as h,ky as i,uI as j,MI as k,WR as l,GR as m,SI as n,aI as o,hI as p,gI as q,cI as r,ly as s,mI as t,EI as u,wI as v};
