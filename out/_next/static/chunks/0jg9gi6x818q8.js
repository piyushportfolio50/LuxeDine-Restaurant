(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return o}});let o=e=>{}},18967,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={DecodeError:function(){return h},MiddlewareNotFoundError:function(){return w},MissingStaticPage:function(){return x},NormalizeError:function(){return b},PageNotFoundError:function(){return v},SP:function(){return g},ST:function(){return y},WEB_VITALS:function(){return i},execOnce:function(){return n},getDisplayName:function(){return d},getLocationOrigin:function(){return u},getURL:function(){return c},isAbsoluteUrl:function(){return l},isResSent:function(){return f},loadGetInitialProps:function(){return m},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return E}};for(var a in o)Object.defineProperty(r,a,{enumerable:!0,get:o[a]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return(...o)=>(r||(r=!0,t=e(...o)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function u(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function c(){let{href:e}=window.location,t=u();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function m(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await m(t.Component,t.ctx)}:{};let o=await e.getInitialProps(t);if(r&&f(r))return o;if(!o)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${o}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return o}let g="u">typeof performance,y=g&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class b extends Error{}class v extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class x extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class w extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function E(e){return JSON.stringify({message:e.message,stack:e.stack})}},98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={assign:function(){return l},searchParamsToUrlQuery:function(){return i},urlQueryToSearchParams:function(){return s}};for(var a in o)Object.defineProperty(r,a,{enumerable:!0,get:o[a]});function i(e){let t={};for(let[r,o]of e.entries()){let e=t[r];void 0===e?t[r]=o:Array.isArray(e)?e.push(o):t[r]=[e,o]}return t}function n(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let t=new URLSearchParams;for(let[r,o]of Object.entries(e))if(Array.isArray(o))for(let e of o)t.append(r,n(e));else t.set(r,n(o));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,o]of r.entries())e.append(t,o)}return e}},97815,e=>{"use strict";var t=e.i(43476),r=e.i(71645);let o=(0,r.createContext)(void 0);e.s(["AuthProvider",0,function({children:e}){let[a,i]=(0,r.useState)(null),[n,s]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=localStorage.getItem("luxedine_user");if(e)try{i(JSON.parse(e))}catch{i(null)}s(!0)},[]),(0,r.useEffect)(()=>{n&&(a?localStorage.setItem("luxedine_user",JSON.stringify(a)):localStorage.removeItem("luxedine_user"))},[a,n]),(0,t.jsx)(o.Provider,{value:{user:a,login:(e,t)=>{i({name:e,email:t})},logout:()=>{i(null)}},children:e})},"useAuth",0,function(){let e=(0,r.useContext)(o);if(void 0===e)throw Error("useAuth must be used within an AuthProvider");return e}])},42258,e=>{"use strict";var t=e.i(43476),r=e.i(71645);let o=(0,r.createContext)(void 0);e.s(["CartProvider",0,function({children:e}){let[a,i]=(0,r.useState)([]),[n,s]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let e=localStorage.getItem("luxedine_cart");if(e)try{i(JSON.parse(e))}catch{i([])}s(!0)},[]),(0,r.useEffect)(()=>{n&&localStorage.setItem("luxedine_cart",JSON.stringify(a))},[a,n]);let l=a.reduce((e,t)=>e+t.quantity,0),u=a.reduce((e,t)=>e+t.price*t.quantity,0);return(0,t.jsx)(o.Provider,{value:{cartItems:a,addToCart:e=>{i(t=>t.find(t=>t.id===e.id)?t.map(t=>t.id===e.id?{...t,quantity:Math.min(20,t.quantity+1)}:t):[...t,{...e,quantity:1}])},removeFromCart:e=>{i(t=>t.filter(t=>t.id!==e))},updateQuantity:(e,t)=>{i(r=>r.map(r=>r.id===e?{...r,quantity:Math.max(1,Math.min(20,r.quantity+t))}:r))},clearCart:()=>{i([])},cartCount:l,cartTotal:u},children:e})},"useCart",0,function(){let e=(0,r.useContext)(o);if(void 0===e)throw Error("useCart must be used within a CartProvider");return e}])},5766,e=>{"use strict";let t,r;var o,a=e.i(71645);let i={data:""},n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,s=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,u=(e,t)=>{let r="",o="",a="";for(let i in e){let n=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+n+";":o+="f"==i[1]?u(n,i):i+"{"+u(n,"k"==i[1]?"":t)+"}":"object"==typeof n?o+=u(n,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=n&&(i="-"==i[1]?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=u.p?u.p(i,n):i+":"+n+";")}return r+(t&&a?t+"{"+a+"}":a)+o},c={},d=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+d(e[r]);return t}return e};function f(e){let t,r,o=this||{},a=e.call?e(o.p):e;return((e,t,r,o,a)=>{var i;let f=d(e),p=c[f]||(c[f]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(f));if(!c[p]){let t=f!==e?e:(e=>{let t,r,o=[{}];for(;t=n.exec(e.replace(s,""));)t[4]?o.shift():t[3]?(r=t[3].replace(l," ").trim(),o.unshift(o[0][r]=o[0][r]||{})):o[0][t[1]]=t[2].replace(l," ").trim();return o[0]})(e);c[p]=u(a?{["@keyframes "+p]:t}:t,r?"":"."+p)}let m=r&&c.g;return r&&(c.g=c[p]),i=c[p],m?t.data=t.data.replace(m,i):-1===t.data.indexOf(i)&&(t.data=o?i+t.data:t.data+i),p})(a.unshift?a.raw?(t=[].slice.call(arguments,1),r=o.p,a.reduce((e,o,a)=>{let i=t[a];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+o+(null==i?"":i)},"")):a.reduce((e,t)=>Object.assign(e,t&&t.call?t(o.p):t),{}):a,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||i})(o.target),o.g,o.o,o.k)}f.bind({g:1});let p,m,g,y=f.bind({k:1});function h(e,t){let r=this||{};return function(){let o=arguments;function a(i,n){let s=Object.assign({},i),l=s.className||a.className;r.p=Object.assign({theme:m&&m()},s),r.o=/go\d/.test(l),s.className=f.apply(r,o)+(l?" "+l:""),t&&(s.ref=n);let u=e;return e[0]&&(u=s.as||e,delete s.as),g&&u[0]&&g(s),p(u,s)}return t?t(a):a}}var b=(e,t)=>"function"==typeof e?e(t):e,v=(t=0,()=>(++t).toString()),x=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},w="default",E=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:o}=t;return E(e,{type:+!!e.toasts.find(e=>e.id===o.id),toast:o});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},P=[],C={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},O={},N=(e,t=w)=>{O[t]=E(O[t]||C,e),P.forEach(([e,r])=>{e===t&&r(O[t])})},S=e=>Object.keys(O).forEach(t=>N(e,t)),k=(e=w)=>t=>{N(t,e)},$={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},j=(e={},t=w)=>{let[r,o]=(0,a.useState)(O[t]||C),i=(0,a.useRef)(O[t]);(0,a.useEffect)(()=>(i.current!==O[t]&&o(O[t]),P.push([t,o]),()=>{let e=P.findIndex(([e])=>e===t);e>-1&&P.splice(e,1)}),[t]);let n=r.toasts.map(t=>{var r,o,a;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(o=e[t.type])?void 0:o.duration)||(null==e?void 0:e.duration)||$[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...r,toasts:n}},I=e=>(t,r)=>{let o,a=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||v()}))(t,e,r);return k(a.toasterId||(o=a.id,Object.keys(O).find(e=>O[e].toasts.some(e=>e.id===o))))({type:2,toast:a}),a.id},A=(e,t)=>I("blank")(e,t);A.error=I("error"),A.success=I("success"),A.loading=I("loading"),A.custom=I("custom"),A.dismiss=(e,t)=>{let r={type:3,toastId:e};t?k(t)(r):S(r)},A.dismissAll=e=>A.dismiss(void 0,e),A.remove=(e,t)=>{let r={type:4,toastId:e};t?k(t)(r):S(r)},A.removeAll=e=>A.remove(void 0,e),A.promise=(e,t,r)=>{let o=A.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let a=t.success?b(t.success,e):void 0;return a?A.success(a,{id:o,...r,...null==r?void 0:r.success}):A.dismiss(o),e}).catch(e=>{let a=t.error?b(t.error,e):void 0;a?A.error(a,{id:o,...r,...null==r?void 0:r.error}):A.dismiss(o)}),e};var T=1e3,_=(e,t="default")=>{let{toasts:r,pausedAt:o}=j(e,t),i=(0,a.useRef)(new Map).current,n=(0,a.useCallback)((e,t=T)=>{if(i.has(e))return;let r=setTimeout(()=>{i.delete(e),s({type:4,toastId:e})},t);i.set(e,r)},[]);(0,a.useEffect)(()=>{if(o)return;let e=Date.now(),a=r.map(r=>{if(r.duration===1/0)return;let o=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(o<0){r.visible&&A.dismiss(r.id);return}return setTimeout(()=>A.dismiss(r.id,t),o)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[r,o,t]);let s=(0,a.useCallback)(k(t),[t]),l=(0,a.useCallback)(()=>{s({type:5,time:Date.now()})},[s]),u=(0,a.useCallback)((e,t)=>{s({type:1,toast:{id:e,height:t}})},[s]),c=(0,a.useCallback)(()=>{o&&s({type:6,time:Date.now()})},[o,s]),d=(0,a.useCallback)((e,t)=>{let{reverseOrder:o=!1,gutter:a=8,defaultPosition:i}=t||{},n=r.filter(t=>(t.position||i)===(e.position||i)&&t.height),s=n.findIndex(t=>t.id===e.id),l=n.filter((e,t)=>t<s&&e.visible).length;return n.filter(e=>e.visible).slice(...o?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+a,0)},[r]);return(0,a.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)n(e.id,e.removeDelay);else{let t=i.get(e.id);t&&(clearTimeout(t),i.delete(e.id))}})},[r,n]),{toasts:r,handlers:{updateHeight:u,startPause:l,endPause:c,calculateOffset:d}}},D=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,z=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,M=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,F=h("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${D} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${z} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${M} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,L=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,R=h("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${L} 1s linear infinite;
`,U=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,q=y`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,B=h("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${U} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${q} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,H=h("div")`
  position: absolute;
`,J=h("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Q=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Z=h("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,K=({toast:e})=>{let{icon:t,type:r,iconTheme:o}=e;return void 0!==t?"string"==typeof t?a.createElement(Z,null,t):t:"blank"===r?null:a.createElement(J,null,a.createElement(R,{...o}),"loading"!==r&&a.createElement(H,null,"error"===r?a.createElement(F,{...o}):a.createElement(B,{...o})))},V=h("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,G=h("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,W=a.memo(({toast:e,position:t,style:r,children:o})=>{let i=e.height?((e,t)=>{let r=e.includes("top")?1:-1,[o,a]=x()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*r}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*r}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${y(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},n=a.createElement(K,{toast:e}),s=a.createElement(G,{...e.ariaProps},b(e.message,e));return a.createElement(V,{className:e.className,style:{...i,...r,...e.style}},"function"==typeof o?o({icon:n,message:s}):a.createElement(a.Fragment,null,n,s))});o=a.createElement,u.p=void 0,p=o,m=void 0,g=void 0;var X=({id:e,className:t,style:r,onHeightUpdate:o,children:i})=>{let n=a.useCallback(t=>{if(t){let r=()=>{o(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return a.createElement("div",{ref:n,className:t,style:r},i)},Y=f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;e.s(["CheckmarkIcon",0,B,"ErrorIcon",0,F,"LoaderIcon",0,R,"ToastBar",0,W,"ToastIcon",0,K,"Toaster",0,({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:o,children:i,toasterId:n,containerStyle:s,containerClassName:l})=>{let{toasts:u,handlers:c}=_(r,n);return a.createElement("div",{"data-rht-toaster":n||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},u.map(r=>{let n,s,l=r.position||t,u=c.calculateOffset(r,{reverseOrder:e,gutter:o,defaultPosition:t}),d=(n=l.includes("top"),s=l.includes("center")?{justifyContent:"center"}:l.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:x()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${u*(n?1:-1)}px)`,...n?{top:0}:{bottom:0},...s});return a.createElement(X,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?Y:"",style:d},"custom"===r.type?b(r.message,r):i?i(r):a.createElement(W,{toast:r,position:l}))}))},"default",0,A,"resolveValue",0,b,"toast",0,A,"useToaster",0,_,"useToasterStore",0,j],5766)}]);