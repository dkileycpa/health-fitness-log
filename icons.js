(()=>{var _=Object.create;var U=Object.defineProperty;var j=Object.getOwnPropertyDescriptor;var Y=Object.getOwnPropertyNames;var $=Object.getPrototypeOf,aa=Object.prototype.hasOwnProperty;var ea=(e,a)=>()=>{try{return a||e((a={exports:{}}).exports,a),a.exports}catch(u){throw a=0,u}};var ta=(e,a,u,o)=>{if(a&&typeof a=="object"||typeof a=="function")for(let d of Y(a))!aa.call(e,d)&&d!==u&&U(e,d,{get:()=>a[d],enumerable:!(o=j(a,d))||o.enumerable});return e};var D=(e,a,u)=>(u=e!=null?_($(e)):{},ta(a||!e||!e.__esModule?U(u,"default",{value:e,enumerable:!0}):u,e));var P=ea((ha,O)=>{O.exports=window.React});var B=D(P(),1);var w=(...e)=>e.filter((a,u,o)=>!!a&&a.trim()!==""&&o.indexOf(a)===u).join(" ").trim();var H=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var v=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,u,o)=>o?o.toUpperCase():u.toLowerCase());var F=e=>{let a=v(e);return a.charAt(0).toUpperCase()+a.slice(1)};var r=D(P(),1);var A={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var G=e=>{for(let a in e)if(a.startsWith("aria-")||a==="role"||a==="title")return!0;return!1};var f=D(P(),1);var ua=(0,f.createContext)({});var W=()=>(0,f.useContext)(ua);var V=(0,r.forwardRef)(({color:e,size:a,strokeWidth:u,absoluteStrokeWidth:o,className:d="",children:l,iconNode:E,...R},X)=>{var q,y,b;let{size:M=24,strokeWidth:T=2,absoluteStrokeWidth:z=!1,color:N="currentColor",className:K=""}=(q=W())!=null?q:{},Z=(o!=null?o:z)?Number(u!=null?u:T)*24/Number(a!=null?a:M):u!=null?u:T;return(0,r.createElement)("svg",{ref:X,...A,width:(y=a!=null?a:M)!=null?y:A.width,height:(b=a!=null?a:M)!=null?b:A.height,stroke:e!=null?e:N,strokeWidth:Z,className:w("lucide",K,d),...!l&&!G(R)&&{"aria-hidden":"true"},...R},[...E.map(([Q,J])=>(0,r.createElement)(Q,J)),...Array.isArray(l)?l:[l]])});var t=(e,a)=>{let u=(0,B.forwardRef)(({className:o,...d},l)=>(0,B.createElement)(V,{ref:l,iconNode:a,className:w(`lucide-${H(F(e))}`,`lucide-${e}`,o),...d}));return u.displayName=F(e),u};var oa=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],s=t("check",oa);var da=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],i=t("chevron-down",da);var la=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],c=t("chevron-left",la);var fa=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],n=t("chevron-right",fa);var ra=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],p=t("chevron-up",ra);var sa=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],L=t("eye-off",sa);var ia=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],m=t("eye",ia);var ca=[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}]],I=t("list-checks",ca);var na=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],x=t("pencil",na);var pa=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],C=t("plus",pa);var La=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],h=t("rotate-ccw",La);var ma=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],S=t("timer",ma);var Ia=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],g=t("trash-2",Ia);var xa=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],k=t("x",xa);window.LucideIcons={ChevronUp:p,ChevronDown:i,ChevronLeft:c,ChevronRight:n,Pencil:x,Trash2:g,Eye:m,EyeOff:L,Plus:C,Check:s,X:k,Timer:S,ListChecks:I,RotateCcw:h};})();
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
lucide-react/dist/esm/icons/list-checks.mjs:
lucide-react/dist/esm/icons/pencil.mjs:
lucide-react/dist/esm/icons/plus.mjs:
lucide-react/dist/esm/icons/rotate-ccw.mjs:
lucide-react/dist/esm/icons/timer.mjs:
lucide-react/dist/esm/icons/trash-2.mjs:
lucide-react/dist/esm/icons/x.mjs:
lucide-react/dist/esm/lucide-react.mjs:
  (**
   * @license lucide-react v1.28.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
