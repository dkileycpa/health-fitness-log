(()=>{var ua=Object.create;var E=Object.defineProperty;var oa=Object.getOwnPropertyDescriptor;var da=Object.getOwnPropertyNames;var la=Object.getPrototypeOf,fa=Object.prototype.hasOwnProperty;var ra=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(u){throw e=0,u}};var sa=(t,e,u,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let d of da(e))!fa.call(t,d)&&d!==u&&E(t,d,{get:()=>e[d],enumerable:!(o=oa(e,d))||o.enumerable});return t};var U=(t,e,u)=>(u=t!=null?ua(la(t)):{},sa(e||!t||!t.__esModule?E(u,"default",{value:t,enumerable:!0}):u,t));var R=ra((qa,X)=>{X.exports=window.React});var q=U(R(),1);var y=(...t)=>t.filter((e,u,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===u).join(" ").trim();var z=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var N=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,u,o)=>o?o.toUpperCase():u.toLowerCase());var O=t=>{let e=N(t);return e.charAt(0).toUpperCase()+e.slice(1)};var r=U(R(),1);var T={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var K=t=>{for(let e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};var f=U(R(),1);var ca=(0,f.createContext)({});var Z=()=>(0,f.useContext)(ca);var Q=(0,r.forwardRef)(({color:t,size:e,strokeWidth:u,absoluteStrokeWidth:o,className:d="",children:l,iconNode:_,...v},J)=>{var G,W,V;let{size:b=24,strokeWidth:H=2,absoluteStrokeWidth:j=!1,color:Y="currentColor",className:$=""}=(G=Z())!=null?G:{},aa=(o!=null?o:j)?Number(u!=null?u:H)*24/Number(e!=null?e:b):u!=null?u:H;return(0,r.createElement)("svg",{ref:J,...T,width:(W=e!=null?e:b)!=null?W:T.width,height:(V=e!=null?e:b)!=null?V:T.height,stroke:t!=null?t:Y,strokeWidth:aa,className:y("lucide",$,d),...!l&&!K(v)&&{"aria-hidden":"true"},...v},[..._.map(([ea,ta])=>(0,r.createElement)(ea,ta)),...Array.isArray(l)?l:[l]])});var a=(t,e)=>{let u=(0,q.forwardRef)(({className:o,...d},l)=>(0,q.createElement)(Q,{ref:l,iconNode:e,className:y(`lucide-${z(O(t))}`,`lucide-${t}`,o),...d}));return u.displayName=O(t),u};var ia=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],s=a("check",ia);var na=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],c=a("chevron-down",na);var pa=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],i=a("chevron-left",pa);var La=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],n=a("chevron-right",La);var ma=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],p=a("chevron-up",ma);var Ia=[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]],L=a("chevrons-up-down",Ia);var xa=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],m=a("clock",xa);var Ca=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],I=a("eye-off",Ca);var ha=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],x=a("eye",ha);var Sa=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}],["path",{d:"M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"auskq0"}]],C=a("heart-pulse",Sa);var ga=[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}]],h=a("list-checks",ga);var ka=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],S=a("moon",ka);var Pa=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],g=a("pencil",Pa);var wa=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],k=a("plus",wa);var Aa=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],P=a("rotate-ccw",Aa);var Ba=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],w=a("settings",Ba);var Ma=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],A=a("sun",Ma);var Da=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],B=a("timer",Da);var Fa=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],M=a("trash-2",Fa);var Ra=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],D=a("trending-up",Ra);var ya=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],F=a("x",ya);window.LucideIcons={ChevronUp:p,ChevronDown:c,ChevronLeft:i,ChevronRight:n,Pencil:g,Trash2:M,Eye:x,EyeOff:I,Plus:k,Check:s,X:F,Timer:B,ListChecks:h,RotateCcw:P,Clock:m,TrendingUp:D,Settings:w,HeartPulse:C,Sun:A,Moon:S,ChevronsUpDown:L};})();
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs:
lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs:
lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs:
lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs:
lucide-react/dist/esm/defaultAttributes.mjs:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs:
lucide-react/dist/esm/context.mjs:
lucide-react/dist/esm/Icon.mjs:
lucide-react/dist/esm/createLucideIcon.mjs:
lucide-react/dist/esm/icons/check.mjs:
lucide-react/dist/esm/icons/chevron-down.mjs:
lucide-react/dist/esm/icons/chevron-left.mjs:
lucide-react/dist/esm/icons/chevron-right.mjs:
lucide-react/dist/esm/icons/chevron-up.mjs:
lucide-react/dist/esm/icons/chevrons-up-down.mjs:
lucide-react/dist/esm/icons/clock.mjs:
lucide-react/dist/esm/icons/eye-off.mjs:
lucide-react/dist/esm/icons/eye.mjs:
lucide-react/dist/esm/icons/heart-pulse.mjs:
lucide-react/dist/esm/icons/list-checks.mjs:
lucide-react/dist/esm/icons/moon.mjs:
lucide-react/dist/esm/icons/pencil.mjs:
lucide-react/dist/esm/icons/plus.mjs:
lucide-react/dist/esm/icons/rotate-ccw.mjs:
lucide-react/dist/esm/icons/settings.mjs:
lucide-react/dist/esm/icons/sun.mjs:
lucide-react/dist/esm/icons/timer.mjs:
lucide-react/dist/esm/icons/trash-2.mjs:
lucide-react/dist/esm/icons/trending-up.mjs:
lucide-react/dist/esm/icons/x.mjs:
lucide-react/dist/esm/lucide-react.mjs:
  (**
   * @license lucide-react v1.28.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
