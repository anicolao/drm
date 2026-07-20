import{b as Tv,a as lt,s as oi,e as _i,f as Mt,c as $r,o as Ev}from"./C2XEJfPJ.js";import{i as ns}from"./31b0TX71.js";import{g as Av,w as zr,o as uo,a as Cv,r as Rv,d as Iv}from"./C-pf22BB.js";import{V as Bm,W as Pv,h as wu,b as Dv,be as Lv,bf as If,ak as Uv,at as Pf,ax as Df,as as Lf,a as Uf,bg as Nv,r as Ov,p as bn,s as ue,g as E,C as zt,y as xe,E as Fi,B as an,i as tt,d as Sn,m as rt,f as Lt,j as bt,t as Jt,aU as fn,u as Ce,F as $i,bh as wi,ai as bi,w as Ss,bi as fi,aj as tn,bj as Il,al as id,am as gs,q as gn,G as sd,bk as Fv}from"./_97YgtbA.js";import{B as zm,p as Xe,i as pn,r as fo,s as rd,a as kv,b as Nf}from"./Ai9-48Tp.js";import{s as Bv}from"./3JA87B9D.js";import{L as zv,e as Dn,i as ai,b as ad,P as Pt,r as Vv,a as ua,d as Rh,p as Ih,f as Gv,h as Po,j as Hv,T as Vm,k as Tu,l as Gm,m as Hm,n as Wm,o as Wv,q as Of,Q as Xm,t as Xv,u as qv,v as $v,w as Yv,x as Zv,y as Kv,z as Jv,A as jv,B as Qv,D as e_,E as t_,S as qm,F as $m,G as n_,H as i_,I as s_,J as r_}from"./R0cDtDTy.js";import{w as a_,s as et,r as Ff,d as si,j as ci,k as kf,l as me,x as Tt,o as Ue,y as Pl,m as An,n as Cn,p as o_,t as l_,q as c_,z as is,A as Bf,B as hi,C as Yr}from"./Nk5XMEXG.js";import{b as Dl}from"./C5zxEbnZ.js";import{b as zf,p as Ym}from"./BwFgaCIA.js";function Cc(i,e,...t){var n=new zm(i);Bm(()=>{const s=e()??null;n.ensure(s,s&&(r=>s(r,...t)))},Pv)}const h_=Symbol("NaN");function Zm(i,e,t){wu&&Dv();var n=new zm(i),s=!Lv();Bm(()=>{var r=e();r!==r&&(r=h_),s&&r!==null&&typeof r=="object"&&(r={}),n.ensure(r,t)})}function Eu(i,e,t,n){var s=i[If];if(wu||s!==e){var r=a_(e);(!wu||r!==i.getAttribute("style"))&&(r==null?i.removeAttribute("style"):i.style.cssText=r),i[If]=e}return n}function od(i,e){var t=Uf,n=Df,s=i();const r=zr(s,a=>{var o=s!==i(),l,c=Df,u=Uf;Pf(n),Lf(t);try{l=Nv(()=>{Ov(()=>{const d=i();o&&a(d)})})}finally{Pf(c),Lf(u)}return o=!0,l});return e?{set:e,update:a=>e(a(i())),subscribe:r.subscribe}:{subscribe:r.subscribe}}function Rc(i){let e;const t=Tv(s=>{let r=!1;const a=i.subscribe(o=>{e=o,r&&s()});return r=!0,a});function n(){return Uv()?(t(),e):Av(i)}return"set"in i?{get current(){return n()},set current(s){i.set(s)}}:{get current(){return n()}}}let vr;var u_=Mt('<section class="mixer svelte-4qorxz" aria-label="Audio settings"><div class="svelte-4qorxz"><strong>MUSIC</strong><button class="svelte-4qorxz"> </button></div> <label class="svelte-4qorxz">Music volume <input aria-label="Music volume" type="range" min="0" max="100" class="svelte-4qorxz"/></label> <div class="svelte-4qorxz"><strong>EFFECTS</strong><button class="svelte-4qorxz"> </button></div> <label class="svelte-4qorxz">Effects volume <input aria-label="Effects volume" type="range" min="0" max="100" class="svelte-4qorxz"/></label></section>'),d_=Mt('<div class="audio-controls svelte-4qorxz"><button class="mute svelte-4qorxz"> </button> <button class="settings-toggle svelte-4qorxz" aria-label="Audio settings">MIX</button> <!></div>'),f_=Mt('<button class="start svelte-4qorxz" aria-label="Enable game audio">♪ TAP FOR SOUND</button>'),p_=Mt("<!> <!>",1);function po(i,e){bn(e,!1);let t=Xe(e,"enabled",8,!1),n=Xe(e,"loopUrl",8,void 0),s=Xe(e,"loopKey",8,""),r=Xe(e,"cueUrl",8,void 0),a=Xe(e,"cueSignal",8,0);const o=Symbol("audio-host");let l,c,u=rt(!1),d=rt(!1),h=rt(!1),f=rt(42),p=rt(62),v=rt(!1),g=rt(!1),m="",_=0,b=!1;function y(B){B&&(B.pause(),B.currentTime=0)}function w(){y(l),vr?.owner===o&&(vr=void 0),l=void 0,m=""}async function M(B){try{return await B.play(),ue(v,!1),!0}catch{return ue(v,!0),!1}}function C(B){vr&&vr.owner!==o&&y(vr.audio),vr={owner:o,audio:B}}function x(){localStorage.setItem("drm-audio-muted",String(E(u))),localStorage.setItem("drm-audio-settings",JSON.stringify({musicMuted:E(d),effectsMuted:E(h),musicVolume:E(f),effectsVolume:E(p)}))}function T(){if(b){if(!t()||E(u)){w(),y(c),c=void 0,ue(v,!1),_=a();return}!E(d)&&n()?m!==s()||!l?(w(),l=new Audio(n()),l.loop=!0,l.preload="auto",l.volume=E(f)/100,m=s(),C(l),M(l)):l.volume=E(f)/100:w(),!E(h)&&r()&&a()>_&&(y(c),c=new Audio(r()),c.preload="auto",c.volume=E(p)/100,M(c)),_=a()}}async function R(){l&&(C(l),await M(l)),c&&await M(c)}function I(){ue(u,!E(u)),x(),T()}function z(){x(),T()}uo(()=>{ue(u,localStorage.getItem("drm-audio-muted")==="true");try{const H=JSON.parse(localStorage.getItem("drm-audio-settings")??"{}");ue(d,H.musicMuted===!0),ue(h,H.effectsMuted===!0),Number.isFinite(H.musicVolume)&&ue(f,Math.max(0,Math.min(100,H.musicVolume))),Number.isFinite(H.effectsVolume)&&ue(p,Math.max(0,Math.min(100,H.effectsVolume)))}catch{}b=!0,T();const B=()=>{E(v)&&R()};return window.addEventListener("pointerdown",B,!0),window.addEventListener("keydown",B,!0),()=>{window.removeEventListener("pointerdown",B,!0),window.removeEventListener("keydown",B,!0)}}),Cv(()=>{w(),y(c)}),zt(()=>(xe(t()),xe(n()),xe(s()),xe(r()),xe(a()),E(d),E(h),E(f),E(p)),()=>{t(),n(),s(),r(),a(),E(d),E(h),E(f),E(p),T()}),Fi(),ns();var L=p_(),F=an(L);{var k=B=>{var H=d_(),ne=Lt(H),j=Lt(ne);bt(ne);var te=tt(ne,2),Re=tt(te,2);{var ct=at=>{var Q=u_(),ge=Lt(Q),he=tt(Lt(ge)),We=Lt(he,!0);bt(he),bt(ge);var Ke=tt(ge,2),le=tt(Lt(Ke));Ff(le),bt(Ke);var Te=tt(Ke,2),Ne=tt(Lt(Te)),se=Lt(Ne,!0);bt(Ne),bt(Te);var ae=tt(Te,2),oe=tt(Lt(ae));Ff(oe),bt(ae),bt(Q),Jt(()=>{et(he,"aria-label",E(d)?"Unmute music":"Mute music"),et(he,"aria-pressed",E(d)),oi(We,E(d)?"OFF":"ON"),et(Ne,"aria-label",E(h)?"Unmute effects":"Mute effects"),et(Ne,"aria-pressed",E(h)),oi(se,E(h)?"OFF":"ON")}),_i("click",he,()=>{ue(d,!E(d)),z()}),zf(le,()=>E(f),_e=>ue(f,_e)),_i("input",le,z),_i("click",Ne,()=>{ue(h,!E(h)),z()}),zf(oe,()=>E(p),_e=>ue(p,_e)),_i("input",oe,z),lt(at,Q)};pn(Re,at=>{E(g)&&at(ct)})}bt(H),Jt(()=>{et(ne,"aria-label",E(u)?"Unmute game audio":"Mute game audio"),et(ne,"aria-pressed",E(u)),oi(j,`♫ ${E(u)?"SOUND OFF":"SOUND ON"}`),et(te,"aria-expanded",E(g))}),_i("click",ne,I),_i("click",te,()=>ue(g,!E(g))),lt(B,H)};pn(F,B=>{t()&&B(k)})}var U=tt(F,2);{var O=B=>{var H=f_();_i("click",H,R),lt(B,H)};pn(U,B=>{t()&&E(v)&&!E(u)&&B(O)})}lt(i,L),Sn()}const m_=""+new URL("../assets/05. Chill.C8foJhTx.mp3",import.meta.url).href,g_=""+new URL("../assets/06. Chill Clear.-oz0izif.mp3",import.meta.url).href,v_=""+new URL("../assets/03. Fever.DOR2z6Jo.mp3",import.meta.url).href,__=""+new URL("../assets/04. Fever Clear.DCfLhPTS.mp3",import.meta.url).href,Vf=""+new URL("../assets/12. Combo Fanfare 1.CrabW0Of.mp3",import.meta.url).href;function iI(i,e){bn(e,!1);const t=rt(),n=rt();let s=Xe(e,"state",8),r=Xe(e,"enabled",8,!1),a=Xe(e,"rainSignal",8,0),o=rt(),l=rt(0),c=rt(0),u=rt();const d=h=>h%2?{music:v_,clear:__}:{music:m_,clear:g_};uo(()=>{const h=()=>{ue(u,Vf),fn(c)},f=p=>{ue(u,d(p.detail).clear),fn(c)};return window.addEventListener("drm-rain",h),window.addEventListener("drm-clear",f),()=>{window.removeEventListener("drm-rain",h),window.removeEventListener("drm-clear",f)}}),zt(()=>xe(s()),()=>{ue(t,s()?.phase==="playing"?d(s().level).music:void 0)}),zt(()=>xe(s()),()=>{ue(n,s()?`pill:${s().level}`:"")}),zt(()=>(xe(s()),xe(a()),E(l),E(c),E(o)),()=>{s()&&(a()>E(l)?(ue(u,Vf),fn(c)):s().phase==="countdown"&&E(o)==="playing"&&(ue(u,d(s().level).clear),fn(c)),ue(l,a()),ue(o,s().phase))}),Fi(),ns(),po(i,{get enabled(){return r()},get loopUrl(){return E(t)},get loopKey(){return E(n)},get cueUrl(){return E(u)},get cueSignal(){return E(c)}}),Sn()}var y_=Mt('<button class="svelte-e6s17f"> </button>'),x_=Mt('<small class="svelte-e6s17f"> </small>'),b_=Mt('<div class="match-result svelte-e6s17f" role="status" aria-live="polite"><h1 class="svelte-e6s17f"> </h1><!> <!> <!> <!></div>');function sI(i,e){bn(e,!1);let t=Xe(e,"title",8,"GAME OVER"),n=Xe(e,"action",8,"PLAY AGAIN"),s=Xe(e,"ready",8,0),r=Xe(e,"total",8,0),a=Xe(e,"disabled",8,!1),o=Xe(e,"interactive",8,!0),l=Xe(e,"level",8,0),c=Xe(e,"changeLevel",8,()=>{}),u=Xe(e,"activate",8,()=>{});uo(()=>{const w=M=>{!a()&&M.key.toLowerCase()==="a"&&!M.repeat&&(M.preventDefault(),u()())};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)}),ns();var d=b_(),h=Lt(d),f=Lt(h,!0);bt(h);var p=tt(h);Bv(p,e,"default",{});var v=tt(p,2);{var g=w=>{zv(w,{get level(){return l()},get disabled(){return a()},get change(){return c()},get activate(){return u()}})};pn(v,w=>{o()&&w(g)})}var m=tt(v,2);{var _=w=>{var M=y_(),C=Lt(M,!0);bt(M),Jt(()=>{M.disabled=a(),oi(C,n())}),_i("click",M,function(...x){u()?.apply(this,x)}),lt(w,M)};pn(m,w=>{o()&&w(_)})}var b=tt(m,2);{var y=w=>{var M=x_(),C=Lt(M);bt(M),Jt(()=>oi(C,`${s()??""}/${r()??""} ready`)),lt(w,M)};pn(b,w=>{r()>0&&w(y)})}bt(d),Jt(()=>oi(f,t())),lt(i,d),Sn()}var S_=Mt('<li class="svelte-18574qx"><span class="rank svelte-18574qx"></span><strong class="svelte-18574qx"> </strong><b class="svelte-18574qx"> </b></li>'),M_=Mt('<section class="match-standings svelte-18574qx" aria-label="Final standings"><h2 class="svelte-18574qx">FINAL STANDINGS</h2> <ol class="svelte-18574qx"></ol></section>');function rI(i,e){let t=Xe(e,"entries",24,()=>[]);var n=M_(),s=tt(Lt(n),2);Dn(s,5,t,ai,(r,a,o)=>{var l=S_(),c=Lt(l);c.textContent=o+1;var u=tt(c),d=Lt(u,!0);bt(u);var h=tt(u),f=Lt(h,!0);bt(h),bt(l),Jt(()=>{oi(d,(E(a),Ce(()=>E(a).name))),oi(f,(E(a),Ce(()=>E(a).score)))}),lt(r,l)}),bt(s),bt(n),lt(i,n)}function Au(i){let e=i|0;return e^=e<<13,e^=e>>>17,e^=e<<5,e>>>0}function w_(i){return i>>>0||1}const Gt=8,jn=16,dn=(i,e)=>i*Gt+e;function Ia(i){return i.rng=Au(i.rng),i.rng/4294967296}function T_(i){const e=Au(i.rng),t=Au(e);return[e,t].map(n=>Pt.colors[Math.floor(n/4294967296*Pt.colors.length)])}function ld(i){return{0:[[0,0],[0,1]],1:[[0,0],[-1,0]],2:[[0,1],[0,0]],3:[[-1,0],[0,0]]}[i.orientation].map(([t,n])=>[i.row+t,i.col+n])}function cd(i,e){return ld(e).every(([t,n])=>t>=0&&t<jn&&n>=0&&n<Gt&&!i.board[dn(t,n)])}function E_(i){for(let e=0;e<jn;e++)for(let t=0;t<Gt;t++){const n=i[dn(e,t)];if(n&&(t<=Gt-4&&[1,2,3].every(s=>i[dn(e,t+s)]?.color===n.color)||e<=jn-4&&[1,2,3].every(s=>i[dn(e+s,t)]?.color===n.color)))return!0}return!1}function Km(i){i.softDrop=!1;const e={id:i.nextId++,row:Pt.spawn.row,col:Pt.spawn.col,orientation:0,colors:[Pt.colors[Math.floor(Ia(i)*Pt.colors.length)],Pt.colors[Math.floor(Ia(i)*Pt.colors.length)]]};i.active=cd(i,e)?e:null,i.active||(i.phase="lost")}function A_(i){return Math.min(Pt.maxVirusCount,(i+1)*Pt.virusesPerLevel)}function C_(i){return Math.max(Pt.minimumGravityTicks,Pt.initialGravityTicks-i.level*Pt.gravityTicksPerLevel-Math.floor(i.pills/Pt.pillsPerSpeedIncrease))}function Jm(i){i.board.fill(null),i.active=null,i.pills=0,i.gravityCounter=0,i.viruses=A_(i.level),i.phase="playing",i.softDrop=!1,i.chain=0,i.resolving=!1,delete i.resolutionLineColors,delete i.pendingRain,delete i.fallingRain,delete i.rainGravityCounter,delete i.countdownEndsAt;let e=0,t=0;for(;e<i.viruses&&t++<1e5;){const n=Pt.virusRowStart+Math.floor(Ia(i)*(Pt.virusRowEnd-Pt.virusRowStart+1)),s=Math.floor(Ia(i)*Gt),r=dn(n,s);if(!i.board[r]){if(i.board[r]={kind:"virus",color:Pt.colors[Math.floor(Ia(i)*Pt.colors.length)],id:`l${i.level}v${e}`},E_(i.board)){i.board[r]=null;continue}e++}}i.viruses=e,Km(i)}function hd(i,e=0,t=0){const n={rulesVersion:ad,tick:0,level:t,pills:0,gravityCounter:0,board:Array(Gt*jn).fill(null),active:null,rng:w_(i),nextId:1,viruses:0,phase:"playing",softDrop:!1,chain:0,resolving:!1};return Jm(n),n}function ud(i){const e=new Set,t=[];for(let s=0;s<jn;s++)for(let r=0;r<Gt;r++){const a=i.board[dn(s,r)];if(a){if(r===0||i.board[dn(s,r-1)]?.color!==a.color){const o=[dn(s,r)];for(let l=r+1;l<Gt&&i.board[dn(s,l)]?.color===a.color;l++)o.push(dn(s,l));o.length>=4&&(o.forEach(l=>e.add(l)),t.push(a.color))}if(s===0||i.board[dn(s-1,r)]?.color!==a.color){const o=[dn(s,r)];for(let l=s+1;l<jn&&i.board[dn(l,r)]?.color===a.color;l++)o.push(dn(l,r));o.length>=4&&(o.forEach(l=>e.add(l)),t.push(a.color))}}}const n=[];for(const s of[...e].sort((r,a)=>r-a))i.board[s]?.kind==="virus"&&(n.push(i.board[s].color),i.viruses--),i.board[s]=null;return e.size&&i.viruses===0&&(i.phase="countdown",i.countdownEndsAt=i.tick+Pt.levelCountdownTicks,i.active=null,i.softDrop=!1,i.resolving=!1),e.size>0?{lineColors:t}:void 0}function Cu(i){const e=i.resolutionLineColors??[];return delete i.resolutionLineColors,e.length>0?[{type:"clear",tick:i.tick,chain:i.chain,lineColors:e}]:[]}function Ic(i){const e=i.pendingRain?.shift();if(i.pendingRain?.length===0&&delete i.pendingRain,!e){Km(i);return}const t=e.colors.map((n,s)=>({attackId:e.attackId,item:s,color:n,column:e.columns[s],row:0}));if(t.some(n=>i.board[dn(0,n.column)])){i.phase="lost",i.active=null,i.softDrop=!1;return}i.fallingRain=t,i.rainGravityCounter=0}function R_(i){const e=i.fallingRain;if(!e||(i.rainGravityCounter=(i.rainGravityCounter??0)+1,i.rainGravityCounter<Pt.rainGravityTicks))return;i.rainGravityCounter=0;const t=[];for(const s of e){const r=s.row+1;r>=jn||i.board[dn(r,s.column)]?i.board[dn(s.row,s.column)]={kind:"pill",color:s.color,id:`g${s.attackId}-${s.item}x`}:t.push({...s,row:r})}if(t.length>0){i.fallingRain=t;return}delete i.fallingRain,delete i.rainGravityCounter,ud(i)?(i.chain=1,i.phase==="playing"&&(i.resolving=!0)):Ic(i)}function I_(i){const e=new Map;i.board.forEach((c,u)=>{if(c?.kind!=="pill")return;const d=c.id.slice(0,-1),h=e.get(d)??[];h.push(u),e.set(d,h)});const t=[];for(const c of e.values())c.length===2&&Math.abs(Math.floor(c[0]/Gt)-Math.floor(c[1]/Gt))+Math.abs(c[0]%Gt-c[1]%Gt)===1?t.push(c):c.forEach(d=>t.push([d]));const n=new Map;t.forEach((c,u)=>c.forEach(d=>n.set(d,u)));const s=t.map((c,u)=>u).sort((c,u)=>Math.max(...t[u])-Math.max(...t[c])),r=new Set;let a=!0;for(;a;){a=!1;for(const c of s){if(r.has(c))continue;t[c].every(d=>{if(Math.floor(d/Gt)===jn-1)return!1;const h=d+Gt,f=n.get(h);return f===c||!i.board[h]||f!==void 0&&r.has(f)})&&(r.add(c),a=!0)}}const o=[...r].flatMap(c=>t[c]),l=o.map(c=>({from:c,to:c+Gt,cell:i.board[c]}));return l.forEach(({from:c})=>{i.board[c]=null}),l.forEach(({to:c,cell:u})=>{i.board[c]=u}),o.length>0}function jm(i){if(!i.active)return[];const e=i.active;ld(e).forEach(([n,s],r)=>{i.board[dn(n,s)]={kind:"pill",color:e.colors[r],id:`p${e.id}${r}`}}),i.active=null,i.pills++,i.gravityCounter=0,i.chain=0;const t=ud(i);return t?(i.resolutionLineColors=[...t.lineColors],i.chain=1,i.phase==="playing"&&(i.resolving=!0)):Ic(i),t&&!i.resolving?Cu(i):[]}function Ru(i,e,t){if(!i.active)return!1;const n={...i.active,row:i.active.row+e,col:i.active.col+t};return cd(i,n)?(i.active=n,delete i.active.groundedAt,!0):!1}function P_(i,e){i.phase==="playing"&&(i.pendingRain=[...i.pendingRain??[],{attackId:e.payload.attackId,colors:[...e.payload.colors],columns:[...e.payload.columns]}],!i.active&&!i.resolving&&!i.fallingRain&&Ic(i))}function Zr(i,e){if(e.type==="attack/rain")return P_(i,e),[];if(i.phase!=="playing"||!i.active)return[];if(e.type==="input/move")Ru(i,0,e.payload.dx);else if(e.type==="input/rotate"){const t=i.active.orientation%2===1,n=e.payload.direction==="clockwise"?1:3,s=(i.active.orientation+n)%4,r=[{...i.active,orientation:s}];t?r.push({...i.active,col:i.active.col-1,orientation:s}):r.push({...i.active,col:i.active.col+1,orientation:s},{...i.active,col:i.active.col-1,orientation:s});const a=r.find(o=>cd(i,o));a&&(i.active=a,delete i.active.groundedAt)}else if(e.type==="input/soft-drop-start")i.softDrop=!0;else if(e.type==="input/soft-drop-end")i.softDrop=!1;else if(e.type==="input/hard-drop"&&Pt.hardDrop){for(;Ru(i,1,0););return jm(i)}return[]}function dd(i){if(i.phase==="lost")return[];if(i.tick++,i.phase==="countdown")return i.countdownEndsAt!==void 0&&i.tick>=i.countdownEndsAt&&(i.level++,Jm(i)),[];if(i.resolving){if(i.tick%Pt.resolutionGravityTicks!==0)return[];if(I_(i))return[];const t=ud(i);return t?(i.resolutionLineColors&&(i.resolutionLineColors=[...i.resolutionLineColors,...t.lineColors]),i.chain++,i.resolving?[]:Cu(i)):(i.resolving=!1,Ic(i),Cu(i))}if(i.fallingRain)return R_(i),[];if(!i.active)return[];const e=i.softDrop?Pt.softDropTicks:C_(i);return i.gravityCounter++,i.gravityCounter>=e&&(i.gravityCounter=0,Ru(i,1,0)||(i.active.groundedAt??=i.tick)),i.active?.groundedAt!==void 0&&i.tick-i.active.groundedAt>=Pt.lockDelayTicks?jm(i):[]}function D_(i){return i.active?ld(i.active).map(([e,t],n)=>({row:e,col:t,cell:{kind:"pill",color:i.active.colors[n],id:`a${i.active.id}${n}`}})):[]}function L_(i){return(i.fallingRain??[]).map(e=>({row:e.row,col:e.column,cell:{kind:"pill",color:e.color,id:`g${e.attackId}-${e.item}x`}}))}const U_=2,N_=4;function O_(i){return i.lineColors.length>=U_?i.lineColors.slice(0,N_):[]}function F_(i){let e=2166136261;for(const t of i)e^=t.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0}function k_(i,e){const t=Array.from({length:Gt},(s,r)=>r);let n=F_(i);for(let s=t.length-1;s>0;s--){n=Math.imul(n,1664525)+1013904223>>>0;const r=n%(s+1);[t[s],t[r]]=[t[r],t[s]]}return t.slice(0,Math.min(e,Gt))}function Qm(i,e,t,n,s){const r=e.filter(({playerId:p})=>i.includes(p)),a=Object.fromEntries(r.map(({playerId:p,result:v})=>[p,v])),o=Object.fromEntries(r.map(({playerId:p,tick:v})=>[p,v])),l=Object.keys(a),c=new Set(l),u=t.filter(p=>i.includes(p)),d=i.length===1?c.size===1:c.size>=i.length-1,h=i.filter(p=>!c.has(p)),f=d&&h.length===1?h[0]:void 0;return{playerIds:i,terminalPlayerIds:l,readyPlayerIds:u,finished:d,winnerId:f,draw:d&&i.length>1&&f===void 0,allReady:d&&i.every(p=>u.includes(p)),terminalResults:a,terminalTicks:o,round:n,matchComplete:d&&(i.length===1||n+1>=s),roundPoints:Object.fromEntries(i.map(p=>[p,0])),scores:Object.fromEntries(i.map(p=>[p,0]))}}function B_(i,e,t){const n=Math.min(e,t??e);return i.reduce((s,r)=>r.tick<=n?Math.max(s,r.tick):s,0)}function eg(i,e,t,n=0){return Qm(i,e,t,n,Pt.matchRounds)}function fd(i,e,t){if(!Number.isInteger(e)||e<i.tick)throw new Error("Target tick must not precede the current state.");const n=new Map;for(const a of t){const o=n.get(a.commandId);if(o&&JSON.stringify(o)!==JSON.stringify(a))throw new Error(`Conflicting replay command identity: ${a.commandId}`);n.set(a.commandId,a)}const s=[...n.values()].sort((a,o)=>a.tick-o.tick||a.clientSeq-o.clientSeq||a.commandId.localeCompare(o.commandId));let r=0;for(;r<s.length&&s[r].tick<i.tick;)r++;for(;i.tick<=e;){for(;r<s.length&&s[r].tick===i.tick;)Zr(i,s[r].input),r++;if(i.tick===e)break;const a=i.tick;if(dd(i),i.tick===a)break}return i}function Pc(i){return{rulesVersion:i.rulesVersion,tick:i.tick,level:i.level,pills:i.pills,gravityCounter:i.gravityCounter,...i.countdownEndsAt===void 0?{}:{countdownEndsAt:i.countdownEndsAt},board:i.board.map(e=>e?{...e}:null),active:i.active?{...i.active,colors:[...i.active.colors]}:null,rng:i.rng,nextId:i.nextId,viruses:i.viruses,phase:i.phase,softDrop:i.softDrop,chain:i.chain,resolving:i.resolving,...i.resolutionLineColors?.length?{resolutionLineColors:[...i.resolutionLineColors]}:{},...i.pendingRain?.length?{pendingRain:i.pendingRain.map(e=>({attackId:e.attackId,colors:[...e.colors],columns:[...e.columns]}))}:{},...i.fallingRain?.length?{fallingRain:i.fallingRain.map(e=>({...e}))}:{},...i.rainGravityCounter===void 0?{}:{rainGravityCounter:i.rainGravityCounter}}}const mo=["cyan","pink","yellow"],un=(i,e=0)=>Number.isInteger(i)&&i>=e,go=(i,e)=>Object.keys(i).every(t=>e.includes(t)),z_=i=>{if(!i||typeof i!="object")return!1;const e=i;return go(e,["kind","color","id"])&&(e.kind==="virus"||e.kind==="pill")&&mo.includes(e.color)&&typeof e.id=="string"&&e.id.length>0&&e.id.length<=160},V_=i=>{if(!i||typeof i!="object")return!1;const e=i;return go(e,["id","row","col","orientation","colors","groundedAt"])&&un(e.id,1)&&un(e.row)&&un(e.col)&&[0,1,2,3].includes(e.orientation)&&Array.isArray(e.colors)&&e.colors.length===2&&e.colors.every(t=>mo.includes(t))&&(e.groundedAt===void 0||un(e.groundedAt))},G_=i=>{if(!i||typeof i!="object")return!1;const e=i;return go(e,["attackId","colors","columns"])&&typeof e.attackId=="string"&&e.attackId.length<=128&&Array.isArray(e.colors)&&e.colors.length>=2&&e.colors.length<=4&&e.colors.every(t=>mo.includes(t))&&Array.isArray(e.columns)&&e.columns.length===e.colors.length&&e.columns.every(t=>un(t)&&t<Gt)&&new Set(e.columns).size===e.columns.length},H_=i=>{if(!i||typeof i!="object")return!1;const e=i;return go(e,["attackId","item","color","column","row"])&&typeof e.attackId=="string"&&e.attackId.length<=128&&un(e.item)&&e.item<4&&mo.includes(e.color)&&un(e.column)&&e.column<Gt&&un(e.row)&&e.row<jn};function W_(i){if(!i||typeof i!="object")throw new Error("Invalid serialized bottle state.");const e=i;if(!go(e,["rulesVersion","tick","level","pills","gravityCounter","countdownEndsAt","board","active","rng","nextId","viruses","phase","softDrop","chain","resolving","resolutionLineColors","pendingRain","fallingRain","rainGravityCounter"])||e.rulesVersion!==ad||!un(e.tick)||!un(e.level)||!un(e.pills)||!un(e.gravityCounter)||e.countdownEndsAt!==void 0&&(!un(e.countdownEndsAt)||e.countdownEndsAt<e.tick)||!Array.isArray(e.board)||e.board.length!==Gt*jn||!e.board.every(t=>t===null||z_(t))||e.active!==null&&!V_(e.active)||!un(e.rng)||e.rng>4294967295||!un(e.nextId,1)||!un(e.viruses)||e.viruses>80||!["playing","countdown","lost"].includes(e.phase)||e.phase==="countdown"!=(e.countdownEndsAt!==void 0)||typeof e.softDrop!="boolean"||!un(e.chain)||typeof e.resolving!="boolean"||e.resolutionLineColors!==void 0&&(!Array.isArray(e.resolutionLineColors)||!e.resolutionLineColors.every(t=>mo.includes(t)))||e.pendingRain!==void 0&&(!Array.isArray(e.pendingRain)||!e.pendingRain.every(G_))||e.fallingRain!==void 0&&(!Array.isArray(e.fallingRain)||e.fallingRain.length<1||e.fallingRain.length>4||!e.fallingRain.every(H_))||e.rainGravityCounter!==void 0&&(!un(e.rainGravityCounter)||e.rainGravityCounter>=Pt.rainGravityTicks)||e.fallingRain===void 0!=(e.rainGravityCounter===void 0))throw new Error("Invalid serialized bottle state.");return e}function pd(i){return Pc(W_(i))}function Ha(i){const e=JSON.stringify(Pc(i));let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return`pb3-${(t>>>0).toString(16).padStart(8,"0")}`}class Dc{adapter;displayTick;state;checkpoint;pending=new Map;identities=new Map;controllerTick;reportedStateHash;hashMatches=!0;constructor(e,t,n=0){this.adapter=e,this.displayTick=n,this.state=e.clone(t),this.checkpoint={clientSeq:0,tick:e.tick(t),state:e.clone(t)},e.advanceTo(this.state,n)}receive(e){const t=JSON.stringify(e),n=this.identities.get(e.commandId);if(n&&n!==t)throw new Error(`Conflicting controller record identity: ${e.commandId}`);if(n||(this.identities.set(e.commandId,t),e.clientSeq<=this.checkpoint.clientSeq))return;const s=this.pending.get(e.clientSeq);if(s&&JSON.stringify(s)!==t)throw new Error(`Conflicting controller sequence: ${e.clientSeq}`);this.pending.set(e.clientSeq,e),this.adapter.progress(e)&&(this.controllerTick===void 0||e.tick>=this.controllerTick)&&(this.controllerTick=e.tick),this.processAvailable()}advance(){this.displayTick++,this.adapter.advanceTo(this.state,this.displayTick),this.processAvailable()}snapshot(){return{displayTick:this.displayTick,controllerTick:this.controllerTick,lag:this.controllerTick===void 0?void 0:this.displayTick-this.controllerTick,state:this.adapter.clone(this.state),stateHash:this.adapter.hash(this.state),reportedStateHash:this.reportedStateHash,hashMatches:this.hashMatches}}processAvailable(){for(;;){const e=this.pending.get(this.checkpoint.clientSeq+1);if(!e||e.tick>this.displayTick)return;if(e.tick<this.checkpoint.tick)throw new Error("Controller record tick precedes its checkpoint.");const t=this.adapter.clone(this.checkpoint.state);if(this.adapter.advanceTo(t,e.tick),this.adapter.tick(t)!==e.tick){if(!this.adapter.terminal?.(t))throw new Error("Controller record could not reach its declared tick.");const s=this.adapter.progress(e);s&&(this.reportedStateHash=s.stateHash,this.hashMatches=!1),this.checkpoint={clientSeq:e.clientSeq,tick:this.adapter.tick(t),state:this.adapter.clone(t)},this.pending.delete(e.clientSeq),this.state=t;continue}const n=this.adapter.progress(e);n?(this.reportedStateHash=n.stateHash,this.hashMatches=this.adapter.hash(t)===n.stateHash&&this.adapter.phase(t)===n.phase):this.adapter.apply(t,e),this.checkpoint={clientSeq:e.clientSeq,tick:e.tick,state:this.adapter.clone(t)},this.pending.delete(e.clientSeq),this.adapter.advanceTo(t,this.displayTick),this.state=t}}}function X_(i,e){for(;i.tick<e&&i.phase!=="lost";)dd(i)}class q_ extends Dc{constructor(e,t=0){super({clone:n=>pd(Pc(n)),tick:n=>n.tick,advanceTo:X_,apply:(n,s)=>{s.type!=="progress/tick"&&Zr(n,s)},hash:Ha,phase:n=>n.phase,terminal:n=>n.phase==="lost",progress:n=>n.type==="progress/tick"?n.payload:void 0},e,t)}}function $_(i,e){fd(i,e.tick,[]),e.type!=="progress/tick"&&Zr(i,e)}function Gf(i,e,t,n,s){const r=i.players[e];if(!r)return 0;const a=B_(t,n,s),o=hd(i.seed,r.seat,r.level);for(const l of t){if(l.tick>a)break;$_(o,l)}return o.tick<a&&o.phase!=="lost"&&fd(o,a,[]),o.viruses}function tg(i,e,t){const n=Object.fromEntries(e.playerIds.map(r=>[r,0])),s=e.playerIds.filter(r=>e.terminalResults[r]==="cleared");for(const r of s){const a=e.terminalTicks[r];for(const o of e.playerIds)o!==r&&(n[r]+=Gf(i,o,t.get(o)??[],a,e.terminalTicks[o]))}if(s.length===0&&e.finished&&e.winnerId)for(const r of e.terminalPlayerIds){if(e.terminalResults[r]!=="lost")continue;const a=e.terminalTicks[r];n[e.winnerId]+=Gf(i,r,t.get(r)??[],a,a)}return n}var Y_=Mt('<canvas class="preview-pill svelte-1jw6p41" width="40" height="20"></canvas>'),Z_=Mt('<div class="next-pill svelte-1jw6p41"><!></div>'),K_=Mt('<div class="bottle-shell svelte-1jw6p41"><!> <canvas width="184" height="360"></canvas></div>');function aI(i,e){bn(e,!1);const t=rt();let n=Xe(e,"state",8),s=Xe(e,"label",8,"Pill bottle"),r=Xe(e,"showPreview",8,!0),a=rt(),o=rt(),l="",c=rt(""),u="",d;const h=10,f=6,p=11,v=2,g={cyan:"#39d9e6",pink:"#ff4f91",yellow:"#ffd84a"};function m(L){return L.kind==="pill"?L.id.slice(0,-1):""}function _(L,F){const k=f+F.col*h,U=p+F.row*h;L.fillStyle="#08090d",L.beginPath(),L.roundRect(k+.25,U+1.25,9.5,7,3),L.fill(),L.fillRect(k+2,U+.25,2.25,2.5),L.fillRect(k+5.75,U+.25,2.25,2.5),L.fillRect(k+1.25,U+7,2.75,2.5),L.fillRect(k+6,U+7,2.75,2.5),L.fillStyle=g[F.color],L.beginPath(),L.roundRect(k+1.25,U+2,7.5,5.5,2),L.fill(),L.fillRect(k+2.75,U+1,1.25,2),L.fillRect(k+6,U+1,1.25,2),L.fillRect(k+2,U+7,1.5,1.5),L.fillRect(k+6.5,U+7,1.5,1.5),L.fillStyle="rgba(255,255,255,.34)",L.fillRect(k+2,U+2.25,5.75,.75),L.fillStyle="#08090d",L.fillRect(k+2.5,U+4,1.5,1.75),L.fillRect(k+6,U+4,1.5,1.75),L.fillRect(k+4.25,U+6.25,1.5,.75)}function b(L,F,k){return L===1?[k,0,0,k]:L===-1?[0,k,k,0]:F===1?[k,k,0,0]:F===-1?[0,0,k,k]:k}function y(L,F,k,U=f,O=p){const B=k.find(he=>he!==F&&m(he)===m(F)),H=B?.col===F.col?0:(B?.col??F.col)-F.col,ne=B?.row===F.row?0:(B?.row??F.row)-F.row,j=U+F.col*h,te=O+F.row*h,Re=b(H,ne,4);L.fillStyle="#08090d",L.beginPath(),L.roundRect(j,te,10,10,Re),L.fill();const ct=j+(H===-1?0:1.25),at=te+(ne===-1?0:1.25),Q=H===0?7.5:8.75,ge=ne===0?7.5:8.75;L.fillStyle=g[F.color],L.beginPath(),L.roundRect(ct,at,Q,ge,b(H,ne,3)),L.fill(),L.save(),L.beginPath(),L.roundRect(ct,at,Q,ge,b(H,ne,3)),L.clip(),ne!==-1&&(L.fillStyle="rgba(255,255,255,.38)",L.fillRect(j+(H===-1?0:1.75),te+1.75,H===0?6.5:8.25,1.25)),ne!==1&&(L.fillStyle="rgba(0,0,0,.28)",L.fillRect(j+(H===-1?0:1.75),te+7.25,H===0?6.5:8.25,1.25)),L.restore(),L.fillStyle="#08090d",H===1&&L.fillRect(j+9.75,te+1.25,.5,7.5),ne===1&&L.fillRect(j+1.25,te+9.75,7.5,.5)}function w(){if(!E(o)||n().phase!=="playing")return;const L=E(o).getContext("2d");if(!L)return;L.setTransform(1,0,0,1,0,0),L.clearRect(0,0,E(o).width,E(o).height),L.setTransform(v,0,0,v,0,0);const F=[{id:"previewa",kind:"pill",color:E(t)[0],row:0,col:0},{id:"previewb",kind:"pill",color:E(t)[1],row:0,col:1}];for(const k of F)y(L,k,F,0,0)}function M(){if(!E(a))return;const L=`${n().phase}|${n().board.map(U=>U?`${U.id}:${U.color}`:"").join(",")}|${n().active?`${n().active.id}:${n().active.row}:${n().active.col}:${n().active.orientation}:${n().active.colors.join(":")}`:""}|${n().fallingRain?.map(U=>`${U.attackId}:${U.item}:${U.row}`).join(",")??""}`;if(L===l)return;l=L;const F=E(a).getContext("2d");if(!F)return;F.setTransform(1,0,0,1,0,0),F.clearRect(0,0,E(a).width,E(a).height),F.setTransform(v,0,0,v,0,0),F.imageSmoothingEnabled=!0,F.fillStyle="#606477",F.fillRect(26,0,40,3),F.fillRect(26,0,3,11),F.fillRect(63,0,3,11),F.fillRect(3,8,86,169),F.fillStyle="#08090d",F.fillRect(6,11,80,163),F.fillStyle="#050609",F.fillRect(89,13,3,164),F.fillRect(8,177,84,3),F.fillStyle="#0d0f14";for(let U=1;U<Gt;U++)F.fillRect(f+U*h,p,.35,jn*h);for(let U=1;U<jn;U++)F.fillRect(f,p+U*h,Gt*h,.35);const k=[];n().board.forEach((U,O)=>{U&&k.push({...U,row:Math.floor(O/Gt),col:O%Gt})});for(const U of D_(n()))k.push({...U.cell,row:U.row,col:U.col});for(const U of L_(n()))k.push({...U.cell,row:U.row,col:U.col});for(const U of k)U.kind==="virus"?_(F,U):y(F,U,k);w()}function C(){if(!E(a))return;const L=n().board.filter(H=>H?.id.startsWith("g")).length,F=`${n().viruses}:${n().pills}:${n().phase}:${L}`;if(!u){u=F;return}if(F===u)return;const[k,U,O,B]=u.split(":");u=F,ue(c,L>Number(B)?"rain":n().viruses<Number(k)?"clear":n().phase!==O?"finish":n().pills>Number(U)?"lock":""),E(c)&&(d&&clearTimeout(d),d=setTimeout(()=>ue(c,""),420))}uo(()=>(M(),C(),()=>{d&&clearTimeout(d)})),zt(()=>xe(n()),()=>{ue(t,T_(n()))}),zt(()=>xe(n()),()=>{n(),M(),C()}),Fi(),ns();var x=K_(),T=Lt(x);{var R=L=>{var F=Z_(),k=Lt(F);{var U=O=>{var B=Y_();Dl(B,H=>ue(o,H),()=>E(o)),lt(O,B)};pn(k,O=>{xe(n()),Ce(()=>n().phase==="playing")&&O(U)})}bt(F),Jt(()=>{et(F,"aria-label",(E(t),Ce(()=>`Next pill: ${E(t)[0]} and ${E(t)[1]}`))),et(F,"aria-hidden",(xe(n()),Ce(()=>n().phase!=="playing")))}),lt(L,F)};pn(T,L=>{r()&&L(R)})}var I=tt(T,2);let z;Dl(I,L=>ue(a,L),()=>E(a)),bt(x),Jt((L,F,k)=>{z=si(I,1,"bottle svelte-1jw6p41",null,z,{clear:E(c)==="clear",lock:E(c)==="lock",finish:E(c)==="finish",rain:E(c)==="rain"}),et(I,"aria-label",s()),et(I,"data-cell-count",Gt*jn),et(I,"data-virus-count",(xe(n()),Ce(()=>n().viruses))),et(I,"data-next-colors",L),et(I,"data-active-pill",(xe(n()),Ce(()=>n().active?"true":"false"))),et(I,"data-active-pill-id",(xe(n()),Ce(()=>n().active?.id??""))),et(I,"data-pending-rain-count",(xe(n()),Ce(()=>n().pendingRain?.length??0))),et(I,"data-rain-rows",F),et(I,"data-garbage-count",k)},[()=>(E(t),Ce(()=>E(t).join(","))),()=>(xe(n()),Ce(()=>n().fallingRain?.map(L=>L.row).join(",")??"")),()=>(xe(n()),Ce(()=>n().board.filter(L=>L?.id.startsWith("g")).length))]),lt(i,x),Sn()}class As{lastTime;accumulator=0;tickRate;maximumCatchUpMs;constructor(e,t=250){if(!Number.isFinite(e)||e<=0)throw new Error("Tick rate must be positive.");this.tickRate=e,this.maximumCatchUpMs=t}consume(e){if(this.lastTime===void 0)return this.lastTime=e,0;this.accumulator+=Math.min(Math.max(0,e-this.lastTime),this.maximumCatchUpMs),this.lastTime=e;const t=1e3/this.tickRate,n=Math.floor(this.accumulator/t);return this.accumulator-=n*t,n}reset(){this.lastTime=void 0,this.accumulator=0}}async function Lc(i,e){if(!ci?.currentUser||!me)throw new Error("Firebase is unavailable.");const t=ci.currentUser.uid,n=Ue(me,`games/${i}/rematch/ready/${t}`);if(!Number.isInteger(e)||e<0||e>20)throw new Error("Level must be between 0 and 20.");(await Tt(n)).exists()||await An(n,{playerId:t,level:e,serverTime:Cn()})}async function Uc(i,e,t){if(!ci?.currentUser||!kf||!me)throw new Error("Firebase is unavailable.");const n=await Tt(Ue(me,`games/${i}/start`));if(!n.exists())throw new Error("The previous game no longer exists.");const s=e(n.val());if(!s.players[ci.currentUser.uid])return;const r=await Tt(Ue(me,`games/${i}/rematch/ready`)),a=new Map;if(r.forEach(f=>{const p=f.val();p?.playerId===f.key&&Number.isInteger(p.level)&&a.set(p.playerId,p.level)}),!Object.keys(s.players).every(f=>a.has(f)))return;const o=crypto.randomUUID(),l=Ue(me,`games/${i}/rematch/nextGameId`),c=await Pl(l,f=>f===null?o:void 0,{applyLocally:!1}),u=c.committed?c.snapshot.val():(await Tt(l)).val();if(typeof u!="string")throw new Error("Could not reserve the rematch.");const d=t(s),h=Ue(me,`games/${u}/start`);try{await An(h,{type:"game/started",roomId:s.roomId,ruleset:s.ruleset,rulesVersion:s.rulesVersion,seed:Vv(),tickRate:s.tickRate,hostUid:s.hostUid,members:s.members,players:Object.fromEntries(Object.entries(s.players).map(([f,p])=>[f,{...p,level:s.ruleset==="quarry-match"?Math.max(...a.values()):a.get(f)}])),settings:d.settings??s.settings,audioOutput:s.audioOutput,...d.scores??s.scores?{scores:d.scores??s.scores}:{},matchId:d.advance?s.matchId:u,round:d.advance?s.round+1:0,previousGameId:i,serverTime:Cn()})}catch(f){const p=await Tt(h).catch(()=>{});if(!p?.exists()||e(p.val()).roomId!==s.roomId)throw f}return await o_(l_(kf,"rooms",s.roomId),{status:"active",activeGameId:u,startedAt:c_()}),u}function J_(i,e,t,n,s,r=!1){let a=!1,o=()=>{};return(async()=>{try{const l=Ue(i,`games/${e}/interactions`),c=await Tt(l),u=new Set;if(r||c.forEach(d=>{u.add(d.key)}),a)return;o=is(l,d=>{try{const h=t(d.val());u.delete(d.key)||n(h,d.key)}catch(h){s(h instanceof Error?h:new Error(String(h)))}},s)}catch(l){s(l instanceof Error?l:new Error(String(l)))}})(),()=>{a=!0,o()}}function j_(i=globalThis.localStorage){const e=crypto.randomUUID();try{const t=i?.getItem("drm-client-id");if(t)return t;i?.setItem("drm-client-id",e)}catch{}return e}class Nc{epochId=crypto.randomUUID();clientId=j_();owned=!1;unsubscribe=()=>{};database;path;lost;constructor(e,t,n){this.database=e,this.path=t,this.lost=n}async claim(e=!1){const t=Ue(this.database,this.path),n=await Pl(t,s=>e||s===null||s?.epochId===this.epochId?{epochId:this.epochId,clientId:this.clientId}:void 0,{applyLocally:!1});return this.owned=n.committed&&n.snapshot.val()?.epochId===this.epochId,this.owned?(await Bf(t).remove(),this.unsubscribe(),this.unsubscribe=hi(t,s=>{this.owned&&s.val()?.epochId!==this.epochId&&(this.owned=!1,this.lost())}),!0):!1}async takeOver(){return this.claim(!0)}async release(){this.unsubscribe();const e=Ue(this.database,this.path);await Bf(e).cancel(),await Pl(e,t=>t?.epochId===this.epochId?null:t,{applyLocally:!1}),this.owned=!1}async suspend(){this.owned&&(await An(Ue(this.database,this.path),null),this.owned=!1)}get ownsWriter(){return this.owned}}class Wa{options;items;flushing=!1;retry;destroyed=!1;constructor(e){this.options=e,this.items=[...e.initial].sort(e.order)}enqueue(e){this.items.some(t=>this.options.identify(t)===this.options.identify(e))||(this.items=[...this.items,e].sort(this.options.order),this.options.persist(this.items),this.flush())}async flush(){if(!(this.flushing||this.destroyed)){this.flushing=!0;try{for(;this.items.length&&!this.destroyed;){const e=this.items[0];await this.options.deliver(e);const t=this.options.identify(e);this.items=this.items.filter(n=>this.options.identify(n)!==t),this.options.persist(this.items)}}catch(e){this.options.failed?.(e),!this.retry&&!this.destroyed&&(this.retry=setTimeout(()=>{this.retry=void 0,this.flush()},this.options.retryMilliseconds??1e3))}finally{this.flushing=!1}}}values(){return[...this.items]}destroy(){this.destroyed=!0,this.retry&&clearTimeout(this.retry)}}const wt=i=>!!i&&typeof i=="object"&&!Array.isArray(i),St=(i,e)=>Object.keys(i).every(t=>e.includes(t)),It=(i,e=0,t=1e9)=>Number.isInteger(i)&&i>=e&&i<=t,yt=(i,e=128)=>typeof i=="string"&&i.length>0&&i.length<=e,ki=i=>typeof i=="number"&&Number.isFinite(i)&&i>=0;function md(i,e,t=!1){const n=t?["type","playerId","epochId","clientSeq","tick","payload"]:["type","playerId","epochId","clientSeq","tick","payload","serverTime"];if(!wt(e)||!St(e,n)||!yt(i)||!yt(e.playerId)||!yt(e.epochId)||!It(e.clientSeq,1)||!It(e.tick)||!t&&!ki(e.serverTime))throw new Error("Invalid controller record envelope.");return e}function Q_(i,e){const t=wt(e)?e:{};if(i==="input/move"&&St(t,["dx"])&&(t.dx===-1||t.dx===1))return{type:i,payload:{dx:t.dx}};if(i==="input/rotate"&&St(t,["direction"])&&(t.direction==="clockwise"||t.direction==="counterclockwise"))return{type:i,payload:{direction:t.direction}};if((i==="input/soft-drop-start"||i==="input/soft-drop-end"||i==="input/hard-drop")&&St(t,[]))return{type:i,payload:{}};throw new Error("Invalid pill command input.")}function vo(i){if(!wt(i)||!St(i,["type","roomId","ruleset","rulesVersion","seed","tickRate","hostUid","audioOutput","members","players","settings","matchId","round","previousGameId","serverTime"])||i.type!=="game/started"||i.ruleset!=="pill-bottle"||i.rulesVersion!==ad||i.tickRate!==Pt.tickRate||!yt(i.roomId)||!yt(i.hostUid)||i.audioOutput!==void 0&&i.audioOutput!=="cast"&&i.audioOutput!=="controllers"||i.matchId!==void 0&&!yt(i.matchId)||i.round!==void 0&&!It(i.round,0,Pt.matchRounds-1)||i.previousGameId!==void 0&&!yt(i.previousGameId)||!It(i.seed,0,4294967295)||!ki(i.serverTime)||!wt(i.members)||!wt(i.players)||!wt(i.settings))throw new Error("Invalid pill-bottle/3 start record.");const e=i.members,t=Object.entries(e),n=Object.entries(i.players),s=n.map(([,a])=>wt(a)?a.seat:void 0),r=i.settings;if(t.length<1||t.length>4||!t.every(([a,o])=>yt(a)&&o===!0)||e[i.hostUid]!==!0||n.length<1||n.length>4||!n.every(([a,o])=>yt(a)&&wt(o)&&St(o,["seat","level"])&&It(o.seat,0,3)&&It(o.level,0,20)&&e[a]===!0)||new Set(s).size!==s.length||!St(r,["initialVirusCount","initialGravityTicks","hardDrop","matchRounds"])||r.initialVirusCount!==ua.initialVirusCount||r.initialGravityTicks!==ua.initialGravityTicks||r.hardDrop!==ua.hardDrop||r.matchRounds!==void 0&&r.matchRounds!==ua.matchRounds)throw new Error("Invalid pill-bottle/3 start definition.");return{...i,audioOutput:i.audioOutput??"controllers",settings:{...r,matchRounds:ua.matchRounds},matchId:i.matchId??i.roomId,round:i.round??0}}function nr(i,e,t={}){const n=t.pending?["type","playerId","epochId","clientSeq","tick","payload"]:["type","playerId","epochId","clientSeq","tick","payload","serverTime"];if(!wt(e)||!St(e,n)||!yt(i)||!yt(e.playerId)||!yt(e.epochId)||!It(e.clientSeq,1)||!It(e.tick)||!t.pending&&!ki(e.serverTime))throw new Error("Invalid pill controller record.");const s={commandId:i,playerId:e.playerId,epochId:e.epochId,clientSeq:e.clientSeq,tick:e.tick};if(e.type==="attack/rain"){if(!wt(e.payload)||!St(e.payload,["attackId","colors","columns"])||!yt(e.payload.attackId)||!Array.isArray(e.payload.colors)||!Array.isArray(e.payload.columns)||e.payload.colors.length<2||e.payload.colors.length>4||e.payload.colors.length!==e.payload.columns.length||!e.payload.colors.every(a=>["cyan","pink","yellow"].includes(a))||!e.payload.columns.every(a=>It(a,0,7))||new Set(e.payload.columns).size!==e.payload.columns.length)throw new Error("Invalid pill rain attack.");return{...s,type:e.type,payload:e.payload,...t.pending?{}:{serverTime:e.serverTime}}}if(e.type==="progress/tick"){if(!wt(e.payload)||!St(e.payload,["phase","stateHash"])||!["playing","countdown","lost"].includes(e.payload.phase)||typeof e.payload.stateHash!="string"||!/^pb3-[0-9a-f]{8}$/.test(e.payload.stateHash))throw new Error("Invalid pill progress command.");return{...s,type:e.type,payload:{phase:e.payload.phase,stateHash:e.payload.stateHash},...t.pending?{}:{serverTime:e.serverTime}}}const r=Q_(e.type,e.payload);return{...s,...r,...t.pending?{}:{serverTime:e.serverTime}}}function ng(i){if(!wt(i)||!St(i,["type","playerId","tick","result","stateHash","serverTime"])||i.type!=="player/terminal"||!yt(i.playerId)||!It(i.tick)||!["cleared","lost"].includes(i.result)||typeof i.stateHash!="string"||!/^pb3-[0-9a-f]{8}$/.test(i.stateHash)||!ki(i.serverTime))throw new Error("Invalid pill terminal declaration.");return i}function ey(i){if(!wt(i)||!St(i,["playerId","level","serverTime"])||!yt(i.playerId)||!It(i.level,0,20)||!ki(i.serverTime))throw new Error("Invalid pill rematch readiness.");return i}function gd(i){if(!wt(i)||!St(i,["type","attackId","sourcePlayerId","sourceTick","sourceChain","targetPlayerIds","colors","serverTime"])||i.type!=="attack/generated"||!yt(i.attackId)||!yt(i.sourcePlayerId)||!It(i.sourceTick)||!It(i.sourceChain,1,100)||!Array.isArray(i.targetPlayerIds)||i.targetPlayerIds.length<1||i.targetPlayerIds.length>3||!i.targetPlayerIds.every(e=>yt(e))||new Set(i.targetPlayerIds).size!==i.targetPlayerIds.length||!Array.isArray(i.colors)||i.colors.length<2||i.colors.length>4||!i.colors.every(e=>["cyan","pink","yellow"].includes(e))||!ki(i.serverTime))throw new Error("Invalid pill attack interaction.");return i}function _o(i,e,t){try{const n=JSON.parse(i.getItem(e)??"[]");return Array.isArray(n)?n.map(t):[]}catch{return[]}}function yo(i,e,t){i.setItem(e,JSON.stringify(t))}function ty(i,e,t){try{const n=JSON.parse(i.getItem(e)??"null");return n===null?void 0:t(n)}catch{return}}function ny(i,e,t){i.setItem(e,JSON.stringify(t))}function vd(i,e,t,n){return`drm-game:${i}:${e}:${t}:${n}`}const ra=(i,e)=>`drm-pill-bottle:${i}:${e}`;function iy(i,e){return _o(localStorage,`${ra(i,e)}:outbox`,t=>{if(!t||typeof t!="object"||typeof t.commandId!="string")throw new Error("Invalid local controller outbox.");const{commandId:n,...s}=t;return nr(n,s,{pending:!0})})}function sy(i,e,t){yo(localStorage,`${ra(i,e)}:outbox`,t)}function ry(i,e){return _o(localStorage,`${ra(i,e)}:attacks`,t=>{if(!t||typeof t!="object"||typeof t.interactionId!="string")throw new Error("Invalid local attack outbox.");const{interactionId:n,...s}=t,{serverTime:r,...a}=gd({...s,serverTime:0});return{interactionId:n,...a}})}function ay(i,e,t){yo(localStorage,`${ra(i,e)}:attacks`,t)}function Hf(i,e,t,n){const s={commandId:t.commandId,clientSeq:t.clientSeq,tick:t.tick,state:Pc(n),stateHash:Ha(n)};ny(localStorage,`${ra(i,e)}:checkpoint`,s)}function oy(i,e){return ty(localStorage,`${ra(i,e)}:checkpoint`,t=>{const n=t;if(!n||typeof n.commandId!="string"||!Number.isInteger(n.clientSeq)||!Number.isInteger(n.tick)||typeof n.stateHash!="string")throw new Error("Invalid local checkpoint.");const s=pd(n.state);if(s.tick!==n.tick||Ha(s)!==n.stateHash)throw new Error("Invalid local checkpoint state.");return n})}function ig(i,e,t){if(!me)throw new Error("Firebase is unavailable.");let n=!1,s=[],r=[],a=[],o=0,l,c={};const u=new Map,d=[],h=()=>{if(s.length===0)return;const f=eg(s,r,a,o);if(!l)return e(f);const p=tg(l,f,u),v=Object.fromEntries(s.map(g=>[g,(c[g]??0)+p[g]]));e({...f,roundPoints:p,scores:v})};return(async()=>{try{const f=await Tt(Ue(me,`games/${i}/start`));if(n||!f.exists())return;const p=vo(f.val());l=p,s=Object.keys(p.players),o=p.round,c=await uy(p.previousGameId,p.matchId),await Promise.all(s.map(async v=>{const g=await Tt(Ue(me,`games/${i}/players/${v}/records`)),m=[];g.forEach(_=>{const b=Kr(nr(_.key,_.val()));b.playerId===v&&m.push(b)}),m.sort((_,b)=>_.clientSeq-b.clientSeq),u.set(v,m),d.push(is(Ue(me,`games/${i}/players/${v}/records`),_=>{try{const b=Kr(nr(_.key,_.val())),y=u.get(v)??[];b.playerId===v&&!y.some(w=>w.commandId===b.commandId)&&(y.push(b),y.sort((w,M)=>w.clientSeq-M.clientSeq),u.set(v,y),h())}catch(b){t(b instanceof Error?b:new Error(String(b)))}},t))})),d.push(hi(Ue(me,`games/${i}/terminals`),v=>{try{r=[],v.forEach(g=>{const m=ng(g.val());g.key===m.playerId&&s.includes(m.playerId)&&r.push(m)}),h()}catch(g){t(g instanceof Error?g:new Error(String(g)))}},t)),d.push(hi(Ue(me,`games/${i}/rematch/ready`),v=>{try{a=[],v.forEach(g=>{const m=ey(g.val());g.key===m.playerId&&s.includes(m.playerId)&&a.push(m.playerId)}),h()}catch(g){t(g instanceof Error?g:new Error(String(g)))}},t)),h()}catch(f){t(f instanceof Error?f:new Error(String(f)))}})(),()=>{n=!0;for(const f of d)f()}}async function ly(i,e){return Lc(i,e)}async function sg(i){return Uc(i,vo,e=>({advance:Object.keys(e.players).length>1&&e.round+1<Pt.matchRounds}))}function Kr(i){const{serverTime:e,...t}=i;return t}function cy(i,e,t,n,s,r=!0){if(!me)throw new Error("Firebase is unavailable.");let a=!1,o=0;const l=new As(Pt.tickRate);let c=!1,u=new Set,d=!1;const h=[],f=new Map,p=new Map,v=ig(i,_=>{c=_.finished,u=new Set(_.terminalPlayerIds),n?.(_),r&&_.allReady&&!d&&(d=!0,sg(i).catch(b=>{d=!1,t(b)}))},t),g=()=>{e([...f.entries()].map(([_,b])=>{const y=b.snapshot();return{playerId:_,tick:y.displayTick,...y}}))},m=_=>{if(!a){for(let b=l.consume(_);b>0;b--)if(!c)for(const[y,w]of f)u.has(y)||w.advance();g(),o=requestAnimationFrame(m)}};return(async()=>{try{const _=await Tt(Ue(me,`games/${i}/start`));if(a||!_.exists())return;const b=vo(_.val());s?.(b);let y=0;if(await Promise.all(Object.keys(b.players).map(async w=>{const M=await Tt(Ue(me,`games/${i}/players/${w}/records`)),C=[];M.forEach(x=>{const T=Kr(nr(x.key,x.val()));T.playerId===w&&C.push(T)}),C.sort((x,T)=>x.clientSeq-T.clientSeq);for(const x of C)x.type==="progress/tick"&&(y=Math.max(y,x.tick));p.set(w,C)})),a)return;for(const[w,M]of Object.entries(b.players)){const C=new q_(hd(b.seed,M.seat,M.level),y);f.set(w,C);for(const x of p.get(w)??[])C.receive(x);h.push(is(Ue(me,`games/${i}/players/${w}/records`),x=>{try{const T=Kr(nr(x.key,x.val()));if(T.playerId===w){const R=p.get(w)??[];R.some(I=>I.commandId===T.commandId)||(R.push(T),R.sort((I,z)=>I.clientSeq-z.clientSeq),p.set(w,R)),C.receive(T)}g()}catch(T){t(T instanceof Error?T:new Error(String(T)))}},t))}g(),o=requestAnimationFrame(m)}catch(_){t(_ instanceof Error?_:new Error(String(_)))}})(),()=>{a=!0,cancelAnimationFrame(o),v();for(const _ of h)_()}}function oI(i,e,t){if(!me)throw new Error("Firebase is unavailable.");return J_(me,i,gd,()=>e(),t)}function hy(i,e){fd(i,e.tick,[]),e.type!=="progress/tick"&&Zr(i,e)}async function uy(i,e){const t={};let n=i;for(;n&&me;){const s=await Tt(Ue(me,`games/${n}/start`));if(!s.exists())break;const r=vo(s.val());if(r.matchId!==e)break;const a=await Tt(Ue(me,`games/${n}/terminals`)),o=[];a.forEach(h=>{o.push(ng(h.val()))});const l=Object.keys(r.players),c=eg(l,o,[],r.round),u=new Map;await Promise.all(l.map(async h=>{const f=await Tt(Ue(me,`games/${n}/players/${h}/records`)),p=[];f.forEach(v=>{p.push(Kr(nr(v.key,v.val())))}),p.sort((v,g)=>v.clientSeq-g.clientSeq),u.set(h,p)}));const d=tg(r,c,u);for(const h of l)t[h]=(t[h]??0)+d[h];n=r.previousGameId}return t}function lI(i,e){if(!ci?.currentUser||!me)throw new Error("Firebase is unavailable.");const t=ci.currentUser.uid;let n=0,s=0,r=-1,a=0;const o=new As(Pt.tickRate);let l=!1,c=!1,u=!1,d=!1,h=!1,f=!1,p=!1,v=!1,g,m,_,b,y=0,w=!1,M=[],C=[],x=()=>{},T=()=>{};const R=new Set,I=iy(i,t),z=ry(i,t),L=le=>e({playerId:t,tick:n,ready:l,bottle:m?structuredClone(m):void 0,lastCommand:g,error:le,lifecycle:_,audioOutput:b,rainSignal:y,ownershipConflict:w,opponents:C.map(Te=>({...Te,state:structuredClone(Te.state)}))}),F=new Nc(me,`games/${i}/players/${t}/writer`,()=>{w=!0,l=!1,d=!0,cancelAnimationFrame(a),L("Control moved to another tab or device.")}),k=F.epochId,U=new Wa({initial:I,order:(le,Te)=>le.clientSeq-Te.clientSeq,identify:le=>le.commandId,persist:le=>sy(i,t,le),deliver:async le=>{const{commandId:Te,...Ne}=le;await An(Ue(me,`games/${i}/players/${t}/records/${Te}`),{...Ne,serverTime:Cn()})}}),O=new Wa({initial:z,order:()=>0,identify:le=>le.interactionId,persist:le=>ay(i,t,le),deliver:async le=>{const{interactionId:Te,...Ne}=le;await An(Ue(me,`games/${i}/interactions/${Te}`),{...Ne,serverTime:Cn()})}}),B=ig(i,le=>{_=le,h=le.finished,f=le.terminalPlayerIds.includes(t),h&&(cancelAnimationFrame(a),o.reset()),le.allReady&&!v&&(v=!0,sg(i).catch(Te=>{v=!1,L(Te instanceof Error?Te.message:String(Te))})),L()},le=>L(le.message));function H(le){m&&(U.enqueue(le),s=le.clientSeq)}function ne(le){if(m){try{Hf(i,t,le,m)}catch{}U.flush()}}function j(le){if(n<r)throw new Error("A controller record cannot precede its latest progress tick.");const Te=Yr(Ue(me,`games/${i}/players/${t}/records`));if(!Te.key)throw new Error("Could not allocate a controller record identifier.");return{commandId:Te.key,playerId:t,epochId:k,clientSeq:s+1,tick:n,...le}}function te(le){for(const Te of le){const Ne=O_(Te);if(Ne.length===0)continue;const se=M.filter(Me=>Me!==t&&!_?.terminalPlayerIds.includes(Me));if(se.length===0){y++;continue}const ae=`${t}-${k}-${Te.tick}-${Te.chain}`,oe=Yr(Ue(me,`games/${i}/interactions`));if(!oe.key)throw new Error("Could not allocate an attack interaction identifier.");const _e={interactionId:oe.key,type:"attack/generated",attackId:ae,sourcePlayerId:t,sourceTick:Te.tick,sourceChain:Te.chain,targetPlayerIds:se,colors:Ne};O.enqueue(_e)}}function Re(le=!1){if(!m||!le&&n-r<15)return;const Te=j({type:"progress/tick",payload:{phase:m.phase,stateHash:Ha(m)}});H(Te),r=n,ne(Te)}async function ct(){if(!m||p)return;const le=(_?.playerIds.length??0)>1,Te=m.phase==="lost"?"lost":le&&m.phase==="countdown"?"cleared":void 0;if(Te){p=!0;try{const Ne=Ue(me,`games/${i}/terminals/${t}`);(await Tt(Ne)).exists()||await An(Ne,{type:"player/terminal",playerId:t,tick:n,result:Te,stateHash:Ha(m),serverTime:Cn()})}catch{p=!1}}}function at(le){if(u||!l||d||h||f)return;const Te=m?.phase;for(let Ne=o.consume(le);Ne>0;Ne--){if(!m||m.phase==="lost"||m.phase==="countdown"&&(_?.playerIds.length??0)>1){o.reset();break}te(dd(m)),n=m.tick}m?.phase!==Te||m?.phase==="lost"&&r!==n?Re(!0):Re(),ct(),L(),a=requestAnimationFrame(at)}const Q=hi(Ue(me,`games/${i}/start`),async le=>{if(!(!le.exists()||l||c)){c=!0;try{const Te=vo(le.val());if(b=Te.audioOutput,M=Object.keys(Te.players),!Te.players[t])throw new Error("Player is not part of this pill-bottle/3 game.");if(T(),T=cy(i,ye=>{C=ye.filter(Pe=>Pe.playerId!==t),L()},ye=>L(ye.message),void 0,void 0,!1),!await F.claim())throw w=!0,new Error("This controller is already active in another tab.");const Ne=await Tt(Ue(me,`games/${i}/players/${t}/records`)),se=new Map;Ne.forEach(ye=>{const Pe=Kr(nr(ye.key,ye.val()));Pe.playerId===t&&se.set(Pe.commandId,Pe)});for(const ye of U.values())se.set(ye.commandId,ye);const ae=[...se.values()].sort((ye,Pe)=>ye.clientSeq-Pe.clientSeq);for(const ye of ae)ye.type==="attack/rain"&&R.add(ye.payload.attackId);ae.forEach((ye,Pe)=>{if(ye.clientSeq!==Pe+1)throw new Error("Controller record history has a sequence gap.");if(Pe>0&&ye.tick<ae[Pe-1].tick)throw new Error("Controller record ticks moved backward.")});const oe=oy(i,t),_e=oe&&ae.find(ye=>ye.commandId===oe.commandId&&ye.clientSeq===oe.clientSeq&&ye.tick===oe.tick);m=_e?pd(oe.state):hd(Te.seed,Te.players[t].seat,Te.players[t].level);for(const ye of ae)_e&&ye.clientSeq<=_e.clientSeq||hy(m,ye);if(s=ae.at(-1)?.clientSeq??0,n=m.tick,r=ae.reduce((ye,Pe)=>Pe.type==="progress/tick"?Math.max(ye,Pe.tick):ye,-1),ae.length>0)try{Hf(i,t,ae.at(-1),m)}catch{}await An(Ue(me,`games/${i}/players/${t}/epochs/${k}`),{clientId:F.clientId,startedFromTick:n,startedFromCommandSeq:s,serverTime:Cn()});const Me=Ue(me,`games/${i}/interactions`),Qe=await Tt(Me),be=new Set;Qe.forEach(ye=>{be.add(ye.key)}),l=!0,x=is(Me,ye=>{try{const Pe=gd(ye.val());if(be.delete(ye.key)||y++,!Pe.targetPlayerIds.includes(t)||R.has(Pe.attackId)||!m){L();return}const V={type:"attack/rain",payload:{attackId:Pe.attackId,colors:Pe.colors,columns:k_(Pe.attackId,Pe.colors.length)}},At=j(V);H(At),Zr(m,V),R.add(Pe.attackId),ne(At),m.phase==="lost"&&(Re(!0),ct()),L()}catch(Pe){L(Pe instanceof Error?Pe.message:String(Pe))}},ye=>L(ye.message)),Re(!0),ct(),L(),U.flush(),O.flush(),a=requestAnimationFrame(at)}catch(Te){L(Te instanceof Error?Te.message:String(Te))}finally{c=!1}}},le=>L(le.message)),ge=()=>{U.flush(),O.flush()};window.addEventListener("online",ge);function he(){!l||d||h||(Re(!0),d=!0,cancelAnimationFrame(a),o.reset())}function We(){!l||!d||u||h||(d=!1,o.reset(),Re(!0),a=requestAnimationFrame(at))}async function Ke(le){if(!l||!m||m.phase!=="playing"||h)return;const Te=m.phase,Ne=j(le);H(Ne),te(Zr(m,le)),ne(Ne);const se=m.phase;se!==Te&&Re(!0),se==="lost"&&ct(),g=`${le.type} · tick ${n}`,L()}return{command:Ke,requestRematch:le=>ly(i,le),async takeOver(){await F.takeOver()&&(w=!1,l=!0,d=!1,o.reset(),a=requestAnimationFrame(at),L())},suspend:he,resume:We,destroy(){l&&!d&&Re(!0),u=!0,Q(),B(),x(),T(),cancelAnimationFrame(a),U.destroy(),O.destroy(),F.release(),window.removeEventListener("online",ge)}}}var Wf=Mt("<i></i>"),dy=Mt('<span class="next-piece svelte-63ux23"></span>'),fy=Mt('<div class="next svelte-63ux23"></div>'),py=Mt('<div><!> <div class="matrix svelte-63ux23" role="img"></div></div>');function cI(i,e){bn(e,!1);const t=rt();let n=Xe(e,"state",8),s=Xe(e,"label",8,"Block Stack board"),r=Xe(e,"compact",8,!1);const a={I:"#30d9d4",J:"#4d72ff",L:"#ff9f43",O:"#f5d547",S:"#5fe06d",T:"#b66cff",Z:"#ff4f64"};function o(p){const v=p.active?Ih(p.active):[],g=p.active?Ih({...p.active,row:Rh(p)}):[];return Array.from({length:Gv*Po},(m,_)=>{const b=Math.floor(_/Po)+Hv,y=_%Po;if(p.active&&v.some(M=>M.row===b&&M.col===y))return{kind:p.active.kind,ghost:!1,active:!0};const w=p.board[b*Po+y];return w?{kind:w,ghost:!1,active:!1}:p.active&&g.some(M=>M.row===b&&M.col===y)?{kind:p.active.kind,ghost:!0,active:!1}:void 0})}function l(p){const v=new Set(Ih({kind:p,row:0,col:0,orientation:0}).map(({row:g,col:m})=>`${g}:${m}`));return Array.from({length:16},(g,m)=>v.has(`${Math.floor(m/4)}:${m%4}`))}zt(()=>xe(n()),()=>{ue(t,o(n()))}),Fi(),ns();var c=py();let u;var d=Lt(c);{var h=p=>{var v=fy();Dn(v,5,()=>(xe(n()),Ce(()=>n().next.slice(0,3))),ai,(g,m)=>{var _=dy();Dn(_,5,()=>(E(m),Ce(()=>l(E(m)))),ai,(b,y)=>{var w=Wf();let M;Jt(()=>M=si(w,1,"svelte-63ux23",null,M,{occupied:E(y)})),lt(b,w)}),bt(_),Jt(()=>{et(_,"aria-label",`${E(m)} piece`),Eu(_,(E(m),Ce(()=>`--piece:${a[E(m)]}`)))}),lt(g,_)}),bt(v),Jt(g=>et(v,"aria-label",g),[()=>(xe(n()),Ce(()=>`Next pieces: ${n().next.slice(0,3).join(", ")}`))]),lt(p,v)};pn(d,p=>{r()||p(h)})}var f=tt(d,2);Dn(f,5,()=>E(t),ai,(p,v)=>{var g=Wf();let m;Jt(_=>{Eu(g,(E(v),Ce(()=>E(v)?`--piece:${a[E(v).kind]}`:""))),m=si(g,1,"svelte-63ux23",null,m,_)},[()=>({filled:!!(E(v)&&!E(v).ghost),active:E(v)?.active,ghost:E(v)?.ghost})]),lt(p,g)}),bt(f),bt(c),Jt(p=>{u=si(c,1,"tetris-shell svelte-63ux23",null,u,{compact:r()}),et(f,"aria-label",s()),et(f,"data-lines",(xe(n()),Ce(()=>n().lines))),et(f,"data-score",(xe(n()),Ce(()=>n().score))),et(f,"data-level",(xe(n()),Ce(()=>n().level))),et(f,"data-phase",(xe(n()),Ce(()=>n().phase))),et(f,"data-active-row",(xe(n()),Ce(()=>n().active?.row))),et(f,"data-active-id",(xe(n()),Ce(()=>n().active?.id))),et(f,"data-ghost-row",p)},[()=>(xe(Rh),xe(n()),Ce(()=>Rh(n())))]),lt(i,c),Sn()}const Xf=""+new URL("../assets/Granite Promenade.B9kdwy7x.mp3",import.meta.url).href,my=""+new URL("../assets/Snowbound Sabre.U751p-Yz.mp3",import.meta.url).href;function hI(i,e){bn(e,!1);const t=rt();let n=Xe(e,"enabled",8,!1),s=Xe(e,"level",8,0);zt(()=>(xe(s()),Xf),()=>{ue(t,s()%2?my:Xf)}),Fi();{let r=$i(()=>`tetris:${s()}`);po(i,{get enabled(){return n()},get loopUrl(){return E(t)},get loopKey(){return E(r)}})}Sn()}function gy(i){if(!wt(i)||!St(i,["type","roomId","ruleset","rulesVersion","seed","tickRate","hostUid","audioOutput","members","players","settings","matchId","round","previousGameId","serverTime"])||i.type!=="game/started"||i.ruleset!=="tetris"||i.rulesVersion!=="tetris/1"||i.tickRate!==60||!It(i.seed,0,4294967295)||!It(i.round,0,99)||!yt(i.matchId)||!yt(i.hostUid)||!yt(i.roomId)||!ki(i.serverTime)||!wt(i.members)||!wt(i.players)||!wt(i.settings)||!St(i.settings,["width","height","hiddenRows","matchRounds"])||i.settings.width!==10||i.settings.height!==20||i.settings.hiddenRows!==2||!It(i.settings.matchRounds,1,99)||i.previousGameId!==void 0&&!yt(i.previousGameId)||i.audioOutput!=="cast"&&i.audioOutput!=="controllers")throw new Error("Invalid tetris/1 start record.");const e=i.members,t=i.players;if(!Object.entries(e).every(([n,s])=>yt(n)&&s===!0)||!Object.entries(t).every(([n,s])=>yt(n)&&e[n]===!0&&wt(s)&&St(s,["seat","level"])&&It(s.seat,0,3)&&It(s.level,0,20)))throw new Error("Invalid Tetris roster.");return i}function vy(i,e,t=!1){const n=md(i,e,t),s=wt(n.payload)?n.payload:{};if(n.type==="input/move"&&St(s,["dx"])&&(s.dx===-1||s.dx===1))return{commandId:i,...n,type:"input/move",payload:{dx:s.dx}};if(n.type==="input/rotate"&&St(s,["direction"])&&(s.direction==="clockwise"||s.direction==="counterclockwise"))return{commandId:i,...n,type:"input/rotate",payload:{direction:s.direction}};if(["input/soft-drop-start","input/soft-drop-end","input/hard-drop"].includes(n.type)&&St(s,[]))return{commandId:i,...n,type:n.type,payload:{}};if(n.type==="progress/tick"&&St(s,["phase","stateHash"])&&(s.phase==="playing"||s.phase==="lost")&&typeof s.stateHash=="string"&&/^t1-[0-9a-f]{8}$/.test(s.stateHash))return{commandId:i,...n,type:"progress/tick",payload:{phase:s.phase,stateHash:s.stateHash}};throw new Error("Invalid Tetris controller payload.")}const Oc=gy,Ll=vy;function _y(i,e,t){if(!me)throw new Error("Firebase unavailable.");let n=[],s=[],r=1,a=0,o=[];const l=()=>{n.length&&e(Qm(n,o,s,a,r))},c=[];return Tt(Ue(me,`games/${i}/start`)).then(u=>{const d=Oc(u.val());n=Object.keys(d.players),r=d.settings.matchRounds,a=d.round,c.push(is(Ue(me,`games/${i}/terminals`),h=>{const f=h.val();f?.result==="lost"&&(o=[...o.filter(p=>p.playerId!==f.playerId),{playerId:f.playerId,result:"lost",tick:f.tick}]),l()},t),hi(Ue(me,`games/${i}/rematch/ready`),h=>{s=[],h.forEach(f=>{f.val()?.playerId===f.key&&n.includes(f.key)&&s.push(f.key)}),l()},t)),l()}).catch(u=>t(u instanceof Error?u:new Error(String(u)))),()=>c.forEach(u=>u())}const uI=(i,e)=>Lc(i,e),yy=i=>Uc(i,Oc,e=>({advance:e.round+1<e.settings.matchRounds}));function dI(i,e){if(!ci?.currentUser||!me)throw new Error("Firebase unavailable.");const t=ci.currentUser.uid,n=new As(Vm.tickRate),s=vd("tetris",i,t,"outbox");let r,a=0,o=0,l=!1,c=!1,u=!1,d=!1,h=0,f=-1,p,v,g,m=!1,_=[],b=()=>{};const y=_o(localStorage,s,U=>{if(!U||typeof U!="object"||typeof U.commandId!="string")throw new Error("Invalid Tetris outbox.");const{commandId:O,...B}=U;return Ll(O,B,!0)}),w=U=>e({playerId:t,tick:a,ready:l,state:r?structuredClone(r):void 0,lifecycle:g,audioOutput:v,error:U,lastCommand:p,ownershipConflict:m,opponents:_.map(O=>({...O,state:structuredClone(O.state)}))}),M=new Nc(me,`games/${i}/players/${t}/writer`,()=>{m=!0,l=!1,cancelAnimationFrame(h),w("This controller was taken over by another tab.")}),C=_y(i,U=>{g=U,U.finished&&cancelAnimationFrame(h),U.allReady&&!d&&(d=!0,yy(i).catch(O=>{d=!1,w(O instanceof Error?O.message:String(O))})),w()},U=>w(U.message)),x=new Wa({initial:y,order:(U,O)=>U.clientSeq-O.clientSeq,identify:U=>U.commandId,persist:U=>yo(localStorage,s,U),deliver:async U=>{if(!l)throw new Error("Controller is not ready.");const{commandId:O,...B}=U;await An(Ue(me,`games/${i}/players/${t}/records/${O}`),{...B,serverTime:Cn()})},failed:U=>w(U instanceof Error?U.message:String(U))}),T=U=>{const B={commandId:Yr(Ue(me,`games/${i}/players/${t}/records`)).key,playerId:t,epochId:M.epochId,clientSeq:++o,tick:a,...U};return x.enqueue(B),B},R=(U=!1)=>{!r||!U&&a-f<15||(T({type:"progress/tick",payload:{phase:r.phase,stateHash:Tu(r)}}),f=a)},I=()=>r?.phase==="lost",z=()=>{I()&&r&&An(Ue(me,`games/${i}/terminals/${t}`),{type:"player/terminal",playerId:t,tick:a,result:"lost",stateHash:Tu(r),serverTime:Cn()}).catch(U=>w(U.message))},L=U=>{if(!(c||u||!l||!r||I()||g?.finished)){for(let O=n.consume(U);O>0;O--)Wm(r),a=r.tick;R(),I()&&(R(!0),z()),w(),h=requestAnimationFrame(L)}},F=hi(Ue(me,`games/${i}/start`),async U=>{if(!l)try{const O=Oc(U.val());if(!O.players[t])throw new Error("Player is not part of this Tetris game.");if(v=O.audioOutput,!await M.claim())throw m=!0,new Error("This controller is already active in another tab.");m=!1,b(),b=xy(i,j=>{_=j.filter(te=>te.playerId!==t),w()},j=>w(j.message));const B=await Tt(Ue(me,`games/${i}/players/${t}/records`)),H=new Map;B.forEach(j=>{const te=Ll(j.key,j.val());H.set(te.commandId,te)});for(const j of x.values())H.set(j.commandId,j);const ne=[...H.values()].sort((j,te)=>j.clientSeq-te.clientSeq);r=Wv(Gm(O.seed,O.players[t].level),Math.max(0,...ne.map(j=>j.tick)),ne),a=r.tick,o=Math.max(0,...ne.map(j=>j.clientSeq)),await An(Ue(me,`games/${i}/players/${t}/epochs/${M.epochId}`),{clientId:M.clientId,startedFromTick:a,startedFromCommandSeq:o,serverTime:Cn()}),l=!0,x.flush(),R(!0),w(),h=requestAnimationFrame(L);return}catch(O){w(O instanceof Error?O.message:String(O));return}},U=>w(U.message)),k=()=>{x.flush()};return window.addEventListener("online",k),{command(U){!l||!r||r.phase!=="playing"||(T(U),Hm(r,U),a=r.tick,p=`${U.type} · tick ${a}`,I()&&(R(!0),z()),w())},suspend(){!l||u||(u=!0,cancelAnimationFrame(h),n.reset(),R(!0))},resume(){!l||!u||(u=!1,n.reset(),h=requestAnimationFrame(L))},async takeOver(){await M.takeOver()&&(m=!1,l=!0,u=!1,x.flush(),h=requestAnimationFrame(L),w())},destroy(){R(!0),c=!0,F(),C(),b(),cancelAnimationFrame(h),window.removeEventListener("online",k),x.destroy(),M.release()}}}function xy(i,e,t){if(!me)throw new Error("Firebase unavailable.");let n=!1,s=0,r;const a=new As(Vm.tickRate),o=new Map,l=new Map,c=[],u={clone:h=>structuredClone(h),tick:h=>h.tick,advanceTo:(h,f)=>{for(;h.tick<f&&h.phase==="playing";)Wm(h)},apply:(h,f)=>{f.type!=="progress/tick"&&Hm(h,f)},hash:Tu,phase:h=>h.phase,terminal:h=>h.phase==="lost",progress:h=>h.type==="progress/tick"?h.payload:void 0},d=()=>e([...l].map(([h,f])=>{const p=f.snapshot();return{playerId:h,tick:p.displayTick,controllerTick:p.controllerTick,lag:p.lag,state:p.state,hashMatches:p.hashMatches}}));return Tt(Ue(me,`games/${i}/start`)).then(async h=>{r=Oc(h.val());let f=0;if(await Promise.all(Object.keys(r.players).map(async v=>{const g=await Tt(Ue(me,`games/${i}/players/${v}/records`)),m=[];g.forEach(_=>{m.push(Ll(_.key,_.val()))}),m.sort((_,b)=>_.clientSeq-b.clientSeq),o.set(v,m);for(const _ of m)_.type==="progress/tick"&&(f=Math.max(f,_.tick))})),n)return;for(const v of Object.keys(r.players)){const g=new Dc(u,Gm(r.seed,r.players[v].level),f);l.set(v,g);for(const m of o.get(v)??[])g.receive(m);c.push(is(Ue(me,`games/${i}/players/${v}/records`),m=>{try{g.receive(Ll(m.key,m.val())),d()}catch(_){t(_ instanceof Error?_:new Error(String(_)))}},t))}const p=v=>{if(!n){for(let g=a.consume(v);g>0;g--)for(const m of l.values())m.advance();d(),s=requestAnimationFrame(p)}};d(),s=requestAnimationFrame(p)}).catch(h=>t(h instanceof Error?h:new Error(String(h)))),()=>{n=!0,cancelAnimationFrame(s),c.forEach(h=>h())}}var by=Mt("<span> </span>"),Sy=Mt("<div> </div>"),My=Mt('<button type="button">▲</button>'),wy=Mt("<div>▲</div>"),Ty=Mt("<!><!>",1),Ey=Mt("<i>✦</i>"),Ay=Mt('<div><div class="progress svelte-40oo2k" aria-label="Current match group"></div> <div class="board svelte-40oo2k"><!><div class="effects svelte-40oo2k" aria-hidden="true"><!></div></div></div>');function fI(i,e){bn(e,!1);let t=Xe(e,"state",8),n=Xe(e,"label",8,"Quarry Match board"),s=Xe(e,"compact",8,!1),r=Xe(e,"selectColumn",8,void 0);const a={cyan:"◆",pink:"●",yellow:"✦",green:"▲",purple:"■"};ns();var o=Ay();let l;var c=Lt(o);Dn(c,4,()=>[0,1,2],ai,(p,v)=>{var g=by();let m;var _=Lt(g,!0);bt(g),Jt(()=>{m=si(g,1,"svelte-40oo2k",null,m,{stone:v<t().groupCount,occupied:v<t().groupCount,cyan:t().groupColor==="cyan",pink:t().groupColor==="pink",yellow:t().groupColor==="yellow",green:t().groupColor==="green",purple:t().groupColor==="purple"}),oi(_,(xe(t()),Ce(()=>v<t().groupCount&&t().groupColor?a[t().groupColor]:"·")))}),lt(p,g)}),bt(c);var u=tt(c,2),d=Lt(u);Dn(d,1,()=>(xe(t()),Ce(()=>t().columns)),ai,(p,v,g)=>{var m=Ty(),_=an(m);Dn(_,0,()=>Array(12),ai,(M,C,x)=>{const T=$i(()=>(xe(t()),E(v),Ce(()=>t().rulesVersion==="crystal-canopy/1"?E(v)[x]:E(v)[11-x])));var R=Sy();let I;var z=Lt(R,!0);bt(R),Jt(L=>{I=si(R,1,"cell svelte-40oo2k",null,I,L),oi(z,(xe(E(T)),Ce(()=>E(T)?a[E(T)]:"")))},[()=>({occupied:!!E(T),cyan:E(T)==="cyan",pink:E(T)==="pink",yellow:E(T)==="yellow",green:E(T)==="green",purple:E(T)==="purple"})]),lt(M,R)});var b=tt(_);{var y=M=>{var C=My();let x;et(C,"aria-label",`Shoot column ${g+1}`),Jt(()=>x=si(C,1,"cursor svelte-40oo2k",null,x,{selected:t().cursor===g})),_i("pointerdown",C,Ym(()=>r()?.(g))),lt(M,C)},w=M=>{var C=wy();let x;Jt(()=>x=si(C,1,"cursor svelte-40oo2k",null,x,{selected:t().cursor===g})),lt(M,C)};pn(b,M=>{r()?M(y):M(w,-1)})}lt(p,m)});var h=tt(d),f=Lt(h);Zm(f,()=>(xe(t()),Ce(()=>t().cascades)),p=>{var v=$r(),g=an(v);Dn(g,1,()=>(xe(t()),Ce(()=>t().lastCascadeCells??[])),ai,(m,_)=>{var b=Ey();let y;Jt(()=>{y=si(b,1,"burst svelte-40oo2k",null,y,{cyan:E(_).color==="cyan",pink:E(_).color==="pink",yellow:E(_).color==="yellow",green:E(_).color==="green",purple:E(_).color==="purple"}),Eu(b,(E(_),Ce(()=>`grid-column:${E(_).column+1};grid-row:${12-E(_).row}`)))}),lt(m,b)}),lt(p,v)}),bt(h),bt(u),bt(o),Jt(()=>{l=si(o,1,"quarry-shell svelte-40oo2k",null,l,{compact:s(),canopy:t().rulesVersion==="crystal-canopy/1"}),et(o,"aria-label",n()),et(o,"data-remaining",(xe(t()),Ce(()=>t().total-t().removed))),et(o,"data-cursor",(xe(t()),Ce(()=>t().cursor))),et(o,"data-cascades",(xe(t()),Ce(()=>t().cascades)))}),lt(i,o),Sn()}const qf=""+new URL("../assets/Prismatic Descent.ZNplIXQf.mp3",import.meta.url).href,$f=""+new URL("../assets/Prismatic Descent Clear.BmLl8QF3.mp3",import.meta.url).href,Cy=""+new URL("../assets/Prismatic Descent Combo.hOwJq7xI.mp3",import.meta.url).href,Ry=""+new URL("../assets/Prismatic Descent Reset.XTEzipFH.mp3",import.meta.url).href;function pI(i,e){bn(e,!1);const t=rt();let n=Xe(e,"enabled",8,!1),s=Xe(e,"phase",8,"playing"),r=Xe(e,"cascadeSignal",8,0),a=Xe(e,"resetSignal",8,0),o=rt(s()),l=rt(r()),c=rt(a()),u=rt(0),d=rt($f);zt(()=>(xe(s()),qf),()=>{ue(t,s()==="playing"?qf:void 0)}),zt(()=>(xe(r()),E(l),E(u)),()=>{r()>E(l)&&(ue(d,Cy),fn(u),ue(l,r()))}),zt(()=>(xe(a()),E(c),E(u)),()=>{a()>E(c)&&(ue(d,Ry),fn(u),ue(c,a()))}),zt(()=>(xe(s()),E(o),E(u)),()=>{s()!==E(o)&&(s()==="cleared"&&(ue(d,$f),fn(u)),ue(o,s()))}),Fi(),po(i,{get enabled(){return n()},get loopUrl(){return E(t)},loopKey:"quarry-match",get cueUrl(){return E(d)},get cueSignal(){return E(u)}}),Sn()}const Yf=""+new URL("../assets/Glacial Vault.Dw_n7dj9.mp3",import.meta.url).href,Iy=""+new URL("../assets/Glacial Vault Clear.C5HrP9Bz.mp3",import.meta.url).href,Zf=""+new URL("../assets/Glacial Vault Shot.Ckp_Mc68.mp3",import.meta.url).href,Py=""+new URL("../assets/Glacial Vault Triple.Bb19vC-Z.mp3",import.meta.url).href,Dy=""+new URL("../assets/Glacial Vault Reset.DYr4V8th.mp3",import.meta.url).href;function mI(i,e){bn(e,!1);const t=rt();let n=Xe(e,"enabled",8,!1),s=Xe(e,"phase",8,"playing"),r=Xe(e,"shotSignal",8,0),a=Xe(e,"tripleSignal",8,0),o=Xe(e,"resetSignal",8,0),l=rt(s()),c=rt(r()),u=rt(a()),d=rt(o()),h=rt(0),f=rt(Zf);zt(()=>(xe(s()),Yf),()=>{ue(t,s()==="playing"?Yf:void 0)}),zt(()=>(xe(r()),E(c),E(h)),()=>{r()>E(c)&&(ue(f,Zf),fn(h),ue(c,r()))}),zt(()=>(xe(a()),E(u),E(h)),()=>{a()>E(u)&&(ue(f,Py),fn(h),ue(u,a()))}),zt(()=>(xe(o()),E(d),E(h),xe(r()),xe(a())),()=>{o()>E(d)&&(ue(f,Dy),fn(h),ue(d,o()),ue(c,r()),ue(u,a()))}),zt(()=>(xe(s()),E(l),E(h)),()=>{s()!==E(l)&&(s()==="cleared"&&(ue(f,Iy),fn(h)),ue(l,s()))}),Fi(),po(i,{get enabled(){return n()},get loopUrl(){return E(t)},loopKey:"crystal-canopy",get cueUrl(){return E(f)},get cueSignal(){return E(h)}}),Sn()}function Ly(i){let e=2166136261;for(const t of i)e^=t.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0}function Uy(i,e){const t=Array.from({length:Of},(s,r)=>r);let n=Ly(i);for(let s=t.length-1;s>0;s--){n=Math.imul(n,1664525)+1013904223>>>0;const r=n%(s+1);[t[s],t[r]]=[t[r],t[s]]}return t.slice(0,Math.min(e,Of))}function Ny(i,e,t,n,s,r=3){const a=Object.fromEntries(i.map(c=>[c,e[c]??0]));t&&i.includes(t)?a[t]++:t=void 0;const o=!!t,l=n.filter(c=>i.includes(c));return{playerIds:i,readyPlayerIds:l,finished:o,winnerId:t,allReady:o&&i.every(c=>l.includes(c)),round:s,matchComplete:!!(t&&a[t]>=r),roundPoints:Object.fromEntries(i.map(c=>[c,c===t?1:0])),scores:a}}function Oy(i){if(!wt(i)||!St(i,["type","roomId","ruleset","rulesVersion","seed","tickRate","hostUid","audioOutput","members","players","settings","matchId","round","previousGameId","scores","serverTime"])||i.type!=="game/started"||!(i.ruleset==="quarry-match"&&i.rulesVersion==="quarry-match/1"||i.ruleset==="crystal-canopy"&&i.rulesVersion==="crystal-canopy/1")||i.tickRate!==60||!It(i.seed,0,4294967295)||!It(i.round,0,4)||!yt(i.matchId)||!yt(i.hostUid)||!yt(i.roomId)||!ki(i.serverTime)||!wt(i.members)||!wt(i.players)||!wt(i.settings)||!St(i.settings,["width","height","targetWins","matchRounds"])||i.settings.width!==5||i.settings.height!==12||i.settings.targetWins!==3||i.settings.matchRounds!==5||i.previousGameId!==void 0&&!yt(i.previousGameId)||i.audioOutput!=="cast"&&i.audioOutput!=="controllers")throw new Error("Invalid match-puzzle start record.");const e=i.members,t=i.players,n=i.scores;if(!Object.entries(e).every(([s,r])=>yt(s)&&r===!0)||!Object.entries(t).every(([s,r])=>yt(s)&&e[s]===!0&&wt(r)&&St(r,["seat","level"])&&It(r.seat,0,3)&&It(r.level,0,20))||n!==void 0&&(!wt(n)||!St(n,Object.keys(t))||!Object.keys(t).every(s=>It(n[s],0,3))))throw new Error("Invalid Quarry Match roster or scores.");return i}function Fy(i,e,t=!1){const n=md(i,e,t),s=wt(n.payload)?n.payload:{};if(n.type==="input/move"&&St(s,["dx"])&&(s.dx===-1||s.dx===1))return{commandId:i,...n,type:"input/move",payload:{dx:s.dx}};if((n.type==="input/fire"||n.type==="input/restart")&&St(s,[]))return{commandId:i,...n,type:n.type,payload:{}};if(n.type==="attack/rain"&&St(s,["attackId","colors","columns"])&&yt(s.attackId)&&Array.isArray(s.colors)&&s.colors.length>=1&&s.colors.length<=4&&s.colors.every(r=>r==="cyan"||r==="pink"||r==="yellow"||r==="green"||r==="purple")&&Array.isArray(s.columns)&&s.columns.length===s.colors.length&&s.columns.every(r=>It(r,0,4)))return{commandId:i,...n,type:"attack/rain",payload:{attackId:s.attackId,colors:s.colors,columns:s.columns}};if(n.type==="progress/tick"&&St(s,["phase","stateHash"])&&(s.phase==="playing"||s.phase==="cleared")&&typeof s.stateHash=="string"&&/^(q1|c1)-[0-9a-f]{8}$/.test(s.stateHash))return{commandId:i,...n,type:"progress/tick",payload:{phase:s.phase,stateHash:s.stateHash}};throw new Error("Invalid Quarry Match controller payload.")}const Jr=Oy,Ul=Fy,Ji=i=>i.rulesVersion==="crystal-canopy/1",rg=(i,e)=>Ji(i)?$v(i.seed,e):Yv(i.seed,e),ag=i=>Ji(i)?Jv(i):jv(i),Iu=(i,e,t)=>Ji(i)?Zv(i,e,t):Kv(i,e,t),Pu=i=>Ji(i)?Xv(i):qv(i),ky=(i,e,t,n)=>Ji(i)?Qv(i,e,t,n):e_(i,e,t,n);async function gI(i){if(!me)throw new Error("Firebase unavailable.");return Jr((await Tt(Ue(me,`games/${i}/start`))).val())}function By(i,e,t){if(!me)throw new Error("Firebase unavailable.");let n,s,r=[];const a=[],o=()=>{n&&e(Ny(Object.keys(n.players),n.scores??{},s,r,n.round,n.settings.targetWins))};return Tt(Ue(me,`games/${i}/start`)).then(l=>{n=Jr(l.val()),a.push(hi(Ue(me,`games/${i}/winner`),c=>{const u=c.val();s=u&&Object.hasOwn(n.players,u.playerId)?u.playerId:void 0,o()},t),hi(Ue(me,`games/${i}/rematch/ready`),c=>{r=[],c.forEach(u=>{u.val()?.playerId===u.key&&Object.hasOwn(n.players,u.key)&&r.push(u.key)}),o()},t)),o()}).catch(l=>t(l instanceof Error?l:new Error(String(l)))),()=>a.forEach(l=>l())}const vI=(i,e)=>Lc(i,e);async function zy(i){if(!me)throw new Error("Firebase unavailable.");const[e,t]=await Promise.all([Tt(Ue(me,`games/${i}/start`)),Tt(Ue(me,`games/${i}/winner`))]);Jr(e.val());const n=t.val()?.playerId;return Uc(i,Jr,s=>{const r=Object.fromEntries(Object.keys(s.players).map(o=>[o,(s.scores?.[o]??0)+(o===n?1:0)])),a=!!(n&&r[n]>=s.settings.targetWins);return{advance:!a,scores:a?Object.fromEntries(Object.keys(s.players).map(o=>[o,0])):r}})}function _I(i,e){if(!ci?.currentUser||!me)throw new Error("Firebase unavailable.");const t=ci.currentUser.uid,n=new As(Xm.tickRate),s=vd("quarry",i,t,"outbox");let r,a,o=0,l=0,c=!1,u=!1,d=!1,h=!1,f=0,p=-1,v,g,m,_=!1,b=[],y=()=>{},w=()=>{};const M=new Set,C=_o(localStorage,s,B=>{if(!B||typeof B!="object"||typeof B.commandId!="string")throw new Error("Invalid Quarry Match outbox.");const{commandId:H,...ne}=B;return Ul(H,ne,!0)}),x=B=>e({playerId:t,tick:o,ready:c,state:r?structuredClone(r):void 0,lifecycle:m,audioOutput:g,error:B,lastCommand:v,ownershipConflict:_,opponents:b.map(H=>({...H,state:structuredClone(H.state)}))}),T=new Nc(me,`games/${i}/players/${t}/writer`,()=>{_=!0,c=!1,cancelAnimationFrame(f),x("This controller was taken over by another tab.")}),R=By(i,B=>{m=B,B.finished&&cancelAnimationFrame(f),B.allReady&&!h&&(h=!0,zy(i).catch(H=>{h=!1,x(H instanceof Error?H.message:String(H))})),x()},B=>x(B.message)),I=new Wa({initial:C,order:(B,H)=>B.clientSeq-H.clientSeq,identify:B=>B.commandId,persist:B=>yo(localStorage,s,B),deliver:async B=>{if(!c)throw new Error("Controller is not ready.");const{commandId:H,...ne}=B;await An(Ue(me,`games/${i}/players/${t}/records/${H}`),{...ne,serverTime:Cn()})},failed:B=>x(B instanceof Error?B.message:String(B))}),z=B=>{const ne={commandId:Yr(Ue(me,`games/${i}/players/${t}/records`)).key,playerId:t,epochId:T.epochId,clientSeq:++l,tick:o,...B};return I.enqueue(ne),ne},L=(B=!1)=>{!r||!B&&o-p<15||(z({type:"progress/tick",payload:{phase:r.phase,stateHash:Pu(r)}}),p=o)},F=()=>{!r||r.phase!=="cleared"||Pl(Ue(me,`games/${i}/winner`),B=>B===null?{playerId:t,tick:r.tick,stateHash:Pu(r),serverTime:Cn()}:void 0,{applyLocally:!1}).catch(B=>x(B.message))},k=B=>{if(!(u||d||!c||!r||r.phase==="cleared"||m?.finished)){for(let H=n.consume(B);H>0;H--)ag(r),o=r.tick;L(),x(),f=requestAnimationFrame(k)}},U=hi(Ue(me,`games/${i}/start`),async B=>{if(!c)try{if(a=Jr(B.val()),!a.players[t])throw new Error("Player is not part of this Quarry Match game.");if(g=a.audioOutput,!await T.claim())throw _=!0,new Error("This controller is already active in another tab.");_=!1,y(),y=Vy(i,te=>{b=te.filter(Re=>Re.playerId!==t),x()},te=>x(te.message));const H=await Tt(Ue(me,`games/${i}/players/${t}/records`)),ne=new Map;H.forEach(te=>{const Re=Ul(te.key,te.val());ne.set(Re.commandId,Re),Re.type==="attack/rain"&&M.add(Re.payload.attackId)});for(const te of I.values())ne.set(te.commandId,te);const j=[...ne.values()].sort((te,Re)=>te.clientSeq-Re.clientSeq);r=ky(rg(a,a.players[t].level),Math.max(0,...j.map(te=>te.tick)),j,a.seed),o=r.tick,l=Math.max(0,...j.map(te=>te.clientSeq)),await An(Ue(me,`games/${i}/players/${t}/epochs/${T.epochId}`),{clientId:T.clientId,startedFromTick:o,startedFromCommandSeq:l,serverTime:Cn()}),c=!0,w(),w=is(Ue(me,`games/${i}/interactions`),te=>{const Re=te.val();if(Ji(a)||Re?.type!=="attack/generated"||!Re.targetPlayerIds?.includes(t)||M.has(Re.attackId))return;const ct={type:"attack/rain",payload:{attackId:Re.attackId,colors:Re.colors,columns:Uy(Re.attackId,Re.colors.length)}};M.add(Re.attackId),z(ct),Iu(r,ct,a.seed),x()},te=>x(te.message)),I.flush(),L(!0),x(),r.phase==="cleared"?F():f=requestAnimationFrame(k)}catch(H){x(H instanceof Error?H.message:String(H))}},B=>x(B.message)),O=()=>{I.flush()};return window.addEventListener("online",O),{command(B){if(!c||!r||r.phase!=="playing"||!a||B.type==="input/fire"&&(!(Ji(r)?r.columns[r.cursor].at(-1):r.columns[r.cursor][0])||r.groupColor&&(Ji(r)?r.columns[r.cursor].at(-1):r.columns[r.cursor][0])!==r.groupColor))return;z(B);const H=Iu(r,B,a.seed);if(H&&a&&!Ji(a)){const ne=Object.keys(a.players).filter(j=>j!==t);if(ne.length){const j=`${t}-${T.epochId}-${l}-${H.tick}-${H.chain}`,te=Yr(Ue(me,`games/${i}/interactions`));An(te,{type:"attack/generated",attackId:j,sourcePlayerId:t,sourceTick:H.tick,sourceChain:H.chain,targetPlayerIds:ne,colors:H.colors,serverTime:Cn()}).catch(Re=>x(Re.message))}}o=r.tick,v=`${B.type} · tick ${o}`,r.phase==="cleared"&&(L(!0),F()),x()},suspend(){!c||d||(d=!0,cancelAnimationFrame(f),n.reset(),L(!0))},resume(){!c||!d||(d=!1,n.reset(),f=requestAnimationFrame(k))},async takeOver(){await T.takeOver()&&(_=!1,c=!0,d=!1,I.flush(),f=requestAnimationFrame(k),x())},destroy(){L(!0),u=!0,U(),R(),y(),w(),cancelAnimationFrame(f),window.removeEventListener("online",O),I.destroy(),T.release()}}}function Vy(i,e,t){if(!me)throw new Error("Firebase unavailable.");let n=!1,s=0,r;const a=new As(Xm.tickRate),o=new Map,l=new Map,c=[],u={clone:h=>structuredClone(h),tick:h=>h.tick,advanceTo:(h,f)=>{for(;h.tick<f&&h.phase==="playing";)ag(h)},apply:(h,f)=>{f.type!=="progress/tick"&&Iu(h,f,r.seed)},hash:Pu,phase:h=>h.phase,terminal:h=>h.phase==="cleared",progress:h=>h.type==="progress/tick"?h.payload:void 0},d=()=>e([...l].map(([h,f])=>{const p=f.snapshot();return{playerId:h,tick:p.displayTick,controllerTick:p.controllerTick,lag:p.lag,state:p.state,hashMatches:p.hashMatches}}));return Tt(Ue(me,`games/${i}/start`)).then(async h=>{r=Jr(h.val());let f=0;if(await Promise.all(Object.keys(r.players).map(async v=>{const g=await Tt(Ue(me,`games/${i}/players/${v}/records`)),m=[];g.forEach(_=>{m.push(Ul(_.key,_.val()))}),m.sort((_,b)=>_.clientSeq-b.clientSeq),o.set(v,m);for(const _ of m)_.type==="progress/tick"&&(f=Math.max(f,_.tick))})),n)return;for(const v of Object.keys(r.players)){const g=new Dc(u,rg(r,r.players[v].level),f);l.set(v,g);for(const m of o.get(v)??[])g.receive(m);c.push(is(Ue(me,`games/${i}/players/${v}/records`),m=>{try{g.receive(Ul(m.key,m.val())),d()}catch(_){t(_ instanceof Error?_:new Error(String(_)))}},t))}const p=v=>{if(!n){for(let g=a.consume(v);g>0;g--)for(const m of l.values())m.advance();d(),s=requestAnimationFrame(p)}};d(),s=requestAnimationFrame(p)}).catch(h=>t(h instanceof Error?h:new Error(String(h)))),()=>{n=!0,cancelAnimationFrame(s),c.forEach(h=>h())}}const Kf=""+new URL("../assets/Ivory Avalanche.jheecTlA.mp3",import.meta.url).href,Gy=""+new URL("../assets/Ivory Avalanche Clear.CHjDqg-F.mp3",import.meta.url).href,Ph=""+new URL("../assets/Ivory Avalanche Catch.Cin_KYx1.mp3",import.meta.url).href,Jf=""+new URL("../assets/Ivory Avalanche Place.BAM6pE8m.mp3",import.meta.url).href,Hy=""+new URL("../assets/Ivory Avalanche Throw.CcIWy32w.mp3",import.meta.url).href,Wy=""+new URL("../assets/Ivory Avalanche Chain.B0QUhIke.mp3",import.meta.url).href,Xy=""+new URL("../assets/Ivory Avalanche Miss.B0VhYMKi.mp3",import.meta.url).href,jf=""+new URL("../assets/Ivory Avalanche Failure.BOUADSZZ.mp3",import.meta.url).href;function yI(i,e){bn(e,!1);const t=rt();let n=Xe(e,"enabled",8,!1),s=Xe(e,"phase",8,"countdown"),r=Xe(e,"survived",8,0),a=Xe(e,"placements",8,0),o=Xe(e,"chains",8,0),l=Xe(e,"misses",8,0),c=Xe(e,"returns",8,0),u=rt(s()),d=rt(r()),h=rt(a()),f=rt(o()),p=rt(l()),v=rt(c()),g=rt(0),m=rt(Ph);zt(()=>(xe(s()),Kf),()=>{ue(t,s()==="playing"?Kf:void 0)}),zt(()=>(xe(o()),E(f),E(g),xe(a()),E(h),Jf),()=>{o()>E(f)?(ue(m,Wy),fn(g),ue(f,o())):a()>E(h)&&(ue(m,Jf),fn(g),ue(h,a()))}),zt(()=>(xe(l()),E(p),E(g),xe(r()),E(d),Ph),()=>{l()>E(p)?(ue(m,Xy),fn(g),ue(p,l())):r()>E(d)&&(ue(m,Ph),fn(g),ue(d,r()))}),zt(()=>(xe(c()),E(v),E(g)),()=>{c()>E(v)&&(ue(m,Hy),fn(g),ue(v,c()))}),zt(()=>(xe(s()),E(u),E(g),jf),()=>{s()!==E(u)&&(s()==="cleared"?(ue(m,Gy),fn(g)):s()==="lost"&&(ue(m,jf),fn(g)),ue(u,s()))}),Fi(),po(i,{get enabled(){return n()},get loopUrl(){return E(t)},loopKey:"stax",get cueUrl(){return E(m)},get cueSignal(){return E(g)}}),Sn()}const Dh=(i,e)=>{if(i===e)return!0;if(!i||!e)return!1;const t=i.length;if(e.length!==t)return!1;for(let n=0;n<t;n++)if(i[n]!==e[n])return!1;return!0},qy=()=>{const i=[],n={items:i,remember:(s,r)=>{for(let l=0;l<i.length;l++){const c=i[l];if(Dh(r,c.keys)&&c.promise)return c.promise}const a=s();a.catch(()=>{for(let l=0;l<i.length;l++){const c=i[l];if(Dh(r,c.keys)){i.splice(l,1);break}}});const o={promise:a,keys:r};return i.push(o),o.promise},clear:s=>{for(let r=0;r<i.length;r++){const a=i[r];if(Dh(s,a.keys)){i.splice(r,1);return}}}};return wi("threlte-cache",n),n};const Fc="185",Qs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ys={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},og=0,Du=1,lg=2,$y=3,Yy=0,Pa=1,Nl=2,Vr=3,Qi=0,Fn=1,Ii=2,Li=0,er=1,Lu=2,Uu=3,Nu=4,cg=5,Zy=6,vs=100,hg=101,ug=102,dg=103,fg=104,pg=200,mg=201,gg=202,vg=203,Ol=204,Fl=205,_g=206,yg=207,xg=208,bg=209,Sg=210,Mg=211,wg=212,Tg=213,Eg=214,kl=0,Bl=1,zl=2,ir=3,Vl=4,Gl=5,Hl=6,Wl=7,xo=0,Ag=1,Cg=2,Si=0,_d=1,yd=2,xd=3,bd=4,Sd=5,kc=6,Md=7,Ou="attached",Rg="detached",Bc=300,Ui=301,Ms=302,Da=303,La=304,aa=306,Xa=1e3,Xn=1001,qa=1002,nn=1003,wd=1004,Ky=1004,Gr=1005,Jy=1005,Ht=1006,Ua=1007,jy=1007,Pi=1008,Qy=1008,Hn=1009,Td=1010,Ed=1011,jr=1012,zc=1013,ui=1014,Nn=1015,Ni=1016,Vc=1017,Gc=1018,Qr=1020,Ad=35902,Cd=35899,Rd=1021,Id=1022,On=1023,Oi=1026,_s=1027,Hc=1028,bo=1029,ws=1030,Wc=1031,ex=1032,Xc=1033,Na=33776,Oa=33777,Fa=33778,ka=33779,Xl=35840,ql=35841,$l=35842,Yl=35843,Zl=36196,Kl=37492,Jl=37496,jl=37488,Ql=37489,$a=37490,ec=37491,tc=37808,nc=37809,ic=37810,sc=37811,rc=37812,ac=37813,oc=37814,lc=37815,cc=37816,hc=37817,uc=37818,dc=37819,fc=37820,pc=37821,mc=36492,gc=36494,vc=36495,_c=36283,yc=36284,Ya=36285,xc=36286,Ig=2200,Pg=2201,Dg=2202,Za=2300,bc=2301,Al=2302,Fu=2303,Zs=2400,Ks=2401,Ka=2402,qc=2500,Pd=2501,tx=0,nx=1,ix=2,Lg=3200,sx=3201,rx=3202,ax=3203,es=0,Ug=1,Zi="",Ln="srgb",Ja="srgb-linear",ja="linear",Dt="srgb",ox="",lx="rg",cx="ga",hx=0,qs=7680,ux=7681,dx=7682,fx=7683,px=34055,mx=34056,gx=5386,vx=512,_x=513,yx=514,xx=515,bx=516,Sx=517,Mx=518,ku=519,Ng=512,Og=513,Fg=514,$c=515,kg=516,Bg=517,Yc=518,zg=519,Qa=35044,wx=35048,Tx=35040,Ex=35045,Ax=35049,Cx=35041,Rx=35046,Ix=35050,Px=35042,Dx="100",Bu="300 es",Jn=2e3,sr=2001,Lx={COMPUTE:"compute",RENDER:"render"},Ux={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},Nx={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},Ox={TEXTURE_COMPARE:"depthTextureCompare"};function Fx(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}const kx={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Hr(i,e){return new kx[i](e)}function Vg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function eo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gg(){const i=eo("canvas");return i.style.display="block",i}const Qf={};let Ts=null;function Bx(i){Ts=i}function zx(){return Ts}function to(...i){const e="THREE."+i.shift();Ts?Ts("log",e,...i):console.log(e,...i)}function Hg(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function we(...i){i=Hg(i);const e="THREE."+i.shift();if(Ts)Ts("warn",e,...i);else{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ze(...i){i=Hg(i);const e="THREE."+i.shift();if(Ts)Ts("error",e,...i);else{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function bs(...i){const e=i.join(" ");e in Qf||(Qf[e]=!0,we(...i))}function Vx(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Gx={[kl]:Bl,[zl]:Hl,[Vl]:Wl,[ir]:Gl,[Bl]:kl,[Hl]:zl,[Wl]:Vl,[Gl]:ir};class Ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ep=1234567;const tr=Math.PI/180,ea=180/Math.PI;function Qn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function Dd(i,e){return(i%e+e)%e}function Hx(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Wx(i,e,t){return i!==e?(t-i)/(e-i):0}function Ba(i,e,t){return(1-t)*i+t*e}function Xx(i,e,t,n){return Ba(i,e,1-Math.exp(-t*n))}function qx(i,e=1){return e-Math.abs(Dd(i,e*2)-e)}function $x(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Yx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Zx(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Kx(i,e){return i+Math.random()*(e-i)}function Jx(i){return i*(.5-Math.random())}function jx(i){i!==void 0&&(ep=i);let e=ep+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qx(i){return i*tr}function eb(i){return i*ea}function tb(i){return(i&i-1)===0&&i!==0}function nb(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ib(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sb(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),h=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*p,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*p,o*c);break;case"ZYZ":i.set(l*p,l*f,o*u,o*c);break;default:we("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Wg={DEG2RAD:tr,RAD2DEG:ea,generateUUID:Qn,clamp:ot,euclideanModulo:Dd,mapLinear:Hx,inverseLerp:Wx,lerp:Ba,damp:Xx,pingpong:qx,smoothstep:$x,smootherstep:Yx,randInt:Zx,randFloat:Kx,randFloatSpread:Jx,seededRandom:jx,degToRad:Qx,radToDeg:eb,isPowerOfTwo:tb,ceilPowerOfTwo:nb,floorPowerOfTwo:ib,setQuaternionFromProperEuler:sb,normalize:mt,denormalize:Un},_f=class _f{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_f.prototype.isVector2=!0;let re=_f;class _n{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],p=r[a+2],v=r[a+3];if(d!==v||l!==h||c!==f||u!==p){let g=l*h+c*f+u*p+d*v;g<0&&(h=-h,f=-f,p=-p,v=-v,g=-g);let m=1-o;if(g<.9995){const _=Math.acos(g),b=Math.sin(_);m=Math.sin(m*_)/b,o=Math.sin(o*_)/b,l=l*m+h*o,c=c*m+f*o,u=u*m+p*o,d=d*m+v*o}else{l=l*m+h*o,c=c*m+f*o,u=u*m+p*o,d=d*m+v*o;const _=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=_,c*=_,u*=_,d*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+u*d+l*f-c*h,e[t+1]=l*p+u*h+c*d-o*f,e[t+2]=c*p+u*f+o*h-l*d,e[t+3]=u*p-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const yf=class yf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lh.copy(this).projectOnVector(e),this.sub(Lh)}reflect(e){return this.sub(Lh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yf.prototype.isVector3=!0;let P=yf;const Lh=new P,tp=new _n,xf=class xf{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],v=s[0],g=s[3],m=s[6],_=s[1],b=s[4],y=s[7],w=s[2],M=s[5],C=s[8];return r[0]=a*v+o*_+l*w,r[3]=a*g+o*b+l*M,r[6]=a*m+o*y+l*C,r[1]=c*v+u*_+d*w,r[4]=c*g+u*b+d*M,r[7]=c*m+u*y+d*C,r[2]=h*v+f*_+p*w,r[5]=h*g+f*b+p*M,r[8]=h*m+f*y+p*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,p=t*d+n*h+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=d*v,e[1]=(s*c-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Uh.makeScale(e,t)),this}rotate(e){return bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Uh.makeRotation(-e)),this}translate(e,t){return bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Uh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};xf.prototype.isMatrix3=!0;let ut=xf;const Uh=new ut,np=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ip=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rb(){const i={enabled:!0,workingColorSpace:Ja,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Dt&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Dt&&(s.r=qr(s.r),s.g=qr(s.g),s.b=qr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zi?ja:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ja]:{primaries:e,whitePoint:n,transfer:ja,toXYZ:np,fromXYZ:ip,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:e,whitePoint:n,transfer:Dt,toXYZ:np,fromXYZ:ip,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),i}const _t=rb();function ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let _r;class Xg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_r===void 0&&(_r=eo("canvas")),_r.width=e.width,_r.height=e.height;const s=_r.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=_r}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=eo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ji(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ji(t[n]/255)*255):t[n]=ji(t[n]);return{data:t,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ab=0;class ys{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=Qn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Nh(s[a].image)):r.push(Nh(s[a]))}else r=Nh(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Nh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}let ob=0;const Oh=new P;class Yt extends Ti{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,n=Xn,s=Xn,r=Ht,a=Pi,o=On,l=Hn,c=Yt.DEFAULT_ANISOTROPY,u=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=Qn(),this.name="",this.source=new ys(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Oh).x}get height(){return this.source.getSize(Oh).y}get depth(){return this.source.getSize(Oh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){we(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){we(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xa:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xa:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Bc;Yt.DEFAULT_ANISOTROPY=1;const bf=class bf{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(f+1)/2,w=(m+1)/2,M=(u+h)/4,C=(d+v)/4,x=(p+g)/4;return b>y&&b>w?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=M/n,r=C/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=M/s,r=x/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=C/r,s=x/r),this.set(n,s,r,t),this}let _=Math.sqrt((g-p)*(g-p)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(d-v)/_,this.z=(h-u)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bf.prototype.isVector4=!0;let Ut=bf;class Ld extends Ti{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Yt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ys(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends Ld{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Zc extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lb extends ei{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Zc(null,e,t,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}}class Kc extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cb extends ei{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Kc(null,e,t,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}}const Ac=class Ac{constructor(e,t,n,s,r,a,o,l,c,u,d,h,f,p,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,d,h,f,p,v,g)}set(e,t,n,s,r,a,o,l,c,u,d,h,f,p,v,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ac().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/yr.setFromMatrixColumn(e,0).length(),r=1/yr.setFromMatrixColumn(e,1).length(),a=1/yr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,f=a*d,p=o*u,v=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,p=c*u,v=c*d;t[0]=h+v*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-p,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,p=c*u,v=c*d;t[0]=h-v*o,t[4]=-a*d,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,p=o*u,v=o*d;t[0]=l*u,t[4]=p*c-f,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,p=o*l,v=o*c;t[0]=l*u,t[4]=v-h*d,t[8]=p*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+p,t[10]=h-v*d}else if(e.order==="XZY"){const h=a*l,f=a*c,p=o*l,v=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+v,t[5]=a*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=o*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hb,e,ub)}lookAt(e,t,n){const s=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),ls.crossVectors(n,Zn),ls.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),ls.crossVectors(n,Zn)),ls.normalize(),Do.crossVectors(Zn,ls),s[0]=ls.x,s[4]=Do.x,s[8]=Zn.x,s[1]=ls.y,s[5]=Do.y,s[9]=Zn.y,s[2]=ls.z,s[6]=Do.z,s[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],v=n[6],g=n[10],m=n[14],_=n[3],b=n[7],y=n[11],w=n[15],M=s[0],C=s[4],x=s[8],T=s[12],R=s[1],I=s[5],z=s[9],L=s[13],F=s[2],k=s[6],U=s[10],O=s[14],B=s[3],H=s[7],ne=s[11],j=s[15];return r[0]=a*M+o*R+l*F+c*B,r[4]=a*C+o*I+l*k+c*H,r[8]=a*x+o*z+l*U+c*ne,r[12]=a*T+o*L+l*O+c*j,r[1]=u*M+d*R+h*F+f*B,r[5]=u*C+d*I+h*k+f*H,r[9]=u*x+d*z+h*U+f*ne,r[13]=u*T+d*L+h*O+f*j,r[2]=p*M+v*R+g*F+m*B,r[6]=p*C+v*I+g*k+m*H,r[10]=p*x+v*z+g*U+m*ne,r[14]=p*T+v*L+g*O+m*j,r[3]=_*M+b*R+y*F+w*B,r[7]=_*C+b*I+y*k+w*H,r[11]=_*x+b*z+y*U+w*ne,r[15]=_*T+b*L+y*O+w*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],v=e[7],g=e[11],m=e[15],_=l*f-c*h,b=o*f-c*d,y=o*h-l*d,w=a*f-c*u,M=a*h-l*u,C=a*d-o*u;return t*(v*_-g*b+m*y)-n*(p*_-g*w+m*M)+s*(p*b-v*w+m*C)-r*(p*y-v*M+g*C)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],v=e[13],g=e[14],m=e[15],_=t*o-n*a,b=t*l-s*a,y=t*c-r*a,w=n*l-s*o,M=n*c-r*o,C=s*c-r*l,x=u*v-d*p,T=u*g-h*p,R=u*m-f*p,I=d*g-h*v,z=d*m-f*v,L=h*m-f*g,F=_*L-b*z+y*I+w*R-M*T+C*x;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/F;return e[0]=(o*L-l*z+c*I)*k,e[1]=(s*z-n*L-r*I)*k,e[2]=(v*C-g*M+m*w)*k,e[3]=(h*M-d*C-f*w)*k,e[4]=(l*R-a*L-c*T)*k,e[5]=(t*L-s*R+r*T)*k,e[6]=(g*y-p*C-m*b)*k,e[7]=(u*C-h*y+f*b)*k,e[8]=(a*z-o*R+c*x)*k,e[9]=(n*R-t*z-r*x)*k,e[10]=(p*M-v*y+m*_)*k,e[11]=(d*y-u*M-f*_)*k,e[12]=(o*T-a*I-l*x)*k,e[13]=(t*I-n*T+s*x)*k,e[14]=(v*b-p*w-g*_)*k,e[15]=(u*w-d*b+h*_)*k,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,p=r*d,v=a*u,g=a*d,m=o*d,_=l*c,b=l*u,y=l*d,w=n.x,M=n.y,C=n.z;return s[0]=(1-(v+m))*w,s[1]=(f+y)*w,s[2]=(p-b)*w,s[3]=0,s[4]=(f-y)*M,s[5]=(1-(h+m))*M,s[6]=(g+_)*M,s[7]=0,s[8]=(p+b)*C,s[9]=(g-_)*C,s[10]=(1-(h+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=yr.set(s[0],s[1],s[2]).length();const o=yr.set(s[4],s[5],s[6]).length(),l=yr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),mi.copy(this);const c=1/a,u=1/o,d=1/l;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=u,mi.elements[5]*=u,mi.elements[6]*=u,mi.elements[8]*=d,mi.elements[9]*=d,mi.elements[10]*=d,t.setFromRotationMatrix(mi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Jn,l=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let p,v;if(l)p=r/(a-r),v=a*r/(a-r);else if(o===Jn)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===sr)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Jn,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s);let p,v;if(l)p=1/(a-r),v=a/(a-r);else if(o===Jn)p=-2/(a-r),v=-(a+r)/(a-r);else if(o===sr)p=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ac.prototype.isMatrix4=!0;let nt=Ac;const yr=new P,mi=new nt,hb=new P(0,0,0),ub=new P(1,1,1),ls=new P,Do=new P,Zn=new P,sp=new nt,rp=new _n;class Mi{constructor(e=0,t=0,n=0,s=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rp.setFromEuler(this),this.setFromQuaternion(rp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class Jc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let db=0;const ap=new P,xr=new _n,Vi=new nt,Lo=new P,da=new P,fb=new P,pb=new _n,op=new P(1,0,0),lp=new P(0,1,0),cp=new P(0,0,1),hp={type:"added"},mb={type:"removed"},br={type:"childadded",child:null},Fh={type:"childremoved",child:null};class Et extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:db++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new P,t=new Mi,n=new _n,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new ut}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.multiply(xr),this}rotateOnWorldAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.premultiply(xr),this}rotateX(e){return this.rotateOnAxis(op,e)}rotateY(e){return this.rotateOnAxis(lp,e)}rotateZ(e){return this.rotateOnAxis(cp,e)}translateOnAxis(e,t){return ap.copy(e).applyQuaternion(this.quaternion),this.position.add(ap.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(op,e)}translateY(e){return this.translateOnAxis(lp,e)}translateZ(e){return this.translateOnAxis(cp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Lo.copy(e):Lo.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(da,Lo,this.up):Vi.lookAt(Lo,da,this.up),this.quaternion.setFromRotationMatrix(Vi),s&&(Vi.extractRotation(s.matrixWorld),xr.setFromRotationMatrix(Vi),this.quaternion.premultiply(xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hp),br.child=e,this.dispatchEvent(br),br.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mb),Fh.child=e,this.dispatchEvent(Fh),Fh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hp),br.child=e,this.dispatchEvent(br),br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,e,fb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,pb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Et.DEFAULT_UP=new P(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Wr extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gb={type:"move"};class Cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gb)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Wr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const qg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},Uo={h:0,s:0,l:0};function kh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=_t.workingColorSpace){if(e=Dd(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=kh(a,r,e+1/3),this.g=kh(a,r,e),this.b=kh(a,r,e-1/3)}return _t.colorSpaceToWorking(this,s),this}setStyle(e,t=Ln){function n(r){r!==void 0&&parseFloat(r)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ln){const n=qg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ln){return _t.workingToColorSpace(Tn.copy(this),e),Math.round(ot(Tn.r*255,0,255))*65536+Math.round(ot(Tn.g*255,0,255))*256+Math.round(ot(Tn.b*255,0,255))}getHexString(e=Ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(Tn.copy(this),t);const n=Tn.r,s=Tn.g,r=Tn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=Ln){_t.workingToColorSpace(Tn.copy(this),e);const t=Tn.r,n=Tn.g,s=Tn.b;return e!==Ln?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(cs),this.setHSL(cs.h+e,cs.s+t,cs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cs),e.getHSL(Uo);const n=Ba(cs.h,Uo.h,t),s=Ba(cs.s,Uo.s,t),r=Ba(cs.l,Uo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new ke;ke.NAMES=qg;class jc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ke(e),this.density=t}clone(){return new jc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Qc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=n}clone(){return new Qc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ud extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const gi=new P,Gi=new P,Bh=new P,Hi=new P,Sr=new P,Mr=new P,up=new P,zh=new P,Vh=new P,Gh=new P,Hh=new Ut,Wh=new Ut,Xh=new Ut;class Wn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),gi.subVectors(e,t),s.cross(gi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){gi.subVectors(s,t),Gi.subVectors(n,t),Bh.subVectors(e,t);const a=gi.dot(gi),o=gi.dot(Gi),l=gi.dot(Bh),c=Gi.dot(Gi),u=Gi.dot(Bh),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,p=(a*u-o*l)*h;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hi.x),l.addScaledVector(a,Hi.y),l.addScaledVector(o,Hi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Hh.setScalar(0),Wh.setScalar(0),Xh.setScalar(0),Hh.fromBufferAttribute(e,t),Wh.fromBufferAttribute(e,n),Xh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Hh,r.x),a.addScaledVector(Wh,r.y),a.addScaledVector(Xh,r.z),a}static isFrontFacing(e,t,n,s){return gi.subVectors(n,t),Gi.subVectors(e,t),gi.cross(Gi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),gi.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Wn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Sr.subVectors(s,n),Mr.subVectors(r,n),zh.subVectors(e,n);const l=Sr.dot(zh),c=Mr.dot(zh);if(l<=0&&c<=0)return t.copy(n);Vh.subVectors(e,s);const u=Sr.dot(Vh),d=Mr.dot(Vh);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Sr,a);Gh.subVectors(e,r);const f=Sr.dot(Gh),p=Mr.dot(Gh);if(p>=0&&f<=p)return t.copy(r);const v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Mr,o);const g=u*p-f*d;if(g<=0&&d-u>=0&&f-p>=0)return up.subVectors(r,s),o=(d-u)/(d-u+(f-p)),t.copy(s).addScaledVector(up,o);const m=1/(g+v+h);return a=v*m,o=h*m,t.copy(n).addScaledVector(Sr,a).addScaledVector(Mr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Rn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vi):vi.fromBufferAttribute(r,a),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),No.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),No.copy(n.boundingBox)),No.applyMatrix4(e.matrixWorld),this.union(No)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),Oo.subVectors(this.max,fa),wr.subVectors(e.a,fa),Tr.subVectors(e.b,fa),Er.subVectors(e.c,fa),hs.subVectors(Tr,wr),us.subVectors(Er,Tr),Ls.subVectors(wr,Er);let t=[0,-hs.z,hs.y,0,-us.z,us.y,0,-Ls.z,Ls.y,hs.z,0,-hs.x,us.z,0,-us.x,Ls.z,0,-Ls.x,-hs.y,hs.x,0,-us.y,us.x,0,-Ls.y,Ls.x,0];return!qh(t,wr,Tr,Er,Oo)||(t=[1,0,0,0,1,0,0,0,1],!qh(t,wr,Tr,Er,Oo))?!1:(Fo.crossVectors(hs,us),t=[Fo.x,Fo.y,Fo.z],qh(t,wr,Tr,Er,Oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wi=[new P,new P,new P,new P,new P,new P,new P,new P],vi=new P,No=new Rn,wr=new P,Tr=new P,Er=new P,hs=new P,us=new P,Ls=new P,fa=new P,Oo=new P,Fo=new P,Us=new P;function qh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Us.fromArray(i,r);const o=s.x*Math.abs(Us.x)+s.y*Math.abs(Us.y)+s.z*Math.abs(Us.z),l=e.dot(Us),c=t.dot(Us),u=n.dot(Us);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ki=vb();function vb(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Gn(i){Math.abs(i)>65504&&we("DataUtils.toHalfFloat(): Value out of range."),i=ot(i,-65504,65504),Ki.floatView[0]=i;const e=Ki.uint32View[0],t=e>>23&511;return Ki.baseTable[t]+((e&8388607)>>Ki.shiftTable[t])}function Aa(i){const e=i>>10;return Ki.uint32View[0]=Ki.mantissaTable[Ki.offsetTable[e]+(i&1023)]+Ki.exponentTable[e],Ki.floatView[0]}class _b{static toHalfFloat(e){return Gn(e)}static fromHalfFloat(e){return Aa(e)}}const rn=new P,ko=new re;let yb=0;class Ft extends Ti{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qa,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ko.fromBufferAttribute(this,t),ko.applyMatrix3(e),this.setXY(t,ko.x,ko.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qa&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class xb extends Ft{constructor(e,t,n){super(new Int8Array(e),t,n)}}class bb extends Ft{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class Sb extends Ft{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class Mb extends Ft{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Nd extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wb extends Ft{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Od extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tb extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Aa(this.array[e*this.itemSize]);return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=Gn(t),this}getY(e){let t=Aa(this.array[e*this.itemSize+1]);return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=Gn(t),this}getZ(e){let t=Aa(this.array[e*this.itemSize+2]);return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=Gn(t),this}getW(e){let t=Aa(this.array[e*this.itemSize+3]);return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=Gn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=Gn(t),this.array[e+1]=Gn(n),this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.array[e+0]=Gn(t),this.array[e+1]=Gn(n),this.array[e+2]=Gn(s),this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=Gn(t),this.array[e+1]=Gn(n),this.array[e+2]=Gn(s),this.array[e+3]=Gn(r),this}}class Be extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Eb=new Rn,pa=new P,$h=new P;class yn{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Eb.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pa.subVectors(e,this.center);const t=pa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(pa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($h.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pa.copy(e.center).add($h)),this.expandByPoint(pa.copy(e.center).sub($h))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ab=0;const ni=new nt,Yh=new Et,Ar=new P,Kn=new Rn,ma=new Rn,hn=new P;class dt extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ab++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fx(e)?Od:Nd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ut().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,n){return ni.makeTranslation(e,t,n),this.applyMatrix4(ni),this}scale(e,t,n){return ni.makeScale(e,t,n),this.applyMatrix4(ni),this}lookAt(e){return Yh.lookAt(e),Yh.updateMatrix(),this.applyMatrix4(Yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Be(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Kn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ma.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(Kn.min,ma.min),Kn.expandByPoint(hn),hn.addVectors(Kn.max,ma.max),Kn.expandByPoint(hn)):(Kn.expandByPoint(ma.min),Kn.expandByPoint(ma.max))}Kn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)hn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(hn));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)hn.fromBufferAttribute(o,c),l&&(Ar.fromBufferAttribute(e,c),hn.add(Ar)),s=Math.max(s,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ft(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new P,l[x]=new P;const c=new P,u=new P,d=new P,h=new re,f=new re,p=new re,v=new P,g=new P;function m(x,T,R){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,R),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,R),u.sub(c),d.sub(c),f.sub(h),p.sub(h);const I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(I),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(I),o[x].add(v),o[T].add(v),o[R].add(v),l[x].add(g),l[T].add(g),l[R].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let x=0,T=_.length;x<T;++x){const R=_[x],I=R.start,z=R.count;for(let L=I,F=I+z;L<F;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const b=new P,y=new P,w=new P,M=new P;function C(x){w.fromBufferAttribute(s,x),M.copy(w);const T=o[x];b.copy(T),b.sub(w.multiplyScalar(w.dot(T))).normalize(),y.crossVectors(M,T);const I=y.dot(l[x])<0?-1:1;a.setXYZW(x,b.x,b.y,b.z,I)}for(let x=0,T=_.length;x<T;++x){const R=_[x],I=R.start,z=R.count;for(let L=I,F=I+z;L<F;L+=3)C(e.getX(L+0)),C(e.getX(L+1)),C(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,d=new P;if(e)for(let h=0,f=e.count;h<f;h+=3){const p=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,p=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let m=0;m<u;m++)h[p++]=c[f++]}return new Ft(h,u,d)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class eh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qa,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const In=new P;class rr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyMatrix4(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyNormalMatrix(e),this.setXYZ(t,In.x,In.y,In.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.transformDirection(e),this.setXYZ(t,In.x,In.y,In.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){to("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new rr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){to("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Cb=0;class xn extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=er,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ol,this.blendDst=Fl,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){we(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(n.blending=this.blending),this.side!==Qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ol&&(n.blendSrc=this.blendSrc),this.blendDst!==Fl&&(n.blendDst=this.blendDst),this.blendEquation!==vs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ku&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new re().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fd extends xn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Cr;const ga=new P,Rr=new P,Ir=new P,Pr=new re,va=new re,$g=new nt,Bo=new P,_a=new P,zo=new P,dp=new re,Zh=new re,fp=new re;class Yg extends Et{constructor(e=new Fd){if(super(),this.isSprite=!0,this.type="Sprite",Cr===void 0){Cr=new dt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new eh(t,5);Cr.setIndex([0,1,2,0,2,3]),Cr.setAttribute("position",new rr(n,3,0,!1)),Cr.setAttribute("uv",new rr(n,2,3,!1))}this.geometry=Cr,this.material=e,this.center=new re(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rr.setFromMatrixScale(this.matrixWorld),$g.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ir.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rr.multiplyScalar(-Ir.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Vo(Bo.set(-.5,-.5,0),Ir,a,Rr,s,r),Vo(_a.set(.5,-.5,0),Ir,a,Rr,s,r),Vo(zo.set(.5,.5,0),Ir,a,Rr,s,r),dp.set(0,0),Zh.set(1,0),fp.set(1,1);let o=e.ray.intersectTriangle(Bo,_a,zo,!1,ga);if(o===null&&(Vo(_a.set(-.5,.5,0),Ir,a,Rr,s,r),Zh.set(0,1),o=e.ray.intersectTriangle(Bo,zo,_a,!1,ga),o===null))return;const l=e.ray.origin.distanceTo(ga);l<e.near||l>e.far||t.push({distance:l,point:ga.clone(),uv:Wn.getInterpolation(ga,Bo,_a,zo,dp,Zh,fp,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Vo(i,e,t,n,s,r){Pr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(va.x=r*Pr.x-s*Pr.y,va.y=s*Pr.x+r*Pr.y):va.copy(Pr),i.copy(e),i.x+=va.x,i.y+=va.y,i.applyMatrix4($g)}const Go=new P,pp=new P;class Zg extends Et{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,s=t.length;n<s;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const s=this.levels;let r;for(r=0;r<s.length&&!(t<s[r].distance);r++);return s.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const s=t.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,s;for(n=1,s=t.length;n<s;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Go.setFromMatrixPosition(this.matrixWorld);const s=e.ray.origin.distanceTo(Go);this.getObjectForDistance(s).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Go.setFromMatrixPosition(e.matrixWorld),pp.setFromMatrixPosition(this.matrixWorld);const n=Go.distanceTo(pp)/e.zoom;t[0].object.visible=!0;let s,r;for(s=1,r=t.length;s<r;s++){let a=t[s].distance;if(t[s].object.visible&&(a-=a*t[s].hysteresis),n>=a)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)t[s].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let s=0,r=n.length;s<r;s++){const a=n[s];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const Xi=new P,Kh=new P,Ho=new P,ds=new P,Jh=new P,Wo=new P,jh=new P;class hr{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,t),Xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Kh.copy(e).add(t).multiplyScalar(.5),Ho.copy(t).sub(e).normalize(),ds.copy(this.origin).sub(Kh);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ho),o=ds.dot(this.direction),l=-ds.dot(Ho),c=ds.lengthSq(),u=Math.abs(1-a*a);let d,h,f,p;if(u>0)if(d=a*l-o,h=a*o-l,p=r*u,d>=0)if(h>=-p)if(h<=p){const v=1/u;d*=v,h*=v,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Kh).addScaledVector(Ho,h),f}intersectSphere(e,t){Xi.subVectors(e.center,this.origin);const n=Xi.dot(this.direction),s=Xi.dot(Xi)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,t,n,s,r){Jh.subVectors(t,e),Wo.subVectors(n,e),jh.crossVectors(Jh,Wo);let a=this.direction.dot(jh),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ds.subVectors(this.origin,e);const l=o*this.direction.dot(Wo.crossVectors(ds,Wo));if(l<0)return null;const c=o*this.direction.dot(Jh.cross(ds));if(c<0||l+c>a)return null;const u=-o*ds.dot(jh);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ss extends xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mp=new nt,Ns=new hr,Xo=new yn,gp=new P,qo=new P,$o=new P,Yo=new P,Qh=new P,Zo=new P,vp=new P,Ko=new P;class sn extends Et{constructor(e=new dt,t=new ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Zo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Qh.fromBufferAttribute(d,e),a?Zo.addScaledVector(Qh,u):Zo.addScaledVector(Qh.sub(t),u))}t.add(Zo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(r),Ns.copy(e.ray).recast(e.near),!(Xo.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(Xo,gp)===null||Ns.origin.distanceToSquared(gp)>(e.far-e.near)**2))&&(mp.copy(r).invert(),Ns.copy(e.ray).applyMatrix4(mp),!(n.boundingBox!==null&&Ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ns)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=h.length;p<v;p++){const g=h[p],m=a[g.materialIndex],_=Math.max(g.start,f.start),b=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,w=b;y<w;y+=3){const M=o.getX(y),C=o.getX(y+1),x=o.getX(y+2);s=Jo(this,m,e,n,c,u,d,M,C,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const _=o.getX(g),b=o.getX(g+1),y=o.getX(g+2);s=Jo(this,a,e,n,c,u,d,_,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=h.length;p<v;p++){const g=h[p],m=a[g.materialIndex],_=Math.max(g.start,f.start),b=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,w=b;y<w;y+=3){const M=y,C=y+1,x=y+2;s=Jo(this,m,e,n,c,u,d,M,C,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const _=g,b=g+1,y=g+2;s=Jo(this,a,e,n,c,u,d,_,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Rb(i,e,t,n,s,r,a,o){let l;if(e.side===Fn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Qi,o),l===null)return null;Ko.copy(o),Ko.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ko);return c<t.near||c>t.far?null:{distance:c,point:Ko.clone(),object:i}}function Jo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,qo),i.getVertexPosition(l,$o),i.getVertexPosition(c,Yo);const u=Rb(i,e,t,n,qo,$o,Yo,vp);if(u){const d=new P;Wn.getBarycoord(vp,qo,$o,Yo,d),s&&(u.uv=Wn.getInterpolatedAttribute(s,o,l,c,d,new re)),r&&(u.uv1=Wn.getInterpolatedAttribute(r,o,l,c,d,new re)),a&&(u.normal=Wn.getInterpolatedAttribute(a,o,l,c,d,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new P,materialIndex:0};Wn.getNormal(qo,$o,Yo,h.normal),u.face=h,u.barycoord=d}return u}const ya=new Ut,_p=new Ut,yp=new Ut,Ib=new Ut,xp=new nt,jo=new P,eu=new yn,bp=new nt,tu=new hr;class Kg extends sn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ou,this.bindMatrix=new nt,this.bindMatrixInverse=new nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Rn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jo),this.boundingBox.expandByPoint(jo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jo),this.boundingSphere.expandByPoint(jo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),eu.copy(this.boundingSphere),eu.applyMatrix4(s),e.ray.intersectsSphere(eu)!==!1&&(bp.copy(s).invert(),tu.copy(e.ray).applyMatrix4(bp),!(this.boundingBox!==null&&tu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,tu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ut,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ou?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Rg?this.bindMatrixInverse.copy(this.bindMatrix).invert():we("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;_p.fromBufferAttribute(s.attributes.skinIndex,e),yp.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(ya.copy(t),t.set(0,0,0,0)):(ya.set(...t,1),t.set(0,0,0)),ya.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=yp.getComponent(r);if(a!==0){const o=_p.getComponent(r);xp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Ib.copy(ya).applyMatrix4(xp),a)}}return t.isVector4&&(t.w=ya.w),t.applyMatrix4(this.bindMatrixInverse)}}class kd extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}}class li extends Yt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=nn,u=nn,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sp=new nt,Pb=new nt;class th{constructor(e=[],t=[]){this.uuid=Qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){we("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new nt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new nt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Pb;Sp.multiplyMatrices(o,t[r]),Sp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new th(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new li(t,e,e,On,Nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(we("Skeleton: No bone found with UUID:",r),a=new kd),this.bones.push(a),this.boneInverses.push(new nt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class ta extends Ft{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Dr=new nt,Mp=new nt,Qo=[],wp=new Rn,Db=new nt,xa=new sn,ba=new yn;class Jg extends sn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ta(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Db)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Dr),wp.copy(e.boundingBox).applyMatrix4(Dr),this.boundingBox.union(wp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Dr),ba.copy(e.boundingSphere).applyMatrix4(Dr),this.boundingSphere.union(ba)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(xa.geometry=this.geometry,xa.material=this.material,xa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ba.copy(this.boundingSphere),ba.applyMatrix4(n),e.ray.intersectsSphere(ba)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Dr),Mp.multiplyMatrices(n,Dr),xa.matrixWorld=Mp,xa.raycast(e,Qo);for(let a=0,o=Qo.length;a<o;a++){const l=Qo[a];l.instanceId=r,l.object=this,t.push(l)}Qo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ta(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new li(new Float32Array(s*this.count),s,this.count,Hc,Nn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const nu=new P,Lb=new P,Ub=new ut;class Yi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=nu.subVectors(n,t).cross(Lb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(nu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ub.getNormalMatrix(e),s=this.coplanarPoint(nu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Os=new yn,Nb=new re(.5,.5),el=new P;class ar{constructor(e=new Yi,t=new Yi,n=new Yi,s=new Yi,r=new Yi,a=new Yi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],p=r[8],v=r[9],g=r[10],m=r[11],_=r[12],b=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-a,f-u,m-p,w-_).normalize(),s[1].setComponents(c+a,f+u,m+p,w+_).normalize(),s[2].setComponents(c+o,f+d,m+v,w+b).normalize(),s[3].setComponents(c-o,f-d,m-v,w-b).normalize(),n)s[4].setComponents(l,h,g,y).normalize(),s[5].setComponents(c-l,f-h,m-g,w-y).normalize();else if(s[4].setComponents(c-l,f-h,m-g,w-y).normalize(),t===Jn)s[5].setComponents(c+l,f+h,m+g,w+y).normalize();else if(t===sr)s[5].setComponents(l,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(e){Os.center.set(0,0,0);const t=Nb.distanceTo(e.center);return Os.radius=.7071067811865476+t,Os.applyMatrix4(e.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(el.x=s.normal.x>0?e.max.x:e.min.x,el.y=s.normal.y>0?e.max.y:e.min.y,el.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(el)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Tp=new nt;class nh{constructor(){this.coordinateSystem=Jn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];Tp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ar),n[s].setFromProjectionMatrix(Tp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ar),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new nh().copy(this)}}function iu(i,e){return i-e}function Ob(i,e){return i.z-e.z}function Fb(i,e){return e.z-i.z}class kb{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,s){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=s}reset(){this.list.length=0,this.index=0}}const zn=new nt,Bb=new ke(1,1,1),zb=new ar,Vb=new nh,tl=new Rn,Fs=new yn,Sa=new P,Ep=new P,Gb=new P,su=new kb,En=new sn,nl=[];function Hb(i,e,t=0){const n=e.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==e.array.constructor){const s=i.count;for(let r=0;r<s;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,i.getComponent(r,a))}else e.array.set(i.array,t*n);e.needsUpdate=!0}function ks(i,e){if(i.constructor!==e.constructor){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++)e[n]=i[n]}else{const t=Math.min(i.length,e.length);e.set(new i.constructor(i.buffer,0,t))}}class jg extends sn{constructor(e,t,n=t*2,s){super(new dt,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new li(t,e,e,On,Nn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new li(t,e,e,bo,ui);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new li(t,e,e,On,Nn);n.colorSpace=_t.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const a=e.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,u=new o.constructor(n*l),d=new Ft(u,l,c);t.setAttribute(r,d)}if(e.getIndex()!==null){const r=n>65535?new Uint32Array(s):new Uint16Array(s);t.setIndex(new Ft(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const s=e.getAttribute(n),r=t.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,zn),this.getBoundingBoxAt(r,tl).applyMatrix4(zn),e.union(tl)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,zn),this.getBoundingSphereAt(r,Fs).applyMatrix4(zn),e.union(Fs)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(iu),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=n):(s=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;zn.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(Bb.toArray(a.image.data,s*4),a.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=n===-1?a.count:n),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(iu),l=this._availableGeometryIds.shift(),r[l]=s):(l=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(l,e),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(s&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const u in n.attributes){const d=t.getAttribute(u),h=n.getAttribute(u);Hb(d,h,l);const f=d.itemSize;for(let p=d.count,v=c;p<v;p++){const g=l+p;for(let m=0;m<f;m++)h.setComponent(g,m,0)}h.needsUpdate=!0,h.addUpdateRange(l*f,c*f)}if(s){const u=o.indexStart,d=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let h=0;h<a.count;h++)r.setX(u+h,l+a.getX(h));for(let h=a.count,f=d;h<f;h++)r.setX(u+h,l);r.needsUpdate=!0,r.addUpdateRange(u,o.reservedIndexCount)}return o.start=s?o.indexStart:o.vertexStart,o.count=s?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let s=0,r=n.length;s<r;s++)n[s].active&&n[s].geometryIndex===e&&this.deleteInstance(s);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,s=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){const l=s[a],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){const{indexStart:u,vertexStart:d,reservedIndexCount:h}=c,f=r.index,p=f.array,v=e-d;for(let g=u;g<u+h;g++)p[g]=p[g]+v;f.array.copyWithin(t,u,u+h),f.addUpdateRange(t,h),f.needsUpdate=!0,c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:u,reservedVertexCount:d}=c,h=r.attributes;for(const f in h){const p=h[f],{array:v,itemSize:g}=p;v.copyWithin(e*g,u*g,(u+d)*g),p.addUpdateRange(e*g,d*g),p.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[e];if(s.boundingBox===null){const r=new Rn,a=n.index,o=n.attributes.position;for(let l=s.start,c=s.start+s.count;l<c;l++){let u=l;a&&(u=a.getX(u)),r.expandByPoint(Sa.fromBufferAttribute(o,u))}s.boundingBox=r}return t.copy(s.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[e];if(s.boundingSphere===null){const r=new yn;this.getBoundingBoxAt(e,tl),tl.getCenter(r.center);const a=n.index,o=n.attributes.position;let l=0;for(let c=s.start,u=s.start+s.count;c<u;c++){let d=c;a&&(d=a.getX(d)),Sa.fromBufferAttribute(o,d),l=Math.max(l,r.center.distanceToSquared(Sa))}r.radius=Math.sqrt(l),s.boundingSphere=r}return t.copy(s.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,s=this._matricesTexture.image.data;return t.toArray(s,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(iu);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const s=new Int32Array(e),r=new Int32Array(e);ks(this._multiDrawCounts,s),ks(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=e;const a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),ks(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),ks(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),ks(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new dt,this._initializeGeometry(r));const a=this.geometry;r.index&&ks(r.index.array,a.index.array);for(const o in r.attributes)ks(r.attributes[o].array,a.attributes[o].array)}raycast(e,t){const n=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,a=this.geometry;En.material=this.material,En.geometry.index=a.index,En.geometry.attributes=a.attributes,En.geometry.boundingBox===null&&(En.geometry.boundingBox=new Rn),En.geometry.boundingSphere===null&&(En.geometry.boundingSphere=new yn);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;const c=n[o].geometryIndex,u=s[c];En.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(o,En.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,En.geometry.boundingBox),this.getBoundingSphereAt(c,En.geometry.boundingSphere),En.raycast(e,nl);for(let d=0,h=nl.length;d<h;d++){const f=nl[d];f.object=this,f.batchId=o,t.push(f)}nl.length=0}En.material=null,En.geometry.index=null,En.geometry.attributes={},En.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=s.getIndex();let o=a===null?1:a.array.BYTES_PER_ELEMENT,l=1;r.wireframe&&(l=2,o=s.attributes.position.count>65535?4:2);const c=this._instanceInfo,u=this._multiDrawStarts,d=this._multiDrawCounts,h=this._geometryInfo,f=this.perObjectFrustumCulled,p=this._indirectTexture,v=p.image.data,g=n.isArrayCamera?Vb:zb;f&&(n.isArrayCamera?g.setFromArrayCamera(n):(zn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),g.setFromProjectionMatrix(zn,n.coordinateSystem,n.reversedDepth)));let m=0;if(this.sortObjects){zn.copy(this.matrixWorld).invert(),Sa.setFromMatrixPosition(n.matrixWorld).applyMatrix4(zn),Ep.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(zn);for(let y=0,w=c.length;y<w;y++)if(c[y].visible&&c[y].active){const M=c[y].geometryIndex;this.getMatrixAt(y,zn),this.getBoundingSphereAt(M,Fs).applyMatrix4(zn);let C=!1;if(f&&(C=!g.intersectsSphere(Fs)),!C){const x=h[M],T=Gb.subVectors(Fs.center,Sa).dot(Ep);su.push(x.start,x.count,T,y)}}const _=su.list,b=this.customSort;b===null?_.sort(r.transparent?Fb:Ob):b.call(this,_,n);for(let y=0,w=_.length;y<w;y++){const M=_[y];u[m]=M.start*o*l,d[m]=M.count*l,v[m]=M.index,m++}su.reset()}else for(let _=0,b=c.length;_<b;_++)if(c[_].visible&&c[_].active){const y=c[_].geometryIndex;let w=!1;if(f&&(this.getMatrixAt(_,zn),this.getBoundingSphereAt(y,Fs).applyMatrix4(zn),w=!g.intersectsSphere(Fs)),!w){const M=h[y];u[m]=M.start*o*l,d[m]=M.count*l,v[m]=_,m++}}p.needsUpdate=!0,this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(e,t,n,s,r,a){this.onBeforeRender(e,null,s,r,a)}}class kn extends xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sc=new P,Mc=new P,Ap=new nt,Ma=new hr,il=new yn,ru=new P,Cp=new P;class Es extends Et{constructor(e=new dt,t=new kn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Sc.fromBufferAttribute(t,s-1),Mc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Sc.distanceTo(Mc);e.setAttribute("lineDistance",new Be(n,1))}else we("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),il.copy(n.boundingSphere),il.applyMatrix4(s),il.radius+=r,e.ray.intersectsSphere(il)===!1)return;Ap.copy(s).invert(),Ma.copy(e.ray).applyMatrix4(Ap);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let v=f,g=p-1;v<g;v+=c){const m=u.getX(v),_=u.getX(v+1),b=sl(this,e,Ma,l,m,_,v);b&&t.push(b)}if(this.isLineLoop){const v=u.getX(p-1),g=u.getX(f),m=sl(this,e,Ma,l,v,g,p-1);m&&t.push(m)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=f,g=p-1;v<g;v+=c){const m=sl(this,e,Ma,l,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){const v=sl(this,e,Ma,l,p-1,f,p-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function sl(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Sc.fromBufferAttribute(o,s),Mc.fromBufferAttribute(o,r),t.distanceSqToSegment(Sc,Mc,ru,Cp)>n)return;ru.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ru);if(!(c<e.near||c>e.far))return{distance:c,point:Cp.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Rp=new P,Ip=new P;class Bi extends Es{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Rp.fromBufferAttribute(t,s),Ip.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Rp.distanceTo(Ip);e.setAttribute("lineDistance",new Be(n,1))}else we("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qg extends Es{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}let Bd=class extends xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};const Pp=new nt,zu=new hr,rl=new yn,al=new P;class e0 extends Et{constructor(e=new dt,t=new Bd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rl.copy(n.boundingSphere),rl.applyMatrix4(s),rl.radius+=r,e.ray.intersectsSphere(rl)===!1)return;Pp.copy(s).invert(),zu.copy(e.ray).applyMatrix4(Pp);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=h,v=f;p<v;p++){const g=c.getX(p);al.fromBufferAttribute(d,g),Dp(al,g,l,s,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=h,v=f;p<v;p++)al.fromBufferAttribute(d,p),Dp(al,p,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Dp(i,e,t,n,s,r,a){const o=zu.distanceSqToPoint(i);if(o<t){const l=new P;zu.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class t0 extends Yt{constructor(e,t,n,s,r=Ht,a=Ht,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function d(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Wb extends t0{constructor(e,t,n,s,r,a,o,l){super({},e,t,n,s,r,a,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class Xb extends Yt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=nn,this.minFilter=nn,this.generateMipmaps=!1,this.needsUpdate=!0}}class ih extends Yt{constructor(e,t,n,s,r,a,o,l,c,u,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class qb extends ih{constructor(e,t,n,s,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=Xn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $b extends ih{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Ui),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class So extends Yt{constructor(e=[],t=Ui,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yb extends Yt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zb extends Yt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;const u=e?e.parentNode:null;u!==null&&"requestPaint"in u&&(u.onpaint=()=>{this.needsUpdate=!0},u.requestPaint())}dispose(){const e=this.image?this.image.parentNode:null;e!==null&&"onpaint"in e&&(e.onpaint=null),super.dispose()}}class or extends Yt{constructor(e,t,n=ui,s,r,a,o=nn,l=nn,c,u=Oi,d=1){if(u!==Oi&&u!==_s)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ys(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class n0 extends or{constructor(e,t=ui,n=Ui,s,r,a=nn,o=nn,l,c=Oi){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class zd extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Cs extends dt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(u,3)),this.setAttribute("uv",new Be(d,2));function p(v,g,m,_,b,y,w,M,C,x,T){const R=y/C,I=w/x,z=y/2,L=w/2,F=M/2,k=C+1,U=x+1;let O=0,B=0;const H=new P;for(let ne=0;ne<U;ne++){const j=ne*I-L;for(let te=0;te<k;te++){const Re=te*R-z;H[v]=Re*_,H[g]=j*b,H[m]=F,c.push(H.x,H.y,H.z),H[v]=0,H[g]=0,H[m]=M>0?1:-1,u.push(H.x,H.y,H.z),d.push(te/C),d.push(1-ne/x),O+=1}}for(let ne=0;ne<x;ne++)for(let j=0;j<C;j++){const te=h+j+k*ne,Re=h+j+k*(ne+1),ct=h+(j+1)+k*(ne+1),at=h+(j+1)+k*ne;l.push(te,Re,at),l.push(Re,ct,at),B+=6}o.addGroup(f,B,T),f+=B,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class sh extends dt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],u=t/2,d=Math.PI/2*e,h=t,f=2*d+h,p=n*2+r,v=s+1,g=new P,m=new P;for(let _=0;_<=p;_++){let b=0,y=0,w=0,M=0;if(_<=n){const T=_/n,R=T*Math.PI/2;y=-u-e*Math.cos(R),w=e*Math.sin(R),M=-e*Math.cos(R),b=T*d}else if(_<=n+r){const T=(_-n)/r;y=-u+T*t,w=e,M=0,b=d+T*h}else{const T=(_-n-r)/n,R=T*Math.PI/2;y=u+e*Math.sin(R),w=e*Math.cos(R),M=e*Math.sin(R),b=d+h+T*d}const C=Math.max(0,Math.min(1,b/f));let x=0;_===0?x=.5/s:_===p&&(x=-.5/s);for(let T=0;T<=s;T++){const R=T/s,I=R*Math.PI*2,z=Math.sin(I),L=Math.cos(I);m.x=-w*L,m.y=y,m.z=w*z,o.push(m.x,m.y,m.z),g.set(-w*L,M,w*z),g.normalize(),l.push(g.x,g.y,g.z),c.push(R+x,C)}if(_>0){const T=(_-1)*v;for(let R=0;R<s;R++){const I=T+R,z=T+R+1,L=_*v+R,F=_*v+R+1;a.push(I,z,L),a.push(z,F,L)}}}this.setIndex(a),this.setAttribute("position",new Be(o,3)),this.setAttribute("normal",new Be(l,3)),this.setAttribute("uv",new Be(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sh(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class rh extends dt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new P,u=new re;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Be(a,3)),this.setAttribute("normal",new Be(o,3)),this.setAttribute("uv",new Be(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Mo extends dt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let p=0;const v=[],g=n/2;let m=0;_(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Be(d,3)),this.setAttribute("normal",new Be(h,3)),this.setAttribute("uv",new Be(f,2));function _(){const y=new P,w=new P;let M=0;const C=(t-e)/n;for(let x=0;x<=r;x++){const T=[],R=x/r,I=R*(t-e)+e;for(let z=0;z<=s;z++){const L=z/s,F=L*l+o,k=Math.sin(F),U=Math.cos(F);w.x=I*k,w.y=-R*n+g,w.z=I*U,d.push(w.x,w.y,w.z),y.set(k,C,U).normalize(),h.push(y.x,y.y,y.z),f.push(L,1-R),T.push(p++)}v.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){const R=v[T][x],I=v[T+1][x],z=v[T+1][x+1],L=v[T][x+1];(e>0||T!==0)&&(u.push(R,I,L),M+=3),(t>0||T!==r-1)&&(u.push(I,z,L),M+=3)}c.addGroup(m,M,0),m+=M}function b(y){const w=p,M=new re,C=new P;let x=0;const T=y===!0?e:t,R=y===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,g*R,0),h.push(0,R,0),f.push(.5,.5),p++;const I=p;for(let z=0;z<=s;z++){const F=z/s*l+o,k=Math.cos(F),U=Math.sin(F);C.x=T*U,C.y=g*R,C.z=T*k,d.push(C.x,C.y,C.z),h.push(0,R,0),M.x=k*.5+.5,M.y=U*.5*R+.5,f.push(M.x,M.y),p++}for(let z=0;z<s;z++){const L=w+z,F=I+z;y===!0?u.push(F,F+1,L):u.push(F+1,F,L),x+=3}c.addGroup(m,x,y===!0?1:2),m+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wo extends Mo{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new wo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Rs extends dt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Be(r,3)),this.setAttribute("normal",new Be(r.slice(),3)),this.setAttribute("uv",new Be(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const b=new P,y=new P,w=new P;for(let M=0;M<t.length;M+=3)f(t[M+0],b),f(t[M+1],y),f(t[M+2],w),l(b,y,w,_)}function l(_,b,y,w){const M=w+1,C=[];for(let x=0;x<=M;x++){C[x]=[];const T=_.clone().lerp(y,x/M),R=b.clone().lerp(y,x/M),I=M-x;for(let z=0;z<=I;z++)z===0&&x===M?C[x][z]=T:C[x][z]=T.clone().lerp(R,z/I)}for(let x=0;x<M;x++)for(let T=0;T<2*(M-x)-1;T++){const R=Math.floor(T/2);T%2===0?(h(C[x][R+1]),h(C[x+1][R]),h(C[x][R])):(h(C[x][R+1]),h(C[x+1][R+1]),h(C[x+1][R]))}}function c(_){const b=new P;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(_),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function u(){const _=new P;for(let b=0;b<r.length;b+=3){_.x=r[b+0],_.y=r[b+1],_.z=r[b+2];const y=g(_)/2/Math.PI+.5,w=m(_)/Math.PI+.5;a.push(y,1-w)}p(),d()}function d(){for(let _=0;_<a.length;_+=6){const b=a[_+0],y=a[_+2],w=a[_+4],M=Math.max(b,y,w),C=Math.min(b,y,w);M>.9&&C<.1&&(b<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),w<.2&&(a[_+4]+=1))}}function h(_){r.push(_.x,_.y,_.z)}function f(_,b){const y=_*3;b.x=e[y+0],b.y=e[y+1],b.z=e[y+2]}function p(){const _=new P,b=new P,y=new P,w=new P,M=new re,C=new re,x=new re;for(let T=0,R=0;T<r.length;T+=9,R+=6){_.set(r[T+0],r[T+1],r[T+2]),b.set(r[T+3],r[T+4],r[T+5]),y.set(r[T+6],r[T+7],r[T+8]),M.set(a[R+0],a[R+1]),C.set(a[R+2],a[R+3]),x.set(a[R+4],a[R+5]),w.copy(_).add(b).add(y).divideScalar(3);const I=g(w);v(M,R+0,_,I),v(C,R+2,b,I),v(x,R+4,y,I)}}function v(_,b,y,w){w<0&&_.x===1&&(a[b]=_.x-1),y.x===0&&y.z===0&&(a[b]=w/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.vertices,e.indices,e.radius,e.detail)}}class ah extends Rs{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ah(e.radius,e.detail)}}const ol=new P,ll=new P,au=new P,cl=new Wn;class i0 extends dt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(tr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:v,b:g,c:m}=cl;if(v.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),cl.getNormal(au),d[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){const b=(_+1)%3,y=d[_],w=d[b],M=cl[u[_]],C=cl[u[b]],x=`${y}_${w}`,T=`${w}_${y}`;T in h&&h[T]?(au.dot(h[T].normal)<=r&&(f.push(M.x,M.y,M.z),f.push(C.x,C.y,C.z)),h[T]=null):x in h||(h[x]={index0:c[_],index1:c[b],normal:au.clone()})}}for(const p in h)if(h[p]){const{index0:v,index1:g}=h[p];ol.fromBufferAttribute(o,v),ll.fromBufferAttribute(o,g),f.push(ol.x,ol.y,ol.z),f.push(ll.x,ll.y,ll.z)}this.setAttribute("position",new Be(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ei{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){we("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new re:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,s=[],r=[],a=[],o=new P,l=new nt;for(let f=0;f<=e;f++){const p=f/e;s[f]=this.getTangentAt(p,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(ot(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ot(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class oh extends Ei{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new re){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class s0 extends oh{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Vd(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Lp=new P,Up=new P,ou=new Vd,lu=new Vd,cu=new Vd;class r0 extends Ei{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Up.subVectors(s[0],s[1]).add(s[0]),c=Up);const d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Lp.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Lp),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),ou.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,p,v,g),lu.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,p,v,g),cu.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,p,v,g)}else this.curveType==="catmullrom"&&(ou.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),lu.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),cu.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(ou.calc(l),lu.calc(l),cu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Np(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Kb(i,e){const t=1-i;return t*t*e}function Jb(i,e){return 2*(1-i)*i*e}function jb(i,e){return i*i*e}function za(i,e,t,n){return Kb(i,e)+Jb(i,t)+jb(i,n)}function Qb(i,e){const t=1-i;return t*t*t*e}function eS(i,e){const t=1-i;return 3*t*t*i*e}function tS(i,e){return 3*(1-i)*i*i*e}function nS(i,e){return i*i*i*e}function Va(i,e,t,n,s){return Qb(i,e)+eS(i,t)+tS(i,n)+nS(i,s)}class Gd extends Ei{constructor(e=new re,t=new re,n=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new re){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Va(e,s.x,r.x,a.x,o.x),Va(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class a0 extends Ei{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Va(e,s.x,r.x,a.x,o.x),Va(e,s.y,r.y,a.y,o.y),Va(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Hd extends Ei{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class o0 extends Ei{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wd extends Ei{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(za(e,s.x,r.x,a.x),za(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xd extends Ei{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(za(e,s.x,r.x,a.x),za(e,s.y,r.y,a.y),za(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qd extends Ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Np(o,l.x,c.x,u.x,d.x),Np(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new re().fromArray(s))}return this}}var wc=Object.freeze({__proto__:null,ArcCurve:s0,CatmullRomCurve3:r0,CubicBezierCurve:Gd,CubicBezierCurve3:a0,EllipseCurve:oh,LineCurve:Hd,LineCurve3:o0,QuadraticBezierCurve:Wd,QuadraticBezierCurve3:Xd,SplineCurve:qd});class l0 extends Ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new wc[s.type]().fromJSON(s))}return this}}class no extends l0{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Hd(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Wd(this.currentPoint.clone(),new re(e,t),new re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new Gd(this.currentPoint.clone(),new re(e,t),new re(n,s),new re(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new qd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){const c=new oh(e,t,n,s,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class To extends no{constructor(e){super(e),this.uuid=Qn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new no().fromJSON(s))}return this}}function iS(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=c0(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=lS(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let u=o,d=l;for(let h=t;h<s;h+=t){const f=i[h],p=i[h+1];f<o&&(o=f),p<l&&(l=p),f>u&&(u=f),p>d&&(d=p)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return io(r,a,t,o,l,c,0),a}function c0(i,e,t,n,s){let r;if(s===yS(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Op(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Op(a/n|0,i[a],i[a+1],r);return r&&na(r,r.next)&&(ro(r),r=r.next),r}function lr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(na(t,t.next)||qt(t.prev,t,t.next)===0)){if(ro(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function io(i,e,t,n,s,r,a){if(!i)return;!a&&r&&fS(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?rS(i,n,s,r):sS(i)){e.push(l.i,i.i,c.i),ro(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=aS(lr(i),e),io(i,e,t,n,s,r,2)):a===2&&oS(i,e,t,n,s,r):io(lr(i),e,t,n,s,r,1);break}}}function sS(i){const e=i.prev,t=i,n=i.next;if(qt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),f=Math.max(o,l,c);let p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&Ca(s,o,r,l,a,c,p.x,p.y)&&qt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function rS(i,e,t,n){const s=i.prev,r=i,a=i.next;if(qt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,l,c),p=Math.min(u,d,h),v=Math.max(o,l,c),g=Math.max(u,d,h),m=Vu(f,p,e,t,n),_=Vu(v,g,e,t,n);let b=i.prevZ,y=i.nextZ;for(;b&&b.z>=m&&y&&y.z<=_;){if(b.x>=f&&b.x<=v&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&Ca(o,u,l,d,c,h,b.x,b.y)&&qt(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&Ca(o,u,l,d,c,h,y.x,y.y)&&qt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=v&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&Ca(o,u,l,d,c,h,b.x,b.y)&&qt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&Ca(o,u,l,d,c,h,y.x,y.y)&&qt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function aS(i,e){let t=i;do{const n=t.prev,s=t.next.next;!na(n,s)&&u0(n,t,t.next,s)&&so(n,s)&&so(s,n)&&(e.push(n.i,t.i,s.i),ro(t),ro(t.next),t=i=s),t=t.next}while(t!==i);return lr(t)}function oS(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&gS(a,o)){let l=d0(a,o);a=lr(a,a.next),l=lr(l,l.next),io(a,e,t,n,s,r,0),io(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function lS(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=c0(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(mS(c))}s.sort(cS);for(let r=0;r<s.length;r++)t=hS(s[r],t);return t}function cS(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function hS(i,e){const t=uS(i,e);if(!t)return e;const n=d0(t,i);return lr(n,n.next),lr(t,t.next)}function uS(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(na(i,t))return t;do{if(na(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&h0(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const d=Math.abs(s-t.y)/(n-t.x);so(t,i)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&dS(a,t)))&&(a=t,u=d)}t=t.next}while(t!==o);return a}function dS(i,e){return qt(i.prev,i,e.prev)<0&&qt(e.next,i,i.next)<0}function fS(i,e,t,n){let s=i;do s.z===0&&(s.z=Vu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,pS(s)}function pS(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Vu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function mS(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function h0(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ca(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&h0(i,e,t,n,s,r,a,o)}function gS(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!vS(i,e)&&(so(i,e)&&so(e,i)&&_S(i,e)&&(qt(i.prev,i,e.prev)||qt(i,e.prev,e))||na(i,e)&&qt(i.prev,i,i.next)>0&&qt(e.prev,e,e.next)>0)}function qt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function na(i,e){return i.x===e.x&&i.y===e.y}function u0(i,e,t,n){const s=ul(qt(i,e,t)),r=ul(qt(i,e,n)),a=ul(qt(t,n,i)),o=ul(qt(t,n,e));return!!(s!==r&&a!==o||s===0&&hl(i,t,e)||r===0&&hl(i,n,e)||a===0&&hl(t,i,n)||o===0&&hl(t,e,n))}function hl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ul(i){return i>0?1:i<0?-1:0}function vS(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&u0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function so(i,e){return qt(i.prev,i,i.next)<0?qt(i,e,i.next)>=0&&qt(i,i.prev,e)>=0:qt(i,e,i.prev)<0||qt(i,i.next,e)<0}function _S(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function d0(i,e){const t=Gu(i.i,i.x,i.y),n=Gu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Op(i,e,t,n){const s=Gu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ro(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Gu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function yS(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class xS{static triangulate(e,t,n=2){return iS(e,t,n)}}class xi{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return xi.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Fp(e),kp(n,e);let a=e.length;t.forEach(Fp);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,kp(n,t[l]);const o=xS.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Fp(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function kp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class lh extends dt{constructor(e=new To([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Be(s,3)),this.setAttribute("uv",new Be(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:bS;let b,y=!1,w,M,C,x;if(m){b=m.getSpacedPoints(u),y=!0,h=!1;const se=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(u,se),M=new P,C=new P,x=new P}h||(g=0,f=0,p=0,v=0);const T=o.extractPoints(c);let R=T.shape;const I=T.holes;if(!xi.isClockWise(R)){R=R.reverse();for(let se=0,ae=I.length;se<ae;se++){const oe=I[se];xi.isClockWise(oe)&&(I[se]=oe.reverse())}}function L(se){const oe=10000000000000001e-36;let _e=se[0];for(let Me=1;Me<=se.length;Me++){const Qe=Me%se.length,be=se[Qe],ye=be.x-_e.x,Pe=be.y-_e.y,V=ye*ye+Pe*Pe,At=Math.max(Math.abs(be.x),Math.abs(be.y),Math.abs(_e.x),Math.abs(_e.y)),gt=oe*At*At;if(V<=gt){se.splice(Qe,1),Me--;continue}_e=be}}L(R),I.forEach(L);const F=I.length,k=R;for(let se=0;se<F;se++){const ae=I[se];R=R.concat(ae)}function U(se,ae,oe){return ae||Ze("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(ae,oe)}const O=R.length;function B(se,ae,oe){let _e,Me,Qe;const be=se.x-ae.x,ye=se.y-ae.y,Pe=oe.x-se.x,V=oe.y-se.y,At=be*be+ye*ye,gt=be*V-ye*Pe;if(Math.abs(gt)>Number.EPSILON){const D=Math.sqrt(At),S=Math.sqrt(Pe*Pe+V*V),q=ae.x-ye/D,N=ae.y+be/D,W=oe.x-V/S,ie=oe.y+Pe/S,de=((W-q)*V-(ie-N)*Pe)/(be*V-ye*Pe);_e=q+be*de-se.x,Me=N+ye*de-se.y;const $=_e*_e+Me*Me;if($<=2)return new re(_e,Me);Qe=Math.sqrt($/2)}else{let D=!1;be>Number.EPSILON?Pe>Number.EPSILON&&(D=!0):be<-Number.EPSILON?Pe<-Number.EPSILON&&(D=!0):Math.sign(ye)===Math.sign(V)&&(D=!0),D?(_e=-ye,Me=be,Qe=Math.sqrt(At)):(_e=be,Me=ye,Qe=Math.sqrt(At/2))}return new re(_e/Qe,Me/Qe)}const H=[];for(let se=0,ae=k.length,oe=ae-1,_e=se+1;se<ae;se++,oe++,_e++)oe===ae&&(oe=0),_e===ae&&(_e=0),H[se]=B(k[se],k[oe],k[_e]);const ne=[];let j,te=H.concat();for(let se=0,ae=F;se<ae;se++){const oe=I[se];j=[];for(let _e=0,Me=oe.length,Qe=Me-1,be=_e+1;_e<Me;_e++,Qe++,be++)Qe===Me&&(Qe=0),be===Me&&(be=0),j[_e]=B(oe[_e],oe[Qe],oe[be]);ne.push(j),te=te.concat(j)}let Re;if(g===0)Re=xi.triangulateShape(k,I);else{const se=[],ae=[];for(let oe=0;oe<g;oe++){const _e=oe/g,Me=f*Math.cos(_e*Math.PI/2),Qe=p*Math.sin(_e*Math.PI/2)+v;for(let be=0,ye=k.length;be<ye;be++){const Pe=U(k[be],H[be],Qe);We(Pe.x,Pe.y,-Me),_e===0&&se.push(Pe)}for(let be=0,ye=F;be<ye;be++){const Pe=I[be];j=ne[be];const V=[];for(let At=0,gt=Pe.length;At<gt;At++){const D=U(Pe[At],j[At],Qe);We(D.x,D.y,-Me),_e===0&&V.push(D)}_e===0&&ae.push(V)}}Re=xi.triangulateShape(se,ae)}const ct=Re.length,at=p+v;for(let se=0;se<O;se++){const ae=h?U(R[se],te[se],at):R[se];y?(C.copy(w.normals[0]).multiplyScalar(ae.x),M.copy(w.binormals[0]).multiplyScalar(ae.y),x.copy(b[0]).add(C).add(M),We(x.x,x.y,x.z)):We(ae.x,ae.y,0)}for(let se=1;se<=u;se++)for(let ae=0;ae<O;ae++){const oe=h?U(R[ae],te[ae],at):R[ae];y?(C.copy(w.normals[se]).multiplyScalar(oe.x),M.copy(w.binormals[se]).multiplyScalar(oe.y),x.copy(b[se]).add(C).add(M),We(x.x,x.y,x.z)):We(oe.x,oe.y,d/u*se)}for(let se=g-1;se>=0;se--){const ae=se/g,oe=f*Math.cos(ae*Math.PI/2),_e=p*Math.sin(ae*Math.PI/2)+v;for(let Me=0,Qe=k.length;Me<Qe;Me++){const be=U(k[Me],H[Me],_e);We(be.x,be.y,d+oe)}for(let Me=0,Qe=I.length;Me<Qe;Me++){const be=I[Me];j=ne[Me];for(let ye=0,Pe=be.length;ye<Pe;ye++){const V=U(be[ye],j[ye],_e);y?We(V.x,V.y+b[u-1].y,b[u-1].x+oe):We(V.x,V.y,d+oe)}}}Q(),ge();function Q(){const se=s.length/3;if(h){let ae=0,oe=O*ae;for(let _e=0;_e<ct;_e++){const Me=Re[_e];Ke(Me[2]+oe,Me[1]+oe,Me[0]+oe)}ae=u+g*2,oe=O*ae;for(let _e=0;_e<ct;_e++){const Me=Re[_e];Ke(Me[0]+oe,Me[1]+oe,Me[2]+oe)}}else{for(let ae=0;ae<ct;ae++){const oe=Re[ae];Ke(oe[2],oe[1],oe[0])}for(let ae=0;ae<ct;ae++){const oe=Re[ae];Ke(oe[0]+O*u,oe[1]+O*u,oe[2]+O*u)}}n.addGroup(se,s.length/3-se,0)}function ge(){const se=s.length/3;let ae=0;he(k,ae),ae+=k.length;for(let oe=0,_e=I.length;oe<_e;oe++){const Me=I[oe];he(Me,ae),ae+=Me.length}n.addGroup(se,s.length/3-se,1)}function he(se,ae){let oe=se.length;for(;--oe>=0;){const _e=oe;let Me=oe-1;Me<0&&(Me=se.length-1);for(let Qe=0,be=u+g*2;Qe<be;Qe++){const ye=O*Qe,Pe=O*(Qe+1),V=ae+_e+ye,At=ae+Me+ye,gt=ae+Me+Pe,D=ae+_e+Pe;le(V,At,gt,D)}}}function We(se,ae,oe){l.push(se),l.push(ae),l.push(oe)}function Ke(se,ae,oe){Te(se),Te(ae),Te(oe);const _e=s.length/3,Me=_.generateTopUV(n,s,_e-3,_e-2,_e-1);Ne(Me[0]),Ne(Me[1]),Ne(Me[2])}function le(se,ae,oe,_e){Te(se),Te(ae),Te(_e),Te(ae),Te(oe),Te(_e);const Me=s.length/3,Qe=_.generateSideWallUV(n,s,Me-6,Me-3,Me-2,Me-1);Ne(Qe[0]),Ne(Qe[1]),Ne(Qe[3]),Ne(Qe[1]),Ne(Qe[2]),Ne(Qe[3])}function Te(se){s.push(l[se*3+0]),s.push(l[se*3+1]),s.push(l[se*3+2])}function Ne(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return SS(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new wc[s.type]().fromJSON(s)),new lh(n,e.options)}}const bS={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new re(r,a),new re(o,l),new re(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[s*3],f=e[s*3+1],p=e[s*3+2],v=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new re(a,1-l),new re(c,1-d),new re(h,1-p),new re(v,1-m)]:[new re(o,1-l),new re(u,1-d),new re(f,1-p),new re(g,1-m)]}};function SS(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ch extends Rs{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ch(e.radius,e.detail)}}class hh extends dt{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ot(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/t,d=new P,h=new re,f=new P,p=new P,v=new P;let g=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let _=0;_<=t;_++){const b=n+_*u*s,y=Math.sin(b),w=Math.cos(b);for(let M=0;M<=e.length-1;M++){d.x=e[M].x*y,d.y=e[M].y,d.z=e[M].x*w,a.push(d.x,d.y,d.z),h.x=_/t,h.y=M/(e.length-1),o.push(h.x,h.y);const C=l[3*M+0]*y,x=l[3*M+1],T=l[3*M+0]*w;c.push(C,x,T)}}for(let _=0;_<t;_++)for(let b=0;b<e.length-1;b++){const y=b+_*e.length,w=y,M=y+e.length,C=y+e.length+1,x=y+1;r.push(w,M,x),r.push(C,x,M)}this.setIndex(r),this.setAttribute("position",new Be(a,3)),this.setAttribute("uv",new Be(o,2)),this.setAttribute("normal",new Be(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hh(e.points,e.segments,e.phiStart,e.phiLength)}}class Eo extends Rs{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Eo(e.radius,e.detail)}}class oa extends dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,f=[],p=[],v=[],g=[];for(let m=0;m<u;m++){const _=m*h-a;for(let b=0;b<c;b++){const y=b*d-r;p.push(y,-_,0),v.push(0,0,1),g.push(b/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){const b=_+c*m,y=_+c*(m+1),w=_+1+c*(m+1),M=_+1+c*m;f.push(b,y,M),f.push(y,w,M)}this.setIndex(f),this.setAttribute("position",new Be(p,3)),this.setAttribute("normal",new Be(v,3)),this.setAttribute("uv",new Be(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.width,e.height,e.widthSegments,e.heightSegments)}}class uh extends dt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let d=e;const h=(t-e)/s,f=new P,p=new re;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){const m=r+g/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}d+=h}for(let v=0;v<s;v++){const g=v*(n+1);for(let m=0;m<n;m++){const _=m+g,b=_,y=_+n+1,w=_+n+2,M=_+1;o.push(b,y,M),o.push(y,w,M)}}this.setIndex(o),this.setAttribute("position",new Be(l,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class dh extends dt{constructor(e=new To([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Be(s,3)),this.setAttribute("normal",new Be(r,3)),this.setAttribute("uv",new Be(a,2));function c(u){const d=s.length/3,h=u.extractPoints(t);let f=h.shape;const p=h.holes;xi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const _=p[g];xi.isClockWise(_)===!0&&(p[g]=_.reverse())}const v=xi.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const _=p[g];f=f.concat(_)}for(let g=0,m=f.length;g<m;g++){const _=f[g];s.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let g=0,m=v.length;g<m;g++){const _=v[g],b=_[0]+d,y=_[1]+d,w=_[2]+d;n.push(b,y,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return MS(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];n.push(a)}return new dh(n,e.curveSegments)}}function MS(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class Ao extends dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new P,h=new P,f=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){const _=[],b=m/n,y=a+b*o,w=e*Math.cos(y),M=Math.sqrt(e*e-w*w);let C=0;m===0&&a===0?C=.5/t:m===n&&l===Math.PI&&(C=-.5/t);for(let x=0;x<=t;x++){const T=x/t,R=s+T*r;d.x=-M*Math.cos(R),d.y=w,d.z=M*Math.sin(R),p.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),g.push(T+C,1-b),_.push(c++)}u.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){const b=u[m][_+1],y=u[m][_],w=u[m+1][_],M=u[m+1][_+1];(m!==0||a>0)&&f.push(b,y,M),(m!==n-1||l<Math.PI)&&f.push(y,w,M)}this.setIndex(f),this.setAttribute("position",new Be(p,3)),this.setAttribute("normal",new Be(v,3)),this.setAttribute("uv",new Be(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fh extends Rs{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fh(e.radius,e.detail)}}class ph extends dt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],d=[],h=new P,f=new P,p=new P;for(let v=0;v<=n;v++){const g=a+v/n*o;for(let m=0;m<=s;m++){const _=m/s*r;f.x=(e+t*Math.cos(g))*Math.cos(_),f.y=(e+t*Math.cos(g))*Math.sin(_),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),p.subVectors(f,h).normalize(),u.push(p.x,p.y,p.z),d.push(m/s),d.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=s;g++){const m=(s+1)*v+g-1,_=(s+1)*(v-1)+g-1,b=(s+1)*(v-1)+g,y=(s+1)*v+g;l.push(m,_,y),l.push(_,b,y)}this.setIndex(l),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(u,3)),this.setAttribute("uv",new Be(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ph(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class mh extends dt{constructor(e=1,t=.4,n=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:s,p:r,q:a},n=Math.floor(n),s=Math.floor(s);const o=[],l=[],c=[],u=[],d=new P,h=new P,f=new P,p=new P,v=new P,g=new P,m=new P;for(let b=0;b<=n;++b){const y=b/n*r*Math.PI*2;_(y,r,a,e,f),_(y+.01,r,a,e,p),g.subVectors(p,f),m.addVectors(p,f),v.crossVectors(g,m),m.crossVectors(v,g),v.normalize(),m.normalize();for(let w=0;w<=s;++w){const M=w/s*Math.PI*2,C=-t*Math.cos(M),x=t*Math.sin(M);d.x=f.x+(C*m.x+x*v.x),d.y=f.y+(C*m.y+x*v.y),d.z=f.z+(C*m.z+x*v.z),l.push(d.x,d.y,d.z),h.subVectors(d,f).normalize(),c.push(h.x,h.y,h.z),u.push(b/n),u.push(w/s)}}for(let b=1;b<=n;b++)for(let y=1;y<=s;y++){const w=(s+1)*(b-1)+(y-1),M=(s+1)*b+(y-1),C=(s+1)*b+y,x=(s+1)*(b-1)+y;o.push(w,M,x),o.push(M,C,x)}this.setIndex(o),this.setAttribute("position",new Be(l,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(u,2));function _(b,y,w,M,C){const x=Math.cos(b),T=Math.sin(b),R=w/y*b,I=Math.cos(R);C.x=M*(2+I)*.5*x,C.y=M*(2+I)*T*.5,C.z=M*Math.sin(R)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mh(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class gh extends dt{constructor(e=new Xd(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,l=new P,c=new re;let u=new P;const d=[],h=[],f=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Be(d,3)),this.setAttribute("normal",new Be(h,3)),this.setAttribute("uv",new Be(f,2));function v(){for(let b=0;b<t;b++)g(b);g(r===!1?t:0),_(),m()}function g(b){u=e.getPointAt(b/t,u);const y=a.normals[b],w=a.binormals[b];for(let M=0;M<=s;M++){const C=M/s*Math.PI*2,x=Math.sin(C),T=-Math.cos(C);l.x=T*y.x+x*w.x,l.y=T*y.y+x*w.y,l.z=T*y.z+x*w.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let b=1;b<=t;b++)for(let y=1;y<=s;y++){const w=(s+1)*(b-1)+(y-1),M=(s+1)*b+(y-1),C=(s+1)*b+y,x=(s+1)*(b-1)+y;p.push(w,M,x),p.push(M,C,x)}}function _(){for(let b=0;b<=t;b++)for(let y=0;y<=s;y++)c.x=b/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new gh(new wc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class f0 extends dt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new P,r=new P;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const d=l[c],h=d.start,f=d.count;for(let p=h,v=h+f;p<v;p+=3)for(let g=0;g<3;g++){const m=o.getX(p+g),_=o.getX(p+(g+1)%3);s.fromBufferAttribute(a,m),r.fromBufferAttribute(a,_),Bp(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const u=3*o+c,d=3*o+(c+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,d),Bp(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Be(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Bp(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}var zp=Object.freeze({__proto__:null,BoxGeometry:Cs,CapsuleGeometry:sh,CircleGeometry:rh,ConeGeometry:wo,CylinderGeometry:Mo,DodecahedronGeometry:ah,EdgesGeometry:i0,ExtrudeGeometry:lh,IcosahedronGeometry:ch,LatheGeometry:hh,OctahedronGeometry:Eo,PlaneGeometry:oa,PolyhedronGeometry:Rs,RingGeometry:uh,ShapeGeometry:dh,SphereGeometry:Ao,TetrahedronGeometry:fh,TorusGeometry:ph,TorusKnotGeometry:mh,TubeGeometry:gh,WireframeGeometry:f0});class p0 extends xn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ke(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function ia(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Vp(s))s.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Vp(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Pn(i){const e={};for(let t=0;t<i.length;t++){const n=ia(i[t]);for(const s in n)e[s]=n[s]}return e}function Vp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function wS(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function m0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const $d={clone:ia,merge:Pn};var TS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ES=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TS,this.fragmentShader=ES,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ia(e.uniforms),this.uniformsGroups=wS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ke().setHex(s.value);break;case"v2":this.uniforms[n].value=new re().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ut().fromArray(s.value);break;case"m4":this.uniforms[n].value=new nt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Yd extends di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zd extends xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=es,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class g0 extends Zd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class v0 extends xn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ke(16777215),this.specular=new ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=es,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=xo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _0 extends xn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ke(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=es,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class y0 extends xn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=es,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class x0 extends xn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=es,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=xo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kd extends xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jd extends xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class b0 extends xn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ke(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=es,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}class S0 extends kn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Js(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function M0(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Hu(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function w0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}function AS(i,e,t,n,s=30){const r=i.clone();r.name=e;const a=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],u=c.getValueSize(),d=[],h=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*s;if(!(p<t||p>=n)){d.push(c.times[f]);for(let v=0;v<u;++v)h.push(c.values[f*u+v])}}d.length!==0&&(c.times=Js(d,c.times.constructor),c.values=Js(h,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function CS(i,e=0,t=i,n=30){n<=0&&(n=30);const s=t.tracks.length,r=e/n;for(let a=0;a<s;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=i.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let u=0;const d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);let h=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=f/3);const p=o.times.length-1;let v;if(r<=o.times[0]){const m=u,_=d-u;v=o.values.slice(m,_)}else if(r>=o.times[p]){const m=p*d+u,_=m+d-u;v=o.values.slice(m,_)}else{const m=o.createInterpolant(),_=u,b=d-u;m.evaluate(r),v=m.resultBuffer.slice(_,b)}l==="quaternion"&&new _n().fromArray(v).normalize().conjugate().toArray(v);const g=c.times.length;for(let m=0;m<g;++m){const _=m*f+h;if(l==="quaternion")_n.multiplyQuaternionsFlat(c.values,_,v,0,c.values,_);else{const b=f-h*2;for(let y=0;y<b;++y)c.values[_+y]-=v[y]}}}return i.blendMode=Pd,i}class RS{static convertArray(e,t){return Js(e,t)}static isTypedArray(e){return Vg(e)}static getKeyframeOrder(e){return M0(e)}static sortedArray(e,t,n){return Hu(e,t,n)}static flattenJSON(e,t,n,s){w0(e,t,n,s)}static subclip(e,t,n,s,r=30){return AS(e,t,n,s,r)}static makeClipAdditive(e,t=0,n=e,s=30){return CS(e,t,n,s)}}class la{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class T0 extends la{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zs,endingEnd:Zs}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ks:r=e,o=2*t-n;break;case Ka:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ks:a=e,l=2*n-t;break;case Ka:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),v=p*p,g=v*p,m=-h*g+2*h*v-h*p,_=(1+h)*g+(-1.5-2*h)*v+(-.5+h)*p+1,b=(-1-f)*g+(1.5+f)*v+.5*p,y=f*g-f*v;for(let w=0;w!==o;++w)r[w]=m*a[u+w]+_*a[c+w]+b*a[l+w]+y*a[d+w];return r}}class jd extends la{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}}class E0 extends la{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class A0 extends la{interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){const p=(n-t)/(s-t),v=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*v+a[l+g]*p;return r}const h=o*2,f=e-1;for(let p=0;p!==o;++p){const v=a[c+p],g=a[l+p],m=f*h+p*2,_=d[m],b=d[m+1],y=e*h+p*2,w=u[y],M=u[y+1];let C=(n-t)/(s-t),x,T,R,I,z;for(let L=0;L<8;L++){x=C*C,T=x*C,R=1-C,I=R*R,z=I*R;const k=z*t+3*I*C*_+3*R*x*w+T*s-n;if(Math.abs(k)<1e-10)break;const U=3*I*(_-t)+6*R*C*(w-_)+3*x*(s-w);if(Math.abs(U)<1e-10)break;C=C-k/U,C=Math.max(0,Math.min(1,C))}r[p]=z*v+3*I*C*b+3*R*x*M+T*g}return r}}class pi{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Js(t,this.TimeBufferType),this.values=Js(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Js(e.times,Array),values:Js(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new E0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new T0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new A0(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Za:t=this.InterpolantFactoryMethodDiscrete;break;case bc:t=this.InterpolantFactoryMethodLinear;break;case Al:t=this.InterpolantFactoryMethodSmooth;break;case Fu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return we("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Za;case this.InterpolantFactoryMethodLinear:return bc;case this.InterpolantFactoryMethodSmooth:return Al;case this.InterpolantFactoryMethodBezier:return Fu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Ze("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ze("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Vg(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){Ze("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Al,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{const d=o*n,h=d-n,f=d+n;for(let p=0;p!==n;++p){const v=t[d+p];if(v!==t[h+p]||v!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}pi.prototype.ValueTypeName="";pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=bc;class ur extends pi{constructor(e,t,n){super(e,t,n)}}ur.prototype.ValueTypeName="bool";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=Za;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;class Qd extends pi{constructor(e,t,n,s){super(e,t,n,s)}}Qd.prototype.ValueTypeName="color";class vh extends pi{constructor(e,t,n,s){super(e,t,n,s)}}vh.prototype.ValueTypeName="number";class C0 extends la{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let c=e*o;for(let u=c+o;c!==u;c+=4)_n.slerpFlat(r,0,a,c-o,a,c,l);return r}}class _h extends pi{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new C0(this.times,this.values,this.getValueSize(),e)}}_h.prototype.ValueTypeName="quaternion";_h.prototype.InterpolantFactoryMethodSmooth=void 0;class dr extends pi{constructor(e,t,n){super(e,t,n)}}dr.prototype.ValueTypeName="string";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=Za;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;class ef extends pi{constructor(e,t,n,s){super(e,t,n,s)}}ef.prototype.ValueTypeName="vector";class ao{constructor(e="",t=-1,n=[],s=qc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Qn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(PS(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(pi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=M0(l);l=Hu(l,1,u),c=Hu(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new vh(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const d=u[1];let h=s[d];h||(s[d]=h=[]),h.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function IS(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vh;case"vector":case"vector2":case"vector3":case"vector4":return ef;case"color":return Qd;case"quaternion":return _h;case"bool":case"boolean":return ur;case"string":return dr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function PS(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=IS(i.type);if(i.times===void 0){const t=[],n=[];w0(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Di={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Gp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Gp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Gp(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class tf{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const fr=new tf;class qn{constructor(e){this.manager=e!==void 0?e:fr,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}qn.DEFAULT_MATERIAL_NAME="__DEFAULT";const qi={};class DS extends Error{constructor(e,t){super(e),this.response=t}}class ts extends qn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Di.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(qi[e]!==void 0){qi[e].push({onLoad:t,onProgress:n,onError:s});return}qi[e]=[],qi[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&we("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=qi[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,p=f!==0;let v=0;const g=new ReadableStream({start(m){_();function _(){d.read().then(({done:b,value:y})=>{if(b)m.close();else{v+=y.byteLength;const w=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:f});for(let M=0,C=u.length;M<C;M++){const x=u[M];x.onProgress&&x.onProgress(w)}m.enqueue(y),_()}},b=>{m.error(b)})}}});return new Response(g)}else throw new DS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Di.add(`file:${e}`,c);const u=qi[e];delete qi[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=qi[e];if(u===void 0)throw this.manager.itemError(e),c;delete qi[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class LS extends qn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new ts(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):Ze(l),r.manager.itemError(e)}},n,s)}parse(e){const t=[];for(let n=0;n<e.length;n++){const s=ao.parse(e[n]);t.push(s)}return t}}class US extends qn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=[],o=new ih,l=new ts(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function u(d){l.load(e[d],function(h){const f=r.parse(h,!0);a[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=Ht),o.image=a,o.format=f.format,o.needsUpdate=!0,t&&t(o))},n,s)}if(Array.isArray(e))for(let d=0,h=e.length;d<h;++d)u(d);else l.load(e,function(d){const h=r.parse(d,!0);if(h.isCubemap){const f=h.mipmaps.length/h.mipmapCount;for(let p=0;p<f;p++){a[p]={mipmaps:[]};for(let v=0;v<h.mipmapCount;v++)a[p].mipmaps.push(h.mipmaps[p*h.mipmapCount+v]),a[p].format=h.format,a[p].width=h.width,a[p].height=h.height}o.image=a}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=Ht),o.format=h.format,o.needsUpdate=!0,t&&t(o)},n,s);return o}}const Lr=new WeakMap;class oo extends qn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Di.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Lr.get(a);d===void 0&&(d=[],Lr.set(a,d)),d.push({onLoad:t,onError:s})}return a}const o=eo("img");function l(){u(),t&&t(this);const d=Lr.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}Lr.delete(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),Di.remove(`image:${e}`);const h=Lr.get(this)||[];for(let f=0;f<h.length;f++){const p=h[f];p.onError&&p.onError(d)}Lr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Di.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class NS extends qn{constructor(e){super(e)}load(e,t,n,s){const r=new So;r.colorSpace=Ln;const a=new oo(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){r.images[c]=u,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,s)}for(let c=0;c<e.length;++c)l(c);return r}}class OS extends qn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new li,o=new ts(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(u){s!==void 0?s(u):Ze(u);return}r._applyTexData(a,c),t&&t(a,c)},n,s),a}createDataTexture(e){const t=new li;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Xn,e.wrapT=t.wrapT!==void 0?t.wrapT:Xn,e.magFilter=t.magFilter!==void 0?t.magFilter:Ht,e.minFilter=t.minFilter!==void 0?t.minFilter:Ht,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Pi),t.mipmapCount===1&&(e.minFilter=Ht),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class FS extends qn{constructor(e){super(e)}load(e,t,n,s){const r=new Yt,a=new oo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Is extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class R0 extends Is{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const hu=new nt,Hp=new P,Wp=new P;class nf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=Hn,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ar,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Hp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hp),Wp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wp),t.updateMatrixWorld(),hu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hu,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===sr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const dl=new P,fl=new _n,Ci=new P;let yh=class extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(dl,fl,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,fl,Ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(dl,fl,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,fl,Ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const fs=new P,Xp=new re,qp=new re;class mn extends yh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ea*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ea*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,t){return this.getViewBounds(e,Xp,qp),t.subVectors(qp,Xp)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class kS extends nf{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ea*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class I0 extends Is{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new kS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class BS extends nf{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0}}class P0 extends Is{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new BS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ca extends yh{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class zS extends nf{constructor(){super(new ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class D0 extends Is{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new zS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class L0 extends Is{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class U0 extends Is{constructor(e,t,n=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class sf{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new P)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,s=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*s),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*s)),t.addScaledVector(a[5],1.092548*(s*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-s*s)),t}getIrradianceAt(e,t){const n=e.x,s=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*s),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*s),t.addScaledVector(a[5],2*.429043*s*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-s*s)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].fromArray(e,t+s*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].toArray(e,t+s*3);return e}static getBasisAt(e,t){const n=e.x,s=e.y,r=e.z;t[0]=.282095,t[1]=.488603*s,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*s,t[5]=1.092548*s*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-s*s)}}class N0 extends Is{constructor(e=new sf,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}const $p={};class xh extends qn{constructor(e){super(e),this.textures={}}load(e,t,n,s){const r=this,a=new ts(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):Ze(l),r.manager.itemError(e)}},n,s)}parse(e){const t=this.createMaterialFromType(e.type);return t.fromJSON(e,this.textures),t}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return xh.createMaterialFromType(e)}static createMaterialFromType(e){const n={ShadowMaterial:p0,SpriteMaterial:Fd,RawShaderMaterial:Yd,ShaderMaterial:di,PointsMaterial:Bd,MeshPhysicalMaterial:g0,MeshStandardMaterial:Zd,MeshPhongMaterial:v0,MeshToonMaterial:_0,MeshNormalMaterial:y0,MeshLambertMaterial:x0,MeshDepthMaterial:Kd,MeshDistanceMaterial:Jd,MeshBasicMaterial:ss,MeshMatcapMaterial:b0,LineDashedMaterial:S0,LineBasicMaterial:kn,Material:xn,...$p}[e];let s;return n===void 0?(bs(`MaterialLoader: Unknown material type "${e}". Use .registerMaterial() before starting the deserialization process.`),s=new xn):s=new n,s}static registerMaterial(e,t){$p[e]=t}}class Wu{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class O0 extends dt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class F0 extends qn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new ts(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):Ze(l),r.manager.itemError(e)}},n,s)}parse(e){const t={},n={};function s(f,p){if(t[p]!==void 0)return t[p];const g=f.interleavedBuffers[p],m=r(f,g.buffer),_=Hr(g.type,m),b=new eh(_,g.stride);return b.uuid=g.uuid,t[p]=b,b}function r(f,p){if(n[p]!==void 0)return n[p];const g=f.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}const a=e.isInstancedBufferGeometry?new O0:new dt,o=e.data.index;if(o!==void 0){const f=Hr(o.type,o.array);a.setIndex(new Ft(f,1))}const l=e.data.attributes;for(const f in l){const p=l[f];let v;if(p.isInterleavedBufferAttribute){const g=s(e.data,p.data);v=new rr(g,p.itemSize,p.offset,p.normalized)}else{const g=Hr(p.type,p.array),m=p.isInstancedBufferAttribute?ta:Ft;v=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(v.name=p.name),p.usage!==void 0&&v.setUsage(p.usage),a.setAttribute(f,v)}const c=e.data.morphAttributes;if(c)for(const f in c){const p=c[f],v=[];for(let g=0,m=p.length;g<m;g++){const _=p[g];let b;if(_.isInterleavedBufferAttribute){const y=s(e.data,_.data);b=new rr(y,_.itemSize,_.offset,_.normalized)}else{const y=Hr(_.type,_.array);b=new Ft(y,_.itemSize,_.normalized)}_.name!==void 0&&(b.name=_.name),v.push(b)}a.morphAttributes[f]=v}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const d=e.data.groups||e.data.drawcalls||e.data.offsets;if(d!==void 0)for(let f=0,p=d.length;f!==p;++f){const v=d[f];a.addGroup(v.start,v.count,v.materialIndex)}const h=e.data.boundingSphere;return h!==void 0&&(a.boundingSphere=new yn().fromJSON(h)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}const uu={};class VS extends qn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=this.path===""?Wu.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new ts(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(d){s!==void 0&&s(d),Ze("ObjectLoader: Can't parse "+e+".",d.message);return}const u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){s!==void 0&&s(new Error("THREE.ObjectLoader: Can't load "+e)),Ze("ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,s)}async loadAsync(e,t){const n=this,s=this.path===""?Wu.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||s;const r=new ts(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(e,t);let o;try{o=JSON.parse(a)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+e+". "+c.message)}const l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),s=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,s),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,l,o,n),u=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,u),this.bindLightTargets(c),t!==void 0){let d=!1;for(const h in a)if(a[h].data instanceof HTMLImageElement){d=!0;break}d===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,s,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(e,t){uu[e]=t}parseShapes(e){const t={};if(e!==void 0)for(let n=0,s=e.length;n<s;n++){const r=new To().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},s={};if(t.traverse(function(r){r.isBone&&(s[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=new th().fromJSON(e[r],s);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const s=new F0;for(let r=0,a=e.length;r<a;r++){let o;const l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=s.parse(l);break;default:l.type in zp?o=zp[l.type].fromJSON(l,t):l.type in uu?o=uu[l.type].fromJSON(l,t):we(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){const n={},s={};if(e!==void 0){const r=new xh;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){const l=e[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),s[l.uuid]=n[l.uuid]}}return s}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const s=e[n],r=ao.parse(s);t[r.uuid]=r}return t}parseImages(e,t){const n=this,s={};let r;function a(l){return l=n.manager.resolveURL(l),n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(u)}else return l.data?{data:Hr(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new tf(t);r=new oo(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,u=e.length;c<u;c++){const d=e[c],h=d.url;if(Array.isArray(h)){const f=[];for(let p=0,v=h.length;p<v;p++){const g=h[p],m=o(g);m!==null&&(m instanceof HTMLImageElement?f.push(m):f.push(new li(m.data,m.width,m.height)))}s[d.uuid]=new ys(f)}else{const f=o(d.url);s[d.uuid]=new ys(f)}}}return s}async parseImagesAsync(e){const t=this,n={};let s;async function r(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await s.loadAsync(l)}else return a.data?{data:Hr(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){s=new oo(this.manager),s.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.url;if(Array.isArray(c)){const u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d],p=await r(f);p!==null&&(p instanceof HTMLImageElement?u.push(p):u.push(new li(p.data,p.width,p.height)))}n[l.uuid]=new ys(u)}else{const u=await r(l.url);n[l.uuid]=new ys(u)}}}return n}parseTextures(e,t){function n(r,a){return typeof r=="number"?r:(we("ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const s={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=e[r];o.image===void 0&&we('ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&we("ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let u;Array.isArray(c)?(u=new So,c.length===6&&(u.needsUpdate=!0)):(c&&c.data?u=new li:u=new Yt,c&&(u.needsUpdate=!0)),u.source=l,u.uuid=o.uuid,o.name!==void 0&&(u.name=o.name),o.mapping!==void 0&&(u.mapping=n(o.mapping,GS)),o.channel!==void 0&&(u.channel=o.channel),o.offset!==void 0&&u.offset.fromArray(o.offset),o.repeat!==void 0&&u.repeat.fromArray(o.repeat),o.center!==void 0&&u.center.fromArray(o.center),o.rotation!==void 0&&(u.rotation=o.rotation),o.wrap!==void 0&&(u.wrapS=n(o.wrap[0],Yp),u.wrapT=n(o.wrap[1],Yp)),o.format!==void 0&&(u.format=o.format),o.internalFormat!==void 0&&(u.internalFormat=o.internalFormat),o.type!==void 0&&(u.type=o.type),o.colorSpace!==void 0&&(u.colorSpace=o.colorSpace),o.minFilter!==void 0&&(u.minFilter=n(o.minFilter,Zp)),o.magFilter!==void 0&&(u.magFilter=n(o.magFilter,Zp)),o.anisotropy!==void 0&&(u.anisotropy=o.anisotropy),o.flipY!==void 0&&(u.flipY=o.flipY),o.generateMipmaps!==void 0&&(u.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(u.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(u.compareFunction=o.compareFunction),o.normalized!==void 0&&(u.normalized=o.normalized),o.userData!==void 0&&(u.userData=o.userData),s[o.uuid]=u}return s}parseObject(e,t,n,s,r){let a;function o(h){return t[h]===void 0&&we("ObjectLoader: Undefined geometry",h),t[h]}function l(h){if(h!==void 0){if(Array.isArray(h)){const f=[];for(let p=0,v=h.length;p<v;p++){const g=h[p];n[g]===void 0&&we("ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[h]===void 0&&we("ObjectLoader: Undefined material",h),n[h]}}function c(h){return s[h]===void 0&&we("ObjectLoader: Undefined texture",h),s[h]}let u,d;switch(e.type){case"Scene":a=new Ud,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new ke(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new Qc(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new jc(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new mn(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new ca(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new L0(e.color,e.intensity);break;case"DirectionalLight":a=new D0(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new P0(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new U0(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new I0(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new R0(e.color,e.groundColor,e.intensity);break;case"LightProbe":const h=new sf().fromArray(e.sh);a=new N0(h,e.intensity);break;case"SkinnedMesh":u=o(e.geometry),d=l(e.material),a=new Kg(u,d),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":u=o(e.geometry),d=l(e.material),a=new sn(u,d);break;case"InstancedMesh":u=o(e.geometry),d=l(e.material);const f=e.count,p=e.instanceMatrix,v=e.instanceColor;a=new Jg(u,d,f),a.instanceMatrix=new ta(new Float32Array(p.array),16),v!==void 0&&(a.instanceColor=new ta(new Float32Array(v.array),v.itemSize));break;case"BatchedMesh":u=o(e.geometry),d=l(e.material),a=new jg(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,d),a.geometry=u,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._geometryInfo=e.geometryInfo.map(g=>{let m=null,_=null;return g.boundingBox!==void 0&&(m=new Rn().fromJSON(g.boundingBox)),g.boundingSphere!==void 0&&(_=new yn().fromJSON(g.boundingSphere)),{...g,boundingBox:m,boundingSphere:_}}),a._instanceInfo=e.instanceInfo,a._availableInstanceIds=e._availableInstanceIds,a._availableGeometryIds=e._availableGeometryIds,a._nextIndexStart=e.nextIndexStart,a._nextVertexStart=e.nextVertexStart,a._geometryCount=e.geometryCount,a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._matricesTexture=c(e.matricesTexture.uuid),a._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(a.boundingSphere=new yn().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(a.boundingBox=new Rn().fromJSON(e.boundingBox));break;case"LOD":a=new Zg;break;case"Line":a=new Es(o(e.geometry),l(e.material));break;case"LineLoop":a=new Qg(o(e.geometry),l(e.material));break;case"LineSegments":a=new Bi(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new e0(o(e.geometry),l(e.material));break;case"Sprite":a=new Yg(l(e.material));break;case"Group":a=new Wr;break;case"Bone":a=new kd;break;default:a=new Et}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.pivot!==void 0&&(a.pivot=new P().fromArray(e.pivot)),e.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.static!==void 0&&(a.static=e.static),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const h=e.children;for(let f=0;f<h.length;f++)a.add(this.parseObject(h[f],t,n,s,r))}if(e.animations!==void 0){const h=e.animations;for(let f=0;f<h.length;f++){const p=h[f];a.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const h=e.levels;for(let f=0;f<h.length;f++){const p=h[f],v=a.getObjectByProperty("uuid",p.object);v!==void 0&&a.addLevel(v,p.distance,p.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const s=t[n.skeleton];s===void 0?we("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(s,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,s=e.getObjectByProperty("uuid",n);s!==void 0?t.target=s:t.target=new Et}})}}const GS={UVMapping:Bc,CubeReflectionMapping:Ui,CubeRefractionMapping:Ms,EquirectangularReflectionMapping:Da,EquirectangularRefractionMapping:La,CubeUVReflectionMapping:aa},Yp={RepeatWrapping:Xa,ClampToEdgeWrapping:Xn,MirroredRepeatWrapping:qa},Zp={NearestFilter:nn,NearestMipmapNearestFilter:wd,NearestMipmapLinearFilter:Gr,LinearFilter:Ht,LinearMipmapNearestFilter:Ua,LinearMipmapLinearFilter:Pi},du=new WeakMap;class HS extends qn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&we("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&we("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Di.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{du.has(a)===!0?(s&&s(du.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){Di.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){s&&s(c),du.set(l,c),Di.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Di.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let pl;class rf{static getContext(){return pl===void 0&&(pl=new(window.AudioContext||window.webkitAudioContext)),pl}static setContext(e){pl=e}}class WS extends qn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new ts(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0),u=rf.getContext(),d=e+"#decode";r.manager.itemStart(d),u.decodeAudioData(c,function(h){t(h),r.manager.itemEnd(d)}).catch(function(h){o(h),r.manager.itemEnd(d)})}catch(c){o(c)}},n,s);function o(l){s?s(l):Ze(l),r.manager.itemError(e)}}}const Kp=new nt,Jp=new nt,Bs=new nt;class XS{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new mn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new mn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Bs.copy(e.projectionMatrix);const s=t.eyeSep/2,r=s*t.near/t.focus,a=t.near*Math.tan(tr*t.fov*.5)/t.zoom;let o,l;Jp.elements[12]=-s,Kp.elements[12]=s,o=-a*t.aspect+r,l=a*t.aspect+r,Bs.elements[0]=2*t.near/(l-o),Bs.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(Bs),o=-a*t.aspect-r,l=a*t.aspect-r,Bs.elements[0]=2*t.near/(l-o),Bs.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(Bs)}this.cameraL.matrix.copy(e.matrixWorld).multiply(Jp),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(e.matrixWorld).multiply(Kp),this.cameraR.matrixWorldNeedsUpdate=!0}}const Ur=-90,Nr=1;class k0 extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mn(Ur,Nr,e,t);s.layers=this.layers,this.add(s);const r=new mn(Ur,Nr,e,t);r.layers=this.layers,this.add(r);const a=new mn(Ur,Nr,e,t);a.layers=this.layers,this.add(a);const o=new mn(Ur,Nr,e,t);o.layers=this.layers,this.add(o);const l=new mn(Ur,Nr,e,t);l.layers=this.layers,this.add(l);const c=new mn(Ur,Nr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class B0 extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class z0{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=qS.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function qS(){this._document.hidden===!1&&this.reset()}const zs=new P,fu=new _n,$S=new P,Vs=new P,Gs=new P;class YS extends Et{constructor(){super(),this.type="AudioListener",this.context=rf.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new z0}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();const t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(zs,fu,$S),Vs.set(0,0,-1).applyQuaternion(fu),Gs.set(0,1,0).applyQuaternion(fu),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(zs.x,n),t.positionY.linearRampToValueAtTime(zs.y,n),t.positionZ.linearRampToValueAtTime(zs.z,n),t.forwardX.linearRampToValueAtTime(Vs.x,n),t.forwardY.linearRampToValueAtTime(Vs.y,n),t.forwardZ.linearRampToValueAtTime(Vs.z,n),t.upX.linearRampToValueAtTime(Gs.x,n),t.upY.linearRampToValueAtTime(Gs.y,n),t.upZ.linearRampToValueAtTime(Gs.z,n)}else t.setPosition(zs.x,zs.y,zs.z),t.setOrientation(Vs.x,Vs.y,Vs.z,Gs.x,Gs.y,Gs.z)}}let V0=class extends Et{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){we("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){we("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){we("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){we("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){we("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(we("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){we("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(we("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}};const Hs=new P,jp=new _n,ZS=new P,Ws=new P;class KS extends V0{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Hs,jp,ZS),Ws.set(0,0,1).applyQuaternion(jp);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Hs.x,n),t.positionY.linearRampToValueAtTime(Hs.y,n),t.positionZ.linearRampToValueAtTime(Hs.z,n),t.orientationX.linearRampToValueAtTime(Ws.x,n),t.orientationY.linearRampToValueAtTime(Ws.y,n),t.orientationZ.linearRampToValueAtTime(Ws.z,n)}else t.setPosition(Hs.x,Hs.y,Hs.z),t.setOrientation(Ws.x,Ws.y,Ws.z)}}class JS{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class G0{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){_n.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const a=this._workIndex*r;_n.multiplyQuaternionsFlat(e,a,e,t,e,n),_n.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){const a=1-s;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*s}}}const af="\\[\\]\\.:\\/",jS=new RegExp("["+af+"]","g"),of="[^"+af+"]",QS="[^"+af.replace("\\.","")+"]",eM=/((?:WC+[\/:])*)/.source.replace("WC",of),tM=/(WCOD+)?/.source.replace("WCOD",QS),nM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",of),iM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",of),sM=new RegExp("^"+eM+tM+nM+iM+"$"),rM=["material","materials","bones","map"];class aM{constructor(e,t,n){const s=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Rt{constructor(e,t,n){this.path=t,this.parsedPath=n||Rt.parseTrackName(t),this.node=Rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Rt.Composite(e,t,n):new Rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jS,"")}static parseTrackName(e){const t=sM.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);rM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){we("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Rt.Composite=aM;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class oM{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Qn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,s=arguments.length;n!==s;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,s=this._parsedPaths,r=this._bindings,a=r.length;let o,l=e.length,c=this.nCachedObjects_;for(let u=0,d=arguments.length;u!==d;++u){const h=arguments[u],f=h.uuid;let p=t[f];if(p===void 0){p=l++,t[f]=p,e.push(h);for(let v=0,g=a;v!==g;++v)r[v].push(new Rt(h,n[v],s[v]))}else if(p<c){o=e[p];const v=--c,g=e[v];t[g.uuid]=p,e[p]=g,t[f]=v,e[v]=h;for(let m=0,_=a;m!==_;++m){const b=r[m],y=b[v];let w=b[p];b[p]=y,w===void 0&&(w=new Rt(h,n[m],s[m])),b[v]=w}}else e[p]!==o&&Ze("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,s=n.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,u=t[c];if(u!==void 0&&u>=r){const d=r++,h=e[d];t[h.uuid]=u,e[u]=h,t[c]=d,e[d]=l;for(let f=0,p=s;f!==p;++f){const v=n[f],g=v[d],m=v[u];v[u]=g,v[d]=m}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,s=n.length;let r=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],u=c.uuid,d=t[u];if(d!==void 0)if(delete t[u],d<r){const h=--r,f=e[h],p=--a,v=e[p];t[f.uuid]=d,e[d]=f,t[v.uuid]=h,e[h]=v,e.pop();for(let g=0,m=s;g!==m;++g){const _=n[g],b=_[h],y=_[p];_[d]=b,_[h]=y,_.pop()}}else{const h=--a,f=e[h];h>0&&(t[f.uuid]=d),e[d]=f,e.pop();for(let p=0,v=s;p!==v;++p){const g=n[p];g[d]=g[h],g.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let s=n[e];const r=this._bindings;if(s!==void 0)return r[s];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,d=new Array(c);s=r.length,n[e]=s,a.push(e),o.push(t),r.push(d);for(let h=u,f=l.length;h!==f;++h){const p=l[h];d[h]=new Rt(p,e,t)}return d}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const s=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),s[n]=s[o],s.pop()}}}class H0{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Zs,endingEnd:Zs};for(let c=0;c!==a;++c){const u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Pg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Pd:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case qc:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(a),c[u].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const a=n===Dg;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===Ig){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){const o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=Ks,s.endingEnd=Ks):(e?s.endingStart=this.zeroSlopeAtStart?Ks:Zs:s.endingStart=Ka,t?s.endingEnd=this.zeroSlopeAtEnd?Ks:Zs:s.endingEnd=Ka)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const lM=new Float32Array(1);class cM extends Ti{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let d=0;d!==r;++d){const h=s[d],f=h.name;let p=u[f];if(p!==void 0)++p.referenceCount,a[d]=p;else{if(p=a[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const v=t&&t._propertyBindings[d].binding.parsedPath;p=new G0(Rt.create(n,f,v),h.ValueTypeName,h.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[d]=p}o[d].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,h=(e._localRoot||this._root).uuid;delete d[h],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new jd(new Float32Array(2),new Float32Array(2),1,lM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let a=typeof e=="string"?ao.findByName(s,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=qc),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new H0(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?ao.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class hM extends Ld{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isRenderTarget3D=!0,this.depth=n,this.texture=new Kc(null,e,t,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}}class lf{constructor(e){this.value=e}clone(){return new lf(this.value.clone===void 0?this.value:this.value.clone())}}let uM=0;class dM extends Ti{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:uM++}),this.name="",this.usage=Qa,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,s=t.length;n<s;n++){const r=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class fM extends eh{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class pM{constructor(e,t,n,s,r,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=s,this.count=r,this.normalized=a,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Qp=new nt;class mM{constructor(e,t,n=0,s=1/0){this.ray=new hr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Jc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Qp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qp),this}intersectObject(e,t=!0,n=[]){return Xu(e,this,n,t),n.sort(em),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Xu(e[s],this,n,t);return n.sort(em),n}}function em(i,e){return i.distance-e.distance}function Xu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Xu(r[a],e,t,!0)}}class gM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,we("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class qu{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ot(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ot(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class vM{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const Sf=class Sf{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Sf.prototype.isMatrix2=!0;let $u=Sf;const tm=new re;class W0{constructor(e=new re(1/0,1/0),t=new re(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=tm.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tm).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const nm=new P,ml=new P,Or=new P,Fr=new P,pu=new P,_M=new P,yM=new P;class xM{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){nm.subVectors(e,this.start),ml.subVectors(this.end,this.start);const n=ml.dot(ml);if(n===0)return 0;let r=ml.dot(nm)/n;return t&&(r=ot(r,0,1)),r}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=_M,n=yM){const s=10000000000000001e-32;let r,a;const o=this.start,l=e.start,c=this.end,u=e.end;Or.subVectors(c,o),Fr.subVectors(u,l),pu.subVectors(o,l);const d=Or.dot(Or),h=Fr.dot(Fr),f=Fr.dot(pu);if(d<=s&&h<=s)return t.copy(o),n.copy(l),t.sub(n),t.dot(t);if(d<=s)r=0,a=f/h,a=ot(a,0,1);else{const p=Or.dot(pu);if(h<=s)a=0,r=ot(-p/d,0,1);else{const v=Or.dot(Fr),g=d*h-v*v;g!==0?r=ot((v*f-p*h)/g,0,1):r=0,a=(v*r+f)/h,a<0?(a=0,r=ot(-p/d,0,1)):a>1&&(a=1,r=ot((v-p)/d,0,1))}}return t.copy(o).addScaledVector(Or,r),n.copy(l).addScaledVector(Fr,a),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const im=new P;class bM extends Et{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new dt,s=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,u=o/l*Math.PI*2;s.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new Be(s,3));const r=new kn({fog:!1,toneMapped:!1});this.cone=new Bi(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),im.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(im),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const ps=new P,gl=new nt,mu=new nt;class SM extends Bi{constructor(e){const t=X0(e),n=new dt,s=[],r=[];for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(s.push(0,0,0),s.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new Be(s,3)),n.setAttribute("color",new Be(r,3));const a=new kn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const o=new ke(255),l=new ke(65280);this.setColors(o,l)}updateMatrixWorld(e){const t=this.bones,n=this.geometry,s=n.getAttribute("position");mu.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(gl.multiplyMatrices(mu,o.matrixWorld),ps.setFromMatrixPosition(gl),s.setXYZ(a,ps.x,ps.y,ps.z),gl.multiplyMatrices(mu,o.parent.matrixWorld),ps.setFromMatrixPosition(gl),s.setXYZ(a+1,ps.x,ps.y,ps.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const s=this.geometry.getAttribute("color");for(let r=0;r<s.count;r+=2)s.setXYZ(r,e.r,e.g,e.b),s.setXYZ(r+1,t.r,t.g,t.b);return s.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function X0(i){const e=[];i.isBone===!0&&e.push(i);for(let t=0;t<i.children.length;t++)e.push(...X0(i.children[t]));return e}class MM extends sn{constructor(e,t,n){const s=new Ao(t,4,2),r=new ss({wireframe:!0,fog:!1,toneMapped:!1});super(s,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const wM=new P,sm=new ke,rm=new ke;class TM extends Et{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const s=new Eo(t);s.rotateY(Math.PI*.5),this.material=new ss({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=s.getAttribute("position"),a=new Float32Array(r.count*3);s.setAttribute("color",new Ft(a,3)),this.add(new sn(s,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");sm.copy(this.light.color),rm.copy(this.light.groundColor);for(let n=0,s=t.count;n<s;n++){const r=n<s/2?sm:rm;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),e.lookAt(wM.setFromMatrixPosition(this.light.matrixWorld).negate())}}class EM extends Bi{constructor(e=10,t=10,n=4473924,s=8947848){n=new ke(n),s=new ke(s);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let h=0,f=0,p=-o;h<=t;h++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const v=h===r?n:s;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const u=new dt;u.setAttribute("position",new Be(l,3)),u.setAttribute("color",new Be(c,3));const d=new kn({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class AM extends Bi{constructor(e=10,t=16,n=8,s=64,r=4473924,a=8947848){r=new ke(r),a=new ke(a);const o=[],l=[];if(t>1)for(let d=0;d<t;d++){const h=d/t*(Math.PI*2),f=Math.sin(h)*e,p=Math.cos(h)*e;o.push(0,0,0),o.push(f,0,p);const v=d&1?r:a;l.push(v.r,v.g,v.b),l.push(v.r,v.g,v.b)}for(let d=0;d<n;d++){const h=d&1?r:a,f=e-e/n*d;for(let p=0;p<s;p++){let v=p/s*(Math.PI*2),g=Math.sin(v)*f,m=Math.cos(v)*f;o.push(g,0,m),l.push(h.r,h.g,h.b),v=(p+1)/s*(Math.PI*2),g=Math.sin(v)*f,m=Math.cos(v)*f,o.push(g,0,m),l.push(h.r,h.g,h.b)}}const c=new dt;c.setAttribute("position",new Be(o,3)),c.setAttribute("color",new Be(l,3));const u=new kn({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const am=new P,vl=new P,om=new P;class CM extends Et{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let s=new dt;s.setAttribute("position",new Be([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new kn({fog:!1,toneMapped:!1});this.lightPlane=new Es(s,r),this.add(this.lightPlane),s=new dt,s.setAttribute("position",new Be([0,0,0,0,0,1],3)),this.targetLine=new Es(s,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),am.setFromMatrixPosition(this.light.matrixWorld),vl.setFromMatrixPosition(this.light.target.matrixWorld),om.subVectors(vl,am),this.lightPlane.lookAt(vl),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(vl),this.targetLine.scale.z=om.length()}}const _l=new P,Kt=new yh;class RM extends Bi{constructor(e){const t=new dt,n=new kn({color:16777215,vertexColors:!0,toneMapped:!1}),s=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,v){l(p),l(v)}function l(p){s.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(s.length/3-1)}t.setAttribute("position",new Be(s,3)),t.setAttribute("color",new Be(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new ke(16755200),u=new ke(16711680),d=new ke(43775),h=new ke(16777215),f=new ke(3355443);this.setColors(c,u,d,h,f)}setColors(e,t,n,s,r){const o=this.geometry.getAttribute("color");return o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,s.r,s.g,s.b),o.setXYZ(39,s.r,s.g,s.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,n=1,s=1;let r,a;if(Kt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,a=0;else if(this.camera.coordinateSystem===Jn)r=-1,a=1;else if(this.camera.coordinateSystem===sr)r=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);en("c",t,e,Kt,0,0,r),en("t",t,e,Kt,0,0,a),en("n1",t,e,Kt,-n,-s,r),en("n2",t,e,Kt,n,-s,r),en("n3",t,e,Kt,-n,s,r),en("n4",t,e,Kt,n,s,r),en("f1",t,e,Kt,-n,-s,a),en("f2",t,e,Kt,n,-s,a),en("f3",t,e,Kt,-n,s,a),en("f4",t,e,Kt,n,s,a),en("u1",t,e,Kt,n*.7,s*1.1,r),en("u2",t,e,Kt,-n*.7,s*1.1,r),en("u3",t,e,Kt,0,s*2,r),en("cf1",t,e,Kt,-n,0,a),en("cf2",t,e,Kt,n,0,a),en("cf3",t,e,Kt,0,-s,a),en("cf4",t,e,Kt,0,s,a),en("cn1",t,e,Kt,-n,0,r),en("cn2",t,e,Kt,n,0,r),en("cn3",t,e,Kt,0,-s,r),en("cn4",t,e,Kt,0,s,r),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function en(i,e,t,n,s,r,a){_l.set(s,r,a).unproject(n);const o=e[i];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,u=o.length;c<u;c++)l.setXYZ(o[c],_l.x,_l.y,_l.z)}}const yl=new Rn;class IM extends Bi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new dt;r.setIndex(new Ft(n,1)),r.setAttribute("position",new Ft(s,3)),super(r,new kn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&yl.setFromObject(this.object),yl.isEmpty())return;const e=yl.min,t=yl.max,n=this.geometry.attributes.position,s=n.array;s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=e.x,s[4]=t.y,s[5]=t.z,s[6]=e.x,s[7]=e.y,s[8]=t.z,s[9]=t.x,s[10]=e.y,s[11]=t.z,s[12]=t.x,s[13]=t.y,s[14]=e.z,s[15]=e.x,s[16]=t.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=t.x,s[22]=e.y,s[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class PM extends Bi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new dt;r.setIndex(new Ft(n,1)),r.setAttribute("position",new Be(s,3)),super(r,new kn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class DM extends Es{constructor(e,t=1,n=16776960){const s=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new dt;a.setAttribute("position",new Be(r,3)),a.computeBoundingSphere(),super(a,new kn({color:s,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new dt;l.setAttribute("position",new Be(o,3)),l.computeBoundingSphere(),this.add(new sn(l,new ss({color:s,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const lm=new P;let xl,gu;class LM extends Et{constructor(e=new P(0,0,1),t=new P(0,0,0),n=1,s=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",xl===void 0&&(xl=new dt,xl.setAttribute("position",new Be([0,0,0,0,1,0],3)),gu=new wo(.5,1,5,1),gu.translate(0,-.5,0)),this.position.copy(t),this.line=new Es(xl,new kn({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new sn(gu,new ss({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{lm.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(lm,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class UM extends Bi{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new dt;s.setAttribute("position",new Be(t,3)),s.setAttribute("color",new Be(n,3));const r=new kn({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){const s=new ke,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class NM{constructor(){this.type="ShapePath",this.color=new ke,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new no,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,a){return this.currentPath.bezierCurveTo(e,t,n,s,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let u=!1;const d=c.length;for(let h=0,f=d-1;h<d;f=h++){const p=c[h],v=c[f];p.y>l.y!=v.y>l.y&&l.x<(v.x-p.x)*(l.y-p.y)/(v.y-p.y)+p.x&&(u=!u)}return u}function t(l,c){const u=c.getCenter(new re);if(e(u,l))return u;const d=u.y,h=[],f=l.length;for(let p=0;p<f;p++){const v=l[p],g=l[(p+1)%f];if(v.y>d!=g.y>d){const m=v.x+(d-v.y)*(g.x-v.x)/(g.y-v.y);h.push(m)}}return h.length>1&&(h.sort((p,v)=>p-v),u.x=(h[0]+h[1])/2),u}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(we('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");const s=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(const l of this.subPaths){const c=l.getPoints();if(c.length<3)continue;const u=xi.area(c);if(u===0)continue;const d=new W0;for(let h=0;h<c.length;h++)d.expandByPoint(c[h]);r.push({subPath:l,points:c,boundingBox:d,interiorPoint:t(c,d),absArea:Math.abs(u),winding:u<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){const c=r[l];let u=0;for(let d=l-1;d>=0;d--){const h=r[d];if(h.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,h.points)){c.container=h.exclude?h.container:h,u=h.winding,c.winding+=u;break}}s(c.winding)===s(u)&&(c.exclude=!0)}for(const l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");const a=[],o=new Map;for(const l of r){if(l.exclude||l.role!=="outer")continue;const c=new To;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(const l of r){if(l.exclude||l.role!=="hole")continue;const c=o.get(l.container);if(!c)continue;const u=new no;u.curves=l.subPath.curves,c.holes.push(u)}return a}}class q0 extends Ti{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){we("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function OM(i,e){const t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2):(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0),i}function FM(i,e){const t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0):(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2),i}function kM(i){return i.repeat.x=1,i.repeat.y=1,i.offset.x=0,i.offset.y=0,i}function Yu(i,e,t,n){const s=BM(n);switch(t){case Rd:return i*e;case Hc:return i*e/s.components*s.byteLength;case bo:return i*e/s.components*s.byteLength;case ws:return i*e*2/s.components*s.byteLength;case Wc:return i*e*2/s.components*s.byteLength;case Id:return i*e*3/s.components*s.byteLength;case On:return i*e*4/s.components*s.byteLength;case Xc:return i*e*4/s.components*s.byteLength;case Na:case Oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fa:case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ql:case Yl:return Math.max(i,16)*Math.max(e,8)/4;case Xl:case $l:return Math.max(i,8)*Math.max(e,8)/2;case Zl:case Kl:case jl:case Ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Jl:case $a:case ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ic:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case sc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case rc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ac:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case oc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case cc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case hc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case uc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case dc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case fc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case pc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case mc:case gc:case vc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _c:case yc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ya:case xc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function BM(i){switch(i){case Hn:case Td:return{byteLength:1,components:1};case jr:case Ed:case Ni:return{byteLength:2,components:1};case Vc:case Gc:return{byteLength:2,components:4};case ui:case zc:case Nn:return{byteLength:4,components:1};case Ad:case Cd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}class zM{static contain(e,t){return OM(e,t)}static cover(e,t){return FM(e,t)}static fill(e){return kM(e)}static getByteLength(e,t,n,s){return Yu(e,t,n,s)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fc}}));typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fc);function $0(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function VM(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){const p=d[h],v=d[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){const v=d[f];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var GM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HM=`#ifdef USE_ALPHAHASH
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
#endif`,WM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$M=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YM=`#ifdef USE_AOMAP
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
#endif`,ZM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KM=`#ifdef USE_BATCHING
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
#endif`,JM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,QM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ew=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tw=`#ifdef USE_IRIDESCENCE
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
#endif`,nw=`#ifdef USE_BUMPMAP
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
#endif`,iw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ow=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,uw=`#define PI 3.141592653589793
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
} // validated`,dw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fw=`vec3 transformedNormal = objectNormal;
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
#endif`,pw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_w="gl_FragColor = linearToOutputTexel( gl_FragColor );",yw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xw=`#ifdef USE_ENVMAP
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
#endif`,bw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Sw=`#ifdef USE_ENVMAP
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
#endif`,Mw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ww=`#ifdef USE_ENVMAP
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
#endif`,Tw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ew=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Aw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rw=`#ifdef USE_GRADIENTMAP
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
}`,Iw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lw=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Uw=`#ifdef USE_ENVMAP
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
#endif`,Nw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ow=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bw=`PhysicalMaterial material;
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
#endif`,zw=`uniform sampler2D dfgLUT;
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
}`,Vw=`
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
#endif`,Gw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ww=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Xw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$w=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jw=`#if defined( USE_POINTS_UV )
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
#endif`,Qw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s1=`#ifdef USE_MORPHTARGETS
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
#endif`,r1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,o1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,l1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,u1=`#ifdef USE_NORMALMAP
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
#endif`,d1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A1=`float getShadowMask() {
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
}`,C1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R1=`#ifdef USE_SKINNING
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
#endif`,I1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P1=`#ifdef USE_SKINNING
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
#endif`,D1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,O1=`#ifdef USE_TRANSMISSION
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
#endif`,F1=`#ifdef USE_TRANSMISSION
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
#endif`,k1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const G1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H1=`uniform sampler2D t2D;
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
}`,W1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y1=`#include <common>
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
}`,Z1=`#if DEPTH_PACKING == 3200
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
}`,K1=`#define DISTANCE
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
}`,J1=`#define DISTANCE
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
}`,j1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`uniform float scale;
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
}`,tT=`uniform vec3 diffuse;
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
}`,nT=`#include <common>
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
}`,iT=`uniform vec3 diffuse;
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
}`,sT=`#define LAMBERT
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
}`,rT=`#define LAMBERT
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
}`,aT=`#define MATCAP
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
}`,oT=`#define MATCAP
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
}`,lT=`#define NORMAL
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
}`,cT=`#define NORMAL
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
}`,hT=`#define PHONG
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
}`,uT=`#define PHONG
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
}`,dT=`#define STANDARD
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
}`,fT=`#define STANDARD
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
}`,pT=`#define TOON
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
}`,mT=`#define TOON
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
}`,gT=`uniform float size;
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
}`,vT=`uniform vec3 diffuse;
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
}`,_T=`#include <common>
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
}`,yT=`uniform vec3 color;
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
}`,xT=`uniform float rotation;
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
}`,bT=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:GM,alphahash_pars_fragment:HM,alphamap_fragment:WM,alphamap_pars_fragment:XM,alphatest_fragment:qM,alphatest_pars_fragment:$M,aomap_fragment:YM,aomap_pars_fragment:ZM,batching_pars_vertex:KM,batching_vertex:JM,begin_vertex:jM,beginnormal_vertex:QM,bsdfs:ew,iridescence_fragment:tw,bumpmap_pars_fragment:nw,clipping_planes_fragment:iw,clipping_planes_pars_fragment:sw,clipping_planes_pars_vertex:rw,clipping_planes_vertex:aw,color_fragment:ow,color_pars_fragment:lw,color_pars_vertex:cw,color_vertex:hw,common:uw,cube_uv_reflection_fragment:dw,defaultnormal_vertex:fw,displacementmap_pars_vertex:pw,displacementmap_vertex:mw,emissivemap_fragment:gw,emissivemap_pars_fragment:vw,colorspace_fragment:_w,colorspace_pars_fragment:yw,envmap_fragment:xw,envmap_common_pars_fragment:bw,envmap_pars_fragment:Sw,envmap_pars_vertex:Mw,envmap_physical_pars_fragment:Uw,envmap_vertex:ww,fog_vertex:Tw,fog_pars_vertex:Ew,fog_fragment:Aw,fog_pars_fragment:Cw,gradientmap_pars_fragment:Rw,lightmap_pars_fragment:Iw,lights_lambert_fragment:Pw,lights_lambert_pars_fragment:Dw,lights_pars_begin:Lw,lights_toon_fragment:Nw,lights_toon_pars_fragment:Ow,lights_phong_fragment:Fw,lights_phong_pars_fragment:kw,lights_physical_fragment:Bw,lights_physical_pars_fragment:zw,lights_fragment_begin:Vw,lights_fragment_maps:Gw,lights_fragment_end:Hw,lightprobes_pars_fragment:Ww,logdepthbuf_fragment:Xw,logdepthbuf_pars_fragment:qw,logdepthbuf_pars_vertex:$w,logdepthbuf_vertex:Yw,map_fragment:Zw,map_pars_fragment:Kw,map_particle_fragment:Jw,map_particle_pars_fragment:jw,metalnessmap_fragment:Qw,metalnessmap_pars_fragment:e1,morphinstance_vertex:t1,morphcolor_vertex:n1,morphnormal_vertex:i1,morphtarget_pars_vertex:s1,morphtarget_vertex:r1,normal_fragment_begin:a1,normal_fragment_maps:o1,normal_pars_fragment:l1,normal_pars_vertex:c1,normal_vertex:h1,normalmap_pars_fragment:u1,clearcoat_normal_fragment_begin:d1,clearcoat_normal_fragment_maps:f1,clearcoat_pars_fragment:p1,iridescence_pars_fragment:m1,opaque_fragment:g1,packing:v1,premultiplied_alpha_fragment:_1,project_vertex:y1,dithering_fragment:x1,dithering_pars_fragment:b1,roughnessmap_fragment:S1,roughnessmap_pars_fragment:M1,shadowmap_pars_fragment:w1,shadowmap_pars_vertex:T1,shadowmap_vertex:E1,shadowmask_pars_fragment:A1,skinbase_vertex:C1,skinning_pars_vertex:R1,skinning_vertex:I1,skinnormal_vertex:P1,specularmap_fragment:D1,specularmap_pars_fragment:L1,tonemapping_fragment:U1,tonemapping_pars_fragment:N1,transmission_fragment:O1,transmission_pars_fragment:F1,uv_pars_fragment:k1,uv_pars_vertex:B1,uv_vertex:z1,worldpos_vertex:V1,background_vert:G1,background_frag:H1,backgroundCube_vert:W1,backgroundCube_frag:X1,cube_vert:q1,cube_frag:$1,depth_vert:Y1,depth_frag:Z1,distance_vert:K1,distance_frag:J1,equirect_vert:j1,equirect_frag:Q1,linedashed_vert:eT,linedashed_frag:tT,meshbasic_vert:nT,meshbasic_frag:iT,meshlambert_vert:sT,meshlambert_frag:rT,meshmatcap_vert:aT,meshmatcap_frag:oT,meshnormal_vert:lT,meshnormal_frag:cT,meshphong_vert:hT,meshphong_frag:uT,meshphysical_vert:dT,meshphysical_frag:fT,meshtoon_vert:pT,meshtoon_frag:mT,points_vert:gT,points_frag:vT,shadow_vert:_T,shadow_frag:yT,sprite_vert:xT,sprite_frag:bT},Ae={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},ri={basic:{uniforms:Pn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Pn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Pn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Pn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Pn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new ke(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Pn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Pn([Ae.points,Ae.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Pn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Pn([Ae.common,Ae.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Pn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Pn([Ae.sprite,Ae.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:Pn([Ae.common,Ae.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:Pn([Ae.lights,Ae.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};ri.physical={uniforms:Pn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const bl={r:0,b:0,g:0},ST=new nt,Y0=new ut;Y0.set(-1,0,0,0,1,0,0,0,1);function MT(i,e,t,n,s,r){const a=new ke(0);let o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(_){let b=_.isScene===!0?_.background:null;if(b&&b.isTexture){const y=_.backgroundBlurriness>0;b=e.get(b,y)}return b}function p(_){let b=!1;const y=f(_);y===null?g(a,o):y&&y.isColor&&(g(y,1),b=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(_,b){const y=f(b);y&&(y.isCubeTexture||y.mapping===aa)?(c===void 0&&(c=new sn(new Cs(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:ia(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,M,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ST.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Y0),c.material.toneMapped=_t.getTransfer(y.colorSpace)!==Dt,(u!==y||d!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new sn(new oa(2,2),new di({name:"BackgroundMaterial",uniforms:ia(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=_t.getTransfer(y.colorSpace)!==Dt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,b){_.getRGB(bl,m0(i)),t.buffers.color.setClear(bl.r,bl.g,bl.b,b,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,b=1){a.set(_),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(a,o)},render:p,addToRenderList:v,dispose:m}}function wT(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(I,z,L,F,k){let U=!1;const O=d(I,F,L,z);r!==O&&(r=O,c(r.object)),U=f(I,F,L,k),U&&p(I,F,L,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,y(I,z,L,F),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function d(I,z,L,F){const k=F.wireframe===!0;let U=n[z.id];U===void 0&&(U={},n[z.id]=U);const O=I.isInstancedMesh===!0?I.id:0;let B=U[O];B===void 0&&(B={},U[O]=B);let H=B[L.id];H===void 0&&(H={},B[L.id]=H);let ne=H[k];return ne===void 0&&(ne=h(l()),H[k]=ne),ne}function h(I){const z=[],L=[],F=[];for(let k=0;k<t;k++)z[k]=0,L[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:L,attributeDivisors:F,object:I,attributes:{},index:null}}function f(I,z,L,F){const k=r.attributes,U=z.attributes;let O=0;const B=L.getAttributes();for(const H in B)if(B[H].location>=0){const j=k[H];let te=U[H];if(te===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(te=I.instanceColor)),j===void 0||j.attribute!==te||te&&j.data!==te.data)return!0;O++}return r.attributesNum!==O||r.index!==F}function p(I,z,L,F){const k={},U=z.attributes;let O=0;const B=L.getAttributes();for(const H in B)if(B[H].location>=0){let j=U[H];j===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(j=I.instanceColor));const te={};te.attribute=j,j&&j.data&&(te.data=j.data),k[H]=te,O++}r.attributes=k,r.attributesNum=O,r.index=F}function v(){const I=r.newAttributes;for(let z=0,L=I.length;z<L;z++)I[z]=0}function g(I){m(I,0)}function m(I,z){const L=r.newAttributes,F=r.enabledAttributes,k=r.attributeDivisors;L[I]=1,F[I]===0&&(i.enableVertexAttribArray(I),F[I]=1),k[I]!==z&&(i.vertexAttribDivisor(I,z),k[I]=z)}function _(){const I=r.newAttributes,z=r.enabledAttributes;for(let L=0,F=z.length;L<F;L++)z[L]!==I[L]&&(i.disableVertexAttribArray(L),z[L]=0)}function b(I,z,L,F,k,U,O){O===!0?i.vertexAttribIPointer(I,z,L,k,U):i.vertexAttribPointer(I,z,L,F,k,U)}function y(I,z,L,F){v();const k=F.attributes,U=L.getAttributes(),O=z.defaultAttributeValues;for(const B in U){const H=U[B];if(H.location>=0){let ne=k[B];if(ne===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor)),ne!==void 0){const j=ne.normalized,te=ne.itemSize,Re=e.get(ne);if(Re===void 0)continue;const ct=Re.buffer,at=Re.type,Q=Re.bytesPerElement,ge=at===i.INT||at===i.UNSIGNED_INT||ne.gpuType===zc;if(ne.isInterleavedBufferAttribute){const he=ne.data,We=he.stride,Ke=ne.offset;if(he.isInstancedInterleavedBuffer){for(let le=0;le<H.locationSize;le++)m(H.location+le,he.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let le=0;le<H.locationSize;le++)g(H.location+le);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let le=0;le<H.locationSize;le++)b(H.location+le,te/H.locationSize,at,j,We*Q,(Ke+te/H.locationSize*le)*Q,ge)}else{if(ne.isInstancedBufferAttribute){for(let he=0;he<H.locationSize;he++)m(H.location+he,ne.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let he=0;he<H.locationSize;he++)g(H.location+he);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let he=0;he<H.locationSize;he++)b(H.location+he,te/H.locationSize,at,j,te*Q,te/H.locationSize*he*Q,ge)}}else if(O!==void 0){const j=O[B];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(H.location,j);break;case 3:i.vertexAttrib3fv(H.location,j);break;case 4:i.vertexAttrib4fv(H.location,j);break;default:i.vertexAttrib1fv(H.location,j)}}}}_()}function w(){T();for(const I in n){const z=n[I];for(const L in z){const F=z[L];for(const k in F){const U=F[k];for(const O in U)u(U[O].object),delete U[O];delete F[k]}}delete n[I]}}function M(I){if(n[I.id]===void 0)return;const z=n[I.id];for(const L in z){const F=z[L];for(const k in F){const U=F[k];for(const O in U)u(U[O].object),delete U[O];delete F[k]}}delete n[I.id]}function C(I){for(const z in n){const L=n[z];for(const F in L){const k=L[F];if(k[I.id]===void 0)continue;const U=k[I.id];for(const O in U)u(U[O].object),delete U[O];delete k[I.id]}}}function x(I){for(const z in n){const L=n[z],F=I.isInstancedMesh===!0?I.id:0,k=L[F];if(k!==void 0){for(const U in k){const O=k[U];for(const B in O)u(O[B].object),delete O[B];delete k[U]}delete L[F],Object.keys(L).length===0&&delete n[z]}}}function T(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:_}}function TT(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ET(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==On&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const x=C===Ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Hn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Nn&&!x)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(we("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&we("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:y,maxSamples:w,samples:M}}function AT(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Yi,o=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const p=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{const _=r?0:n,b=_*4;let y=m.clippingState||null;l.value=y,y=u(p,h,b,f);for(let w=0;w!==b;++w)y[w]=t[w];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,p){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=l.value,p!==!0||g===null){const m=f+v*4,_=h.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,y=f;b!==v;++b,y+=4)a.copy(d[b]).applyMatrix4(_,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}const xs=4,cm=[.125,.215,.35,.446,.526,.582],$s=20,CT=256,wa=new ca,hm=new ke;let vu=null,_u=0,yu=0,xu=!1;const RT=new P;class Zu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=RT}=r;vu=this._renderer.getRenderTarget(),_u=this._renderer.getActiveCubeFace(),yu=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vu,_u,yu),this._renderer.xr.enabled=xu,e.scissorTest=!1,kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vu=this._renderer.getRenderTarget(),_u=this._renderer.getActiveCubeFace(),yu=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Ni,format:On,colorSpace:Ja,depthBuffer:!1},s=um(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=um(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=IT(r)),this._blurMaterial=DT(r,e,t),this._ggxMaterial=PT(r,e,t)}return s}_compileMaterial(e){const t=new sn(new dt,e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,n,s,r){const l=new mn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(hm),d.toneMapping=Si,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new sn(new Cs,new ss({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let m=!1;const _=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,m=!0):(g.color.copy(hm),m=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const w=this._cubeSize;kr(s,y*w,b>2?w:0,w,w),d.setRenderTarget(s),m&&d.render(v,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ui||e.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dm());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;kr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,wa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:p}=this,v=this._sizeLods[n],g=3*v*(n>p-xs?n-p+xs:0),m=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,kr(r,g,m,3*v,2*v),s.setRenderTarget(r),s.render(o,wa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,kr(e,g,m,3*v,2*v),s.setRenderTarget(e),s.render(o,wa)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=c;const h=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*$s-1),v=r/p,g=isFinite(r)?1+Math.floor(u*v):$s;g>$s&&we(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${$s}`);const m=[];let _=0;for(let C=0;C<$s;++C){const x=C/v,T=Math.exp(-x*x/2);m.push(T),C===0?_+=T:C<g&&(_+=2*T)}for(let C=0;C<m.length;C++)m[C]=m[C]/_;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=p,h.mipInt.value=b-n;const y=this._sizeLods[s],w=3*y*(s>b-xs?s-b+xs:0),M=4*(this._cubeSize-y);kr(t,w,M,3*y,2*y),l.setRenderTarget(t),l.render(d,wa)}}function IT(i){const e=[],t=[],n=[];let s=i;const r=i-xs+1+cm.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-xs?l=cm[a-i+xs-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,p=6,v=3,g=2,m=1,_=new Float32Array(v*p*f),b=new Float32Array(g*p*f),y=new Float32Array(m*p*f);for(let M=0;M<f;M++){const C=M%3*2/3-1,x=M>2?0:-1,T=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];_.set(T,v*p*M),b.set(h,g*p*M);const R=[M,M,M,M,M,M];y.set(R,m*p*M)}const w=new dt;w.setAttribute("position",new Ft(_,v)),w.setAttribute("uv",new Ft(b,g)),w.setAttribute("faceIndex",new Ft(y,m)),n.push(new sn(w,null)),s>xs&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function um(i,e,t){const n=new ei(i,e,t);return n.texture.mapping=aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function kr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function PT(i,e,t){return new di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:CT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bh(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function DT(i,e,t){const n=new Float32Array($s),s=new P(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:$s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bh(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function dm(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bh(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function fm(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function bh(){return`

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
	`}class cf extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new So(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Cs(5,5,5),r=new di({name:"CubemapFromEquirect",uniforms:ia(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fn,blending:Li});r.uniforms.tEquirect.value=t;const a=new sn(s,r),o=t.minFilter;return t.minFilter===Pi&&(t.minFilter=Ht),new k0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function LT(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===Da||f===La)if(e.has(h)){const p=e.get(h).texture;return o(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const v=new cf(p.height);return v.fromEquirectangularTexture(i,h),e.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,p=f===Da||f===La,v=f===Ui||f===Ms;if(p||v){let g=t.get(h);const m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new Zu(i)),g=p?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const _=h.image;return p&&_&&_.height>0||v&&_&&l(_)?(n===null&&(n=new Zu(i)),g=p?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,f){return f===Da?h.mapping=Ui:f===La&&(h.mapping=Ms),h}function l(h){let f=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&f++;return f===p}function c(h){const f=h.target;f.removeEventListener("dispose",c);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function UT(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&bs("WebGLRenderer: "+n+" extension not supported."),s}}}function NT(i,e,t,n){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",a),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,p=d.attributes.position;let v=0;if(p===void 0)return;if(f!==null){const _=f.array;v=f.version;for(let b=0,y=_.length;b<y;b+=3){const w=_[b+0],M=_[b+1],C=_[b+2];h.push(w,M,M,C,C,w)}}else{const _=p.array;v=p.version;for(let b=0,y=_.length/3-1;b<y;b+=3){const w=b+0,M=b+1,C=b+2;h.push(w,M,M,C,C,w)}}const g=new(p.count>=65535?Od:Nd)(h,1);g.version=v;const m=r.get(d);m&&e.remove(m),r.set(d,g)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function OT(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),t.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*a,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let v=0;for(let g=0;g<f;g++)v+=h[g];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function FT(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function kT(i,e,t){const n=new WeakMap,s=new Ut;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let b=0;f===!0&&(b=1),p===!0&&(b=2),v===!0&&(b=3);let y=o.attributes.position.count*b,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const M=new Float32Array(y*w*4*d),C=new Zc(M,y,w,d);C.type=Nn,C.needsUpdate=!0;const x=b*4;for(let R=0;R<d;R++){const I=g[R],z=m[R],L=_[R],F=y*w*4*R;for(let k=0;k<I.count;k++){const U=k*x;f===!0&&(s.fromBufferAttribute(I,k),M[F+U+0]=s.x,M[F+U+1]=s.y,M[F+U+2]=s.z,M[F+U+3]=0),p===!0&&(s.fromBufferAttribute(z,k),M[F+U+4]=s.x,M[F+U+5]=s.y,M[F+U+6]=s.z,M[F+U+7]=0),v===!0&&(s.fromBufferAttribute(L,k),M[F+U+8]=s.x,M[F+U+9]=s.y,M[F+U+10]=s.z,M[F+U+11]=L.itemSize===4?s.w:1)}}h={count:d,texture:C,size:new re(y,w)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function BT(i,e,t,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const zT={[_d]:"LINEAR_TONE_MAPPING",[yd]:"REINHARD_TONE_MAPPING",[xd]:"CINEON_TONE_MAPPING",[bd]:"ACES_FILMIC_TONE_MAPPING",[kc]:"AGX_TONE_MAPPING",[Md]:"NEUTRAL_TONE_MAPPING",[Sd]:"CUSTOM_TONE_MAPPING"};function VT(i,e,t,n,s,r){const a=new ei(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new or(e,t):void 0}),o=new ei(e,t,{type:Ni,depthBuffer:!1,stencilBuffer:!1}),l=new dt;l.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Be([0,2,0,0,2,0],2));const c=new Yd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new sn(l,c),d=new ca(-1,1,1,-1,0,1);let h=null,f=null,p=!1,v,g=null,m=[],_=!1;this.setSize=function(b,y){a.setSize(b,y),o.setSize(b,y);for(let w=0;w<m.length;w++){const M=m[w];M.setSize&&M.setSize(b,y)}},this.setEffects=function(b){m=b,_=m.length>0&&m[0].isRenderPass===!0;const y=a.width,w=a.height;for(let M=0;M<m.length;M++){const C=m[M];C.setSize&&C.setSize(y,w)}},this.begin=function(b,y){if(p||b.toneMapping===Si&&m.length===0)return!1;if(g=y,y!==null){const w=y.width,M=y.height;(a.width!==w||a.height!==M)&&this.setSize(w,M)}return _===!1&&b.setRenderTarget(a),v=b.toneMapping,b.toneMapping=Si,!0},this.hasRenderPass=function(){return _},this.end=function(b,y){b.toneMapping=v,p=!0;let w=a,M=o;for(let C=0;C<m.length;C++){const x=m[C];if(x.enabled!==!1&&(x.render(b,M,w,y),x.needsSwap!==!1)){const T=w;w=M,M=T}}if(h!==b.outputColorSpace||f!==b.toneMapping){h=b.outputColorSpace,f=b.toneMapping,c.defines={},_t.getTransfer(h)===Dt&&(c.defines.SRGB_TRANSFER="");const C=zT[f];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,b.setRenderTarget(g),b.render(u,d),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Z0=new Yt,Ku=new or(1,1),K0=new Zc,J0=new Kc,j0=new So,pm=[],mm=[],gm=new Float32Array(16),vm=new Float32Array(9),_m=new Float32Array(4);function ha(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=pm[s];if(r===void 0&&(r=new Float32Array(s),pm[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function ln(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function cn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Sh(i,e){let t=mm[e];t===void 0&&(t=new Int32Array(e),mm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function GT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function HT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2fv(this.addr,e),cn(t,e)}}function WT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;i.uniform3fv(this.addr,e),cn(t,e)}}function XT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4fv(this.addr,e),cn(t,e)}}function qT(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;_m.set(n),i.uniformMatrix2fv(this.addr,!1,_m),cn(t,n)}}function $T(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;vm.set(n),i.uniformMatrix3fv(this.addr,!1,vm),cn(t,n)}}function YT(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;gm.set(n),i.uniformMatrix4fv(this.addr,!1,gm),cn(t,n)}}function ZT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function KT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2iv(this.addr,e),cn(t,e)}}function JT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;i.uniform3iv(this.addr,e),cn(t,e)}}function jT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4iv(this.addr,e),cn(t,e)}}function QT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function eE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2uiv(this.addr,e),cn(t,e)}}function tE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;i.uniform3uiv(this.addr,e),cn(t,e)}}function nE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4uiv(this.addr,e),cn(t,e)}}function iE(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ku.compareFunction=t.isReversedDepthBuffer()?Yc:$c,r=Ku):r=Z0,t.setTexture2D(e||r,s)}function sE(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||J0,s)}function rE(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||j0,s)}function aE(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||K0,s)}function oE(i){switch(i){case 5126:return GT;case 35664:return HT;case 35665:return WT;case 35666:return XT;case 35674:return qT;case 35675:return $T;case 35676:return YT;case 5124:case 35670:return ZT;case 35667:case 35671:return KT;case 35668:case 35672:return JT;case 35669:case 35673:return jT;case 5125:return QT;case 36294:return eE;case 36295:return tE;case 36296:return nE;case 35678:case 36198:case 36298:case 36306:case 35682:return iE;case 35679:case 36299:case 36307:return sE;case 35680:case 36300:case 36308:case 36293:return rE;case 36289:case 36303:case 36311:case 36292:return aE}}function lE(i,e){i.uniform1fv(this.addr,e)}function cE(i,e){const t=ha(e,this.size,2);i.uniform2fv(this.addr,t)}function hE(i,e){const t=ha(e,this.size,3);i.uniform3fv(this.addr,t)}function uE(i,e){const t=ha(e,this.size,4);i.uniform4fv(this.addr,t)}function dE(i,e){const t=ha(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fE(i,e){const t=ha(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function pE(i,e){const t=ha(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function mE(i,e){i.uniform1iv(this.addr,e)}function gE(i,e){i.uniform2iv(this.addr,e)}function vE(i,e){i.uniform3iv(this.addr,e)}function _E(i,e){i.uniform4iv(this.addr,e)}function yE(i,e){i.uniform1uiv(this.addr,e)}function xE(i,e){i.uniform2uiv(this.addr,e)}function bE(i,e){i.uniform3uiv(this.addr,e)}function SE(i,e){i.uniform4uiv(this.addr,e)}function ME(i,e,t){const n=this.cache,s=e.length,r=Sh(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ku:a=Z0;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function wE(i,e,t){const n=this.cache,s=e.length,r=Sh(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||J0,r[a])}function TE(i,e,t){const n=this.cache,s=e.length,r=Sh(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||j0,r[a])}function EE(i,e,t){const n=this.cache,s=e.length,r=Sh(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||K0,r[a])}function AE(i){switch(i){case 5126:return lE;case 35664:return cE;case 35665:return hE;case 35666:return uE;case 35674:return dE;case 35675:return fE;case 35676:return pE;case 5124:case 35670:return mE;case 35667:case 35671:return gE;case 35668:case 35672:return vE;case 35669:case 35673:return _E;case 5125:return yE;case 36294:return xE;case 36295:return bE;case 36296:return SE;case 35678:case 36198:case 36298:case 36306:case 35682:return ME;case 35679:case 36299:case 36307:return wE;case 35680:case 36300:case 36308:case 36293:return TE;case 36289:case 36303:case 36311:case 36292:return EE}}class CE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=oE(t.type)}}class RE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=AE(t.type)}}class IE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const bu=/(\w+)(\])?(\[|\.)?/g;function ym(i,e){i.seq.push(e),i.map[e.id]=e}function PE(i,e,t){const n=i.name,s=n.length;for(bu.lastIndex=0;;){const r=bu.exec(n),a=bu.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ym(t,c===void 0?new CE(o,i,e):new RE(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new IE(o),ym(t,d)),t=d}}}class Rl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);PE(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function xm(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const DE=37297;let LE=0;function UE(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const bm=new ut;function NE(i){_t._getMatrix(bm,_t.workingColorSpace,i);const e=`mat3( ${bm.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(i)){case ja:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Sm(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+UE(i.getShaderSource(e),o)}else return r}function OE(i,e){const t=NE(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const FE={[_d]:"Linear",[yd]:"Reinhard",[xd]:"Cineon",[bd]:"ACESFilmic",[kc]:"AgX",[Md]:"Neutral",[Sd]:"Custom"};function kE(i,e){const t=FE[e];return t===void 0?(we("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sl=new P;function BE(){_t.getLuminanceCoefficients(Sl);const i=Sl.x.toFixed(4),e=Sl.y.toFixed(4),t=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ra).join(`
`)}function VE(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function GE(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ra(i){return i!==""}function Mm(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ju(i){return i.replace(HE,XE)}const WE=new Map;function XE(i,e){let t=it[e];if(t===void 0){const n=WE.get(e);if(n!==void 0)t=it[n],we('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ju(t)}const qE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tm(i){return i.replace(qE,$E)}function $E(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Em(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const YE={[Pa]:"SHADOWMAP_TYPE_PCF",[Vr]:"SHADOWMAP_TYPE_VSM"};function ZE(i){return YE[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const KE={[Ui]:"ENVMAP_TYPE_CUBE",[Ms]:"ENVMAP_TYPE_CUBE",[aa]:"ENVMAP_TYPE_CUBE_UV"};function JE(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":KE[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const jE={[Ms]:"ENVMAP_MODE_REFRACTION"};function QE(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":jE[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const eA={[xo]:"ENVMAP_BLENDING_MULTIPLY",[Ag]:"ENVMAP_BLENDING_MIX",[Cg]:"ENVMAP_BLENDING_ADD"};function tA(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":eA[i.combine]||"ENVMAP_BLENDING_NONE"}function nA(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function iA(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=ZE(t),c=JE(t),u=QE(t),d=tA(t),h=nA(t),f=zE(t),p=VE(r),v=s.createProgram();let g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ra).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ra).join(`
`),m.length>0&&(m+=`
`)):(g=[Em(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ra).join(`
`),m=[Em(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?it.tonemapping_pars_fragment:"",t.toneMapping!==Si?kE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,OE("linearToOutputTexel",t.outputColorSpace),BE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ra).join(`
`)),a=Ju(a),a=Mm(a,t),a=wm(a,t),o=Ju(o),o=Mm(o,t),o=wm(o,t),a=Tm(a),o=Tm(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=_+g+a,y=_+m+o,w=xm(s,s.VERTEX_SHADER,b),M=xm(s,s.FRAGMENT_SHADER,y);s.attachShader(v,w),s.attachShader(v,M),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(I){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(v)||"",L=s.getShaderInfoLog(w)||"",F=s.getShaderInfoLog(M)||"",k=z.trim(),U=L.trim(),O=F.trim();let B=!0,H=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,w,M);else{const ne=Sm(s,w,"vertex"),j=Sm(s,M,"fragment");Ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+ne+`
`+j)}else k!==""?we("WebGLProgram: Program Info Log:",k):(U===""||O==="")&&(H=!1);H&&(I.diagnostics={runnable:B,programLog:k,vertexShader:{log:U,prefix:g},fragmentShader:{log:O,prefix:m}})}s.deleteShader(w),s.deleteShader(M),x=new Rl(s,v),T=GE(s,v)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(v,DE)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=LE++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=M,this}let sA=0;class rA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new aA(e),t.set(e,n)),n}}class aA{constructor(e){this.id=sA++,this.code=e,this.usedTimes=0}}function oA(i){return i===ws||i===$a||i===Ya}function lA(i,e,t,n,s,r){const a=new Jc,o=new rA,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,T,R,I,z,L){const F=I.fog,k=z.geometry,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,B=e.get(x.envMap||U,O),H=B&&B.mapping===aa?B.image.height:null,ne=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&we("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const j=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,te=j!==void 0?j.length:0;let Re=0;k.morphAttributes.position!==void 0&&(Re=1),k.morphAttributes.normal!==void 0&&(Re=2),k.morphAttributes.color!==void 0&&(Re=3);let ct,at,Q,ge;if(ne){const He=ri[ne];ct=He.vertexShader,at=He.fragmentShader}else{ct=x.vertexShader,at=x.fragmentShader;const He=o.getVertexShaderStage(x),Wt=o.getFragmentShaderStage(x);o.update(x,He,Wt),Q=He.id,ge=Wt.id}const he=i.getRenderTarget(),We=i.state.buffers.depth.getReversed(),Ke=z.isInstancedMesh===!0,le=z.isBatchedMesh===!0,Te=!!x.map,Ne=!!x.matcap,se=!!B,ae=!!x.aoMap,oe=!!x.lightMap,_e=!!x.bumpMap&&x.wireframe===!1,Me=!!x.normalMap,Qe=!!x.displacementMap,be=!!x.emissiveMap,ye=!!x.metalnessMap,Pe=!!x.roughnessMap,V=x.anisotropy>0,At=x.clearcoat>0,gt=x.dispersion>0,D=x.iridescence>0,S=x.sheen>0,q=x.transmission>0,N=V&&!!x.anisotropyMap,W=At&&!!x.clearcoatMap,ie=At&&!!x.clearcoatNormalMap,de=At&&!!x.clearcoatRoughnessMap,$=D&&!!x.iridescenceMap,J=D&&!!x.iridescenceThicknessMap,ve=S&&!!x.sheenColorMap,Ge=S&&!!x.sheenRoughnessMap,pe=!!x.specularMap,fe=!!x.specularColorMap,Fe=!!x.specularIntensityMap,Oe=q&&!!x.transmissionMap,st=q&&!!x.thicknessMap,G=!!x.gradientMap,Se=!!x.alphaMap,ee=x.alphaTest>0,Ee=!!x.alphaHash,Ie=!!x.extensions;let ce=Si;x.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(ce=i.toneMapping);const qe={shaderID:ne,shaderType:x.type,shaderName:x.name,vertexShader:ct,fragmentShader:at,defines:x.defines,customVertexShaderID:Q,customFragmentShaderID:ge,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:le,batchingColor:le&&z._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&z.instanceColor!==null,instancingMorph:Ke&&z.morphTexture!==null,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Te,matcap:Ne,envMap:se,envMapMode:se&&B.mapping,envMapCubeUVHeight:H,aoMap:ae,lightMap:oe,bumpMap:_e,normalMap:Me,displacementMap:Qe,emissiveMap:be,normalMapObjectSpace:Me&&x.normalMapType===Ug,normalMapTangentSpace:Me&&x.normalMapType===es,packedNormalMap:Me&&x.normalMapType===es&&oA(x.normalMap.format),metalnessMap:ye,roughnessMap:Pe,anisotropy:V,anisotropyMap:N,clearcoat:At,clearcoatMap:W,clearcoatNormalMap:ie,clearcoatRoughnessMap:de,dispersion:gt,iridescence:D,iridescenceMap:$,iridescenceThicknessMap:J,sheen:S,sheenColorMap:ve,sheenRoughnessMap:Ge,specularMap:pe,specularColorMap:fe,specularIntensityMap:Fe,transmission:q,transmissionMap:Oe,thicknessMap:st,gradientMap:G,opaque:x.transparent===!1&&x.blending===er&&x.alphaToCoverage===!1,alphaMap:Se,alphaTest:ee,alphaHash:Ee,combine:x.combine,mapUv:Te&&p(x.map.channel),aoMapUv:ae&&p(x.aoMap.channel),lightMapUv:oe&&p(x.lightMap.channel),bumpMapUv:_e&&p(x.bumpMap.channel),normalMapUv:Me&&p(x.normalMap.channel),displacementMapUv:Qe&&p(x.displacementMap.channel),emissiveMapUv:be&&p(x.emissiveMap.channel),metalnessMapUv:ye&&p(x.metalnessMap.channel),roughnessMapUv:Pe&&p(x.roughnessMap.channel),anisotropyMapUv:N&&p(x.anisotropyMap.channel),clearcoatMapUv:W&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ie&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:J&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&p(x.sheenRoughnessMap.channel),specularMapUv:pe&&p(x.specularMap.channel),specularColorMapUv:fe&&p(x.specularColorMap.channel),specularIntensityMapUv:Fe&&p(x.specularIntensityMap.channel),transmissionMapUv:Oe&&p(x.transmissionMap.channel),thicknessMapUv:st&&p(x.thicknessMap.channel),alphaMapUv:Se&&p(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Me||V),vertexNormals:!!k.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!k.attributes.uv&&(Te||Se),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||k.attributes.normal===void 0&&Me===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:We,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Re,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:Te&&x.map.isVideoTexture===!0&&_t.getTransfer(x.map.colorSpace)===Dt,decodeVideoTextureEmissive:be&&x.emissiveMap.isVideoTexture===!0&&_t.getTransfer(x.emissiveMap.colorSpace)===Dt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ii,flipSided:x.side===Fn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ie&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&x.extensions.multiDraw===!0||le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return qe.vertexUv1s=l.has(1),qe.vertexUv2s=l.has(2),qe.vertexUv3s=l.has(3),l.clear(),qe}function g(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)T.push(R),T.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(m(T,x),_(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function m(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function _(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function b(x){const T=f[x.type];let R;if(T){const I=ri[T];R=$d.clone(I.uniforms)}else R=x.uniforms;return R}function y(x,T){let R=u.get(T);return R!==void 0?++R.usedTimes:(R=new iA(i,T,x,s),c.push(R),u.set(T,R)),R}function w(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function M(x){o.remove(x)}function C(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:b,acquireProgram:y,releaseProgram:w,releaseShaderCache:M,programs:c,dispose:C}}function cA(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function hA(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Am(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Cm(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,p,v,g,m){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:g,group:m},i[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.materialVariant=a(h),_.groupOrder=v,_.renderOrder=h.renderOrder,_.z=g,_.group=m),e++,_}function l(h,f,p,v,g,m){const _=o(h,f,p,v,g,m);p.transmission>0?n.push(_):p.transparent===!0?s.push(_):t.push(_)}function c(h,f,p,v,g,m){const _=o(h,f,p,v,g,m);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function u(h,f,p){t.length>1&&t.sort(h||hA),n.length>1&&n.sort(f||Am),s.length>1&&s.sort(f||Am),p&&(t.reverse(),n.reverse(),s.reverse())}function d(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function uA(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Cm,i.set(n,[a])):s>=r.length?(a=new Cm,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function dA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ke};break;case"SpotLight":t={position:new P,direction:new P,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function fA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let pA=0;function mA(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function gA(i){const e=new dA,t=fA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new nt,a=new nt;function o(c){let u=0,d=0,h=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,_=0,b=0,y=0,w=0,M=0,C=0;c.sort(mA);for(let T=0,R=c.length;T<R;T++){const I=c[T],z=I.color,L=I.intensity,F=I.distance;let k=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ws?k=I.shadow.map.texture:k=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=z.r*L,d+=z.g*L,h+=z.b*L;else if(I.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(I.sh.coefficients[U],L);C++}else if(I.isDirectionalLight){const U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const O=I.shadow,B=t.get(I);B.shadowIntensity=O.intensity,B.shadowBias=O.bias,B.shadowNormalBias=O.normalBias,B.shadowRadius=O.radius,B.shadowMapSize=O.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=I.shadow.matrix,_++}n.directional[f]=U,f++}else if(I.isSpotLight){const U=e.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(z).multiplyScalar(L),U.distance=F,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,n.spot[v]=U;const O=I.shadow;if(I.map&&(n.spotLightMap[w]=I.map,w++,O.updateMatrices(I),I.castShadow&&M++),n.spotLightMatrix[v]=O.matrix,I.castShadow){const B=t.get(I);B.shadowIntensity=O.intensity,B.shadowBias=O.bias,B.shadowNormalBias=O.normalBias,B.shadowRadius=O.radius,B.shadowMapSize=O.mapSize,n.spotShadow[v]=B,n.spotShadowMap[v]=k,y++}v++}else if(I.isRectAreaLight){const U=e.get(I);U.color.copy(z).multiplyScalar(L),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=U,g++}else if(I.isPointLight){const U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),U.distance=I.distance,U.decay=I.decay,I.castShadow){const O=I.shadow,B=t.get(I);B.shadowIntensity=O.intensity,B.shadowBias=O.bias,B.shadowNormalBias=O.normalBias,B.shadowRadius=O.radius,B.shadowMapSize=O.mapSize,B.shadowCameraNear=O.camera.near,B.shadowCameraFar=O.camera.far,n.pointShadow[p]=B,n.pointShadowMap[p]=k,n.pointShadowMatrix[p]=I.shadow.matrix,b++}n.point[p]=U,p++}else if(I.isHemisphereLight){const U=e.get(I);U.skyColor.copy(I.color).multiplyScalar(L),U.groundColor.copy(I.groundColor).multiplyScalar(L),n.hemi[m]=U,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const x=n.hash;(x.directionalLength!==f||x.pointLength!==p||x.spotLength!==v||x.rectAreaLength!==g||x.hemiLength!==m||x.numDirectionalShadows!==_||x.numPointShadows!==b||x.numSpotShadows!==y||x.numSpotMaps!==w||x.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+w-M,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=C,x.directionalLength=f,x.pointLength=p,x.spotLength=v,x.rectAreaLength=g,x.hemiLength=m,x.numDirectionalShadows=_,x.numPointShadows=b,x.numSpotShadows=y,x.numSpotMaps=w,x.numLightProbes=C,n.version=pA++)}function l(c,u){let d=0,h=0,f=0,p=0,v=0;const g=u.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){const b=c[m];if(b.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),d++}else if(b.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(b.isRectAreaLight){const y=n.rectArea[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(b.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),p++}else if(b.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),h++}else if(b.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:n}}function Rm(i){const e=new gA(i),t=[],n=[],s=[];function r(h){d.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function vA(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Rm(i),e.set(s,[o])):r>=a.length?(o=new Rm(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const _A=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yA=`uniform sampler2D shadow_pass;
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
}`,xA=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],bA=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Im=new nt,Ta=new P,Su=new P;function SA(i,e,t){let n=new ar;const s=new re,r=new re,a=new Ut,o=new Kd,l=new Jd,c={},u=t.maxTextureSize,d={[Qi]:Fn,[Fn]:Qi,[Ii]:Ii},h=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:_A,fragmentShader:yA}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const p=new dt;p.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new sn(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pa;let m=this.type;this.render=function(M,C,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===Nl&&(we("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Pa);const T=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Li),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const L=m!==this.type;L&&C.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(k=>k.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,k=M.length;F<k;F++){const U=M[F],O=U.shadow;if(O===void 0){we("WebGLShadowMap:",U,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const B=O.getFrameExtents();s.multiply(B),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/B.x),s.x=r.x*B.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/B.y),s.y=r.y*B.y,O.mapSize.y=r.y));const H=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=H,O.map===null||L===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Vr){if(U.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new ei(s.x,s.y,{format:ws,type:Ni,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),O.map.texture.name=U.name+".shadowMap",O.map.depthTexture=new or(s.x,s.y,Nn),O.map.depthTexture.name=U.name+".shadowMapDepth",O.map.depthTexture.format=Oi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=nn,O.map.depthTexture.magFilter=nn}else U.isPointLight?(O.map=new cf(s.x),O.map.depthTexture=new n0(s.x,ui)):(O.map=new ei(s.x,s.y),O.map.depthTexture=new or(s.x,s.y,ui)),O.map.depthTexture.name=U.name+".shadowMap",O.map.depthTexture.format=Oi,this.type===Pa?(O.map.depthTexture.compareFunction=H?Yc:$c,O.map.depthTexture.minFilter=Ht,O.map.depthTexture.magFilter=Ht):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=nn,O.map.depthTexture.magFilter=nn);O.camera.updateProjectionMatrix()}const ne=O.map.isWebGLCubeRenderTarget?6:1;for(let j=0;j<ne;j++){if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,j),i.clear();else{j===0&&(i.setRenderTarget(O.map),i.clear());const te=O.getViewport(j);a.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),z.viewport(a)}if(U.isPointLight){const te=O.camera,Re=O.matrix,ct=U.distance||te.far;ct!==te.far&&(te.far=ct,te.updateProjectionMatrix()),Ta.setFromMatrixPosition(U.matrixWorld),te.position.copy(Ta),Su.copy(te.position),Su.add(xA[j]),te.up.copy(bA[j]),te.lookAt(Su),te.updateMatrixWorld(),Re.makeTranslation(-Ta.x,-Ta.y,-Ta.z),Im.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Im,te.coordinateSystem,te.reversedDepth)}else O.updateMatrices(U);n=O.getFrustum(),y(C,x,O.camera,U,this.type)}O.isPointLightShadow!==!0&&this.type===Vr&&_(O,x),O.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(T,R,I)};function _(M,C){const x=e.update(v);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ei(s.x,s.y,{format:ws,type:Ni})),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(C,null,x,h,v,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(C,null,x,f,v,null)}function b(M,C,x,T){let R=null;const I=x.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(I!==void 0)R=I;else if(R=x.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const z=R.uuid,L=C.uuid;let F=c[z];F===void 0&&(F={},c[z]=F);let k=F[L];k===void 0&&(k=R.clone(),F[L]=k,C.addEventListener("dispose",w)),R=k}if(R.visible=C.visible,R.wireframe=C.wireframe,T===Vr?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:d[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const z=i.properties.get(R);z.light=x}return R}function y(M,C,x,T,R){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===Vr)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,M.matrixWorld);const L=e.update(M),F=M.material;if(Array.isArray(F)){const k=L.groups;for(let U=0,O=k.length;U<O;U++){const B=k[U],H=F[B.materialIndex];if(H&&H.visible){const ne=b(M,H,T,R);M.onBeforeShadow(i,M,C,x,L,ne,B),i.renderBufferDirect(x,null,L,ne,M,B),M.onAfterShadow(i,M,C,x,L,ne,B)}}}else if(F.visible){const k=b(M,F,T,R);M.onBeforeShadow(i,M,C,x,L,k,null),i.renderBufferDirect(x,null,L,k,M,null),M.onAfterShadow(i,M,C,x,L,k,null)}}const z=M.children;for(let L=0,F=z.length;L<F;L++)y(z[L],C,x,T,R)}function w(M){M.target.removeEventListener("dispose",w);for(const x in c){const T=c[x],R=M.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function MA(i,e){function t(){let G=!1;const Se=new Ut;let ee=null;const Ee=new Ut(0,0,0,0);return{setMask:function(Ie){ee!==Ie&&!G&&(i.colorMask(Ie,Ie,Ie,Ie),ee=Ie)},setLocked:function(Ie){G=Ie},setClear:function(Ie,ce,qe,He,Wt){Wt===!0&&(Ie*=He,ce*=He,qe*=He),Se.set(Ie,ce,qe,He),Ee.equals(Se)===!1&&(i.clearColor(Ie,ce,qe,He),Ee.copy(Se))},reset:function(){G=!1,ee=null,Ee.set(-1,0,0,0)}}}function n(){let G=!1,Se=!1,ee=null,Ee=null,Ie=null;return{setReversed:function(ce){if(Se!==ce){const qe=e.get("EXT_clip_control");ce?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Se=ce;const He=Ie;Ie=null,this.setClear(He)}},getReversed:function(){return Se},setTest:function(ce){ce?he(i.DEPTH_TEST):We(i.DEPTH_TEST)},setMask:function(ce){ee!==ce&&!G&&(i.depthMask(ce),ee=ce)},setFunc:function(ce){if(Se&&(ce=Gx[ce]),Ee!==ce){switch(ce){case kl:i.depthFunc(i.NEVER);break;case Bl:i.depthFunc(i.ALWAYS);break;case zl:i.depthFunc(i.LESS);break;case ir:i.depthFunc(i.LEQUAL);break;case Vl:i.depthFunc(i.EQUAL);break;case Gl:i.depthFunc(i.GEQUAL);break;case Hl:i.depthFunc(i.GREATER);break;case Wl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=ce}},setLocked:function(ce){G=ce},setClear:function(ce){Ie!==ce&&(Ie=ce,Se&&(ce=1-ce),i.clearDepth(ce))},reset:function(){G=!1,ee=null,Ee=null,Ie=null,Se=!1}}}function s(){let G=!1,Se=null,ee=null,Ee=null,Ie=null,ce=null,qe=null,He=null,Wt=null;return{setTest:function($e){G||($e?he(i.STENCIL_TEST):We(i.STENCIL_TEST))},setMask:function($e){Se!==$e&&!G&&(i.stencilMask($e),Se=$e)},setFunc:function($e,ht,ft){(ee!==$e||Ee!==ht||Ie!==ft)&&(i.stencilFunc($e,ht,ft),ee=$e,Ee=ht,Ie=ft)},setOp:function($e,ht,ft){(ce!==$e||qe!==ht||He!==ft)&&(i.stencilOp($e,ht,ft),ce=$e,qe=ht,He=ft)},setLocked:function($e){G=$e},setClear:function($e){Wt!==$e&&(i.clearStencil($e),Wt=$e)},reset:function(){G=!1,Se=null,ee=null,Ee=null,Ie=null,ce=null,qe=null,He=null,Wt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,p=[],v=null,g=!1,m=null,_=null,b=null,y=null,w=null,M=null,C=null,x=new ke(0,0,0),T=0,R=!1,I=null,z=null,L=null,F=null,k=null;const U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,B=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=B>=1):H.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=B>=2);let ne=null,j={};const te=i.getParameter(i.SCISSOR_BOX),Re=i.getParameter(i.VIEWPORT),ct=new Ut().fromArray(te),at=new Ut().fromArray(Re);function Q(G,Se,ee,Ee){const Ie=new Uint8Array(4),ce=i.createTexture();i.bindTexture(G,ce),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<ee;qe++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(Se+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return ce}const ge={};ge[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(i.DEPTH_TEST),a.setFunc(ir),_e(!1),Me(Du),he(i.CULL_FACE),ae(Li);function he(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function We(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function Ke(G,Se){return h[G]!==Se?(i.bindFramebuffer(G,Se),h[G]=Se,G===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Se),G===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function le(G,Se){let ee=p,Ee=!1;if(G){ee=f.get(Se),ee===void 0&&(ee=[],f.set(Se,ee));const Ie=G.textures;if(ee.length!==Ie.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,qe=Ie.length;ce<qe;ce++)ee[ce]=i.COLOR_ATTACHMENT0+ce;ee.length=Ie.length,Ee=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(ee)}function Te(G){return v!==G?(i.useProgram(G),v=G,!0):!1}const Ne={[vs]:i.FUNC_ADD,[hg]:i.FUNC_SUBTRACT,[ug]:i.FUNC_REVERSE_SUBTRACT};Ne[dg]=i.MIN,Ne[fg]=i.MAX;const se={[pg]:i.ZERO,[mg]:i.ONE,[gg]:i.SRC_COLOR,[Ol]:i.SRC_ALPHA,[Sg]:i.SRC_ALPHA_SATURATE,[xg]:i.DST_COLOR,[_g]:i.DST_ALPHA,[vg]:i.ONE_MINUS_SRC_COLOR,[Fl]:i.ONE_MINUS_SRC_ALPHA,[bg]:i.ONE_MINUS_DST_COLOR,[yg]:i.ONE_MINUS_DST_ALPHA,[Mg]:i.CONSTANT_COLOR,[wg]:i.ONE_MINUS_CONSTANT_COLOR,[Tg]:i.CONSTANT_ALPHA,[Eg]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(G,Se,ee,Ee,Ie,ce,qe,He,Wt,$e){if(G===Li){g===!0&&(We(i.BLEND),g=!1);return}if(g===!1&&(he(i.BLEND),g=!0),G!==cg){if(G!==m||$e!==R){if((_!==vs||w!==vs)&&(i.blendEquation(i.FUNC_ADD),_=vs,w=vs),$e)switch(G){case er:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lu:i.blendFunc(i.ONE,i.ONE);break;case Uu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ze("WebGLState: Invalid blending: ",G);break}else switch(G){case er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Uu:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nu:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",G);break}b=null,y=null,M=null,C=null,x.set(0,0,0),T=0,m=G,R=$e}return}Ie=Ie||Se,ce=ce||ee,qe=qe||Ee,(Se!==_||Ie!==w)&&(i.blendEquationSeparate(Ne[Se],Ne[Ie]),_=Se,w=Ie),(ee!==b||Ee!==y||ce!==M||qe!==C)&&(i.blendFuncSeparate(se[ee],se[Ee],se[ce],se[qe]),b=ee,y=Ee,M=ce,C=qe),(He.equals(x)===!1||Wt!==T)&&(i.blendColor(He.r,He.g,He.b,Wt),x.copy(He),T=Wt),m=G,R=!1}function oe(G,Se){G.side===Ii?We(i.CULL_FACE):he(i.CULL_FACE);let ee=G.side===Fn;Se&&(ee=!ee),_e(ee),G.blending===er&&G.transparent===!1?ae(Li):ae(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);const Ee=G.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),be(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):We(i.SAMPLE_ALPHA_TO_COVERAGE)}function _e(G){I!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),I=G)}function Me(G){G!==og?(he(i.CULL_FACE),G!==z&&(G===Du?i.cullFace(i.BACK):G===lg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):We(i.CULL_FACE),z=G}function Qe(G){G!==L&&(O&&i.lineWidth(G),L=G)}function be(G,Se,ee){G?(he(i.POLYGON_OFFSET_FILL),(F!==Se||k!==ee)&&(F=Se,k=ee,a.getReversed()&&(Se=-Se),i.polygonOffset(Se,ee))):We(i.POLYGON_OFFSET_FILL)}function ye(G){G?he(i.SCISSOR_TEST):We(i.SCISSOR_TEST)}function Pe(G){G===void 0&&(G=i.TEXTURE0+U-1),ne!==G&&(i.activeTexture(G),ne=G)}function V(G,Se,ee){ee===void 0&&(ne===null?ee=i.TEXTURE0+U-1:ee=ne);let Ee=j[ee];Ee===void 0&&(Ee={type:void 0,texture:void 0},j[ee]=Ee),(Ee.type!==G||Ee.texture!==Se)&&(ne!==ee&&(i.activeTexture(ee),ne=ee),i.bindTexture(G,Se||ge[G]),Ee.type=G,Ee.texture=Se)}function At(){const G=j[ne];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function gt(){try{i.compressedTexImage2D(...arguments)}catch(G){Ze("WebGLState:",G)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(G){Ze("WebGLState:",G)}}function S(){try{i.texSubImage2D(...arguments)}catch(G){Ze("WebGLState:",G)}}function q(){try{i.texSubImage3D(...arguments)}catch(G){Ze("WebGLState:",G)}}function N(){try{i.compressedTexSubImage2D(...arguments)}catch(G){Ze("WebGLState:",G)}}function W(){try{i.compressedTexSubImage3D(...arguments)}catch(G){Ze("WebGLState:",G)}}function ie(){try{i.texStorage2D(...arguments)}catch(G){Ze("WebGLState:",G)}}function de(){try{i.texStorage3D(...arguments)}catch(G){Ze("WebGLState:",G)}}function $(){try{i.texImage2D(...arguments)}catch(G){Ze("WebGLState:",G)}}function J(){try{i.texImage3D(...arguments)}catch(G){Ze("WebGLState:",G)}}function ve(G){return d[G]!==void 0?d[G]:i.getParameter(G)}function Ge(G,Se){d[G]!==Se&&(i.pixelStorei(G,Se),d[G]=Se)}function pe(G){ct.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),ct.copy(G))}function fe(G){at.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),at.copy(G))}function Fe(G,Se){let ee=c.get(Se);ee===void 0&&(ee=new WeakMap,c.set(Se,ee));let Ee=ee.get(G);Ee===void 0&&(Ee=i.getUniformBlockIndex(Se,G.name),ee.set(G,Ee))}function Oe(G,Se){const Ee=c.get(Se).get(G);l.get(Se)!==Ee&&(i.uniformBlockBinding(Se,Ee,G.__bindingPointIndex),l.set(Se,Ee))}function st(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,j={},h={},f=new WeakMap,p=[],v=null,g=!1,m=null,_=null,b=null,y=null,w=null,M=null,C=null,x=new ke(0,0,0),T=0,R=!1,I=null,z=null,L=null,F=null,k=null,ct.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:he,disable:We,bindFramebuffer:Ke,drawBuffers:le,useProgram:Te,setBlending:ae,setMaterial:oe,setFlipSided:_e,setCullFace:Me,setLineWidth:Qe,setPolygonOffset:be,setScissorTest:ye,activeTexture:Pe,bindTexture:V,unbindTexture:At,compressedTexImage2D:gt,compressedTexImage3D:D,texImage2D:$,texImage3D:J,pixelStorei:Ge,getParameter:ve,updateUBOMapping:Fe,uniformBlockBinding:Oe,texStorage2D:ie,texStorage3D:de,texSubImage2D:S,texSubImage3D:q,compressedTexSubImage2D:N,compressedTexSubImage3D:W,scissor:pe,viewport:fe,reset:st}}function wA(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(D,S){return p?new OffscreenCanvas(D,S):eo("canvas")}function g(D,S,q){let N=1;const W=gt(D);if((W.width>q||W.height>q)&&(N=q/Math.max(W.width,W.height)),N<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ie=Math.floor(N*W.width),de=Math.floor(N*W.height);h===void 0&&(h=v(ie,de));const $=S?v(ie,de):h;return $.width=ie,$.height=de,$.getContext("2d").drawImage(D,0,0,ie,de),we("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+ie+"x"+de+")."),$}else return"data"in D&&we("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),D;return D}function m(D){return D.generateMipmaps}function _(D){i.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(D,S,q,N,W,ie=!1){if(D!==null){if(i[D]!==void 0)return i[D];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let de;N&&(de=e.get("EXT_texture_norm16"),de||we("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=S;if(S===i.RED&&(q===i.FLOAT&&($=i.R32F),q===i.HALF_FLOAT&&($=i.R16F),q===i.UNSIGNED_BYTE&&($=i.R8),q===i.UNSIGNED_SHORT&&de&&($=de.R16_EXT),q===i.SHORT&&de&&($=de.R16_SNORM_EXT)),S===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&($=i.R8UI),q===i.UNSIGNED_SHORT&&($=i.R16UI),q===i.UNSIGNED_INT&&($=i.R32UI),q===i.BYTE&&($=i.R8I),q===i.SHORT&&($=i.R16I),q===i.INT&&($=i.R32I)),S===i.RG&&(q===i.FLOAT&&($=i.RG32F),q===i.HALF_FLOAT&&($=i.RG16F),q===i.UNSIGNED_BYTE&&($=i.RG8),q===i.UNSIGNED_SHORT&&de&&($=de.RG16_EXT),q===i.SHORT&&de&&($=de.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&($=i.RG8UI),q===i.UNSIGNED_SHORT&&($=i.RG16UI),q===i.UNSIGNED_INT&&($=i.RG32UI),q===i.BYTE&&($=i.RG8I),q===i.SHORT&&($=i.RG16I),q===i.INT&&($=i.RG32I)),S===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&($=i.RGB8UI),q===i.UNSIGNED_SHORT&&($=i.RGB16UI),q===i.UNSIGNED_INT&&($=i.RGB32UI),q===i.BYTE&&($=i.RGB8I),q===i.SHORT&&($=i.RGB16I),q===i.INT&&($=i.RGB32I)),S===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&($=i.RGBA8UI),q===i.UNSIGNED_SHORT&&($=i.RGBA16UI),q===i.UNSIGNED_INT&&($=i.RGBA32UI),q===i.BYTE&&($=i.RGBA8I),q===i.SHORT&&($=i.RGBA16I),q===i.INT&&($=i.RGBA32I)),S===i.RGB&&(q===i.UNSIGNED_SHORT&&de&&($=de.RGB16_EXT),q===i.SHORT&&de&&($=de.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),S===i.RGBA){const J=ie?ja:_t.getTransfer(W);q===i.FLOAT&&($=i.RGBA32F),q===i.HALF_FLOAT&&($=i.RGBA16F),q===i.UNSIGNED_BYTE&&($=J===Dt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&de&&($=de.RGBA16_EXT),q===i.SHORT&&de&&($=de.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function w(D,S){let q;return D?S===null||S===ui||S===Qr?q=i.DEPTH24_STENCIL8:S===Nn?q=i.DEPTH32F_STENCIL8:S===jr&&(q=i.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ui||S===Qr?q=i.DEPTH_COMPONENT24:S===Nn?q=i.DEPTH_COMPONENT32F:S===jr&&(q=i.DEPTH_COMPONENT16),q}function M(D,S){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==nn&&D.minFilter!==Ht?Math.log2(Math.max(S.width,S.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?S.mipmaps.length:1}function C(D){const S=D.target;S.removeEventListener("dispose",C),T(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&d.delete(S)}function x(D){const S=D.target;S.removeEventListener("dispose",x),I(S)}function T(D){const S=n.get(D);if(S.__webglInit===void 0)return;const q=D.source,N=f.get(q);if(N){const W=N[S.__cacheKey];W.usedTimes--,W.usedTimes===0&&R(D),Object.keys(N).length===0&&f.delete(q)}n.remove(D)}function R(D){const S=n.get(D);i.deleteTexture(S.__webglTexture);const q=D.source,N=f.get(q);delete N[S.__cacheKey],a.memory.textures--}function I(D){const S=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(S.__webglFramebuffer[N]))for(let W=0;W<S.__webglFramebuffer[N].length;W++)i.deleteFramebuffer(S.__webglFramebuffer[N][W]);else i.deleteFramebuffer(S.__webglFramebuffer[N]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[N])}else{if(Array.isArray(S.__webglFramebuffer))for(let N=0;N<S.__webglFramebuffer.length;N++)i.deleteFramebuffer(S.__webglFramebuffer[N]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let N=0;N<S.__webglColorRenderbuffer.length;N++)S.__webglColorRenderbuffer[N]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[N]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const q=D.textures;for(let N=0,W=q.length;N<W;N++){const ie=n.get(q[N]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(q[N])}n.remove(D)}let z=0;function L(){z=0}function F(){return z}function k(D){z=D}function U(){const D=z;return D>=s.maxTextures&&we("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),z+=1,D}function O(D){const S=[];return S.push(D.wrapS),S.push(D.wrapT),S.push(D.wrapR||0),S.push(D.magFilter),S.push(D.minFilter),S.push(D.anisotropy),S.push(D.internalFormat),S.push(D.format),S.push(D.type),S.push(D.generateMipmaps),S.push(D.premultiplyAlpha),S.push(D.flipY),S.push(D.unpackAlignment),S.push(D.colorSpace),S.join()}function B(D,S){const q=n.get(D);if(D.isVideoTexture&&V(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&q.__version!==D.version){const N=D.image;if(N===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{We(q,D,S);return}}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+S)}function H(D,S){const q=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){We(q,D,S);return}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+S)}function ne(D,S){const q=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){We(q,D,S);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+S)}function j(D,S){const q=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&q.__version!==D.version){Ke(q,D,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+S)}const te={[Xa]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[qa]:i.MIRRORED_REPEAT},Re={[nn]:i.NEAREST,[wd]:i.NEAREST_MIPMAP_NEAREST,[Gr]:i.NEAREST_MIPMAP_LINEAR,[Ht]:i.LINEAR,[Ua]:i.LINEAR_MIPMAP_NEAREST,[Pi]:i.LINEAR_MIPMAP_LINEAR},ct={[Ng]:i.NEVER,[zg]:i.ALWAYS,[Og]:i.LESS,[$c]:i.LEQUAL,[Fg]:i.EQUAL,[Yc]:i.GEQUAL,[kg]:i.GREATER,[Bg]:i.NOTEQUAL};function at(D,S){if(S.type===Nn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ht||S.magFilter===Ua||S.magFilter===Gr||S.magFilter===Pi||S.minFilter===Ht||S.minFilter===Ua||S.minFilter===Gr||S.minFilter===Pi)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,te[S.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,te[S.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,te[S.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,Re[S.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,Re[S.minFilter]),S.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,ct[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===nn||S.minFilter!==Gr&&S.minFilter!==Pi||S.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Q(D,S){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,S.addEventListener("dispose",C));const N=S.source;let W=f.get(N);W===void 0&&(W={},f.set(N,W));const ie=O(S);if(ie!==D.__cacheKey){W[ie]===void 0&&(W[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),W[ie].usedTimes++;const de=W[D.__cacheKey];de!==void 0&&(W[D.__cacheKey].usedTimes--,de.usedTimes===0&&R(S)),D.__cacheKey=ie,D.__webglTexture=W[ie].texture}return q}function ge(D,S,q){return Math.floor(Math.floor(D/q)/S)}function he(D,S,q,N){const ie=D.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,q,N,S.data);else{ie.sort((Ge,pe)=>Ge.start-pe.start);let de=0;for(let Ge=1;Ge<ie.length;Ge++){const pe=ie[de],fe=ie[Ge],Fe=pe.start+pe.count,Oe=ge(fe.start,S.width,4),st=ge(pe.start,S.width,4);fe.start<=Fe+1&&Oe===st&&ge(fe.start+fe.count-1,S.width,4)===Oe?pe.count=Math.max(pe.count,fe.start+fe.count-pe.start):(++de,ie[de]=fe)}ie.length=de+1;const $=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),ve=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let Ge=0,pe=ie.length;Ge<pe;Ge++){const fe=ie[Ge],Fe=Math.floor(fe.start/4),Oe=Math.ceil(fe.count/4),st=Fe%S.width,G=Math.floor(Fe/S.width),Se=Oe,ee=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,st),t.pixelStorei(i.UNPACK_SKIP_ROWS,G),t.texSubImage2D(i.TEXTURE_2D,0,st,G,Se,ee,q,N,S.data)}D.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function We(D,S,q){let N=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(N=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(N=i.TEXTURE_3D);const W=Q(D,S),ie=S.source;t.bindTexture(N,D.__webglTexture,i.TEXTURE0+q);const de=n.get(ie);if(ie.version!==de.__version||W===!0){if(t.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const ee=_t.getPrimaries(_t.workingColorSpace),Ee=S.colorSpace===Zi?null:_t.getPrimaries(S.colorSpace),Ie=S.colorSpace===Zi||ee===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let J=g(S.image,!1,s.maxTextureSize);J=At(S,J);const ve=r.convert(S.format,S.colorSpace),Ge=r.convert(S.type);let pe=y(S.internalFormat,ve,Ge,S.normalized,S.colorSpace,S.isVideoTexture);at(N,S);let fe;const Fe=S.mipmaps,Oe=S.isVideoTexture!==!0,st=de.__version===void 0||W===!0,G=ie.dataReady,Se=M(S,J);if(S.isDepthTexture)pe=w(S.format===_s,S.type),st&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,pe,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,pe,J.width,J.height,0,ve,Ge,null));else if(S.isDataTexture)if(Fe.length>0){Oe&&st&&t.texStorage2D(i.TEXTURE_2D,Se,pe,Fe[0].width,Fe[0].height);for(let ee=0,Ee=Fe.length;ee<Ee;ee++)fe=Fe[ee],Oe?G&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,fe.width,fe.height,ve,Ge,fe.data):t.texImage2D(i.TEXTURE_2D,ee,pe,fe.width,fe.height,0,ve,Ge,fe.data);S.generateMipmaps=!1}else Oe?(st&&t.texStorage2D(i.TEXTURE_2D,Se,pe,J.width,J.height),G&&he(S,J,ve,Ge)):t.texImage2D(i.TEXTURE_2D,0,pe,J.width,J.height,0,ve,Ge,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Oe&&st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,pe,Fe[0].width,Fe[0].height,J.depth);for(let ee=0,Ee=Fe.length;ee<Ee;ee++)if(fe=Fe[ee],S.format!==On)if(ve!==null)if(Oe){if(G)if(S.layerUpdates.size>0){const Ie=Yu(fe.width,fe.height,S.format,S.type);for(const ce of S.layerUpdates){const qe=fe.data.subarray(ce*Ie/fe.data.BYTES_PER_ELEMENT,(ce+1)*Ie/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,ce,fe.width,fe.height,1,ve,qe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,fe.width,fe.height,J.depth,ve,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,pe,fe.width,fe.height,J.depth,0,fe.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,fe.width,fe.height,J.depth,ve,Ge,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,pe,fe.width,fe.height,J.depth,0,ve,Ge,fe.data)}else{Oe&&st&&t.texStorage2D(i.TEXTURE_2D,Se,pe,Fe[0].width,Fe[0].height);for(let ee=0,Ee=Fe.length;ee<Ee;ee++)fe=Fe[ee],S.format!==On?ve!==null?Oe?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,fe.width,fe.height,ve,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,pe,fe.width,fe.height,0,fe.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?G&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,fe.width,fe.height,ve,Ge,fe.data):t.texImage2D(i.TEXTURE_2D,ee,pe,fe.width,fe.height,0,ve,Ge,fe.data)}else if(S.isDataArrayTexture)if(Oe){if(st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,pe,J.width,J.height,J.depth),G)if(S.layerUpdates.size>0){const ee=Yu(J.width,J.height,S.format,S.type);for(const Ee of S.layerUpdates){const Ie=J.data.subarray(Ee*ee/J.data.BYTES_PER_ELEMENT,(Ee+1)*ee/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ee,J.width,J.height,1,ve,Ge,Ie)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ve,Ge,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,J.width,J.height,J.depth,0,ve,Ge,J.data);else if(S.isData3DTexture)Oe?(st&&t.texStorage3D(i.TEXTURE_3D,Se,pe,J.width,J.height,J.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ve,Ge,J.data)):t.texImage3D(i.TEXTURE_3D,0,pe,J.width,J.height,J.depth,0,ve,Ge,J.data);else if(S.isFramebufferTexture){if(st)if(Oe)t.texStorage2D(i.TEXTURE_2D,Se,pe,J.width,J.height);else{let ee=J.width,Ee=J.height;for(let Ie=0;Ie<Se;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,pe,ee,Ee,0,ve,Ge,null),ee>>=1,Ee>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){const ee=i.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),J.parentNode!==ee){ee.appendChild(J),d.add(S),ee.onpaint=Ee=>{const Ie=Ee.changedElements;for(const ce of d)Ie.includes(ce.image)&&(ce.needsUpdate=!0)},ee.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{const Ie=i.RGBA,ce=i.RGBA,qe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ie,ce,qe,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(Oe&&st){const ee=gt(Fe[0]);t.texStorage2D(i.TEXTURE_2D,Se,pe,ee.width,ee.height)}for(let ee=0,Ee=Fe.length;ee<Ee;ee++)fe=Fe[ee],Oe?G&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ve,Ge,fe):t.texImage2D(i.TEXTURE_2D,ee,pe,ve,Ge,fe);S.generateMipmaps=!1}else if(Oe){if(st){const ee=gt(J);t.texStorage2D(i.TEXTURE_2D,Se,pe,ee.width,ee.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Ge,J)}else t.texImage2D(i.TEXTURE_2D,0,pe,ve,Ge,J);m(S)&&_(N),de.__version=ie.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function Ke(D,S,q){if(S.image.length!==6)return;const N=Q(D,S),W=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+q);const ie=n.get(W);if(W.version!==ie.__version||N===!0){t.activeTexture(i.TEXTURE0+q);const de=_t.getPrimaries(_t.workingColorSpace),$=S.colorSpace===Zi?null:_t.getPrimaries(S.colorSpace),J=S.colorSpace===Zi||de===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const ve=S.isCompressedTexture||S.image[0].isCompressedTexture,Ge=S.image[0]&&S.image[0].isDataTexture,pe=[];for(let ce=0;ce<6;ce++)!ve&&!Ge?pe[ce]=g(S.image[ce],!0,s.maxCubemapSize):pe[ce]=Ge?S.image[ce].image:S.image[ce],pe[ce]=At(S,pe[ce]);const fe=pe[0],Fe=r.convert(S.format,S.colorSpace),Oe=r.convert(S.type),st=y(S.internalFormat,Fe,Oe,S.normalized,S.colorSpace),G=S.isVideoTexture!==!0,Se=ie.__version===void 0||N===!0,ee=W.dataReady;let Ee=M(S,fe);at(i.TEXTURE_CUBE_MAP,S);let Ie;if(ve){G&&Se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,st,fe.width,fe.height);for(let ce=0;ce<6;ce++){Ie=pe[ce].mipmaps;for(let qe=0;qe<Ie.length;qe++){const He=Ie[qe];S.format!==On?Fe!==null?G?ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,qe,0,0,He.width,He.height,Fe,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,qe,st,He.width,He.height,0,He.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,qe,0,0,He.width,He.height,Fe,Oe,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,qe,st,He.width,He.height,0,Fe,Oe,He.data)}}}else{if(Ie=S.mipmaps,G&&Se){Ie.length>0&&Ee++;const ce=gt(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,st,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(Ge){G?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,pe[ce].width,pe[ce].height,Fe,Oe,pe[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,st,pe[ce].width,pe[ce].height,0,Fe,Oe,pe[ce].data);for(let qe=0;qe<Ie.length;qe++){const Wt=Ie[qe].image[ce].image;G?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,qe+1,0,0,Wt.width,Wt.height,Fe,Oe,Wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,qe+1,st,Wt.width,Wt.height,0,Fe,Oe,Wt.data)}}else{G?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Fe,Oe,pe[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,st,Fe,Oe,pe[ce]);for(let qe=0;qe<Ie.length;qe++){const He=Ie[qe];G?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,qe+1,0,0,Fe,Oe,He.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,qe+1,st,Fe,Oe,He.image[ce])}}}m(S)&&_(i.TEXTURE_CUBE_MAP),ie.__version=W.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function le(D,S,q,N,W,ie){const de=r.convert(q.format,q.colorSpace),$=r.convert(q.type),J=y(q.internalFormat,de,$,q.normalized,q.colorSpace),ve=n.get(S),Ge=n.get(q);if(Ge.__renderTarget=S,!ve.__hasExternalTextures){const pe=Math.max(1,S.width>>ie),fe=Math.max(1,S.height>>ie);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?t.texImage3D(W,ie,J,pe,fe,S.depth,0,de,$,null):t.texImage2D(W,ie,J,pe,fe,0,de,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),Pe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,N,W,Ge.__webglTexture,0,ye(S)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,N,W,Ge.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(D,S,q){if(i.bindRenderbuffer(i.RENDERBUFFER,D),S.depthBuffer){const N=S.depthTexture,W=N&&N.isDepthTexture?N.type:null,ie=w(S.stencilBuffer,W),de=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Pe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye(S),ie,S.width,S.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye(S),ie,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ie,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,D)}else{const N=S.textures;for(let W=0;W<N.length;W++){const ie=N[W],de=r.convert(ie.format,ie.colorSpace),$=r.convert(ie.type),J=y(ie.internalFormat,de,$,ie.normalized,ie.colorSpace);Pe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye(S),J,S.width,S.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye(S),J,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,J,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(D,S,q){const N=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const W=n.get(S.depthTexture);if(W.__renderTarget=S,(!W.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N){if(W.__webglInit===void 0&&(W.__webglInit=!0,S.depthTexture.addEventListener("dispose",C)),W.__webglTexture===void 0){W.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),at(i.TEXTURE_CUBE_MAP,S.depthTexture);const ve=r.convert(S.depthTexture.format),Ge=r.convert(S.depthTexture.type);let pe;S.depthTexture.format===Oi?pe=i.DEPTH_COMPONENT24:S.depthTexture.format===_s&&(pe=i.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,pe,S.width,S.height,0,ve,Ge,null)}}else B(S.depthTexture,0);const ie=W.__webglTexture,de=ye(S),$=N?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,J=S.depthTexture.format===_s?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Oi)Pe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,$,ie,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,J,$,ie,0);else if(S.depthTexture.format===_s)Pe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,$,ie,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,J,$,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(D){const S=n.get(D),q=D.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==D.depthTexture){const N=D.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),N){const W=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,N.removeEventListener("dispose",W)};N.addEventListener("dispose",W),S.__depthDisposeCallback=W}S.__boundDepthTexture=N}if(D.depthTexture&&!S.__autoAllocateDepthBuffer)if(q)for(let N=0;N<6;N++)Ne(S.__webglFramebuffer[N],D,N);else{const N=D.texture.mipmaps;N&&N.length>0?Ne(S.__webglFramebuffer[0],D,0):Ne(S.__webglFramebuffer,D,0)}else if(q){S.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[N]),S.__webglDepthbuffer[N]===void 0)S.__webglDepthbuffer[N]=i.createRenderbuffer(),Te(S.__webglDepthbuffer[N],D,!1);else{const W=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer[N];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,ie)}}else{const N=D.texture.mipmaps;if(N&&N.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Te(S.__webglDepthbuffer,D,!1);else{const W=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(D,S,q){const N=n.get(D);S!==void 0&&le(N.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&se(D)}function oe(D){const S=D.texture,q=n.get(D),N=n.get(S);D.addEventListener("dispose",x);const W=D.textures,ie=D.isWebGLCubeRenderTarget===!0,de=W.length>1;if(de||(N.__webglTexture===void 0&&(N.__webglTexture=i.createTexture()),N.__version=S.version,a.memory.textures++),ie){q.__webglFramebuffer=[];for(let $=0;$<6;$++)if(S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer[$]=[];for(let J=0;J<S.mipmaps.length;J++)q.__webglFramebuffer[$][J]=i.createFramebuffer()}else q.__webglFramebuffer[$]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer=[];for(let $=0;$<S.mipmaps.length;$++)q.__webglFramebuffer[$]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(de)for(let $=0,J=W.length;$<J;$++){const ve=n.get(W[$]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(D.samples>0&&Pe(D)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let $=0;$<W.length;$++){const J=W[$];q.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[$]);const ve=r.convert(J.format,J.colorSpace),Ge=r.convert(J.type),pe=y(J.internalFormat,ve,Ge,J.normalized,J.colorSpace,D.isXRRenderTarget===!0),fe=ye(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,pe,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,q.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture),at(i.TEXTURE_CUBE_MAP,S);for(let $=0;$<6;$++)if(S.mipmaps&&S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)le(q.__webglFramebuffer[$][J],D,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,J);else le(q.__webglFramebuffer[$],D,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);m(S)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let $=0,J=W.length;$<J;$++){const ve=W[$],Ge=n.get(ve);let pe=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(pe=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,Ge.__webglTexture),at(pe,ve),le(q.__webglFramebuffer,D,ve,i.COLOR_ATTACHMENT0+$,pe,0),m(ve)&&_(pe)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&($=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,N.__webglTexture),at($,S),S.mipmaps&&S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)le(q.__webglFramebuffer[J],D,S,i.COLOR_ATTACHMENT0,$,J);else le(q.__webglFramebuffer,D,S,i.COLOR_ATTACHMENT0,$,0);m(S)&&_($),t.unbindTexture()}D.depthBuffer&&se(D)}function _e(D){const S=D.textures;for(let q=0,N=S.length;q<N;q++){const W=S[q];if(m(W)){const ie=b(D),de=n.get(W).__webglTexture;t.bindTexture(ie,de),_(ie),t.unbindTexture()}}}const Me=[],Qe=[];function be(D){if(D.samples>0){if(Pe(D)===!1){const S=D.textures,q=D.width,N=D.height;let W=i.COLOR_BUFFER_BIT;const ie=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(D),$=S.length>1;if($)for(let ve=0;ve<S.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const J=D.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[ve]);const Ge=n.get(S[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ge,0)}i.blitFramebuffer(0,0,q,N,0,0,q,N,W,i.NEAREST),l===!0&&(Me.length=0,Qe.length=0,Me.push(i.COLOR_ATTACHMENT0+ve),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Me.push(ie),Qe.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Qe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let ve=0;ve<S.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,de.__webglColorRenderbuffer[ve]);const Ge=n.get(S[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,Ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const S=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ye(D){return Math.min(s.maxSamples,D.samples)}function Pe(D){const S=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function V(D){const S=a.render.frame;u.get(D)!==S&&(u.set(D,S),D.update())}function At(D,S){const q=D.colorSpace,N=D.format,W=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==Ja&&q!==Zi&&(_t.getTransfer(q)===Dt?(N!==On||W!==Hn)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",q)),S}function gt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.getTextureUnits=F,this.setTextureUnits=k,this.setTexture2D=B,this.setTexture2DArray=H,this.setTexture3D=ne,this.setTextureCube=j,this.rebindTextures=ae,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Q0(i,e){function t(n,s=Zi){let r;const a=_t.getTransfer(s);if(n===Hn)return i.UNSIGNED_BYTE;if(n===Vc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ad)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Td)return i.BYTE;if(n===Ed)return i.SHORT;if(n===jr)return i.UNSIGNED_SHORT;if(n===zc)return i.INT;if(n===ui)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===Ni)return i.HALF_FLOAT;if(n===Rd)return i.ALPHA;if(n===Id)return i.RGB;if(n===On)return i.RGBA;if(n===Oi)return i.DEPTH_COMPONENT;if(n===_s)return i.DEPTH_STENCIL;if(n===Hc)return i.RED;if(n===bo)return i.RED_INTEGER;if(n===ws)return i.RG;if(n===Wc)return i.RG_INTEGER;if(n===Xc)return i.RGBA_INTEGER;if(n===Na||n===Oa||n===Fa||n===ka)if(a===Dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xl||n===ql||n===$l||n===Yl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$l)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zl||n===Kl||n===Jl||n===jl||n===Ql||n===$a||n===ec)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zl||n===Kl)return a===Dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Jl)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===jl)return r.COMPRESSED_R11_EAC;if(n===Ql)return r.COMPRESSED_SIGNED_R11_EAC;if(n===$a)return r.COMPRESSED_RG11_EAC;if(n===ec)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===tc||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ic)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ac)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mc||n===gc||n===vc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===mc)return a===Dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_c||n===yc||n===Ya||n===xc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_c)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const TA=`
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

}`;class AA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new zd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new di({vertexShader:TA,fragmentShader:EA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new sn(new oa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CA extends Ti{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null;const v=typeof XRWebGLBinding<"u",g=new AA,m={},_=t.getContextAttributes();let b=null,y=null;const w=[],M=[],C=new re;let x=null;const T=new mn;T.viewport=new Ut;const R=new mn;R.viewport=new Ut;const I=[T,R],z=new B0;let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ge=w[Q];return ge===void 0&&(ge=new Cl,w[Q]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(Q){let ge=w[Q];return ge===void 0&&(ge=new Cl,w[Q]=ge),ge.getGripSpace()},this.getHand=function(Q){let ge=w[Q];return ge===void 0&&(ge=new Cl,w[Q]=ge),ge.getHandSpace()};function k(Q){const ge=M.indexOf(Q.inputSource);if(ge===-1)return;const he=w[ge];he!==void 0&&(he.update(Q.inputSource,Q.frame,c||a),he.dispatchEvent({type:Q.type,data:Q.inputSource}))}function U(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",O);for(let Q=0;Q<w.length;Q++){const ge=M[Q];ge!==null&&(M[Q]=null,w[Q].disconnect(ge))}L=null,F=null,g.reset();for(const Q in m)delete m[Q];e.setRenderTarget(b),f=null,h=null,d=null,s=null,y=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",U),s.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,We=null,Ke=null;_.depth&&(Ke=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=_.stencil?_s:Oi,We=_.stencil?Qr:ui);const le={colorFormat:t.RGBA8,depthFormat:Ke,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(le),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new ei(h.textureWidth,h.textureHeight,{format:On,type:Hn,depthTexture:new or(h.textureWidth,h.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const he={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ei(f.framebufferWidth,f.framebufferHeight,{format:On,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),at.setContext(s),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(Q){for(let ge=0;ge<Q.removed.length;ge++){const he=Q.removed[ge],We=M.indexOf(he);We>=0&&(M[We]=null,w[We].disconnect(he))}for(let ge=0;ge<Q.added.length;ge++){const he=Q.added[ge];let We=M.indexOf(he);if(We===-1){for(let le=0;le<w.length;le++)if(le>=M.length){M.push(he),We=le;break}else if(M[le]===null){M[le]=he,We=le;break}if(We===-1)break}const Ke=w[We];Ke&&Ke.connect(he)}}const B=new P,H=new P;function ne(Q,ge,he){B.setFromMatrixPosition(ge.matrixWorld),H.setFromMatrixPosition(he.matrixWorld);const We=B.distanceTo(H),Ke=ge.projectionMatrix.elements,le=he.projectionMatrix.elements,Te=Ke[14]/(Ke[10]-1),Ne=Ke[14]/(Ke[10]+1),se=(Ke[9]+1)/Ke[5],ae=(Ke[9]-1)/Ke[5],oe=(Ke[8]-1)/Ke[0],_e=(le[8]+1)/le[0],Me=Te*oe,Qe=Te*_e,be=We/(-oe+_e),ye=be*-oe;if(ge.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ye),Q.translateZ(be),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ke[10]===-1)Q.projectionMatrix.copy(ge.projectionMatrix),Q.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Pe=Te+be,V=Ne+be,At=Me-ye,gt=Qe+(We-ye),D=se*Ne/V*Pe,S=ae*Ne/V*Pe;Q.projectionMatrix.makePerspective(At,gt,D,S,Pe,V),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function j(Q,ge){ge===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ge.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ge=Q.near,he=Q.far;g.texture!==null&&(g.depthNear>0&&(ge=g.depthNear),g.depthFar>0&&(he=g.depthFar)),z.near=R.near=T.near=ge,z.far=R.far=T.far=he,(L!==z.near||F!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,F=z.far),z.layers.mask=Q.layers.mask|6,T.layers.mask=z.layers.mask&-5,R.layers.mask=z.layers.mask&-3;const We=Q.parent,Ke=z.cameras;j(z,We);for(let le=0;le<Ke.length;le++)j(Ke[le],We);Ke.length===2?ne(z,T,R):z.projectionMatrix.copy(T.projectionMatrix),te(Q,z,We)};function te(Q,ge,he){he===null?Q.matrix.copy(ge.matrixWorld):(Q.matrix.copy(he.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ge.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ge.projectionMatrix),Q.projectionMatrixInverse.copy(ge.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ea*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(Q){return m[Q]};let Re=null;function ct(Q,ge){if(u=ge.getViewerPose(c||a),p=ge,u!==null){const he=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let We=!1;he.length!==z.cameras.length&&(z.cameras.length=0,We=!0);for(let Ne=0;Ne<he.length;Ne++){const se=he[Ne];let ae=null;if(f!==null)ae=f.getViewport(se);else{const _e=d.getViewSubImage(h,se);ae=_e.viewport,Ne===0&&(e.setRenderTargetTextures(y,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(y))}let oe=I[Ne];oe===void 0&&(oe=new mn,oe.layers.enable(Ne),oe.viewport=new Ut,I[Ne]=oe),oe.matrix.fromArray(se.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(se.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ae.x,ae.y,ae.width,ae.height),Ne===0&&(z.matrix.copy(oe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),We===!0&&z.cameras.push(oe)}const Ke=s.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const Ne=d.getDepthInformation(he[0]);Ne&&Ne.isValid&&Ne.texture&&g.init(Ne,s.renderState)}if(Ke&&Ke.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let Ne=0;Ne<he.length;Ne++){const se=he[Ne].camera;if(se){let ae=m[se];ae||(ae=new zd,m[se]=ae);const oe=d.getCameraImage(se);ae.sourceTexture=oe}}}}for(let he=0;he<w.length;he++){const We=M[he],Ke=w[he];We!==null&&Ke!==void 0&&Ke.update(We,ge,c||a)}Re&&Re(Q,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),p=null}const at=new $0;at.setAnimationLoop(ct),this.setAnimationLoop=function(Q){Re=Q},this.dispose=function(){}}}const RA=new nt,ev=new ut;ev.set(-1,0,0,0,1,0,0,0,1);function IA(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,m0(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,b,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,_,b):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Fn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Fn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const _=e.get(m),b=_.envMap,y=_.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(RA.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(ev),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Fn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function PA(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){const M=w.program;n.uniformBlockBinding(y,M)}function c(y,w){let M=s[y.id];M===void 0&&(g(y),M=u(y),s[y.id]=M,y.addEventListener("dispose",_));const C=w.program;n.updateUBOMapping(y,C);const x=e.render.frame;r[y.id]!==x&&(h(y),r[y.id]=x)}function u(y){const w=d();y.__bindingPointIndex=w;const M=i.createBuffer(),C=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,C,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,M),M}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const w=s[y.id],M=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let x=0,T=M.length;x<T;x++){const R=M[x];if(Array.isArray(R))for(let I=0,z=R.length;I<z;I++)f(R[I],x,I,C);else f(R,x,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,w,M,C){if(v(y,w,M,C)===!0){const x=y.__offset,T=y.value;if(Array.isArray(T)){let R=0;for(let I=0;I<T.length;I++){const z=T[I],L=m(z);p(z,y.__data,R),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(R+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function p(y,w,M){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,M)}function v(y,w,M,C){const x=y.value,T=w+"_"+M;if(C[T]===void 0)return typeof x=="number"||typeof x=="boolean"?C[T]=x:ArrayBuffer.isView(x)?C[T]=x.slice():C[T]=x.clone(),!0;{const R=C[T];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return C[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function g(y){const w=y.uniforms;let M=0;const C=16;for(let T=0,R=w.length;T<R;T++){const I=Array.isArray(w[T])?w[T]:[w[T]];for(let z=0,L=I.length;z<L;z++){const F=I[z],k=Array.isArray(F.value)?F.value:[F.value];for(let U=0,O=k.length;U<O;U++){const B=k[U],H=m(B),ne=M%C,j=ne%H.boundary,te=ne+j;M+=j,te!==0&&C-te<H.storage&&(M+=C-te),F.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=H.storage}}}const x=M%C;return x>0&&(M+=C-x),y.__size=M,y.__cache={},this}function m(y){const w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):we("WebGLRenderer: Unsupported uniform value type.",y),w}function _(y){const w=y.target;w.removeEventListener("dispose",_);const M=a.indexOf(w.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function b(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:b}}const DA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ri=null;function LA(){return Ri===null&&(Ri=new li(DA,16,16,ws,Ni),Ri.name="DFG_LUT",Ri.minFilter=Ht,Ri.magFilter=Ht,Ri.wrapS=Xn,Ri.wrapT=Xn,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}class tv{constructor(e={}){const{canvas:t=Gg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Hn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const v=f,g=new Set([Xc,Wc,bo]),m=new Set([Hn,ui,jr,Qr,Vc,Gc]),_=new Uint32Array(4),b=new Int32Array(4),y=new P;let w=null,M=null;const C=[],x=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let I=!1,z=null,L=null,F=null,k=null;this._outputColorSpace=Ln;let U=0,O=0,B=null,H=-1,ne=null;const j=new Ut,te=new Ut;let Re=null;const ct=new ke(0);let at=0,Q=t.width,ge=t.height,he=1,We=null,Ke=null;const le=new Ut(0,0,Q,ge),Te=new Ut(0,0,Q,ge);let Ne=!1;const se=new ar;let ae=!1,oe=!1;const _e=new nt,Me=new P,Qe=new Ut,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function Pe(){return B===null?he:1}let V=n;function At(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fc}`),t.addEventListener("webglcontextlost",Wt,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",ht,!1),V===null){const X="webgl2";if(V=At(X,A),V===null)throw At(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Ze("WebGLRenderer: "+A.message),A}let gt,D,S,q,N,W,ie,de,$,J,ve,Ge,pe,fe,Fe,Oe,st,G,Se,ee,Ee,Ie,ce;function qe(){gt=new UT(V),gt.init(),Ee=new Q0(V,gt),D=new ET(V,gt,e,Ee),S=new MA(V,gt),D.reversedDepthBuffer&&h&&S.buffers.depth.setReversed(!0),L=V.createFramebuffer(),F=V.createFramebuffer(),k=V.createFramebuffer(),q=new FT(V),N=new cA,W=new wA(V,gt,S,N,D,Ee,q),ie=new LT(R),de=new VM(V),Ie=new wT(V,de),$=new NT(V,de,q,Ie),J=new BT(V,$,de,Ie,q),G=new kT(V,D,W),Fe=new AT(N),ve=new lA(R,ie,gt,D,Ie,Fe),Ge=new IA(R,N),pe=new uA,fe=new vA(gt),st=new MT(R,ie,S,J,p,l),Oe=new SA(R,J,D),ce=new PA(V,q,D,S),Se=new TT(V,gt,q),ee=new OT(V,gt,q),q.programs=ve.programs,R.capabilities=D,R.extensions=gt,R.properties=N,R.renderLists=pe,R.shadowMap=Oe,R.state=S,R.info=q}qe(),v!==Hn&&(T=new VT(v,t.width,t.height,o,s,r));const He=new CA(R,V);this.xr=He,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=gt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=gt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(A){A!==void 0&&(he=A,this.setSize(Q,ge,!1))},this.getSize=function(A){return A.set(Q,ge)},this.setSize=function(A,X,K=!0){if(He.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=A,ge=X,t.width=Math.floor(A*he),t.height=Math.floor(X*he),K===!0&&(t.style.width=A+"px",t.style.height=X+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(Q*he,ge*he).floor()},this.setDrawingBufferSize=function(A,X,K){Q=A,ge=X,he=K,t.width=Math.floor(A*K),t.height=Math.floor(X*K),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(v===Hn){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){we("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(j)},this.getViewport=function(A){return A.copy(le)},this.setViewport=function(A,X,K,Y){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,X,K,Y),S.viewport(j.copy(le).multiplyScalar(he).round())},this.getScissor=function(A){return A.copy(Te)},this.setScissor=function(A,X,K,Y){A.isVector4?Te.set(A.x,A.y,A.z,A.w):Te.set(A,X,K,Y),S.scissor(te.copy(Te).multiplyScalar(he).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(A){S.setScissorTest(Ne=A)},this.setOpaqueSort=function(A){We=A},this.setTransparentSort=function(A){Ke=A},this.getClearColor=function(A){return A.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,K=!0){let Y=0;if(A){let Z=!1;if(B!==null){const Le=B.texture.format;Z=g.has(Le)}if(Z){const Le=B.texture.type,Ve=m.has(Le),De=st.getClearColor(),Ye=st.getClearAlpha(),Je=De.r,pt=De.g,vt=De.b;Ve?(_[0]=Je,_[1]=pt,_[2]=vt,_[3]=Ye,V.clearBufferuiv(V.COLOR,0,_)):(b[0]=Je,b[1]=pt,b[2]=vt,b[3]=Ye,V.clearBufferiv(V.COLOR,0,b))}else Y|=V.COLOR_BUFFER_BIT}X&&(Y|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(Y|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&V.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),z=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Wt,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",ht,!1),st.dispose(),pe.dispose(),fe.dispose(),N.dispose(),ie.dispose(),J.dispose(),Ie.dispose(),ce.dispose(),ve.dispose(),He.dispose(),He.removeEventListener("sessionstart",Co),He.removeEventListener("sessionend",Mf),Ds.stop()};function Wt(A){A.preventDefault(),to("WebGLRenderer: Context Lost."),I=!0}function $e(){to("WebGLRenderer: Context Restored."),I=!1;const A=q.autoReset,X=Oe.enabled,K=Oe.autoUpdate,Y=Oe.needsUpdate,Z=Oe.type;qe(),q.autoReset=A,Oe.enabled=X,Oe.autoUpdate=K,Oe.needsUpdate=Y,Oe.type=Z}function ht(A){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ft(A){const X=A.target;X.removeEventListener("dispose",ft),Xt(X)}function Xt(A){vn(A),N.remove(A)}function vn(A){const X=N.get(A).programs;X!==void 0&&(X.forEach(function(K){ve.releaseProgram(K)}),A.isShaderMaterial&&ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,K,Y,Z,Le){X===null&&(X=be);const Ve=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,De=Sv(A,X,K,Y,Z);S.setMaterial(Y,Ve);let Ye=K.index,Je=1;if(Y.wireframe===!0){if(Ye=$.getWireframeAttribute(K),Ye===void 0)return;Je=2}const pt=K.drawRange,vt=K.attributes.position;let je=pt.start*Je,Nt=(pt.start+pt.count)*Je;Le!==null&&(je=Math.max(je,Le.start*Je),Nt=Math.min(Nt,(Le.start+Le.count)*Je)),Ye!==null?(je=Math.max(je,0),Nt=Math.min(Nt,Ye.count)):vt!=null&&(je=Math.max(je,0),Nt=Math.min(Nt,vt.count));const jt=Nt-je;if(jt<0||jt===1/0)return;Ie.setup(Z,Y,De,K,Ye);let Zt,kt=Se;if(Ye!==null&&(Zt=de.get(Ye),kt=ee,kt.setIndex(Zt)),Z.isMesh)Y.wireframe===!0?(S.setLineWidth(Y.wireframeLinewidth*Pe()),kt.setMode(V.LINES)):kt.setMode(V.TRIANGLES);else if(Z.isLine){let Mn=Y.linewidth;Mn===void 0&&(Mn=1),S.setLineWidth(Mn*Pe()),Z.isLineSegments?kt.setMode(V.LINES):Z.isLineLoop?kt.setMode(V.LINE_LOOP):kt.setMode(V.LINE_STRIP)}else Z.isPoints?kt.setMode(V.POINTS):Z.isSprite&&kt.setMode(V.TRIANGLES);if(Z.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))kt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Mn=Z._multiDrawStarts,ze=Z._multiDrawCounts,Yn=Z._multiDrawCount,Ct=Ye?de.get(Ye).bytesPerElement:1,ti=N.get(Y).currentProgram.getUniforms();for(let Ai=0;Ai<Yn;Ai++)ti.setValue(V,"_gl_DrawID",Ai),kt.render(Mn[Ai]/Ct,ze[Ai])}else if(Z.isInstancedMesh)kt.renderInstances(je,jt,Z.count);else if(K.isInstancedBufferGeometry){const Mn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ze=Math.min(K.instanceCount,Mn);kt.renderInstances(je,jt,ze)}else kt.render(je,jt)};function Bn(A,X,K){A.transparent===!0&&A.side===Ii&&A.forceSinglePass===!1?(A.side=Fn,A.needsUpdate=!0,Io(A,X,K),A.side=Qi,A.needsUpdate=!0,Io(A,X,K),A.side=Ii):Io(A,X,K)}this.compile=function(A,X,K=null){K===null&&(K=A),M=fe.get(K),M.init(X),x.push(M),K.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(M.pushLight(Z),Z.castShadow&&M.pushShadow(Z))}),A!==K&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(M.pushLight(Z),Z.castShadow&&M.pushShadow(Z))}),M.setupLights();const Y=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Le=Z.material;if(Le)if(Array.isArray(Le))for(let Ve=0;Ve<Le.length;Ve++){const De=Le[Ve];Bn(De,K,Z),Y.add(De)}else Bn(Le,K,Z),Y.add(Le)}),M=x.pop(),Y},this.compileAsync=function(A,X,K=null){const Y=this.compile(A,X,K);return new Promise(Z=>{function Le(){if(Y.forEach(function(Ve){N.get(Ve).currentProgram.isReady()&&Y.delete(Ve)}),Y.size===0){Z(A);return}setTimeout(Le,10)}gt.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let $n=null;function zi(A){$n&&$n(A)}function Co(){Ds.stop()}function Mf(){Ds.start()}const Ds=new $0;Ds.setAnimationLoop(zi),typeof self<"u"&&Ds.setContext(self),this.setAnimationLoop=function(A){$n=A,He.setAnimationLoop(A),A===null?Ds.stop():Ds.start()},He.addEventListener("sessionstart",Co),He.addEventListener("sessionend",Mf),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;z!==null&&z.renderStart(A,X);const K=He.enabled===!0&&He.isPresenting===!0,Y=T!==null&&(B===null||K)&&T.begin(R,B);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(X),X=He.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,X,B),M=fe.get(A,x.length),M.init(X),M.state.textureUnits=W.getTextureUnits(),x.push(M),_e.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),se.setFromProjectionMatrix(_e,Jn,X.reversedDepth),oe=this.localClippingEnabled,ae=Fe.init(this.clippingPlanes,oe),w=pe.get(A,C.length),w.init(),C.push(w),He.enabled===!0&&He.isPresenting===!0){const Ve=R.xr.getDepthSensingMesh();Ve!==null&&Ch(Ve,X,-1/0,R.sortObjects)}Ch(A,X,0,R.sortObjects),w.finish(),R.sortObjects===!0&&w.sort(We,Ke,X.reversedDepth),ye=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,ye&&st.addToRenderList(w,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&Fe.beginShadows();const Z=M.state.shadowsArray;if(Oe.render(Z,A,X),ae===!0&&Fe.endShadows(),(Y&&T.hasRenderPass())===!1){const Ve=w.opaque,De=w.transmissive;if(M.setupLights(),X.isArrayCamera){const Ye=X.cameras;if(De.length>0)for(let Je=0,pt=Ye.length;Je<pt;Je++){const vt=Ye[Je];Tf(Ve,De,A,vt)}ye&&st.render(A);for(let Je=0,pt=Ye.length;Je<pt;Je++){const vt=Ye[Je];wf(w,A,vt,vt.viewport)}}else De.length>0&&Tf(Ve,De,A,X),ye&&st.render(A),wf(w,A,X)}B!==null&&O===0&&(W.updateMultisampleRenderTarget(B),W.updateRenderTargetMipmap(B)),Y&&T.end(R),A.isScene===!0&&A.onAfterRender(R,A,X),Ie.resetDefaultState(),H=-1,ne=null,x.pop(),x.length>0?(M=x[x.length-1],W.setTextureUnits(M.state.textureUnits),ae===!0&&Fe.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,z!==null&&z.renderEnd()};function Ch(A,X,K,Y){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLightProbeGrid)M.pushLightProbeGrid(A);else if(A.isLight)M.pushLight(A),A.castShadow&&M.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||se.intersectsSprite(A)){Y&&Qe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_e);const Ve=J.update(A),De=A.material;De.visible&&w.push(A,Ve,De,K,Qe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||se.intersectsObject(A))){const Ve=J.update(A),De=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Qe.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Qe.copy(Ve.boundingSphere.center)),Qe.applyMatrix4(A.matrixWorld).applyMatrix4(_e)),Array.isArray(De)){const Ye=Ve.groups;for(let Je=0,pt=Ye.length;Je<pt;Je++){const vt=Ye[Je],je=De[vt.materialIndex];je&&je.visible&&w.push(A,Ve,je,K,Qe.z,vt)}}else De.visible&&w.push(A,Ve,De,K,Qe.z,null)}}const Le=A.children;for(let Ve=0,De=Le.length;Ve<De;Ve++)Ch(Le[Ve],X,K,Y)}function wf(A,X,K,Y){const{opaque:Z,transmissive:Le,transparent:Ve}=A;M.setupLightsView(K),ae===!0&&Fe.setGlobalState(R.clippingPlanes,K),Y&&S.viewport(j.copy(Y)),Z.length>0&&Ro(Z,X,K),Le.length>0&&Ro(Le,X,K),Ve.length>0&&Ro(Ve,X,K),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Tf(A,X,K,Y){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Y.id]===void 0){const je=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Y.id]=new ei(1,1,{generateMipmaps:!0,type:je?Ni:Hn,minFilter:Pi,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace})}const Le=M.state.transmissionRenderTarget[Y.id],Ve=Y.viewport||j;Le.setSize(Ve.z*R.transmissionResolutionScale,Ve.w*R.transmissionResolutionScale);const De=R.getRenderTarget(),Ye=R.getActiveCubeFace(),Je=R.getActiveMipmapLevel();R.setRenderTarget(Le),R.getClearColor(ct),at=R.getClearAlpha(),at<1&&R.setClearColor(16777215,.5),R.clear(),ye&&st.render(K);const pt=R.toneMapping;R.toneMapping=Si;const vt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),M.setupLightsView(Y),ae===!0&&Fe.setGlobalState(R.clippingPlanes,Y),Ro(A,K,Y),W.updateMultisampleRenderTarget(Le),W.updateRenderTargetMipmap(Le),gt.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Nt=0,jt=X.length;Nt<jt;Nt++){const Zt=X[Nt],{object:kt,geometry:Mn,material:ze,group:Yn}=Zt;if(ze.side===Ii&&kt.layers.test(Y.layers)){const Ct=ze.side;ze.side=Fn,ze.needsUpdate=!0,Ef(kt,K,Y,Mn,ze,Yn),ze.side=Ct,ze.needsUpdate=!0,je=!0}}je===!0&&(W.updateMultisampleRenderTarget(Le),W.updateRenderTargetMipmap(Le))}R.setRenderTarget(De,Ye,Je),R.setClearColor(ct,at),vt!==void 0&&(Y.viewport=vt),R.toneMapping=pt}function Ro(A,X,K){const Y=X.isScene===!0?X.overrideMaterial:null;for(let Z=0,Le=A.length;Z<Le;Z++){const Ve=A[Z],{object:De,geometry:Ye,group:Je}=Ve;let pt=Ve.material;pt.allowOverride===!0&&Y!==null&&(pt=Y),De.layers.test(K.layers)&&Ef(De,X,K,Ye,pt,Je)}}function Ef(A,X,K,Y,Z,Le){A.onBeforeRender(R,X,K,Y,Z,Le),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(R,X,K,Y,A,Le),Z.transparent===!0&&Z.side===Ii&&Z.forceSinglePass===!1?(Z.side=Fn,Z.needsUpdate=!0,R.renderBufferDirect(K,X,Y,Z,A,Le),Z.side=Qi,Z.needsUpdate=!0,R.renderBufferDirect(K,X,Y,Z,A,Le),Z.side=Ii):R.renderBufferDirect(K,X,Y,Z,A,Le),A.onAfterRender(R,X,K,Y,Z,Le)}function Io(A,X,K){X.isScene!==!0&&(X=be);const Y=N.get(A),Z=M.state.lights,Le=M.state.shadowsArray,Ve=Z.state.version,De=ve.getParameters(A,Z.state,Le,X,K,M.state.lightProbeGridArray),Ye=ve.getProgramCacheKey(De);let Je=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,Y.fog=X.fog;const pt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=ie.get(A.envMap||Y.environment,pt),Y.envMapRotation=Y.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Je===void 0&&(A.addEventListener("dispose",ft),Je=new Map,Y.programs=Je);let vt=Je.get(Ye);if(vt!==void 0){if(Y.currentProgram===vt&&Y.lightsStateVersion===Ve)return Cf(A,De),vt}else De.uniforms=ve.getUniforms(A),z!==null&&A.isNodeMaterial&&z.build(A,K,De),A.onBeforeCompile(De,R),vt=ve.acquireProgram(De,Ye),Je.set(Ye,vt),Y.uniforms=De.uniforms;const je=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=Fe.uniform),Cf(A,De),Y.needsLights=wv(A),Y.lightsStateVersion=Ve,Y.needsLights&&(je.ambientLightColor.value=Z.state.ambient,je.lightProbe.value=Z.state.probe,je.directionalLights.value=Z.state.directional,je.directionalLightShadows.value=Z.state.directionalShadow,je.spotLights.value=Z.state.spot,je.spotLightShadows.value=Z.state.spotShadow,je.rectAreaLights.value=Z.state.rectArea,je.ltc_1.value=Z.state.rectAreaLTC1,je.ltc_2.value=Z.state.rectAreaLTC2,je.pointLights.value=Z.state.point,je.pointLightShadows.value=Z.state.pointShadow,je.hemisphereLights.value=Z.state.hemi,je.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,je.spotLightMatrix.value=Z.state.spotLightMatrix,je.spotLightMap.value=Z.state.spotLightMap,je.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=M.state.lightProbeGridArray.length>0,Y.currentProgram=vt,Y.uniformsList=null,vt}function Af(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Rl.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Cf(A,X){const K=N.get(A);K.outputColorSpace=X.outputColorSpace,K.batching=X.batching,K.batchingColor=X.batchingColor,K.instancing=X.instancing,K.instancingColor=X.instancingColor,K.instancingMorph=X.instancingMorph,K.skinning=X.skinning,K.morphTargets=X.morphTargets,K.morphNormals=X.morphNormals,K.morphColors=X.morphColors,K.morphTargetsCount=X.morphTargetsCount,K.numClippingPlanes=X.numClippingPlanes,K.numIntersection=X.numClipIntersection,K.vertexAlphas=X.vertexAlphas,K.vertexTangents=X.vertexTangents,K.toneMapping=X.toneMapping}function bv(A,X){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;y.setFromMatrixPosition(X.matrixWorld);for(let K=0,Y=A.length;K<Y;K++){const Z=A[K];if(Z.texture!==null&&Z.boundingBox.containsPoint(y))return Z}return null}function Sv(A,X,K,Y,Z){X.isScene!==!0&&(X=be),W.resetTextureUnits();const Le=X.fog,Ve=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?X.environment:null,De=B===null?R.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:_t.workingColorSpace,Ye=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Je=ie.get(Y.envMap||Ve,Ye),pt=Y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,vt=!!K.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),je=!!K.morphAttributes.position,Nt=!!K.morphAttributes.normal,jt=!!K.morphAttributes.color;let Zt=Si;Y.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Zt=R.toneMapping);const kt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Mn=kt!==void 0?kt.length:0,ze=N.get(Y),Yn=M.state.lights;if(ae===!0&&(oe===!0||A!==ne)){const Vt=A===ne&&Y.id===H;Fe.setState(Y,A,Vt)}let Ct=!1;Y.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Yn.state.version||ze.outputColorSpace!==De||Z.isBatchedMesh&&ze.batching===!1||!Z.isBatchedMesh&&ze.batching===!0||Z.isBatchedMesh&&ze.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&ze.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&ze.instancing===!1||!Z.isInstancedMesh&&ze.instancing===!0||Z.isSkinnedMesh&&ze.skinning===!1||!Z.isSkinnedMesh&&ze.skinning===!0||Z.isInstancedMesh&&ze.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&ze.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&ze.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&ze.instancingMorph===!1&&Z.morphTexture!==null||ze.envMap!==Je||Y.fog===!0&&ze.fog!==Le||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Fe.numPlanes||ze.numIntersection!==Fe.numIntersection)||ze.vertexAlphas!==pt||ze.vertexTangents!==vt||ze.morphTargets!==je||ze.morphNormals!==Nt||ze.morphColors!==jt||ze.toneMapping!==Zt||ze.morphTargetsCount!==Mn||!!ze.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Ct=!0):(Ct=!0,ze.__version=Y.version);let ti=ze.currentProgram;Ct===!0&&(ti=Io(Y,X,Z),z&&Y.isNodeMaterial&&z.onUpdateProgram(Y,ti,ze));let Ai=!1,rs=!1,mr=!1;const Bt=ti.getUniforms(),Qt=ze.uniforms;if(S.useProgram(ti.program)&&(Ai=!0,rs=!0,mr=!0),Y.id!==H&&(H=Y.id,rs=!0),ze.needsLights){const Vt=bv(M.state.lightProbeGridArray,Z);ze.lightProbeGrid!==Vt&&(ze.lightProbeGrid=Vt,rs=!0)}if(Ai||ne!==A){S.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Bt.setValue(V,"projectionMatrix",A.projectionMatrix),Bt.setValue(V,"viewMatrix",A.matrixWorldInverse);const os=Bt.map.cameraPosition;os!==void 0&&os.setValue(V,Me.setFromMatrixPosition(A.matrixWorld)),D.logarithmicDepthBuffer&&Bt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Bt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),ne!==A&&(ne=A,rs=!0,mr=!0)}if(ze.needsLights&&(Yn.state.directionalShadowMap.length>0&&Bt.setValue(V,"directionalShadowMap",Yn.state.directionalShadowMap,W),Yn.state.spotShadowMap.length>0&&Bt.setValue(V,"spotShadowMap",Yn.state.spotShadowMap,W),Yn.state.pointShadowMap.length>0&&Bt.setValue(V,"pointShadowMap",Yn.state.pointShadowMap,W)),Z.isSkinnedMesh){Bt.setOptional(V,Z,"bindMatrix"),Bt.setOptional(V,Z,"bindMatrixInverse");const Vt=Z.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),Bt.setValue(V,"boneTexture",Vt.boneTexture,W))}Z.isBatchedMesh&&(Bt.setOptional(V,Z,"batchingTexture"),Bt.setValue(V,"batchingTexture",Z._matricesTexture,W),Bt.setOptional(V,Z,"batchingIdTexture"),Bt.setValue(V,"batchingIdTexture",Z._indirectTexture,W),Bt.setOptional(V,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Bt.setValue(V,"batchingColorTexture",Z._colorsTexture,W));const as=K.morphAttributes;if((as.position!==void 0||as.normal!==void 0||as.color!==void 0)&&G.update(Z,K,ti),(rs||ze.receiveShadow!==Z.receiveShadow)&&(ze.receiveShadow=Z.receiveShadow,Bt.setValue(V,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&X.environment!==null&&(Qt.envMapIntensity.value=X.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=LA()),rs){if(Bt.setValue(V,"toneMappingExposure",R.toneMappingExposure),ze.needsLights&&Mv(Qt,mr),Le&&Y.fog===!0&&Ge.refreshFogUniforms(Qt,Le),Ge.refreshMaterialUniforms(Qt,Y,he,ge,M.state.transmissionRenderTarget[A.id]),ze.needsLights&&ze.lightProbeGrid){const Vt=ze.lightProbeGrid;Qt.probesSH.value=Vt.texture,Qt.probesMin.value.copy(Vt.boundingBox.min),Qt.probesMax.value.copy(Vt.boundingBox.max),Qt.probesResolution.value.copy(Vt.resolution)}Rl.upload(V,Af(ze),Qt,W)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Rl.upload(V,Af(ze),Qt,W),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Bt.setValue(V,"center",Z.center),Bt.setValue(V,"modelViewMatrix",Z.modelViewMatrix),Bt.setValue(V,"normalMatrix",Z.normalMatrix),Bt.setValue(V,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){const Vt=Y.uniformsGroups;for(let os=0,gr=Vt.length;os<gr;os++){const Rf=Vt[os];ce.update(Rf,ti),ce.bind(Rf,ti)}}return ti}function Mv(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function wv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(A,X,K){const Y=N.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),N.get(A.texture).__webglTexture=X,N.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:K,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const K=N.get(A);K.__webglFramebuffer=X,K.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,K=0){B=A,U=X,O=K;let Y=null,Z=!1,Le=!1;if(A){const De=N.get(A);if(De.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(V.FRAMEBUFFER,De.__webglFramebuffer),j.copy(A.viewport),te.copy(A.scissor),Re=A.scissorTest,S.viewport(j),S.scissor(te),S.setScissorTest(Re),H=-1;return}else if(De.__webglFramebuffer===void 0)W.setupRenderTarget(A);else if(De.__hasExternalTextures)W.rebindTextures(A,N.get(A.texture).__webglTexture,N.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const pt=A.depthTexture;if(De.__boundDepthTexture!==pt){if(pt!==null&&N.has(pt)&&(A.width!==pt.image.width||A.height!==pt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(A)}}const Ye=A.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Le=!0);const Je=N.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[X])?Y=Je[X][K]:Y=Je[X],Z=!0):A.samples>0&&W.useMultisampledRTT(A)===!1?Y=N.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?Y=Je[K]:Y=Je,j.copy(A.viewport),te.copy(A.scissor),Re=A.scissorTest}else j.copy(le).multiplyScalar(he).floor(),te.copy(Te).multiplyScalar(he).floor(),Re=Ne;if(K!==0&&(Y=L),S.bindFramebuffer(V.FRAMEBUFFER,Y)&&S.drawBuffers(A,Y),S.viewport(j),S.scissor(te),S.setScissorTest(Re),Z){const De=N.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,De.__webglTexture,K)}else if(Le){const De=X;for(let Ye=0;Ye<A.textures.length;Ye++){const Je=N.get(A.textures[Ye]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ye,Je.__webglTexture,K,De)}}else if(A!==null&&K!==0){const De=N.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,De.__webglTexture,K)}H=-1},this.readRenderTargetPixels=function(A,X,K,Y,Z,Le,Ve,De=0){if(!(A&&A.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=N.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ye=Ye[Ve]),Ye){S.bindFramebuffer(V.FRAMEBUFFER,Ye);try{const Je=A.textures[De],pt=Je.format,vt=Je.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+De),!D.textureFormatReadable(pt)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(vt)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-Y&&K>=0&&K<=A.height-Z&&V.readPixels(X,K,Y,Z,Ee.convert(pt),Ee.convert(vt),Le)}finally{const Je=B!==null?N.get(B).__webglFramebuffer:null;S.bindFramebuffer(V.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(A,X,K,Y,Z,Le,Ve,De=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=N.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ye=Ye[Ve]),Ye)if(X>=0&&X<=A.width-Y&&K>=0&&K<=A.height-Z){S.bindFramebuffer(V.FRAMEBUFFER,Ye);const Je=A.textures[De],pt=Je.format,vt=Je.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+De),!D.textureFormatReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,je),V.bufferData(V.PIXEL_PACK_BUFFER,Le.byteLength,V.STREAM_READ),V.readPixels(X,K,Y,Z,Ee.convert(pt),Ee.convert(vt),0);const Nt=B!==null?N.get(B).__webglFramebuffer:null;S.bindFramebuffer(V.FRAMEBUFFER,Nt);const jt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Vx(V,jt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,je),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Le),V.deleteBuffer(je),V.deleteSync(jt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,K=0){const Y=Math.pow(2,-K),Z=Math.floor(A.image.width*Y),Le=Math.floor(A.image.height*Y),Ve=X!==null?X.x:0,De=X!==null?X.y:0;W.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,K,0,0,Ve,De,Z,Le),S.unbindTexture()},this.copyTextureToTexture=function(A,X,K=null,Y=null,Z=0,Le=0){let Ve,De,Ye,Je,pt,vt,je,Nt,jt;const Zt=A.isCompressedTexture?A.mipmaps[Le]:A.image;if(K!==null)Ve=K.max.x-K.min.x,De=K.max.y-K.min.y,Ye=K.isBox3?K.max.z-K.min.z:1,Je=K.min.x,pt=K.min.y,vt=K.isBox3?K.min.z:0;else{const Qt=Math.pow(2,-Z);Ve=Math.floor(Zt.width*Qt),De=Math.floor(Zt.height*Qt),A.isDataArrayTexture?Ye=Zt.depth:A.isData3DTexture?Ye=Math.floor(Zt.depth*Qt):Ye=1,Je=0,pt=0,vt=0}Y!==null?(je=Y.x,Nt=Y.y,jt=Y.z):(je=0,Nt=0,jt=0);const kt=Ee.convert(X.format),Mn=Ee.convert(X.type);let ze;X.isData3DTexture?(W.setTexture3D(X,0),ze=V.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(W.setTexture2DArray(X,0),ze=V.TEXTURE_2D_ARRAY):(W.setTexture2D(X,0),ze=V.TEXTURE_2D),S.activeTexture(V.TEXTURE0),S.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),S.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),S.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const Yn=S.getParameter(V.UNPACK_ROW_LENGTH),Ct=S.getParameter(V.UNPACK_IMAGE_HEIGHT),ti=S.getParameter(V.UNPACK_SKIP_PIXELS),Ai=S.getParameter(V.UNPACK_SKIP_ROWS),rs=S.getParameter(V.UNPACK_SKIP_IMAGES);S.pixelStorei(V.UNPACK_ROW_LENGTH,Zt.width),S.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Zt.height),S.pixelStorei(V.UNPACK_SKIP_PIXELS,Je),S.pixelStorei(V.UNPACK_SKIP_ROWS,pt),S.pixelStorei(V.UNPACK_SKIP_IMAGES,vt);const mr=A.isDataArrayTexture||A.isData3DTexture,Bt=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const Qt=N.get(A),as=N.get(X),Vt=N.get(Qt.__renderTarget),os=N.get(as.__renderTarget);S.bindFramebuffer(V.READ_FRAMEBUFFER,Vt.__webglFramebuffer),S.bindFramebuffer(V.DRAW_FRAMEBUFFER,os.__webglFramebuffer);for(let gr=0;gr<Ye;gr++)mr&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,N.get(A).__webglTexture,Z,vt+gr),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,N.get(X).__webglTexture,Le,jt+gr)),V.blitFramebuffer(Je,pt,Ve,De,je,Nt,Ve,De,V.DEPTH_BUFFER_BIT,V.NEAREST);S.bindFramebuffer(V.READ_FRAMEBUFFER,null),S.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||N.has(A)){const Qt=N.get(A),as=N.get(X);S.bindFramebuffer(V.READ_FRAMEBUFFER,F),S.bindFramebuffer(V.DRAW_FRAMEBUFFER,k);for(let Vt=0;Vt<Ye;Vt++)mr?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Qt.__webglTexture,Z,vt+Vt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Qt.__webglTexture,Z),Bt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,as.__webglTexture,Le,jt+Vt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,as.__webglTexture,Le),Z!==0?V.blitFramebuffer(Je,pt,Ve,De,je,Nt,Ve,De,V.COLOR_BUFFER_BIT,V.NEAREST):Bt?V.copyTexSubImage3D(ze,Le,je,Nt,jt+Vt,Je,pt,Ve,De):V.copyTexSubImage2D(ze,Le,je,Nt,Je,pt,Ve,De);S.bindFramebuffer(V.READ_FRAMEBUFFER,null),S.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Bt?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(ze,Le,je,Nt,jt,Ve,De,Ye,kt,Mn,Zt.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(ze,Le,je,Nt,jt,Ve,De,Ye,kt,Zt.data):V.texSubImage3D(ze,Le,je,Nt,jt,Ve,De,Ye,kt,Mn,Zt):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Le,je,Nt,Ve,De,kt,Mn,Zt.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Le,je,Nt,Zt.width,Zt.height,kt,Zt.data):V.texSubImage2D(V.TEXTURE_2D,Le,je,Nt,Ve,De,kt,Mn,Zt);S.pixelStorei(V.UNPACK_ROW_LENGTH,Yn),S.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ct),S.pixelStorei(V.UNPACK_SKIP_PIXELS,ti),S.pixelStorei(V.UNPACK_SKIP_ROWS,Ai),S.pixelStorei(V.UNPACK_SKIP_IMAGES,rs),Le===0&&X.generateMipmaps&&V.generateMipmap(ze),S.unbindTexture()},this.initRenderTarget=function(A){N.get(A).__webglFramebuffer===void 0&&W.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?W.setTextureCube(A,0):A.isData3DTexture?W.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?W.setTexture2DArray(A,0):W.setTexture2D(A,0),S.unbindTexture()},this.resetState=function(){U=0,O=0,B=null,S.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}const UA=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:bd,AddEquation:vs,AddOperation:Cg,AdditiveAnimationBlendMode:Pd,AdditiveBlending:Lu,AgXToneMapping:kc,AlphaFormat:Rd,AlwaysCompare:zg,AlwaysDepth:Bl,AlwaysStencilFunc:ku,AmbientLight:L0,AnimationAction:H0,AnimationClip:ao,AnimationLoader:LS,AnimationMixer:cM,AnimationObjectGroup:oM,AnimationUtils:RS,ArcCurve:s0,ArrayCamera:B0,ArrowHelper:LM,AttachedBindMode:Ou,Audio:V0,AudioAnalyser:JS,AudioContext:rf,AudioListener:YS,AudioLoader:WS,AxesHelper:UM,BackSide:Fn,BasicDepthPacking:Lg,BasicShadowMap:Yy,BatchedMesh:jg,BezierInterpolant:A0,Bone:kd,BooleanKeyframeTrack:ur,Box2:W0,Box3:Rn,Box3Helper:PM,BoxGeometry:Cs,BoxHelper:IM,BufferAttribute:Ft,BufferGeometry:dt,BufferGeometryLoader:F0,ByteType:Td,Cache:Di,Camera:yh,CameraHelper:RM,CanvasTexture:Yb,CapsuleGeometry:sh,CatmullRomCurve3:r0,CineonToneMapping:xd,CircleGeometry:rh,ClampToEdgeWrapping:Xn,Clock:gM,Color:ke,ColorKeyframeTrack:Qd,ColorManagement:_t,Compatibility:Ox,CompressedArrayTexture:qb,CompressedCubeTexture:$b,CompressedTexture:ih,CompressedTextureLoader:US,ConeGeometry:wo,ConstantAlphaFactor:Tg,ConstantColorFactor:Mg,Controls:q0,CubeCamera:k0,CubeDepthTexture:n0,CubeReflectionMapping:Ui,CubeRefractionMapping:Ms,CubeTexture:So,CubeTextureLoader:NS,CubeUVReflectionMapping:aa,CubicBezierCurve:Gd,CubicBezierCurve3:a0,CubicInterpolant:T0,CullFaceBack:Du,CullFaceFront:lg,CullFaceFrontBack:$y,CullFaceNone:og,Curve:Ei,CurvePath:l0,CustomBlending:cg,CustomToneMapping:Sd,CylinderGeometry:Mo,Cylindrical:vM,Data3DTexture:Kc,DataArrayTexture:Zc,DataTexture:li,DataTextureLoader:OS,DataUtils:_b,DecrementStencilOp:fx,DecrementWrapStencilOp:mx,DefaultLoadingManager:fr,DepthFormat:Oi,DepthStencilFormat:_s,DepthTexture:or,DetachedBindMode:Rg,DirectionalLight:D0,DirectionalLightHelper:CM,DiscreteInterpolant:E0,DodecahedronGeometry:ah,DoubleSide:Ii,DstAlphaFactor:_g,DstColorFactor:xg,DynamicCopyUsage:Ix,DynamicDrawUsage:wx,DynamicReadUsage:Ax,EdgesGeometry:i0,EllipseCurve:oh,EqualCompare:Fg,EqualDepth:Vl,EqualStencilFunc:yx,EquirectangularReflectionMapping:Da,EquirectangularRefractionMapping:La,Euler:Mi,EventDispatcher:Ti,ExternalTexture:zd,ExtrudeGeometry:lh,FileLoader:ts,Float16BufferAttribute:Tb,Float32BufferAttribute:Be,FloatType:Nn,Fog:Qc,FogExp2:jc,FramebufferTexture:Xb,FrontSide:Qi,Frustum:ar,FrustumArray:nh,GLBufferAttribute:pM,GLSL1:Dx,GLSL3:Bu,GreaterCompare:kg,GreaterDepth:Hl,GreaterEqualCompare:Yc,GreaterEqualDepth:Gl,GreaterEqualStencilFunc:Mx,GreaterStencilFunc:bx,GridHelper:EM,Group:Wr,HTMLTexture:Zb,HalfFloatType:Ni,HemisphereLight:R0,HemisphereLightHelper:TM,IcosahedronGeometry:ch,ImageBitmapLoader:HS,ImageLoader:oo,ImageUtils:Xg,IncrementStencilOp:dx,IncrementWrapStencilOp:px,InstancedBufferAttribute:ta,InstancedBufferGeometry:O0,InstancedInterleavedBuffer:fM,InstancedMesh:Jg,Int16BufferAttribute:Mb,Int32BufferAttribute:wb,Int8BufferAttribute:xb,IntType:zc,InterleavedBuffer:eh,InterleavedBufferAttribute:rr,Interpolant:la,InterpolateBezier:Fu,InterpolateDiscrete:Za,InterpolateLinear:bc,InterpolateSmooth:Al,InterpolationSamplingMode:Nx,InterpolationSamplingType:Ux,InvertStencilOp:gx,KeepStencilOp:qs,KeyframeTrack:pi,LOD:Zg,LatheGeometry:hh,Layers:Jc,LessCompare:Og,LessDepth:zl,LessEqualCompare:$c,LessEqualDepth:ir,LessEqualStencilFunc:xx,LessStencilFunc:_x,Light:Is,LightProbe:N0,Line:Es,Line3:xM,LineBasicMaterial:kn,LineCurve:Hd,LineCurve3:o0,LineDashedMaterial:S0,LineLoop:Qg,LineSegments:Bi,LinearFilter:Ht,LinearInterpolant:jd,LinearMipMapLinearFilter:Qy,LinearMipMapNearestFilter:jy,LinearMipmapLinearFilter:Pi,LinearMipmapNearestFilter:Ua,LinearSRGBColorSpace:Ja,LinearToneMapping:_d,LinearTransfer:ja,Loader:qn,LoaderUtils:Wu,LoadingManager:tf,LoopOnce:Ig,LoopPingPong:Dg,LoopRepeat:Pg,MOUSE:Qs,Material:xn,MaterialBlending:Zy,MaterialLoader:xh,MathUtils:Wg,Matrix2:$u,Matrix3:ut,Matrix4:nt,MaxEquation:fg,Mesh:sn,MeshBasicMaterial:ss,MeshDepthMaterial:Kd,MeshDistanceMaterial:Jd,MeshLambertMaterial:x0,MeshMatcapMaterial:b0,MeshNormalMaterial:y0,MeshPhongMaterial:v0,MeshPhysicalMaterial:g0,MeshStandardMaterial:Zd,MeshToonMaterial:_0,MinEquation:dg,MirroredRepeatWrapping:qa,MixOperation:Ag,MultiplyBlending:Nu,MultiplyOperation:xo,NearestFilter:nn,NearestMipMapLinearFilter:Jy,NearestMipMapNearestFilter:Ky,NearestMipmapLinearFilter:Gr,NearestMipmapNearestFilter:wd,NeutralToneMapping:Md,NeverCompare:Ng,NeverDepth:kl,NeverStencilFunc:vx,NoBlending:Li,NoColorSpace:Zi,NoNormalPacking:ox,NoToneMapping:Si,NormalAnimationBlendMode:qc,NormalBlending:er,NormalGAPacking:cx,NormalRGPacking:lx,NotEqualCompare:Bg,NotEqualDepth:Wl,NotEqualStencilFunc:Sx,NumberKeyframeTrack:vh,Object3D:Et,ObjectLoader:VS,ObjectSpaceNormalMap:Ug,OctahedronGeometry:Eo,OneFactor:mg,OneMinusConstantAlphaFactor:Eg,OneMinusConstantColorFactor:wg,OneMinusDstAlphaFactor:yg,OneMinusDstColorFactor:bg,OneMinusSrcAlphaFactor:Fl,OneMinusSrcColorFactor:vg,OrthographicCamera:ca,PCFShadowMap:Pa,PCFSoftShadowMap:Nl,PMREMGenerator:Zu,Path:no,PerspectiveCamera:mn,Plane:Yi,PlaneGeometry:oa,PlaneHelper:DM,PointLight:P0,PointLightHelper:MM,Points:e0,PointsMaterial:Bd,PolarGridHelper:AM,PolyhedronGeometry:Rs,PositionalAudio:KS,PropertyBinding:Rt,PropertyMixer:G0,QuadraticBezierCurve:Wd,QuadraticBezierCurve3:Xd,Quaternion:_n,QuaternionKeyframeTrack:_h,QuaternionLinearInterpolant:C0,R11_EAC_Format:jl,RED_GREEN_RGTC2_Format:Ya,RED_RGTC1_Format:_c,REVISION:Fc,RG11_EAC_Format:$a,RGBADepthPacking:sx,RGBAFormat:On,RGBAIntegerFormat:Xc,RGBA_ASTC_10x10_Format:dc,RGBA_ASTC_10x5_Format:cc,RGBA_ASTC_10x6_Format:hc,RGBA_ASTC_10x8_Format:uc,RGBA_ASTC_12x10_Format:fc,RGBA_ASTC_12x12_Format:pc,RGBA_ASTC_4x4_Format:tc,RGBA_ASTC_5x4_Format:nc,RGBA_ASTC_5x5_Format:ic,RGBA_ASTC_6x5_Format:sc,RGBA_ASTC_6x6_Format:rc,RGBA_ASTC_8x5_Format:ac,RGBA_ASTC_8x6_Format:oc,RGBA_ASTC_8x8_Format:lc,RGBA_BPTC_Format:mc,RGBA_ETC2_EAC_Format:Jl,RGBA_PVRTC_2BPPV1_Format:Yl,RGBA_PVRTC_4BPPV1_Format:$l,RGBA_S3TC_DXT1_Format:Oa,RGBA_S3TC_DXT3_Format:Fa,RGBA_S3TC_DXT5_Format:ka,RGBDepthPacking:rx,RGBFormat:Id,RGBIntegerFormat:ex,RGB_BPTC_SIGNED_Format:gc,RGB_BPTC_UNSIGNED_Format:vc,RGB_ETC1_Format:Zl,RGB_ETC2_Format:Kl,RGB_PVRTC_2BPPV1_Format:ql,RGB_PVRTC_4BPPV1_Format:Xl,RGB_S3TC_DXT1_Format:Na,RGDepthPacking:ax,RGFormat:ws,RGIntegerFormat:Wc,RawShaderMaterial:Yd,Ray:hr,Raycaster:mM,RectAreaLight:U0,RedFormat:Hc,RedIntegerFormat:bo,ReinhardToneMapping:yd,RenderTarget:Ld,RenderTarget3D:hM,RepeatWrapping:Xa,ReplaceStencilOp:ux,ReverseSubtractEquation:ug,RingGeometry:uh,SIGNED_R11_EAC_Format:Ql,SIGNED_RED_GREEN_RGTC2_Format:xc,SIGNED_RED_RGTC1_Format:yc,SIGNED_RG11_EAC_Format:ec,SRGBColorSpace:Ln,SRGBTransfer:Dt,Scene:Ud,ShaderChunk:it,ShaderLib:ri,ShaderMaterial:di,ShadowMaterial:p0,Shape:To,ShapeGeometry:dh,ShapePath:NM,ShapeUtils:xi,ShortType:Ed,Skeleton:th,SkeletonHelper:SM,SkinnedMesh:Kg,Source:ys,Sphere:yn,SphereGeometry:Ao,Spherical:qu,SphericalHarmonics3:sf,SplineCurve:qd,SpotLight:I0,SpotLightHelper:bM,Sprite:Yg,SpriteMaterial:Fd,SrcAlphaFactor:Ol,SrcAlphaSaturateFactor:Sg,SrcColorFactor:gg,StaticCopyUsage:Rx,StaticDrawUsage:Qa,StaticReadUsage:Ex,StereoCamera:XS,StreamCopyUsage:Px,StreamDrawUsage:Tx,StreamReadUsage:Cx,StringKeyframeTrack:dr,SubtractEquation:hg,SubtractiveBlending:Uu,TOUCH:Ys,TangentSpaceNormalMap:es,TetrahedronGeometry:fh,Texture:Yt,TextureLoader:FS,TextureUtils:zM,Timer:z0,TimestampQuery:Lx,TorusGeometry:ph,TorusKnotGeometry:mh,Triangle:Wn,TriangleFanDrawMode:ix,TriangleStripDrawMode:nx,TrianglesDrawMode:tx,TubeGeometry:gh,UVMapping:Bc,Uint16BufferAttribute:Nd,Uint32BufferAttribute:Od,Uint8BufferAttribute:bb,Uint8ClampedBufferAttribute:Sb,Uniform:lf,UniformsGroup:dM,UniformsLib:Ae,UniformsUtils:$d,UnsignedByteType:Hn,UnsignedInt101111Type:Cd,UnsignedInt248Type:Qr,UnsignedInt5999Type:Ad,UnsignedIntType:ui,UnsignedShort4444Type:Vc,UnsignedShort5551Type:Gc,UnsignedShortType:jr,VSMShadowMap:Vr,Vector2:re,Vector3:P,Vector4:Ut,VectorKeyframeTrack:ef,VideoFrameTexture:Wb,VideoTexture:t0,WebGL3DRenderTarget:cb,WebGLArrayRenderTarget:lb,WebGLCoordinateSystem:Jn,WebGLCubeRenderTarget:cf,WebGLRenderTarget:ei,WebGLRenderer:tv,WebGLUtils:Q0,WebGPUCoordinateSystem:sr,WebXRController:Cl,WireframeGeometry:f0,WrapAroundEnding:Ka,ZeroCurvatureEnding:Zs,ZeroFactor:pg,ZeroSlopeEnding:Ks,ZeroStencilOp:hx,createCanvasElement:Gg,error:Ze,getConsoleFunction:zx,log:to,setConsoleFunction:Bx,warn:we,warnOnce:bs},Symbol.toStringTag,{value:"Module"})),Ps=i=>{const e=zr(i),t={set:n=>{t.current=n,e.set(n)},subscribe:e.subscribe,update:n=>{const s=n(t.current);t.current=s,e.set(s)},current:i};return t},js=(i,e)=>({subscribe:od(i,e).subscribe,set:e,update:n=>e(n(Ce(i))),get current(){return Ce(i)}}),hf=i=>{const{subscribe:e}=od(i);return{subscribe:e,get current(){return Ce(i)}}},NA=i=>{const e=i.getBoundingClientRect();let t=bi({width:e.width,height:e.height}),n=0,s=0,r=0,a=0,o=!0,l=!1,c;const u=()=>{l=!0,c!==void 0&&clearTimeout(c),c=setTimeout(()=>{l=!1,c=void 0},250)},d=()=>{u()},h=new ResizeObserver(()=>{o=!0,u();const p=i.getBoundingClientRect();ue(t,{width:p.width,height:p.height})});function f(){if(!o&&!l)return!1;const{clientWidth:p,clientHeight:v}=i;if(!o&&p===s&&v===n)return!1;s=p,n=v,o=!1;const g=i.getBoundingClientRect();return ue(t,{width:g.width,height:g.height}),E(t).width===r&&E(t).height===a?!1:(r=E(t).width,a=E(t).height,!0)}return Ss(()=>(h.observe(i),window.addEventListener("resize",d,{passive:!0}),()=>{h.disconnect(),window.removeEventListener("resize",d),c!==void 0&&clearTimeout(c)})),{size:{get current(){return E(t)}},shouldUpdateSize:f}},OA=i=>{const e=typeof i=="function"?i():i,{dom:t,canvas:n}=e,{size:s,shouldUpdateSize:r}=NA(t),a={dom:t,canvas:n,size:hf(()=>s.current),shouldUpdateSize:r};return wi("threlte-dom-context",a),a},Mh=()=>{const i=fi("threlte-dom-context");if(!i)throw new Error("useDOM can only be used in a child component to <Canvas>.");return i};class ms{allVertices=new Map;isolatedVertices=new Map;connectedVertices=new Map;sortedConnectedValues=[];needsSort=!1;listeners=new Map;emit(e,t){const n=this.listeners.get(e);if(n)for(const s of n)s(t)}on(e,t){let n=this.listeners.get(e);n||(n=new Set,this.listeners.set(e,n)),n.add(t)}off(e,t){this.listeners.get(e)?.delete(t)}get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices.get(e);t&&(this.isolatedVertices.set(e,t),this.connectedVertices.delete(e))}moveToConnected(e){const t=this.isolatedVertices.get(e);t&&(this.connectedVertices.set(e,t),this.isolatedVertices.delete(e))}getKey=e=>typeof e=="object"?e.key:e;add(e,t,n){let s=this.allVertices.get(e);if(s&&s.value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);s?s.value===void 0&&(s.value=t):(s={value:t,previous:new Set,next:new Set},this.allVertices.set(e,s));const r=s.next.size>0||s.previous.size>0;if(!n?.after&&!n?.before&&!r){this.isolatedVertices.set(e,s),this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices.set(e,s);if(n?.after){const a=Array.isArray(n.after)?n.after:[n.after];for(const o of a)s.previous.add(this.getKey(o));for(const o of a){const l=this.getKey(o),c=this.allVertices.get(l);if(c)c.next.add(e),this.moveToConnected(l);else{const u={value:void 0,previous:new Set,next:new Set([e])};this.allVertices.set(l,u),this.connectedVertices.set(l,u)}}}if(n?.before){const a=Array.isArray(n.before)?n.before:[n.before];for(const o of a)s.next.add(this.getKey(o));for(const o of a){const l=this.getKey(o),c=this.allVertices.get(l);if(c)c.previous.add(e),this.moveToConnected(l);else{const u={value:void 0,previous:new Set([e]),next:new Set};this.allVertices.set(l,u),this.connectedVertices.set(l,u)}}}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices.get(t)){this.isolatedVertices.delete(t),this.allVertices.delete(t),this.emit("node:removed",{key:t,type:"isolated"});return}const s=this.connectedVertices.get(t);if(!(!s||s.value===void 0)){for(const r of s.next){const a=this.connectedVertices.get(r);a&&(a.previous.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}for(const r of s.previous){const a=this.connectedVertices.get(r);a&&(a.next.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}this.connectedVertices.delete(t),this.allVertices.delete(t),this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0}}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((n,s)=>{t.push(e(n,s))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);for(const n of this.isolatedVertices.values())n.value!==void 0&&e(n.value,t++)}getValueByKey(e){return this.allVertices.get(e)?.value}sort(){const e=new Map,t=[],n=[];for(const[r,a]of this.connectedVertices)a.value!==void 0&&e.set(r,0);for(const[r]of e){const a=this.connectedVertices.get(r);for(const o of a.next)e.has(o)&&e.set(o,e.get(o)+1)}for(const[r,a]of e)a===0&&t.push(r);let s=0;for(;s<t.length;){const r=t[s++];n.push(r);const a=this.connectedVertices.get(r)?.next;if(a)for(const o of a){const l=(e.get(o)||0)-1;e.set(o,l),l===0&&t.push(o)}}if(n.length!==e.size)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");this.sortedConnectedValues.length=0;for(let r=0;r<n.length;r++){const a=this.connectedVertices.get(n[r]).value;a!==void 0&&this.sortedConnectedValues.push(a)}this.needsSort=!1}clear(){this.allVertices.clear(),this.isolatedVertices.clear(),this.connectedVertices.clear(),this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class FA{key;stage;callback;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}constructor(e,t,n){this.stage=e,this.key=t,this.callback=n}run(e){this.runTask&&this.callback(e)}}class kA extends ms{key;scheduler;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}get tasks(){return this.sortedVertices}callback=(e,t)=>t();constructor(e,t,n){super(),this.scheduler=e,this.key=t,this.start=this.start.bind(this),this.stop=this.stop.bind(this),n&&(this.callback=n.bind(this))}createTask(e,t,n){const s=new FA(this,e,t);return this.add(e,s,n),s}getTask(e){return this.getValueByKey(e)}removeTask=this.remove.bind(this);run(e){this.runTask&&this.callback(e,t=>{this.forEachNode(n=>{n.run(t??e)})})}runWithTiming(e){if(!this.runTask)return{};const t={};return this.callback(e,n=>{this.forEachNode(s=>{const r=performance.now();s.run(n??e);const a=performance.now()-r;t[s.key]=a})}),t}getSchedule(){return this.mapNodes(e=>e.key.toString())}}class BA extends ms{lastTime=0;clampDeltaTo=.1;get stages(){return this.sortedVertices}constructor(e){super(),e?.clampDeltaTo&&(this.clampDeltaTo=e.clampDeltaTo),this.run=this.run.bind(this)}createStage(e,t){const n=new kA(this,e,t?.callback);return this.add(e,n,{after:t?.after,before:t?.before}),n}getStage(e){return this.getValueByKey(e)}removeStage=this.remove.bind(this);run(e){const t=e-this.lastTime;this.forEachNode(n=>{n.run(Math.min(t/1e3,this.clampDeltaTo))}),this.lastTime=e}runWithTiming(e){const t=e-this.lastTime,n={},s=performance.now();return this.forEachNode(r=>{const a=performance.now(),o=r.runWithTiming(Math.min(t/1e3,this.clampDeltaTo)),l=performance.now()-a;n[r.key.toString()]={duration:l,tasks:o}}),this.lastTime=e,{total:performance.now()-s,stages:n}}getSchedule(e={tasks:!0}){return{stages:this.mapNodes(t=>{if(t===void 0)throw new Error("Stage not found");return{key:t.key.toString(),tasks:e.tasks?t.getSchedule():void 0}})}}dispose(){this.clear()}}const zA=i=>{const e=new BA,t=e.createStage(Symbol("threlte-main-stage")),n=tn(i),s=tn(()=>E(n).autoRender),r=tn(()=>E(n).renderMode);let a=tn(()=>E(s)??!0),o=tn(()=>E(r)??"on-demand");const l=new Set;let c=!0;const u=()=>E(o)==="always"||E(o)==="on-demand"&&(c||l.size>0)||E(o)==="manual"&&c,d={scheduler:e,autoInvalidations:l,frameInvalidated:{get current(){return c},set current(h){c=h}},advance:()=>{c=!0},autoRender:js(()=>E(a),h=>ue(a,h)),renderMode:js(()=>E(o),h=>ue(o,h)),invalidate(){c=!0},mainStage:t,shouldRender:u,renderStage:e.createStage(Symbol("threlte-render-stage"),{after:t,callback(h,f){d.shouldRender()&&f()}}),resetFrameInvalidation(){c=!1}};return Ss(()=>()=>{e.dispose()}),wi("threlte-scheduler-context",d),d},pr=()=>{const i=fi("threlte-scheduler-context");if(!i)throw new Error("useScheduler can only be used in a child component to <Canvas>.");return i};var VA=["forEach","isDisjointFrom","isSubsetOf","isSupersetOf"],GA=["difference","intersection","symmetricDifference","union"],Pm=!1;class Tc extends Set{#t=new Map;#e=bi(0);#n=bi(0);#r=Il||-1;constructor(e){if(super(),e){for(var t of e)super.add(t);this.#n.v=super.size}Pm||this.#s()}#i(e){return Il===this.#r?bi(e):id(e)}#s(){Pm=!0;var e=Tc.prototype,t=Set.prototype;for(const n of VA)e[n]=function(...s){return E(this.#e),t[n].apply(this,s)};for(const n of GA)e[n]=function(...s){E(this.#e);var r=t[n].apply(this,s);return new Tc(r)}}has(e){var t=super.has(e),n=this.#t,s=n.get(e);if(s===void 0){if(!t)return E(this.#e),!1;s=this.#i(!0),n.set(e,s)}return E(s),t}add(e){return super.has(e)||(super.add(e),ue(this.#n,super.size),gs(this.#e)),this}delete(e){var t=super.delete(e),n=this.#t,s=n.get(e);return s!==void 0&&(n.delete(e),ue(s,!1)),t&&(ue(this.#n,super.size),gs(this.#e)),t}clear(){if(super.size!==0){super.clear();var e=this.#t;for(var t of e.values())ue(t,!1);e.clear(),ue(this.#n,0),gs(this.#e)}}keys(){return this.values()}values(){return E(this.#e),super.values()}entries(){return E(this.#e),super.entries()}[Symbol.iterator](){return this.keys()}get size(){return E(this.#n)}}class HA extends Map{#t=new Map;#e=bi(0);#n=bi(0);#r=Il||-1;constructor(e){if(super(),e){for(var[t,n]of e)super.set(t,n);this.#n.v=super.size}}#i(e){return Il===this.#r?bi(e):id(e)}has(e){var t=this.#t,n=t.get(e);if(n===void 0)if(super.has(e))n=this.#i(0),t.set(e,n);else return E(this.#e),!1;return E(n),!0}forEach(e,t){this.#s(),super.forEach(e,t)}get(e){var t=this.#t,n=t.get(e);if(n===void 0)if(super.has(e))n=this.#i(0),t.set(e,n);else{E(this.#e);return}return E(n),super.get(e)}set(e,t){var n=this.#t,s=n.get(e),r=super.get(e),a=super.set(e,t),o=this.#e;if(s===void 0)s=this.#i(0),n.set(e,s),ue(this.#n,super.size),gs(o);else if(r!==t){gs(s);var l=o.reactions===null?null:new Set(o.reactions),c=l===null||!s.reactions?.every(u=>l.has(u));c&&gs(o)}return a}delete(e){var t=this.#t,n=t.get(e),s=super.delete(e);return n!==void 0&&(t.delete(e),ue(n,-1)),s&&(ue(this.#n,super.size),gs(this.#e)),s}clear(){if(super.size!==0){super.clear();var e=this.#t;ue(this.#n,0);for(var t of e.values())ue(t,-1);gs(this.#e),e.clear()}}#s(){E(this.#e);var e=this.#t;if(this.#n.v!==e.size){for(var t of super.keys())if(!e.has(t)){var n=this.#i(0);e.set(t,n)}}for([,n]of this.#t)E(n)}keys(){return E(this.#e),super.keys()}values(){return this.#s(),super.values()}entries(){return this.#s(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return E(this.#n),super.size}}const WA=()=>{const{size:i}=Mh(),e=Rc(i),{invalidate:t}=pr(),n=new Tc,s=new WeakMap,r=new mn(75,1,.1,1e3);r.position.z=5,r.lookAt(0,0,0);let a=bi(!1),o=bi(r);gn(()=>{if(E(o)!==r||E(a))return;const{width:c,height:u}=e.current;r.aspect=c/u,r.updateProjectionMatrix(),r.updateMatrixWorld(),t()}),gn(()=>{if(E(o)===void 0||n.size===0){let c=!1;E(o)!==r&&(ue(o,r),c=!0),E(a)&&(ue(a,!1),c=!0),c&&t()}});const l={makeDefaultCameras:n,makeDefaultCameraManual:s,camera:js(()=>E(o),c=>ue(o,c)),manual:{get current(){return E(a)},set(c){ue(a,c,!0)}}};return wi("threlte-camera-context",l),l},uf=()=>{const i=fi("threlte-camera-context");if(!i)throw new Error("useCamera can only be used in a child component to <Canvas>.");return i},XA=()=>{const i=new Map,e={disposableObjects:i,removeObjectFromDisposal:t=>{i.delete(t)},disposableObjectMounted:t=>{const n=i.get(t);n?i.set(t,n+1):i.set(t,1)},disposableObjectUnmounted:t=>{const n=i.get(t);n&&n>0&&(i.set(t,n-1),n-1<=0&&(i.delete(t),t.dispose()))}};return Ss(()=>()=>{for(const[t]of i)t.dispose();i.clear()}),wi("threlte-disposal-context",e),e},qA=()=>{const i=fi("threlte-disposal-context");if(!i)throw new Error("useDisposal can only be used in a child component to <Canvas>.");return i},nv=Symbol("threlte-parent-context"),iv=i=>{const e={get current(){return i()}};return wi(nv,e),e},sv=()=>fi(nv),$A=()=>{const i=sv();return hf(()=>i.current)},ju=Symbol("threlte-parent-object3d-context"),rv=i=>{const e=fi(ju),t={get current(){return i()??e.current}};return wi(ju,t),t},YA=()=>fi(ju),ZA=i=>{const e={scene:new Ud};return wi("threlte-scene-context",e),e},av=()=>{const i=fi("threlte-scene-context");if(!i)throw new Error("useScene can only be used in a child component to <Canvas>.");return i},KA=new class{#t=id(window.devicePixelRatio);#e(){const e=Ev(window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),"change",()=>{ue(this.#t,window.devicePixelRatio),e(),this.#e()})}constructor(){this.#e()}get current(){return E(this.#t),window.devicePixelRatio}},yi=(i,e)=>i?.[`is${e}`]===!0,JA=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom","filmGauge","filmOffset"]),ov=(i,e,t)=>{yi(i,"PerspectiveCamera")?i.aspect=e/t:yi(i,"OrthographicCamera")&&(i.left=e/-2,i.right=e/2,i.top=t/2,i.bottom=t/-2),i.updateProjectionMatrix(),i.updateMatrixWorld()},jA=(i,e,t,n)=>{const{camera:s,manual:r,makeDefaultCameras:a,makeDefaultCameraManual:o}=uf(),{invalidate:l}=pr(),{size:c}=Mh(),u=Rc(c);gn(()=>{if(!t())return;const d=i(),h=e();return a.add(d),o.set(d,h),s.set(d),r.set(h),l(),()=>{a.delete(d),o.delete(d);const f=a.values().next().value;s.current===d&&(f?(s.set(f),r.set(o.get(f)??!1)):r.set(!1),l())}}),gn(()=>{if(e())return;const d=i();for(const h in n())if(JA.has(h)){d.updateProjectionMatrix(),l();break}}),gn(()=>{e()||ov(i(),u.current.width,u.current.height)})},QA=i=>{const{camera:e,manual:t}=uf(),{scene:n}=av(),{invalidate:s,mainStage:r,renderStage:a,autoRender:o,scheduler:l,frameInvalidated:c}=pr(),{canvas:u,size:d,shouldUpdateSize:h}=Mh(),f=tn(i),p=Ce(()=>E(f).createRenderer?E(f).createRenderer(u):new tv({canvas:u,powerPreference:"high-performance",antialias:!0,alpha:!0}));l.createStage(Symbol("threlte-resize-stage"),{before:r}).createTask(Symbol("threlte-resize-task"),()=>{p.xr.isPresenting||h()&&(p.setSize(d.current.width,d.current.height),t.current||ov(e.current,d.current.width,d.current.height),s())});const g=a.createTask(Symbol("threlte-auto-render-task"),()=>{p.render(n,e.current)}),m=tn(()=>E(f).colorSpace),_=tn(()=>E(f).dpr),b=tn(()=>E(f).shadows),y=tn(()=>E(f).toneMapping);let w=tn(()=>E(m)??Ln),M=tn(()=>{const I=KA.current??window.devicePixelRatio;return Array.isArray(E(_))?Math.min(Math.max(E(_)[0],I),E(_)[1]):E(_)??I}),C=tn(()=>E(b)??Nl),x=tn(()=>E(y)??kc);const T={renderer:p,colorManagementEnabled:hf(()=>E(f).colorManagementEnabled??!0),colorSpace:js(()=>E(w),I=>ue(w,I)),dpr:js(()=>E(M),I=>ue(M,I)),shadows:js(()=>E(C),I=>ue(C,I)),toneMapping:js(()=>E(x),I=>ue(x,I)),autoRenderTask:g};wi("threlte-renderer-context",T);const R=Rc(o);return _t.enabled=E(f).colorManagementEnabled??!0,gn(()=>{p.outputColorSpace=E(w),s()}),gn(()=>{p.setPixelRatio(E(M)),s()}),gn(()=>{p.shadowMap.enabled=E(C)!==!1,E(C)!==!1&&E(C)!==!0?p.shadowMap.type=E(C):E(C)===!0&&(p.shadowMap.type=Nl),s()}),gn(()=>{p.toneMapping=E(x),s()}),gn(()=>(R.current?T.autoRenderTask.start():T.autoRenderTask.stop(),s(),()=>{T.autoRenderTask.stop()})),p.setAnimationLoop(I=>{l.run(I),c.current=!1}),Ss(()=>()=>{p.setAnimationLoop(null);try{p.dispose()}catch{}}),T},eC=()=>{const i=fi("threlte-renderer-context");if(!i)throw new Error("useRenderer can only be used in a child component to <Canvas>.");return i},tC=()=>{const i=Ps({});return wi("threlte-user-context",i),i},nC=()=>{const i=fi("threlte-user-context");if(!i)throw new Error("useUserContext can only be used in a child component to <Canvas>.");return i},iC=i=>{const{scene:e}=ZA(),t=typeof i=="function"?i:()=>i;return{scene:e,...OA(t),...qy(),...iv(()=>e),...rv(()=>e),...XA(),...zA(t),...WA(),...QA(t),...tC()}};var sC=new Set(["$$slots","$$events","$$legacy","children"]);function rC(i,e){bn(e,!0);let t=fo(e,sC);iC(()=>t);var n=$r(),s=an(n);Cc(s,()=>e.children),lt(i,n),Sn()}var aC=new Set(["$$slots","$$events","$$legacy","children"]),oC=Mt('<div class="svelte-clyidt"><canvas class="svelte-clyidt"><!></canvas></div>');function lC(i,e){let t=fo(e,aC),n=bi(void 0),s=bi(void 0);var r=oC(),a=Lt(r),o=Lt(a);{var l=c=>{rC(c,rd({get dom(){return E(s)},get canvas(){return E(n)}},()=>t,{children:(u,d)=>{var h=$r(),f=an(h);Cc(f,()=>e.children??sd),lt(u,h)},$$slots:{default:!0}}))};pn(o,c=>{E(n)&&E(s)&&c(l)})}bt(a),Dl(a,c=>ue(n,c),()=>E(n)),bt(r),Dl(r,c=>ue(s,c),()=>E(s)),lt(i,r)}const cC=(i,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let s=0;s<t.length;s+=1)if(i=i[t[s]],i==null)return console.error(`Cannot resolve property path "${e}": "${t[s]}" is ${i}`),{target:{},key:""};return{target:i,key:n}}else return{target:i,key:e}},hC=i=>typeof i=="object"&&i!==null,uC=(i,e)=>{const{invalidate:t}=pr(),n=sv(),s=YA();gn(()=>{t();const r=i(),a=e();if(a===void 0&&yi(r,"Object3D")){const o=s.current;return o?.add(r),()=>{t(),o?.remove(r)}}if(a===void 0&&hC(n.current)){const o=n.current;if(yi(r,"Material")){const l=o.material;return o.material=r,()=>{t(),o.material=l}}else if(yi(r,"BufferGeometry")){const l=o.geometry;return o.geometry=r,()=>{t(),o.geometry=l}}}if(a===!1)return()=>{t()};if(typeof a=="function"){const o=a({ref:r,parent:n.current,parentObject3D:s.current});return()=>{t(),o?.()}}if(typeof a=="string"){const{target:o,key:l}=cC(n.current,a);if(l in o){const c=o[l];return o[l]=r,()=>{t(),o[l]=c}}else return o[l]=r,()=>{t(),delete o[l]}}if(yi(a,"Object3D")&&yi(r,"Object3D"))return a.add(r),()=>{t(),a.remove(r)}})},Dm=Symbol("threlte-disposable-object-context"),dC=i=>typeof i?.dispose=="function",fC=(i,e)=>{const{disposableObjectMounted:t,disposableObjectUnmounted:n,removeObjectFromDisposal:s}=qA(),r=fi(Dm),a=tn(()=>{const l=e();return l!==void 0?l!==!1:r?.()!==!1});wi(Dm,()=>E(a));const o=new Set;Ss(()=>{const l=i();dC(l)&&(E(a)?(t(l),o.add(l)):(s(l),o.delete(l)))}),Ss(()=>()=>{for(const l of o)n(l);o.clear()})};let Qu;const pC=i=>{Qu=i},mC=()=>{const i=Qu;return Qu=void 0,i},gC="threlte-plugin-context",vC=i=>{const e=fi(gC);if(!e)return;const t=[],n=Object.values(e);if(n.length>0)for(let s=0;s<n.length;s++){const r=n[s],a=r(i);a&&a.pluginProps&&t.push(...a.pluginProps)}return{pluginsProps:t}},_C=i=>typeof i=="string"||typeof i=="number"||typeof i=="boolean"||typeof i>"u"||i===null,yC=(i,e,t)=>{const n=i[e],s=Array.isArray(t);!s&&typeof t=="number"&&typeof n=="object"&&n!==null&&typeof n.setScalar=="function"&&!n.isColor?n.setScalar(t):typeof n=="object"&&n!==null&&typeof n.set=="function"?s?n.set(...t):n.set(t):i[e]=t},xC=(i,e,t)=>{const{invalidate:n}=pr(),s=new Map,r=(a,o,l)=>{if(_C(l)){const h=s.get(o);if(h&&h.instance===a&&h.value===l)return;s.set(o,{instance:a,value:l})}else s.delete(o);let c=a,u=o;const d=o.includes(".");if(d){const h=o.split(".");u=h.pop();for(let f=0;f<h.length;f++)if(c=c[h[f]],c==null){console.error(`Cannot resolve property path "${o}": "${h[f]}" is ${c}`);return}}if(typeof l=="function"&&u.startsWith("on")&&!d&&"addEventListener"in c){const h=c,f=u.slice(2);return h.addEventListener(f,l),()=>{h.removeEventListener?.(f,l)}}l!=null?yC(c,u,l):c[u]=l,n()};gn(()=>{const a=i(),o=e(),l=t();s.clear(),Ce(()=>{for(const c in o)l?.includes(c)||gn(()=>r(a,c,o[c]))})})},bC=i=>typeof i=="function"&&Function.prototype.toString.call(i).startsWith("class "),SC=(i,e)=>bC(i)?Array.isArray(e)?new i(...e):new i:i;var MC=new Set(["$$slots","$$events","$$legacy","ref","manual","makeDefault"]);function wC(i,e){bn(e,!0);let t=Xe(e,"manual",3,!1),n=Xe(e,"makeDefault",3,!1),s=fo(e,MC);jA(()=>e.ref,()=>t(),()=>n(),()=>s),Sn()}var TC=new Set(["$$slots","$$events","$$legacy","is","args","attach","dispose","ref","oncreate","children","makeDefault","manual"]),EC=Mt("<!> <!>",1);function Lm(i,e){bn(e,!0);let t=Xe(e,"is",19,mC),n=Xe(e,"ref",15),s=fo(e,TC);const r=tn(()=>SC(t(),e.args)),a=vC({get ref(){return E(r)},get args(){return e.args},get attach(){return e.attach},get manual(){return e.manual},get makeDefault(){return e.makeDefault},get dispose(){return e.dispose},get props(){return s}});xC(()=>E(r),()=>s,()=>a?.pluginsProps),uC(()=>E(r),()=>e.attach),fC(()=>E(r),()=>e.dispose),rv(()=>yi(E(r),"Object3D")?E(r):void 0),iv(()=>E(r)),Ss(()=>{if(E(r))return Ce(()=>(n()!==E(r)&&n(E(r)),e.oncreate?.(E(r))))});var o=EC(),l=an(o);{var c=h=>{wC(h,rd({get ref(){return E(r)},get manual(){return e.manual},get makeDefault(){return e.makeDefault}},()=>s))},u=tn(()=>yi(E(r),"PerspectiveCamera")||yi(E(r),"OrthographicCamera"));pn(l,h=>{E(u)&&h(c)})}var d=tt(l,2);Cc(d,()=>e.children??sd,()=>({ref:E(r)})),lt(i,o),Sn()}const AC={},xt=new Proxy(Lm,{get(i,e){if(typeof e!="string")return Reflect.get(i,e);const t=AC[e]||UA[e];if(t===void 0)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return(...n)=>(pC(t),Lm(...n))}}),CC=()=>{const i=pr(),e=eC(),t=uf(),n=av(),s=Mh();return{advance:i.advance,autoRender:i.autoRender,autoRenderTask:e.autoRenderTask,camera:t.camera,colorManagementEnabled:e.colorManagementEnabled,colorSpace:e.colorSpace,dpr:e.dpr,invalidate:i.invalidate,mainStage:i.mainStage,renderer:e.renderer,renderMode:i.renderMode,renderStage:i.renderStage,scheduler:i.scheduler,shadows:e.shadows,shouldRender:i.shouldRender,dom:s.dom,canvas:s.canvas,size:s.size,toneMapping:e.toneMapping,get scene(){return n.scene},set scene(a){n.scene=a}}},RC=typeof window<"u";function IC(i,e,t){if(!RC)return{task:void 0,start:()=>{},stop:()=>{},started:Rv(!1)};let n,s,r;ms.isKey(i)?(n=i,s=e,r=t):(n=Symbol("useTask"),s=i,r=e);const a=pr(),o=r?.autoInvalidate??!0;let l=a.mainStage,c=tn(()=>r?.running?.()??r?.autoStart??!0);if(r){if(r.stage)if(ms.isValue(r.stage))l=r.stage;else{const d=a.scheduler.getStage(r.stage);if(!d)throw new Error(`No stage found with key ${r.stage.toString()}`);l=d}else if(r.after)if(Array.isArray(r.after))for(let d=0;d<r.after.length;d++){const h=r.after[d];if(ms.isValue(h)){l=h.stage;break}}else ms.isValue(r.after)&&(l=r.after.stage);else if(r.before)if(Array.isArray(r.before))for(let d=0;d<r.before.length;d++){const h=r.before[d];if(ms.isValue(h)){l=h.stage;break}}else ms.isValue(r.before)&&(l=r.before.stage)}const u=l.createTask(n,s,r);return gn(()=>{E(c)?(u.start(),o&&a.autoInvalidations.add(s)):(u.stop(),o&&a.autoInvalidations.delete(s))}),gn(()=>()=>{l.removeTask(n),o&&a.autoInvalidations.delete(s)}),{task:u,start:()=>{ue(c,!0)},stop:()=>{ue(c,!1)},started:od(()=>E(c))}}function PC(i,e,t){const n=nC();if(!n)throw new Error("No user context store found, did you invoke this function outside of your main <Canvas> component?");return e?(n.update(s=>{if(i in s)return s;const r=typeof e=="function"?e():e;return s[i]=r,s}),n.current[i]):Iv(n,s=>s[i])}const Um=Symbol(),DC=i=>typeof i?.subscribe=="function",lv=(i,e,t)=>{const n=i().map(a=>DC(a)?Rc(a):Um),s=tn(()=>i().map((a,o)=>n[o]===Um?a:n[o].current)),r=()=>{E(s);let a;return Ce(()=>{a=e(E(s))}),a};t?gn(r):Ss(r)},LC=(i,e)=>lv(i,e,!1),UC=(i,e)=>lv(i,e,!0);Object.assign(LC,{pre:UC});const Xs=i=>({subscribe:i.subscribe,get current(){return i.current}});let Ga=0;const df=Ps(!1),wh=Ps(!1),ff=Ps(void 0),pf=Ps(0),mf=Ps(0),cv=Ps([]),gf=Ps(0),{onStart:NC,onLoad:OC,onError:FC}=fr;fr.onStart=(i,e,t)=>{NC?.(i,e,t),wh.set(!0),ff.set(i),pf.set(e),mf.set(t);const n=(e-Ga)/(t-Ga);gf.set(n),n===1&&df.set(!0)};fr.onLoad=()=>{OC?.(),wh.set(!1)};fr.onError=i=>{FC?.(i),cv.update(e=>[...e,i])};fr.onProgress=(i,e,t)=>{e===t&&(Ga=t),wh.set(!0),ff.set(i),pf.set(e),mf.set(t);const n=(e-Ga)/(t-Ga)||1;gf.set(n),n===1&&df.set(!0)};Xs(wh),Xs(ff),Xs(pf),Xs(mf),Xs(cv),Xs(gf),Xs(df);const kC=()=>PC("threlte-controls",{orbitControls:zr(void 0),trackballControls:zr(void 0),cameraControls:zr(void 0),transformControls:zr(void 0)});new nt;new nt;new Et;const BC="Right",zC="Top",VC="Front",GC="Left",HC="Bottom",WC="Back";[BC,zC,VC,GC,HC,WC].map(i=>i.toLocaleLowerCase());Ae.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new re(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ri.line={uniforms:$d.merge([Ae.common,Ae.fog,Ae.line]),vertexShader:`
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
		`};new nt;const Nm={type:"change"},vf={type:"start"},hv={type:"end"},Ml=new hr,Om=new Yi,XC=Math.cos(70*Wg.DEG2RAD),on=new P,Vn=2*Math.PI,Ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Mu=1e-6;class qC extends q0{constructor(e,t=null){super(e,t),this.state=Ot.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qs.ROTATE,MIDDLE:Qs.DOLLY,RIGHT:Qs.PAN},this.touches={ONE:Ys.ROTATE,TWO:Ys.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new _n,this._lastTargetPosition=new P,this._quat=new _n().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qu,this._sphericalDelta=new qu,this._scale=1,this._panOffset=new P,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new P,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=YC.bind(this),this._onPointerDown=$C.bind(this),this._onPointerUp=ZC.bind(this),this._onContextMenu=nR.bind(this),this._onMouseWheel=jC.bind(this),this._onKeyDown=QC.bind(this),this._onTouchStart=eR.bind(this),this._onTouchMove=tR.bind(this),this._onMouseDown=KC.bind(this),this._onMouseMove=JC.bind(this),this._interceptControlDown=iR.bind(this),this._interceptControlUp=sR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Nm),this.update(),this.state=Ot.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;on.copy(t).sub(this.target),on.applyQuaternion(this._quat),this._spherical.setFromVector3(on),this.autoRotate&&this.state===Ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Vn:n>Math.PI&&(n-=Vn),s<-Math.PI?s+=Vn:s>Math.PI&&(s-=Vn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(on.setFromSpherical(this._spherical),on.applyQuaternion(this._quatInverse),t.copy(this.target).add(on),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=on.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=on.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ml.origin.copy(this.object.position),Ml.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ml.direction))<XC?this.object.lookAt(this.target):(Om.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ml.intersectPlane(Om,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Mu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Mu||this._lastTargetPosition.distanceToSquared(this.target)>Mu?(this.dispatchEvent(Nm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Vn/60*this.autoRotateSpeed*e:Vn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){on.setFromMatrixColumn(t,0),on.multiplyScalar(-e),this._panOffset.add(on)}_panUp(e,t){this.screenSpacePanning===!0?on.setFromMatrixColumn(t,1):(on.setFromMatrixColumn(t,0),on.crossVectors(this.object.up,on)),on.multiplyScalar(e),this._panOffset.add(on)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;on.copy(s).sub(this.target);let r=on.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function $C(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function YC(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function ZC(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(hv),this.state=Ot.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function KC(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Qs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ot.DOLLY;break;case Qs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ot.ROTATE}break;case Qs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ot.PAN}break;default:this.state=Ot.NONE}this.state!==Ot.NONE&&this.dispatchEvent(vf)}function JC(i){switch(this.state){case Ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function jC(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ot.NONE||(i.preventDefault(),this.dispatchEvent(vf),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(hv))}function QC(i){this.enabled!==!1&&this._handleKeyDown(i)}function eR(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ys.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ot.TOUCH_ROTATE;break;case Ys.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ot.TOUCH_PAN;break;default:this.state=Ot.NONE}break;case 2:switch(this.touches.TWO){case Ys.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ot.TOUCH_DOLLY_PAN;break;case Ys.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ot.TOUCH_DOLLY_ROTATE;break;default:this.state=Ot.NONE}break;default:this.state=Ot.NONE}this.state!==Ot.NONE&&this.dispatchEvent(vf)}function tR(i){switch(this._trackPointer(i),this.state){case Ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ot.NONE}}function nR(i){this.enabled!==!1&&i.preventDefault()}function iR(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sR(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var rR=new Set(["$$slots","$$events","$$legacy","camera","ref","children"]);function aR(i,e){bn(e,!0);const t=()=>Nf(d,"$parent",s),n=()=>Nf(c,"$defaultCamera",s),[s,r]=kv();let a=Xe(e,"ref",15),o=fo(e,rR);const{dom:l,camera:c,invalidate:u}=CC(),d=$A(),h=tn(()=>e.camera?e.camera:yi(t(),"Camera")?t():n()),f=new qC(Ce(()=>E(h)),l);gn(()=>{f.object=E(h)});const{orbitControls:p}=kC();IC(()=>{f.update()},{autoInvalidate:!1,running:()=>e.autoRotate||e.enableDamping||!1});const v=g=>{u(),e.onchange?.(g)};gn(()=>(p.set(f),()=>{p.set(void 0)})),xt(i,rd({get is(){return f}},()=>o,{onchange:v,get ref(){return a()},set ref(g){a(g)},children:(g,m)=>{var _=$r(),b=an(_);Cc(b,()=>e.children??sd,()=>({ref:f})),lt(g,_)},$$slots:{default:!0}})),Sn(),r()}new nt;new nt;new sn;const oR=it.shadowmap_pars_fragment;oR.includes("unpackRGBAToDepth");`${it.logdepthbuf_pars_vertex}${it.fog_pars_vertex}${it.logdepthbuf_vertex}${it.fog_vertex}`;`${it.tonemapping_fragment}${it.colorspace_fragment}`;`${it.tonemapping_fragment}${it.colorspace_fragment}`;const lR=`

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
`,cR=`

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
`,hR=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,uR=hR,dR=`
	${lR}
	${cR}
`;`${uR}${dR}${it.tonemapping_fragment}${it.colorspace_fragment}`;typeof window<"u"&&document.createElement("div");new HA;for(let i=0;i<256;i++)(i<16?"0":"")+i.toString(16);new ca(-1,1,1,-1,0,1);class fR extends dt{constructor(){super(),this.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Be([0,2,0,0,2,0],2))}}new fR;var uv={exports:{}};uv.exports=Th;uv.exports.default=Th;function Th(i,e,t){t=t||2;var n=e&&e.length,s=n?e[0]*t:i.length,r=dv(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;var o,l,c,u,d,h,f;if(n&&(r=_R(i,e,r,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(var p=t;p<s;p+=t)d=i[p],h=i[p+1],d<o&&(o=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);f=Math.max(c-o,u-l),f=f!==0?32767/f:0}return lo(r,a,t,o,l,f,0),a}function dv(i,e,t,n,s){var r,a;if(s===nd(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Fm(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Fm(r,i[r],i[r+1],a);return a&&Eh(a,a.next)&&(ho(a),a=a.next),a}function cr(i,e){if(!i)return i;e||(e=i);var t=i,n;do if(n=!1,!t.steiner&&(Eh(t,t.next)||$t(t.prev,t,t.next)===0)){if(ho(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function lo(i,e,t,n,s,r,a){if(i){!a&&r&&MR(i,n,s,r);for(var o=i,l,c;i.prev!==i.next;){if(l=i.prev,c=i.next,r?mR(i,n,s,r):pR(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),ho(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=gR(cr(i),e,t),lo(i,e,t,n,s,r,2)):a===2&&vR(i,e,t,n,s,r):lo(cr(i),e,t,n,s,r,1);break}}}}function pR(i){var e=i.prev,t=i,n=i.next;if($t(e,t,n)>=0)return!1;for(var s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,h=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,p=n.next;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&Xr(s,o,r,l,a,c,p.x,p.y)&&$t(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function mR(i,e,t,n){var s=i.prev,r=i,a=i.next;if($t(s,r,a)>=0)return!1;for(var o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=o<l?o<c?o:c:l<c?l:c,p=u<d?u<h?u:h:d<h?d:h,v=o>l?o>c?o:c:l>c?l:c,g=u>d?u>h?u:h:d>h?d:h,m=ed(f,p,e,t,n),_=ed(v,g,e,t,n),b=i.prevZ,y=i.nextZ;b&&b.z>=m&&y&&y.z<=_;){if(b.x>=f&&b.x<=v&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&Xr(o,u,l,d,c,h,b.x,b.y)&&$t(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&Xr(o,u,l,d,c,h,y.x,y.y)&&$t(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=v&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&Xr(o,u,l,d,c,h,b.x,b.y)&&$t(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&Xr(o,u,l,d,c,h,y.x,y.y)&&$t(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function gR(i,e,t){var n=i;do{var s=n.prev,r=n.next.next;!Eh(s,r)&&fv(s,n,n.next,r)&&co(s,r)&&co(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ho(n),ho(n.next),n=i=r),n=n.next}while(n!==i);return cr(n)}function vR(i,e,t,n,s,r){var a=i;do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&ER(a,o)){var l=pv(a,o);a=cr(a,a.next),l=cr(l,l.next),lo(a,e,t,n,s,r,0),lo(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function _R(i,e,t,n){var s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=dv(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(TR(c));for(s.sort(yR),r=0;r<s.length;r++)t=xR(s[r],t);return t}function yR(i,e){return i.x-e.x}function xR(i,e){var t=bR(i,e);if(!t)return e;var n=pv(t,i);return cr(n,n.next),cr(t,t.next)}function bR(i,e){var t=e,n=i.x,s=i.y,r=-1/0,a;do{if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){var o=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(o<=n&&o>r&&(r=o,a=t.x<t.next.x?t:t.next,o===n))return a}t=t.next}while(t!==e);if(!a)return null;var l=a,c=a.x,u=a.y,d=1/0,h;t=a;do n>=t.x&&t.x>=c&&n!==t.x&&Xr(s<u?n:r,s,c,u,s<u?r:n,s,t.x,t.y)&&(h=Math.abs(s-t.y)/(n-t.x),co(t,i)&&(h<d||h===d&&(t.x>a.x||t.x===a.x&&SR(a,t)))&&(a=t,d=h)),t=t.next;while(t!==l);return a}function SR(i,e){return $t(i.prev,i,e.prev)<0&&$t(e.next,i,i.next)<0}function MR(i,e,t,n){var s=i;do s.z===0&&(s.z=ed(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wR(s)}function wR(i){var e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function ed(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function TR(i){var e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Xr(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function ER(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!AR(i,e)&&(co(i,e)&&co(e,i)&&CR(i,e)&&($t(i.prev,i,e.prev)||$t(i,e.prev,e))||Eh(i,e)&&$t(i.prev,i,i.next)>0&&$t(e.prev,e,e.next)>0)}function $t(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Eh(i,e){return i.x===e.x&&i.y===e.y}function fv(i,e,t,n){var s=Tl($t(i,e,t)),r=Tl($t(i,e,n)),a=Tl($t(t,n,i)),o=Tl($t(t,n,e));return!!(s!==r&&a!==o||s===0&&wl(i,t,e)||r===0&&wl(i,n,e)||a===0&&wl(t,i,n)||o===0&&wl(t,e,n))}function wl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Tl(i){return i>0?1:i<0?-1:0}function AR(i,e){var t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&fv(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function co(i,e){return $t(i.prev,i,i.next)<0?$t(i,e,i.next)>=0&&$t(i,i.prev,e)>=0:$t(i,e,i.prev)<0||$t(i,i.next,e)<0}function CR(i,e){var t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function pv(i,e){var t=new td(i.i,i.x,i.y),n=new td(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Fm(i,e,t,n){var s=new td(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ho(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function td(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Th.deviation=function(i,e,t,n){var s=e&&e.length,r=s?e[0]*t:i.length,a=Math.abs(nd(i,0,r,t));if(s)for(var o=0,l=e.length;o<l;o++){var c=e[o]*t,u=o<l-1?e[o+1]*t:i.length;a-=Math.abs(nd(i,c,u,t))}var d=0;for(o=0;o<n.length;o+=3){var h=n[o]*t,f=n[o+1]*t,p=n[o+2]*t;d+=Math.abs((i[h]-i[p])*(i[f+1]-i[h+1])-(i[h]-i[f])*(i[p+1]-i[h+1]))}return a===0&&d===0?0:Math.abs((d-a)/a)};function nd(i,e,t,n){for(var s=0,r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}Th.flatten=function(i){for(var e=i[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,s=0;s<i.length;s++){for(var r=0;r<i[s].length;r++)for(var a=0;a<e;a++)t.vertices.push(i[s][r][a]);s>0&&(n+=i[s-1].length,t.holes.push(n))}return t};var km;(i=>{function e(s){let r=s.slice();return r.sort(i.POINT_COMPARATOR),i.makeHullPresorted(r)}i.makeHull=e;function t(s){if(s.length<=1)return s.slice();let r=[];for(let o=0;o<s.length;o++){const l=s[o];for(;r.length>=2;){const c=r[r.length-1],u=r[r.length-2];if((c.x-u.x)*(l.y-u.y)>=(c.y-u.y)*(l.x-u.x))r.pop();else break}r.push(l)}r.pop();let a=[];for(let o=s.length-1;o>=0;o--){const l=s[o];for(;a.length>=2;){const c=a[a.length-1],u=a[a.length-2];if((c.x-u.x)*(l.y-u.y)>=(c.y-u.y)*(l.x-u.x))a.pop();else break}a.push(l)}return a.pop(),r.length==1&&a.length==1&&r[0].x==a[0].x&&r[0].y==a[0].y?r:r.concat(a)}i.makeHullPresorted=t;function n(s,r){return s.x<r.x?-1:s.x>r.x?1:s.y<r.y?-1:s.y>r.y?1:0}i.POINT_COMPARATOR=n})(km||(km={}));new ss;new nt;const Ea=new P;function ii(i,e,t,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Ea.copy(e),Ea[n]=0,Ea.normalize();const c=.5*a/(a+o),u=1-Ea.angleTo(i)/l;return Math.sign(Ea[t])===1?u*c:o/(a+o)+c+c*(1-u)}class Ah extends Cs{constructor(e=1,t=1,n=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new P,c=new P,u=new P(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,v=new P,g=.5/a;for(let m=0,_=0;m<d.length;m+=3,_+=2)switch(l.fromArray(d,m),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),d[m+0]=u.x*Math.sign(l.x)+c.x*r,d[m+1]=u.y*Math.sign(l.y)+c.y*r,d[m+2]=u.z*Math.sign(l.z)+c.z*r,h[m+0]=c.x,h[m+1]=c.y,h[m+2]=c.z,Math.floor(m/p)){case 0:v.set(1,0,0),f[_+0]=ii(v,c,"z","y",r,n),f[_+1]=1-ii(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),f[_+0]=1-ii(v,c,"z","y",r,n),f[_+1]=1-ii(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),f[_+0]=1-ii(v,c,"x","z",r,e),f[_+1]=ii(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),f[_+0]=1-ii(v,c,"x","z",r,e),f[_+1]=1-ii(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),f[_+0]=1-ii(v,c,"x","y",r,e),f[_+1]=1-ii(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),f[_+0]=ii(v,c,"x","y",r,e),f[_+1]=1-ii(v,c,"y","x",r,t);break}}static fromJSON(e){return new Ah(e.width,e.height,e.depth,e.segments,e.radius)}}var RR=Mt("<!><!>",1),IR=Mt("<!> <!>",1);function PR(i,e){bn(e,!1);let t=Xe(e,"position",24,()=>[0,0,0]);const n=new Ah(1.08,.28,.62,8,.09);ns(),xt.Group(i,{get position(){return t()},children:(s,r)=>{var a=IR(),o=an(a);xt.Mesh(o,{children:(c,u)=>{var d=RR(),h=an(d);xt.BoxGeometry(h,{args:[.82,.16,.44]});var f=tt(h);xt.MeshBasicMaterial(f,{color:"#bff8ff"}),lt(c,d)},$$slots:{default:!0}});var l=tt(o,2);xt.Mesh(l,{get geometry(){return n},children:(c,u)=>{xt.MeshPhysicalMaterial(c,{color:"#eafcff",emissive:"#43d9ef",emissiveIntensity:.18,metalness:.08,roughness:.1,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:2})},$$slots:{default:!0}}),lt(s,a)},$$slots:{default:!0}}),Sn()}var DR=Mt("<!><!>",1),LR=Mt("<!> <!>",1);function El(i,e){bn(e,!1);const t=rt();let n=Xe(e,"color",8),s=Xe(e,"position",24,()=>[0,0,0]),r=Xe(e,"rotation",24,()=>[0,0,0]),a=Xe(e,"scale",8,1),o=Xe(e,"glow",8,.28);const l={cyan:"#30e7ff",pink:"#ff4aa2",yellow:"#ffe15b",green:"#63f58b",purple:"#aa66ff",orange:"#ff8a35",blue:"#4d7cff",wild:"#ffffff"},c=new Ah(.94,.42,.94,8,.1);zt(()=>xe(n()),()=>{ue(t,l[n()])}),Fi(),ns(),xt.Group(i,{get position(){return s()},get rotation(){return r()},get scale(){return a()},children:(u,d)=>{var h=LR(),f=an(h);xt.Mesh(f,{children:(v,g)=>{var m=DR(),_=an(m);xt.BoxGeometry(_,{args:[.72,.25,.72]});var b=tt(_);xt.MeshBasicMaterial(b,{get color(){return E(t)},transparent:!0,get opacity(){return o()}}),lt(v,m)},$$slots:{default:!0}});var p=tt(f,2);xt.Mesh(p,{get geometry(){return c},castShadow:!0,receiveShadow:!0,children:(v,g)=>{xt.MeshPhongMaterial(v,{get color(){return E(t)},specular:"#ffffff",shininess:90})},$$slots:{default:!0}}),lt(u,h)},$$slots:{default:!0}}),Sn()}function mv(i,e,t,n,s){const r=new Map(t.filter(v=>i.includes(v.playerId)).map(v=>[v.playerId,v])),a=i.filter(v=>!r.has(v)),o=i.length===1?r.size===1:r.size>=i.length-1;if(o)for(const v of a)r.set(v,{playerId:v,result:"cleared",tick:Number.MAX_SAFE_INTEGER,score:0,misses:0,seat:i.indexOf(v)});const l=[...r.values()].sort((v,g)=>(v.result==="cleared"?0:1)-(g.result==="cleared"?0:1)||v.tick-g.tick||g.score-v.score||v.misses-g.misses||v.seat-g.seat),c=Object.fromEntries(i.map(v=>[v,0]));o&&l.forEach((v,g)=>c[v.playerId]=Math.max(0,i.length-1-g));const u=Object.fromEntries(i.map(v=>[v,(e[v]??0)+c[v]])),d=Math.max(...Object.values(u)),h=o&&s>=2?i.filter(v=>u[v]===d):[],f=n.filter(v=>i.includes(v)),p=o&&s>=2;return{playerIds:i,terminalPlayerIds:[...r.keys()],readyPlayerIds:f,finished:o,winnerId:p?h.length===1?h[0]:void 0:l[0]?.playerId,winnerIds:h,allReady:o&&i.every(v=>f.includes(v)),round:s,matchComplete:p,roundPoints:c,scores:u}}const UR=Object.freeze({place:41,settle:30,burst:24,fall:22,miss:54});var Br=Mt("<!><!>",1),NR=Mt("<!><!> <!><!><!><!><!> <!> <!> <!> <!> <!> <!><!> <!> <!> <!> <!>",1),OR=Mt('<button class="svelte-1y6lvup"></button>'),FR=Mt('<div class="lanes svelte-1y6lvup"></div>'),kR=Mt("<button> </button>"),BR=Mt('<strong class="countdown svelte-1y6lvup"> </strong>'),zR=Mt('<div data-ramp-direction="far-to-player" data-roll-direction="edge-over-edge-toward-player" data-paddle-position="player-edge" data-bin-position="below-paddle" data-bin-layout="vertical-stacks"><!> <!><!><!></div>');function wI(i,e){bn(e,!1);const t=rt();let n=Xe(e,"state",8),s=Xe(e,"compact",8,!1),r=Xe(e,"label",8,"Stax ramp"),a=Xe(e,"selectLane",8,void 0),o=Xe(e,"onChainCue",8,void 0),l=Xe(e,"onTerminalPresentationComplete",8,void 0),c=rt(!1);const u=N=>(N-2)*1.15,d=.13,h=.72,f=-.52,p=.09,v=-4.35,g=3.55,m=4.08,_=.2,b=.42,y=-1.78,w=5.35,M=-2.25,C=N=>h+p/Math.cos(d)-(N-f)*Math.tan(d),x=(N,W=!1)=>{const ie=Math.min(1,N/(W?360:E(t))),de=W?1-ie:ie,$=v+de*(g-v),J=(W?-1:1)*N*.06+d,ve=.21*Math.abs(Math.cos(J))+.47*Math.abs(Math.sin(J));return{z:$,y:C($)+ve+.015,roll:J}},{place:T,settle:R,burst:I,fall:z}=UR;let L=rt([]),F=rt(),k=rt([]),U=rt(""),O=-1,B=-1,H=rt(0),ne=0,j=!1,te=rt(!0),Re=0,ct=0,at=new Map;const Q=N=>Math.atan2(Math.sin(N),Math.cos(N)),ge=N=>N+(Math.PI-(N%Math.PI+Math.PI)%Math.PI)%Math.PI,he=()=>{at=new Map(n().ramp.map(N=>[N.id,{color:N.color,lane:N.lane,returning:N.returning}])),n().paddle.map(N=>({...N})),n().columns.map(N=>N.length),n().placements},We=()=>{if(ue(L,E(L).filter(N=>E(H)-N.startedTick<N.durationTicks)),E(F)){const N=E(H)-E(F).startedTick,W=T+R+E(F).waves.length*(I+z);if(N>=W)ue(F,void 0);else{const ie=Math.floor(Math.max(0,N-T-R)/(I+z));N>=T+R&&ie<E(F).waves.length&&ie>=E(F).cued&&(o()?.(),Fv(F,E(F).cued=ie+1))}}},Ke=()=>n().phase==="cleared"||n().phase==="lost",le=N=>{if(!Ke()||!E(L).length&&!E(F)){const W=!E(te)&&Ke();ue(te,!0),Re=0,ct=0,W&&l()?.();return}ct&&ue(H,E(H)+Math.min(3,(N-ct)/(1e3/60))),ct=N,We(),Re=requestAnimationFrame(le)},Te=()=>{ue(te,!1),Re||(ct=0,Re=requestAnimationFrame(le))};uo(()=>()=>cancelAnimationFrame(Re));function Ne(){if(!j||n().phase==="countdown"){const $=!j&&Ke();ue(L,[]),ue(F,void 0),O=-1,B=-1,ue(H,n().tick),ne=n().tick,j=!0,ue(te,!0),he(),$&&queueMicrotask(()=>l()?.());return}ue(H,E(H)+Math.min(1,Math.max(0,n().tick-ne))),ne=n().tick,We();const N=new Set(n().paddle.map($=>$.id));for(const[$,J]of at)n().ramp.some(ve=>ve.id===$)||ue(L,[...E(L),{id:$,color:J.color,kind:N.has($)?"catch":"miss",lane:J.lane,startedTick:E(H),durationTicks:N.has($)?25:54,roll:Q(x(J.returning?360:E(t),J.returning).roll)}]);const W=n().lastPlacement,ie=!!(W&&W.placement!==O),de=n().lastClearWaves.length&&n().placements!==B;ie&&W&&(ue(L,[...E(L).filter($=>$.id!==W.id),{id:W.id,color:W.color,kind:"place",lane:W.column,column:W.column,row:W.row,startedTick:E(H),durationTicks:T,roll:0}]),O=W.placement),de&&W&&(ue(F,{startedTick:E(H),column:W.column,placedRow:W.row,waves:structuredClone(n().lastClearWaves),cued:0}),B=n().placements),Ke()&&(E(L).length||E(F))?Te():Ke()||ue(te,!0),he()}const se=(N,W)=>E(L).some(ie=>ie.kind===N&&ie.id===W),ae=N=>N?_-.35-(N-1)*b:_,oe=()=>{const N=E(L).find(de=>de.kind==="catch");if(!N)return ae(n().paddle.length);const W=Math.max(0,Math.min(1,(E(H)-N.startedTick)/N.durationTicks)),ie=Math.max(0,(W-.5)/.5);return ae(Math.max(0,n().paddle.length-1))+(ae(n().paddle.length)-ae(Math.max(0,n().paddle.length-1)))*(1-Math.pow(1-ie,3))},_e=()=>{if(!E(F)){const fe=E(L).find(Fe=>Fe.kind==="place");return n().columns.flatMap((Fe,Oe)=>Fe.flatMap((st,G)=>fe?.column===Oe&&fe.row===G?[]:[{key:`rest-${Oe}-${G}`,color:st,column:Oe,y:y+G*b,scale:1,glow:.28}]))}const N=E(H)-E(F).startedTick;if(N<T+R)return E(F).waves[0].before.flatMap((Fe,Oe)=>Fe.map((st,G)=>({key:`form-${Oe}-${G}`,color:st,column:Oe,y:y+G*b,scale:Oe===E(F)?.column&&G===E(F).placedRow&&N<T?0:1,glow:.28})));const W=N-T-R,ie=Math.min(E(F).waves.length-1,Math.floor(W/(I+z))),de=W%(I+z),$=E(F).waves[ie],J=new Set($.cells.map(fe=>`${fe.column}:${fe.row}`));if(de<I){const fe=de/I,Fe=1+.18*Math.sin(Math.PI*Math.min(1,fe*2)),Oe=fe<.55?Fe:Math.max(.05,1-(fe-.55)/.45);return $.before.flatMap((st,G)=>st.map((Se,ee)=>({key:`burst-${ie}-${G}-${ee}`,color:Se,column:G,y:y+ee*b,scale:J.has(`${G}:${ee}`)?Oe:1,glow:J.has(`${G}:${ee}`)?1:.28})))}const ve=(de-I)/z,Ge=ve*ve*(3-2*ve),pe=[];for(let fe=0;fe<5;fe++){let Fe=0;for(let Oe=0;Oe<$.before[fe].length;Oe++)J.has(`${fe}:${Oe}`)||(pe.push({key:`fall-${ie}-${fe}-${Oe}`,color:$.before[fe][Oe],column:fe,y:y+(Oe+(Fe-Oe)*Ge)*b,scale:1,glow:.28}),Fe++)}return pe},Me=()=>{if(!E(F))return"";const N=E(H)-E(F).startedTick;return N<T?"placing":N<T+R?"settled":(N-T-R)%(I+z)<I?"burst":"fall"},Qe=N=>{const W=Math.max(0,Math.min(1,(E(H)-N.startedTick)/N.durationTicks)),ie=1-Math.pow(1-W,3);if(N.kind==="miss"){const pe=x(E(t));return{position:[u(N.lane),pe.y-4.8*W*W,pe.z+2.8*W],rotation:[N.roll+8*W,0,.7*W]}}if(N.kind==="catch"){const pe=x(E(t)),fe=pe.y+(_-pe.y)*ie+.16*Math.sin(Math.PI*W),Fe=ge(N.roll);return{position:[u(N.lane),fe,pe.z+(m-pe.z)*ie],rotation:[N.roll+(Fe-N.roll)*ie,0,0]}}const de=.46,$=N.column??N.lane,J=N.row??0;if(W<de){const pe=W/de;return{position:[u(N.lane)+(u($)-u(N.lane))*pe,_+.2*Math.sin(Math.PI*pe),m+(w-m)*pe],rotation:[Math.PI*pe,0,0]}}const ve=(W-de)/(1-de),Ge=ve*ve;return{position:[u($),_+(y+J*b-_)*Ge,w],rotation:[Math.PI,0,0]}};zt(()=>xe(n()),()=>{ue(t,t_(n().level).travel)}),zt(()=>xe(n()),()=>{n(),Ne()}),zt(()=>(xe(n()),E(L),E(F),E(H)),()=>{n(),E(L),E(F),E(H),ue(k,_e())}),zt(()=>(xe(n()),E(F),E(H)),()=>{n(),E(F),E(H),ue(U,Me())}),Fi(),ns();var be=zR();let ye;var Pe=Lt(be);lC(Pe,{dpr:[1,2],children:(N,W)=>{var ie=NR(),de=an(ie);Zm(de,()=>E(c),$e=>{xt.PerspectiveCamera($e,{makeDefault:!0,position:[0,6.1,12.4],rotation:[-.58,0,0],fov:43})});var $=tt(de);{var J=$e=>{aR($e,{enableDamping:!0,target:[0,-.35,.7]})};pn($,$e=>{a()&&E(c)&&$e(J)})}var ve=tt($,2);xt.Color(ve,{attach:"background",args:["#05050a"]});var Ge=tt(ve);xt.AmbientLight(Ge,{intensity:.72});var pe=tt(Ge);xt.DirectionalLight(pe,{position:[5,10,7],intensity:4,color:"#fff0dd",castShadow:!0});var fe=tt(pe);xt.DirectionalLight(fe,{position:[-8,5,-5],intensity:3,color:"#cceeff"});var Fe=tt(fe);xt.SpotLight(Fe,{position:[0,8,-5],intensity:10,color:"#00ffcc",angle:.5,penumbra:.5,decay:0,distance:20});var Oe=tt(Fe,2);xt.Mesh(Oe,{rotation:[.13,0,0],position:[0,.72,-.52],receiveShadow:!0,children:($e,ht)=>{var ft=Br(),Xt=an(ft);xt.BoxGeometry(Xt,{args:[6.3,.18,8.35]});var vn=tt(Xt);xt.MeshStandardMaterial(vn,{color:"#11182b",metalness:.28,roughness:.38}),lt($e,ft)},$$slots:{default:!0}});var st=tt(Oe,2);Dn(st,0,()=>Array(6),ai,($e,ht,ft)=>{xt.Mesh($e,{rotation:[.13,0,0],position:[(ft-2.5)*1.15,.83,-.52],children:(Xt,vn)=>{var Bn=Br(),$n=an(Bn);xt.BoxGeometry($n,{args:[.035,.035,8.2]});var zi=tt($n);xt.MeshBasicMaterial(zi,{color:"#2c4777"}),lt(Xt,Bn)},$$slots:{default:!0}})});var G=tt(st,2);Dn(G,1,()=>(xe(n()),Ce(()=>n().ramp)),$e=>$e.id,($e,ht)=>{const ft=$i(()=>(E(ht),Ce(()=>x(E(ht).progress,E(ht).returning))));{let Xt=$i(()=>(E(ht),xe(E(ft)),Ce(()=>[u(E(ht).lane),E(ft).y,E(ft).z]))),vn=$i(()=>(xe(E(ft)),Ce(()=>[E(ft).roll,0,0])));El($e,{get color(){return E(ht),Ce(()=>E(ht).color)},get position(){return E(Xt)},get rotation(){return E(vn)}})}});var Se=tt(G,2);xt.Mesh(Se,{position:[0,M,5.35],receiveShadow:!0,children:($e,ht)=>{var ft=Br(),Xt=an(ft);xt.BoxGeometry(Xt,{args:[6.3,.18,1.45]});var vn=tt(Xt);xt.MeshStandardMaterial(vn,{color:"#0b1020",metalness:.22,roughness:.42}),lt($e,ft)},$$slots:{default:!0}});var ee=tt(Se,2);Dn(ee,0,()=>Array(6),ai,($e,ht,ft)=>{xt.Mesh($e,{position:[(ft-2.5)*1.15,M+.105,5.35],children:(Xt,vn)=>{var Bn=Br(),$n=an(Bn);xt.BoxGeometry($n,{args:[.025,.025,1.32]});var zi=tt($n);xt.MeshBasicMaterial(zi,{color:"#263d68"}),lt(Xt,Bn)},$$slots:{default:!0}})});var Ee=tt(ee,2);xt.Mesh(Ee,{position:[0,M+.105,4.68],children:($e,ht)=>{var ft=Br(),Xt=an(ft);xt.BoxGeometry(Xt,{args:[5.75,.025,.035]});var vn=tt(Xt);xt.MeshBasicMaterial(vn,{color:"#263d68"}),lt($e,ft)},$$slots:{default:!0}});var Ie=tt(Ee);xt.Mesh(Ie,{position:[0,M+.105,6.02],children:($e,ht)=>{var ft=Br(),Xt=an(ft);xt.BoxGeometry(Xt,{args:[5.75,.025,.035]});var vn=tt(Xt);xt.MeshBasicMaterial(vn,{color:"#263d68"}),lt($e,ft)},$$slots:{default:!0}});var ce=tt(Ie,2);Dn(ce,1,()=>E(k),$e=>$e.key,($e,ht)=>{var ft=$r(),Xt=an(ft);{var vn=Bn=>{{let $n=$i(()=>(E(ht),Ce(()=>[u(E(ht).column),E(ht).y,w])));El(Bn,{get color(){return E(ht),Ce(()=>E(ht).color)},get position(){return E($n)},get scale(){return E(ht),Ce(()=>E(ht).scale)},get glow(){return E(ht),Ce(()=>E(ht).glow)}})}};pn(Xt,Bn=>{E(ht),Ce(()=>E(ht).scale>0)&&Bn(vn)})}lt($e,ft)});var qe=tt(ce,2);{let $e=$i(()=>(xe(n()),Ce(()=>[u(n().paddleLane),oe(),m])));PR(qe,{get position(){return E($e)}})}var He=tt(qe,2);Dn(He,1,()=>(xe(n()),Ce(()=>n().paddle)),ai,($e,ht,ft)=>{var Xt=$r(),vn=an(Xt);{var Bn=zi=>{{let Co=$i(()=>(xe(n()),Ce(()=>[u(n().paddleLane),_-(n().paddle.length-1-ft)*b,m])));El(zi,{get color(){return E(ht),Ce(()=>E(ht).color)},get position(){return E(Co)}})}},$n=tn(()=>(E(ht),Ce(()=>!se("catch",E(ht).id))));pn(vn,zi=>{E($n)&&zi(Bn)})}lt($e,Xt)});var Wt=tt(He,2);Dn(Wt,1,()=>E(L),$e=>$e.kind+$e.id,($e,ht)=>{const ft=$i(()=>(E(ht),Ce(()=>Qe(E(ht)))));El($e,{get color(){return E(ht),Ce(()=>E(ht).color)},get position(){return xe(E(ft)),Ce(()=>E(ft).position)},get rotation(){return xe(E(ft)),Ce(()=>E(ft).rotation)}})}),lt(N,ie)},$$slots:{default:!0}});var V=tt(Pe,2);{var At=N=>{var W=FR();Dn(W,4,()=>Array(5),ai,(ie,de,$)=>{var J=OR();et(J,"aria-label",`Catch lane ${$+1}`),_i("pointerdown",J,Ym(()=>a()?.($))),lt(ie,J)}),bt(W),lt(N,W)};pn(V,N=>{a()&&!E(c)&&N(At)})}var gt=tt(V);{var D=N=>{var W=kR();let ie;var de=Lt(W,!0);bt(W),Jt(()=>{ie=si(W,1,"inspect svelte-1y6lvup",null,ie,{active:E(c)}),et(W,"aria-label",E(c)?"Exit orbit view":"Inspect scene in orbit view"),et(W,"aria-pressed",E(c)),oi(de,E(c)?"EXIT ORBIT":"ORBIT VIEW")}),_i("click",W,()=>ue(c,!E(c))),lt(N,W)};pn(gt,N=>{a()&&N(D)})}var S=tt(gt);{var q=N=>{var W=BR(),ie=Lt(W,!0);bt(W),Jt(de=>oi(ie,de),[()=>(xe(n()),Ce(()=>Math.max(1,Math.ceil(n().countdown/60))))]),lt(N,W)};pn(S,N=>{xe(n()),Ce(()=>n().phase==="countdown")&&N(q)})}bt(be),Jt((N,W,ie,de,$)=>{ye=si(be,1,"scene svelte-1y6lvup",null,ye,{compact:s()}),et(be,"aria-label",r()),et(be,"data-tick",(xe(n()),Ce(()=>n().tick))),et(be,"data-phase",(xe(n()),Ce(()=>n().phase))),et(be,"data-resolution-phase",E(U)),et(be,"data-terminal-presentation",E(te)?"complete":"playing"),et(be,"data-paddle-lane",(xe(n()),Ce(()=>n().paddleLane))),et(be,"data-paddle-count",(xe(n()),Ce(()=>n().paddle.length))),et(be,"data-paddle-y",N),et(be,"data-ramp-count",(xe(n()),Ce(()=>n().ramp.length))),et(be,"data-leading-lane",(xe(n()),Ce(()=>n().ramp[0]?.lane??""))),et(be,"data-leading-color",(xe(n()),Ce(()=>n().ramp[0]?.color??""))),et(be,"data-leading-progress",(xe(n()),Ce(()=>n().ramp[0]?.progress??""))),et(be,"data-leading-roll",W),et(be,"data-column-counts",ie),et(be,"data-rendered-board-count",(E(k),Ce(()=>E(k).length))),et(be,"data-misses",(xe(n()),Ce(()=>n().misses))),et(be,"data-visual-transitions",de),et(be,"data-visual-progress",$),et(be,"data-score",(xe(n()),Ce(()=>n().score)))},[()=>Ce(oe),()=>(xe(n()),Ce(()=>n().ramp[0]?x(n().ramp[0].progress,n().ramp[0].returning).roll:"")),()=>(xe(n()),Ce(()=>n().columns.map(N=>N.length).join(","))),()=>(E(L),Ce(()=>E(L).map(N=>N.kind).join(","))),()=>(E(L),E(H),Ce(()=>E(L)[0]?Math.floor(E(H)-E(L)[0].startedTick):""))]),lt(i,be),Sn()}function VR(i){if(!wt(i)||!St(i,["type","roomId","ruleset","rulesVersion","seed","tickRate","hostUid","audioOutput","members","players","settings","matchId","round","previousGameId","scores","serverTime"])||i.type!=="game/started"||i.ruleset!=="stax"||i.rulesVersion!=="stax/1"||i.tickRate!==60||!It(i.seed,0,4294967295)||!It(i.round,0,2)||!yt(i.matchId)||!yt(i.hostUid)||!yt(i.roomId)||!ki(i.serverTime)||!wt(i.members)||!wt(i.players)||!wt(i.scores)||!wt(i.settings)||!St(i.settings,["width","height","targetWins","matchRounds"])||i.settings.width!==5||i.settings.height!==5||i.settings.targetWins!==3||i.settings.matchRounds!==3||i.previousGameId!==void 0&&!yt(i.previousGameId)||i.audioOutput!=="cast"&&i.audioOutput!=="controllers")throw new Error("Invalid Stax start record.");const e=i.members,t=i.players,n=i.scores,s=Object.keys(t);if(s.length<1||s.length>4||!Object.entries(e).every(([r,a])=>yt(r)&&a===!0)||!Object.entries(t).every(([r,a])=>yt(r)&&e[r]===!0&&wt(a)&&St(a,["seat","level"])&&It(a.seat,0,3)&&It(a.level,0,20))||!St(n,s)||!s.every(r=>It(n[r],0,12)))throw new Error("Invalid Stax roster or scores.");return i}function gv(i){if(!wt(i)||!St(i,["type","playerId","tick","result","score","misses","seat","stateHash","serverTime"])||i.type!=="player/terminal"||!yt(i.playerId)||!It(i.tick,0)||!["cleared","lost"].includes(String(i.result))||!It(i.score,0,1e9)||!It(i.misses,0,5)||!It(i.seat,0,3)||typeof i.stateHash!="string"||!/^s1-[0-9a-f]{8}$/.test(i.stateHash)||!ki(i.serverTime))throw new Error("Invalid Stax terminal record.");return i}function GR(i,e,t=!1){const n=md(i,e,t),s=wt(n.payload)?n.payload:{};if(n.type==="input/move"&&St(s,["dx"])&&(s.dx===-1||s.dx===1))return{commandId:i,...n,type:n.type,payload:{dx:s.dx}};if(["input/place","input/throw-back","input/accelerate-start","input/accelerate-end","input/restart"].includes(n.type)&&St(s,[]))return{commandId:i,...n,type:n.type,payload:{}};if(n.type==="progress/tick"&&St(s,["phase","stateHash"])&&["countdown","playing","cleared","lost"].includes(String(s.phase))&&typeof s.stateHash=="string"&&/^s1-[0-9a-f]{8}$/.test(s.stateHash))return{commandId:i,...n,type:n.type,payload:{phase:s.phase,stateHash:s.stateHash}};throw new Error("Invalid Stax controller payload.")}const sa=VR,Ec=GR,vv=(i,e)=>n_(i.seed,e),_v=s_,yv=i_,xv=$m,HR=(i,e,t,n)=>r_(i,e,t,n);async function TI(i){if(!me)throw new Error("Firebase unavailable.");return sa((await Tt(Ue(me,`games/${i}/start`))).val())}function WR(i,e,t){if(!me)throw new Error("Firebase unavailable.");let n,s=[],r=[];const a=[],o=()=>{n&&e(mv(Object.keys(n.players),n.scores??{},s,r,n.round))};return Tt(Ue(me,`games/${i}/start`)).then(l=>{n=sa(l.val()),a.push(hi(Ue(me,`games/${i}/terminals`),c=>{s=[],c.forEach(u=>{const d=gv(u.val());d.playerId===u.key&&Object.hasOwn(n.players,u.key)&&s.push(d)}),o()},t),hi(Ue(me,`games/${i}/rematch/ready`),c=>{r=[],c.forEach(u=>{u.val()?.playerId===u.key&&Object.hasOwn(n.players,u.key)&&r.push(u.key)}),o()},t)),o()}).catch(l=>t(l instanceof Error?l:new Error(String(l)))),()=>a.forEach(l=>l())}const EI=(i,e)=>Lc(i,e);async function XR(i){if(!me)throw new Error("Firebase unavailable.");const[e,t]=await Promise.all([Tt(Ue(me,`games/${i}/start`)),Tt(Ue(me,`games/${i}/terminals`))]),n=sa(e.val()),s=[];t.forEach(a=>{s.push(gv(a.val()))});const r=mv(Object.keys(n.players),n.scores,s,[],n.round);return Uc(i,sa,a=>{const o=Object.fromEntries(Object.keys(a.players).map(c=>[c,r.scores[c]??0])),l=r.matchComplete;return{advance:!l,scores:l?Object.fromEntries(Object.keys(a.players).map(c=>[c,0])):o}})}function AI(i,e){if(!ci?.currentUser||!me)throw new Error("Firebase unavailable.");const t=ci.currentUser.uid,n=new As(qm.tickRate),s=vd("stax",i,t,"outbox");let r,a,o=0,l=0,c=!1,u=!1,d=!1,h=!1,f=0,p=-1,v,g,m,_=!1,b=[],y=()=>{},w=!1;const M=_o(localStorage,s,O=>{if(!O||typeof O!="object"||typeof O.commandId!="string")throw new Error("Invalid Stax Match outbox.");const{commandId:B,...H}=O;return Ec(B,H,!0)}),C=O=>e({playerId:t,tick:o,ready:c,state:r?structuredClone(r):void 0,lifecycle:m,audioOutput:g,error:O,lastCommand:v,ownershipConflict:_,opponents:b.map(B=>({...B,state:structuredClone(B.state)}))}),x=new Nc(me,`games/${i}/players/${t}/writer`,()=>{_=!0,c=!1,cancelAnimationFrame(f),C("This controller was taken over by another tab.")}),T=WR(i,O=>{m=O,O.finished&&cancelAnimationFrame(f),O.allReady&&!h&&(h=!0,XR(i).catch(B=>{h=!1,C(B instanceof Error?B.message:String(B))})),C()},O=>C(O.message)),R=new Wa({initial:M,order:(O,B)=>O.clientSeq-B.clientSeq,identify:O=>O.commandId,persist:O=>yo(localStorage,s,O),deliver:async O=>{if(!c)throw new Error("Controller is not ready.");const{commandId:B,...H}=O;await An(Ue(me,`games/${i}/players/${t}/records/${B}`),{...H,serverTime:Cn()})},failed:O=>C(O instanceof Error?O.message:String(O))}),I=O=>{const H={commandId:Yr(Ue(me,`games/${i}/players/${t}/records`)).key,playerId:t,epochId:x.epochId,clientSeq:++l,tick:o,...O};return R.enqueue(H),H},z=(O=!1)=>{!r||!O&&o-p<15||(I({type:"progress/tick",payload:{phase:r.phase,stateHash:xv(r)}}),p=o)},L=()=>{!r||w||!["cleared","lost"].includes(r.phase)||!a||(w=!0,An(Ue(me,`games/${i}/terminals/${t}`),{type:"player/terminal",playerId:t,tick:r.tick,result:r.phase,score:r.score,misses:r.misses,seat:a.players[t].seat,stateHash:$m(r),serverTime:Cn()}).catch(O=>{w=!1,C(O.message)}))},F=O=>{if(u||d||!c||!r||r.phase==="cleared"||r.phase==="lost"||m?.terminalPlayerIds.includes(t))return;for(let H=n.consume(O);H>0;H--)_v(r),o=r.tick;z();const B=r.phase;if(B==="cleared"||B==="lost"){z(!0),C();return}C(),f=requestAnimationFrame(F)},k=hi(Ue(me,`games/${i}/start`),async O=>{if(!c)try{if(a=sa(O.val()),!a.players[t])throw new Error("Player is not part of this Stax Match game.");if(g=a.audioOutput,!await x.claim())throw _=!0,new Error("This controller is already active in another tab.");_=!1,y(),y=qR(i,j=>{b=j.filter(te=>te.playerId!==t),C()},j=>C(j.message));const B=await Tt(Ue(me,`games/${i}/players/${t}/records`)),H=new Map;B.forEach(j=>{const te=Ec(j.key,j.val());H.set(te.commandId,te)});for(const j of R.values())H.set(j.commandId,j);const ne=[...H.values()].sort((j,te)=>j.clientSeq-te.clientSeq);r=HR(vv(a,a.players[t].level),Math.max(0,...ne.map(j=>j.tick)),ne,a.seed),o=r.tick,l=Math.max(0,...ne.map(j=>j.clientSeq)),await An(Ue(me,`games/${i}/players/${t}/epochs/${x.epochId}`),{clientId:x.clientId,startedFromTick:o,startedFromCommandSeq:l,serverTime:Cn()}),c=!0,R.flush(),z(!0),C(),r.phase==="cleared"||r.phase==="lost"?L():f=requestAnimationFrame(F)}catch(B){C(B instanceof Error?B.message:String(B))}},O=>C(O.message)),U=()=>{R.flush()};return window.addEventListener("online",U),{command(O){!c||!r||r.phase!=="playing"||!a||(I(O),yv(r,O,a.seed),o=r.tick,v=`${O.type} · tick ${o}`,(r.phase==="cleared"||r.phase==="lost")&&z(!0),C())},suspend(){!c||d||(d=!0,cancelAnimationFrame(f),n.reset(),z(!0))},resume(){!c||!d||(d=!1,n.reset(),f=requestAnimationFrame(F))},async takeOver(){await x.takeOver()&&(_=!1,c=!0,d=!1,R.flush(),f=requestAnimationFrame(F),C())},destroy(){z(!0),u=!0,k(),T(),y(),cancelAnimationFrame(f),window.removeEventListener("online",U),R.destroy(),x.release()},finishPresentation(){L()}}}function qR(i,e,t){if(!me)throw new Error("Firebase unavailable.");let n=!1,s=0,r;const a=new As(qm.tickRate),o=new Map,l=new Map,c=[],u={clone:h=>structuredClone(h),tick:h=>h.tick,advanceTo:(h,f)=>{for(;h.tick<f&&h.phase!=="cleared"&&h.phase!=="lost";)_v(h)},apply:(h,f)=>{f.type!=="progress/tick"&&yv(h,f,r.seed)},hash:xv,phase:h=>h.phase,terminal:h=>h.phase==="cleared"||h.phase==="lost",progress:h=>h.type==="progress/tick"?h.payload:void 0},d=()=>e([...l].map(([h,f])=>{const p=f.snapshot();return{playerId:h,tick:p.displayTick,controllerTick:p.controllerTick,lag:p.lag,state:p.state,hashMatches:p.hashMatches}}));return Tt(Ue(me,`games/${i}/start`)).then(async h=>{r=sa(h.val());let f=0;if(await Promise.all(Object.keys(r.players).map(async v=>{const g=await Tt(Ue(me,`games/${i}/players/${v}/records`)),m=[];g.forEach(_=>{m.push(Ec(_.key,_.val()))}),m.sort((_,b)=>_.clientSeq-b.clientSeq),o.set(v,m);for(const _ of m)_.type==="progress/tick"&&(f=Math.max(f,_.tick))})),n)return;for(const v of Object.keys(r.players)){const g=new Dc(u,vv(r,r.players[v].level),f);l.set(v,g);for(const m of o.get(v)??[])g.receive(m);c.push(is(Ue(me,`games/${i}/players/${v}/records`),m=>{try{g.receive(Ec(m.key,m.val())),d()}catch(_){t(_ instanceof Error?_:new Error(String(_)))}},t))}const p=v=>{if(!n){for(let g=a.consume(v);g>0;g--)for(const m of l.values())m.advance();d(),s=requestAnimationFrame(p)}};d(),s=requestAnimationFrame(p)}).catch(h=>t(h instanceof Error?h:new Error(String(h)))),()=>{n=!0,cancelAnimationFrame(s),c.forEach(h=>h())}}export{mI as C,iI as G,sI as M,aI as P,pI as Q,yI as S,hI as T,oI as a,rI as b,xy as c,_y as d,cI as e,gI as f,C_ as g,Vy as h,By as i,fI as j,TI as k,qR as l,WR as m,wI as n,lI as o,dI as p,_I as q,uI as r,cy as s,vI as t,AI as u,EI as v};
