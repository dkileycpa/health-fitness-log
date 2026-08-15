(()=>{var ea=Object.create;var W=Object.defineProperty;var ta=Object.getOwnPropertyDescriptor;var ua=Object.getOwnPropertyNames;var oa=Object.getPrototypeOf,da=Object.prototype.hasOwnProperty;var la=(t,a)=>()=>{try{return a||t((a={exports:{}}).exports,a),a.exports}catch(u){throw a=0,u}};var fa=(t,a,u,o)=>{if(a&&typeof a=="object"||typeof a=="function")for(let d of ua(a))!da.call(t,d)&&d!==u&&W(t,d,{get:()=>a[d],enumerable:!(o=ta(a,d))||o.enumerable});return t};var q=(t,a,u)=>(u=t!=null?ea(oa(t)):{},fa(a||!t||!t.__esModule?W(u,"default",{value:t,enumerable:!0}):u,t));var D=la((Fa,V)=>{V.exports=window.React});var y=q(D(),1);var F=(...t)=>t.filter((a,u,o)=>!!a&&a.trim()!==""&&o.indexOf(a)===u).join(" ").trim();var E=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var X=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,u,o)=>o?o.toUpperCase():u.toLowerCase());var b=t=>{let a=X(t);return a.charAt(0).toUpperCase()+a.slice(1)};var s=q(D(),1);var R={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var z=t=>{for(let a in t)if(a.startsWith("aria-")||a==="role"||a==="title")return!0;return!1};var r=q(D(),1);var ra=(0,r.createContext)({});var N=()=>(0,r.useContext)(ra);var K=(0,s.forwardRef)(({color:t,size:a,strokeWidth:u,absoluteStrokeWidth:o,className:d="",children:f,iconNode:Z,...U},Q)=>{var v,H,G;let{size:T=24,strokeWidth:O=2,absoluteStrokeWidth:J=!1,color:_="currentColor",className:j=""}=(v=N())!=null?v:{},Y=(o!=null?o:J)?Number(u!=null?u:O)*24/Number(a!=null?a:T):u!=null?u:O;return(0,s.createElement)("svg",{ref:Q,...R,width:(H=a!=null?a:T)!=null?H:R.width,height:(G=a!=null?a:T)!=null?G:R.height,stroke:t!=null?t:_,strokeWidth:Y,className:F("lucide",j,d),...!f&&!z(U)&&{"aria-hidden":"true"},...U},[...Z.map(([$,aa])=>(0,s.createElement)($,aa)),...Array.isArray(f)?f:[f]])});var e=(t,a)=>{let u=(0,y.forwardRef)(({className:o,...d},f)=>(0,y.createElement)(K,{ref:f,iconNode:a,className:F(`lucide-${E(b(t))}`,`lucide-${t}`,o),...d}));return u.displayName=b(t),u};var sa=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],i=e("check",sa);var ia=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],c=e("chevron-down",ia);var ca=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],n=e("chevron-left",ca);var na=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],p=e("chevron-right",na);var pa=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],L=e("chevron-up",pa);var La=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],m=e("eye-off",La);var ma=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],I=e("eye",ma);var Ia=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}],["path",{d:"M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"auskq0"}]],x=e("heart-pulse",Ia);var xa=[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}]],C=e("list-checks",xa);var Ca=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],h=e("pencil",Ca);var ha=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],S=e("plus",ha);var Sa=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],g=e("rotate-ccw",Sa);var ga=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],k=e("search",ga);var ka=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],P=e("settings",ka);var Pa=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],w=e("timer",Pa);var wa=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],A=e("trash-2",wa);var Aa=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],B=e("trending-up",Aa);var Ba=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],l=e("utensils",Ba);var Ma=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],M=e("x",Ma);window.LucideIcons={ChevronUp:L,ChevronDown:c,ChevronLeft:n,ChevronRight:p,Pencil:h,Trash2:A,Eye:I,EyeOff:m,Plus:S,Check:i,X:M,Timer:w,ListChecks:C,RotateCcw:g,TrendingUp:B,Settings:P,HeartPulse:x,Utensils:l,Search:k};})();
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
lucide-react/dist/esm/icons/eye-off.mjs:
lucide-react/dist/esm/icons/eye.mjs:
lucide-react/dist/esm/icons/heart-pulse.mjs:
lucide-react/dist/esm/icons/list-checks.mjs:
lucide-react/dist/esm/icons/pencil.mjs:
lucide-react/dist/esm/icons/plus.mjs:
lucide-react/dist/esm/icons/rotate-ccw.mjs:
lucide-react/dist/esm/icons/search.mjs:
lucide-react/dist/esm/icons/settings.mjs:
lucide-react/dist/esm/icons/timer.mjs:
lucide-react/dist/esm/icons/trash-2.mjs:
lucide-react/dist/esm/icons/trending-up.mjs:
lucide-react/dist/esm/icons/utensils.mjs:
lucide-react/dist/esm/icons/x.mjs:
lucide-react/dist/esm/lucide-react.mjs:
  (**
   * @license lucide-react v1.28.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
